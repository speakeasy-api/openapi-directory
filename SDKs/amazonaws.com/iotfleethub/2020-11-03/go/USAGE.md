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

    req := operations.CreateApplicationRequest{
        RequestBody: operations.CreateApplicationRequestBody{
            ApplicationDescription: "corrupti",
            ApplicationName: "provident",
            ClientToken: "distinctio",
            RoleArn: "quibusdam",
            Tags: map[string]string{
                "nulla": "corrupti",
                "illum": "vel",
                "error": "deserunt",
            },
        },
        XAmzAlgorithm: "suscipit",
        XAmzContentSha256: "iure",
        XAmzCredential: "magnam",
        XAmzDate: "debitis",
        XAmzSecurityToken: "ipsa",
        XAmzSignature: "delectus",
        XAmzSignedHeaders: "tempora",
    }

    ctx := context.Background()
    res, err := s.CreateApplication(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->