# stats

### Available Operations

* [getStats](#getstats) - Retrieve usage statistics for an application
* [getTime](#gettime) - Get the service time

## getStats

The Ably system can be queried to obtain usage statistics for a given application, and results are provided aggregated across all channels in use in the application in the specified period. Stats may be used to track usage against account quotas.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStatsRequest;
import org.openapis.openapi.models.operations.GetStatsResponse;
import org.openapis.openapi.models.operations.GetStatsUnitEnum;
import org.openapis.openapi.models.shared.FilterDirectionEnum;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("facilis", "cupiditate") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetStatsRequest req = new GetStatsRequest() {{
                xAblyVersion = "qui";
                direction = FilterDirectionEnum.FORWARDS;
                end = "laudantium";
                format = ResponseFormatEnum.JSONP;
                limit = 580447L;
                start = "voluptatibus";
                unit = GetStatsUnitEnum.MONTH;
            }};            

            GetStatsResponse res = sdk.stats.getStats(req);

            if (res.getStats2XXApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTime

This returns the service time in milliseconds since the epoch.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTimeRequest;
import org.openapis.openapi.models.operations.GetTimeResponse;
import org.openapis.openapi.models.shared.ResponseFormatEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    basicAuth = new SchemeBasicAuth("vero", "omnis") {{
                        password = "YOUR_PASSWORD_HERE";
                        username = "YOUR_USERNAME_HERE";
                    }};
                }})
                .build();

            GetTimeRequest req = new GetTimeRequest() {{
                xAblyVersion = "quis";
                format = ResponseFormatEnum.JSON;
            }};            

            GetTimeResponse res = sdk.stats.getTime(req);

            if (res.getTime2XXApplicationJSONIntegers != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
