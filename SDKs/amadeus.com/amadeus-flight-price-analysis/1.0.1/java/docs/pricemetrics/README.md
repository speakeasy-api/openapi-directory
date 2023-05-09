# priceMetrics

### Available Operations

* [getItineraryPriceMetrics](#getitinerarypricemetrics) - GET itinerary price metric

## getItineraryPriceMetrics

GET itinerary price metric

### Example Usage

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

            GetItineraryPriceMetricsRequest req = new GetItineraryPriceMetricsRequest("unde", "nulla", "corrupti") {{
                currencyCode = "illum";
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
