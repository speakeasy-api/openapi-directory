<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AcceptMatchRequest;
use \OpenAPI\OpenAPI\Models\Shared\AcceptMatchInput;
use \OpenAPI\OpenAPI\Models\Shared\AcceptanceTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\AcceptMatchXAmzTargetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AcceptMatchRequest();
    $request->acceptMatchInput = new AcceptMatchInput();
    $request->acceptMatchInput->acceptanceType = AcceptanceTypeEnum::REJECT;
    $request->acceptMatchInput->playerIds = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->acceptMatchInput->ticketId = 'nulla';
    $request->xAmzAlgorithm = 'corrupti';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'vel';
    $request->xAmzDate = 'error';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'suscipit';
    $request->xAmzSignedHeaders = 'iure';
    $request->xAmzTarget = AcceptMatchXAmzTargetEnum::GAME_LIFT_ACCEPT_MATCH;

    $response = $sdk->acceptMatch($request);

    if ($response->acceptMatchOutput !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->