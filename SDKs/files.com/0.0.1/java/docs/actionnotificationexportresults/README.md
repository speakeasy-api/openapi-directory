# actionNotificationExportResults

## Overview

Operations about action_notification_export_results

### Available Operations

* [getActionNotificationExportResults](#getactionnotificationexportresults) - List Action Notification Export Results

## getActionNotificationExportResults

List Action Notification Export Results

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetActionNotificationExportResultsRequest;
import org.openapis.openapi.models.operations.GetActionNotificationExportResultsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetActionNotificationExportResultsRequest req = new GetActionNotificationExportResultsRequest(602763) {{
                cursor = "nulla";
                perPage = 544883;
                userId = 847252;
            }};            

            GetActionNotificationExportResultsResponse res = sdk.actionNotificationExportResults.getActionNotificationExportResults(req);

            if (res.actionNotificationExportResultEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
