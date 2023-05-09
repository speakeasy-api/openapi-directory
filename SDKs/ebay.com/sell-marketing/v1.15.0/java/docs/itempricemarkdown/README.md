# itemPriceMarkdown

### Available Operations

* [createItemPriceMarkdownPromotion](#createitempricemarkdownpromotion) - This method creates an <b>item price markdown promotion</b> (know simply as a "markdown promotion") where a discount amount is applied directly to the items included the promotion. Discounts can be specified as either a monetary amount or a percentage off the standard sales price. eBay highlights promoted items by placing teasers for the items throughout the online sales flows.  <p>Unlike an <a href="/api-docs/sell/marketing/resources/item_promotion/methods/createItemPromotion">item promotion</a>, a markdown promotion does not require the buyer meet a "threshold" before the offer takes effect. With markdown promotions, all the buyer needs to do is purchase the item to receive the promotion benefit.</p>  <p class="tablenote"><b>Important:</b> There are some restrictions for which listings are available for price markdown promotions. For details, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>. <br><br>In addition, we recommend you list items at competitive prices before including them in your markdown promotions. For an extensive list of pricing recommendations, see the <b>Growth</b> tab in Seller Hub.</p> <p>There are two ways to add items to markdown promotions:</p> <ul><li><b>Key-based promotions</b> select items using either the listing IDs or inventory reference IDs of the items you want to promote. Note that if you use inventory reference IDs, you must specify both the <b>inventoryReferenceId</b> and the associated <b>inventoryReferenceType</b> of the item(s) you want to include the promotion.</li>  <li><b>Rule-based promotions</b> select items using a list of eBay category IDs or seller Store category IDs. Rules can further constrain items in a promotion by minimum and maximum prices, brands, and item conditions.</li></ul>  <p>New promotions must be created in either a <code>DRAFT</code> or a <code>SCHEDULED</code> state. Use the DRAFT state when you are initially creating a promotion and you want to be sure it's correctly configured before scheduling it to run. When you create a promotion, the promotion ID is returned in the <b>Location</b> response header. Use this ID to reference the promotion in subsequent requests (such as to schedule a promotion that's in a DRAFT state).</p>  <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/promotions-manager.html">Promotions Manager</a> in the <i>Selling Integration Guide</i> for details and examples showing how to create and manage seller promotions.</p>  <p>Markdown promotions are available on all eBay marketplaces. For more information, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>.</p>
* [deleteItemPriceMarkdownPromotion](#deleteitempricemarkdownpromotion) - This method deletes the item price markdown promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>You can delete any promotion with the exception of those that are currently active (RUNNING). To end a running promotion, call <a href="/api-docs/sell/marketing/resources/item_price_markdown/methods/updateItemPriceMarkdownPromotion">updateItemPriceMarkdownPromotion</a> and adjust the <b>endDate</b> field as appropriate.
* [getItemPriceMarkdownPromotion](#getitempricemarkdownpromotion) - This method returns the complete details of the item price markdown promotion that's indicated by the <b>promotion_id</b> path parameter. <br><br>Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.
* [updateItemPriceMarkdownPromotion](#updateitempricemarkdownpromotion) - This method updates the specified item price markdown promotion with the new configuration that you supply in the payload of the request. Specify the promotion you want to update using the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>When updating a promotion, supply all the fields that you used to configure the original promotion (and not just the fields you are updating). eBay replaces the specified promotion with the values you supply in the update request and if you don't pass a field that currently has a value, the update request fails.  <br><br>The parameters you are allowed to update with this request depend on the status of the promotion you're updating:  <ul><li>DRAFT or SCHEDULED promotions: You can update any of the parameters in these promotions that have not yet started to run, including the <b>discountRules</b>.</li> <li>RUNNING promotions: You can change the <b>endDate</b> and the item's inventory but you cannot change the promotional discount or the promotion's start date.</li> <li>ENDED promotions: Nothing can be changed.</li></ul>

## createItemPriceMarkdownPromotion

This method creates an <b>item price markdown promotion</b> (know simply as a "markdown promotion") where a discount amount is applied directly to the items included the promotion. Discounts can be specified as either a monetary amount or a percentage off the standard sales price. eBay highlights promoted items by placing teasers for the items throughout the online sales flows.  <p>Unlike an <a href="/api-docs/sell/marketing/resources/item_promotion/methods/createItemPromotion">item promotion</a>, a markdown promotion does not require the buyer meet a "threshold" before the offer takes effect. With markdown promotions, all the buyer needs to do is purchase the item to receive the promotion benefit.</p>  <p class="tablenote"><b>Important:</b> There are some restrictions for which listings are available for price markdown promotions. For details, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>. <br><br>In addition, we recommend you list items at competitive prices before including them in your markdown promotions. For an extensive list of pricing recommendations, see the <b>Growth</b> tab in Seller Hub.</p> <p>There are two ways to add items to markdown promotions:</p> <ul><li><b>Key-based promotions</b> select items using either the listing IDs or inventory reference IDs of the items you want to promote. Note that if you use inventory reference IDs, you must specify both the <b>inventoryReferenceId</b> and the associated <b>inventoryReferenceType</b> of the item(s) you want to include the promotion.</li>  <li><b>Rule-based promotions</b> select items using a list of eBay category IDs or seller Store category IDs. Rules can further constrain items in a promotion by minimum and maximum prices, brands, and item conditions.</li></ul>  <p>New promotions must be created in either a <code>DRAFT</code> or a <code>SCHEDULED</code> state. Use the DRAFT state when you are initially creating a promotion and you want to be sure it's correctly configured before scheduling it to run. When you create a promotion, the promotion ID is returned in the <b>Location</b> response header. Use this ID to reference the promotion in subsequent requests (such as to schedule a promotion that's in a DRAFT state).</p>  <p class="tablenote"><b>Tip:</b> Refer to <a href="/api-docs/sell/static/marketing/promotions-manager.html">Promotions Manager</a> in the <i>Selling Integration Guide</i> for details and examples showing how to create and manage seller promotions.</p>  <p>Markdown promotions are available on all eBay marketplaces. For more information, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateItemPriceMarkdownPromotionResponse;
import org.openapis.openapi.models.operations.CreateItemPriceMarkdownPromotionSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.DiscountBenefit;
import org.openapis.openapi.models.shared.InventoryCriterion;
import org.openapis.openapi.models.shared.InventoryItem;
import org.openapis.openapi.models.shared.ItemPriceMarkdown;
import org.openapis.openapi.models.shared.RuleCriteria;
import org.openapis.openapi.models.shared.SelectedInventoryDiscount;
import org.openapis.openapi.models.shared.SelectionRule;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ItemPriceMarkdown req = new ItemPriceMarkdown() {{
                applyFreeShipping = false;
                autoSelectFutureInventory = false;
                blockPriceIncreaseInItemRevision = false;
                description = "earum";
                endDate = "modi";
                marketplaceId = "iste";
                name = "Casey Stracke";
                priority = "libero";
                promotionImageUrl = "delectus";
                promotionStatus = "quaerat";
                selectedInventoryDiscounts = new org.openapis.openapi.models.shared.SelectedInventoryDiscount[]{{
                    add(new SelectedInventoryDiscount() {{
                        discountBenefit = new DiscountBenefit() {{
                            amountOffItem = new Amount() {{
                                currency = "aliquid";
                                value = "dolorem";
                            }};
                            amountOffOrder = new Amount() {{
                                currency = "dolorem";
                                value = "dolor";
                            }};
                            percentageOffItem = "qui";
                            percentageOffOrder = "ipsum";
                        }};
                        discountId = "hic";
                        inventoryCriterion = new InventoryCriterion() {{
                            inventoryCriterionType = "excepturi";
                            inventoryItems = new org.openapis.openapi.models.shared.InventoryItem[]{{
                                add(new InventoryItem() {{
                                    inventoryReferenceId = "voluptate";
                                }}),
                                add(new InventoryItem() {{
                                    inventoryReferenceId = "dignissimos";
                                }}),
                                add(new InventoryItem() {{
                                    inventoryReferenceId = "reiciendis";
                                }}),
                            }};
                            listingIds = new String[]{{
                                add("dolorum"),
                            }};
                            ruleCriteria = new RuleCriteria() {{
                                excludeInventoryItems = new org.openapis.openapi.models.shared.InventoryItem[]{{
                                    add(new InventoryItem() {{
                                        inventoryReferenceId = "veritatis";
                                    }}),
                                    add(new InventoryItem() {{
                                        inventoryReferenceId = "ipsa";
                                    }}),
                                }};
                                excludeListingIds = new String[]{{
                                    add("iure"),
                                }};
                                markupInventoryItems = new org.openapis.openapi.models.shared.InventoryItem[]{{
                                    add(new InventoryItem() {{
                                        inventoryReferenceId = "quaerat";
                                    }}),
                                    add(new InventoryItem() {{
                                        inventoryReferenceId = "accusamus";
                                    }}),
                                }};
                                markupListingIds = new String[]{{
                                    add("voluptatibus"),
                                    add("voluptas"),
                                    add("natus"),
                                }};
                                selectionRules = new org.openapis.openapi.models.shared.SelectionRule[]{{
                                    add(new SelectionRule() {{
                                        brands = new String[]{{
                                            add("sit"),
                                            add("fugiat"),
                                            add("ab"),
                                        }};
                                        categoryIds = new String[]{{
                                            add("dolorum"),
                                            add("iusto"),
                                            add("voluptate"),
                                        }};
                                        categoryScope = "dolorum";
                                        listingConditionIds = new String[]{{
                                            add("omnis"),
                                            add("necessitatibus"),
                                            add("distinctio"),
                                        }};
                                        maxPrice = new Amount() {{
                                            currency = "asperiores";
                                            value = "nihil";
                                        }};
                                        minPrice = new Amount() {{
                                            currency = "ipsum";
                                            value = "voluptate";
                                        }};
                                    }}),
                                }};
                            }};
                        }};
                        ruleOrder = 663078;
                    }}),
                    add(new SelectedInventoryDiscount() {{
                        discountBenefit = new DiscountBenefit() {{
                            amountOffItem = new Amount() {{
                                currency = "saepe";
                                value = "eius";
                            }};
                            amountOffOrder = new Amount() {{
                                currency = "aspernatur";
                                value = "perferendis";
                            }};
                            percentageOffItem = "amet";
                            percentageOffOrder = "optio";
                        }};
                        discountId = "accusamus";
                        inventoryCriterion = new InventoryCriterion() {{
                            inventoryCriterionType = "ad";
                            inventoryItems = new org.openapis.openapi.models.shared.InventoryItem[]{{
                                add(new InventoryItem() {{
                                    inventoryReferenceId = "suscipit";
                                }}),
                                add(new InventoryItem() {{
                                    inventoryReferenceId = "deserunt";
                                }}),
                                add(new InventoryItem() {{
                                    inventoryReferenceId = "provident";
                                }}),
                                add(new InventoryItem() {{
                                    inventoryReferenceId = "minima";
                                }}),
                            }};
                            listingIds = new String[]{{
                                add("totam"),
                                add("similique"),
                                add("alias"),
                                add("at"),
                            }};
                            ruleCriteria = new RuleCriteria() {{
                                excludeInventoryItems = new org.openapis.openapi.models.shared.InventoryItem[]{{
                                    add(new InventoryItem() {{
                                        inventoryReferenceId = "tempora";
                                    }}),
                                    add(new InventoryItem() {{
                                        inventoryReferenceId = "vel";
                                    }}),
                                }};
                                excludeListingIds = new String[]{{
                                    add("officiis"),
                                    add("qui"),
                                    add("dolorum"),
                                    add("a"),
                                }};
                                markupInventoryItems = new org.openapis.openapi.models.shared.InventoryItem[]{{
                                    add(new InventoryItem() {{
                                        inventoryReferenceId = "harum";
                                    }}),
                                    add(new InventoryItem() {{
                                        inventoryReferenceId = "iusto";
                                    }}),
                                }};
                                markupListingIds = new String[]{{
                                    add("quisquam"),
                                }};
                                selectionRules = new org.openapis.openapi.models.shared.SelectionRule[]{{
                                    add(new SelectionRule() {{
                                        brands = new String[]{{
                                            add("tempore"),
                                        }};
                                        categoryIds = new String[]{{
                                            add("numquam"),
                                            add("enim"),
                                            add("dolorem"),
                                            add("sapiente"),
                                        }};
                                        categoryScope = "totam";
                                        listingConditionIds = new String[]{{
                                            add("sit"),
                                            add("expedita"),
                                        }};
                                        maxPrice = new Amount() {{
                                            currency = "neque";
                                            value = "sed";
                                        }};
                                        minPrice = new Amount() {{
                                            currency = "vel";
                                            value = "libero";
                                        }};
                                    }}),
                                    add(new SelectionRule() {{
                                        brands = new String[]{{
                                            add("deserunt"),
                                            add("quam"),
                                        }};
                                        categoryIds = new String[]{{
                                            add("incidunt"),
                                        }};
                                        categoryScope = "qui";
                                        listingConditionIds = new String[]{{
                                            add("maxime"),
                                            add("pariatur"),
                                            add("soluta"),
                                        }};
                                        maxPrice = new Amount() {{
                                            currency = "dicta";
                                            value = "laborum";
                                        }};
                                        minPrice = new Amount() {{
                                            currency = "totam";
                                            value = "incidunt";
                                        }};
                                    }}),
                                    add(new SelectionRule() {{
                                        brands = new String[]{{
                                            add("dolores"),
                                        }};
                                        categoryIds = new String[]{{
                                            add("facilis"),
                                            add("aliquid"),
                                            add("quam"),
                                        }};
                                        categoryScope = "molestias";
                                        listingConditionIds = new String[]{{
                                            add("qui"),
                                            add("neque"),
                                            add("fugit"),
                                            add("magni"),
                                        }};
                                        maxPrice = new Amount() {{
                                            currency = "odio";
                                            value = "sunt";
                                        }};
                                        minPrice = new Amount() {{
                                            currency = "ullam";
                                            value = "nam";
                                        }};
                                    }}),
                                    add(new SelectionRule() {{
                                        brands = new String[]{{
                                            add("voluptatem"),
                                            add("cumque"),
                                            add("soluta"),
                                            add("nobis"),
                                        }};
                                        categoryIds = new String[]{{
                                            add("saepe"),
                                        }};
                                        categoryScope = "ipsum";
                                        listingConditionIds = new String[]{{
                                            add("nobis"),
                                        }};
                                        maxPrice = new Amount() {{
                                            currency = "quos";
                                            value = "tempore";
                                        }};
                                        minPrice = new Amount() {{
                                            currency = "cupiditate";
                                            value = "aperiam";
                                        }};
                                    }}),
                                }};
                            }};
                        }};
                        ruleOrder = 961937;
                    }}),
                    add(new SelectedInventoryDiscount() {{
                        discountBenefit = new DiscountBenefit() {{
                            amountOffItem = new Amount() {{
                                currency = "dolorem";
                                value = "dolore";
                            }};
                            amountOffOrder = new Amount() {{
                                currency = "labore";
                                value = "adipisci";
                            }};
                            percentageOffItem = "dolorum";
                            percentageOffOrder = "architecto";
                        }};
                        discountId = "quae";
                        inventoryCriterion = new InventoryCriterion() {{
                            inventoryCriterionType = "aut";
                            inventoryItems = new org.openapis.openapi.models.shared.InventoryItem[]{{
                                add(new InventoryItem() {{
                                    inventoryReferenceId = "itaque";
                                }}),
                                add(new InventoryItem() {{
                                    inventoryReferenceId = "consequatur";
                                }}),
                                add(new InventoryItem() {{
                                    inventoryReferenceId = "est";
                                }}),
                            }};
                            listingIds = new String[]{{
                                add("porro"),
                                add("doloribus"),
                                add("ut"),
                                add("facilis"),
                            }};
                            ruleCriteria = new RuleCriteria() {{
                                excludeInventoryItems = new org.openapis.openapi.models.shared.InventoryItem[]{{
                                    add(new InventoryItem() {{
                                        inventoryReferenceId = "qui";
                                    }}),
                                    add(new InventoryItem() {{
                                        inventoryReferenceId = "quae";
                                    }}),
                                    add(new InventoryItem() {{
                                        inventoryReferenceId = "laudantium";
                                    }}),
                                }};
                                excludeListingIds = new String[]{{
                                    add("occaecati"),
                                    add("voluptatibus"),
                                }};
                                markupInventoryItems = new org.openapis.openapi.models.shared.InventoryItem[]{{
                                    add(new InventoryItem() {{
                                        inventoryReferenceId = "vero";
                                    }}),
                                    add(new InventoryItem() {{
                                        inventoryReferenceId = "omnis";
                                    }}),
                                    add(new InventoryItem() {{
                                        inventoryReferenceId = "quis";
                                    }}),
                                    add(new InventoryItem() {{
                                        inventoryReferenceId = "ipsum";
                                    }}),
                                }};
                                markupListingIds = new String[]{{
                                    add("voluptate"),
                                    add("consectetur"),
                                    add("vero"),
                                    add("tenetur"),
                                }};
                                selectionRules = new org.openapis.openapi.models.shared.SelectionRule[]{{
                                    add(new SelectionRule() {{
                                        brands = new String[]{{
                                            add("distinctio"),
                                            add("quod"),
                                            add("odio"),
                                            add("similique"),
                                        }};
                                        categoryIds = new String[]{{
                                            add("vero"),
                                            add("ducimus"),
                                            add("dolore"),
                                        }};
                                        categoryScope = "quibusdam";
                                        listingConditionIds = new String[]{{
                                            add("sequi"),
                                            add("natus"),
                                            add("impedit"),
                                            add("aut"),
                                        }};
                                        maxPrice = new Amount() {{
                                            currency = "voluptatibus";
                                            value = "exercitationem";
                                        }};
                                        minPrice = new Amount() {{
                                            currency = "nulla";
                                            value = "fugit";
                                        }};
                                    }}),
                                    add(new SelectionRule() {{
                                        brands = new String[]{{
                                            add("maiores"),
                                            add("doloribus"),
                                            add("iusto"),
                                            add("eligendi"),
                                        }};
                                        categoryIds = new String[]{{
                                            add("alias"),
                                            add("officia"),
                                        }};
                                        categoryScope = "tempora";
                                        listingConditionIds = new String[]{{
                                            add("ea"),
                                            add("aspernatur"),
                                        }};
                                        maxPrice = new Amount() {{
                                            currency = "vel";
                                            value = "possimus";
                                        }};
                                        minPrice = new Amount() {{
                                            currency = "magnam";
                                            value = "ratione";
                                        }};
                                    }}),
                                }};
                            }};
                        }};
                        ruleOrder = 401132;
                    }}),
                }};
                startDate = "laudantium";
            }};            

            CreateItemPriceMarkdownPromotionResponse res = sdk.itemPriceMarkdown.createItemPriceMarkdownPromotion(req, new CreateItemPriceMarkdownPromotionSecurity("dicta") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.createItemPriceMarkdownPromotion201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteItemPriceMarkdownPromotion

This method deletes the item price markdown promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>You can delete any promotion with the exception of those that are currently active (RUNNING). To end a running promotion, call <a href="/api-docs/sell/marketing/resources/item_price_markdown/methods/updateItemPriceMarkdownPromotion">updateItemPriceMarkdownPromotion</a> and adjust the <b>endDate</b> field as appropriate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteItemPriceMarkdownPromotionRequest;
import org.openapis.openapi.models.operations.DeleteItemPriceMarkdownPromotionResponse;
import org.openapis.openapi.models.operations.DeleteItemPriceMarkdownPromotionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteItemPriceMarkdownPromotionRequest req = new DeleteItemPriceMarkdownPromotionRequest("dolor");            

            DeleteItemPriceMarkdownPromotionResponse res = sdk.itemPriceMarkdown.deleteItemPriceMarkdownPromotion(req, new DeleteItemPriceMarkdownPromotionSecurity("maiores") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getItemPriceMarkdownPromotion

This method returns the complete details of the item price markdown promotion that's indicated by the <b>promotion_id</b> path parameter. <br><br>Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemPriceMarkdownPromotionRequest;
import org.openapis.openapi.models.operations.GetItemPriceMarkdownPromotionResponse;
import org.openapis.openapi.models.operations.GetItemPriceMarkdownPromotionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItemPriceMarkdownPromotionRequest req = new GetItemPriceMarkdownPromotionRequest("quasi");            

            GetItemPriceMarkdownPromotionResponse res = sdk.itemPriceMarkdown.getItemPriceMarkdownPromotion(req, new GetItemPriceMarkdownPromotionSecurity("ex") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itemPriceMarkdown != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateItemPriceMarkdownPromotion

This method updates the specified item price markdown promotion with the new configuration that you supply in the payload of the request. Specify the promotion you want to update using the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>When updating a promotion, supply all the fields that you used to configure the original promotion (and not just the fields you are updating). eBay replaces the specified promotion with the values you supply in the update request and if you don't pass a field that currently has a value, the update request fails.  <br><br>The parameters you are allowed to update with this request depend on the status of the promotion you're updating:  <ul><li>DRAFT or SCHEDULED promotions: You can update any of the parameters in these promotions that have not yet started to run, including the <b>discountRules</b>.</li> <li>RUNNING promotions: You can change the <b>endDate</b> and the item's inventory but you cannot change the promotional discount or the promotion's start date.</li> <li>ENDED promotions: Nothing can be changed.</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateItemPriceMarkdownPromotionRequest;
import org.openapis.openapi.models.operations.UpdateItemPriceMarkdownPromotionResponse;
import org.openapis.openapi.models.operations.UpdateItemPriceMarkdownPromotionSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.DiscountBenefit;
import org.openapis.openapi.models.shared.InventoryCriterion;
import org.openapis.openapi.models.shared.InventoryItem;
import org.openapis.openapi.models.shared.ItemPriceMarkdown;
import org.openapis.openapi.models.shared.RuleCriteria;
import org.openapis.openapi.models.shared.SelectedInventoryDiscount;
import org.openapis.openapi.models.shared.SelectionRule;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateItemPriceMarkdownPromotionRequest req = new UpdateItemPriceMarkdownPromotionRequest("nulla") {{
                itemPriceMarkdown = new ItemPriceMarkdown() {{
                    applyFreeShipping = false;
                    autoSelectFutureInventory = false;
                    blockPriceIncreaseInItemRevision = false;
                    description = "excepturi";
                    endDate = "voluptatibus";
                    marketplaceId = "nostrum";
                    name = "Devin Ullrich";
                    priority = "corporis";
                    promotionImageUrl = "veniam";
                    promotionStatus = "aliquid";
                    selectedInventoryDiscounts = new org.openapis.openapi.models.shared.SelectedInventoryDiscount[]{{
                        add(new SelectedInventoryDiscount() {{
                            discountBenefit = new DiscountBenefit() {{
                                amountOffItem = new Amount() {{
                                    currency = "magnam";
                                    value = "ea";
                                }};
                                amountOffOrder = new Amount() {{
                                    currency = "quo";
                                    value = "consectetur";
                                }};
                                percentageOffItem = "recusandae";
                                percentageOffOrder = "aspernatur";
                            }};
                            discountId = "minima";
                            inventoryCriterion = new InventoryCriterion() {{
                                inventoryCriterionType = "eaque";
                                inventoryItems = new org.openapis.openapi.models.shared.InventoryItem[]{{
                                    add(new InventoryItem() {{
                                        inventoryReferenceId = "libero";
                                    }}),
                                    add(new InventoryItem() {{
                                        inventoryReferenceId = "aut";
                                    }}),
                                    add(new InventoryItem() {{
                                        inventoryReferenceId = "aut";
                                    }}),
                                    add(new InventoryItem() {{
                                        inventoryReferenceId = "deleniti";
                                    }}),
                                }};
                                listingIds = new String[]{{
                                    add("aliquam"),
                                    add("fugit"),
                                    add("accusamus"),
                                    add("inventore"),
                                }};
                                ruleCriteria = new RuleCriteria() {{
                                    excludeInventoryItems = new org.openapis.openapi.models.shared.InventoryItem[]{{
                                        add(new InventoryItem() {{
                                            inventoryReferenceId = "et";
                                        }}),
                                        add(new InventoryItem() {{
                                            inventoryReferenceId = "dolorum";
                                        }}),
                                    }};
                                    excludeListingIds = new String[]{{
                                        add("placeat"),
                                        add("velit"),
                                        add("eum"),
                                    }};
                                    markupInventoryItems = new org.openapis.openapi.models.shared.InventoryItem[]{{
                                        add(new InventoryItem() {{
                                            inventoryReferenceId = "nobis";
                                        }}),
                                        add(new InventoryItem() {{
                                            inventoryReferenceId = "quas";
                                        }}),
                                    }};
                                    markupListingIds = new String[]{{
                                        add("nulla"),
                                        add("voluptas"),
                                        add("libero"),
                                        add("quasi"),
                                    }};
                                    selectionRules = new org.openapis.openapi.models.shared.SelectionRule[]{{
                                        add(new SelectionRule() {{
                                            brands = new String[]{{
                                                add("explicabo"),
                                                add("provident"),
                                            }};
                                            categoryIds = new String[]{{
                                                add("molestiae"),
                                            }};
                                            categoryScope = "magnam";
                                            listingConditionIds = new String[]{{
                                                add("eius"),
                                                add("esse"),
                                            }};
                                            maxPrice = new Amount() {{
                                                currency = "esse";
                                                value = "rem";
                                            }};
                                            minPrice = new Amount() {{
                                                currency = "fuga";
                                                value = "reprehenderit";
                                            }};
                                        }}),
                                        add(new SelectionRule() {{
                                            brands = new String[]{{
                                                add("fugiat"),
                                                add("ut"),
                                                add("eum"),
                                            }};
                                            categoryIds = new String[]{{
                                                add("assumenda"),
                                                add("eos"),
                                            }};
                                            categoryScope = "praesentium";
                                            listingConditionIds = new String[]{{
                                                add("veritatis"),
                                                add("ipsa"),
                                                add("id"),
                                                add("quidem"),
                                            }};
                                            maxPrice = new Amount() {{
                                                currency = "neque";
                                                value = "quo";
                                            }};
                                            minPrice = new Amount() {{
                                                currency = "illum";
                                                value = "quo";
                                            }};
                                        }}),
                                    }};
                                }};
                            }};
                            ruleOrder = 681359;
                        }}),
                    }};
                    startDate = "eius";
                }};;
            }};            

            UpdateItemPriceMarkdownPromotionResponse res = sdk.itemPriceMarkdown.updateItemPriceMarkdownPromotion(req, new UpdateItemPriceMarkdownPromotionSecurity("eos") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.updateItemPriceMarkdownPromotion200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
