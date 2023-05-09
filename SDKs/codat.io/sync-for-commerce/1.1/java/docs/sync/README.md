# sync

## Overview

Initiate a sync of sync for commerce company data into their respective accounting software.

### Available Operations

* [requestSync](#requestsync) - Run a Commerce sync from the last successful sync
* [requestSyncForDateRange](#requestsyncfordaterange) - Run a Commerce sync from a given date range

## requestSync

Run a Commerce sync from the last successful sync up to the date provided (optional), otherwise UtcNow is used.
If there was no previously successful sync, the start date in the config is used.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestSyncRequest;
import org.openapis.openapi.models.operations.RequestSyncResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SyncToLatestArgs;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            RequestSyncRequest req = new RequestSyncRequest("a6699707-4ba4-4469-b6e2-141959890afa") {{
                syncToLatestArgs = new SyncToLatestArgs() {{
                    syncTo = "ad";
                }};;
            }};            

            RequestSyncResponse res = sdk.sync.requestSync(req);

            if (res.syncSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## requestSyncForDateRange

Run a Commerce sync from the specified start date to the specified finish date in the request payload.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RequestSyncForDateRangeRequest;
import org.openapis.openapi.models.operations.RequestSyncForDateRangeResponse;
import org.openapis.openapi.models.shared.DateRange;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            RequestSyncForDateRangeRequest req = new RequestSyncForDateRangeRequest("3e2516fe-4c8b-4711-a5b7-fd2ed028921c") {{
                dateRange = new DateRange() {{
                    finish = "illum";
                    start = "pariatur";
                }};;
            }};            

            RequestSyncForDateRangeResponse res = sdk.sync.requestSyncForDateRange(req);

            if (res.syncSummary != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
