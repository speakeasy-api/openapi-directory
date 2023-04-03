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
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    req := operations.GetAuditlogsRequest{
        AuditLogType: "integrationLinkAdded",
        ConfigID: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
        EnvironmentID: "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
        FromUtcDateTime: "2022-02-02T00:14:45.467Z",
        ProductID: "39205929-396f-4ea7-996e-b10faaa2352c",
        ToUtcDateTime: "2022-05-24T03:24:11.703Z",
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