# logs

## Overview

A log represents a request made for a given consumer. Logs include requests made to unified APIs, connectors and the Vault API.

### Available Operations

* [logsAll](#logsall) - Get all consumer request logs

## logsAll

This endpoint includes all consumer request logs.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LogsAllRequest;
import org.openapis.openapi.models.operations.LogsAllResponse;
import org.openapis.openapi.models.operations.LogsAllSecurity;
import org.openapis.openapi.models.shared.LogsFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LogsAllRequest req = new LogsAllRequest("dolorem", "dolor") {{
                cursor = "qui";
                filter = new LogsFilter() {{
                    connectorId = "crm+salesforce";
                    excludeUnifiedApis = "vault,proxy";
                    statusCode = 201;
                }};;
                limit = 218749L;
            }};            

            LogsAllResponse res = sdk.logs.logsAll(req, new LogsAllSecurity("hic") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getLogsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
