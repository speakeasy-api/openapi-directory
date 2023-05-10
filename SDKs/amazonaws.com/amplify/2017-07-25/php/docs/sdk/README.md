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
    $request->requestBody->accessToken = 'hic';
    $request->requestBody->autoBranchCreationConfig = new CreateAppRequestBodyAutoBranchCreationConfig();
    $request->requestBody->autoBranchCreationConfig->basicAuthCredentials = 'optio';
    $request->requestBody->autoBranchCreationConfig->buildSpec = 'totam';
    $request->requestBody->autoBranchCreationConfig->enableAutoBuild = false;
    $request->requestBody->autoBranchCreationConfig->enableBasicAuth = false;
    $request->requestBody->autoBranchCreationConfig->enablePerformanceMode = false;
    $request->requestBody->autoBranchCreationConfig->enablePullRequestPreview = false;
    $request->requestBody->autoBranchCreationConfig->environmentVariables = [
        'commodi' => 'molestiae',
    ];
    $request->requestBody->autoBranchCreationConfig->framework = 'modi';
    $request->requestBody->autoBranchCreationConfig->pullRequestEnvironmentName = 'qui';
    $request->requestBody->autoBranchCreationConfig->stage = StageEnum::EXPERIMENTAL;
    $request->requestBody->autoBranchCreationPatterns = [
        'esse',
        'ipsum',
        'excepturi',
    ];
    $request->requestBody->basicAuthCredentials = 'aspernatur';
    $request->requestBody->buildSpec = 'perferendis';
    $request->requestBody->customHeaders = 'ad';
    $request->requestBody->customRules = [
        new CustomRule(),
        new CustomRule(),
        new CustomRule(),
    ];
    $request->requestBody->description = 'sed';
    $request->requestBody->enableAutoBranchCreation = false;
    $request->requestBody->enableBasicAuth = false;
    $request->requestBody->enableBranchAutoBuild = false;
    $request->requestBody->enableBranchAutoDeletion = false;
    $request->requestBody->environmentVariables = [
        'dolor' => 'natus',
        'laboriosam' => 'hic',
        'saepe' => 'fuga',
    ];
    $request->requestBody->iamServiceRoleArn = 'in';
    $request->requestBody->name = 'Sheryl Kertzmann';
    $request->requestBody->oauthToken = 'architecto';
    $request->requestBody->platform = CreateAppRequestBodyPlatformEnum::WEB;
    $request->requestBody->repository = 'reiciendis';
    $request->requestBody->tags = [
        'mollitia' => 'laborum',
        'dolores' => 'dolorem',
        'corporis' => 'explicabo',
    ];
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'nemo';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'accusantium';

    $response = $sdk->sdk->createApp($request);

    if ($response->createAppResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBackendEnvironment

 Creates a new backend environment for an Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendEnvironmentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBackendEnvironmentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBackendEnvironmentRequest();
    $request->requestBody = new CreateBackendEnvironmentRequestBody();
    $request->requestBody->deploymentArtifacts = 'iure';
    $request->requestBody->environmentName = 'culpa';
    $request->requestBody->stackName = 'doloribus';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'mollitia';
    $request->xAmzDate = 'dolorem';
    $request->xAmzSecurityToken = 'culpa';
    $request->xAmzSignature = 'consequuntur';
    $request->xAmzSignedHeaders = 'repellat';
    $request->appId = 'mollitia';

    $response = $sdk->sdk->createBackendEnvironment($request);

    if ($response->createBackendEnvironmentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createBranch

 Creates a new branch for an Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateBranchRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateBranchRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateBranchRequestBodyStageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateBranchRequest();
    $request->requestBody = new CreateBranchRequestBody();
    $request->requestBody->backendEnvironmentArn = 'occaecati';
    $request->requestBody->basicAuthCredentials = 'numquam';
    $request->requestBody->branchName = 'commodi';
    $request->requestBody->buildSpec = 'quam';
    $request->requestBody->description = 'molestiae';
    $request->requestBody->displayName = 'velit';
    $request->requestBody->enableAutoBuild = false;
    $request->requestBody->enableBasicAuth = false;
    $request->requestBody->enableNotification = false;
    $request->requestBody->enablePerformanceMode = false;
    $request->requestBody->enablePullRequestPreview = false;
    $request->requestBody->environmentVariables = [
        'quia' => 'quis',
        'vitae' => 'laborum',
        'animi' => 'enim',
    ];
    $request->requestBody->framework = 'odit';
    $request->requestBody->pullRequestEnvironmentName = 'quo';
    $request->requestBody->stage = CreateBranchRequestBodyStageEnum::PRODUCTION;
    $request->requestBody->tags = [
        'ipsam' => 'id',
        'possimus' => 'aut',
        'quasi' => 'error',
        'temporibus' => 'laborum',
    ];
    $request->requestBody->ttl = 'quasi';
    $request->xAmzAlgorithm = 'reiciendis';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'nihil';
    $request->xAmzSecurityToken = 'praesentium';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'ipsa';
    $request->appId = 'omnis';

    $response = $sdk->sdk->createBranch($request);

    if ($response->createBranchResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDeployment

 Creates a deployment for a manually deployed Amplify app. Manually deployed apps are not connected to a repository. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDeploymentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDeploymentRequest();
    $request->requestBody = new CreateDeploymentRequestBody();
    $request->requestBody->fileMap = [
        'cum' => 'perferendis',
        'doloremque' => 'reprehenderit',
    ];
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';
    $request->appId = 'harum';
    $request->branchName = 'enim';

    $response = $sdk->sdk->createDeployment($request);

    if ($response->createDeploymentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDomainAssociation

 Creates a new domain association for an Amplify app. This action associates a custom domain with the Amplify app 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainAssociationRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDomainAssociationRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SubDomainSetting;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDomainAssociationRequest();
    $request->requestBody = new CreateDomainAssociationRequestBody();
    $request->requestBody->autoSubDomainCreationPatterns = [
        'commodi',
        'repudiandae',
        'quae',
        'ipsum',
    ];
    $request->requestBody->autoSubDomainIAMRole = 'quidem';
    $request->requestBody->domainName = 'molestias';
    $request->requestBody->enableAutoSubDomain = false;
    $request->requestBody->subDomainSettings = [
        new SubDomainSetting(),
        new SubDomainSetting(),
        new SubDomainSetting(),
    ];
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'modi';
    $request->xAmzCredential = 'praesentium';
    $request->xAmzDate = 'rem';
    $request->xAmzSecurityToken = 'voluptates';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'repudiandae';
    $request->appId = 'sint';

    $response = $sdk->sdk->createDomainAssociation($request);

    if ($response->createDomainAssociationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createWebhook

 Creates a new webhook on an Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateWebhookRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateWebhookRequest();
    $request->requestBody = new CreateWebhookRequestBody();
    $request->requestBody->branchName = 'veritatis';
    $request->requestBody->description = 'itaque';
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->appId = 'distinctio';

    $response = $sdk->sdk->createWebhook($request);

    if ($response->createWebhookResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteApp

 Deletes an existing Amplify app specified by an app ID. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppRequest();
    $request->xAmzAlgorithm = 'quibusdam';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'modi';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'quos';
    $request->appId = 'perferendis';

    $response = $sdk->sdk->deleteApp($request);

    if ($response->deleteAppResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBackendEnvironment

 Deletes a backend environment for an Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBackendEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBackendEnvironmentRequest();
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'assumenda';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'alias';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'excepturi';
    $request->appId = 'tempora';
    $request->environmentName = 'facilis';

    $response = $sdk->sdk->deleteBackendEnvironment($request);

    if ($response->deleteBackendEnvironmentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteBranch

 Deletes a branch for an Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBranchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBranchRequest();
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'labore';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'eum';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'eligendi';
    $request->xAmzSignedHeaders = 'sint';
    $request->appId = 'aliquid';
    $request->branchName = 'provident';

    $response = $sdk->sdk->deleteBranch($request);

    if ($response->deleteBranchResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDomainAssociation

 Deletes a domain association for an Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDomainAssociationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDomainAssociationRequest();
    $request->xAmzAlgorithm = 'necessitatibus';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'officia';
    $request->xAmzDate = 'dolor';
    $request->xAmzSecurityToken = 'debitis';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'dolorum';
    $request->appId = 'in';
    $request->domainName = 'in';

    $response = $sdk->sdk->deleteDomainAssociation($request);

    if ($response->deleteDomainAssociationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteJob

 Deletes a job for a branch of an Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteJobRequest();
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'facere';
    $request->appId = 'ea';
    $request->branchName = 'aliquid';
    $request->jobId = 'laborum';

    $response = $sdk->sdk->deleteJob($request);

    if ($response->deleteJobResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteWebhook

 Deletes a webhook. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteWebhookRequest();
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quidem';
    $request->webhookId = 'provident';

    $response = $sdk->sdk->deleteWebhook($request);

    if ($response->deleteWebhookResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generateAccessLogs

 Returns the website access logs for a specific time range using a presigned URL. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GenerateAccessLogsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GenerateAccessLogsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GenerateAccessLogsRequest();
    $request->requestBody = new GenerateAccessLogsRequestBody();
    $request->requestBody->domainName = 'nam';
    $request->requestBody->endTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-31T00:47:48.012Z');
    $request->requestBody->startTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-02T01:24:52.629Z');
    $request->xAmzAlgorithm = 'amet';
    $request->xAmzContentSha256 = 'deserunt';
    $request->xAmzCredential = 'nisi';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->appId = 'perferendis';

    $response = $sdk->sdk->generateAccessLogs($request);

    if ($response->generateAccessLogsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getApp

 Returns an existing Amplify app by appID. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAppRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppRequest();
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'suscipit';
    $request->appId = 'natus';

    $response = $sdk->sdk->getApp($request);

    if ($response->getAppResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getArtifactUrl

 Returns the artifact info that corresponds to an artifact id. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetArtifactUrlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetArtifactUrlRequest();
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'eum';
    $request->xAmzCredential = 'vero';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'magnam';
    $request->xAmzSignedHeaders = 'et';
    $request->artifactId = 'excepturi';

    $response = $sdk->sdk->getArtifactUrl($request);

    if ($response->getArtifactUrlResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBackendEnvironment

 Returns a backend environment for an Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBackendEnvironmentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBackendEnvironmentRequest();
    $request->xAmzAlgorithm = 'ullam';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'sint';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'mollitia';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->appId = 'mollitia';
    $request->environmentName = 'ad';

    $response = $sdk->sdk->getBackendEnvironment($request);

    if ($response->getBackendEnvironmentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBranch

 Returns a branch for an Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetBranchRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBranchRequest();
    $request->xAmzAlgorithm = 'eum';
    $request->xAmzContentSha256 = 'dolor';
    $request->xAmzCredential = 'necessitatibus';
    $request->xAmzDate = 'odit';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'iure';
    $request->appId = 'doloribus';
    $request->branchName = 'debitis';

    $response = $sdk->sdk->getBranch($request);

    if ($response->getBranchResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomainAssociation

 Returns the domain information for an Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainAssociationRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainAssociationRequest();
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'in';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'architecto';
    $request->appId = 'repudiandae';
    $request->domainName = 'ullam';

    $response = $sdk->sdk->getDomainAssociation($request);

    if ($response->getDomainAssociationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getJob

 Returns a job for a branch of an Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetJobRequest();
    $request->xAmzAlgorithm = 'expedita';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'repellat';
    $request->xAmzDate = 'quibusdam';
    $request->xAmzSecurityToken = 'sed';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'pariatur';
    $request->appId = 'accusantium';
    $request->branchName = 'consequuntur';
    $request->jobId = 'praesentium';

    $response = $sdk->sdk->getJob($request);

    if ($response->getJobResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWebhook

 Returns the webhook information that corresponds to a specified webhook ID. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetWebhookRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWebhookRequest();
    $request->xAmzAlgorithm = 'natus';
    $request->xAmzContentSha256 = 'magni';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'quo';
    $request->xAmzSecurityToken = 'illum';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'maxime';
    $request->webhookId = 'ea';

    $response = $sdk->sdk->getWebhook($request);

    if ($response->getWebhookResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listApps

 Returns a list of the existing Amplify apps. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAppsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAppsRequest();
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'accusantium';
    $request->xAmzSecurityToken = 'ab';
    $request->xAmzSignature = 'maiores';
    $request->xAmzSignedHeaders = 'quidem';
    $request->maxResults = 373291;
    $request->nextToken = 'voluptate';

    $response = $sdk->sdk->listApps($request);

    if ($response->listAppsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listArtifacts

 Returns a list of artifacts for a specified app, branch, and job. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListArtifactsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListArtifactsRequest();
    $request->xAmzAlgorithm = 'autem';
    $request->xAmzContentSha256 = 'nam';
    $request->xAmzCredential = 'eaque';
    $request->xAmzDate = 'pariatur';
    $request->xAmzSecurityToken = 'nemo';
    $request->xAmzSignature = 'voluptatibus';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->appId = 'fugiat';
    $request->branchName = 'amet';
    $request->jobId = 'aut';
    $request->maxResults = 764912;
    $request->nextToken = 'corporis';

    $response = $sdk->sdk->listArtifacts($request);

    if ($response->listArtifactsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBackendEnvironments

 Lists the backend environments for an Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBackendEnvironmentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBackendEnvironmentsRequest();
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'dignissimos';
    $request->appId = 'eaque';
    $request->environmentName = 'quis';
    $request->maxResults = 199996;
    $request->nextToken = 'eos';

    $response = $sdk->sdk->listBackendEnvironments($request);

    if ($response->listBackendEnvironmentsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listBranches

 Lists the branches of an Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListBranchesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListBranchesRequest();
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->appId = 'hic';
    $request->maxResults = 928082;
    $request->nextToken = 'omnis';

    $response = $sdk->sdk->listBranches($request);

    if ($response->listBranchesResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDomainAssociations

 Returns the domain associations for an Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDomainAssociationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDomainAssociationsRequest();
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'perspiciatis';
    $request->xAmzCredential = 'voluptatem';
    $request->xAmzDate = 'porro';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'blanditiis';
    $request->xAmzSignedHeaders = 'error';
    $request->appId = 'eaque';
    $request->maxResults = 577229;
    $request->nextToken = 'rerum';

    $response = $sdk->sdk->listDomainAssociations($request);

    if ($response->listDomainAssociationsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listJobs

 Lists the jobs for a branch of an Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListJobsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListJobsRequest();
    $request->xAmzAlgorithm = 'adipisci';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'earum';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'iste';
    $request->xAmzSignature = 'dolorum';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->appId = 'pariatur';
    $request->branchName = 'provident';
    $request->maxResults = 750844;
    $request->nextToken = 'libero';

    $response = $sdk->sdk->listJobs($request);

    if ($response->listJobsResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

 Returns a list of tags for a specified Amazon Resource Name (ARN). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'quos';
    $request->xAmzDate = 'aliquid';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'dolorem';
    $request->xAmzSignedHeaders = 'dolor';
    $request->resourceArn = 'qui';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listWebhooks

 Returns a list of webhooks for an Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListWebhooksRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListWebhooksRequest();
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'hic';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'cum';
    $request->xAmzSecurityToken = 'voluptate';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'reiciendis';
    $request->appId = 'amet';
    $request->maxResults = 680545;
    $request->nextToken = 'numquam';

    $response = $sdk->sdk->listWebhooks($request);

    if ($response->listWebhooksResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startDeployment

 Starts a deployment for a manually deployed app. Manually deployed apps are not connected to a repository. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartDeploymentRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartDeploymentRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartDeploymentRequest();
    $request->requestBody = new StartDeploymentRequestBody();
    $request->requestBody->jobId = 'veritatis';
    $request->requestBody->sourceUrl = 'ipsa';
    $request->xAmzAlgorithm = 'ipsa';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'odio';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'voluptatibus';
    $request->appId = 'voluptas';
    $request->branchName = 'natus';

    $response = $sdk->sdk->startDeployment($request);

    if ($response->startDeploymentResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## startJob

 Starts a new job for a branch of an Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StartJobRequest;
use \OpenAPI\OpenAPI\Models\Operations\StartJobRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\StartJobRequestBodyJobTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StartJobRequest();
    $request->requestBody = new StartJobRequestBody();
    $request->requestBody->commitId = 'eos';
    $request->requestBody->commitMessage = 'atque';
    $request->requestBody->commitTime = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-23T01:35:05.899Z');
    $request->requestBody->jobId = 'ab';
    $request->requestBody->jobReason = 'soluta';
    $request->requestBody->jobType = StartJobRequestBodyJobTypeEnum::MANUAL;
    $request->xAmzAlgorithm = 'iusto';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'dolorum';
    $request->xAmzDate = 'deleniti';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'necessitatibus';
    $request->xAmzSignedHeaders = 'distinctio';
    $request->appId = 'asperiores';
    $request->branchName = 'nihil';

    $response = $sdk->sdk->startJob($request);

    if ($response->startJobResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## stopJob

 Stops a job that is in progress for a branch of an Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\StopJobRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new StopJobRequest();
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'voluptate';
    $request->xAmzCredential = 'id';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'eius';
    $request->xAmzSignature = 'aspernatur';
    $request->xAmzSignedHeaders = 'perferendis';
    $request->appId = 'amet';
    $request->branchName = 'optio';
    $request->jobId = 'accusamus';

    $response = $sdk->sdk->stopJob($request);

    if ($response->stopJobResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

 Tags the resource with a tag key and value. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->tags = [
        'saepe' => 'suscipit',
        'deserunt' => 'provident',
    ];
    $request->xAmzAlgorithm = 'minima';
    $request->xAmzContentSha256 = 'repellendus';
    $request->xAmzCredential = 'totam';
    $request->xAmzDate = 'similique';
    $request->xAmzSecurityToken = 'alias';
    $request->xAmzSignature = 'at';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->resourceArn = 'tempora';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

 Untags a resource with a specified Amazon Resource Name (ARN). 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->xAmzAlgorithm = 'vel';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'officiis';
    $request->xAmzDate = 'qui';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'a';
    $request->xAmzSignedHeaders = 'esse';
    $request->resourceArn = 'harum';
    $request->tagKeys = [
        'ipsum',
        'quisquam',
    ];

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateApp

 Updates an existing Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppRequestBodyAutoBranchCreationConfig;
use \OpenAPI\OpenAPI\Models\Shared\StageEnum;
use \OpenAPI\OpenAPI\Models\Shared\CustomRule;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAppRequestBodyPlatformEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAppRequest();
    $request->requestBody = new UpdateAppRequestBody();
    $request->requestBody->accessToken = 'tenetur';
    $request->requestBody->autoBranchCreationConfig = new UpdateAppRequestBodyAutoBranchCreationConfig();
    $request->requestBody->autoBranchCreationConfig->basicAuthCredentials = 'amet';
    $request->requestBody->autoBranchCreationConfig->buildSpec = 'tempore';
    $request->requestBody->autoBranchCreationConfig->enableAutoBuild = false;
    $request->requestBody->autoBranchCreationConfig->enableBasicAuth = false;
    $request->requestBody->autoBranchCreationConfig->enablePerformanceMode = false;
    $request->requestBody->autoBranchCreationConfig->enablePullRequestPreview = false;
    $request->requestBody->autoBranchCreationConfig->environmentVariables = [
        'numquam' => 'enim',
        'dolorem' => 'sapiente',
        'totam' => 'nihil',
        'sit' => 'expedita',
    ];
    $request->requestBody->autoBranchCreationConfig->framework = 'neque';
    $request->requestBody->autoBranchCreationConfig->pullRequestEnvironmentName = 'sed';
    $request->requestBody->autoBranchCreationConfig->stage = StageEnum::DEVELOPMENT;
    $request->requestBody->autoBranchCreationPatterns = [
        'voluptas',
        'deserunt',
        'quam',
    ];
    $request->requestBody->basicAuthCredentials = 'ipsum';
    $request->requestBody->buildSpec = 'incidunt';
    $request->requestBody->customHeaders = 'qui';
    $request->requestBody->customRules = [
        new CustomRule(),
        new CustomRule(),
        new CustomRule(),
    ];
    $request->requestBody->description = 'maxime';
    $request->requestBody->enableAutoBranchCreation = false;
    $request->requestBody->enableBasicAuth = false;
    $request->requestBody->enableBranchAutoBuild = false;
    $request->requestBody->enableBranchAutoDeletion = false;
    $request->requestBody->environmentVariables = [
        'soluta' => 'dicta',
        'laborum' => 'totam',
        'incidunt' => 'aspernatur',
        'dolores' => 'distinctio',
    ];
    $request->requestBody->iamServiceRoleArn = 'facilis';
    $request->requestBody->name = 'Constance Mann';
    $request->requestBody->oauthToken = 'neque';
    $request->requestBody->platform = UpdateAppRequestBodyPlatformEnum::WEB;
    $request->requestBody->repository = 'magni';
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'sunt';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'hic';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'cumque';
    $request->appId = 'soluta';

    $response = $sdk->sdk->updateApp($request);

    if ($response->updateAppResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateBranch

 Updates a branch for an Amplify app. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBranchRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBranchRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateBranchRequestBodyStageEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateBranchRequest();
    $request->requestBody = new UpdateBranchRequestBody();
    $request->requestBody->backendEnvironmentArn = 'nobis';
    $request->requestBody->basicAuthCredentials = 'et';
    $request->requestBody->buildSpec = 'saepe';
    $request->requestBody->description = 'ipsum';
    $request->requestBody->displayName = 'veritatis';
    $request->requestBody->enableAutoBuild = false;
    $request->requestBody->enableBasicAuth = false;
    $request->requestBody->enableNotification = false;
    $request->requestBody->enablePerformanceMode = false;
    $request->requestBody->enablePullRequestPreview = false;
    $request->requestBody->environmentVariables = [
        'quos' => 'tempore',
        'cupiditate' => 'aperiam',
        'delectus' => 'dolorem',
    ];
    $request->requestBody->framework = 'dolore';
    $request->requestBody->pullRequestEnvironmentName = 'labore';
    $request->requestBody->stage = UpdateBranchRequestBodyStageEnum::BETA;
    $request->requestBody->ttl = 'dolorum';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'quae';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'quas';
    $request->xAmzSecurityToken = 'itaque';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';
    $request->appId = 'repellendus';
    $request->branchName = 'porro';

    $response = $sdk->sdk->updateBranch($request);

    if ($response->updateBranchResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateDomainAssociation

 Creates a new domain association for an Amplify app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainAssociationRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateDomainAssociationRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\SubDomainSetting;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateDomainAssociationRequest();
    $request->requestBody = new UpdateDomainAssociationRequestBody();
    $request->requestBody->autoSubDomainCreationPatterns = [
        'ut',
        'facilis',
        'cupiditate',
        'qui',
    ];
    $request->requestBody->autoSubDomainIAMRole = 'quae';
    $request->requestBody->enableAutoSubDomain = false;
    $request->requestBody->subDomainSettings = [
        new SubDomainSetting(),
        new SubDomainSetting(),
        new SubDomainSetting(),
    ];
    $request->xAmzAlgorithm = 'odio';
    $request->xAmzContentSha256 = 'occaecati';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'quisquam';
    $request->xAmzSecurityToken = 'vero';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'quis';
    $request->appId = 'ipsum';
    $request->domainName = 'delectus';

    $response = $sdk->sdk->updateDomainAssociation($request);

    if ($response->updateDomainAssociationResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateWebhook

 Updates a webhook. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateWebhookRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateWebhookRequest();
    $request->requestBody = new UpdateWebhookRequestBody();
    $request->requestBody->branchName = 'voluptate';
    $request->requestBody->description = 'consectetur';
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'hic';
    $request->xAmzSecurityToken = 'distinctio';
    $request->xAmzSignature = 'quod';
    $request->xAmzSignedHeaders = 'odio';
    $request->webhookId = 'similique';

    $response = $sdk->sdk->updateWebhook($request);

    if ($response->updateWebhookResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
