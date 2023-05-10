# intent

### Available Operations

* [addMediaIntentHandling](#addmediaintenthandling) - addMedia
* [playMediaIntentHandling](#playmediaintenthandling) - playMedia
* [updateMediaAffinityIntentHandling](#updatemediaaffinityintenthandling) - updateMediaAffinity

## addMediaIntentHandling

addMedia

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\AddMediaIntentHandlingRequest;
use \OpenAPI\OpenAPI\Models\Shared\AddMediaIntentHandlingInvocation;
use \OpenAPI\OpenAPI\Models\Shared\Session;
use \OpenAPI\OpenAPI\Models\Shared\Constraints;
use \OpenAPI\OpenAPI\Models\Shared\PlayerContext;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddMediaIntentHandlingRequest();
    $request->acceptLanguage = 'debitis';
    $request->requestTimeout = 567.13;
    $request->requestBody = [
        new AddMediaIntentHandlingInvocation(),
        new AddMediaIntentHandlingInvocation(),
        new AddMediaIntentHandlingInvocation(),
        new AddMediaIntentHandlingInvocation(),
    ];
    $request->userAgent = 'tempora';
    $request->xApplecloudextensionRetryCount = 3834.41;
    $request->xApplecloudextensionSessionId = 'molestiae';

    $response = $sdk->intent->addMediaIntentHandling($request);

    if ($response->addMediaIntentHandlingInvocationResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## playMediaIntentHandling

playMedia

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PlayMediaIntentHandlingRequest;
use \OpenAPI\OpenAPI\Models\Shared\PlayMediaIntentHandlingInvocation;
use \OpenAPI\OpenAPI\Models\Shared\Session;
use \OpenAPI\OpenAPI\Models\Shared\Constraints;
use \OpenAPI\OpenAPI\Models\Shared\PlayerContext;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PlayMediaIntentHandlingRequest();
    $request->acceptLanguage = 'minus';
    $request->requestTimeout = 8121.69;
    $request->requestBody = [
        new PlayMediaIntentHandlingInvocation(),
        new PlayMediaIntentHandlingInvocation(),
        new PlayMediaIntentHandlingInvocation(),
    ];
    $request->userAgent = 'iusto';
    $request->xApplecloudextensionRetryCount = 5680.45;
    $request->xApplecloudextensionSessionId = 'nisi';

    $response = $sdk->intent->playMediaIntentHandling($request);

    if ($response->playMediaIntentHandlingInvocationResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateMediaAffinityIntentHandling

updateMediaAffinity

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateMediaAffinityIntentHandlingRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateMediaAffinityIntentHandlingInvocation;
use \OpenAPI\OpenAPI\Models\Shared\Session;
use \OpenAPI\OpenAPI\Models\Shared\Constraints;
use \OpenAPI\OpenAPI\Models\Shared\PlayerContext;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateMediaAffinityIntentHandlingRequest();
    $request->acceptLanguage = 'recusandae';
    $request->requestTimeout = 8360.79;
    $request->requestBody = [
        new UpdateMediaAffinityIntentHandlingInvocation(),
    ];
    $request->userAgent = 'quis';
    $request->xApplecloudextensionRetryCount = 871.29;
    $request->xApplecloudextensionSessionId = 'deserunt';

    $response = $sdk->intent->updateMediaAffinityIntentHandling($request);

    if ($response->updateMediaAffinityIntentHandlingInvocationResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
