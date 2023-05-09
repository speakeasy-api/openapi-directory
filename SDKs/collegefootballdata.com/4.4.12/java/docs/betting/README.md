# betting

## Overview

Betting lines and data

### Available Operations

* [getLines](#getlines) - Betting lines

## getLines

Closing betting lines

### Example Usage

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
                .setSecurity(new Security("error") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLinesRequest req = new GetLinesRequest() {{
                away = "deserunt";
                conference = "suscipit";
                gameId = 437587L;
                home = "magnam";
                seasonType = "debitis";
                team = "ipsa";
                week = 963663L;
                year = 272656L;
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
