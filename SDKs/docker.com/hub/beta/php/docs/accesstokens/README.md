# accessTokens

## Overview

The Personal Access Token endpoints lets you manage personal access tokens. For more 
information, see [Access Tokens](https://docs.docker.com/docker-hub/access-tokens/).

You can use a personal access token instead of a password in the [Docker CLI](https://docs.docker.com/engine/reference/commandline/cli/) 
or in the [Create an authentication token](#operation/PostUsersLogin) route to obtain a bearer 
token.

### Scopes

For each scope grouping (in this case "repo"), you only need to define 1 scope as any lower 
scopes are assumed. For example: If you define `repo:write`, the API assumes the scope of both 
`repo:read` *and* `repo:public_read` as well. If you were to define both `repo:write` *and* 
`repo:read`, then `repo:read` is assumed by `repo:write` and ignored.

***Treat your personal access token like your password and keep it secret. You cannot retrieve 
your token after it is generated.***


### Available Operations

* [deleteV2AccessTokensUuid](#deletev2accesstokensuuid) - Delete a personal access token
* [getV2AccessTokens](#getv2accesstokens) - Get a list of personal access tokens
* [getV2AccessTokensUuid](#getv2accesstokensuuid) - Get a personal access token
* [patchV2AccessTokensUuid](#patchv2accesstokensuuid) - Update a personal access token
* [postV2AccessTokens](#postv2accesstokens) - Create a personal access token

## deleteV2AccessTokensUuid

Deletes a personal access token permanently. This cannot be undone.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteV2AccessTokensUuidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteV2AccessTokensUuidRequest();
    $request->uuid = 'a05dfc2d-df7c-4c78-8a1b-a928fc816742';

    $response = $sdk->accessTokens->deleteV2AccessTokensUuid($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2AccessTokens

Returns a paginated list of personal access tokens.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2AccessTokensRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2AccessTokensRequest();
    $request->page = 7742.34;
    $request->pageSize = 7369.18;

    $response = $sdk->accessTokens->getV2AccessTokens($request);

    if ($response->getAccessTokensResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getV2AccessTokensUuid

Returns a personal access token by UUID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetV2AccessTokensUuidRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetV2AccessTokensUuidRequest();
    $request->uuid = '73920592-9396-4fea-b596-eb10faaa2352';

    $response = $sdk->accessTokens->getV2AccessTokensUuid($request);

    if ($response->getV2AccessTokensUuid200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchV2AccessTokensUuid

Updates a personal access token partially. You can either update the
token's label or enable/disable it.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchV2AccessTokensUuidRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatchAccessTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchV2AccessTokensUuidRequest();
    $request->patchAccessTokenRequest = new PatchAccessTokenRequest();
    $request->patchAccessTokenRequest->isActive = false;
    $request->patchAccessTokenRequest->tokenLabel = 'My read only token';
    $request->uuid = 'c5955907-aff1-4a3a-afa9-467739251aa5';

    $response = $sdk->accessTokens->patchV2AccessTokensUuid($request);

    if ($response->patchAccessTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postV2AccessTokens

Creates and returns a personal access token.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CreateAccessTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAccessTokenRequest();
    $request->scopes = [
        'quo',
    ];
    $request->tokenLabel = 'My read only token';

    $response = $sdk->accessTokens->postV2AccessTokens($request);

    if ($response->createAccessTokensResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
