# numbers

### Available Operations

* [findNumberLeaseConfigs](#findnumberleaseconfigs) - Find lease configs
* [findNumberLeases](#findnumberleases) - Find leases
* [findNumberRegions](#findnumberregions) - Find number regions
* [findNumbersLocal](#findnumberslocal) - Find local numbers
* [findNumbersTollfree](#findnumberstollfree) - Find tollfree numbers
* [getNumberLease](#getnumberlease) - Find a specific lease
* [getNumberLeaseConfig](#getnumberleaseconfig) - Find a specific lease config
* [updateNumberLease](#updatenumberlease) - Update a lease
* [updateNumberLeaseConfig](#updatenumberleaseconfig) - Update a lease config

## findNumberLeaseConfigs

Searches for all number lease configs for the user. Returns a paged list of NumberConfig

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindNumberLeaseConfigsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindNumberLeaseConfigsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindNumberLeaseConfigsRequest();
    $request->city = 'Port Elvisboro';
    $request->fields = 'vel';
    $request->labelName = 'quod';
    $request->limit = 885338;
    $request->offset = 185636;
    $request->prefix = 'dolorum';
    $request->state = 'a';
    $request->zipcode = '64279';

    $requestSecurity = new FindNumberLeaseConfigsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->numbers->findNumberLeaseConfigs($request, $requestSecurity);

    if ($response->numberConfigPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findNumberLeases

Searches for all numbers leased by account user. This API is useful for finding all numbers currently owned by the user. Returns a paged list of number leases.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindNumberLeasesRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindNumberLeasesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindNumberLeasesRequest();
    $request->city = 'Lake Shania';
    $request->fields = 'numquam';
    $request->labelName = 'enim';
    $request->limit = 213312;
    $request->offset = 957451;
    $request->prefix = 'totam';
    $request->state = 'nihil';
    $request->tollFree = false;
    $request->zipcode = '72147';

    $requestSecurity = new FindNumberLeasesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->numbers->findNumberLeases($request, $requestSecurity);

    if ($response->numberLeasePage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findNumberRegions

Searches for region information. Use this API to obtain detailed region information that can be used to query for more specific phone numbers than a general query.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindNumberRegionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindNumberRegionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindNumberRegionsRequest();
    $request->city = 'Lake Jamaal';
    $request->cityPrefix = 'ipsum';
    $request->country = 'Faroe Islands';
    $request->fields = 'qui';
    $request->limit = 586784;
    $request->offset = 807581;
    $request->prefix = 'pariatur';
    $request->state = 'soluta';
    $request->zipcode = '65211';

    $requestSecurity = new FindNumberRegionsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->numbers->findNumberRegions($request, $requestSecurity);

    if ($response->regionPage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findNumbersLocal

Searches for numbers available for purchase in CallFire local numbers catalog . At least one additional parameter is required. User may filter local numbers by their region information. If all numbers with desirable zip code is already busy search will return available numbers with nearest zip code.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindNumbersLocalRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindNumbersLocalSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindNumbersLocalRequest();
    $request->city = 'Purdyview';
    $request->fields = 'quam';
    $request->limit = 565421;
    $request->prefix = 'temporibus';
    $request->state = 'qui';
    $request->zipcode = '11413';

    $requestSecurity = new FindNumbersLocalSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->numbers->findNumbersLocal($request, $requestSecurity);

    if ($response->numberList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findNumbersTollfree

Searches for the toll free numbers which are available for purchase in the CallFire catalog

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindNumbersTollfreeRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindNumbersTollfreeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindNumbersTollfreeRequest();
    $request->fields = 'nam';
    $request->limit = 940432;
    $request->pattern = 'voluptatem';

    $requestSecurity = new FindNumbersTollfreeSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->numbers->findNumbersTollfree($request, $requestSecurity);

    if ($response->numberList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumberLease

Returns a single NumberLease instance for a given number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumberLeaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumberLeaseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumberLeaseRequest();
    $request->fields = 'cumque';
    $request->number = 'soluta';

    $requestSecurity = new GetNumberLeaseSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->numbers->getNumberLease($request, $requestSecurity);

    if ($response->numberLease !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNumberLeaseConfig

Returns a single NumberConfig instance for a given number lease

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetNumberLeaseConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetNumberLeaseConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNumberLeaseConfigRequest();
    $request->fields = 'nobis';
    $request->number = 'et';

    $requestSecurity = new GetNumberLeaseConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->numbers->getNumberLeaseConfig($request, $requestSecurity);

    if ($response->numberConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNumberLease

Updates a number lease instance. Ability to turn on/off autoRenew and toggle call/text features for a particular number

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNumberLeaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\NumberLeaseInput;
use \OpenAPI\OpenAPI\Models\Shared\NumberLeaseCallFeatureStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Region;
use \OpenAPI\OpenAPI\Models\Shared\NumberLeaseTextFeatureStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\NumberLeaseTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNumberLeaseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNumberLeaseRequest();
    $request->numberLeaseInput = new NumberLeaseInput();
    $request->numberLeaseInput->autoRenew = false;
    $request->numberLeaseInput->callFeatureStatus = NumberLeaseCallFeatureStatusEnum::ENABLED;
    $request->numberLeaseInput->labels = [
        'veritatis',
    ];
    $request->numberLeaseInput->leaseBegin = 749255;
    $request->numberLeaseInput->leaseEnd = 552193;
    $request->numberLeaseInput->nationalFormat = 'tempore';
    $request->numberLeaseInput->number = 'cupiditate';
    $request->numberLeaseInput->region = new Region();
    $request->numberLeaseInput->region->city = 'Fort Coreneboro';
    $request->numberLeaseInput->region->country = 'Finland';
    $request->numberLeaseInput->region->latitude = 2408.29;
    $request->numberLeaseInput->region->longitude = 6772.63;
    $request->numberLeaseInput->region->prefix = 'architecto';
    $request->numberLeaseInput->region->state = 'quae';
    $request->numberLeaseInput->region->timeZone = 'aut';
    $request->numberLeaseInput->region->zipcode = '90687-9275';
    $request->numberLeaseInput->sendEmailOnCreate = false;
    $request->numberLeaseInput->textFeatureStatus = NumberLeaseTextFeatureStatusEnum::UNSUPPORTED;
    $request->numberLeaseInput->tollFree = false;
    $request->numberLeaseInput->type = NumberLeaseTypeEnum::PLAN;
    $request->number = 'laudantium';

    $requestSecurity = new UpdateNumberLeaseSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->numbers->updateNumberLease($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNumberLeaseConfig

Updates a phone number lease configuration. Use this API endpoint to add an Inbound IVR or Call Tracking feature to a CallFire phone number. Call tracking configuration allows you to track the incoming calls, to analyze and to respond customers using sms or voice replies. For more information see [call tracking page](https://www.callfire.com/products/call-tracking)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNumberLeaseConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\NumberConfig;
use \OpenAPI\OpenAPI\Models\Shared\CallTrackingConfig;
use \OpenAPI\OpenAPI\Models\Shared\GoogleAnalytics;
use \OpenAPI\OpenAPI\Models\Shared\WeeklySchedule;
use \OpenAPI\OpenAPI\Models\Shared\LocalTime;
use \OpenAPI\OpenAPI\Models\Shared\NumberConfigConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\IvrInboundConfig;
use \OpenAPI\OpenAPI\Models\Shared\TextInboundConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNumberLeaseConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNumberLeaseConfigRequest();
    $request->numberConfig = new NumberConfig();
    $request->numberConfig->callTrackingConfig = new CallTrackingConfig();
    $request->numberConfig->callTrackingConfig->failedTransferSoundId = 485628;
    $request->numberConfig->callTrackingConfig->googleAnalytics = new GoogleAnalytics();
    $request->numberConfig->callTrackingConfig->googleAnalytics->category = 'occaecati';
    $request->numberConfig->callTrackingConfig->googleAnalytics->domain = 'voluptatibus';
    $request->numberConfig->callTrackingConfig->googleAnalytics->googleAccountId = 'quisquam';
    $request->numberConfig->callTrackingConfig->introSoundId = 876506;
    $request->numberConfig->callTrackingConfig->recorded = false;
    $request->numberConfig->callTrackingConfig->screen = false;
    $request->numberConfig->callTrackingConfig->transferNumbers = [
        'quis',
        'ipsum',
        'delectus',
    ];
    $request->numberConfig->callTrackingConfig->voicemail = false;
    $request->numberConfig->callTrackingConfig->voicemailSoundId = 455169;
    $request->numberConfig->callTrackingConfig->weeklySchedule = new WeeklySchedule();
    $request->numberConfig->callTrackingConfig->weeklySchedule->daysOfWeek = [
        'vero',
    ];
    $request->numberConfig->callTrackingConfig->weeklySchedule->startTimeOfDay = new LocalTime();
    $request->numberConfig->callTrackingConfig->weeklySchedule->startTimeOfDay->hour = 949319;
    $request->numberConfig->callTrackingConfig->weeklySchedule->startTimeOfDay->minute = 492268;
    $request->numberConfig->callTrackingConfig->weeklySchedule->startTimeOfDay->nano = 941378;
    $request->numberConfig->callTrackingConfig->weeklySchedule->startTimeOfDay->second = 715561;
    $request->numberConfig->callTrackingConfig->weeklySchedule->stopTimeOfDay = new LocalTime();
    $request->numberConfig->callTrackingConfig->weeklySchedule->stopTimeOfDay->hour = 799203;
    $request->numberConfig->callTrackingConfig->weeklySchedule->stopTimeOfDay->minute = 486160;
    $request->numberConfig->callTrackingConfig->weeklySchedule->stopTimeOfDay->nano = 630448;
    $request->numberConfig->callTrackingConfig->weeklySchedule->stopTimeOfDay->second = 708548;
    $request->numberConfig->callTrackingConfig->weeklySchedule->timeZone = 'vero';
    $request->numberConfig->callTrackingConfig->whisperSoundId = 498140;
    $request->numberConfig->configType = NumberConfigConfigTypeEnum::IVR;
    $request->numberConfig->ivrInboundConfig = new IvrInboundConfig();
    $request->numberConfig->ivrInboundConfig->dialplanXml = 'quibusdam';
    $request->numberConfig->number = 'illum';
    $request->numberConfig->textInboundConfig = new TextInboundConfig();
    $request->numberConfig->textInboundConfig->forwardEnabled = false;
    $request->numberConfig->textInboundConfig->forwardNumber = 'sequi';
    $request->number = 'natus';

    $requestSecurity = new UpdateNumberLeaseConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->numbers->updateNumberLeaseConfig($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
