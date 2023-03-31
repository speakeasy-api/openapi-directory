<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetPirateGenerateInsultSecurity;
import org.openapis.openapi.models.operations.GetPirateGenerateInsultQueryParams;
import org.openapis.openapi.models.operations.GetPirateGenerateInsultRequest;
import org.openapis.openapi.models.operations.GetPirateGenerateInsultResponse;
import org.openapis.openapi.models.shared.SchemeXFungeneratorsAPISecret;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPirateGenerateInsultRequest req = new GetPirateGenerateInsultRequest() {{
                security = new GetPirateGenerateInsultSecurity() {{
                    xFungeneratorsApiSecret = new SchemeXFungeneratorsAPISecret() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetPirateGenerateInsultQueryParams() {{
                    limit = 548814;
                }};
            }};            

            GetPirateGenerateInsultResponse res = sdk.generation.getPirateGenerateInsult(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->