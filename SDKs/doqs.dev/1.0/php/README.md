# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [createTemplateDesignerTemplatesPost](docs/sdk/README.md#createtemplatedesignertemplatespost) - Create Template
* [deleteDesignerTemplatesIdDelete](docs/sdk/README.md#deletedesignertemplatesiddelete) - Delete
* [generatePdfDesignerTemplatesIdGeneratePost](docs/sdk/README.md#generatepdfdesignertemplatesidgeneratepost) - Generate Pdf
* [listTemplatesDesignerTemplatesIdGet](docs/sdk/README.md#listtemplatesdesignertemplatesidget) - List Templates
* [listTemplatesDesignerTemplatesGet](docs/sdk/README.md#listtemplatesdesignertemplatesget) - List Templates
* [previewDesignerTemplatesPreviewPost](docs/sdk/README.md#previewdesignertemplatespreviewpost) - Preview
* [updateTemplateDesignerTemplatesIdPut](docs/sdk/README.md#updatetemplatedesignertemplatesidput) - Update Template

### [templates](docs/templates/README.md)

* [create](docs/templates/README.md#create) - Create
* [deleteTemplatesIdDelete](docs/templates/README.md#deletetemplatesiddelete) - Delete 
* [fill](docs/templates/README.md#fill) - Fill
* [get](docs/templates/README.md#get) - Get Template
* [getFileTemplatesIdFileGet](docs/templates/README.md#getfiletemplatesidfileget) - Get File
* [list](docs/templates/README.md#list) - List 
* [update](docs/templates/README.md#update) - Update
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
