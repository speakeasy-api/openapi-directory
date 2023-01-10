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
            XAmzAlgorithm: "aut",
            XAmzContentSha256: "laborum",
            XAmzCredential: "praesentium",
            XAmzDate: "aut",
            XAmzSecurityToken: "ullam",
            XAmzSignature: "aspernatur",
            XAmzSignedHeaders: "laudantium",
            XAmzTarget: "AmazonPersonalize.CreateBatchInferenceJob",
        },
        Request: shared.CreateBatchInferenceJobRequest{
            BatchInferenceJobConfig: &shared.BatchInferenceJobConfig{
                ItemExplorationConfig: map[string]string{
                    "doloribus": "rem",
                    "sit": "aut",
                },
            },
            FilterArn: "non",
            JobInput: shared.BatchInferenceJobInput{
                S3DataSource: shared.S3DataConfig{
                    KmsKeyArn: "quod",
                    Path: "ut",
                },
            },
            JobName: "voluptas",
            JobOutput: shared.BatchInferenceJobOutput{
                S3DataDestination: shared.S3DataConfig{
                    KmsKeyArn: "atque",
                    Path: "et",
                },
            },
            NumResults: 7799152415069629267,
            RoleArn: "ipsum",
            SolutionVersionArn: "dolor",
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