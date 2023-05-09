# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateAppRequest;
import org.openapis.openapi.models.operations.CreateAppRequestBody;
import org.openapis.openapi.models.operations.CreateAppRequestBodyAutoBranchCreationConfig;
import org.openapis.openapi.models.operations.CreateAppRequestBodyPlatformEnum;
import org.openapis.openapi.models.operations.CreateAppResponse;
import org.openapis.openapi.models.shared.CustomRule;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StageEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAppRequest req = new CreateAppRequest(                new CreateAppRequestBody("provident") {{
                                accessToken = "distinctio";
                                autoBranchCreationConfig = new CreateAppRequestBodyAutoBranchCreationConfig() {{
                                    basicAuthCredentials = "quibusdam";
                                    buildSpec = "unde";
                                    enableAutoBuild = false;
                                    enableBasicAuth = false;
                                    enablePerformanceMode = false;
                                    enablePullRequestPreview = false;
                                    environmentVariables = new java.util.HashMap<String, String>() {{
                                        put("corrupti", "illum");
                                        put("vel", "error");
                                        put("deserunt", "suscipit");
                                        put("iure", "magnam");
                                    }};
                                    framework = "debitis";
                                    pullRequestEnvironmentName = "ipsa";
                                    stage = StageEnum.PULL_REQUEST;
                                }};;
                                autoBranchCreationPatterns = new String[]{{
                                    add("suscipit"),
                                    add("molestiae"),
                                }};
                                basicAuthCredentials = "minus";
                                buildSpec = "placeat";
                                customHeaders = "voluptatum";
                                customRules = new org.openapis.openapi.models.shared.CustomRule[]{{
                                    add(new CustomRule("ab", "quis") {{
                                        condition = "excepturi";
                                        source = "nisi";
                                        status = "recusandae";
                                        target = "temporibus";
                                    }}),
                                    add(new CustomRule("repellendus", "sapiente") {{
                                        condition = "veritatis";
                                        source = "deserunt";
                                        status = "perferendis";
                                        target = "ipsam";
                                    }}),
                                }};
                                description = "quo";
                                enableAutoBranchCreation = false;
                                enableBasicAuth = false;
                                enableBranchAutoBuild = false;
                                enableBranchAutoDeletion = false;
                                environmentVariables = new java.util.HashMap<String, String>() {{
                                    put("at", "at");
                                }};
                                iamServiceRoleArn = "maiores";
                                oauthToken = "molestiae";
                                platform = CreateAppRequestBodyPlatformEnum.WEB_COMPUTE;
                                repository = "quod";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("totam", "porro");
                                    put("dolorum", "dicta");
                                }};
                            }};) {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "officia";
                xAmzCredential = "occaecati";
                xAmzDate = "fugit";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "optio";
            }};            

            CreateAppResponse res = sdk.createApp(req);

            if (res.createAppResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createApp](docs/sdk/README.md#createapp) -  Creates a new Amplify app. 
* [createBackendEnvironment](docs/sdk/README.md#createbackendenvironment) -  Creates a new backend environment for an Amplify app. 
* [createBranch](docs/sdk/README.md#createbranch) -  Creates a new branch for an Amplify app. 
* [createDeployment](docs/sdk/README.md#createdeployment) -  Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a repository. 
* [createDomainAssociation](docs/sdk/README.md#createdomainassociation) -  Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app 
* [createWebhook](docs/sdk/README.md#createwebhook) -  Creates a new webhook on an Amplify app. 
* [deleteApp](docs/sdk/README.md#deleteapp) -  Deletes an existing Amplify app specified by an app ID. 
* [deleteBackendEnvironment](docs/sdk/README.md#deletebackendenvironment) -  Deletes a backend environment for an Amplify app. 
* [deleteBranch](docs/sdk/README.md#deletebranch) -  Deletes a branch for an Amplify app. 
* [deleteDomainAssociation](docs/sdk/README.md#deletedomainassociation) -  Deletes a domain association for an Amplify app. 
* [deleteJob](docs/sdk/README.md#deletejob) -  Deletes a job for a branch of an Amplify app. 
* [deleteWebhook](docs/sdk/README.md#deletewebhook) -  Deletes a webhook. 
* [generateAccessLogs](docs/sdk/README.md#generateaccesslogs) -  Returns the website access logs for a specific time range using a presigned URL. 
* [getApp](docs/sdk/README.md#getapp) -  Returns an existing Amplify app by appID. 
* [getArtifactUrl](docs/sdk/README.md#getartifacturl) -  Returns the artifact info that corresponds to an artifact id. 
* [getBackendEnvironment](docs/sdk/README.md#getbackendenvironment) -  Returns a backend environment for an Amplify app. 
* [getBranch](docs/sdk/README.md#getbranch) -  Returns a branch for an Amplify app. 
* [getDomainAssociation](docs/sdk/README.md#getdomainassociation) -  Returns the domain information for an Amplify app. 
* [getJob](docs/sdk/README.md#getjob) -  Returns a job for a branch of an Amplify app. 
* [getWebhook](docs/sdk/README.md#getwebhook) -  Returns the webhook information that corresponds to a specified webhook ID. 
* [listApps](docs/sdk/README.md#listapps) -  Returns a list of the existing Amplify apps. 
* [listArtifacts](docs/sdk/README.md#listartifacts) -  Returns a list of artifacts for a specified app, branch, and job. 
* [listBackendEnvironments](docs/sdk/README.md#listbackendenvironments) -  Lists the backend environments for an Amplify app. 
* [listBranches](docs/sdk/README.md#listbranches) -  Lists the branches of an Amplify app. 
* [listDomainAssociations](docs/sdk/README.md#listdomainassociations) -  Returns the domain associations for an Amplify app. 
* [listJobs](docs/sdk/README.md#listjobs) -  Lists the jobs for a branch of an Amplify app. 
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) -  Returns a list of tags for a specified Amazon Resource Name (ARN). 
* [listWebhooks](docs/sdk/README.md#listwebhooks) -  Returns a list of webhooks for an Amplify app. 
* [startDeployment](docs/sdk/README.md#startdeployment) -  Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a repository. 
* [startJob](docs/sdk/README.md#startjob) -  Starts a new job for a branch of an Amplify app. 
* [stopJob](docs/sdk/README.md#stopjob) -  Stops a job that is in progress for a branch of an Amplify app. 
* [tagResource](docs/sdk/README.md#tagresource) -  Tags the resource with a tag key and value. 
* [untagResource](docs/sdk/README.md#untagresource) -  Untags a resource with a specified Amazon Resource Name (ARN). 
* [updateApp](docs/sdk/README.md#updateapp) -  Updates an existing Amplify app. 
* [updateBranch](docs/sdk/README.md#updatebranch) -  Updates a branch for an Amplify app. 
* [updateDomainAssociation](docs/sdk/README.md#updatedomainassociation) -  Creates a new domain association for an Amplify app.
* [updateWebhook](docs/sdk/README.md#updatewebhook) -  Updates a webhook. 
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
