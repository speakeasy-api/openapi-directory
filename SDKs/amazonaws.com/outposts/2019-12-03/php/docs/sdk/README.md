# SDK

## Overview

Amazon Web Services Outposts is a fully managed service that extends Amazon Web Services infrastructure, APIs, and tools to customer premises. By providing local access to Amazon Web Services managed infrastructure, Amazon Web Services Outposts enables customers to build and run applications on premises using the same programming interfaces as in Amazon Web Services Regions, while using local compute and storage resources for lower latency and local data processing needs.

Amazon Web Services documentation
<https://docs.aws.amazon.com/outposts/>
### Available Operations

* [cancelOrder](#cancelorder) - Cancels the specified order for an Outpost.
* [createOrder](#createorder) - Creates an order for an Outpost.
* [createOutpost](#createoutpost) - <p>Creates an Outpost.</p> <p>You can specify either an Availability one or an AZ ID.</p>
* [createSite](#createsite) -  Creates a site for an Outpost. 
* [deleteOutpost](#deleteoutpost) - Deletes the specified Outpost.
* [deleteSite](#deletesite) - Deletes the specified site.
* [getCatalogItem](#getcatalogitem) - Gets information about the specified catalog item.
* [getConnection](#getconnection) - <note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Gets information about the specified connection. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>
* [getOrder](#getorder) - Gets information about the specified order.
* [getOutpost](#getoutpost) - Gets information about the specified Outpost.
* [getOutpostInstanceTypes](#getoutpostinstancetypes) - Gets the instance types for the specified Outpost.
* [getSite](#getsite) - Gets information about the specified Outpost site.
* [getSiteAddress](#getsiteaddress) -  Gets the site address of the specified site. 
* [listAssets](#listassets) - <p>Lists the hardware assets for the specified Outpost.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [listCatalogItems](#listcatalogitems) - <p>Lists the items in the catalog.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [listOrders](#listorders) - Lists the Outpost orders for your Amazon Web Services account.
* [listOutposts](#listoutposts) - <p>Lists the Outposts for your Amazon Web Services account.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [listSites](#listsites) - <p>Lists the Outpost sites for your Amazon Web Services account. Use filters to return specific results.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [startConnection](#startconnection) - <note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Starts the connection required for Outpost server installation. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>
* [tagResource](#tagresource) - Adds tags to the specified resource.
* [untagResource](#untagresource) - Removes tags from the specified resource.
* [updateOutpost](#updateoutpost) -  Updates an Outpost. 
* [updateSite](#updatesite) - Updates the specified site.
* [updateSiteAddress](#updatesiteaddress) - <p>Updates the address of the specified site.</p> <p>You can't update a site address if there is an order in progress. You must wait for the order to complete or cancel the order.</p> <p>You can update the operating address before you place an order at the site, or after all Outposts that belong to the site have been deactivated.</p>
* [updateSiteRackPhysicalProperties](#updatesiterackphysicalproperties) - <p>Update the physical and logistical details for a rack at a site. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide. </p> <p>To update a rack at a site with an order of <code>IN_PROGRESS</code>, you must wait for the order to complete or cancel the order.</p>

## cancelOrder

Cancels the specified order for an Outpost.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CancelOrderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CancelOrderRequest();
    $request->orderId = 'vel';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'ipsa';

    $response = $sdk->sdk->cancelOrder($request);

    if ($response->cancelOrderOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOrder

Creates an order for an Outpost.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrderRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrderRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\LineItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrderRequestBodyPaymentOptionEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateOrderRequestBodyPaymentTermEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrderRequest();
    $request->requestBody = new CreateOrderRequestBody();
    $request->requestBody->lineItems = [
        new LineItemRequest(),
        new LineItemRequest(),
        new LineItemRequest(),
        new LineItemRequest(),
    ];
    $request->requestBody->outpostIdentifier = 'tempora';
    $request->requestBody->paymentOption = CreateOrderRequestBodyPaymentOptionEnum::NO_UPFRONT;
    $request->requestBody->paymentTerm = CreateOrderRequestBodyPaymentTermEnum::THREE_YEARS;
    $request->xAmzAlgorithm = 'minus';
    $request->xAmzContentSha256 = 'placeat';
    $request->xAmzCredential = 'voluptatum';
    $request->xAmzDate = 'iusto';
    $request->xAmzSecurityToken = 'excepturi';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'recusandae';

    $response = $sdk->sdk->createOrder($request);

    if ($response->createOrderOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createOutpost

<p>Creates an Outpost.</p> <p>You can specify either an Availability one or an AZ ID.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateOutpostRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateOutpostRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateOutpostRequestBodySupportedHardwareTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOutpostRequest();
    $request->requestBody = new CreateOutpostRequestBody();
    $request->requestBody->availabilityZone = 'temporibus';
    $request->requestBody->availabilityZoneId = 'ab';
    $request->requestBody->description = 'quis';
    $request->requestBody->name = 'Iris Aufderhar';
    $request->requestBody->siteId = 'sapiente';
    $request->requestBody->supportedHardwareType = CreateOutpostRequestBodySupportedHardwareTypeEnum::SERVER;
    $request->requestBody->tags = [
        'at' => 'at',
    ];
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'quod';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'porro';

    $response = $sdk->sdk->createOutpost($request);

    if ($response->createOutpostOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSite

 Creates a site for an Outpost. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSiteRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSiteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateSiteRequestBodyOperatingAddress;
use \OpenAPI\OpenAPI\Models\Operations\CreateSiteRequestBodyRackPhysicalProperties;
use \OpenAPI\OpenAPI\Models\Shared\FiberOpticCableTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\MaximumSupportedWeightLbsEnum;
use \OpenAPI\OpenAPI\Models\Shared\OpticalStandardEnum;
use \OpenAPI\OpenAPI\Models\Shared\PowerConnectorEnum;
use \OpenAPI\OpenAPI\Models\Shared\PowerDrawKvaEnum;
use \OpenAPI\OpenAPI\Models\Shared\PowerFeedDropEnum;
use \OpenAPI\OpenAPI\Models\Shared\PowerPhaseEnum;
use \OpenAPI\OpenAPI\Models\Shared\UplinkCountEnum;
use \OpenAPI\OpenAPI\Models\Shared\UplinkGbpsEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateSiteRequestBodyShippingAddress;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSiteRequest();
    $request->requestBody = new CreateSiteRequestBody();
    $request->requestBody->description = 'dolorum';
    $request->requestBody->name = 'Antoinette Nikolaus';
    $request->requestBody->notes = 'deleniti';
    $request->requestBody->operatingAddress = new CreateSiteRequestBodyOperatingAddress();
    $request->requestBody->operatingAddress->addressLine1 = 'hic';
    $request->requestBody->operatingAddress->addressLine2 = 'optio';
    $request->requestBody->operatingAddress->addressLine3 = 'totam';
    $request->requestBody->operatingAddress->city = 'South Jarenboro';
    $request->requestBody->operatingAddress->contactName = 'qui';
    $request->requestBody->operatingAddress->contactPhoneNumber = 'impedit';
    $request->requestBody->operatingAddress->countryCode = 'PT';
    $request->requestBody->operatingAddress->districtOrCounty = 'esse';
    $request->requestBody->operatingAddress->municipality = 'ipsum';
    $request->requestBody->operatingAddress->postalCode = '10361-6263';
    $request->requestBody->operatingAddress->stateOrRegion = 'hic';
    $request->requestBody->rackPhysicalProperties = new CreateSiteRequestBodyRackPhysicalProperties();
    $request->requestBody->rackPhysicalProperties->fiberOpticCableType = FiberOpticCableTypeEnum::MULTI_MODE;
    $request->requestBody->rackPhysicalProperties->maximumSupportedWeightLbs = MaximumSupportedWeightLbsEnum::MAX1800_LBS;
    $request->requestBody->rackPhysicalProperties->opticalStandard = OpticalStandardEnum::OPTIC40_GBASE_IR4_LR4_L;
    $request->requestBody->rackPhysicalProperties->powerConnector = PowerConnectorEnum::IEC309;
    $request->requestBody->rackPhysicalProperties->powerDrawKva = PowerDrawKvaEnum::POWER15_KVA;
    $request->requestBody->rackPhysicalProperties->powerFeedDrop = PowerFeedDropEnum::ABOVE_RACK;
    $request->requestBody->rackPhysicalProperties->powerPhase = PowerPhaseEnum::THREE_PHASE;
    $request->requestBody->rackPhysicalProperties->uplinkCount = UplinkCountEnum::UPLINK_COUNT7;
    $request->requestBody->rackPhysicalProperties->uplinkGbps = UplinkGbpsEnum::UPLINK1_G;
    $request->requestBody->shippingAddress = new CreateSiteRequestBodyShippingAddress();
    $request->requestBody->shippingAddress->addressLine1 = 'ipsa';
    $request->requestBody->shippingAddress->addressLine2 = 'reiciendis';
    $request->requestBody->shippingAddress->addressLine3 = 'est';
    $request->requestBody->shippingAddress->city = 'Osinskiville';
    $request->requestBody->shippingAddress->contactName = 'dolorem';
    $request->requestBody->shippingAddress->contactPhoneNumber = 'corporis';
    $request->requestBody->shippingAddress->countryCode = 'BT';
    $request->requestBody->shippingAddress->districtOrCounty = 'nobis';
    $request->requestBody->shippingAddress->municipality = 'enim';
    $request->requestBody->shippingAddress->postalCode = '33504-6991';
    $request->requestBody->shippingAddress->stateOrRegion = 'mollitia';
    $request->requestBody->tags = [
        'culpa' => 'consequuntur',
    ];
    $request->xAmzAlgorithm = 'repellat';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'commodi';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestiae';

    $response = $sdk->sdk->createSite($request);

    if ($response->createSiteOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteOutpost

Deletes the specified Outpost.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteOutpostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteOutpostRequest();
    $request->outpostId = 'velit';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'vitae';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'animi';
    $request->xAmzSignedHeaders = 'enim';

    $response = $sdk->sdk->deleteOutpost($request);

    if ($response->deleteOutpostOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSite

Deletes the specified site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSiteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSiteRequest();
    $request->siteId = 'odit';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'sequi';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'ipsam';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'possimus';
    $request->xAmzSignedHeaders = 'aut';

    $response = $sdk->sdk->deleteSite($request);

    if ($response->deleteSiteOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCatalogItem

Gets information about the specified catalog item.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetCatalogItemRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCatalogItemRequest();
    $request->catalogItemId = 'quasi';
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'reiciendis';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'vero';

    $response = $sdk->sdk->getCatalogItem($request);

    if ($response->getCatalogItemOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getConnection

<note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Gets information about the specified connection. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetConnectionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetConnectionRequest();
    $request->connectionId = 'nihil';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'cum';
    $request->xAmzSignedHeaders = 'perferendis';

    $response = $sdk->sdk->getConnection($request);

    if ($response->getConnectionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOrder

Gets information about the specified order.

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
    $request->orderId = 'doloremque';
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'iusto';

    $response = $sdk->sdk->getOrder($request);

    if ($response->getOrderOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOutpost

Gets information about the specified Outpost.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOutpostRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOutpostRequest();
    $request->outpostId = 'dicta';
    $request->xAmzAlgorithm = 'harum';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'commodi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'quae';
    $request->xAmzSignedHeaders = 'ipsum';

    $response = $sdk->sdk->getOutpost($request);

    if ($response->getOutpostOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getOutpostInstanceTypes

Gets the instance types for the specified Outpost.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetOutpostInstanceTypesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetOutpostInstanceTypesRequest();
    $request->maxResults = 692472;
    $request->nextToken = 'molestias';
    $request->outpostId = 'excepturi';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'repudiandae';

    $response = $sdk->sdk->getOutpostInstanceTypes($request);

    if ($response->getOutpostInstanceTypesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSite

Gets information about the specified Outpost site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSiteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSiteRequest();
    $request->siteId = 'sint';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'est';
    $request->xAmzSignedHeaders = 'quibusdam';

    $response = $sdk->sdk->getSite($request);

    if ($response->getSiteOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSiteAddress

 Gets the site address of the specified site. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSiteAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSiteAddressAddressTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSiteAddressRequest();
    $request->addressType = GetSiteAddressAddressTypeEnum::SHIPPING_ADDRESS;
    $request->siteId = 'deserunt';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'cupiditate';

    $response = $sdk->sdk->getSiteAddress($request);

    if ($response->getSiteAddressOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAssets

<p>Lists the hardware assets for the specified Outpost.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAssetsRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssetStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAssetsRequest();
    $request->hostIdFilter = [
        'perferendis',
        'magni',
        'assumenda',
    ];
    $request->maxResults = 369808;
    $request->nextToken = 'alias';
    $request->outpostId = 'fugit';
    $request->statusFilter = [
        AssetStateEnum::RETIRING,
        AssetStateEnum::ACTIVE,
        AssetStateEnum::RETIRING,
    ];
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'sint';

    $response = $sdk->sdk->listAssets($request);

    if ($response->listAssetsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCatalogItems

<p>Lists the items in the catalog.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCatalogItemsRequest;
use \OpenAPI\OpenAPI\Models\Shared\CatalogItemClassEnum;
use \OpenAPI\OpenAPI\Models\Shared\SupportedStorageEnumEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCatalogItemsRequest();
    $request->ec2FamilyFilter = [
        'provident',
        'necessitatibus',
    ];
    $request->itemClassFilter = [
        CatalogItemClassEnum::SERVER,
        CatalogItemClassEnum::RACK,
        CatalogItemClassEnum::SERVER,
    ];
    $request->maxResults = 952749;
    $request->nextToken = 'dolorum';
    $request->supportedStorageFilter = [
        SupportedStorageEnumEnum::EBS,
        SupportedStorageEnumEnum::S3,
    ];
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'rerum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'cumque';
    $request->xAmzSignature = 'facere';
    $request->xAmzSignedHeaders = 'ea';

    $response = $sdk->sdk->listCatalogItems($request);

    if ($response->listCatalogItemsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOrders

Lists the Outpost orders for your Amazon Web Services account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOrdersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOrdersRequest();
    $request->maxResults = 396506;
    $request->nextToken = 'laborum';
    $request->outpostIdentifierFilter = 'accusamus';
    $request->xAmzAlgorithm = 'non';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'enim';
    $request->xAmzDate = 'accusamus';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'provident';

    $response = $sdk->sdk->listOrders($request);

    if ($response->listOrdersOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOutposts

<p>Lists the Outposts for your Amazon Web Services account.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOutpostsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOutpostsRequest();
    $request->availabilityZoneFilter = [
        'id',
        'blanditiis',
        'deleniti',
    ];
    $request->availabilityZoneIdFilter = [
        'amet',
        'deserunt',
        'nisi',
        'vel',
    ];
    $request->lifeCycleStatusFilter = [
        'omnis',
        'molestiae',
        'perferendis',
    ];
    $request->maxResults = 470132;
    $request->nextToken = 'magnam';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'id';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'labore';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'nobis';

    $response = $sdk->sdk->listOutposts($request);

    if ($response->listOutpostsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSites

<p>Lists the Outpost sites for your Amazon Web Services account. Use filters to return specific results.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSitesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSitesRequest();
    $request->maxResults = 428769;
    $request->nextToken = 'vero';
    $request->operatingAddressCityFilter = [
        'architecto',
    ];
    $request->operatingAddressCountryCodeFilter = [
        'et',
        'excepturi',
    ];
    $request->operatingAddressStateOrRegionFilter = [
        'provident',
        'quos',
    ];
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'reiciendis';
    $request->xAmzSecurityToken = 'mollitia';
    $request->xAmzSignature = 'ad';
    $request->xAmzSignedHeaders = 'eum';

    $response = $sdk->sdk->listSites($request);

    if ($response->listSitesOutput !== null) {
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
    $request->resourceArn = 'dolor';
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'nemo';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'doloribus';
    $request->xAmzSignedHeaders = 'debitis';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startConnection

<note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Starts the connection required for Outpost server installation. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartConnectionRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartConnectionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartConnectionRequest();
    $request->requestBody = new StartConnectionRequestBody();
    $request->requestBody->assetId = 'eius';
    $request->requestBody->clientPublicKey = 'maxime';
    $request->requestBody->deviceSerialNumber = 'deleniti';
    $request->requestBody->networkInterfaceDeviceIndex = 703889;
    $request->xAmzAlgorithm = 'in';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'repudiandae';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'expedita';
    $request->xAmzSignedHeaders = 'nihil';

    $response = $sdk->sdk->startConnection($request);

    if ($response->startConnectionResponse !== null) {
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
        'quibusdam' => 'sed',
        'saepe' => 'pariatur',
        'accusantium' => 'consequuntur',
        'praesentium' => 'natus',
    ];
    $request->resourceArn = 'magni';
    $request->xAmzAlgorithm = 'sunt';
    $request->xAmzContentSha256 = 'quo';
    $request->xAmzCredential = 'illum';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'excepturi';

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
    $request->resourceArn = 'odit';
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->tagKeys = [
        'nam',
        'eaque',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateOutpost

 Updates an Outpost. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOutpostRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOutpostRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateOutpostRequestBodySupportedHardwareTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateOutpostRequest();
    $request->outpostId = 'pariatur';
    $request->requestBody = new UpdateOutpostRequestBody();
    $request->requestBody->description = 'nemo';
    $request->requestBody->name = 'Joseph Steuber DDS';
    $request->requestBody->supportedHardwareType = UpdateOutpostRequestBodySupportedHardwareTypeEnum::RACK;
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'dignissimos';

    $response = $sdk->sdk->updateOutpost($request);

    if ($response->updateOutpostOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSite

Updates the specified site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSiteRequest();
    $request->requestBody = new UpdateSiteRequestBody();
    $request->requestBody->description = 'eaque';
    $request->requestBody->name = 'Mr. Robin Daugherty';
    $request->requestBody->notes = 'quam';
    $request->siteId = 'dolor';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'nostrum';
    $request->xAmzCredential = 'hic';
    $request->xAmzDate = 'recusandae';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'perspiciatis';

    $response = $sdk->sdk->updateSite($request);

    if ($response->updateSiteOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSiteAddress

<p>Updates the address of the specified site.</p> <p>You can't update a site address if there is an order in progress. You must wait for the order to complete or cancel the order.</p> <p>You can update the operating address before you place an order at the site, or after all Outposts that belong to the site have been deactivated.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteAddressRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteAddressRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteAddressRequestBodyAddress;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteAddressRequestBodyAddressTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSiteAddressRequest();
    $request->requestBody = new UpdateSiteAddressRequestBody();
    $request->requestBody->address = new UpdateSiteAddressRequestBodyAddress();
    $request->requestBody->address->addressLine1 = 'voluptatem';
    $request->requestBody->address->addressLine2 = 'porro';
    $request->requestBody->address->addressLine3 = 'consequuntur';
    $request->requestBody->address->city = 'Lillieton';
    $request->requestBody->address->contactName = 'occaecati';
    $request->requestBody->address->contactPhoneNumber = 'rerum';
    $request->requestBody->address->countryCode = 'DM';
    $request->requestBody->address->districtOrCounty = 'asperiores';
    $request->requestBody->address->municipality = 'earum';
    $request->requestBody->address->postalCode = '66585';
    $request->requestBody->address->stateOrRegion = 'nobis';
    $request->requestBody->addressType = UpdateSiteAddressRequestBodyAddressTypeEnum::OPERATING_ADDRESS;
    $request->siteId = 'delectus';
    $request->xAmzAlgorithm = 'quaerat';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'qui';

    $response = $sdk->sdk->updateSiteAddress($request);

    if ($response->updateSiteAddressOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSiteRackPhysicalProperties

<p>Update the physical and logistical details for a rack at a site. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide. </p> <p>To update a rack at a site with an order of <code>IN_PROGRESS</code>, you must wait for the order to complete or cancel the order.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteRackPhysicalPropertiesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteRackPhysicalPropertiesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteRackPhysicalPropertiesRequestBodyFiberOpticCableTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteRackPhysicalPropertiesRequestBodyMaximumSupportedWeightLbsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteRackPhysicalPropertiesRequestBodyOpticalStandardEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteRackPhysicalPropertiesRequestBodyPowerConnectorEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteRackPhysicalPropertiesRequestBodyPowerDrawKvaEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteRackPhysicalPropertiesRequestBodyPowerFeedDropEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteRackPhysicalPropertiesRequestBodyPowerPhaseEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteRackPhysicalPropertiesRequestBodyUplinkCountEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSiteRackPhysicalPropertiesRequestBodyUplinkGbpsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSiteRackPhysicalPropertiesRequest();
    $request->requestBody = new UpdateSiteRackPhysicalPropertiesRequestBody();
    $request->requestBody->fiberOpticCableType = UpdateSiteRackPhysicalPropertiesRequestBodyFiberOpticCableTypeEnum::SINGLE_MODE;
    $request->requestBody->maximumSupportedWeightLbs = UpdateSiteRackPhysicalPropertiesRequestBodyMaximumSupportedWeightLbsEnum::MAX2000_LBS;
    $request->requestBody->opticalStandard = UpdateSiteRackPhysicalPropertiesRequestBodyOpticalStandardEnum::OPTIC100_GBASE_SR4;
    $request->requestBody->powerConnector = UpdateSiteRackPhysicalPropertiesRequestBodyPowerConnectorEnum::AH530_P7_W;
    $request->requestBody->powerDrawKva = UpdateSiteRackPhysicalPropertiesRequestBodyPowerDrawKvaEnum::POWER10_KVA;
    $request->requestBody->powerFeedDrop = UpdateSiteRackPhysicalPropertiesRequestBodyPowerFeedDropEnum::ABOVE_RACK;
    $request->requestBody->powerPhase = UpdateSiteRackPhysicalPropertiesRequestBodyPowerPhaseEnum::THREE_PHASE;
    $request->requestBody->uplinkCount = UpdateSiteRackPhysicalPropertiesRequestBodyUplinkCountEnum::UPLINK_COUNT3;
    $request->requestBody->uplinkGbps = UpdateSiteRackPhysicalPropertiesRequestBodyUplinkGbpsEnum::UPLINK40_G;
    $request->siteId = 'numquam';
    $request->xAmzAlgorithm = 'veritatis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'odio';
    $request->xAmzSignature = 'quaerat';
    $request->xAmzSignedHeaders = 'accusamus';

    $response = $sdk->sdk->updateSiteRackPhysicalProperties($request);

    if ($response->updateSiteRackPhysicalPropertiesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
