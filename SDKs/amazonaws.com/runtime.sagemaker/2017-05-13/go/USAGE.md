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
            EndpointName: "unde",
        },
        Headers: operations.InvokeEndpointHeaders{
            Accept: "deserunt",
            ContentType: "porro",
            XAmzAlgorithm: "nulla",
            XAmzContentSha256: "id",
            XAmzCredential: "vero",
            XAmzDate: "perspiciatis",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "nihil",
            XAmzSignedHeaders: "fuga",
            XAmznSageMakerCustomAttributes: "facilis",
            XAmznSageMakerEnableExplanations: "eum",
            XAmznSageMakerInferenceID: "iusto",
            XAmznSageMakerTargetContainerHostname: "ullam",
            XAmznSageMakerTargetModel: "saepe",
            XAmznSageMakerTargetVariant: "inventore",
        },
        Request: operations.InvokeEndpointRequestBody{
            Body: "sapiente",
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