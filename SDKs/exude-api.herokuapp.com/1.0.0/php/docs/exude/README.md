# exude

### Available Operations

* [filterFileDataStoppings](#filterfiledatastoppings) - Filter the stopping words from the provided input file
* [filterStoppings](#filterstoppings) - Filter the stopping words from the provided input data or links

## filterFileDataStoppings

Filter the stopping words from the provided input file

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FilterFileDataStoppingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\FilterFileDataStoppingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\FilterFileDataStoppingsRequestBodyFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FilterFileDataStoppingsRequest();
    $request->requestBody = new FilterFileDataStoppingsRequestBody();
    $request->requestBody->file = new FilterFileDataStoppingsRequestBodyFile();
    $request->requestBody->file->content = 'quibusdam';
    $request->requestBody->file->file = 'unde';
    $request->type = 'nulla';

    $response = $sdk->exude->filterFileDataStoppings($request);

    if ($response->exudeResponseBean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## filterStoppings

Filter the stopping words from the provided input data or links

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\FilterStoppingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ExudeBean;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FilterStoppingsRequest();
    $request->exudeBean = new ExudeBean();
    $request->exudeBean->data = 'corrupti';
    $request->exudeBean->links = [
        'vel',
        'error',
        'deserunt',
        'suscipit',
    ];
    $request->type = 'iure';

    $response = $sdk->exude->filterStoppings($request);

    if ($response->exudeResponseBean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
