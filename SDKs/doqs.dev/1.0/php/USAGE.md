<!-- Start SDK Example Usage -->
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
            'distinctio' => 'quibusdam',
            'unde' => 'nulla',
            'corrupti' => 'illum',
        ],
        [
            'error' => 'deserunt',
            'suscipit' => 'iure',
        ],
        [
            'debitis' => 'ipsa',
            'delectus' => 'tempora',
        ],
    ];
    $request->css = 'suscipit';
    $request->footerHtml = 'molestiae';
    $request->format = FormatEnum::A5;
    $request->headerHtml = 'placeat';
    $request->margin = new CreateOrUpdateTemplateRequestMargin();
    $request->margin->bottom = 528895;
    $request->margin->left = 479977;
    $request->margin->right = 568045;
    $request->margin->top = 392785;
    $request->name = 'Jake Bernier MD';
    $request->orientation = OrientationEnum::LANDSCAPE;
    $request->previewPayload = [
        'repellendus' => 'sapiente',
        'quo' => 'odit',
    ];
    $request->templateHtml = 'at';

    $response = $sdk->createTemplateDesignerTemplatesPost($request);

    if ($response->responseOkDesignerTemplate !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->