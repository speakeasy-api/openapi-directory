# FulfillmentPolicy

### Available Operations

* [CreateFulfillmentPolicy](#createfulfillmentpolicy) - This method creates a new fulfillment policy where the policy encapsulates seller's terms for fulfilling item purchases. Fulfillment policies include the shipment options that the seller offers to buyers.  <br/><br/>Each policy targets a specific eBay marketplace and a category group type, and you can create multiple policies for each combination. <br/><br/>A successful request returns the <b>getFulfillmentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>  <p><b>Using the eBay standard envelope service (eSE)</b></p>  <p>The eBay standard envelope service (eSE) is a domestic envelope service with tracking through eBay. This service applies to specific Trading Cards categories (not all categories are supported), and to Coins & Paper Money, Postcards, and Stamps. See <a href="/api-docs/sell/static/seller-accounts/using-the-ebay-standard-envelope-service.html" target="_blank">Using the eBay standard envelope (eSE) service</a>.</p>
* [DeleteFulfillmentPolicy](#deletefulfillmentpolicy) - This method deletes a fulfillment policy. Supply the ID of the policy you want to delete in the <b>fulfillmentPolicyId</b> path parameter.
* [GetFulfillmentPolicies](#getfulfillmentpolicies) - This method retrieves all the fulfillment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.
* [GetFulfillmentPolicy](#getfulfillmentpolicy) - This method retrieves the complete details of a fulfillment policy. Supply the ID of the policy you want to retrieve using the <b>fulfillmentPolicyId</b> path parameter.
* [GetFulfillmentPolicyByName](#getfulfillmentpolicybyname) - This method retrieves the details for a specific fulfillment policy. In the request, supply both the policy <code>name</code> and its associated <code>marketplace_id</code> as query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.
* [UpdateFulfillmentPolicy](#updatefulfillmentpolicy) - This method updates an existing fulfillment policy. Specify the policy you want to update using the <b>fulfillment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

## CreateFulfillmentPolicy

This method creates a new fulfillment policy where the policy encapsulates seller's terms for fulfilling item purchases. Fulfillment policies include the shipment options that the seller offers to buyers.  <br/><br/>Each policy targets a specific eBay marketplace and a category group type, and you can create multiple policies for each combination. <br/><br/>A successful request returns the <b>getFulfillmentPolicy</b> URI to the new policy in the <b>Location</b> response header and the ID for the new policy is returned in the response payload.  <p class="tablenote"><b>Tip:</b> For details on creating and using the business policies supported by the Account API, see <a href="/api-docs/sell/static/seller-accounts/business-policies.html">eBay business policies</a>.</p>  <p><b>Using the eBay standard envelope service (eSE)</b></p>  <p>The eBay standard envelope service (eSE) is a domestic envelope service with tracking through eBay. This service applies to specific Trading Cards categories (not all categories are supported), and to Coins & Paper Money, Postcards, and Stamps. See <a href="/api-docs/sell/static/seller-accounts/using-the-ebay-standard-envelope-service.html" target="_blank">Using the eBay standard envelope (eSE) service</a>.</p>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FulfillmentPolicy.CreateFulfillmentPolicy(ctx, shared.FulfillmentPolicyRequest{
        CategoryTypes: []shared.CategoryType{
            shared.CategoryType{
                Default: sdk.Bool(false),
                Name: sdk.String("Miss Raymond Hauck III"),
            },
            shared.CategoryType{
                Default: sdk.Bool(false),
                Name: sdk.String("Timmy Satterfield"),
            },
            shared.CategoryType{
                Default: sdk.Bool(false),
                Name: sdk.String("Emilio Krajcik"),
            },
            shared.CategoryType{
                Default: sdk.Bool(false),
                Name: sdk.String("Deanna Sauer MD"),
            },
        },
        Description: sdk.String("officia"),
        FreightShipping: sdk.Bool(false),
        GlobalShipping: sdk.Bool(false),
        HandlingTime: &shared.TimeDuration{
            Unit: sdk.String("occaecati"),
            Value: sdk.Int(143353),
        },
        LocalPickup: sdk.Bool(false),
        MarketplaceID: sdk.String("deleniti"),
        Name: sdk.String("Ms. Earnest Lebsack"),
        PickupDropOff: sdk.Bool(false),
        ShipToLocations: &shared.RegionSet{
            RegionExcluded: []shared.Region{
                shared.Region{
                    RegionName: sdk.String("qui"),
                    RegionType: sdk.String("impedit"),
                },
                shared.Region{
                    RegionName: sdk.String("cum"),
                    RegionType: sdk.String("esse"),
                },
            },
            RegionIncluded: []shared.Region{
                shared.Region{
                    RegionName: sdk.String("excepturi"),
                    RegionType: sdk.String("aspernatur"),
                },
            },
        },
        ShippingOptions: []shared.ShippingOption{
            shared.ShippingOption{
                CostType: sdk.String("ad"),
                InsuranceFee: &shared.Amount{
                    Currency: sdk.String("natus"),
                    Value: sdk.String("sed"),
                },
                InsuranceOffered: sdk.Bool(false),
                OptionType: sdk.String("iste"),
                PackageHandlingCost: &shared.Amount{
                    Currency: sdk.String("dolor"),
                    Value: sdk.String("natus"),
                },
                RateTableID: sdk.String("laboriosam"),
                ShippingDiscountProfileID: sdk.String("hic"),
                ShippingPromotionOffered: sdk.Bool(false),
                ShippingServices: []shared.ShippingService{
                    shared.ShippingService{
                        AdditionalShippingCost: &shared.Amount{
                            Currency: sdk.String("fuga"),
                            Value: sdk.String("in"),
                        },
                        BuyerResponsibleForPickup: sdk.Bool(false),
                        BuyerResponsibleForShipping: sdk.Bool(false),
                        CashOnDeliveryFee: &shared.Amount{
                            Currency: sdk.String("corporis"),
                            Value: sdk.String("iste"),
                        },
                        FreeShipping: sdk.Bool(false),
                        ShipToLocations: &shared.RegionSet{
                            RegionExcluded: []shared.Region{
                                shared.Region{
                                    RegionName: sdk.String("saepe"),
                                    RegionType: sdk.String("quidem"),
                                },
                                shared.Region{
                                    RegionName: sdk.String("architecto"),
                                    RegionType: sdk.String("ipsa"),
                                },
                            },
                            RegionIncluded: []shared.Region{
                                shared.Region{
                                    RegionName: sdk.String("est"),
                                    RegionType: sdk.String("mollitia"),
                                },
                                shared.Region{
                                    RegionName: sdk.String("laborum"),
                                    RegionType: sdk.String("dolores"),
                                },
                                shared.Region{
                                    RegionName: sdk.String("dolorem"),
                                    RegionType: sdk.String("corporis"),
                                },
                                shared.Region{
                                    RegionName: sdk.String("explicabo"),
                                    RegionType: sdk.String("nobis"),
                                },
                            },
                        },
                        ShippingCarrierCode: sdk.String("enim"),
                        ShippingCost: &shared.Amount{
                            Currency: sdk.String("omnis"),
                            Value: sdk.String("nemo"),
                        },
                        ShippingServiceCode: sdk.String("minima"),
                        SortOrder: sdk.Int(570197),
                        Surcharge: &shared.Amount{
                            Currency: sdk.String("accusantium"),
                            Value: sdk.String("iure"),
                        },
                    },
                    shared.ShippingService{
                        AdditionalShippingCost: &shared.Amount{
                            Currency: sdk.String("culpa"),
                            Value: sdk.String("doloribus"),
                        },
                        BuyerResponsibleForPickup: sdk.Bool(false),
                        BuyerResponsibleForShipping: sdk.Bool(false),
                        CashOnDeliveryFee: &shared.Amount{
                            Currency: sdk.String("sapiente"),
                            Value: sdk.String("architecto"),
                        },
                        FreeShipping: sdk.Bool(false),
                        ShipToLocations: &shared.RegionSet{
                            RegionExcluded: []shared.Region{
                                shared.Region{
                                    RegionName: sdk.String("dolorem"),
                                    RegionType: sdk.String("culpa"),
                                },
                                shared.Region{
                                    RegionName: sdk.String("consequuntur"),
                                    RegionType: sdk.String("repellat"),
                                },
                                shared.Region{
                                    RegionName: sdk.String("mollitia"),
                                    RegionType: sdk.String("occaecati"),
                                },
                            },
                            RegionIncluded: []shared.Region{
                                shared.Region{
                                    RegionName: sdk.String("commodi"),
                                    RegionType: sdk.String("quam"),
                                },
                                shared.Region{
                                    RegionName: sdk.String("molestiae"),
                                    RegionType: sdk.String("velit"),
                                },
                            },
                        },
                        ShippingCarrierCode: sdk.String("error"),
                        ShippingCost: &shared.Amount{
                            Currency: sdk.String("quia"),
                            Value: sdk.String("quis"),
                        },
                        ShippingServiceCode: sdk.String("vitae"),
                        SortOrder: sdk.Int(674752),
                        Surcharge: &shared.Amount{
                            Currency: sdk.String("animi"),
                            Value: sdk.String("enim"),
                        },
                    },
                    shared.ShippingService{
                        AdditionalShippingCost: &shared.Amount{
                            Currency: sdk.String("odit"),
                            Value: sdk.String("quo"),
                        },
                        BuyerResponsibleForPickup: sdk.Bool(false),
                        BuyerResponsibleForShipping: sdk.Bool(false),
                        CashOnDeliveryFee: &shared.Amount{
                            Currency: sdk.String("sequi"),
                            Value: sdk.String("tenetur"),
                        },
                        FreeShipping: sdk.Bool(false),
                        ShipToLocations: &shared.RegionSet{
                            RegionExcluded: []shared.Region{
                                shared.Region{
                                    RegionName: sdk.String("id"),
                                    RegionType: sdk.String("possimus"),
                                },
                                shared.Region{
                                    RegionName: sdk.String("aut"),
                                    RegionType: sdk.String("quasi"),
                                },
                            },
                            RegionIncluded: []shared.Region{
                                shared.Region{
                                    RegionName: sdk.String("temporibus"),
                                    RegionType: sdk.String("laborum"),
                                },
                                shared.Region{
                                    RegionName: sdk.String("quasi"),
                                    RegionType: sdk.String("reiciendis"),
                                },
                                shared.Region{
                                    RegionName: sdk.String("voluptatibus"),
                                    RegionType: sdk.String("vero"),
                                },
                            },
                        },
                        ShippingCarrierCode: sdk.String("nihil"),
                        ShippingCost: &shared.Amount{
                            Currency: sdk.String("praesentium"),
                            Value: sdk.String("voluptatibus"),
                        },
                        ShippingServiceCode: sdk.String("ipsa"),
                        SortOrder: sdk.Int(604846),
                        Surcharge: &shared.Amount{
                            Currency: sdk.String("voluptate"),
                            Value: sdk.String("cum"),
                        },
                    },
                    shared.ShippingService{
                        AdditionalShippingCost: &shared.Amount{
                            Currency: sdk.String("perferendis"),
                            Value: sdk.String("doloremque"),
                        },
                        BuyerResponsibleForPickup: sdk.Bool(false),
                        BuyerResponsibleForShipping: sdk.Bool(false),
                        CashOnDeliveryFee: &shared.Amount{
                            Currency: sdk.String("reprehenderit"),
                            Value: sdk.String("ut"),
                        },
                        FreeShipping: sdk.Bool(false),
                        ShipToLocations: &shared.RegionSet{
                            RegionExcluded: []shared.Region{
                                shared.Region{
                                    RegionName: sdk.String("dicta"),
                                    RegionType: sdk.String("corporis"),
                                },
                                shared.Region{
                                    RegionName: sdk.String("dolore"),
                                    RegionType: sdk.String("iusto"),
                                },
                                shared.Region{
                                    RegionName: sdk.String("dicta"),
                                    RegionType: sdk.String("harum"),
                                },
                                shared.Region{
                                    RegionName: sdk.String("enim"),
                                    RegionType: sdk.String("accusamus"),
                                },
                            },
                            RegionIncluded: []shared.Region{
                                shared.Region{
                                    RegionName: sdk.String("repudiandae"),
                                    RegionType: sdk.String("quae"),
                                },
                                shared.Region{
                                    RegionName: sdk.String("ipsum"),
                                    RegionType: sdk.String("quidem"),
                                },
                            },
                        },
                        ShippingCarrierCode: sdk.String("molestias"),
                        ShippingCost: &shared.Amount{
                            Currency: sdk.String("excepturi"),
                            Value: sdk.String("pariatur"),
                        },
                        ShippingServiceCode: sdk.String("modi"),
                        SortOrder: sdk.Int(508969),
                        Surcharge: &shared.Amount{
                            Currency: sdk.String("rem"),
                            Value: sdk.String("voluptates"),
                        },
                    },
                },
            },
        },
    }, operations.CreateFulfillmentPolicySecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetFulfillmentPolicyResponse != nil {
        // handle response
    }
}
```

## DeleteFulfillmentPolicy

This method deletes a fulfillment policy. Supply the ID of the policy you want to delete in the <b>fulfillmentPolicyId</b> path parameter.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FulfillmentPolicy.DeleteFulfillmentPolicy(ctx, operations.DeleteFulfillmentPolicyRequest{
        FulfillmentPolicyID: "quasi",
    }, operations.DeleteFulfillmentPolicySecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetFulfillmentPolicies

This method retrieves all the fulfillment policies configured for the marketplace you specify using the <code>marketplace_id</code> query parameter.  <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policies for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get the policies for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP" target="_blank">HTTP request headers</a>.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FulfillmentPolicy.GetFulfillmentPolicies(ctx, operations.GetFulfillmentPoliciesRequest{
        MarketplaceID: "repudiandae",
    }, operations.GetFulfillmentPoliciesSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FulfillmentPolicyResponse != nil {
        // handle response
    }
}
```

## GetFulfillmentPolicy

This method retrieves the complete details of a fulfillment policy. Supply the ID of the policy you want to retrieve using the <b>fulfillmentPolicyId</b> path parameter.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FulfillmentPolicy.GetFulfillmentPolicy(ctx, operations.GetFulfillmentPolicyRequest{
        FulfillmentPolicyID: "sint",
    }, operations.GetFulfillmentPolicySecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FulfillmentPolicy != nil {
        // handle response
    }
}
```

## GetFulfillmentPolicyByName

This method retrieves the details for a specific fulfillment policy. In the request, supply both the policy <code>name</code> and its associated <code>marketplace_id</code> as query parameters.   <br/><br/><b>Marketplaces and locales</b>  <br/><br/>Get the correct policy for a marketplace that supports multiple locales using the <code>Content-Language</code> request header. For example, get a policy for the French locale of the Canadian marketplace by specifying <code>fr-CA</code> for the <code>Content-Language</code> header. Likewise, target the Dutch locale of the Belgium marketplace by setting <code>Content-Language: nl-BE</code>. For details on header values, see <a href="/api-docs/static/rest-request-components.html#HTTP">HTTP request headers</a>.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FulfillmentPolicy.GetFulfillmentPolicyByName(ctx, operations.GetFulfillmentPolicyByNameRequest{
        MarketplaceID: "veritatis",
        Name: "Miss Randall Hamill",
    }, operations.GetFulfillmentPolicyByNameSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FulfillmentPolicy != nil {
        // handle response
    }
}
```

## UpdateFulfillmentPolicy

This method updates an existing fulfillment policy. Specify the policy you want to update using the <b>fulfillment_policy_id</b> path parameter. Supply a complete policy payload with the updates you want to make; this call overwrites the existing policy with the new details specified in the payload.

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.FulfillmentPolicy.UpdateFulfillmentPolicy(ctx, operations.UpdateFulfillmentPolicyRequest{
        FulfillmentPolicyRequest: shared.FulfillmentPolicyRequest{
            CategoryTypes: []shared.CategoryType{
                shared.CategoryType{
                    Default: sdk.Bool(false),
                    Name: sdk.String("Rudy Spencer"),
                },
            },
            Description: sdk.String("qui"),
            FreightShipping: sdk.Bool(false),
            GlobalShipping: sdk.Bool(false),
            HandlingTime: &shared.TimeDuration{
                Unit: sdk.String("aliquid"),
                Value: sdk.Int(586513),
            },
            LocalPickup: sdk.Bool(false),
            MarketplaceID: sdk.String("quos"),
            Name: sdk.String("Louise Simonis Sr."),
            PickupDropOff: sdk.Bool(false),
            ShipToLocations: &shared.RegionSet{
                RegionExcluded: []shared.Region{
                    shared.Region{
                        RegionName: sdk.String("excepturi"),
                        RegionType: sdk.String("tempora"),
                    },
                    shared.Region{
                        RegionName: sdk.String("facilis"),
                        RegionType: sdk.String("tempore"),
                    },
                    shared.Region{
                        RegionName: sdk.String("labore"),
                        RegionType: sdk.String("delectus"),
                    },
                },
                RegionIncluded: []shared.Region{
                    shared.Region{
                        RegionName: sdk.String("non"),
                        RegionType: sdk.String("eligendi"),
                    },
                    shared.Region{
                        RegionName: sdk.String("sint"),
                        RegionType: sdk.String("aliquid"),
                    },
                },
            },
            ShippingOptions: []shared.ShippingOption{
                shared.ShippingOption{
                    CostType: sdk.String("necessitatibus"),
                    InsuranceFee: &shared.Amount{
                        Currency: sdk.String("sint"),
                        Value: sdk.String("officia"),
                    },
                    InsuranceOffered: sdk.Bool(false),
                    OptionType: sdk.String("dolor"),
                    PackageHandlingCost: &shared.Amount{
                        Currency: sdk.String("debitis"),
                        Value: sdk.String("a"),
                    },
                    RateTableID: sdk.String("dolorum"),
                    ShippingDiscountProfileID: sdk.String("in"),
                    ShippingPromotionOffered: sdk.Bool(false),
                    ShippingServices: []shared.ShippingService{
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: sdk.String("illum"),
                                Value: sdk.String("maiores"),
                            },
                            BuyerResponsibleForPickup: sdk.Bool(false),
                            BuyerResponsibleForShipping: sdk.Bool(false),
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: sdk.String("rerum"),
                                Value: sdk.String("dicta"),
                            },
                            FreeShipping: sdk.Bool(false),
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: sdk.String("cumque"),
                                        RegionType: sdk.String("facere"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("ea"),
                                        RegionType: sdk.String("aliquid"),
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: sdk.String("accusamus"),
                                        RegionType: sdk.String("non"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("occaecati"),
                                        RegionType: sdk.String("enim"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("accusamus"),
                                        RegionType: sdk.String("delectus"),
                                    },
                                },
                            },
                            ShippingCarrierCode: sdk.String("quidem"),
                            ShippingCost: &shared.Amount{
                                Currency: sdk.String("provident"),
                                Value: sdk.String("nam"),
                            },
                            ShippingServiceCode: sdk.String("id"),
                            SortOrder: sdk.Int(501324),
                            Surcharge: &shared.Amount{
                                Currency: sdk.String("deleniti"),
                                Value: sdk.String("sapiente"),
                            },
                        },
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: sdk.String("amet"),
                                Value: sdk.String("deserunt"),
                            },
                            BuyerResponsibleForPickup: sdk.Bool(false),
                            BuyerResponsibleForShipping: sdk.Bool(false),
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: sdk.String("nisi"),
                                Value: sdk.String("vel"),
                            },
                            FreeShipping: sdk.Bool(false),
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: sdk.String("omnis"),
                                        RegionType: sdk.String("molestiae"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("perferendis"),
                                        RegionType: sdk.String("nihil"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("magnam"),
                                        RegionType: sdk.String("distinctio"),
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: sdk.String("labore"),
                                        RegionType: sdk.String("labore"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("suscipit"),
                                        RegionType: sdk.String("natus"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("nobis"),
                                        RegionType: sdk.String("eum"),
                                    },
                                },
                            },
                            ShippingCarrierCode: sdk.String("vero"),
                            ShippingCost: &shared.Amount{
                                Currency: sdk.String("aspernatur"),
                                Value: sdk.String("architecto"),
                            },
                            ShippingServiceCode: sdk.String("magnam"),
                            SortOrder: sdk.Int(92373),
                            Surcharge: &shared.Amount{
                                Currency: sdk.String("excepturi"),
                                Value: sdk.String("ullam"),
                            },
                        },
                    },
                },
                shared.ShippingOption{
                    CostType: sdk.String("provident"),
                    InsuranceFee: &shared.Amount{
                        Currency: sdk.String("quos"),
                        Value: sdk.String("sint"),
                    },
                    InsuranceOffered: sdk.Bool(false),
                    OptionType: sdk.String("accusantium"),
                    PackageHandlingCost: &shared.Amount{
                        Currency: sdk.String("mollitia"),
                        Value: sdk.String("reiciendis"),
                    },
                    RateTableID: sdk.String("mollitia"),
                    ShippingDiscountProfileID: sdk.String("ad"),
                    ShippingPromotionOffered: sdk.Bool(false),
                    ShippingServices: []shared.ShippingService{
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: sdk.String("dolor"),
                                Value: sdk.String("necessitatibus"),
                            },
                            BuyerResponsibleForPickup: sdk.Bool(false),
                            BuyerResponsibleForShipping: sdk.Bool(false),
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: sdk.String("odit"),
                                Value: sdk.String("nemo"),
                            },
                            FreeShipping: sdk.Bool(false),
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: sdk.String("iure"),
                                        RegionType: sdk.String("doloribus"),
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: sdk.String("eius"),
                                        RegionType: sdk.String("maxime"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("deleniti"),
                                        RegionType: sdk.String("facilis"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("in"),
                                        RegionType: sdk.String("architecto"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("architecto"),
                                        RegionType: sdk.String("repudiandae"),
                                    },
                                },
                            },
                            ShippingCarrierCode: sdk.String("ullam"),
                            ShippingCost: &shared.Amount{
                                Currency: sdk.String("expedita"),
                                Value: sdk.String("nihil"),
                            },
                            ShippingServiceCode: sdk.String("repellat"),
                            SortOrder: sdk.Int(841140),
                            Surcharge: &shared.Amount{
                                Currency: sdk.String("sed"),
                                Value: sdk.String("saepe"),
                            },
                        },
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: sdk.String("pariatur"),
                                Value: sdk.String("accusantium"),
                            },
                            BuyerResponsibleForPickup: sdk.Bool(false),
                            BuyerResponsibleForShipping: sdk.Bool(false),
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: sdk.String("consequuntur"),
                                Value: sdk.String("praesentium"),
                            },
                            FreeShipping: sdk.Bool(false),
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: sdk.String("magni"),
                                        RegionType: sdk.String("sunt"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("quo"),
                                        RegionType: sdk.String("illum"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("pariatur"),
                                        RegionType: sdk.String("maxime"),
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: sdk.String("excepturi"),
                                        RegionType: sdk.String("odit"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("ea"),
                                        RegionType: sdk.String("accusantium"),
                                    },
                                },
                            },
                            ShippingCarrierCode: sdk.String("ab"),
                            ShippingCost: &shared.Amount{
                                Currency: sdk.String("maiores"),
                                Value: sdk.String("quidem"),
                            },
                            ShippingServiceCode: sdk.String("ipsam"),
                            SortOrder: sdk.Int(453543),
                            Surcharge: &shared.Amount{
                                Currency: sdk.String("autem"),
                                Value: sdk.String("nam"),
                            },
                        },
                    },
                },
                shared.ShippingOption{
                    CostType: sdk.String("eaque"),
                    InsuranceFee: &shared.Amount{
                        Currency: sdk.String("pariatur"),
                        Value: sdk.String("nemo"),
                    },
                    InsuranceOffered: sdk.Bool(false),
                    OptionType: sdk.String("voluptatibus"),
                    PackageHandlingCost: &shared.Amount{
                        Currency: sdk.String("perferendis"),
                        Value: sdk.String("fugiat"),
                    },
                    RateTableID: sdk.String("amet"),
                    ShippingDiscountProfileID: sdk.String("aut"),
                    ShippingPromotionOffered: sdk.Bool(false),
                    ShippingServices: []shared.ShippingService{
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: sdk.String("corporis"),
                                Value: sdk.String("hic"),
                            },
                            BuyerResponsibleForPickup: sdk.Bool(false),
                            BuyerResponsibleForShipping: sdk.Bool(false),
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: sdk.String("libero"),
                                Value: sdk.String("nobis"),
                            },
                            FreeShipping: sdk.Bool(false),
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: sdk.String("quis"),
                                        RegionType: sdk.String("totam"),
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: sdk.String("eaque"),
                                        RegionType: sdk.String("quis"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("nesciunt"),
                                        RegionType: sdk.String("eos"),
                                    },
                                },
                            },
                            ShippingCarrierCode: sdk.String("perferendis"),
                            ShippingCost: &shared.Amount{
                                Currency: sdk.String("dolores"),
                                Value: sdk.String("minus"),
                            },
                            ShippingServiceCode: sdk.String("quam"),
                            SortOrder: sdk.Int(223924),
                            Surcharge: &shared.Amount{
                                Currency: sdk.String("vero"),
                                Value: sdk.String("nostrum"),
                            },
                        },
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: sdk.String("hic"),
                                Value: sdk.String("recusandae"),
                            },
                            BuyerResponsibleForPickup: sdk.Bool(false),
                            BuyerResponsibleForShipping: sdk.Bool(false),
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: sdk.String("omnis"),
                                Value: sdk.String("facilis"),
                            },
                            FreeShipping: sdk.Bool(false),
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: sdk.String("voluptatem"),
                                        RegionType: sdk.String("porro"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("consequuntur"),
                                        RegionType: sdk.String("blanditiis"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("error"),
                                        RegionType: sdk.String("eaque"),
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: sdk.String("rerum"),
                                        RegionType: sdk.String("adipisci"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("asperiores"),
                                        RegionType: sdk.String("earum"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("modi"),
                                        RegionType: sdk.String("iste"),
                                    },
                                },
                            },
                            ShippingCarrierCode: sdk.String("dolorum"),
                            ShippingCost: &shared.Amount{
                                Currency: sdk.String("deleniti"),
                                Value: sdk.String("pariatur"),
                            },
                            ShippingServiceCode: sdk.String("provident"),
                            SortOrder: sdk.Int(750844),
                            Surcharge: &shared.Amount{
                                Currency: sdk.String("libero"),
                                Value: sdk.String("delectus"),
                            },
                        },
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: sdk.String("quaerat"),
                                Value: sdk.String("quos"),
                            },
                            BuyerResponsibleForPickup: sdk.Bool(false),
                            BuyerResponsibleForShipping: sdk.Bool(false),
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: sdk.String("aliquid"),
                                Value: sdk.String("dolorem"),
                            },
                            FreeShipping: sdk.Bool(false),
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: sdk.String("dolor"),
                                        RegionType: sdk.String("qui"),
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: sdk.String("hic"),
                                        RegionType: sdk.String("excepturi"),
                                    },
                                },
                            },
                            ShippingCarrierCode: sdk.String("cum"),
                            ShippingCost: &shared.Amount{
                                Currency: sdk.String("voluptate"),
                                Value: sdk.String("dignissimos"),
                            },
                            ShippingServiceCode: sdk.String("reiciendis"),
                            SortOrder: sdk.Int(227414),
                            Surcharge: &shared.Amount{
                                Currency: sdk.String("dolorum"),
                                Value: sdk.String("numquam"),
                            },
                        },
                        shared.ShippingService{
                            AdditionalShippingCost: &shared.Amount{
                                Currency: sdk.String("veritatis"),
                                Value: sdk.String("ipsa"),
                            },
                            BuyerResponsibleForPickup: sdk.Bool(false),
                            BuyerResponsibleForShipping: sdk.Bool(false),
                            CashOnDeliveryFee: &shared.Amount{
                                Currency: sdk.String("ipsa"),
                                Value: sdk.String("iure"),
                            },
                            FreeShipping: sdk.Bool(false),
                            ShipToLocations: &shared.RegionSet{
                                RegionExcluded: []shared.Region{
                                    shared.Region{
                                        RegionName: sdk.String("quaerat"),
                                        RegionType: sdk.String("accusamus"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("quidem"),
                                        RegionType: sdk.String("voluptatibus"),
                                    },
                                },
                                RegionIncluded: []shared.Region{
                                    shared.Region{
                                        RegionName: sdk.String("natus"),
                                        RegionType: sdk.String("eos"),
                                    },
                                    shared.Region{
                                        RegionName: sdk.String("atque"),
                                        RegionType: sdk.String("sit"),
                                    },
                                },
                            },
                            ShippingCarrierCode: sdk.String("fugiat"),
                            ShippingCost: &shared.Amount{
                                Currency: sdk.String("ab"),
                                Value: sdk.String("soluta"),
                            },
                            ShippingServiceCode: sdk.String("dolorum"),
                            SortOrder: sdk.Int(478596),
                            Surcharge: &shared.Amount{
                                Currency: sdk.String("voluptate"),
                                Value: sdk.String("dolorum"),
                            },
                        },
                    },
                },
            },
        },
        FulfillmentPolicyID: "deleniti",
    }, operations.UpdateFulfillmentPolicySecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SetFulfillmentPolicyResponse != nil {
        // handle response
    }
}
```
