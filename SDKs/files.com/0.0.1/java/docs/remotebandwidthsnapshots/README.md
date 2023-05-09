# remoteBandwidthSnapshots

## Overview

Operations about remote_bandwidth_snapshots

### Available Operations

* [getRemoteBandwidthSnapshots](#getremotebandwidthsnapshots) - List Remote Bandwidth Snapshots

## getRemoteBandwidthSnapshots

List Remote Bandwidth Snapshots

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRemoteBandwidthSnapshotsRequest;
import org.openapis.openapi.models.operations.GetRemoteBandwidthSnapshotsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRemoteBandwidthSnapshotsRequest req = new GetRemoteBandwidthSnapshotsRequest() {{
                cursor = "delectus";
                filter = new java.util.HashMap<String, Object>() {{
                    put("perferendis", "est");
                    put("quidem", "reprehenderit");
                    put("facere", "fuga");
                    put("praesentium", "mollitia");
                }};
                filterGt = new java.util.HashMap<String, Object>() {{
                    put("voluptatem", "quisquam");
                    put("repudiandae", "quasi");
                }};
                filterGteq = new java.util.HashMap<String, Object>() {{
                    put("reprehenderit", "asperiores");
                    put("totam", "suscipit");
                    put("quidem", "maxime");
                }};
                filterLt = new java.util.HashMap<String, Object>() {{
                    put("esse", "amet");
                }};
                filterLteq = new java.util.HashMap<String, Object>() {{
                    put("ea", "atque");
                    put("error", "officiis");
                    put("officiis", "accusamus");
                    put("natus", "minima");
                }};
                perPage = 133461;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("maiores", "corrupti");
                    put("at", "error");
                }};
            }};            

            GetRemoteBandwidthSnapshotsResponse res = sdk.remoteBandwidthSnapshots.getRemoteBandwidthSnapshots(req);

            if (res.remoteBandwidthSnapshotEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
