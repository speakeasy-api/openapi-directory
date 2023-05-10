# as2IncomingMessages

## Overview

Operations about as2_incoming_messages

### Available Operations

* [getAs2IncomingMessages](#getas2incomingmessages) - List As2 Incoming Messages

## getAs2IncomingMessages

List As2 Incoming Messages

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAs2IncomingMessagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAs2IncomingMessagesRequest();
    $request->as2PartnerId = 222321;
    $request->cursor = 'natus';
    $request->filter = [
        'hic' => 'saepe',
        'fuga' => 'in',
    ];
    $request->filterGt = [
        'iste' => 'iure',
        'saepe' => 'quidem',
    ];
    $request->filterGteq = [
        'ipsa' => 'reiciendis',
    ];
    $request->filterLt = [
        'mollitia' => 'laborum',
        'dolores' => 'dolorem',
        'corporis' => 'explicabo',
    ];
    $request->filterLteq = [
        'enim' => 'omnis',
        'nemo' => 'minima',
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ];
    $request->perPage = 988374;
    $request->sortBy = [
        'architecto' => 'mollitia',
        'dolorem' => 'culpa',
        'consequuntur' => 'repellat',
        'mollitia' => 'occaecati',
    ];

    $response = $sdk->as2IncomingMessages->getAs2IncomingMessages($request);

    if ($response->as2IncomingMessageEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
