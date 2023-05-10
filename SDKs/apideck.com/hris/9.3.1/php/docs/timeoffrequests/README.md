# timeOffRequests

### Available Operations

* [timeOffRequestsAdd](#timeoffrequestsadd) - Create Time Off Request
* [timeOffRequestsAll](#timeoffrequestsall) - List Time Off Requests
* [timeOffRequestsDelete](#timeoffrequestsdelete) - Delete Time Off Request
* [timeOffRequestsOne](#timeoffrequestsone) - Get Time Off Request
* [timeOffRequestsUpdate](#timeoffrequestsupdate) - Update Time Off Request

## timeOffRequestsAdd

Create Time Off Request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TimeOffRequestsAddRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimeOffRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\TimeOffRequestNotes;
use \OpenAPI\OpenAPI\Models\Shared\TimeOffRequestRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeOffRequestStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeOffRequestUnitsEnum;
use \OpenAPI\OpenAPI\Models\Operations\TimeOffRequestsAddSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TimeOffRequestsAddRequest();
    $request->timeOffRequestInput = new TimeOffRequestInput();
    $request->timeOffRequestInput->amount = 3.5;
    $request->timeOffRequestInput->approvalDate = '2022-03-21';
    $request->timeOffRequestInput->description = 'Enjoying some sun.';
    $request->timeOffRequestInput->employeeId = '12345';
    $request->timeOffRequestInput->endDate = '2022-04-01';
    $request->timeOffRequestInput->notes = new TimeOffRequestNotes();
    $request->timeOffRequestInput->notes->employee = 'Relaxing on the beach for a few hours.';
    $request->timeOffRequestInput->notes->manager = 'Enjoy!';
    $request->timeOffRequestInput->policyId = '12345';
    $request->timeOffRequestInput->requestDate = '2022-03-21';
    $request->timeOffRequestInput->requestType = TimeOffRequestRequestTypeEnum::VACATION;
    $request->timeOffRequestInput->startDate = '2022-04-01';
    $request->timeOffRequestInput->status = TimeOffRequestStatusEnum::APPROVED;
    $request->timeOffRequestInput->units = TimeOffRequestUnitsEnum::HOURS;
    $request->raw = false;
    $request->xApideckAppId = 'ad';
    $request->xApideckConsumerId = 'saepe';
    $request->xApideckServiceId = 'suscipit';

    $requestSecurity = new TimeOffRequestsAddSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->timeOffRequests->timeOffRequestsAdd($request, $requestSecurity);

    if ($response->createTimeOffRequestResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## timeOffRequestsAll

List Time Off Requests

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TimeOffRequestsAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimeOffRequestsFilter;
use \OpenAPI\OpenAPI\Models\Shared\TimeOffRequestsFilterTimeOffRequestStatusEnum;
use \OpenAPI\OpenAPI\Models\Operations\TimeOffRequestsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TimeOffRequestsAllRequest();
    $request->cursor = 'deserunt';
    $request->fields = 'provident';
    $request->filter = new TimeOffRequestsFilter();
    $request->filter->employeeId = '1234';
    $request->filter->endDate = '2022-04-21';
    $request->filter->startDate = '2022-04-08';
    $request->filter->timeOffRequestStatus = TimeOffRequestsFilterTimeOffRequestStatusEnum::APPROVED;
    $request->limit = 831049;
    $request->raw = false;
    $request->xApideckAppId = 'totam';
    $request->xApideckConsumerId = 'similique';
    $request->xApideckServiceId = 'alias';

    $requestSecurity = new TimeOffRequestsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->timeOffRequests->timeOffRequestsAll($request, $requestSecurity);

    if ($response->getTimeOffRequestsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## timeOffRequestsDelete

Delete Time Off Request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TimeOffRequestsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\TimeOffRequestsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TimeOffRequestsDeleteRequest();
    $request->id = 'd446ce2a-f7a7-43cf-bbe4-53f870b326b5';
    $request->raw = false;
    $request->xApideckAppId = 'deserunt';
    $request->xApideckConsumerId = 'quam';
    $request->xApideckServiceId = 'ipsum';

    $requestSecurity = new TimeOffRequestsDeleteSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->timeOffRequests->timeOffRequestsDelete($request, $requestSecurity);

    if ($response->deleteTimeOffRequestResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## timeOffRequestsOne

Get Time Off Request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TimeOffRequestsOneRequest;
use \OpenAPI\OpenAPI\Models\Operations\TimeOffRequestsOneSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TimeOffRequestsOneRequest();
    $request->fields = 'incidunt';
    $request->id = '29cdb1a8-422b-4b67-9d23-22715bf0cbb1';
    $request->raw = false;
    $request->xApideckAppId = 'saepe';
    $request->xApideckConsumerId = 'ipsum';
    $request->xApideckServiceId = 'veritatis';

    $requestSecurity = new TimeOffRequestsOneSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->timeOffRequests->timeOffRequestsOne($request, $requestSecurity);

    if ($response->getTimeOffRequestResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## timeOffRequestsUpdate

Update Time Off Request

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TimeOffRequestsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Shared\TimeOffRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\TimeOffRequestNotes;
use \OpenAPI\OpenAPI\Models\Shared\TimeOffRequestRequestTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeOffRequestStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\TimeOffRequestUnitsEnum;
use \OpenAPI\OpenAPI\Models\Operations\TimeOffRequestsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TimeOffRequestsUpdateRequest();
    $request->timeOffRequestInput = new TimeOffRequestInput();
    $request->timeOffRequestInput->amount = 3.5;
    $request->timeOffRequestInput->approvalDate = '2022-03-21';
    $request->timeOffRequestInput->description = 'Enjoying some sun.';
    $request->timeOffRequestInput->employeeId = '12345';
    $request->timeOffRequestInput->endDate = '2022-04-01';
    $request->timeOffRequestInput->notes = new TimeOffRequestNotes();
    $request->timeOffRequestInput->notes->employee = 'Relaxing on the beach for a few hours.';
    $request->timeOffRequestInput->notes->manager = 'Enjoy!';
    $request->timeOffRequestInput->policyId = '12345';
    $request->timeOffRequestInput->requestDate = '2022-03-21';
    $request->timeOffRequestInput->requestType = TimeOffRequestRequestTypeEnum::VACATION;
    $request->timeOffRequestInput->startDate = '2022-04-01';
    $request->timeOffRequestInput->status = TimeOffRequestStatusEnum::APPROVED;
    $request->timeOffRequestInput->units = TimeOffRequestUnitsEnum::HOURS;
    $request->id = 'b8b90f34-43a1-4108-a0ad-cf4b921879fc';
    $request->raw = false;
    $request->xApideckAppId = 'vero';
    $request->xApideckConsumerId = 'omnis';
    $request->xApideckServiceId = 'quis';

    $requestSecurity = new TimeOffRequestsUpdateSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->timeOffRequests->timeOffRequestsUpdate($request, $requestSecurity);

    if ($response->updateTimeOffRequestResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
