# marketplacesOrdersAutoTransitions

### Available Operations

* [configureAutomaticTransitions](#configureautomatictransitions) - Configure new or existing automatic Order status transition
* [getAutomaticTransitions](#getautomatictransitions) - Get list of configured automatic Order status transitions

## configureAutomaticTransitions

Configure new or existing automatic Order status transition

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ConfigureAutomaticTransitionRequest;
use \OpenAPI\OpenAPI\Models\Shared\AutomaticTransition;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureAutomaticTransitionRequest();
    $request->automaticTransitions = [
        new AutomaticTransition(),
        new AutomaticTransition(),
        new AutomaticTransition(),
        new AutomaticTransition(),
    ];

    $response = $sdk->marketplacesOrdersAutoTransitions->configureAutomaticTransitions($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAutomaticTransitions

Get list of configured automatic Order status transitions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAutomaticTransitionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAutomaticTransitionsRequest();
    $request->ifNoneMatch = 'nihil';
    $request->storeId = 'ipsum';

    $response = $sdk->marketplacesOrdersAutoTransitions->getAutomaticTransitions($request);

    if ($response->automaticTransitionInfoList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
