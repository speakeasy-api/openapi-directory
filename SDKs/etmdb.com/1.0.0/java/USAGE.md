<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CinemaSearchReadRequest;
import org.openapis.openapi.models.operations.CinemaSearchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CinemaSearchReadRequest req = new CinemaSearchReadRequest("corrupti");            

            CinemaSearchReadResponse res = sdk.cinema.cinemaSearchRead(req);

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