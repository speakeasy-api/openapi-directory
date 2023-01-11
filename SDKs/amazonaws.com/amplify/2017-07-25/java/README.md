# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            builder.setSecurity(
                new Security() {{
                    hmac = new SchemeHmac() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }}
            );

            SDK sdk = builder.build();

            CreateAppRequest req = new CreateAppRequest() {{
                headers = new CreateAppHeaders() {{
                    xAmzAlgorithm = "est";
                    xAmzContentSha256 = "id";
                    xAmzCredential = "ipsum";
                    xAmzDate = "aut";
                    xAmzSecurityToken = "perspiciatis";
                    xAmzSignature = "et";
                    xAmzSignedHeaders = "vero";
                }};
                request = new CreateAppRequestBody() {{
                    accessToken = "voluptatem";
                    autoBranchCreationConfig = new CreateAppRequestBodyAutoBranchCreationConfig() {{
                        basicAuthCredentials = "ex";
                        buildSpec = "magni";
                        enableAutoBuild = true;
                        enableBasicAuth = true;
                        enablePerformanceMode = false;
                        enablePullRequestPreview = false;
                        environmentVariables = new java.util.HashMap<String, String>() {{
                            put("non", "nam");
                            put("beatae", "quae");
                            put("qui", "magni");
                        }};
                        framework = "minus";
                        pullRequestEnvironmentName = "sit";
                        stage = "BETA";
                    }};
                    autoBranchCreationPatterns = new String[]() {{
                        add("iusto"),
                    }};
                    basicAuthCredentials = "quia";
                    buildSpec = "repudiandae";
                    customHeaders = "debitis";
                    customRules = new openapisdk.models.shared.CustomRule[]() {{
                        add(new CustomRule() {{
                            condition = "odit";
                            source = "enim";
                            status = "ut";
                            target = "non";
                        }}),
                    }};
                    description = "nihil";
                    enableAutoBranchCreation = false;
                    enableBasicAuth = true;
                    enableBranchAutoBuild = true;
                    enableBranchAutoDeletion = false;
                    environmentVariables = new java.util.HashMap<String, String>() {{
                        put("perferendis", "id");
                        put("autem", "hic");
                        put("voluptatem", "omnis");
                    }};
                    iamServiceRoleArn = "libero";
                    name = "qui";
                    oauthToken = "omnis";
                    platform = "WEB";
                    repository = "nostrum";
                    tags = new java.util.HashMap<String, String>() {{
                        put("sit", "repellat");
                        put("quo", "dolorum");
                    }};
                }};
            }};

            CreateAppResponse res = sdk.createApp(req);

            if (res.createAppResult.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `createApp` -  Creates a new Amplify app. 
* `createBackendEnvironment` -  Creates a new backend environment for an Amplify app. 
* `createBranch` -  Creates a new branch for an Amplify app. 
* `createDeployment` -  Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a repository. 
* `createDomainAssociation` -  Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app 
* `createWebhook` -  Creates a new webhook on an Amplify app. 
* `deleteApp` -  Deletes an existing Amplify app specified by an app ID. 
* `deleteBackendEnvironment` -  Deletes a backend environment for an Amplify app. 
* `deleteBranch` -  Deletes a branch for an Amplify app. 
* `deleteDomainAssociation` -  Deletes a domain association for an Amplify app. 
* `deleteJob` -  Deletes a job for a branch of an Amplify app. 
* `deleteWebhook` -  Deletes a webhook. 
* `generateAccessLogs` -  Returns the website access logs for a specific time range using a presigned URL. 
* `getApp` -  Returns an existing Amplify app by appID. 
* `getArtifactUrl` -  Returns the artifact info that corresponds to an artifact id. 
* `getBackendEnvironment` -  Returns a backend environment for an Amplify app. 
* `getBranch` -  Returns a branch for an Amplify app. 
* `getDomainAssociation` -  Returns the domain information for an Amplify app. 
* `getJob` -  Returns a job for a branch of an Amplify app. 
* `getWebhook` -  Returns the webhook information that corresponds to a specified webhook ID. 
* `listApps` -  Returns a list of the existing Amplify apps. 
* `listArtifacts` -  Returns a list of artifacts for a specified app, branch, and job. 
* `listBackendEnvironments` -  Lists the backend environments for an Amplify app. 
* `listBranches` -  Lists the branches of an Amplify app. 
* `listDomainAssociations` -  Returns the domain associations for an Amplify app. 
* `listJobs` -  Lists the jobs for a branch of an Amplify app. 
* `listTagsForResource` -  Returns a list of tags for a specified Amazon Resource Name (ARN). 
* `listWebhooks` -  Returns a list of webhooks for an Amplify app. 
* `startDeployment` -  Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a repository. 
* `startJob` -  Starts a new job for a branch of an Amplify app. 
* `stopJob` -  Stops a job that is in progress for a branch of an Amplify app. 
* `tagResource` -  Tags the resource with a tag key and value. 
* `untagResource` -  Untags a resource with a specified Amazon Resource Name (ARN). 
* `updateApp` -  Updates an existing Amplify app. 
* `updateBranch` -  Updates a branch for an Amplify app. 
* `updateDomainAssociation` -  Creates a new domain association for an Amplify app.
* `updateWebhook` -  Updates a webhook. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
