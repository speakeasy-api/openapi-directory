# SDK

## Overview

WorkSpaces Web is a low cost, fully managed WorkSpace built specifically to facilitate secure, web-based workloads. WorkSpaces Web makes it easy for customers to safely provide their employees with access to internal websites and SaaS web applications without the administrative burden of appliances or specialized client software. WorkSpaces Web provides simple policy tools tailored for user interactions, while offloading common tasks like capacity management, scaling, and maintaining browser images.

Amazon Web Services documentation
<https://docs.aws.amazon.com/workspaces-web/>
### Available Operations

* [associateBrowserSettings](#associatebrowsersettings) - Associates a browser settings resource with a web portal.
* [associateNetworkSettings](#associatenetworksettings) - Associates a network settings resource with a web portal.
* [associateTrustStore](#associatetruststore) - Associates a trust store with a web portal.
* [associateUserAccessLoggingSettings](#associateuseraccessloggingsettings) - Associates a user access logging settings resource with a web portal.
* [associateUserSettings](#associateusersettings) - Associates a user settings resource with a web portal.
* [createBrowserSettings](#createbrowsersettings) - Creates a browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal. 
* [createIdentityProvider](#createidentityprovider) - Creates an identity provider resource that is then associated with a web portal.
* [createNetworkSettings](#createnetworksettings) - Creates a network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC. 
* [createPortal](#createportal) - Creates a web portal.
* [createTrustStore](#createtruststore) - Creates a trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store. 
* [createUserAccessLoggingSettings](#createuseraccessloggingsettings) - Creates a user access logging settings resource that can be associated with a web portal.
* [createUserSettings](#createusersettings) - Creates a user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices. 
* [deleteBrowserSettings](#deletebrowsersettings) - Deletes browser settings.
* [deleteIdentityProvider](#deleteidentityprovider) - Deletes the identity provider.
* [deleteNetworkSettings](#deletenetworksettings) - Deletes network settings.
* [deletePortal](#deleteportal) - Deletes a web portal.
* [deleteTrustStore](#deletetruststore) - Deletes the trust store.
* [deleteUserAccessLoggingSettings](#deleteuseraccessloggingsettings) - Deletes user access logging settings.
* [deleteUserSettings](#deleteusersettings) - Deletes user settings.
* [disassociateBrowserSettings](#disassociatebrowsersettings) - Disassociates browser settings from a web portal.
* [disassociateNetworkSettings](#disassociatenetworksettings) - Disassociates network settings from a web portal.
* [disassociateTrustStore](#disassociatetruststore) - Disassociates a trust store from a web portal.
* [disassociateUserAccessLoggingSettings](#disassociateuseraccessloggingsettings) - Disassociates user access logging settings from a web portal.
* [disassociateUserSettings](#disassociateusersettings) - Disassociates user settings from a web portal.
* [getBrowserSettings](#getbrowsersettings) - Gets browser settings.
* [getIdentityProvider](#getidentityprovider) - Gets the identity provider.
* [getNetworkSettings](#getnetworksettings) - Gets the network settings.
* [getPortal](#getportal) - Gets the web portal.
* [getPortalServiceProviderMetadata](#getportalserviceprovidermetadata) - Gets the service provider metadata.
* [getTrustStore](#gettruststore) - Gets the trust store.
* [getTrustStoreCertificate](#gettruststorecertificate) - Gets the trust store certificate.
* [getUserAccessLoggingSettings](#getuseraccessloggingsettings) - Gets user access logging settings.
* [getUserSettings](#getusersettings) - Gets user settings.
* [listBrowserSettings](#listbrowsersettings) - Retrieves a list of browser settings.
* [listIdentityProviders](#listidentityproviders) - Retrieves a list of identity providers for a specific web portal.
* [listNetworkSettings](#listnetworksettings) - Retrieves a list of network settings.
* [listPortals](#listportals) - Retrieves a list or web portals.
* [listTagsForResource](#listtagsforresource) - Retrieves a list of tags for a resource.
* [listTrustStoreCertificates](#listtruststorecertificates) - Retrieves a list of trust store certificates.
* [listTrustStores](#listtruststores) - Retrieves a list of trust stores.
* [listUserAccessLoggingSettings](#listuseraccessloggingsettings) - Retrieves a list of user access logging settings.
* [listUserSettings](#listusersettings) - Retrieves a list of user settings.
* [tagResource](#tagresource) - Adds or overwrites one or more tags for the specified resource.
* [untagResource](#untagresource) - Removes one or more tags from the specified resource.
* [updateBrowserSettings](#updatebrowsersettings) - Updates browser settings.
* [updateIdentityProvider](#updateidentityprovider) - Updates the identity provider. 
* [updateNetworkSettings](#updatenetworksettings) - Updates network settings.
* [updatePortal](#updateportal) - Updates a web portal.
* [updateTrustStore](#updatetruststore) - Updates the trust store.
* [updateUserAccessLoggingSettings](#updateuseraccessloggingsettings) - Updates the user access logging settings.
* [updateUserSettings](#updateusersettings) - Updates the user settings.

## associateBrowserSettings

Associates a browser settings resource with a web portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateBrowserSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateBrowserSettingsRequest();
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->browserSettingsArn = 'delectus';
    $request->portalArn = 'tempora';

    $response = $sdk->sdk->associateBrowserSettings($request);

    if ($response->associateBrowserSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateNetworkSettings

Associates a network settings resource with a web portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateNetworkSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateNetworkSettingsRequest();
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->networkSettingsArn = 'nisi';
    $request->portalArn = 'recusandae';

    $response = $sdk->sdk->associateNetworkSettings($request);

    if ($response->associateNetworkSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateTrustStore

Associates a trust store with a web portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateTrustStoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateTrustStoreRequest();
    $request->xAmzAlgorithm = 'temporibus';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'ipsam';
    $request->portalArn = 'repellendus';
    $request->trustStoreArn = 'sapiente';

    $response = $sdk->sdk->associateTrustStore($request);

    if ($response->associateTrustStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateUserAccessLoggingSettings

Associates a user access logging settings resource with a web portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateUserAccessLoggingSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateUserAccessLoggingSettingsRequest();
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';
    $request->portalArn = 'quod';
    $request->userAccessLoggingSettingsArn = 'esse';

    $response = $sdk->sdk->associateUserAccessLoggingSettings($request);

    if ($response->associateUserAccessLoggingSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## associateUserSettings

Associates a user settings resource with a web portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateUserSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateUserSettingsRequest();
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'porro';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'officia';
    $request->xAmzSignedHeaders = 'occaecati';
    $request->portalArn = 'fugit';
    $request->userSettingsArn = 'deleniti';

    $response = $sdk->sdk->associateUserSettings($request);

    if ($response->associateUserSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBrowserSettings

Creates a browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBrowserSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBrowserSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBrowserSettingsRequest();
    $request->requestBody = new CreateBrowserSettingsRequestBody();
    $request->requestBody->additionalEncryptionContext = [
        'optio' => 'totam',
        'beatae' => 'commodi',
        'molestiae' => 'modi',
        'qui' => 'impedit',
    ];
    $request->requestBody->browserPolicy = 'cum';
    $request->requestBody->clientToken = 'esse';
    $request->requestBody->customerManagedKey = 'ipsum';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'natus';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'iste';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->createBrowserSettings($request);

    if ($response->createBrowserSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createIdentityProvider

Creates an identity provider resource that is then associated with a web portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateIdentityProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateIdentityProviderRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateIdentityProviderRequestBodyIdentityProviderTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIdentityProviderRequest();
    $request->requestBody = new CreateIdentityProviderRequestBody();
    $request->requestBody->clientToken = 'natus';
    $request->requestBody->identityProviderDetails = [
        'hic' => 'saepe',
        'fuga' => 'in',
    ];
    $request->requestBody->identityProviderName = 'corporis';
    $request->requestBody->identityProviderType = CreateIdentityProviderRequestBodyIdentityProviderTypeEnum::LOGIN_WITH_AMAZON;
    $request->requestBody->portalArn = 'iure';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->createIdentityProvider($request);

    if ($response->createIdentityProviderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSettings

Creates a network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSettingsRequest();
    $request->requestBody = new CreateNetworkSettingsRequestBody();
    $request->requestBody->clientToken = 'laborum';
    $request->requestBody->securityGroupIds = [
        'dolorem',
    ];
    $request->requestBody->subnetIds = [
        'explicabo',
        'nobis',
    ];
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
    ];
    $request->requestBody->vpcId = 'omnis';
    $request->xAmzAlgorithm = 'nemo';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'doloribus';

    $response = $sdk->sdk->createNetworkSettings($request);

    if ($response->createNetworkSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPortal

Creates a web portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePortalRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePortalRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreatePortalRequestBodyAuthenticationTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePortalRequest();
    $request->requestBody = new CreatePortalRequestBody();
    $request->requestBody->additionalEncryptionContext = [
        'architecto' => 'mollitia',
        'dolorem' => 'culpa',
        'consequuntur' => 'repellat',
        'mollitia' => 'occaecati',
    ];
    $request->requestBody->authenticationType = CreatePortalRequestBodyAuthenticationTypeEnum::STANDARD;
    $request->requestBody->clientToken = 'commodi';
    $request->requestBody->customerManagedKey = 'quam';
    $request->requestBody->displayName = 'molestiae';
    $request->requestBody->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->createPortal($request);

    if ($response->createPortalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTrustStore

Creates a trust store that can be associated with a web portal. A trust store contains certificate authority (CA) certificates. Once associated with a web portal, the browser in a streaming session will recognize certificates that have been issued using any of the CAs in the trust store. If your organization has internal websites that use certificates issued by private CAs, you should add the private CA certificate to the trust store. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrustStoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTrustStoreRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTrustStoreRequest();
    $request->requestBody = new CreateTrustStoreRequestBody();
    $request->requestBody->certificateList = [
        'quo',
    ];
    $request->requestBody->clientToken = 'sequi';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'temporibus';

    $response = $sdk->sdk->createTrustStore($request);

    if ($response->createTrustStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUserAccessLoggingSettings

Creates a user access logging settings resource that can be associated with a web portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserAccessLoggingSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserAccessLoggingSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserAccessLoggingSettingsRequest();
    $request->requestBody = new CreateUserAccessLoggingSettingsRequestBody();
    $request->requestBody->clientToken = 'laborum';
    $request->requestBody->kinesisStreamArn = 'quasi';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->createUserAccessLoggingSettings($request);

    if ($response->createUserAccessLoggingSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createUserSettings

Creates a user settings resource that can be associated with a web portal. Once associated with a web portal, user settings control how users can transfer data between a streaming session and the their local devices. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserSettingsRequestBodyCopyAllowedEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserSettingsRequestBodyDownloadAllowedEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserSettingsRequestBodyPasteAllowedEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserSettingsRequestBodyPrintAllowedEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\CreateUserSettingsRequestBodyUploadAllowedEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateUserSettingsRequest();
    $request->requestBody = new CreateUserSettingsRequestBody();
    $request->requestBody->clientToken = 'voluptate';
    $request->requestBody->copyAllowed = CreateUserSettingsRequestBodyCopyAllowedEnum::ENABLED;
    $request->requestBody->disconnectTimeoutInMinutes = 19987;
    $request->requestBody->downloadAllowed = CreateUserSettingsRequestBodyDownloadAllowedEnum::DISABLED;
    $request->requestBody->idleDisconnectTimeoutInMinutes = 441711;
    $request->requestBody->pasteAllowed = CreateUserSettingsRequestBodyPasteAllowedEnum::DISABLED;
    $request->requestBody->printAllowed = CreateUserSettingsRequestBodyPrintAllowedEnum::ENABLED;
    $request->requestBody->tags = [
        new Tag(),
    ];
    $request->requestBody->uploadAllowed = CreateUserSettingsRequestBodyUploadAllowedEnum::DISABLED;
    $request->xAmzAlgorithm = 'dolore';
    $request->xAmzContentSha256 = 'iusto';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'harum';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'commodi';

    $response = $sdk->sdk->createUserSettings($request);

    if ($response->createUserSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBrowserSettings

Deletes browser settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBrowserSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBrowserSettingsRequest();
    $request->xAmzAlgorithm = 'repudiandae';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'ipsum';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'molestias';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->browserSettingsArn = 'modi';

    $response = $sdk->sdk->deleteBrowserSettings($request);

    if ($response->deleteBrowserSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteIdentityProvider

Deletes the identity provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteIdentityProviderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteIdentityProviderRequest();
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->identityProviderArn = 'itaque';

    $response = $sdk->sdk->deleteIdentityProvider($request);

    if ($response->deleteIdentityProviderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSettings

Deletes network settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSettingsRequest();
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->networkSettingsArn = 'distinctio';

    $response = $sdk->sdk->deleteNetworkSettings($request);

    if ($response->deleteNetworkSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePortal

Deletes a web portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePortalRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePortalRequest();
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'quos';
    $request->portalArn = 'perferendis';

    $response = $sdk->sdk->deletePortal($request);

    if ($response->deletePortalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTrustStore

Deletes the trust store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTrustStoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTrustStoreRequest();
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->trustStoreArn = 'tempora';

    $response = $sdk->sdk->deleteTrustStore($request);

    if ($response->deleteTrustStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserAccessLoggingSettings

Deletes user access logging settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserAccessLoggingSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserAccessLoggingSettingsRequest();
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->userAccessLoggingSettingsArn = 'sint';

    $response = $sdk->sdk->deleteUserAccessLoggingSettings($request);

    if ($response->deleteUserAccessLoggingSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteUserSettings

Deletes user settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteUserSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteUserSettingsRequest();
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'debitis';
    $request->userSettingsArn = 'a';

    $response = $sdk->sdk->deleteUserSettings($request);

    if ($response->deleteUserSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateBrowserSettings

Disassociates browser settings from a web portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateBrowserSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateBrowserSettingsRequest();
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'dicta';
    $request->portalArn = 'magnam';

    $response = $sdk->sdk->disassociateBrowserSettings($request);

    if ($response->disassociateBrowserSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateNetworkSettings

Disassociates network settings from a web portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateNetworkSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateNetworkSettingsRequest();
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'facere';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'non';
    $request->portalArn = 'occaecati';

    $response = $sdk->sdk->disassociateNetworkSettings($request);

    if ($response->disassociateNetworkSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateTrustStore

Disassociates a trust store from a web portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateTrustStoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateTrustStoreRequest();
    $request->xAmzAlgorithm = 'enim';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quidem';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'nam';
    $request->xAmzSignedHeaders = 'id';
    $request->portalArn = 'blanditiis';

    $response = $sdk->sdk->disassociateTrustStore($request);

    if ($response->disassociateTrustStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateUserAccessLoggingSettings

Disassociates user access logging settings from a web portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateUserAccessLoggingSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateUserAccessLoggingSettingsRequest();
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'deserunt';
    $request->xAmzSecurityToken = 'nisi';
    $request->xAmzSignature = 'vel';
    $request->xAmzSignedHeaders = 'natus';
    $request->portalArn = 'omnis';

    $response = $sdk->sdk->disassociateUserAccessLoggingSettings($request);

    if ($response->disassociateUserAccessLoggingSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateUserSettings

Disassociates user settings from a web portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateUserSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateUserSettingsRequest();
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'perferendis';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'labore';
    $request->portalArn = 'labore';

    $response = $sdk->sdk->disassociateUserSettings($request);

    if ($response->disassociateUserSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBrowserSettings

Gets browser settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBrowserSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBrowserSettingsRequest();
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'architecto';
    $request->browserSettingsArn = 'magnam';

    $response = $sdk->sdk->getBrowserSettings($request);

    if ($response->getBrowserSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getIdentityProvider

Gets the identity provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetIdentityProviderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetIdentityProviderRequest();
    $request->xAmzAlgorithm = 'et';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->identityProviderArn = 'mollitia';

    $response = $sdk->sdk->getIdentityProvider($request);

    if ($response->getIdentityProviderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSettings

Gets the network settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSettingsRequest();
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'ad';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'odit';
    $request->networkSettingsArn = 'nemo';

    $response = $sdk->sdk->getNetworkSettings($request);

    if ($response->getNetworkSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPortal

Gets the web portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPortalRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPortalRequest();
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'doloribus';
    $request->xAmzDate = 'debitis';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->portalArn = 'facilis';

    $response = $sdk->sdk->getPortal($request);

    if ($response->getPortalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPortalServiceProviderMetadata

Gets the service provider metadata.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPortalServiceProviderMetadataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPortalServiceProviderMetadataRequest();
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'nihil';
    $request->portalArn = 'repellat';

    $response = $sdk->sdk->getPortalServiceProviderMetadata($request);

    if ($response->getPortalServiceProviderMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrustStore

Gets the trust store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTrustStoreRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrustStoreRequest();
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'saepe';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'praesentium';
    $request->trustStoreArn = 'natus';

    $response = $sdk->sdk->getTrustStore($request);

    if ($response->getTrustStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTrustStoreCertificate

Gets the trust store certificate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTrustStoreCertificateRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTrustStoreCertificateRequest();
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'quo';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'maxime';
    $request->xAmzSignedHeaders = 'ea';
    $request->thumbprint = 'excepturi';
    $request->trustStoreArn = 'odit';

    $response = $sdk->sdk->getTrustStoreCertificate($request);

    if ($response->getTrustStoreCertificateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserAccessLoggingSettings

Gets user access logging settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserAccessLoggingSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserAccessLoggingSettingsRequest();
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->userAccessLoggingSettingsArn = 'autem';

    $response = $sdk->sdk->getUserAccessLoggingSettings($request);

    if ($response->getUserAccessLoggingSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUserSettings

Gets user settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetUserSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUserSettingsRequest();
    $request->xAmzAlgorithm = 'nam';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->userSettingsArn = 'amet';

    $response = $sdk->sdk->getUserSettings($request);

    if ($response->getUserSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBrowserSettings

Retrieves a list of browser settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBrowserSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBrowserSettingsRequest();
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->maxResults = 339404;
    $request->nextToken = 'totam';

    $response = $sdk->sdk->listBrowserSettings($request);

    if ($response->listBrowserSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIdentityProviders

Retrieves a list of identity providers for a specific web portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIdentityProvidersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIdentityProvidersRequest();
    $request->xAmzAlgorithm = 'dignissimos';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'nesciunt';
    $request->xAmzSecurityToken = 'eos';
    $request->xAmzSignature = 'perferendis';
    $request->xAmzSignedHeaders = 'dolores';
    $request->maxResults = 793698;
    $request->nextToken = 'quam';
    $request->portalArn = 'dolor';

    $response = $sdk->sdk->listIdentityProviders($request);

    if ($response->listIdentityProvidersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNetworkSettings

Retrieves a list of network settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListNetworkSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNetworkSettingsRequest();
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'perspiciatis';
    $request->maxResults = 31838;
    $request->nextToken = 'porro';

    $response = $sdk->sdk->listNetworkSettings($request);

    if ($response->listNetworkSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPortals

Retrieves a list or web portals.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPortalsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPortalsRequest();
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'blanditiis';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'rerum';
    $request->xAmzSignedHeaders = 'adipisci';
    $request->maxResults = 992397;
    $request->nextToken = 'earum';

    $response = $sdk->sdk->listPortals($request);

    if ($response->listPortalsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Retrieves a list of tags for a resource.

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
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nobis';
    $request->resourceArn = 'libero';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTrustStoreCertificates

Retrieves a list of trust store certificates.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTrustStoreCertificatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTrustStoreCertificatesRequest();
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolor';
    $request->maxResults = 186193;
    $request->nextToken = 'ipsum';
    $request->trustStoreArn = 'hic';

    $response = $sdk->sdk->listTrustStoreCertificates($request);

    if ($response->listTrustStoreCertificatesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTrustStores

Retrieves a list of trust stores.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTrustStoresRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTrustStoresRequest();
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'cum';
    $request->xAmzCredential = 'voluptate';
    $request->xAmzDate = 'dignissimos';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->maxResults = 254356;
    $request->nextToken = 'veritatis';

    $response = $sdk->sdk->listTrustStores($request);

    if ($response->listTrustStoresResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUserAccessLoggingSettings

Retrieves a list of user access logging settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUserAccessLoggingSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUserAccessLoggingSettingsRequest();
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'iure';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'quidem';
    $request->maxResults = 976405;
    $request->nextToken = 'voluptas';

    $response = $sdk->sdk->listUserAccessLoggingSettings($request);

    if ($response->listUserAccessLoggingSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUserSettings

Retrieves a list of user settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUserSettingsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUserSettingsRequest();
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'atque';
    $request->xAmzDate = 'sit';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'soluta';
    $request->maxResults = 679393;
    $request->nextToken = 'iusto';

    $response = $sdk->sdk->listUserSettings($request);

    if ($response->listUserSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

Adds or overwrites one or more tags for the specified resource.

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
    $request->requestBody->clientToken = 'voluptate';
    $request->requestBody->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nihil';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->resourceArn = 'voluptate';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes one or more tags from the specified resource.

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
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'saepe';
    $request->xAmzCredential = 'eius';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'perferendis';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'optio';
    $request->resourceArn = 'accusamus';
    $request->tagKeys = [
        'saepe',
        'suscipit',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBrowserSettings

Updates browser settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBrowserSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBrowserSettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBrowserSettingsRequest();
    $request->requestBody = new UpdateBrowserSettingsRequestBody();
    $request->requestBody->browserPolicy = 'deserunt';
    $request->requestBody->clientToken = 'provident';
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->browserSettingsArn = 'tempora';

    $response = $sdk->sdk->updateBrowserSettings($request);

    if ($response->updateBrowserSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIdentityProvider

Updates the identity provider. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIdentityProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIdentityProviderRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIdentityProviderRequestBodyIdentityProviderTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIdentityProviderRequest();
    $request->requestBody = new UpdateIdentityProviderRequestBody();
    $request->requestBody->clientToken = 'vel';
    $request->requestBody->identityProviderDetails = [
        'officiis' => 'qui',
        'dolorum' => 'a',
        'esse' => 'harum',
        'iusto' => 'ipsum',
    ];
    $request->requestBody->identityProviderName = 'quisquam';
    $request->requestBody->identityProviderType = UpdateIdentityProviderRequestBodyIdentityProviderTypeEnum::OIDC;
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->identityProviderArn = 'totam';

    $response = $sdk->sdk->updateIdentityProvider($request);

    if ($response->updateIdentityProviderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSettings

Updates network settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSettingsRequest();
    $request->requestBody = new UpdateNetworkSettingsRequestBody();
    $request->requestBody->clientToken = 'nihil';
    $request->requestBody->securityGroupIds = [
        'expedita',
    ];
    $request->requestBody->subnetIds = [
        'sed',
    ];
    $request->requestBody->vpcId = 'vel';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'voluptas';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'ipsum';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'qui';
    $request->networkSettingsArn = 'cupiditate';

    $response = $sdk->sdk->updateNetworkSettings($request);

    if ($response->updateNetworkSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePortal

Updates a web portal.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePortalRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePortalRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePortalRequestBodyAuthenticationTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePortalRequest();
    $request->requestBody = new UpdatePortalRequestBody();
    $request->requestBody->authenticationType = UpdatePortalRequestBodyAuthenticationTypeEnum::IAM_IDENTITY_CENTER;
    $request->requestBody->displayName = 'pariatur';
    $request->xAmzAlgorithm = 'soluta';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'dolores';
    $request->portalArn = 'distinctio';

    $response = $sdk->sdk->updatePortal($request);

    if ($response->updatePortalResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTrustStore

Updates the trust store.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrustStoreRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTrustStoreRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTrustStoreRequest();
    $request->requestBody = new UpdateTrustStoreRequestBody();
    $request->requestBody->certificatesToAdd = [
        'aliquid',
        'quam',
        'molestias',
    ];
    $request->requestBody->certificatesToDelete = [
        'qui',
        'neque',
        'fugit',
        'magni',
    ];
    $request->requestBody->clientToken = 'odio';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'ullam';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'voluptatem';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'soluta';
    $request->trustStoreArn = 'nobis';

    $response = $sdk->sdk->updateTrustStore($request);

    if ($response->updateTrustStoreResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUserAccessLoggingSettings

Updates the user access logging settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserAccessLoggingSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserAccessLoggingSettingsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserAccessLoggingSettingsRequest();
    $request->requestBody = new UpdateUserAccessLoggingSettingsRequestBody();
    $request->requestBody->clientToken = 'et';
    $request->requestBody->kinesisStreamArn = 'saepe';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->userAccessLoggingSettingsArn = 'delectus';

    $response = $sdk->sdk->updateUserAccessLoggingSettings($request);

    if ($response->updateUserAccessLoggingSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateUserSettings

Updates the user settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserSettingsRequestBodyCopyAllowedEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserSettingsRequestBodyDownloadAllowedEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserSettingsRequestBodyPasteAllowedEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserSettingsRequestBodyPrintAllowedEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateUserSettingsRequestBodyUploadAllowedEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateUserSettingsRequest();
    $request->requestBody = new UpdateUserSettingsRequestBody();
    $request->requestBody->clientToken = 'dolorem';
    $request->requestBody->copyAllowed = UpdateUserSettingsRequestBodyCopyAllowedEnum::DISABLED;
    $request->requestBody->disconnectTimeoutInMinutes = 286915;
    $request->requestBody->downloadAllowed = UpdateUserSettingsRequestBodyDownloadAllowedEnum::DISABLED;
    $request->requestBody->idleDisconnectTimeoutInMinutes = 677263;
    $request->requestBody->pasteAllowed = UpdateUserSettingsRequestBodyPasteAllowedEnum::DISABLED;
    $request->requestBody->printAllowed = UpdateUserSettingsRequestBodyPrintAllowedEnum::DISABLED;
    $request->requestBody->uploadAllowed = UpdateUserSettingsRequestBodyUploadAllowedEnum::DISABLED;
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->userSettingsArn = 'ut';

    $response = $sdk->sdk->updateUserSettings($request);

    if ($response->updateUserSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
