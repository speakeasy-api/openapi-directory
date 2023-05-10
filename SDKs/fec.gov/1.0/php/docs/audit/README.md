# audit

## Overview

The agency’s monitoring process may detect potential violations through a review of a committee’s reports or through a Commission audit. By law, all enforcement cases must remain confidential until they’re closed. 

 The Commission is required by law to audit Presidential campaigns that accept public funds. In addition, the Commission audits a committee when it appears not to have met the threshold requirements for substantial compliance with the Federal Election Campaign Act. The audit determines whether the committee complied with limitations, prohibitions and disclosure requirements. 

 These endpoints contain Final Audit Reports approved by the Commission since inception.

### Available Operations

* [getAuditCase](#getauditcase) - 
This endpoint contains Final Audit Reports approved by the Commission since inception.
The search can be based on information about the audited committee (Name, FEC ID Number, Type, 
Election Cycle) or the issues covered in the report.

* [getAuditCategory](#getauditcategory) - 
This lists the options for the categories and subcategories available in the /audit-search/ endpoint.

* [getAuditPrimaryCategory](#getauditprimarycategory) - 
This lists the options for the primary categories available in the /audit-search/ endpoint.

* [getNamesAuditCandidates](#getnamesauditcandidates) - 
Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.

* [getNamesAuditCommittees](#getnamesauditcommittees) - 
Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.


## getAuditCase


This endpoint contains Final Audit Reports approved by the Commission since inception.
The search can be based on information about the audited committee (Name, FEC ID Number, Type, 
Election Cycle) or the issues covered in the report.


### Example Usage

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
    $request->apiKey = 'maiores';
    $request->auditCaseId = [
        'quod',
        'quod',
    ];
    $request->auditId = [
        520478,
        780529,
    ];
    $request->candidateId = [
        'dicta',
        'nam',
        'officia',
    ];
    $request->committeeDesignation = 'occaecati';
    $request->committeeId = [
        'deleniti',
    ];
    $request->committeeType = [
        'optio',
        'totam',
        'beatae',
        'commodi',
    ];
    $request->cycle = [
        264555,
        186332,
    ];
    $request->maxElectionCycle = 774234;
    $request->minElectionCycle = 736918;
    $request->page = 456150;
    $request->perPage = 216550;
    $request->primaryCategoryId = 'excepturi';
    $request->q = [
        'perferendis',
    ];
    $request->qq = [
        'natus',
        'sed',
    ];
    $request->sort = [
        'dolor',
        'natus',
        'laboriosam',
    ];
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;
    $request->subCategoryId = 'hic';

    $response = $sdk->audit->getAuditCase($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAuditCategory


This lists the options for the categories and subcategories available in the /audit-search/ endpoint.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAuditCategoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAuditCategoryRequest();
    $request->apiKey = 'saepe';
    $request->page = 681820;
    $request->perPage = 449950;
    $request->primaryCategoryId = [
        'iste',
        'iure',
    ];
    $request->primaryCategoryName = [
        'quidem',
        'architecto',
        'ipsa',
        'reiciendis',
    ];
    $request->sort = 'est';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->audit->getAuditCategory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAuditPrimaryCategory


This lists the options for the primary categories available in the /audit-search/ endpoint.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAuditPrimaryCategoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAuditPrimaryCategoryRequest();
    $request->apiKey = 'mollitia';
    $request->page = 670638;
    $request->perPage = 170909;
    $request->primaryCategoryId = [
        'corporis',
    ];
    $request->primaryCategoryName = [
        'nobis',
    ];
    $request->sort = 'enim';
    $request->sortHideNull = false;
    $request->sortNullOnly = false;
    $request->sortNullsLast = false;

    $response = $sdk->audit->getAuditPrimaryCategory($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamesAuditCandidates


Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesAuditCandidatesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamesAuditCandidatesRequest();
    $request->apiKey = 'omnis';
    $request->q = [
        'minima',
        'excepturi',
    ];

    $response = $sdk->audit->getNamesAuditCandidates($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getNamesAuditCommittees


Search for candidates or committees by name. If you're looking for information on a
particular person or group, using a name to find the `candidate_id` or `committee_id` on
this endpoint can be a helpful first step.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetNamesAuditCommitteesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNamesAuditCommitteesRequest();
    $request->apiKey = 'accusantium';
    $request->q = [
        'culpa',
        'doloribus',
    ];

    $response = $sdk->audit->getNamesAuditCommittees($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
