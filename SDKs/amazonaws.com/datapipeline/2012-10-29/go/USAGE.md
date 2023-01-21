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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "DataPipeline.ActivatePipeline",
        },
        Request: shared.ActivatePipelineInput{
            ParameterValues: []shared.ParameterValue{
                shared.ParameterValue{
                    ID: "et",
                    StringValue: "nihil",
                },
            },
            PipelineID: "rerum",
            StartTimestamp: "2004-06-02T10:14:12Z",
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