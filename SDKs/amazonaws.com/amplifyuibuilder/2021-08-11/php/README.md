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
use \OpenAPI\OpenAPI\Models\Operations\CreateComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateComponentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateComponentRequestBodyComponentToCreate;
use \OpenAPI\OpenAPI\Models\Shared\ComponentBindingPropertiesValue;
use \OpenAPI\OpenAPI\Models\Shared\ComponentBindingPropertiesValueProperties;
use \OpenAPI\OpenAPI\Models\Shared\Predicate;
use \OpenAPI\OpenAPI\Models\Shared\ComponentChild;
use \OpenAPI\OpenAPI\Models\Shared\ComponentEvent;
use \OpenAPI\OpenAPI\Models\Shared\ActionParameters;
use \OpenAPI\OpenAPI\Models\Shared\ComponentProperty;
use \OpenAPI\OpenAPI\Models\Shared\ComponentPropertyBindingProperties;
use \OpenAPI\OpenAPI\Models\Shared\FormBindingElement;
use \OpenAPI\OpenAPI\Models\Shared\ComponentConditionProperty;
use \OpenAPI\OpenAPI\Models\Shared\MutationActionSetStateParameter;
use \OpenAPI\OpenAPI\Models\Shared\ComponentDataConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\SortProperty;
use \OpenAPI\OpenAPI\Models\Shared\SortDirectionEnum;
use \OpenAPI\OpenAPI\Models\Shared\ComponentVariant;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateComponentRequest();
    $request->requestBody = new CreateComponentRequestBody();
    $request->requestBody->componentToCreate = new CreateComponentRequestBodyComponentToCreate();
    $request->requestBody->componentToCreate->bindingProperties = [
        'provident' => new ComponentBindingPropertiesValue(),
        'distinctio' => new ComponentBindingPropertiesValue(),
        'quibusdam' => new ComponentBindingPropertiesValue(),
    ];
    $request->requestBody->componentToCreate->children = [
        new ComponentChild(),
        new ComponentChild(),
        new ComponentChild(),
    ];
    $request->requestBody->componentToCreate->collectionProperties = [
        'corrupti' => new ComponentDataConfiguration(),
        'illum' => new ComponentDataConfiguration(),
        'vel' => new ComponentDataConfiguration(),
        'error' => new ComponentDataConfiguration(),
    ];
    $request->requestBody->componentToCreate->componentType = 'deserunt';
    $request->requestBody->componentToCreate->events = [
        'iure' => new ComponentEvent(),
        'magnam' => new ComponentEvent(),
    ];
    $request->requestBody->componentToCreate->name = 'Larry Windler';
    $request->requestBody->componentToCreate->overrides = [
        'minus' => [
            'voluptatum' => 'iusto',
            'excepturi' => 'nisi',
            'recusandae' => 'temporibus',
            'ab' => 'quis',
        ],
        'veritatis' => [
            'perferendis' => 'ipsam',
            'repellendus' => 'sapiente',
            'quo' => 'odit',
        ],
    ];
    $request->requestBody->componentToCreate->properties = 'at';
    $request->requestBody->componentToCreate->schemaVersion = 'at';
    $request->requestBody->componentToCreate->sourceId = 'maiores';
    $request->requestBody->componentToCreate->tags = [
        'quod' => 'quod',
        'esse' => 'totam',
    ];
    $request->requestBody->componentToCreate->variants = [
        new ComponentVariant(),
        new ComponentVariant(),
        new ComponentVariant(),
        new ComponentVariant(),
    ];
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'nam';
    $request->xAmzDate = 'officia';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'fugit';
    $request->xAmzSignedHeaders = 'deleniti';
    $request->appId = 'hic';
    $request->clientToken = 'optio';
    $request->environmentName = 'totam';

    $response = $sdk->createComponent($request);

    if ($response->createComponentResponse !== null) {
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

* [createComponent](docs/sdk/README.md#createcomponent) - Creates a new component for an Amplify app.
* [createForm](docs/sdk/README.md#createform) - Creates a new form for an Amplify app.
* [createTheme](docs/sdk/README.md#createtheme) - Creates a theme to apply to the components in an Amplify app.
* [deleteComponent](docs/sdk/README.md#deletecomponent) - Deletes a component from an Amplify app.
* [deleteForm](docs/sdk/README.md#deleteform) - Deletes a form from an Amplify app.
* [deleteTheme](docs/sdk/README.md#deletetheme) - Deletes a theme from an Amplify app.
* [exchangeCodeForToken](docs/sdk/README.md#exchangecodefortoken) - Exchanges an access code for a token.
* [exportComponents](docs/sdk/README.md#exportcomponents) - Exports component configurations to code that is ready to integrate into an Amplify app.
* [exportForms](docs/sdk/README.md#exportforms) - Exports form configurations to code that is ready to integrate into an Amplify app.
* [exportThemes](docs/sdk/README.md#exportthemes) - Exports theme configurations to code that is ready to integrate into an Amplify app.
* [getComponent](docs/sdk/README.md#getcomponent) - Returns an existing component for an Amplify app.
* [getForm](docs/sdk/README.md#getform) - Returns an existing form for an Amplify app.
* [getMetadata](docs/sdk/README.md#getmetadata) - Returns existing metadata for an Amplify app.
* [getTheme](docs/sdk/README.md#gettheme) - Returns an existing theme for an Amplify app.
* [listComponents](docs/sdk/README.md#listcomponents) - Retrieves a list of components for a specified Amplify app and backend environment.
* [listForms](docs/sdk/README.md#listforms) - Retrieves a list of forms for a specified Amplify app and backend environment.
* [listThemes](docs/sdk/README.md#listthemes) - Retrieves a list of themes for a specified Amplify app and backend environment.
* [putMetadataFlag](docs/sdk/README.md#putmetadataflag) - Stores the metadata information about a feature on a form.
* [refreshToken](docs/sdk/README.md#refreshtoken) - Refreshes a previously issued access token that might have expired.
* [updateComponent](docs/sdk/README.md#updatecomponent) - Updates an existing component.
* [updateForm](docs/sdk/README.md#updateform) - Updates an existing form.
* [updateTheme](docs/sdk/README.md#updatetheme) - Updates an existing theme.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
