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

    req := operations.ActivatePipelineRequest{
        ActivatePipelineInput: shared.ActivatePipelineInput{
            ParameterValues: []shared.ParameterValue{
                shared.ParameterValue{
                    ID: "provident",
                    StringValue: "distinctio",
                },
                shared.ParameterValue{
                    ID: "quibusdam",
                    StringValue: "unde",
                },
                shared.ParameterValue{
                    ID: "nulla",
                    StringValue: "corrupti",
                },
            },
            PipelineID: "illum",
            StartTimestamp: "2022-05-18T09:34:54.894Z",
        },
        XAmzAlgorithm: "deserunt",
        XAmzContentSha256: "suscipit",
        XAmzCredential: "iure",
        XAmzDate: "magnam",
        XAmzSecurityToken: "debitis",
        XAmzSignature: "ipsa",
        XAmzSignedHeaders: "delectus",
        XAmzTarget: "DataPipeline.ActivatePipeline",
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