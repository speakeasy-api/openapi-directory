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
            XAmzAlgorithm: "aliquam",
            XAmzContentSha256: "rem",
            XAmzCredential: "et",
            XAmzDate: "ipsa",
            XAmzSecurityToken: "error",
            XAmzSignature: "odit",
            XAmzSignedHeaders: "repudiandae",
            XAmzTarget: "DataPipeline.ActivatePipeline",
        },
        Request: shared.ActivatePipelineInput{
            ParameterValues: []shared.ParameterValue{
                shared.ParameterValue{
                    ID: "at",
                    StringValue: "consequuntur",
                },
                shared.ParameterValue{
                    ID: "libero",
                    StringValue: "aperiam",
                },
            },
            PipelineID: "voluptatem",
            StartTimestamp: "1982-08-15T23:02:59Z",
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