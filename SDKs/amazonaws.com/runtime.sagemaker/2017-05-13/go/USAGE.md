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
            EndpointName: "dolores",
        },
        Headers: operations.InvokeEndpointHeaders{
            Accept: "quasi",
            ContentType: "recusandae",
            XAmzAlgorithm: "numquam",
            XAmzContentSha256: "numquam",
            XAmzCredential: "occaecati",
            XAmzDate: "aut",
            XAmzSecurityToken: "est",
            XAmzSignature: "occaecati",
            XAmzSignedHeaders: "et",
            XAmznSageMakerCustomAttributes: "et",
            XAmznSageMakerInferenceID: "non",
            XAmznSageMakerTargetContainerHostname: "molestias",
            XAmznSageMakerTargetModel: "aut",
            XAmznSageMakerTargetVariant: "qui",
        },
        Request: operations.InvokeEndpointRequestBody{
            Body: "consequuntur",
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