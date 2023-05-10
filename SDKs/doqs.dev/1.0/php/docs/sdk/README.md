# SDK

### Available Operations

* [createTemplateDesignerTemplatesPost](#createtemplatedesignertemplatespost) - Create Template
* [deleteDesignerTemplatesIdDelete](#deletedesignertemplatesiddelete) - Delete
* [generatePdfDesignerTemplatesIdGeneratePost](#generatepdfdesignertemplatesidgeneratepost) - Generate Pdf
* [listTemplatesDesignerTemplatesIdGet](#listtemplatesdesignertemplatesidget) - List Templates
* [listTemplatesDesignerTemplatesGet](#listtemplatesdesignertemplatesget) - List Templates
* [previewDesignerTemplatesPreviewPost](#previewdesignertemplatespreviewpost) - Preview
* [updateTemplateDesignerTemplatesIdPut](#updatetemplatedesignertemplatesidput) - Update Template

## createTemplateDesignerTemplatesPost

Create Template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\CreateOrUpdateTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\FormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateOrUpdateTemplateRequestMargin;
use \OpenAPI\OpenAPI\Models\Shared\OrientationEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateOrUpdateTemplateRequest();
    $request->components = [
        [
            'molestiae' => 'quod',
            'quod' => 'esse',
            'totam' => 'porro',
            'dolorum' => 'dicta',
        ],
        [
            'officia' => 'occaecati',
            'fugit' => 'deleniti',
            'hic' => 'optio',
        ],
        [
            'beatae' => 'commodi',
            'molestiae' => 'modi',
            'qui' => 'impedit',
        ],
        [
            'esse' => 'ipsum',
            'excepturi' => 'aspernatur',
            'perferendis' => 'ad',
        ],
    ];
    $request->css = 'natus';
    $request->footerHtml = 'sed';
    $request->format = FormatEnum::A4;
    $request->headerHtml = 'dolor';
    $request->margin = new CreateOrUpdateTemplateRequestMargin();
    $request->margin->bottom = 616934;
    $request->margin->left = 386489;
    $request->margin->right = 943749;
    $request->margin->top = 902599;
    $request->name = 'Harvey Hessel';
    $request->orientation = OrientationEnum::PORTRAIT;
    $request->previewPayload = [
        'architecto' => 'ipsa',
        'reiciendis' => 'est',
        'mollitia' => 'laborum',
    ];
    $request->templateHtml = 'dolores';

    $response = $sdk->sdk->createTemplateDesignerTemplatesPost($request);

    if ($response->responseOkDesignerTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDesignerTemplatesIdDelete

Delete

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDesignerTemplatesIdDeleteRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDesignerTemplatesIdDeleteRequest();
    $request->id = '352c5955-907a-4ff1-a3a2-fa9467739251';

    $response = $sdk->sdk->deleteDesignerTemplatesIdDelete($request);

    if ($response->responseOkNoneType !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generatePdfDesignerTemplatesIdGeneratePost

Generate Pdf

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GeneratePdfDesignerTemplatesIdGeneratePostRequest;
use \OpenAPI\OpenAPI\Models\Shared\GeneratePDFPayload;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GeneratePdfDesignerTemplatesIdGeneratePostRequest();
    $request->generatePDFPayload = new GeneratePDFPayload();
    $request->generatePDFPayload->data = [
        'animi' => 'enim',
        'odit' => 'quo',
        'sequi' => 'tenetur',
    ];
    $request->id = '5ad019da-1ffe-478f-897b-0074f15471b5';

    $response = $sdk->sdk->generatePdfDesignerTemplatesIdGeneratePost($request);

    if ($response->generatePdfDesignerTemplatesIdGeneratePost200ApplicationJSONAny !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTemplatesDesignerTemplatesIdGet

List Templates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTemplatesDesignerTemplatesIdGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTemplatesDesignerTemplatesIdGetRequest();
    $request->id = 'e6e13b99-d488-4e1e-91e4-50ad2abd4426';

    $response = $sdk->sdk->listTemplatesDesignerTemplatesIdGet($request);

    if ($response->responseOkDesignerTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTemplatesDesignerTemplatesGet

List Templates

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTemplatesDesignerTemplatesGetRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTemplatesDesignerTemplatesGetRequest();
    $request->limit = 586513;
    $request->offset = 552822;

    $response = $sdk->sdk->listTemplatesDesignerTemplatesGet($request);

    if ($response->responseOkListFillrEntitiesDesignerTemplateDesignerTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## previewDesignerTemplatesPreviewPost

Preview

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\PreviewModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PreviewModel();
    $request->css = 'perferendis';
    $request->data = [
        'assumenda' => 'ipsam',
    ];
    $request->footerHtml = 'alias';
    $request->headerHtml = 'fugit';
    $request->templateHtml = 'dolorum';

    $response = $sdk->sdk->previewDesignerTemplatesPreviewPost($request);

    if ($response->responseOkPreviewResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTemplateDesignerTemplatesIdPut

Update Template

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTemplateDesignerTemplatesIdPutRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateOrUpdateTemplateRequest;
use \OpenAPI\OpenAPI\Models\Shared\FormatEnum;
use \OpenAPI\OpenAPI\Models\Shared\CreateOrUpdateTemplateRequestMargin;
use \OpenAPI\OpenAPI\Models\Shared\OrientationEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTemplateDesignerTemplatesIdPutRequest();
    $request->createOrUpdateTemplateRequest = new CreateOrUpdateTemplateRequest();
    $request->createOrUpdateTemplateRequest->components = [
        [
            'facilis' => 'tempore',
            'labore' => 'delectus',
        ],
        [
            'non' => 'eligendi',
            'sint' => 'aliquid',
        ],
        [
            'necessitatibus' => 'sint',
            'officia' => 'dolor',
            'debitis' => 'a',
        ],
    ];
    $request->createOrUpdateTemplateRequest->css = 'dolorum';
    $request->createOrUpdateTemplateRequest->footerHtml = 'in';
    $request->createOrUpdateTemplateRequest->format = FormatEnum::A3;
    $request->createOrUpdateTemplateRequest->headerHtml = 'illum';
    $request->createOrUpdateTemplateRequest->margin = new CreateOrUpdateTemplateRequestMargin();
    $request->createOrUpdateTemplateRequest->margin->bottom = 978571;
    $request->createOrUpdateTemplateRequest->margin->left = 699479;
    $request->createOrUpdateTemplateRequest->margin->right = 116202;
    $request->createOrUpdateTemplateRequest->margin->top = 297437;
    $request->createOrUpdateTemplateRequest->name = 'Irving Jenkins';
    $request->createOrUpdateTemplateRequest->orientation = OrientationEnum::PORTRAIT;
    $request->createOrUpdateTemplateRequest->previewPayload = [
        'occaecati' => 'enim',
    ];
    $request->createOrUpdateTemplateRequest->templateHtml = 'accusamus';
    $request->id = 'fb9ba88f-3a66-4997-874b-a4469b6e2141';

    $response = $sdk->sdk->updateTemplateDesignerTemplatesIdPut($request);

    if ($response->responseOkDesignerTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
