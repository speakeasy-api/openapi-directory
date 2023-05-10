# as2OutgoingMessages

## Overview

Operations about as2_outgoing_messages

### Available Operations

* [getAs2OutgoingMessages](#getas2outgoingmessages) - List As2 Outgoing Messages

## getAs2OutgoingMessages

List As2 Outgoing Messages

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAs2OutgoingMessagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAs2OutgoingMessagesRequest();
    $request->as2PartnerId = 253291;
    $request->cursor = 'commodi';
    $request->filter = [
        'molestiae' => 'velit',
        'error' => 'quia',
    ];
    $request->filterGt = [
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->filterGteq = [
        'quo' => 'sequi',
    ];
    $request->filterLt = [
        'ipsam' => 'id',
        'possimus' => 'aut',
        'quasi' => 'error',
        'temporibus' => 'laborum',
    ];
    $request->filterLteq = [
        'reiciendis' => 'voluptatibus',
    ];
    $request->perPage = 878194;
    $request->sortBy = [
        'praesentium' => 'voluptatibus',
        'ipsa' => 'omnis',
    ];

    $response = $sdk->as2OutgoingMessages->getAs2OutgoingMessages($request);

    if ($response->as2OutgoingMessageEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
