# tags

### Available Operations

* [collectionTagsAll](#collectiontagsall) - List Tags

## collectionTagsAll

List Tags

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTagsAllRequest;
use \OpenAPI\OpenAPI\Models\Operations\CollectionTagsAllSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CollectionTagsAllRequest();
    $request->collectionId = 'apideck-io';
    $request->cursor = 'quasi';
    $request->fields = 'reiciendis';
    $request->limit = 976460;
    $request->raw = false;
    $request->xApideckAppId = 'vero';
    $request->xApideckConsumerId = 'nihil';
    $request->xApideckServiceId = 'praesentium';

    $requestSecurity = new CollectionTagsAllSecurity();
    $requestSecurity->apiKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->tags->collectionTagsAll($request, $requestSecurity);

    if ($response->getCollectionTagsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
