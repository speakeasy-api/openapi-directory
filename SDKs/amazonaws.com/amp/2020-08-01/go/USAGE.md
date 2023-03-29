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
            WorkspaceID: "unde",
        },
        Headers: operations.CreateAlertManagerDefinitionHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
        Request: operations.CreateAlertManagerDefinitionRequestBody{
            ClientToken: "nihil",
            Data: "fuga",
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