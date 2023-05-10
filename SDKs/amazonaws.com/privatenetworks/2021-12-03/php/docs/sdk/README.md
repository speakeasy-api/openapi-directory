# SDK

## Overview

Amazon Web Services Private 5G is a managed service that makes it easy to deploy, operate, and scale your own private mobile network at your on-premises location. Private 5G provides the pre-configured hardware and software for mobile networks, helps automate setup, and scales capacity on demand to support additional devices as needed.

Amazon Web Services documentation
<https://docs.aws.amazon.com/private-networks/>
### Available Operations

* [acknowledgeOrderReceipt](#acknowledgeorderreceipt) - Acknowledges that the specified network order was received.
* [activateDeviceIdentifier](#activatedeviceidentifier) - Activates the specified device identifier.
* [activateNetworkSite](#activatenetworksite) - Activates the specified network site.
* [configureAccessPoint](#configureaccesspoint) - <p>Configures the specified network resource. </p> <p> Use this action to specify the geographic position of the hardware. You must provide Certified Professional Installer (CPI) credentials in the request so that we can obtain spectrum grants. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html">Radio units</a> in the <i>Amazon Web Services Private 5G User Guide</i>. </p>
* [createNetwork](#createnetwork) - Creates a network.
* [createNetworkSite](#createnetworksite) - Creates a network site.
* [deactivateDeviceIdentifier](#deactivatedeviceidentifier) - Deactivates the specified device identifier.
* [deleteNetwork](#deletenetwork) - Deletes the specified network. You must delete network sites before you delete the network. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/APIReference/API_DeleteNetworkSite.html">DeleteNetworkSite</a> in the <i>API Reference for Amazon Web Services Private 5G</i>.
* [deleteNetworkSite](#deletenetworksite) - Deletes the specified network site. Return the hardware after you delete the network site. You are responsible for minimum charges. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/hardware-maintenance.html">Hardware returns</a> in the <i>Amazon Web Services Private 5G User Guide</i>. 
* [getDeviceIdentifier](#getdeviceidentifier) - Gets the specified device identifier.
* [getNetwork](#getnetwork) - Gets the specified network.
* [getNetworkResource](#getnetworkresource) - Gets the specified network resource.
* [getNetworkSite](#getnetworksite) - Gets the specified network site.
* [getOrder](#getorder) - Gets the specified order.
* [listDeviceIdentifiers](#listdeviceidentifiers) - <p>Lists device identifiers. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order, the status of device identifiers, or the ARN of the traffic group.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
* [listNetworkResources](#listnetworkresources) - <p>Lists network resources. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order or the status of network resources.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
* [listNetworkSites](#listnetworksites) - Lists network sites. Add filters to your request to return a more specific list of results. Use filters to match the status of the network site.
* [listNetworks](#listnetworks) - Lists networks. Add filters to your request to return a more specific list of results. Use filters to match the status of the network.
* [listOrders](#listorders) - <p>Lists orders. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of the network site or the status of the order.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [ping](#ping) - Checks the health of the service.
* [startNetworkResourceUpdate](#startnetworkresourceupdate) - <p>Starts an update of the specified network resource.</p> <p>After you submit a request to replace or return a network resource, the status of the network resource is <code>CREATING_SHIPPING_LABEL</code>. The shipping label is available when the status of the network resource is <code>PENDING_RETURN</code>. After the network resource is successfully returned, its status is <code>DELETED</code>. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html#return-radio-unit">Return a radio unit</a>.</p>
* [tagResource](#tagresource) -  Adds tags to the specified resource. 
* [untagResource](#untagresource) - Removes tags from the specified resource.
* [updateNetworkSite](#updatenetworksite) - Updates the specified network site.
* [updateNetworkSitePlan](#updatenetworksiteplan) - Updates the specified network site plan.

## acknowledgeOrderReceipt

Acknowledges that the specified network order was received.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcknowledgeOrderReceiptRequest;
use \OpenAPI\OpenAPI\Models\Operations\AcknowledgeOrderReceiptRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcknowledgeOrderReceiptRequest();
    $request->requestBody = new AcknowledgeOrderReceiptRequestBody();
    $request->requestBody->orderArn = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->acknowledgeOrderReceipt($request);

    if ($response->acknowledgeOrderReceiptResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activateDeviceIdentifier

Activates the specified device identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ActivateDeviceIdentifierRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActivateDeviceIdentifierRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivateDeviceIdentifierRequest();
    $request->requestBody = new ActivateDeviceIdentifierRequestBody();
    $request->requestBody->clientToken = 'delectus';
    $request->requestBody->deviceIdentifierArn = 'tempora';
    $request->xAmzAlgorithm = 'suscipit';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'placeat';
    $request->xAmzSecurityToken = 'voluptatum';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'excepturi';

    $response = $sdk->sdk->activateDeviceIdentifier($request);

    if ($response->activateDeviceIdentifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## activateNetworkSite

Activates the specified network site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ActivateNetworkSiteRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActivateNetworkSiteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ActivateNetworkSiteRequestBodyShippingAddress;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivateNetworkSiteRequest();
    $request->requestBody = new ActivateNetworkSiteRequestBody();
    $request->requestBody->clientToken = 'nisi';
    $request->requestBody->networkSiteArn = 'recusandae';
    $request->requestBody->shippingAddress = new ActivateNetworkSiteRequestBodyShippingAddress();
    $request->requestBody->shippingAddress->city = 'temporibus';
    $request->requestBody->shippingAddress->company = 'ab';
    $request->requestBody->shippingAddress->country = 'quis';
    $request->requestBody->shippingAddress->name = 'veritatis';
    $request->requestBody->shippingAddress->phoneNumber = 'deserunt';
    $request->requestBody->shippingAddress->postalCode = 'perferendis';
    $request->requestBody->shippingAddress->stateOrProvince = 'ipsam';
    $request->requestBody->shippingAddress->street1 = 'repellendus';
    $request->requestBody->shippingAddress->street2 = 'sapiente';
    $request->requestBody->shippingAddress->street3 = 'quo';
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'at';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'quod';

    $response = $sdk->sdk->activateNetworkSite($request);

    if ($response->activateNetworkSiteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## configureAccessPoint

<p>Configures the specified network resource. </p> <p> Use this action to specify the geographic position of the hardware. You must provide Certified Professional Installer (CPI) credentials in the request so that we can obtain spectrum grants. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html">Radio units</a> in the <i>Amazon Web Services Private 5G User Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureAccessPointRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureAccessPointRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureAccessPointRequestBodyPosition;
use \OpenAPI\OpenAPI\Models\Shared\ElevationReferenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ElevationUnitEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureAccessPointRequest();
    $request->requestBody = new ConfigureAccessPointRequestBody();
    $request->requestBody->accessPointArn = 'esse';
    $request->requestBody->cpiSecretKey = 'totam';
    $request->requestBody->cpiUserId = 'porro';
    $request->requestBody->cpiUserPassword = 'dolorum';
    $request->requestBody->cpiUsername = 'dicta';
    $request->requestBody->position = new ConfigureAccessPointRequestBodyPosition();
    $request->requestBody->position->elevation = 7206.33;
    $request->requestBody->position->elevationReference = ElevationReferenceEnum::AMSL;
    $request->requestBody->position->elevationUnit = ElevationUnitEnum::FEET;
    $request->requestBody->position->latitude = 5820.2;
    $request->requestBody->position->longitude = 1433.53;
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'optio';
    $request->xAmzDate = 'totam';
    $request->xAmzSecurityToken = 'beatae';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->configureAccessPoint($request);

    if ($response->configureAccessPointResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetwork

Creates a network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkRequest();
    $request->requestBody = new CreateNetworkRequestBody();
    $request->requestBody->clientToken = 'modi';
    $request->requestBody->description = 'qui';
    $request->requestBody->networkName = 'impedit';
    $request->requestBody->tags = [
        'esse' => 'ipsum',
        'excepturi' => 'aspernatur',
        'perferendis' => 'ad',
    ];
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'sed';
    $request->xAmzCredential = 'iste';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'laboriosam';
    $request->xAmzSignedHeaders = 'hic';

    $response = $sdk->sdk->createNetwork($request);

    if ($response->createNetworkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNetworkSite

Creates a network site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSiteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSiteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateNetworkSiteRequestBodyPendingPlan;
use \OpenAPI\OpenAPI\Models\Shared\NameValuePair;
use \OpenAPI\OpenAPI\Models\Shared\NetworkResourceDefinition;
use \OpenAPI\OpenAPI\Models\Shared\NetworkResourceDefinitionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNetworkSiteRequest();
    $request->requestBody = new CreateNetworkSiteRequestBody();
    $request->requestBody->availabilityZone = 'saepe';
    $request->requestBody->availabilityZoneId = 'fuga';
    $request->requestBody->clientToken = 'in';
    $request->requestBody->description = 'corporis';
    $request->requestBody->networkArn = 'iste';
    $request->requestBody->networkSiteName = 'iure';
    $request->requestBody->pendingPlan = new CreateNetworkSiteRequestBodyPendingPlan();
    $request->requestBody->pendingPlan->options = [
        new NameValuePair(),
        new NameValuePair(),
        new NameValuePair(),
        new NameValuePair(),
    ];
    $request->requestBody->pendingPlan->resourceDefinitions = [
        new NetworkResourceDefinition(),
        new NetworkResourceDefinition(),
        new NetworkResourceDefinition(),
    ];
    $request->requestBody->tags = [
        'ipsa' => 'reiciendis',
    ];
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->createNetworkSite($request);

    if ($response->createNetworkSiteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deactivateDeviceIdentifier

Deactivates the specified device identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeactivateDeviceIdentifierRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeactivateDeviceIdentifierRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeactivateDeviceIdentifierRequest();
    $request->requestBody = new DeactivateDeviceIdentifierRequestBody();
    $request->requestBody->clientToken = 'nobis';
    $request->requestBody->deviceIdentifierArn = 'enim';
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'iure';
    $request->xAmzSignedHeaders = 'culpa';

    $response = $sdk->sdk->deactivateDeviceIdentifier($request);

    if ($response->deactivateDeviceIdentifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetwork

Deletes the specified network. You must delete network sites before you delete the network. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/APIReference/API_DeleteNetworkSite.html">DeleteNetworkSite</a> in the <i>API Reference for Amazon Web Services Private 5G</i>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkRequest();
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->clientToken = 'repellat';
    $request->networkArn = 'mollitia';

    $response = $sdk->sdk->deleteNetwork($request);

    if ($response->deleteNetworkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteNetworkSite

Deletes the specified network site. Return the hardware after you delete the network site. You are responsible for minimum charges. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/hardware-maintenance.html">Hardware returns</a> in the <i>Amazon Web Services Private 5G User Guide</i>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteNetworkSiteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteNetworkSiteRequest();
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'numquam';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'molestiae';
    $request->xAmzSignature = 'velit';
    $request->xAmzSignedHeaders = 'error';
    $request->clientToken = 'quia';
    $request->networkSiteArn = 'quis';

    $response = $sdk->sdk->deleteNetworkSite($request);

    if ($response->deleteNetworkSiteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDeviceIdentifier

Gets the specified device identifier.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDeviceIdentifierRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDeviceIdentifierRequest();
    $request->xAmzAlgorithm = 'vitae';
    $request->xAmzContentSha256 = 'laborum';
    $request->xAmzCredential = 'animi';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'sequi';
    $request->deviceIdentifierArn = 'tenetur';

    $response = $sdk->sdk->getDeviceIdentifier($request);

    if ($response->getDeviceIdentifierResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetwork

Gets the specified network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkRequest();
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'temporibus';
    $request->networkArn = 'laborum';

    $response = $sdk->sdk->getNetwork($request);

    if ($response->getNetworkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkResource

Gets the specified network resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkResourceRequest();
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'praesentium';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->networkResourceArn = 'ipsa';

    $response = $sdk->sdk->getNetworkResource($request);

    if ($response->getNetworkResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNetworkSite

Gets the specified network site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNetworkSiteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNetworkSiteRequest();
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'doloremque';
    $request->xAmzSignature = 'reprehenderit';
    $request->xAmzSignedHeaders = 'ut';
    $request->networkSiteArn = 'maiores';

    $response = $sdk->sdk->getNetworkSite($request);

    if ($response->getNetworkSiteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrder

Gets the specified order.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOrderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOrderRequest();
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'corporis';
    $request->xAmzCredential = 'dolore';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'dicta';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'enim';
    $request->orderArn = 'accusamus';

    $response = $sdk->sdk->getOrder($request);

    if ($response->getOrderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDeviceIdentifiers

<p>Lists device identifiers. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order, the status of device identifiers, or the ARN of the traffic group.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDeviceIdentifiersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDeviceIdentifiersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDeviceIdentifiersRequest();
    $request->requestBody = new ListDeviceIdentifiersRequestBody();
    $request->requestBody->filters = [
        'repudiandae' => [
            'ipsum',
        ],
        'quidem' => [
            'excepturi',
            'pariatur',
            'modi',
        ],
    ];
    $request->requestBody->maxResults = 508969;
    $request->requestBody->networkArn = 'rem';
    $request->requestBody->startToken = 'voluptates';
    $request->xAmzAlgorithm = 'quasi';
    $request->xAmzContentSha256 = 'repudiandae';
    $request->xAmzCredential = 'sint';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'incidunt';
    $request->xAmzSignedHeaders = 'enim';
    $request->maxResults = 'consequatur';
    $request->startToken = 'est';

    $response = $sdk->sdk->listDeviceIdentifiers($request);

    if ($response->listDeviceIdentifiersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNetworkResources

<p>Lists network resources. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of an order or the status of network resources.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListNetworkResourcesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListNetworkResourcesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNetworkResourcesRequest();
    $request->requestBody = new ListNetworkResourcesRequestBody();
    $request->requestBody->filters = [
        'explicabo' => [
            'distinctio',
            'quibusdam',
            'labore',
        ],
        'modi' => [
            'aliquid',
        ],
        'cupiditate' => [
            'perferendis',
            'magni',
            'assumenda',
        ],
        'ipsam' => [
            'fugit',
        ],
    ];
    $request->requestBody->maxResults = 677817;
    $request->requestBody->networkArn = 'excepturi';
    $request->requestBody->startToken = 'tempora';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'tempore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'non';
    $request->xAmzSignedHeaders = 'eligendi';
    $request->maxResults = 'sint';
    $request->startToken = 'aliquid';

    $response = $sdk->sdk->listNetworkResources($request);

    if ($response->listNetworkResourcesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNetworkSites

Lists network sites. Add filters to your request to return a more specific list of results. Use filters to match the status of the network site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListNetworkSitesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListNetworkSitesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNetworkSitesRequest();
    $request->requestBody = new ListNetworkSitesRequestBody();
    $request->requestBody->filters = [
        'necessitatibus' => [
            'officia',
            'dolor',
            'debitis',
        ],
        'a' => [
            'in',
            'in',
            'illum',
        ],
        'maiores' => [
            'dicta',
            'magnam',
            'cumque',
        ],
    ];
    $request->requestBody->maxResults = 813798;
    $request->requestBody->networkArn = 'ea';
    $request->requestBody->startToken = 'aliquid';
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'non';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'delectus';
    $request->maxResults = 'quidem';
    $request->startToken = 'provident';

    $response = $sdk->sdk->listNetworkSites($request);

    if ($response->listNetworkSitesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listNetworks

Lists networks. Add filters to your request to return a more specific list of results. Use filters to match the status of the network.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListNetworksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListNetworksRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListNetworksRequest();
    $request->requestBody = new ListNetworksRequestBody();
    $request->requestBody->filters = [
        'id' => [
            'deleniti',
            'sapiente',
            'amet',
        ],
        'deserunt' => [
            'vel',
            'natus',
        ],
        'omnis' => [
            'perferendis',
            'nihil',
        ],
    ];
    $request->requestBody->maxResults = 301575;
    $request->requestBody->startToken = 'distinctio';
    $request->xAmzAlgorithm = 'id';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'suscipit';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'nobis';
    $request->xAmzSignedHeaders = 'eum';
    $request->maxResults = 'vero';
    $request->startToken = 'aspernatur';

    $response = $sdk->sdk->listNetworks($request);

    if ($response->listNetworksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOrders

<p>Lists orders. Add filters to your request to return a more specific list of results. Use filters to match the Amazon Resource Name (ARN) of the network site or the status of the order.</p> <p>If you specify multiple filters, filters are joined with an OR, and the request returns results that match all of the specified filters.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOrdersRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListOrdersRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOrdersRequest();
    $request->requestBody = new ListOrdersRequestBody();
    $request->requestBody->filters = [
        'magnam' => [
            'excepturi',
        ],
    ];
    $request->requestBody->maxResults = 354047;
    $request->requestBody->networkArn = 'provident';
    $request->requestBody->startToken = 'quos';
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'eum';
    $request->maxResults = 'dolor';
    $request->startToken = 'necessitatibus';

    $response = $sdk->sdk->listOrders($request);

    if ($response->listOrdersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Lists the tags for the specified resource.

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
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'eius';
    $request->resourceArn = 'maxime';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ping

Checks the health of the service.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PingRequest();
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'in';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'repudiandae';
    $request->xAmzSignedHeaders = 'ullam';

    $response = $sdk->sdk->ping($request);

    if ($response->pingResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startNetworkResourceUpdate

<p>Starts an update of the specified network resource.</p> <p>After you submit a request to replace or return a network resource, the status of the network resource is <code>CREATING_SHIPPING_LABEL</code>. The shipping label is available when the status of the network resource is <code>PENDING_RETURN</code>. After the network resource is successfully returned, its status is <code>DELETED</code>. For more information, see <a href="https://docs.aws.amazon.com/private-networks/latest/userguide/radio-units.html#return-radio-unit">Return a radio unit</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartNetworkResourceUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartNetworkResourceUpdateRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartNetworkResourceUpdateRequestBodyShippingAddress;
use \OpenAPI\OpenAPI\Models\Operations\StartNetworkResourceUpdateRequestBodyUpdateTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartNetworkResourceUpdateRequest();
    $request->requestBody = new StartNetworkResourceUpdateRequestBody();
    $request->requestBody->networkResourceArn = 'expedita';
    $request->requestBody->returnReason = 'nihil';
    $request->requestBody->shippingAddress = new StartNetworkResourceUpdateRequestBodyShippingAddress();
    $request->requestBody->shippingAddress->city = 'repellat';
    $request->requestBody->shippingAddress->company = 'quibusdam';
    $request->requestBody->shippingAddress->country = 'sed';
    $request->requestBody->shippingAddress->name = 'saepe';
    $request->requestBody->shippingAddress->phoneNumber = 'pariatur';
    $request->requestBody->shippingAddress->postalCode = 'accusantium';
    $request->requestBody->shippingAddress->stateOrProvince = 'consequuntur';
    $request->requestBody->shippingAddress->street1 = 'praesentium';
    $request->requestBody->shippingAddress->street2 = 'natus';
    $request->requestBody->shippingAddress->street3 = 'magni';
    $request->requestBody->updateType = StartNetworkResourceUpdateRequestBodyUpdateTypeEnum::REPLACE;
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'odit';

    $response = $sdk->sdk->startNetworkResourceUpdate($request);

    if ($response->startNetworkResourceUpdateResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

 Adds tags to the specified resource. 

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
        'accusantium' => 'ab',
        'maiores' => 'quidem',
    ];
    $request->xAmzAlgorithm = 'ipsam';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'autem';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'eaque';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'nemo';
    $request->resourceArn = 'voluptatibus';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

Removes tags from the specified resource.

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
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'fugiat';
    $request->xAmzCredential = 'amet';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'hic';
    $request->resourceArn = 'libero';
    $request->tagKeys = [
        'dolores',
        'quis',
        'totam',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSite

Updates the specified network site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSiteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSiteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSiteRequest();
    $request->requestBody = new UpdateNetworkSiteRequestBody();
    $request->requestBody->clientToken = 'dignissimos';
    $request->requestBody->description = 'eaque';
    $request->requestBody->networkSiteArn = 'quis';
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'dolor';

    $response = $sdk->sdk->updateNetworkSite($request);

    if ($response->updateNetworkSiteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateNetworkSitePlan

Updates the specified network site plan.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSitePlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSitePlanRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateNetworkSitePlanRequestBodyPendingPlan;
use \OpenAPI\OpenAPI\Models\Shared\NameValuePair;
use \OpenAPI\OpenAPI\Models\Shared\NetworkResourceDefinition;
use \OpenAPI\OpenAPI\Models\Shared\NetworkResourceDefinitionTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateNetworkSitePlanRequest();
    $request->requestBody = new UpdateNetworkSitePlanRequestBody();
    $request->requestBody->clientToken = 'vero';
    $request->requestBody->networkSiteArn = 'nostrum';
    $request->requestBody->pendingPlan = new UpdateNetworkSitePlanRequestBodyPendingPlan();
    $request->requestBody->pendingPlan->options = [
        new NameValuePair(),
        new NameValuePair(),
        new NameValuePair(),
        new NameValuePair(),
    ];
    $request->requestBody->pendingPlan->resourceDefinitions = [
        new NetworkResourceDefinition(),
        new NetworkResourceDefinition(),
        new NetworkResourceDefinition(),
        new NetworkResourceDefinition(),
    ];
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'perspiciatis';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'blanditiis';

    $response = $sdk->sdk->updateNetworkSitePlan($request);

    if ($response->updateNetworkSiteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
