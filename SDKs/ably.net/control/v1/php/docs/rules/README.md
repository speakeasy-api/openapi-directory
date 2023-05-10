# rules

### Available Operations

* [deleteAppsAppIdRulesRuleId](#deleteappsappidrulesruleid) - Deletes a Integration Rule
* [getAppsAppIdRules](#getappsappidrules) - Lists Integration rules
* [getAppsAppIdRulesRuleId](#getappsappidrulesruleid) - Gets a Integration Rule by ID
* [patchAppsAppIdRulesRuleId](#patchappsappidrulesruleid) - Updates a Integration Rule
* [postAppsAppIdRules](#postappsappidrules) - Creates a Integration Rule

## deleteAppsAppIdRulesRuleId

Deletes a Integration Rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppsAppIdRulesRuleIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAppsAppIdRulesRuleIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAppsAppIdRulesRuleIdRequest();
    $request->appId = 'ea';
    $request->ruleId = 'aliquid';

    $requestSecurity = new DeleteAppsAppIdRulesRuleIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->rules->deleteAppsAppIdRulesRuleId($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAppsAppIdRules

Lists Integration rules

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsAppIdRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsAppIdRulesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppsAppIdRulesRequest();
    $request->appId = 'laborum';

    $requestSecurity = new GetAppsAppIdRulesSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->rules->getAppsAppIdRules($request, $requestSecurity);

    if ($response->ruleResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAppsAppIdRulesRuleId

Gets a Integration Rule by ID

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsAppIdRulesRuleIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAppsAppIdRulesRuleIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppsAppIdRulesRuleIdRequest();
    $request->appId = 'accusamus';
    $request->ruleId = 'non';

    $requestSecurity = new GetAppsAppIdRulesRuleIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->rules->getAppsAppIdRulesRuleId($request, $requestSecurity);

    if ($response->ruleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchAppsAppIdRulesRuleId

Updates a Integration Rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchAppsAppIdRulesRuleIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchAppsAppIdRulesRuleIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchAppsAppIdRulesRuleIdRequest();
    $request->requestBody = new AwsKinesisRulePatch();
    $request->requestBody->requestMode = 'enim';
    $request->requestBody->ruleType = AwsKinesisRulePatchRuleTypeEnum::AWS_KINESIS;
    $request->requestBody->source = new RuleSourcePatch();
    $request->requestBody->source->channelFilter = 'accusamus';
    $request->requestBody->source->type = 'delectus';
    $request->requestBody->status = 'quidem';
    $request->requestBody->target = new AwsKinesisRulePatchTarget();
    $request->requestBody->target->authentication = new AwsAssumeRole();
    $request->requestBody->target->authentication->assumeRoleArn = 'nam';
    $request->requestBody->target->authentication->authenticationMode = AwsAssumeRoleAuthenticationModeEnum::ASSUME_ROLE;
    $request->requestBody->target->enveloped = false;
    $request->requestBody->target->format = 'id';
    $request->requestBody->target->partitionKey = 'blanditiis';
    $request->requestBody->target->region = 'deleniti';
    $request->requestBody->target->streamName = 'sapiente';
    $request->appId = 'amet';
    $request->ruleId = 'deserunt';

    $requestSecurity = new PatchAppsAppIdRulesRuleIdSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->rules->patchAppsAppIdRulesRuleId($request, $requestSecurity);

    if ($response->ruleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAppsAppIdRules

Creates a Integration Rule

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAppsAppIdRulesRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAppsAppIdRulesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostAppsAppIdRulesRequest();
    $request->requestBody = new GoogleCloudFunctionRulePost();
    $request->requestBody->requestMode = 'vel';
    $request->requestBody->ruleType = GoogleCloudFunctionRulePostRuleTypeEnum::HTTP_GOOGLE_CLOUD_FUNCTION;
    $request->requestBody->source = new RuleSource();
    $request->requestBody->source->channelFilter = 'natus';
    $request->requestBody->source->type = 'omnis';
    $request->requestBody->status = 'molestiae';
    $request->requestBody->target = new GoogleCloudFunctionRulePostTarget();
    $request->requestBody->target->enveloped = false;
    $request->requestBody->target->format = 'perferendis';
    $request->requestBody->target->functionName = 'nihil';
    $request->requestBody->target->headers = [
        new GoogleCloudFunctionRulePostTargetHeaders(),
        new GoogleCloudFunctionRulePostTargetHeaders(),
    ];
    $request->requestBody->target->projectId = 'distinctio';
    $request->requestBody->target->region = 'id';
    $request->requestBody->target->signingKeyId = 'labore';
    $request->appId = 'labore';

    $requestSecurity = new PostAppsAppIdRulesSecurity();
    $requestSecurity->bearerAuth = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->rules->postAppsAppIdRules($request, $requestSecurity);

    if ($response->ruleResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
