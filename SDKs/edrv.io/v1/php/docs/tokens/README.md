# tokens

### Available Operations

* [deleteToken](#deletetoken) - Use to delete a token
* [getToken](#gettoken) - Get a single token's data
* [getTokens](#gettokens) - List tokens
* [patchToken](#patchtoken) - Update a token
* [postTokens](#posttokens) - Create a new token

## deleteToken

Use to delete a token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTokenRequest();
    $request->id = 'a8e4824d-0ab4-4075-888e-51862065e904';

    $response = $sdk->tokens->deleteToken($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getToken

Get a single token's data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTokenRequest();
    $request->id = 'f3b1194b-8abf-4603-a79f-9dfe0ab7da8a';
    $request->includeDriver = false;
    $request->includeOrganization = false;

    $response = $sdk->tokens->getToken($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTokens

List tokens

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTokensRequest;
use \OpenAPI\OpenAPI\Models\Shared\SortOrder1Enum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTokensRequest();
    $request->createdAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-21T09:05:01.168Z');
    $request->createdAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-03-30T02:42:49.718Z');
    $request->includeDriver = false;
    $request->includeOrganization = false;
    $request->paginateEnabled = false;
    $request->paginateLimit = 97243;
    $request->paginatePage = 'atque';
    $request->sortBy = 'reprehenderit';
    $request->sortOrder = SortOrder1Enum::ASC;
    $request->updatedAtDollarGte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-27T08:02:14.031Z');
    $request->updatedAtDollarLte = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-22T03:09:11.884Z');

    $response = $sdk->tokens->getTokens($request);

    if ($response->getTokens200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchToken

Update a token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PatchTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchTokenRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PatchTokenRequestBodyChannelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchTokenRequest();
    $request->requestBody = new PatchTokenRequestBody();
    $request->requestBody->active = false;
    $request->requestBody->channel = PatchTokenRequestBodyChannelEnum::PHYSICAL;
    $request->requestBody->driver = 'esse';
    $request->requestBody->physicalId = 'amet';
    $request->requestBody->type = 'assumenda';
    $request->id = '689eee95-26f8-4d98-ae88-1ead4f0e1012';

    $response = $sdk->tokens->patchToken($request);

    if ($response->patchToken201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTokens

Create a new token

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PostTokensRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostTokensRequestBodyChannelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostTokensRequestBody();
    $request->active = false;
    $request->channel = PostTokensRequestBodyChannelEnum::SLACK;
    $request->driver = 'laboriosam';
    $request->physicalId = 'velit';
    $request->type = 'a';

    $response = $sdk->tokens->postTokens($request);

    if ($response->postTokens201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
