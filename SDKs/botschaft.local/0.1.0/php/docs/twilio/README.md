# twilio

### Available Operations

* [twilioMessageGetTwilioGet](#twiliomessagegettwilioget) - Twilio Message Get
* [twilioMessagePostTwilioPost](#twiliomessageposttwiliopost) - Twilio Message Post

## twilioMessageGetTwilioGet

Twilio Message Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TwilioMessageGetTwilioGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TwilioMessageGetTwilioGetRequest();
    $request->authorization = 'ab';
    $request->base64Message = 'quis';
    $request->message = 'veritatis';
    $request->to = 'deserunt';

    $response = $sdk->twilio->twilioMessageGetTwilioGet($request);

    if ($response->twilioMessageGetTwilioGet200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## twilioMessagePostTwilioPost

Twilio Message Post

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TwilioMessagePostTwilioPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\TwilioMessageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TwilioMessagePostTwilioPostRequest();
    $request->twilioMessageRequest = new TwilioMessageRequest();
    $request->twilioMessageRequest->base64Message = 'perferendis';
    $request->twilioMessageRequest->message = 'ipsam';
    $request->twilioMessageRequest->to = 'repellendus';
    $request->authorization = 'sapiente';

    $response = $sdk->twilio->twilioMessagePostTwilioPost($request);

    if ($response->twilioMessagePostTwilioPost200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
