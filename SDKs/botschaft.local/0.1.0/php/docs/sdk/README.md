# SDK

### Available Operations

* [configConfigGet](#configconfigget) - Config
* [topicTopicTopicNameGet](#topictopictopicnameget) - Topic

## configConfigGet

Config

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfigConfigGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigConfigGetRequest();
    $request->authorization = 'provident';

    $response = $sdk->sdk->configConfigGet($request);

    if ($response->config !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## topicTopicTopicNameGet

Topic

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TopicTopicTopicNameGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TopicTopicTopicNameGetRequest();
    $request->authorization = 'distinctio';
    $request->base64Message = 'quibusdam';
    $request->message = 'unde';
    $request->topicName = 'nulla';

    $response = $sdk->sdk->topicTopicTopicNameGet($request);

    if ($response->topicTopicTopicNameGet200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
