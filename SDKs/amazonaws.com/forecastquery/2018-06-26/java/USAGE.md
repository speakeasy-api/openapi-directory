<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.QueryForecastXAmzTargetEnum;
import org.openapis.openapi.models.operations.QueryForecastHeaders;
import org.openapis.openapi.models.operations.QueryForecastRequest;
import org.openapis.openapi.models.operations.QueryForecastResponse;
import org.openapis.openapi.models.shared.QueryForecastRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            QueryForecastRequest req = new QueryForecastRequest() {{
                headers = new QueryForecastHeaders() {{
                    xAmzAlgorithm = "corrupti";
                    xAmzContentSha256 = "provident";
                    xAmzCredential = "distinctio";
                    xAmzDate = "quibusdam";
                    xAmzSecurityToken = "unde";
                    xAmzSignature = "nulla";
                    xAmzSignedHeaders = "corrupti";
                    xAmzTarget = "AmazonForecastRuntime.QueryForecast";
                }};
                request = new QueryForecastRequest() {{
                    endDate = "illum";
                    filters = new java.util.HashMap<String, String>() {{
                        put("error", "deserunt");
                        put("suscipit", "iure");
                    }};
                    forecastArn = "magnam";
                    nextToken = "debitis";
                    startDate = "ipsa";
                }};
            }};            

            QueryForecastResponse res = sdk.queryForecast(req);

            if (res.queryForecastResponse.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->