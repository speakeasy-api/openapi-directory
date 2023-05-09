# auditLogs

## Overview

The Audit Logs API endpoints allow you to query audit log events across a
namespace.

For more information, see [Audit Log](https://docs.docker.com/docker-hub/audit-log/)


### Available Operations

* [auditLogsGetAuditActions](#auditlogsgetauditactions) - Returns list of audit log actions.
* [auditLogsGetAuditLogs](#auditlogsgetauditlogs) - Returns list of audit log  events.

## auditLogsGetAuditActions

Get audit log actions for a namespace to be used as a filter for querying audit events.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuditLogsGetAuditActionsRequest;
import org.openapis.openapi.models.operations.AuditLogsGetAuditActionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuditLogsGetAuditActionsRequest req = new AuditLogsGetAuditActionsRequest("deserunt");            

            AuditLogsGetAuditActionsResponse res = sdk.auditLogs.auditLogsGetAuditActions(req);

            if (res.getAuditActionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## auditLogsGetAuditLogs

Get audit log events for a given namespace.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AuditLogsGetAuditLogsRequest;
import org.openapis.openapi.models.operations.AuditLogsGetAuditLogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AuditLogsGetAuditLogsRequest req = new AuditLogsGetAuditLogsRequest("suscipit") {{
                action = "iure";
                actor = "magnam";
                from = OffsetDateTime.parse("2022-10-30T21:34:57.850Z");
                name = "Ricky Hoppe";
                page = 812169;
                pageSize = 528895;
                to = OffsetDateTime.parse("2022-06-07T15:55:46.205Z");
            }};            

            AuditLogsGetAuditLogsResponse res = sdk.auditLogs.auditLogsGetAuditLogs(req);

            if (res.getAuditLogsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
