# SDK

## Overview

<fullname>CodeBuild</fullname> <p>CodeBuild is a fully managed build service in the cloud. CodeBuild compiles your source code, runs unit tests, and produces artifacts that are ready to deploy. CodeBuild eliminates the need to provision, manage, and scale your own build servers. It provides prepackaged build environments for the most popular programming languages and build tools, such as Apache Maven, Gradle, and more. You can also fully customize build environments in CodeBuild to use your own build tools. CodeBuild scales automatically to meet peak build requests. You pay only for the build time you consume. For more information about CodeBuild, see the <i> <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html">CodeBuild User Guide</a>.</i> </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/codebuild/>
### Available Operations

* [BatchDeleteBuilds](#batchdeletebuilds) - Deletes one or more builds.
* [BatchGetBuildBatches](#batchgetbuildbatches) - Retrieves information about one or more batch builds.
* [BatchGetBuilds](#batchgetbuilds) - Gets information about one or more builds.
* [BatchGetProjects](#batchgetprojects) - Gets information about one or more build projects.
* [BatchGetReportGroups](#batchgetreportgroups) -  Returns an array of report groups. 
* [BatchGetReports](#batchgetreports) -  Returns an array of reports. 
* [CreateProject](#createproject) - Creates a build project.
* [CreateReportGroup](#createreportgroup) -  Creates a report group. A report group contains a collection of reports. 
* [CreateWebhook](#createwebhook) - <p>For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.</p> <important> <p>If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p> </important>
* [DeleteBuildBatch](#deletebuildbatch) - Deletes a batch build.
* [DeleteProject](#deleteproject) -  Deletes a build project. When you delete a project, its builds are not deleted. 
* [DeleteReport](#deletereport) -  Deletes a report. 
* [DeleteReportGroup](#deletereportgroup) - Deletes a report group. Before you delete a report group, you must delete its reports. 
* [DeleteResourcePolicy](#deleteresourcepolicy) -  Deletes a resource policy that is identified by its resource ARN. 
* [DeleteSourceCredentials](#deletesourcecredentials) -  Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. 
* [DeleteWebhook](#deletewebhook) - For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.
* [DescribeCodeCoverages](#describecodecoverages) - Retrieves one or more code coverage reports.
* [DescribeTestCases](#describetestcases) -  Returns a list of details about test cases for a report. 
* [GetReportGroupTrend](#getreportgrouptrend) - Analyzes and accumulates test report values for the specified test reports.
* [GetResourcePolicy](#getresourcepolicy) -  Gets a resource policy that is identified by its resource ARN. 
* [ImportSourceCredentials](#importsourcecredentials) -  Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. 
* [InvalidateProjectCache](#invalidateprojectcache) - Resets the cache for a project.
* [ListBuildBatches](#listbuildbatches) - Retrieves the identifiers of your build batches in the current region.
* [ListBuildBatchesForProject](#listbuildbatchesforproject) - Retrieves the identifiers of the build batches for a specific project.
* [ListBuilds](#listbuilds) - Gets a list of build IDs, with each build ID representing a single build.
* [ListBuildsForProject](#listbuildsforproject) - Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.
* [ListCuratedEnvironmentImages](#listcuratedenvironmentimages) - Gets information about Docker images that are managed by CodeBuild.
* [ListProjects](#listprojects) - Gets a list of build project names, with each build project name representing a single build project.
* [ListReportGroups](#listreportgroups) -  Gets a list ARNs for the report groups in the current Amazon Web Services account. 
* [ListReports](#listreports) -  Returns a list of ARNs for the reports in the current Amazon Web Services account. 
* [ListReportsForReportGroup](#listreportsforreportgroup) -  Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>. 
* [ListSharedProjects](#listsharedprojects) -  Gets a list of projects that are shared with other Amazon Web Services accounts or users. 
* [ListSharedReportGroups](#listsharedreportgroups) -  Gets a list of report groups that are shared with other Amazon Web Services accounts or users. 
* [ListSourceCredentials](#listsourcecredentials) -  Returns a list of <code>SourceCredentialsInfo</code> objects. 
* [PutResourcePolicy](#putresourcepolicy) -  Stores a resource policy for the ARN of a <code>Project</code> or <code>ReportGroup</code> object. 
* [RetryBuild](#retrybuild) - Restarts a build.
* [RetryBuildBatch](#retrybuildbatch) - Restarts a failed batch build. Only batch builds that have failed can be retried.
* [StartBuild](#startbuild) - Starts running a build.
* [StartBuildBatch](#startbuildbatch) - Starts a batch build for a project.
* [StopBuild](#stopbuild) - Attempts to stop running a build.
* [StopBuildBatch](#stopbuildbatch) - Stops a running batch build.
* [UpdateProject](#updateproject) - Changes the settings of a build project.
* [UpdateProjectVisibility](#updateprojectvisibility) - <p>Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/public-builds.html">Public build projects</a> in the <i>CodeBuild User Guide</i>.</p> <important> <p>The following should be kept in mind when making your projects public:</p> <ul> <li> <p>All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public.</p> </li> <li> <p>All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are:</p> <ul> <li> <p>Do not store sensitive values, especially Amazon Web Services access key IDs and secret access keys, in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values.</p> </li> <li> <p>Follow <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/webhooks.html#webhook-best-practices">Best practices for using webhooks</a> in the <i>CodeBuild User Guide</i> to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible.</p> </li> </ul> </li> <li> <p>A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded.</p> </li> </ul> </important>
* [UpdateReportGroup](#updatereportgroup) -  Updates a report group. 
* [UpdateWebhook](#updatewebhook) - <p> Updates the webhook associated with an CodeBuild build project. </p> <note> <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. </p> </note>

## BatchDeleteBuilds

Deletes one or more builds.

### Example Usage

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
    res, err := s.SDK.BatchDeleteBuilds(ctx, operations.BatchDeleteBuildsRequest{
        BatchDeleteBuildsInput: shared.BatchDeleteBuildsInput{
            Ids: []string{
                "iure",
                "magnam",
            },
        },
        XAmzAlgorithm: sdk.String("debitis"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("delectus"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("minus"),
        XAmzTarget: operations.BatchDeleteBuildsXAmzTargetEnumCodeBuild20161006BatchDeleteBuilds,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteBuildsOutput != nil {
        // handle response
    }
}
```

## BatchGetBuildBatches

Retrieves information about one or more batch builds.

### Example Usage

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
    res, err := s.SDK.BatchGetBuildBatches(ctx, operations.BatchGetBuildBatchesRequest{
        BatchGetBuildBatchesInput: shared.BatchGetBuildBatchesInput{
            Ids: []string{
                "voluptatum",
                "iusto",
                "excepturi",
                "nisi",
            },
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("temporibus"),
        XAmzCredential: sdk.String("ab"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("deserunt"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzTarget: operations.BatchGetBuildBatchesXAmzTargetEnumCodeBuild20161006BatchGetBuildBatches,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetBuildBatchesOutput != nil {
        // handle response
    }
}
```

## BatchGetBuilds

Gets information about one or more builds.

### Example Usage

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
    res, err := s.SDK.BatchGetBuilds(ctx, operations.BatchGetBuildsRequest{
        BatchGetBuildsInput: shared.BatchGetBuildsInput{
            Ids: []string{
                "repellendus",
                "sapiente",
            },
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("odit"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("quod"),
        XAmzTarget: operations.BatchGetBuildsXAmzTargetEnumCodeBuild20161006BatchGetBuilds,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetBuildsOutput != nil {
        // handle response
    }
}
```

## BatchGetProjects

Gets information about one or more build projects.

### Example Usage

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
    res, err := s.SDK.BatchGetProjects(ctx, operations.BatchGetProjectsRequest{
        BatchGetProjectsInput: shared.BatchGetProjectsInput{
            Names: []string{
                "esse",
                "totam",
                "porro",
                "dolorum",
            },
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("nam"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("fugit"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.BatchGetProjectsXAmzTargetEnumCodeBuild20161006BatchGetProjects,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetProjectsOutput != nil {
        // handle response
    }
}
```

## BatchGetReportGroups

 Returns an array of report groups. 

### Example Usage

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
    res, err := s.SDK.BatchGetReportGroups(ctx, operations.BatchGetReportGroupsRequest{
        BatchGetReportGroupsInput: shared.BatchGetReportGroupsInput{
            ReportGroupArns: []string{
                "totam",
                "beatae",
                "commodi",
                "molestiae",
            },
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("cum"),
        XAmzSecurityToken: sdk.String("esse"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.BatchGetReportGroupsXAmzTargetEnumCodeBuild20161006BatchGetReportGroups,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetReportGroupsOutput != nil {
        // handle response
    }
}
```

## BatchGetReports

 Returns an array of reports. 

### Example Usage

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
    res, err := s.SDK.BatchGetReports(ctx, operations.BatchGetReportsRequest{
        BatchGetReportsInput: shared.BatchGetReportsInput{
            ReportArns: []string{
                "perferendis",
            },
        },
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        XAmzTarget: operations.BatchGetReportsXAmzTargetEnumCodeBuild20161006BatchGetReports,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetReportsOutput != nil {
        // handle response
    }
}
```

## CreateProject

Creates a build project.

### Example Usage

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
    res, err := s.SDK.CreateProject(ctx, operations.CreateProjectRequest{
        CreateProjectInput: shared.CreateProjectInput{
            Artifacts: shared.ProjectArtifacts{
                ArtifactIdentifier: sdk.String("hic"),
                BucketOwnerAccess: shared.BucketOwnerAccessEnumFull.ToPointer(),
                EncryptionDisabled: sdk.Bool(false),
                Location: sdk.String("fuga"),
                Name: sdk.String("Stacy Moore"),
                NamespaceType: shared.ArtifactNamespaceEnumBuildID.ToPointer(),
                OverrideArtifactName: sdk.Bool(false),
                Packaging: shared.ArtifactPackagingEnumNone.ToPointer(),
                Path: sdk.String("ipsa"),
                Type: shared.ArtifactsTypeEnumNoArtifacts,
            },
            BadgeEnabled: sdk.Bool(false),
            BuildBatchConfig: &shared.ProjectBuildBatchConfig{
                BatchReportMode: shared.BatchReportModeTypeEnumReportAggregatedBatch.ToPointer(),
                CombineArtifacts: sdk.Bool(false),
                Restrictions: &shared.BatchRestrictions{
                    ComputeTypesAllowed: []string{
                        "laborum",
                        "dolores",
                        "dolorem",
                    },
                    MaximumBuildsAllowed: sdk.Int64(358152),
                },
                ServiceRole: sdk.String("explicabo"),
                TimeoutInMins: sdk.Int64(750686),
            },
            Cache: &shared.ProjectCache{
                Location: sdk.String("enim"),
                Modes: []shared.CacheModeEnum{
                    shared.CacheModeEnumLocalSourceCache,
                    shared.CacheModeEnumLocalDockerLayerCache,
                    shared.CacheModeEnumLocalSourceCache,
                },
                Type: shared.CacheTypeEnumNoCache,
            },
            ConcurrentBuildLimit: sdk.Int64(438601),
            Description: sdk.String("culpa"),
            EncryptionKey: sdk.String("doloribus"),
            Environment: shared.ProjectEnvironment{
                Certificate: sdk.String("sapiente"),
                ComputeType: shared.ComputeTypeEnumBuildGeneral1Small,
                EnvironmentVariables: []shared.EnvironmentVariable{
                    shared.EnvironmentVariable{
                        Name: "Cecilia Crooks",
                        Type: shared.EnvironmentVariableTypeEnumParameterStore.ToPointer(),
                        Value: "numquam",
                    },
                    shared.EnvironmentVariable{
                        Name: "Claudia Krajcik",
                        Type: shared.EnvironmentVariableTypeEnumPlaintext.ToPointer(),
                        Value: "quis",
                    },
                    shared.EnvironmentVariable{
                        Name: "Kayla O'Kon",
                        Type: shared.EnvironmentVariableTypeEnumSecretsManager.ToPointer(),
                        Value: "sequi",
                    },
                },
                Image: "tenetur",
                ImagePullCredentialsType: shared.ImagePullCredentialsTypeEnumCodebuild.ToPointer(),
                PrivilegedMode: sdk.Bool(false),
                RegistryCredential: &shared.RegistryCredential{
                    Credential: "id",
                    CredentialProvider: shared.CredentialProviderTypeEnumSecretsManager,
                },
                Type: shared.EnvironmentTypeEnumWindowsServer2019Container,
            },
            FileSystemLocations: []shared.ProjectFileSystemLocation{
                shared.ProjectFileSystemLocation{
                    Identifier: sdk.String("quasi"),
                    Location: sdk.String("error"),
                    MountOptions: sdk.String("temporibus"),
                    MountPoint: sdk.String("laborum"),
                    Type: shared.FileSystemTypeEnumEfs.ToPointer(),
                },
            },
            LogsConfig: &shared.LogsConfig{
                CloudWatchLogs: &shared.CloudWatchLogsConfig{
                    GroupName: sdk.String("quasi"),
                    Status: shared.LogsConfigStatusTypeEnumDisabled,
                    StreamName: sdk.String("voluptatibus"),
                },
                S3Logs: &shared.S3LogsConfig{
                    BucketOwnerAccess: shared.BucketOwnerAccessEnumFull.ToPointer(),
                    EncryptionDisabled: sdk.Bool(false),
                    Location: sdk.String("nihil"),
                    Status: shared.LogsConfigStatusTypeEnumDisabled,
                },
            },
            Name: "Jose Moen",
            QueuedTimeoutInMinutes: sdk.Int64(19987),
            SecondaryArtifacts: []shared.ProjectArtifacts{
                shared.ProjectArtifacts{
                    ArtifactIdentifier: sdk.String("reprehenderit"),
                    BucketOwnerAccess: shared.BucketOwnerAccessEnumNone.ToPointer(),
                    EncryptionDisabled: sdk.Bool(false),
                    Location: sdk.String("maiores"),
                    Name: sdk.String("Stacy Gulgowski MD"),
                    NamespaceType: shared.ArtifactNamespaceEnumNone.ToPointer(),
                    OverrideArtifactName: sdk.Bool(false),
                    Packaging: shared.ArtifactPackagingEnumZip.ToPointer(),
                    Path: sdk.String("commodi"),
                    Type: shared.ArtifactsTypeEnumNoArtifacts,
                },
            },
            SecondarySourceVersions: []shared.ProjectSourceVersion{
                shared.ProjectSourceVersion{
                    SourceIdentifier: "ipsum",
                    SourceVersion: "quidem",
                },
            },
            SecondarySources: []shared.ProjectSource{
                shared.ProjectSource{
                    Auth: &shared.SourceAuth{
                        Resource: sdk.String("excepturi"),
                        Type: shared.SourceAuthTypeEnumOauth,
                    },
                    BuildStatusConfig: &shared.BuildStatusConfig{
                        Context: sdk.String("pariatur"),
                        TargetURL: sdk.String("modi"),
                    },
                    Buildspec: sdk.String("praesentium"),
                    GitCloneDepth: sdk.Int64(523248),
                    GitSubmodulesConfig: &shared.GitSubmodulesConfig{
                        FetchSubmodules: false,
                    },
                    InsecureSsl: sdk.Bool(false),
                    Location: sdk.String("voluptates"),
                    ReportBuildStatus: sdk.Bool(false),
                    SourceIdentifier: sdk.String("quasi"),
                    Type: shared.SourceTypeEnumNoSource,
                },
                shared.ProjectSource{
                    Auth: &shared.SourceAuth{
                        Resource: sdk.String("sint"),
                        Type: shared.SourceAuthTypeEnumOauth,
                    },
                    BuildStatusConfig: &shared.BuildStatusConfig{
                        Context: sdk.String("veritatis"),
                        TargetURL: sdk.String("itaque"),
                    },
                    Buildspec: sdk.String("incidunt"),
                    GitCloneDepth: sdk.Int64(318569),
                    GitSubmodulesConfig: &shared.GitSubmodulesConfig{
                        FetchSubmodules: false,
                    },
                    InsecureSsl: sdk.Bool(false),
                    Location: sdk.String("consequatur"),
                    ReportBuildStatus: sdk.Bool(false),
                    SourceIdentifier: sdk.String("est"),
                    Type: shared.SourceTypeEnumGithubEnterprise,
                },
                shared.ProjectSource{
                    Auth: &shared.SourceAuth{
                        Resource: sdk.String("explicabo"),
                        Type: shared.SourceAuthTypeEnumOauth,
                    },
                    BuildStatusConfig: &shared.BuildStatusConfig{
                        Context: sdk.String("deserunt"),
                        TargetURL: sdk.String("distinctio"),
                    },
                    Buildspec: sdk.String("quibusdam"),
                    GitCloneDepth: sdk.Int64(289406),
                    GitSubmodulesConfig: &shared.GitSubmodulesConfig{
                        FetchSubmodules: false,
                    },
                    InsecureSsl: sdk.Bool(false),
                    Location: sdk.String("modi"),
                    ReportBuildStatus: sdk.Bool(false),
                    SourceIdentifier: sdk.String("qui"),
                    Type: shared.SourceTypeEnumGithub,
                },
            },
            ServiceRole: "cupiditate",
            Source: shared.ProjectSource{
                Auth: &shared.SourceAuth{
                    Resource: sdk.String("quos"),
                    Type: shared.SourceAuthTypeEnumOauth,
                },
                BuildStatusConfig: &shared.BuildStatusConfig{
                    Context: sdk.String("perferendis"),
                    TargetURL: sdk.String("magni"),
                },
                Buildspec: sdk.String("assumenda"),
                GitCloneDepth: sdk.Int64(369808),
                GitSubmodulesConfig: &shared.GitSubmodulesConfig{
                    FetchSubmodules: false,
                },
                InsecureSsl: sdk.Bool(false),
                Location: sdk.String("alias"),
                ReportBuildStatus: sdk.Bool(false),
                SourceIdentifier: sdk.String("fugit"),
                Type: shared.SourceTypeEnumBitbucket,
            },
            SourceVersion: sdk.String("excepturi"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("facilis"),
                    Value: sdk.String("tempore"),
                },
                shared.Tag{
                    Key: sdk.String("labore"),
                    Value: sdk.String("delectus"),
                },
            },
            TimeoutInMinutes: sdk.Int64(433288),
            VpcConfig: &shared.VpcConfig{
                SecurityGroupIds: []string{
                    "eligendi",
                },
                Subnets: []string{
                    "aliquid",
                    "provident",
                    "necessitatibus",
                },
                VpcID: sdk.String("sint"),
            },
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("in"),
        XAmzTarget: operations.CreateProjectXAmzTargetEnumCodeBuild20161006CreateProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateProjectOutput != nil {
        // handle response
    }
}
```

## CreateReportGroup

 Creates a report group. A report group contains a collection of reports. 

### Example Usage

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
    res, err := s.SDK.CreateReportGroup(ctx, operations.CreateReportGroupRequest{
        CreateReportGroupInput: shared.CreateReportGroupInput{
            ExportConfig: shared.ReportExportConfig{
                ExportConfigType: shared.ReportExportConfigTypeEnumNoExport.ToPointer(),
                S3Destination: &shared.S3ReportExportConfig{
                    Bucket: sdk.String("maiores"),
                    BucketOwner: sdk.String("rerum"),
                    EncryptionDisabled: sdk.Bool(false),
                    EncryptionKey: sdk.String("dicta"),
                    Packaging: shared.ReportPackagingTypeEnumZip.ToPointer(),
                    Path: sdk.String("cumque"),
                },
            },
            Name: "Nathaniel Hyatt",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("occaecati"),
                    Value: sdk.String("enim"),
                },
            },
            Type: shared.ReportTypeEnumCodeCoverage,
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("blanditiis"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzTarget: operations.CreateReportGroupXAmzTargetEnumCodeBuild20161006CreateReportGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateReportGroupOutput != nil {
        // handle response
    }
}
```

## CreateWebhook

<p>For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.</p> <important> <p>If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p> </important>

### Example Usage

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
    res, err := s.SDK.CreateWebhook(ctx, operations.CreateWebhookRequest{
        CreateWebhookInput: shared.CreateWebhookInput{
            BranchFilter: sdk.String("sapiente"),
            BuildType: shared.WebhookBuildTypeEnumBuild.ToPointer(),
            FilterGroups: [][]shared.WebhookFilter{
                []shared.WebhookFilter{
                    shared.WebhookFilter{
                        ExcludeMatchedPattern: sdk.Bool(false),
                        Pattern: "vel",
                        Type: shared.WebhookFilterTypeEnumActorAccountID,
                    },
                    shared.WebhookFilter{
                        ExcludeMatchedPattern: sdk.Bool(false),
                        Pattern: "omnis",
                        Type: shared.WebhookFilterTypeEnumHeadRef,
                    },
                },
                []shared.WebhookFilter{
                    shared.WebhookFilter{
                        ExcludeMatchedPattern: sdk.Bool(false),
                        Pattern: "nihil",
                        Type: shared.WebhookFilterTypeEnumBaseRef,
                    },
                },
                []shared.WebhookFilter{
                    shared.WebhookFilter{
                        ExcludeMatchedPattern: sdk.Bool(false),
                        Pattern: "id",
                        Type: shared.WebhookFilterTypeEnumBaseRef,
                    },
                    shared.WebhookFilter{
                        ExcludeMatchedPattern: sdk.Bool(false),
                        Pattern: "labore",
                        Type: shared.WebhookFilterTypeEnumHeadRef,
                    },
                    shared.WebhookFilter{
                        ExcludeMatchedPattern: sdk.Bool(false),
                        Pattern: "natus",
                        Type: shared.WebhookFilterTypeEnumFilePath,
                    },
                },
            },
            ProjectName: "eum",
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("magnam"),
        XAmzSecurityToken: sdk.String("et"),
        XAmzSignature: sdk.String("excepturi"),
        XAmzSignedHeaders: sdk.String("ullam"),
        XAmzTarget: operations.CreateWebhookXAmzTargetEnumCodeBuild20161006CreateWebhook,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWebhookOutput != nil {
        // handle response
    }
}
```

## DeleteBuildBatch

Deletes a batch build.

### Example Usage

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
    res, err := s.SDK.DeleteBuildBatch(ctx, operations.DeleteBuildBatchRequest{
        DeleteBuildBatchInput: shared.DeleteBuildBatchInput{
            ID: "9890afa5-63e2-4516-be4c-8b711e5b7fd2",
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("praesentium"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("magni"),
        XAmzTarget: operations.DeleteBuildBatchXAmzTargetEnumCodeBuild20161006DeleteBuildBatch,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteBuildBatchOutput != nil {
        // handle response
    }
}
```

## DeleteProject

 Deletes a build project. When you delete a project, its builds are not deleted. 

### Example Usage

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
    res, err := s.SDK.DeleteProject(ctx, operations.DeleteProjectRequest{
        DeleteProjectInput: shared.DeleteProjectInput{
            Name: "Angelica Stanton",
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzTarget: operations.DeleteProjectXAmzTargetEnumCodeBuild20161006DeleteProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteProjectOutput != nil {
        // handle response
    }
}
```

## DeleteReport

 Deletes a report. 

### Example Usage

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
    res, err := s.SDK.DeleteReport(ctx, operations.DeleteReportRequest{
        DeleteReportInput: shared.DeleteReportInput{
            Arn: "quidem",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("voluptate"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("nam"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("pariatur"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzTarget: operations.DeleteReportXAmzTargetEnumCodeBuild20161006DeleteReport,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReportOutput != nil {
        // handle response
    }
}
```

## DeleteReportGroup

Deletes a report group. Before you delete a report group, you must delete its reports. 

### Example Usage

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
    res, err := s.SDK.DeleteReportGroup(ctx, operations.DeleteReportGroupRequest{
        DeleteReportGroupInput: shared.DeleteReportGroupInput{
            Arn: "voluptatibus",
            DeleteReports: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("fugiat"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzTarget: operations.DeleteReportGroupXAmzTargetEnumCodeBuild20161006DeleteReportGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReportGroupOutput != nil {
        // handle response
    }
}
```

## DeleteResourcePolicy

 Deletes a resource policy that is identified by its resource ARN. 

### Example Usage

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
    res, err := s.SDK.DeleteResourcePolicy(ctx, operations.DeleteResourcePolicyRequest{
        DeleteResourcePolicyInput: shared.DeleteResourcePolicyInput{
            ResourceArn: "libero",
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("dolores"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("eaque"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzTarget: operations.DeleteResourcePolicyXAmzTargetEnumCodeBuild20161006DeleteResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResourcePolicyOutput != nil {
        // handle response
    }
}
```

## DeleteSourceCredentials

 Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. 

### Example Usage

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
    res, err := s.SDK.DeleteSourceCredentials(ctx, operations.DeleteSourceCredentialsRequest{
        DeleteSourceCredentialsInput: shared.DeleteSourceCredentialsInput{
            Arn: "nesciunt",
        },
        XAmzAlgorithm: sdk.String("eos"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("vero"),
        XAmzTarget: operations.DeleteSourceCredentialsXAmzTargetEnumCodeBuild20161006DeleteSourceCredentials,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSourceCredentialsOutput != nil {
        // handle response
    }
}
```

## DeleteWebhook

For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.

### Example Usage

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
    res, err := s.SDK.DeleteWebhook(ctx, operations.DeleteWebhookRequest{
        DeleteWebhookInput: shared.DeleteWebhookInput{
            ProjectName: "nostrum",
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("recusandae"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("perspiciatis"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("porro"),
        XAmzTarget: operations.DeleteWebhookXAmzTargetEnumCodeBuild20161006DeleteWebhook,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWebhookOutput != nil {
        // handle response
    }
}
```

## DescribeCodeCoverages

Retrieves one or more code coverage reports.

### Example Usage

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
    res, err := s.SDK.DescribeCodeCoverages(ctx, operations.DescribeCodeCoveragesRequest{
        DescribeCodeCoveragesInput: shared.DescribeCodeCoveragesInput{
            MaxLineCoveragePercentage: sdk.Float64(1646.94),
            MaxResults: sdk.Int64(500026),
            MinLineCoveragePercentage: sdk.Float64(6214.79),
            NextToken: sdk.String("eaque"),
            ReportArn: "occaecati",
            SortBy: shared.ReportCodeCoverageSortByTypeEnumFilePath.ToPointer(),
            SortOrder: shared.SortOrderTypeEnumAscending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("asperiores"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("deleniti"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        XAmzTarget: operations.DescribeCodeCoveragesXAmzTargetEnumCodeBuild20161006DescribeCodeCoverages,
        MaxResults: sdk.String("provident"),
        NextToken: sdk.String("nobis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeCodeCoveragesOutput != nil {
        // handle response
    }
}
```

## DescribeTestCases

 Returns a list of details about test cases for a report. 

### Example Usage

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
    res, err := s.SDK.DescribeTestCases(ctx, operations.DescribeTestCasesRequest{
        DescribeTestCasesInput: shared.DescribeTestCasesInput{
            Filter: &shared.TestCaseFilter{
                Keyword: sdk.String("libero"),
                Status: sdk.String("delectus"),
            },
            MaxResults: sdk.Int64(311945),
            NextToken: sdk.String("quos"),
            ReportArn: "aliquid",
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        XAmzTarget: operations.DescribeTestCasesXAmzTargetEnumCodeBuild20161006DescribeTestCases,
        MaxResults: sdk.String("cum"),
        NextToken: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeTestCasesOutput != nil {
        // handle response
    }
}
```

## GetReportGroupTrend

Analyzes and accumulates test report values for the specified test reports.

### Example Usage

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
    res, err := s.SDK.GetReportGroupTrend(ctx, operations.GetReportGroupTrendRequest{
        GetReportGroupTrendInput: shared.GetReportGroupTrendInput{
            NumOfReports: sdk.Int64(490459),
            ReportGroupArn: "reiciendis",
            TrendField: shared.ReportGroupTrendFieldTypeEnumTotal,
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("ipsa"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("odio"),
        XAmzTarget: operations.GetReportGroupTrendXAmzTargetEnumCodeBuild20161006GetReportGroupTrend,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReportGroupTrendOutput != nil {
        // handle response
    }
}
```

## GetResourcePolicy

 Gets a resource policy that is identified by its resource ARN. 

### Example Usage

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
    res, err := s.SDK.GetResourcePolicy(ctx, operations.GetResourcePolicyRequest{
        GetResourcePolicyInput: shared.GetResourcePolicyInput{
            ResourceArn: "quaerat",
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("voluptas"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("eos"),
        XAmzSignedHeaders: sdk.String("atque"),
        XAmzTarget: operations.GetResourcePolicyXAmzTargetEnumCodeBuild20161006GetResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourcePolicyOutput != nil {
        // handle response
    }
}
```

## ImportSourceCredentials

 Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. 

### Example Usage

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
    res, err := s.SDK.ImportSourceCredentials(ctx, operations.ImportSourceCredentialsRequest{
        ImportSourceCredentialsInput: shared.ImportSourceCredentialsInput{
            AuthType: shared.AuthTypeEnumOauth,
            ServerType: shared.ServerTypeEnumGithubEnterprise,
            ShouldOverwrite: sdk.Bool(false),
            Token: "ab",
            Username: sdk.String("Natalie.Parisian"),
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.ImportSourceCredentialsXAmzTargetEnumCodeBuild20161006ImportSourceCredentials,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ImportSourceCredentialsOutput != nil {
        // handle response
    }
}
```

## InvalidateProjectCache

Resets the cache for a project.

### Example Usage

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
    res, err := s.SDK.InvalidateProjectCache(ctx, operations.InvalidateProjectCacheRequest{
        InvalidateProjectCacheInput: shared.InvalidateProjectCacheInput{
            ProjectName: "ipsum",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("eius"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("amet"),
        XAmzTarget: operations.InvalidateProjectCacheXAmzTargetEnumCodeBuild20161006InvalidateProjectCache,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvalidateProjectCacheOutput != nil {
        // handle response
    }
}
```

## ListBuildBatches

Retrieves the identifiers of your build batches in the current region.

### Example Usage

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
    res, err := s.SDK.ListBuildBatches(ctx, operations.ListBuildBatchesRequest{
        ListBuildBatchesInput: shared.ListBuildBatchesInput{
            Filter: &shared.BuildBatchFilter{
                Status: shared.StatusTypeEnumInProgress.ToPointer(),
            },
            MaxResults: sdk.Int64(881586),
            NextToken: sdk.String("ad"),
            SortOrder: shared.SortOrderTypeEnumDescending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("suscipit"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("provident"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("similique"),
        XAmzTarget: operations.ListBuildBatchesXAmzTargetEnumCodeBuild20161006ListBuildBatches,
        MaxResults: sdk.String("alias"),
        NextToken: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBuildBatchesOutput != nil {
        // handle response
    }
}
```

## ListBuildBatchesForProject

Retrieves the identifiers of the build batches for a specific project.

### Example Usage

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
    res, err := s.SDK.ListBuildBatchesForProject(ctx, operations.ListBuildBatchesForProjectRequest{
        ListBuildBatchesForProjectInput: shared.ListBuildBatchesForProjectInput{
            Filter: &shared.BuildBatchFilter{
                Status: shared.StatusTypeEnumFailed.ToPointer(),
            },
            MaxResults: sdk.Int64(273542),
            NextToken: sdk.String("vel"),
            ProjectName: sdk.String("quod"),
            SortOrder: shared.SortOrderTypeEnumDescending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("harum"),
        XAmzSignature: sdk.String("iusto"),
        XAmzSignedHeaders: sdk.String("ipsum"),
        XAmzTarget: operations.ListBuildBatchesForProjectXAmzTargetEnumCodeBuild20161006ListBuildBatchesForProject,
        MaxResults: sdk.String("quisquam"),
        NextToken: sdk.String("tenetur"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBuildBatchesForProjectOutput != nil {
        // handle response
    }
}
```

## ListBuilds

Gets a list of build IDs, with each build ID representing a single build.

### Example Usage

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
    res, err := s.SDK.ListBuilds(ctx, operations.ListBuildsRequest{
        ListBuildsInput: shared.ListBuildsInput{
            NextToken: sdk.String("amet"),
            SortOrder: shared.SortOrderTypeEnumDescending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("sapiente"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzTarget: operations.ListBuildsXAmzTargetEnumCodeBuild20161006ListBuilds,
        NextToken: sdk.String("sit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBuildsOutput != nil {
        // handle response
    }
}
```

## ListBuildsForProject

Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.

### Example Usage

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
    res, err := s.SDK.ListBuildsForProject(ctx, operations.ListBuildsForProjectRequest{
        ListBuildsForProjectInput: shared.ListBuildsForProjectInput{
            NextToken: sdk.String("expedita"),
            ProjectName: "neque",
            SortOrder: shared.SortOrderTypeEnumAscending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("quam"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("incidunt"),
        XAmzTarget: operations.ListBuildsForProjectXAmzTargetEnumCodeBuild20161006ListBuildsForProject,
        NextToken: sdk.String("qui"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListBuildsForProjectOutput != nil {
        // handle response
    }
}
```

## ListCuratedEnvironmentImages

Gets information about Docker images that are managed by CodeBuild.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListCuratedEnvironmentImages(ctx, operations.ListCuratedEnvironmentImagesRequest{
        RequestBody: map[string]interface{}{
            "maxime": "pariatur",
            "soluta": "dicta",
            "laborum": "totam",
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("quam"),
        XAmzTarget: operations.ListCuratedEnvironmentImagesXAmzTargetEnumCodeBuild20161006ListCuratedEnvironmentImages,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListCuratedEnvironmentImagesOutput != nil {
        // handle response
    }
}
```

## ListProjects

Gets a list of build project names, with each build project name representing a single build project.

### Example Usage

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
    res, err := s.SDK.ListProjects(ctx, operations.ListProjectsRequest{
        ListProjectsInput: shared.ListProjectsInput{
            NextToken: sdk.String("molestias"),
            SortBy: shared.ProjectSortByTypeEnumLastModifiedTime.ToPointer(),
            SortOrder: shared.SortOrderTypeEnumAscending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("nam"),
        XAmzTarget: operations.ListProjectsXAmzTargetEnumCodeBuild20161006ListProjects,
        NextToken: sdk.String("hic"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListProjectsOutput != nil {
        // handle response
    }
}
```

## ListReportGroups

 Gets a list ARNs for the report groups in the current Amazon Web Services account. 

### Example Usage

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
    res, err := s.SDK.ListReportGroups(ctx, operations.ListReportGroupsRequest{
        ListReportGroupsInput: shared.ListReportGroupsInput{
            MaxResults: sdk.Int64(30452),
            NextToken: sdk.String("cumque"),
            SortBy: shared.ReportGroupSortByTypeEnumLastModifiedTime.ToPointer(),
            SortOrder: shared.SortOrderTypeEnumDescending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("ipsum"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("tempore"),
        XAmzTarget: operations.ListReportGroupsXAmzTargetEnumCodeBuild20161006ListReportGroups,
        MaxResults: sdk.String("cupiditate"),
        NextToken: sdk.String("aperiam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReportGroupsOutput != nil {
        // handle response
    }
}
```

## ListReports

 Returns a list of ARNs for the reports in the current Amazon Web Services account. 

### Example Usage

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
    res, err := s.SDK.ListReports(ctx, operations.ListReportsRequest{
        ListReportsInput: shared.ListReportsInput{
            Filter: &shared.ReportFilter{
                Status: shared.ReportStatusTypeEnumDeleting.ToPointer(),
            },
            MaxResults: sdk.Int64(209157),
            NextToken: sdk.String("dolore"),
            SortOrder: shared.SortOrderTypeEnumAscending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("architecto"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("quas"),
        XAmzSignedHeaders: sdk.String("itaque"),
        XAmzTarget: operations.ListReportsXAmzTargetEnumCodeBuild20161006ListReports,
        MaxResults: sdk.String("consequatur"),
        NextToken: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReportsOutput != nil {
        // handle response
    }
}
```

## ListReportsForReportGroup

 Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>. 

### Example Usage

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
    res, err := s.SDK.ListReportsForReportGroup(ctx, operations.ListReportsForReportGroupRequest{
        ListReportsForReportGroupInput: shared.ListReportsForReportGroupInput{
            Filter: &shared.ReportFilter{
                Status: shared.ReportStatusTypeEnumDeleting.ToPointer(),
            },
            MaxResults: sdk.Int64(785153),
            NextToken: sdk.String("doloribus"),
            ReportGroupArn: "ut",
            SortOrder: shared.SortOrderTypeEnumDescending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
        XAmzTarget: operations.ListReportsForReportGroupXAmzTargetEnumCodeBuild20161006ListReportsForReportGroup,
        MaxResults: sdk.String("quisquam"),
        NextToken: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReportsForReportGroupOutput != nil {
        // handle response
    }
}
```

## ListSharedProjects

 Gets a list of projects that are shared with other Amazon Web Services accounts or users. 

### Example Usage

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
    res, err := s.SDK.ListSharedProjects(ctx, operations.ListSharedProjectsRequest{
        ListSharedProjectsInput: shared.ListSharedProjectsInput{
            MaxResults: sdk.Int64(606476),
            NextToken: sdk.String("quis"),
            SortBy: shared.SharedResourceSortByTypeEnumArn.ToPointer(),
            SortOrder: shared.SortOrderTypeEnumDescending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("dignissimos"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        XAmzTarget: operations.ListSharedProjectsXAmzTargetEnumCodeBuild20161006ListSharedProjects,
        MaxResults: sdk.String("quod"),
        NextToken: sdk.String("odio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSharedProjectsOutput != nil {
        // handle response
    }
}
```

## ListSharedReportGroups

 Gets a list of report groups that are shared with other Amazon Web Services accounts or users. 

### Example Usage

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
    res, err := s.SDK.ListSharedReportGroups(ctx, operations.ListSharedReportGroupsRequest{
        ListSharedReportGroupsInput: shared.ListSharedReportGroupsInput{
            MaxResults: sdk.Int64(630448),
            NextToken: sdk.String("facilis"),
            SortBy: shared.SharedResourceSortByTypeEnumModifiedTime.ToPointer(),
            SortOrder: shared.SortOrderTypeEnumAscending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("sequi"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("aut"),
        XAmzTarget: operations.ListSharedReportGroupsXAmzTargetEnumCodeBuild20161006ListSharedReportGroups,
        MaxResults: sdk.String("voluptatibus"),
        NextToken: sdk.String("exercitationem"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSharedReportGroupsOutput != nil {
        // handle response
    }
}
```

## ListSourceCredentials

 Returns a list of <code>SourceCredentialsInfo</code> objects. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListSourceCredentials(ctx, operations.ListSourceCredentialsRequest{
        RequestBody: map[string]interface{}{
            "fugit": "porro",
            "maiores": "doloribus",
            "iusto": "eligendi",
            "ducimus": "alias",
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("possimus"),
        XAmzTarget: operations.ListSourceCredentialsXAmzTargetEnumCodeBuild20161006ListSourceCredentials,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSourceCredentialsOutput != nil {
        // handle response
    }
}
```

## PutResourcePolicy

 Stores a resource policy for the ARN of a <code>Project</code> or <code>ReportGroup</code> object. 

### Example Usage

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
    res, err := s.SDK.PutResourcePolicy(ctx, operations.PutResourcePolicyRequest{
        PutResourcePolicyInput: shared.PutResourcePolicyInput{
            Policy: "magnam",
            ResourceArn: "ratione",
        },
        XAmzAlgorithm: sdk.String("ex"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("ex"),
        XAmzTarget: operations.PutResourcePolicyXAmzTargetEnumCodeBuild20161006PutResourcePolicy,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutResourcePolicyOutput != nil {
        // handle response
    }
}
```

## RetryBuild

Restarts a build.

### Example Usage

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
    res, err := s.SDK.RetryBuild(ctx, operations.RetryBuildRequest{
        RetryBuildInput: shared.RetryBuildInput{
            ID: sdk.String("d9f5fce6-c556-4146-83e2-50fb008c42e1"),
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("et"),
        XAmzCredential: sdk.String("dolorum"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.RetryBuildXAmzTargetEnumCodeBuild20161006RetryBuild,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetryBuildOutput != nil {
        // handle response
    }
}
```

## RetryBuildBatch

Restarts a failed batch build. Only batch builds that have failed can be retried.

### Example Usage

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
    res, err := s.SDK.RetryBuildBatch(ctx, operations.RetryBuildBatchRequest{
        RetryBuildBatchInput: shared.RetryBuildBatchInput{
            ID: sdk.String("6c8dd6b1-4429-4074-b477-8a7bd466d28c"),
            RetryType: shared.RetryBuildBatchTypeEnumRetryAllBuilds.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("quo"),
        XAmzTarget: operations.RetryBuildBatchXAmzTargetEnumCodeBuild20161006RetryBuildBatch,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RetryBuildBatchOutput != nil {
        // handle response
    }
}
```

## StartBuild

Starts running a build.

### Example Usage

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
    res, err := s.SDK.StartBuild(ctx, operations.StartBuildRequest{
        StartBuildInput: shared.StartBuildInput{
            ArtifactsOverride: &shared.ProjectArtifacts{
                ArtifactIdentifier: sdk.String("fuga"),
                BucketOwnerAccess: shared.BucketOwnerAccessEnumNone.ToPointer(),
                EncryptionDisabled: sdk.Bool(false),
                Location: sdk.String("eos"),
                Name: sdk.String("Mrs. Virginia McGlynn"),
                NamespaceType: shared.ArtifactNamespaceEnumNone.ToPointer(),
                OverrideArtifactName: sdk.Bool(false),
                Packaging: shared.ArtifactPackagingEnumNone.ToPointer(),
                Path: sdk.String("sequi"),
                Type: shared.ArtifactsTypeEnumNoArtifacts,
            },
            BuildStatusConfigOverride: &shared.BuildStatusConfig{
                Context: sdk.String("esse"),
                TargetURL: sdk.String("recusandae"),
            },
            BuildspecOverride: sdk.String("aperiam"),
            CacheOverride: &shared.ProjectCache{
                Location: sdk.String("distinctio"),
                Modes: []shared.CacheModeEnum{
                    shared.CacheModeEnumLocalSourceCache,
                    shared.CacheModeEnumLocalDockerLayerCache,
                    shared.CacheModeEnumLocalSourceCache,
                    shared.CacheModeEnumLocalSourceCache,
                },
                Type: shared.CacheTypeEnumLocal,
            },
            CertificateOverride: sdk.String("aliquam"),
            ComputeTypeOverride: shared.ComputeTypeEnumBuildGeneral1Medium.ToPointer(),
            DebugSessionEnabled: sdk.Bool(false),
            EncryptionKeyOverride: sdk.String("occaecati"),
            EnvironmentTypeOverride: shared.EnvironmentTypeEnumLinuxGpuContainer.ToPointer(),
            EnvironmentVariablesOverride: []shared.EnvironmentVariable{
                shared.EnvironmentVariable{
                    Name: "Miss Rosie Krajcik",
                    Type: shared.EnvironmentVariableTypeEnumParameterStore.ToPointer(),
                    Value: "praesentium",
                },
                shared.EnvironmentVariable{
                    Name: "Cassandra Considine",
                    Type: shared.EnvironmentVariableTypeEnumPlaintext.ToPointer(),
                    Value: "atque",
                },
                shared.EnvironmentVariable{
                    Name: "Cathy Huel",
                    Type: shared.EnvironmentVariableTypeEnumPlaintext.ToPointer(),
                    Value: "ratione",
                },
                shared.EnvironmentVariable{
                    Name: "Kerry Mayert IV",
                    Type: shared.EnvironmentVariableTypeEnumSecretsManager.ToPointer(),
                    Value: "accusamus",
                },
            },
            GitCloneDepthOverride: sdk.Int64(82971),
            GitSubmodulesConfigOverride: &shared.GitSubmodulesConfig{
                FetchSubmodules: false,
            },
            ImageOverride: sdk.String("esse"),
            ImagePullCredentialsTypeOverride: shared.ImagePullCredentialsTypeEnumServiceRole.ToPointer(),
            InsecureSslOverride: sdk.Bool(false),
            LogsConfigOverride: &shared.LogsConfig{
                CloudWatchLogs: &shared.CloudWatchLogsConfig{
                    GroupName: sdk.String("nam"),
                    Status: shared.LogsConfigStatusTypeEnumDisabled,
                    StreamName: sdk.String("aliquid"),
                },
                S3Logs: &shared.S3LogsConfig{
                    BucketOwnerAccess: shared.BucketOwnerAccessEnumNone.ToPointer(),
                    EncryptionDisabled: sdk.Bool(false),
                    Location: sdk.String("saepe"),
                    Status: shared.LogsConfigStatusTypeEnumEnabled,
                },
            },
            PrivilegedModeOverride: sdk.Bool(false),
            ProjectName: "harum",
            QueuedTimeoutInMinutesOverride: sdk.Int64(473221),
            RegistryCredentialOverride: &shared.RegistryCredential{
                Credential: "rerum",
                CredentialProvider: shared.CredentialProviderTypeEnumSecretsManager,
            },
            ReportBuildStatusOverride: sdk.Bool(false),
            SecondaryArtifactsOverride: []shared.ProjectArtifacts{
                shared.ProjectArtifacts{
                    ArtifactIdentifier: sdk.String("minima"),
                    BucketOwnerAccess: shared.BucketOwnerAccessEnumFull.ToPointer(),
                    EncryptionDisabled: sdk.Bool(false),
                    Location: sdk.String("eligendi"),
                    Name: sdk.String("Kristi Renner"),
                    NamespaceType: shared.ArtifactNamespaceEnumNone.ToPointer(),
                    OverrideArtifactName: sdk.Bool(false),
                    Packaging: shared.ArtifactPackagingEnumNone.ToPointer(),
                    Path: sdk.String("minus"),
                    Type: shared.ArtifactsTypeEnumCodepipeline,
                },
                shared.ProjectArtifacts{
                    ArtifactIdentifier: sdk.String("sapiente"),
                    BucketOwnerAccess: shared.BucketOwnerAccessEnumNone.ToPointer(),
                    EncryptionDisabled: sdk.Bool(false),
                    Location: sdk.String("esse"),
                    Name: sdk.String("Eduardo Wilkinson"),
                    NamespaceType: shared.ArtifactNamespaceEnumNone.ToPointer(),
                    OverrideArtifactName: sdk.Bool(false),
                    Packaging: shared.ArtifactPackagingEnumNone.ToPointer(),
                    Path: sdk.String("a"),
                    Type: shared.ArtifactsTypeEnumS3,
                },
                shared.ProjectArtifacts{
                    ArtifactIdentifier: sdk.String("sint"),
                    BucketOwnerAccess: shared.BucketOwnerAccessEnumFull.ToPointer(),
                    EncryptionDisabled: sdk.Bool(false),
                    Location: sdk.String("possimus"),
                    Name: sdk.String("Laverne Zemlak Sr."),
                    NamespaceType: shared.ArtifactNamespaceEnumNone.ToPointer(),
                    OverrideArtifactName: sdk.Bool(false),
                    Packaging: shared.ArtifactPackagingEnumZip.ToPointer(),
                    Path: sdk.String("culpa"),
                    Type: shared.ArtifactsTypeEnumS3,
                },
            },
            SecondarySourcesOverride: []shared.ProjectSource{
                shared.ProjectSource{
                    Auth: &shared.SourceAuth{
                        Resource: sdk.String("quae"),
                        Type: shared.SourceAuthTypeEnumOauth,
                    },
                    BuildStatusConfig: &shared.BuildStatusConfig{
                        Context: sdk.String("earum"),
                        TargetURL: sdk.String("vel"),
                    },
                    Buildspec: sdk.String("in"),
                    GitCloneDepth: sdk.Int64(258684),
                    GitSubmodulesConfig: &shared.GitSubmodulesConfig{
                        FetchSubmodules: false,
                    },
                    InsecureSsl: sdk.Bool(false),
                    Location: sdk.String("libero"),
                    ReportBuildStatus: sdk.Bool(false),
                    SourceIdentifier: sdk.String("illum"),
                    Type: shared.SourceTypeEnumGithubEnterprise,
                },
                shared.ProjectSource{
                    Auth: &shared.SourceAuth{
                        Resource: sdk.String("accusantium"),
                        Type: shared.SourceAuthTypeEnumOauth,
                    },
                    BuildStatusConfig: &shared.BuildStatusConfig{
                        Context: sdk.String("aliquam"),
                        TargetURL: sdk.String("sapiente"),
                    },
                    Buildspec: sdk.String("dicta"),
                    GitCloneDepth: sdk.Int64(355369),
                    GitSubmodulesConfig: &shared.GitSubmodulesConfig{
                        FetchSubmodules: false,
                    },
                    InsecureSsl: sdk.Bool(false),
                    Location: sdk.String("reprehenderit"),
                    ReportBuildStatus: sdk.Bool(false),
                    SourceIdentifier: sdk.String("ullam"),
                    Type: shared.SourceTypeEnumGithub,
                },
                shared.ProjectSource{
                    Auth: &shared.SourceAuth{
                        Resource: sdk.String("aut"),
                        Type: shared.SourceAuthTypeEnumOauth,
                    },
                    BuildStatusConfig: &shared.BuildStatusConfig{
                        Context: sdk.String("voluptatum"),
                        TargetURL: sdk.String("qui"),
                    },
                    Buildspec: sdk.String("quibusdam"),
                    GitCloneDepth: sdk.Int64(401259),
                    GitSubmodulesConfig: &shared.GitSubmodulesConfig{
                        FetchSubmodules: false,
                    },
                    InsecureSsl: sdk.Bool(false),
                    Location: sdk.String("deleniti"),
                    ReportBuildStatus: sdk.Bool(false),
                    SourceIdentifier: sdk.String("itaque"),
                    Type: shared.SourceTypeEnumBitbucket,
                },
                shared.ProjectSource{
                    Auth: &shared.SourceAuth{
                        Resource: sdk.String("architecto"),
                        Type: shared.SourceAuthTypeEnumOauth,
                    },
                    BuildStatusConfig: &shared.BuildStatusConfig{
                        Context: sdk.String("omnis"),
                        TargetURL: sdk.String("tenetur"),
                    },
                    Buildspec: sdk.String("quasi"),
                    GitCloneDepth: sdk.Int64(869489),
                    GitSubmodulesConfig: &shared.GitSubmodulesConfig{
                        FetchSubmodules: false,
                    },
                    InsecureSsl: sdk.Bool(false),
                    Location: sdk.String("et"),
                    ReportBuildStatus: sdk.Bool(false),
                    SourceIdentifier: sdk.String("voluptate"),
                    Type: shared.SourceTypeEnumCodecommit,
                },
            },
            SecondarySourcesVersionOverride: []shared.ProjectSourceVersion{
                shared.ProjectSourceVersion{
                    SourceIdentifier: "veritatis",
                    SourceVersion: "consectetur",
                },
                shared.ProjectSourceVersion{
                    SourceIdentifier: "adipisci",
                    SourceVersion: "iste",
                },
            },
            ServiceRoleOverride: sdk.String("temporibus"),
            SourceAuthOverride: &shared.SourceAuth{
                Resource: sdk.String("accusantium"),
                Type: shared.SourceAuthTypeEnumOauth,
            },
            SourceLocationOverride: sdk.String("rem"),
            SourceTypeOverride: shared.SourceTypeEnumCodecommit.ToPointer(),
            SourceVersion: sdk.String("laudantium"),
            TimeoutInMinutesOverride: sdk.Int64(428796),
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("non"),
        XAmzSecurityToken: sdk.String("voluptatem"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzTarget: operations.StartBuildXAmzTargetEnumCodeBuild20161006StartBuild,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartBuildOutput != nil {
        // handle response
    }
}
```

## StartBuildBatch

Starts a batch build for a project.

### Example Usage

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
    res, err := s.SDK.StartBuildBatch(ctx, operations.StartBuildBatchRequest{
        StartBuildBatchInput: shared.StartBuildBatchInput{
            ArtifactsOverride: &shared.ProjectArtifacts{
                ArtifactIdentifier: sdk.String("numquam"),
                BucketOwnerAccess: shared.BucketOwnerAccessEnumFull.ToPointer(),
                EncryptionDisabled: sdk.Bool(false),
                Location: sdk.String("explicabo"),
                Name: sdk.String("Dr. Maria Kulas"),
                NamespaceType: shared.ArtifactNamespaceEnumNone.ToPointer(),
                OverrideArtifactName: sdk.Bool(false),
                Packaging: shared.ArtifactPackagingEnumZip.ToPointer(),
                Path: sdk.String("voluptas"),
                Type: shared.ArtifactsTypeEnumNoArtifacts,
            },
            BuildBatchConfigOverride: &shared.ProjectBuildBatchConfig{
                BatchReportMode: shared.BatchReportModeTypeEnumReportIndividualBuilds.ToPointer(),
                CombineArtifacts: sdk.Bool(false),
                Restrictions: &shared.BatchRestrictions{
                    ComputeTypesAllowed: []string{
                        "quaerat",
                        "consequuntur",
                    },
                    MaximumBuildsAllowed: sdk.Int64(831520),
                },
                ServiceRole: sdk.String("officia"),
                TimeoutInMins: sdk.Int64(807023),
            },
            BuildTimeoutInMinutesOverride: sdk.Int64(490305),
            BuildspecOverride: sdk.String("officia"),
            CacheOverride: &shared.ProjectCache{
                Location: sdk.String("asperiores"),
                Modes: []shared.CacheModeEnum{
                    shared.CacheModeEnumLocalDockerLayerCache,
                    shared.CacheModeEnumLocalDockerLayerCache,
                },
                Type: shared.CacheTypeEnumLocal,
            },
            CertificateOverride: sdk.String("quod"),
            ComputeTypeOverride: shared.ComputeTypeEnumBuildGeneral1Medium.ToPointer(),
            DebugSessionEnabled: sdk.Bool(false),
            EncryptionKeyOverride: sdk.String("ab"),
            EnvironmentTypeOverride: shared.EnvironmentTypeEnumLinuxContainer.ToPointer(),
            EnvironmentVariablesOverride: []shared.EnvironmentVariable{
                shared.EnvironmentVariable{
                    Name: "Ricardo Franecki",
                    Type: shared.EnvironmentVariableTypeEnumSecretsManager.ToPointer(),
                    Value: "totam",
                },
                shared.EnvironmentVariable{
                    Name: "Chester Kuphal",
                    Type: shared.EnvironmentVariableTypeEnumPlaintext.ToPointer(),
                    Value: "possimus",
                },
                shared.EnvironmentVariable{
                    Name: "Felipe Johns",
                    Type: shared.EnvironmentVariableTypeEnumSecretsManager.ToPointer(),
                    Value: "assumenda",
                },
            },
            GitCloneDepthOverride: sdk.Int64(363161),
            GitSubmodulesConfigOverride: &shared.GitSubmodulesConfig{
                FetchSubmodules: false,
            },
            ImageOverride: sdk.String("recusandae"),
            ImagePullCredentialsTypeOverride: shared.ImagePullCredentialsTypeEnumCodebuild.ToPointer(),
            InsecureSslOverride: sdk.Bool(false),
            LogsConfigOverride: &shared.LogsConfig{
                CloudWatchLogs: &shared.CloudWatchLogsConfig{
                    GroupName: sdk.String("aperiam"),
                    Status: shared.LogsConfigStatusTypeEnumDisabled,
                    StreamName: sdk.String("consectetur"),
                },
                S3Logs: &shared.S3LogsConfig{
                    BucketOwnerAccess: shared.BucketOwnerAccessEnumReadOnly.ToPointer(),
                    EncryptionDisabled: sdk.Bool(false),
                    Location: sdk.String("exercitationem"),
                    Status: shared.LogsConfigStatusTypeEnumDisabled,
                },
            },
            PrivilegedModeOverride: sdk.Bool(false),
            ProjectName: "facere",
            QueuedTimeoutInMinutesOverride: sdk.Int64(257233),
            RegistryCredentialOverride: &shared.RegistryCredential{
                Credential: "doloribus",
                CredentialProvider: shared.CredentialProviderTypeEnumSecretsManager,
            },
            ReportBuildBatchStatusOverride: sdk.Bool(false),
            SecondaryArtifactsOverride: []shared.ProjectArtifacts{
                shared.ProjectArtifacts{
                    ArtifactIdentifier: sdk.String("reiciendis"),
                    BucketOwnerAccess: shared.BucketOwnerAccessEnumFull.ToPointer(),
                    EncryptionDisabled: sdk.Bool(false),
                    Location: sdk.String("saepe"),
                    Name: sdk.String("Clifford Cartwright"),
                    NamespaceType: shared.ArtifactNamespaceEnumNone.ToPointer(),
                    OverrideArtifactName: sdk.Bool(false),
                    Packaging: shared.ArtifactPackagingEnumNone.ToPointer(),
                    Path: sdk.String("beatae"),
                    Type: shared.ArtifactsTypeEnumS3,
                },
                shared.ProjectArtifacts{
                    ArtifactIdentifier: sdk.String("a"),
                    BucketOwnerAccess: shared.BucketOwnerAccessEnumFull.ToPointer(),
                    EncryptionDisabled: sdk.Bool(false),
                    Location: sdk.String("consectetur"),
                    Name: sdk.String("Dr. Maryann Howe"),
                    NamespaceType: shared.ArtifactNamespaceEnumNone.ToPointer(),
                    OverrideArtifactName: sdk.Bool(false),
                    Packaging: shared.ArtifactPackagingEnumZip.ToPointer(),
                    Path: sdk.String("similique"),
                    Type: shared.ArtifactsTypeEnumCodepipeline,
                },
            },
            SecondarySourcesOverride: []shared.ProjectSource{
                shared.ProjectSource{
                    Auth: &shared.SourceAuth{
                        Resource: sdk.String("voluptas"),
                        Type: shared.SourceAuthTypeEnumOauth,
                    },
                    BuildStatusConfig: &shared.BuildStatusConfig{
                        Context: sdk.String("voluptas"),
                        TargetURL: sdk.String("voluptas"),
                    },
                    Buildspec: sdk.String("minima"),
                    GitCloneDepth: sdk.Int64(748789),
                    GitSubmodulesConfig: &shared.GitSubmodulesConfig{
                        FetchSubmodules: false,
                    },
                    InsecureSsl: sdk.Bool(false),
                    Location: sdk.String("dolorum"),
                    ReportBuildStatus: sdk.Bool(false),
                    SourceIdentifier: sdk.String("adipisci"),
                    Type: shared.SourceTypeEnumGithubEnterprise,
                },
            },
            SecondarySourcesVersionOverride: []shared.ProjectSourceVersion{
                shared.ProjectSourceVersion{
                    SourceIdentifier: "blanditiis",
                    SourceVersion: "in",
                },
            },
            ServiceRoleOverride: sdk.String("dolore"),
            SourceAuthOverride: &shared.SourceAuth{
                Resource: sdk.String("aliquam"),
                Type: shared.SourceAuthTypeEnumOauth,
            },
            SourceLocationOverride: sdk.String("officiis"),
            SourceTypeOverride: shared.SourceTypeEnumGithubEnterprise.ToPointer(),
            SourceVersion: sdk.String("ullam"),
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("hic"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("culpa"),
        XAmzTarget: operations.StartBuildBatchXAmzTargetEnumCodeBuild20161006StartBuildBatch,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartBuildBatchOutput != nil {
        // handle response
    }
}
```

## StopBuild

Attempts to stop running a build.

### Example Usage

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
    res, err := s.SDK.StopBuild(ctx, operations.StopBuildRequest{
        StopBuildInput: shared.StopBuildInput{
            ID: "8d8f5c0b-2f2f-4b7b-994a-276b26916fe1",
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("sed"),
        XAmzSignedHeaders: sdk.String("provident"),
        XAmzTarget: operations.StopBuildXAmzTargetEnumCodeBuild20161006StopBuild,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopBuildOutput != nil {
        // handle response
    }
}
```

## StopBuildBatch

Stops a running batch build.

### Example Usage

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
    res, err := s.SDK.StopBuildBatch(ctx, operations.StopBuildBatchRequest{
        StopBuildBatchInput: shared.StopBuildBatchInput{
            ID: "4e3698f4-47f6-403e-8b44-5e80ca55efd2",
        },
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("beatae"),
        XAmzTarget: operations.StopBuildBatchXAmzTargetEnumCodeBuild20161006StopBuildBatch,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StopBuildBatchOutput != nil {
        // handle response
    }
}
```

## UpdateProject

Changes the settings of a build project.

### Example Usage

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
    res, err := s.SDK.UpdateProject(ctx, operations.UpdateProjectRequest{
        UpdateProjectInput: shared.UpdateProjectInput{
            Artifacts: &shared.ProjectArtifacts{
                ArtifactIdentifier: sdk.String("laudantium"),
                BucketOwnerAccess: shared.BucketOwnerAccessEnumReadOnly.ToPointer(),
                EncryptionDisabled: sdk.Bool(false),
                Location: sdk.String("praesentium"),
                Name: sdk.String("Lester Parisian"),
                NamespaceType: shared.ArtifactNamespaceEnumBuildID.ToPointer(),
                OverrideArtifactName: sdk.Bool(false),
                Packaging: shared.ArtifactPackagingEnumZip.ToPointer(),
                Path: sdk.String("debitis"),
                Type: shared.ArtifactsTypeEnumCodepipeline,
            },
            BadgeEnabled: sdk.Bool(false),
            BuildBatchConfig: &shared.ProjectBuildBatchConfig{
                BatchReportMode: shared.BatchReportModeTypeEnumReportAggregatedBatch.ToPointer(),
                CombineArtifacts: sdk.Bool(false),
                Restrictions: &shared.BatchRestrictions{
                    ComputeTypesAllowed: []string{
                        "officia",
                        "dolorum",
                    },
                    MaximumBuildsAllowed: sdk.Int64(548361),
                },
                ServiceRole: sdk.String("accusamus"),
                TimeoutInMins: sdk.Int64(272683),
            },
            Cache: &shared.ProjectCache{
                Location: sdk.String("atque"),
                Modes: []shared.CacheModeEnum{
                    shared.CacheModeEnumLocalDockerLayerCache,
                },
                Type: shared.CacheTypeEnumLocal,
            },
            ConcurrentBuildLimit: sdk.Int64(30235),
            Description: sdk.String("culpa"),
            EncryptionKey: sdk.String("expedita"),
            Environment: &shared.ProjectEnvironment{
                Certificate: sdk.String("magnam"),
                ComputeType: shared.ComputeTypeEnumBuildGeneral1Small,
                EnvironmentVariables: []shared.EnvironmentVariable{
                    shared.EnvironmentVariable{
                        Name: "Karen Lehner",
                        Type: shared.EnvironmentVariableTypeEnumParameterStore.ToPointer(),
                        Value: "et",
                    },
                    shared.EnvironmentVariable{
                        Name: "Ms. Ruben Cremin",
                        Type: shared.EnvironmentVariableTypeEnumSecretsManager.ToPointer(),
                        Value: "error",
                    },
                },
                Image: "consequatur",
                ImagePullCredentialsType: shared.ImagePullCredentialsTypeEnumCodebuild.ToPointer(),
                PrivilegedMode: sdk.Bool(false),
                RegistryCredential: &shared.RegistryCredential{
                    Credential: "reiciendis",
                    CredentialProvider: shared.CredentialProviderTypeEnumSecretsManager,
                },
                Type: shared.EnvironmentTypeEnumLinuxContainer,
            },
            FileSystemLocations: []shared.ProjectFileSystemLocation{
                shared.ProjectFileSystemLocation{
                    Identifier: sdk.String("dicta"),
                    Location: sdk.String("architecto"),
                    MountOptions: sdk.String("occaecati"),
                    MountPoint: sdk.String("labore"),
                    Type: shared.FileSystemTypeEnumEfs.ToPointer(),
                },
                shared.ProjectFileSystemLocation{
                    Identifier: sdk.String("quidem"),
                    Location: sdk.String("atque"),
                    MountOptions: sdk.String("laborum"),
                    MountPoint: sdk.String("nam"),
                    Type: shared.FileSystemTypeEnumEfs.ToPointer(),
                },
                shared.ProjectFileSystemLocation{
                    Identifier: sdk.String("tenetur"),
                    Location: sdk.String("laboriosam"),
                    MountOptions: sdk.String("alias"),
                    MountPoint: sdk.String("amet"),
                    Type: shared.FileSystemTypeEnumEfs.ToPointer(),
                },
            },
            LogsConfig: &shared.LogsConfig{
                CloudWatchLogs: &shared.CloudWatchLogsConfig{
                    GroupName: sdk.String("deserunt"),
                    Status: shared.LogsConfigStatusTypeEnumEnabled,
                    StreamName: sdk.String("unde"),
                },
                S3Logs: &shared.S3LogsConfig{
                    BucketOwnerAccess: shared.BucketOwnerAccessEnumFull.ToPointer(),
                    EncryptionDisabled: sdk.Bool(false),
                    Location: sdk.String("provident"),
                    Status: shared.LogsConfigStatusTypeEnumDisabled,
                },
            },
            Name: "Noah Armstrong",
            QueuedTimeoutInMinutes: sdk.Int64(440666),
            SecondaryArtifacts: []shared.ProjectArtifacts{
                shared.ProjectArtifacts{
                    ArtifactIdentifier: sdk.String("fuga"),
                    BucketOwnerAccess: shared.BucketOwnerAccessEnumReadOnly.ToPointer(),
                    EncryptionDisabled: sdk.Bool(false),
                    Location: sdk.String("mollitia"),
                    Name: sdk.String("Helen Schiller IV"),
                    NamespaceType: shared.ArtifactNamespaceEnumNone.ToPointer(),
                    OverrideArtifactName: sdk.Bool(false),
                    Packaging: shared.ArtifactPackagingEnumZip.ToPointer(),
                    Path: sdk.String("totam"),
                    Type: shared.ArtifactsTypeEnumS3,
                },
                shared.ProjectArtifacts{
                    ArtifactIdentifier: sdk.String("quidem"),
                    BucketOwnerAccess: shared.BucketOwnerAccessEnumFull.ToPointer(),
                    EncryptionDisabled: sdk.Bool(false),
                    Location: sdk.String("et"),
                    Name: sdk.String("Grace Shields"),
                    NamespaceType: shared.ArtifactNamespaceEnumBuildID.ToPointer(),
                    OverrideArtifactName: sdk.Bool(false),
                    Packaging: shared.ArtifactPackagingEnumZip.ToPointer(),
                    Path: sdk.String("officiis"),
                    Type: shared.ArtifactsTypeEnumNoArtifacts,
                },
                shared.ProjectArtifacts{
                    ArtifactIdentifier: sdk.String("natus"),
                    BucketOwnerAccess: shared.BucketOwnerAccessEnumNone.ToPointer(),
                    EncryptionDisabled: sdk.Bool(false),
                    Location: sdk.String("aspernatur"),
                    Name: sdk.String("Elisa Little"),
                    NamespaceType: shared.ArtifactNamespaceEnumBuildID.ToPointer(),
                    OverrideArtifactName: sdk.Bool(false),
                    Packaging: shared.ArtifactPackagingEnumNone.ToPointer(),
                    Path: sdk.String("repudiandae"),
                    Type: shared.ArtifactsTypeEnumS3,
                },
                shared.ProjectArtifacts{
                    ArtifactIdentifier: sdk.String("atque"),
                    BucketOwnerAccess: shared.BucketOwnerAccessEnumNone.ToPointer(),
                    EncryptionDisabled: sdk.Bool(false),
                    Location: sdk.String("recusandae"),
                    Name: sdk.String("Mack Grant DVM"),
                    NamespaceType: shared.ArtifactNamespaceEnumNone.ToPointer(),
                    OverrideArtifactName: sdk.Bool(false),
                    Packaging: shared.ArtifactPackagingEnumNone.ToPointer(),
                    Path: sdk.String("beatae"),
                    Type: shared.ArtifactsTypeEnumCodepipeline,
                },
            },
            SecondarySourceVersions: []shared.ProjectSourceVersion{
                shared.ProjectSourceVersion{
                    SourceIdentifier: "laboriosam",
                    SourceVersion: "velit",
                },
                shared.ProjectSourceVersion{
                    SourceIdentifier: "a",
                    SourceVersion: "molestias",
                },
            },
            SecondarySources: []shared.ProjectSource{
                shared.ProjectSource{
                    Auth: &shared.SourceAuth{
                        Resource: sdk.String("saepe"),
                        Type: shared.SourceAuthTypeEnumOauth,
                    },
                    BuildStatusConfig: &shared.BuildStatusConfig{
                        Context: sdk.String("consequuntur"),
                        TargetURL: sdk.String("occaecati"),
                    },
                    Buildspec: sdk.String("officiis"),
                    GitCloneDepth: sdk.Int64(597937),
                    GitSubmodulesConfig: &shared.GitSubmodulesConfig{
                        FetchSubmodules: false,
                    },
                    InsecureSsl: sdk.Bool(false),
                    Location: sdk.String("in"),
                    ReportBuildStatus: sdk.Bool(false),
                    SourceIdentifier: sdk.String("adipisci"),
                    Type: shared.SourceTypeEnumNoSource,
                },
                shared.ProjectSource{
                    Auth: &shared.SourceAuth{
                        Resource: sdk.String("occaecati"),
                        Type: shared.SourceAuthTypeEnumOauth,
                    },
                    BuildStatusConfig: &shared.BuildStatusConfig{
                        Context: sdk.String("consequuntur"),
                        TargetURL: sdk.String("fugit"),
                    },
                    Buildspec: sdk.String("id"),
                    GitCloneDepth: sdk.Int64(335631),
                    GitSubmodulesConfig: &shared.GitSubmodulesConfig{
                        FetchSubmodules: false,
                    },
                    InsecureSsl: sdk.Bool(false),
                    Location: sdk.String("reprehenderit"),
                    ReportBuildStatus: sdk.Bool(false),
                    SourceIdentifier: sdk.String("error"),
                    Type: shared.SourceTypeEnumCodecommit,
                },
            },
            ServiceRole: sdk.String("corporis"),
            Source: &shared.ProjectSource{
                Auth: &shared.SourceAuth{
                    Resource: sdk.String("quidem"),
                    Type: shared.SourceAuthTypeEnumOauth,
                },
                BuildStatusConfig: &shared.BuildStatusConfig{
                    Context: sdk.String("eveniet"),
                    TargetURL: sdk.String("non"),
                },
                Buildspec: sdk.String("vero"),
                GitCloneDepth: sdk.Int64(39615),
                GitSubmodulesConfig: &shared.GitSubmodulesConfig{
                    FetchSubmodules: false,
                },
                InsecureSsl: sdk.Bool(false),
                Location: sdk.String("iure"),
                ReportBuildStatus: sdk.Bool(false),
                SourceIdentifier: sdk.String("ipsa"),
                Type: shared.SourceTypeEnumS3,
            },
            SourceVersion: sdk.String("quae"),
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("eveniet"),
                    Value: sdk.String("qui"),
                },
                shared.Tag{
                    Key: sdk.String("cum"),
                    Value: sdk.String("iure"),
                },
            },
            TimeoutInMinutes: sdk.Int64(898063),
            VpcConfig: &shared.VpcConfig{
                SecurityGroupIds: []string{
                    "laborum",
                },
                Subnets: []string{
                    "voluptatum",
                    "rem",
                    "aliquam",
                },
                VpcID: sdk.String("ad"),
            },
        },
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("mollitia"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzTarget: operations.UpdateProjectXAmzTargetEnumCodeBuild20161006UpdateProject,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProjectOutput != nil {
        // handle response
    }
}
```

## UpdateProjectVisibility

<p>Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/public-builds.html">Public build projects</a> in the <i>CodeBuild User Guide</i>.</p> <important> <p>The following should be kept in mind when making your projects public:</p> <ul> <li> <p>All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public.</p> </li> <li> <p>All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are:</p> <ul> <li> <p>Do not store sensitive values, especially Amazon Web Services access key IDs and secret access keys, in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values.</p> </li> <li> <p>Follow <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/webhooks.html#webhook-best-practices">Best practices for using webhooks</a> in the <i>CodeBuild User Guide</i> to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible.</p> </li> </ul> </li> <li> <p>A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded.</p> </li> </ul> </important>

### Example Usage

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
    res, err := s.SDK.UpdateProjectVisibility(ctx, operations.UpdateProjectVisibilityRequest{
        UpdateProjectVisibilityInput: shared.UpdateProjectVisibilityInput{
            ProjectArn: "alias",
            ProjectVisibility: shared.ProjectVisibilityTypeEnumPrivate,
            ResourceAccessRole: sdk.String("reiciendis"),
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("nesciunt"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzTarget: operations.UpdateProjectVisibilityXAmzTargetEnumCodeBuild20161006UpdateProjectVisibility,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateProjectVisibilityOutput != nil {
        // handle response
    }
}
```

## UpdateReportGroup

 Updates a report group. 

### Example Usage

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
    res, err := s.SDK.UpdateReportGroup(ctx, operations.UpdateReportGroupRequest{
        UpdateReportGroupInput: shared.UpdateReportGroupInput{
            Arn: "recusandae",
            ExportConfig: &shared.ReportExportConfig{
                ExportConfigType: shared.ReportExportConfigTypeEnumNoExport.ToPointer(),
                S3Destination: &shared.S3ReportExportConfig{
                    Bucket: sdk.String("quaerat"),
                    BucketOwner: sdk.String("molestiae"),
                    EncryptionDisabled: sdk.Bool(false),
                    EncryptionKey: sdk.String("ex"),
                    Packaging: shared.ReportPackagingTypeEnumZip.ToPointer(),
                    Path: sdk.String("culpa"),
                },
            },
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("debitis"),
                    Value: sdk.String("laudantium"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("quis"),
        XAmzSignedHeaders: sdk.String("eum"),
        XAmzTarget: operations.UpdateReportGroupXAmzTargetEnumCodeBuild20161006UpdateReportGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateReportGroupOutput != nil {
        // handle response
    }
}
```

## UpdateWebhook

<p> Updates the webhook associated with an CodeBuild build project. </p> <note> <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. </p> </note>

### Example Usage

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
    res, err := s.SDK.UpdateWebhook(ctx, operations.UpdateWebhookRequest{
        UpdateWebhookInput: shared.UpdateWebhookInput{
            BranchFilter: sdk.String("reiciendis"),
            BuildType: shared.WebhookBuildTypeEnumBuildBatch.ToPointer(),
            FilterGroups: [][]shared.WebhookFilter{
                []shared.WebhookFilter{
                    shared.WebhookFilter{
                        ExcludeMatchedPattern: sdk.Bool(false),
                        Pattern: "quasi",
                        Type: shared.WebhookFilterTypeEnumActorAccountID,
                    },
                    shared.WebhookFilter{
                        ExcludeMatchedPattern: sdk.Bool(false),
                        Pattern: "nostrum",
                        Type: shared.WebhookFilterTypeEnumActorAccountID,
                    },
                },
            },
            ProjectName: "provident",
            RotateSecret: sdk.Bool(false),
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("animi"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("accusantium"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzTarget: operations.UpdateWebhookXAmzTargetEnumCodeBuild20161006UpdateWebhook,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWebhookOutput != nil {
        // handle response
    }
}
```
