<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLinesRequest;
import org.openapis.openapi.models.operations.GetLinesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLinesRequest req = new GetLinesRequest() {{
                away = "provident";
                conference = "distinctio";
                gameId = 844266L;
                home = "unde";
                seasonType = "nulla";
                team = "corrupti";
                week = 847252L;
                year = 423655L;
            }};            

            GetLinesResponse res = sdk.betting.getLines(req);

            if (res.gameLines != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->