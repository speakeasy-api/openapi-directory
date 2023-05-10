# slack

### Available Operations

* [slackGetSlackGet](#slackgetslackget) - Slack Get
* [slackPostSlackPost](#slackpostslackpost) - Slack Post

## slackGetSlackGet

Slack Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SlackGetSlackGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SlackGetSlackGetRequest();
    $request->authorization = 'debitis';
    $request->base64Message = 'ipsa';
    $request->channel = 'delectus';
    $request->message = 'tempora';

    $response = $sdk->slack->slackGetSlackGet($request);

    if ($response->slackGetSlackGet200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## slackPostSlackPost

Slack Post

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\SlackPostSlackPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\SlackMessageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SlackPostSlackPostRequest();
    $request->slackMessageRequest = new SlackMessageRequest();
    $request->slackMessageRequest->base64Message = 'suscipit';
    $request->slackMessageRequest->channel = 'molestiae';
    $request->slackMessageRequest->message = 'minus';
    $request->authorization = 'placeat';

    $response = $sdk->slack->slackPostSlackPost($request);

    if ($response->slackPostSlackPost200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
