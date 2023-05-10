# returns

### Available Operations

* [getReturns](#getreturns) - List Returns
* [putReturns](#putreturns) - Inform us of an RMA

## getReturns

Retrieves summary return activity during the queried timespan. Although return knowledge can be learned from `GET /orders/{id}` it can take an unknown amount of time for an order that is refused or undeliverable to return to an FDC facility. Instead we recommend regularly querying this API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetReturnsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetReturnsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReturnsRequest();
    $request->fromDate = 'cum';
    $request->limit = 19987;
    $request->page = 39187;
    $request->toDate = 'reprehenderit';

    $requestSecurity = new GetReturnsSecurity();
    $requestSecurity->fdcAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returns->getReturns($request, $requestSecurity);

    if ($response->returnsArrayV2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putReturns

Inform FDC of an expected return.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PutReturnsRmaRequestV2;
use \OpenAPI\OpenAPI\Models\Operations\PutReturnsRmaRequestV2Items;
use \OpenAPI\OpenAPI\Models\Shared\OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient;
use \OpenAPI\OpenAPI\Models\Operations\PutReturnsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutReturnsRmaRequestV2();
    $request->items = [
        new PutReturnsRmaRequestV2Items(),
        new PutReturnsRmaRequestV2Items(),
    ];
    $request->merchantOrderId = 'maiores';
    $request->recipient = new OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient();
    $request->recipient->address1 = 'dicta';
    $request->recipient->address2 = 'corporis';
    $request->recipient->addressLocality = 'dolore';
    $request->recipient->addressRegion = 'iusto';
    $request->recipient->companyName = 'dicta';
    $request->recipient->country = 'Papua New Guinea';
    $request->recipient->email = 'Shania.Jerde21@gmail.com';
    $request->recipient->firstName = 'Mathilde';
    $request->recipient->lastName = 'Mann';
    $request->recipient->phone = '(825) 690-9509 x2306';
    $request->recipient->postalCode = '16782-2135';
    $request->rmaNumber = 'quos';

    $requestSecurity = new PutReturnsSecurity();
    $requestSecurity->fdcAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->returns->putReturns($request, $requestSecurity);

    if ($response->rmaResponseV2 !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
