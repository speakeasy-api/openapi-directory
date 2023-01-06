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
            XAmzAlgorithm: "id",
            XAmzContentSha256: "sequi",
            XAmzCredential: "dicta",
            XAmzDate: "quis",
            XAmzSecurityToken: "molestiae",
            XAmzSignature: "aliquam",
            XAmzSignedHeaders: "quos",
        },
        Request: operations.CreateCanaryRequestBody{
            ArtifactS3Location: "omnis",
            Code: operations.CreateCanaryRequestBodyCode{
                Handler: "illum",
                S3Bucket: "repellat",
                S3Key: "id",
                S3Version: "blanditiis",
                ZipFile: "possimus",
            },
            ExecutionRoleArn: "eius",
            FailureRetentionPeriodInDays: 6067213973756965288,
            Name: "adipisci",
            RunConfig: &operations.CreateCanaryRequestBodyRunConfig{
                ActiveTracing: false,
                EnvironmentVariables: map[string]string{
                    "in": "fuga",
                    "nemo": "dolore",
                    "suscipit": "architecto",
                },
                MemoryInMB: 5845898850995843190,
                TimeoutInSeconds: 5969817432109258462,
            },
            RuntimeVersion: "inventore",
            Schedule: operations.CreateCanaryRequestBodySchedule{
                DurationInSeconds: 8297725858245467940,
                Expression: "autem",
            },
            SuccessRetentionPeriodInDays: 8416882255818503945,
            Tags: map[string]string{
                "aut": "est",
                "voluptatem": "magnam",
            },
            VpcConfig: &operations.CreateCanaryRequestBodyVpcConfig{
                SecurityGroupIds: []string{
                    "quos",
                    "aspernatur",
                    "veniam",
                },
                SubnetIds: []string{
                    "harum",
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