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
    
    req := operations.ActivatePipelineRequest{
        Headers: operations.ActivatePipelineHeaders{
            XAmzAlgorithm: "molestias",
            XAmzContentSha256: "asperiores",
            XAmzCredential: "suscipit",
            XAmzDate: "nam",
            XAmzSecurityToken: "ducimus",
            XAmzSignature: "ullam",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "DataPipeline.ActivatePipeline",
        },
        Request: shared.ActivatePipelineInput{
            ParameterValues: []shared.ParameterValue{
                shared.ParameterValue{
                    ID: "suscipit",
                    StringValue: "magnam",
                },
                shared.ParameterValue{
                    ID: "aspernatur",
                    StringValue: "corporis",
                },
                shared.ParameterValue{
                    ID: "accusamus",
                    StringValue: "fugit",
                },
            },
            PipelineID: "qui",
            StartTimestamp: "1993-08-20T08:47:17Z",
        },
    }
    
    res, err := s.ActivatePipeline(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivatePipelineOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->