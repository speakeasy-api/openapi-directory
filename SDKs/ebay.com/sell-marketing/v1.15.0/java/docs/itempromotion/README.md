# itemPromotion

### Available Operations

* [createItemPromotion](#createitempromotion) - This method creates an <b>item promotion</b>, where the buyer receives a discount when they meet the buying criteria that's set for the promotion. Known here as "threshold promotions", these promotions trigger when a threshold is met.  <p>eBay highlights promoted items by placing teasers for the promoted items throughout the online buyer flows.</p>  <p><i>Discounts</i> are specified as either a monetary amount or a percentage off the standard sales price of a listing, letting you offer deals such as "Buy 1 Get 1" and "Buy $50, get 20% off".</p> <p><i>Volume pricing</i> promotions increase the value of the discount as the buyer increases the quantity they purchase.</p> <p><i>Coded Coupons</i> provide unique codes that a buyer can use during checkout to receive a discount. The seller can specify the number of times a buyer can use the coupon and the maximum amount across all purchases that can be discounted using the coupon. The coupon code can also be made public (appearing on the seller's Offer page, search pages, the item listing, and the checkout page) or private (only on the seller's Offer page, but the seller can include the code in email and social media).</p> <p class="tablenote"><b>Note</b>: Coded Coupons are currently available in the US, UK, DE, FR, IT, ES, and AU marketplaces.</p><p>There are two ways to add items to a threshold promotion:</p>  <ul><li><b>Key-based promotions</b> select items using either the listing IDs or inventory reference IDs of the items you want to promote. Note that if you use inventory reference IDs, you must specify both the <b>inventoryReferenceId</b> and the associated <b>inventoryReferenceType</b> of the item(s) you want to include the promotion.</li> <li><b>Rule-based promotions</b> select items using a list of eBay category IDs or seller Store category IDs. Rules can further constrain items in a promotion by minimum and maximum prices, brands, and item conditions.</li></ul>  <p>You must create a new promotion in either a <code>DRAFT</code> or <code>SCHEDULED</code> state. Use the DRAFT state when you are initially creating a promotion and you want to be sure it's correctly configured before scheduling it to run. When you create a promotion, the promotion ID is returned in the <b>Location</b> response header. Use this ID to reference the promotion in subsequent requests.</p>  <p class="tablenote"><b>Tip:</b> Refer to the <a href="/api-docs/sell/static/marketing/promotions-manager.html">Selling Integration Guide</a> for details and examples showing how to create and manage threshold promotions using the Promotions Manager.</p>  <p>For information on the eBay marketplaces that support item promotions, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>.</p>
* [deleteItemPromotion](#deleteitempromotion) - This method deletes the threshold promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>You can delete any promotion with the exception of those that are currently active (RUNNING). To end a running threshold promotion, call <a href="/api-docs/sell/marketing/resources/item_promotion/methods/updateItemPromotion">updateItemPromotion</a> and adjust the <b>endDate</b> field as appropriate.
* [getItemPromotion](#getitempromotion) - This method returns the complete details of the threshold promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.
* [updateItemPromotion](#updateitempromotion) - This method updates the specified threshold promotion with the new configuration that you supply in the request. Indicate the promotion you want to update using the <b>promotion_id</b> path parameter.  <p>Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.</p>  <p>When updating a promotion, supply all the fields that you used to configure the original promotion (and not just the fields you are updating). eBay replaces the specified promotion with the values you supply in the update request and if you don't pass a field that currently has a value, the update request will fail.</p>  <p>The parameters you are allowed to update with this request depend on the status of the promotion you're updating:  <ul><li>DRAFT or SCHEDULED promotions: You can update any of the parameters in these promotions that have not yet started to run, including the <b>discountRules</b>.</li> <li>RUNNING or PAUSED promotions: You can change the <b>endDate</b> and the item's inventory but you cannot change the promotional discount or the promotion's start date.</li> <li>ENDED promotions: Nothing can be changed.</li></ul> <p class="tablenote"><b>Tip:</b> When updating a <code>RUNNING</code> or <code>PAUSED</code> promotion, set the <b>status</b> field to <code>SCHEDULED</code> for the update request. When the promotion is updated, the previous status (either <code>RUNNING</code> or <code>PAUSED</code>) is retained.</p>

## createItemPromotion

This method creates an <b>item promotion</b>, where the buyer receives a discount when they meet the buying criteria that's set for the promotion. Known here as "threshold promotions", these promotions trigger when a threshold is met.  <p>eBay highlights promoted items by placing teasers for the promoted items throughout the online buyer flows.</p>  <p><i>Discounts</i> are specified as either a monetary amount or a percentage off the standard sales price of a listing, letting you offer deals such as "Buy 1 Get 1" and "Buy $50, get 20% off".</p> <p><i>Volume pricing</i> promotions increase the value of the discount as the buyer increases the quantity they purchase.</p> <p><i>Coded Coupons</i> provide unique codes that a buyer can use during checkout to receive a discount. The seller can specify the number of times a buyer can use the coupon and the maximum amount across all purchases that can be discounted using the coupon. The coupon code can also be made public (appearing on the seller's Offer page, search pages, the item listing, and the checkout page) or private (only on the seller's Offer page, but the seller can include the code in email and social media).</p> <p class="tablenote"><b>Note</b>: Coded Coupons are currently available in the US, UK, DE, FR, IT, ES, and AU marketplaces.</p><p>There are two ways to add items to a threshold promotion:</p>  <ul><li><b>Key-based promotions</b> select items using either the listing IDs or inventory reference IDs of the items you want to promote. Note that if you use inventory reference IDs, you must specify both the <b>inventoryReferenceId</b> and the associated <b>inventoryReferenceType</b> of the item(s) you want to include the promotion.</li> <li><b>Rule-based promotions</b> select items using a list of eBay category IDs or seller Store category IDs. Rules can further constrain items in a promotion by minimum and maximum prices, brands, and item conditions.</li></ul>  <p>You must create a new promotion in either a <code>DRAFT</code> or <code>SCHEDULED</code> state. Use the DRAFT state when you are initially creating a promotion and you want to be sure it's correctly configured before scheduling it to run. When you create a promotion, the promotion ID is returned in the <b>Location</b> response header. Use this ID to reference the promotion in subsequent requests.</p>  <p class="tablenote"><b>Tip:</b> Refer to the <a href="/api-docs/sell/static/marketing/promotions-manager.html">Selling Integration Guide</a> for details and examples showing how to create and manage threshold promotions using the Promotions Manager.</p>  <p>For information on the eBay marketplaces that support item promotions, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateItemPromotionResponse;
import org.openapis.openapi.models.operations.CreateItemPromotionSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.CouponConfiguration;
import org.openapis.openapi.models.shared.DiscountBenefit;
import org.openapis.openapi.models.shared.DiscountRule;
import org.openapis.openapi.models.shared.DiscountSpecification;
import org.openapis.openapi.models.shared.InventoryCriterion;
import org.openapis.openapi.models.shared.InventoryItem;
import org.openapis.openapi.models.shared.ItemPromotion;
import org.openapis.openapi.models.shared.RuleCriteria;
import org.openapis.openapi.models.shared.SelectionRule;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ItemPromotion req = new ItemPromotion() {{
                applyDiscountToSingleItemOnly = false;
                budget = new Amount() {{
                    currency = "voluptas";
                    value = "ab";
                }};;
                couponConfiguration = new CouponConfiguration() {{
                    couponCode = "cupiditate";
                    couponType = "consequatur";
                    maxCouponRedemptionPerUser = 272822;
                }};;
                description = "debitis";
                discountRules = new org.openapis.openapi.models.shared.DiscountRule[]{{
                    add(new DiscountRule() {{
                        discountBenefit = new DiscountBenefit() {{
                            amountOffItem = new Amount() {{
                                currency = "aspernatur";
                                value = "sequi";
                            }};
                            amountOffOrder = new Amount() {{
                                currency = "quo";
                                value = "esse";
                            }};
                            percentageOffItem = "recusandae";
                            percentageOffOrder = "aperiam";
                        }};
                        discountSpecification = new DiscountSpecification() {{
                            forEachAmount = new Amount() {{
                                currency = "distinctio";
                                value = "quod";
                            }};
                            forEachQuantity = 490819;
                            minAmount = new Amount() {{
                                currency = "inventore";
                                value = "nihil";
                            }};
                            minQuantity = 518835;
                            numberOfDiscountedItems = 882710;
                        }};
                        maxDiscountAmount = new Amount() {{
                            currency = "aliquam";
                            value = "odio";
                        }};
                        ruleOrder = 577543;
                    }}),
                    add(new DiscountRule() {{
                        discountBenefit = new DiscountBenefit() {{
                            amountOffItem = new Amount() {{
                                currency = "commodi";
                                value = "sapiente";
                            }};
                            amountOffOrder = new Amount() {{
                                currency = "dolores";
                                value = "deserunt";
                            }};
                            percentageOffItem = "molestiae";
                            percentageOffOrder = "accusantium";
                        }};
                        discountSpecification = new DiscountSpecification() {{
                            forEachAmount = new Amount() {{
                                currency = "porro";
                                value = "eum";
                            }};
                            forEachQuantity = 556429;
                            minAmount = new Amount() {{
                                currency = "praesentium";
                                value = "consequuntur";
                            }};
                            minQuantity = 536178;
                            numberOfDiscountedItems = 143829;
                        }};
                        maxDiscountAmount = new Amount() {{
                            currency = "fuga";
                            value = "mollitia";
                        }};
                        ruleOrder = 277596;
                    }}),
                }};
                endDate = "atque";
                inventoryCriterion = new InventoryCriterion() {{
                    inventoryCriterionType = "explicabo";
                    inventoryItems = new org.openapis.openapi.models.shared.InventoryItem[]{{
                        add(new InventoryItem() {{
                            inventoryReferenceId = "nisi";
                        }}),
                        add(new InventoryItem() {{
                            inventoryReferenceId = "fugit";
                        }}),
                    }};
                    listingIds = new String[]{{
                        add("consequuntur"),
                        add("ratione"),
                        add("explicabo"),
                        add("saepe"),
                    }};
                    ruleCriteria = new RuleCriteria() {{
                        excludeInventoryItems = new org.openapis.openapi.models.shared.InventoryItem[]{{
                            add(new InventoryItem() {{
                                inventoryReferenceId = "atque";
                            }}),
                            add(new InventoryItem() {{
                                inventoryReferenceId = "et";
                            }}),
                            add(new InventoryItem() {{
                                inventoryReferenceId = "esse";
                            }}),
                        }};
                        excludeListingIds = new String[]{{
                            add("accusamus"),
                            add("veritatis"),
                            add("esse"),
                            add("quod"),
                        }};
                        markupInventoryItems = new org.openapis.openapi.models.shared.InventoryItem[]{{
                            add(new InventoryItem() {{
                                inventoryReferenceId = "vero";
                            }}),
                            add(new InventoryItem() {{
                                inventoryReferenceId = "aliquid";
                            }}),
                            add(new InventoryItem() {{
                                inventoryReferenceId = "quasi";
                            }}),
                        }};
                        markupListingIds = new String[]{{
                            add("vel"),
                            add("harum"),
                            add("molestiae"),
                            add("rerum"),
                        }};
                        selectionRules = new org.openapis.openapi.models.shared.SelectionRule[]{{
                            add(new SelectionRule() {{
                                brands = new String[]{{
                                    add("distinctio"),
                                    add("eligendi"),
                                }};
                                categoryIds = new String[]{{
                                    add("culpa"),
                                }};
                                categoryScope = "tempore";
                                listingConditionIds = new String[]{{
                                    add("cumque"),
                                }};
                                maxPrice = new Amount() {{
                                    currency = "consequuntur";
                                    value = "consequatur";
                                }};
                                minPrice = new Amount() {{
                                    currency = "minus";
                                    value = "quaerat";
                                }};
                            }}),
                            add(new SelectionRule() {{
                                brands = new String[]{{
                                    add("consectetur"),
                                    add("esse"),
                                    add("blanditiis"),
                                    add("provident"),
                                }};
                                categoryIds = new String[]{{
                                    add("nulla"),
                                    add("quas"),
                                    add("esse"),
                                    add("quasi"),
                                }};
                                categoryScope = "a";
                                listingConditionIds = new String[]{{
                                    add("sint"),
                                    add("pariatur"),
                                    add("possimus"),
                                }};
                                maxPrice = new Amount() {{
                                    currency = "quia";
                                    value = "eveniet";
                                }};
                                minPrice = new Amount() {{
                                    currency = "asperiores";
                                    value = "facere";
                                }};
                            }}),
                            add(new SelectionRule() {{
                                brands = new String[]{{
                                    add("consequuntur"),
                                }};
                                categoryIds = new String[]{{
                                    add("similique"),
                                }};
                                categoryScope = "culpa";
                                listingConditionIds = new String[]{{
                                    add("tenetur"),
                                    add("quae"),
                                }};
                                maxPrice = new Amount() {{
                                    currency = "earum";
                                    value = "vel";
                                }};
                                minPrice = new Amount() {{
                                    currency = "in";
                                    value = "eius";
                                }};
                            }}),
                        }};
                    }};;
                }};;
                marketplaceId = "libero";
                name = "Gerardo Bartoletti";
                priority = "dicta";
                promotionImageUrl = "ullam";
                promotionStatus = "reprehenderit";
                promotionType = "ullam";
                startDate = "nisi";
            }};            

            CreateItemPromotionResponse res = sdk.itemPromotion.createItemPromotion(req, new CreateItemPromotionSecurity("aut") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.baseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteItemPromotion

This method deletes the threshold promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>You can delete any promotion with the exception of those that are currently active (RUNNING). To end a running threshold promotion, call <a href="/api-docs/sell/marketing/resources/item_promotion/methods/updateItemPromotion">updateItemPromotion</a> and adjust the <b>endDate</b> field as appropriate.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteItemPromotionRequest;
import org.openapis.openapi.models.operations.DeleteItemPromotionResponse;
import org.openapis.openapi.models.operations.DeleteItemPromotionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteItemPromotionRequest req = new DeleteItemPromotionRequest("voluptatum");            

            DeleteItemPromotionResponse res = sdk.itemPromotion.deleteItemPromotion(req, new DeleteItemPromotionSecurity("qui") {{
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

## getItemPromotion

This method returns the complete details of the threshold promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItemPromotionRequest;
import org.openapis.openapi.models.operations.GetItemPromotionResponse;
import org.openapis.openapi.models.operations.GetItemPromotionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItemPromotionRequest req = new GetItemPromotionRequest("quibusdam");            

            GetItemPromotionResponse res = sdk.itemPromotion.getItemPromotion(req, new GetItemPromotionSecurity("ex") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itemPromotionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateItemPromotion

This method updates the specified threshold promotion with the new configuration that you supply in the request. Indicate the promotion you want to update using the <b>promotion_id</b> path parameter.  <p>Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.</p>  <p>When updating a promotion, supply all the fields that you used to configure the original promotion (and not just the fields you are updating). eBay replaces the specified promotion with the values you supply in the update request and if you don't pass a field that currently has a value, the update request will fail.</p>  <p>The parameters you are allowed to update with this request depend on the status of the promotion you're updating:  <ul><li>DRAFT or SCHEDULED promotions: You can update any of the parameters in these promotions that have not yet started to run, including the <b>discountRules</b>.</li> <li>RUNNING or PAUSED promotions: You can change the <b>endDate</b> and the item's inventory but you cannot change the promotional discount or the promotion's start date.</li> <li>ENDED promotions: Nothing can be changed.</li></ul> <p class="tablenote"><b>Tip:</b> When updating a <code>RUNNING</code> or <code>PAUSED</code> promotion, set the <b>status</b> field to <code>SCHEDULED</code> for the update request. When the promotion is updated, the previous status (either <code>RUNNING</code> or <code>PAUSED</code>) is retained.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateItemPromotionRequest;
import org.openapis.openapi.models.operations.UpdateItemPromotionResponse;
import org.openapis.openapi.models.operations.UpdateItemPromotionSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.CouponConfiguration;
import org.openapis.openapi.models.shared.DiscountBenefit;
import org.openapis.openapi.models.shared.DiscountRule;
import org.openapis.openapi.models.shared.DiscountSpecification;
import org.openapis.openapi.models.shared.InventoryCriterion;
import org.openapis.openapi.models.shared.InventoryItem;
import org.openapis.openapi.models.shared.ItemPromotion;
import org.openapis.openapi.models.shared.RuleCriteria;
import org.openapis.openapi.models.shared.SelectionRule;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateItemPromotionRequest req = new UpdateItemPromotionRequest("deleniti") {{
                itemPromotion = new ItemPromotion() {{
                    applyDiscountToSingleItemOnly = false;
                    budget = new Amount() {{
                        currency = "itaque";
                        value = "dolorum";
                    }};;
                    couponConfiguration = new CouponConfiguration() {{
                        couponCode = "architecto";
                        couponType = "omnis";
                        maxCouponRedemptionPerUser = 945302;
                    }};;
                    description = "quasi";
                    discountRules = new org.openapis.openapi.models.shared.DiscountRule[]{{
                        add(new DiscountRule() {{
                            discountBenefit = new DiscountBenefit() {{
                                amountOffItem = new Amount() {{
                                    currency = "et";
                                    value = "voluptate";
                                }};
                                amountOffOrder = new Amount() {{
                                    currency = "ipsa";
                                    value = "minima";
                                }};
                                percentageOffItem = "veritatis";
                                percentageOffOrder = "consectetur";
                            }};
                            discountSpecification = new DiscountSpecification() {{
                                forEachAmount = new Amount() {{
                                    currency = "adipisci";
                                    value = "iste";
                                }};
                                forEachQuantity = 839513;
                                minAmount = new Amount() {{
                                    currency = "accusantium";
                                    value = "rem";
                                }};
                                minQuantity = 15606;
                                numberOfDiscountedItems = 513075;
                            }};
                            maxDiscountAmount = new Amount() {{
                                currency = "eum";
                                value = "mollitia";
                            }};
                            ruleOrder = 68074;
                        }}),
                        add(new DiscountRule() {{
                            discountBenefit = new DiscountBenefit() {{
                                amountOffItem = new Amount() {{
                                    currency = "corrupti";
                                    value = "non";
                                }};
                                amountOffOrder = new Amount() {{
                                    currency = "voluptatem";
                                    value = "dolor";
                                }};
                                percentageOffItem = "occaecati";
                                percentageOffOrder = "numquam";
                            }};
                            discountSpecification = new DiscountSpecification() {{
                                forEachAmount = new Amount() {{
                                    currency = "impedit";
                                    value = "explicabo";
                                }};
                                forEachQuantity = 376226;
                                minAmount = new Amount() {{
                                    currency = "aut";
                                    value = "dignissimos";
                                }};
                                minQuantity = 115484;
                                numberOfDiscountedItems = 981640;
                            }};
                            maxDiscountAmount = new Amount() {{
                                currency = "natus";
                                value = "velit";
                            }};
                            ruleOrder = 974257;
                        }}),
                        add(new DiscountRule() {{
                            discountBenefit = new DiscountBenefit() {{
                                amountOffItem = new Amount() {{
                                    currency = "voluptas";
                                    value = "asperiores";
                                }};
                                amountOffOrder = new Amount() {{
                                    currency = "aperiam";
                                    value = "ea";
                                }};
                                percentageOffItem = "quaerat";
                                percentageOffOrder = "consequuntur";
                            }};
                            discountSpecification = new DiscountSpecification() {{
                                forEachAmount = new Amount() {{
                                    currency = "repellendus";
                                    value = "officia";
                                }};
                                forEachQuantity = 807023;
                                minAmount = new Amount() {{
                                    currency = "dignissimos";
                                    value = "officia";
                                }};
                                minQuantity = 989410;
                                numberOfDiscountedItems = 368102;
                            }};
                            maxDiscountAmount = new Amount() {{
                                currency = "quae";
                                value = "quaerat";
                            }};
                            ruleOrder = 783235;
                        }}),
                        add(new DiscountRule() {{
                            discountBenefit = new DiscountBenefit() {{
                                amountOffItem = new Amount() {{
                                    currency = "quod";
                                    value = "labore";
                                }};
                                amountOffOrder = new Amount() {{
                                    currency = "ab";
                                    value = "adipisci";
                                }};
                                percentageOffItem = "fuga";
                                percentageOffOrder = "id";
                            }};
                            discountSpecification = new DiscountSpecification() {{
                                forEachAmount = new Amount() {{
                                    currency = "suscipit";
                                    value = "velit";
                                }};
                                forEachQuantity = 633931;
                                minAmount = new Amount() {{
                                    currency = "est";
                                    value = "recusandae";
                                }};
                                minQuantity = 517309;
                                numberOfDiscountedItems = 853940;
                            }};
                            maxDiscountAmount = new Amount() {{
                                currency = "vel";
                                value = "ducimus";
                            }};
                            ruleOrder = 554688;
                        }}),
                    }};
                    endDate = "vel";
                    inventoryCriterion = new InventoryCriterion() {{
                        inventoryCriterionType = "labore";
                        inventoryItems = new org.openapis.openapi.models.shared.InventoryItem[]{{
                            add(new InventoryItem() {{
                                inventoryReferenceId = "facilis";
                            }}),
                            add(new InventoryItem() {{
                                inventoryReferenceId = "cum";
                            }}),
                            add(new InventoryItem() {{
                                inventoryReferenceId = "commodi";
                            }}),
                            add(new InventoryItem() {{
                                inventoryReferenceId = "in";
                            }}),
                        }};
                        listingIds = new String[]{{
                            add("reiciendis"),
                            add("assumenda"),
                        }};
                        ruleCriteria = new RuleCriteria() {{
                            excludeInventoryItems = new org.openapis.openapi.models.shared.InventoryItem[]{{
                                add(new InventoryItem() {{
                                    inventoryReferenceId = "recusandae";
                                }}),
                                add(new InventoryItem() {{
                                    inventoryReferenceId = "aliquid";
                                }}),
                            }};
                            excludeListingIds = new String[]{{
                                add("cum"),
                            }};
                            markupInventoryItems = new org.openapis.openapi.models.shared.InventoryItem[]{{
                                add(new InventoryItem() {{
                                    inventoryReferenceId = "in";
                                }}),
                            }};
                            markupListingIds = new String[]{{
                                add("earum"),
                                add("facere"),
                            }};
                            selectionRules = new org.openapis.openapi.models.shared.SelectionRule[]{{
                                add(new SelectionRule() {{
                                    brands = new String[]{{
                                        add("suscipit"),
                                        add("reiciendis"),
                                        add("quidem"),
                                        add("saepe"),
                                    }};
                                    categoryIds = new String[]{{
                                        add("dolore"),
                                        add("sunt"),
                                        add("asperiores"),
                                        add("adipisci"),
                                    }};
                                    categoryScope = "non";
                                    listingConditionIds = new String[]{{
                                        add("beatae"),
                                    }};
                                    maxPrice = new Amount() {{
                                        currency = "dignissimos";
                                        value = "a";
                                    }};
                                    minPrice = new Amount() {{
                                        currency = "debitis";
                                        value = "consectetur";
                                    }};
                                }}),
                                add(new SelectionRule() {{
                                    brands = new String[]{{
                                        add("harum"),
                                        add("laboriosam"),
                                    }};
                                    categoryIds = new String[]{{
                                        add("voluptates"),
                                    }};
                                    categoryScope = "libero";
                                    listingConditionIds = new String[]{{
                                        add("accusamus"),
                                    }};
                                    maxPrice = new Amount() {{
                                        currency = "similique";
                                        value = "tempora";
                                    }};
                                    minPrice = new Amount() {{
                                        currency = "aspernatur";
                                        value = "voluptas";
                                    }};
                                }}),
                            }};
                        }};;
                    }};;
                    marketplaceId = "voluptas";
                    name = "Cathy Rohan";
                    priority = "minus";
                    promotionImageUrl = "dolores";
                    promotionStatus = "blanditiis";
                    promotionType = "in";
                    startDate = "dolore";
                }};;
            }};            

            UpdateItemPromotionResponse res = sdk.itemPromotion.updateItemPromotion(req, new UpdateItemPromotionSecurity("aliquam") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.baseResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
