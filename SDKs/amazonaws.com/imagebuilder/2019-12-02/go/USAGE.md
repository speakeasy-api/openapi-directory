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

    req := operations.CancelImageCreationRequest{
        Headers: operations.CancelImageCreationHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CancelImageCreationRequestBody{
            ClientToken: "illum",
            ImageBuildVersionArn: "vel",
        },
    }

    ctx := context.Background()
    res, err := s.CancelImageCreation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelImageCreationResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->