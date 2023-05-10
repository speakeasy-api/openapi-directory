# discord

### Available Operations

* [discordGetDiscordGet](#discordgetdiscordget) - Discord Get
* [discordPostDiscordPost](#discordpostdiscordpost) - Discord Post

## discordGetDiscordGet

Discord Get

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiscordGetDiscordGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscordGetDiscordGetRequest();
    $request->authorization = 'corrupti';
    $request->base64Message = 'illum';
    $request->channel = 'vel';
    $request->message = 'error';

    $response = $sdk->discord->discordGetDiscordGet($request);

    if ($response->discordGetDiscordGet200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## discordPostDiscordPost

Discord Post

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DiscordPostDiscordPostRequest;
use \OpenAPI\OpenAPI\Models\Shared\DiscordMessageRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DiscordPostDiscordPostRequest();
    $request->discordMessageRequest = new DiscordMessageRequest();
    $request->discordMessageRequest->base64Message = 'deserunt';
    $request->discordMessageRequest->channel = 'suscipit';
    $request->discordMessageRequest->message = 'iure';
    $request->authorization = 'magnam';

    $response = $sdk->discord->discordPostDiscordPost($request);

    if ($response->discordPostDiscordPost200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
