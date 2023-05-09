# reviewing

### Available Operations

* [postConfirmThirdParty](#postconfirmthirdparty) - Confirm a payout
* [postDeclineThirdParty](#postdeclinethirdparty) - Cancel a payout

## postConfirmThirdParty

Confirms a previously submitted payout.

To cancel a payout, use the `/declineThirdParty` endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConfirmThirdPartyResponse;
import org.openapis.openapi.models.operations.PostConfirmThirdPartySecurity;
import org.openapis.openapi.models.shared.ModifyRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ModifyRequest req = new ModifyRequest("dicta", "magnam") {{
                additionalData = new java.util.HashMap<String, String>() {{
                    put("facere", "ea");
                    put("aliquid", "laborum");
                    put("accusamus", "non");
                    put("occaecati", "enim");
                }};
            }};            

            PostConfirmThirdPartyResponse res = sdk.reviewing.postConfirmThirdParty(req, new PostConfirmThirdPartySecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.modifyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDeclineThirdParty

Cancels a previously submitted payout.

To confirm and send a payout, use the `/confirmThirdParty` endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDeclineThirdPartyResponse;
import org.openapis.openapi.models.operations.PostDeclineThirdPartySecurity;
import org.openapis.openapi.models.shared.ModifyRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.ModifyRequest req = new ModifyRequest("accusamus", "delectus") {{
                additionalData = new java.util.HashMap<String, String>() {{
                    put("provident", "nam");
                    put("id", "blanditiis");
                    put("deleniti", "sapiente");
                }};
            }};            

            PostDeclineThirdPartyResponse res = sdk.reviewing.postDeclineThirdParty(req, new PostDeclineThirdPartySecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.modifyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
