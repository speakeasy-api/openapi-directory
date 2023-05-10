# SDK

## Overview

<p>AWS Identity and Access Management Roles Anywhere provides a secure way for your workloads such as servers, containers, and applications running outside of AWS to obtain Temporary AWS credentials. Your workloads can use the same IAM policies and roles that you have configured with native AWS applications to access AWS resources. Using IAM Roles Anywhere will eliminate the need to manage long term credentials for workloads running outside of AWS.</p> <p>To use IAM Roles Anywhere customer workloads will need to use X.509 certificates issued by their Certificate Authority (CA) . The Certificate Authority (CA) needs to be registered with IAM Roles Anywhere as a trust anchor to establish trust between customer PKI and IAM Roles Anywhere. Customers who do not manage their own PKI system can use AWS Certificate Manager Private Certificate Authority (ACM PCA) to create a Certificate Authority and use that to establish trust with IAM Roles Anywhere</p> <p>This guide describes the IAM rolesanywhere operations that you can call programmatically. For general information about IAM Roles Anywhere see <a href="https://docs.aws.amazon.com/">https://docs.aws.amazon.com/</a> </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/rolesanywhere/>
### Available Operations

* [createProfile](#createprofile) - <p>Creates a profile. A profile is configuration resource to list the roles that RolesAnywhere service is trusted to assume. In addition, by applying a profile you can intersect permissions with IAM managed policies.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:CreateProfile</code>. </p>
* [createTrustAnchor](#createtrustanchor) - <p>Creates a trust anchor. You establish trust between IAM Roles Anywhere and your certificate authority (CA) by configuring a trust anchor. A Trust Anchor is defined either as a reference to a AWS Certificate Manager Private Certificate Authority (ACM PCA), or by uploading a Certificate Authority (CA) certificate. Your AWS workloads can authenticate with the trust anchor using certificates issued by the trusted Certificate Authority (CA) in exchange for temporary AWS credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:CreateTrustAnchor</code>. </p>
* [deleteCrl](#deletecrl) - <p>Deletes a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteCrl</code>. </p>
* [deleteProfile](#deleteprofile) - <p>Deletes a profile.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteProfile</code>. </p>
* [deleteTrustAnchor](#deletetrustanchor) - <p>Deletes a trust anchor.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteTrustAnchor</code>. </p>
* [disableCrl](#disablecrl) - <p>Disables a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableCrl</code>. </p>
* [disableProfile](#disableprofile) - <p>Disables a profile. When disabled, <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> requests with this profile fail.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableProfile</code>. </p>
* [disableTrustAnchor](#disabletrustanchor) - <p>Disables a trust anchor. When disabled, <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> requests specifying this trust anchor are unauthorized.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableTrustAnchor</code>. </p>
* [enableCrl](#enablecrl) - <p>Enables a certificate revocation list (CRL). When enabled, certificates stored in the CRL are unauthorized to receive session credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableCrl</code>. </p>
* [enableProfile](#enableprofile) - <p>Enables the roles in a profile to receive session credentials in <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a>. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableProfile</code>. </p>
* [enableTrustAnchor](#enabletrustanchor) - <p>Enables a trust anchor. When enabled, certificates in the trust anchor chain are authorized for trust validation. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableTrustAnchor</code>. </p>
* [getCrl](#getcrl) - <p>Gets a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetCrl</code>. </p>
* [getProfile](#getprofile) - <p>Gets a profile.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetProfile</code>. </p>
* [getSubject](#getsubject) - <p>Gets a Subject. A Subject associates a certificate identity with authentication attempts by CreateSession. The Subject resources stores audit information such as status of the last authentication attempt, the certificate data used in the attempt, and the last time the associated identity attempted authentication. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetSubject</code>. </p>
* [getTrustAnchor](#gettrustanchor) - <p>Gets a trust anchor.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetTrustAnchor</code>. </p>
* [importCrl](#importcrl) - <p>Imports the certificate revocation list (CRL). CRl is a list of certificates that have been revoked by the issuing certificate Authority (CA). IAM Roles Anywhere validates against the crl list before issuing credentials. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:ImportCrl</code>. </p>
* [listCrls](#listcrls) - <p>Lists all Crls in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListCrls</code>. </p>
* [listProfiles](#listprofiles) - <p>Lists all profiles in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListProfiles</code>. </p>
* [listSubjects](#listsubjects) - <p>Lists the subjects in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListSubjects</code>. </p>
* [listTagsForResource](#listtagsforresource) - <p>Lists the tags attached to the resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListTagsForResource</code>. </p>
* [listTrustAnchors](#listtrustanchors) - <p>Lists the trust anchors in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListTrustAnchors</code>. </p>
* [tagResource](#tagresource) - <p>Attaches tags to a resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:TagResource</code>. </p>
* [untagResource](#untagresource) - <p>Removes tags from the resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UntagResource</code>. </p>
* [updateCrl](#updatecrl) - <p>Updates the certificate revocation list (CRL). CRl is a list of certificates that have been revoked by the issuing certificate Authority (CA). IAM Roles Anywhere validates against the crl list before issuing credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateCrl</code>. </p>
* [updateProfile](#updateprofile) - <p>Updates the profile. A profile is configuration resource to list the roles that RolesAnywhere service is trusted to assume. In addition, by applying a profile you can scope-down permissions with IAM managed policies.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateProfile</code>. </p>
* [updateTrustAnchor](#updatetrustanchor) - <p>Updates the trust anchor.You establish trust between IAM Roles Anywhere and your certificate authority (CA) by configuring a trust anchor. A Trust Anchor is defined either as a reference to a AWS Certificate Manager Private Certificate Authority (ACM PCA), or by uploading a Certificate Authority (CA) certificate. Your AWS workloads can authenticate with the trust anchor using certificates issued by the trusted Certificate Authority (CA) in exchange for temporary AWS credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateTrustAnchor</code>. </p>

## createProfile

<p>Creates a profile. A profile is configuration resource to list the roles that RolesAnywhere service is trusted to assume. In addition, by applying a profile you can intersect permissions with IAM managed policies.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:CreateProfile</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateProfileRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProfileRequest();
    $request->requestBody = new CreateProfileRequestBody();
    $request->requestBody->durationSeconds = 479977;
    $request->requestBody->enabled = false;
    $request->requestBody->managedPolicyArns = [
        'nisi',
        'recusandae',
        'temporibus',
    ];
    $request->requestBody->name = 'Erica Bogisich III';
    $request->requestBody->requireInstanceProperties = false;
    $request->requestBody->roleArns = [
        'sapiente',
        'quo',
        'odit',
        'at',
    ];
    $request->requestBody->sessionPolicy = 'at';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'esse';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->createProfile($request);

    if ($response->profileDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTrustAnchor

<p>Creates a trust anchor. You establish trust between IAM Roles Anywhere and your certificate authority (CA) by configuring a trust anchor. A Trust Anchor is defined either as a reference to a AWS Certificate Manager Private Certificate Authority (ACM PCA), or by uploading a Certificate Authority (CA) certificate. Your AWS workloads can authenticate with the trust anchor using certificates issued by the trusted Certificate Authority (CA) in exchange for temporary AWS credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:CreateTrustAnchor</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrustAnchorRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrustAnchorRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrustAnchorRequestBodySource;
use \OpenAPI\OpenAPI\Models\Shared\SourceData;
use \OpenAPI\OpenAPI\Models\Shared\TrustAnchorTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTrustAnchorRequest();
    $request->requestBody = new CreateTrustAnchorRequestBody();
    $request->requestBody->enabled = false;
    $request->requestBody->name = 'Antoinette Nikolaus';
    $request->requestBody->source = new CreateTrustAnchorRequestBodySource();
    $request->requestBody->source->sourceData = new SourceData();
    $request->requestBody->source->sourceData->acmPcaArn = 'deleniti';
    $request->requestBody->source->sourceData->x509CertificateData = 'hic';
    $request->requestBody->source->sourceType = TrustAnchorTypeEnum::SELF_SIGNED_REPOSITORY;
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'cum';

    $response = $sdk->sdk->createTrustAnchor($request);

    if ($response->trustAnchorDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCrl

<p>Deletes a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteCrl</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCrlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCrlRequest();
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'natus';
    $request->crlId = 'sed';

    $response = $sdk->sdk->deleteCrl($request);

    if ($response->crlDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProfile

<p>Deletes a profile.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteProfile</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProfileRequest();
    $request->xAmzAlgorithm = 'iste';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'laboriosam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'fuga';
    $request->profileId = 'in';

    $response = $sdk->sdk->deleteProfile($request);

    if ($response->profileDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTrustAnchor

<p>Deletes a trust anchor.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DeleteTrustAnchor</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrustAnchorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTrustAnchorRequest();
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->trustAnchorId = 'reiciendis';

    $response = $sdk->sdk->deleteTrustAnchor($request);

    if ($response->trustAnchorDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableCrl

<p>Disables a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableCrl</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableCrlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableCrlRequest();
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->crlId = 'nobis';

    $response = $sdk->sdk->disableCrl($request);

    if ($response->crlDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableProfile

<p>Disables a profile. When disabled, <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> requests with this profile fail.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableProfile</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableProfileRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'minima';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'accusantium';
    $request->xAmzSignedHeaders = 'iure';
    $request->profileId = 'culpa';

    $response = $sdk->sdk->disableProfile($request);

    if ($response->profileDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableTrustAnchor

<p>Disables a trust anchor. When disabled, <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a> requests specifying this trust anchor are unauthorized.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:DisableTrustAnchor</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableTrustAnchorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableTrustAnchorRequest();
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->trustAnchorId = 'repellat';

    $response = $sdk->sdk->disableTrustAnchor($request);

    if ($response->trustAnchorDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableCrl

<p>Enables a certificate revocation list (CRL). When enabled, certificates stored in the CRL are unauthorized to receive session credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableCrl</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableCrlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableCrlRequest();
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'numquam';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'quam';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'velit';
    $request->crlId = 'error';

    $response = $sdk->sdk->enableCrl($request);

    if ($response->crlDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableProfile

<p>Enables the roles in a profile to receive session credentials in <a href="https://docs.aws.amazon.com/rolesanywhere/latest/APIReference/API_CreateSession.html">CreateSession</a>. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableProfile</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableProfileRequest();
    $request->xAmzAlgorithm = 'quia';
    $request->xAmzContentSha256 = 'quis';
    $request->xAmzCredential = 'vitae';
    $request->xAmzDate = 'laborum';
    $request->xAmzSecurityToken = 'animi';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'odit';
    $request->profileId = 'quo';

    $response = $sdk->sdk->enableProfile($request);

    if ($response->profileDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableTrustAnchor

<p>Enables a trust anchor. When enabled, certificates in the trust anchor chain are authorized for trust validation. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:EnableTrustAnchor</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableTrustAnchorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableTrustAnchorRequest();
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';
    $request->trustAnchorId = 'error';

    $response = $sdk->sdk->enableTrustAnchor($request);

    if ($response->trustAnchorDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCrl

<p>Gets a certificate revocation list (CRL).</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetCrl</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCrlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCrlRequest();
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nihil';
    $request->crlId = 'praesentium';

    $response = $sdk->sdk->getCrl($request);

    if ($response->crlDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getProfile

<p>Gets a profile.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetProfile</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetProfileRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetProfileRequest();
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'doloremque';
    $request->profileId = 'reprehenderit';

    $response = $sdk->sdk->getProfile($request);

    if ($response->profileDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubject

<p>Gets a Subject. A Subject associates a certificate identity with authentication attempts by CreateSession. The Subject resources stores audit information such as status of the last authentication attempt, the certificate data used in the attempt, and the last time the associated identity attempted authentication. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetSubject</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSubjectRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubjectRequest();
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';
    $request->subjectId = 'harum';

    $response = $sdk->sdk->getSubject($request);

    if ($response->subjectDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrustAnchor

<p>Gets a trust anchor.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:GetTrustAnchor</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTrustAnchorRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrustAnchorRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'quae';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'quidem';
    $request->trustAnchorId = 'molestias';

    $response = $sdk->sdk->getTrustAnchor($request);

    if ($response->trustAnchorDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importCrl

<p>Imports the certificate revocation list (CRL). CRl is a list of certificates that have been revoked by the issuing certificate Authority (CA). IAM Roles Anywhere validates against the crl list before issuing credentials. </p> <p> <b>Required permissions: </b> <code>rolesanywhere:ImportCrl</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportCrlRequest;
use \OpenAPI\OpenAPI\Models\Operations\ImportCrlRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportCrlRequest();
    $request->requestBody = new ImportCrlRequestBody();
    $request->requestBody->crlData = 'excepturi';
    $request->requestBody->enabled = false;
    $request->requestBody->name = 'Joel Lang';
    $request->requestBody->tags = [
        new Tag(),
    ];
    $request->requestBody->trustAnchorArn = 'repudiandae';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';

    $response = $sdk->sdk->importCrl($request);

    if ($response->crlDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCrls

<p>Lists all Crls in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListCrls</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCrlsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCrlsRequest();
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'modi';
    $request->nextToken = 'qui';
    $request->pageSize = 397821;

    $response = $sdk->sdk->listCrls($request);

    if ($response->listCrlsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProfiles

<p>Lists all profiles in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListProfiles</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProfilesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProfilesRequest();
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';
    $request->nextToken = 'fugit';
    $request->pageSize = 677817;

    $response = $sdk->sdk->listProfiles($request);

    if ($response->listProfilesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSubjects

<p>Lists the subjects in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListSubjects</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSubjectsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSubjectsRequest();
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'eum';
    $request->nextToken = 'non';
    $request->pageSize = 756107;

    $response = $sdk->sdk->listSubjects($request);

    if ($response->listSubjectsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

<p>Lists the tags attached to the resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListTagsForResource</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'provident';
    $request->xAmzDate = 'necessitatibus';
    $request->xAmzSecurityToken = 'sint';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'dolor';
    $request->resourceArn = 'debitis';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTrustAnchors

<p>Lists the trust anchors in the authenticated account and Amazon Web Services Region.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:ListTrustAnchors</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTrustAnchorsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTrustAnchorsRequest();
    $request->xAmzAlgorithm = 'a';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'rerum';
    $request->nextToken = 'dicta';
    $request->pageSize = 297437;

    $response = $sdk->sdk->listTrustAnchors($request);

    if ($response->listTrustAnchorsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

<p>Attaches tags to a resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:TagResource</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->resourceArn = 'cumque';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

<p>Removes tags from the resource.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UntagResource</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->requestBody = new UntagResourceRequestBody();
    $request->requestBody->resourceArn = 'accusamus';
    $request->requestBody->tagKeys = [
        'quidem',
        'provident',
        'nam',
        'id',
    ];
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'vel';

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateCrl

<p>Updates the certificate revocation list (CRL). CRl is a list of certificates that have been revoked by the issuing certificate Authority (CA). IAM Roles Anywhere validates against the crl list before issuing credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateCrl</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCrlRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCrlRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCrlRequest();
    $request->requestBody = new UpdateCrlRequestBody();
    $request->requestBody->crlData = 'natus';
    $request->requestBody->name = 'Fernando Aufderhar';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'nobis';
    $request->crlId = 'eum';

    $response = $sdk->sdk->updateCrl($request);

    if ($response->crlDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProfile

<p>Updates the profile. A profile is configuration resource to list the roles that RolesAnywhere service is trusted to assume. In addition, by applying a profile you can scope-down permissions with IAM managed policies.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateProfile</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProfileRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProfileRequest();
    $request->requestBody = new UpdateProfileRequestBody();
    $request->requestBody->durationSeconds = 878453;
    $request->requestBody->managedPolicyArns = [
        'architecto',
    ];
    $request->requestBody->name = 'Frances Marks';
    $request->requestBody->roleArns = [
        'sint',
        'accusantium',
        'mollitia',
    ];
    $request->requestBody->sessionPolicy = 'reiciendis';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'eum';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'nemo';
    $request->profileId = 'quasi';

    $response = $sdk->sdk->updateProfile($request);

    if ($response->profileDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTrustAnchor

<p>Updates the trust anchor.You establish trust between IAM Roles Anywhere and your certificate authority (CA) by configuring a trust anchor. A Trust Anchor is defined either as a reference to a AWS Certificate Manager Private Certificate Authority (ACM PCA), or by uploading a Certificate Authority (CA) certificate. Your AWS workloads can authenticate with the trust anchor using certificates issued by the trusted Certificate Authority (CA) in exchange for temporary AWS credentials.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateTrustAnchor</code>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrustAnchorRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrustAnchorRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrustAnchorRequestBodySource;
use \OpenAPI\OpenAPI\Models\Shared\SourceData;
use \OpenAPI\OpenAPI\Models\Shared\TrustAnchorTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTrustAnchorRequest();
    $request->requestBody = new UpdateTrustAnchorRequestBody();
    $request->requestBody->name = 'Melba Toy';
    $request->requestBody->source = new UpdateTrustAnchorRequestBodySource();
    $request->requestBody->source->sourceData = new SourceData();
    $request->requestBody->source->sourceData->acmPcaArn = 'deleniti';
    $request->requestBody->source->sourceData->x509CertificateData = 'facilis';
    $request->requestBody->source->sourceType = TrustAnchorTypeEnum::CERTIFICATE_BUNDLE;
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'repudiandae';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'expedita';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'repellat';
    $request->trustAnchorId = 'quibusdam';

    $response = $sdk->sdk->updateTrustAnchor($request);

    if ($response->trustAnchorDetailResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
