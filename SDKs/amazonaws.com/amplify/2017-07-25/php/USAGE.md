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