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

    req := operations.InvokeEndpointRequest{
        Accept: "corrupti",
        ContentType: "provident",
        EndpointName: "distinctio",
        RequestBody: operations.InvokeEndpointRequestBody{
            Body: "quibusdam",
        },
        XAmzAlgorithm: "unde",
        XAmzContentSha256: "nulla",
        XAmzCredential: "corrupti",
        XAmzDate: "illum",
        XAmzSecurityToken: "vel",
        XAmzSignature: "error",
        XAmzSignedHeaders: "deserunt",
        XAmznSageMakerCustomAttributes: "suscipit",
        XAmznSageMakerEnableExplanations: "iure",
        XAmznSageMakerInferenceID: "magnam",
        XAmznSageMakerTargetContainerHostname: "debitis",
        XAmznSageMakerTargetModel: "ipsa",
        XAmznSageMakerTargetVariant: "delectus",
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