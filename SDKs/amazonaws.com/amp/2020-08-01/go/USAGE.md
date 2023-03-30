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

    req := operations.CreateAlertManagerDefinitionRequest{
        PathParams: operations.CreateAlertManagerDefinitionPathParams{
            WorkspaceID: "corrupti",
        },
        Headers: operations.CreateAlertManagerDefinitionHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
        },
        Request: operations.CreateAlertManagerDefinitionRequestBody{
            ClientToken: "vel",
            Data: "error",
        },
    }

    ctx := context.Background()
    res, err := s.CreateAlertManagerDefinition(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAlertManagerDefinitionResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->