# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/codebuild/2016-10-06/go
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
    res, err := s.BatchDeleteBuilds(ctx, operations.BatchDeleteBuildsRequest{
        BatchDeleteBuildsInput: shared.BatchDeleteBuildsInput{
            Ids: []string{
                "provident",
                "distinctio",
                "quibusdam",
            },
        },
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("nulla"),
        XAmzCredential: sdk.String("corrupti"),
        XAmzDate: sdk.String("illum"),
        XAmzSecurityToken: sdk.String("vel"),
        XAmzSignature: sdk.String("error"),
        XAmzSignedHeaders: sdk.String("deserunt"),
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [BatchDeleteBuilds](docs/sdk/README.md#batchdeletebuilds) - Deletes one or more builds.
* [BatchGetBuildBatches](docs/sdk/README.md#batchgetbuildbatches) - Retrieves information about one or more batch builds.
* [BatchGetBuilds](docs/sdk/README.md#batchgetbuilds) - Gets information about one or more builds.
* [BatchGetProjects](docs/sdk/README.md#batchgetprojects) - Gets information about one or more build projects.
* [BatchGetReportGroups](docs/sdk/README.md#batchgetreportgroups) -  Returns an array of report groups. 
* [BatchGetReports](docs/sdk/README.md#batchgetreports) -  Returns an array of reports. 
* [CreateProject](docs/sdk/README.md#createproject) - Creates a build project.
* [CreateReportGroup](docs/sdk/README.md#createreportgroup) -  Creates a report group. A report group contains a collection of reports. 
* [CreateWebhook](docs/sdk/README.md#createwebhook) - <p>For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.</p> <important> <p>If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p> </important>
* [DeleteBuildBatch](docs/sdk/README.md#deletebuildbatch) - Deletes a batch build.
* [DeleteProject](docs/sdk/README.md#deleteproject) -  Deletes a build project. When you delete a project, its builds are not deleted. 
* [DeleteReport](docs/sdk/README.md#deletereport) -  Deletes a report. 
* [DeleteReportGroup](docs/sdk/README.md#deletereportgroup) - Deletes a report group. Before you delete a report group, you must delete its reports. 
* [DeleteResourcePolicy](docs/sdk/README.md#deleteresourcepolicy) -  Deletes a resource policy that is identified by its resource ARN. 
* [DeleteSourceCredentials](docs/sdk/README.md#deletesourcecredentials) -  Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. 
* [DeleteWebhook](docs/sdk/README.md#deletewebhook) - For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.
* [DescribeCodeCoverages](docs/sdk/README.md#describecodecoverages) - Retrieves one or more code coverage reports.
* [DescribeTestCases](docs/sdk/README.md#describetestcases) -  Returns a list of details about test cases for a report. 
* [GetReportGroupTrend](docs/sdk/README.md#getreportgrouptrend) - Analyzes and accumulates test report values for the specified test reports.
* [GetResourcePolicy](docs/sdk/README.md#getresourcepolicy) -  Gets a resource policy that is identified by its resource ARN. 
* [ImportSourceCredentials](docs/sdk/README.md#importsourcecredentials) -  Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. 
* [InvalidateProjectCache](docs/sdk/README.md#invalidateprojectcache) - Resets the cache for a project.
* [ListBuildBatches](docs/sdk/README.md#listbuildbatches) - Retrieves the identifiers of your build batches in the current region.
* [ListBuildBatchesForProject](docs/sdk/README.md#listbuildbatchesforproject) - Retrieves the identifiers of the build batches for a specific project.
* [ListBuilds](docs/sdk/README.md#listbuilds) - Gets a list of build IDs, with each build ID representing a single build.
* [ListBuildsForProject](docs/sdk/README.md#listbuildsforproject) - Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.
* [ListCuratedEnvironmentImages](docs/sdk/README.md#listcuratedenvironmentimages) - Gets information about Docker images that are managed by CodeBuild.
* [ListProjects](docs/sdk/README.md#listprojects) - Gets a list of build project names, with each build project name representing a single build project.
* [ListReportGroups](docs/sdk/README.md#listreportgroups) -  Gets a list ARNs for the report groups in the current Amazon Web Services account. 
* [ListReports](docs/sdk/README.md#listreports) -  Returns a list of ARNs for the reports in the current Amazon Web Services account. 
* [ListReportsForReportGroup](docs/sdk/README.md#listreportsforreportgroup) -  Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>. 
* [ListSharedProjects](docs/sdk/README.md#listsharedprojects) -  Gets a list of projects that are shared with other Amazon Web Services accounts or users. 
* [ListSharedReportGroups](docs/sdk/README.md#listsharedreportgroups) -  Gets a list of report groups that are shared with other Amazon Web Services accounts or users. 
* [ListSourceCredentials](docs/sdk/README.md#listsourcecredentials) -  Returns a list of <code>SourceCredentialsInfo</code> objects. 
* [PutResourcePolicy](docs/sdk/README.md#putresourcepolicy) -  Stores a resource policy for the ARN of a <code>Project</code> or <code>ReportGroup</code> object. 
* [RetryBuild](docs/sdk/README.md#retrybuild) - Restarts a build.
* [RetryBuildBatch](docs/sdk/README.md#retrybuildbatch) - Restarts a failed batch build. Only batch builds that have failed can be retried.
* [StartBuild](docs/sdk/README.md#startbuild) - Starts running a build.
* [StartBuildBatch](docs/sdk/README.md#startbuildbatch) - Starts a batch build for a project.
* [StopBuild](docs/sdk/README.md#stopbuild) - Attempts to stop running a build.
* [StopBuildBatch](docs/sdk/README.md#stopbuildbatch) - Stops a running batch build.
* [UpdateProject](docs/sdk/README.md#updateproject) - Changes the settings of a build project.
* [UpdateProjectVisibility](docs/sdk/README.md#updateprojectvisibility) - <p>Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/public-builds.html">Public build projects</a> in the <i>CodeBuild User Guide</i>.</p> <important> <p>The following should be kept in mind when making your projects public:</p> <ul> <li> <p>All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public.</p> </li> <li> <p>All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are:</p> <ul> <li> <p>Do not store sensitive values, especially Amazon Web Services access key IDs and secret access keys, in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values.</p> </li> <li> <p>Follow <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/webhooks.html#webhook-best-practices">Best practices for using webhooks</a> in the <i>CodeBuild User Guide</i> to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible.</p> </li> </ul> </li> <li> <p>A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded.</p> </li> </ul> </important>
* [UpdateReportGroup](docs/sdk/README.md#updatereportgroup) -  Updates a report group. 
* [UpdateWebhook](docs/sdk/README.md#updatewebhook) - <p> Updates the webhook associated with an CodeBuild build project. </p> <note> <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. </p> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
