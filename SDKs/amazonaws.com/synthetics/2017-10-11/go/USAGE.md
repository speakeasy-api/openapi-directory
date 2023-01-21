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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.CreateCanaryRequestBody{
            ArtifactS3Location: "voluptas",
            Code: operations.CreateCanaryRequestBodyCode{
                Handler: "fugit",
                S3Bucket: "et",
                S3Key: "nihil",
                S3Version: "rerum",
                ZipFile: "dicta",
            },
            ExecutionRoleArn: "debitis",
            FailureRetentionPeriodInDays: 5617773211005988520,
            Name: "et",
            RunConfig: &operations.CreateCanaryRequestBodyRunConfig{
                ActiveTracing: false,
                EnvironmentVariables: map[string]string{
                    "et": "voluptate",
                    "iste": "vitae",
                    "totam": "dolores",
                },
                MemoryInMB: 1929546706668609706,
                TimeoutInSeconds: 6392442863481646880,
            },
            RuntimeVersion: "vel",
            Schedule: operations.CreateCanaryRequestBodySchedule{
                DurationInSeconds: 2627038740284806767,
                Expression: "dolore",
            },
            SuccessRetentionPeriodInDays: 4035568504096476779,
            Tags: map[string]string{
                "accusantium": "totam",
            },
            VpcConfig: &operations.CreateCanaryRequestBodyVpcConfig{
                SecurityGroupIds: []string{
                    "quis",
                    "est",
                },
                SubnetIds: []string{
                    "odit",
                    "non",
                    "voluptas",
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