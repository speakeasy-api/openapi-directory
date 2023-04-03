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

    req := operations.CreateExtendedSourceServerRequest{
        RequestBody: operations.CreateExtendedSourceServerRequestBody{
            SourceServerArn: "corrupti",
            Tags: map[string]string{
                "distinctio": "quibusdam",
                "unde": "nulla",
                "corrupti": "illum",
            },
        },
        XAmzAlgorithm: "vel",
        XAmzContentSha256: "error",
        XAmzCredential: "deserunt",
        XAmzDate: "suscipit",
        XAmzSecurityToken: "iure",
        XAmzSignature: "magnam",
        XAmzSignedHeaders: "debitis",
    }

    ctx := context.Background()
    res, err := s.CreateExtendedSourceServer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateExtendedSourceServerResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->