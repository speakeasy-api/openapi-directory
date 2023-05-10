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
        'iure',
        'magnam',
    ];
    $request->xAmzAlgorithm = 'debitis';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'suscipit';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'minus';
    $request->xAmzTarget = BatchDeleteBuildsXAmzTargetEnum::CODE_BUILD20161006_BATCH_DELETE_BUILDS;

    $response = $sdk->sdk->batchDeleteBuilds($request);

    if ($response->batchDeleteBuildsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetBuildBatches

Retrieves information about one or more batch builds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetBuildBatchesRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetBuildBatchesInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetBuildBatchesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetBuildBatchesRequest();
    $request->batchGetBuildBatchesInput = new BatchGetBuildBatchesInput();
    $request->batchGetBuildBatchesInput->ids = [
        'voluptatum',
        'iusto',
        'excepturi',
        'nisi',
    ];
    $request->xAmzAlgorithm = 'recusandae';
    $request->xAmzContentSha256 = 'temporibus';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'deserunt';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->xAmzTarget = BatchGetBuildBatchesXAmzTargetEnum::CODE_BUILD20161006_BATCH_GET_BUILD_BATCHES;

    $response = $sdk->sdk->batchGetBuildBatches($request);

    if ($response->batchGetBuildBatchesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetBuilds

Gets information about one or more builds.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetBuildsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetBuildsInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetBuildsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetBuildsRequest();
    $request->batchGetBuildsInput = new BatchGetBuildsInput();
    $request->batchGetBuildsInput->ids = [
        'repellendus',
        'sapiente',
    ];
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzTarget = BatchGetBuildsXAmzTargetEnum::CODE_BUILD20161006_BATCH_GET_BUILDS;

    $response = $sdk->sdk->batchGetBuilds($request);

    if ($response->batchGetBuildsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetProjects

Gets information about one or more build projects.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetProjectsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetProjectsInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetProjectsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetProjectsRequest();
    $request->batchGetProjectsInput = new BatchGetProjectsInput();
    $request->batchGetProjectsInput->names = [
        'esse',
        'totam',
        'porro',
        'dolorum',
    ];
    $request->xAmzAlgorithm = 'dicta';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'occaecati';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'deleniti';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = BatchGetProjectsXAmzTargetEnum::CODE_BUILD20161006_BATCH_GET_PROJECTS;

    $response = $sdk->sdk->batchGetProjects($request);

    if ($response->batchGetProjectsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetReportGroups

 Returns an array of report groups. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetReportGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetReportGroupsInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetReportGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetReportGroupsRequest();
    $request->batchGetReportGroupsInput = new BatchGetReportGroupsInput();
    $request->batchGetReportGroupsInput->reportGroupArns = [
        'totam',
        'beatae',
        'commodi',
        'molestiae',
    ];
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'qui';
    $request->xAmzCredential = 'impedit';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'esse';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->xAmzTarget = BatchGetReportGroupsXAmzTargetEnum::CODE_BUILD20161006_BATCH_GET_REPORT_GROUPS;

    $response = $sdk->sdk->batchGetReportGroups($request);

    if ($response->batchGetReportGroupsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchGetReports

 Returns an array of reports. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetReportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetReportsInput;
use \OpenAPI\OpenAPI\Models\Operations\BatchGetReportsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchGetReportsRequest();
    $request->batchGetReportsInput = new BatchGetReportsInput();
    $request->batchGetReportsInput->reportArns = [
        'perferendis',
    ];
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'laboriosam';
    $request->xAmzTarget = BatchGetReportsXAmzTargetEnum::CODE_BUILD20161006_BATCH_GET_REPORTS;

    $response = $sdk->sdk->batchGetReports($request);

    if ($response->batchGetReportsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createProject

Creates a build project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateProjectInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectArtifacts;
use \OpenAPI\OpenAPI\Models\Shared\BucketOwnerAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactNamespaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactPackagingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectBuildBatchConfig;
use \OpenAPI\OpenAPI\Models\Shared\BatchReportModeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\ProjectCache;
use \OpenAPI\OpenAPI\Models\Shared\CacheModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CacheTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectEnvironment;
use \OpenAPI\OpenAPI\Models\Shared\ComputeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentVariable;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentVariableTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImagePullCredentialsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegistryCredential;
use \OpenAPI\OpenAPI\Models\Shared\CredentialProviderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectFileSystemLocation;
use \OpenAPI\OpenAPI\Models\Shared\FileSystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogsConfig;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsConfig;
use \OpenAPI\OpenAPI\Models\Shared\LogsConfigStatusTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3LogsConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSourceVersion;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSource;
use \OpenAPI\OpenAPI\Models\Shared\SourceAuth;
use \OpenAPI\OpenAPI\Models\Shared\SourceAuthTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BuildStatusConfig;
use \OpenAPI\OpenAPI\Models\Shared\GitSubmodulesConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\CreateProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateProjectRequest();
    $request->createProjectInput = new CreateProjectInput();
    $request->createProjectInput->artifacts = new ProjectArtifacts();
    $request->createProjectInput->artifacts->artifactIdentifier = 'hic';
    $request->createProjectInput->artifacts->bucketOwnerAccess = BucketOwnerAccessEnum::FULL;
    $request->createProjectInput->artifacts->encryptionDisabled = false;
    $request->createProjectInput->artifacts->location = 'fuga';
    $request->createProjectInput->artifacts->name = 'Stacy Moore';
    $request->createProjectInput->artifacts->namespaceType = ArtifactNamespaceEnum::BUILD_ID;
    $request->createProjectInput->artifacts->overrideArtifactName = false;
    $request->createProjectInput->artifacts->packaging = ArtifactPackagingEnum::NONE;
    $request->createProjectInput->artifacts->path = 'ipsa';
    $request->createProjectInput->artifacts->type = ArtifactsTypeEnum::NO_ARTIFACTS;
    $request->createProjectInput->badgeEnabled = false;
    $request->createProjectInput->buildBatchConfig = new ProjectBuildBatchConfig();
    $request->createProjectInput->buildBatchConfig->batchReportMode = BatchReportModeTypeEnum::REPORT_AGGREGATED_BATCH;
    $request->createProjectInput->buildBatchConfig->combineArtifacts = false;
    $request->createProjectInput->buildBatchConfig->restrictions = new BatchRestrictions();
    $request->createProjectInput->buildBatchConfig->restrictions->computeTypesAllowed = [
        'laborum',
        'dolores',
        'dolorem',
    ];
    $request->createProjectInput->buildBatchConfig->restrictions->maximumBuildsAllowed = 358152;
    $request->createProjectInput->buildBatchConfig->serviceRole = 'explicabo';
    $request->createProjectInput->buildBatchConfig->timeoutInMins = 750686;
    $request->createProjectInput->cache = new ProjectCache();
    $request->createProjectInput->cache->location = 'enim';
    $request->createProjectInput->cache->modes = [
        CacheModeEnum::LOCAL_SOURCE_CACHE,
        CacheModeEnum::LOCAL_DOCKER_LAYER_CACHE,
        CacheModeEnum::LOCAL_SOURCE_CACHE,
    ];
    $request->createProjectInput->cache->type = CacheTypeEnum::NO_CACHE;
    $request->createProjectInput->concurrentBuildLimit = 438601;
    $request->createProjectInput->description = 'culpa';
    $request->createProjectInput->encryptionKey = 'doloribus';
    $request->createProjectInput->environment = new ProjectEnvironment();
    $request->createProjectInput->environment->certificate = 'sapiente';
    $request->createProjectInput->environment->computeType = ComputeTypeEnum::BUILD_GENERAL1_SMALL;
    $request->createProjectInput->environment->environmentVariables = [
        new EnvironmentVariable(),
        new EnvironmentVariable(),
        new EnvironmentVariable(),
    ];
    $request->createProjectInput->environment->image = 'dolorem';
    $request->createProjectInput->environment->imagePullCredentialsType = ImagePullCredentialsTypeEnum::SERVICE_ROLE;
    $request->createProjectInput->environment->privilegedMode = false;
    $request->createProjectInput->environment->registryCredential = new RegistryCredential();
    $request->createProjectInput->environment->registryCredential->credential = 'consequuntur';
    $request->createProjectInput->environment->registryCredential->credentialProvider = CredentialProviderTypeEnum::SECRETS_MANAGER;
    $request->createProjectInput->environment->type = EnvironmentTypeEnum::WINDOWS_SERVER2019_CONTAINER;
    $request->createProjectInput->fileSystemLocations = [
        new ProjectFileSystemLocation(),
        new ProjectFileSystemLocation(),
        new ProjectFileSystemLocation(),
    ];
    $request->createProjectInput->logsConfig = new LogsConfig();
    $request->createProjectInput->logsConfig->cloudWatchLogs = new CloudWatchLogsConfig();
    $request->createProjectInput->logsConfig->cloudWatchLogs->groupName = 'occaecati';
    $request->createProjectInput->logsConfig->cloudWatchLogs->status = LogsConfigStatusTypeEnum::ENABLED;
    $request->createProjectInput->logsConfig->cloudWatchLogs->streamName = 'commodi';
    $request->createProjectInput->logsConfig->s3Logs = new S3LogsConfig();
    $request->createProjectInput->logsConfig->s3Logs->bucketOwnerAccess = BucketOwnerAccessEnum::READ_ONLY;
    $request->createProjectInput->logsConfig->s3Logs->encryptionDisabled = false;
    $request->createProjectInput->logsConfig->s3Logs->location = 'molestiae';
    $request->createProjectInput->logsConfig->s3Logs->status = LogsConfigStatusTypeEnum::ENABLED;
    $request->createProjectInput->name = 'Miss Eugene Hauck';
    $request->createProjectInput->queuedTimeoutInMinutes = 317202;
    $request->createProjectInput->secondaryArtifacts = [
        new ProjectArtifacts(),
    ];
    $request->createProjectInput->secondarySourceVersions = [
        new ProjectSourceVersion(),
        new ProjectSourceVersion(),
        new ProjectSourceVersion(),
        new ProjectSourceVersion(),
    ];
    $request->createProjectInput->secondarySources = [
        new ProjectSource(),
    ];
    $request->createProjectInput->serviceRole = 'tenetur';
    $request->createProjectInput->source = new ProjectSource();
    $request->createProjectInput->source->auth = new SourceAuth();
    $request->createProjectInput->source->auth->resource = 'ipsam';
    $request->createProjectInput->source->auth->type = SourceAuthTypeEnum::OAUTH;
    $request->createProjectInput->source->buildStatusConfig = new BuildStatusConfig();
    $request->createProjectInput->source->buildStatusConfig->context = 'id';
    $request->createProjectInput->source->buildStatusConfig->targetUrl = 'possimus';
    $request->createProjectInput->source->buildspec = 'aut';
    $request->createProjectInput->source->gitCloneDepth = 97101;
    $request->createProjectInput->source->gitSubmodulesConfig = new GitSubmodulesConfig();
    $request->createProjectInput->source->gitSubmodulesConfig->fetchSubmodules = false;
    $request->createProjectInput->source->insecureSsl = false;
    $request->createProjectInput->source->location = 'error';
    $request->createProjectInput->source->reportBuildStatus = false;
    $request->createProjectInput->source->sourceIdentifier = 'temporibus';
    $request->createProjectInput->source->type = SourceTypeEnum::BITBUCKET;
    $request->createProjectInput->sourceVersion = 'quasi';
    $request->createProjectInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createProjectInput->timeoutInMinutes = 976460;
    $request->createProjectInput->vpcConfig = new VpcConfig();
    $request->createProjectInput->vpcConfig->securityGroupIds = [
        'nihil',
        'praesentium',
        'voluptatibus',
        'ipsa',
    ];
    $request->createProjectInput->vpcConfig->subnets = [
        'voluptate',
        'cum',
        'perferendis',
    ];
    $request->createProjectInput->vpcConfig->vpcId = 'doloremque';
    $request->xAmzAlgorithm = 'reprehenderit';
    $request->xAmzContentSha256 = 'ut';
    $request->xAmzCredential = 'maiores';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'dolore';
    $request->xAmzSignedHeaders = 'iusto';
    $request->xAmzTarget = CreateProjectXAmzTargetEnum::CODE_BUILD20161006_CREATE_PROJECT;

    $response = $sdk->sdk->createProject($request);

    if ($response->createProjectOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createReportGroup

 Creates a report group. A report group contains a collection of reports. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateReportGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateReportGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\ReportExportConfig;
use \OpenAPI\OpenAPI\Models\Shared\ReportExportConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3ReportExportConfig;
use \OpenAPI\OpenAPI\Models\Shared\ReportPackagingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\ReportTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateReportGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateReportGroupRequest();
    $request->createReportGroupInput = new CreateReportGroupInput();
    $request->createReportGroupInput->exportConfig = new ReportExportConfig();
    $request->createReportGroupInput->exportConfig->exportConfigType = ReportExportConfigTypeEnum::S3;
    $request->createReportGroupInput->exportConfig->s3Destination = new S3ReportExportConfig();
    $request->createReportGroupInput->exportConfig->s3Destination->bucket = 'harum';
    $request->createReportGroupInput->exportConfig->s3Destination->bucketOwner = 'enim';
    $request->createReportGroupInput->exportConfig->s3Destination->encryptionDisabled = false;
    $request->createReportGroupInput->exportConfig->s3Destination->encryptionKey = 'accusamus';
    $request->createReportGroupInput->exportConfig->s3Destination->packaging = ReportPackagingTypeEnum::ZIP;
    $request->createReportGroupInput->exportConfig->s3Destination->path = 'repudiandae';
    $request->createReportGroupInput->name = 'Edna Pouros';
    $request->createReportGroupInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->createReportGroupInput->type = ReportTypeEnum::TEST;
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = CreateReportGroupXAmzTargetEnum::CODE_BUILD20161006_CREATE_REPORT_GROUP;

    $response = $sdk->sdk->createReportGroup($request);

    if ($response->createReportGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWebhook

<p>For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, enables CodeBuild to start rebuilding the source code every time a code change is pushed to the repository.</p> <important> <p>If you enable webhooks for an CodeBuild project, and the project is used as a build step in CodePipeline, then two identical builds are created for each commit. One build is triggered through webhooks, and one through CodePipeline. Because billing is on a per-build basis, you are billed for both builds. Therefore, if you are using CodePipeline, we recommend that you disable webhooks in CodeBuild. In the CodeBuild console, clear the Webhook box. For more information, see step 5 in <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/change-project.html#change-project-console">Change a Build Project's Settings</a>.</p> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateWebhookInput;
use \OpenAPI\OpenAPI\Models\Shared\WebhookBuildTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebhookFilter;
use \OpenAPI\OpenAPI\Models\Shared\WebhookFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWebhookRequest();
    $request->createWebhookInput = new CreateWebhookInput();
    $request->createWebhookInput->branchFilter = 'itaque';
    $request->createWebhookInput->buildType = WebhookBuildTypeEnum::BUILD;
    $request->createWebhookInput->filterGroups = [
        [
            new WebhookFilter(),
        ],
        [
            new WebhookFilter(),
            new WebhookFilter(),
            new WebhookFilter(),
        ],
    ];
    $request->createWebhookInput->projectName = 'quibusdam';
    $request->xAmzAlgorithm = 'explicabo';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'modi';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzTarget = CreateWebhookXAmzTargetEnum::CODE_BUILD20161006_CREATE_WEBHOOK;

    $response = $sdk->sdk->createWebhook($request);

    if ($response->createWebhookOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBuildBatch

Deletes a batch build.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBuildBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteBuildBatchInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBuildBatchXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBuildBatchRequest();
    $request->deleteBuildBatchInput = new DeleteBuildBatchInput();
    $request->deleteBuildBatchInput->id = '69802d50-2a94-4bb4-b63c-969e9a3efa77';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'facere';
    $request->xAmzTarget = DeleteBuildBatchXAmzTargetEnum::CODE_BUILD20161006_DELETE_BUILD_BATCH;

    $response = $sdk->sdk->deleteBuildBatch($request);

    if ($response->deleteBuildBatchOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteProject

 Deletes a build project. When you delete a project, its builds are not deleted. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteProjectInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteProjectRequest();
    $request->deleteProjectInput = new DeleteProjectInput();
    $request->deleteProjectInput->name = 'Beth Padberg';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'delectus';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = DeleteProjectXAmzTargetEnum::CODE_BUILD20161006_DELETE_PROJECT;

    $response = $sdk->sdk->deleteProject($request);

    if ($response->deleteProjectOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteReport

 Deletes a report. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReportRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteReportInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReportXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReportRequest();
    $request->deleteReportInput = new DeleteReportInput();
    $request->deleteReportInput->arn = 'id';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = DeleteReportXAmzTargetEnum::CODE_BUILD20161006_DELETE_REPORT;

    $response = $sdk->sdk->deleteReport($request);

    if ($response->deleteReportOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteReportGroup

Deletes a report group. Before you delete a report group, you must delete its reports. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReportGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteReportGroupInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteReportGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteReportGroupRequest();
    $request->deleteReportGroupInput = new DeleteReportGroupInput();
    $request->deleteReportGroupInput->arn = 'natus';
    $request->deleteReportGroupInput->deleteReports = false;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'molestiae';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'id';
    $request->xAmzTarget = DeleteReportGroupXAmzTargetEnum::CODE_BUILD20161006_DELETE_REPORT_GROUP;

    $response = $sdk->sdk->deleteReportGroup($request);

    if ($response->deleteReportGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteResourcePolicy

 Deletes a resource policy that is identified by its resource ARN. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteResourcePolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteResourcePolicyRequest();
    $request->deleteResourcePolicyInput = new DeleteResourcePolicyInput();
    $request->deleteResourcePolicyInput->resourceArn = 'labore';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'suscipit';
    $request->xAmzCredential = 'natus';
    $request->xAmzDate = 'nobis';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'aspernatur';
    $request->xAmzTarget = DeleteResourcePolicyXAmzTargetEnum::CODE_BUILD20161006_DELETE_RESOURCE_POLICY;

    $response = $sdk->sdk->deleteResourcePolicy($request);

    if ($response->deleteResourcePolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSourceCredentials

 Deletes a set of GitHub, GitHub Enterprise, or Bitbucket source credentials. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSourceCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteSourceCredentialsInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSourceCredentialsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSourceCredentialsRequest();
    $request->deleteSourceCredentialsInput = new DeleteSourceCredentialsInput();
    $request->deleteSourceCredentialsInput->arn = 'architecto';
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'sint';
    $request->xAmzTarget = DeleteSourceCredentialsXAmzTargetEnum::CODE_BUILD20161006_DELETE_SOURCE_CREDENTIALS;

    $response = $sdk->sdk->deleteSourceCredentials($request);

    if ($response->deleteSourceCredentialsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWebhook

For an existing CodeBuild build project that has its source code stored in a GitHub or Bitbucket repository, stops CodeBuild from rebuilding the source code every time a code change is pushed to the repository.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteWebhookInput;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhookRequest();
    $request->deleteWebhookInput = new DeleteWebhookInput();
    $request->deleteWebhookInput->projectName = 'accusantium';
    $request->xAmzAlgorithm = 'mollitia';
    $request->xAmzContentSha256 = 'reiciendis';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'ad';
    $request->xAmzSecurityToken = 'eum';
    $request->xAmzSignature = 'dolor';
    $request->xAmzSignedHeaders = 'necessitatibus';
    $request->xAmzTarget = DeleteWebhookXAmzTargetEnum::CODE_BUILD20161006_DELETE_WEBHOOK;

    $response = $sdk->sdk->deleteWebhook($request);

    if ($response->deleteWebhookOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeCodeCoverages

Retrieves one or more code coverage reports.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCodeCoveragesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeCodeCoveragesInput;
use \OpenAPI\OpenAPI\Models\Shared\ReportCodeCoverageSortByTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\DescribeCodeCoveragesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeCodeCoveragesRequest();
    $request->describeCodeCoveragesInput = new DescribeCodeCoveragesInput();
    $request->describeCodeCoveragesInput->maxLineCoveragePercentage = 1412.64;
    $request->describeCodeCoveragesInput->maxResults = 367562;
    $request->describeCodeCoveragesInput->minLineCoveragePercentage = 972.6;
    $request->describeCodeCoveragesInput->nextToken = 'iure';
    $request->describeCodeCoveragesInput->reportArn = 'doloribus';
    $request->describeCodeCoveragesInput->sortBy = ReportCodeCoverageSortByTypeEnum::FILE_PATH;
    $request->describeCodeCoveragesInput->sortOrder = SortOrderTypeEnum::ASCENDING;
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'in';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->xAmzTarget = DescribeCodeCoveragesXAmzTargetEnum::CODE_BUILD20161006_DESCRIBE_CODE_COVERAGES;
    $request->maxResults = 'ullam';
    $request->nextToken = 'expedita';

    $response = $sdk->sdk->describeCodeCoverages($request);

    if ($response->describeCodeCoveragesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## describeTestCases

 Returns a list of details about test cases for a report. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTestCasesRequest;
use \OpenAPI\OpenAPI\Models\Shared\DescribeTestCasesInput;
use \OpenAPI\OpenAPI\Models\Shared\TestCaseFilter;
use \OpenAPI\OpenAPI\Models\Operations\DescribeTestCasesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DescribeTestCasesRequest();
    $request->describeTestCasesInput = new DescribeTestCasesInput();
    $request->describeTestCasesInput->filter = new TestCaseFilter();
    $request->describeTestCasesInput->filter->keyword = 'nihil';
    $request->describeTestCasesInput->filter->status = 'repellat';
    $request->describeTestCasesInput->maxResults = 841140;
    $request->describeTestCasesInput->nextToken = 'sed';
    $request->describeTestCasesInput->reportArn = 'saepe';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'consequuntur';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'magni';
    $request->xAmzSignedHeaders = 'sunt';
    $request->xAmzTarget = DescribeTestCasesXAmzTargetEnum::CODE_BUILD20161006_DESCRIBE_TEST_CASES;
    $request->maxResults = 'quo';
    $request->nextToken = 'illum';

    $response = $sdk->sdk->describeTestCases($request);

    if ($response->describeTestCasesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getReportGroupTrend

Analyzes and accumulates test report values for the specified test reports.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetReportGroupTrendRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetReportGroupTrendInput;
use \OpenAPI\OpenAPI\Models\Shared\ReportGroupTrendFieldTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetReportGroupTrendXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetReportGroupTrendRequest();
    $request->getReportGroupTrendInput = new GetReportGroupTrendInput();
    $request->getReportGroupTrendInput->numOfReports = 864934;
    $request->getReportGroupTrendInput->reportGroupArn = 'maxime';
    $request->getReportGroupTrendInput->trendField = ReportGroupTrendFieldTypeEnum::LINE_COVERAGE;
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzTarget = GetReportGroupTrendXAmzTargetEnum::CODE_BUILD20161006_GET_REPORT_GROUP_TREND;

    $response = $sdk->sdk->getReportGroupTrend($request);

    if ($response->getReportGroupTrendOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getResourcePolicy

 Gets a resource policy that is identified by its resource ARN. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\GetResourcePolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\GetResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetResourcePolicyRequest();
    $request->getResourcePolicyInput = new GetResourcePolicyInput();
    $request->getResourcePolicyInput->resourceArn = 'ipsam';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'autem';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'eaque';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->xAmzTarget = GetResourcePolicyXAmzTargetEnum::CODE_BUILD20161006_GET_RESOURCE_POLICY;

    $response = $sdk->sdk->getResourcePolicy($request);

    if ($response->getResourcePolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## importSourceCredentials

 Imports the source repository credentials for an CodeBuild project that has its source code stored in a GitHub, GitHub Enterprise, or Bitbucket repository. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ImportSourceCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ImportSourceCredentialsInput;
use \OpenAPI\OpenAPI\Models\Shared\AuthTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ServerTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ImportSourceCredentialsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ImportSourceCredentialsRequest();
    $request->importSourceCredentialsInput = new ImportSourceCredentialsInput();
    $request->importSourceCredentialsInput->authType = AuthTypeEnum::OAUTH;
    $request->importSourceCredentialsInput->serverType = ServerTypeEnum::GITHUB_ENTERPRISE;
    $request->importSourceCredentialsInput->shouldOverwrite = false;
    $request->importSourceCredentialsInput->token = 'amet';
    $request->importSourceCredentialsInput->username = 'Adolf_Runolfsdottir';
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'eaque';
    $request->xAmzTarget = ImportSourceCredentialsXAmzTargetEnum::CODE_BUILD20161006_IMPORT_SOURCE_CREDENTIALS;

    $response = $sdk->sdk->importSourceCredentials($request);

    if ($response->importSourceCredentialsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## invalidateProjectCache

Resets the cache for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\InvalidateProjectCacheRequest;
use \OpenAPI\OpenAPI\Models\Shared\InvalidateProjectCacheInput;
use \OpenAPI\OpenAPI\Models\Operations\InvalidateProjectCacheXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new InvalidateProjectCacheRequest();
    $request->invalidateProjectCacheInput = new InvalidateProjectCacheInput();
    $request->invalidateProjectCacheInput->projectName = 'quis';
    $request->xAmzAlgorithm = 'nesciunt';
    $request->xAmzContentSha256 = 'eos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzTarget = InvalidateProjectCacheXAmzTargetEnum::CODE_BUILD20161006_INVALIDATE_PROJECT_CACHE;

    $response = $sdk->sdk->invalidateProjectCache($request);

    if ($response->invalidateProjectCacheOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBuildBatches

Retrieves the identifiers of your build batches in the current region.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBuildBatchesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListBuildBatchesInput;
use \OpenAPI\OpenAPI\Models\Shared\BuildBatchFilter;
use \OpenAPI\OpenAPI\Models\Shared\StatusTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListBuildBatchesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBuildBatchesRequest();
    $request->listBuildBatchesInput = new ListBuildBatchesInput();
    $request->listBuildBatchesInput->filter = new BuildBatchFilter();
    $request->listBuildBatchesInput->filter->status = StatusTypeEnum::STOPPED;
    $request->listBuildBatchesInput->maxResults = 345352;
    $request->listBuildBatchesInput->nextToken = 'hic';
    $request->listBuildBatchesInput->sortOrder = SortOrderTypeEnum::DESCENDING;
    $request->xAmzAlgorithm = 'omnis';
    $request->xAmzContentSha256 = 'facilis';
    $request->xAmzCredential = 'perspiciatis';
    $request->xAmzDate = 'voluptatem';
    $request->xAmzSecurityToken = 'porro';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'blanditiis';
    $request->xAmzTarget = ListBuildBatchesXAmzTargetEnum::CODE_BUILD20161006_LIST_BUILD_BATCHES;
    $request->maxResults = 'error';
    $request->nextToken = 'eaque';

    $response = $sdk->sdk->listBuildBatches($request);

    if ($response->listBuildBatchesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBuildBatchesForProject

Retrieves the identifiers of the build batches for a specific project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBuildBatchesForProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListBuildBatchesForProjectInput;
use \OpenAPI\OpenAPI\Models\Shared\BuildBatchFilter;
use \OpenAPI\OpenAPI\Models\Shared\StatusTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListBuildBatchesForProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBuildBatchesForProjectRequest();
    $request->listBuildBatchesForProjectInput = new ListBuildBatchesForProjectInput();
    $request->listBuildBatchesForProjectInput->filter = new BuildBatchFilter();
    $request->listBuildBatchesForProjectInput->filter->status = StatusTypeEnum::TIMED_OUT;
    $request->listBuildBatchesForProjectInput->maxResults = 699098;
    $request->listBuildBatchesForProjectInput->nextToken = 'adipisci';
    $request->listBuildBatchesForProjectInput->projectName = 'asperiores';
    $request->listBuildBatchesForProjectInput->sortOrder = SortOrderTypeEnum::DESCENDING;
    $request->xAmzAlgorithm = 'modi';
    $request->xAmzContentSha256 = 'iste';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'pariatur';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'nobis';
    $request->xAmzTarget = ListBuildBatchesForProjectXAmzTargetEnum::CODE_BUILD20161006_LIST_BUILD_BATCHES_FOR_PROJECT;
    $request->maxResults = 'libero';
    $request->nextToken = 'delectus';

    $response = $sdk->sdk->listBuildBatchesForProject($request);

    if ($response->listBuildBatchesForProjectOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBuilds

Gets a list of build IDs, with each build ID representing a single build.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBuildsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListBuildsInput;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListBuildsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBuildsRequest();
    $request->listBuildsInput = new ListBuildsInput();
    $request->listBuildsInput->nextToken = 'quaerat';
    $request->listBuildsInput->sortOrder = SortOrderTypeEnum::DESCENDING;
    $request->xAmzAlgorithm = 'aliquid';
    $request->xAmzContentSha256 = 'dolorem';
    $request->xAmzCredential = 'dolorem';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'hic';
    $request->xAmzTarget = ListBuildsXAmzTargetEnum::CODE_BUILD20161006_LIST_BUILDS;
    $request->nextToken = 'excepturi';

    $response = $sdk->sdk->listBuilds($request);

    if ($response->listBuildsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBuildsForProject

Gets a list of build identifiers for the specified build project, with each build identifier representing a single build.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBuildsForProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListBuildsForProjectInput;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListBuildsForProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBuildsForProjectRequest();
    $request->listBuildsForProjectInput = new ListBuildsForProjectInput();
    $request->listBuildsForProjectInput->nextToken = 'cum';
    $request->listBuildsForProjectInput->projectName = 'voluptate';
    $request->listBuildsForProjectInput->sortOrder = SortOrderTypeEnum::ASCENDING;
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'numquam';
    $request->xAmzSecurityToken = 'veritatis';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->xAmzTarget = ListBuildsForProjectXAmzTargetEnum::CODE_BUILD20161006_LIST_BUILDS_FOR_PROJECT;
    $request->nextToken = 'iure';

    $response = $sdk->sdk->listBuildsForProject($request);

    if ($response->listBuildsForProjectOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listCuratedEnvironmentImages

Gets information about Docker images that are managed by CodeBuild.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListCuratedEnvironmentImagesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListCuratedEnvironmentImagesXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListCuratedEnvironmentImagesRequest();
    $request->requestBody = [
        'quaerat' => 'accusamus',
        'quidem' => 'voluptatibus',
    ];
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'atque';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'fugiat';
    $request->xAmzSignedHeaders = 'ab';
    $request->xAmzTarget = ListCuratedEnvironmentImagesXAmzTargetEnum::CODE_BUILD20161006_LIST_CURATED_ENVIRONMENT_IMAGES;

    $response = $sdk->sdk->listCuratedEnvironmentImages($request);

    if ($response->listCuratedEnvironmentImagesOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listProjects

Gets a list of build project names, with each build project name representing a single build project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListProjectsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListProjectsInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSortByTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListProjectsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListProjectsRequest();
    $request->listProjectsInput = new ListProjectsInput();
    $request->listProjectsInput->nextToken = 'soluta';
    $request->listProjectsInput->sortBy = ProjectSortByTypeEnum::LAST_MODIFIED_TIME;
    $request->listProjectsInput->sortOrder = SortOrderTypeEnum::ASCENDING;
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'asperiores';
    $request->xAmzTarget = ListProjectsXAmzTargetEnum::CODE_BUILD20161006_LIST_PROJECTS;
    $request->nextToken = 'nihil';

    $response = $sdk->sdk->listProjects($request);

    if ($response->listProjectsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReportGroups

 Gets a list ARNs for the report groups in the current Amazon Web Services account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReportGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListReportGroupsInput;
use \OpenAPI\OpenAPI\Models\Shared\ReportGroupSortByTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListReportGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReportGroupsRequest();
    $request->listReportGroupsInput = new ListReportGroupsInput();
    $request->listReportGroupsInput->maxResults = 216897;
    $request->listReportGroupsInput->nextToken = 'voluptate';
    $request->listReportGroupsInput->sortBy = ReportGroupSortByTypeEnum::CREATED_TIME;
    $request->listReportGroupsInput->sortOrder = SortOrderTypeEnum::DESCENDING;
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'ad';
    $request->xAmzTarget = ListReportGroupsXAmzTargetEnum::CODE_BUILD20161006_LIST_REPORT_GROUPS;
    $request->maxResults = 'saepe';
    $request->nextToken = 'suscipit';

    $response = $sdk->sdk->listReportGroups($request);

    if ($response->listReportGroupsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReports

 Returns a list of ARNs for the reports in the current Amazon Web Services account. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReportsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListReportsInput;
use \OpenAPI\OpenAPI\Models\Shared\ReportFilter;
use \OpenAPI\OpenAPI\Models\Shared\ReportStatusTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListReportsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReportsRequest();
    $request->listReportsInput = new ListReportsInput();
    $request->listReportsInput->filter = new ReportFilter();
    $request->listReportsInput->filter->status = ReportStatusTypeEnum::INCOMPLETE;
    $request->listReportsInput->maxResults = 588317;
    $request->listReportsInput->nextToken = 'minima';
    $request->listReportsInput->sortOrder = SortOrderTypeEnum::DESCENDING;
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'similique';
    $request->xAmzCredential = 'alias';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'quaerat';
    $request->xAmzSignature = 'tempora';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = ListReportsXAmzTargetEnum::CODE_BUILD20161006_LIST_REPORTS;
    $request->maxResults = 'quod';
    $request->nextToken = 'officiis';

    $response = $sdk->sdk->listReports($request);

    if ($response->listReportsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listReportsForReportGroup

 Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListReportsForReportGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListReportsForReportGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\ReportFilter;
use \OpenAPI\OpenAPI\Models\Shared\ReportStatusTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListReportsForReportGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListReportsForReportGroupRequest();
    $request->listReportsForReportGroupInput = new ListReportsForReportGroupInput();
    $request->listReportsForReportGroupInput->filter = new ReportFilter();
    $request->listReportsForReportGroupInput->filter->status = ReportStatusTypeEnum::GENERATING;
    $request->listReportsForReportGroupInput->maxResults = 679880;
    $request->listReportsForReportGroupInput->nextToken = 'a';
    $request->listReportsForReportGroupInput->reportGroupArn = 'esse';
    $request->listReportsForReportGroupInput->sortOrder = SortOrderTypeEnum::DESCENDING;
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'ipsum';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'tenetur';
    $request->xAmzSecurityToken = 'amet';
    $request->xAmzSignature = 'tempore';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzTarget = ListReportsForReportGroupXAmzTargetEnum::CODE_BUILD20161006_LIST_REPORTS_FOR_REPORT_GROUP;
    $request->maxResults = 'numquam';
    $request->nextToken = 'enim';

    $response = $sdk->sdk->listReportsForReportGroup($request);

    if ($response->listReportsForReportGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSharedProjects

 Gets a list of projects that are shared with other Amazon Web Services accounts or users. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSharedProjectsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSharedProjectsInput;
use \OpenAPI\OpenAPI\Models\Shared\SharedResourceSortByTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSharedProjectsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSharedProjectsRequest();
    $request->listSharedProjectsInput = new ListSharedProjectsInput();
    $request->listSharedProjectsInput->maxResults = 213312;
    $request->listSharedProjectsInput->nextToken = 'sapiente';
    $request->listSharedProjectsInput->sortBy = SharedResourceSortByTypeEnum::MODIFIED_TIME;
    $request->listSharedProjectsInput->sortOrder = SortOrderTypeEnum::ASCENDING;
    $request->xAmzAlgorithm = 'sit';
    $request->xAmzContentSha256 = 'expedita';
    $request->xAmzCredential = 'neque';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'libero';
    $request->xAmzSignedHeaders = 'voluptas';
    $request->xAmzTarget = ListSharedProjectsXAmzTargetEnum::CODE_BUILD20161006_LIST_SHARED_PROJECTS;
    $request->maxResults = 'deserunt';
    $request->nextToken = 'quam';

    $response = $sdk->sdk->listSharedProjects($request);

    if ($response->listSharedProjectsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSharedReportGroups

 Gets a list of report groups that are shared with other Amazon Web Services accounts or users. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSharedReportGroupsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ListSharedReportGroupsInput;
use \OpenAPI\OpenAPI\Models\Shared\SharedResourceSortByTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SortOrderTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\ListSharedReportGroupsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSharedReportGroupsRequest();
    $request->listSharedReportGroupsInput = new ListSharedReportGroupsInput();
    $request->listSharedReportGroupsInput->maxResults = 214880;
    $request->listSharedReportGroupsInput->nextToken = 'incidunt';
    $request->listSharedReportGroupsInput->sortBy = SharedResourceSortByTypeEnum::ARN;
    $request->listSharedReportGroupsInput->sortOrder = SortOrderTypeEnum::DESCENDING;
    $request->xAmzAlgorithm = 'maxime';
    $request->xAmzContentSha256 = 'pariatur';
    $request->xAmzCredential = 'soluta';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'laborum';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'incidunt';
    $request->xAmzTarget = ListSharedReportGroupsXAmzTargetEnum::CODE_BUILD20161006_LIST_SHARED_REPORT_GROUPS;
    $request->maxResults = 'aspernatur';
    $request->nextToken = 'dolores';

    $response = $sdk->sdk->listSharedReportGroups($request);

    if ($response->listSharedReportGroupsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listSourceCredentials

 Returns a list of <code>SourceCredentialsInfo</code> objects. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListSourceCredentialsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListSourceCredentialsXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListSourceCredentialsRequest();
    $request->requestBody = [
        'facilis' => 'aliquid',
        'quam' => 'molestias',
        'temporibus' => 'qui',
    ];
    $request->xAmzAlgorithm = 'neque';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'magni';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'sunt';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'nam';
    $request->xAmzTarget = ListSourceCredentialsXAmzTargetEnum::CODE_BUILD20161006_LIST_SOURCE_CREDENTIALS;

    $response = $sdk->sdk->listSourceCredentials($request);

    if ($response->listSourceCredentialsOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putResourcePolicy

 Stores a resource policy for the ARN of a <code>Project</code> or <code>ReportGroup</code> object. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyRequest;
use \OpenAPI\OpenAPI\Models\Shared\PutResourcePolicyInput;
use \OpenAPI\OpenAPI\Models\Operations\PutResourcePolicyXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutResourcePolicyRequest();
    $request->putResourcePolicyInput = new PutResourcePolicyInput();
    $request->putResourcePolicyInput->policy = 'hic';
    $request->putResourcePolicyInput->resourceArn = 'voluptatem';
    $request->xAmzAlgorithm = 'cumque';
    $request->xAmzContentSha256 = 'soluta';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'et';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'ipsum';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzTarget = PutResourcePolicyXAmzTargetEnum::CODE_BUILD20161006_PUT_RESOURCE_POLICY;

    $response = $sdk->sdk->putResourcePolicy($request);

    if ($response->putResourcePolicyOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retryBuild

Restarts a build.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetryBuildRequest;
use \OpenAPI\OpenAPI\Models\Shared\RetryBuildInput;
use \OpenAPI\OpenAPI\Models\Operations\RetryBuildXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetryBuildRequest();
    $request->retryBuildInput = new RetryBuildInput();
    $request->retryBuildInput->id = 'b8b90f34-43a1-4108-a0ad-cf4b921879fc';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'omnis';
    $request->xAmzCredential = 'quis';
    $request->xAmzDate = 'ipsum';
    $request->xAmzSecurityToken = 'delectus';
    $request->xAmzSignature = 'voluptate';
    $request->xAmzSignedHeaders = 'consectetur';
    $request->xAmzTarget = RetryBuildXAmzTargetEnum::CODE_BUILD20161006_RETRY_BUILD;

    $response = $sdk->sdk->retryBuild($request);

    if ($response->retryBuildOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## retryBuildBatch

Restarts a failed batch build. Only batch builds that have failed can be retried.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RetryBuildBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\RetryBuildBatchInput;
use \OpenAPI\OpenAPI\Models\Shared\RetryBuildBatchTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\RetryBuildBatchXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RetryBuildBatchRequest();
    $request->retryBuildBatchInput = new RetryBuildBatchInput();
    $request->retryBuildBatchInput->id = 'ef7fbc7a-bd74-4dd3-9c0f-5d2cff7c70a4';
    $request->retryBuildBatchInput->retryType = RetryBuildBatchTypeEnum::RETRY_ALL_BUILDS;
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'possimus';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'ratione';
    $request->xAmzSignedHeaders = 'ex';
    $request->xAmzTarget = RetryBuildBatchXAmzTargetEnum::CODE_BUILD20161006_RETRY_BUILD_BATCH;

    $response = $sdk->sdk->retryBuildBatch($request);

    if ($response->retryBuildBatchOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startBuild

Starts running a build.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartBuildRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartBuildInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectArtifacts;
use \OpenAPI\OpenAPI\Models\Shared\BucketOwnerAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactNamespaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactPackagingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BuildStatusConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProjectCache;
use \OpenAPI\OpenAPI\Models\Shared\CacheModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CacheTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentVariable;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentVariableTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GitSubmodulesConfig;
use \OpenAPI\OpenAPI\Models\Shared\ImagePullCredentialsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogsConfig;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsConfig;
use \OpenAPI\OpenAPI\Models\Shared\LogsConfigStatusTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3LogsConfig;
use \OpenAPI\OpenAPI\Models\Shared\RegistryCredential;
use \OpenAPI\OpenAPI\Models\Shared\CredentialProviderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSource;
use \OpenAPI\OpenAPI\Models\Shared\SourceAuth;
use \OpenAPI\OpenAPI\Models\Shared\SourceAuthTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSourceVersion;
use \OpenAPI\OpenAPI\Models\Operations\StartBuildXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartBuildRequest();
    $request->startBuildInput = new StartBuildInput();
    $request->startBuildInput->artifactsOverride = new ProjectArtifacts();
    $request->startBuildInput->artifactsOverride->artifactIdentifier = 'laudantium';
    $request->startBuildInput->artifactsOverride->bucketOwnerAccess = BucketOwnerAccessEnum::NONE;
    $request->startBuildInput->artifactsOverride->encryptionDisabled = false;
    $request->startBuildInput->artifactsOverride->location = 'dolor';
    $request->startBuildInput->artifactsOverride->name = 'Ryan Jaskolski';
    $request->startBuildInput->artifactsOverride->namespaceType = ArtifactNamespaceEnum::BUILD_ID;
    $request->startBuildInput->artifactsOverride->overrideArtifactName = false;
    $request->startBuildInput->artifactsOverride->packaging = ArtifactPackagingEnum::NONE;
    $request->startBuildInput->artifactsOverride->path = 'sapiente';
    $request->startBuildInput->artifactsOverride->type = ArtifactsTypeEnum::NO_ARTIFACTS;
    $request->startBuildInput->buildStatusConfigOverride = new BuildStatusConfig();
    $request->startBuildInput->buildStatusConfigOverride->context = 'saepe';
    $request->startBuildInput->buildStatusConfigOverride->targetUrl = 'ea';
    $request->startBuildInput->buildspecOverride = 'impedit';
    $request->startBuildInput->cacheOverride = new ProjectCache();
    $request->startBuildInput->cacheOverride->location = 'corporis';
    $request->startBuildInput->cacheOverride->modes = [
        CacheModeEnum::LOCAL_SOURCE_CACHE,
        CacheModeEnum::LOCAL_DOCKER_LAYER_CACHE,
    ];
    $request->startBuildInput->cacheOverride->type = CacheTypeEnum::NO_CACHE;
    $request->startBuildInput->certificateOverride = 'ea';
    $request->startBuildInput->computeTypeOverride = ComputeTypeEnum::BUILD_GENERAL12_XLARGE;
    $request->startBuildInput->debugSessionEnabled = false;
    $request->startBuildInput->encryptionKeyOverride = 'consectetur';
    $request->startBuildInput->environmentTypeOverride = EnvironmentTypeEnum::WINDOWS_SERVER2019_CONTAINER;
    $request->startBuildInput->environmentVariablesOverride = [
        new EnvironmentVariable(),
    ];
    $request->startBuildInput->gitCloneDepthOverride = 325310;
    $request->startBuildInput->gitSubmodulesConfigOverride = new GitSubmodulesConfig();
    $request->startBuildInput->gitSubmodulesConfigOverride->fetchSubmodules = false;
    $request->startBuildInput->imageOverride = 'eaque';
    $request->startBuildInput->imagePullCredentialsTypeOverride = ImagePullCredentialsTypeEnum::SERVICE_ROLE;
    $request->startBuildInput->insecureSslOverride = false;
    $request->startBuildInput->logsConfigOverride = new LogsConfig();
    $request->startBuildInput->logsConfigOverride->cloudWatchLogs = new CloudWatchLogsConfig();
    $request->startBuildInput->logsConfigOverride->cloudWatchLogs->groupName = 'libero';
    $request->startBuildInput->logsConfigOverride->cloudWatchLogs->status = LogsConfigStatusTypeEnum::ENABLED;
    $request->startBuildInput->logsConfigOverride->cloudWatchLogs->streamName = 'aut';
    $request->startBuildInput->logsConfigOverride->s3Logs = new S3LogsConfig();
    $request->startBuildInput->logsConfigOverride->s3Logs->bucketOwnerAccess = BucketOwnerAccessEnum::READ_ONLY;
    $request->startBuildInput->logsConfigOverride->s3Logs->encryptionDisabled = false;
    $request->startBuildInput->logsConfigOverride->s3Logs->location = 'impedit';
    $request->startBuildInput->logsConfigOverride->s3Logs->status = LogsConfigStatusTypeEnum::ENABLED;
    $request->startBuildInput->privilegedModeOverride = false;
    $request->startBuildInput->projectName = 'fugit';
    $request->startBuildInput->queuedTimeoutInMinutesOverride = 882860;
    $request->startBuildInput->registryCredentialOverride = new RegistryCredential();
    $request->startBuildInput->registryCredentialOverride->credential = 'inventore';
    $request->startBuildInput->registryCredentialOverride->credentialProvider = CredentialProviderTypeEnum::SECRETS_MANAGER;
    $request->startBuildInput->reportBuildStatusOverride = false;
    $request->startBuildInput->secondaryArtifactsOverride = [
        new ProjectArtifacts(),
        new ProjectArtifacts(),
    ];
    $request->startBuildInput->secondarySourcesOverride = [
        new ProjectSource(),
    ];
    $request->startBuildInput->secondarySourcesVersionOverride = [
        new ProjectSourceVersion(),
        new ProjectSourceVersion(),
        new ProjectSourceVersion(),
    ];
    $request->startBuildInput->serviceRoleOverride = 'laborum';
    $request->startBuildInput->sourceAuthOverride = new SourceAuth();
    $request->startBuildInput->sourceAuthOverride->resource = 'placeat';
    $request->startBuildInput->sourceAuthOverride->type = SourceAuthTypeEnum::OAUTH;
    $request->startBuildInput->sourceLocationOverride = 'velit';
    $request->startBuildInput->sourceTypeOverride = SourceTypeEnum::S3;
    $request->startBuildInput->sourceVersion = 'autem';
    $request->startBuildInput->timeoutInMinutesOverride = 752135;
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'nulla';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'libero';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'tempora';
    $request->xAmzTarget = StartBuildXAmzTargetEnum::CODE_BUILD20161006_START_BUILD;

    $response = $sdk->sdk->startBuild($request);

    if ($response->startBuildOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startBuildBatch

Starts a batch build for a project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartBuildBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\StartBuildBatchInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectArtifacts;
use \OpenAPI\OpenAPI\Models\Shared\BucketOwnerAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactNamespaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactPackagingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectBuildBatchConfig;
use \OpenAPI\OpenAPI\Models\Shared\BatchReportModeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\ProjectCache;
use \OpenAPI\OpenAPI\Models\Shared\CacheModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CacheTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComputeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentVariable;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentVariableTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GitSubmodulesConfig;
use \OpenAPI\OpenAPI\Models\Shared\ImagePullCredentialsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogsConfig;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsConfig;
use \OpenAPI\OpenAPI\Models\Shared\LogsConfigStatusTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3LogsConfig;
use \OpenAPI\OpenAPI\Models\Shared\RegistryCredential;
use \OpenAPI\OpenAPI\Models\Shared\CredentialProviderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSource;
use \OpenAPI\OpenAPI\Models\Shared\SourceAuth;
use \OpenAPI\OpenAPI\Models\Shared\SourceAuthTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BuildStatusConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSourceVersion;
use \OpenAPI\OpenAPI\Models\Operations\StartBuildBatchXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartBuildBatchRequest();
    $request->startBuildBatchInput = new StartBuildBatchInput();
    $request->startBuildBatchInput->artifactsOverride = new ProjectArtifacts();
    $request->startBuildBatchInput->artifactsOverride->artifactIdentifier = 'numquam';
    $request->startBuildBatchInput->artifactsOverride->bucketOwnerAccess = BucketOwnerAccessEnum::NONE;
    $request->startBuildBatchInput->artifactsOverride->encryptionDisabled = false;
    $request->startBuildBatchInput->artifactsOverride->location = 'provident';
    $request->startBuildBatchInput->artifactsOverride->name = 'Minnie Gutkowski';
    $request->startBuildBatchInput->artifactsOverride->namespaceType = ArtifactNamespaceEnum::NONE;
    $request->startBuildBatchInput->artifactsOverride->overrideArtifactName = false;
    $request->startBuildBatchInput->artifactsOverride->packaging = ArtifactPackagingEnum::NONE;
    $request->startBuildBatchInput->artifactsOverride->path = 'rem';
    $request->startBuildBatchInput->artifactsOverride->type = ArtifactsTypeEnum::NO_ARTIFACTS;
    $request->startBuildBatchInput->buildBatchConfigOverride = new ProjectBuildBatchConfig();
    $request->startBuildBatchInput->buildBatchConfigOverride->batchReportMode = BatchReportModeTypeEnum::REPORT_INDIVIDUAL_BUILDS;
    $request->startBuildBatchInput->buildBatchConfigOverride->combineArtifacts = false;
    $request->startBuildBatchInput->buildBatchConfigOverride->restrictions = new BatchRestrictions();
    $request->startBuildBatchInput->buildBatchConfigOverride->restrictions->computeTypesAllowed = [
        'fugiat',
        'ut',
        'eum',
    ];
    $request->startBuildBatchInput->buildBatchConfigOverride->restrictions->maximumBuildsAllowed = 379927;
    $request->startBuildBatchInput->buildBatchConfigOverride->serviceRole = 'assumenda';
    $request->startBuildBatchInput->buildBatchConfigOverride->timeoutInMins = 181151;
    $request->startBuildBatchInput->buildTimeoutInMinutesOverride = 509342;
    $request->startBuildBatchInput->buildspecOverride = 'quisquam';
    $request->startBuildBatchInput->cacheOverride = new ProjectCache();
    $request->startBuildBatchInput->cacheOverride->location = 'veritatis';
    $request->startBuildBatchInput->cacheOverride->modes = [
        CacheModeEnum::LOCAL_SOURCE_CACHE,
    ];
    $request->startBuildBatchInput->cacheOverride->type = CacheTypeEnum::LOCAL;
    $request->startBuildBatchInput->certificateOverride = 'neque';
    $request->startBuildBatchInput->computeTypeOverride = ComputeTypeEnum::BUILD_GENERAL12_XLARGE;
    $request->startBuildBatchInput->debugSessionEnabled = false;
    $request->startBuildBatchInput->encryptionKeyOverride = 'illum';
    $request->startBuildBatchInput->environmentTypeOverride = EnvironmentTypeEnum::ARM_CONTAINER;
    $request->startBuildBatchInput->environmentVariablesOverride = [
        new EnvironmentVariable(),
        new EnvironmentVariable(),
        new EnvironmentVariable(),
    ];
    $request->startBuildBatchInput->gitCloneDepthOverride = 259422;
    $request->startBuildBatchInput->gitSubmodulesConfigOverride = new GitSubmodulesConfig();
    $request->startBuildBatchInput->gitSubmodulesConfigOverride->fetchSubmodules = false;
    $request->startBuildBatchInput->imageOverride = 'eos';
    $request->startBuildBatchInput->imagePullCredentialsTypeOverride = ImagePullCredentialsTypeEnum::CODEBUILD;
    $request->startBuildBatchInput->insecureSslOverride = false;
    $request->startBuildBatchInput->logsConfigOverride = new LogsConfig();
    $request->startBuildBatchInput->logsConfigOverride->cloudWatchLogs = new CloudWatchLogsConfig();
    $request->startBuildBatchInput->logsConfigOverride->cloudWatchLogs->groupName = 'ab';
    $request->startBuildBatchInput->logsConfigOverride->cloudWatchLogs->status = LogsConfigStatusTypeEnum::DISABLED;
    $request->startBuildBatchInput->logsConfigOverride->cloudWatchLogs->streamName = 'consequatur';
    $request->startBuildBatchInput->logsConfigOverride->s3Logs = new S3LogsConfig();
    $request->startBuildBatchInput->logsConfigOverride->s3Logs->bucketOwnerAccess = BucketOwnerAccessEnum::NONE;
    $request->startBuildBatchInput->logsConfigOverride->s3Logs->encryptionDisabled = false;
    $request->startBuildBatchInput->logsConfigOverride->s3Logs->location = 'debitis';
    $request->startBuildBatchInput->logsConfigOverride->s3Logs->status = LogsConfigStatusTypeEnum::ENABLED;
    $request->startBuildBatchInput->privilegedModeOverride = false;
    $request->startBuildBatchInput->projectName = 'aspernatur';
    $request->startBuildBatchInput->queuedTimeoutInMinutesOverride = 197054;
    $request->startBuildBatchInput->registryCredentialOverride = new RegistryCredential();
    $request->startBuildBatchInput->registryCredentialOverride->credential = 'quo';
    $request->startBuildBatchInput->registryCredentialOverride->credentialProvider = CredentialProviderTypeEnum::SECRETS_MANAGER;
    $request->startBuildBatchInput->reportBuildBatchStatusOverride = false;
    $request->startBuildBatchInput->secondaryArtifactsOverride = [
        new ProjectArtifacts(),
        new ProjectArtifacts(),
    ];
    $request->startBuildBatchInput->secondarySourcesOverride = [
        new ProjectSource(),
        new ProjectSource(),
        new ProjectSource(),
        new ProjectSource(),
    ];
    $request->startBuildBatchInput->secondarySourcesVersionOverride = [
        new ProjectSourceVersion(),
    ];
    $request->startBuildBatchInput->serviceRoleOverride = 'distinctio';
    $request->startBuildBatchInput->sourceAuthOverride = new SourceAuth();
    $request->startBuildBatchInput->sourceAuthOverride->resource = 'quod';
    $request->startBuildBatchInput->sourceAuthOverride->type = SourceAuthTypeEnum::OAUTH;
    $request->startBuildBatchInput->sourceLocationOverride = 'dignissimos';
    $request->startBuildBatchInput->sourceTypeOverride = SourceTypeEnum::CODECOMMIT;
    $request->startBuildBatchInput->sourceVersion = 'nihil';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'accusamus';
    $request->xAmzCredential = 'aliquam';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'sapiente';
    $request->xAmzTarget = StartBuildBatchXAmzTargetEnum::CODE_BUILD20161006_START_BUILD_BATCH;

    $response = $sdk->sdk->startBuildBatch($request);

    if ($response->startBuildBatchOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopBuild

Attempts to stop running a build.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopBuildRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopBuildInput;
use \OpenAPI\OpenAPI\Models\Operations\StopBuildXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopBuildRequest();
    $request->stopBuildInput = new StopBuildInput();
    $request->stopBuildInput->id = '2a70c688-282a-4a48-a562-f222e9817ee1';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'saepe';
    $request->xAmzTarget = StopBuildXAmzTargetEnum::CODE_BUILD20161006_STOP_BUILD;

    $response = $sdk->sdk->stopBuild($request);

    if ($response->stopBuildOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopBuildBatch

Stops a running batch build.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopBuildBatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\StopBuildBatchInput;
use \OpenAPI\OpenAPI\Models\Operations\StopBuildBatchXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopBuildBatchRequest();
    $request->stopBuildBatchInput = new StopBuildBatchInput();
    $request->stopBuildBatchInput->id = '6b7b95bc-0ab3-4c20-84f3-789fd871f99d';
    $request->xAmzAlgorithm = 'possimus';
    $request->xAmzContentSha256 = 'quia';
    $request->xAmzCredential = 'eveniet';
    $request->xAmzDate = 'asperiores';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->xAmzTarget = StopBuildBatchXAmzTargetEnum::CODE_BUILD20161006_STOP_BUILD_BATCH;

    $response = $sdk->sdk->stopBuildBatch($request);

    if ($response->stopBuildBatchOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProject

Changes the settings of a build project.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateProjectInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectArtifacts;
use \OpenAPI\OpenAPI\Models\Shared\BucketOwnerAccessEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactNamespaceEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactPackagingEnum;
use \OpenAPI\OpenAPI\Models\Shared\ArtifactsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectBuildBatchConfig;
use \OpenAPI\OpenAPI\Models\Shared\BatchReportModeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchRestrictions;
use \OpenAPI\OpenAPI\Models\Shared\ProjectCache;
use \OpenAPI\OpenAPI\Models\Shared\CacheModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\CacheTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectEnvironment;
use \OpenAPI\OpenAPI\Models\Shared\ComputeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentVariable;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentVariableTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ImagePullCredentialsTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\RegistryCredential;
use \OpenAPI\OpenAPI\Models\Shared\CredentialProviderTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EnvironmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ProjectFileSystemLocation;
use \OpenAPI\OpenAPI\Models\Shared\FileSystemTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LogsConfig;
use \OpenAPI\OpenAPI\Models\Shared\CloudWatchLogsConfig;
use \OpenAPI\OpenAPI\Models\Shared\LogsConfigStatusTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3LogsConfig;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSourceVersion;
use \OpenAPI\OpenAPI\Models\Shared\ProjectSource;
use \OpenAPI\OpenAPI\Models\Shared\SourceAuth;
use \OpenAPI\OpenAPI\Models\Shared\SourceAuthTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BuildStatusConfig;
use \OpenAPI\OpenAPI\Models\Shared\GitSubmodulesConfig;
use \OpenAPI\OpenAPI\Models\Shared\SourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\VpcConfig;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectRequest();
    $request->updateProjectInput = new UpdateProjectInput();
    $request->updateProjectInput->artifacts = new ProjectArtifacts();
    $request->updateProjectInput->artifacts->artifactIdentifier = 'quasi';
    $request->updateProjectInput->artifacts->bucketOwnerAccess = BucketOwnerAccessEnum::READ_ONLY;
    $request->updateProjectInput->artifacts->encryptionDisabled = false;
    $request->updateProjectInput->artifacts->location = 'culpa';
    $request->updateProjectInput->artifacts->name = 'Mandy Berge';
    $request->updateProjectInput->artifacts->namespaceType = ArtifactNamespaceEnum::NONE;
    $request->updateProjectInput->artifacts->overrideArtifactName = false;
    $request->updateProjectInput->artifacts->packaging = ArtifactPackagingEnum::NONE;
    $request->updateProjectInput->artifacts->path = 'libero';
    $request->updateProjectInput->artifacts->type = ArtifactsTypeEnum::NO_ARTIFACTS;
    $request->updateProjectInput->badgeEnabled = false;
    $request->updateProjectInput->buildBatchConfig = new ProjectBuildBatchConfig();
    $request->updateProjectInput->buildBatchConfig->batchReportMode = BatchReportModeTypeEnum::REPORT_AGGREGATED_BATCH;
    $request->updateProjectInput->buildBatchConfig->combineArtifacts = false;
    $request->updateProjectInput->buildBatchConfig->restrictions = new BatchRestrictions();
    $request->updateProjectInput->buildBatchConfig->restrictions->computeTypesAllowed = [
        'aliquam',
    ];
    $request->updateProjectInput->buildBatchConfig->restrictions->maximumBuildsAllowed = 958983;
    $request->updateProjectInput->buildBatchConfig->serviceRole = 'dicta';
    $request->updateProjectInput->buildBatchConfig->timeoutInMins = 355369;
    $request->updateProjectInput->cache = new ProjectCache();
    $request->updateProjectInput->cache->location = 'reprehenderit';
    $request->updateProjectInput->cache->modes = [
        CacheModeEnum::LOCAL_SOURCE_CACHE,
        CacheModeEnum::LOCAL_DOCKER_LAYER_CACHE,
    ];
    $request->updateProjectInput->cache->type = CacheTypeEnum::S3;
    $request->updateProjectInput->concurrentBuildLimit = 185232;
    $request->updateProjectInput->description = 'quibusdam';
    $request->updateProjectInput->encryptionKey = 'ex';
    $request->updateProjectInput->environment = new ProjectEnvironment();
    $request->updateProjectInput->environment->certificate = 'deleniti';
    $request->updateProjectInput->environment->computeType = ComputeTypeEnum::BUILD_GENERAL12_XLARGE;
    $request->updateProjectInput->environment->environmentVariables = [
        new EnvironmentVariable(),
        new EnvironmentVariable(),
        new EnvironmentVariable(),
    ];
    $request->updateProjectInput->environment->image = 'architecto';
    $request->updateProjectInput->environment->imagePullCredentialsType = ImagePullCredentialsTypeEnum::SERVICE_ROLE;
    $request->updateProjectInput->environment->privilegedMode = false;
    $request->updateProjectInput->environment->registryCredential = new RegistryCredential();
    $request->updateProjectInput->environment->registryCredential->credential = 'tenetur';
    $request->updateProjectInput->environment->registryCredential->credentialProvider = CredentialProviderTypeEnum::SECRETS_MANAGER;
    $request->updateProjectInput->environment->type = EnvironmentTypeEnum::WINDOWS_CONTAINER;
    $request->updateProjectInput->fileSystemLocations = [
        new ProjectFileSystemLocation(),
        new ProjectFileSystemLocation(),
        new ProjectFileSystemLocation(),
        new ProjectFileSystemLocation(),
    ];
    $request->updateProjectInput->logsConfig = new LogsConfig();
    $request->updateProjectInput->logsConfig->cloudWatchLogs = new CloudWatchLogsConfig();
    $request->updateProjectInput->logsConfig->cloudWatchLogs->groupName = 'et';
    $request->updateProjectInput->logsConfig->cloudWatchLogs->status = LogsConfigStatusTypeEnum::ENABLED;
    $request->updateProjectInput->logsConfig->cloudWatchLogs->streamName = 'ipsa';
    $request->updateProjectInput->logsConfig->s3Logs = new S3LogsConfig();
    $request->updateProjectInput->logsConfig->s3Logs->bucketOwnerAccess = BucketOwnerAccessEnum::NONE;
    $request->updateProjectInput->logsConfig->s3Logs->encryptionDisabled = false;
    $request->updateProjectInput->logsConfig->s3Logs->location = 'veritatis';
    $request->updateProjectInput->logsConfig->s3Logs->status = LogsConfigStatusTypeEnum::ENABLED;
    $request->updateProjectInput->name = 'Ms. Cora Spencer IV';
    $request->updateProjectInput->queuedTimeoutInMinutes = 428796;
    $request->updateProjectInput->secondaryArtifacts = [
        new ProjectArtifacts(),
        new ProjectArtifacts(),
        new ProjectArtifacts(),
    ];
    $request->updateProjectInput->secondarySourceVersions = [
        new ProjectSourceVersion(),
    ];
    $request->updateProjectInput->secondarySources = [
        new ProjectSource(),
        new ProjectSource(),
        new ProjectSource(),
    ];
    $request->updateProjectInput->serviceRole = 'non';
    $request->updateProjectInput->source = new ProjectSource();
    $request->updateProjectInput->source->auth = new SourceAuth();
    $request->updateProjectInput->source->auth->resource = 'voluptatem';
    $request->updateProjectInput->source->auth->type = SourceAuthTypeEnum::OAUTH;
    $request->updateProjectInput->source->buildStatusConfig = new BuildStatusConfig();
    $request->updateProjectInput->source->buildStatusConfig->context = 'dolor';
    $request->updateProjectInput->source->buildStatusConfig->targetUrl = 'occaecati';
    $request->updateProjectInput->source->buildspec = 'numquam';
    $request->updateProjectInput->source->gitCloneDepth = 771089;
    $request->updateProjectInput->source->gitSubmodulesConfig = new GitSubmodulesConfig();
    $request->updateProjectInput->source->gitSubmodulesConfig->fetchSubmodules = false;
    $request->updateProjectInput->source->insecureSsl = false;
    $request->updateProjectInput->source->location = 'explicabo';
    $request->updateProjectInput->source->reportBuildStatus = false;
    $request->updateProjectInput->source->sourceIdentifier = 'voluptas';
    $request->updateProjectInput->source->type = SourceTypeEnum::CODECOMMIT;
    $request->updateProjectInput->sourceVersion = 'dignissimos';
    $request->updateProjectInput->tags = [
        new Tag(),
    ];
    $request->updateProjectInput->timeoutInMinutes = 981640;
    $request->updateProjectInput->vpcConfig = new VpcConfig();
    $request->updateProjectInput->vpcConfig->securityGroupIds = [
        'velit',
        'voluptatibus',
        'voluptas',
    ];
    $request->updateProjectInput->vpcConfig->subnets = [
        'aperiam',
        'ea',
        'quaerat',
        'consequuntur',
    ];
    $request->updateProjectInput->vpcConfig->vpcId = 'repellendus';
    $request->xAmzAlgorithm = 'officia';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'asperiores';
    $request->xAmzSignature = 'nemo';
    $request->xAmzSignedHeaders = 'quae';
    $request->xAmzTarget = UpdateProjectXAmzTargetEnum::CODE_BUILD20161006_UPDATE_PROJECT;

    $response = $sdk->sdk->updateProject($request);

    if ($response->updateProjectOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProjectVisibility

<p>Changes the public visibility for a project. The project's build results, logs, and artifacts are available to the general public. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/public-builds.html">Public build projects</a> in the <i>CodeBuild User Guide</i>.</p> <important> <p>The following should be kept in mind when making your projects public:</p> <ul> <li> <p>All of a project's build results, logs, and artifacts, including builds that were run when the project was private, are available to the general public.</p> </li> <li> <p>All build logs and artifacts are available to the public. Environment variables, source code, and other sensitive information may have been output to the build logs and artifacts. You must be careful about what information is output to the build logs. Some best practice are:</p> <ul> <li> <p>Do not store sensitive values, especially Amazon Web Services access key IDs and secret access keys, in environment variables. We recommend that you use an Amazon EC2 Systems Manager Parameter Store or Secrets Manager to store sensitive values.</p> </li> <li> <p>Follow <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/webhooks.html#webhook-best-practices">Best practices for using webhooks</a> in the <i>CodeBuild User Guide</i> to limit which entities can trigger a build, and do not store the buildspec in the project itself, to ensure that your webhooks are as secure as possible.</p> </li> </ul> </li> <li> <p>A malicious user can use public builds to distribute malicious artifacts. We recommend that you review all pull requests to verify that the pull request is a legitimate change. We also recommend that you validate any artifacts with their checksums to make sure that the correct artifacts are being downloaded.</p> </li> </ul> </important>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectVisibilityRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateProjectVisibilityInput;
use \OpenAPI\OpenAPI\Models\Shared\ProjectVisibilityTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProjectVisibilityXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProjectVisibilityRequest();
    $request->updateProjectVisibilityInput = new UpdateProjectVisibilityInput();
    $request->updateProjectVisibilityInput->projectArn = 'quaerat';
    $request->updateProjectVisibilityInput->projectVisibility = ProjectVisibilityTypeEnum::PRIVATE;
    $request->updateProjectVisibilityInput->resourceAccessRole = 'quod';
    $request->xAmzAlgorithm = 'labore';
    $request->xAmzContentSha256 = 'ab';
    $request->xAmzCredential = 'adipisci';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'velit';
    $request->xAmzTarget = UpdateProjectVisibilityXAmzTargetEnum::CODE_BUILD20161006_UPDATE_PROJECT_VISIBILITY;

    $response = $sdk->sdk->updateProjectVisibility($request);

    if ($response->updateProjectVisibilityOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateReportGroup

 Updates a report group. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReportGroupRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateReportGroupInput;
use \OpenAPI\OpenAPI\Models\Shared\ReportExportConfig;
use \OpenAPI\OpenAPI\Models\Shared\ReportExportConfigTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\S3ReportExportConfig;
use \OpenAPI\OpenAPI\Models\Shared\ReportPackagingTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Operations\UpdateReportGroupXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateReportGroupRequest();
    $request->updateReportGroupInput = new UpdateReportGroupInput();
    $request->updateReportGroupInput->arn = 'culpa';
    $request->updateReportGroupInput->exportConfig = new ReportExportConfig();
    $request->updateReportGroupInput->exportConfig->exportConfigType = ReportExportConfigTypeEnum::NO_EXPORT;
    $request->updateReportGroupInput->exportConfig->s3Destination = new S3ReportExportConfig();
    $request->updateReportGroupInput->exportConfig->s3Destination->bucket = 'recusandae';
    $request->updateReportGroupInput->exportConfig->s3Destination->bucketOwner = 'totam';
    $request->updateReportGroupInput->exportConfig->s3Destination->encryptionDisabled = false;
    $request->updateReportGroupInput->exportConfig->s3Destination->encryptionKey = 'fugiat';
    $request->updateReportGroupInput->exportConfig->s3Destination->packaging = ReportPackagingTypeEnum::ZIP;
    $request->updateReportGroupInput->exportConfig->s3Destination->path = 'ducimus';
    $request->updateReportGroupInput->tags = [
        new Tag(),
        new Tag(),
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'cum';
    $request->xAmzSignature = 'commodi';
    $request->xAmzSignedHeaders = 'in';
    $request->xAmzTarget = UpdateReportGroupXAmzTargetEnum::CODE_BUILD20161006_UPDATE_REPORT_GROUP;

    $response = $sdk->sdk->updateReportGroup($request);

    if ($response->updateReportGroupOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWebhook

<p> Updates the webhook associated with an CodeBuild build project. </p> <note> <p> If you use Bitbucket for your repository, <code>rotateSecret</code> is ignored. </p> </note>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateWebhookInput;
use \OpenAPI\OpenAPI\Models\Shared\WebhookBuildTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\WebhookFilter;
use \OpenAPI\OpenAPI\Models\Shared\WebhookFilterTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWebhookRequest();
    $request->updateWebhookInput = new UpdateWebhookInput();
    $request->updateWebhookInput->branchFilter = 'corporis';
    $request->updateWebhookInput->buildType = WebhookBuildTypeEnum::BUILD_BATCH;
    $request->updateWebhookInput->filterGroups = [
        [
            new WebhookFilter(),
            new WebhookFilter(),
        ],
        [
            new WebhookFilter(),
            new WebhookFilter(),
            new WebhookFilter(),
            new WebhookFilter(),
        ],
        [
            new WebhookFilter(),
            new WebhookFilter(),
        ],
        [
            new WebhookFilter(),
        ],
    ];
    $request->updateWebhookInput->projectName = 'cum';
    $request->updateWebhookInput->rotateSecret = false;
    $request->xAmzAlgorithm = 'consectetur';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'earum';
    $request->xAmzSecurityToken = 'facere';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzTarget = UpdateWebhookXAmzTargetEnum::CODE_BUILD20161006_UPDATE_WEBHOOK;

    $response = $sdk->sdk->updateWebhook($request);

    if ($response->updateWebhookOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
