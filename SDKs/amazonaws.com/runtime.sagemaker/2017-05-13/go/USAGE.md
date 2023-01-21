<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.InvokeEndpointRequest{
        PathParams: operations.InvokeEndpointPathParams{
            EndpointName: "sit",
        },
        Headers: operations.InvokeEndpointHeaders{
            Accept: "voluptas",
            ContentType: "culpa",
            XAmzAlgorithm: "expedita",
            XAmzContentSha256: "consequuntur",
            XAmzCredential: "dolor",
            XAmzDate: "expedita",
            XAmzSecurityToken: "voluptas",
            XAmzSignature: "fugit",
            XAmzSignedHeaders: "et",
            XAmznSageMakerCustomAttributes: "nihil",
            XAmznSageMakerInferenceID: "rerum",
            XAmznSageMakerTargetContainerHostname: "dicta",
            XAmznSageMakerTargetModel: "debitis",
            XAmznSageMakerTargetVariant: "voluptatum",
        },
        Request: operations.InvokeEndpointRequestBody{
            Body: "et",
        },
    }
    
    res, err := s.InvokeEndpoint(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.InvokeEndpointOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->