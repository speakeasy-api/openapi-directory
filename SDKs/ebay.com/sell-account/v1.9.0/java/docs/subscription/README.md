# subscription

### Available Operations

* [getSubscription](#getsubscription) - This method retrieves a list of subscriptions associated with the seller account.

## getSubscription

This method retrieves a list of subscriptions associated with the seller account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSubscriptionRequest;
import org.openapis.openapi.models.operations.GetSubscriptionResponse;
import org.openapis.openapi.models.operations.GetSubscriptionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetSubscriptionRequest req = new GetSubscriptionRequest() {{
                continuationToken = "est";
                limit = "repellendus";
            }};            

            GetSubscriptionResponse res = sdk.subscription.getSubscription(req, new GetSubscriptionSecurity("porro") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.subscriptionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
