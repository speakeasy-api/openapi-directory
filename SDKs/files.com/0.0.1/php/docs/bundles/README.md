# bundles

## Overview

Operations about bundles

### Available Operations

* [deleteBundlesId](#deletebundlesid) - Delete Bundle
* [getBundles](#getbundles) - List Bundles
* [getBundlesId](#getbundlesid) - Show Bundle
* [patchBundlesId](#patchbundlesid) - Update Bundle
* [postBundles](#postbundles) - Create Bundle
* [postBundlesIdShare](#postbundlesidshare) - Send email(s) with a link to bundle

## deleteBundlesId

Delete Bundle

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteBundlesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteBundlesIdRequest();
    $request->id = 144847;

    $response = $sdk->bundles->deleteBundlesId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBundles

List Bundles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBundlesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBundlesRequest();
    $request->cursor = 'magni';
    $request->filter = [
        'sunt' => 'ullam',
        'nam' => 'hic',
    ];
    $request->filterGt = [
        'cumque' => 'soluta',
    ];
    $request->filterGteq = [
        'et' => 'saepe',
        'ipsum' => 'veritatis',
        'nobis' => 'quos',
    ];
    $request->filterLt = [
        'cupiditate' => 'aperiam',
        'delectus' => 'dolorem',
        'dolore' => 'labore',
    ];
    $request->filterLteq = [
        'dolorum' => 'architecto',
    ];
    $request->perPage = 63038;
    $request->sortBy = [
        'quas' => 'itaque',
    ];
    $request->userId = 9240;

    $response = $sdk->bundles->getBundles($request);

    if ($response->bundleEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBundlesId

Show Bundle

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBundlesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBundlesIdRequest();
    $request->id = 669917;

    $response = $sdk->bundles->getBundlesId($request);

    if ($response->bundleEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchBundlesId

Update Bundle

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchBundlesIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatchBundlesIdRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PatchBundlesIdRequestBodyPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchBundlesIdRequestBodyWatermarkAttachmentFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchBundlesIdRequest();
    $request->requestBody = new PatchBundlesIdRequestBody();
    $request->requestBody->clickwrapId = 1;
    $request->requestBody->code = 'abc123';
    $request->requestBody->description = 'The public description of the bundle.';
    $request->requestBody->dontSeparateSubmissionsByFolder = true;
    $request->requestBody->expiresAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2000-01-01T01:00:00Z');
    $request->requestBody->formFieldSetId = 833038;
    $request->requestBody->inboxId = 1;
    $request->requestBody->maxUses = 1;
    $request->requestBody->note = 'The internal note on the bundle.';
    $request->requestBody->password = 'Password';
    $request->requestBody->pathTemplate = '{{name}}_{{ip}}';
    $request->requestBody->paths = [
        'doloribus',
        'ut',
        'facilis',
        'cupiditate',
    ];
    $request->requestBody->permissions = PatchBundlesIdRequestBodyPermissionsEnum::READ;
    $request->requestBody->previewOnly = false;
    $request->requestBody->requireRegistration = false;
    $request->requestBody->requireShareRecipient = false;
    $request->requestBody->sendEmailReceiptToUploader = true;
    $request->requestBody->skipCompany = true;
    $request->requestBody->skipEmail = true;
    $request->requestBody->skipName = true;
    $request->requestBody->watermarkAttachmentDelete = false;
    $request->requestBody->watermarkAttachmentFile = new PatchBundlesIdRequestBodyWatermarkAttachmentFile();
    $request->requestBody->watermarkAttachmentFile->content = 'qui';
    $request->requestBody->watermarkAttachmentFile->watermarkAttachmentFile = 'quae';
    $request->id = 512393;

    $response = $sdk->bundles->patchBundlesId($request);

    if ($response->bundleEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBundles

Create Bundle

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostBundlesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostBundlesRequestBodyPermissionsEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostBundlesRequestBodyWatermarkAttachmentFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostBundlesRequestBody();
    $request->clickwrapId = 1;
    $request->code = 'abc123';
    $request->description = 'The public description of the bundle.';
    $request->dontSeparateSubmissionsByFolder = true;
    $request->expiresAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2000-01-01T01:00:00Z');
    $request->formFieldSetId = 485628;
    $request->inboxId = 1;
    $request->maxUses = 1;
    $request->note = 'The internal note on the bundle.';
    $request->password = 'Password';
    $request->pathTemplate = '{{name}}_{{ip}}';
    $request->paths = [
        'voluptatibus',
        'quisquam',
        'vero',
    ];
    $request->permissions = PostBundlesRequestBodyPermissionsEnum::READ;
    $request->previewOnly = false;
    $request->requireRegistration = false;
    $request->requireShareRecipient = false;
    $request->sendEmailReceiptToUploader = true;
    $request->skipCompany = true;
    $request->skipEmail = true;
    $request->skipName = true;
    $request->userId = 606476;
    $request->watermarkAttachmentFile = new PostBundlesRequestBodyWatermarkAttachmentFile();
    $request->watermarkAttachmentFile->content = 'quis';
    $request->watermarkAttachmentFile->watermarkAttachmentFile = 'ipsum';

    $response = $sdk->bundles->postBundles($request);

    if ($response->bundleEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postBundlesIdShare

Send email(s) with a link to bundle

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostBundlesIdShareRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostBundlesIdShareRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostBundlesIdShareRequest();
    $request->requestBody = new PostBundlesIdShareRequestBody();
    $request->requestBody->note = 'Just a note.';
    $request->requestBody->recipients = [
        [
            'consectetur' => 'vero',
            'tenetur' => 'dignissimos',
        ],
        [
            'distinctio' => 'quod',
            'odio' => 'similique',
            'facilis' => 'vero',
            'ducimus' => 'dolore',
        ],
        [
            'illum' => 'sequi',
            'natus' => 'impedit',
            'aut' => 'voluptatibus',
            'exercitationem' => 'nulla',
        ],
        [
            'porro' => 'maiores',
        ],
    ];
    $request->requestBody->to = [
        'iusto',
        'eligendi',
        'ducimus',
        'alias',
    ];
    $request->id = 639473;

    $response = $sdk->bundles->postBundlesIdShare($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
