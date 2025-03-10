# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteBuildsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeleteBuildsInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchDeleteBuildsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchDeleteBuildsRequest();
    $request->batchDeleteBuildsInput = new BatchDeleteBuildsInput();
    $request->batchDeleteBuildsInput->ids = [
        'provident',
        'distinctio',
        'quibusdam',
    ];
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = BatchDeleteBuildsXAmzTargetEnum::CODE_BUILD20161006_BATCH_DELETE_BUILDS;

    $response = $sdk->batchDeleteBuilds($request);

    if ($response->batchDeleteBuildsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [batchDeleteBuilds](docs/sdk/README.md#batchdeletebuilds) - Deletes one or more builds.
* [batchGetBuildBatches](docs/sdk/README.md#batchgetbuildbatches) - Retrieves information about one or more batch builds.
* [batchGetBuilds](docs/sdk/README.md#batchgetbuilds) - Gets information about one or more builds.
* [batchGetProjects](docs/sdk/README.md#batchgetprojects) - Gets information about one or more build projects.
* [batchGetReportGroups](docs/sdk/README.md#batchgetreportgroups) -  Returns an array of report groups. 
* [batchGetReports](docs/sdk/README.md#batchgetreports) -  Returns an array of reports. 
* [createProject](docs/sdk/README.md#createproject) - Creates a build project.
* [createReportGroup](docs/sdk/README.md#createreportgroup) -  Creates a report group. A report group contains a collection of reports. 
* [createWebhook](docs/sdk/README.md#createwebhook) - <p>For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.</p> <important> <p>If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p> </important>
* [deleteBuildBatch](docs/sdk/README.md#deletebuildbatch) - Deletes a batch build.
* [deleteProject](docs/sdk/README.md#deleteproject) -  Deletes a build project. When you delete a project, its builds are not deleted. 
* [deleteReport](docs/sdk/README.md#deletereport) -  Deletes a report. 
* [deleteReportGroup](docs/sdk/README.md#deletereportgroup) - Deletes a report group. Before you delete a report group, you must delete its reports. 
* [deleteResourcePolicy](docs/sdk/README.md#deleteresourcepolicy) -  Deletes a resource policy that is identified by its resource ARN. 
* [deleteSourceCredentials](docs/sdk/README.md#deletesourcecredentials) -  Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. 
* [deleteWebhook](docs/sdk/README.md#deletewebhook) - For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.
* [describeCodeCoverages](docs/sdk/README.md#describecodecoverages) - Retrieves one or more code coverage reports.
* [describeTestCases](docs/sdk/README.md#describetestcases) -  Returns a list of details about test cases for a report. 
* [getReportGroupTrend](docs/sdk/README.md#getreportgrouptrend) - Analyzes and accumulates test report values for the specified test reports.
* [getResourcePolicy](docs/sdk/README.md#getresourcepolicy) -  Gets a resource policy that is identified by its resource ARN. 
* [importSourceCredentials](docs/sdk/README.md#importsourcecredentials) -  Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. 
* [invalidateProjectCache](docs/sdk/README.md#invalidateprojectcache) - Resets the cache for a project.
* [listBuildBatches](docs/sdk/README.md#listbuildbatches) - Retrieves the identifiers of your build batches in the current region.
* [listBuildBatchesForProject](docs/sdk/README.md#listbuildbatchesforproject) - Retrieves the identifiers of the build batches for a specific project.
* [listBuilds](docs/sdk/README.md#listbuilds) - Gets a list of build IDs, with each build ID representing a single build.
* [listBuildsForProject](docs/sdk/README.md#listbuildsforproject) - Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.
* [listCuratedEnvironmentImages](docs/sdk/README.md#listcuratedenvironmentimages) - Gets information about Docker images that are managed by CodeBuild.
* [listProjects](docs/sdk/README.md#listprojects) - Gets a list of build project names, with each build project name representing a single build project.
* [listReportGroups](docs/sdk/README.md#listreportgroups) -  Gets a list ARNs for the report groups in the current Amazon Web Services account. 
* [listReports](docs/sdk/README.md#listreports) -  Returns a list of ARNs for the reports in the current Amazon Web Services account. 
* [listReportsForReportGroup](docs/sdk/README.md#listreportsforreportgroup) -  Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>. 
* [listSharedProjects](docs/sdk/README.md#listsharedprojects) -  Gets a list of projects that are shared with other Amazon Web Services accounts or users. 
* [listSharedReportGroups](docs/sdk/README.md#listsharedreportgroups) -  Gets a list of report groups that are shared with other Amazon Web Services accounts or users. 
* [listSourceCredentials](docs/sdk/README.md#listsourcecredentials) -  Returns a list of <code>SourceCredentialsInfo</code> objects. 
* [putResourcePolicy](docs/sdk/README.md#putresourcepolicy) -  Stores a resource policy for the ARN of a <code>Project</code> or <code>ReportGroup</code> object. 
* [retryBuild](docs/sdk/README.md#retrybuild) - Restarts a build.
* [retryBuildBatch](docs/sdk/README.md#retrybuildbatch) - Restarts a failed batch build. Only batch builds that have failed can be retried.
* [startBuild](docs/sdk/README.md#startbuild) - Starts running a build.
* [startBuildBatch](docs/sdk/README.md#startbuildbatch) - Starts a batch build for a project.
* [stopBuild](docs/sdk/README.md#stopbuild) - Attempts to stop running a build.
* [stopBuildBatch](docs/sdk/README.md#stopbuildbatch) - Stops a running batch build.
* [updateProject](docs/sdk/README.md#updateproject) - Changes the settings of a build project.
* [updateProjectVisibility](docs/sdk/README.md#updateprojectvisibility) - <p>Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/public-builds.html">Public build projects</a> in the <i>CodeBuild User Guide</i>.</p> <important> <p>The following should be kept in mind when making your projects public:</p> <ul> <li> <p>All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public.</p> </li> <li> <p>All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are:</p> <ul> <li> <p>Do not store sensitive values, especially Amazon Web Services access key IDs and secret access keys, in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values.</p> </li> <li> <p>Follow <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/webhooks.html#webhook-best-practices">Best practices for using webhooks</a> in the <i>CodeBuild User Guide</i> to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible.</p> </li> </ul> </li> <li> <p>A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded.</p> </li> </ul> </important>
* [updateReportGroup](docs/sdk/README.md#updatereportgroup) -  Updates a report group. 
* [updateWebhook](docs/sdk/README.md#updatewebhook) - <p> Updates the webhook associated with an CodeBuild build project. </p> <note> <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. </p> </note>
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
