# api

## Overview

Manage your API Applications and Webhooks

### Available Operations

* [createApiApplication](#createapiapplication) - Create a new API Application

## createApiApplication

Create a new API Application with specified permissions

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateApiApplicationNewApiApplication;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateApiApplicationNewApiApplication();
    $request->applicationName = 'Batch Processing API';
    $request->enabled = true;
    $request->expiry = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2019-08-22T07:48:56.460Z');
    $request->ican = 857946;
    $request->numberOfPayeeApprovalsRequired = 1;
    $request->numberOfPaymentApprovalsRequired = 1;
    $request->permissions = [
        'illum',
        'vel',
        'error',
    ];

    $response = $sdk->api->createApiApplication($request);

    if ($response->apiApplication !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
