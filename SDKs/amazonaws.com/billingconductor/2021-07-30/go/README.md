# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/billingconductor/2021-07-30/go
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
    res, err := s.AssociateAccounts(ctx, operations.AssociateAccountsRequest{
        RequestBody: operations.AssociateAccountsRequestBody{
            AccountIds: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            Arn: "unde",
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("corrupti"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateAccountsOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AssociateAccounts](docs/sdk/README.md#associateaccounts) - Connects an array of account IDs in a consolidated billing family to a predefined billing group. The account IDs must be a part of the consolidated billing family during the current month, and not already associated with another billing group. The maximum number of accounts that can be associated in one call is 30. 
* [AssociatePricingRules](docs/sdk/README.md#associatepricingrules) - Connects an array of <code>PricingRuleArns</code> to a defined <code>PricingPlan</code>. The maximum number <code>PricingRuleArn</code> that can be associated in one call is 30. 
* [BatchAssociateResourcesToCustomLineItem](docs/sdk/README.md#batchassociateresourcestocustomlineitem) -  Associates a batch of resources to a percentage custom line item. 
* [BatchDisassociateResourcesFromCustomLineItem](docs/sdk/README.md#batchdisassociateresourcesfromcustomlineitem) -  Disassociates a batch of resources from a percentage custom line item. 
* [CreateBillingGroup](docs/sdk/README.md#createbillinggroup) -  Creates a billing group that resembles a consolidated billing family that Amazon Web Services charges, based off of the predefined pricing plan computation. 
* [CreateCustomLineItem](docs/sdk/README.md#createcustomlineitem) -  Creates a custom line item that can be used to create a one-time fixed charge that can be applied to a single billing group for the current or previous billing period. The one-time fixed charge is either a fee or discount. 
* [CreatePricingPlan](docs/sdk/README.md#createpricingplan) - Creates a pricing plan that is used for computing Amazon Web Services charges for billing groups. 
* [CreatePricingRule](docs/sdk/README.md#createpricingrule) -  Creates a pricing rule can be associated to a pricing plan, or a set of pricing plans. 
* [DeleteBillingGroup](docs/sdk/README.md#deletebillinggroup) -  Deletes a billing group. 
* [DeleteCustomLineItem](docs/sdk/README.md#deletecustomlineitem) -  Deletes the custom line item identified by the given ARN in the current, or previous billing period. 
* [DeletePricingPlan](docs/sdk/README.md#deletepricingplan) - Deletes a pricing plan. The pricing plan must not be associated with any billing groups to delete successfully.
* [DeletePricingRule](docs/sdk/README.md#deletepricingrule) -  Deletes the pricing rule that's identified by the input Amazon Resource Name (ARN). 
* [DisassociateAccounts](docs/sdk/README.md#disassociateaccounts) - Removes the specified list of account IDs from the given billing group. 
* [DisassociatePricingRules](docs/sdk/README.md#disassociatepricingrules) -  Disassociates a list of pricing rules from a pricing plan. 
* [ListAccountAssociations](docs/sdk/README.md#listaccountassociations) -  This is a paginated call to list linked accounts that are linked to the payer account for the specified time period. If no information is provided, the current billing period is used. The response will optionally include the billing group that's associated with the linked account.
* [ListBillingGroupCostReports](docs/sdk/README.md#listbillinggroupcostreports) - A paginated call to retrieve a summary report of actual Amazon Web Services charges and the calculated Amazon Web Services charges based on the associated pricing plan of a billing group.
* [ListBillingGroups](docs/sdk/README.md#listbillinggroups) - A paginated call to retrieve a list of billing groups for the given billing period. If you don't provide a billing group, the current billing period is used.
* [ListCustomLineItemVersions](docs/sdk/README.md#listcustomlineitemversions) - A paginated call to get a list of all custom line item versions.
* [ListCustomLineItems](docs/sdk/README.md#listcustomlineitems) -  A paginated call to get a list of all custom line items (FFLIs) for the given billing period. If you don't provide a billing period, the current billing period is used. 
* [ListPricingPlans](docs/sdk/README.md#listpricingplans) - A paginated call to get pricing plans for the given billing period. If you don't provide a billing period, the current billing period is used. 
* [ListPricingPlansAssociatedWithPricingRule](docs/sdk/README.md#listpricingplansassociatedwithpricingrule) -  A list of the pricing plans that are associated with a pricing rule. 
* [ListPricingRules](docs/sdk/README.md#listpricingrules) -  Describes a pricing rule that can be associated to a pricing plan, or set of pricing plans. 
* [ListPricingRulesAssociatedToPricingPlan](docs/sdk/README.md#listpricingrulesassociatedtopricingplan) -  Lists the pricing rules that are associated with a pricing plan. 
* [ListResourcesAssociatedToCustomLineItem](docs/sdk/README.md#listresourcesassociatedtocustomlineitem) -  List the resources that are associated to a custom line item. 
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) -  A list the tags for a resource. 
* [TagResource](docs/sdk/README.md#tagresource) -  Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. 
* [UntagResource](docs/sdk/README.md#untagresource) -  Deletes specified tags from a resource. 
* [UpdateBillingGroup](docs/sdk/README.md#updatebillinggroup) - This updates an existing billing group. 
* [UpdateCustomLineItem](docs/sdk/README.md#updatecustomlineitem) -  Update an existing custom line item in the current or previous billing period. 
* [UpdatePricingPlan](docs/sdk/README.md#updatepricingplan) - This updates an existing pricing plan. 
* [UpdatePricingRule](docs/sdk/README.md#updatepricingrule) -  Updates an existing pricing rule. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
