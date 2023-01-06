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
    
    req := operations.CreateAppRequest{
        Headers: operations.CreateAppHeaders{
            XAmzAlgorithm: "vero",
            XAmzContentSha256: "voluptatem",
            XAmzCredential: "ex",
            XAmzDate: "magni",
            XAmzSecurityToken: "vero",
            XAmzSignature: "distinctio",
            XAmzSignedHeaders: "cumque",
        },
        Request: operations.CreateAppRequestBody{
            AccessToken: "ea",
            AutoBranchCreationConfig: &operations.CreateAppRequestBodyAutoBranchCreationConfig{
                BasicAuthCredentials: "non",
                BuildSpec: "non",
                EnableAutoBuild: true,
                EnableBasicAuth: true,
                EnablePerformanceMode: false,
                EnablePullRequestPreview: false,
                EnvironmentVariables: map[string]string{
                    "minus": "sit",
                    "aut": "neque",
                    "iusto": "quia",
                },
                Framework: "repudiandae",
                PullRequestEnvironmentName: "debitis",
                Stage: "BETA",
            },
            AutoBranchCreationPatterns: []string{
                "enim",
                "ut",
            },
            BasicAuthCredentials: "non",
            BuildSpec: "nihil",
            CustomHeaders: "laborum",
            CustomRules: []shared.CustomRule{
                shared.CustomRule{
                    Condition: "nihil",
                    Source: "exercitationem",
                    Status: "iste",
                    Target: "perferendis",
                },
                shared.CustomRule{
                    Condition: "id",
                    Source: "autem",
                    Status: "hic",
                    Target: "voluptatem",
                },
                shared.CustomRule{
                    Condition: "omnis",
                    Source: "libero",
                    Status: "qui",
                    Target: "omnis",
                },
            },
            Description: "minus",
            EnableAutoBranchCreation: false,
            EnableBasicAuth: false,
            EnableBranchAutoBuild: true,
            EnableBranchAutoDeletion: false,
            EnvironmentVariables: map[string]string{
                "dolorum": "laboriosam",
            },
            IamServiceRoleArn: "velit",
            Name: "ea",
            OauthToken: "tempore",
            Platform: "WEB",
            Repository: "aut",
            Tags: map[string]string{
                "aliquid": "mollitia",
                "non": "magni",
                "recusandae": "illum",
            },
        },
    }
    
    res, err := s.CreateApp(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAppResult != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->