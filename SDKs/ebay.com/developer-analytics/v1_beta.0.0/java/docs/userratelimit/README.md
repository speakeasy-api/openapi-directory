# userRateLimit

### Available Operations

* [getUserRateLimits](#getuserratelimits) - This method retrieves the call limit and utilization data for an application user. The call-limit data is returned for all RESTful APIs and the legacy Trading API that limit calls on a per-user basis.  <br><br>The response from <b>getUserRateLimits</b> includes a list of the applicable resources and the "call limit", or quota, that is set for each resource. In addition to quota information, the response also includes the number of remaining calls available before the limit is reached, the time remaining before the quota resets, and the length of the "time window" to which the quota applies.  <br><br>By default, this method returns utilization data for all RESTful APIs resources and the legacy Trading API calls that limit request access by user. Use the <b>api_name</b> and <b>api_context</b> query parameters to filter the response to only the desired APIs.  <br><br>For more on call limits, see <a href="https://developer.ebay.com/support/app-check " target="_blank">Compatible Application Check</a>.

## getUserRateLimits

This method retrieves the call limit and utilization data for an application user. The call-limit data is returned for all RESTful APIs and the legacy Trading API that limit calls on a per-user basis.  <br><br>The response from <b>getUserRateLimits</b> includes a list of the applicable resources and the "call limit", or quota, that is set for each resource. In addition to quota information, the response also includes the number of remaining calls available before the limit is reached, the time remaining before the quota resets, and the length of the "time window" to which the quota applies.  <br><br>By default, this method returns utilization data for all RESTful APIs resources and the legacy Trading API calls that limit request access by user. Use the <b>api_name</b> and <b>api_context</b> query parameters to filter the response to only the desired APIs.  <br><br>For more on call limits, see <a href="https://developer.ebay.com/support/app-check " target="_blank">Compatible Application Check</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserRateLimitsRequest;
import org.openapis.openapi.models.operations.GetUserRateLimitsResponse;
import org.openapis.openapi.models.operations.GetUserRateLimitsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserRateLimitsRequest req = new GetUserRateLimitsRequest() {{
                apiContext = "corrupti";
                apiName = "illum";
            }};            

            GetUserRateLimitsResponse res = sdk.userRateLimit.getUserRateLimits(req, new GetUserRateLimitsSecurity("vel") {{
                apiAuth = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.rateLimitsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
