# destinationOauth

## Overview

Source OAuth related resources to delegate access from user.

### Available Operations

* [completeDestinationOAuth](#completedestinationoauth) - Given a destination def ID generate an access/refresh token etc.
* [getDestinationOAuthConsent](#getdestinationoauthconsent) - Given a destination connector definition ID, return the URL to the consent screen where to redirect the user to.
* [setInstancewideDestinationOauthParams](#setinstancewidedestinationoauthparams) - Sets instancewide variables to be used for the oauth flow when creating this destination. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


## completeDestinationOAuth

Given a destination def ID generate an access/refresh token etc.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CompleteDestinationOAuthRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompleteDestinationOAuthRequest();
    $request->destinationDefinitionId = '79eeb966-5b85-4efb-902b-ae0be2d78225';
    $request->destinationId = '9e3ea4b5-197f-4924-83da-7ce52b895c53';
    $request->oAuthInputConfiguration = 'in';
    $request->queryParams = [
        'eum' => 'modi',
        'corporis' => 'magnam',
        'voluptates' => 'maiores',
        'tempore' => 'aperiam',
    ];
    $request->redirectUrl = 'libero';
    $request->workspaceId = '34896c3c-a5ac-4fbe-afd5-707577929177';

    $response = $sdk->destinationOauth->completeDestinationOAuth($request);

    if ($response->completeOAuthResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDestinationOAuthConsent

Given a destination connector definition ID, return the URL to the consent screen where to redirect the user to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DestinationOauthConsentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DestinationOauthConsentRequest();
    $request->destinationDefinitionId = 'deac646e-cb57-4340-9e3e-b1e5a2b12eb0';
    $request->destinationId = '7f116db9-9545-4fc9-9fa8-8970e189dbb3';
    $request->oAuthInputConfiguration = 'doloremque';
    $request->redirectUrl = 'delectus';
    $request->workspaceId = 'cb33ea05-5b19-47cd-84e2-f52d82d3513b';

    $response = $sdk->destinationOauth->getDestinationOAuthConsent($request);

    if ($response->oAuthConsentRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setInstancewideDestinationOauthParams

Sets instancewide variables to be used for the oauth flow when creating this destination. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SetInstancewideDestinationOauthParamsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetInstancewideDestinationOauthParamsRequestBody();
    $request->destinationDefinitionId = 'b6f48b65-6bcd-4b35-bf2e-4b27537a8cd9';
    $request->params = [
        'ducimus' => 'dolor',
        'dicta' => 'error',
        'porro' => 'vitae',
        'dignissimos' => 'esse',
    ];

    $response = $sdk->destinationOauth->setInstancewideDestinationOauthParams($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
