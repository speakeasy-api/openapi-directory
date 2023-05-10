# timeline

### Available Operations

* [getIncidents](#getincidents) - Get incidents logs.

## getIncidents

By default, provide all incidents. Results are paginated. Some filters can be set via query parameters.<br><br>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetIncidentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIncidentsRequest();
    $request->endDate = 'blanditiis';
    $request->id = 405942;
    $request->page = 153627;
    $request->size = 24313;
    $request->startDate = 'vel';
    $request->state = 'nostrum';
    $request->weboobId = 'saepe';

    $response = $sdk->timeline->getIncidents($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
