<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.InvokeEndpoint(ctx, operations.InvokeEndpointRequest{
        Accept: sdk.String("corrupti"),
        ContentType: sdk.String("provident"),
        EndpointName: "distinctio",
        RequestBody: operations.InvokeEndpointRequestBody{
            Body: "quibusdam",
        },
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmznSageMakerCustomAttributes: sdk.String("suscipit"),
        XAmznSageMakerEnableExplanations: sdk.String("iure"),
        XAmznSageMakerInferenceID: sdk.String("magnam"),
        XAmznSageMakerTargetContainerHostname: sdk.String("debitis"),
        XAmznSageMakerTargetModel: sdk.String("ipsa"),
        XAmznSageMakerTargetVariant: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvokeEndpointOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->