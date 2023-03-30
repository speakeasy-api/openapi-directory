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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.CreateAppRequestBody{
            AccessToken: "illum",
            AutoBranchCreationConfig: &operations.CreateAppRequestBodyAutoBranchCreationConfig{
                BasicAuthCredentials: "vel",
                BuildSpec: "error",
                EnableAutoBuild: false,
                EnableBasicAuth: false,
                EnablePerformanceMode: false,
                EnablePullRequestPreview: false,
                EnvironmentVariables: map[string]string{
                    "suscipit": "iure",
                    "magnam": "debitis",
                    "ipsa": "delectus",
                },
                Framework: "tempora",
                PullRequestEnvironmentName: "suscipit",
                Stage: "DEVELOPMENT",
            },
            AutoBranchCreationPatterns: []string{
                "placeat",
                "voluptatum",
                "iusto",
                "excepturi",
            },
            BasicAuthCredentials: "nisi",
            BuildSpec: "recusandae",
            CustomHeaders: "temporibus",
            CustomRules: []shared.CustomRule{
                shared.CustomRule{
                    Condition: "quis",
                    Source: "veritatis",
                    Status: "deserunt",
                    Target: "perferendis",
                },
            },
            Description: "ipsam",
            EnableAutoBranchCreation: false,
            EnableBasicAuth: false,
            EnableBranchAutoBuild: false,
            EnableBranchAutoDeletion: false,
            EnvironmentVariables: map[string]string{
                "sapiente": "quo",
                "odit": "at",
                "at": "maiores",
                "molestiae": "quod",
            },
            IamServiceRoleArn: "quod",
            Name: "esse",
            OauthToken: "totam",
            Platform: "WEB_COMPUTE",
            Repository: "dolorum",
            Tags: map[string]string{
                "nam": "officia",
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