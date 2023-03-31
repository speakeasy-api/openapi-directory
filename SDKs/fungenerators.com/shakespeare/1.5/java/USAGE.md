<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;

import org.openapis.openapi.models.operations.GetShakespeareGenerateInsultSecurity;
import org.openapis.openapi.models.operations.GetShakespeareGenerateInsultQueryParams;
import org.openapis.openapi.models.operations.GetShakespeareGenerateInsultRequest;
import org.openapis.openapi.models.operations.GetShakespeareGenerateInsultResponse;
import org.openapis.openapi.models.shared.SchemeXFungeneratorsAPISecret;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetShakespeareGenerateInsultRequest req = new GetShakespeareGenerateInsultRequest() {{
                security = new GetShakespeareGenerateInsultSecurity() {{
                    xFungeneratorsApiSecret = new SchemeXFungeneratorsAPISecret() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetShakespeareGenerateInsultQueryParams() {{
                    limit = 548814;
                }};
            }};            

            GetShakespeareGenerateInsultResponse res = sdk.generation.getShakespeareGenerateInsult(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->