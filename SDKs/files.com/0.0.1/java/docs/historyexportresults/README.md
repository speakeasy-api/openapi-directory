# historyExportResults

## Overview

Operations about history_export_results

### Available Operations

* [getHistoryExportResults](#gethistoryexportresults) - List History Export Results

## getHistoryExportResults

List History Export Results

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHistoryExportResultsRequest;
import org.openapis.openapi.models.operations.GetHistoryExportResultsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHistoryExportResultsRequest req = new GetHistoryExportResultsRequest(288398) {{
                cursor = "ab";
                perPage = 241418;
                userId = 683573;
            }};            

            GetHistoryExportResultsResponse res = sdk.historyExportResults.getHistoryExportResults(req);

            if (res.historyExportResultEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
