<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Basic: shared.SchemeBasic{
                    Password: "YOUR_PASSWORD_HERE",
                    Username: "YOUR_USERNAME_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.GetAuditlogsRequest{
        PathParams: operations.GetAuditlogsPathParams{
            ProductID: "quidem",
        },
        QueryParams: operations.GetAuditlogsQueryParams{
            AuditLogType: map[string]interface{}{
                "sint": "dolorem",
                "qui": "esse",
                "et": "eum",
            },
            ConfigID: "quod",
            EnvironmentID: "animi",
            FromUtcDateTime: "1996-04-07T13:12:47Z",
            ToUtcDateTime: "1985-09-19T09:58:13Z",
        },
    }
    
    res, err := s.AuditLogs.GetAuditlogs(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AuditLogItemModels != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->