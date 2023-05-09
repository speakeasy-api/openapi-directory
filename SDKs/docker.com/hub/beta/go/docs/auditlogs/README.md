# AuditLogs

## Overview

The Audit Logs API endpoints allow you to query audit log events across a
namespace.

For more information, see [Audit Log](https://docs.docker.com/docker-hub/audit-log/)


### Available Operations

* [AuditLogsGetAuditActions](#auditlogsgetauditactions) - Returns list of audit log actions.
* [AuditLogsGetAuditLogs](#auditlogsgetauditlogs) - Returns list of audit log  events.

## AuditLogsGetAuditActions

Get audit log actions for a namespace to be used as a filter for querying audit events.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AuditLogs.AuditLogsGetAuditActions(ctx, operations.AuditLogsGetAuditActionsRequest{
        Account: "sequi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAuditActionsResponse != nil {
        // handle response
    }
}
```

## AuditLogsGetAuditLogs

Get audit log events for a given namespace.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AuditLogs.AuditLogsGetAuditLogs(ctx, operations.AuditLogsGetAuditLogsRequest{
        Account: "tenetur",
        Action: sdk.String("ipsam"),
        Actor: sdk.String("id"),
        From: types.MustTimeFromString("2022-12-17T03:20:13.120Z"),
        Name: sdk.String("Sabrina Smitham DVM"),
        Page: sdk.Int(976460),
        PageSize: sdk.Int(878194),
        To: types.MustTimeFromString("2022-06-28T23:41:25.321Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAuditLogsResponse != nil {
        // handle response
    }
}
```
