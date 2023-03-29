<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.CreateAppRequest{
        Headers: operations.CreateAppHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
        },
        Request: operations.CreateAppRequestBody{
            AccessToken: "nulla",
            AutoBranchCreationConfig: &operations.CreateAppRequestBodyAutoBranchCreationConfig{
                BasicAuthCredentials: "nihil",
                BuildSpec: "fuga",
                EnableAutoBuild: false,
                EnableBasicAuth: false,
                EnablePerformanceMode: false,
                EnablePullRequestPreview: false,
                EnvironmentVariables: map[string]string{
                    "eum": "iusto",
                    "ullam": "saepe",
                    "inventore": "sapiente",
                },
                Framework: "enim",
                PullRequestEnvironmentName: "eum",
                Stage: "DEVELOPMENT",
            },
            AutoBranchCreationPatterns: []string{
                "vel",
                "non",
                "deleniti",
                "similique",
            },
            BasicAuthCredentials: "reprehenderit",
            BuildSpec: "molestiae",
            CustomHeaders: "quo",
            CustomRules: []shared.CustomRule{
                shared.CustomRule{
                    Condition: "laboriosam",
                    Source: "dicta",
                    Status: "est",
                    Target: "voluptatem",
                },
            },
            Description: "consequatur",
            EnableAutoBranchCreation: false,
            EnableBasicAuth: false,
            EnableBranchAutoBuild: false,
            EnableBranchAutoDeletion: false,
            EnvironmentVariables: map[string]string{
                "a": "omnis",
                "eos": "accusamus",
                "accusamus": "reiciendis",
                "rem": "quibusdam",
            },
            IamServiceRoleArn: "et",
            Name: "praesentium",
            OauthToken: "occaecati",
            Platform: "WEB_COMPUTE",
            Repository: "soluta",
            Tags: map[string]string{
                "quisquam": "rerum",
            },
        },
    }

    ctx := context.Background()
    res, err := s.CreateApp(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAppResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->