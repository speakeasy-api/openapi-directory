<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QueryForecastRequest;
import org.openapis.openapi.models.operations.QueryForecastResponse;
import org.openapis.openapi.models.operations.QueryForecastXAmzTargetEnum;
import org.openapis.openapi.models.shared.QueryForecastRequest;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            QueryForecastRequest req = new QueryForecastRequest(                new QueryForecastRequest(                new java.util.HashMap<String, String>() {{
                                                put("distinctio", "quibusdam");
                                                put("unde", "nulla");
                                                put("corrupti", "illum");
                                            }}, "vel") {{
                                endDate = "error";
                                nextToken = "deserunt";
                                startDate = "suscipit";
                            }};, QueryForecastXAmzTargetEnum.AMAZON_FORECAST_RUNTIME_QUERY_FORECAST) {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "debitis";
                xAmzDate = "ipsa";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "tempora";
                xAmzSignedHeaders = "suscipit";
            }};            

            QueryForecastResponse res = sdk.queryForecast(req);

            if (res.queryForecastResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->