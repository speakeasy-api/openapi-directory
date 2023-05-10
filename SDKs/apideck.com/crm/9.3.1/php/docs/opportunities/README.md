# opportunities

### Available Operations

* [opportunitiesAdd](#opportunitiesadd) - Create opportunity
* [opportunitiesAll](#opportunitiesall) - List opportunities
* [opportunitiesDelete](#opportunitiesdelete) - Delete opportunity
* [opportunitiesOne](#opportunitiesone) - Get opportunity
* [opportunitiesUpdate](#opportunitiesupdate) - Update opportunity

## opportunitiesAdd

Create opportunity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OpportunitiesAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\OpportunityInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomField;
use \OpenAPI\OpenAPI\Models\Operations\OpportunitiesAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OpportunitiesAddRequest();
    $request->opportunityInput = new OpportunityInput();
    $request->opportunityInput->closeDate = DateTime::createFromFormat('Y-m-d', '2020-10-30');
    $request->opportunityInput->companyId = '12345';
    $request->opportunityInput->companyName = 'Copper';
    $request->opportunityInput->contactId = '12345';
    $request->opportunityInput->contactIds = [
        '12345',
        '12345',
        '12345',
        '12345',
    ];
    $request->opportunityInput->currency = CurrencyEnum::USD;
    $request->opportunityInput->customFields = [
        new CustomField(),
        new CustomField(),
        new CustomField(),
        new CustomField(),
    ];
    $request->opportunityInput->description = 'Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines.';
    $request->opportunityInput->leadId = '12345';
    $request->opportunityInput->leadSource = 'Website';
    $request->opportunityInput->lossReason = 'No budget';
    $request->opportunityInput->lossReasonId = '12345';
    $request->opportunityInput->monetaryAmount = 75000;
    $request->opportunityInput->ownerId = '12345';
    $request->opportunityInput->pipelineId = '12345';
    $request->opportunityInput->pipelineStageId = '12345';
    $request->opportunityInput->primaryContactId = '12345';
    $request->opportunityInput->priority = 'None';
    $request->opportunityInput->sourceId = '12345';
    $request->opportunityInput->stageLastChangedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-30T07:43:32.000Z');
    $request->opportunityInput->status = 'Open';
    $request->opportunityInput->statusId = '12345';
    $request->opportunityInput->tags = [
        'libero',
        'quasi',
    ];
    $request->opportunityInput->title = 'New Rocket';
    $request->opportunityInput->type = 'Existing Customer - Upgrade';
    $request->opportunityInput->winProbability = 40;
    $request->opportunityInput->wonReason = 'Best pitch';
    $request->opportunityInput->wonReasonId = '12345';
    $request->raw = false;
    $request->xApideckAppId = 'tempora';
    $request->xApideckConsumerId = 'numquam';
    $request->xApideckServiceId = 'explicabo';

    $requestSecurity = new OpportunitiesAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->opportunities->opportunitiesAdd($request, $requestSecurity);

    if ($response->createOpportunityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## opportunitiesAll

List opportunities

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OpportunitiesAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\OpportunitiesFilter;
use \OpenAPI\OpenAPI\Models\Shared\OpportunitiesSort;
use \OpenAPI\OpenAPI\Models\Shared\OpportunitiesSortByEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Operations\OpportunitiesAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OpportunitiesAllRequest();
    $request->cursor = 'provident';
    $request->fields = 'ipsa';
    $request->filter = new OpportunitiesFilter();
    $request->filter->companyId = '1234';
    $request->filter->monetaryAmount = 75000;
    $request->filter->status = 'Completed';
    $request->filter->title = 'Tesla deal';
    $request->filter->winProbability = 50;
    $request->limit = 476477;
    $request->raw = false;
    $request->sort = new OpportunitiesSort();
    $request->sort->by = OpportunitiesSortByEnum::CREATED_AT;
    $request->sort->direction = SortDirectionEnum::ASC;
    $request->xApideckAppId = 'odio';
    $request->xApideckConsumerId = 'eius';
    $request->xApideckServiceId = 'esse';

    $requestSecurity = new OpportunitiesAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->opportunities->opportunitiesAll($request, $requestSecurity);

    if ($response->getOpportunitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## opportunitiesDelete

Delete opportunity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OpportunitiesDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\OpportunitiesDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OpportunitiesDeleteRequest();
    $request->id = '78a7bd46-6d28-4c10-ab3c-dca4251904e5';
    $request->raw = false;
    $request->xApideckAppId = 'aspernatur';
    $request->xApideckConsumerId = 'sequi';
    $request->xApideckServiceId = 'quo';

    $requestSecurity = new OpportunitiesDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->opportunities->opportunitiesDelete($request, $requestSecurity);

    if ($response->deleteOpportunityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## opportunitiesOne

Get opportunity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OpportunitiesOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\OpportunitiesOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OpportunitiesOneRequest();
    $request->fields = 'esse';
    $request->id = 'e0bc7178-e479-46f2-a70c-688282aa4825';
    $request->raw = false;
    $request->xApideckAppId = 'nisi';
    $request->xApideckConsumerId = 'fugit';
    $request->xApideckServiceId = 'sapiente';

    $requestSecurity = new OpportunitiesOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->opportunities->opportunitiesOne($request, $requestSecurity);

    if ($response->getOpportunityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## opportunitiesUpdate

Update opportunity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\OpportunitiesUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\OpportunityInput;
use \OpenAPI\OpenAPI\Models\Shared\CurrencyEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomField;
use \OpenAPI\OpenAPI\Models\Operations\OpportunitiesUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OpportunitiesUpdateRequest();
    $request->opportunityInput = new OpportunityInput();
    $request->opportunityInput->closeDate = DateTime::createFromFormat('Y-m-d', '2020-10-30');
    $request->opportunityInput->companyId = '12345';
    $request->opportunityInput->companyName = 'Copper';
    $request->opportunityInput->contactId = '12345';
    $request->opportunityInput->contactIds = [
        '12345',
    ];
    $request->opportunityInput->currency = CurrencyEnum::USD;
    $request->opportunityInput->customFields = [
        new CustomField(),
    ];
    $request->opportunityInput->description = 'Opportunities are created for People and Companies that are interested in buying your products or services. Create Opportunities for People and Companies to move them through one of your Pipelines.';
    $request->opportunityInput->leadId = '12345';
    $request->opportunityInput->leadSource = 'Website';
    $request->opportunityInput->lossReason = 'No budget';
    $request->opportunityInput->lossReasonId = '12345';
    $request->opportunityInput->monetaryAmount = 75000;
    $request->opportunityInput->ownerId = '12345';
    $request->opportunityInput->pipelineId = '12345';
    $request->opportunityInput->pipelineStageId = '12345';
    $request->opportunityInput->primaryContactId = '12345';
    $request->opportunityInput->priority = 'None';
    $request->opportunityInput->sourceId = '12345';
    $request->opportunityInput->stageLastChangedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-09-30T07:43:32.000Z');
    $request->opportunityInput->status = 'Open';
    $request->opportunityInput->statusId = '12345';
    $request->opportunityInput->tags = [
        'saepe',
    ];
    $request->opportunityInput->title = 'New Rocket';
    $request->opportunityInput->type = 'Existing Customer - Upgrade';
    $request->opportunityInput->winProbability = 40;
    $request->opportunityInput->wonReason = 'Best pitch';
    $request->opportunityInput->wonReasonId = '12345';
    $request->id = '9817ee17-cbe6-41e6-b7b9-5bc0ab3c20c4';
    $request->raw = false;
    $request->xApideckAppId = 'sapiente';
    $request->xApideckConsumerId = 'consectetur';
    $request->xApideckServiceId = 'esse';

    $requestSecurity = new OpportunitiesUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->opportunities->opportunitiesUpdate($request, $requestSecurity);

    if ($response->updateOpportunityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
