# SDK

## Overview

With License Manager, you can create user-based subscriptions to utilize licensed software with a per user subscription fee on Amazon EC2 instances.

Amazon Web Services documentation
<https://docs.aws.amazon.com/license-manager-user-subscriptions/>
### Available Operations

* [associateUser](#associateuser) - <p>Associates the user to an EC2 instance to utilize user-based subscriptions.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>
* [deregisterIdentityProvider](#deregisteridentityprovider) - Deregisters the identity provider from providing user-based subscriptions.
* [disassociateUser](#disassociateuser) - Disassociates the user from an EC2 instance providing user-based subscriptions.
* [listIdentityProviders](#listidentityproviders) - Lists the identity providers for user-based subscriptions.
* [listInstances](#listinstances) - Lists the EC2 instances providing user-based subscriptions.
* [listProductSubscriptions](#listproductsubscriptions) - Lists the user-based subscription products available from an identity provider.
* [listUserAssociations](#listuserassociations) - Lists user associations for an identity provider.
* [registerIdentityProvider](#registeridentityprovider) - Registers an identity provider for user-based subscriptions.
* [startProductSubscription](#startproductsubscription) - <p>Starts a product subscription for a user with the specified identity provider.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>
* [stopProductSubscription](#stopproductsubscription) - Stops a product subscription for a user with the specified identity provider.
* [updateIdentityProviderSettings](#updateidentityprovidersettings) - Updates additional product configuration settings for the registered identity provider.

## associateUser

<p>Associates the user to an EC2 instance to utilize user-based subscriptions.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AssociateUserRequestBodyIdentityProvider;
use \OpenAPI\OpenAPI\Models\Shared\ActiveDirectoryIdentityProvider;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateUserRequest();
    $request->requestBody = new AssociateUserRequestBody();
    $request->requestBody->domain = 'ipsa';
    $request->requestBody->identityProvider = new AssociateUserRequestBodyIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider->directoryId = 'delectus';
    $request->requestBody->instanceId = 'tempora';
    $request->requestBody->username = 'Geraldine_Kreiger52';
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'temporibus';
    $request->xAmzSignature = 'ab';
    $request->xAmzSignedHeaders = 'quis';

    $response = $sdk->sdk->associateUser($request);

    if ($response->associateUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deregisterIdentityProvider

Deregisters the identity provider from providing user-based subscriptions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterIdentityProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterIdentityProviderRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DeregisterIdentityProviderRequestBodyIdentityProvider;
use \OpenAPI\OpenAPI\Models\Shared\ActiveDirectoryIdentityProvider;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeregisterIdentityProviderRequest();
    $request->requestBody = new DeregisterIdentityProviderRequestBody();
    $request->requestBody->identityProvider = new DeregisterIdentityProviderRequestBodyIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider->directoryId = 'veritatis';
    $request->requestBody->product = 'deserunt';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'ipsam';
    $request->xAmzCredential = 'repellendus';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quo';
    $request->xAmzSignature = 'odit';
    $request->xAmzSignedHeaders = 'at';

    $response = $sdk->sdk->deregisterIdentityProvider($request);

    if ($response->deregisterIdentityProviderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disassociateUser

Disassociates the user from an EC2 instance providing user-based subscriptions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateUserRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DisassociateUserRequestBodyIdentityProvider;
use \OpenAPI\OpenAPI\Models\Shared\ActiveDirectoryIdentityProvider;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisassociateUserRequest();
    $request->requestBody = new DisassociateUserRequestBody();
    $request->requestBody->domain = 'at';
    $request->requestBody->identityProvider = new DisassociateUserRequestBodyIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider->directoryId = 'maiores';
    $request->requestBody->instanceId = 'molestiae';
    $request->requestBody->username = 'Pinkie_Schmidt';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'fugit';

    $response = $sdk->sdk->disassociateUser($request);

    if ($response->disassociateUserResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIdentityProviders

Lists the identity providers for user-based subscriptions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIdentityProvidersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListIdentityProvidersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIdentityProvidersRequest();
    $request->maxResults = 'deleniti';
    $request->nextToken = 'hic';
    $request->requestBody = new ListIdentityProvidersRequestBody();
    $request->requestBody->maxResults = 758616;
    $request->requestBody->nextToken = 'totam';
    $request->xAmzAlgorithm = 'beatae';
    $request->xAmzContentSha256 = 'commodi';
    $request->xAmzCredential = 'molestiae';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'impedit';
    $request->xAmzSignedHeaders = 'cum';

    $response = $sdk->sdk->listIdentityProviders($request);

    if ($response->listIdentityProvidersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listInstances

Lists the EC2 instances providing user-based subscriptions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListInstancesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListInstancesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListInstancesRequest();
    $request->maxResults = 'esse';
    $request->nextToken = 'ipsum';
    $request->requestBody = new ListInstancesRequestBody();
    $request->requestBody->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->maxResults = 135218;
    $request->requestBody->nextToken = 'perferendis';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'laboriosam';

    $response = $sdk->sdk->listInstances($request);

    if ($response->listInstancesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProductSubscriptions

Lists the user-based subscription products available from an identity provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProductSubscriptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListProductSubscriptionsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListProductSubscriptionsRequestBodyIdentityProvider;
use \OpenAPI\OpenAPI\Models\Shared\ActiveDirectoryIdentityProvider;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProductSubscriptionsRequest();
    $request->maxResults = 'hic';
    $request->nextToken = 'saepe';
    $request->requestBody = new ListProductSubscriptionsRequestBody();
    $request->requestBody->filters = [
        new Filter(),
        new Filter(),
        new Filter(),
    ];
    $request->requestBody->identityProvider = new ListProductSubscriptionsRequestBodyIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider->directoryId = 'in';
    $request->requestBody->maxResults = 359508;
    $request->requestBody->nextToken = 'iste';
    $request->requestBody->product = 'iure';
    $request->xAmzAlgorithm = 'saepe';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'ipsa';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'mollitia';

    $response = $sdk->sdk->listProductSubscriptions($request);

    if ($response->listProductSubscriptionsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listUserAssociations

Lists user associations for an identity provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListUserAssociationsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListUserAssociationsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Filter;
use \OpenAPI\OpenAPI\Models\Operations\ListUserAssociationsRequestBodyIdentityProvider;
use \OpenAPI\OpenAPI\Models\Shared\ActiveDirectoryIdentityProvider;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListUserAssociationsRequest();
    $request->maxResults = 'laborum';
    $request->nextToken = 'dolores';
    $request->requestBody = new ListUserAssociationsRequestBody();
    $request->requestBody->filters = [
        new Filter(),
    ];
    $request->requestBody->identityProvider = new ListUserAssociationsRequestBodyIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider->directoryId = 'corporis';
    $request->requestBody->instanceId = 'explicabo';
    $request->requestBody->maxResults = 750686;
    $request->requestBody->nextToken = 'enim';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'culpa';

    $response = $sdk->sdk->listUserAssociations($request);

    if ($response->listUserAssociationsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## registerIdentityProvider

Registers an identity provider for user-based subscriptions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RegisterIdentityProviderRequest;
use \OpenAPI\OpenAPI\Models\Operations\RegisterIdentityProviderRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RegisterIdentityProviderRequestBodyIdentityProvider;
use \OpenAPI\OpenAPI\Models\Shared\ActiveDirectoryIdentityProvider;
use \OpenAPI\OpenAPI\Models\Operations\RegisterIdentityProviderRequestBodySettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterIdentityProviderRequest();
    $request->requestBody = new RegisterIdentityProviderRequestBody();
    $request->requestBody->identityProvider = new RegisterIdentityProviderRequestBodyIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider->directoryId = 'doloribus';
    $request->requestBody->product = 'sapiente';
    $request->requestBody->settings = new RegisterIdentityProviderRequestBodySettings();
    $request->requestBody->settings->securityGroupId = 'architecto';
    $request->requestBody->settings->subnets = [
        'dolorem',
        'culpa',
        'consequuntur',
    ];
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->registerIdentityProvider($request);

    if ($response->registerIdentityProviderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startProductSubscription

<p>Starts a product subscription for a user with the specified identity provider.</p> <note> <p>Your estimated bill for charges on the number of users and related costs will take 48 hours to appear for billing periods that haven't closed (marked as <b>Pending</b> billing status) in Amazon Web Services Billing. For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/invoice.html">Viewing your monthly charges</a> in the <i>Amazon Web Services Billing User Guide</i>.</p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartProductSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartProductSubscriptionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartProductSubscriptionRequestBodyIdentityProvider;
use \OpenAPI\OpenAPI\Models\Shared\ActiveDirectoryIdentityProvider;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartProductSubscriptionRequest();
    $request->requestBody = new StartProductSubscriptionRequestBody();
    $request->requestBody->domain = 'velit';
    $request->requestBody->identityProvider = new StartProductSubscriptionRequestBodyIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider->directoryId = 'error';
    $request->requestBody->product = 'quia';
    $request->requestBody->username = 'Eugene_Brown31';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'sequi';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'ipsam';
    $request->xAmzSignature = 'id';
    $request->xAmzSignedHeaders = 'possimus';

    $response = $sdk->sdk->startProductSubscription($request);

    if ($response->startProductSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopProductSubscription

Stops a product subscription for a user with the specified identity provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopProductSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\StopProductSubscriptionRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StopProductSubscriptionRequestBodyIdentityProvider;
use \OpenAPI\OpenAPI\Models\Shared\ActiveDirectoryIdentityProvider;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopProductSubscriptionRequest();
    $request->requestBody = new StopProductSubscriptionRequestBody();
    $request->requestBody->domain = 'aut';
    $request->requestBody->identityProvider = new StopProductSubscriptionRequestBodyIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider->directoryId = 'quasi';
    $request->requestBody->product = 'error';
    $request->requestBody->username = 'Rodrigo97';
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';

    $response = $sdk->sdk->stopProductSubscription($request);

    if ($response->stopProductSubscriptionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateIdentityProviderSettings

Updates additional product configuration settings for the registered identity provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIdentityProviderSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIdentityProviderSettingsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIdentityProviderSettingsRequestBodyIdentityProvider;
use \OpenAPI\OpenAPI\Models\Shared\ActiveDirectoryIdentityProvider;
use \OpenAPI\OpenAPI\Models\Operations\UpdateIdentityProviderSettingsRequestBodyUpdateSettings;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateIdentityProviderSettingsRequest();
    $request->requestBody = new UpdateIdentityProviderSettingsRequestBody();
    $request->requestBody->identityProvider = new UpdateIdentityProviderSettingsRequestBodyIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider = new ActiveDirectoryIdentityProvider();
    $request->requestBody->identityProvider->activeDirectoryIdentityProvider->directoryId = 'voluptate';
    $request->requestBody->product = 'cum';
    $request->requestBody->updateSettings = new UpdateIdentityProviderSettingsRequestBodyUpdateSettings();
    $request->requestBody->updateSettings->addSubnets = [
        'doloremque',
    ];
    $request->requestBody->updateSettings->removeSubnets = [
        'ut',
        'maiores',
    ];
    $request->requestBody->updateSettings->securityGroupId = 'dicta';
    $request->xAmzAlgorithm = 'corporis';
    $request->xAmzContentSha256 = 'dolore';
    $request->xAmzCredential = 'iusto';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'harum';
    $request->xAmzSignature = 'enim';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->updateIdentityProviderSettings($request);

    if ($response->updateIdentityProviderSettingsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
