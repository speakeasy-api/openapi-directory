<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetItineraryPriceMetricsRequest;
import org.openapis.openapi.models.operations.GetItineraryPriceMetricsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetItineraryPriceMetricsRequest req = new GetItineraryPriceMetricsRequest("corrupti", "provident", "distinctio") {{
                currencyCode = "quibusdam";
                oneWay = false;
            }};            

            GetItineraryPriceMetricsResponse res = sdk.priceMetrics.getItineraryPriceMetrics(req);

            if (res.getItineraryPriceMetrics200ApplicationVndAmadeusPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->