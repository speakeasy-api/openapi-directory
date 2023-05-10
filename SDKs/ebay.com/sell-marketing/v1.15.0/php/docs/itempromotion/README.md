# itemPromotion

### Available Operations

* [createItemPromotion](#createitempromotion) - This method creates an <b>item promotion</b>, where the buyer receives a discount when they meet the buying criteria that's set for the promotion. Known here as "threshold promotions", these promotions trigger when a threshold is met.  <p>eBay highlights promoted items by placing teasers for the promoted items throughout the online buyer flows.</p>  <p><i>Discounts</i> are specified as either a monetary amount or a percentage off the standard sales price of a listing, letting you offer deals such as "Buy 1 Get 1" and "Buy $50, get 20% off".</p> <p><i>Volume pricing</i> promotions increase the value of the discount as the buyer increases the quantity they purchase.</p> <p><i>Coded Coupons</i> provide unique codes that a buyer can use during checkout to receive a discount. The seller can specify the number of times a buyer can use the coupon and the maximum amount across all purchases that can be discounted using the coupon. The coupon code can also be made public (appearing on the seller's Offer page, search pages, the item listing, and the checkout page) or private (only on the seller's Offer page, but the seller can include the code in email and social media).</p> <p class="tablenote"><b>Note</b>: Coded Coupons are currently available in the US, UK, DE, FR, IT, ES, and AU marketplaces.</p><p>There are two ways to add items to a threshold promotion:</p>  <ul><li><b>Key-based promotions</b> select items using either the listing IDs or inventory reference IDs of the items you want to promote. Note that if you use inventory reference IDs, you must specify both the <b>inventoryReferenceId</b> and the associated <b>inventoryReferenceType</b> of the item(s) you want to include the promotion.</li> <li><b>Rule-based promotions</b> select items using a list of eBay category IDs or seller Store category IDs. Rules can further constrain items in a promotion by minimum and maximum prices, brands, and item conditions.</li></ul>  <p>You must create a new promotion in either a <code>DRAFT</code> or <code>SCHEDULED</code> state. Use the DRAFT state when you are initially creating a promotion and you want to be sure it's correctly configured before scheduling it to run. When you create a promotion, the promotion ID is returned in the <b>Location</b> response header. Use this ID to reference the promotion in subsequent requests.</p>  <p class="tablenote"><b>Tip:</b> Refer to the <a href="/api-docs/sell/static/marketing/promotions-manager.html">Selling Integration Guide</a> for details and examples showing how to create and manage threshold promotions using the Promotions Manager.</p>  <p>For information on the eBay marketplaces that support item promotions, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>.</p>
* [deleteItemPromotion](#deleteitempromotion) - This method deletes the threshold promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>You can delete any promotion with the exception of those that are currently active (RUNNING). To end a running threshold promotion, call <a href="/api-docs/sell/marketing/resources/item_promotion/methods/updateItemPromotion">updateItemPromotion</a> and adjust the <b>endDate</b> field as appropriate.
* [getItemPromotion](#getitempromotion) - This method returns the complete details of the threshold promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.
* [updateItemPromotion](#updateitempromotion) - This method updates the specified threshold promotion with the new configuration that you supply in the request. Indicate the promotion you want to update using the <b>promotion_id</b> path parameter.  <p>Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.</p>  <p>When updating a promotion, supply all the fields that you used to configure the original promotion (and not just the fields you are updating). eBay replaces the specified promotion with the values you supply in the update request and if you don't pass a field that currently has a value, the update request will fail.</p>  <p>The parameters you are allowed to update with this request depend on the status of the promotion you're updating:  <ul><li>DRAFT or SCHEDULED promotions: You can update any of the parameters in these promotions that have not yet started to run, including the <b>discountRules</b>.</li> <li>RUNNING or PAUSED promotions: You can change the <b>endDate</b> and the item's inventory but you cannot change the promotional discount or the promotion's start date.</li> <li>ENDED promotions: Nothing can be changed.</li></ul> <p class="tablenote"><b>Tip:</b> When updating a <code>RUNNING</code> or <code>PAUSED</code> promotion, set the <b>status</b> field to <code>SCHEDULED</code> for the update request. When the promotion is updated, the previous status (either <code>RUNNING</code> or <code>PAUSED</code>) is retained.</p>

## createItemPromotion

This method creates an <b>item promotion</b>, where the buyer receives a discount when they meet the buying criteria that's set for the promotion. Known here as "threshold promotions", these promotions trigger when a threshold is met.  <p>eBay highlights promoted items by placing teasers for the promoted items throughout the online buyer flows.</p>  <p><i>Discounts</i> are specified as either a monetary amount or a percentage off the standard sales price of a listing, letting you offer deals such as "Buy 1 Get 1" and "Buy $50, get 20% off".</p> <p><i>Volume pricing</i> promotions increase the value of the discount as the buyer increases the quantity they purchase.</p> <p><i>Coded Coupons</i> provide unique codes that a buyer can use during checkout to receive a discount. The seller can specify the number of times a buyer can use the coupon and the maximum amount across all purchases that can be discounted using the coupon. The coupon code can also be made public (appearing on the seller's Offer page, search pages, the item listing, and the checkout page) or private (only on the seller's Offer page, but the seller can include the code in email and social media).</p> <p class="tablenote"><b>Note</b>: Coded Coupons are currently available in the US, UK, DE, FR, IT, ES, and AU marketplaces.</p><p>There are two ways to add items to a threshold promotion:</p>  <ul><li><b>Key-based promotions</b> select items using either the listing IDs or inventory reference IDs of the items you want to promote. Note that if you use inventory reference IDs, you must specify both the <b>inventoryReferenceId</b> and the associated <b>inventoryReferenceType</b> of the item(s) you want to include the promotion.</li> <li><b>Rule-based promotions</b> select items using a list of eBay category IDs or seller Store category IDs. Rules can further constrain items in a promotion by minimum and maximum prices, brands, and item conditions.</li></ul>  <p>You must create a new promotion in either a <code>DRAFT</code> or <code>SCHEDULED</code> state. Use the DRAFT state when you are initially creating a promotion and you want to be sure it's correctly configured before scheduling it to run. When you create a promotion, the promotion ID is returned in the <b>Location</b> response header. Use this ID to reference the promotion in subsequent requests.</p>  <p class="tablenote"><b>Tip:</b> Refer to the <a href="/api-docs/sell/static/marketing/promotions-manager.html">Selling Integration Guide</a> for details and examples showing how to create and manage threshold promotions using the Promotions Manager.</p>  <p>For information on the eBay marketplaces that support item promotions, see <a href="/api-docs/sell/marketing/static/overview.html#PM-requirements">Promotions Manager requirements and restrictions</a>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\ItemPromotion;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\CouponConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DiscountRule;
use \OpenAPI\OpenAPI\Models\Shared\DiscountBenefit;
use \OpenAPI\OpenAPI\Models\Shared\DiscountSpecification;
use \OpenAPI\OpenAPI\Models\Shared\InventoryCriterion;
use \OpenAPI\OpenAPI\Models\Shared\InventoryItem;
use \OpenAPI\OpenAPI\Models\Shared\RuleCriteria;
use \OpenAPI\OpenAPI\Models\Shared\SelectionRule;
use \OpenAPI\OpenAPI\Models\Operations\CreateItemPromotionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ItemPromotion();
    $request->applyDiscountToSingleItemOnly = false;
    $request->budget = new Amount();
    $request->budget->currency = 'magni';
    $request->budget->value = 'assumenda';
    $request->couponConfiguration = new CouponConfiguration();
    $request->couponConfiguration->couponCode = 'ipsam';
    $request->couponConfiguration->couponType = 'alias';
    $request->couponConfiguration->maxCouponRedemptionPerUser = 146441;
    $request->description = 'dolorum';
    $request->discountRules = [
        new DiscountRule(),
        new DiscountRule(),
        new DiscountRule(),
    ];
    $request->endDate = 'tempora';
    $request->inventoryCriterion = new InventoryCriterion();
    $request->inventoryCriterion->inventoryCriterionType = 'facilis';
    $request->inventoryCriterion->inventoryItems = [
        new InventoryItem(),
        new InventoryItem(),
        new InventoryItem(),
    ];
    $request->inventoryCriterion->listingIds = [
        'delectus',
        'eum',
    ];
    $request->inventoryCriterion->ruleCriteria = new RuleCriteria();
    $request->inventoryCriterion->ruleCriteria->excludeInventoryItems = [
        new InventoryItem(),
    ];
    $request->inventoryCriterion->ruleCriteria->excludeListingIds = [
        'sint',
        'aliquid',
        'provident',
        'necessitatibus',
    ];
    $request->inventoryCriterion->ruleCriteria->markupInventoryItems = [
        new InventoryItem(),
        new InventoryItem(),
        new InventoryItem(),
    ];
    $request->inventoryCriterion->ruleCriteria->markupListingIds = [
        'dolor',
        'debitis',
        'a',
    ];
    $request->inventoryCriterion->ruleCriteria->selectionRules = [
        new SelectionRule(),
        new SelectionRule(),
        new SelectionRule(),
    ];
    $request->marketplaceId = 'in';
    $request->name = 'Angel Wolff II';
    $request->priority = 'cumque';
    $request->promotionImageUrl = 'facere';
    $request->promotionStatus = 'ea';
    $request->promotionType = 'aliquid';
    $request->startDate = 'laborum';

    $requestSecurity = new CreateItemPromotionSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itemPromotion->createItemPromotion($request, $requestSecurity);

    if ($response->baseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteItemPromotion

This method deletes the threshold promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <br><br>You can delete any promotion with the exception of those that are currently active (RUNNING). To end a running threshold promotion, call <a href="/api-docs/sell/marketing/resources/item_promotion/methods/updateItemPromotion">updateItemPromotion</a> and adjust the <b>endDate</b> field as appropriate.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteItemPromotionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteItemPromotionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteItemPromotionRequest();
    $request->promotionId = 'accusamus';

    $requestSecurity = new DeleteItemPromotionSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itemPromotion->deleteItemPromotion($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemPromotion

This method returns the complete details of the threshold promotion specified by the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItemPromotionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetItemPromotionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemPromotionRequest();
    $request->promotionId = 'non';

    $requestSecurity = new GetItemPromotionSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itemPromotion->getItemPromotion($request, $requestSecurity);

    if ($response->itemPromotionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateItemPromotion

This method updates the specified threshold promotion with the new configuration that you supply in the request. Indicate the promotion you want to update using the <b>promotion_id</b> path parameter.  <p>Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.</p>  <p>When updating a promotion, supply all the fields that you used to configure the original promotion (and not just the fields you are updating). eBay replaces the specified promotion with the values you supply in the update request and if you don't pass a field that currently has a value, the update request will fail.</p>  <p>The parameters you are allowed to update with this request depend on the status of the promotion you're updating:  <ul><li>DRAFT or SCHEDULED promotions: You can update any of the parameters in these promotions that have not yet started to run, including the <b>discountRules</b>.</li> <li>RUNNING or PAUSED promotions: You can change the <b>endDate</b> and the item's inventory but you cannot change the promotional discount or the promotion's start date.</li> <li>ENDED promotions: Nothing can be changed.</li></ul> <p class="tablenote"><b>Tip:</b> When updating a <code>RUNNING</code> or <code>PAUSED</code> promotion, set the <b>status</b> field to <code>SCHEDULED</code> for the update request. When the promotion is updated, the previous status (either <code>RUNNING</code> or <code>PAUSED</code>) is retained.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateItemPromotionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItemPromotion;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\CouponConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\DiscountRule;
use \OpenAPI\OpenAPI\Models\Shared\DiscountBenefit;
use \OpenAPI\OpenAPI\Models\Shared\DiscountSpecification;
use \OpenAPI\OpenAPI\Models\Shared\InventoryCriterion;
use \OpenAPI\OpenAPI\Models\Shared\InventoryItem;
use \OpenAPI\OpenAPI\Models\Shared\RuleCriteria;
use \OpenAPI\OpenAPI\Models\Shared\SelectionRule;
use \OpenAPI\OpenAPI\Models\Operations\UpdateItemPromotionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateItemPromotionRequest();
    $request->itemPromotion = new ItemPromotion();
    $request->itemPromotion->applyDiscountToSingleItemOnly = false;
    $request->itemPromotion->budget = new Amount();
    $request->itemPromotion->budget->currency = 'occaecati';
    $request->itemPromotion->budget->value = 'enim';
    $request->itemPromotion->couponConfiguration = new CouponConfiguration();
    $request->itemPromotion->couponConfiguration->couponCode = 'accusamus';
    $request->itemPromotion->couponConfiguration->couponType = 'delectus';
    $request->itemPromotion->couponConfiguration->maxCouponRedemptionPerUser = 692532;
    $request->itemPromotion->description = 'provident';
    $request->itemPromotion->discountRules = [
        new DiscountRule(),
        new DiscountRule(),
        new DiscountRule(),
    ];
    $request->itemPromotion->endDate = 'id';
    $request->itemPromotion->inventoryCriterion = new InventoryCriterion();
    $request->itemPromotion->inventoryCriterion->inventoryCriterionType = 'blanditiis';
    $request->itemPromotion->inventoryCriterion->inventoryItems = [
        new InventoryItem(),
        new InventoryItem(),
        new InventoryItem(),
    ];
    $request->itemPromotion->inventoryCriterion->listingIds = [
        'amet',
        'deserunt',
        'nisi',
        'vel',
    ];
    $request->itemPromotion->inventoryCriterion->ruleCriteria = new RuleCriteria();
    $request->itemPromotion->inventoryCriterion->ruleCriteria->excludeInventoryItems = [
        new InventoryItem(),
        new InventoryItem(),
        new InventoryItem(),
    ];
    $request->itemPromotion->inventoryCriterion->ruleCriteria->excludeListingIds = [
        'molestiae',
        'perferendis',
        'nihil',
    ];
    $request->itemPromotion->inventoryCriterion->ruleCriteria->markupInventoryItems = [
        new InventoryItem(),
        new InventoryItem(),
    ];
    $request->itemPromotion->inventoryCriterion->ruleCriteria->markupListingIds = [
        'id',
        'labore',
        'labore',
    ];
    $request->itemPromotion->inventoryCriterion->ruleCriteria->selectionRules = [
        new SelectionRule(),
        new SelectionRule(),
    ];
    $request->itemPromotion->marketplaceId = 'natus';
    $request->itemPromotion->name = 'Duane Thiel II';
    $request->itemPromotion->priority = 'et';
    $request->itemPromotion->promotionImageUrl = 'excepturi';
    $request->itemPromotion->promotionStatus = 'ullam';
    $request->itemPromotion->promotionType = 'provident';
    $request->itemPromotion->startDate = 'quos';
    $request->promotionId = 'sint';

    $requestSecurity = new UpdateItemPromotionSecurity();
    $requestSecurity->apiAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itemPromotion->updateItemPromotion($request, $requestSecurity);

    if ($response->baseResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
