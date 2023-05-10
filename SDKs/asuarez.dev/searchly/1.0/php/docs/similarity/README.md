# similarity

### Available Operations

* [srcSearchlyApiV1ControllersSimilarityByContent](#srcsearchlyapiv1controllerssimilaritybycontent) - API endpoint to search similarity using content
* [srcSearchlyApiV1ControllersSimilarityBySong](#srcsearchlyapiv1controllerssimilaritybysong) - API endpoint to search similarity using a song identifier

## srcSearchlyApiV1ControllersSimilarityByContent

Endpoint for an end-user client to search similarity by content.

If you want to run the /similarity/by_content operation, you can do so via an HTTP POST command to the following URL:

```
https://searchly.asuarez.dev/api/v1/similarity/by_content
```


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SrcSearchlyApiV1ControllersSimilarityByContentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SrcSearchlyApiV1ControllersSimilarityByContentRequestBody();
    $request->content = 'provident';

    $response = $sdk->similarity->srcSearchlyApiV1ControllersSimilarityByContent($request);

    if ($response->apiResponseSimilarity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## srcSearchlyApiV1ControllersSimilarityBySong

Endpoint for an end-user client to search similarity by song identifier.

If you want to run the /similarity/by_song operation, you can do so via an HTTP GET command to the following URL:

```
https://searchly.asuarez.dev/api/v1/similarity/by_song
```


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SrcSearchlyApiV1ControllersSimilarityBySongRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SrcSearchlyApiV1ControllersSimilarityBySongRequest();
    $request->songId = 715190;

    $response = $sdk->similarity->srcSearchlyApiV1ControllersSimilarityBySong($request);

    if ($response->apiResponseSimilarity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
