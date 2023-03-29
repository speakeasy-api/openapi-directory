# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/amplify/2017-07-25/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateApp` -  Creates a new Amplify app. 
* `CreateBackendEnvironment` -  Creates a new backend environment for an Amplify app. 
* `CreateBranch` -  Creates a new branch for an Amplify app. 
* `CreateDeployment` -  Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a repository. 
* `CreateDomainAssociation` -  Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app 
* `CreateWebhook` -  Creates a new webhook on an Amplify app. 
* `DeleteApp` -  Deletes an existing Amplify app specified by an app ID. 
* `DeleteBackendEnvironment` -  Deletes a backend environment for an Amplify app. 
* `DeleteBranch` -  Deletes a branch for an Amplify app. 
* `DeleteDomainAssociation` -  Deletes a domain association for an Amplify app. 
* `DeleteJob` -  Deletes a job for a branch of an Amplify app. 
* `DeleteWebhook` -  Deletes a webhook. 
* `GenerateAccessLogs` -  Returns the website access logs for a specific time range using a presigned URL. 
* `GetApp` -  Returns an existing Amplify app by appID. 
* `GetArtifactURL` -  Returns the artifact info that corresponds to an artifact id. 
* `GetBackendEnvironment` -  Returns a backend environment for an Amplify app. 
* `GetBranch` -  Returns a branch for an Amplify app. 
* `GetDomainAssociation` -  Returns the domain information for an Amplify app. 
* `GetJob` -  Returns a job for a branch of an Amplify app. 
* `GetWebhook` -  Returns the webhook information that corresponds to a specified webhook ID. 
* `ListApps` -  Returns a list of the existing Amplify apps. 
* `ListArtifacts` -  Returns a list of artifacts for a specified app, branch, and job. 
* `ListBackendEnvironments` -  Lists the backend environments for an Amplify app. 
* `ListBranches` -  Lists the branches of an Amplify app. 
* `ListDomainAssociations` -  Returns the domain associations for an Amplify app. 
* `ListJobs` -  Lists the jobs for a branch of an Amplify app. 
* `ListTagsForResource` -  Returns a list of tags for a specified Amazon Resource Name (ARN). 
* `ListWebhooks` -  Returns a list of webhooks for an Amplify app. 
* `StartDeployment` -  Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a repository. 
* `StartJob` -  Starts a new job for a branch of an Amplify app. 
* `StopJob` -  Stops a job that is in progress for a branch of an Amplify app. 
* `TagResource` -  Tags the resource with a tag key and value. 
* `UntagResource` -  Untags a resource with a specified Amazon Resource Name (ARN). 
* `UpdateApp` -  Updates an existing Amplify app. 
* `UpdateBranch` -  Updates a branch for an Amplify app. 
* `UpdateDomainAssociation` -  Creates a new domain association for an Amplify app.
* `UpdateWebhook` -  Updates a webhook. 
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
