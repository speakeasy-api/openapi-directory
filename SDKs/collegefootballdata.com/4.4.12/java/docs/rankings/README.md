# rankings

## Overview

Historical poll rankings

### Available Operations

* [getRankings](#getrankings) - Historical polls and rankings

## getRankings

Poll rankings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRankingsRequest;
import org.openapis.openapi.models.operations.GetRankingsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRankingsRequest req = new GetRankingsRequest(131797L) {{
                seasonType = "deserunt";
                week = 716327L;
            }};            

            GetRankingsResponse res = sdk.rankings.getRankings(req);

            if (res.rankingWeeks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
