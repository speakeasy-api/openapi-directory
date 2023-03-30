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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CancelOrderRequest{
        PathParams: operations.CancelOrderPathParams{
            OrderID: "corrupti",
        },
        Headers: operations.CancelOrderHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
        },
    }

    ctx := context.Background()
    res, err := s.CancelOrder(ctx, req)
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
## SDK Available Operations

### SDK SDK

* `CancelOrder` - Cancels the specified order for an Outpost.
* `CreateOrder` - Creates an order for an Outpost.
* `CreateOutpost` - <p>Creates an Outpost.</p> <p>You can specify either an Availability one or an AZ ID.</p>
* `CreateSite` -  Creates a site for an Outpost. 
* `DeleteOutpost` - Deletes the specified Outpost.
* `DeleteSite` - Deletes the specified site.
* `GetCatalogItem` - Gets information about the specified catalog item.
* `GetConnection` - <note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Gets information about the specified connection. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>
* `GetOrder` - Gets information about the specified order.
* `GetOutpost` - Gets information about the specified Outpost.
* `GetOutpostInstanceTypes` - Gets the instance types for the specified Outpost.
* `GetSite` - Gets information about the specified Outpost site.
* `GetSiteAddress` -  Gets the site address of the specified site. 
* `ListAssets` - <p>Lists the hardware assets for the specified Outpost.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* `ListCatalogItems` - <p>Lists the items in the catalog.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* `ListOrders` - Lists the Outpost orders for your Amazon Web Services account.
* `ListOutposts` - <p>Lists the Outposts for your Amazon Web Services account.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* `ListSites` - <p>Lists the Outpost sites for your Amazon Web Services account. Use filters to return specific results.</p> <p>Use filters to return specific results. If you specify multiple filters, the results include only the resources that match all of the specified filters. For a filter where you can specify multiple values, the results include items that match any of the values that you specify for the filter.</p>
* `ListTagsForResource` - Lists the tags for the specified resource.
* `StartConnection` - <note> <p> Amazon Web Services uses this action to install Outpost servers.</p> </note> <p> Starts the connection required for Outpost server installation. </p> <p> Use CloudTrail to monitor this action or Amazon Web Services managed policy for Amazon Web Services Outposts to secure it. For more information, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/security-iam-awsmanpol.html"> Amazon Web Services managed policies for Amazon Web Services Outposts</a> and <a href="https://docs.aws.amazon.com/outposts/latest/userguide/logging-using-cloudtrail.html"> Logging Amazon Web Services Outposts API calls with Amazon Web Services CloudTrail</a> in the <i>Amazon Web Services Outposts User Guide</i>. </p>
* `TagResource` - Adds tags to the specified resource.
* `UntagResource` - Removes tags from the specified resource.
* `UpdateOutpost` -  Updates an Outpost. 
* `UpdateSite` - Updates the specified site.
* `UpdateSiteAddress` - <p>Updates the address of the specified site.</p> <p>You can't update a site address if there is an order in progress. You must wait for the order to complete or cancel the order.</p> <p>You can update the operating address before you place an order at the site, or after all Outposts that belong to the site have been deactivated.</p>
* `UpdateSiteRackPhysicalProperties` - <p>Update the physical and logistical details for a rack at a site. For more information about hardware requirements for racks, see <a href="https://docs.aws.amazon.com/outposts/latest/userguide/outposts-requirements.html#checklist">Network readiness checklist</a> in the Amazon Web Services Outposts User Guide. </p> <p>To update a rack at a site with an order of <code>IN_PROGRESS</code>, you must wait for the order to complete or cancel the order.</p>
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
