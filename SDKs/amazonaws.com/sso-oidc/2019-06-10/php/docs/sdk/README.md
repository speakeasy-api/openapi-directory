# SDK

## Overview

<p>AWS IAM Identity Center (successor to AWS Single Sign-On) OpenID Connect (OIDC) is a web service that enables a client (such as AWS CLI or a native application) to register with IAM Identity Center. The service also enables the client to fetch the user’s access token upon successful authentication and authorization with IAM Identity Center.</p> <note> <p>Although AWS Single Sign-On was renamed, the <code>sso</code> and <code>identitystore</code> API namespaces will continue to retain their original name for backward compatibility purposes. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html#renamed">IAM Identity Center rename</a>.</p> </note> <p> <b>Considerations for Using This Guide</b> </p> <p>Before you begin using this guide, we recommend that you first review the following important information about how the IAM Identity Center OIDC service works.</p> <ul> <li> <p>The IAM Identity Center OIDC service currently implements only the portions of the OAuth 2.0 Device Authorization Grant standard (<a href="https://tools.ietf.org/html/rfc8628">https://tools.ietf.org/html/rfc8628</a>) that are necessary to enable single sign-on authentication with the AWS CLI. Support for other OIDC flows frequently needed for native applications, such as Authorization Code Flow (+ PKCE), will be addressed in future releases.</p> </li> <li> <p>The service emits only OIDC access tokens, such that obtaining a new token (For example, token refresh) requires explicit user re-authentication.</p> </li> <li> <p>The access tokens provided by this service grant access to all AWS account entitlements assigned to an IAM Identity Center user, not just a particular application.</p> </li> <li> <p>The documentation in this guide does not describe the mechanism to convert the access token into AWS Auth (“sigv4”) credentials for use with IAM-protected AWS service endpoints. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/PortalAPIReference/API_GetRoleCredentials.html">GetRoleCredentials</a> in the <i>IAM Identity Center Portal API Reference Guide</i>.</p> </li> </ul> <p>For general information about IAM Identity Center, see <a href="https://docs.aws.amazon.com/singlesignon/latest/userguide/what-is.html">What is IAM Identity Center?</a> in the <i>IAM Identity Center User Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/oidc/>
### Available Operations

* [createToken](#createtoken) - Creates and returns an access token for the authorized client. The access token issued will be used to fetch short-term credentials for the assigned roles in the AWS account.
* [registerClient](#registerclient) - Registers a client with IAM Identity Center. This allows clients to initiate device authorization. The output should be persisted for reuse through many authentication requests.
* [startDeviceAuthorization](#startdeviceauthorization) - Initiates device authorization by requesting a pair of verification codes from the authorization service.

## createToken

Creates and returns an access token for the authorized client. The access token issued will be used to fetch short-term credentials for the assigned roles in the AWS account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTokenRequest();
    $request->requestBody = new CreateTokenRequestBody();
    $request->requestBody->clientId = 'molestiae';
    $request->requestBody->clientSecret = 'minus';
    $request->requestBody->code = 'placeat';
    $request->requestBody->deviceCode = 'voluptatum';
    $request->requestBody->grantType = 'iusto';
    $request->requestBody->redirectUri = 'excepturi';
    $request->requestBody->refreshToken = 'nisi';
    $request->requestBody->scope = [
        'temporibus',
        'ab',
        'quis',
        'veritatis',
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->createToken($request);

    if ($response->createTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerClient

Registers a client with IAM Identity Center. This allows clients to initiate device authorization. The output should be persisted for reuse through many authentication requests.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterClientRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterClientRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterClientRequest();
    $request->requestBody = new RegisterClientRequestBody();
    $request->requestBody->clientName = 'at';
    $request->requestBody->clientType = 'at';
    $request->requestBody->scopes = [
        'molestiae',
        'quod',
        'quod',
        'esse',
    ];
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'occaecati';

    $response = $sdk->sdk->registerClient($request);

    if ($response->registerClientResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startDeviceAuthorization

Initiates device authorization by requesting a pair of verification codes from the authorization service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartDeviceAuthorizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartDeviceAuthorizationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartDeviceAuthorizationRequest();
    $request->requestBody = new StartDeviceAuthorizationRequestBody();
    $request->requestBody->clientId = 'fugit';
    $request->requestBody->clientSecret = 'deleniti';
    $request->requestBody->startUrl = 'hic';
    $request->xAmzAlgorithm = 'optio';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'beatae';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->startDeviceAuthorization($request);

    if ($response->startDeviceAuthorizationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
