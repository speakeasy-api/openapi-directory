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
                    xAmzAlgorithm = "sit";
                    xAmzContentSha256 = "voluptas";
                    xAmzCredential = "culpa";
                    xAmzDate = "expedita";
                    xAmzSecurityToken = "consequuntur";
                    xAmzSignature = "dolor";
                    xAmzSignedHeaders = "expedita";
                    xAmzTarget = "AmazonForecastRuntime.QueryForecast";
                }};
                request = new QueryForecastRequest() {{
                    endDate = "fugit";
                    filters = new java.util.HashMap<String, String>() {{
                        put("nihil", "rerum");
                    }};
                    forecastArn = "dicta";
                    nextToken = "debitis";
                    startDate = "voluptatum";
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