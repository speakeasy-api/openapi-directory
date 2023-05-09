# stats

### Available Operations

* [allStatsExampleParameters](#allstatsexampleparameters) - all stats (example parameters)

## allStatsExampleParameters

all stats (example parameters)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllStatsExampleParametersRequest;
import org.openapis.openapi.models.operations.AllStatsExampleParametersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllStatsExampleParametersRequest req = new AllStatsExampleParametersRequest() {{
                playerIds = "237";
                season = "2018";
            }};            

            AllStatsExampleParametersResponse res = sdk.stats.allStatsExampleParameters(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
