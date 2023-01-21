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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AmazonPersonalize.CreateBatchInferenceJob",
        },
        Request: shared.CreateBatchInferenceJobRequest{
            BatchInferenceJobConfig: &shared.BatchInferenceJobConfig{
                ItemExplorationConfig: map[string]string{
                    "et": "nihil",
                },
            },
            FilterArn: "rerum",
            JobInput: shared.BatchInferenceJobInput{
                S3DataSource: shared.S3DataConfig{
                    KmsKeyArn: "dicta",
                    Path: "debitis",
                },
            },
            JobName: "voluptatum",
            JobOutput: shared.BatchInferenceJobOutput{
                S3DataDestination: shared.S3DataConfig{
                    KmsKeyArn: "et",
                    Path: "ut",
                },
            },
            NumResults: 161231572858529631,
            RoleArn: "et",
            SolutionVersionArn: "voluptate",
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