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
                    away = "sit";
                    conference = "voluptas";
                    gameId = 6050128673802995827;
                    home = "expedita";
                    seasonType = "consequuntur";
                    team = "dolor";
                    week = 1774932891286980153;
                    year = 6044372234677422456;
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