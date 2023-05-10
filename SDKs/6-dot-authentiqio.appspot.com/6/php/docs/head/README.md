# head

### Available Operations

* [headKeyPK](#headkeypk) - HEAD info on Authentiq ID

* [signRetrieveHead](#signretrievehead) - HEAD to get the status of a verification job

## headKeyPK

HEAD info on Authentiq ID


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\HeadKeyPKRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new HeadKeyPKRequest();
    $request->pk = 'ab';

    $response = $sdk->head->headKeyPK($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## signRetrieveHead

HEAD to get the status of a verification job

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SignRetrieveHeadRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SignRetrieveHeadRequest();
    $request->job = 'quis';

    $response = $sdk->head->signRetrieveHead($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
