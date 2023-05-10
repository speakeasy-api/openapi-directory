# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
    $request->orderId = 'corrupti';
    $request->xAmzAlgorithm = 'provident';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'unde';
    $request->xAmzSecurityToken = 'nulla';
    $request->xAmzSignature = 'corrupti';
    $request->xAmzSignedHeaders = 'illum';

    $response = $sdk->cancelOrder($request);

    if ($response->cancelOrderOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [cancelOrder](docs/sdk/README.md#cancelorder) - Cancels the specified order for an Outpost.
* [createOrder](docs/sdk/README.md#createorder) - Creates an order for an Outpost.
* [createOutpost](docs/sdk/README.md#createoutpost) - <p>Creates an Outpost.</p> <p>You can specify either an Availability one or an AZ ID.</p>
* [createSite](docs/sdk/README.md#createsite) -  Creates a site for an Outpost. 
* [deleteOutpost](docs/sdk/README.md#deleteoutpost) - Deletes the specified Outpost.
* [deleteSite](docs/sdk/README.md#deletesite) - Deletes the specified site.
* [getCatalogItem](docs/sdk/README.md#getcatalogitem) - Gets information about the specified catalog item.
* [getConnection](docs/sdk/README.md#getconnection) - <note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Gets information about the specified connection. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>
* [getOrder](docs/sdk/README.md#getorder) - Gets information about the specified order.
* [getOutpost](docs/sdk/README.md#getoutpost) - Gets information about the specified Outpost.
* [getOutpostInstanceTypes](docs/sdk/README.md#getoutpostinstancetypes) - Gets the instance types for the specified Outpost.
* [getSite](docs/sdk/README.md#getsite) - Gets information about the specified Outpost site.
* [getSiteAddress](docs/sdk/README.md#getsiteaddress) -  Gets the site address of the specified site. 
* [listAssets](docs/sdk/README.md#listassets) - <p>Lists the hardware assets for the specified Outpost.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [listCatalogItems](docs/sdk/README.md#listcatalogitems) - <p>Lists the items in the catalog.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [listOrders](docs/sdk/README.md#listorders) - Lists the Outpost orders for your Amazon Web Services account.
* [listOutposts](docs/sdk/README.md#listoutposts) - <p>Lists the Outposts for your Amazon Web Services account.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [listSites](docs/sdk/README.md#listsites) - <p>Lists the Outpost sites for your Amazon Web Services account. Use filters to return specific results.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for the specified resource.
* [startConnection](docs/sdk/README.md#startconnection) - <note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Starts the connection required for Outpost server installation. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>
* [tagResource](docs/sdk/README.md#tagresource) - Adds tags to the specified resource.
* [untagResource](docs/sdk/README.md#untagresource) - Removes tags from the specified resource.
* [updateOutpost](docs/sdk/README.md#updateoutpost) -  Updates an Outpost. 
* [updateSite](docs/sdk/README.md#updatesite) - Updates the specified site.
* [updateSiteAddress](docs/sdk/README.md#updatesiteaddress) - <p>Updates the address of the specified site.</p> <p>You can't update a site address if there is an order in progress. You must wait for the order to complete or cancel the order.</p> <p>You can update the operating address before you place an order at the site, or after all Outposts that belong to the site have been deactivated.</p>
* [updateSiteRackPhysicalProperties](docs/sdk/README.md#updatesiterackphysicalproperties) - <p>Update the physical and logistical details for a rack at a site. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide. </p> <p>To update a rack at a site with an order of <code>IN_PROGRESS</code>, you must wait for the order to complete or cancel the order.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
