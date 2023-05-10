# integrationLinks

### Available Operations

* [addOrUpdateIntegrationLink](#addorupdateintegrationlink) - Add or update Integration link
* [deleteIntegrationLink](#deleteintegrationlink) - Delete Integration link
* [getIntegrationLinkDetails](#getintegrationlinkdetails) - Get Integration link
* [jiraAddOrUpdateIntegrationLink](#jiraaddorupdateintegrationlink)
* [postV1JiraConnect](#postv1jiraconnect)

## addOrUpdateIntegrationLink

Add or update Integration link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddOrUpdateIntegrationLinkRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddOrUpdateIntegrationLinkModel;
use \OpenAPI\OpenAPI\Models\Shared\IntegrationLinkTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddOrUpdateIntegrationLinkRequest();
    $request->addOrUpdateIntegrationLinkModel = new AddOrUpdateIntegrationLinkModel();
    $request->addOrUpdateIntegrationLinkModel->description = 'repellendus';
    $request->addOrUpdateIntegrationLinkModel->url = 'delectus';
    $request->environmentId = 'e0ab7da8-a50c-4e18-bf86-bc173d689eee';
    $request->integrationLinkType = IntegrationLinkTypeEnum::JIRA;
    $request->key = 'minima';
    $request->settingId = 133461;

    $response = $sdk->integrationLinks->addOrUpdateIntegrationLink($request);

    if ($response->integrationLinkModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIntegrationLink

Delete Integration link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIntegrationLinkRequest;
use \OpenAPI\OpenAPI\Models\Shared\IntegrationLinkTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIntegrationLinkRequest();
    $request->environmentId = '6f8d986e-881e-4ad4-b0e1-012563f94e29';
    $request->integrationLinkType = IntegrationLinkTypeEnum::MONDAY;
    $request->key = 'perspiciatis';
    $request->settingId = 446394;

    $response = $sdk->integrationLinks->deleteIntegrationLink($request);

    if ($response->deleteIntegrationLinkModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIntegrationLinkDetails

Get Integration link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIntegrationLinkDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\IntegrationLinkTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIntegrationLinkDetailsRequest();
    $request->integrationLinkType = IntegrationLinkTypeEnum::TRELLO;
    $request->key = 'eveniet';

    $response = $sdk->integrationLinks->getIntegrationLinkDetails($request);

    if ($response->integrationLinkDetailsModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## jiraAddOrUpdateIntegrationLink

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\JiraAddOrUpdateIntegrationLinkRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddOrUpdateJiraIntegrationLinkModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new JiraAddOrUpdateIntegrationLinkRequest();
    $request->addOrUpdateJiraIntegrationLinkModel = new AddOrUpdateJiraIntegrationLinkModel();
    $request->addOrUpdateJiraIntegrationLinkModel->clientKey = 'occaecati';
    $request->addOrUpdateJiraIntegrationLinkModel->description = 'consequuntur';
    $request->addOrUpdateJiraIntegrationLinkModel->jiraJwtToken = 'fugit';
    $request->addOrUpdateJiraIntegrationLinkModel->url = 'id';
    $request->environmentId = '57a15be3-e060-4807-a2b6-e3ab8845f059';
    $request->key = 'nihil';
    $request->settingId = 649078;

    $response = $sdk->integrationLinks->jiraAddOrUpdateIntegrationLink($request);

    if ($response->integrationLinkModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV1JiraConnect

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\ConnectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConnectRequest();
    $request->clientKey = 'voluptas';
    $request->jiraJwtToken = 'alias';

    $response = $sdk->integrationLinks->postV1JiraConnect($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
