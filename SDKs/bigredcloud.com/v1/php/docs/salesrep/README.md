# salesRep

### Available Operations

* [salesRepDelete](#salesrepdelete) - Removes an existing Sale Rep.
* [salesRepGet](#salesrepget) - Returns a list of company's SaleRep.
Filtering is forbidden.
Ordering is allowed by "id".
* [salesRepPost](#salesreppost) - Creates a new SaleRep.
* [salesRepProcessBatch](#salesrepprocessbatch) - Processes a batch of Sale Rep.
* [salesRepPut](#salesrepput) - Updates an existing Sale Rep.
* [getV1SalesRepsId](#getv1salesrepsid) - Returns information about a single SaleRep.

## salesRepDelete

Removes an existing Sale Rep.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SalesRepDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SalesRepDeleteRequest();
    $request->id = 618480;
    $request->timestamp = 'velit';

    $response = $sdk->salesRep->salesRepDelete($request);

    if ($response->salesRepDelete200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## salesRepGet

Returns a list of company's SaleRep.
Filtering is forbidden.
Ordering is allowed by "id".

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->salesRep->salesRepGet();

    if ($response->pageResultSaleRepsDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## salesRepPost

Creates a new SaleRep.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SaleRepsDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SaleRepsDto();
    $request->code = 'voluptatibus';
    $request->companyId = 374323;
    $request->email = 'Alvina16@hotmail.com';
    $request->id = 831520;
    $request->name = 'Simon Kuhn';
    $request->phone = '(237) 820-2663 x266';
    $request->timeStamp = 'recusandae';

    $response = $sdk->salesRep->salesRepPost($request);

    if ($response->salesRepPost200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## salesRepProcessBatch

Processes a batch of Sale Rep.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemSaleRepsDto;
use \OpenAPI\OpenAPI\Models\Shared\SaleRepsDto;
use \OpenAPI\OpenAPI\Models\Shared\BatchItemSaleRepsDtoOpCodeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        new BatchItemSaleRepsDto(),
        new BatchItemSaleRepsDto(),
        new BatchItemSaleRepsDto(),
    ]

    $response = $sdk->salesRep->salesRepProcessBatch($request);

    if ($response->salesRepProcessBatch200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## salesRepPut

Updates an existing Sale Rep.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SalesRepPutRequest;
use \OpenAPI\OpenAPI\Models\Shared\SaleRepsDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SalesRepPutRequest();
    $request->saleRepsDto = new SaleRepsDto();
    $request->saleRepsDto->code = 'fugiat';
    $request->saleRepsDto->companyId = 424089;
    $request->saleRepsDto->email = 'Kayla82@yahoo.com';
    $request->saleRepsDto->id = 706575;
    $request->saleRepsDto->name = 'Leslie King';
    $request->saleRepsDto->phone = '(493) 272-4398 x29396';
    $request->saleRepsDto->timeStamp = 'saepe';
    $request->id = 897071;

    $response = $sdk->salesRep->salesRepPut($request);

    if ($response->salesRepPut200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV1SalesRepsId

Returns information about a single SaleRep.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV1SalesRepsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV1SalesRepsIdRequest();
    $request->id = 296556;

    $response = $sdk->salesRep->getV1SalesRepsId($request);

    if ($response->saleRepsDto !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
