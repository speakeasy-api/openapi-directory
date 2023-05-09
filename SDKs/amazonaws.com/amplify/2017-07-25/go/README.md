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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [CreateApp](docs/sdk/README.md#createapp) -  Creates a new Amplify app. 
* [CreateBackendEnvironment](docs/sdk/README.md#createbackendenvironment) -  Creates a new backend environment for an Amplify app. 
* [CreateBranch](docs/sdk/README.md#createbranch) -  Creates a new branch for an Amplify app. 
* [CreateDeployment](docs/sdk/README.md#createdeployment) -  Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a repository. 
* [CreateDomainAssociation](docs/sdk/README.md#createdomainassociation) -  Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app 
* [CreateWebhook](docs/sdk/README.md#createwebhook) -  Creates a new webhook on an Amplify app. 
* [DeleteApp](docs/sdk/README.md#deleteapp) -  Deletes an existing Amplify app specified by an app ID. 
* [DeleteBackendEnvironment](docs/sdk/README.md#deletebackendenvironment) -  Deletes a backend environment for an Amplify app. 
* [DeleteBranch](docs/sdk/README.md#deletebranch) -  Deletes a branch for an Amplify app. 
* [DeleteDomainAssociation](docs/sdk/README.md#deletedomainassociation) -  Deletes a domain association for an Amplify app. 
* [DeleteJob](docs/sdk/README.md#deletejob) -  Deletes a job for a branch of an Amplify app. 
* [DeleteWebhook](docs/sdk/README.md#deletewebhook) -  Deletes a webhook. 
* [GenerateAccessLogs](docs/sdk/README.md#generateaccesslogs) -  Returns the website access logs for a specific time range using a presigned URL. 
* [GetApp](docs/sdk/README.md#getapp) -  Returns an existing Amplify app by appID. 
* [GetArtifactURL](docs/sdk/README.md#getartifacturl) -  Returns the artifact info that corresponds to an artifact id. 
* [GetBackendEnvironment](docs/sdk/README.md#getbackendenvironment) -  Returns a backend environment for an Amplify app. 
* [GetBranch](docs/sdk/README.md#getbranch) -  Returns a branch for an Amplify app. 
* [GetDomainAssociation](docs/sdk/README.md#getdomainassociation) -  Returns the domain information for an Amplify app. 
* [GetJob](docs/sdk/README.md#getjob) -  Returns a job for a branch of an Amplify app. 
* [GetWebhook](docs/sdk/README.md#getwebhook) -  Returns the webhook information that corresponds to a specified webhook ID. 
* [ListApps](docs/sdk/README.md#listapps) -  Returns a list of the existing Amplify apps. 
* [ListArtifacts](docs/sdk/README.md#listartifacts) -  Returns a list of artifacts for a specified app, branch, and job. 
* [ListBackendEnvironments](docs/sdk/README.md#listbackendenvironments) -  Lists the backend environments for an Amplify app. 
* [ListBranches](docs/sdk/README.md#listbranches) -  Lists the branches of an Amplify app. 
* [ListDomainAssociations](docs/sdk/README.md#listdomainassociations) -  Returns the domain associations for an Amplify app. 
* [ListJobs](docs/sdk/README.md#listjobs) -  Lists the jobs for a branch of an Amplify app. 
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) -  Returns a list of tags for a specified Amazon Resource Name (ARN). 
* [ListWebhooks](docs/sdk/README.md#listwebhooks) -  Returns a list of webhooks for an Amplify app. 
* [StartDeployment](docs/sdk/README.md#startdeployment) -  Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a repository. 
* [StartJob](docs/sdk/README.md#startjob) -  Starts a new job for a branch of an Amplify app. 
* [StopJob](docs/sdk/README.md#stopjob) -  Stops a job that is in progress for a branch of an Amplify app. 
* [TagResource](docs/sdk/README.md#tagresource) -  Tags the resource with a tag key and value. 
* [UntagResource](docs/sdk/README.md#untagresource) -  Untags a resource with a specified Amazon Resource Name (ARN). 
* [UpdateApp](docs/sdk/README.md#updateapp) -  Updates an existing Amplify app. 
* [UpdateBranch](docs/sdk/README.md#updatebranch) -  Updates a branch for an Amplify app. 
* [UpdateDomainAssociation](docs/sdk/README.md#updatedomainassociation) -  Creates a new domain association for an Amplify app.
* [UpdateWebhook](docs/sdk/README.md#updatewebhook) -  Updates a webhook. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
