# promotion

### Available Operations

* [getListingSet](#getlistingset) - This method returns the set of listings associated with the <b>promotion_id</b> specified in the path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <p>The listing details are returned in a paginated set and you can control and results returned using the following query parameters: <b>limit</b>, <b>offset</b>, <b>q</b>, <b>sort</b>, and <b>status</b>.</p>  <ul><li><b>Maximum associated listings returned:</b> 200</li>  <li><b>Default number of listings returned:</b> 200</li></ul>
* [getPromotions](#getpromotions) - This method returns a list of a seller's undeleted promotions. <p>The call returns up to 200 currently-available promotions on the specified marketplace. While the response body does not include the promotion's <b>discountRules</b> or <b>inventoryCriterion</b> containers, it does include the <b>promotionHref</b> (which you can use to retrieve the complete details of the promotion).</p>  <p>Use query parameters to sort and filter the results by the number of promotions to return, the promotion state or type, and the eBay marketplace. You can also supply keywords to limit the response to the promotions that contain that keywords in the title of the promotion.</p> <p><b>Maximum returned:</b> 200</p>
* [pausePromotion](#pausepromotion) - This method pauses a currently-active (RUNNING) threshold promotion and changes the state of the promotion from <code>RUNNING</code> to <code>PAUSED</code>. Pausing a promotion makes the promotion temporarily unavailable to buyers and any currently-incomplete transactions will not receive the promotional offer until the promotion is resumed. Also, promotion teasers are not displayed when a promotion is paused.  <br><br>Pass the ID of the promotion you want to pause using the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of the seller's promotions. <br><br><b>Note:</b> You can only pause threshold promotions (you cannot pause markdown promotions).
* [resumePromotion](#resumepromotion) - This method restarts a threshold promotion that was previously paused and changes the state of the promotion from <code>PAUSED</code> to <code>RUNNING</code>. Only promotions that have been previously paused can be resumed. Resuming a promotion reinstates the promotional teasers and any transactions that were in motion before the promotion was paused will again be eligible for the promotion.  <br><br>Pass the ID of the promotion you want to resume using the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of the seller's promotions.

## getListingSet

This method returns the set of listings associated with the <b>promotion_id</b> specified in the path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of a seller's promotions.  <p>The listing details are returned in a paginated set and you can control and results returned using the following query parameters: <b>limit</b>, <b>offset</b>, <b>q</b>, <b>sort</b>, and <b>status</b>.</p>  <ul><li><b>Maximum associated listings returned:</b> 200</li>  <li><b>Default number of listings returned:</b> 200</li></ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetListingSetRequest;
import org.openapis.openapi.models.operations.GetListingSetResponse;
import org.openapis.openapi.models.operations.GetListingSetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetListingSetRequest req = new GetListingSetRequest("praesentium") {{
                limit = "cum";
                offset = "laboriosam";
                q = "dolorum";
                sort = "voluptatum";
                status = "error";
            }};            

            GetListingSetResponse res = sdk.promotion.getListingSet(req, new GetListingSetSecurity("hic") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.itemsPagedCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPromotions

This method returns a list of a seller's undeleted promotions. <p>The call returns up to 200 currently-available promotions on the specified marketplace. While the response body does not include the promotion's <b>discountRules</b> or <b>inventoryCriterion</b> containers, it does include the <b>promotionHref</b> (which you can use to retrieve the complete details of the promotion).</p>  <p>Use query parameters to sort and filter the results by the number of promotions to return, the promotion state or type, and the eBay marketplace. You can also supply keywords to limit the response to the promotions that contain that keywords in the title of the promotion.</p> <p><b>Maximum returned:</b> 200</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPromotionsRequest;
import org.openapis.openapi.models.operations.GetPromotionsResponse;
import org.openapis.openapi.models.operations.GetPromotionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPromotionsRequest req = new GetPromotionsRequest("expedita") {{
                limit = "debitis";
                offset = "neque";
                promotionStatus = "dolorum";
                promotionType = "nostrum";
                q = "officia";
                sort = "dolorum";
            }};            

            GetPromotionsResponse res = sdk.promotion.getPromotions(req, new GetPromotionsSecurity("corrupti") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.promotionsPagedCollection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pausePromotion

This method pauses a currently-active (RUNNING) threshold promotion and changes the state of the promotion from <code>RUNNING</code> to <code>PAUSED</code>. Pausing a promotion makes the promotion temporarily unavailable to buyers and any currently-incomplete transactions will not receive the promotional offer until the promotion is resumed. Also, promotion teasers are not displayed when a promotion is paused.  <br><br>Pass the ID of the promotion you want to pause using the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of the seller's promotions. <br><br><b>Note:</b> You can only pause threshold promotions (you cannot pause markdown promotions).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PausePromotionRequest;
import org.openapis.openapi.models.operations.PausePromotionResponse;
import org.openapis.openapi.models.operations.PausePromotionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PausePromotionRequest req = new PausePromotionRequest("accusamus");            

            PausePromotionResponse res = sdk.promotion.pausePromotion(req, new PausePromotionSecurity("tempora") {{
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

## resumePromotion

This method restarts a threshold promotion that was previously paused and changes the state of the promotion from <code>PAUSED</code> to <code>RUNNING</code>. Only promotions that have been previously paused can be resumed. Resuming a promotion reinstates the promotional teasers and any transactions that were in motion before the promotion was paused will again be eligible for the promotion.  <br><br>Pass the ID of the promotion you want to resume using the <b>promotion_id</b> path parameter. Call <a href="/api-docs/sell/marketing/resources/promotion/methods/getPromotions">getPromotions</a> to retrieve the IDs of the seller's promotions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResumePromotionRequest;
import org.openapis.openapi.models.operations.ResumePromotionResponse;
import org.openapis.openapi.models.operations.ResumePromotionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ResumePromotionRequest req = new ResumePromotionRequest("atque");            

            ResumePromotionResponse res = sdk.promotion.resumePromotion(req, new ResumePromotionSecurity("fugit") {{
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
