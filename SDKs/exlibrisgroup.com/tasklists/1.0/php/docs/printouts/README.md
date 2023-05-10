# printouts

### Available Operations

* [getAlmawsV1TaskListsPrintouts](#getalmawsv1tasklistsprintouts) - Retrieve Printouts
* [getAlmawsV1TaskListsPrintoutsPrintoutId](#getalmawsv1tasklistsprintoutsprintoutid) - Retrieve a Printout
* [postAlmawsV1TaskListsPrintouts](#postalmawsv1tasklistsprintouts) - Act on Printouts
* [postAlmawsV1TaskListsPrintoutsPrintoutId](#postalmawsv1tasklistsprintoutsprintoutid) - Printout Service

## getAlmawsV1TaskListsPrintouts

This API returns a list of Printouts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAlmawsV1TaskListsPrintoutsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAlmawsV1TaskListsPrintoutsRequest();
    $request->letter = 'voluptatum';
    $request->limit = 479977;
    $request->offset = 568045;
    $request->printerId = 'nisi';
    $request->printoutId = 'recusandae';
    $request->status = 'temporibus';

    $response = $sdk->printouts->getAlmawsV1TaskListsPrintouts($request);

    if ($response->getAlmawsV1TaskListsPrintouts200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAlmawsV1TaskListsPrintoutsPrintoutId

This Web service returns a Printout given a Printout ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAlmawsV1TaskListsPrintoutsPrintoutIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAlmawsV1TaskListsPrintoutsPrintoutIdRequest();
    $request->printoutId = 'ab';

    $response = $sdk->printouts->getAlmawsV1TaskListsPrintoutsPrintoutId($request);

    if ($response->onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAlmawsV1TaskListsPrintouts

This API performs an action on printouts: mark as printed or canceled. 10,000 records can be handled in one requests. Only printouts which were updated will be returned.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAlmawsV1TaskListsPrintoutsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAlmawsV1TaskListsPrintoutsRequest();
    $request->letter = 'quis';
    $request->op = 'veritatis';
    $request->printerId = 'deserunt';
    $request->printoutId = 'perferendis';
    $request->status = 'ipsam';

    $response = $sdk->printouts->postAlmawsV1TaskListsPrintouts($request);

    if ($response->onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAlmawsV1TaskListsPrintoutsPrintoutId

This API operates on an printout. given a Printout ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostAlmawsV1TaskListsPrintoutsPrintoutIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAlmawsV1TaskListsPrintoutsPrintoutIdRequest();
    $request->op = 'repellendus';
    $request->printoutId = 'sapiente';

    $response = $sdk->printouts->postAlmawsV1TaskListsPrintoutsPrintoutId($request);

    if ($response->onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
