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
            XAmzAlgorithm: "est",
            XAmzContentSha256: "id",
            XAmzCredential: "ipsum",
            XAmzDate: "aut",
            XAmzSecurityToken: "perspiciatis",
            XAmzSignature: "et",
            XAmzSignedHeaders: "vero",
        },
        Request: operations.CreateAppRequestBody{
            AccessToken: "voluptatem",
            AutoBranchCreationConfig: &operations.CreateAppRequestBodyAutoBranchCreationConfig{
                BasicAuthCredentials: "ex",
                BuildSpec: "magni",
                EnableAutoBuild: true,
                EnableBasicAuth: true,
                EnablePerformanceMode: false,
                EnablePullRequestPreview: false,
                EnvironmentVariables: map[string]string{
                    "non": "nam",
                    "beatae": "quae",
                    "qui": "magni",
                },
                Framework: "minus",
                PullRequestEnvironmentName: "sit",
                Stage: "BETA",
            },
            AutoBranchCreationPatterns: []string{
                "iusto",
            },
            BasicAuthCredentials: "quia",
            BuildSpec: "repudiandae",
            CustomHeaders: "debitis",
            CustomRules: []shared.CustomRule{
                shared.CustomRule{
                    Condition: "odit",
                    Source: "enim",
                    Status: "ut",
                    Target: "non",
                },
            },
            Description: "nihil",
            EnableAutoBranchCreation: false,
            EnableBasicAuth: true,
            EnableBranchAutoBuild: true,
            EnableBranchAutoDeletion: false,
            EnvironmentVariables: map[string]string{
                "perferendis": "id",
                "autem": "hic",
                "voluptatem": "omnis",
            },
            IamServiceRoleArn: "libero",
            Name: "qui",
            OauthToken: "omnis",
            Platform: "WEB",
            Repository: "nostrum",
            Tags: map[string]string{
                "sit": "repellat",
                "quo": "dolorum",
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