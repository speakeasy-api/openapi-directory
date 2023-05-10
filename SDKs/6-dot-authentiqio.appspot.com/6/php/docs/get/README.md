# get

### Available Operations

* [keyRetrieve](#keyretrieve) - Get public details of an Authentiq ID.

* [signRetrieve](#signretrieve) - get the status / current content of a verification job

## keyRetrieve

Get public details of an Authentiq ID.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\KeyRetrieveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new KeyRetrieveRequest();
    $request->pk = 'recusandae';

    $response = $sdk->get->keyRetrieve($request);

    if ($response->jwt !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## signRetrieve

get the status / current content of a verification job

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SignRetrieveRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SignRetrieveRequest();
    $request->job = 'temporibus';

    $response = $sdk->get->signRetrieve($request);

    if ($response->jwt !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
