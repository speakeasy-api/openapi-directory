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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
        },
        Request: operations.CreateAppRequestBody{
            AccessToken: "voluptas",
            AutoBranchCreationConfig: &operations.CreateAppRequestBodyAutoBranchCreationConfig{
                BasicAuthCredentials: "fugit",
                BuildSpec: "et",
                EnableAutoBuild: true,
                EnableBasicAuth: true,
                EnablePerformanceMode: false,
                EnablePullRequestPreview: true,
                EnvironmentVariables: map[string]string{
                    "et": "ut",
                },
                Framework: "dolorem",
                PullRequestEnvironmentName: "et",
                Stage: "PULL_REQUEST",
            },
            AutoBranchCreationPatterns: []string{
                "vitae",
                "totam",
                "dolores",
            },
            BasicAuthCredentials: "illum",
            BuildSpec: "debitis",
            CustomHeaders: "vel",
            CustomRules: []shared.CustomRule{
                shared.CustomRule{
                    Condition: "dolore",
                    Source: "id",
                    Status: "aspernatur",
                    Target: "accusantium",
                },
            },
            Description: "totam",
            EnableAutoBranchCreation: false,
            EnableBasicAuth: true,
            EnableBranchAutoBuild: false,
            EnableBranchAutoDeletion: true,
            EnvironmentVariables: map[string]string{
                "non": "voluptas",
                "omnis": "aut",
            },
            IamServiceRoleArn: "illo",
            Name: "sed",
            OauthToken: "officiis",
            Platform: "WEB",
            Repository: "consectetur",
            Tags: map[string]string{
                "odio": "qui",
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