# deliveryNote

### Available Operations

* [orderApiCreateDeliveryNote](#orderapicreatedeliverynote) - Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

## orderApiCreateDeliveryNote

Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OrderApiCreateDeliveryNoteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OrderApiCreateDeliveryNoteRequest();
    $request->id = 952871;
    $request->includePdf = false;
    $request->sendToCloudId = 725595;

    $response = $sdk->deliveryNote->orderApiCreateDeliveryNote($request);

    if ($response->orderApiCreateDeliveryNote200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
