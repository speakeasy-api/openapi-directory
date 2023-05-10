# keywords

### Available Operations

* [findKeywordLeaseConfigs](#findkeywordleaseconfigs) - Find keyword lease configs
* [findKeywordLeases](#findkeywordleases) - Find keyword leases
* [findKeywords](#findkeywords) - Find keywords
* [getKeywordLease](#getkeywordlease) - Find a specific lease
* [getKeywordLeaseById](#getkeywordleasebyid) - Find a keyword by id
* [getKeywordLeaseConfig](#getkeywordleaseconfig) - Find a specific keyword lease config
* [isKeywordAvailable](#iskeywordavailable) - Check for a specific keyword
* [updateKeywordLease](#updatekeywordlease) - Update a lease
* [updateKeywordLeaseConfig](#updatekeywordleaseconfig) - Update a keyword lease config

## findKeywordLeaseConfigs

Searches for all keyword lease configs for the user. Returns a paged list of KeywordConfig

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindKeywordLeaseConfigsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindKeywordLeaseConfigsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindKeywordLeaseConfigsRequest();
    $request->fields = 'blanditiis';
    $request->filter = 'error';
    $request->labelName = 'eaque';
    $request->limit = 577229;
    $request->offset = 699098;

    $requestSecurity = new FindKeywordLeaseConfigsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->keywords->findKeywordLeaseConfigs($request, $requestSecurity);

    if ($response->page !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findKeywordLeases

Searches for all keywords owned by user. A keyword lease is the ownership information involving a keyword

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindKeywordLeasesRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindKeywordLeasesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindKeywordLeasesRequest();
    $request->fields = 'adipisci';
    $request->filter = 'asperiores';
    $request->labelName = 'earum';
    $request->limit = 267262;
    $request->offset = 613966;

    $requestSecurity = new FindKeywordLeasesSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->keywords->findKeywordLeases($request, $requestSecurity);

    if ($response->keywordLeasePage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## findKeywords

Searches for all keywords available for purchase on the CallFire platform. If a keyword appears in the response, it is available for purchase. List the 'keywords' in a query parameter to search for multiple keywords (at least one keyword should be sent in request). Keyword should only consist of uppercase and lowercase letters and numbers. Number of characters must be greater than 2, but less than 65.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FindKeywordsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FindKeywordsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FindKeywordsRequest();
    $request->keywords = [
        'deleniti',
        'pariatur',
        'provident',
    ];

    $requestSecurity = new FindKeywordsSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->keywords->findKeywords($request, $requestSecurity);

    if ($response->keywordList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getKeywordLease

Searches for all keywords owned by user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetKeywordLeaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetKeywordLeaseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetKeywordLeaseRequest();
    $request->fields = 'nobis';
    $request->keyword = 'libero';

    $requestSecurity = new GetKeywordLeaseSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->keywords->getKeywordLease($request, $requestSecurity);

    if ($response->keywordLease !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getKeywordLeaseById

Get keyword by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetKeywordLeaseByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetKeywordLeaseByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetKeywordLeaseByIdRequest();
    $request->fields = 'delectus';
    $request->id = 311945;

    $requestSecurity = new GetKeywordLeaseByIdSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->keywords->getKeywordLeaseById($request, $requestSecurity);

    if ($response->keywordLease !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getKeywordLeaseConfig

Returns a single KeywordConfig instance for a given keyword lease

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetKeywordLeaseConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetKeywordLeaseConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetKeywordLeaseConfigRequest();
    $request->fields = 'quos';
    $request->keyword = 'aliquid';

    $requestSecurity = new GetKeywordLeaseConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->keywords->getKeywordLeaseConfig($request, $requestSecurity);

    if ($response->keywordConfig !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## isKeywordAvailable

Searches for the specific keyword to purchase on the CallFire platform. Returns 'true' if keyword is available. Keyword should only consist of uppercase and lowercase letters and numbers. Number of characters must be greater than 2, but less than 65.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\IsKeywordAvailableRequest;
use \OpenAPI\OpenAPI\Models\Operations\IsKeywordAvailableSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new IsKeywordAvailableRequest();
    $request->keyword = 'dolorem';

    $requestSecurity = new IsKeywordAvailableSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->keywords->isKeywordAvailable($request, $requestSecurity);

    if ($response->isKeywordAvailable200ApplicationJSONBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateKeywordLease

Updates a keyword lease. Turns the autoRenew on/off. Configure double opt in feature. Add/remove contact list from keyword.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateKeywordLeaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\KeywordLease;
use \OpenAPI\OpenAPI\Models\Shared\KeywordLeaseStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\KeywordLeaseTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateKeywordLeaseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateKeywordLeaseRequest();
    $request->keywordLease = new KeywordLease();
    $request->keywordLease->autoRenew = false;
    $request->keywordLease->contactListId = 209843;
    $request->keywordLease->doubleOptInEnabled = false;
    $request->keywordLease->keyword = 'dolor';
    $request->keywordLease->labels = [
        'ipsum',
    ];
    $request->keywordLease->leaseBegin = 944373;
    $request->keywordLease->leaseEnd = 569574;
    $request->keywordLease->number = 'cum';
    $request->keywordLease->optInConfirmationMessage = 'voluptate';
    $request->keywordLease->shortCode = 'dignissimos';
    $request->keywordLease->status = KeywordLeaseStatusEnum::UNAVAILABLE;
    $request->keywordLease->type = KeywordLeaseTypeEnum::PLAN;
    $request->keyword = 'dolorum';

    $requestSecurity = new UpdateKeywordLeaseSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->keywords->updateKeywordLease($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateKeywordLeaseConfig

Updates a keyword lease configuration. Use this API endpoint to enable/disable inbound SMS forwarding, set forward number. Forward number must be in E.164 format)

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateKeywordLeaseConfigRequest;
use \OpenAPI\OpenAPI\Models\Shared\KeywordConfig;
use \OpenAPI\OpenAPI\Models\Shared\TextInboundConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateKeywordLeaseConfigSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateKeywordLeaseConfigRequest();
    $request->keywordConfig = new KeywordConfig();
    $request->keywordConfig->keyword = 'numquam';
    $request->keywordConfig->textInboundConfig = new TextInboundConfig();
    $request->keywordConfig->textInboundConfig->forwardEnabled = false;
    $request->keywordConfig->textInboundConfig->forwardNumber = 'veritatis';
    $request->keyword = 'ipsa';

    $requestSecurity = new UpdateKeywordLeaseConfigSecurity();
    $requestSecurity->password = 'YOUR_PASSWORD_HERE';
    $requestSecurity->username = 'YOUR_USERNAME_HERE';

    $response = $sdk->keywords->updateKeywordLeaseConfig($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
