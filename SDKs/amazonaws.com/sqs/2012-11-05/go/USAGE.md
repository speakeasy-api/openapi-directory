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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GETAddPermissionRequest{
        AWSAccountIds: []string{
            "provident",
            "distinctio",
            "quibusdam",
        },
        AccountNumber: 602763,
        Action: "AddPermission",
        Actions: []string{
            "corrupti",
            "illum",
            "vel",
            "error",
        },
        Label: "deserunt",
        QueueName: "suscipit",
        Version: "2012-11-05",
        XAmzAlgorithm: "iure",
        XAmzContentSha256: "magnam",
        XAmzCredential: "debitis",
        XAmzDate: "ipsa",
        XAmzSecurityToken: "delectus",
        XAmzSignature: "tempora",
        XAmzSignedHeaders: "suscipit",
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