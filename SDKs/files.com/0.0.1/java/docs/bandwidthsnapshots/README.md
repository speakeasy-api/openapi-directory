# bandwidthSnapshots

## Overview

Operations about bandwidth_snapshots

### Available Operations

* [getBandwidthSnapshots](#getbandwidthsnapshots) - List Bandwidth Snapshots

## getBandwidthSnapshots

List Bandwidth Snapshots

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBandwidthSnapshotsRequest;
import org.openapis.openapi.models.operations.GetBandwidthSnapshotsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBandwidthSnapshotsRequest req = new GetBandwidthSnapshotsRequest() {{
                cursor = "ullam";
                filter = new java.util.HashMap<String, Object>() {{
                    put("nihil", "repellat");
                    put("quibusdam", "sed");
                    put("saepe", "pariatur");
                }};
                filterGt = new java.util.HashMap<String, Object>() {{
                    put("consequuntur", "praesentium");
                }};
                filterGteq = new java.util.HashMap<String, Object>() {{
                    put("magni", "sunt");
                    put("quo", "illum");
                    put("pariatur", "maxime");
                }};
                filterLt = new java.util.HashMap<String, Object>() {{
                    put("excepturi", "odit");
                    put("ea", "accusantium");
                }};
                filterLteq = new java.util.HashMap<String, Object>() {{
                    put("maiores", "quidem");
                }};
                perPage = 373291;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("autem", "nam");
                    put("eaque", "pariatur");
                }};
            }};            

            GetBandwidthSnapshotsResponse res = sdk.bandwidthSnapshots.getBandwidthSnapshots(req);

            if (res.bandwidthSnapshotEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
