<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetNhArtQueryParams;
import org.openapis.openapi.models.operations.GetNhArtHeaders;
import org.openapis.openapi.models.operations.GetNhArtRequest;
import org.openapis.openapi.models.operations.GetNhArtResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetNhArtRequest req = new GetNhArtRequest() {{
                queryParams = new GetNhArtQueryParams() {{
                    excludedetails = "corrupti";
                    hasfake = "provident";
                    thumbsize = 715190;
                }};
                headers = new GetNhArtHeaders() {{
                    acceptVersion = "quibusdam";
                    xApiKey = "9d8d69a6-74e0-4f46-bcc8-796ed151a05d";
                }};
            }};            

            GetNhArtResponse res = sdk.getNhArt(req);

            if (res.nhArtworks.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->