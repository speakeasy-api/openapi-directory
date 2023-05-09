# SDK

## Overview

<p>Amazon Web Services Billing Conductor is a fully managed service that you can use to customize a <a href="https://docs.aws.amazon.com/billingconductor/latest/userguide/understanding-eb.html#eb-other-definitions">pro forma</a> version of your billing data each month, to accurately show or chargeback your end customers. Amazon Web Services Billing Conductor doesn't change the way you're billed by Amazon Web Services each month by design. Instead, it provides you with a mechanism to configure, generate, and display rates to certain customers over a given billing period. You can also analyze the difference between the rates you apply to your accounting groupings relative to your actual rates from Amazon Web Services. As a result of your Amazon Web Services Billing Conductor configuration, the payer account can also see the custom rate applied on the billing details page of the <a href="https://console.aws.amazon.com/billing">Amazon Web Services Billing console</a>, or configure a cost and usage report per billing group.</p> <p>This documentation shows how you can configure Amazon Web Services Billing Conductor using its API. For more information about using the <a href="https://console.aws.amazon.com/billingconductor/">Amazon Web Services Billing Conductor</a> user interface, see the <a href="https://docs.aws.amazon.com/billingconductor/latest/userguide/what-is-billingconductor.html"> Amazon Web Services Billing Conductor User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/billingconductor/>
### Available Operations

* [AssociateAccounts](#associateaccounts) - Connects an array of account IDs in a consolidated billing family to a predefined billing group. The account IDs must be a part of the consolidated billing family during the current month, and not already associated with another billing group. The maximum number of accounts that can be associated in one call is 30. 
* [AssociatePricingRules](#associatepricingrules) - Connects an array of <code>PricingRuleArns</code> to a defined <code>PricingPlan</code>. The maximum number <code>PricingRuleArn</code> that can be associated in one call is 30. 
* [BatchAssociateResourcesToCustomLineItem](#batchassociateresourcestocustomlineitem) -  Associates a batch of resources to a percentage custom line item. 
* [BatchDisassociateResourcesFromCustomLineItem](#batchdisassociateresourcesfromcustomlineitem) -  Disassociates a batch of resources from a percentage custom line item. 
* [CreateBillingGroup](#createbillinggroup) -  Creates a billing group that resembles a consolidated billing family that Amazon Web Services charges, based off of the predefined pricing plan computation. 
* [CreateCustomLineItem](#createcustomlineitem) -  Creates a custom line item that can be used to create a one-time fixed charge that can be applied to a single billing group for the current or previous billing period. The one-time fixed charge is either a fee or discount. 
* [CreatePricingPlan](#createpricingplan) - Creates a pricing plan that is used for computing Amazon Web Services charges for billing groups. 
* [CreatePricingRule](#createpricingrule) -  Creates a pricing rule can be associated to a pricing plan, or a set of pricing plans. 
* [DeleteBillingGroup](#deletebillinggroup) -  Deletes a billing group. 
* [DeleteCustomLineItem](#deletecustomlineitem) -  Deletes the custom line item identified by the given ARN in the current, or previous billing period. 
* [DeletePricingPlan](#deletepricingplan) - Deletes a pricing plan. The pricing plan must not be associated with any billing groups to delete successfully.
* [DeletePricingRule](#deletepricingrule) -  Deletes the pricing rule that's identified by the input Amazon Resource Name (ARN). 
* [DisassociateAccounts](#disassociateaccounts) - Removes the specified list of account IDs from the given billing group. 
* [DisassociatePricingRules](#disassociatepricingrules) -  Disassociates a list of pricing rules from a pricing plan. 
* [ListAccountAssociations](#listaccountassociations) -  This is a paginated call to list linked accounts that are linked to the payer account for the specified time period. If no information is provided, the current billing period is used. The response will optionally include the billing group that's associated with the linked account.
* [ListBillingGroupCostReports](#listbillinggroupcostreports) - A paginated call to retrieve a summary report of actual Amazon Web Services charges and the calculated Amazon Web Services charges based on the associated pricing plan of a billing group.
* [ListBillingGroups](#listbillinggroups) - A paginated call to retrieve a list of billing groups for the given billing period. If you don't provide a billing group, the current billing period is used.
* [ListCustomLineItemVersions](#listcustomlineitemversions) - A paginated call to get a list of all custom line item versions.
* [ListCustomLineItems](#listcustomlineitems) -  A paginated call to get a list of all custom line items (FFLIs) for the given billing period. If you don't provide a billing period, the current billing period is used. 
* [ListPricingPlans](#listpricingplans) - A paginated call to get pricing plans for the given billing period. If you don't provide a billing period, the current billing period is used. 
* [ListPricingPlansAssociatedWithPricingRule](#listpricingplansassociatedwithpricingrule) -  A list of the pricing plans that are associated with a pricing rule. 
* [ListPricingRules](#listpricingrules) -  Describes a pricing rule that can be associated to a pricing plan, or set of pricing plans. 
* [ListPricingRulesAssociatedToPricingPlan](#listpricingrulesassociatedtopricingplan) -  Lists the pricing rules that are associated with a pricing plan. 
* [ListResourcesAssociatedToCustomLineItem](#listresourcesassociatedtocustomlineitem) -  List the resources that are associated to a custom line item. 
* [ListTagsForResource](#listtagsforresource) -  A list the tags for a resource. 
* [TagResource](#tagresource) -  Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. 
* [UntagResource](#untagresource) -  Deletes specified tags from a resource. 
* [UpdateBillingGroup](#updatebillinggroup) - This updates an existing billing group. 
* [UpdateCustomLineItem](#updatecustomlineitem) -  Update an existing custom line item in the current or previous billing period. 
* [UpdatePricingPlan](#updatepricingplan) - This updates an existing pricing plan. 
* [UpdatePricingRule](#updatepricingrule) -  Updates an existing pricing rule. 

## AssociateAccounts

Connects an array of account IDs in a consolidated billing family to a predefined billing group. The account IDs must be a part of the consolidated billing family during the current month, and not already associated with another billing group. The maximum number of accounts that can be associated in one call is 30. 

### Example Usage

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
    res, err := s.SDK.AssociateAccounts(ctx, operations.AssociateAccountsRequest{
        RequestBody: operations.AssociateAccountsRequestBody{
            AccountIds: []string{
                "magnam",
                "debitis",
            },
            Arn: "ipsa",
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("placeat"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateAccountsOutput != nil {
        // handle response
    }
}
```

## AssociatePricingRules

Connects an array of <code>PricingRuleArns</code> to a defined <code>PricingPlan</code>. The maximum number <code>PricingRuleArn</code> that can be associated in one call is 30. 

### Example Usage

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
    res, err := s.SDK.AssociatePricingRules(ctx, operations.AssociatePricingRulesRequest{
        RequestBody: operations.AssociatePricingRulesRequestBody{
            Arn: "iusto",
            PricingRuleArns: []string{
                "nisi",
                "recusandae",
                "temporibus",
            },
        },
        XAmzAlgorithm: sdk.String("ab"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("repellendus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociatePricingRulesOutput != nil {
        // handle response
    }
}
```

## BatchAssociateResourcesToCustomLineItem

 Associates a batch of resources to a percentage custom line item. 

### Example Usage

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
    res, err := s.SDK.BatchAssociateResourcesToCustomLineItem(ctx, operations.BatchAssociateResourcesToCustomLineItemRequest{
        RequestBody: operations.BatchAssociateResourcesToCustomLineItemRequestBody{
            BillingPeriodRange: &operations.BatchAssociateResourcesToCustomLineItemRequestBodyBillingPeriodRange{
                ExclusiveEndBillingPeriod: sdk.String("sapiente"),
                InclusiveStartBillingPeriod: sdk.String("quo"),
            },
            ResourceArns: []string{
                "at",
            },
            TargetArn: "at",
        },
        XAmzAlgorithm: sdk.String("maiores"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchAssociateResourcesToCustomLineItemOutput != nil {
        // handle response
    }
}
```

## BatchDisassociateResourcesFromCustomLineItem

 Disassociates a batch of resources from a percentage custom line item. 

### Example Usage

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
    res, err := s.SDK.BatchDisassociateResourcesFromCustomLineItem(ctx, operations.BatchDisassociateResourcesFromCustomLineItemRequest{
        RequestBody: operations.BatchDisassociateResourcesFromCustomLineItemRequestBody{
            BillingPeriodRange: &operations.BatchDisassociateResourcesFromCustomLineItemRequestBodyBillingPeriodRange{
                ExclusiveEndBillingPeriod: sdk.String("dolorum"),
                InclusiveStartBillingPeriod: sdk.String("dicta"),
            },
            ResourceArns: []string{
                "officia",
                "occaecati",
                "fugit",
            },
            TargetArn: "deleniti",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("optio"),
        XAmzCredential: sdk.String("totam"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("modi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDisassociateResourcesFromCustomLineItemOutput != nil {
        // handle response
    }
}
```

## CreateBillingGroup

 Creates a billing group that resembles a consolidated billing family that Amazon Web Services charges, based off of the predefined pricing plan computation. 

### Example Usage

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
    res, err := s.SDK.CreateBillingGroup(ctx, operations.CreateBillingGroupRequest{
        RequestBody: operations.CreateBillingGroupRequestBody{
            AccountGrouping: operations.CreateBillingGroupRequestBodyAccountGrouping{
                LinkedAccountIds: []string{
                    "impedit",
                },
            },
            ComputationPreference: operations.CreateBillingGroupRequestBodyComputationPreference{
                PricingPlanArn: sdk.String("cum"),
            },
            Description: sdk.String("esse"),
            Name: "ipsum",
            PrimaryAccountID: sdk.String("excepturi"),
            Tags: map[string]string{
                "perferendis": "ad",
            },
        },
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("laboriosam"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmznClientToken: sdk.String("saepe"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBillingGroupOutput != nil {
        // handle response
    }
}
```

## CreateCustomLineItem

 Creates a custom line item that can be used to create a one-time fixed charge that can be applied to a single billing group for the current or previous billing period. The one-time fixed charge is either a fee or discount. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreateCustomLineItem(ctx, operations.CreateCustomLineItemRequest{
        RequestBody: operations.CreateCustomLineItemRequestBody{
            BillingGroupArn: "fuga",
            BillingPeriodRange: &operations.CreateCustomLineItemRequestBodyBillingPeriodRange{
                ExclusiveEndBillingPeriod: sdk.String("in"),
                InclusiveStartBillingPeriod: sdk.String("corporis"),
            },
            ChargeDetails: operations.CreateCustomLineItemRequestBodyChargeDetails{
                Flat: &shared.CustomLineItemFlatChargeDetails{
                    ChargeValue: 6130.64,
                },
                Percentage: &shared.CustomLineItemPercentageChargeDetails{
                    AssociatedValues: []string{
                        "saepe",
                        "quidem",
                    },
                    PercentageValue: 992.8,
                },
                Type: shared.CustomLineItemTypeEnumCredit.ToPointer(),
            },
            Description: "reiciendis",
            Name: "est",
            Tags: map[string]string{
                "laborum": "dolores",
                "dolorem": "corporis",
                "explicabo": "nobis",
            },
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("nemo"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("accusantium"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmznClientToken: sdk.String("culpa"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCustomLineItemOutput != nil {
        // handle response
    }
}
```

## CreatePricingPlan

Creates a pricing plan that is used for computing Amazon Web Services charges for billing groups. 

### Example Usage

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
    res, err := s.SDK.CreatePricingPlan(ctx, operations.CreatePricingPlanRequest{
        RequestBody: operations.CreatePricingPlanRequestBody{
            Description: sdk.String("doloribus"),
            Name: "sapiente",
            PricingRuleArns: []string{
                "mollitia",
            },
            Tags: map[string]string{
                "culpa": "consequuntur",
            },
        },
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmznClientToken: sdk.String("velit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePricingPlanOutput != nil {
        // handle response
    }
}
```

## CreatePricingRule

 Creates a pricing rule can be associated to a pricing plan, or a set of pricing plans. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.CreatePricingRule(ctx, operations.CreatePricingRuleRequest{
        RequestBody: operations.CreatePricingRuleRequestBody{
            BillingEntity: sdk.String("error"),
            Description: sdk.String("quia"),
            ModifierPercentage: sdk.Float64(3380.07),
            Name: "vitae",
            Operation: sdk.String("laborum"),
            Scope: operations.CreatePricingRuleRequestBodyScopeEnumBillingEntity,
            Service: sdk.String("enim"),
            Tags: map[string]string{
                "quo": "sequi",
            },
            Tiering: &operations.CreatePricingRuleRequestBodyTiering{
                FreeTier: &shared.CreateFreeTierConfig{
                    Activated: false,
                },
            },
            Type: operations.CreatePricingRuleRequestBodyTypeEnumTiering,
            UsageType: sdk.String("ipsam"),
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("error"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmznClientToken: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreatePricingRuleOutput != nil {
        // handle response
    }
}
```

## DeleteBillingGroup

 Deletes a billing group. 

### Example Usage

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
    res, err := s.SDK.DeleteBillingGroup(ctx, operations.DeleteBillingGroupRequest{
        RequestBody: operations.DeleteBillingGroupRequestBody{
            Arn: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("vero"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("ipsa"),
        XAmzSignedHeaders: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBillingGroupOutput != nil {
        // handle response
    }
}
```

## DeleteCustomLineItem

 Deletes the custom line item identified by the given ARN in the current, or previous billing period. 

### Example Usage

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
    res, err := s.SDK.DeleteCustomLineItem(ctx, operations.DeleteCustomLineItemRequest{
        RequestBody: operations.DeleteCustomLineItemRequestBody{
            Arn: "voluptate",
            BillingPeriodRange: &operations.DeleteCustomLineItemRequestBodyBillingPeriodRange{
                ExclusiveEndBillingPeriod: sdk.String("cum"),
                InclusiveStartBillingPeriod: sdk.String("perferendis"),
            },
        },
        XAmzAlgorithm: sdk.String("doloremque"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("ut"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("dolore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteCustomLineItemOutput != nil {
        // handle response
    }
}
```

## DeletePricingPlan

Deletes a pricing plan. The pricing plan must not be associated with any billing groups to delete successfully.

### Example Usage

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
    res, err := s.SDK.DeletePricingPlan(ctx, operations.DeletePricingPlanRequest{
        RequestBody: operations.DeletePricingPlanRequestBody{
            Arn: "iusto",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("harum"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("repudiandae"),
        XAmzSignedHeaders: sdk.String("quae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePricingPlanOutput != nil {
        // handle response
    }
}
```

## DeletePricingRule

 Deletes the pricing rule that's identified by the input Amazon Resource Name (ARN). 

### Example Usage

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
    res, err := s.SDK.DeletePricingRule(ctx, operations.DeletePricingRuleRequest{
        RequestBody: operations.DeletePricingRuleRequestBody{
            Arn: "ipsum",
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("molestias"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("praesentium"),
        XAmzSignedHeaders: sdk.String("rem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeletePricingRuleOutput != nil {
        // handle response
    }
}
```

## DisassociateAccounts

Removes the specified list of account IDs from the given billing group. 

### Example Usage

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
    res, err := s.SDK.DisassociateAccounts(ctx, operations.DisassociateAccountsRequest{
        RequestBody: operations.DisassociateAccountsRequestBody{
            AccountIds: []string{
                "quasi",
                "repudiandae",
                "sint",
                "veritatis",
            },
            Arn: "itaque",
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("est"),
        XAmzSecurityToken: sdk.String("quibusdam"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("deserunt"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociateAccountsOutput != nil {
        // handle response
    }
}
```

## DisassociatePricingRules

 Disassociates a list of pricing rules from a pricing plan. 

### Example Usage

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
    res, err := s.SDK.DisassociatePricingRules(ctx, operations.DisassociatePricingRulesRequest{
        RequestBody: operations.DisassociatePricingRulesRequestBody{
            Arn: "distinctio",
            PricingRuleArns: []string{
                "labore",
                "modi",
                "qui",
                "aliquid",
            },
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("assumenda"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("alias"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisassociatePricingRulesOutput != nil {
        // handle response
    }
}
```

## ListAccountAssociations

 This is a paginated call to list linked accounts that are linked to the payer account for the specified time period. If no information is provided, the current billing period is used. The response will optionally include the billing group that's associated with the linked account.

### Example Usage

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
    res, err := s.SDK.ListAccountAssociations(ctx, operations.ListAccountAssociationsRequest{
        NextToken: sdk.String("fugit"),
        RequestBody: operations.ListAccountAssociationsRequestBody{
            BillingPeriod: sdk.String("dolorum"),
            Filters: &operations.ListAccountAssociationsRequestBodyFilters{
                AccountID: sdk.String("excepturi"),
                AccountIds: []string{
                    "facilis",
                    "tempore",
                },
                Association: sdk.String("labore"),
            },
            NextToken: sdk.String("delectus"),
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAccountAssociationsOutput != nil {
        // handle response
    }
}
```

## ListBillingGroupCostReports

A paginated call to retrieve a summary report of actual Amazon Web Services charges and the calculated Amazon Web Services charges based on the associated pricing plan of a billing group.

### Example Usage

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
    res, err := s.SDK.ListBillingGroupCostReports(ctx, operations.ListBillingGroupCostReportsRequest{
        MaxResults: sdk.String("sint"),
        NextToken: sdk.String("officia"),
        RequestBody: operations.ListBillingGroupCostReportsRequestBody{
            BillingPeriod: sdk.String("dolor"),
            Filters: &operations.ListBillingGroupCostReportsRequestBodyFilters{
                BillingGroupArns: []string{
                    "a",
                    "dolorum",
                    "in",
                    "in",
                },
            },
            MaxResults: sdk.Int64(846409),
            NextToken: sdk.String("maiores"),
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("cumque"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("aliquid"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBillingGroupCostReportsOutput != nil {
        // handle response
    }
}
```

## ListBillingGroups

A paginated call to retrieve a list of billing groups for the given billing period. If you don't provide a billing group, the current billing period is used.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListBillingGroups(ctx, operations.ListBillingGroupsRequest{
        MaxResults: sdk.String("laborum"),
        NextToken: sdk.String("accusamus"),
        RequestBody: operations.ListBillingGroupsRequestBody{
            BillingPeriod: sdk.String("non"),
            Filters: &operations.ListBillingGroupsRequestBodyFilters{
                Arns: []string{
                    "enim",
                    "accusamus",
                    "delectus",
                },
                PricingPlan: sdk.String("quidem"),
                Statuses: []shared.BillingGroupStatusEnum{
                    shared.BillingGroupStatusEnumPrimaryAccountMissing,
                    shared.BillingGroupStatusEnumPrimaryAccountMissing,
                    shared.BillingGroupStatusEnumPrimaryAccountMissing,
                },
            },
            MaxResults: sdk.Int64(533206),
            NextToken: sdk.String("sapiente"),
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("omnis"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBillingGroupsOutput != nil {
        // handle response
    }
}
```

## ListCustomLineItemVersions

A paginated call to get a list of all custom line item versions.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCustomLineItemVersions(ctx, operations.ListCustomLineItemVersionsRequest{
        MaxResults: sdk.String("perferendis"),
        NextToken: sdk.String("nihil"),
        RequestBody: operations.ListCustomLineItemVersionsRequestBody{
            Arn: "magnam",
            Filters: &operations.ListCustomLineItemVersionsRequestBodyFilters{
                BillingPeriodRange: &shared.ListCustomLineItemVersionsBillingPeriodRangeFilter{
                    EndBillingPeriod: sdk.String("distinctio"),
                    StartBillingPeriod: sdk.String("id"),
                },
            },
            MaxResults: sdk.Int64(287991),
            NextToken: sdk.String("labore"),
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("nobis"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("aspernatur"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomLineItemVersionsOutput != nil {
        // handle response
    }
}
```

## ListCustomLineItems

 A paginated call to get a list of all custom line items (FFLIs) for the given billing period. If you don't provide a billing period, the current billing period is used. 

### Example Usage

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
    res, err := s.SDK.ListCustomLineItems(ctx, operations.ListCustomLineItemsRequest{
        MaxResults: sdk.String("magnam"),
        NextToken: sdk.String("et"),
        RequestBody: operations.ListCustomLineItemsRequestBody{
            BillingPeriod: sdk.String("excepturi"),
            Filters: &operations.ListCustomLineItemsRequestBodyFilters{
                Arns: []string{
                    "provident",
                    "quos",
                },
                BillingGroups: []string{
                    "accusantium",
                    "mollitia",
                    "reiciendis",
                },
                Names: []string{
                    "ad",
                    "eum",
                    "dolor",
                },
            },
            MaxResults: sdk.Int64(896547),
            NextToken: sdk.String("odit"),
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("iure"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCustomLineItemsOutput != nil {
        // handle response
    }
}
```

## ListPricingPlans

A paginated call to get pricing plans for the given billing period. If you don't provide a billing period, the current billing period is used. 

### Example Usage

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
    res, err := s.SDK.ListPricingPlans(ctx, operations.ListPricingPlansRequest{
        MaxResults: sdk.String("deleniti"),
        NextToken: sdk.String("facilis"),
        RequestBody: operations.ListPricingPlansRequestBody{
            BillingPeriod: sdk.String("in"),
            Filters: &operations.ListPricingPlansRequestBodyFilters{
                Arns: []string{
                    "architecto",
                },
            },
            MaxResults: sdk.Int64(919483),
            NextToken: sdk.String("ullam"),
        },
        XAmzAlgorithm: sdk.String("expedita"),
        XAmzContentSha256: sdk.String("nihil"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("pariatur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPricingPlansOutput != nil {
        // handle response
    }
}
```

## ListPricingPlansAssociatedWithPricingRule

 A list of the pricing plans that are associated with a pricing rule. 

### Example Usage

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
    res, err := s.SDK.ListPricingPlansAssociatedWithPricingRule(ctx, operations.ListPricingPlansAssociatedWithPricingRuleRequest{
        MaxResults: sdk.String("accusantium"),
        NextToken: sdk.String("consequuntur"),
        RequestBody: operations.ListPricingPlansAssociatedWithPricingRuleRequestBody{
            BillingPeriod: sdk.String("praesentium"),
            MaxResults: sdk.Int64(615560),
            NextToken: sdk.String("magni"),
            PricingRuleArn: "sunt",
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("odit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPricingPlansAssociatedWithPricingRuleOutput != nil {
        // handle response
    }
}
```

## ListPricingRules

 Describes a pricing rule that can be associated to a pricing plan, or set of pricing plans. 

### Example Usage

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
    res, err := s.SDK.ListPricingRules(ctx, operations.ListPricingRulesRequest{
        MaxResults: sdk.String("ea"),
        NextToken: sdk.String("accusantium"),
        RequestBody: operations.ListPricingRulesRequestBody{
            BillingPeriod: sdk.String("ab"),
            Filters: &operations.ListPricingRulesRequestBodyFilters{
                Arns: []string{
                    "quidem",
                    "ipsam",
                    "voluptate",
                    "autem",
                },
            },
            MaxResults: sdk.Int64(722056),
            NextToken: sdk.String("eaque"),
        },
        XAmzAlgorithm: sdk.String("pariatur"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("aut"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPricingRulesOutput != nil {
        // handle response
    }
}
```

## ListPricingRulesAssociatedToPricingPlan

 Lists the pricing rules that are associated with a pricing plan. 

### Example Usage

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
    res, err := s.SDK.ListPricingRulesAssociatedToPricingPlan(ctx, operations.ListPricingRulesAssociatedToPricingPlanRequest{
        MaxResults: sdk.String("cumque"),
        NextToken: sdk.String("corporis"),
        RequestBody: operations.ListPricingRulesAssociatedToPricingPlanRequestBody{
            BillingPeriod: sdk.String("hic"),
            MaxResults: sdk.Int64(729991),
            NextToken: sdk.String("nobis"),
            PricingPlanArn: "dolores",
        },
        XAmzAlgorithm: sdk.String("quis"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("eaque"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("eos"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPricingRulesAssociatedToPricingPlanOutput != nil {
        // handle response
    }
}
```

## ListResourcesAssociatedToCustomLineItem

 List the resources that are associated to a custom line item. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListResourcesAssociatedToCustomLineItem(ctx, operations.ListResourcesAssociatedToCustomLineItemRequest{
        MaxResults: sdk.String("perferendis"),
        NextToken: sdk.String("dolores"),
        RequestBody: operations.ListResourcesAssociatedToCustomLineItemRequestBody{
            Arn: "minus",
            BillingPeriod: sdk.String("quam"),
            Filters: &operations.ListResourcesAssociatedToCustomLineItemRequestBodyFilters{
                Relationship: shared.CustomLineItemRelationshipEnumParent.ToPointer(),
            },
            MaxResults: sdk.Int64(874573),
            NextToken: sdk.String("nostrum"),
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("porro"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResourcesAssociatedToCustomLineItemOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

 A list the tags for a resource. 

### Example Usage

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        ResourceArn: "consequuntur",
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("rerum"),
        XAmzSignature: sdk.String("adipisci"),
        XAmzSignedHeaders: sdk.String("asperiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## TagResource

 Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. 

### Example Usage

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "modi": "iste",
                "dolorum": "deleniti",
                "pariatur": "provident",
                "nobis": "libero",
            },
        },
        ResourceArn: "delectus",
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("quos"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

 Deletes specified tags from a resource. 

### Example Usage

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        ResourceArn: "ipsum",
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("cum"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("amet"),
        TagKeys: []string{
            "numquam",
            "veritatis",
            "ipsa",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateBillingGroup

This updates an existing billing group. 

### Example Usage

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
    res, err := s.SDK.UpdateBillingGroup(ctx, operations.UpdateBillingGroupRequest{
        RequestBody: operations.UpdateBillingGroupRequestBody{
            Arn: "ipsa",
            ComputationPreference: &operations.UpdateBillingGroupRequestBodyComputationPreference{
                PricingPlanArn: sdk.String("iure"),
            },
            Description: sdk.String("odio"),
            Name: sdk.String("quaerat"),
            Status: operations.UpdateBillingGroupRequestBodyStatusEnumPrimaryAccountMissing.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("atque"),
        XAmzSignedHeaders: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBillingGroupOutput != nil {
        // handle response
    }
}
```

## UpdateCustomLineItem

 Update an existing custom line item in the current or previous billing period. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdateCustomLineItem(ctx, operations.UpdateCustomLineItemRequest{
        RequestBody: operations.UpdateCustomLineItemRequestBody{
            Arn: "fugiat",
            BillingPeriodRange: &operations.UpdateCustomLineItemRequestBodyBillingPeriodRange{
                ExclusiveEndBillingPeriod: sdk.String("ab"),
                InclusiveStartBillingPeriod: sdk.String("soluta"),
            },
            ChargeDetails: &operations.UpdateCustomLineItemRequestBodyChargeDetails{
                Flat: &shared.UpdateCustomLineItemFlatChargeDetails{
                    ChargeValue: 6793.93,
                },
                Percentage: &shared.UpdateCustomLineItemPercentageChargeDetails{
                    PercentageValue: 4785.96,
                },
            },
            Description: sdk.String("voluptate"),
            Name: sdk.String("dolorum"),
        },
        XAmzAlgorithm: sdk.String("deleniti"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("asperiores"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("ipsum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateCustomLineItemOutput != nil {
        // handle response
    }
}
```

## UpdatePricingPlan

This updates an existing pricing plan. 

### Example Usage

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
    res, err := s.SDK.UpdatePricingPlan(ctx, operations.UpdatePricingPlanRequest{
        RequestBody: operations.UpdatePricingPlanRequestBody{
            Arn: "voluptate",
            Description: sdk.String("id"),
            Name: sdk.String("saepe"),
        },
        XAmzAlgorithm: sdk.String("eius"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePricingPlanOutput != nil {
        // handle response
    }
}
```

## UpdatePricingRule

 Updates an existing pricing rule. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.UpdatePricingRule(ctx, operations.UpdatePricingRuleRequest{
        RequestBody: operations.UpdatePricingRuleRequestBody{
            Arn: "saepe",
            Description: sdk.String("suscipit"),
            ModifierPercentage: sdk.Float64(6457.85),
            Name: sdk.String("provident"),
            Tiering: &operations.UpdatePricingRuleRequestBodyTiering{
                FreeTier: &shared.UpdateFreeTierConfig{
                    Activated: false,
                },
            },
            Type: operations.UpdatePricingRuleRequestBodyTypeEnumMarkup.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("repellendus"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("similique"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("tempora"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePricingRuleOutput != nil {
        // handle response
    }
}
```
