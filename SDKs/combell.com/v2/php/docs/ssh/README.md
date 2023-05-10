# ssh

### Available Operations

* [getAllSshKeys](#getallsshkeys) - Overview of SSH keys

## getAllSshKeys

Overview of SSH keys

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAllSshKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAllSshKeysRequest();
    $request->skip = 396060;
    $request->take = 463150;

    $response = $sdk->ssh->getAllSshKeys($request);

    if ($response->sshKeyDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
