<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAuditCaseRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAuditCaseRequest();
    $request->apiKey = 'corrupti';
    $request->auditCaseId = [
        'distinctio',
        'quibusdam',
        'unde',
    ];
    $request->auditId = [
        544883,
        847252,
        423655,
        623564,
    ];
    $request->candidateId = [
        'suscipit',
        'iure',
        'magnam',
    ];
    $request->committeeDesignation = 'debitis';
    $request->committeeId = [
        'delectus',
    ];
    $request->committeeType = [
        'suscipit',
        'molestiae',
    ];
    $request->cycle = [
        812169,
        528895,
        479977,
        568045,
    ];
    $request->maxElectionCycle = 392785;
    $request->minElectionCycle = 925597;
    $request->page = 836079;
    $request->perPage = 71036;
    $request->primaryCategoryId = 'quis';
    $request->q = [
        'deserunt',
    ];
    $request->qq = [
        'ipsam',
    ];
    $request->sort = [
        'sapiente',
        'quo',
        'odit',
        'at',
    ];
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->subCategoryId = 'at';

    $response = $sdk->audit->getAuditCase($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->