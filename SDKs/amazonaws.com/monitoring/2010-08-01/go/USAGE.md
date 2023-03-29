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
                "porro",
                "nulla",
                "id",
            },
            Version: "2010-08-01",
        },
        Headers: operations.GETDeleteAlarmsHeaders{
            XAmzAlgorithm: "perspiciatis",
            XAmzContentSha256: "nulla",
            XAmzCredential: "nihil",
            XAmzDate: "fuga",
            XAmzSecurityToken: "facilis",
            XAmzSignature: "eum",
            XAmzSignedHeaders: "iusto",
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