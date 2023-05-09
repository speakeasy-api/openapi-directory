<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNhArtRequest;
import org.openapis.openapi.models.operations.GetNhArtResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhArtRequest req = new GetNhArtRequest("corrupti", "9bd9d8d6-9a67-44e0-b467-cc8796ed151a") {{
                excludedetails = "perferendis";
                hasfake = "ipsam";
                thumbsize = 832620L;
            }};            

            GetNhArtResponse res = sdk.getNhArt(req);

            if (res.nhArtworks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->