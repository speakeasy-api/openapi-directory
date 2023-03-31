<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.AirtravelCoordinatesHeaders;
import org.openapis.openapi.models.operations.AirtravelCoordinatesRequestBody;
import org.openapis.openapi.models.operations.AirtravelCoordinatesRequest;
import org.openapis.openapi.models.operations.AirtravelCoordinatesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AirtravelCoordinatesRequest req = new AirtravelCoordinatesRequest() {{
                headers = new AirtravelCoordinatesHeaders() {{
                    contentType = "application/x-www-form-urlencoded";
                }};
                request = new AirtravelCoordinatesRequestBody() {{
                    apiKeyL1 = "d95fead6-e8a6-4547-9fb9-7835101a3960";
                    apiKeyL2 = "c60f8db5-7204-4427-960d-27400c38b166";
                    destinationAirportLatitude = 24.9056;
                    destinationAirportLongitude = 67.1569;
                    numberOfPassengers = 2;
                    originAirportLatitude = 31.5208;
                    originAirportLongitude = 74.4028;
                    travelClass = "Economy";
                    travelMode = "round trip";
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