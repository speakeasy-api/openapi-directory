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
            ProductID: "sit",
        },
        QueryParams: operations.GetAuditlogsQueryParams{
            AuditLogType: map[string]interface{}{
                "culpa": "expedita",
            },
            ConfigID: "consequuntur",
            EnvironmentID: "dolor",
            FromUtcDateTime: "2009-11-26T21:53:53Z",
            ToUtcDateTime: "1978-05-28T16:08:43Z",
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