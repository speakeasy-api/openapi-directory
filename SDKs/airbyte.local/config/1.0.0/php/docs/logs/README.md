# logs

### Available Operations

* [getLogs](#getlogs) - Get logs

## getLogs

Get logs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\LogsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\LogTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LogsRequestBody();
    $request->logType = LogTypeEnum::SERVER;

    $response = $sdk->logs->getLogs($request);

    if ($response->getLogs200TextPlainBinaryString !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
