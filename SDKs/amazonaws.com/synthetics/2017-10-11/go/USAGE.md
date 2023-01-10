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
    
    req := operations.CreateCanaryRequest{
        Headers: operations.CreateCanaryHeaders{
            XAmzAlgorithm: "dolore",
            XAmzContentSha256: "animi",
            XAmzCredential: "odio",
            XAmzDate: "officia",
            XAmzSecurityToken: "odio",
            XAmzSignature: "est",
            XAmzSignedHeaders: "sunt",
        },
        Request: operations.CreateCanaryRequestBody{
            ArtifactS3Location: "corrupti",
            Code: operations.CreateCanaryRequestBodyCode{
                Handler: "perspiciatis",
                S3Bucket: "accusamus",
                S3Key: "iusto",
                S3Version: "aut",
                ZipFile: "illo",
            },
            ExecutionRoleArn: "molestiae",
            FailureRetentionPeriodInDays: 8359892027431733351,
            Name: "aliquid",
            RunConfig: &operations.CreateCanaryRequestBodyRunConfig{
                ActiveTracing: true,
                EnvironmentVariables: map[string]string{
                    "non": "dicta",
                },
                MemoryInMB: 2347781137780074665,
                TimeoutInSeconds: 5418904646391934224,
            },
            RuntimeVersion: "inventore",
            Schedule: operations.CreateCanaryRequestBodySchedule{
                DurationInSeconds: 6457110019065774024,
                Expression: "voluptatibus",
            },
            SuccessRetentionPeriodInDays: 6642582187036167272,
            Tags: map[string]string{
                "perferendis": "impedit",
            },
            VpcConfig: &operations.CreateCanaryRequestBodyVpcConfig{
                SecurityGroupIds: []string{
                    "sunt",
                    "in",
                },
                SubnetIds: []string{
                    "laudantium",
                    "reiciendis",
                },
            },
        },
    }
    
    res, err := s.CreateCanary(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateCanaryResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->