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

    req := operations.GETAddPermissionRequest{
        PathParams: operations.GETAddPermissionPathParams{
            AccountNumber: 548814,
            QueueName: "provident",
        },
        QueryParams: operations.GETAddPermissionQueryParams{
            AWSAccountIds: []string{
                "quibusdam",
                "unde",
                "nulla",
            },
            Action: "AddPermission",
            Actions: []string{
                "illum",
                "vel",
                "error",
            },
            Label: "deserunt",
            Version: "2012-11-05",
        },
        Headers: operations.GETAddPermissionHeaders{
            XAmzAlgorithm: "suscipit",
            XAmzContentSha256: "iure",
            XAmzCredential: "magnam",
            XAmzDate: "debitis",
            XAmzSecurityToken: "ipsa",
            XAmzSignature: "delectus",
            XAmzSignedHeaders: "tempora",
        },
    }

    ctx := context.Background()
    res, err := s.GETAddPermission(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->