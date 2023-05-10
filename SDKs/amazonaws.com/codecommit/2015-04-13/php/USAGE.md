<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateApprovalRuleTemplateWithRepositoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateApprovalRuleTemplateWithRepositoryInput;
use \OpenAPI\OpenAPI\Models\Operations\AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateApprovalRuleTemplateWithRepositoryRequest();
    $request->associateApprovalRuleTemplateWithRepositoryInput = new AssociateApprovalRuleTemplateWithRepositoryInput();
    $request->associateApprovalRuleTemplateWithRepositoryInput->approvalRuleTemplateName = 'corrupti';
    $request->associateApprovalRuleTemplateWithRepositoryInput->repositoryName = 'provident';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'unde';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'corrupti';
    $request->xAmzSignature = 'illum';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzTarget = AssociateApprovalRuleTemplateWithRepositoryXAmzTargetEnum::CODE_COMMIT20150413_ASSOCIATE_APPROVAL_RULE_TEMPLATE_WITH_REPOSITORY;

    $response = $sdk->associateApprovalRuleTemplateWithRepository($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->