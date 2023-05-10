# terminalsTerminalLevel

### Available Operations

* [getTerminals](#getterminals) - Get a list of terminals

## getTerminals

Returns the payment terminals that the API credential has access to and that match the query parameters. 
When using `searchQuery`, other query parameters are ignored.

To make this request, your API credential must have the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API — Terminal actions read

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTerminalsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTerminalsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTerminalsRequest();
    $request->brandModels = 'nemo';
    $request->countries = 'quae';
    $request->merchantIds = 'quaerat';
    $request->pageNumber = 783235;
    $request->pageSize = 801836;
    $request->searchQuery = 'labore';
    $request->storeIds = 'ab';

    $requestSecurity = new GetTerminalsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalsTerminalLevel->getTerminals($request, $requestSecurity);

    if ($response->listTerminalsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
