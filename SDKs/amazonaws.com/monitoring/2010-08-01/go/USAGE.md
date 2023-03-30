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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.GETDeleteAlarmsRequest{
        QueryParams: operations.GETDeleteAlarmsQueryParams{
            Action: "DeleteAlarms",
            AlarmNames: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
            Version: "2010-08-01",
        },
        Headers: operations.GETDeleteAlarmsHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "nulla",
            XAmzCredential: "corrupti",
            XAmzDate: "illum",
            XAmzSecurityToken: "vel",
            XAmzSignature: "error",
            XAmzSignedHeaders: "deserunt",
        },
    }

    ctx := context.Background()
    res, err := s.GETDeleteAlarms(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->