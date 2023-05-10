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
use \OpenAPI\OpenAPI\Models\Operations\CreateAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppRequestBodyAutoBranchCreationConfig;
use \OpenAPI\OpenAPI\Models\Shared\StageEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomRule;
use \OpenAPI\OpenAPI\Models\Operations\CreateAppRequestBodyPlatformEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAppRequest();
    $request->requestBody = new CreateAppRequestBody();
    $request->requestBody->accessToken = 'corrupti';
    $request->requestBody->autoBranchCreationConfig = new CreateAppRequestBodyAutoBranchCreationConfig();
    $request->requestBody->autoBranchCreationConfig->basicAuthCredentials = 'provident';
    $request->requestBody->autoBranchCreationConfig->buildSpec = 'distinctio';
    $request->requestBody->autoBranchCreationConfig->enableAutoBuild = false;
    $request->requestBody->autoBranchCreationConfig->enableBasicAuth = false;
    $request->requestBody->autoBranchCreationConfig->enablePerformanceMode = false;
    $request->requestBody->autoBranchCreationConfig->enablePullRequestPreview = false;
    $request->requestBody->autoBranchCreationConfig->environmentVariables = [
        'unde' => 'nulla',
        'corrupti' => 'illum',
        'vel' => 'error',
        'deserunt' => 'suscipit',
    ];
    $request->requestBody->autoBranchCreationConfig->framework = 'iure';
    $request->requestBody->autoBranchCreationConfig->pullRequestEnvironmentName = 'magnam';
    $request->requestBody->autoBranchCreationConfig->stage = StageEnum::PULL_REQUEST;
    $request->requestBody->autoBranchCreationPatterns = [
        'delectus',
    ];
    $request->requestBody->basicAuthCredentials = 'tempora';
    $request->requestBody->buildSpec = 'suscipit';
    $request->requestBody->customHeaders = 'molestiae';
    $request->requestBody->customRules = [
        new CustomRule(),
        new CustomRule(),
        new CustomRule(),
        new CustomRule(),
    ];
    $request->requestBody->description = 'placeat';
    $request->requestBody->enableAutoBranchCreation = false;
    $request->requestBody->enableBasicAuth = false;
    $request->requestBody->enableBranchAutoBuild = false;
    $request->requestBody->enableBranchAutoDeletion = false;
    $request->requestBody->environmentVariables = [
        'iusto' => 'excepturi',
        'nisi' => 'recusandae',
        'temporibus' => 'ab',
    ];
    $request->requestBody->iamServiceRoleArn = 'quis';
    $request->requestBody->name = 'Iris Aufderhar';
    $request->requestBody->oauthToken = 'sapiente';
    $request->requestBody->platform = CreateAppRequestBodyPlatformEnum::WEB_COMPUTE;
    $request->requestBody->repository = 'odit';
    $request->requestBody->tags = [
        'at' => 'maiores',
        'molestiae' => 'quod',
        'quod' => 'esse',
        'totam' => 'porro',
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';

    $response = $sdk->createApp($request);

    if ($response->createAppResult !== null) {
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
