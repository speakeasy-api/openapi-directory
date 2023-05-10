# SDK

## Overview

D7 SMS allows you to reach your customers via SMS over D7's own connectivity to global mobile networks. D7 provides reliable and cost-effective SMS services to businesses across all industries and aims to connect all countries and territories via direct connections.

### Available Operations

* [balanceGet](#balanceget) - Balance
* [sendPost](#sendpost) - SendSMS
* [sendbatchPost](#sendbatchpost) - Bulk SMS

## balanceGet

Check account balance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->balanceGet();

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendPost

Send SMS  to recipients using D7 SMS Gateway

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendSMSRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendPostRequest();
    $request->accept = 'corrupti';
    $request->contentType = 'provident';
    $request->sendSMSRequest = new SendSMSRequest();
    $request->sendSMSRequest->content = 'distinctio';
    $request->sendSMSRequest->from = 'quibusdam';
    $request->sendSMSRequest->to = 602763;

    $response = $sdk->sdk->sendPost($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## sendbatchPost

Send Bulk SMS  to multiple recipients using D7 SMS Gateway

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SendbatchPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\BulkSMSRequest;
use \OpenAPI\OpenAPI\Models\Shared\Message;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SendbatchPostRequest();
    $request->accept = 'nulla';
    $request->bulkSMSRequest = new BulkSMSRequest();
    $request->bulkSMSRequest->messages = [
        new Message(),
        new Message(),
        new Message(),
    ];
    $request->contentType = 'illum';

    $response = $sdk->sdk->sendbatchPost($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
