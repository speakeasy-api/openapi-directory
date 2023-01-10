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
            ProductID: "ea",
        },
        QueryParams: operations.GetAuditlogsQueryParams{
            AuditLogType: map[string]interface{}{
                "dolor": "voluptatem",
                "illo": "est",
                "reprehenderit": "facilis",
            },
            ConfigID: "aliquid",
            EnvironmentID: "iure",
            FromUtcDateTime: "2004-04-09T14:38:57Z",
            ToUtcDateTime: "1997-12-25T03:44:42Z",
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