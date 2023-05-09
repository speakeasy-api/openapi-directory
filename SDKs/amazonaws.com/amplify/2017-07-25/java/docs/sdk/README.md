# SDK

## Overview

Amplify enables developers to develop and deploy cloud-powered mobile and web apps. The Amplify Console provides a continuous delivery and hosting service for web applications. For more information, see the <a href="https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html">Amplify Console User Guide</a>. The Amplify Framework is a comprehensive set of SDKs, libraries, tools, and documentation for client app development. For more information, see the <a href="https://docs.amplify.aws/">Amplify Framework.</a> 

Amazon Web Services documentation
<https://docs.aws.amazon.com/amplify/>
### Available Operations

* [createApp](#createapp) -  Creates a new Amplify app. 
* [createBackendEnvironment](#createbackendenvironment) -  Creates a new backend environment for an Amplify app. 
* [createBranch](#createbranch) -  Creates a new branch for an Amplify app. 
* [createDeployment](#createdeployment) -  Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a repository. 
* [createDomainAssociation](#createdomainassociation) -  Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app 
* [createWebhook](#createwebhook) -  Creates a new webhook on an Amplify app. 
* [deleteApp](#deleteapp) -  Deletes an existing Amplify app specified by an app ID. 
* [deleteBackendEnvironment](#deletebackendenvironment) -  Deletes a backend environment for an Amplify app. 
* [deleteBranch](#deletebranch) -  Deletes a branch for an Amplify app. 
* [deleteDomainAssociation](#deletedomainassociation) -  Deletes a domain association for an Amplify app. 
* [deleteJob](#deletejob) -  Deletes a job for a branch of an Amplify app. 
* [deleteWebhook](#deletewebhook) -  Deletes a webhook. 
* [generateAccessLogs](#generateaccesslogs) -  Returns the website access logs for a specific time range using a presigned URL. 
* [getApp](#getapp) -  Returns an existing Amplify app by appID. 
* [getArtifactUrl](#getartifacturl) -  Returns the artifact info that corresponds to an artifact id. 
* [getBackendEnvironment](#getbackendenvironment) -  Returns a backend environment for an Amplify app. 
* [getBranch](#getbranch) -  Returns a branch for an Amplify app. 
* [getDomainAssociation](#getdomainassociation) -  Returns the domain information for an Amplify app. 
* [getJob](#getjob) -  Returns a job for a branch of an Amplify app. 
* [getWebhook](#getwebhook) -  Returns the webhook information that corresponds to a specified webhook ID. 
* [listApps](#listapps) -  Returns a list of the existing Amplify apps. 
* [listArtifacts](#listartifacts) -  Returns a list of artifacts for a specified app, branch, and job. 
* [listBackendEnvironments](#listbackendenvironments) -  Lists the backend environments for an Amplify app. 
* [listBranches](#listbranches) -  Lists the branches of an Amplify app. 
* [listDomainAssociations](#listdomainassociations) -  Returns the domain associations for an Amplify app. 
* [listJobs](#listjobs) -  Lists the jobs for a branch of an Amplify app. 
* [listTagsForResource](#listtagsforresource) -  Returns a list of tags for a specified Amazon Resource Name (ARN). 
* [listWebhooks](#listwebhooks) -  Returns a list of webhooks for an Amplify app. 
* [startDeployment](#startdeployment) -  Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a repository. 
* [startJob](#startjob) -  Starts a new job for a branch of an Amplify app. 
* [stopJob](#stopjob) -  Stops a job that is in progress for a branch of an Amplify app. 
* [tagResource](#tagresource) -  Tags the resource with a tag key and value. 
* [untagResource](#untagresource) -  Untags a resource with a specified Amazon Resource Name (ARN). 
* [updateApp](#updateapp) -  Updates an existing Amplify app. 
* [updateBranch](#updatebranch) -  Updates a branch for an Amplify app. 
* [updateDomainAssociation](#updatedomainassociation) -  Creates a new domain association for an Amplify app.
* [updateWebhook](#updatewebhook) -  Updates a webhook. 

## createApp

 Creates a new Amplify app. 

### Example Usage

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
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateAppRequest req = new CreateAppRequest(                new CreateAppRequestBody("beatae") {{
                                accessToken = "commodi";
                                autoBranchCreationConfig = new CreateAppRequestBodyAutoBranchCreationConfig() {{
                                    basicAuthCredentials = "molestiae";
                                    buildSpec = "modi";
                                    enableAutoBuild = false;
                                    enableBasicAuth = false;
                                    enablePerformanceMode = false;
                                    enablePullRequestPreview = false;
                                    environmentVariables = new java.util.HashMap<String, String>() {{
                                        put("impedit", "cum");
                                    }};
                                    framework = "esse";
                                    pullRequestEnvironmentName = "ipsum";
                                    stage = StageEnum.DEVELOPMENT;
                                }};;
                                autoBranchCreationPatterns = new String[]{{
                                    add("perferendis"),
                                }};
                                basicAuthCredentials = "ad";
                                buildSpec = "natus";
                                customHeaders = "sed";
                                customRules = new org.openapis.openapi.models.shared.CustomRule[]{{
                                    add(new CustomRule("saepe", "fuga") {{
                                        condition = "dolor";
                                        source = "natus";
                                        status = "laboriosam";
                                        target = "hic";
                                    }}),
                                    add(new CustomRule("saepe", "quidem") {{
                                        condition = "in";
                                        source = "corporis";
                                        status = "iste";
                                        target = "iure";
                                    }}),
                                    add(new CustomRule("mollitia", "laborum") {{
                                        condition = "architecto";
                                        source = "ipsa";
                                        status = "reiciendis";
                                        target = "est";
                                    }}),
                                }};
                                description = "dolores";
                                enableAutoBranchCreation = false;
                                enableBasicAuth = false;
                                enableBranchAutoBuild = false;
                                enableBranchAutoDeletion = false;
                                environmentVariables = new java.util.HashMap<String, String>() {{
                                    put("corporis", "explicabo");
                                }};
                                iamServiceRoleArn = "nobis";
                                oauthToken = "enim";
                                platform = CreateAppRequestBodyPlatformEnum.WEB_DYNAMIC;
                                repository = "nemo";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("excepturi", "accusantium");
                                    put("iure", "culpa");
                                }};
                            }};) {{
                xAmzAlgorithm = "doloribus";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "architecto";
                xAmzDate = "mollitia";
                xAmzSecurityToken = "dolorem";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "consequuntur";
            }};            

            CreateAppResponse res = sdk.sdk.createApp(req);

            if (res.createAppResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBackendEnvironment

 Creates a new backend environment for an Amplify app. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBackendEnvironmentRequest;
import org.openapis.openapi.models.operations.CreateBackendEnvironmentRequestBody;
import org.openapis.openapi.models.operations.CreateBackendEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBackendEnvironmentRequest req = new CreateBackendEnvironmentRequest(                new CreateBackendEnvironmentRequestBody("mollitia") {{
                                deploymentArtifacts = "occaecati";
                                stackName = "numquam";
                            }};, "commodi") {{
                xAmzAlgorithm = "quam";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "velit";
                xAmzDate = "error";
                xAmzSecurityToken = "quia";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "vitae";
            }};            

            CreateBackendEnvironmentResponse res = sdk.sdk.createBackendEnvironment(req);

            if (res.createBackendEnvironmentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createBranch

 Creates a new branch for an Amplify app. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBranchRequest;
import org.openapis.openapi.models.operations.CreateBranchRequestBody;
import org.openapis.openapi.models.operations.CreateBranchRequestBodyStageEnum;
import org.openapis.openapi.models.operations.CreateBranchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBranchRequest req = new CreateBranchRequest(                new CreateBranchRequestBody("animi") {{
                                backendEnvironmentArn = "enim";
                                basicAuthCredentials = "odit";
                                buildSpec = "quo";
                                description = "sequi";
                                displayName = "tenetur";
                                enableAutoBuild = false;
                                enableBasicAuth = false;
                                enableNotification = false;
                                enablePerformanceMode = false;
                                enablePullRequestPreview = false;
                                environmentVariables = new java.util.HashMap<String, String>() {{
                                    put("id", "possimus");
                                    put("aut", "quasi");
                                }};
                                framework = "error";
                                pullRequestEnvironmentName = "temporibus";
                                stage = CreateBranchRequestBodyStageEnum.EXPERIMENTAL;
                                tags = new java.util.HashMap<String, String>() {{
                                    put("reiciendis", "voluptatibus");
                                }};
                                ttl = "vero";
                            }};, "nihil") {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "ipsa";
                xAmzDate = "omnis";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "perferendis";
            }};            

            CreateBranchResponse res = sdk.sdk.createBranch(req);

            if (res.createBranchResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDeployment

 Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a repository. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDeploymentRequest;
import org.openapis.openapi.models.operations.CreateDeploymentRequestBody;
import org.openapis.openapi.models.operations.CreateDeploymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDeploymentRequest req = new CreateDeploymentRequest(                new CreateDeploymentRequestBody() {{
                                fileMap = new java.util.HashMap<String, String>() {{
                                    put("ut", "maiores");
                                    put("dicta", "corporis");
                                }};
                            }};, "dolore", "iusto") {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "harum";
                xAmzCredential = "enim";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "commodi";
                xAmzSignature = "repudiandae";
                xAmzSignedHeaders = "quae";
            }};            

            CreateDeploymentResponse res = sdk.sdk.createDeployment(req);

            if (res.createDeploymentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDomainAssociation

 Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDomainAssociationRequest;
import org.openapis.openapi.models.operations.CreateDomainAssociationRequestBody;
import org.openapis.openapi.models.operations.CreateDomainAssociationResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubDomainSetting;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDomainAssociationRequest req = new CreateDomainAssociationRequest(                new CreateDomainAssociationRequestBody("quidem",                 new org.openapis.openapi.models.shared.SubDomainSetting[]{{
                                                add(new SubDomainSetting("modi", "praesentium") {{
                                                    branchName = "excepturi";
                                                    prefix = "pariatur";
                                                }}),
                                                add(new SubDomainSetting("quasi", "repudiandae") {{
                                                    branchName = "rem";
                                                    prefix = "voluptates";
                                                }}),
                                                add(new SubDomainSetting("itaque", "incidunt") {{
                                                    branchName = "sint";
                                                    prefix = "veritatis";
                                                }}),
                                            }}) {{
                                autoSubDomainCreationPatterns = new String[]{{
                                    add("consequatur"),
                                    add("est"),
                                }};
                                autoSubDomainIAMRole = "quibusdam";
                                enableAutoSubDomain = false;
                            }};, "explicabo") {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quibusdam";
                xAmzDate = "labore";
                xAmzSecurityToken = "modi";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "aliquid";
            }};            

            CreateDomainAssociationResponse res = sdk.sdk.createDomainAssociation(req);

            if (res.createDomainAssociationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWebhook

 Creates a new webhook on an Amplify app. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWebhookRequest;
import org.openapis.openapi.models.operations.CreateWebhookRequestBody;
import org.openapis.openapi.models.operations.CreateWebhookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWebhookRequest req = new CreateWebhookRequest(                new CreateWebhookRequestBody("quos") {{
                                description = "perferendis";
                            }};, "magni") {{
                xAmzAlgorithm = "assumenda";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "alias";
                xAmzDate = "fugit";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "tempora";
            }};            

            CreateWebhookResponse res = sdk.sdk.createWebhook(req);

            if (res.createWebhookResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteApp

 Deletes an existing Amplify app specified by an app ID. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppRequest;
import org.openapis.openapi.models.operations.DeleteAppResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteAppRequest req = new DeleteAppRequest("tempore") {{
                xAmzAlgorithm = "labore";
                xAmzContentSha256 = "delectus";
                xAmzCredential = "eum";
                xAmzDate = "non";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "aliquid";
            }};            

            DeleteAppResponse res = sdk.sdk.deleteApp(req);

            if (res.deleteAppResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBackendEnvironment

 Deletes a backend environment for an Amplify app. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBackendEnvironmentRequest;
import org.openapis.openapi.models.operations.DeleteBackendEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBackendEnvironmentRequest req = new DeleteBackendEnvironmentRequest("necessitatibus", "sint") {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "debitis";
                xAmzDate = "a";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "in";
                xAmzSignedHeaders = "in";
            }};            

            DeleteBackendEnvironmentResponse res = sdk.sdk.deleteBackendEnvironment(req);

            if (res.deleteBackendEnvironmentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBranch

 Deletes a branch for an Amplify app. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBranchRequest;
import org.openapis.openapi.models.operations.DeleteBranchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBranchRequest req = new DeleteBranchRequest("maiores", "rerum") {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "magnam";
                xAmzCredential = "cumque";
                xAmzDate = "facere";
                xAmzSecurityToken = "ea";
                xAmzSignature = "aliquid";
                xAmzSignedHeaders = "laborum";
            }};            

            DeleteBranchResponse res = sdk.sdk.deleteBranch(req);

            if (res.deleteBranchResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDomainAssociation

 Deletes a domain association for an Amplify app. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDomainAssociationRequest;
import org.openapis.openapi.models.operations.DeleteDomainAssociationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDomainAssociationRequest req = new DeleteDomainAssociationRequest("non", "occaecati") {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "accusamus";
                xAmzCredential = "delectus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "provident";
                xAmzSignature = "nam";
                xAmzSignedHeaders = "id";
            }};            

            DeleteDomainAssociationResponse res = sdk.sdk.deleteDomainAssociation(req);

            if (res.deleteDomainAssociationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteJob

 Deletes a job for a branch of an Amplify app. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteJobRequest;
import org.openapis.openapi.models.operations.DeleteJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteJobRequest req = new DeleteJobRequest("deleniti", "sapiente", "amet") {{
                xAmzAlgorithm = "deserunt";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "vel";
                xAmzDate = "natus";
                xAmzSecurityToken = "omnis";
                xAmzSignature = "molestiae";
                xAmzSignedHeaders = "perferendis";
            }};            

            DeleteJobResponse res = sdk.sdk.deleteJob(req);

            if (res.deleteJobResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWebhook

 Deletes a webhook. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebhookRequest;
import org.openapis.openapi.models.operations.DeleteWebhookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWebhookRequest req = new DeleteWebhookRequest("magnam") {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "id";
                xAmzCredential = "labore";
                xAmzDate = "labore";
                xAmzSecurityToken = "suscipit";
                xAmzSignature = "natus";
                xAmzSignedHeaders = "nobis";
            }};            

            DeleteWebhookResponse res = sdk.sdk.deleteWebhook(req);

            if (res.deleteWebhookResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## generateAccessLogs

 Returns the website access logs for a specific time range using a presigned URL. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenerateAccessLogsRequest;
import org.openapis.openapi.models.operations.GenerateAccessLogsRequestBody;
import org.openapis.openapi.models.operations.GenerateAccessLogsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GenerateAccessLogsRequest req = new GenerateAccessLogsRequest(                new GenerateAccessLogsRequestBody("vero") {{
                                endTime = OffsetDateTime.parse("2022-11-24T10:55:00.183Z");
                                startTime = OffsetDateTime.parse("2022-11-28T06:48:16.205Z");
                            }};, "excepturi") {{
                xAmzAlgorithm = "ullam";
                xAmzContentSha256 = "provident";
                xAmzCredential = "quos";
                xAmzDate = "sint";
                xAmzSecurityToken = "accusantium";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "reiciendis";
            }};            

            GenerateAccessLogsResponse res = sdk.sdk.generateAccessLogs(req);

            if (res.generateAccessLogsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApp

 Returns an existing Amplify app by appID. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppRequest;
import org.openapis.openapi.models.operations.GetAppResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAppRequest req = new GetAppRequest("ad") {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "dolor";
                xAmzCredential = "necessitatibus";
                xAmzDate = "odit";
                xAmzSecurityToken = "nemo";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "iure";
            }};            

            GetAppResponse res = sdk.sdk.getApp(req);

            if (res.getAppResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getArtifactUrl

 Returns the artifact info that corresponds to an artifact id. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetArtifactUrlRequest;
import org.openapis.openapi.models.operations.GetArtifactUrlResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetArtifactUrlRequest req = new GetArtifactUrlRequest("debitis") {{
                xAmzAlgorithm = "eius";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "deleniti";
                xAmzDate = "facilis";
                xAmzSecurityToken = "in";
                xAmzSignature = "architecto";
                xAmzSignedHeaders = "architecto";
            }};            

            GetArtifactUrlResponse res = sdk.sdk.getArtifactUrl(req);

            if (res.getArtifactUrlResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBackendEnvironment

 Returns a backend environment for an Amplify app. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBackendEnvironmentRequest;
import org.openapis.openapi.models.operations.GetBackendEnvironmentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBackendEnvironmentRequest req = new GetBackendEnvironmentRequest("ullam", "expedita") {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "quibusdam";
                xAmzDate = "sed";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "pariatur";
                xAmzSignedHeaders = "accusantium";
            }};            

            GetBackendEnvironmentResponse res = sdk.sdk.getBackendEnvironment(req);

            if (res.getBackendEnvironmentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBranch

 Returns a branch for an Amplify app. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBranchRequest;
import org.openapis.openapi.models.operations.GetBranchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetBranchRequest req = new GetBranchRequest("praesentium", "natus") {{
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "quo";
                xAmzDate = "illum";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "ea";
            }};            

            GetBranchResponse res = sdk.sdk.getBranch(req);

            if (res.getBranchResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDomainAssociation

 Returns the domain information for an Amplify app. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDomainAssociationRequest;
import org.openapis.openapi.models.operations.GetDomainAssociationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDomainAssociationRequest req = new GetDomainAssociationRequest("odit", "ea") {{
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "ab";
                xAmzCredential = "maiores";
                xAmzDate = "quidem";
                xAmzSecurityToken = "ipsam";
                xAmzSignature = "voluptate";
                xAmzSignedHeaders = "autem";
            }};            

            GetDomainAssociationResponse res = sdk.sdk.getDomainAssociation(req);

            if (res.getDomainAssociationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getJob

 Returns a job for a branch of an Amplify app. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetJobRequest;
import org.openapis.openapi.models.operations.GetJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetJobRequest req = new GetJobRequest("eaque", "pariatur", "nemo") {{
                xAmzAlgorithm = "voluptatibus";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "fugiat";
                xAmzDate = "amet";
                xAmzSecurityToken = "aut";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "corporis";
            }};            

            GetJobResponse res = sdk.sdk.getJob(req);

            if (res.getJobResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebhook

 Returns the webhook information that corresponds to a specified webhook ID. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhookRequest;
import org.openapis.openapi.models.operations.GetWebhookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("hic") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetWebhookRequest req = new GetWebhookRequest("libero") {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "dolores";
                xAmzCredential = "quis";
                xAmzDate = "totam";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "quis";
            }};            

            GetWebhookResponse res = sdk.sdk.getWebhook(req);

            if (res.getWebhookResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listApps

 Returns a list of the existing Amplify apps. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAppsRequest;
import org.openapis.openapi.models.operations.ListAppsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAppsRequest req = new ListAppsRequest() {{
                xAmzAlgorithm = "eos";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "dolores";
                xAmzDate = "minus";
                xAmzSecurityToken = "quam";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "vero";
                maxResults = 345352L;
                nextToken = "hic";
            }};            

            ListAppsResponse res = sdk.sdk.listApps(req);

            if (res.listAppsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listArtifacts

 Returns a list of artifacts for a specified app, branch, and job. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListArtifactsRequest;
import org.openapis.openapi.models.operations.ListArtifactsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListArtifactsRequest req = new ListArtifactsRequest("omnis", "facilis", "perspiciatis") {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "porro";
                xAmzCredential = "consequuntur";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "error";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "occaecati";
                maxResults = 699098L;
                nextToken = "adipisci";
            }};            

            ListArtifactsResponse res = sdk.sdk.listArtifacts(req);

            if (res.listArtifactsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBackendEnvironments

 Lists the backend environments for an Amplify app. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBackendEnvironmentsRequest;
import org.openapis.openapi.models.operations.ListBackendEnvironmentsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("asperiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBackendEnvironmentsRequest req = new ListBackendEnvironmentsRequest("earum") {{
                xAmzAlgorithm = "modi";
                xAmzContentSha256 = "iste";
                xAmzCredential = "dolorum";
                xAmzDate = "deleniti";
                xAmzSecurityToken = "pariatur";
                xAmzSignature = "provident";
                xAmzSignedHeaders = "nobis";
                environmentName = "libero";
                maxResults = 964490L;
                nextToken = "quaerat";
            }};            

            ListBackendEnvironmentsResponse res = sdk.sdk.listBackendEnvironments(req);

            if (res.listBackendEnvironmentsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBranches

 Lists the branches of an Amplify app. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBranchesRequest;
import org.openapis.openapi.models.operations.ListBranchesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBranchesRequest req = new ListBranchesRequest("aliquid") {{
                xAmzAlgorithm = "dolorem";
                xAmzContentSha256 = "dolorem";
                xAmzCredential = "dolor";
                xAmzDate = "qui";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "excepturi";
                maxResults = 739551L;
                nextToken = "voluptate";
            }};            

            ListBranchesResponse res = sdk.sdk.listBranches(req);

            if (res.listBranchesResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDomainAssociations

 Returns the domain associations for an Amplify app. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDomainAssociationsRequest;
import org.openapis.openapi.models.operations.ListDomainAssociationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDomainAssociationsRequest req = new ListDomainAssociationsRequest("reiciendis") {{
                xAmzAlgorithm = "amet";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "numquam";
                xAmzDate = "veritatis";
                xAmzSecurityToken = "ipsa";
                xAmzSignature = "ipsa";
                xAmzSignedHeaders = "iure";
                maxResults = 487838L;
                nextToken = "quaerat";
            }};            

            ListDomainAssociationsResponse res = sdk.sdk.listDomainAssociations(req);

            if (res.listDomainAssociationsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listJobs

 Lists the jobs for a branch of an Amplify app. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListJobsRequest;
import org.openapis.openapi.models.operations.ListJobsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListJobsRequest req = new ListJobsRequest("quidem", "voluptatibus") {{
                xAmzAlgorithm = "voluptas";
                xAmzContentSha256 = "natus";
                xAmzCredential = "eos";
                xAmzDate = "atque";
                xAmzSecurityToken = "sit";
                xAmzSignature = "fugiat";
                xAmzSignedHeaders = "ab";
                maxResults = 743835L;
                nextToken = "dolorum";
            }};            

            ListJobsResponse res = sdk.sdk.listJobs(req);

            if (res.listJobsResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

 Returns a list of tags for a specified Amazon Resource Name (ARN). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("voluptate") {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "omnis";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "nihil";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listWebhooks

 Returns a list of webhooks for an Amplify app. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListWebhooksRequest;
import org.openapis.openapi.models.operations.ListWebhooksResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListWebhooksRequest req = new ListWebhooksRequest("voluptate") {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "eius";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "amet";
                xAmzSignedHeaders = "optio";
                maxResults = 881586L;
                nextToken = "ad";
            }};            

            ListWebhooksResponse res = sdk.sdk.listWebhooks(req);

            if (res.listWebhooksResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startDeployment

 Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a repository. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartDeploymentRequest;
import org.openapis.openapi.models.operations.StartDeploymentRequestBody;
import org.openapis.openapi.models.operations.StartDeploymentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartDeploymentRequest req = new StartDeploymentRequest(                new StartDeploymentRequestBody() {{
                                jobId = "suscipit";
                                sourceUrl = "deserunt";
                            }};, "provident", "minima") {{
                xAmzAlgorithm = "repellendus";
                xAmzContentSha256 = "totam";
                xAmzCredential = "similique";
                xAmzDate = "alias";
                xAmzSecurityToken = "at";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "tempora";
            }};            

            StartDeploymentResponse res = sdk.sdk.startDeployment(req);

            if (res.startDeploymentResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startJob

 Starts a new job for a branch of an Amplify app. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartJobRequest;
import org.openapis.openapi.models.operations.StartJobRequestBody;
import org.openapis.openapi.models.operations.StartJobRequestBodyJobTypeEnum;
import org.openapis.openapi.models.operations.StartJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartJobRequest req = new StartJobRequest(                new StartJobRequestBody(StartJobRequestBodyJobTypeEnum.WEB_HOOK) {{
                                commitId = "officiis";
                                commitMessage = "qui";
                                commitTime = OffsetDateTime.parse("2021-02-04T11:05:24.484Z");
                                jobId = "esse";
                                jobReason = "harum";
                            }};, "iusto", "ipsum") {{
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "tenetur";
                xAmzCredential = "amet";
                xAmzDate = "tempore";
                xAmzSecurityToken = "accusamus";
                xAmzSignature = "numquam";
                xAmzSignedHeaders = "enim";
            }};            

            StartJobResponse res = sdk.sdk.startJob(req);

            if (res.startJobResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopJob

 Stops a job that is in progress for a branch of an Amplify app. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopJobRequest;
import org.openapis.openapi.models.operations.StopJobResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopJobRequest req = new StopJobRequest("sapiente", "totam", "nihil") {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "neque";
                xAmzDate = "sed";
                xAmzSecurityToken = "vel";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "voluptas";
            }};            

            StopJobResponse res = sdk.sdk.stopJob(req);

            if (res.stopJobResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

 Tags the resource with a tag key and value. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("ipsum", "incidunt");
                                                put("qui", "cupiditate");
                                            }});, "maxime") {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "dicta";
                xAmzDate = "laborum";
                xAmzSecurityToken = "totam";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "aspernatur";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

 Untags a resource with a specified Amazon Resource Name (ARN). 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("distinctio",                 new String[]{{
                                add("aliquid"),
                                add("quam"),
                                add("molestias"),
                            }}) {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "qui";
                xAmzCredential = "neque";
                xAmzDate = "fugit";
                xAmzSecurityToken = "magni";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "sunt";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateApp

 Updates an existing Amplify app. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateAppRequest;
import org.openapis.openapi.models.operations.UpdateAppRequestBody;
import org.openapis.openapi.models.operations.UpdateAppRequestBodyAutoBranchCreationConfig;
import org.openapis.openapi.models.operations.UpdateAppRequestBodyPlatformEnum;
import org.openapis.openapi.models.operations.UpdateAppResponse;
import org.openapis.openapi.models.shared.CustomRule;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StageEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateAppRequest req = new UpdateAppRequest(                new UpdateAppRequestBody() {{
                                accessToken = "nam";
                                autoBranchCreationConfig = new UpdateAppRequestBodyAutoBranchCreationConfig() {{
                                    basicAuthCredentials = "hic";
                                    buildSpec = "voluptatem";
                                    enableAutoBuild = false;
                                    enableBasicAuth = false;
                                    enablePerformanceMode = false;
                                    enablePullRequestPreview = false;
                                    environmentVariables = new java.util.HashMap<String, String>() {{
                                        put("soluta", "nobis");
                                        put("et", "saepe");
                                        put("ipsum", "veritatis");
                                        put("nobis", "quos");
                                    }};
                                    framework = "tempore";
                                    pullRequestEnvironmentName = "cupiditate";
                                    stage = StageEnum.PRODUCTION;
                                }};;
                                autoBranchCreationPatterns = new String[]{{
                                    add("dolorem"),
                                    add("dolore"),
                                    add("labore"),
                                    add("adipisci"),
                                }};
                                basicAuthCredentials = "dolorum";
                                buildSpec = "architecto";
                                customHeaders = "quae";
                                customRules = new org.openapis.openapi.models.shared.CustomRule[]{{
                                    add(new CustomRule("repellendus", "porro") {{
                                        condition = "quas";
                                        source = "itaque";
                                        status = "consequatur";
                                        target = "est";
                                    }}),
                                }};
                                description = "doloribus";
                                enableAutoBranchCreation = false;
                                enableBasicAuth = false;
                                enableBranchAutoBuild = false;
                                enableBranchAutoDeletion = false;
                                environmentVariables = new java.util.HashMap<String, String>() {{
                                    put("facilis", "cupiditate");
                                    put("qui", "quae");
                                }};
                                iamServiceRoleArn = "laudantium";
                                name = "Toni Wolff";
                                oauthToken = "omnis";
                                platform = UpdateAppRequestBodyPlatformEnum.WEB_DYNAMIC;
                                repository = "ipsum";
                            }};, "delectus") {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "vero";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "hic";
                xAmzSignedHeaders = "distinctio";
            }};            

            UpdateAppResponse res = sdk.sdk.updateApp(req);

            if (res.updateAppResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateBranch

 Updates a branch for an Amplify app. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateBranchRequest;
import org.openapis.openapi.models.operations.UpdateBranchRequestBody;
import org.openapis.openapi.models.operations.UpdateBranchRequestBodyStageEnum;
import org.openapis.openapi.models.operations.UpdateBranchResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateBranchRequest req = new UpdateBranchRequest(                new UpdateBranchRequestBody() {{
                                backendEnvironmentArn = "odio";
                                basicAuthCredentials = "similique";
                                buildSpec = "facilis";
                                description = "vero";
                                displayName = "ducimus";
                                enableAutoBuild = false;
                                enableBasicAuth = false;
                                enableNotification = false;
                                enablePerformanceMode = false;
                                enablePullRequestPreview = false;
                                environmentVariables = new java.util.HashMap<String, String>() {{
                                    put("quibusdam", "illum");
                                    put("sequi", "natus");
                                }};
                                framework = "impedit";
                                pullRequestEnvironmentName = "aut";
                                stage = UpdateBranchRequestBodyStageEnum.PULL_REQUEST;
                                ttl = "exercitationem";
                            }};, "nulla", "fugit") {{
                xAmzAlgorithm = "porro";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "doloribus";
                xAmzDate = "iusto";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "alias";
            }};            

            UpdateBranchResponse res = sdk.sdk.updateBranch(req);

            if (res.updateBranchResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDomainAssociation

 Creates a new domain association for an Amplify app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDomainAssociationRequest;
import org.openapis.openapi.models.operations.UpdateDomainAssociationRequestBody;
import org.openapis.openapi.models.operations.UpdateDomainAssociationResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SubDomainSetting;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDomainAssociationRequest req = new UpdateDomainAssociationRequest(                new UpdateDomainAssociationRequestBody() {{
                                autoSubDomainCreationPatterns = new String[]{{
                                    add("ipsam"),
                                    add("ea"),
                                }};
                                autoSubDomainIAMRole = "aspernatur";
                                enableAutoSubDomain = false;
                                subDomainSettings = new org.openapis.openapi.models.shared.SubDomainSetting[]{{
                                    add(new SubDomainSetting("ratione", "ex") {{
                                        branchName = "possimus";
                                        prefix = "magnam";
                                    }}),
                                    add(new SubDomainSetting("dolor", "maiores") {{
                                        branchName = "laudantium";
                                        prefix = "dicta";
                                    }}),
                                }};
                            }};, "quasi", "ex") {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "voluptatibus";
                xAmzDate = "nostrum";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "saepe";
            }};            

            UpdateDomainAssociationResponse res = sdk.sdk.updateDomainAssociation(req);

            if (res.updateDomainAssociationResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWebhook

 Updates a webhook. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWebhookRequest;
import org.openapis.openapi.models.operations.UpdateWebhookRequestBody;
import org.openapis.openapi.models.operations.UpdateWebhookResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWebhookRequest req = new UpdateWebhookRequest(                new UpdateWebhookRequestBody() {{
                                branchName = "impedit";
                                description = "corporis";
                            }};, "veniam") {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "inventore";
                xAmzCredential = "magnam";
                xAmzDate = "ea";
                xAmzSecurityToken = "quo";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "recusandae";
            }};            

            UpdateWebhookResponse res = sdk.sdk.updateWebhook(req);

            if (res.updateWebhookResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
