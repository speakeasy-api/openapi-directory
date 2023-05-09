# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/outposts/2019-12-03/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CancelOrder(ctx, operations.CancelOrderRequest{
        OrderID: "corrupti",
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("quibusdam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("nulla"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("illum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelOrderOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CancelOrder](docs/sdk/README.md#cancelorder) - Cancels the specified order for an Outpost.
* [CreateOrder](docs/sdk/README.md#createorder) - Creates an order for an Outpost.
* [CreateOutpost](docs/sdk/README.md#createoutpost) - <p>Creates an Outpost.</p> <p>You can specify either an Availability one or an AZ ID.</p>
* [CreateSite](docs/sdk/README.md#createsite) -  Creates a site for an Outpost. 
* [DeleteOutpost](docs/sdk/README.md#deleteoutpost) - Deletes the specified Outpost.
* [DeleteSite](docs/sdk/README.md#deletesite) - Deletes the specified site.
* [GetCatalogItem](docs/sdk/README.md#getcatalogitem) - Gets information about the specified catalog item.
* [GetConnection](docs/sdk/README.md#getconnection) - <note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Gets information about the specified connection. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>
* [GetOrder](docs/sdk/README.md#getorder) - Gets information about the specified order.
* [GetOutpost](docs/sdk/README.md#getoutpost) - Gets information about the specified Outpost.
* [GetOutpostInstanceTypes](docs/sdk/README.md#getoutpostinstancetypes) - Gets the instance types for the specified Outpost.
* [GetSite](docs/sdk/README.md#getsite) - Gets information about the specified Outpost site.
* [GetSiteAddress](docs/sdk/README.md#getsiteaddress) -  Gets the site address of the specified site. 
* [ListAssets](docs/sdk/README.md#listassets) - <p>Lists the hardware assets for the specified Outpost.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [ListCatalogItems](docs/sdk/README.md#listcatalogitems) - <p>Lists the items in the catalog.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [ListOrders](docs/sdk/README.md#listorders) - Lists the Outpost orders for your Amazon Web Services account.
* [ListOutposts](docs/sdk/README.md#listoutposts) - <p>Lists the Outposts for your Amazon Web Services account.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [ListSites](docs/sdk/README.md#listsites) - <p>Lists the Outpost sites for your Amazon Web Services account. Use filters to return specific results.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists the tags for the specified resource.
* [StartConnection](docs/sdk/README.md#startconnection) - <note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Starts the connection required for Outpost server installation. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>
* [TagResource](docs/sdk/README.md#tagresource) - Adds tags to the specified resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes tags from the specified resource.
* [UpdateOutpost](docs/sdk/README.md#updateoutpost) -  Updates an Outpost. 
* [UpdateSite](docs/sdk/README.md#updatesite) - Updates the specified site.
* [UpdateSiteAddress](docs/sdk/README.md#updatesiteaddress) - <p>Updates the address of the specified site.</p> <p>You can't update a site address if there is an order in progress. You must wait for the order to complete or cancel the order.</p> <p>You can update the operating address before you place an order at the site, or after all Outposts that belong to the site have been deactivated.</p>
* [UpdateSiteRackPhysicalProperties](docs/sdk/README.md#updatesiterackphysicalproperties) - <p>Update the physical and logistical details for a rack at a site. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide. </p> <p>To update a rack at a site with an order of <code>IN_PROGRESS</code>, you must wait for the order to complete or cancel the order.</p>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
