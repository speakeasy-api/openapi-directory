<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AssociateTeamMemberRequest;
use \OpenAPI\OpenAPI\Models\Shared\AssociateTeamMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\AssociateTeamMemberXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AssociateTeamMemberRequest();
    $request->associateTeamMemberRequest = new AssociateTeamMemberRequest();
    $request->associateTeamMemberRequest->clientRequestToken = 'corrupti';
    $request->associateTeamMemberRequest->projectId = 'provident';
    $request->associateTeamMemberRequest->projectRole = 'distinctio';
    $request->associateTeamMemberRequest->remoteAccessAllowed = false;
    $request->associateTeamMemberRequest->userArn = 'quibusdam';
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzTarget = AssociateTeamMemberXAmzTargetEnum::CODE_STAR20170419_ASSOCIATE_TEAM_MEMBER;

    $response = $sdk->associateTeamMember($request);

    if ($response->associateTeamMemberResult !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->