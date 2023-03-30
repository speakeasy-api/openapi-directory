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

    req := operations.ActivatePipelineRequest{
        Headers: operations.ActivatePipelineHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "DataPipeline.ActivatePipeline",
        },
        Request: shared.ActivatePipelineInput{
            ParameterValues: []shared.ParameterValue{
                shared.ParameterValue{
                    ID: "vel",
                    StringValue: "error",
                },
                shared.ParameterValue{
                    ID: "deserunt",
                    StringValue: "suscipit",
                },
                shared.ParameterValue{
                    ID: "iure",
                    StringValue: "magnam",
                },
                shared.ParameterValue{
                    ID: "debitis",
                    StringValue: "ipsa",
                },
            },
            PipelineID: "delectus",
            StartTimestamp: "2022-12-20T14:20:04.268Z",
        },
    }

    ctx := context.Background()
    res, err := s.ActivatePipeline(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ActivatePipelineOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->