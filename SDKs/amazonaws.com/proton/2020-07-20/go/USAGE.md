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

    req := operations.AcceptEnvironmentAccountConnectionRequest{
        Headers: operations.AcceptEnvironmentAccountConnectionHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AwsProton20200720.AcceptEnvironmentAccountConnection",
        },
        Request: shared.AcceptEnvironmentAccountConnectionInput{
            ID: "illum",
        },
    }

    ctx := context.Background()
    res, err := s.AcceptEnvironmentAccountConnection(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptEnvironmentAccountConnectionOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->