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

            GetPirateGenerateInsultRequest req = new GetPirateGenerateInsultRequest() {{
                security = new GetPirateGenerateInsultSecurity() {{
                    xFungeneratorsApiSecret = new SchemeXFungeneratorsApiSecret() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                queryParams = new GetPirateGenerateInsultQueryParams() {{
                    limit = 8717895732742165505;
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