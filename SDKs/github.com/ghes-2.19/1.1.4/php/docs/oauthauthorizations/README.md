# oauthAuthorizations

## Overview

Manage access of OAuth applications

### Available Operations

* [oauthAuthorizationsCheckAuthorization](#oauthauthorizationscheckauthorization) - Check an authorization
* [~~oauthAuthorizationsCreateAuthorization~~](#oauthauthorizationscreateauthorization) - Create a new authorization :warning: **Deprecated**
* [~~oauthAuthorizationsDeleteAuthorization~~](#oauthauthorizationsdeleteauthorization) - Delete an authorization :warning: **Deprecated**
* [~~oauthAuthorizationsDeleteGrant~~](#oauthauthorizationsdeletegrant) - Delete a grant :warning: **Deprecated**
* [~~oauthAuthorizationsGetAuthorization~~](#oauthauthorizationsgetauthorization) - Get a single authorization :warning: **Deprecated**
* [~~oauthAuthorizationsGetGrant~~](#oauthauthorizationsgetgrant) - Get a single grant :warning: **Deprecated**
* [~~oauthAuthorizationsGetOrCreateAuthorizationForApp~~](#oauthauthorizationsgetorcreateauthorizationforapp) - Get-or-create an authorization for a specific app :warning: **Deprecated**
* [~~oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint~~](#oauthauthorizationsgetorcreateauthorizationforappandfingerprint) - Get-or-create an authorization for a specific app and fingerprint :warning: **Deprecated**
* [~~oauthAuthorizationsListAuthorizations~~](#oauthauthorizationslistauthorizations) - List your authorizations :warning: **Deprecated**
* [~~oauthAuthorizationsListGrants~~](#oauthauthorizationslistgrants) - List your grants :warning: **Deprecated**
* [oauthAuthorizationsResetAuthorization](#oauthauthorizationsresetauthorization) - Reset an authorization
* [oauthAuthorizationsRevokeAuthorizationForApplication](#oauthauthorizationsrevokeauthorizationforapplication) - Revoke an authorization for an application
* [oauthAuthorizationsRevokeGrantForApplication](#oauthauthorizationsrevokegrantforapplication) - Revoke a grant for an application
* [~~oauthAuthorizationsUpdateAuthorization~~](#oauthauthorizationsupdateauthorization) - Update an existing authorization :warning: **Deprecated**

## oauthAuthorizationsCheckAuthorization

OAuth applications can use a special API method for checking OAuth token validity without running afoul of normal rate limits for failed login attempts. Authentication works differently with this particular endpoint. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.19/rest/overview/other-authentication-methods#basic-authentication) when accessing it, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations#check-an-authorization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OauthAuthorizationsCheckAuthorizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OauthAuthorizationsCheckAuthorizationRequest();
    $request->accessToken = 'fugiat';
    $request->clientId = 'vel';

    $response = $sdk->oauthAuthorizations->oauthAuthorizationsCheckAuthorization($request);

    if ($response->authorizationWithUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~oauthAuthorizationsCreateAuthorization~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.19/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

**Warning:** Apps must use the [web application flow](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub Enterprise Server SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub Enterprise Server SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).

Creates OAuth tokens using [Basic Authentication](https://docs.github.com/enterprise-server@2.19/rest/overview/other-authentication-methods#basic-authentication). If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@2.19/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."

To create tokens for a particular OAuth application using this endpoint, you must authenticate as the user you want to create an authorization for and provide the app's client ID and secret, found on your OAuth application's settings page. If your OAuth application intends to create multiple tokens for one user, use `fingerprint` to differentiate between them.

You can also create tokens on GitHub Enterprise Server from the [personal access tokens settings](https://github.com/settings/tokens) page. Read more about these tokens in [the GitHub Help documentation](https://help.github.com/articles/creating-an-access-token-for-command-line-use).

Organizations that enforce SAML SSO require personal access tokens to be allowed. Read more about allowing tokens in [the GitHub Help documentation](https://help.github.com/articles/about-identity-and-access-management-with-saml-single-sign-on).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations#create-a-new-authorization>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OauthAuthorizationsCreateAuthorizationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OauthAuthorizationsCreateAuthorizationRequestBody();
    $request->clientId = 'ducimus';
    $request->clientSecret = 'quos';
    $request->fingerprint = 'vel';
    $request->note = 'Update all gems';
    $request->noteUrl = 'labore';
    $request->scopes = [
        'facilis',
        'cum',
        'commodi',
        'in',
    ];

    $response = $sdk->oauthAuthorizations->oauthAuthorizationsCreateAuthorization($request);

    if ($response->authorization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~oauthAuthorizationsDeleteAuthorization~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations#delete-an-authorization>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OauthAuthorizationsDeleteAuthorizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OauthAuthorizationsDeleteAuthorizationRequest();
    $request->authorizationId = 360545;

    $response = $sdk->oauthAuthorizations->oauthAuthorizationsDeleteAuthorization($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~oauthAuthorizationsDeleteGrant~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.19/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations/) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for your user. Once deleted, the application has no access to your account and is no longer listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations#delete-a-grant>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OauthAuthorizationsDeleteGrantRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OauthAuthorizationsDeleteGrantRequest();
    $request->grantId = 968904;

    $response = $sdk->oauthAuthorizations->oauthAuthorizationsDeleteGrant($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~oauthAuthorizationsGetAuthorization~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations#get-a-single-authorization>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OauthAuthorizationsGetAuthorizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OauthAuthorizationsGetAuthorizationRequest();
    $request->authorizationId = 828657;

    $response = $sdk->oauthAuthorizations->oauthAuthorizationsGetAuthorization($request);

    if ($response->authorization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~oauthAuthorizationsGetGrant~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations#get-a-single-grant>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OauthAuthorizationsGetGrantRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OauthAuthorizationsGetGrantRequest();
    $request->grantId = 363161;

    $response = $sdk->oauthAuthorizations->oauthAuthorizationsGetGrant($request);

    if ($response->applicationGrant !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~oauthAuthorizationsGetOrCreateAuthorizationForApp~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.19/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

**Warning:** Apps must use the [web application flow](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub Enterprise Server SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub Enterprise Server SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).

Creates a new authorization for the specified OAuth application, only if an authorization for that application doesn't already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.

If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@2.19/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.19/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OauthAuthorizationsGetOrCreateAuthorizationForAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OauthAuthorizationsGetOrCreateAuthorizationForAppRequest();
    $request->requestBody = new OauthAuthorizationsGetOrCreateAuthorizationForAppRequestBody();
    $request->requestBody->clientSecret = 'recusandae';
    $request->requestBody->fingerprint = 'aliquid';
    $request->requestBody->note = 'Update all gems';
    $request->requestBody->noteUrl = 'aperiam';
    $request->requestBody->scopes = [
        'consectetur',
        'in',
        'exercitationem',
    ];
    $request->clientId = 'earum';

    $response = $sdk->oauthAuthorizations->oauthAuthorizationsGetOrCreateAuthorizationForApp($request);

    if ($response->authorization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.19/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

**Warning:** Apps must use the [web application flow](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow) to obtain OAuth tokens that work with GitHub Enterprise Server SAML organizations. OAuth tokens created using the Authorizations API will be unable to access GitHub Enterprise Server SAML organizations. For more information, see the [blog post](https://developer.github.com/changes/2019-11-05-deprecated-passwords-and-authorizations-api).

This method will create a new authorization for the specified OAuth application, only if an authorization for that application and fingerprint do not already exist for the user. The URL includes the 20 character client ID for the OAuth app that is requesting the token. `fingerprint` is a unique string to distinguish an authorization from others created for the same client ID and user. It returns the user's existing authorization for the application if one is present. Otherwise, it creates and returns a new one.

If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@2.19/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations#get-or-create-an-authorization-for-a-specific-app-and-fingerprint>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest;
use \OpenAPI\OpenAPI\Models\Operations\OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequest();
    $request->requestBody = new OauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprintRequestBody();
    $request->requestBody->clientSecret = 'facere';
    $request->requestBody->note = 'Update all gems';
    $request->requestBody->noteUrl = 'numquam';
    $request->requestBody->scopes = [
        'suscipit',
        'reiciendis',
        'quidem',
        'saepe',
    ];
    $request->clientId = 'necessitatibus';
    $request->fingerprint = 'dolore';

    $response = $sdk->oauthAuthorizations->oauthAuthorizationsGetOrCreateAuthorizationForAppAndFingerprint($request);

    if ($response->authorization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~oauthAuthorizationsListAuthorizations~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.19/apps/building-oauth-apps/authorizing-oauth-apps/#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations#list-your-authorizations>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OauthAuthorizationsListAuthorizationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OauthAuthorizationsListAuthorizationsRequest();
    $request->clientId = 'sunt';
    $request->page = 992012;
    $request->perPage = 241545;

    $response = $sdk->oauthAuthorizations->oauthAuthorizationsListAuthorizations($request);

    if ($response->authorizations !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~oauthAuthorizationsListGrants~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.19/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

You can use this API to list the set of OAuth applications that have been granted access to your account. Unlike the [list your authorizations](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations#list-your-authorizations) API, this API does not manage individual tokens. This API will return one entry for each OAuth application that has been granted access to your account, regardless of the number of tokens an application has generated for your user. The list of OAuth applications returned matches what is shown on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized). The `scopes` returned are the union of scopes authorized for the application. For example, if an application has one token with `repo` scope and another token with `user` scope, the grant will return `["repo", "user"]`.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations#list-your-grants>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OauthAuthorizationsListGrantsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OauthAuthorizationsListGrantsRequest();
    $request->clientId = 'non';
    $request->page = 228263;
    $request->perPage = 105906;

    $response = $sdk->oauthAuthorizations->oauthAuthorizationsListGrants($request);

    if ($response->applicationGrants !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## oauthAuthorizationsResetAuthorization

OAuth applications can use this API method to reset a valid OAuth token without end user involvement. Applications must save the "token" property in the response, because changes take effect immediately. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.19/rest/overview/other-authentication-methods#basic-authentication) when accessing it, where the username is the OAuth application `client_id` and the password is its `client_secret`. Invalid tokens will return `404 NOT FOUND`.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations#reset-an-authorization>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OauthAuthorizationsResetAuthorizationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OauthAuthorizationsResetAuthorizationRequest();
    $request->accessToken = 'dignissimos';
    $request->clientId = 'a';

    $response = $sdk->oauthAuthorizations->oauthAuthorizationsResetAuthorization($request);

    if ($response->authorizationWithUser !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## oauthAuthorizationsRevokeAuthorizationForApplication

OAuth application owners can revoke a single token for an OAuth application. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.19/rest/overview/other-authentication-methods#basic-authentication) for this method, where the username is the OAuth application `client_id` and the password is its `client_secret`.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations#revoke-an-authorization-for-an-application>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OauthAuthorizationsRevokeAuthorizationForApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OauthAuthorizationsRevokeAuthorizationForApplicationRequest();
    $request->accessToken = 'debitis';
    $request->clientId = 'consectetur';

    $response = $sdk->oauthAuthorizations->oauthAuthorizationsRevokeAuthorizationForApplication($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## oauthAuthorizationsRevokeGrantForApplication

OAuth application owners can revoke a grant for their OAuth application and a specific user. You must use [Basic Authentication](https://docs.github.com/enterprise-server@2.19/rest/overview/other-authentication-methods#basic-authentication) for this method, where the username is the OAuth application `client_id` and the password is its `client_secret`. You must also provide a valid token as `:access_token` and the grant for the token's owner will be deleted.

Deleting an OAuth application's grant will also delete all OAuth tokens associated with the application for the user. Once deleted, the application will have no access to the user's account and will no longer be listed on [the application authorizations settings screen within GitHub](https://github.com/settings/applications#authorized).

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations#revoke-a-grant-for-an-application>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OauthAuthorizationsRevokeGrantForApplicationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OauthAuthorizationsRevokeGrantForApplicationRequest();
    $request->accessToken = 'corporis';
    $request->clientId = 'harum';

    $response = $sdk->oauthAuthorizations->oauthAuthorizationsRevokeGrantForApplication($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~oauthAuthorizationsUpdateAuthorization~~

**Deprecation Notice:** GitHub Enterprise Server will discontinue the [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations/), which is used by integrations to create personal access tokens and OAuth tokens, and you must now create these tokens using our [web application flow](https://docs.github.com/enterprise-server@2.19/developers/apps/authorizing-oauth-apps#web-application-flow). The [OAuth Authorizations API](https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations) will be removed on November, 13, 2020. For more information, including scheduled brownouts, see the [blog post](https://developer.github.com/changes/2020-02-14-deprecating-oauth-auth-endpoint/).

If you have two-factor authentication setup, Basic Authentication for this endpoint requires that you use a one-time password (OTP) and your username and password instead of tokens. For more information, see "[Working with two-factor authentication](https://docs.github.com/enterprise-server@2.19/rest/overview/other-authentication-methods#working-with-two-factor-authentication)."

You can only send one of these scope keys at a time.

API method documentation
<https://docs.github.com/enterprise-server@2.19/rest/reference/oauth-authorizations#update-an-existing-authorization>

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OauthAuthorizationsUpdateAuthorizationRequest;
use \OpenAPI\OpenAPI\Models\Operations\OauthAuthorizationsUpdateAuthorizationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OauthAuthorizationsUpdateAuthorizationRequest();
    $request->requestBody = new OauthAuthorizationsUpdateAuthorizationRequestBody();
    $request->requestBody->addScopes = [
        'ipsa',
        'voluptates',
    ];
    $request->requestBody->fingerprint = 'libero';
    $request->requestBody->note = 'Update all gems';
    $request->requestBody->noteUrl = 'vitae';
    $request->requestBody->removeScopes = [
        'similique',
        'tempora',
        'aspernatur',
        'voluptas',
    ];
    $request->requestBody->scopes = [
        'voluptas',
        'minima',
    ];
    $request->authorizationId = 748789;

    $response = $sdk->oauthAuthorizations->oauthAuthorizationsUpdateAuthorization($request);

    if ($response->authorization !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
