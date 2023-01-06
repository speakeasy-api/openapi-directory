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
    
    req := operations.CreateBatchInferenceJobRequest{
        Headers: operations.CreateBatchInferenceJobHeaders{
            XAmzAlgorithm: "ratione",
            XAmzContentSha256: "est",
            XAmzCredential: "sed",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "quae",
            XAmzSignature: "officia",
            XAmzSignedHeaders: "aperiam",
            XAmzTarget: "AmazonPersonalize.CreateBatchInferenceJob",
        },
        Request: shared.CreateBatchInferenceJobRequest{
            BatchInferenceJobConfig: &shared.BatchInferenceJobConfig{
                ItemExplorationConfig: map[string]string{
                    "impedit": "debitis",
                    "quae": "rerum",
                },
            },
            FilterArn: "ut",
            JobInput: shared.BatchInferenceJobInput{
                S3DataSource: shared.S3DataConfig{
                    KmsKeyArn: "corrupti",
                    Path: "excepturi",
                },
            },
            JobName: "et",
            JobOutput: shared.BatchInferenceJobOutput{
                S3DataDestination: shared.S3DataConfig{
                    KmsKeyArn: "asperiores",
                    Path: "fugit",
                },
            },
            NumResults: 279167319541762584,
            RoleArn: "ratione",
            SolutionVersionArn: "voluptatem",
        },
    }
    
    res, err := s.CreateBatchInferenceJob(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBatchInferenceJobResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->