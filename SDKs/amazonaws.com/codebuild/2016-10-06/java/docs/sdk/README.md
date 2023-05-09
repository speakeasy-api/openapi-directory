# SDK

## Overview

<fullname>CodeBuild</fullname> <p>CodeBuild is a fully managed build service in the cloud. CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy. CodeBuild eliminates the need to provision, manage, and scale your own build servers. It provides prepackaged build environments for the most popular programming languages and build tools, such as Apache Maven, Gradle, and more. You can also fully customize build environments in CodeBuild to use your own build tools. CodeBuild scales automatically to meet peak build requests. You pay only for the build time you consume. For more information about CodeBuild, see the <i> <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html">CodeBuild User Guide</a>.</i> </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codebuild/>
### Available Operations

* [batchDeleteBuilds](#batchdeletebuilds) - Deletes one or more builds.
* [batchGetBuildBatches](#batchgetbuildbatches) - Retrieves information about one or more batch builds.
* [batchGetBuilds](#batchgetbuilds) - Gets information about one or more builds.
* [batchGetProjects](#batchgetprojects) - Gets information about one or more build projects.
* [batchGetReportGroups](#batchgetreportgroups) -  Returns an array of report groups. 
* [batchGetReports](#batchgetreports) -  Returns an array of reports. 
* [createProject](#createproject) - Creates a build project.
* [createReportGroup](#createreportgroup) -  Creates a report group. A report group contains a collection of reports. 
* [createWebhook](#createwebhook) - <p>For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.</p> <important> <p>If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p> </important>
* [deleteBuildBatch](#deletebuildbatch) - Deletes a batch build.
* [deleteProject](#deleteproject) -  Deletes a build project. When you delete a project, its builds are not deleted. 
* [deleteReport](#deletereport) -  Deletes a report. 
* [deleteReportGroup](#deletereportgroup) - Deletes a report group. Before you delete a report group, you must delete its reports. 
* [deleteResourcePolicy](#deleteresourcepolicy) -  Deletes a resource policy that is identified by its resource ARN. 
* [deleteSourceCredentials](#deletesourcecredentials) -  Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. 
* [deleteWebhook](#deletewebhook) - For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.
* [describeCodeCoverages](#describecodecoverages) - Retrieves one or more code coverage reports.
* [describeTestCases](#describetestcases) -  Returns a list of details about test cases for a report. 
* [getReportGroupTrend](#getreportgrouptrend) - Analyzes and accumulates test report values for the specified test reports.
* [getResourcePolicy](#getresourcepolicy) -  Gets a resource policy that is identified by its resource ARN. 
* [importSourceCredentials](#importsourcecredentials) -  Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. 
* [invalidateProjectCache](#invalidateprojectcache) - Resets the cache for a project.
* [listBuildBatches](#listbuildbatches) - Retrieves the identifiers of your build batches in the current region.
* [listBuildBatchesForProject](#listbuildbatchesforproject) - Retrieves the identifiers of the build batches for a specific project.
* [listBuilds](#listbuilds) - Gets a list of build IDs, with each build ID representing a single build.
* [listBuildsForProject](#listbuildsforproject) - Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.
* [listCuratedEnvironmentImages](#listcuratedenvironmentimages) - Gets information about Docker images that are managed by CodeBuild.
* [listProjects](#listprojects) - Gets a list of build project names, with each build project name representing a single build project.
* [listReportGroups](#listreportgroups) -  Gets a list ARNs for the report groups in the current Amazon Web Services account. 
* [listReports](#listreports) -  Returns a list of ARNs for the reports in the current Amazon Web Services account. 
* [listReportsForReportGroup](#listreportsforreportgroup) -  Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>. 
* [listSharedProjects](#listsharedprojects) -  Gets a list of projects that are shared with other Amazon Web Services accounts or users. 
* [listSharedReportGroups](#listsharedreportgroups) -  Gets a list of report groups that are shared with other Amazon Web Services accounts or users. 
* [listSourceCredentials](#listsourcecredentials) -  Returns a list of <code>SourceCredentialsInfo</code> objects. 
* [putResourcePolicy](#putresourcepolicy) -  Stores a resource policy for the ARN of a <code>Project</code> or <code>ReportGroup</code> object. 
* [retryBuild](#retrybuild) - Restarts a build.
* [retryBuildBatch](#retrybuildbatch) - Restarts a failed batch build. Only batch builds that have failed can be retried.
* [startBuild](#startbuild) - Starts running a build.
* [startBuildBatch](#startbuildbatch) - Starts a batch build for a project.
* [stopBuild](#stopbuild) - Attempts to stop running a build.
* [stopBuildBatch](#stopbuildbatch) - Stops a running batch build.
* [updateProject](#updateproject) - Changes the settings of a build project.
* [updateProjectVisibility](#updateprojectvisibility) - <p>Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/public-builds.html">Public build projects</a> in the <i>CodeBuild User Guide</i>.</p> <important> <p>The following should be kept in mind when making your projects public:</p> <ul> <li> <p>All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public.</p> </li> <li> <p>All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are:</p> <ul> <li> <p>Do not store sensitive values, especially Amazon Web Services access key IDs and secret access keys, in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values.</p> </li> <li> <p>Follow <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/webhooks.html#webhook-best-practices">Best practices for using webhooks</a> in the <i>CodeBuild User Guide</i> to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible.</p> </li> </ul> </li> <li> <p>A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded.</p> </li> </ul> </important>
* [updateReportGroup](#updatereportgroup) -  Updates a report group. 
* [updateWebhook](#updatewebhook) - <p> Updates the webhook associated with an CodeBuild build project. </p> <note> <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. </p> </note>

## batchDeleteBuilds

Deletes one or more builds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchDeleteBuildsRequest;
import org.openapis.openapi.models.operations.BatchDeleteBuildsResponse;
import org.openapis.openapi.models.operations.BatchDeleteBuildsXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchDeleteBuildsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchDeleteBuildsRequest req = new BatchDeleteBuildsRequest(                new BatchDeleteBuildsInput(                new String[]{{
                                                add("debitis"),
                                                add("ipsa"),
                                            }});, BatchDeleteBuildsXAmzTargetEnum.CODE_BUILD20161006_BATCH_DELETE_BUILDS) {{
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "suscipit";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "minus";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "voluptatum";
            }};            

            BatchDeleteBuildsResponse res = sdk.sdk.batchDeleteBuilds(req);

            if (res.batchDeleteBuildsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetBuildBatches

Retrieves information about one or more batch builds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetBuildBatchesRequest;
import org.openapis.openapi.models.operations.BatchGetBuildBatchesResponse;
import org.openapis.openapi.models.operations.BatchGetBuildBatchesXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetBuildBatchesInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetBuildBatchesRequest req = new BatchGetBuildBatchesRequest(                new BatchGetBuildBatchesInput(                new String[]{{
                                                add("nisi"),
                                                add("recusandae"),
                                                add("temporibus"),
                                            }});, BatchGetBuildBatchesXAmzTargetEnum.CODE_BUILD20161006_BATCH_GET_BUILD_BATCHES) {{
                xAmzAlgorithm = "ab";
                xAmzContentSha256 = "quis";
                xAmzCredential = "veritatis";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "repellendus";
            }};            

            BatchGetBuildBatchesResponse res = sdk.sdk.batchGetBuildBatches(req);

            if (res.batchGetBuildBatchesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetBuilds

Gets information about one or more builds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetBuildsRequest;
import org.openapis.openapi.models.operations.BatchGetBuildsResponse;
import org.openapis.openapi.models.operations.BatchGetBuildsXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetBuildsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetBuildsRequest req = new BatchGetBuildsRequest(                new BatchGetBuildsInput(                new String[]{{
                                                add("odit"),
                                                add("at"),
                                                add("at"),
                                                add("maiores"),
                                            }});, BatchGetBuildsXAmzTargetEnum.CODE_BUILD20161006_BATCH_GET_BUILDS) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "quod";
                xAmzCredential = "quod";
                xAmzDate = "esse";
                xAmzSecurityToken = "totam";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "dolorum";
            }};            

            BatchGetBuildsResponse res = sdk.sdk.batchGetBuilds(req);

            if (res.batchGetBuildsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetProjects

Gets information about one or more build projects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetProjectsRequest;
import org.openapis.openapi.models.operations.BatchGetProjectsResponse;
import org.openapis.openapi.models.operations.BatchGetProjectsXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetProjectsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetProjectsRequest req = new BatchGetProjectsRequest(                new BatchGetProjectsInput(                new String[]{{
                                                add("officia"),
                                                add("occaecati"),
                                                add("fugit"),
                                            }});, BatchGetProjectsXAmzTargetEnum.CODE_BUILD20161006_BATCH_GET_PROJECTS) {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "hic";
                xAmzCredential = "optio";
                xAmzDate = "totam";
                xAmzSecurityToken = "beatae";
                xAmzSignature = "commodi";
                xAmzSignedHeaders = "molestiae";
            }};            

            BatchGetProjectsResponse res = sdk.sdk.batchGetProjects(req);

            if (res.batchGetProjectsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetReportGroups

 Returns an array of report groups. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetReportGroupsRequest;
import org.openapis.openapi.models.operations.BatchGetReportGroupsResponse;
import org.openapis.openapi.models.operations.BatchGetReportGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetReportGroupsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetReportGroupsRequest req = new BatchGetReportGroupsRequest(                new BatchGetReportGroupsInput(                new String[]{{
                                                add("impedit"),
                                            }});, BatchGetReportGroupsXAmzTargetEnum.CODE_BUILD20161006_BATCH_GET_REPORT_GROUPS) {{
                xAmzAlgorithm = "cum";
                xAmzContentSha256 = "esse";
                xAmzCredential = "ipsum";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "ad";
            }};            

            BatchGetReportGroupsResponse res = sdk.sdk.batchGetReportGroups(req);

            if (res.batchGetReportGroupsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchGetReports

 Returns an array of reports. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchGetReportsRequest;
import org.openapis.openapi.models.operations.BatchGetReportsResponse;
import org.openapis.openapi.models.operations.BatchGetReportsXAmzTargetEnum;
import org.openapis.openapi.models.shared.BatchGetReportsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchGetReportsRequest req = new BatchGetReportsRequest(                new BatchGetReportsInput(                new String[]{{
                                                add("iste"),
                                            }});, BatchGetReportsXAmzTargetEnum.CODE_BUILD20161006_BATCH_GET_REPORTS) {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "natus";
                xAmzCredential = "laboriosam";
                xAmzDate = "hic";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "in";
            }};            

            BatchGetReportsResponse res = sdk.sdk.batchGetReports(req);

            if (res.batchGetReportsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createProject

Creates a build project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateProjectRequest;
import org.openapis.openapi.models.operations.CreateProjectResponse;
import org.openapis.openapi.models.operations.CreateProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.ArtifactNamespaceEnum;
import org.openapis.openapi.models.shared.ArtifactPackagingEnum;
import org.openapis.openapi.models.shared.ArtifactsTypeEnum;
import org.openapis.openapi.models.shared.BatchReportModeTypeEnum;
import org.openapis.openapi.models.shared.BatchRestrictions;
import org.openapis.openapi.models.shared.BucketOwnerAccessEnum;
import org.openapis.openapi.models.shared.BuildStatusConfig;
import org.openapis.openapi.models.shared.CacheModeEnum;
import org.openapis.openapi.models.shared.CacheTypeEnum;
import org.openapis.openapi.models.shared.CloudWatchLogsConfig;
import org.openapis.openapi.models.shared.ComputeTypeEnum;
import org.openapis.openapi.models.shared.CreateProjectInput;
import org.openapis.openapi.models.shared.CredentialProviderTypeEnum;
import org.openapis.openapi.models.shared.EnvironmentTypeEnum;
import org.openapis.openapi.models.shared.EnvironmentVariable;
import org.openapis.openapi.models.shared.EnvironmentVariableTypeEnum;
import org.openapis.openapi.models.shared.FileSystemTypeEnum;
import org.openapis.openapi.models.shared.GitSubmodulesConfig;
import org.openapis.openapi.models.shared.ImagePullCredentialsTypeEnum;
import org.openapis.openapi.models.shared.LogsConfig;
import org.openapis.openapi.models.shared.LogsConfigStatusTypeEnum;
import org.openapis.openapi.models.shared.ProjectArtifacts;
import org.openapis.openapi.models.shared.ProjectBuildBatchConfig;
import org.openapis.openapi.models.shared.ProjectCache;
import org.openapis.openapi.models.shared.ProjectEnvironment;
import org.openapis.openapi.models.shared.ProjectFileSystemLocation;
import org.openapis.openapi.models.shared.ProjectSource;
import org.openapis.openapi.models.shared.ProjectSourceVersion;
import org.openapis.openapi.models.shared.RegistryCredential;
import org.openapis.openapi.models.shared.S3LogsConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceAuth;
import org.openapis.openapi.models.shared.SourceAuthTypeEnum;
import org.openapis.openapi.models.shared.SourceTypeEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.VpcConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateProjectRequest req = new CreateProjectRequest(                new CreateProjectInput(                new ProjectArtifacts(ArtifactsTypeEnum.S3) {{
                                                artifactIdentifier = "iure";
                                                bucketOwnerAccess = BucketOwnerAccessEnum.FULL;
                                                encryptionDisabled = false;
                                                location = "quidem";
                                                name = "Brenda Wisozk";
                                                namespaceType = ArtifactNamespaceEnum.BUILD_ID;
                                                overrideArtifactName = false;
                                                packaging = ArtifactPackagingEnum.NONE;
                                                path = "dolorem";
                                            }};,                 new ProjectEnvironment(ComputeTypeEnum.BUILD_GENERAL1_MEDIUM, "explicabo", EnvironmentTypeEnum.ARM_CONTAINER) {{
                                                certificate = "enim";
                                                environmentVariables = new org.openapis.openapi.models.shared.EnvironmentVariable[]{{
                                                    add(new EnvironmentVariable("architecto", "mollitia") {{
                                                        name = "Ms. Cathy Marks";
                                                        type = EnvironmentVariableTypeEnum.SECRETS_MANAGER;
                                                        value = "sapiente";
                                                    }}),
                                                    add(new EnvironmentVariable("commodi", "quam") {{
                                                        name = "Cecilia Crooks";
                                                        type = EnvironmentVariableTypeEnum.PARAMETER_STORE;
                                                        value = "numquam";
                                                    }}),
                                                    add(new EnvironmentVariable("animi", "enim") {{
                                                        name = "Shannon Mueller";
                                                        type = EnvironmentVariableTypeEnum.PLAINTEXT;
                                                        value = "laborum";
                                                    }}),
                                                }};
                                                imagePullCredentialsType = ImagePullCredentialsTypeEnum.CODEBUILD;
                                                privilegedMode = false;
                                                registryCredential = new RegistryCredential("quo", CredentialProviderTypeEnum.SECRETS_MANAGER);;
                                            }};, "sequi", "tenetur",                 new ProjectSource(SourceTypeEnum.GITHUB) {{
                                                auth = new SourceAuth(SourceAuthTypeEnum.OAUTH) {{
                                                    resource = "id";
                                                }};;
                                                buildStatusConfig = new BuildStatusConfig() {{
                                                    context = "possimus";
                                                    targetUrl = "aut";
                                                }};;
                                                buildspec = "quasi";
                                                gitCloneDepth = 622846L;
                                                gitSubmodulesConfig = new GitSubmodulesConfig(false);;
                                                insecureSsl = false;
                                                location = "temporibus";
                                                reportBuildStatus = false;
                                                sourceIdentifier = "laborum";
                                            }};) {{
                                badgeEnabled = false;
                                buildBatchConfig = new ProjectBuildBatchConfig() {{
                                    batchReportMode = BatchReportModeTypeEnum.REPORT_INDIVIDUAL_BUILDS;
                                    combineArtifacts = false;
                                    restrictions = new BatchRestrictions() {{
                                        computeTypesAllowed = new String[]{{
                                            add("voluptatibus"),
                                            add("vero"),
                                            add("nihil"),
                                            add("praesentium"),
                                        }};
                                        maximumBuildsAllowed = 976762L;
                                    }};;
                                    serviceRole = "ipsa";
                                    timeoutInMins = 604846L;
                                }};;
                                cache = new ProjectCache(CacheTypeEnum.S3) {{
                                    location = "cum";
                                    modes = new org.openapis.openapi.models.shared.CacheModeEnum[]{{
                                        add(CacheModeEnum.LOCAL_DOCKER_LAYER_CACHE),
                                    }};
                                }};;
                                concurrentBuildLimit = 441711L;
                                description = "ut";
                                encryptionKey = "maiores";
                                fileSystemLocations = new org.openapis.openapi.models.shared.ProjectFileSystemLocation[]{{
                                    add(new ProjectFileSystemLocation() {{
                                        identifier = "corporis";
                                        location = "dolore";
                                        mountOptions = "iusto";
                                        mountPoint = "dicta";
                                        type = FileSystemTypeEnum.EFS;
                                    }}),
                                }};
                                logsConfig = new LogsConfig() {{
                                    cloudWatchLogs = new CloudWatchLogsConfig(LogsConfigStatusTypeEnum.DISABLED) {{
                                        groupName = "enim";
                                        streamName = "accusamus";
                                    }};;
                                    s3Logs = new S3LogsConfig(LogsConfigStatusTypeEnum.ENABLED) {{
                                        bucketOwnerAccess = BucketOwnerAccessEnum.FULL;
                                        encryptionDisabled = false;
                                        location = "quae";
                                    }};;
                                }};;
                                queuedTimeoutInMinutes = 216822L;
                                secondaryArtifacts = new org.openapis.openapi.models.shared.ProjectArtifacts[]{{
                                    add(new ProjectArtifacts(ArtifactsTypeEnum.CODEPIPELINE) {{
                                        artifactIdentifier = "molestias";
                                        bucketOwnerAccess = BucketOwnerAccessEnum.READ_ONLY;
                                        encryptionDisabled = false;
                                        location = "pariatur";
                                        name = "Irma Ledner DVM";
                                        namespaceType = ArtifactNamespaceEnum.BUILD_ID;
                                        overrideArtifactName = false;
                                        packaging = ArtifactPackagingEnum.NONE;
                                        path = "itaque";
                                        type = ArtifactsTypeEnum.CODEPIPELINE;
                                    }}),
                                    add(new ProjectArtifacts(ArtifactsTypeEnum.S3) {{
                                        artifactIdentifier = "consequatur";
                                        bucketOwnerAccess = BucketOwnerAccessEnum.FULL;
                                        encryptionDisabled = false;
                                        location = "quibusdam";
                                        name = "Joanna Rau";
                                        namespaceType = ArtifactNamespaceEnum.NONE;
                                        overrideArtifactName = false;
                                        packaging = ArtifactPackagingEnum.NONE;
                                        path = "aliquid";
                                        type = ArtifactsTypeEnum.S3;
                                    }}),
                                    add(new ProjectArtifacts(ArtifactsTypeEnum.NO_ARTIFACTS) {{
                                        artifactIdentifier = "perferendis";
                                        bucketOwnerAccess = BucketOwnerAccessEnum.NONE;
                                        encryptionDisabled = false;
                                        location = "assumenda";
                                        name = "Linda Corkery";
                                        namespaceType = ArtifactNamespaceEnum.NONE;
                                        overrideArtifactName = false;
                                        packaging = ArtifactPackagingEnum.ZIP;
                                        path = "tempore";
                                        type = ArtifactsTypeEnum.CODEPIPELINE;
                                    }}),
                                }};
                                secondarySourceVersions = new org.openapis.openapi.models.shared.ProjectSourceVersion[]{{
                                    add(new ProjectSourceVersion("sint", "aliquid") {{
                                        sourceIdentifier = "non";
                                        sourceVersion = "eligendi";
                                    }}),
                                    add(new ProjectSourceVersion("sint", "officia") {{
                                        sourceIdentifier = "provident";
                                        sourceVersion = "necessitatibus";
                                    }}),
                                }};
                                secondarySources = new org.openapis.openapi.models.shared.ProjectSource[]{{
                                    add(new ProjectSource(SourceTypeEnum.CODECOMMIT) {{
                                        auth = new SourceAuth(SourceAuthTypeEnum.OAUTH) {{
                                            resource = "debitis";
                                            type = SourceAuthTypeEnum.OAUTH;
                                        }};
                                        buildStatusConfig = new BuildStatusConfig() {{
                                            context = "a";
                                            targetUrl = "dolorum";
                                        }};
                                        buildspec = "in";
                                        gitCloneDepth = 449198L;
                                        gitSubmodulesConfig = new GitSubmodulesConfig(false) {{
                                            fetchSubmodules = false;
                                        }};
                                        insecureSsl = false;
                                        location = "illum";
                                        reportBuildStatus = false;
                                        sourceIdentifier = "maiores";
                                        type = SourceTypeEnum.BITBUCKET;
                                    }}),
                                }};
                                sourceVersion = "magnam";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "facere";
                                        value = "ea";
                                    }}),
                                    add(new Tag() {{
                                        key = "aliquid";
                                        value = "laborum";
                                    }}),
                                    add(new Tag() {{
                                        key = "accusamus";
                                        value = "non";
                                    }}),
                                    add(new Tag() {{
                                        key = "occaecati";
                                        value = "enim";
                                    }}),
                                }};
                                timeoutInMinutes = 881736L;
                                vpcConfig = new VpcConfig() {{
                                    securityGroupIds = new String[]{{
                                        add("quidem"),
                                        add("provident"),
                                        add("nam"),
                                        add("id"),
                                    }};
                                    subnets = new String[]{{
                                        add("deleniti"),
                                        add("sapiente"),
                                        add("amet"),
                                    }};
                                    vpcId = "deserunt";
                                }};;
                            }};, CreateProjectXAmzTargetEnum.CODE_BUILD20161006_CREATE_PROJECT) {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "vel";
                xAmzCredential = "natus";
                xAmzDate = "omnis";
                xAmzSecurityToken = "molestiae";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "nihil";
            }};            

            CreateProjectResponse res = sdk.sdk.createProject(req);

            if (res.createProjectOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createReportGroup

 Creates a report group. A report group contains a collection of reports. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateReportGroupRequest;
import org.openapis.openapi.models.operations.CreateReportGroupResponse;
import org.openapis.openapi.models.operations.CreateReportGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateReportGroupInput;
import org.openapis.openapi.models.shared.ReportExportConfig;
import org.openapis.openapi.models.shared.ReportExportConfigTypeEnum;
import org.openapis.openapi.models.shared.ReportPackagingTypeEnum;
import org.openapis.openapi.models.shared.ReportTypeEnum;
import org.openapis.openapi.models.shared.S3ReportExportConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateReportGroupRequest req = new CreateReportGroupRequest(                new CreateReportGroupInput(                new ReportExportConfig() {{
                                                exportConfigType = ReportExportConfigTypeEnum.NO_EXPORT;
                                                s3Destination = new S3ReportExportConfig() {{
                                                    bucket = "id";
                                                    bucketOwner = "labore";
                                                    encryptionDisabled = false;
                                                    encryptionKey = "labore";
                                                    packaging = ReportPackagingTypeEnum.ZIP;
                                                    path = "natus";
                                                }};;
                                            }};, "nobis", ReportTypeEnum.TEST) {{
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "aspernatur";
                                        value = "architecto";
                                    }}),
                                    add(new Tag() {{
                                        key = "magnam";
                                        value = "et";
                                    }}),
                                    add(new Tag() {{
                                        key = "excepturi";
                                        value = "ullam";
                                    }}),
                                    add(new Tag() {{
                                        key = "provident";
                                        value = "quos";
                                    }}),
                                }};
                            }};, CreateReportGroupXAmzTargetEnum.CODE_BUILD20161006_CREATE_REPORT_GROUP) {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "mollitia";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "ad";
                xAmzSignedHeaders = "eum";
            }};            

            CreateReportGroupResponse res = sdk.sdk.createReportGroup(req);

            if (res.createReportGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createWebhook

<p>For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.</p> <important> <p>If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateWebhookRequest;
import org.openapis.openapi.models.operations.CreateWebhookResponse;
import org.openapis.openapi.models.operations.CreateWebhookXAmzTargetEnum;
import org.openapis.openapi.models.shared.CreateWebhookInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.WebhookBuildTypeEnum;
import org.openapis.openapi.models.shared.WebhookFilter;
import org.openapis.openapi.models.shared.WebhookFilterTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateWebhookRequest req = new CreateWebhookRequest(                new CreateWebhookInput("necessitatibus") {{
                                branchFilter = "odit";
                                buildType = WebhookBuildTypeEnum.BUILD;
                                filterGroups = new org.openapis.openapi.models.shared.WebhookFilter[][]{{
                                    add(new org.openapis.openapi.models.shared.WebhookFilter[]{{
                                        add(new WebhookFilter("eius", WebhookFilterTypeEnum.FILE_PATH) {{
                                            excludeMatchedPattern = false;
                                            pattern = "doloribus";
                                            type = WebhookFilterTypeEnum.COMMIT_MESSAGE;
                                        }}),
                                        add(new WebhookFilter("in", WebhookFilterTypeEnum.EVENT) {{
                                            excludeMatchedPattern = false;
                                            pattern = "deleniti";
                                            type = WebhookFilterTypeEnum.FILE_PATH;
                                        }}),
                                    }}),
                                }};
                            }};, CreateWebhookXAmzTargetEnum.CODE_BUILD20161006_CREATE_WEBHOOK) {{
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "repudiandae";
                xAmzCredential = "ullam";
                xAmzDate = "expedita";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "quibusdam";
            }};            

            CreateWebhookResponse res = sdk.sdk.createWebhook(req);

            if (res.createWebhookOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBuildBatch

Deletes a batch build.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBuildBatchRequest;
import org.openapis.openapi.models.operations.DeleteBuildBatchResponse;
import org.openapis.openapi.models.operations.DeleteBuildBatchXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteBuildBatchInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sed") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteBuildBatchRequest req = new DeleteBuildBatchRequest(                new DeleteBuildBatchInput("saepe");, DeleteBuildBatchXAmzTargetEnum.CODE_BUILD20161006_DELETE_BUILD_BATCH) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "accusantium";
                xAmzCredential = "consequuntur";
                xAmzDate = "praesentium";
                xAmzSecurityToken = "natus";
                xAmzSignature = "magni";
                xAmzSignedHeaders = "sunt";
            }};            

            DeleteBuildBatchResponse res = sdk.sdk.deleteBuildBatch(req);

            if (res.deleteBuildBatchOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteProject

 Deletes a build project. When you delete a project, its builds are not deleted. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProjectRequest;
import org.openapis.openapi.models.operations.DeleteProjectResponse;
import org.openapis.openapi.models.operations.DeleteProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteProjectInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteProjectRequest req = new DeleteProjectRequest(                new DeleteProjectInput("illum");, DeleteProjectXAmzTargetEnum.CODE_BUILD20161006_DELETE_PROJECT) {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "ea";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "odit";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "accusantium";
            }};            

            DeleteProjectResponse res = sdk.sdk.deleteProject(req);

            if (res.deleteProjectOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteReport

 Deletes a report. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReportRequest;
import org.openapis.openapi.models.operations.DeleteReportResponse;
import org.openapis.openapi.models.operations.DeleteReportXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteReportInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ab") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReportRequest req = new DeleteReportRequest(                new DeleteReportInput("maiores");, DeleteReportXAmzTargetEnum.CODE_BUILD20161006_DELETE_REPORT) {{
                xAmzAlgorithm = "quidem";
                xAmzContentSha256 = "ipsam";
                xAmzCredential = "voluptate";
                xAmzDate = "autem";
                xAmzSecurityToken = "nam";
                xAmzSignature = "eaque";
                xAmzSignedHeaders = "pariatur";
            }};            

            DeleteReportResponse res = sdk.sdk.deleteReport(req);

            if (res.deleteReportOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteReportGroup

Deletes a report group. Before you delete a report group, you must delete its reports. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteReportGroupRequest;
import org.openapis.openapi.models.operations.DeleteReportGroupResponse;
import org.openapis.openapi.models.operations.DeleteReportGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteReportGroupInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nemo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteReportGroupRequest req = new DeleteReportGroupRequest(                new DeleteReportGroupInput("voluptatibus") {{
                                deleteReports = false;
                            }};, DeleteReportGroupXAmzTargetEnum.CODE_BUILD20161006_DELETE_REPORT_GROUP) {{
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "amet";
                xAmzDate = "aut";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "corporis";
                xAmzSignedHeaders = "hic";
            }};            

            DeleteReportGroupResponse res = sdk.sdk.deleteReportGroup(req);

            if (res.deleteReportGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteResourcePolicy

 Deletes a resource policy that is identified by its resource ARN. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteResourcePolicyRequest;
import org.openapis.openapi.models.operations.DeleteResourcePolicyResponse;
import org.openapis.openapi.models.operations.DeleteResourcePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteResourcePolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteResourcePolicyRequest req = new DeleteResourcePolicyRequest(                new DeleteResourcePolicyInput("nobis");, DeleteResourcePolicyXAmzTargetEnum.CODE_BUILD20161006_DELETE_RESOURCE_POLICY) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "quis";
                xAmzCredential = "totam";
                xAmzDate = "dignissimos";
                xAmzSecurityToken = "eaque";
                xAmzSignature = "quis";
                xAmzSignedHeaders = "nesciunt";
            }};            

            DeleteResourcePolicyResponse res = sdk.sdk.deleteResourcePolicy(req);

            if (res.deleteResourcePolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSourceCredentials

 Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSourceCredentialsRequest;
import org.openapis.openapi.models.operations.DeleteSourceCredentialsResponse;
import org.openapis.openapi.models.operations.DeleteSourceCredentialsXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteSourceCredentialsInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSourceCredentialsRequest req = new DeleteSourceCredentialsRequest(                new DeleteSourceCredentialsInput("perferendis");, DeleteSourceCredentialsXAmzTargetEnum.CODE_BUILD20161006_DELETE_SOURCE_CREDENTIALS) {{
                xAmzAlgorithm = "dolores";
                xAmzContentSha256 = "minus";
                xAmzCredential = "quam";
                xAmzDate = "dolor";
                xAmzSecurityToken = "vero";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "hic";
            }};            

            DeleteSourceCredentialsResponse res = sdk.sdk.deleteSourceCredentials(req);

            if (res.deleteSourceCredentialsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWebhook

For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebhookRequest;
import org.openapis.openapi.models.operations.DeleteWebhookResponse;
import org.openapis.openapi.models.operations.DeleteWebhookXAmzTargetEnum;
import org.openapis.openapi.models.shared.DeleteWebhookInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteWebhookRequest req = new DeleteWebhookRequest(                new DeleteWebhookInput("omnis");, DeleteWebhookXAmzTargetEnum.CODE_BUILD20161006_DELETE_WEBHOOK) {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "perspiciatis";
                xAmzCredential = "voluptatem";
                xAmzDate = "porro";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "blanditiis";
                xAmzSignedHeaders = "error";
            }};            

            DeleteWebhookResponse res = sdk.sdk.deleteWebhook(req);

            if (res.deleteWebhookOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeCodeCoverages

Retrieves one or more code coverage reports.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeCodeCoveragesRequest;
import org.openapis.openapi.models.operations.DescribeCodeCoveragesResponse;
import org.openapis.openapi.models.operations.DescribeCodeCoveragesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeCodeCoveragesInput;
import org.openapis.openapi.models.shared.ReportCodeCoverageSortByTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eaque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeCodeCoveragesRequest req = new DescribeCodeCoveragesRequest(                new DescribeCodeCoveragesInput("occaecati") {{
                                maxLineCoveragePercentage = 6990.98;
                                maxResults = 237893L;
                                minLineCoveragePercentage = 9923.97;
                                nextToken = "earum";
                                sortBy = ReportCodeCoverageSortByTypeEnum.LINE_COVERAGE_PERCENTAGE;
                                sortOrder = SortOrderTypeEnum.DESCENDING;
                            }};, DescribeCodeCoveragesXAmzTargetEnum.CODE_BUILD20161006_DESCRIBE_CODE_COVERAGES) {{
                xAmzAlgorithm = "dolorum";
                xAmzContentSha256 = "deleniti";
                xAmzCredential = "pariatur";
                xAmzDate = "provident";
                xAmzSecurityToken = "nobis";
                xAmzSignature = "libero";
                xAmzSignedHeaders = "delectus";
                maxResults = "quaerat";
                nextToken = "quos";
            }};            

            DescribeCodeCoveragesResponse res = sdk.sdk.describeCodeCoverages(req);

            if (res.describeCodeCoveragesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## describeTestCases

 Returns a list of details about test cases for a report. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DescribeTestCasesRequest;
import org.openapis.openapi.models.operations.DescribeTestCasesResponse;
import org.openapis.openapi.models.operations.DescribeTestCasesXAmzTargetEnum;
import org.openapis.openapi.models.shared.DescribeTestCasesInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TestCaseFilter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DescribeTestCasesRequest req = new DescribeTestCasesRequest(                new DescribeTestCasesInput("dolorem") {{
                                filter = new TestCaseFilter() {{
                                    keyword = "dolorem";
                                    status = "dolor";
                                }};;
                                maxResults = 186193L;
                                nextToken = "ipsum";
                            }};, DescribeTestCasesXAmzTargetEnum.CODE_BUILD20161006_DESCRIBE_TEST_CASES) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "cum";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "dignissimos";
                xAmzSignature = "reiciendis";
                xAmzSignedHeaders = "amet";
                maxResults = "dolorum";
                nextToken = "numquam";
            }};            

            DescribeTestCasesResponse res = sdk.sdk.describeTestCases(req);

            if (res.describeTestCasesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getReportGroupTrend

Analyzes and accumulates test report values for the specified test reports.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetReportGroupTrendRequest;
import org.openapis.openapi.models.operations.GetReportGroupTrendResponse;
import org.openapis.openapi.models.operations.GetReportGroupTrendXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetReportGroupTrendInput;
import org.openapis.openapi.models.shared.ReportGroupTrendFieldTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetReportGroupTrendRequest req = new GetReportGroupTrendRequest(                new GetReportGroupTrendInput("ipsa", ReportGroupTrendFieldTypeEnum.PASS_RATE) {{
                                numOfReports = 434417L;
                            }};, GetReportGroupTrendXAmzTargetEnum.CODE_BUILD20161006_GET_REPORT_GROUP_TREND) {{
                xAmzAlgorithm = "odio";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "accusamus";
                xAmzDate = "quidem";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "natus";
            }};            

            GetReportGroupTrendResponse res = sdk.sdk.getReportGroupTrend(req);

            if (res.getReportGroupTrendOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getResourcePolicy

 Gets a resource policy that is identified by its resource ARN. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetResourcePolicyRequest;
import org.openapis.openapi.models.operations.GetResourcePolicyResponse;
import org.openapis.openapi.models.operations.GetResourcePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.GetResourcePolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetResourcePolicyRequest req = new GetResourcePolicyRequest(                new GetResourcePolicyInput("atque");, GetResourcePolicyXAmzTargetEnum.CODE_BUILD20161006_GET_RESOURCE_POLICY) {{
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "fugiat";
                xAmzCredential = "ab";
                xAmzDate = "soluta";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "iusto";
                xAmzSignedHeaders = "voluptate";
            }};            

            GetResourcePolicyResponse res = sdk.sdk.getResourcePolicy(req);

            if (res.getResourcePolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importSourceCredentials

 Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportSourceCredentialsRequest;
import org.openapis.openapi.models.operations.ImportSourceCredentialsResponse;
import org.openapis.openapi.models.operations.ImportSourceCredentialsXAmzTargetEnum;
import org.openapis.openapi.models.shared.AuthTypeEnum;
import org.openapis.openapi.models.shared.ImportSourceCredentialsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.ServerTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ImportSourceCredentialsRequest req = new ImportSourceCredentialsRequest(                new ImportSourceCredentialsInput(AuthTypeEnum.BASIC_AUTH, ServerTypeEnum.BITBUCKET, "necessitatibus") {{
                                shouldOverwrite = false;
                                username = "Michaela.Zboncak";
                            }};, ImportSourceCredentialsXAmzTargetEnum.CODE_BUILD20161006_IMPORT_SOURCE_CREDENTIALS) {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "id";
                xAmzCredential = "saepe";
                xAmzDate = "eius";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "perferendis";
                xAmzSignedHeaders = "amet";
            }};            

            ImportSourceCredentialsResponse res = sdk.sdk.importSourceCredentials(req);

            if (res.importSourceCredentialsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invalidateProjectCache

Resets the cache for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvalidateProjectCacheRequest;
import org.openapis.openapi.models.operations.InvalidateProjectCacheResponse;
import org.openapis.openapi.models.operations.InvalidateProjectCacheXAmzTargetEnum;
import org.openapis.openapi.models.shared.InvalidateProjectCacheInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            InvalidateProjectCacheRequest req = new InvalidateProjectCacheRequest(                new InvalidateProjectCacheInput("accusamus");, InvalidateProjectCacheXAmzTargetEnum.CODE_BUILD20161006_INVALIDATE_PROJECT_CACHE) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "saepe";
                xAmzCredential = "suscipit";
                xAmzDate = "deserunt";
                xAmzSecurityToken = "provident";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "repellendus";
            }};            

            InvalidateProjectCacheResponse res = sdk.sdk.invalidateProjectCache(req);

            if (res.invalidateProjectCacheOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBuildBatches

Retrieves the identifiers of your build batches in the current region.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBuildBatchesRequest;
import org.openapis.openapi.models.operations.ListBuildBatchesResponse;
import org.openapis.openapi.models.operations.ListBuildBatchesXAmzTargetEnum;
import org.openapis.openapi.models.shared.BuildBatchFilter;
import org.openapis.openapi.models.shared.ListBuildBatchesInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderTypeEnum;
import org.openapis.openapi.models.shared.StatusTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBuildBatchesRequest req = new ListBuildBatchesRequest(                new ListBuildBatchesInput() {{
                                filter = new BuildBatchFilter() {{
                                    status = StatusTypeEnum.TIMED_OUT;
                                }};;
                                maxResults = 55L;
                                nextToken = "at";
                                sortOrder = SortOrderTypeEnum.ASCENDING;
                            }};, ListBuildBatchesXAmzTargetEnum.CODE_BUILD20161006_LIST_BUILD_BATCHES) {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "vel";
                xAmzCredential = "quod";
                xAmzDate = "officiis";
                xAmzSecurityToken = "qui";
                xAmzSignature = "dolorum";
                xAmzSignedHeaders = "a";
                maxResults = "esse";
                nextToken = "harum";
            }};            

            ListBuildBatchesResponse res = sdk.sdk.listBuildBatches(req);

            if (res.listBuildBatchesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBuildBatchesForProject

Retrieves the identifiers of the build batches for a specific project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBuildBatchesForProjectRequest;
import org.openapis.openapi.models.operations.ListBuildBatchesForProjectResponse;
import org.openapis.openapi.models.operations.ListBuildBatchesForProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.BuildBatchFilter;
import org.openapis.openapi.models.shared.ListBuildBatchesForProjectInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderTypeEnum;
import org.openapis.openapi.models.shared.StatusTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBuildBatchesForProjectRequest req = new ListBuildBatchesForProjectRequest(                new ListBuildBatchesForProjectInput() {{
                                filter = new BuildBatchFilter() {{
                                    status = StatusTypeEnum.FAILED;
                                }};;
                                maxResults = 788740L;
                                nextToken = "tenetur";
                                projectName = "amet";
                                sortOrder = SortOrderTypeEnum.DESCENDING;
                            }};, ListBuildBatchesForProjectXAmzTargetEnum.CODE_BUILD20161006_LIST_BUILD_BATCHES_FOR_PROJECT) {{
                xAmzAlgorithm = "accusamus";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "enim";
                xAmzDate = "dolorem";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "nihil";
                maxResults = "sit";
                nextToken = "expedita";
            }};            

            ListBuildBatchesForProjectResponse res = sdk.sdk.listBuildBatchesForProject(req);

            if (res.listBuildBatchesForProjectOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBuilds

Gets a list of build IDs, with each build ID representing a single build.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBuildsRequest;
import org.openapis.openapi.models.operations.ListBuildsResponse;
import org.openapis.openapi.models.operations.ListBuildsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListBuildsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("neque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBuildsRequest req = new ListBuildsRequest(                new ListBuildsInput() {{
                                nextToken = "sed";
                                sortOrder = SortOrderTypeEnum.ASCENDING;
                            }};, ListBuildsXAmzTargetEnum.CODE_BUILD20161006_LIST_BUILDS) {{
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "deserunt";
                xAmzDate = "quam";
                xAmzSecurityToken = "ipsum";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "qui";
                nextToken = "cupiditate";
            }};            

            ListBuildsResponse res = sdk.sdk.listBuilds(req);

            if (res.listBuildsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBuildsForProject

Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBuildsForProjectRequest;
import org.openapis.openapi.models.operations.ListBuildsForProjectResponse;
import org.openapis.openapi.models.operations.ListBuildsForProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListBuildsForProjectInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maxime") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBuildsForProjectRequest req = new ListBuildsForProjectRequest(                new ListBuildsForProjectInput("pariatur") {{
                                nextToken = "soluta";
                                sortOrder = SortOrderTypeEnum.ASCENDING;
                            }};, ListBuildsForProjectXAmzTargetEnum.CODE_BUILD20161006_LIST_BUILDS_FOR_PROJECT) {{
                xAmzAlgorithm = "laborum";
                xAmzContentSha256 = "totam";
                xAmzCredential = "incidunt";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "dolores";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "facilis";
                nextToken = "aliquid";
            }};            

            ListBuildsForProjectResponse res = sdk.sdk.listBuildsForProject(req);

            if (res.listBuildsForProjectOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCuratedEnvironmentImages

Gets information about Docker images that are managed by CodeBuild.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCuratedEnvironmentImagesRequest;
import org.openapis.openapi.models.operations.ListCuratedEnvironmentImagesResponse;
import org.openapis.openapi.models.operations.ListCuratedEnvironmentImagesXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCuratedEnvironmentImagesRequest req = new ListCuratedEnvironmentImagesRequest(                new java.util.HashMap<String, Object>() {{
                                put("temporibus", "qui");
                                put("neque", "fugit");
                                put("magni", "odio");
                            }}, ListCuratedEnvironmentImagesXAmzTargetEnum.CODE_BUILD20161006_LIST_CURATED_ENVIRONMENT_IMAGES) {{
                xAmzAlgorithm = "sunt";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "nam";
                xAmzDate = "hic";
                xAmzSecurityToken = "voluptatem";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "soluta";
            }};            

            ListCuratedEnvironmentImagesResponse res = sdk.sdk.listCuratedEnvironmentImages(req);

            if (res.listCuratedEnvironmentImagesOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listProjects

Gets a list of build project names, with each build project name representing a single build project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListProjectsRequest;
import org.openapis.openapi.models.operations.ListProjectsResponse;
import org.openapis.openapi.models.operations.ListProjectsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListProjectsInput;
import org.openapis.openapi.models.shared.ProjectSortByTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListProjectsRequest req = new ListProjectsRequest(                new ListProjectsInput() {{
                                nextToken = "et";
                                sortBy = ProjectSortByTypeEnum.LAST_MODIFIED_TIME;
                                sortOrder = SortOrderTypeEnum.ASCENDING;
                            }};, ListProjectsXAmzTargetEnum.CODE_BUILD20161006_LIST_PROJECTS) {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "nobis";
                xAmzCredential = "quos";
                xAmzDate = "tempore";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "delectus";
                nextToken = "dolorem";
            }};            

            ListProjectsResponse res = sdk.sdk.listProjects(req);

            if (res.listProjectsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReportGroups

 Gets a list ARNs for the report groups in the current Amazon Web Services account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReportGroupsRequest;
import org.openapis.openapi.models.operations.ListReportGroupsResponse;
import org.openapis.openapi.models.operations.ListReportGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListReportGroupsInput;
import org.openapis.openapi.models.shared.ReportGroupSortByTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReportGroupsRequest req = new ListReportGroupsRequest(                new ListReportGroupsInput() {{
                                maxResults = 286915L;
                                nextToken = "adipisci";
                                sortBy = ReportGroupSortByTypeEnum.LAST_MODIFIED_TIME;
                                sortOrder = SortOrderTypeEnum.ASCENDING;
                            }};, ListReportGroupsXAmzTargetEnum.CODE_BUILD20161006_LIST_REPORT_GROUPS) {{
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "aut";
                xAmzCredential = "quas";
                xAmzDate = "itaque";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "est";
                xAmzSignedHeaders = "repellendus";
                maxResults = "porro";
                nextToken = "doloribus";
            }};            

            ListReportGroupsResponse res = sdk.sdk.listReportGroups(req);

            if (res.listReportGroupsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReports

 Returns a list of ARNs for the reports in the current Amazon Web Services account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReportsRequest;
import org.openapis.openapi.models.operations.ListReportsResponse;
import org.openapis.openapi.models.operations.ListReportsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListReportsInput;
import org.openapis.openapi.models.shared.ReportFilter;
import org.openapis.openapi.models.shared.ReportStatusTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReportsRequest req = new ListReportsRequest(                new ListReportsInput() {{
                                filter = new ReportFilter() {{
                                    status = ReportStatusTypeEnum.INCOMPLETE;
                                }};;
                                maxResults = 586410L;
                                nextToken = "qui";
                                sortOrder = SortOrderTypeEnum.ASCENDING;
                            }};, ListReportsXAmzTargetEnum.CODE_BUILD20161006_LIST_REPORTS) {{
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "odio";
                xAmzCredential = "occaecati";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "omnis";
                maxResults = "quis";
                nextToken = "ipsum";
            }};            

            ListReportsResponse res = sdk.sdk.listReports(req);

            if (res.listReportsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listReportsForReportGroup

 Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListReportsForReportGroupRequest;
import org.openapis.openapi.models.operations.ListReportsForReportGroupResponse;
import org.openapis.openapi.models.operations.ListReportsForReportGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListReportsForReportGroupInput;
import org.openapis.openapi.models.shared.ReportFilter;
import org.openapis.openapi.models.shared.ReportStatusTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrderTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListReportsForReportGroupRequest req = new ListReportsForReportGroupRequest(                new ListReportsForReportGroupInput("voluptate") {{
                                filter = new ReportFilter() {{
                                    status = ReportStatusTypeEnum.SUCCEEDED;
                                }};;
                                maxResults = 878870L;
                                nextToken = "tenetur";
                                sortOrder = SortOrderTypeEnum.ASCENDING;
                            }};, ListReportsForReportGroupXAmzTargetEnum.CODE_BUILD20161006_LIST_REPORTS_FOR_REPORT_GROUP) {{
                xAmzAlgorithm = "hic";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "quod";
                xAmzDate = "odio";
                xAmzSecurityToken = "similique";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "vero";
                maxResults = "ducimus";
                nextToken = "dolore";
            }};            

            ListReportsForReportGroupResponse res = sdk.sdk.listReportsForReportGroup(req);

            if (res.listReportsForReportGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSharedProjects

 Gets a list of projects that are shared with other Amazon Web Services accounts or users. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSharedProjectsRequest;
import org.openapis.openapi.models.operations.ListSharedProjectsResponse;
import org.openapis.openapi.models.operations.ListSharedProjectsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSharedProjectsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SharedResourceSortByTypeEnum;
import org.openapis.openapi.models.shared.SortOrderTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSharedProjectsRequest req = new ListSharedProjectsRequest(                new ListSharedProjectsInput() {{
                                maxResults = 848944L;
                                nextToken = "sequi";
                                sortBy = SharedResourceSortByTypeEnum.MODIFIED_TIME;
                                sortOrder = SortOrderTypeEnum.DESCENDING;
                            }};, ListSharedProjectsXAmzTargetEnum.CODE_BUILD20161006_LIST_SHARED_PROJECTS) {{
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "exercitationem";
                xAmzDate = "nulla";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "porro";
                xAmzSignedHeaders = "maiores";
                maxResults = "doloribus";
                nextToken = "iusto";
            }};            

            ListSharedProjectsResponse res = sdk.sdk.listSharedProjects(req);

            if (res.listSharedProjectsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSharedReportGroups

 Gets a list of report groups that are shared with other Amazon Web Services accounts or users. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSharedReportGroupsRequest;
import org.openapis.openapi.models.operations.ListSharedReportGroupsResponse;
import org.openapis.openapi.models.operations.ListSharedReportGroupsXAmzTargetEnum;
import org.openapis.openapi.models.shared.ListSharedReportGroupsInput;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SharedResourceSortByTypeEnum;
import org.openapis.openapi.models.shared.SortOrderTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSharedReportGroupsRequest req = new ListSharedReportGroupsRequest(                new ListSharedReportGroupsInput() {{
                                maxResults = 497391L;
                                nextToken = "alias";
                                sortBy = SharedResourceSortByTypeEnum.MODIFIED_TIME;
                                sortOrder = SortOrderTypeEnum.ASCENDING;
                            }};, ListSharedReportGroupsXAmzTargetEnum.CODE_BUILD20161006_LIST_SHARED_REPORT_GROUPS) {{
                xAmzAlgorithm = "ipsam";
                xAmzContentSha256 = "ea";
                xAmzCredential = "aspernatur";
                xAmzDate = "vel";
                xAmzSecurityToken = "possimus";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "ratione";
                maxResults = "ex";
                nextToken = "laudantium";
            }};            

            ListSharedReportGroupsResponse res = sdk.sdk.listSharedReportGroups(req);

            if (res.listSharedReportGroupsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listSourceCredentials

 Returns a list of <code>SourceCredentialsInfo</code> objects. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListSourceCredentialsRequest;
import org.openapis.openapi.models.operations.ListSourceCredentialsResponse;
import org.openapis.openapi.models.operations.ListSourceCredentialsXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListSourceCredentialsRequest req = new ListSourceCredentialsRequest(                new java.util.HashMap<String, Object>() {{
                                put("maiores", "quasi");
                            }}, ListSourceCredentialsXAmzTargetEnum.CODE_BUILD20161006_LIST_SOURCE_CREDENTIALS) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "nulla";
                xAmzCredential = "excepturi";
                xAmzDate = "voluptatibus";
                xAmzSecurityToken = "nostrum";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "quisquam";
            }};            

            ListSourceCredentialsResponse res = sdk.sdk.listSourceCredentials(req);

            if (res.listSourceCredentialsOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putResourcePolicy

 Stores a resource policy for the ARN of a <code>Project</code> or <code>ReportGroup</code> object. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutResourcePolicyRequest;
import org.openapis.openapi.models.operations.PutResourcePolicyResponse;
import org.openapis.openapi.models.operations.PutResourcePolicyXAmzTargetEnum;
import org.openapis.openapi.models.shared.PutResourcePolicyInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutResourcePolicyRequest req = new PutResourcePolicyRequest(                new PutResourcePolicyInput("ea", "impedit");, PutResourcePolicyXAmzTargetEnum.CODE_BUILD20161006_PUT_RESOURCE_POLICY) {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "aliquid";
                xAmzDate = "inventore";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "quo";
            }};            

            PutResourcePolicyResponse res = sdk.sdk.putResourcePolicy(req);

            if (res.putResourcePolicyOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retryBuild

Restarts a build.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetryBuildRequest;
import org.openapis.openapi.models.operations.RetryBuildResponse;
import org.openapis.openapi.models.operations.RetryBuildXAmzTargetEnum;
import org.openapis.openapi.models.shared.RetryBuildInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetryBuildRequest req = new RetryBuildRequest(                new RetryBuildInput() {{
                                id = "e250fb00-8c42-4e14-9aac-366c8dd6b144";
                            }};, RetryBuildXAmzTargetEnum.CODE_BUILD20161006_RETRY_BUILD) {{
                xAmzAlgorithm = "explicabo";
                xAmzContentSha256 = "provident";
                xAmzCredential = "ipsa";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "magnam";
                xAmzSignature = "odio";
                xAmzSignedHeaders = "eius";
            }};            

            RetryBuildResponse res = sdk.sdk.retryBuild(req);

            if (res.retryBuildOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retryBuildBatch

Restarts a failed batch build. Only batch builds that have failed can be retried.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetryBuildBatchRequest;
import org.openapis.openapi.models.operations.RetryBuildBatchResponse;
import org.openapis.openapi.models.operations.RetryBuildBatchXAmzTargetEnum;
import org.openapis.openapi.models.shared.RetryBuildBatchInput;
import org.openapis.openapi.models.shared.RetryBuildBatchTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetryBuildBatchRequest req = new RetryBuildBatchRequest(                new RetryBuildBatchInput() {{
                                id = "78a7bd46-6d28-4c10-ab3c-dca4251904e5";
                                retryType = RetryBuildBatchTypeEnum.RETRY_ALL_BUILDS;
                            }};, RetryBuildBatchXAmzTargetEnum.CODE_BUILD20161006_RETRY_BUILD_BATCH) {{
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "quo";
                xAmzCredential = "esse";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quod";
            }};            

            RetryBuildBatchResponse res = sdk.sdk.retryBuildBatch(req);

            if (res.retryBuildBatchOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startBuild

Starts running a build.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartBuildRequest;
import org.openapis.openapi.models.operations.StartBuildResponse;
import org.openapis.openapi.models.operations.StartBuildXAmzTargetEnum;
import org.openapis.openapi.models.shared.ArtifactNamespaceEnum;
import org.openapis.openapi.models.shared.ArtifactPackagingEnum;
import org.openapis.openapi.models.shared.ArtifactsTypeEnum;
import org.openapis.openapi.models.shared.BucketOwnerAccessEnum;
import org.openapis.openapi.models.shared.BuildStatusConfig;
import org.openapis.openapi.models.shared.CacheModeEnum;
import org.openapis.openapi.models.shared.CacheTypeEnum;
import org.openapis.openapi.models.shared.CloudWatchLogsConfig;
import org.openapis.openapi.models.shared.ComputeTypeEnum;
import org.openapis.openapi.models.shared.CredentialProviderTypeEnum;
import org.openapis.openapi.models.shared.EnvironmentTypeEnum;
import org.openapis.openapi.models.shared.EnvironmentVariable;
import org.openapis.openapi.models.shared.EnvironmentVariableTypeEnum;
import org.openapis.openapi.models.shared.GitSubmodulesConfig;
import org.openapis.openapi.models.shared.ImagePullCredentialsTypeEnum;
import org.openapis.openapi.models.shared.LogsConfig;
import org.openapis.openapi.models.shared.LogsConfigStatusTypeEnum;
import org.openapis.openapi.models.shared.ProjectArtifacts;
import org.openapis.openapi.models.shared.ProjectCache;
import org.openapis.openapi.models.shared.ProjectSource;
import org.openapis.openapi.models.shared.ProjectSourceVersion;
import org.openapis.openapi.models.shared.RegistryCredential;
import org.openapis.openapi.models.shared.S3LogsConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceAuth;
import org.openapis.openapi.models.shared.SourceAuthTypeEnum;
import org.openapis.openapi.models.shared.SourceTypeEnum;
import org.openapis.openapi.models.shared.StartBuildInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartBuildRequest req = new StartBuildRequest(                new StartBuildInput("inventore") {{
                                artifactsOverride = new ProjectArtifacts(ArtifactsTypeEnum.S3) {{
                                    artifactIdentifier = "totam";
                                    bucketOwnerAccess = BucketOwnerAccessEnum.FULL;
                                    encryptionDisabled = false;
                                    location = "aliquam";
                                    name = "Violet Johns";
                                    namespaceType = ArtifactNamespaceEnum.BUILD_ID;
                                    overrideArtifactName = false;
                                    packaging = ArtifactPackagingEnum.NONE;
                                    path = "accusantium";
                                }};;
                                buildStatusConfigOverride = new BuildStatusConfig() {{
                                    context = "porro";
                                    targetUrl = "eum";
                                }};;
                                buildspecOverride = "quas";
                                cacheOverride = new ProjectCache(CacheTypeEnum.S3) {{
                                    location = "consequuntur";
                                    modes = new org.openapis.openapi.models.shared.CacheModeEnum[]{{
                                        add(CacheModeEnum.LOCAL_DOCKER_LAYER_CACHE),
                                        add(CacheModeEnum.LOCAL_CUSTOM_CACHE),
                                        add(CacheModeEnum.LOCAL_SOURCE_CACHE),
                                    }};
                                }};;
                                certificateOverride = "incidunt";
                                computeTypeOverride = ComputeTypeEnum.BUILD_GENERAL1_LARGE;
                                debugSessionEnabled = false;
                                encryptionKeyOverride = "explicabo";
                                environmentTypeOverride = EnvironmentTypeEnum.LINUX_CONTAINER;
                                environmentVariablesOverride = new org.openapis.openapi.models.shared.EnvironmentVariable[]{{
                                    add(new EnvironmentVariable("atque", "et") {{
                                        name = "Jeannie Cronin";
                                        type = EnvironmentVariableTypeEnum.SECRETS_MANAGER;
                                        value = "occaecati";
                                    }}),
                                    add(new EnvironmentVariable("aliquid", "quasi") {{
                                        name = "Ms. Olive Tillman";
                                        type = EnvironmentVariableTypeEnum.SECRETS_MANAGER;
                                        value = "vero";
                                    }}),
                                }};
                                gitCloneDepthOverride = 904045L;
                                gitSubmodulesConfigOverride = new GitSubmodulesConfig(false);;
                                imageOverride = "vel";
                                imagePullCredentialsTypeOverride = ImagePullCredentialsTypeEnum.SERVICE_ROLE;
                                insecureSslOverride = false;
                                logsConfigOverride = new LogsConfig() {{
                                    cloudWatchLogs = new CloudWatchLogsConfig(LogsConfigStatusTypeEnum.ENABLED) {{
                                        groupName = "rerum";
                                        streamName = "occaecati";
                                    }};;
                                    s3Logs = new S3LogsConfig(LogsConfigStatusTypeEnum.ENABLED) {{
                                        bucketOwnerAccess = BucketOwnerAccessEnum.FULL;
                                        encryptionDisabled = false;
                                        location = "eligendi";
                                    }};;
                                }};;
                                privilegedModeOverride = false;
                                queuedTimeoutInMinutesOverride = 27069L;
                                registryCredentialOverride = new RegistryCredential("culpa", CredentialProviderTypeEnum.SECRETS_MANAGER);;
                                reportBuildStatusOverride = false;
                                secondaryArtifactsOverride = new org.openapis.openapi.models.shared.ProjectArtifacts[]{{
                                    add(new ProjectArtifacts(ArtifactsTypeEnum.NO_ARTIFACTS) {{
                                        artifactIdentifier = "adipisci";
                                        bucketOwnerAccess = BucketOwnerAccessEnum.FULL;
                                        encryptionDisabled = false;
                                        location = "consequuntur";
                                        name = "Sadie Hackett";
                                        namespaceType = ArtifactNamespaceEnum.NONE;
                                        overrideArtifactName = false;
                                        packaging = ArtifactPackagingEnum.ZIP;
                                        path = "provident";
                                        type = ArtifactsTypeEnum.NO_ARTIFACTS;
                                    }}),
                                    add(new ProjectArtifacts(ArtifactsTypeEnum.CODEPIPELINE) {{
                                        artifactIdentifier = "quas";
                                        bucketOwnerAccess = BucketOwnerAccessEnum.READ_ONLY;
                                        encryptionDisabled = false;
                                        location = "quasi";
                                        name = "Jeremiah Mayer";
                                        namespaceType = ArtifactNamespaceEnum.NONE;
                                        overrideArtifactName = false;
                                        packaging = ArtifactPackagingEnum.ZIP;
                                        path = "asperiores";
                                        type = ArtifactsTypeEnum.NO_ARTIFACTS;
                                    }}),
                                    add(new ProjectArtifacts(ArtifactsTypeEnum.NO_ARTIFACTS) {{
                                        artifactIdentifier = "consequuntur";
                                        bucketOwnerAccess = BucketOwnerAccessEnum.NONE;
                                        encryptionDisabled = false;
                                        location = "similique";
                                        name = "Dr. Gene Wiegand";
                                        namespaceType = ArtifactNamespaceEnum.NONE;
                                        overrideArtifactName = false;
                                        packaging = ArtifactPackagingEnum.NONE;
                                        path = "libero";
                                        type = ArtifactsTypeEnum.NO_ARTIFACTS;
                                    }}),
                                }};
                                secondarySourcesOverride = new org.openapis.openapi.models.shared.ProjectSource[]{{
                                    add(new ProjectSource(SourceTypeEnum.S3) {{
                                        auth = new SourceAuth(SourceAuthTypeEnum.OAUTH) {{
                                            resource = "aliquam";
                                            type = SourceAuthTypeEnum.OAUTH;
                                        }};
                                        buildStatusConfig = new BuildStatusConfig() {{
                                            context = "sapiente";
                                            targetUrl = "dicta";
                                        }};
                                        buildspec = "ullam";
                                        gitCloneDepth = 443879L;
                                        gitSubmodulesConfig = new GitSubmodulesConfig(false) {{
                                            fetchSubmodules = false;
                                        }};
                                        insecureSsl = false;
                                        location = "ullam";
                                        reportBuildStatus = false;
                                        sourceIdentifier = "nisi";
                                        type = SourceTypeEnum.CODECOMMIT;
                                    }}),
                                }};
                                secondarySourcesVersionOverride = new org.openapis.openapi.models.shared.ProjectSourceVersion[]{{
                                    add(new ProjectSourceVersion("deleniti", "itaque") {{
                                        sourceIdentifier = "quibusdam";
                                        sourceVersion = "ex";
                                    }}),
                                }};
                                serviceRoleOverride = "dolorum";
                                sourceAuthOverride = new SourceAuth(SourceAuthTypeEnum.OAUTH) {{
                                    resource = "architecto";
                                }};;
                                sourceLocationOverride = "omnis";
                                sourceTypeOverride = SourceTypeEnum.NO_SOURCE;
                                sourceVersion = "quasi";
                                timeoutInMinutesOverride = 869489L;
                            }};, StartBuildXAmzTargetEnum.CODE_BUILD20161006_START_BUILD) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "voluptate";
                xAmzCredential = "ipsa";
                xAmzDate = "minima";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "adipisci";
            }};            

            StartBuildResponse res = sdk.sdk.startBuild(req);

            if (res.startBuildOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## startBuildBatch

Starts a batch build for a project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StartBuildBatchRequest;
import org.openapis.openapi.models.operations.StartBuildBatchResponse;
import org.openapis.openapi.models.operations.StartBuildBatchXAmzTargetEnum;
import org.openapis.openapi.models.shared.ArtifactNamespaceEnum;
import org.openapis.openapi.models.shared.ArtifactPackagingEnum;
import org.openapis.openapi.models.shared.ArtifactsTypeEnum;
import org.openapis.openapi.models.shared.BatchReportModeTypeEnum;
import org.openapis.openapi.models.shared.BatchRestrictions;
import org.openapis.openapi.models.shared.BucketOwnerAccessEnum;
import org.openapis.openapi.models.shared.BuildStatusConfig;
import org.openapis.openapi.models.shared.CacheModeEnum;
import org.openapis.openapi.models.shared.CacheTypeEnum;
import org.openapis.openapi.models.shared.CloudWatchLogsConfig;
import org.openapis.openapi.models.shared.ComputeTypeEnum;
import org.openapis.openapi.models.shared.CredentialProviderTypeEnum;
import org.openapis.openapi.models.shared.EnvironmentTypeEnum;
import org.openapis.openapi.models.shared.EnvironmentVariable;
import org.openapis.openapi.models.shared.EnvironmentVariableTypeEnum;
import org.openapis.openapi.models.shared.GitSubmodulesConfig;
import org.openapis.openapi.models.shared.ImagePullCredentialsTypeEnum;
import org.openapis.openapi.models.shared.LogsConfig;
import org.openapis.openapi.models.shared.LogsConfigStatusTypeEnum;
import org.openapis.openapi.models.shared.ProjectArtifacts;
import org.openapis.openapi.models.shared.ProjectBuildBatchConfig;
import org.openapis.openapi.models.shared.ProjectCache;
import org.openapis.openapi.models.shared.ProjectSource;
import org.openapis.openapi.models.shared.ProjectSourceVersion;
import org.openapis.openapi.models.shared.RegistryCredential;
import org.openapis.openapi.models.shared.S3LogsConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceAuth;
import org.openapis.openapi.models.shared.SourceAuthTypeEnum;
import org.openapis.openapi.models.shared.SourceTypeEnum;
import org.openapis.openapi.models.shared.StartBuildBatchInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iste") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StartBuildBatchRequest req = new StartBuildBatchRequest(                new StartBuildBatchInput("temporibus") {{
                                artifactsOverride = new ProjectArtifacts(ArtifactsTypeEnum.CODEPIPELINE) {{
                                    artifactIdentifier = "rem";
                                    bucketOwnerAccess = BucketOwnerAccessEnum.NONE;
                                    encryptionDisabled = false;
                                    location = "laudantium";
                                    name = "Iris Bernhard";
                                    namespaceType = ArtifactNamespaceEnum.NONE;
                                    overrideArtifactName = false;
                                    packaging = ArtifactPackagingEnum.NONE;
                                    path = "occaecati";
                                }};;
                                buildBatchConfigOverride = new ProjectBuildBatchConfig() {{
                                    batchReportMode = BatchReportModeTypeEnum.REPORT_INDIVIDUAL_BUILDS;
                                    combineArtifacts = false;
                                    restrictions = new BatchRestrictions() {{
                                        computeTypesAllowed = new String[]{{
                                            add("explicabo"),
                                            add("voluptas"),
                                            add("aut"),
                                            add("dignissimos"),
                                        }};
                                        maximumBuildsAllowed = 115484L;
                                    }};;
                                    serviceRole = "maiores";
                                    timeoutInMins = 618480L;
                                }};;
                                buildTimeoutInMinutesOverride = 244651L;
                                buildspecOverride = "voluptatibus";
                                cacheOverride = new ProjectCache(CacheTypeEnum.S3) {{
                                    location = "asperiores";
                                    modes = new org.openapis.openapi.models.shared.CacheModeEnum[]{{
                                        add(CacheModeEnum.LOCAL_SOURCE_CACHE),
                                    }};
                                }};;
                                certificateOverride = "quaerat";
                                computeTypeOverride = ComputeTypeEnum.BUILD_GENERAL1_SMALL;
                                debugSessionEnabled = false;
                                encryptionKeyOverride = "repellendus";
                                environmentTypeOverride = EnvironmentTypeEnum.ARM_CONTAINER;
                                environmentVariablesOverride = new org.openapis.openapi.models.shared.EnvironmentVariable[]{{
                                    add(new EnvironmentVariable("labore", "ab") {{
                                        name = "Blanche Yundt II";
                                        type = EnvironmentVariableTypeEnum.SECRETS_MANAGER;
                                        value = "quod";
                                    }}),
                                    add(new EnvironmentVariable("recusandae", "totam") {{
                                        name = "Kristine Ondricka";
                                        type = EnvironmentVariableTypeEnum.PARAMETER_STORE;
                                        value = "est";
                                    }}),
                                    add(new EnvironmentVariable("facilis", "cum") {{
                                        name = "Chester Kuphal";
                                        type = EnvironmentVariableTypeEnum.PLAINTEXT;
                                        value = "possimus";
                                    }}),
                                    add(new EnvironmentVariable("aliquid", "aperiam") {{
                                        name = "Pearl Hessel";
                                        type = EnvironmentVariableTypeEnum.PARAMETER_STORE;
                                        value = "recusandae";
                                    }}),
                                }};
                                gitCloneDepthOverride = 738683L;
                                gitSubmodulesConfigOverride = new GitSubmodulesConfig(false);;
                                imageOverride = "consectetur";
                                imagePullCredentialsTypeOverride = ImagePullCredentialsTypeEnum.CODEBUILD;
                                insecureSslOverride = false;
                                logsConfigOverride = new LogsConfig() {{
                                    cloudWatchLogs = new CloudWatchLogsConfig(LogsConfigStatusTypeEnum.ENABLED) {{
                                        groupName = "earum";
                                        streamName = "facere";
                                    }};;
                                    s3Logs = new S3LogsConfig(LogsConfigStatusTypeEnum.ENABLED) {{
                                        bucketOwnerAccess = BucketOwnerAccessEnum.FULL;
                                        encryptionDisabled = false;
                                        location = "suscipit";
                                    }};;
                                }};;
                                privilegedModeOverride = false;
                                queuedTimeoutInMinutesOverride = 968972L;
                                registryCredentialOverride = new RegistryCredential("quidem", CredentialProviderTypeEnum.SECRETS_MANAGER);;
                                reportBuildBatchStatusOverride = false;
                                secondaryArtifactsOverride = new org.openapis.openapi.models.shared.ProjectArtifacts[]{{
                                    add(new ProjectArtifacts(ArtifactsTypeEnum.NO_ARTIFACTS) {{
                                        artifactIdentifier = "necessitatibus";
                                        bucketOwnerAccess = BucketOwnerAccessEnum.NONE;
                                        encryptionDisabled = false;
                                        location = "sunt";
                                        name = "Chad Franey IV";
                                        namespaceType = ArtifactNamespaceEnum.BUILD_ID;
                                        overrideArtifactName = false;
                                        packaging = ArtifactPackagingEnum.ZIP;
                                        path = "consectetur";
                                        type = ArtifactsTypeEnum.S3;
                                    }}),
                                    add(new ProjectArtifacts(ArtifactsTypeEnum.CODEPIPELINE) {{
                                        artifactIdentifier = "laboriosam";
                                        bucketOwnerAccess = BucketOwnerAccessEnum.NONE;
                                        encryptionDisabled = false;
                                        location = "voluptates";
                                        name = "Terry Tillman";
                                        namespaceType = ArtifactNamespaceEnum.NONE;
                                        overrideArtifactName = false;
                                        packaging = ArtifactPackagingEnum.NONE;
                                        path = "voluptas";
                                        type = ArtifactsTypeEnum.S3;
                                    }}),
                                    add(new ProjectArtifacts(ArtifactsTypeEnum.CODEPIPELINE) {{
                                        artifactIdentifier = "nobis";
                                        bucketOwnerAccess = BucketOwnerAccessEnum.FULL;
                                        encryptionDisabled = false;
                                        location = "adipisci";
                                        name = "Ernest Labadie";
                                        namespaceType = ArtifactNamespaceEnum.NONE;
                                        overrideArtifactName = false;
                                        packaging = ArtifactPackagingEnum.ZIP;
                                        path = "temporibus";
                                        type = ArtifactsTypeEnum.S3;
                                    }}),
                                    add(new ProjectArtifacts(ArtifactsTypeEnum.CODEPIPELINE) {{
                                        artifactIdentifier = "cum";
                                        bucketOwnerAccess = BucketOwnerAccessEnum.READ_ONLY;
                                        encryptionDisabled = false;
                                        location = "quas";
                                        name = "Danny Nader";
                                        namespaceType = ArtifactNamespaceEnum.BUILD_ID;
                                        overrideArtifactName = false;
                                        packaging = ArtifactPackagingEnum.ZIP;
                                        path = "exercitationem";
                                        type = ArtifactsTypeEnum.NO_ARTIFACTS;
                                    }}),
                                }};
                                secondarySourcesOverride = new org.openapis.openapi.models.shared.ProjectSource[]{{
                                    add(new ProjectSource(SourceTypeEnum.BITBUCKET) {{
                                        auth = new SourceAuth(SourceAuthTypeEnum.OAUTH) {{
                                            resource = "sed";
                                            type = SourceAuthTypeEnum.OAUTH;
                                        }};
                                        buildStatusConfig = new BuildStatusConfig() {{
                                            context = "reiciendis";
                                            targetUrl = "explicabo";
                                        }};
                                        buildspec = "asperiores";
                                        gitCloneDepth = 707918L;
                                        gitSubmodulesConfig = new GitSubmodulesConfig(false) {{
                                            fetchSubmodules = false;
                                        }};
                                        insecureSsl = false;
                                        location = "voluptate";
                                        reportBuildStatus = false;
                                        sourceIdentifier = "expedita";
                                        type = SourceTypeEnum.CODECOMMIT;
                                    }}),
                                    add(new ProjectSource(SourceTypeEnum.BITBUCKET) {{
                                        auth = new SourceAuth(SourceAuthTypeEnum.OAUTH) {{
                                            resource = "dolore";
                                            type = SourceAuthTypeEnum.OAUTH;
                                        }};
                                        buildStatusConfig = new BuildStatusConfig() {{
                                            context = "laborum";
                                            targetUrl = "sed";
                                        }};
                                        buildspec = "in";
                                        gitCloneDepth = 417486L;
                                        gitSubmodulesConfig = new GitSubmodulesConfig(false) {{
                                            fetchSubmodules = false;
                                        }};
                                        insecureSsl = false;
                                        location = "quidem";
                                        reportBuildStatus = false;
                                        sourceIdentifier = "explicabo";
                                        type = SourceTypeEnum.GITHUB;
                                    }}),
                                    add(new ProjectSource(SourceTypeEnum.NO_SOURCE) {{
                                        auth = new SourceAuth(SourceAuthTypeEnum.OAUTH) {{
                                            resource = "architecto";
                                            type = SourceAuthTypeEnum.OAUTH;
                                        }};
                                        buildStatusConfig = new BuildStatusConfig() {{
                                            context = "suscipit";
                                            targetUrl = "sapiente";
                                        }};
                                        buildspec = "debitis";
                                        gitCloneDepth = 72434L;
                                        gitSubmodulesConfig = new GitSubmodulesConfig(false) {{
                                            fetchSubmodules = false;
                                        }};
                                        insecureSsl = false;
                                        location = "reiciendis";
                                        reportBuildStatus = false;
                                        sourceIdentifier = "perferendis";
                                        type = SourceTypeEnum.S3;
                                    }}),
                                }};
                                secondarySourcesVersionOverride = new org.openapis.openapi.models.shared.ProjectSourceVersion[]{{
                                    add(new ProjectSourceVersion("eius", "necessitatibus") {{
                                        sourceIdentifier = "sed";
                                        sourceVersion = "provident";
                                    }}),
                                    add(new ProjectSourceVersion("occaecati", "quos") {{
                                        sourceIdentifier = "ipsum";
                                        sourceVersion = "ea";
                                    }}),
                                }};
                                serviceRoleOverride = "voluptatibus";
                                sourceAuthOverride = new SourceAuth(SourceAuthTypeEnum.OAUTH) {{
                                    resource = "tempora";
                                }};;
                                sourceLocationOverride = "tempora";
                                sourceTypeOverride = SourceTypeEnum.S3;
                                sourceVersion = "reiciendis";
                            }};, StartBuildBatchXAmzTargetEnum.CODE_BUILD20161006_START_BUILD_BATCH) {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "sit";
                xAmzCredential = "non";
                xAmzDate = "officiis";
                xAmzSecurityToken = "praesentium";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "quaerat";
            }};            

            StartBuildBatchResponse res = sdk.sdk.startBuildBatch(req);

            if (res.startBuildBatchOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopBuild

Attempts to stop running a build.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopBuildRequest;
import org.openapis.openapi.models.operations.StopBuildResponse;
import org.openapis.openapi.models.operations.StopBuildXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopBuildInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopBuildRequest req = new StopBuildRequest(                new StopBuildInput("ipsam");, StopBuildXAmzTargetEnum.CODE_BUILD20161006_STOP_BUILD) {{
                xAmzAlgorithm = "debitis";
                xAmzContentSha256 = "rem";
                xAmzCredential = "sit";
                xAmzDate = "nobis";
                xAmzSecurityToken = "error";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "minima";
            }};            

            StopBuildResponse res = sdk.sdk.stopBuild(req);

            if (res.stopBuildOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## stopBuildBatch

Stops a running batch build.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.StopBuildBatchRequest;
import org.openapis.openapi.models.operations.StopBuildBatchResponse;
import org.openapis.openapi.models.operations.StopBuildBatchXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.StopBuildBatchInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            StopBuildBatchRequest req = new StopBuildBatchRequest(                new StopBuildBatchInput("reiciendis");, StopBuildBatchXAmzTargetEnum.CODE_BUILD20161006_STOP_BUILD_BATCH) {{
                xAmzAlgorithm = "nulla";
                xAmzContentSha256 = "magni";
                xAmzCredential = "aperiam";
                xAmzDate = "saepe";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "veniam";
                xAmzSignedHeaders = "in";
            }};            

            StopBuildBatchResponse res = sdk.sdk.stopBuildBatch(req);

            if (res.stopBuildBatchOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProject

Changes the settings of a build project.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectRequest;
import org.openapis.openapi.models.operations.UpdateProjectResponse;
import org.openapis.openapi.models.operations.UpdateProjectXAmzTargetEnum;
import org.openapis.openapi.models.shared.ArtifactNamespaceEnum;
import org.openapis.openapi.models.shared.ArtifactPackagingEnum;
import org.openapis.openapi.models.shared.ArtifactsTypeEnum;
import org.openapis.openapi.models.shared.BatchReportModeTypeEnum;
import org.openapis.openapi.models.shared.BatchRestrictions;
import org.openapis.openapi.models.shared.BucketOwnerAccessEnum;
import org.openapis.openapi.models.shared.BuildStatusConfig;
import org.openapis.openapi.models.shared.CacheModeEnum;
import org.openapis.openapi.models.shared.CacheTypeEnum;
import org.openapis.openapi.models.shared.CloudWatchLogsConfig;
import org.openapis.openapi.models.shared.ComputeTypeEnum;
import org.openapis.openapi.models.shared.CredentialProviderTypeEnum;
import org.openapis.openapi.models.shared.EnvironmentTypeEnum;
import org.openapis.openapi.models.shared.EnvironmentVariable;
import org.openapis.openapi.models.shared.EnvironmentVariableTypeEnum;
import org.openapis.openapi.models.shared.FileSystemTypeEnum;
import org.openapis.openapi.models.shared.GitSubmodulesConfig;
import org.openapis.openapi.models.shared.ImagePullCredentialsTypeEnum;
import org.openapis.openapi.models.shared.LogsConfig;
import org.openapis.openapi.models.shared.LogsConfigStatusTypeEnum;
import org.openapis.openapi.models.shared.ProjectArtifacts;
import org.openapis.openapi.models.shared.ProjectBuildBatchConfig;
import org.openapis.openapi.models.shared.ProjectCache;
import org.openapis.openapi.models.shared.ProjectEnvironment;
import org.openapis.openapi.models.shared.ProjectFileSystemLocation;
import org.openapis.openapi.models.shared.ProjectSource;
import org.openapis.openapi.models.shared.ProjectSourceVersion;
import org.openapis.openapi.models.shared.RegistryCredential;
import org.openapis.openapi.models.shared.S3LogsConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SourceAuth;
import org.openapis.openapi.models.shared.SourceAuthTypeEnum;
import org.openapis.openapi.models.shared.SourceTypeEnum;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UpdateProjectInput;
import org.openapis.openapi.models.shared.VpcConfig;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProjectRequest req = new UpdateProjectRequest(                new UpdateProjectInput("beatae") {{
                                artifacts = new ProjectArtifacts(ArtifactsTypeEnum.S3) {{
                                    artifactIdentifier = "exercitationem";
                                    bucketOwnerAccess = BucketOwnerAccessEnum.READ_ONLY;
                                    encryptionDisabled = false;
                                    location = "cum";
                                    name = "Lee Lehner";
                                    namespaceType = ArtifactNamespaceEnum.BUILD_ID;
                                    overrideArtifactName = false;
                                    packaging = ArtifactPackagingEnum.ZIP;
                                    path = "neque";
                                }};;
                                badgeEnabled = false;
                                buildBatchConfig = new ProjectBuildBatchConfig() {{
                                    batchReportMode = BatchReportModeTypeEnum.REPORT_AGGREGATED_BATCH;
                                    combineArtifacts = false;
                                    restrictions = new BatchRestrictions() {{
                                        computeTypesAllowed = new String[]{{
                                            add("officia"),
                                            add("dolorum"),
                                        }};
                                        maximumBuildsAllowed = 548361L;
                                    }};;
                                    serviceRole = "accusamus";
                                    timeoutInMins = 272683L;
                                }};;
                                cache = new ProjectCache(CacheTypeEnum.S3) {{
                                    location = "fugit";
                                    modes = new org.openapis.openapi.models.shared.CacheModeEnum[]{{
                                        add(CacheModeEnum.LOCAL_CUSTOM_CACHE),
                                        add(CacheModeEnum.LOCAL_DOCKER_LAYER_CACHE),
                                    }};
                                }};;
                                concurrentBuildLimit = 635057L;
                                description = "expedita";
                                encryptionKey = "magnam";
                                environment = new ProjectEnvironment(ComputeTypeEnum.BUILD_GENERAL1_SMALL, "esse", EnvironmentTypeEnum.LINUX_CONTAINER) {{
                                    certificate = "sit";
                                    environmentVariables = new org.openapis.openapi.models.shared.EnvironmentVariable[]{{
                                        add(new EnvironmentVariable("vel", "nostrum") {{
                                            name = "Ms. Lamar Hessel";
                                            type = EnvironmentVariableTypeEnum.PLAINTEXT;
                                            value = "sit";
                                        }}),
                                        add(new EnvironmentVariable("dicta", "architecto") {{
                                            name = "Evan Altenwerth";
                                            type = EnvironmentVariableTypeEnum.PLAINTEXT;
                                            value = "harum";
                                        }}),
                                        add(new EnvironmentVariable("laboriosam", "alias") {{
                                            name = "Francisco Powlowski";
                                            type = EnvironmentVariableTypeEnum.SECRETS_MANAGER;
                                            value = "tenetur";
                                        }}),
                                    }};
                                    imagePullCredentialsType = ImagePullCredentialsTypeEnum.CODEBUILD;
                                    privilegedMode = false;
                                    registryCredential = new RegistryCredential("deserunt", CredentialProviderTypeEnum.SECRETS_MANAGER);;
                                }};;
                                fileSystemLocations = new org.openapis.openapi.models.shared.ProjectFileSystemLocation[]{{
                                    add(new ProjectFileSystemLocation() {{
                                        identifier = "unde";
                                        location = "reiciendis";
                                        mountOptions = "provident";
                                        mountPoint = "repellendus";
                                        type = FileSystemTypeEnum.EFS;
                                    }}),
                                    add(new ProjectFileSystemLocation() {{
                                        identifier = "delectus";
                                        location = "voluptates";
                                        mountOptions = "perferendis";
                                        mountPoint = "est";
                                        type = FileSystemTypeEnum.EFS;
                                    }}),
                                }};
                                logsConfig = new LogsConfig() {{
                                    cloudWatchLogs = new CloudWatchLogsConfig(LogsConfigStatusTypeEnum.DISABLED) {{
                                        groupName = "reprehenderit";
                                        streamName = "facere";
                                    }};;
                                    s3Logs = new S3LogsConfig(LogsConfigStatusTypeEnum.DISABLED) {{
                                        bucketOwnerAccess = BucketOwnerAccessEnum.READ_ONLY;
                                        encryptionDisabled = false;
                                        location = "mollitia";
                                    }};;
                                }};;
                                queuedTimeoutInMinutes = 333965L;
                                secondaryArtifacts = new org.openapis.openapi.models.shared.ProjectArtifacts[]{{
                                    add(new ProjectArtifacts(ArtifactsTypeEnum.CODEPIPELINE) {{
                                        artifactIdentifier = "quisquam";
                                        bucketOwnerAccess = BucketOwnerAccessEnum.FULL;
                                        encryptionDisabled = false;
                                        location = "quasi";
                                        name = "Mitchell Zboncak";
                                        namespaceType = ArtifactNamespaceEnum.BUILD_ID;
                                        overrideArtifactName = false;
                                        packaging = ArtifactPackagingEnum.ZIP;
                                        path = "et";
                                        type = ArtifactsTypeEnum.S3;
                                    }}),
                                }};
                                secondarySourceVersions = new org.openapis.openapi.models.shared.ProjectSourceVersion[]{{
                                    add(new ProjectSourceVersion("error", "officiis") {{
                                        sourceIdentifier = "ea";
                                        sourceVersion = "atque";
                                    }}),
                                    add(new ProjectSourceVersion("natus", "minima") {{
                                        sourceIdentifier = "officiis";
                                        sourceVersion = "accusamus";
                                    }}),
                                    add(new ProjectSourceVersion("maiores", "corrupti") {{
                                        sourceIdentifier = "aspernatur";
                                        sourceVersion = "ex";
                                    }}),
                                    add(new ProjectSourceVersion("blanditiis", "suscipit") {{
                                        sourceIdentifier = "at";
                                        sourceVersion = "error";
                                    }}),
                                }};
                                secondarySources = new org.openapis.openapi.models.shared.ProjectSource[]{{
                                    add(new ProjectSource(SourceTypeEnum.CODECOMMIT) {{
                                        auth = new SourceAuth(SourceAuthTypeEnum.OAUTH) {{
                                            resource = "atque";
                                            type = SourceAuthTypeEnum.OAUTH;
                                        }};
                                        buildStatusConfig = new BuildStatusConfig() {{
                                            context = "atque";
                                            targetUrl = "sunt";
                                        }};
                                        buildspec = "recusandae";
                                        gitCloneDepth = 680697L;
                                        gitSubmodulesConfig = new GitSubmodulesConfig(false) {{
                                            fetchSubmodules = false;
                                        }};
                                        insecureSsl = false;
                                        location = "repellendus";
                                        reportBuildStatus = false;
                                        sourceIdentifier = "labore";
                                        type = SourceTypeEnum.NO_SOURCE;
                                    }}),
                                    add(new ProjectSource(SourceTypeEnum.NO_SOURCE) {{
                                        auth = new SourceAuth(SourceAuthTypeEnum.OAUTH) {{
                                            resource = "repudiandae";
                                            type = SourceAuthTypeEnum.OAUTH;
                                        }};
                                        buildStatusConfig = new BuildStatusConfig() {{
                                            context = "dicta";
                                            targetUrl = "accusantium";
                                        }};
                                        buildspec = "beatae";
                                        gitCloneDepth = 174772L;
                                        gitSubmodulesConfig = new GitSubmodulesConfig(false) {{
                                            fetchSubmodules = false;
                                        }};
                                        insecureSsl = false;
                                        location = "enim";
                                        reportBuildStatus = false;
                                        sourceIdentifier = "laboriosam";
                                        type = SourceTypeEnum.CODEPIPELINE;
                                    }}),
                                    add(new ProjectSource(SourceTypeEnum.CODEPIPELINE) {{
                                        auth = new SourceAuth(SourceAuthTypeEnum.OAUTH) {{
                                            resource = "molestias";
                                            type = SourceAuthTypeEnum.OAUTH;
                                        }};
                                        buildStatusConfig = new BuildStatusConfig() {{
                                            context = "magnam";
                                            targetUrl = "saepe";
                                        }};
                                        buildspec = "consequuntur";
                                        gitCloneDepth = 580107L;
                                        gitSubmodulesConfig = new GitSubmodulesConfig(false) {{
                                            fetchSubmodules = false;
                                        }};
                                        insecureSsl = false;
                                        location = "officiis";
                                        reportBuildStatus = false;
                                        sourceIdentifier = "perspiciatis";
                                        type = SourceTypeEnum.S3;
                                    }}),
                                    add(new ProjectSource(SourceTypeEnum.CODECOMMIT) {{
                                        auth = new SourceAuth(SourceAuthTypeEnum.OAUTH) {{
                                            resource = "eveniet";
                                            type = SourceAuthTypeEnum.OAUTH;
                                        }};
                                        buildStatusConfig = new BuildStatusConfig() {{
                                            context = "occaecati";
                                            targetUrl = "consequuntur";
                                        }};
                                        buildspec = "fugit";
                                        gitCloneDepth = 661118L;
                                        gitSubmodulesConfig = new GitSubmodulesConfig(false) {{
                                            fetchSubmodules = false;
                                        }};
                                        insecureSsl = false;
                                        location = "quis";
                                        reportBuildStatus = false;
                                        sourceIdentifier = "reprehenderit";
                                        type = SourceTypeEnum.BITBUCKET;
                                    }}),
                                }};
                                serviceRole = "corporis";
                                source = new ProjectSource(SourceTypeEnum.BITBUCKET) {{
                                    auth = new SourceAuth(SourceAuthTypeEnum.OAUTH) {{
                                        resource = "eveniet";
                                    }};;
                                    buildStatusConfig = new BuildStatusConfig() {{
                                        context = "non";
                                        targetUrl = "vero";
                                    }};;
                                    buildspec = "doloremque";
                                    gitCloneDepth = 434156L;
                                    gitSubmodulesConfig = new GitSubmodulesConfig(false);;
                                    insecureSsl = false;
                                    location = "ipsa";
                                    reportBuildStatus = false;
                                    sourceIdentifier = "totam";
                                }};;
                                sourceVersion = "quae";
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "eveniet";
                                        value = "qui";
                                    }}),
                                    add(new Tag() {{
                                        key = "cum";
                                        value = "iure";
                                    }}),
                                }};
                                timeoutInMinutes = 898063L;
                                vpcConfig = new VpcConfig() {{
                                    securityGroupIds = new String[]{{
                                        add("laborum"),
                                    }};
                                    subnets = new String[]{{
                                        add("voluptatum"),
                                        add("rem"),
                                        add("aliquam"),
                                    }};
                                    vpcId = "ad";
                                }};;
                            }};, UpdateProjectXAmzTargetEnum.CODE_BUILD20161006_UPDATE_PROJECT) {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "alias";
                xAmzCredential = "corporis";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "mollitia";
                xAmzSignedHeaders = "voluptas";
            }};            

            UpdateProjectResponse res = sdk.sdk.updateProject(req);

            if (res.updateProjectOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateProjectVisibility

<p>Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/public-builds.html">Public build projects</a> in the <i>CodeBuild User Guide</i>.</p> <important> <p>The following should be kept in mind when making your projects public:</p> <ul> <li> <p>All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public.</p> </li> <li> <p>All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are:</p> <ul> <li> <p>Do not store sensitive values, especially Amazon Web Services access key IDs and secret access keys, in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values.</p> </li> <li> <p>Follow <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/webhooks.html#webhook-best-practices">Best practices for using webhooks</a> in the <i>CodeBuild User Guide</i> to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible.</p> </li> </ul> </li> <li> <p>A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded.</p> </li> </ul> </important>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateProjectVisibilityRequest;
import org.openapis.openapi.models.operations.UpdateProjectVisibilityResponse;
import org.openapis.openapi.models.operations.UpdateProjectVisibilityXAmzTargetEnum;
import org.openapis.openapi.models.shared.ProjectVisibilityTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateProjectVisibilityInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("alias") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateProjectVisibilityRequest req = new UpdateProjectVisibilityRequest(                new UpdateProjectVisibilityInput("maiores", ProjectVisibilityTypeEnum.PRIVATE_) {{
                                resourceAccessRole = "dolores";
                            }};, UpdateProjectVisibilityXAmzTargetEnum.CODE_BUILD20161006_UPDATE_PROJECT_VISIBILITY) {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "minima";
                xAmzCredential = "dolore";
                xAmzDate = "dolorum";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "recusandae";
            }};            

            UpdateProjectVisibilityResponse res = sdk.sdk.updateProjectVisibility(req);

            if (res.updateProjectVisibilityOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateReportGroup

 Updates a report group. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateReportGroupRequest;
import org.openapis.openapi.models.operations.UpdateReportGroupResponse;
import org.openapis.openapi.models.operations.UpdateReportGroupXAmzTargetEnum;
import org.openapis.openapi.models.shared.ReportExportConfig;
import org.openapis.openapi.models.shared.ReportExportConfigTypeEnum;
import org.openapis.openapi.models.shared.ReportPackagingTypeEnum;
import org.openapis.openapi.models.shared.S3ReportExportConfig;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;
import org.openapis.openapi.models.shared.UpdateReportGroupInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateReportGroupRequest req = new UpdateReportGroupRequest(                new UpdateReportGroupInput("quaerat") {{
                                exportConfig = new ReportExportConfig() {{
                                    exportConfigType = ReportExportConfigTypeEnum.S3;
                                    s3Destination = new S3ReportExportConfig() {{
                                        bucket = "ex";
                                        bucketOwner = "ut";
                                        encryptionDisabled = false;
                                        encryptionKey = "culpa";
                                        packaging = ReportPackagingTypeEnum.ZIP;
                                        path = "debitis";
                                    }};;
                                }};;
                                tags = new org.openapis.openapi.models.shared.Tag[]{{
                                    add(new Tag() {{
                                        key = "eum";
                                        value = "nemo";
                                    }}),
                                    add(new Tag() {{
                                        key = "recusandae";
                                        value = "esse";
                                    }}),
                                    add(new Tag() {{
                                        key = "provident";
                                        value = "quis";
                                    }}),
                                }};
                            }};, UpdateReportGroupXAmzTargetEnum.CODE_BUILD20161006_UPDATE_REPORT_GROUP) {{
                xAmzAlgorithm = "eum";
                xAmzContentSha256 = "reiciendis";
                xAmzCredential = "provident";
                xAmzDate = "aspernatur";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "animi";
            }};            

            UpdateReportGroupResponse res = sdk.sdk.updateReportGroup(req);

            if (res.updateReportGroupOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateWebhook

<p> Updates the webhook associated with an CodeBuild build project. </p> <note> <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. </p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateWebhookRequest;
import org.openapis.openapi.models.operations.UpdateWebhookResponse;
import org.openapis.openapi.models.operations.UpdateWebhookXAmzTargetEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateWebhookInput;
import org.openapis.openapi.models.shared.WebhookBuildTypeEnum;
import org.openapis.openapi.models.shared.WebhookFilter;
import org.openapis.openapi.models.shared.WebhookFilterTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateWebhookRequest req = new UpdateWebhookRequest(                new UpdateWebhookInput("mollitia") {{
                                branchFilter = "provident";
                                buildType = WebhookBuildTypeEnum.BUILD_BATCH;
                                filterGroups = new org.openapis.openapi.models.shared.WebhookFilter[][]{{
                                    add(new org.openapis.openapi.models.shared.WebhookFilter[]{{
                                        add(new WebhookFilter("repellat", WebhookFilterTypeEnum.COMMIT_MESSAGE) {{
                                            excludeMatchedPattern = false;
                                            pattern = "aliquid";
                                            type = WebhookFilterTypeEnum.EVENT;
                                        }}),
                                        add(new WebhookFilter("nam", WebhookFilterTypeEnum.COMMIT_MESSAGE) {{
                                            excludeMatchedPattern = false;
                                            pattern = "ullam";
                                            type = WebhookFilterTypeEnum.HEAD_REF;
                                        }}),
                                    }}),
                                    add(new org.openapis.openapi.models.shared.WebhookFilter[]{{
                                        add(new WebhookFilter("modi", WebhookFilterTypeEnum.COMMIT_MESSAGE) {{
                                            excludeMatchedPattern = false;
                                            pattern = "laborum";
                                            type = WebhookFilterTypeEnum.FILE_PATH;
                                        }}),
                                        add(new WebhookFilter("sapiente", WebhookFilterTypeEnum.FILE_PATH) {{
                                            excludeMatchedPattern = false;
                                            pattern = "molestias";
                                            type = WebhookFilterTypeEnum.COMMIT_MESSAGE;
                                        }}),
                                        add(new WebhookFilter("tempora", WebhookFilterTypeEnum.HEAD_REF) {{
                                            excludeMatchedPattern = false;
                                            pattern = "vitae";
                                            type = WebhookFilterTypeEnum.FILE_PATH;
                                        }}),
                                    }}),
                                    add(new org.openapis.openapi.models.shared.WebhookFilter[]{{
                                        add(new WebhookFilter("quae", WebhookFilterTypeEnum.EVENT) {{
                                            excludeMatchedPattern = false;
                                            pattern = "fugit";
                                            type = WebhookFilterTypeEnum.FILE_PATH;
                                        }}),
                                    }}),
                                }};
                                rotateSecret = false;
                            }};, UpdateWebhookXAmzTargetEnum.CODE_BUILD20161006_UPDATE_WEBHOOK) {{
                xAmzAlgorithm = "velit";
                xAmzContentSha256 = "aspernatur";
                xAmzCredential = "eum";
                xAmzDate = "eius";
                xAmzSecurityToken = "rem";
                xAmzSignature = "at";
                xAmzSignedHeaders = "impedit";
            }};            

            UpdateWebhookResponse res = sdk.sdk.updateWebhook(req);

            if (res.updateWebhookOutput != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
