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

    req := operations.AssociateAccountsRequest{
        Headers: operations.AssociateAccountsHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.AssociateAccountsRequestBody{
            AccountIds: []string{
                "nihil",
                "fuga",
                "facilis",
                "eum",
            },
            Arn: "iusto",
        },
    }

    ctx := context.Background()
    res, err := s.AssociateAccounts(ctx, req)
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
## SDK Available Operations

### SDK SDK

* `AssociateAccounts` - Connects an array of account IDs in a consolidated billing family to a predefined billing group. The account IDs must be a part of the consolidated billing family during the current month, and not already associated with another billing group. The maximum number of accounts that can be associated in one call is 30. 
* `AssociatePricingRules` - Connects an array of <code>PricingRuleArns</code> to a defined <code>PricingPlan</code>. The maximum number <code>PricingRuleArn</code> that can be associated in one call is 30. 
* `BatchAssociateResourcesToCustomLineItem` -  Associates a batch of resources to a percentage custom line item. 
* `BatchDisassociateResourcesFromCustomLineItem` -  Disassociates a batch of resources from a percentage custom line item. 
* `CreateBillingGroup` -  Creates a billing group that resembles a consolidated billing family that Amazon Web Services charges, based off of the predefined pricing plan computation. 
* `CreateCustomLineItem` -  Creates a custom line item that can be used to create a one-time fixed charge that can be applied to a single billing group for the current or previous billing period. The one-time fixed charge is either a fee or discount. 
* `CreatePricingPlan` - Creates a pricing plan that is used for computing Amazon Web Services charges for billing groups. 
* `CreatePricingRule` -  Creates a pricing rule can be associated to a pricing plan, or a set of pricing plans. 
* `DeleteBillingGroup` -  Deletes a billing group. 
* `DeleteCustomLineItem` -  Deletes the custom line item identified by the given ARN in the current, or previous billing period. 
* `DeletePricingPlan` - Deletes a pricing plan. The pricing plan must not be associated with any billing groups to delete successfully.
* `DeletePricingRule` -  Deletes the pricing rule that's identified by the input Amazon Resource Name (ARN). 
* `DisassociateAccounts` - Removes the specified list of account IDs from the given billing group. 
* `DisassociatePricingRules` -  Disassociates a list of pricing rules from a pricing plan. 
* `ListAccountAssociations` -  This is a paginated call to list linked accounts that are linked to the payer account for the specified time period. If no information is provided, the current billing period is used. The response will optionally include the billing group that's associated with the linked account.
* `ListBillingGroupCostReports` - A paginated call to retrieve a summary report of actual Amazon Web Services charges and the calculated Amazon Web Services charges based on the associated pricing plan of a billing group.
* `ListBillingGroups` - A paginated call to retrieve a list of billing groups for the given billing period. If you don't provide a billing group, the current billing period is used.
* `ListCustomLineItemVersions` - A paginated call to get a list of all custom line item versions.
* `ListCustomLineItems` -  A paginated call to get a list of all custom line items (FFLIs) for the given billing period. If you don't provide a billing period, the current billing period is used. 
* `ListPricingPlans` - A paginated call to get pricing plans for the given billing period. If you don't provide a billing period, the current billing period is used. 
* `ListPricingPlansAssociatedWithPricingRule` -  A list of the pricing plans that are associated with a pricing rule. 
* `ListPricingRules` -  Describes a pricing rule that can be associated to a pricing plan, or set of pricing plans. 
* `ListPricingRulesAssociatedToPricingPlan` -  Lists the pricing rules that are associated with a pricing plan. 
* `ListResourcesAssociatedToCustomLineItem` -  List the resources that are associated to a custom line item. 
* `ListTagsForResource` -  A list the tags for a resource. 
* `TagResource` -  Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. 
* `UntagResource` -  Deletes specified tags from a resource. 
* `UpdateBillingGroup` - This updates an existing billing group. 
* `UpdateCustomLineItem` -  Update an existing custom line item in the current or previous billing period. 
* `UpdatePricingPlan` - This updates an existing pricing plan. 
* `UpdatePricingRule` -  Updates an existing pricing rule. 
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
