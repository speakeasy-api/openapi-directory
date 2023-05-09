# logs

### Available Operations

* [getLogs](#getlogs) - Get logs

## getLogs

Get logs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLogsResponse;
import org.openapis.openapi.models.shared.LogTypeEnum;
import org.openapis.openapi.models.shared.LogsRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.LogsRequestBody req = new LogsRequestBody(LogTypeEnum.SCHEDULER);            

            GetLogsResponse res = sdk.logs.getLogs(req);

            if (res.getLogs200TextPlainBinaryString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
