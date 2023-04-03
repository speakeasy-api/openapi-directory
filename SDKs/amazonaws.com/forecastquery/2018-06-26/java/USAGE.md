<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.QueryForecastXAmzTargetEnum;
import org.openapis.openapi.models.operations.QueryForecastRequest;
import org.openapis.openapi.models.operations.QueryForecastResponse;
import org.openapis.openapi.models.shared.QueryForecastRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            QueryForecastRequest req = new QueryForecastRequest() {{
                queryForecastRequest = new QueryForecastRequest() {{
                    endDate = "corrupti";
                    filters = new java.util.HashMap<String, String>() {{
                        put("distinctio", "quibusdam");
                        put("unde", "nulla");
                        put("corrupti", "illum");
                    }};
                    forecastArn = "vel";
                    nextToken = "error";
                    startDate = "deserunt";
                }};
                xAmzAlgorithm = "suscipit";
                xAmzContentSha256 = "iure";
                xAmzCredential = "magnam";
                xAmzDate = "debitis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "tempora";
                xAmzTarget = "AmazonForecastRuntime.QueryForecast";
            }}            

            QueryForecastResponse res = sdk.queryForecast(req);

            if (res.queryForecastResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->