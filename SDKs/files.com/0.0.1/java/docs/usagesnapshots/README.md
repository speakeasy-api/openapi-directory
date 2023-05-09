# usageSnapshots

## Overview

Operations about usage_snapshots

### Available Operations

* [getUsageSnapshots](#getusagesnapshots) - List Usage Snapshots

## getUsageSnapshots

List Usage Snapshots

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUsageSnapshotsRequest;
import org.openapis.openapi.models.operations.GetUsageSnapshotsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUsageSnapshotsRequest req = new GetUsageSnapshotsRequest() {{
                cursor = "necessitatibus";
                perPage = 153369;
            }};            

            GetUsageSnapshotsResponse res = sdk.usageSnapshots.getUsageSnapshots(req);

            if (res.usageSnapshotEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
