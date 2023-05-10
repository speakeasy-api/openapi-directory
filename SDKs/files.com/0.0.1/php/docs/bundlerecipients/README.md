# bundleRecipients

## Overview

Operations about bundle_recipients

### Available Operations

* [getBundleRecipients](#getbundlerecipients) - List Bundle Recipients
* [postBundleRecipients](#postbundlerecipients) - Create Bundle Recipient

## getBundleRecipients

List Bundle Recipients

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBundleRecipientsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBundleRecipientsRequest();
    $request->bundleId = 863856;
    $request->cursor = 'soluta';
    $request->filter = [
        'laborum' => 'totam',
    ];
    $request->perPage = 276894;
    $request->sortBy = [
        'dolores' => 'distinctio',
    ];
    $request->userId = 704474;

    $response = $sdk->bundleRecipients->getBundleRecipients($request);

    if ($response->bundleRecipientEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBundleRecipients

Create Bundle Recipient

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostBundleRecipientsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostBundleRecipientsRequestBody();
    $request->bundleId = 396060;
    $request->company = 'Acme Ltd';
    $request->name = 'John Smith';
    $request->note = 'Just a note.';
    $request->recipient = 'johndoe@gmail.com';
    $request->shareAfterCreate = false;
    $request->userId = 463150;

    $response = $sdk->bundleRecipients->postBundleRecipients($request);

    if ($response->bundleRecipientEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
