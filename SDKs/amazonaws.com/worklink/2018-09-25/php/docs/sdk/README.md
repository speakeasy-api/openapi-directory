# SDK

## Overview

Amazon WorkLink is a cloud-based service that provides secure access to internal websites and web apps from iOS and Android phones. In a single step, your users, such as employees, can access internal websites as efficiently as they access any other public website. They enter a URL in their web browser, or choose a link to an internal website in an email. Amazon WorkLink authenticates the user's access and securely renders authorized internal web content in a secure rendering service in the AWS cloud. Amazon WorkLink doesn't download or store any internal web content on mobile devices.

Amazon Web Services documentation
<https://docs.aws.amazon.com/worklink/>
### Available Operations

* [~~associateDomain~~](#associatedomain) - Specifies a domain to be associated to Amazon WorkLink. :warning: **Deprecated**
* [~~associateWebsiteAuthorizationProvider~~](#associatewebsiteauthorizationprovider) - Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network. :warning: **Deprecated**
* [~~associateWebsiteCertificateAuthority~~](#associatewebsitecertificateauthority) - Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network. :warning: **Deprecated**
* [~~createFleet~~](#createfleet) - Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app. :warning: **Deprecated**
* [~~deleteFleet~~](#deletefleet) - Deletes a fleet. Prevents users from accessing previously associated websites.  :warning: **Deprecated**
* [~~describeAuditStreamConfiguration~~](#describeauditstreamconfiguration) - Describes the configuration for delivering audit streams to the customer account. :warning: **Deprecated**
* [~~describeCompanyNetworkConfiguration~~](#describecompanynetworkconfiguration) - Describes the networking configuration to access the internal websites associated with the specified fleet. :warning: **Deprecated**
* [~~describeDevice~~](#describedevice) - Provides information about a user's device. :warning: **Deprecated**
* [~~describeDevicePolicyConfiguration~~](#describedevicepolicyconfiguration) - Describes the device policy configuration for the specified fleet. :warning: **Deprecated**
* [~~describeDomain~~](#describedomain) - Provides information about the domain. :warning: **Deprecated**
* [~~describeFleetMetadata~~](#describefleetmetadata) - Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details. :warning: **Deprecated**
* [~~describeIdentityProviderConfiguration~~](#describeidentityproviderconfiguration) - Describes the identity provider configuration of the specified fleet. :warning: **Deprecated**
* [~~describeWebsiteCertificateAuthority~~](#describewebsitecertificateauthority) - Provides information about the certificate authority. :warning: **Deprecated**
* [~~disassociateDomain~~](#disassociatedomain) - Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink.  :warning: **Deprecated**
* [~~disassociateWebsiteAuthorizationProvider~~](#disassociatewebsiteauthorizationprovider) - Disassociates a website authorization provider from a specified fleet. After the disassociation, users can't load any associated websites that require this authorization provider. :warning: **Deprecated**
* [~~disassociateWebsiteCertificateAuthority~~](#disassociatewebsitecertificateauthority) - Removes a certificate authority (CA). :warning: **Deprecated**
* [~~listDevices~~](#listdevices) - Retrieves a list of devices registered with the specified fleet. :warning: **Deprecated**
* [~~listDomains~~](#listdomains) - Retrieves a list of domains associated to a specified fleet. :warning: **Deprecated**
* [~~listFleets~~](#listfleets) - Retrieves a list of fleets for the current account and Region. :warning: **Deprecated**
* [~~listTagsForResource~~](#listtagsforresource) - Retrieves a list of tags for the specified resource. :warning: **Deprecated**
* [~~listWebsiteAuthorizationProviders~~](#listwebsiteauthorizationproviders) - Retrieves a list of website authorization providers associated with a specified fleet. :warning: **Deprecated**
* [~~listWebsiteCertificateAuthorities~~](#listwebsitecertificateauthorities) - Retrieves a list of certificate authorities added for the current account and Region. :warning: **Deprecated**
* [~~restoreDomainAccess~~](#restoredomainaccess) - Moves a domain to ACTIVE status if it was in the INACTIVE status. :warning: **Deprecated**
* [~~revokeDomainAccess~~](#revokedomainaccess) - Moves a domain to INACTIVE status if it was in the ACTIVE status. :warning: **Deprecated**
* [~~signOutUser~~](#signoutuser) - Signs the user out from all of their devices. The user can sign in again if they have valid credentials. :warning: **Deprecated**
* [~~tagResource~~](#tagresource) - Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value. :warning: **Deprecated**
* [~~untagResource~~](#untagresource) - Removes one or more tags from the specified resource. :warning: **Deprecated**
* [~~updateAuditStreamConfiguration~~](#updateauditstreamconfiguration) - Updates the audit stream configuration for the fleet. :warning: **Deprecated**
* [~~updateCompanyNetworkConfiguration~~](#updatecompanynetworkconfiguration) - Updates the company network configuration for the fleet. :warning: **Deprecated**
* [~~updateDevicePolicyConfiguration~~](#updatedevicepolicyconfiguration) - Updates the device policy configuration for the fleet. :warning: **Deprecated**
* [~~updateDomainMetadata~~](#updatedomainmetadata) - Updates domain metadata, such as DisplayName. :warning: **Deprecated**
* [~~updateFleetMetadata~~](#updatefleetmetadata) - Updates fleet metadata, such as DisplayName. :warning: **Deprecated**
* [~~updateIdentityProviderConfiguration~~](#updateidentityproviderconfiguration) - Updates the identity provider configuration for the fleet. :warning: **Deprecated**

## ~~associateDomain~~

Specifies a domain to be associated to Amazon WorkLink.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateDomainRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateDomainRequest();
    $request->requestBody = new AssociateDomainRequestBody();
    $request->requestBody->acmCertificateArn = 'suscipit';
    $request->requestBody->displayName = 'iure';
    $request->requestBody->domainName = 'magnam';
    $request->requestBody->fleetArn = 'debitis';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'delectus';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'placeat';

    $response = $sdk->sdk->associateDomain($request);

    if ($response->associateDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~associateWebsiteAuthorizationProvider~~

Associates a website authorization provider with a specified fleet. This is used to authorize users against associated websites in the company network.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateWebsiteAuthorizationProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateWebsiteAuthorizationProviderRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateWebsiteAuthorizationProviderRequest();
    $request->requestBody = new AssociateWebsiteAuthorizationProviderRequestBody();
    $request->requestBody->authorizationProviderType = AssociateWebsiteAuthorizationProviderRequestBodyAuthorizationProviderTypeEnum::SAML;
    $request->requestBody->domainName = 'voluptatum';
    $request->requestBody->fleetArn = 'iusto';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'nisi';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'temporibus';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'veritatis';

    $response = $sdk->sdk->associateWebsiteAuthorizationProvider($request);

    if ($response->associateWebsiteAuthorizationProviderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~associateWebsiteCertificateAuthority~~

Imports the root certificate of a certificate authority (CA) used to obtain TLS certificates used by associated websites within the company network.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateWebsiteCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateWebsiteCertificateAuthorityRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateWebsiteCertificateAuthorityRequest();
    $request->requestBody = new AssociateWebsiteCertificateAuthorityRequestBody();
    $request->requestBody->certificate = 'deserunt';
    $request->requestBody->displayName = 'perferendis';
    $request->requestBody->fleetArn = 'ipsam';
    $request->xAmzAlgorithm = 'repellendus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'at';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'maiores';

    $response = $sdk->sdk->associateWebsiteCertificateAuthority($request);

    if ($response->associateWebsiteCertificateAuthorityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~createFleet~~

Creates a fleet. A fleet consists of resources and the configuration that delivers associated websites to authorized users who download and set up the Amazon WorkLink app.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFleetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFleetRequest();
    $request->requestBody = new CreateFleetRequestBody();
    $request->requestBody->displayName = 'molestiae';
    $request->requestBody->fleetName = 'quod';
    $request->requestBody->optimizeForEndUserLocation = false;
    $request->requestBody->tags = [
        'esse' => 'totam',
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

    $response = $sdk->sdk->createFleet($request);

    if ($response->createFleetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~deleteFleet~~

Deletes a fleet. Prevents users from accessing previously associated websites. 

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFleetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFleetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFleetRequest();
    $request->requestBody = new DeleteFleetRequestBody();
    $request->requestBody->fleetArn = 'molestiae';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->deleteFleet($request);

    if ($response->deleteFleetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~describeAuditStreamConfiguration~~

Describes the configuration for delivering audit streams to the customer account.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAuditStreamConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeAuditStreamConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeAuditStreamConfigurationRequest();
    $request->requestBody = new DescribeAuditStreamConfigurationRequestBody();
    $request->requestBody->fleetArn = 'aspernatur';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ad';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->describeAuditStreamConfiguration($request);

    if ($response->describeAuditStreamConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~describeCompanyNetworkConfiguration~~

Describes the networking configuration to access the internal websites associated with the specified fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCompanyNetworkConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCompanyNetworkConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCompanyNetworkConfigurationRequest();
    $request->requestBody = new DescribeCompanyNetworkConfigurationRequestBody();
    $request->requestBody->fleetArn = 'laboriosam';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'iure';

    $response = $sdk->sdk->describeCompanyNetworkConfiguration($request);

    if ($response->describeCompanyNetworkConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~describeDevice~~

Provides information about a user's device.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeviceRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDeviceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDeviceRequest();
    $request->requestBody = new DescribeDeviceRequestBody();
    $request->requestBody->deviceId = 'saepe';
    $request->requestBody->fleetArn = 'quidem';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'dolores';

    $response = $sdk->sdk->describeDevice($request);

    if ($response->describeDeviceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~describeDevicePolicyConfiguration~~

Describes the device policy configuration for the specified fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDevicePolicyConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDevicePolicyConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDevicePolicyConfigurationRequest();
    $request->requestBody = new DescribeDevicePolicyConfigurationRequestBody();
    $request->requestBody->fleetArn = 'dolorem';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'explicabo';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'minima';

    $response = $sdk->sdk->describeDevicePolicyConfiguration($request);

    if ($response->describeDevicePolicyConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~describeDomain~~

Provides information about the domain.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeDomainRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeDomainRequest();
    $request->requestBody = new DescribeDomainRequestBody();
    $request->requestBody->domainName = 'excepturi';
    $request->requestBody->fleetArn = 'accusantium';
    $request->xAmzAlgorithm = 'iure';
    $request->xAmzContentSha256 = 'culpa';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'dolorem';

    $response = $sdk->sdk->describeDomain($request);

    if ($response->describeDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~describeFleetMetadata~~

Provides basic information for the specified fleet, excluding identity provider, networking, and device configuration details.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetMetadataRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeFleetMetadataRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeFleetMetadataRequest();
    $request->requestBody = new DescribeFleetMetadataRequestBody();
    $request->requestBody->fleetArn = 'culpa';
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'quam';

    $response = $sdk->sdk->describeFleetMetadata($request);

    if ($response->describeFleetMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~describeIdentityProviderConfiguration~~

Describes the identity provider configuration of the specified fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIdentityProviderConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeIdentityProviderConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeIdentityProviderConfigurationRequest();
    $request->requestBody = new DescribeIdentityProviderConfigurationRequestBody();
    $request->requestBody->fleetArn = 'molestiae';
    $request->xAmzAlgorithm = 'velit';
    $request->xAmzContentSha256 = 'error';
    $request->xAmzCredential = 'quia';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'vitae';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'animi';

    $response = $sdk->sdk->describeIdentityProviderConfiguration($request);

    if ($response->describeIdentityProviderConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~describeWebsiteCertificateAuthority~~

Provides information about the certificate authority.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWebsiteCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Operations\DescribeWebsiteCertificateAuthorityRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeWebsiteCertificateAuthorityRequest();
    $request->requestBody = new DescribeWebsiteCertificateAuthorityRequestBody();
    $request->requestBody->fleetArn = 'enim';
    $request->requestBody->websiteCaId = 'odit';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->describeWebsiteCertificateAuthority($request);

    if ($response->describeWebsiteCertificateAuthorityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~disassociateDomain~~

Disassociates a domain from Amazon WorkLink. End users lose the ability to access the domain with Amazon WorkLink. 

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateDomainRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateDomainRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateDomainRequest();
    $request->requestBody = new DisassociateDomainRequestBody();
    $request->requestBody->domainName = 'quasi';
    $request->requestBody->fleetArn = 'error';
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->disassociateDomain($request);

    if ($response->disassociateDomainResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~disassociateWebsiteAuthorizationProvider~~

Disassociates a website authorization provider from a specified fleet. After the disassociation, users can't load any associated websites that require this authorization provider.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateWebsiteAuthorizationProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateWebsiteAuthorizationProviderRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateWebsiteAuthorizationProviderRequest();
    $request->requestBody = new DisassociateWebsiteAuthorizationProviderRequestBody();
    $request->requestBody->authorizationProviderId = 'praesentium';
    $request->requestBody->fleetArn = 'voluptatibus';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'doloremque';
    $request->xAmzSignedHeaders = 'reprehenderit';

    $response = $sdk->sdk->disassociateWebsiteAuthorizationProvider($request);

    if ($response->disassociateWebsiteAuthorizationProviderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~disassociateWebsiteCertificateAuthority~~

Removes a certificate authority (CA).

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateWebsiteCertificateAuthorityRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateWebsiteCertificateAuthorityRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateWebsiteCertificateAuthorityRequest();
    $request->requestBody = new DisassociateWebsiteCertificateAuthorityRequestBody();
    $request->requestBody->fleetArn = 'ut';
    $request->requestBody->websiteCaId = 'maiores';
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->disassociateWebsiteCertificateAuthority($request);

    if ($response->disassociateWebsiteCertificateAuthorityResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listDevices~~

Retrieves a list of devices registered with the specified fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDevicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDevicesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDevicesRequest();
    $request->maxResults = 'accusamus';
    $request->nextToken = 'commodi';
    $request->requestBody = new ListDevicesRequestBody();
    $request->requestBody->fleetArn = 'repudiandae';
    $request->requestBody->maxResults = 64147;
    $request->requestBody->nextToken = 'ipsum';
    $request->xAmzAlgorithm = 'quidem';
    $request->xAmzContentSha256 = 'molestias';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'rem';

    $response = $sdk->sdk->listDevices($request);

    if ($response->listDevicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listDomains~~

Retrieves a list of domains associated to a specified fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDomainsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDomainsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDomainsRequest();
    $request->maxResults = 'voluptates';
    $request->nextToken = 'quasi';
    $request->requestBody = new ListDomainsRequestBody();
    $request->requestBody->fleetArn = 'repudiandae';
    $request->requestBody->maxResults = 575947;
    $request->requestBody->nextToken = 'veritatis';
    $request->xAmzAlgorithm = 'itaque';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'consequatur';
    $request->xAmzSecurityToken = 'est';
    $request->xAmzSignature = 'quibusdam';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->listDomains($request);

    if ($response->listDomainsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listFleets~~

Retrieves a list of fleets for the current account and Region.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFleetsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFleetsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFleetsRequest();
    $request->maxResults = 'deserunt';
    $request->nextToken = 'distinctio';
    $request->requestBody = new ListFleetsRequestBody();
    $request->requestBody->maxResults = 841386;
    $request->requestBody->nextToken = 'labore';
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'magni';

    $response = $sdk->sdk->listFleets($request);

    if ($response->listFleetsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listTagsForResource~~

Retrieves a list of tags for the specified resource.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

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
    $request->resourceArn = 'assumenda';
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'alias';
    $request->xAmzCredential = 'fugit';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'facilis';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listWebsiteAuthorizationProviders~~

Retrieves a list of website authorization providers associated with a specified fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWebsiteAuthorizationProvidersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWebsiteAuthorizationProvidersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWebsiteAuthorizationProvidersRequest();
    $request->maxResults = 'tempore';
    $request->nextToken = 'labore';
    $request->requestBody = new ListWebsiteAuthorizationProvidersRequestBody();
    $request->requestBody->fleetArn = 'delectus';
    $request->requestBody->maxResults = 433288;
    $request->requestBody->nextToken = 'non';
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'officia';

    $response = $sdk->sdk->listWebsiteAuthorizationProviders($request);

    if ($response->listWebsiteAuthorizationProvidersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listWebsiteCertificateAuthorities~~

Retrieves a list of certificate authorities added for the current account and Region.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWebsiteCertificateAuthoritiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListWebsiteCertificateAuthoritiesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWebsiteCertificateAuthoritiesRequest();
    $request->maxResults = 'dolor';
    $request->nextToken = 'debitis';
    $request->requestBody = new ListWebsiteCertificateAuthoritiesRequestBody();
    $request->requestBody->fleetArn = 'a';
    $request->requestBody->maxResults = 680056;
    $request->requestBody->nextToken = 'in';
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'cumque';

    $response = $sdk->sdk->listWebsiteCertificateAuthorities($request);

    if ($response->listWebsiteCertificateAuthoritiesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~restoreDomainAccess~~

Moves a domain to ACTIVE status if it was in the INACTIVE status.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RestoreDomainAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\RestoreDomainAccessRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RestoreDomainAccessRequest();
    $request->requestBody = new RestoreDomainAccessRequestBody();
    $request->requestBody->domainName = 'facere';
    $request->requestBody->fleetArn = 'ea';
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'non';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->restoreDomainAccess($request);

    if ($response->restoreDomainAccessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~revokeDomainAccess~~

Moves a domain to INACTIVE status if it was in the ACTIVE status.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RevokeDomainAccessRequest;
use \OpenAPI\OpenAPI\Models\Operations\RevokeDomainAccessRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RevokeDomainAccessRequest();
    $request->requestBody = new RevokeDomainAccessRequestBody();
    $request->requestBody->domainName = 'delectus';
    $request->requestBody->fleetArn = 'quidem';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'blanditiis';
    $request->xAmzSecurityToken = 'deleniti';
    $request->xAmzSignature = 'sapiente';
    $request->xAmzSignedHeaders = 'amet';

    $response = $sdk->sdk->revokeDomainAccess($request);

    if ($response->revokeDomainAccessResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~signOutUser~~

Signs the user out from all of their devices. The user can sign in again if they have valid credentials.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\SignOutUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\SignOutUserRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SignOutUserRequest();
    $request->requestBody = new SignOutUserRequestBody();
    $request->requestBody->fleetArn = 'deserunt';
    $request->requestBody->username = 'Golda_Kassulke';
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'labore';

    $response = $sdk->sdk->signOutUser($request);

    if ($response->signOutUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~tagResource~~

Adds or overwrites one or more tags for the specified resource, such as a fleet. Each tag consists of a key and an optional value. If a resource already has a tag with the same key, this operation updates its value.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'suscipit' => 'natus',
        'nobis' => 'eum',
    ];
    $request->resourceArn = 'vero';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~untagResource~~

Removes one or more tags from the specified resource.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->resourceArn = 'quos';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'eum';
    $request->tagKeys = [
        'necessitatibus',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~updateAuditStreamConfiguration~~

Updates the audit stream configuration for the fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAuditStreamConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAuditStreamConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAuditStreamConfigurationRequest();
    $request->requestBody = new UpdateAuditStreamConfigurationRequestBody();
    $request->requestBody->auditStreamArn = 'odit';
    $request->requestBody->fleetArn = 'nemo';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->sdk->updateAuditStreamConfiguration($request);

    if ($response->updateAuditStreamConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~updateCompanyNetworkConfiguration~~

Updates the company network configuration for the fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCompanyNetworkConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateCompanyNetworkConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateCompanyNetworkConfigurationRequest();
    $request->requestBody = new UpdateCompanyNetworkConfigurationRequestBody();
    $request->requestBody->fleetArn = 'facilis';
    $request->requestBody->securityGroupIds = [
        'architecto',
        'architecto',
    ];
    $request->requestBody->subnetIds = [
        'ullam',
        'expedita',
        'nihil',
        'repellat',
    ];
    $request->requestBody->vpcId = 'quibusdam';
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'natus';

    $response = $sdk->sdk->updateCompanyNetworkConfiguration($request);

    if ($response->updateCompanyNetworkConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~updateDevicePolicyConfiguration~~

Updates the device policy configuration for the fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDevicePolicyConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDevicePolicyConfigurationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDevicePolicyConfigurationRequest();
    $request->requestBody = new UpdateDevicePolicyConfigurationRequestBody();
    $request->requestBody->deviceCaCertificate = 'magni';
    $request->requestBody->fleetArn = 'sunt';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->updateDevicePolicyConfiguration($request);

    if ($response->updateDevicePolicyConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~updateDomainMetadata~~

Updates domain metadata, such as DisplayName.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainMetadataRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainMetadataRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDomainMetadataRequest();
    $request->requestBody = new UpdateDomainMetadataRequestBody();
    $request->requestBody->displayName = 'ea';
    $request->requestBody->domainName = 'accusantium';
    $request->requestBody->fleetArn = 'ab';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'autem';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'eaque';

    $response = $sdk->sdk->updateDomainMetadata($request);

    if ($response->updateDomainMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~updateFleetMetadata~~

Updates fleet metadata, such as DisplayName.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFleetMetadataRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFleetMetadataRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFleetMetadataRequest();
    $request->requestBody = new UpdateFleetMetadataRequestBody();
    $request->requestBody->displayName = 'pariatur';
    $request->requestBody->fleetArn = 'nemo';
    $request->requestBody->optimizeForEndUserLocation = false;
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'fugiat';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'aut';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'corporis';

    $response = $sdk->sdk->updateFleetMetadata($request);

    if ($response->updateFleetMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~updateIdentityProviderConfiguration~~

Updates the identity provider configuration for the fleet.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIdentityProviderConfigurationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIdentityProviderConfigurationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIdentityProviderConfigurationRequest();
    $request->requestBody = new UpdateIdentityProviderConfigurationRequestBody();
    $request->requestBody->fleetArn = 'hic';
    $request->requestBody->identityProviderSamlMetadata = 'libero';
    $request->requestBody->identityProviderType = UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum::SAML;
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->updateIdentityProviderConfiguration($request);

    if ($response->updateIdentityProviderConfigurationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
