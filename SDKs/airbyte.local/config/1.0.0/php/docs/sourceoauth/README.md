# sourceOauth

## Overview

Source OAuth related resources to delegate access from user.

### Available Operations

* [completeSourceOAuth](#completesourceoauth) - Given a source def ID generate an access/refresh token etc.
* [getSourceOAuthConsent](#getsourceoauthconsent) - Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.
* [setInstancewideSourceOauthParams](#setinstancewidesourceoauthparams) - Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


## completeSourceOAuth

Given a source def ID generate an access/refresh token etc.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\CompleteSourceOauthRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompleteSourceOauthRequest();
    $request->oAuthInputConfiguration = 'asperiores';
    $request->queryParams = [
        'deserunt' => 'itaque',
        'et' => 'eos',
    ];
    $request->redirectUrl = 'impedit';
    $request->sourceDefinitionId = '6891f82c-e115-4717-a305-377dcfa89df9';
    $request->sourceId = '75e35668-6092-4e9c-bddc-5f111dea1026';
    $request->workspaceId = 'd541a4d1-90fe-4b21-b80b-ccc0dbbddb48';

    $response = $sdk->sourceOauth->completeSourceOAuth($request);

    if ($response->completeOAuthResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSourceOAuthConsent

Given a source connector definition ID, return the URL to the consent screen where to redirect the user to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SourceOauthConsentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SourceOauthConsentRequest();
    $request->oAuthInputConfiguration = 'tempora';
    $request->redirectUrl = 'esse';
    $request->sourceDefinitionId = '08fb4e39-1e6b-4c15-8c4c-4e54599ea342';
    $request->sourceId = '260e9b20-0ce7-48a1-bd8f-b7a0a116ce72';
    $request->workspaceId = '3d4097fa-30e9-4af7-a5b2-9122030d83f5';

    $response = $sdk->sourceOauth->getSourceOAuthConsent($request);

    if ($response->oAuthConsentRead !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setInstancewideSourceOauthParams

Sets instancewide variables to be used for the oauth flow when creating this source. When set, these variables will be injected into a connector's configuration before any interaction with the connector image itself. This enables running oauth flows with consistent variables e.g: the company's Google Ads developer_token, client_id, and client_secret without the user having to know about these variables.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SetInstancewideSourceOauthParamsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetInstancewideSourceOauthParamsRequestBody();
    $request->params = [
        'itaque' => 'distinctio',
        'iusto' => 'dignissimos',
        'provident' => 'occaecati',
    ];
    $request->sourceDefinitionId = 'd22e8c1f-8493-4825-bdc4-2c876c2c2dfb';

    $response = $sdk->sourceOauth->setInstancewideSourceOauthParams($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
