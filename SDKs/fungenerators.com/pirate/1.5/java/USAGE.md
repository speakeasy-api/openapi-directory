<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetPirateGenerateInsultSecurity;
import org.openapis.openapi.models.operations.GetPirateGenerateInsultRequest;
import org.openapis.openapi.models.operations.GetPirateGenerateInsultResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPirateGenerateInsultRequest req = new GetPirateGenerateInsultRequest() {{
                limit = 548814;
            }}            

            GetPirateGenerateInsultResponse res = sdk.generation.getPirateGenerateInsult(req, new GetPirateGenerateInsultSecurity() {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->