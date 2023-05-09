# ItemPriceMarkdown

### Available Operations

* [CreateItemPriceMarkdownPromotion](#createitempricemarkdownpromotion) - This method creates an <b>item price markdown promotion</b> (know simply as a "markdown promotion") where a discount amount is applied directly to the items included the promotion. Discounts can be specified as either a monetary amount or a percentage off the standard sales price. eBay highlights promoted items by placing teasers for the items throughout the online sales flows.  <p>Unlike an <a href="/api-docs/sell/marketing/resources/item_promotion/methods/createItemPromotion">item promotion</a>, a markdown promotion does not require the buyer meet a "threshold" before the offer takes effect. With markdown promotions, all the buyer needs to do is purchase the item to receive the promotion benefit.</p>  <p class="tablenote"><b>Important:</b> There are some restrictions for which listings are available for price markdown promotions. For details, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>. <br><br>In addition, we recommend you list items at competitive prices before including them in your markdown promotions. For an extensive list of pricing recommendations, see the <b>Growth</b> tab in Seller Hub.</p> <p>There are two ways to add items to markdown promotions:</p> <ul><li><b>Key-based promotions</b> select items using either the listing IDs or inventory reference IDs of the items you want to promote. Note that if you use inventory reference IDs, you must specify both the <b>inventoryReferenceId</b> and the associated <b>inventoryReferenceType</b> of the item(s) you want to include the promotion.</li>  <li><b>Rule-based promotions</b> select items using a list of eBay category IDs or seller Store category IDs. Rules can further constrain items in a promotion by minimum and maximum prices, brands, and item conditions.</li></ul>  <p>New promotions must be created in either a <code>DRAFT</code> or a <code>SCHEDULED</code> state. Use the DRAFT state when you are initially creating a promotion and you want to be sure it's correctly configured before scheduling it to run. When you create a promotion, the promotion ID is returned in the <b>Location</b> response header. Use this ID to reference the promotion in subsequent requests (such as to schedule a promotion that's in a DRAFT state).</p>  <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/promotions-manager.html">Promotions Manager</a> in the <i>Selling Integration Guide</i> for details and examples showing how to create and manage seller promotions.</p>  <p>Markdown promotions are available on all eBay marketplaces. For more information, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>.</p>
* [DeleteItemPriceMarkdownPromotion](#deleteitempricemarkdownpromotion) - This method deletes the item price markdown promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>You can delete any promotion with the exception of those that are currently active (RUNNING). To end a running promotion, call <a href="/api-docs/sell/marketing/resources/item_price_markdown/methods/updateItemPriceMarkdownPromotion">updateItemPriceMarkdownPromotion</a> and adjust the <b>endDate</b> field as appropriate.
* [GetItemPriceMarkdownPromotion](#getitempricemarkdownpromotion) - This method returns the complete details of the item price markdown promotion that's indicated by the <b>promotion_id</b> path parameter. <br><br>Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.
* [UpdateItemPriceMarkdownPromotion](#updateitempricemarkdownpromotion) - This method updates the specified item price markdown promotion with the new configuration that you supply in the payload of the request. Specify the promotion you want to update using the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>When updating a promotion, supply all the fields that you used to configure the original promotion (and not just the fields you are updating). eBay replaces the specified promotion with the values you supply in the update request and if you don't pass a field that currently has a value, the update request fails.  <br><br>The parameters you are allowed to update with this request depend on the status of the promotion you're updating:  <ul><li>DRAFT or SCHEDULED promotions: You can update any of the parameters in these promotions that have not yet started to run, including the <b>discountRules</b>.</li> <li>RUNNING promotions: You can change the <b>endDate</b> and the item's inventory but you cannot change the promotional discount or the promotion's start date.</li> <li>ENDED promotions: Nothing can be changed.</li></ul>

## CreateItemPriceMarkdownPromotion

This method creates an <b>item price markdown promotion</b> (know simply as a "markdown promotion") where a discount amount is applied directly to the items included the promotion. Discounts can be specified as either a monetary amount or a percentage off the standard sales price. eBay highlights promoted items by placing teasers for the items throughout the online sales flows.  <p>Unlike an <a href="/api-docs/sell/marketing/resources/item_promotion/methods/createItemPromotion">item promotion</a>, a markdown promotion does not require the buyer meet a "threshold" before the offer takes effect. With markdown promotions, all the buyer needs to do is purchase the item to receive the promotion benefit.</p>  <p class="tablenote"><b>Important:</b> There are some restrictions for which listings are available for price markdown promotions. For details, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>. <br><br>In addition, we recommend you list items at competitive prices before including them in your markdown promotions. For an extensive list of pricing recommendations, see the <b>Growth</b> tab in Seller Hub.</p> <p>There are two ways to add items to markdown promotions:</p> <ul><li><b>Key-based promotions</b> select items using either the listing IDs or inventory reference IDs of the items you want to promote. Note that if you use inventory reference IDs, you must specify both the <b>inventoryReferenceId</b> and the associated <b>inventoryReferenceType</b> of the item(s) you want to include the promotion.</li>  <li><b>Rule-based promotions</b> select items using a list of eBay category IDs or seller Store category IDs. Rules can further constrain items in a promotion by minimum and maximum prices, brands, and item conditions.</li></ul>  <p>New promotions must be created in either a <code>DRAFT</code> or a <code>SCHEDULED</code> state. Use the DRAFT state when you are initially creating a promotion and you want to be sure it's correctly configured before scheduling it to run. When you create a promotion, the promotion ID is returned in the <b>Location</b> response header. Use this ID to reference the promotion in subsequent requests (such as to schedule a promotion that's in a DRAFT state).</p>  <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/promotions-manager.html">Promotions Manager</a> in the <i>Selling Integration Guide</i> for details and examples showing how to create and manage seller promotions.</p>  <p>Markdown promotions are available on all eBay marketplaces. For more information, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>.</p>

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
    res, err := s.ItemPriceMarkdown.CreateItemPriceMarkdownPromotion(ctx, shared.ItemPriceMarkdown{
        ApplyFreeShipping: sdk.Bool(false),
        AutoSelectFutureInventory: sdk.Bool(false),
        BlockPriceIncreaseInItemRevision: sdk.Bool(false),
        Description: sdk.String("iure"),
        EndDate: sdk.String("doloribus"),
        MarketplaceID: sdk.String("debitis"),
        Name: sdk.String("Jasmine Lind"),
        Priority: sdk.String("architecto"),
        PromotionImageURL: sdk.String("architecto"),
        PromotionStatus: sdk.String("repudiandae"),
        SelectedInventoryDiscounts: []shared.SelectedInventoryDiscount{
            shared.SelectedInventoryDiscount{
                DiscountBenefit: &shared.DiscountBenefit{
                    AmountOffItem: &shared.Amount{
                        Currency: sdk.String("expedita"),
                        Value: sdk.String("nihil"),
                    },
                    AmountOffOrder: &shared.Amount{
                        Currency: sdk.String("repellat"),
                        Value: sdk.String("quibusdam"),
                    },
                    PercentageOffItem: sdk.String("sed"),
                    PercentageOffOrder: sdk.String("saepe"),
                },
                DiscountID: sdk.String("pariatur"),
                InventoryCriterion: &shared.InventoryCriterion{
                    InventoryCriterionType: sdk.String("accusantium"),
                    InventoryItems: []shared.InventoryItem{
                        shared.InventoryItem{
                            InventoryReferenceID: sdk.String("praesentium"),
                        },
                    },
                    ListingIds: []string{
                        "magni",
                        "sunt",
                        "quo",
                    },
                    RuleCriteria: &shared.RuleCriteria{
                        ExcludeInventoryItems: []shared.InventoryItem{
                            shared.InventoryItem{
                                InventoryReferenceID: sdk.String("pariatur"),
                            },
                            shared.InventoryItem{
                                InventoryReferenceID: sdk.String("maxime"),
                            },
                            shared.InventoryItem{
                                InventoryReferenceID: sdk.String("ea"),
                            },
                            shared.InventoryItem{
                                InventoryReferenceID: sdk.String("excepturi"),
                            },
                        },
                        ExcludeListingIds: []string{
                            "ea",
                        },
                        MarkupInventoryItems: []shared.InventoryItem{
                            shared.InventoryItem{
                                InventoryReferenceID: sdk.String("ab"),
                            },
                        },
                        MarkupListingIds: []string{
                            "quidem",
                            "ipsam",
                            "voluptate",
                            "autem",
                        },
                        SelectionRules: []shared.SelectionRule{
                            shared.SelectionRule{
                                Brands: []string{
                                    "pariatur",
                                },
                                CategoryIds: []string{
                                    "voluptatibus",
                                    "perferendis",
                                },
                                CategoryScope: sdk.String("fugiat"),
                                ListingConditionIds: []string{
                                    "aut",
                                },
                                MaxPrice: &shared.Amount{
                                    Currency: sdk.String("cumque"),
                                    Value: sdk.String("corporis"),
                                },
                                MinPrice: &shared.Amount{
                                    Currency: sdk.String("hic"),
                                    Value: sdk.String("libero"),
                                },
                            },
                            shared.SelectionRule{
                                Brands: []string{
                                    "dolores",
                                    "quis",
                                    "totam",
                                },
                                CategoryIds: []string{
                                    "eaque",
                                    "quis",
                                },
                                CategoryScope: sdk.String("nesciunt"),
                                ListingConditionIds: []string{
                                    "perferendis",
                                },
                                MaxPrice: &shared.Amount{
                                    Currency: sdk.String("dolores"),
                                    Value: sdk.String("minus"),
                                },
                                MinPrice: &shared.Amount{
                                    Currency: sdk.String("quam"),
                                    Value: sdk.String("dolor"),
                                },
                            },
                            shared.SelectionRule{
                                Brands: []string{
                                    "nostrum",
                                    "hic",
                                    "recusandae",
                                    "omnis",
                                },
                                CategoryIds: []string{
                                    "perspiciatis",
                                    "voluptatem",
                                    "porro",
                                },
                                CategoryScope: sdk.String("consequuntur"),
                                ListingConditionIds: []string{
                                    "error",
                                    "eaque",
                                    "occaecati",
                                },
                                MaxPrice: &shared.Amount{
                                    Currency: sdk.String("rerum"),
                                    Value: sdk.String("adipisci"),
                                },
                                MinPrice: &shared.Amount{
                                    Currency: sdk.String("asperiores"),
                                    Value: sdk.String("earum"),
                                },
                            },
                        },
                    },
                },
                RuleOrder: sdk.Int(267262),
            },
            shared.SelectedInventoryDiscount{
                DiscountBenefit: &shared.DiscountBenefit{
                    AmountOffItem: &shared.Amount{
                        Currency: sdk.String("iste"),
                        Value: sdk.String("dolorum"),
                    },
                    AmountOffOrder: &shared.Amount{
                        Currency: sdk.String("deleniti"),
                        Value: sdk.String("pariatur"),
                    },
                    PercentageOffItem: sdk.String("provident"),
                    PercentageOffOrder: sdk.String("nobis"),
                },
                DiscountID: sdk.String("libero"),
                InventoryCriterion: &shared.InventoryCriterion{
                    InventoryCriterionType: sdk.String("delectus"),
                    InventoryItems: []shared.InventoryItem{
                        shared.InventoryItem{
                            InventoryReferenceID: sdk.String("quos"),
                        },
                        shared.InventoryItem{
                            InventoryReferenceID: sdk.String("aliquid"),
                        },
                    },
                    ListingIds: []string{
                        "dolorem",
                    },
                    RuleCriteria: &shared.RuleCriteria{
                        ExcludeInventoryItems: []shared.InventoryItem{
                            shared.InventoryItem{
                                InventoryReferenceID: sdk.String("qui"),
                            },
                        },
                        ExcludeListingIds: []string{
                            "hic",
                        },
                        MarkupInventoryItems: []shared.InventoryItem{
                            shared.InventoryItem{
                                InventoryReferenceID: sdk.String("cum"),
                            },
                            shared.InventoryItem{
                                InventoryReferenceID: sdk.String("voluptate"),
                            },
                            shared.InventoryItem{
                                InventoryReferenceID: sdk.String("dignissimos"),
                            },
                        },
                        MarkupListingIds: []string{
                            "amet",
                            "dolorum",
                            "numquam",
                            "veritatis",
                        },
                        SelectionRules: []shared.SelectionRule{
                            shared.SelectionRule{
                                Brands: []string{
                                    "iure",
                                },
                                CategoryIds: []string{
                                    "quaerat",
                                    "accusamus",
                                },
                                CategoryScope: sdk.String("quidem"),
                                ListingConditionIds: []string{
                                    "voluptas",
                                    "natus",
                                    "eos",
                                    "atque",
                                },
                                MaxPrice: &shared.Amount{
                                    Currency: sdk.String("sit"),
                                    Value: sdk.String("fugiat"),
                                },
                                MinPrice: &shared.Amount{
                                    Currency: sdk.String("ab"),
                                    Value: sdk.String("soluta"),
                                },
                            },
                        },
                    },
                },
                RuleOrder: sdk.Int(679393),
            },
        },
        StartDate: sdk.String("iusto"),
    }, operations.CreateItemPriceMarkdownPromotionSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateItemPriceMarkdownPromotion201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteItemPriceMarkdownPromotion

This method deletes the item price markdown promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>You can delete any promotion with the exception of those that are currently active (RUNNING). To end a running promotion, call <a href="/api-docs/sell/marketing/resources/item_price_markdown/methods/updateItemPriceMarkdownPromotion">updateItemPriceMarkdownPromotion</a> and adjust the <b>endDate</b> field as appropriate.

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
    res, err := s.ItemPriceMarkdown.DeleteItemPriceMarkdownPromotion(ctx, operations.DeleteItemPriceMarkdownPromotionRequest{
        PromotionID: "voluptate",
    }, operations.DeleteItemPriceMarkdownPromotionSecurity{
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

## GetItemPriceMarkdownPromotion

This method returns the complete details of the item price markdown promotion that's indicated by the <b>promotion_id</b> path parameter. <br><br>Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.

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
    res, err := s.ItemPriceMarkdown.GetItemPriceMarkdownPromotion(ctx, operations.GetItemPriceMarkdownPromotionRequest{
        PromotionID: "dolorum",
    }, operations.GetItemPriceMarkdownPromotionSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ItemPriceMarkdown != nil {
        // handle response
    }
}
```

## UpdateItemPriceMarkdownPromotion

This method updates the specified item price markdown promotion with the new configuration that you supply in the payload of the request. Specify the promotion you want to update using the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>When updating a promotion, supply all the fields that you used to configure the original promotion (and not just the fields you are updating). eBay replaces the specified promotion with the values you supply in the update request and if you don't pass a field that currently has a value, the update request fails.  <br><br>The parameters you are allowed to update with this request depend on the status of the promotion you're updating:  <ul><li>DRAFT or SCHEDULED promotions: You can update any of the parameters in these promotions that have not yet started to run, including the <b>discountRules</b>.</li> <li>RUNNING promotions: You can change the <b>endDate</b> and the item's inventory but you cannot change the promotional discount or the promotion's start date.</li> <li>ENDED promotions: Nothing can be changed.</li></ul>

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
    res, err := s.ItemPriceMarkdown.UpdateItemPriceMarkdownPromotion(ctx, operations.UpdateItemPriceMarkdownPromotionRequest{
        ItemPriceMarkdown: &shared.ItemPriceMarkdown{
            ApplyFreeShipping: sdk.Bool(false),
            AutoSelectFutureInventory: sdk.Bool(false),
            BlockPriceIncreaseInItemRevision: sdk.Bool(false),
            Description: sdk.String("deleniti"),
            EndDate: sdk.String("omnis"),
            MarketplaceID: sdk.String("necessitatibus"),
            Name: sdk.String("Emmett Kovacek"),
            Priority: sdk.String("id"),
            PromotionImageURL: sdk.String("saepe"),
            PromotionStatus: sdk.String("eius"),
            SelectedInventoryDiscounts: []shared.SelectedInventoryDiscount{
                shared.SelectedInventoryDiscount{
                    DiscountBenefit: &shared.DiscountBenefit{
                        AmountOffItem: &shared.Amount{
                            Currency: sdk.String("perferendis"),
                            Value: sdk.String("amet"),
                        },
                        AmountOffOrder: &shared.Amount{
                            Currency: sdk.String("optio"),
                            Value: sdk.String("accusamus"),
                        },
                        PercentageOffItem: sdk.String("ad"),
                        PercentageOffOrder: sdk.String("saepe"),
                    },
                    DiscountID: sdk.String("suscipit"),
                    InventoryCriterion: &shared.InventoryCriterion{
                        InventoryCriterionType: sdk.String("deserunt"),
                        InventoryItems: []shared.InventoryItem{
                            shared.InventoryItem{
                                InventoryReferenceID: sdk.String("minima"),
                            },
                            shared.InventoryItem{
                                InventoryReferenceID: sdk.String("repellendus"),
                            },
                            shared.InventoryItem{
                                InventoryReferenceID: sdk.String("totam"),
                            },
                        },
                        ListingIds: []string{
                            "alias",
                            "at",
                            "quaerat",
                        },
                        RuleCriteria: &shared.RuleCriteria{
                            ExcludeInventoryItems: []shared.InventoryItem{
                                shared.InventoryItem{
                                    InventoryReferenceID: sdk.String("vel"),
                                },
                                shared.InventoryItem{
                                    InventoryReferenceID: sdk.String("quod"),
                                },
                            },
                            ExcludeListingIds: []string{
                                "qui",
                                "dolorum",
                                "a",
                                "esse",
                            },
                            MarkupInventoryItems: []shared.InventoryItem{
                                shared.InventoryItem{
                                    InventoryReferenceID: sdk.String("iusto"),
                                },
                                shared.InventoryItem{
                                    InventoryReferenceID: sdk.String("ipsum"),
                                },
                                shared.InventoryItem{
                                    InventoryReferenceID: sdk.String("quisquam"),
                                },
                            },
                            MarkupListingIds: []string{
                                "amet",
                                "tempore",
                                "accusamus",
                                "numquam",
                            },
                            SelectionRules: []shared.SelectionRule{
                                shared.SelectionRule{
                                    Brands: []string{
                                        "sapiente",
                                    },
                                    CategoryIds: []string{
                                        "nihil",
                                        "sit",
                                        "expedita",
                                    },
                                    CategoryScope: sdk.String("neque"),
                                    ListingConditionIds: []string{
                                        "vel",
                                    },
                                    MaxPrice: &shared.Amount{
                                        Currency: sdk.String("libero"),
                                        Value: sdk.String("voluptas"),
                                    },
                                    MinPrice: &shared.Amount{
                                        Currency: sdk.String("deserunt"),
                                        Value: sdk.String("quam"),
                                    },
                                },
                                shared.SelectionRule{
                                    Brands: []string{
                                        "incidunt",
                                    },
                                    CategoryIds: []string{
                                        "cupiditate",
                                    },
                                    CategoryScope: sdk.String("maxime"),
                                    ListingConditionIds: []string{
                                        "soluta",
                                        "dicta",
                                        "laborum",
                                        "totam",
                                    },
                                    MaxPrice: &shared.Amount{
                                        Currency: sdk.String("incidunt"),
                                        Value: sdk.String("aspernatur"),
                                    },
                                    MinPrice: &shared.Amount{
                                        Currency: sdk.String("dolores"),
                                        Value: sdk.String("distinctio"),
                                    },
                                },
                            },
                        },
                    },
                    RuleOrder: sdk.Int(704474),
                },
            },
            StartDate: sdk.String("aliquid"),
        },
        PromotionID: "quam",
    }, operations.UpdateItemPriceMarkdownPromotionSecurity{
        APIAuth: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateItemPriceMarkdownPromotion200ApplicationJSONObject != nil {
        // handle response
    }
}
```
