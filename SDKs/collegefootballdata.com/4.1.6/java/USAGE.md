<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    apiKeyAuth = new SchemeApiKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            GetLinesRequest req = new GetLinesRequest() {{
                queryParams = new GetLinesQueryParams() {{
                    away = "quia";
                    conference = "blanditiis";
                    gameId = 501002963790601971;
                    home = "expedita";
                    seasonType = "quo";
                    team = "id";
                    week = 319022383954109970;
                    year = 3325329196161324374;
                }};
            }};

            GetLinesResponse res = sdk.betting.getLines(req);

            if (res.gameLines.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->