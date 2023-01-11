<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            QueryForecastRequest req = new QueryForecastRequest() {{
                headers = new QueryForecastHeaders() {{
                    xAmzAlgorithm = "quo";
                    xAmzContentSha256 = "vero";
                    xAmzCredential = "incidunt";
                    xAmzDate = "vel";
                    xAmzSecurityToken = "exercitationem";
                    xAmzSignature = "laudantium";
                    xAmzSignedHeaders = "sed";
                    xAmzTarget = "AmazonForecastRuntime.QueryForecast";
                }};
                request = new QueryForecastRequest() {{
                    endDate = "dolore";
                    filters = new java.util.HashMap<String, String>() {{
                        put("qui", "omnis");
                    }};
                    forecastArn = "modi";
                    nextToken = "occaecati";
                    startDate = "dolor";
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