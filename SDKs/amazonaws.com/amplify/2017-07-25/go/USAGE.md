<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.CreateApp(ctx, operations.CreateAppRequest{
        RequestBody: operations.CreateAppRequestBody{
            AccessToken: sdk.String("corrupti"),
            AutoBranchCreationConfig: &operations.CreateAppRequestBodyAutoBranchCreationConfig{
                BasicAuthCredentials: sdk.String("provident"),
                BuildSpec: sdk.String("distinctio"),
                EnableAutoBuild: sdk.Bool(false),
                EnableBasicAuth: sdk.Bool(false),
                EnablePerformanceMode: sdk.Bool(false),
                EnablePullRequestPreview: sdk.Bool(false),
                EnvironmentVariables: map[string]string{
                    "unde": "nulla",
                    "corrupti": "illum",
                    "vel": "error",
                    "deserunt": "suscipit",
                },
                Framework: sdk.String("iure"),
                PullRequestEnvironmentName: sdk.String("magnam"),
                Stage: shared.StageEnumPullRequest.ToPointer(),
            },
            AutoBranchCreationPatterns: []string{
                "delectus",
            },
            BasicAuthCredentials: sdk.String("tempora"),
            BuildSpec: sdk.String("suscipit"),
            CustomHeaders: sdk.String("molestiae"),
            CustomRules: []shared.CustomRule{
                shared.CustomRule{
                    Condition: sdk.String("placeat"),
                    Source: "voluptatum",
                    Status: sdk.String("iusto"),
                    Target: "excepturi",
                },
                shared.CustomRule{
                    Condition: sdk.String("nisi"),
                    Source: "recusandae",
                    Status: sdk.String("temporibus"),
                    Target: "ab",
                },
                shared.CustomRule{
                    Condition: sdk.String("quis"),
                    Source: "veritatis",
                    Status: sdk.String("deserunt"),
                    Target: "perferendis",
                },
                shared.CustomRule{
                    Condition: sdk.String("ipsam"),
                    Source: "repellendus",
                    Status: sdk.String("sapiente"),
                    Target: "quo",
                },
            },
            Description: sdk.String("odit"),
            EnableAutoBranchCreation: sdk.Bool(false),
            EnableBasicAuth: sdk.Bool(false),
            EnableBranchAutoBuild: sdk.Bool(false),
            EnableBranchAutoDeletion: sdk.Bool(false),
            EnvironmentVariables: map[string]string{
                "at": "maiores",
                "molestiae": "quod",
                "quod": "esse",
                "totam": "porro",
            },
            IamServiceRoleArn: sdk.String("dolorum"),
            Name: "Antoinette Nikolaus",
            OauthToken: sdk.String("deleniti"),
            Platform: operations.CreateAppRequestBodyPlatformEnumWebCompute.ToPointer(),
            Repository: sdk.String("optio"),
            Tags: map[string]string{
                "beatae": "commodi",
                "molestiae": "modi",
                "qui": "impedit",
            },
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("excepturi"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("ad"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAppResult != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->