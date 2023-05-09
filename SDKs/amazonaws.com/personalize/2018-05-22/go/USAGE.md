<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateBatchInferenceJob(ctx, operations.CreateBatchInferenceJobRequest{
        CreateBatchInferenceJobRequest: shared.CreateBatchInferenceJobRequest{
            BatchInferenceJobConfig: &shared.BatchInferenceJobConfig{
                ItemExplorationConfig: map[string]string{
                    "provident": "distinctio",
                    "quibusdam": "unde",
                    "nulla": "corrupti",
                },
            },
            FilterArn: sdk.String("illum"),
            JobInput: shared.BatchInferenceJobInput{
                S3DataSource: shared.S3DataConfig{
                    KmsKeyArn: sdk.String("vel"),
                    Path: "error",
                },
            },
            JobName: "deserunt",
            JobOutput: shared.BatchInferenceJobOutput{
                S3DataDestination: shared.S3DataConfig{
                    KmsKeyArn: sdk.String("suscipit"),
                    Path: "iure",
                },
            },
            NumResults: sdk.Int64(297534),
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
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("temporibus"),
        XAmzDate: sdk.String("ab"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("deserunt"),
        XAmzTarget: operations.CreateBatchInferenceJobXAmzTargetEnumAmazonPersonalizeCreateBatchInferenceJob,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBatchInferenceJobResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->