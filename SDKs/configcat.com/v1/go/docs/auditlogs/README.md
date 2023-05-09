# AuditLogs

## Overview

Access audit log entries.

### Available Operations

* [GetAuditlogs](#getauditlogs) - List Audit log items for Product
* [GetDeletedSettings](#getdeletedsettings) - List Deleted Settings
* [GetOrganizationAuditlogs](#getorganizationauditlogs) - List Audit log items for Organization

## GetAuditlogs

This endpoint returns the list of Audit log items for a given Product 
and the result can be optionally filtered by Config and/or Environment.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AuditLogs.GetAuditlogs(ctx, operations.GetAuditlogsRequest{
        AuditLogType: operations.GetAuditlogsAuditLogTypeEnumWebHookCreated.ToPointer(),
        ConfigID: sdk.String("5907aff1-a3a2-4fa9-8677-39251aa52c3f"),
        EnvironmentID: sdk.String("5ad019da-1ffe-478f-897b-0074f15471b5"),
        FromUtcDateTime: types.MustTimeFromString("2021-10-04T09:10:06.610Z"),
        ProductID: "e13b99d4-88e1-4e91-a450-ad2abd442698",
        ToUtcDateTime: types.MustTimeFromString("2022-11-01T19:07:16.800Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuditLogItemModels != nil {
        // handle response
    }
}
```

## GetDeletedSettings

This endpoint returns the list of Feature Flags and Settings that were deleted from the given Config.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AuditLogs.GetDeletedSettings(ctx, operations.GetDeletedSettingsRequest{
        ConfigID: "d502a94b-b4f6-43c9-a9e9-a3efa77dfb14",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SettingModelHaljsons != nil {
        // handle response
    }
}
```

## GetOrganizationAuditlogs

This endpoint returns the list of Audit log items for a given Organization 
and the result can be optionally filtered by Product and/or Config and/or Environment.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AuditLogs.GetOrganizationAuditlogs(ctx, operations.GetOrganizationAuditlogsRequest{
        AuditLogType: operations.GetOrganizationAuditlogsAuditLogTypeEnumDomainAdded.ToPointer(),
        ConfigID: sdk.String("d66ae395-efb9-4ba8-8f3a-66997074ba44"),
        EnvironmentID: sdk.String("69b6e214-1959-4890-afa5-63e2516fe4c8"),
        FromUtcDateTime: types.MustTimeFromString("2022-02-08T00:19:59.821Z"),
        OrganizationID: "11e5b7fd-2ed0-4289-a1cd-dc692601fb57",
        ProductID: sdk.String("6b0d5f0d-30c5-4fbb-a587-053202c73d5f"),
        ToUtcDateTime: types.MustTimeFromString("2021-03-05T23:06:52.311Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AuditLogItemModels != nil {
        // handle response
    }
}
```
