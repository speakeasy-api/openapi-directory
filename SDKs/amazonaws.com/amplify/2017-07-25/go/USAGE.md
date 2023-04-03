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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.CreateAppRequest{
        RequestBody: operations.CreateAppRequestBody{
            AccessToken: "corrupti",
            AutoBranchCreationConfig: &operations.CreateAppRequestBodyAutoBranchCreationConfig{
                BasicAuthCredentials: "provident",
                BuildSpec: "distinctio",
                EnableAutoBuild: false,
                EnableBasicAuth: false,
                EnablePerformanceMode: false,
                EnablePullRequestPreview: false,
                EnvironmentVariables: map[string]string{
                    "unde": "nulla",
                    "corrupti": "illum",
                    "vel": "error",
                    "deserunt": "suscipit",
                },
                Framework: "iure",
                PullRequestEnvironmentName: "magnam",
                Stage: "PULL_REQUEST",
            },
            AutoBranchCreationPatterns: []string{
                "delectus",
            },
            BasicAuthCredentials: "tempora",
            BuildSpec: "suscipit",
            CustomHeaders: "molestiae",
            CustomRules: []shared.CustomRule{
                shared.CustomRule{
                    Condition: "placeat",
                    Source: "voluptatum",
                    Status: "iusto",
                    Target: "excepturi",
                },
                shared.CustomRule{
                    Condition: "nisi",
                    Source: "recusandae",
                    Status: "temporibus",
                    Target: "ab",
                },
                shared.CustomRule{
                    Condition: "quis",
                    Source: "veritatis",
                    Status: "deserunt",
                    Target: "perferendis",
                },
                shared.CustomRule{
                    Condition: "ipsam",
                    Source: "repellendus",
                    Status: "sapiente",
                    Target: "quo",
                },
            },
            Description: "odit",
            EnableAutoBranchCreation: false,
            EnableBasicAuth: false,
            EnableBranchAutoBuild: false,
            EnableBranchAutoDeletion: false,
            EnvironmentVariables: map[string]string{
                "at": "maiores",
                "molestiae": "quod",
                "quod": "esse",
                "totam": "porro",
            },
            IamServiceRoleArn: "dolorum",
            Name: "dicta",
            OauthToken: "nam",
            Platform: "WEB_DYNAMIC",
            Repository: "occaecati",
            Tags: map[string]string{
                "deleniti": "hic",
            },
        },
        XAmzAlgorithm: "optio",
        XAmzContentSha256: "totam",
        XAmzCredential: "beatae",
        XAmzDate: "commodi",
        XAmzSecurityToken: "molestiae",
        XAmzSignature: "modi",
        XAmzSignedHeaders: "qui",
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