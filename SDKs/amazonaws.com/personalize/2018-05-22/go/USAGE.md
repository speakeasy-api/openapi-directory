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

    req := operations.CreateBatchInferenceJobRequest{
        CreateBatchInferenceJobRequest: shared.CreateBatchInferenceJobRequest{
            BatchInferenceJobConfig: &shared.BatchInferenceJobConfig{
                ItemExplorationConfig: map[string]string{
                    "provident": "distinctio",
                    "quibusdam": "unde",
                    "nulla": "corrupti",
                },
            },
            FilterArn: "illum",
            JobInput: shared.BatchInferenceJobInput{
                S3DataSource: shared.S3DataConfig{
                    KmsKeyArn: "vel",
                    Path: "error",
                },
            },
            JobName: "deserunt",
            JobOutput: shared.BatchInferenceJobOutput{
                S3DataDestination: shared.S3DataConfig{
                    KmsKeyArn: "suscipit",
                    Path: "iure",
                },
            },
            NumResults: 297534,
            RoleArn: "debitis",
            SolutionVersionArn: "ipsa",
            Tags: []shared.Tag{
                shared.Tag{
                    TagKey: "tempora",
                    TagValue: "suscipit",
                },
                shared.Tag{
                    TagKey: "molestiae",
                    TagValue: "minus",
                },
                shared.Tag{
                    TagKey: "placeat",
                    TagValue: "voluptatum",
                },
                shared.Tag{
                    TagKey: "iusto",
                    TagValue: "excepturi",
                },
            },
        },
        XAmzAlgorithm: "nisi",
        XAmzContentSha256: "recusandae",
        XAmzCredential: "temporibus",
        XAmzDate: "ab",
        XAmzSecurityToken: "quis",
        XAmzSignature: "veritatis",
        XAmzSignedHeaders: "deserunt",
        XAmzTarget: "AmazonPersonalize.CreateBatchInferenceJob",
    }

    ctx := context.Background()
    res, err := s.CreateBatchInferenceJob(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBatchInferenceJobResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->