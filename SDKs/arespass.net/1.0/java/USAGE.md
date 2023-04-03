<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetAboutRequest;
import org.openapis.openapi.models.operations.GetAboutResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAboutRequest req = new GetAboutRequest() {{
                outputFormat = "corrupti";
            }}            

            GetAboutResponse res = sdk.getAbout(req);

            if (res.about.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->