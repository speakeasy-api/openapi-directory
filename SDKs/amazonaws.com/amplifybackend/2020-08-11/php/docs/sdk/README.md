# SDK

## Overview

AWS Amplify Admin API

Amazon Web Services documentation
<https://docs.aws.amazon.com/amplifybackend/>
### Available Operations

* [cloneBackend](#clonebackend) - This operation clones an existing backend.
* [createBackend](#createbackend) - This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.
* [createBackendAPI](#createbackendapi) - Creates a new backend API resource.
* [createBackendAuth](#createbackendauth) - Creates a new backend authentication resource.
* [createBackendConfig](#createbackendconfig) - Creates a config object for a backend.
* [createBackendStorage](#createbackendstorage) - Creates a backend storage resource.
* [createToken](#createtoken) - Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.
* [deleteBackend](#deletebackend) - Removes an existing environment from your Amplify project.
* [deleteBackendAPI](#deletebackendapi) - Deletes an existing backend API resource.
* [deleteBackendAuth](#deletebackendauth) - Deletes an existing backend authentication resource.
* [deleteBackendStorage](#deletebackendstorage) - Removes the specified backend storage resource.
* [deleteToken](#deletetoken) - Deletes the challenge token based on the given appId and sessionId.
* [generateBackendAPIModels](#generatebackendapimodels) - Generates a model schema for an existing backend API resource.
* [getBackend](#getbackend) - Provides project-level details for your Amplify UI project.
* [getBackendAPI](#getbackendapi) - Gets the details for a backend API.
* [getBackendAPIModels](#getbackendapimodels) - Gets a model introspection schema for an existing backend API resource.
* [getBackendAuth](#getbackendauth) - Gets a backend auth details.
* [getBackendJob](#getbackendjob) - Returns information about a specific job.
* [getBackendStorage](#getbackendstorage) - Gets details for a backend storage resource.
* [getToken](#gettoken) - Gets the challenge token based on the given appId and sessionId.
* [importBackendAuth](#importbackendauth) - Imports an existing backend authentication resource.
* [importBackendStorage](#importbackendstorage) - Imports an existing backend storage resource.
* [listBackendJobs](#listbackendjobs) - Lists the jobs for the backend of an Amplify app.
* [listS3Buckets](#lists3buckets) - The list of S3 buckets in your account.
* [removeAllBackends](#removeallbackends) - Removes all backend environments from your Amplify project.
* [removeBackendConfig](#removebackendconfig) - Removes the AWS resources required to access the Amplify Admin UI.
* [updateBackendAPI](#updatebackendapi) - Updates an existing backend API resource.
* [updateBackendAuth](#updatebackendauth) - Updates an existing backend authentication resource.
* [updateBackendConfig](#updatebackendconfig) - Updates the AWS resources required to access the Amplify Admin UI.
* [updateBackendJob](#updatebackendjob) - Updates a specific job.
* [updateBackendStorage](#updatebackendstorage) - Updates an existing backend storage resource.

## cloneBackend

This operation clones an existing backend.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CloneBackendRequest;
use \OpenAPI\OpenAPI\Models\Operations\CloneBackendRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CloneBackendRequest();
    $request->requestBody = new CloneBackendRequestBody();
    $request->requestBody->targetEnvironmentName = 'deserunt';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'ipsa';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'tempora';
    $request->appId = 'suscipit';
    $request->backendEnvironmentName = 'molestiae';

    $response = $sdk->sdk->cloneBackend($request);

    if ($response->cloneBackendResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBackend

This operation creates a backend for an Amplify app. Backends are automatically created at the time of app creation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBackendRequest();
    $request->requestBody = new CreateBackendRequestBody();
    $request->requestBody->appId = 'minus';
    $request->requestBody->appName = 'placeat';
    $request->requestBody->backendEnvironmentName = 'voluptatum';
    $request->requestBody->resourceConfig = [
        'excepturi' => 'nisi',
        'recusandae' => 'temporibus',
    ];
    $request->requestBody->resourceName = 'ab';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'repellendus';
    $request->xAmzSignedHeaders = 'sapiente';

    $response = $sdk->sdk->createBackend($request);

    if ($response->createBackendResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBackendAPI

Creates a new backend API resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAPIRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAPIRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAPIRequestBodyResourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackendAPIAuthType;
use \OpenAPI\OpenAPI\Models\Shared\BackendAPIAuthTypeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendAPIAuthTypeSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAPIRequestBodyResourceConfigConflictResolution;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAPIRequestBodyResourceConfigDefaultAuthType;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBackendAPIRequest();
    $request->requestBody = new CreateBackendAPIRequestBody();
    $request->requestBody->backendEnvironmentName = 'quo';
    $request->requestBody->resourceConfig = new CreateBackendAPIRequestBodyResourceConfig();
    $request->requestBody->resourceConfig->additionalAuthTypes = [
        new BackendAPIAuthType(),
    ];
    $request->requestBody->resourceConfig->apiName = 'at';
    $request->requestBody->resourceConfig->conflictResolution = new CreateBackendAPIRequestBodyResourceConfigConflictResolution();
    $request->requestBody->resourceConfig->conflictResolution->resolutionStrategy = CreateBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum::NONE;
    $request->requestBody->resourceConfig->defaultAuthType = new CreateBackendAPIRequestBodyResourceConfigDefaultAuthType();
    $request->requestBody->resourceConfig->defaultAuthType->mode = CreateBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum::OPENID_CONNECT;
    $request->requestBody->resourceConfig->defaultAuthType->settings = new CreateBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings();
    $request->requestBody->resourceConfig->defaultAuthType->settings->cognitoUserPoolId = 'molestiae';
    $request->requestBody->resourceConfig->defaultAuthType->settings->description = 'quod';
    $request->requestBody->resourceConfig->defaultAuthType->settings->expirationTime = 8009.11;
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDAuthTTL = 'esse';
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDClientID = 'totam';
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDIatTTL = 'porro';
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDIssueURL = 'dolorum';
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDProviderName = 'dicta';
    $request->requestBody->resourceConfig->service = 'nam';
    $request->requestBody->resourceConfig->transformSchema = 'officia';
    $request->requestBody->resourceName = 'occaecati';
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'commodi';
    $request->appId = 'molestiae';

    $response = $sdk->sdk->createBackendAPI($request);

    if ($response->createBackendAPIResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBackendAuth

Creates a new backend authentication resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfigAuthResourcesEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfigServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordDeliveryMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa;
use \OpenAPI\OpenAPI\Models\Shared\MFAModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings;
use \OpenAPI\OpenAPI\Models\Shared\MfaTypesElementEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthOAuthGrantTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OAuthScopesElementEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings;
use \OpenAPI\OpenAPI\Models\Shared\BackendAuthSocialProviderConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackendAuthAppleProviderConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalConstraintsElementEnum;
use \OpenAPI\OpenAPI\Models\Shared\RequiredSignUpAttributesElementEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsSignInMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessage;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageDeliveryMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageEmailSettings;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageSmsSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBackendAuthRequest();
    $request->requestBody = new CreateBackendAuthRequestBody();
    $request->requestBody->backendEnvironmentName = 'modi';
    $request->requestBody->resourceConfig = new CreateBackendAuthRequestBodyResourceConfig();
    $request->requestBody->resourceConfig->authResources = CreateBackendAuthRequestBodyResourceConfigAuthResourcesEnum::USER_POOL_ONLY;
    $request->requestBody->resourceConfig->identityPoolConfigs = new CreateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs();
    $request->requestBody->resourceConfig->identityPoolConfigs->identityPoolName = 'impedit';
    $request->requestBody->resourceConfig->identityPoolConfigs->unauthenticatedLogin = false;
    $request->requestBody->resourceConfig->service = CreateBackendAuthRequestBodyResourceConfigServiceEnum::COGNITO;
    $request->requestBody->resourceConfig->userPoolConfigs = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigs();
    $request->requestBody->resourceConfig->userPoolConfigs->forgotPassword = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword();
    $request->requestBody->resourceConfig->userPoolConfigs->forgotPassword->deliveryMethod = CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordDeliveryMethodEnum::SMS;
    $request->requestBody->resourceConfig->userPoolConfigs->forgotPassword->emailSettings = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings();
    $request->requestBody->resourceConfig->userPoolConfigs->forgotPassword->emailSettings->emailMessage = 'esse';
    $request->requestBody->resourceConfig->userPoolConfigs->forgotPassword->emailSettings->emailSubject = 'ipsum';
    $request->requestBody->resourceConfig->userPoolConfigs->forgotPassword->smsSettings = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings();
    $request->requestBody->resourceConfig->userPoolConfigs->forgotPassword->smsSettings->smsMessage = 'excepturi';
    $request->requestBody->resourceConfig->userPoolConfigs->mfa = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa();
    $request->requestBody->resourceConfig->userPoolConfigs->mfa->mfaMode = MFAModeEnum::ON;
    $request->requestBody->resourceConfig->userPoolConfigs->mfa->settings = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings();
    $request->requestBody->resourceConfig->userPoolConfigs->mfa->settings->mfaTypes = [
        MfaTypesElementEnum::SMS,
    ];
    $request->requestBody->resourceConfig->userPoolConfigs->mfa->settings->smsMessage = 'natus';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth();
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->domainPrefix = 'sed';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->oAuthGrantType = CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthOAuthGrantTypeEnum::IMPLICIT;
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->oAuthScopes = [
        OAuthScopesElementEnum::PROFILE,
    ];
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->redirectSignInURIs = [
        'hic',
        'saepe',
    ];
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->redirectSignOutURIs = [
        'in',
        'corporis',
        'iste',
    ];
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings();
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->facebook = new BackendAuthSocialProviderConfig();
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->facebook->clientId = 'iure';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->facebook->clientSecret = 'saepe';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->google = new BackendAuthSocialProviderConfig();
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->google->clientId = 'quidem';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->google->clientSecret = 'architecto';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->loginWithAmazon = new BackendAuthSocialProviderConfig();
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->loginWithAmazon->clientId = 'ipsa';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->loginWithAmazon->clientSecret = 'reiciendis';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->signInWithApple = new BackendAuthAppleProviderConfig();
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->signInWithApple->clientId = 'est';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->signInWithApple->keyId = 'mollitia';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->signInWithApple->privateKey = 'laborum';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->signInWithApple->teamId = 'dolores';
    $request->requestBody->resourceConfig->userPoolConfigs->passwordPolicy = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy();
    $request->requestBody->resourceConfig->userPoolConfigs->passwordPolicy->additionalConstraints = [
        AdditionalConstraintsElementEnum::REQUIRE_LOWERCASE,
    ];
    $request->requestBody->resourceConfig->userPoolConfigs->passwordPolicy->minimumLength = 1289.26;
    $request->requestBody->resourceConfig->userPoolConfigs->requiredSignUpAttributes = [
        RequiredSignUpAttributesElementEnum::GIVEN_NAME,
        RequiredSignUpAttributesElementEnum::PHONE_NUMBER,
        RequiredSignUpAttributesElementEnum::LOCALE,
        RequiredSignUpAttributesElementEnum::GIVEN_NAME,
    ];
    $request->requestBody->resourceConfig->userPoolConfigs->signInMethod = CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsSignInMethodEnum::PHONE_NUMBER;
    $request->requestBody->resourceConfig->userPoolConfigs->userPoolName = 'accusantium';
    $request->requestBody->resourceConfig->userPoolConfigs->verificationMessage = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessage();
    $request->requestBody->resourceConfig->userPoolConfigs->verificationMessage->deliveryMethod = CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageDeliveryMethodEnum::EMAIL;
    $request->requestBody->resourceConfig->userPoolConfigs->verificationMessage->emailSettings = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageEmailSettings();
    $request->requestBody->resourceConfig->userPoolConfigs->verificationMessage->emailSettings->emailMessage = 'culpa';
    $request->requestBody->resourceConfig->userPoolConfigs->verificationMessage->emailSettings->emailSubject = 'doloribus';
    $request->requestBody->resourceConfig->userPoolConfigs->verificationMessage->smsSettings = new CreateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageSmsSettings();
    $request->requestBody->resourceConfig->userPoolConfigs->verificationMessage->smsSettings->smsMessage = 'sapiente';
    $request->requestBody->resourceName = 'architecto';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'repellat';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->appId = 'numquam';

    $response = $sdk->sdk->createBackendAuth($request);

    if ($response->createBackendAuthResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBackendConfig

Creates a config object for a backend.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendConfigRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBackendConfigRequest();
    $request->requestBody = new CreateBackendConfigRequestBody();
    $request->requestBody->backendManagerAppId = 'commodi';
    $request->xAmzAlgorithm = 'quam';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'velit';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'quia';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'vitae';
    $request->appId = 'laborum';

    $response = $sdk->sdk->createBackendConfig($request);

    if ($response->createBackendConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBackendStorage

Creates a backend storage resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendStorageRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendStorageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendStorageRequestBodyResourceConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendStorageRequestBodyResourceConfigPermissions;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticatedElementEnum;
use \OpenAPI\OpenAPI\Models\Shared\UnAuthenticatedElementEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendStorageRequestBodyResourceConfigServiceNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBackendStorageRequest();
    $request->requestBody = new CreateBackendStorageRequestBody();
    $request->requestBody->backendEnvironmentName = 'animi';
    $request->requestBody->resourceConfig = new CreateBackendStorageRequestBodyResourceConfig();
    $request->requestBody->resourceConfig->bucketName = 'enim';
    $request->requestBody->resourceConfig->permissions = new CreateBackendStorageRequestBodyResourceConfigPermissions();
    $request->requestBody->resourceConfig->permissions->authenticated = [
        AuthenticatedElementEnum::DELETE,
    ];
    $request->requestBody->resourceConfig->permissions->unAuthenticated = [
        UnAuthenticatedElementEnum::DELETE,
    ];
    $request->requestBody->resourceConfig->serviceName = CreateBackendStorageRequestBodyResourceConfigServiceNameEnum::S3;
    $request->requestBody->resourceName = 'ipsam';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'possimus';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'error';
    $request->xAmzSignature = 'temporibus';
    $request->xAmzSignedHeaders = 'laborum';
    $request->appId = 'quasi';

    $response = $sdk->sdk->createBackendStorage($request);

    if ($response->createBackendStorageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createToken

Generates a one-time challenge code to authenticate a user into your Amplify Admin UI.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTokenRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTokenRequest();
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->appId = 'omnis';

    $response = $sdk->sdk->createToken($request);

    if ($response->createTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBackend

Removes an existing environment from your Amplify project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackendRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBackendRequest();
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'doloremque';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'ut';
    $request->xAmzSignedHeaders = 'maiores';
    $request->appId = 'dicta';
    $request->backendEnvironmentName = 'corporis';

    $response = $sdk->sdk->deleteBackend($request);

    if ($response->deleteBackendResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBackendAPI

Deletes an existing backend API resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackendAPIRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackendAPIRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackendAPIRequestBodyResourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackendAPIAuthType;
use \OpenAPI\OpenAPI\Models\Shared\BackendAPIAuthTypeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendAPIAuthTypeSettings;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackendAPIRequestBodyResourceConfigConflictResolution;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackendAPIRequestBodyResourceConfigDefaultAuthType;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBackendAPIRequest();
    $request->requestBody = new DeleteBackendAPIRequestBody();
    $request->requestBody->resourceConfig = new DeleteBackendAPIRequestBodyResourceConfig();
    $request->requestBody->resourceConfig->additionalAuthTypes = [
        new BackendAPIAuthType(),
        new BackendAPIAuthType(),
    ];
    $request->requestBody->resourceConfig->apiName = 'iusto';
    $request->requestBody->resourceConfig->conflictResolution = new DeleteBackendAPIRequestBodyResourceConfigConflictResolution();
    $request->requestBody->resourceConfig->conflictResolution->resolutionStrategy = DeleteBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum::OPTIMISTIC_CONCURRENCY;
    $request->requestBody->resourceConfig->defaultAuthType = new DeleteBackendAPIRequestBodyResourceConfigDefaultAuthType();
    $request->requestBody->resourceConfig->defaultAuthType->mode = DeleteBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum::AMAZON_COGNITO_USER_POOLS;
    $request->requestBody->resourceConfig->defaultAuthType->settings = new DeleteBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings();
    $request->requestBody->resourceConfig->defaultAuthType->settings->cognitoUserPoolId = 'enim';
    $request->requestBody->resourceConfig->defaultAuthType->settings->description = 'accusamus';
    $request->requestBody->resourceConfig->defaultAuthType->settings->expirationTime = 4142.63;
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDAuthTTL = 'repudiandae';
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDClientID = 'quae';
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDIatTTL = 'ipsum';
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDIssueURL = 'quidem';
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDProviderName = 'molestias';
    $request->requestBody->resourceConfig->service = 'excepturi';
    $request->requestBody->resourceConfig->transformSchema = 'pariatur';
    $request->requestBody->resourceName = 'modi';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->appId = 'itaque';
    $request->backendEnvironmentName = 'incidunt';

    $response = $sdk->sdk->deleteBackendAPI($request);

    if ($response->deleteBackendAPIResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBackendAuth

Deletes an existing backend authentication resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackendAuthRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackendAuthRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBackendAuthRequest();
    $request->requestBody = new DeleteBackendAuthRequestBody();
    $request->requestBody->resourceName = 'enim';
    $request->xAmzAlgorithm = 'consequatur';
    $request->xAmzContentSha256 = 'est';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'explicabo';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'quibusdam';
    $request->appId = 'labore';
    $request->backendEnvironmentName = 'modi';

    $response = $sdk->sdk->deleteBackendAuth($request);

    if ($response->deleteBackendAuthResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBackendStorage

Removes the specified backend storage resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackendStorageRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackendStorageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackendStorageRequestBodyServiceNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBackendStorageRequest();
    $request->requestBody = new DeleteBackendStorageRequestBody();
    $request->requestBody->resourceName = 'qui';
    $request->requestBody->serviceName = DeleteBackendStorageRequestBodyServiceNameEnum::S3;
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'cupiditate';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'magni';
    $request->xAmzSignature = 'assumenda';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->appId = 'alias';
    $request->backendEnvironmentName = 'fugit';

    $response = $sdk->sdk->deleteBackendStorage($request);

    if ($response->deleteBackendStorageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteToken

Deletes the challenge token based on the given appId and sessionId.

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
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'delectus';
    $request->appId = 'eum';
    $request->sessionId = 'non';

    $response = $sdk->sdk->deleteToken($request);

    if ($response->deleteTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generateBackendAPIModels

Generates a model schema for an existing backend API resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenerateBackendAPIModelsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GenerateBackendAPIModelsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateBackendAPIModelsRequest();
    $request->requestBody = new GenerateBackendAPIModelsRequestBody();
    $request->requestBody->resourceName = 'eligendi';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'dolor';
    $request->appId = 'debitis';
    $request->backendEnvironmentName = 'a';

    $response = $sdk->sdk->generateBackendAPIModels($request);

    if ($response->generateBackendAPIModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBackend

Provides project-level details for your Amplify UI project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBackendRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBackendRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBackendRequest();
    $request->requestBody = new GetBackendRequestBody();
    $request->requestBody->backendEnvironmentName = 'dolorum';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'rerum';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'magnam';
    $request->appId = 'cumque';

    $response = $sdk->sdk->getBackend($request);

    if ($response->getBackendResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBackendAPI

Gets the details for a backend API.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBackendAPIRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBackendAPIRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetBackendAPIRequestBodyResourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackendAPIAuthType;
use \OpenAPI\OpenAPI\Models\Shared\BackendAPIAuthTypeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendAPIAuthTypeSettings;
use \OpenAPI\OpenAPI\Models\Operations\GetBackendAPIRequestBodyResourceConfigConflictResolution;
use \OpenAPI\OpenAPI\Models\Operations\GetBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetBackendAPIRequestBodyResourceConfigDefaultAuthType;
use \OpenAPI\OpenAPI\Models\Operations\GetBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBackendAPIRequest();
    $request->requestBody = new GetBackendAPIRequestBody();
    $request->requestBody->resourceConfig = new GetBackendAPIRequestBodyResourceConfig();
    $request->requestBody->resourceConfig->additionalAuthTypes = [
        new BackendAPIAuthType(),
        new BackendAPIAuthType(),
        new BackendAPIAuthType(),
        new BackendAPIAuthType(),
    ];
    $request->requestBody->resourceConfig->apiName = 'ea';
    $request->requestBody->resourceConfig->conflictResolution = new GetBackendAPIRequestBodyResourceConfigConflictResolution();
    $request->requestBody->resourceConfig->conflictResolution->resolutionStrategy = GetBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum::LAMBDA;
    $request->requestBody->resourceConfig->defaultAuthType = new GetBackendAPIRequestBodyResourceConfigDefaultAuthType();
    $request->requestBody->resourceConfig->defaultAuthType->mode = GetBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum::AMAZON_COGNITO_USER_POOLS;
    $request->requestBody->resourceConfig->defaultAuthType->settings = new GetBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings();
    $request->requestBody->resourceConfig->defaultAuthType->settings->cognitoUserPoolId = 'accusamus';
    $request->requestBody->resourceConfig->defaultAuthType->settings->description = 'non';
    $request->requestBody->resourceConfig->defaultAuthType->settings->expirationTime = 5812.73;
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDAuthTTL = 'enim';
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDClientID = 'accusamus';
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDIatTTL = 'delectus';
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDIssueURL = 'quidem';
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDProviderName = 'provident';
    $request->requestBody->resourceConfig->service = 'nam';
    $request->requestBody->resourceConfig->transformSchema = 'id';
    $request->requestBody->resourceName = 'blanditiis';
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'natus';
    $request->appId = 'omnis';
    $request->backendEnvironmentName = 'molestiae';

    $response = $sdk->sdk->getBackendAPI($request);

    if ($response->getBackendAPIResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBackendAPIModels

Gets a model introspection schema for an existing backend API resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBackendAPIModelsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBackendAPIModelsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBackendAPIModelsRequest();
    $request->requestBody = new GetBackendAPIModelsRequestBody();
    $request->requestBody->resourceName = 'perferendis';
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->appId = 'natus';
    $request->backendEnvironmentName = 'nobis';

    $response = $sdk->sdk->getBackendAPIModels($request);

    if ($response->getBackendAPIModelsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBackendAuth

Gets a backend auth details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBackendAuthRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBackendAuthRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBackendAuthRequest();
    $request->requestBody = new GetBackendAuthRequestBody();
    $request->requestBody->resourceName = 'eum';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'et';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'ullam';
    $request->appId = 'provident';
    $request->backendEnvironmentName = 'quos';

    $response = $sdk->sdk->getBackendAuth($request);

    if ($response->getBackendAuthResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBackendJob

Returns information about a specific job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBackendJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBackendJobRequest();
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'eum';
    $request->appId = 'dolor';
    $request->backendEnvironmentName = 'necessitatibus';
    $request->jobId = 'odit';

    $response = $sdk->sdk->getBackendJob($request);

    if ($response->getBackendJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBackendStorage

Gets details for a backend storage resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBackendStorageRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBackendStorageRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBackendStorageRequest();
    $request->requestBody = new GetBackendStorageRequestBody();
    $request->requestBody->resourceName = 'nemo';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->appId = 'facilis';
    $request->backendEnvironmentName = 'in';

    $response = $sdk->sdk->getBackendStorage($request);

    if ($response->getBackendStorageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getToken

Gets the challenge token based on the given appId and sessionId.

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
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'repellat';
    $request->appId = 'quibusdam';
    $request->sessionId = 'sed';

    $response = $sdk->sdk->getToken($request);

    if ($response->getTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importBackendAuth

Imports an existing backend authentication resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportBackendAuthRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportBackendAuthRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportBackendAuthRequest();
    $request->requestBody = new ImportBackendAuthRequestBody();
    $request->requestBody->identityPoolId = 'saepe';
    $request->requestBody->nativeClientId = 'pariatur';
    $request->requestBody->userPoolId = 'accusantium';
    $request->requestBody->webClientId = 'consequuntur';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->appId = 'maxime';
    $request->backendEnvironmentName = 'ea';

    $response = $sdk->sdk->importBackendAuth($request);

    if ($response->importBackendAuthResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importBackendStorage

Imports an existing backend storage resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportBackendStorageRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportBackendStorageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ImportBackendStorageRequestBodyServiceNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportBackendStorageRequest();
    $request->requestBody = new ImportBackendStorageRequestBody();
    $request->requestBody->bucketName = 'excepturi';
    $request->requestBody->serviceName = ImportBackendStorageRequestBodyServiceNameEnum::S3;
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'ea';
    $request->xAmzCredential = 'accusantium';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->appId = 'voluptate';
    $request->backendEnvironmentName = 'autem';

    $response = $sdk->sdk->importBackendStorage($request);

    if ($response->importBackendStorageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBackendJobs

Lists the jobs for the backend of an Amplify app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBackendJobsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListBackendJobsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBackendJobsRequest();
    $request->maxResults = 'nam';
    $request->nextToken = 'eaque';
    $request->requestBody = new ListBackendJobsRequestBody();
    $request->requestBody->jobId = 'pariatur';
    $request->requestBody->maxResults = 365496;
    $request->requestBody->nextToken = 'voluptatibus';
    $request->requestBody->operation = 'perferendis';
    $request->requestBody->status = 'fugiat';
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'aut';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'nobis';
    $request->appId = 'dolores';
    $request->backendEnvironmentName = 'quis';

    $response = $sdk->sdk->listBackendJobs($request);

    if ($response->listBackendJobsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listS3Buckets

The list of S3 buckets in your account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListS3BucketsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListS3BucketsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListS3BucketsRequest();
    $request->requestBody = new ListS3BucketsRequestBody();
    $request->requestBody->nextToken = 'totam';
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->listS3Buckets($request);

    if ($response->listS3BucketsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeAllBackends

Removes all backend environments from your Amplify project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAllBackendsRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveAllBackendsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveAllBackendsRequest();
    $request->requestBody = new RemoveAllBackendsRequestBody();
    $request->requestBody->cleanAmplifyApp = false;
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'quam';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nostrum';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'recusandae';
    $request->appId = 'omnis';

    $response = $sdk->sdk->removeAllBackends($request);

    if ($response->removeAllBackendsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeBackendConfig

Removes the AWS resources required to access the Amplify Admin UI.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveBackendConfigRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveBackendConfigRequest();
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'perspiciatis';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'error';
    $request->appId = 'eaque';

    $response = $sdk->sdk->removeBackendConfig($request);

    if ($response->removeBackendConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBackendAPI

Updates an existing backend API resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAPIRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAPIRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAPIRequestBodyResourceConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackendAPIAuthType;
use \OpenAPI\OpenAPI\Models\Shared\BackendAPIAuthTypeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BackendAPIAuthTypeSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAPIRequestBodyResourceConfigConflictResolution;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAPIRequestBodyResourceConfigDefaultAuthType;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBackendAPIRequest();
    $request->requestBody = new UpdateBackendAPIRequestBody();
    $request->requestBody->resourceConfig = new UpdateBackendAPIRequestBodyResourceConfig();
    $request->requestBody->resourceConfig->additionalAuthTypes = [
        new BackendAPIAuthType(),
        new BackendAPIAuthType(),
        new BackendAPIAuthType(),
    ];
    $request->requestBody->resourceConfig->apiName = 'rerum';
    $request->requestBody->resourceConfig->conflictResolution = new UpdateBackendAPIRequestBodyResourceConfigConflictResolution();
    $request->requestBody->resourceConfig->conflictResolution->resolutionStrategy = UpdateBackendAPIRequestBodyResourceConfigConflictResolutionResolutionStrategyEnum::OPTIMISTIC_CONCURRENCY;
    $request->requestBody->resourceConfig->defaultAuthType = new UpdateBackendAPIRequestBodyResourceConfigDefaultAuthType();
    $request->requestBody->resourceConfig->defaultAuthType->mode = UpdateBackendAPIRequestBodyResourceConfigDefaultAuthTypeModeEnum::OPENID_CONNECT;
    $request->requestBody->resourceConfig->defaultAuthType->settings = new UpdateBackendAPIRequestBodyResourceConfigDefaultAuthTypeSettings();
    $request->requestBody->resourceConfig->defaultAuthType->settings->cognitoUserPoolId = 'earum';
    $request->requestBody->resourceConfig->defaultAuthType->settings->description = 'modi';
    $request->requestBody->resourceConfig->defaultAuthType->settings->expirationTime = 6139.66;
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDAuthTTL = 'dolorum';
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDClientID = 'deleniti';
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDIatTTL = 'pariatur';
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDIssueURL = 'provident';
    $request->requestBody->resourceConfig->defaultAuthType->settings->openIDProviderName = 'nobis';
    $request->requestBody->resourceConfig->service = 'libero';
    $request->requestBody->resourceConfig->transformSchema = 'delectus';
    $request->requestBody->resourceName = 'quaerat';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->appId = 'hic';
    $request->backendEnvironmentName = 'excepturi';

    $response = $sdk->sdk->updateBackendAPI($request);

    if ($response->updateBackendAPIResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBackendAuth

Updates an existing backend authentication resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBodyResourceConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBodyResourceConfigAuthResourcesEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBodyResourceConfigServiceEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordDeliveryMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa;
use \OpenAPI\OpenAPI\Models\Shared\MFAModeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings;
use \OpenAPI\OpenAPI\Models\Shared\MfaTypesElementEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthOAuthGrantTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\OAuthScopesElementEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings;
use \OpenAPI\OpenAPI\Models\Shared\BackendAuthSocialProviderConfig;
use \OpenAPI\OpenAPI\Models\Shared\BackendAuthAppleProviderConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy;
use \OpenAPI\OpenAPI\Models\Shared\AdditionalConstraintsElementEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessage;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageDeliveryMethodEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageEmailSettings;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageSmsSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBackendAuthRequest();
    $request->requestBody = new UpdateBackendAuthRequestBody();
    $request->requestBody->resourceConfig = new UpdateBackendAuthRequestBodyResourceConfig();
    $request->requestBody->resourceConfig->authResources = UpdateBackendAuthRequestBodyResourceConfigAuthResourcesEnum::IDENTITY_POOL_AND_USER_POOL;
    $request->requestBody->resourceConfig->identityPoolConfigs = new UpdateBackendAuthRequestBodyResourceConfigIdentityPoolConfigs();
    $request->requestBody->resourceConfig->identityPoolConfigs->unauthenticatedLogin = false;
    $request->requestBody->resourceConfig->service = UpdateBackendAuthRequestBodyResourceConfigServiceEnum::COGNITO;
    $request->requestBody->resourceConfig->userPoolConfigs = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigs();
    $request->requestBody->resourceConfig->userPoolConfigs->forgotPassword = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPassword();
    $request->requestBody->resourceConfig->userPoolConfigs->forgotPassword->deliveryMethod = UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordDeliveryMethodEnum::EMAIL;
    $request->requestBody->resourceConfig->userPoolConfigs->forgotPassword->emailSettings = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordEmailSettings();
    $request->requestBody->resourceConfig->userPoolConfigs->forgotPassword->emailSettings->emailMessage = 'dignissimos';
    $request->requestBody->resourceConfig->userPoolConfigs->forgotPassword->emailSettings->emailSubject = 'reiciendis';
    $request->requestBody->resourceConfig->userPoolConfigs->forgotPassword->smsSettings = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsForgotPasswordSmsSettings();
    $request->requestBody->resourceConfig->userPoolConfigs->forgotPassword->smsSettings->smsMessage = 'amet';
    $request->requestBody->resourceConfig->userPoolConfigs->mfa = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfa();
    $request->requestBody->resourceConfig->userPoolConfigs->mfa->mfaMode = MFAModeEnum::OPTIONAL;
    $request->requestBody->resourceConfig->userPoolConfigs->mfa->settings = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsMfaSettings();
    $request->requestBody->resourceConfig->userPoolConfigs->mfa->settings->mfaTypes = [
        MfaTypesElementEnum::SMS,
        MfaTypesElementEnum::SMS,
    ];
    $request->requestBody->resourceConfig->userPoolConfigs->mfa->settings->smsMessage = 'ipsa';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuth();
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->domainPrefix = 'iure';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->oAuthGrantType = UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthOAuthGrantTypeEnum::CODE;
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->oAuthScopes = [
        OAuthScopesElementEnum::AWS_COGNITO_SIGNIN_USER_ADMIN,
        OAuthScopesElementEnum::PROFILE,
    ];
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->redirectSignInURIs = [
        'voluptas',
        'natus',
        'eos',
        'atque',
    ];
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->redirectSignOutURIs = [
        'fugiat',
    ];
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsOAuthSocialProviderSettings();
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->facebook = new BackendAuthSocialProviderConfig();
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->facebook->clientId = 'ab';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->facebook->clientSecret = 'soluta';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->google = new BackendAuthSocialProviderConfig();
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->google->clientId = 'dolorum';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->google->clientSecret = 'iusto';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->loginWithAmazon = new BackendAuthSocialProviderConfig();
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->loginWithAmazon->clientId = 'voluptate';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->loginWithAmazon->clientSecret = 'dolorum';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->signInWithApple = new BackendAuthAppleProviderConfig();
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->signInWithApple->clientId = 'deleniti';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->signInWithApple->keyId = 'omnis';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->signInWithApple->privateKey = 'necessitatibus';
    $request->requestBody->resourceConfig->userPoolConfigs->oAuth->socialProviderSettings->signInWithApple->teamId = 'distinctio';
    $request->requestBody->resourceConfig->userPoolConfigs->passwordPolicy = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsPasswordPolicy();
    $request->requestBody->resourceConfig->userPoolConfigs->passwordPolicy->additionalConstraints = [
        AdditionalConstraintsElementEnum::REQUIRE_LOWERCASE,
        AdditionalConstraintsElementEnum::REQUIRE_DIGIT,
        AdditionalConstraintsElementEnum::REQUIRE_LOWERCASE,
        AdditionalConstraintsElementEnum::REQUIRE_SYMBOL,
    ];
    $request->requestBody->resourceConfig->userPoolConfigs->passwordPolicy->minimumLength = 9064.18;
    $request->requestBody->resourceConfig->userPoolConfigs->verificationMessage = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessage();
    $request->requestBody->resourceConfig->userPoolConfigs->verificationMessage->deliveryMethod = UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageDeliveryMethodEnum::EMAIL;
    $request->requestBody->resourceConfig->userPoolConfigs->verificationMessage->emailSettings = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageEmailSettings();
    $request->requestBody->resourceConfig->userPoolConfigs->verificationMessage->emailSettings->emailMessage = 'aspernatur';
    $request->requestBody->resourceConfig->userPoolConfigs->verificationMessage->emailSettings->emailSubject = 'perferendis';
    $request->requestBody->resourceConfig->userPoolConfigs->verificationMessage->smsSettings = new UpdateBackendAuthRequestBodyResourceConfigUserPoolConfigsVerificationMessageSmsSettings();
    $request->requestBody->resourceConfig->userPoolConfigs->verificationMessage->smsSettings->smsMessage = 'amet';
    $request->requestBody->resourceName = 'optio';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'minima';
    $request->appId = 'repellendus';
    $request->backendEnvironmentName = 'totam';

    $response = $sdk->sdk->updateBackendAuth($request);

    if ($response->updateBackendAuthResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBackendConfig

Updates the AWS resources required to access the Amplify Admin UI.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendConfigRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendConfigRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendConfigRequestBodyLoginAuthConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBackendConfigRequest();
    $request->requestBody = new UpdateBackendConfigRequestBody();
    $request->requestBody->loginAuthConfig = new UpdateBackendConfigRequestBodyLoginAuthConfig();
    $request->requestBody->loginAuthConfig->awsCognitoIdentityPoolId = 'similique';
    $request->requestBody->loginAuthConfig->awsCognitoRegion = 'alias';
    $request->requestBody->loginAuthConfig->awsUserPoolsId = 'at';
    $request->requestBody->loginAuthConfig->awsUserPoolsWebClientId = 'quaerat';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'officiis';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'a';
    $request->appId = 'esse';

    $response = $sdk->sdk->updateBackendConfig($request);

    if ($response->updateBackendConfigResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBackendJob

Updates a specific job.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendJobRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBackendJobRequest();
    $request->requestBody = new UpdateBackendJobRequestBody();
    $request->requestBody->operation = 'harum';
    $request->requestBody->status = 'iusto';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'numquam';
    $request->appId = 'enim';
    $request->backendEnvironmentName = 'dolorem';
    $request->jobId = 'sapiente';

    $response = $sdk->sdk->updateBackendJob($request);

    if ($response->updateBackendJobResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBackendStorage

Updates an existing backend storage resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendStorageRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendStorageRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendStorageRequestBodyResourceConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendStorageRequestBodyResourceConfigPermissions;
use \OpenAPI\OpenAPI\Models\Shared\AuthenticatedElementEnum;
use \OpenAPI\OpenAPI\Models\Shared\UnAuthenticatedElementEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBackendStorageRequestBodyResourceConfigServiceNameEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBackendStorageRequest();
    $request->requestBody = new UpdateBackendStorageRequestBody();
    $request->requestBody->resourceConfig = new UpdateBackendStorageRequestBodyResourceConfig();
    $request->requestBody->resourceConfig->permissions = new UpdateBackendStorageRequestBodyResourceConfigPermissions();
    $request->requestBody->resourceConfig->permissions->authenticated = [
        AuthenticatedElementEnum::CREATE_AND_UPDATE,
        AuthenticatedElementEnum::READ,
        AuthenticatedElementEnum::DELETE,
    ];
    $request->requestBody->resourceConfig->permissions->unAuthenticated = [
        UnAuthenticatedElementEnum::READ,
    ];
    $request->requestBody->resourceConfig->serviceName = UpdateBackendStorageRequestBodyResourceConfigServiceNameEnum::S3;
    $request->requestBody->resourceName = 'vel';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'qui';
    $request->appId = 'cupiditate';
    $request->backendEnvironmentName = 'maxime';

    $response = $sdk->sdk->updateBackendStorage($request);

    if ($response->updateBackendStorageResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
