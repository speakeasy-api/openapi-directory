<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            AirtravelCoordinatesRequest req = new AirtravelCoordinatesRequest() {{
                headers = new AirtravelCoordinatesHeaders() {{
                    contentType = "et";
                }};
                request = new AirtravelCoordinatesRequestBody() {{
                    apiKeyL1 = "laudantium";
                    apiKeyL2 = "voluptatibus";
                    destinationAirportLatitude = 16.200001;
                    destinationAirportLongitude = 65.199997;
                    numberOfPassengers = 5496595919472461343;
                    originAirportLatitude = 88.199997;
                    originAirportLongitude = 31.200001;
                    travelClass = "necessitatibus";
                    travelMode = "aspernatur";
                }};
            }};

            AirtravelCoordinatesResponse res = sdk.airtravelCoordinates.airtravelCoordinates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->