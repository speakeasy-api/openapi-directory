# inboxUploads

## Overview

Operations about inbox_uploads

### Available Operations

* [getInboxUploads](#getinboxuploads) - List Inbox Uploads

## getInboxUploads

List Inbox Uploads

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetInboxUploadsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetInboxUploadsRequest();
    $request->cursor = 'adipisci';
    $request->filter = [
        'dolores' => 'blanditiis',
        'in' => 'dolore',
        'aliquam' => 'officiis',
        'temporibus' => 'ullam',
    ];
    $request->filterGt = [
        'cum' => 'blanditiis',
    ];
    $request->filterGteq = [
        'hic' => 'nesciunt',
        'culpa' => 'corrupti',
        'pariatur' => 'totam',
    ];
    $request->filterLt = [
        'exercitationem' => 'nobis',
        'sit' => 'rerum',
        'sed' => 'reiciendis',
        'explicabo' => 'asperiores',
    ];
    $request->filterLteq = [
        'voluptate' => 'expedita',
        'ab' => 'iste',
        'dolore' => 'laborum',
    ];
    $request->inboxId = 152354;
    $request->inboxRegistrationId = 447516;
    $request->perPage = 417486;
    $request->sortBy = [
        'explicabo' => 'voluptas',
        'unde' => 'architecto',
        'suscipit' => 'sapiente',
    ];

    $response = $sdk->inboxUploads->getInboxUploads($request);

    if ($response->inboxUploadEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
