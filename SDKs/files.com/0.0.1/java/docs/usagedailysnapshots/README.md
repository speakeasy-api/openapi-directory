# usageDailySnapshots

## Overview

Operations about usage_daily_snapshots

### Available Operations

* [getUsageDailySnapshots](#getusagedailysnapshots) - List Usage Daily Snapshots

## getUsageDailySnapshots

List Usage Daily Snapshots

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsageDailySnapshotsRequest;
import org.openapis.openapi.models.operations.GetUsageDailySnapshotsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsageDailySnapshotsRequest req = new GetUsageDailySnapshotsRequest() {{
                cursor = "fuga";
                filter = new java.util.HashMap<String, Object>() {{
                    put("debitis", "voluptatem");
                    put("alias", "deleniti");
                    put("earum", "ex");
                    put("sapiente", "rem");
                }};
                filterGt = new java.util.HashMap<String, Object>() {{
                    put("nemo", "asperiores");
                    put("ratione", "ullam");
                    put("perferendis", "illum");
                    put("totam", "impedit");
                }};
                filterGteq = new java.util.HashMap<String, Object>() {{
                    put("nam", "ipsam");
                    put("culpa", "dolor");
                    put("aliquam", "inventore");
                    put("deleniti", "veritatis");
                }};
                filterLt = new java.util.HashMap<String, Object>() {{
                    put("dolor", "consequatur");
                    put("architecto", "sit");
                }};
                filterLteq = new java.util.HashMap<String, Object>() {{
                    put("fugit", "ab");
                    put("laudantium", "quae");
                }};
                perPage = 222658;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("ipsam", "consequuntur");
                    put("ipsa", "quas");
                    put("eveniet", "impedit");
                    put("officiis", "esse");
                }};
            }};            

            GetUsageDailySnapshotsResponse res = sdk.usageDailySnapshots.getUsageDailySnapshots(req);

            if (res.usageDailySnapshotEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
