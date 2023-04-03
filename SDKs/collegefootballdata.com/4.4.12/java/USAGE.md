<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.GetLinesRequest;
import org.openapis.openapi.models.operations.GetLinesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLinesRequest req = new GetLinesRequest() {{
                away = "corrupti";
                conference = "provident";
                gameId = 715190;
                home = "quibusdam";
                seasonType = "unde";
                team = "nulla";
                week = 544883;
                year = 847252;
            }}            

            GetLinesResponse res = sdk.betting.getLines(req);

            if (res.gameLines.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->