<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AirtravelCoordinatesRequest;
import org.openapis.openapi.models.operations.AirtravelCoordinatesRequestBody;
import org.openapis.openapi.models.operations.AirtravelCoordinatesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AirtravelCoordinatesRequest req = new AirtravelCoordinatesRequest("application/x-www-form-urlencoded") {{
                requestBody = new AirtravelCoordinatesRequestBody("d95fead6-e8a6-4547-9fb9-7835101a3960", "c60f8db5-7204-4427-960d-27400c38b166", 24.9056, 67.1569, 2, 31.5208, 74.4028, "Economy", "round trip");;
            }};            

            AirtravelCoordinatesResponse res = sdk.airtravelCoordinates.airtravelCoordinates(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->