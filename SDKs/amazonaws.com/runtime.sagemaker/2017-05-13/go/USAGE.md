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

    req := operations.InvokeEndpointRequest{
        PathParams: operations.InvokeEndpointPathParams{
            EndpointName: "corrupti",
        },
        Headers: operations.InvokeEndpointHeaders{
            Accept: "provident",
            ContentType: "distinctio",
            XAmzAlgorithm: "quibusdam",
            XAmzContentSha256: "unde",
            XAmzCredential: "nulla",
            XAmzDate: "corrupti",
            XAmzSecurityToken: "illum",
            XAmzSignature: "vel",
            XAmzSignedHeaders: "error",
            XAmznSageMakerCustomAttributes: "deserunt",
            XAmznSageMakerEnableExplanations: "suscipit",
            XAmznSageMakerInferenceID: "iure",
            XAmznSageMakerTargetContainerHostname: "magnam",
            XAmznSageMakerTargetModel: "debitis",
            XAmznSageMakerTargetVariant: "ipsa",
        },
        Request: operations.InvokeEndpointRequestBody{
            Body: "delectus",
        },
    }

    ctx := context.Background()
    res, err := s.InvokeEndpoint(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.InvokeEndpointOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->