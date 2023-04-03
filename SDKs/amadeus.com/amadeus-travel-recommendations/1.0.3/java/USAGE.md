<!-- Start SDK Example Usage -->
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

            GetRecommendedLocationRequest req = new GetRecommendedLocationRequest() {{
                cityCodes = "corrupti";
                destinationCountryCodes = "provident";
                travelerCountryCode = "distinctio";
            }}            

            GetRecommendedLocationResponse res = sdk.recommendedLocations.getRecommendedLocation(req);

            if (res.getRecommendedLocation200ApplicationVndAmadeusPlusJsonObject.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->