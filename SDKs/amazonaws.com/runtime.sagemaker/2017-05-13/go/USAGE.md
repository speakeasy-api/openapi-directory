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
            EndpointName: "officiis",
        },
        Headers: operations.InvokeEndpointHeaders{
            Accept: "placeat",
            ContentType: "delectus",
            XAmzAlgorithm: "harum",
            XAmzContentSha256: "esse",
            XAmzCredential: "ut",
            XAmzDate: "autem",
            XAmzSecurityToken: "deserunt",
            XAmzSignature: "ut",
            XAmzSignedHeaders: "in",
            XAmznSageMakerCustomAttributes: "maiores",
            XAmznSageMakerInferenceID: "iure",
            XAmznSageMakerTargetContainerHostname: "qui",
            XAmznSageMakerTargetModel: "expedita",
            XAmznSageMakerTargetVariant: "cupiditate",
        },
        Request: operations.InvokeEndpointRequestBody{
            Body: "aut",
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