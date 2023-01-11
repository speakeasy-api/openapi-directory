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
                    contentType = "sit";
                }};
                request = new AirtravelCoordinatesRequestBody() {{
                    apiKeyL1 = "voluptas";
                    apiKeyL2 = "culpa";
                    destinationAirportLatitude = 6.200000;
                    destinationAirportLongitude = 96.199997;
                    numberOfPassengers = 6044372234677422456;
                    originAirportLatitude = 88.099998;
                    originAirportLongitude = 68.199997;
                    travelClass = "dicta";
                    travelMode = "debitis";
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