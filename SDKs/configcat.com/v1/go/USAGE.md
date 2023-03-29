<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Basic: shared.SchemeBasic{
                Password: "YOUR_PASSWORD_HERE",
                Username: "YOUR_USERNAME_HERE",
            },
        }),
    )

    req := operations.GetAuditlogsRequest{
        PathParams: operations.GetAuditlogsPathParams{
            ProductID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
        },
        QueryParams: operations.GetAuditlogsQueryParams{
            AuditLogType: "organizationSubscriptionTypeChanged",
            ConfigID: "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
            EnvironmentID: "b7392059-2939-46fe-a759-6eb10faaa235",
            FromUtcDateTime: "2023-02-10T11:11:42.837Z",
            ToUtcDateTime: "2022-06-28T12:34:45.127Z",
        },
    }

    ctx := context.Background()
    res, err := s.AuditLogs.GetAuditlogs(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AuditLogItemModels != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->