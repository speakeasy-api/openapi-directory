# dnsRecords

## Overview

Operations about dns_records

### Available Operations

* [getDnsRecords](#getdnsrecords) - Show site DNS configuration.

## getDnsRecords

Show site DNS configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDnsRecordsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDnsRecordsRequest();
    $request->cursor = 'dolor';
    $request->perPage = 980700;

    $response = $sdk->dnsRecords->getDnsRecords($request);

    if ($response->dnsRecordEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
