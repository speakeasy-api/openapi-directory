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
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AmazonPersonalize.CreateBatchInferenceJob",
        },
        Request: shared.CreateBatchInferenceJobRequest{
            BatchInferenceJobConfig: &shared.BatchInferenceJobConfig{
                ItemExplorationConfig: map[string]string{
                    "fuga": "facilis",
                    "eum": "iusto",
                },
            },
            FilterArn: "ullam",
            JobInput: shared.BatchInferenceJobInput{
                S3DataSource: shared.S3DataConfig{
                    KmsKeyArn: "saepe",
                    Path: "inventore",
                },
            },
            JobName: "sapiente",
            JobOutput: shared.BatchInferenceJobOutput{
                S3DataDestination: shared.S3DataConfig{
                    KmsKeyArn: "enim",
                    Path: "eum",
                },
            },
            NumResults: 477665,
            RoleArn: "autem",
            SolutionVersionArn: "vel",
            Tags: []shared.Tag{
                shared.Tag{
                    TagKey: "deleniti",
                    TagValue: "similique",
                },
                shared.Tag{
                    TagKey: "reprehenderit",
                    TagValue: "molestiae",
                },
                shared.Tag{
                    TagKey: "quo",
                    TagValue: "quasi",
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