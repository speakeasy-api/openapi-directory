# recommendedLocations

### Available Operations

* [getRecommendedLocation](#getrecommendedlocation) - GET recommended destinations

## getRecommendedLocation

GET recommended destinations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecommendedLocationRequest;
import org.openapis.openapi.models.operations.GetRecommendedLocationResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRecommendedLocationRequest req = new GetRecommendedLocationRequest("quibusdam") {{
                destinationCountryCodes = "unde";
                travelerCountryCode = "nulla";
            }};            

            GetRecommendedLocationResponse res = sdk.recommendedLocations.getRecommendedLocation(req);

            if (res.getRecommendedLocation200ApplicationVndAmadeusPlusJsonObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
