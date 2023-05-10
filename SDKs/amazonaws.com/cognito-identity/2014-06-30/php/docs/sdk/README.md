# SDK

## Overview

<fullname>Amazon Cognito Federated Identities</fullname> <p>Amazon Cognito Federated Identities is a web service that delivers scoped temporary credentials to mobile devices and other untrusted environments. It uniquely identifies a device and supplies the user with a consistent identity over the lifetime of an application.</p> <p>Using Amazon Cognito Federated Identities, you can enable authentication with one or more third-party identity providers (Facebook, Google, or Login with Amazon) or an Amazon Cognito user pool, and you can also choose to support unauthenticated access from your app. Cognito delivers a unique identifier for each user and acts as an OpenID token provider trusted by AWS Security Token Service (STS) to access temporary, limited-privilege AWS credentials.</p> <p>For a description of the authentication flow from the Amazon Cognito Developer Guide see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/authentication-flow.html">Authentication Flow</a>.</p> <p>For more information see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-identity.html">Amazon Cognito Federated Identities</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/cognito-identity/>
### Available Operations

* [createIdentityPool](#createidentitypool) - <p>Creates a new identity pool. The identity pool is a store of user identity information that is specific to your AWS account. The keys for <code>SupportedLoginProviders</code> are as follows:</p> <ul> <li> <p>Facebook: <code>graph.facebook.com</code> </p> </li> <li> <p>Google: <code>accounts.google.com</code> </p> </li> <li> <p>Amazon: <code>www.amazon.com</code> </p> </li> <li> <p>Twitter: <code>api.twitter.com</code> </p> </li> <li> <p>Digits: <code>www.digits.com</code> </p> </li> </ul> <p>You must use AWS Developer credentials to call this API.</p>
* [deleteIdentities](#deleteidentities) - <p>Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [deleteIdentityPool](#deleteidentitypool) - <p>Deletes an identity pool. Once a pool is deleted, users will not be able to authenticate with the pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [describeIdentity](#describeidentity) - <p>Returns metadata related to the given identity, including when the identity was created and any associated linked logins.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [describeIdentityPool](#describeidentitypool) - <p>Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [getCredentialsForIdentity](#getcredentialsforidentity) - <p>Returns credentials for the provided identity ID. Any provided logins will be validated against supported login providers. If the token is for cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service with the appropriate role for the token.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
* [getId](#getid) - <p>Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an implicit linked account.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
* [getIdentityPoolRoles](#getidentitypoolroles) - <p>Gets the roles for an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [getOpenIdToken](#getopenidtoken) - <p>Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by <a>GetId</a>. You can optionally add additional logins for the identity. Supplying multiple logins creates an implicit link.</p> <p>The OpenID token is valid for 10 minutes.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
* [getOpenIdTokenForDeveloperIdentity](#getopenidtokenfordeveloperidentity) - <p>Registers (or retrieves) a Cognito <code>IdentityId</code> and an OpenID Connect token for a user authenticated by your backend authentication process. Supplying multiple logins will create an implicit linked account. You can only specify one developer provider as part of the <code>Logins</code> map, which is linked to the identity pool. The developer provider is the "domain" by which Cognito will refer to your users.</p> <p>You can use <code>GetOpenIdTokenForDeveloperIdentity</code> to create a new identity and to link new logins (that is, user credentials issued by a public provider or developer provider) to an existing identity. When you want to create a new identity, the <code>IdentityId</code> should be null. When you want to associate a new login with an existing authenticated/unauthenticated identity, you can do so by providing the existing <code>IdentityId</code>. This API will create the identity in the specified <code>IdentityPoolId</code>.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [getPrincipalTagAttributeMap](#getprincipaltagattributemap) - Use <code>GetPrincipalTagAttributeMap</code> to list all mappings between <code>PrincipalTags</code> and user attributes.
* [listIdentities](#listidentities) - <p>Lists the identities in an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [listIdentityPools](#listidentitypools) - <p>Lists all of the Cognito identity pools registered for your account.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [listTagsForResource](#listtagsforresource) - <p>Lists the tags that are assigned to an Amazon Cognito identity pool.</p> <p>A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>
* [lookupDeveloperIdentity](#lookupdeveloperidentity) - <p>Retrieves the <code>IdentityID</code> associated with a <code>DeveloperUserIdentifier</code> or the list of <code>DeveloperUserIdentifier</code> values associated with an <code>IdentityId</code> for an existing identity. Either <code>IdentityID</code> or <code>DeveloperUserIdentifier</code> must not be null. If you supply only one of these values, the other value will be searched in the database and returned as a part of the response. If you supply both, <code>DeveloperUserIdentifier</code> will be matched against <code>IdentityID</code>. If the values are verified against the database, the response returns both values and is the same as the request. Otherwise a <code>ResourceConflictException</code> is thrown.</p> <p> <code>LookupDeveloperIdentity</code> is intended for low-throughput control plane operations: for example, to enable customer service to locate an identity ID by username. If you are using it for higher-volume operations such as user authentication, your requests are likely to be throttled. <a>GetOpenIdTokenForDeveloperIdentity</a> is a better option for higher-volume operations for user authentication.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [mergeDeveloperIdentities](#mergedeveloperidentities) - <p>Merges two users having different <code>IdentityId</code>s, existing in the same identity pool, and identified by the same developer provider. You can use this action to request that discrete users be merged and identified as a single user in the Cognito environment. Cognito associates the given source user (<code>SourceUserIdentifier</code>) with the <code>IdentityId</code> of the <code>DestinationUserIdentifier</code>. Only developer-authenticated users can be merged. If the users to be merged are associated with the same public provider, but as two different users, an exception will be thrown.</p> <p>The number of linked logins is limited to 20. So, the number of linked logins for the source user, <code>SourceUserIdentifier</code>, and the destination user, <code>DestinationUserIdentifier</code>, together should not be larger than 20. Otherwise, an exception will be thrown.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [setIdentityPoolRoles](#setidentitypoolroles) - <p>Sets the roles for an identity pool. These roles are used when making calls to <a>GetCredentialsForIdentity</a> action.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [setPrincipalTagAttributeMap](#setprincipaltagattributemap) - You can use this operation to use default (username and clientID) attribute or custom attribute mappings.
* [tagResource](#tagresource) - <p>Assigns a set of tags to the specified Amazon Cognito identity pool. A tag is a label that you can use to categorize and manage identity pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of an identity pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both identity pools. The value of this key might be <code>Test</code> for one identity pool and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your identity pools. In an IAM policy, you can constrain permissions for identity pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. An identity pool can have as many as 50 tags.</p>
* [unlinkDeveloperIdentity](#unlinkdeveloperidentity) - <p>Unlinks a <code>DeveloperUserIdentifier</code> from an existing identity. Unlinked developer users will be considered new identities next time they are seen. If, for a given Cognito identity, you remove all federated identities as well as the developer user identifier, the Cognito identity becomes inaccessible.</p> <p>You must use AWS Developer credentials to call this API.</p>
* [unlinkIdentity](#unlinkidentity) - <p>Unlinks a federated identity from an existing account. Unlinked logins will be considered new identities next time they are seen. Removing the last linked login will make this identity inaccessible.</p> <p>This is a public API. You do not need any credentials to call this API.</p>
* [untagResource](#untagresource) - Removes the specified tags from the specified Amazon Cognito identity pool. You can use this action up to 5 times per second, per account
* [updateIdentityPool](#updateidentitypool) - <p>Updates an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>

## createIdentityPool

<p>Creates a new identity pool. The identity pool is a store of user identity information that is specific to your AWS account. The keys for <code>SupportedLoginProviders</code> are as follows:</p> <ul> <li> <p>Facebook: <code>graph.facebook.com</code> </p> </li> <li> <p>Google: <code>accounts.google.com</code> </p> </li> <li> <p>Amazon: <code>www.amazon.com</code> </p> </li> <li> <p>Twitter: <code>api.twitter.com</code> </p> </li> <li> <p>Digits: <code>www.digits.com</code> </p> </li> </ul> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateIdentityPoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateIdentityPoolInput;
use \OpenAPI\OpenAPI\Models\Shared\CognitoIdentityProvider;
use \OpenAPI\OpenAPI\Models\Operations\CreateIdentityPoolXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIdentityPoolRequest();
    $request->createIdentityPoolInput = new CreateIdentityPoolInput();
    $request->createIdentityPoolInput->allowClassicFlow = false;
    $request->createIdentityPoolInput->allowUnauthenticatedIdentities = false;
    $request->createIdentityPoolInput->cognitoIdentityProviders = [
        new CognitoIdentityProvider(),
        new CognitoIdentityProvider(),
    ];
    $request->createIdentityPoolInput->developerProviderName = 'veritatis';
    $request->createIdentityPoolInput->identityPoolName = 'deserunt';
    $request->createIdentityPoolInput->identityPoolTags = [
        'ipsam' => 'repellendus',
    ];
    $request->createIdentityPoolInput->openIdConnectProviderARNs = [
        'quo',
        'odit',
        'at',
        'at',
    ];
    $request->createIdentityPoolInput->samlProviderARNs = [
        'molestiae',
        'quod',
        'quod',
        'esse',
    ];
    $request->createIdentityPoolInput->supportedLoginProviders = [
        'porro' => 'dolorum',
        'dicta' => 'nam',
        'officia' => 'occaecati',
    ];
    $request->xAmzAlgorithm = 'fugit';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'optio';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'beatae';
    $request->xAmzSignedHeaders = 'commodi';
    $request->xAmzTarget = CreateIdentityPoolXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_CREATE_IDENTITY_POOL;

    $response = $sdk->sdk->createIdentityPool($request);

    if ($response->identityPool !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIdentities

<p>Deletes identities from an identity pool. You can specify a list of 1-60 identities that you want to delete.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIdentitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteIdentitiesInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIdentitiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIdentitiesRequest();
    $request->deleteIdentitiesInput = new DeleteIdentitiesInput();
    $request->deleteIdentitiesInput->identityIdsToDelete = [
        'modi',
        'qui',
    ];
    $request->xAmzAlgorithm = 'impedit';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'esse';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = DeleteIdentitiesXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_DELETE_IDENTITIES;

    $response = $sdk->sdk->deleteIdentities($request);

    if ($response->deleteIdentitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIdentityPool

<p>Deletes an identity pool. Once a pool is deleted, users will not be able to authenticate with the pool.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIdentityPoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteIdentityPoolInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIdentityPoolXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIdentityPoolRequest();
    $request->deleteIdentityPoolInput = new DeleteIdentityPoolInput();
    $request->deleteIdentityPoolInput->identityPoolId = 'ad';
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = DeleteIdentityPoolXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_DELETE_IDENTITY_POOL;

    $response = $sdk->sdk->deleteIdentityPool($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeIdentity

<p>Returns metadata related to the given identity, including when the identity was created and any associated linked logins.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIdentityRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeIdentityInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIdentityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeIdentityRequest();
    $request->describeIdentityInput = new DescribeIdentityInput();
    $request->describeIdentityInput->identityId = 'saepe';
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = DescribeIdentityXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_DESCRIBE_IDENTITY;

    $response = $sdk->sdk->describeIdentity($request);

    if ($response->identityDescription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeIdentityPool

<p>Gets details about a particular identity pool, including the pool name, ID description, creation date, and current number of users.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIdentityPoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeIdentityPoolInput;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIdentityPoolXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeIdentityPoolRequest();
    $request->describeIdentityPoolInput = new DescribeIdentityPoolInput();
    $request->describeIdentityPoolInput->identityPoolId = 'architecto';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'est';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'dolores';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzTarget = DescribeIdentityPoolXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_DESCRIBE_IDENTITY_POOL;

    $response = $sdk->sdk->describeIdentityPool($request);

    if ($response->identityPool !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCredentialsForIdentity

<p>Returns credentials for the provided identity ID. Any provided logins will be validated against supported login providers. If the token is for cognito-identity.amazonaws.com, it will be passed through to AWS Security Token Service with the appropriate role for the token.</p> <p>This is a public API. You do not need any credentials to call this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCredentialsForIdentityRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetCredentialsForIdentityInput;
use \OpenAPI\OpenAPI\Models\Operations\GetCredentialsForIdentityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCredentialsForIdentityRequest();
    $request->getCredentialsForIdentityInput = new GetCredentialsForIdentityInput();
    $request->getCredentialsForIdentityInput->customRoleArn = 'corporis';
    $request->getCredentialsForIdentityInput->identityId = 'explicabo';
    $request->getCredentialsForIdentityInput->logins = [
        'enim' => 'omnis',
        'nemo' => 'minima',
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ];
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = GetCredentialsForIdentityXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_GET_CREDENTIALS_FOR_IDENTITY;

    $response = $sdk->sdk->getCredentialsForIdentity($request);

    if ($response->getCredentialsForIdentityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getId

<p>Generates (or retrieves) a Cognito ID. Supplying multiple logins will create an implicit linked account.</p> <p>This is a public API. You do not need any credentials to call this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetIdInput;
use \OpenAPI\OpenAPI\Models\Operations\GetIdXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIdRequest();
    $request->getIdInput = new GetIdInput();
    $request->getIdInput->accountId = 'repellat';
    $request->getIdInput->identityPoolId = 'mollitia';
    $request->getIdInput->logins = [
        'numquam' => 'commodi',
        'quam' => 'molestiae',
        'velit' => 'error',
    ];
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';
    $request->xAmzTarget = GetIdXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_GET_ID;

    $response = $sdk->sdk->getId($request);

    if ($response->getIdResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIdentityPoolRoles

<p>Gets the roles for an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIdentityPoolRolesRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetIdentityPoolRolesInput;
use \OpenAPI\OpenAPI\Models\Operations\GetIdentityPoolRolesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIdentityPoolRolesRequest();
    $request->getIdentityPoolRolesInput = new GetIdentityPoolRolesInput();
    $request->getIdentityPoolRolesInput->identityPoolId = 'quo';
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = GetIdentityPoolRolesXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_GET_IDENTITY_POOL_ROLES;

    $response = $sdk->sdk->getIdentityPoolRoles($request);

    if ($response->getIdentityPoolRolesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOpenIdToken

<p>Gets an OpenID token, using a known Cognito ID. This known Cognito ID is returned by <a>GetId</a>. You can optionally add additional logins for the identity. Supplying multiple logins creates an implicit link.</p> <p>The OpenID token is valid for 10 minutes.</p> <p>This is a public API. You do not need any credentials to call this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOpenIdTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetOpenIdTokenInput;
use \OpenAPI\OpenAPI\Models\Operations\GetOpenIdTokenXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOpenIdTokenRequest();
    $request->getOpenIdTokenInput = new GetOpenIdTokenInput();
    $request->getOpenIdTokenInput->identityId = 'error';
    $request->getOpenIdTokenInput->logins = [
        'laborum' => 'quasi',
        'reiciendis' => 'voluptatibus',
        'vero' => 'nihil',
        'praesentium' => 'voluptatibus',
    ];
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'reprehenderit';
    $request->xAmzTarget = GetOpenIdTokenXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_GET_OPEN_ID_TOKEN;

    $response = $sdk->sdk->getOpenIdToken($request);

    if ($response->getOpenIdTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOpenIdTokenForDeveloperIdentity

<p>Registers (or retrieves) a Cognito <code>IdentityId</code> and an OpenID Connect token for a user authenticated by your backend authentication process. Supplying multiple logins will create an implicit linked account. You can only specify one developer provider as part of the <code>Logins</code> map, which is linked to the identity pool. The developer provider is the "domain" by which Cognito will refer to your users.</p> <p>You can use <code>GetOpenIdTokenForDeveloperIdentity</code> to create a new identity and to link new logins (that is, user credentials issued by a public provider or developer provider) to an existing identity. When you want to create a new identity, the <code>IdentityId</code> should be null. When you want to associate a new login with an existing authenticated/unauthenticated identity, you can do so by providing the existing <code>IdentityId</code>. This API will create the identity in the specified <code>IdentityPoolId</code>.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOpenIdTokenForDeveloperIdentityRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetOpenIdTokenForDeveloperIdentityInput;
use \OpenAPI\OpenAPI\Models\Operations\GetOpenIdTokenForDeveloperIdentityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOpenIdTokenForDeveloperIdentityRequest();
    $request->getOpenIdTokenForDeveloperIdentityInput = new GetOpenIdTokenForDeveloperIdentityInput();
    $request->getOpenIdTokenForDeveloperIdentityInput->identityId = 'ut';
    $request->getOpenIdTokenForDeveloperIdentityInput->identityPoolId = 'maiores';
    $request->getOpenIdTokenForDeveloperIdentityInput->logins = [
        'corporis' => 'dolore',
    ];
    $request->getOpenIdTokenForDeveloperIdentityInput->principalTags = [
        'dicta' => 'harum',
        'enim' => 'accusamus',
    ];
    $request->getOpenIdTokenForDeveloperIdentityInput->tokenDuration = 414263;
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = GetOpenIdTokenForDeveloperIdentityXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_GET_OPEN_ID_TOKEN_FOR_DEVELOPER_IDENTITY;

    $response = $sdk->sdk->getOpenIdTokenForDeveloperIdentity($request);

    if ($response->getOpenIdTokenForDeveloperIdentityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPrincipalTagAttributeMap

Use <code>GetPrincipalTagAttributeMap</code> to list all mappings between <code>PrincipalTags</code> and user attributes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPrincipalTagAttributeMapRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetPrincipalTagAttributeMapInput;
use \OpenAPI\OpenAPI\Models\Operations\GetPrincipalTagAttributeMapXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPrincipalTagAttributeMapRequest();
    $request->getPrincipalTagAttributeMapInput = new GetPrincipalTagAttributeMapInput();
    $request->getPrincipalTagAttributeMapInput->identityPoolId = 'modi';
    $request->getPrincipalTagAttributeMapInput->identityProviderName = 'praesentium';
    $request->xAmzAlgorithm = 'rem';
    $request->xAmzContentSha256 = 'voluptates';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'itaque';
    $request->xAmzTarget = GetPrincipalTagAttributeMapXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_GET_PRINCIPAL_TAG_ATTRIBUTE_MAP;

    $response = $sdk->sdk->getPrincipalTagAttributeMap($request);

    if ($response->getPrincipalTagAttributeMapResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIdentities

<p>Lists the identities in an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIdentitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListIdentitiesInput;
use \OpenAPI\OpenAPI\Models\Operations\ListIdentitiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIdentitiesRequest();
    $request->listIdentitiesInput = new ListIdentitiesInput();
    $request->listIdentitiesInput->hideDisabled = false;
    $request->listIdentitiesInput->identityPoolId = 'incidunt';
    $request->listIdentitiesInput->maxResults = 318569;
    $request->listIdentitiesInput->nextToken = 'consequatur';
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzTarget = ListIdentitiesXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_LIST_IDENTITIES;

    $response = $sdk->sdk->listIdentities($request);

    if ($response->listIdentitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIdentityPools

<p>Lists all of the Cognito identity pools registered for your account.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIdentityPoolsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListIdentityPoolsInput;
use \OpenAPI\OpenAPI\Models\Operations\ListIdentityPoolsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIdentityPoolsRequest();
    $request->listIdentityPoolsInput = new ListIdentityPoolsInput();
    $request->listIdentityPoolsInput->maxResults = 264730;
    $request->listIdentityPoolsInput->nextToken = 'qui';
    $request->maxResults = 'aliquid';
    $request->nextToken = 'cupiditate';
    $request->xAmzAlgorithm = 'quos';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'assumenda';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'alias';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzTarget = ListIdentityPoolsXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_LIST_IDENTITY_POOLS;

    $response = $sdk->sdk->listIdentityPools($request);

    if ($response->listIdentityPoolsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

<p>Lists the tags that are assigned to an Amazon Cognito identity pool.</p> <p>A tag is a label that you can apply to identity pools to categorize and manage them in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>You can use this action up to 10 times per second, per account.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListTagsForResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->listTagsForResourceInput = new ListTagsForResourceInput();
    $request->listTagsForResourceInput->resourceArn = 'dolorum';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzTarget = ListTagsForResourceXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_LIST_TAGS_FOR_RESOURCE;

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lookupDeveloperIdentity

<p>Retrieves the <code>IdentityID</code> associated with a <code>DeveloperUserIdentifier</code> or the list of <code>DeveloperUserIdentifier</code> values associated with an <code>IdentityId</code> for an existing identity. Either <code>IdentityID</code> or <code>DeveloperUserIdentifier</code> must not be null. If you supply only one of these values, the other value will be searched in the database and returned as a part of the response. If you supply both, <code>DeveloperUserIdentifier</code> will be matched against <code>IdentityID</code>. If the values are verified against the database, the response returns both values and is the same as the request. Otherwise a <code>ResourceConflictException</code> is thrown.</p> <p> <code>LookupDeveloperIdentity</code> is intended for low-throughput control plane operations: for example, to enable customer service to locate an identity ID by username. If you are using it for higher-volume operations such as user authentication, your requests are likely to be throttled. <a>GetOpenIdTokenForDeveloperIdentity</a> is a better option for higher-volume operations for user authentication.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LookupDeveloperIdentityRequest;
use \OpenAPI\OpenAPI\Models\Shared\LookupDeveloperIdentityInput;
use \OpenAPI\OpenAPI\Models\Operations\LookupDeveloperIdentityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LookupDeveloperIdentityRequest();
    $request->lookupDeveloperIdentityInput = new LookupDeveloperIdentityInput();
    $request->lookupDeveloperIdentityInput->developerUserIdentifier = 'non';
    $request->lookupDeveloperIdentityInput->identityId = 'eligendi';
    $request->lookupDeveloperIdentityInput->identityPoolId = 'sint';
    $request->lookupDeveloperIdentityInput->maxResults = 396098;
    $request->lookupDeveloperIdentityInput->nextToken = 'provident';
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->xAmzTarget = LookupDeveloperIdentityXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_LOOKUP_DEVELOPER_IDENTITY;

    $response = $sdk->sdk->lookupDeveloperIdentity($request);

    if ($response->lookupDeveloperIdentityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## mergeDeveloperIdentities

<p>Merges two users having different <code>IdentityId</code>s, existing in the same identity pool, and identified by the same developer provider. You can use this action to request that discrete users be merged and identified as a single user in the Cognito environment. Cognito associates the given source user (<code>SourceUserIdentifier</code>) with the <code>IdentityId</code> of the <code>DestinationUserIdentifier</code>. Only developer-authenticated users can be merged. If the users to be merged are associated with the same public provider, but as two different users, an exception will be thrown.</p> <p>The number of linked logins is limited to 20. So, the number of linked logins for the source user, <code>SourceUserIdentifier</code>, and the destination user, <code>DestinationUserIdentifier</code>, together should not be larger than 20. Otherwise, an exception will be thrown.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\MergeDeveloperIdentitiesRequest;
use \OpenAPI\OpenAPI\Models\Shared\MergeDeveloperIdentitiesInput;
use \OpenAPI\OpenAPI\Models\Operations\MergeDeveloperIdentitiesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new MergeDeveloperIdentitiesRequest();
    $request->mergeDeveloperIdentitiesInput = new MergeDeveloperIdentitiesInput();
    $request->mergeDeveloperIdentitiesInput->destinationUserIdentifier = 'in';
    $request->mergeDeveloperIdentitiesInput->developerProviderName = 'in';
    $request->mergeDeveloperIdentitiesInput->identityPoolId = 'illum';
    $request->mergeDeveloperIdentitiesInput->sourceUserIdentifier = 'maiores';
    $request->xAmzAlgorithm = 'rerum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'aliquid';
    $request->xAmzTarget = MergeDeveloperIdentitiesXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_MERGE_DEVELOPER_IDENTITIES;

    $response = $sdk->sdk->mergeDeveloperIdentities($request);

    if ($response->mergeDeveloperIdentitiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setIdentityPoolRoles

<p>Sets the roles for an identity pool. These roles are used when making calls to <a>GetCredentialsForIdentity</a> action.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetIdentityPoolRolesRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetIdentityPoolRolesInput;
use \OpenAPI\OpenAPI\Models\Shared\RoleMapping;
use \OpenAPI\OpenAPI\Models\Shared\AmbiguousRoleResolutionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RulesConfigurationType;
use \OpenAPI\OpenAPI\Models\Shared\MappingRule;
use \OpenAPI\OpenAPI\Models\Shared\MappingRuleMatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RoleMappingTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\SetIdentityPoolRolesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetIdentityPoolRolesRequest();
    $request->setIdentityPoolRolesInput = new SetIdentityPoolRolesInput();
    $request->setIdentityPoolRolesInput->identityPoolId = 'laborum';
    $request->setIdentityPoolRolesInput->roleMappings = [
        'non' => new RoleMapping(),
        'occaecati' => new RoleMapping(),
        'enim' => new RoleMapping(),
        'accusamus' => new RoleMapping(),
    ];
    $request->setIdentityPoolRolesInput->roles = [
        'quidem' => 'provident',
        'nam' => 'id',
        'blanditiis' => 'deleniti',
        'sapiente' => 'amet',
    ];
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = SetIdentityPoolRolesXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_SET_IDENTITY_POOL_ROLES;

    $response = $sdk->sdk->setIdentityPoolRoles($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## setPrincipalTagAttributeMap

You can use this operation to use default (username and clientID) attribute or custom attribute mappings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SetPrincipalTagAttributeMapRequest;
use \OpenAPI\OpenAPI\Models\Shared\SetPrincipalTagAttributeMapInput;
use \OpenAPI\OpenAPI\Models\Operations\SetPrincipalTagAttributeMapXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetPrincipalTagAttributeMapRequest();
    $request->setPrincipalTagAttributeMapInput = new SetPrincipalTagAttributeMapInput();
    $request->setPrincipalTagAttributeMapInput->identityPoolId = 'nihil';
    $request->setPrincipalTagAttributeMapInput->identityProviderName = 'magnam';
    $request->setPrincipalTagAttributeMapInput->principalTags = [
        'id' => 'labore',
        'labore' => 'suscipit',
        'natus' => 'nobis',
    ];
    $request->setPrincipalTagAttributeMapInput->useDefaults = false;
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'aspernatur';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = SetPrincipalTagAttributeMapXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_SET_PRINCIPAL_TAG_ATTRIBUTE_MAP;

    $response = $sdk->sdk->setPrincipalTagAttributeMap($request);

    if ($response->setPrincipalTagAttributeMapResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Assigns a set of tags to the specified Amazon Cognito identity pool. A tag is a label that you can use to categorize and manage identity pools in different ways, such as by purpose, owner, environment, or other criteria.</p> <p>Each tag consists of a key and value, both of which you define. A key is a general category for more specific values. For example, if you have two versions of an identity pool, one for testing and another for production, you might assign an <code>Environment</code> tag key to both identity pools. The value of this key might be <code>Test</code> for one identity pool and <code>Production</code> for the other.</p> <p>Tags are useful for cost tracking and access control. You can activate your tags so that they appear on the Billing and Cost Management console, where you can track the costs associated with your identity pools. In an IAM policy, you can constrain permissions for identity pools based on specific tags or tag values.</p> <p>You can use this action up to 5 times per second, per account. An identity pool can have as many as 50 tags.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\TagResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->tagResourceInput = new TagResourceInput();
    $request->tagResourceInput->resourceArn = 'ullam';
    $request->tagResourceInput->tags = [
        'quos' => 'sint',
        'accusantium' => 'mollitia',
        'reiciendis' => 'mollitia',
    ];
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzTarget = TagResourceXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_TAG_RESOURCE;

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unlinkDeveloperIdentity

<p>Unlinks a <code>DeveloperUserIdentifier</code> from an existing identity. Unlinked developer users will be considered new identities next time they are seen. If, for a given Cognito identity, you remove all federated identities as well as the developer user identifier, the Cognito identity becomes inaccessible.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnlinkDeveloperIdentityRequest;
use \OpenAPI\OpenAPI\Models\Shared\UnlinkDeveloperIdentityInput;
use \OpenAPI\OpenAPI\Models\Operations\UnlinkDeveloperIdentityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnlinkDeveloperIdentityRequest();
    $request->unlinkDeveloperIdentityInput = new UnlinkDeveloperIdentityInput();
    $request->unlinkDeveloperIdentityInput->developerProviderName = 'iure';
    $request->unlinkDeveloperIdentityInput->developerUserIdentifier = 'doloribus';
    $request->unlinkDeveloperIdentityInput->identityId = 'debitis';
    $request->unlinkDeveloperIdentityInput->identityPoolId = 'eius';
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = UnlinkDeveloperIdentityXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_UNLINK_DEVELOPER_IDENTITY;

    $response = $sdk->sdk->unlinkDeveloperIdentity($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unlinkIdentity

<p>Unlinks a federated identity from an existing account. Unlinked logins will be considered new identities next time they are seen. Removing the last linked login will make this identity inaccessible.</p> <p>This is a public API. You do not need any credentials to call this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnlinkIdentityRequest;
use \OpenAPI\OpenAPI\Models\Shared\UnlinkIdentityInput;
use \OpenAPI\OpenAPI\Models\Operations\UnlinkIdentityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnlinkIdentityRequest();
    $request->unlinkIdentityInput = new UnlinkIdentityInput();
    $request->unlinkIdentityInput->identityId = 'ullam';
    $request->unlinkIdentityInput->logins = [
        'nihil' => 'repellat',
        'quibusdam' => 'sed',
        'saepe' => 'pariatur',
    ];
    $request->unlinkIdentityInput->loginsToRemove = [
        'consequuntur',
    ];
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'sunt';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->xAmzTarget = UnlinkIdentityXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_UNLINK_IDENTITY;

    $response = $sdk->sdk->unlinkIdentity($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes the specified tags from the specified Amazon Cognito identity pool. You can use this action up to 5 times per second, per account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Shared\UntagResourceInput;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->untagResourceInput = new UntagResourceInput();
    $request->untagResourceInput->resourceArn = 'maxime';
    $request->untagResourceInput->tagKeys = [
        'excepturi',
        'odit',
    ];
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->xAmzTarget = UntagResourceXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_UNTAG_RESOURCE;

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIdentityPool

<p>Updates an identity pool.</p> <p>You must use AWS Developer credentials to call this API.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIdentityPoolRequest;
use \OpenAPI\OpenAPI\Models\Shared\IdentityPool;
use \OpenAPI\OpenAPI\Models\Shared\CognitoIdentityProvider;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIdentityPoolXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIdentityPoolRequest();
    $request->identityPool = new IdentityPool();
    $request->identityPool->allowClassicFlow = false;
    $request->identityPool->allowUnauthenticatedIdentities = false;
    $request->identityPool->cognitoIdentityProviders = [
        new CognitoIdentityProvider(),
        new CognitoIdentityProvider(),
    ];
    $request->identityPool->developerProviderName = 'nam';
    $request->identityPool->identityPoolId = 'eaque';
    $request->identityPool->identityPoolName = 'pariatur';
    $request->identityPool->identityPoolTags = [
        'voluptatibus' => 'perferendis',
        'fugiat' => 'amet',
    ];
    $request->identityPool->openIdConnectProviderARNs = [
        'cumque',
    ];
    $request->identityPool->samlProviderARNs = [
        'hic',
        'libero',
    ];
    $request->identityPool->supportedLoginProviders = [
        'dolores' => 'quis',
        'totam' => 'dignissimos',
        'eaque' => 'quis',
    ];
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = UpdateIdentityPoolXAmzTargetEnum::AWS_COGNITO_IDENTITY_SERVICE_UPDATE_IDENTITY_POOL;

    $response = $sdk->sdk->updateIdentityPool($request);

    if ($response->identityPool !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
