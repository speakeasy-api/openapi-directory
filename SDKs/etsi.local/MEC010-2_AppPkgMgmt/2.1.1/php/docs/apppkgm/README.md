# appPkgm

## Overview

App Package management

### Available Operations

* [appDGET](#appdget) - Reads the content of the AppD of on-boarded individual application package resources.
* [appDIdGET](#appdidget) - Fetch the onboarded application package content identified by appPkgId or appDId.
* [appDIdPUT](#appdidput) - Uploads the content of application package.
* [appPkgGET](#apppkgget) - Fetch the onboarded application package content identified by appPkgId or appDId.
* [appPkgIdGET](#apppkgidget) - Reads the content of the AppD of on-boarded individual application package resources.
* [appPkgPUT](#apppkgput) - Uploads the content of application package.
* [appPackageDELETE](#apppackagedelete) - Deletes an individual application package resources
* [appPackageGET](#apppackageget) - Queries the information related to individual application package resources
* [appPackagePATCH](#apppackagepatch) - Updates the operational state of an individual application package resource
* [appPackagesGET](#apppackagesget) - Queries information relating to on-boarded application packages in the MEO
* [appPackagesPOST](#apppackagespost) - Create a resource for on-boarding an application package to a MEO
* [individualSubscriptionDELETE](#individualsubscriptiondelete) - Deletes the individual subscription to notifications about application package changes in MEO.
* [individualSubscriptionGET](#individualsubscriptionget) - Used to represent an individual subscription to notifications about application package changes.
* [subscriptionsGET](#subscriptionsget) - used to retrieve the information of subscriptions to individual application package resource in MEO
* [subscriptionsPOST](#subscriptionspost) - Subscribe to notifications about on-boarding an application package

## appDGET

Reads the content of the AppD of on-boarded individual application package resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppDGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppDGETRequest();
    $request->allFields = 'corrupti';
    $request->appDId = 'illum';
    $request->excludeDefault = 'vel';
    $request->excludeFields = 'error';
    $request->fields = 'deserunt';
    $request->filter = 'suscipit';

    $response = $sdk->appPkgm->appDGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appDIdGET

Fetch the onboarded application package content identified by appPkgId or appDId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppDIdGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppDIdGETRequest();
    $request->appDId = 'iure';

    $response = $sdk->appPkgm->appDIdGET($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appDIdPUT

Uploads the content of application package.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppDIdPUTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppDIdPUTRequest();
    $request->requestBody = 'magnam';
    $request->appDId = 'debitis';

    $response = $sdk->appPkgm->appDIdPUT($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appPkgGET

Fetch the onboarded application package content identified by appPkgId or appDId.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppPkgGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppPkgGETRequest();
    $request->appPkgId = 'ipsa';

    $response = $sdk->appPkgm->appPkgGET($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appPkgIdGET

Reads the content of the AppD of on-boarded individual application package resources.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppPkgIdGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppPkgIdGETRequest();
    $request->allFields = 'delectus';
    $request->appPkgId = 'tempora';
    $request->excludeDefault = 'suscipit';
    $request->excludeFields = 'molestiae';
    $request->fields = 'minus';
    $request->filter = 'placeat';

    $response = $sdk->appPkgm->appPkgIdGET($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appPkgPUT

Uploads the content of application package.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppPkgPUTRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppPkgPUTRequest();
    $request->requestBody = 'voluptatum';
    $request->appPkgId = 'iusto';

    $response = $sdk->appPkgm->appPkgPUT($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appPackageDELETE

Deletes an individual application package resources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppPackageDELETERequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppPackageDELETERequest();
    $request->appPkgId = 'excepturi';

    $response = $sdk->appPkgm->appPackageDELETE($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appPackageGET

Queries the information related to individual application package resources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppPackageGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppPackageGETRequest();
    $request->appPkgId = 'nisi';

    $response = $sdk->appPkgm->appPackageGET($request);

    if ($response->appPkgInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appPackagePATCH

Updates the operational state of an individual application package resources

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppPackagePATCHRequest;
use \OpenAPI\OpenAPI\Models\Shared\AppPkgInfoModifications;
use \OpenAPI\OpenAPI\Models\Shared\AppPkgInfoModificationsOperationStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppPackagePATCHRequest();
    $request->appPkgInfoModifications = new AppPkgInfoModifications();
    $request->appPkgInfoModifications->operationState = AppPkgInfoModificationsOperationStateEnum::ENABLED;
    $request->appPkgId = 'temporibus';

    $response = $sdk->appPkgm->appPackagePATCH($request);

    if ($response->appPkgInfoModifications !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appPackagesGET

queries information relating to on-boarded application packages in the MEO

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AppPackagesGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppPackagesGETRequest();
    $request->allFields = 'ab';
    $request->excludeDefault = 'quis';
    $request->excludeFields = 'veritatis';
    $request->fields = 'deserunt';
    $request->filter = 'perferendis';

    $response = $sdk->appPkgm->appPackagesGET($request);

    if ($response->appPkgInfos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## appPackagesPOST

Create a resource for on-boarding an application package to a MEO

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateAppPkg;
use \OpenAPI\OpenAPI\Models\Shared\Checksum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAppPkg();
    $request->appPkgName = 'ipsam';
    $request->appPkgPath = 'repellendus';
    $request->appPkgVersion = 'sapiente';
    $request->appProvider = 'quo';
    $request->checksum = new Checksum();
    $request->checksum->algorithm = 'odit';
    $request->checksum->hash = 'at';
    $request->userDefinedData = [
        'maiores' => 'molestiae',
        'quod' => 'quod',
        'esse' => 'totam',
        'porro' => 'dolorum',
    ];

    $response = $sdk->appPkgm->appPackagesPOST($request);

    if ($response->appPkgInfos !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## individualSubscriptionDELETE

Deletes the individual subscription to notifications about application package changes in MEO.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IndividualSubscriptionDELETERequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IndividualSubscriptionDELETERequest();
    $request->subscriptionId = 'dicta';

    $response = $sdk->appPkgm->individualSubscriptionDELETE($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## individualSubscriptionGET

Used to represent an individual subscription to notifications about application package changes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IndividualSubscriptionGETRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IndividualSubscriptionGETRequest();
    $request->subscriptionId = 'nam';

    $response = $sdk->appPkgm->individualSubscriptionGET($request);

    if ($response->appPkgSubscriptionInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscriptionsGET

used to retrieve the information of subscriptions to individual application package resource in MEO package

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->appPkgm->subscriptionsGET();

    if ($response->appPkgSubscriptionLinkList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscriptionsPOST

Subscribe to notifications about on-boarding an application package

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AppPkgSubscription;
use \OpenAPI\OpenAPI\Models\Shared\SubsctiptionTypeAppPkgEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AppPkgSubscription();
    $request->appPkgFilter = [
        'occaecati',
        'fugit',
        'deleniti',
    ];
    $request->callbackUri = 'https://sizzling-locust.com';
    $request->subsctiptionType = SubsctiptionTypeAppPkgEnum::APP_PACAKGE_OPERATION_CHANGE;

    $response = $sdk->appPkgm->subscriptionsPOST($request);

    if ($response->appPkgSubscriptionInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
