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

    req := operations.CreateBatchInferenceJobRequest{
        Headers: operations.CreateBatchInferenceJobHeaders{
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AmazonPersonalize.CreateBatchInferenceJob",
        },
        Request: shared.CreateBatchInferenceJobRequest{
            BatchInferenceJobConfig: &shared.BatchInferenceJobConfig{
                ItemExplorationConfig: map[string]string{
                    "vel": "error",
                    "deserunt": "suscipit",
                    "iure": "magnam",
                    "debitis": "ipsa",
                },
            },
            FilterArn: "delectus",
            JobInput: shared.BatchInferenceJobInput{
                S3DataSource: shared.S3DataConfig{
                    KmsKeyArn: "tempora",
                    Path: "suscipit",
                },
            },
            JobName: "molestiae",
            JobOutput: shared.BatchInferenceJobOutput{
                S3DataDestination: shared.S3DataConfig{
                    KmsKeyArn: "minus",
                    Path: "placeat",
                },
            },
            NumResults: 528895,
            RoleArn: "iusto",
            SolutionVersionArn: "excepturi",
            Tags: []shared.Tag{
                shared.Tag{
                    TagKey: "recusandae",
                    TagValue: "temporibus",
                },
                shared.Tag{
                    TagKey: "ab",
                    TagValue: "quis",
                },
            },
        },
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