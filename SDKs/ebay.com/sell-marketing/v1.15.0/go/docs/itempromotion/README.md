# ItemPromotion

### Available Operations

* [CreateItemPromotion](#createitempromotion) - This method creates an <b>item promotion</b>, where the buyer receives a discount when they meet the buying criteria that's set for the promotion. Known here as "threshold promotions", these promotions trigger when a threshold is met.  <p>eBay highlights promoted items by placing teasers for the promoted items throughout the online buyer flows.</p>  <p><i>Discounts</i> are specified as either a monetary amount or a percentage off the standard sales price of a listing, letting you offer deals such as "Buy 1 Get 1" and "Buy $50, get 20% off".</p> <p><i>Volume pricing</i> promotions increase the value of the discount as the buyer increases the quantity they purchase.</p> <p><i>Coded Coupons</i> provide unique codes that a buyer can use during checkout to receive a discount. The seller can specify the number of times a buyer can use the coupon and the maximum amount across all purchases that can be discounted using the coupon. The coupon code can also be made public (appearing on the seller's Offer page, search pages, the item listing, and the checkout page) or private (only on the seller's Offer page, but the seller can include the code in email and social media).</p> <p class="tablenote"><b>Note</b>: Coded Coupons are currently available in the US, UK, DE, FR, IT, ES, and AU marketplaces.</p><p>There are two ways to add items to a threshold promotion:</p>  <ul><li><b>Key-based promotions</b> select items using either the listing IDs or inventory reference IDs of the items you want to promote. Note that if you use inventory reference IDs, you must specify both the <b>inventoryReferenceId</b> and the associated <b>inventoryReferenceType</b> of the item(s) you want to include the promotion.</li> <li><b>Rule-based promotions</b> select items using a list of eBay category IDs or seller Store category IDs. Rules can further constrain items in a promotion by minimum and maximum prices, brands, and item conditions.</li></ul>  <p>You must create a new promotion in either a <code>DRAFT</code> or <code>SCHEDULED</code> state. Use the DRAFT state when you are initially creating a promotion and you want to be sure it's correctly configured before scheduling it to run. When you create a promotion, the promotion ID is returned in the <b>Location</b> response header. Use this ID to reference the promotion in subsequent requests.</p>  <p class="tablenote"><b>Tip:</b> Refer to the <a href="/api-docs/sell/static/marketing/promotions-manager.html">Selling Integration Guide</a> for details and examples showing how to create and manage threshold promotions using the Promotions Manager.</p>  <p>For information on the eBay marketplaces that support item promotions, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>.</p>
* [DeleteItemPromotion](#deleteitempromotion) - This method deletes the threshold promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>You can delete any promotion with the exception of those that are currently active (RUNNING). To end a running threshold promotion, call <a href="/api-docs/sell/marketing/resources/item_promotion/methods/updateItemPromotion">updateItemPromotion</a> and adjust the <b>endDate</b> field as appropriate.
* [GetItemPromotion](#getitempromotion) - This method returns the complete details of the threshold promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.
* [UpdateItemPromotion](#updateitempromotion) - This method updates the specified threshold promotion with the new configuration that you supply in the request. Indicate the promotion you want to update using the <b>promotion_id</b> path parameter.  <p>Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.</p>  <p>When updating a promotion, supply all the fields that you used to configure the original promotion (and not just the fields you are updating). eBay replaces the specified promotion with the values you supply in the update request and if you don't pass a field that currently has a value, the update request will fail.</p>  <p>The parameters you are allowed to update with this request depend on the status of the promotion you're updating:  <ul><li>DRAFT or SCHEDULED promotions: You can update any of the parameters in these promotions that have not yet started to run, including the <b>discountRules</b>.</li> <li>RUNNING or PAUSED promotions: You can change the <b>endDate</b> and the item's inventory but you cannot change the promotional discount or the promotion's start date.</li> <li>ENDED promotions: Nothing can be changed.</li></ul> <p class="tablenote"><b>Tip:</b> When updating a <code>RUNNING</code> or <code>PAUSED</code> promotion, set the <b>status</b> field to <code>SCHEDULED</code> for the update request. When the promotion is updated, the previous status (either <code>RUNNING</code> or <code>PAUSED</code>) is retained.</p>

## CreateItemPromotion

This method creates an <b>item promotion</b>, where the buyer receives a discount when they meet the buying criteria that's set for the promotion. Known here as "threshold promotions", these promotions trigger when a threshold is met.  <p>eBay highlights promoted items by placing teasers for the promoted items throughout the online buyer flows.</p>  <p><i>Discounts</i> are specified as either a monetary amount or a percentage off the standard sales price of a listing, letting you offer deals such as "Buy 1 Get 1" and "Buy $50, get 20% off".</p> <p><i>Volume pricing</i> promotions increase the value of the discount as the buyer increases the quantity they purchase.</p> <p><i>Coded Coupons</i> provide unique codes that a buyer can use during checkout to receive a discount. The seller can specify the number of times a buyer can use the coupon and the maximum amount across all purchases that can be discounted using the coupon. The coupon code can also be made public (appearing on the seller's Offer page, search pages, the item listing, and the checkout page) or private (only on the seller's Offer page, but the seller can include the code in email and social media).</p> <p class="tablenote"><b>Note</b>: Coded Coupons are currently available in the US, UK, DE, FR, IT, ES, and AU marketplaces.</p><p>There are two ways to add items to a threshold promotion:</p>  <ul><li><b>Key-based promotions</b> select items using either the listing IDs or inventory reference IDs of the items you want to promote. Note that if you use inventory reference IDs, you must specify both the <b>inventoryReferenceId</b> and the associated <b>inventoryReferenceType</b> of the item(s) you want to include the promotion.</li> <li><b>Rule-based promotions</b> select items using a list of eBay category IDs or seller Store category IDs. Rules can further constrain items in a promotion by minimum and maximum prices, brands, and item conditions.</li></ul>  <p>You must create a new promotion in either a <code>DRAFT</code> or <code>SCHEDULED</code> state. Use the DRAFT state when you are initially creating a promotion and you want to be sure it's correctly configured before scheduling it to run. When you create a promotion, the promotion ID is returned in the <b>Location</b> response header. Use this ID to reference the promotion in subsequent requests.</p>  <p class="tablenote"><b>Tip:</b> Refer to the <a href="/api-docs/sell/static/marketing/promotions-manager.html">Selling Integration Guide</a> for details and examples showing how to create and manage threshold promotions using the Promotions Manager.</p>  <p>For information on the eBay marketplaces that support item promotions, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>.</p>

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
    res, err := s.ItemPromotion.CreateItemPromotion(ctx, shared.ItemPromotion{
        ApplyDiscountToSingleItemOnly: sdk.Bool(false),
        Budget: &shared.Amount{
            Currency: sdk.String("molestias"),
            Value: sdk.String("temporibus"),
        },
        CouponConfiguration: &shared.CouponConfiguration{
            CouponCode: sdk.String("qui"),
            CouponType: sdk.String("neque"),
            MaxCouponRedemptionPerUser: sdk.Int(144847),
        },
        Description: sdk.String("magni"),
        DiscountRules: []shared.DiscountRule{
            shared.DiscountRule{
                DiscountBenefit: &shared.DiscountBenefit{
                    AmountOffItem: &shared.Amount{
                        Currency: sdk.String("sunt"),
                        Value: sdk.String("ullam"),
                    },
                    AmountOffOrder: &shared.Amount{
                        Currency: sdk.String("nam"),
                        Value: sdk.String("hic"),
                    },
                    PercentageOffItem: sdk.String("voluptatem"),
                    PercentageOffOrder: sdk.String("cumque"),
                },
                DiscountSpecification: &shared.DiscountSpecification{
                    ForEachAmount: &shared.Amount{
                        Currency: sdk.String("soluta"),
                        Value: sdk.String("nobis"),
                    },
                    ForEachQuantity: sdk.Int(92596),
                    MinAmount: &shared.Amount{
                        Currency: sdk.String("saepe"),
                        Value: sdk.String("ipsum"),
                    },
                    MinQuantity: sdk.Int(83422),
                    NumberOfDiscountedItems: sdk.Int(749255),
                },
                MaxDiscountAmount: &shared.Amount{
                    Currency: sdk.String("quos"),
                    Value: sdk.String("tempore"),
                },
                RuleOrder: sdk.Int(584476),
            },
            shared.DiscountRule{
                DiscountBenefit: &shared.DiscountBenefit{
                    AmountOffItem: &shared.Amount{
                        Currency: sdk.String("aperiam"),
                        Value: sdk.String("delectus"),
                    },
                    AmountOffOrder: &shared.Amount{
                        Currency: sdk.String("dolorem"),
                        Value: sdk.String("dolore"),
                    },
                    PercentageOffItem: sdk.String("labore"),
                    PercentageOffOrder: sdk.String("adipisci"),
                },
                DiscountSpecification: &shared.DiscountSpecification{
                    ForEachAmount: &shared.Amount{
                        Currency: sdk.String("dolorum"),
                        Value: sdk.String("architecto"),
                    },
                    ForEachQuantity: sdk.Int(63038),
                    MinAmount: &shared.Amount{
                        Currency: sdk.String("aut"),
                        Value: sdk.String("quas"),
                    },
                    MinQuantity: sdk.Int(929530),
                    NumberOfDiscountedItems: sdk.Int(9240),
                },
                MaxDiscountAmount: &shared.Amount{
                    Currency: sdk.String("est"),
                    Value: sdk.String("repellendus"),
                },
                RuleOrder: sdk.Int(785153),
            },
        },
        EndDate: sdk.String("doloribus"),
        InventoryCriterion: &shared.InventoryCriterion{
            InventoryCriterionType: sdk.String("ut"),
            InventoryItems: []shared.InventoryItem{
                shared.InventoryItem{
                    InventoryReferenceID: sdk.String("cupiditate"),
                },
                shared.InventoryItem{
                    InventoryReferenceID: sdk.String("qui"),
                },
                shared.InventoryItem{
                    InventoryReferenceID: sdk.String("quae"),
                },
            },
            ListingIds: []string{
                "odio",
                "occaecati",
                "voluptatibus",
            },
            RuleCriteria: &shared.RuleCriteria{
                ExcludeInventoryItems: []shared.InventoryItem{
                    shared.InventoryItem{
                        InventoryReferenceID: sdk.String("vero"),
                    },
                    shared.InventoryItem{
                        InventoryReferenceID: sdk.String("omnis"),
                    },
                    shared.InventoryItem{
                        InventoryReferenceID: sdk.String("quis"),
                    },
                    shared.InventoryItem{
                        InventoryReferenceID: sdk.String("ipsum"),
                    },
                },
                ExcludeListingIds: []string{
                    "voluptate",
                    "consectetur",
                    "vero",
                    "tenetur",
                },
                MarkupInventoryItems: []shared.InventoryItem{
                    shared.InventoryItem{
                        InventoryReferenceID: sdk.String("hic"),
                    },
                    shared.InventoryItem{
                        InventoryReferenceID: sdk.String("distinctio"),
                    },
                },
                MarkupListingIds: []string{
                    "odio",
                    "similique",
                    "facilis",
                    "vero",
                },
                SelectionRules: []shared.SelectionRule{
                    shared.SelectionRule{
                        Brands: []string{
                            "quibusdam",
                            "illum",
                        },
                        CategoryIds: []string{
                            "natus",
                        },
                        CategoryScope: sdk.String("impedit"),
                        ListingConditionIds: []string{
                            "voluptatibus",
                        },
                        MaxPrice: &shared.Amount{
                            Currency: sdk.String("exercitationem"),
                            Value: sdk.String("nulla"),
                        },
                        MinPrice: &shared.Amount{
                            Currency: sdk.String("fugit"),
                            Value: sdk.String("porro"),
                        },
                    },
                    shared.SelectionRule{
                        Brands: []string{
                            "doloribus",
                            "iusto",
                            "eligendi",
                            "ducimus",
                        },
                        CategoryIds: []string{
                            "officia",
                        },
                        CategoryScope: sdk.String("tempora"),
                        ListingConditionIds: []string{
                            "ea",
                            "aspernatur",
                        },
                        MaxPrice: &shared.Amount{
                            Currency: sdk.String("vel"),
                            Value: sdk.String("possimus"),
                        },
                        MinPrice: &shared.Amount{
                            Currency: sdk.String("magnam"),
                            Value: sdk.String("ratione"),
                        },
                    },
                },
            },
        },
        MarketplaceID: sdk.String("ex"),
        Name: sdk.String("Willie Fahey III"),
        Priority: sdk.String("nulla"),
        PromotionImageURL: sdk.String("excepturi"),
        PromotionStatus: sdk.String("voluptatibus"),
        PromotionType: sdk.String("nostrum"),
        StartDate: sdk.String("sapiente"),
    }, operations.CreateItemPromotionSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BaseResponse != nil {
        // handle response
    }
}
```

## DeleteItemPromotion

This method deletes the threshold promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>You can delete any promotion with the exception of those that are currently active (RUNNING). To end a running threshold promotion, call <a href="/api-docs/sell/marketing/resources/item_promotion/methods/updateItemPromotion">updateItemPromotion</a> and adjust the <b>endDate</b> field as appropriate.

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
    res, err := s.ItemPromotion.DeleteItemPromotion(ctx, operations.DeleteItemPromotionRequest{
        PromotionID: "quisquam",
    }, operations.DeleteItemPromotionSecurity{
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

## GetItemPromotion

This method returns the complete details of the threshold promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.

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
    res, err := s.ItemPromotion.GetItemPromotion(ctx, operations.GetItemPromotionRequest{
        PromotionID: "saepe",
    }, operations.GetItemPromotionSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemPromotionResponse != nil {
        // handle response
    }
}
```

## UpdateItemPromotion

This method updates the specified threshold promotion with the new configuration that you supply in the request. Indicate the promotion you want to update using the <b>promotion_id</b> path parameter.  <p>Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.</p>  <p>When updating a promotion, supply all the fields that you used to configure the original promotion (and not just the fields you are updating). eBay replaces the specified promotion with the values you supply in the update request and if you don't pass a field that currently has a value, the update request will fail.</p>  <p>The parameters you are allowed to update with this request depend on the status of the promotion you're updating:  <ul><li>DRAFT or SCHEDULED promotions: You can update any of the parameters in these promotions that have not yet started to run, including the <b>discountRules</b>.</li> <li>RUNNING or PAUSED promotions: You can change the <b>endDate</b> and the item's inventory but you cannot change the promotional discount or the promotion's start date.</li> <li>ENDED promotions: Nothing can be changed.</li></ul> <p class="tablenote"><b>Tip:</b> When updating a <code>RUNNING</code> or <code>PAUSED</code> promotion, set the <b>status</b> field to <code>SCHEDULED</code> for the update request. When the promotion is updated, the previous status (either <code>RUNNING</code> or <code>PAUSED</code>) is retained.</p>

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
    res, err := s.ItemPromotion.UpdateItemPromotion(ctx, operations.UpdateItemPromotionRequest{
        ItemPromotion: &shared.ItemPromotion{
            ApplyDiscountToSingleItemOnly: sdk.Bool(false),
            Budget: &shared.Amount{
                Currency: sdk.String("ea"),
                Value: sdk.String("impedit"),
            },
            CouponConfiguration: &shared.CouponConfiguration{
                CouponCode: sdk.String("corporis"),
                CouponType: sdk.String("veniam"),
                MaxCouponRedemptionPerUser: sdk.Int(399499),
            },
            Description: sdk.String("inventore"),
            DiscountRules: []shared.DiscountRule{
                shared.DiscountRule{
                    DiscountBenefit: &shared.DiscountBenefit{
                        AmountOffItem: &shared.Amount{
                            Currency: sdk.String("ea"),
                            Value: sdk.String("quo"),
                        },
                        AmountOffOrder: &shared.Amount{
                            Currency: sdk.String("consectetur"),
                            Value: sdk.String("recusandae"),
                        },
                        PercentageOffItem: sdk.String("aspernatur"),
                        PercentageOffOrder: sdk.String("minima"),
                    },
                    DiscountSpecification: &shared.DiscountSpecification{
                        ForEachAmount: &shared.Amount{
                            Currency: sdk.String("eaque"),
                            Value: sdk.String("a"),
                        },
                        ForEachQuantity: sdk.Int(725595),
                        MinAmount: &shared.Amount{
                            Currency: sdk.String("aut"),
                            Value: sdk.String("aut"),
                        },
                        MinQuantity: sdk.Int(533466),
                        NumberOfDiscountedItems: sdk.Int(770581),
                    },
                    MaxDiscountAmount: &shared.Amount{
                        Currency: sdk.String("aliquam"),
                        Value: sdk.String("fugit"),
                    },
                    RuleOrder: sdk.Int(882860),
                },
                shared.DiscountRule{
                    DiscountBenefit: &shared.DiscountBenefit{
                        AmountOffItem: &shared.Amount{
                            Currency: sdk.String("inventore"),
                            Value: sdk.String("non"),
                        },
                        AmountOffOrder: &shared.Amount{
                            Currency: sdk.String("et"),
                            Value: sdk.String("dolorum"),
                        },
                        PercentageOffItem: sdk.String("laborum"),
                        PercentageOffOrder: sdk.String("placeat"),
                    },
                    DiscountSpecification: &shared.DiscountSpecification{
                        ForEachAmount: &shared.Amount{
                            Currency: sdk.String("velit"),
                            Value: sdk.String("eum"),
                        },
                        ForEachQuantity: sdk.Int(420539),
                        MinAmount: &shared.Amount{
                            Currency: sdk.String("nobis"),
                            Value: sdk.String("quas"),
                        },
                        MinQuantity: sdk.Int(829603),
                        NumberOfDiscountedItems: sdk.Int(860552),
                    },
                    MaxDiscountAmount: &shared.Amount{
                        Currency: sdk.String("voluptas"),
                        Value: sdk.String("libero"),
                    },
                    RuleOrder: sdk.Int(96549),
                },
            },
            EndDate: sdk.String("tempora"),
            InventoryCriterion: &shared.InventoryCriterion{
                InventoryCriterionType: sdk.String("numquam"),
                InventoryItems: []shared.InventoryItem{
                    shared.InventoryItem{
                        InventoryReferenceID: sdk.String("provident"),
                    },
                },
                ListingIds: []string{
                    "molestiae",
                },
                RuleCriteria: &shared.RuleCriteria{
                    ExcludeInventoryItems: []shared.InventoryItem{
                        shared.InventoryItem{
                            InventoryReferenceID: sdk.String("odio"),
                        },
                        shared.InventoryItem{
                            InventoryReferenceID: sdk.String("eius"),
                        },
                    },
                    ExcludeListingIds: []string{
                        "esse",
                        "rem",
                    },
                    MarkupInventoryItems: []shared.InventoryItem{
                        shared.InventoryItem{
                            InventoryReferenceID: sdk.String("reprehenderit"),
                        },
                        shared.InventoryItem{
                            InventoryReferenceID: sdk.String("quidem"),
                        },
                        shared.InventoryItem{
                            InventoryReferenceID: sdk.String("fugiat"),
                        },
                    },
                    MarkupListingIds: []string{
                        "eum",
                        "suscipit",
                    },
                    SelectionRules: []shared.SelectionRule{
                        shared.SelectionRule{
                            Brands: []string{
                                "praesentium",
                            },
                            CategoryIds: []string{
                                "veritatis",
                                "ipsa",
                                "id",
                                "quidem",
                            },
                            CategoryScope: sdk.String("neque"),
                            ListingConditionIds: []string{
                                "illum",
                                "quo",
                                "fuga",
                                "eius",
                            },
                            MaxPrice: &shared.Amount{
                                Currency: sdk.String("eos"),
                                Value: sdk.String("voluptas"),
                            },
                            MinPrice: &shared.Amount{
                                Currency: sdk.String("ab"),
                                Value: sdk.String("cupiditate"),
                            },
                        },
                        shared.SelectionRule{
                            Brands: []string{
                                "tempora",
                            },
                            CategoryIds: []string{
                                "ipsam",
                                "aspernatur",
                                "sequi",
                                "quo",
                            },
                            CategoryScope: sdk.String("esse"),
                            ListingConditionIds: []string{
                                "aperiam",
                                "distinctio",
                                "quod",
                                "dignissimos",
                            },
                            MaxPrice: &shared.Amount{
                                Currency: sdk.String("inventore"),
                                Value: sdk.String("nihil"),
                            },
                            MinPrice: &shared.Amount{
                                Currency: sdk.String("totam"),
                                Value: sdk.String("accusamus"),
                            },
                        },
                        shared.SelectionRule{
                            Brands: []string{
                                "odio",
                                "occaecati",
                            },
                            CategoryIds: []string{
                                "sapiente",
                                "dolores",
                            },
                            CategoryScope: sdk.String("deserunt"),
                            ListingConditionIds: []string{
                                "accusantium",
                                "porro",
                            },
                            MaxPrice: &shared.Amount{
                                Currency: sdk.String("eum"),
                                Value: sdk.String("quas"),
                            },
                            MinPrice: &shared.Amount{
                                Currency: sdk.String("praesentium"),
                                Value: sdk.String("consequuntur"),
                            },
                        },
                        shared.SelectionRule{
                            Brands: []string{
                                "fugit",
                                "fuga",
                                "mollitia",
                            },
                            CategoryIds: []string{
                                "atque",
                                "explicabo",
                            },
                            CategoryScope: sdk.String("minima"),
                            ListingConditionIds: []string{
                                "fugit",
                                "sapiente",
                            },
                            MaxPrice: &shared.Amount{
                                Currency: sdk.String("consequuntur"),
                                Value: sdk.String("ratione"),
                            },
                            MinPrice: &shared.Amount{
                                Currency: sdk.String("explicabo"),
                                Value: sdk.String("saepe"),
                            },
                        },
                    },
                },
            },
            MarketplaceID: sdk.String("occaecati"),
            Name: sdk.String("Carl Koch"),
            Priority: sdk.String("veritatis"),
            PromotionImageURL: sdk.String("esse"),
            PromotionStatus: sdk.String("quod"),
            PromotionType: sdk.String("nam"),
            StartDate: sdk.String("vero"),
        },
        PromotionID: "aliquid",
    }, operations.UpdateItemPromotionSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BaseResponse != nil {
        // handle response
    }
}
```
