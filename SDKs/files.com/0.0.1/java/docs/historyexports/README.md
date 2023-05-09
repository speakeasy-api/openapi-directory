# historyExports

## Overview

Operations about history_exports

### Available Operations

* [getHistoryExportsId](#gethistoryexportsid) - Show History Export
* [postHistoryExports](#posthistoryexports) - Create History Export

## getHistoryExportsId

Show History Export

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetHistoryExportsIdRequest;
import org.openapis.openapi.models.operations.GetHistoryExportsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetHistoryExportsIdRequest req = new GetHistoryExportsIdRequest(662505);            

            GetHistoryExportsIdResponse res = sdk.historyExports.getHistoryExportsId(req);

            if (res.historyExportEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postHistoryExports

Create History Export

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostHistoryExportsRequestBody;
import org.openapis.openapi.models.operations.PostHistoryExportsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostHistoryExportsRequestBody req = new PostHistoryExportsRequestBody() {{
                endAt = OffsetDateTime.parse("2000-01-01T01:00:00Z");
                queryAction = "read";
                queryDestination = "DestFolder";
                queryFailureType = "bad_password";
                queryFileId = "1";
                queryFolder = "Folder";
                queryInterface = "ftp";
                queryIp = "127.0.0.1";
                queryParentId = "1";
                queryPath = "MyFile.txt";
                querySrc = "SrcFolder";
                queryTargetId = "1";
                queryTargetName = "full";
                queryTargetPermission = "full";
                queryTargetPermissionSet = "desktop_app";
                queryTargetPlatform = "windows";
                queryTargetUserId = "1";
                queryTargetUsername = "jerry";
                queryUserId = "1";
                queryUsername = "jerry";
                startAt = OffsetDateTime.parse("2000-01-01T01:00:00Z");
                userId = 380729;
            }};            

            PostHistoryExportsResponse res = sdk.historyExports.postHistoryExports(req);

            if (res.historyExportEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
