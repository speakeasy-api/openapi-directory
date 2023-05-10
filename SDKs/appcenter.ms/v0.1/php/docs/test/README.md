# test

### Available Operations

* [testArchiveTestRun](#testarchivetestrun) - Logically deletes a test run
* [testCreateDeviceSelection](#testcreatedeviceselection) - Creates a short ID for a list of devices
* [testCreateDeviceSetOfOwner](#testcreatedevicesetofowner) - Creates a device set belonging to the owner
* [testCreateDeviceSetOfUser](#testcreatedevicesetofuser) - Creates a device set belonging to the user
* [testCreateSubscription](#testcreatesubscription) - Accept a free trial subscription
* [testCreateTestRun](#testcreatetestrun) - Creates a new test run
* [testCreateTestSeries](#testcreatetestseries) - Creates new test series for an application
* [testDeleteDeviceSetOfOwner](#testdeletedevicesetofowner) - Deletes a device set belonging to the owner
* [testDeleteDeviceSetOfUser](#testdeletedevicesetofuser) - Deletes a device set belonging to the user
* [testDeleteTestSeries](#testdeletetestseries) - Deletes a single test series
* [testGdprExportAccount](#testgdprexportaccount) - Lists account data
* [testGdprExportAccounts](#testgdprexportaccounts) - Lists all the endpoints available for Test accounts data
* [testGdprExportApp](#testgdprexportapp) - Lists app data
* [testGdprExportApps](#testgdprexportapps) - Lists all the endpoints available for Test apps data
* [testGdprExportFeatureFlag](#testgdprexportfeatureflag) - Lists feature flag data
* [testGdprExportFileSetFile](#testgdprexportfilesetfile) - Lists file set file data
* [testGdprExportHashFile](#testgdprexporthashfile) - Lists hash file data
* [testGdprExportPipelineTest](#testgdprexportpipelinetest) - Lists pipeline test data
* [testGdprExportTestRun](#testgdprexporttestrun) - Lists test run data
* [testGetAllTestRunsForSeries](#testgetalltestrunsforseries) - Returns list of all test runs for a given test series
* [testGetAllTestSeries](#testgetalltestseries) - Returns list of all test series for an application
* [testGetDeviceConfigurations](#testgetdeviceconfigurations) - Returns a list of available devices
* [testGetDeviceSetOfOwner](#testgetdevicesetofowner) - Gets a device set belonging to the owner
* [testGetDeviceSetOfUser](#testgetdevicesetofuser) - Gets a device set belonging to the user
* [testGetSubscriptions](#testgetsubscriptions) - Get information about the currently active subscriptions, if any
* [testGetTestReport](#testgettestreport) - Returns a single test report
* [testGetTestRun](#testgettestrun) - Returns a single test runs
* [testGetTestRunState](#testgettestrunstate) - Gets state of the test run
* [testGetTestRuns](#testgettestruns) - Returns a list of test runs
* [testListDeviceSetsOfOwner](#testlistdevicesetsofowner) - Lists device sets belonging to the owner
* [testListDeviceSetsOfUser](#testlistdevicesetsofuser) - Lists device sets belonging to the user
* [testPatchTestSeries](#testpatchtestseries) - Updates name and slug of a test series
* [testStartTestRun](#teststarttestrun) - Starts test run
* [testStartUploadingFile](#teststartuploadingfile) - Uploads file for a test run
* [testStopTestRun](#teststoptestrun) - Stop a test run execution
* [testUpdateDeviceSetOfOwner](#testupdatedevicesetofowner) - Updates a device set belonging to the owner
* [testUpdateDeviceSetOfUser](#testupdatedevicesetofuser) - Updates a device set belonging to the user
* [testUploadHash](#testuploadhash) - Adds file with the given hash to a test run
* [testUploadHashesBatch](#testuploadhashesbatch) - Adds file with the given hash to a test run

## testArchiveTestRun

Logically deletes a test run

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestArchiveTestRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestArchiveTestRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestArchiveTestRunRequest();
    $request->appName = 'dignissimos';
    $request->ownerName = 'esse';
    $request->testRunId = 'd525f77b-114e-4eb5-aff7-85fc37814d4c';

    $requestSecurity = new TestArchiveTestRunSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testArchiveTestRun($request, $requestSecurity);

    if ($response->testRun !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testCreateDeviceSelection

Creates a short ID for a list of devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestCreateDeviceSelectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestCreateDeviceSelectionDeviceList;
use \OpenAPI\OpenAPI\Models\Operations\TestCreateDeviceSelectionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestCreateDeviceSelectionRequest();
    $request->requestBody = new TestCreateDeviceSelectionDeviceList();
    $request->requestBody->devices = [
        'laudantium',
        'repudiandae',
        'consequatur',
    ];
    $request->appName = 'maxime';
    $request->ownerName = 'aspernatur';

    $requestSecurity = new TestCreateDeviceSelectionSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testCreateDeviceSelection($request, $requestSecurity);

    if ($response->deviceSelection !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testCreateDeviceSetOfOwner

Creates a device set belonging to the owner

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestCreateDeviceSetOfOwnerRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestCreateDeviceSetOfOwnerDeviceSetUpdateInformation;
use \OpenAPI\OpenAPI\Models\Operations\TestCreateDeviceSetOfOwnerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestCreateDeviceSetOfOwnerRequest();
    $request->requestBody = new TestCreateDeviceSetOfOwnerDeviceSetUpdateInformation();
    $request->requestBody->devices = [
        'expedita',
        'quas',
        'provident',
    ];
    $request->requestBody->name = 'Ira Kulas';
    $request->appName = 'similique';
    $request->ownerName = 'repellendus';

    $requestSecurity = new TestCreateDeviceSetOfOwnerSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testCreateDeviceSetOfOwner($request, $requestSecurity);

    if ($response->deviceSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testCreateDeviceSetOfUser

Creates a device set belonging to the user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestCreateDeviceSetOfUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestCreateDeviceSetOfUserDeviceSetUpdateInformation;
use \OpenAPI\OpenAPI\Models\Operations\TestCreateDeviceSetOfUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestCreateDeviceSetOfUserRequest();
    $request->requestBody = new TestCreateDeviceSetOfUserDeviceSetUpdateInformation();
    $request->requestBody->devices = [
        'dolorem',
        'commodi',
    ];
    $request->requestBody->name = 'Mrs. Leslie Anderson I';
    $request->appName = 'illum';
    $request->ownerName = 'praesentium';

    $requestSecurity = new TestCreateDeviceSetOfUserSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testCreateDeviceSetOfUser($request, $requestSecurity);

    if ($response->deviceSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testCreateSubscription

Accept a free trial subscription

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestCreateSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestCreateSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestCreateSubscriptionRequest();
    $request->appName = 'quidem';
    $request->ownerName = 'cum';

    $requestSecurity = new TestCreateSubscriptionSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testCreateSubscription($request, $requestSecurity);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testCreateTestRun

Creates a new test run

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestCreateTestRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestCreateTestRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestCreateTestRunRequest();
    $request->appName = 'amet';
    $request->ownerName = 'quasi';

    $requestSecurity = new TestCreateTestRunSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testCreateTestRun($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testCreateTestSeries

Creates new test series for an application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestCreateTestSeriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestCreateTestSeriesNameOfTheTestSeries;
use \OpenAPI\OpenAPI\Models\Operations\TestCreateTestSeriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestCreateTestSeriesRequest();
    $request->requestBody = new TestCreateTestSeriesNameOfTheTestSeries();
    $request->requestBody->name = 'Myrtle Bauch';
    $request->appName = 'amet';
    $request->ownerName = 'provident';

    $requestSecurity = new TestCreateTestSeriesSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testCreateTestSeries($request, $requestSecurity);

    if ($response->testSeries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testDeleteDeviceSetOfOwner

Deletes a device set belonging to the owner

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestDeleteDeviceSetOfOwnerRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestDeleteDeviceSetOfOwnerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestDeleteDeviceSetOfOwnerRequest();
    $request->appName = 'dolorum';
    $request->id = 'e9e057eb-809e-4281-8331-f3981d4c700b';
    $request->ownerName = 'ea';

    $requestSecurity = new TestDeleteDeviceSetOfOwnerSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testDeleteDeviceSetOfOwner($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testDeleteDeviceSetOfUser

Deletes a device set belonging to the user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestDeleteDeviceSetOfUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestDeleteDeviceSetOfUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestDeleteDeviceSetOfUserRequest();
    $request->appName = 'aperiam';
    $request->id = '7f3c93c7-3b9d-4a3f-aced-a7e23f225741';
    $request->ownerName = 'illo';

    $requestSecurity = new TestDeleteDeviceSetOfUserSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testDeleteDeviceSetOfUser($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testDeleteTestSeries

Deletes a single test series

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestDeleteTestSeriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestDeleteTestSeriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestDeleteTestSeriesRequest();
    $request->appName = 'hic';
    $request->ownerName = 'deserunt';
    $request->testSeriesSlug = 'delectus';

    $requestSecurity = new TestDeleteTestSeriesSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testDeleteTestSeries($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testGdprExportAccount

Lists account data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestGdprExportAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new TestGdprExportAccountSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testGdprExportAccount($requestSecurity);

    if ($response->testGdprExportAccount200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testGdprExportAccounts

Lists all the endpoints available for Test accounts data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestGdprExportAccountsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new TestGdprExportAccountsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testGdprExportAccounts($requestSecurity);

    if ($response->testGdprExportAccounts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testGdprExportApp

Lists app data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestGdprExportAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestGdprExportAppSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestGdprExportAppRequest();
    $request->appName = 'non';
    $request->ownerName = 'distinctio';

    $requestSecurity = new TestGdprExportAppSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testGdprExportApp($request, $requestSecurity);

    if ($response->testGdprExportApp200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testGdprExportApps

Lists all the endpoints available for Test apps data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestGdprExportAppsRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestGdprExportAppsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestGdprExportAppsRequest();
    $request->appName = 'in';
    $request->ownerName = 'exercitationem';

    $requestSecurity = new TestGdprExportAppsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testGdprExportApps($request, $requestSecurity);

    if ($response->testGdprExportApps200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testGdprExportFeatureFlag

Lists feature flag data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestGdprExportFeatureFlagSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new TestGdprExportFeatureFlagSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testGdprExportFeatureFlag($requestSecurity);

    if ($response->testGdprExportFeatureFlag200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testGdprExportFileSetFile

Lists file set file data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestGdprExportFileSetFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestGdprExportFileSetFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestGdprExportFileSetFileRequest();
    $request->appName = 'labore';
    $request->ownerName = 'numquam';

    $requestSecurity = new TestGdprExportFileSetFileSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testGdprExportFileSetFile($request, $requestSecurity);

    if ($response->testGdprExportFileSetFile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testGdprExportHashFile

Lists hash file data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestGdprExportHashFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestGdprExportHashFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestGdprExportHashFileRequest();
    $request->appName = 'repudiandae';
    $request->ownerName = 'modi';

    $requestSecurity = new TestGdprExportHashFileSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testGdprExportHashFile($request, $requestSecurity);

    if ($response->testGdprExportHashFile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testGdprExportPipelineTest

Lists pipeline test data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestGdprExportPipelineTestRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestGdprExportPipelineTestSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestGdprExportPipelineTestRequest();
    $request->appName = 'in';
    $request->ownerName = 'explicabo';

    $requestSecurity = new TestGdprExportPipelineTestSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testGdprExportPipelineTest($request, $requestSecurity);

    if ($response->testGdprExportPipelineTest200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testGdprExportTestRun

Lists test run data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestGdprExportTestRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestGdprExportTestRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestGdprExportTestRunRequest();
    $request->appName = 'accusamus';
    $request->ownerName = 'rem';

    $requestSecurity = new TestGdprExportTestRunSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testGdprExportTestRun($request, $requestSecurity);

    if ($response->testGdprExportTestRun200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testGetAllTestRunsForSeries

Returns list of all test runs for a given test series

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestGetAllTestRunsForSeriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestGetAllTestRunsForSeriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestGetAllTestRunsForSeriesRequest();
    $request->appName = 'aperiam';
    $request->ownerName = 'odit';
    $request->testSeriesSlug = 'deleniti';

    $requestSecurity = new TestGetAllTestRunsForSeriesSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testGetAllTestRunsForSeries($request, $requestSecurity);

    if ($response->testRuns !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testGetAllTestSeries

Returns list of all test series for an application

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestGetAllTestSeriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestGetAllTestSeriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestGetAllTestSeriesRequest();
    $request->appName = 'enim';
    $request->ownerName = 'voluptate';
    $request->query = 'similique';

    $requestSecurity = new TestGetAllTestSeriesSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testGetAllTestSeries($request, $requestSecurity);

    if ($response->testSeries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testGetDeviceConfigurations

Returns a list of available devices

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestGetDeviceConfigurationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestGetDeviceConfigurationsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestGetDeviceConfigurationsRequest();
    $request->appName = 'minima';
    $request->appUploadId = 'b40463a7-d575-4f14-80e7-64ad7334ec1b';
    $request->ownerName = 'iusto';

    $requestSecurity = new TestGetDeviceConfigurationsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testGetDeviceConfigurations($request, $requestSecurity);

    if ($response->testGetDeviceConfigurations200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testGetDeviceSetOfOwner

Gets a device set belonging to the owner

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestGetDeviceSetOfOwnerRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestGetDeviceSetOfOwnerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestGetDeviceSetOfOwnerRequest();
    $request->appName = 'quas';
    $request->id = '1b36a080-88d1-400e-bada-200ef0422eb2';
    $request->ownerName = 'beatae';

    $requestSecurity = new TestGetDeviceSetOfOwnerSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testGetDeviceSetOfOwner($request, $requestSecurity);

    if ($response->deviceSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testGetDeviceSetOfUser

Gets a device set belonging to the user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestGetDeviceSetOfUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestGetDeviceSetOfUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestGetDeviceSetOfUserRequest();
    $request->appName = 'aliquid';
    $request->id = '4cf9ab83-66c7-423f-bda9-e06bee4825c1';
    $request->ownerName = 'voluptatibus';

    $requestSecurity = new TestGetDeviceSetOfUserSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testGetDeviceSetOfUser($request, $requestSecurity);

    if ($response->deviceSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testGetSubscriptions

Get information about the currently active subscriptions, if any

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestGetSubscriptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestGetSubscriptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestGetSubscriptionsRequest();
    $request->appName = 'eligendi';
    $request->ownerName = 'quae';

    $requestSecurity = new TestGetSubscriptionsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testGetSubscriptions($request, $requestSecurity);

    if ($response->subscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testGetTestReport

Returns a single test report

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestGetTestReportRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestGetTestReportSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestGetTestReportRequest();
    $request->appName = 'officiis';
    $request->ownerName = 'architecto';
    $request->testRunId = '15c80bff-9185-444e-842d-efcce8f19777';

    $requestSecurity = new TestGetTestReportSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testGetTestReport($request, $requestSecurity);

    if ($response->testGetTestReport200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testGetTestRun

Returns a single test runs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestGetTestRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestGetTestRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestGetTestRunRequest();
    $request->appName = 'odio';
    $request->ownerName = 'nesciunt';
    $request->testRunId = 'e63562a7-b408-4f05-a3d4-8fdaf313a1f5';

    $requestSecurity = new TestGetTestRunSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testGetTestRun($request, $requestSecurity);

    if ($response->testRun !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testGetTestRunState

Gets state of the test run

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestGetTestRunStateRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestGetTestRunStateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestGetTestRunStateRequest();
    $request->appName = 'doloribus';
    $request->ownerName = 'possimus';
    $request->testRunId = 'unde';

    $requestSecurity = new TestGetTestRunStateSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testGetTestRunState($request, $requestSecurity);

    if ($response->testRunState !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testGetTestRuns

Returns a list of test runs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestGetTestRunsRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestGetTestRunsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestGetTestRunsRequest();
    $request->appName = 'incidunt';
    $request->ownerName = 'explicabo';

    $requestSecurity = new TestGetTestRunsSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testGetTestRuns($request, $requestSecurity);

    if ($response->testRuns !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testListDeviceSetsOfOwner

Lists device sets belonging to the owner

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestListDeviceSetsOfOwnerRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestListDeviceSetsOfOwnerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestListDeviceSetsOfOwnerRequest();
    $request->appName = 'ipsam';
    $request->ownerName = 'cupiditate';

    $requestSecurity = new TestListDeviceSetsOfOwnerSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testListDeviceSetsOfOwner($request, $requestSecurity);

    if ($response->deviceSets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testListDeviceSetsOfUser

Lists device sets belonging to the user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestListDeviceSetsOfUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestListDeviceSetsOfUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestListDeviceSetsOfUserRequest();
    $request->appName = 'optio';
    $request->ownerName = 'alias';

    $requestSecurity = new TestListDeviceSetsOfUserSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testListDeviceSetsOfUser($request, $requestSecurity);

    if ($response->deviceSets !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testPatchTestSeries

Updates name and slug of a test series

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestPatchTestSeriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestPatchTestSeriesNameOfTheTestSeries;
use \OpenAPI\OpenAPI\Models\Operations\TestPatchTestSeriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestPatchTestSeriesRequest();
    $request->requestBody = new TestPatchTestSeriesNameOfTheTestSeries();
    $request->requestBody->name = 'Antonio Jerde';
    $request->appName = 'veniam';
    $request->ownerName = 'debitis';
    $request->testSeriesSlug = 'officia';

    $requestSecurity = new TestPatchTestSeriesSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testPatchTestSeries($request, $requestSecurity);

    if ($response->testSeries !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testStartTestRun

Starts test run

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestStartTestRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestStartTestRunTestCloudStartTestRunOptions;
use \OpenAPI\OpenAPI\Models\Operations\TestStartTestRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestStartTestRunRequest();
    $request->requestBody = new TestStartTestRunTestCloudStartTestRunOptions();
    $request->requestBody->deviceSelection = 'sint';
    $request->requestBody->language = 'ut';
    $request->requestBody->locale = 'numquam';
    $request->requestBody->testFramework = 'tenetur';
    $request->requestBody->testParameters = [
        'libero' => 'in',
    ];
    $request->requestBody->testSeries = 'minima';
    $request->appName = 'ex';
    $request->ownerName = 'minus';
    $request->testRunId = 'ab';

    $requestSecurity = new TestStartTestRunSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testStartTestRun($request, $requestSecurity);

    if ($response->testCloudTestRunStartResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testStartUploadingFile

Uploads file for a test run

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestStartUploadingFileRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestStartUploadingFileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestStartUploadingFileRequest();
    $request->appName = 'beatae';
    $request->ownerName = 'hic';
    $request->testRunId = 'nisi';

    $requestSecurity = new TestStartUploadingFileSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testStartUploadingFile($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testStopTestRun

Stop a test run execution

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestStopTestRunRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestStopTestRunSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestStopTestRunRequest();
    $request->appName = 'quisquam';
    $request->ownerName = 'dolor';
    $request->testRunId = 'ducimus';

    $requestSecurity = new TestStopTestRunSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testStopTestRun($request, $requestSecurity);

    if ($response->testRun !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testUpdateDeviceSetOfOwner

Updates a device set belonging to the owner

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestUpdateDeviceSetOfOwnerRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestUpdateDeviceSetOfOwnerDeviceSetUpdateInformation;
use \OpenAPI\OpenAPI\Models\Operations\TestUpdateDeviceSetOfOwnerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestUpdateDeviceSetOfOwnerRequest();
    $request->requestBody = new TestUpdateDeviceSetOfOwnerDeviceSetUpdateInformation();
    $request->requestBody->devices = [
        'minima',
        'architecto',
        'qui',
    ];
    $request->requestBody->name = 'Sara Gorczany';
    $request->appName = 'dolor';
    $request->id = '5bbc05a2-3a45-4cef-85fd-e10a0ce2169e';
    $request->ownerName = 'ullam';

    $requestSecurity = new TestUpdateDeviceSetOfOwnerSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testUpdateDeviceSetOfOwner($request, $requestSecurity);

    if ($response->deviceSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testUpdateDeviceSetOfUser

Updates a device set belonging to the user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestUpdateDeviceSetOfUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestUpdateDeviceSetOfUserDeviceSetUpdateInformation;
use \OpenAPI\OpenAPI\Models\Operations\TestUpdateDeviceSetOfUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestUpdateDeviceSetOfUserRequest();
    $request->requestBody = new TestUpdateDeviceSetOfUserDeviceSetUpdateInformation();
    $request->requestBody->devices = [
        'accusantium',
    ];
    $request->requestBody->name = 'Carolyn McLaughlin';
    $request->appName = 'quibusdam';
    $request->id = 'c5e34762-799b-4fbb-a694-9fb2bb4ecae6';
    $request->ownerName = 'quo';

    $requestSecurity = new TestUpdateDeviceSetOfUserSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testUpdateDeviceSetOfUser($request, $requestSecurity);

    if ($response->deviceSet !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testUploadHash

Adds file with the given hash to a test run

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestUploadHashRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestUploadHashTestCloudFileHash;
use \OpenAPI\OpenAPI\Models\Operations\TestUploadHashTestCloudFileHashFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\TestUploadHashSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestUploadHashRequest();
    $request->requestBody = new TestUploadHashTestCloudFileHash();
    $request->requestBody->byteRange = 'nesciunt';
    $request->requestBody->checksum = 'illum';
    $request->requestBody->fileType = TestUploadHashTestCloudFileHashFileTypeEnum::APP_FILE;
    $request->requestBody->relativePath = 'illum';
    $request->appName = 'facilis';
    $request->ownerName = 'non';
    $request->testRunId = 'mollitia';

    $requestSecurity = new TestUploadHashSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testUploadHash($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## testUploadHashesBatch

Adds file with the given hash to a test run

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TestUploadHashesBatchRequest;
use \OpenAPI\OpenAPI\Models\Operations\TestUploadHashesBatchTestCloudFileHash;
use \OpenAPI\OpenAPI\Models\Operations\TestUploadHashesBatchTestCloudFileHashFileTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\TestUploadHashesBatchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TestUploadHashesBatchRequest();
    $request->requestBody = [
        new TestUploadHashesBatchTestCloudFileHash(),
        new TestUploadHashesBatchTestCloudFileHash(),
        new TestUploadHashesBatchTestCloudFileHash(),
        new TestUploadHashesBatchTestCloudFileHash(),
    ];
    $request->appName = 'recusandae';
    $request->ownerName = 'distinctio';
    $request->testRunId = 'pariatur';

    $requestSecurity = new TestUploadHashesBatchSecurity();
    $requestSecurity->apiToken = 'YOUR_API_KEY_HERE';

    $response = $sdk->test->testUploadHashesBatch($request, $requestSecurity);

    if ($response->testCloudFileHashResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
