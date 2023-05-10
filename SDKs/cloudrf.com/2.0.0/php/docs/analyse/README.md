# analyse

### Available Operations

* [interference](#interference) - Find the best server for overlapping coverage
* [mesh](#mesh) - Merge sites into a super layer.
* [network](#network) - Find the best server for somewhere

## interference

Merge and analyse sites within a network channel to determine the best server at a given location. Each site will be dynamically allocated a monochrome colour from a palette and the strongest signal promoted at a given location.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InterferenceRequest;
use \OpenAPI\OpenAPI\Models\Operations\InterferenceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InterferenceRequest();
    $request->name = 'Dallas Kassulke';
    $request->network = 'suscipit';

    $requestSecurity = new InterferenceSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->analyse->interference($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mesh

A merge of 'area' calculations for a network to create a single super layer. Stronger signals are promoted over weaker ones. The same colour key must be used.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MeshRequest;
use \OpenAPI\OpenAPI\Models\Operations\MeshSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MeshRequest();
    $request->name = 'Dr. Valerie Toy';
    $request->network = 'suscipit';

    $requestSecurity = new MeshSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->analyse->mesh($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## network

Query your network to find the best server(s) for a given receiver/customer location. A previously generated network is required.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\NetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\NetworkSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new NetworkRequest();
    $request->alt = 477665;
    $request->lat = 7917.25;
    $request->lon = 8121.69;
    $request->nam = 'voluptatum';
    $request->net = 'iusto';
    $request->rxg = 5680.45;

    $requestSecurity = new NetworkSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->analyse->network($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
