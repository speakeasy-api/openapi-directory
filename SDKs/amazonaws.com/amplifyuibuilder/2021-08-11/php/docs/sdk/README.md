# SDK

## Overview

<p>The Amplify UI Builder API provides a programmatic interface for creating and configuring user interface (UI) component libraries and themes for use in your Amplify applications. You can then connect these UI components to an application's backend Amazon Web Services resources.</p> <p>You can also use the Amplify Studio visual designer to create UI components and model data for an app. For more information, see <a href="https://docs.amplify.aws/console/adminui/intro">Introduction</a> in the <i>Amplify Docs</i>.</p> <p>The Amplify Framework is a comprehensive set of SDKs, libraries, tools, and documentation for client app development. For more information, see the <a href="https://docs.amplify.aws/">Amplify Framework</a>. For more information about deploying an Amplify application to Amazon Web Services, see the <a href="https://docs.aws.amazon.com/amplify/latest/userguide/welcome.html">Amplify User Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/amplifyuibuilder/>
### Available Operations

* [createComponent](#createcomponent) - Creates a new component for an Amplify app.
* [createForm](#createform) - Creates a new form for an Amplify app.
* [createTheme](#createtheme) - Creates a theme to apply to the components in an Amplify app.
* [deleteComponent](#deletecomponent) - Deletes a component from an Amplify app.
* [deleteForm](#deleteform) - Deletes a form from an Amplify app.
* [deleteTheme](#deletetheme) - Deletes a theme from an Amplify app.
* [exchangeCodeForToken](#exchangecodefortoken) - Exchanges an access code for a token.
* [exportComponents](#exportcomponents) - Exports component configurations to code that is ready to integrate into an Amplify app.
* [exportForms](#exportforms) - Exports form configurations to code that is ready to integrate into an Amplify app.
* [exportThemes](#exportthemes) - Exports theme configurations to code that is ready to integrate into an Amplify app.
* [getComponent](#getcomponent) - Returns an existing component for an Amplify app.
* [getForm](#getform) - Returns an existing form for an Amplify app.
* [getMetadata](#getmetadata) - Returns existing metadata for an Amplify app.
* [getTheme](#gettheme) - Returns an existing theme for an Amplify app.
* [listComponents](#listcomponents) - Retrieves a list of components for a specified Amplify app and backend environment.
* [listForms](#listforms) - Retrieves a list of forms for a specified Amplify app and backend environment.
* [listThemes](#listthemes) - Retrieves a list of themes for a specified Amplify app and backend environment.
* [putMetadataFlag](#putmetadataflag) - Stores the metadata information about a feature on a form.
* [refreshToken](#refreshtoken) - Refreshes a previously issued access token that might have expired.
* [updateComponent](#updatecomponent) - Updates an existing component.
* [updateForm](#updateform) - Updates an existing form.
* [updateTheme](#updatetheme) - Updates an existing theme.

## createComponent

Creates a new component for an Amplify app.

### Example Usage

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
        'commodi' => new ComponentBindingPropertiesValue(),
    ];
    $request->requestBody->componentToCreate->children = [
        new ComponentChild(),
        new ComponentChild(),
    ];
    $request->requestBody->componentToCreate->collectionProperties = [
        'qui' => new ComponentDataConfiguration(),
        'impedit' => new ComponentDataConfiguration(),
    ];
    $request->requestBody->componentToCreate->componentType = 'cum';
    $request->requestBody->componentToCreate->events = [
        'ipsum' => new ComponentEvent(),
        'excepturi' => new ComponentEvent(),
    ];
    $request->requestBody->componentToCreate->name = 'Dorothy Hane';
    $request->requestBody->componentToCreate->overrides = [
        'dolor' => [
            'laboriosam' => 'hic',
            'saepe' => 'fuga',
            'in' => 'corporis',
        ],
        'iste' => [
            'saepe' => 'quidem',
            'architecto' => 'ipsa',
        ],
        'reiciendis' => [
            'mollitia' => 'laborum',
            'dolores' => 'dolorem',
            'corporis' => 'explicabo',
        ],
    ];
    $request->requestBody->componentToCreate->properties = 'nobis';
    $request->requestBody->componentToCreate->schemaVersion = 'enim';
    $request->requestBody->componentToCreate->sourceId = 'omnis';
    $request->requestBody->componentToCreate->tags = [
        'minima' => 'excepturi',
        'accusantium' => 'iure',
    ];
    $request->requestBody->componentToCreate->variants = [
        new ComponentVariant(),
        new ComponentVariant(),
        new ComponentVariant(),
    ];
    $request->xAmzAlgorithm = 'doloribus';
    $request->xAmzContentSha256 = 'sapiente';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'consequuntur';
    $request->appId = 'repellat';
    $request->clientToken = 'mollitia';
    $request->environmentName = 'occaecati';

    $response = $sdk->sdk->createComponent($request);

    if ($response->createComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createForm

Creates a new form for an Amplify app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFormRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFormRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateFormRequestBodyFormToCreate;
use \OpenAPI\OpenAPI\Models\Shared\FormCTA;
use \OpenAPI\OpenAPI\Models\Shared\FormButton;
use \OpenAPI\OpenAPI\Models\Shared\FieldPosition;
use \OpenAPI\OpenAPI\Models\Shared\FixedPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FormButtonsPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FormDataTypeConfig;
use \OpenAPI\OpenAPI\Models\Shared\FormDataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldConfig;
use \OpenAPI\OpenAPI\Models\Shared\FieldInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\FileUploaderFieldConfig;
use \OpenAPI\OpenAPI\Models\Shared\StorageAccessLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValueMappings;
use \OpenAPI\OpenAPI\Models\Shared\FormInputBindingPropertiesValue;
use \OpenAPI\OpenAPI\Models\Shared\FormInputBindingPropertiesValueProperties;
use \OpenAPI\OpenAPI\Models\Shared\ValueMapping;
use \OpenAPI\OpenAPI\Models\Shared\FormInputValueProperty;
use \OpenAPI\OpenAPI\Models\Shared\FormInputValuePropertyBindingProperties;
use \OpenAPI\OpenAPI\Models\Shared\FieldValidationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FormActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LabelDecoratorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SectionalElement;
use \OpenAPI\OpenAPI\Models\Shared\FormStyle;
use \OpenAPI\OpenAPI\Models\Shared\FormStyleConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFormRequest();
    $request->requestBody = new CreateFormRequestBody();
    $request->requestBody->formToCreate = new CreateFormRequestBodyFormToCreate();
    $request->requestBody->formToCreate->cta = new FormCTA();
    $request->requestBody->formToCreate->cta->cancel = new FormButton();
    $request->requestBody->formToCreate->cta->cancel->children = 'numquam';
    $request->requestBody->formToCreate->cta->cancel->excluded = false;
    $request->requestBody->formToCreate->cta->cancel->position = new FieldPosition();
    $request->requestBody->formToCreate->cta->cancel->position->below = 'commodi';
    $request->requestBody->formToCreate->cta->cancel->position->fixed = FixedPositionEnum::FIRST;
    $request->requestBody->formToCreate->cta->cancel->position->rightOf = 'quam';
    $request->requestBody->formToCreate->cta->clear = new FormButton();
    $request->requestBody->formToCreate->cta->clear->children = 'molestiae';
    $request->requestBody->formToCreate->cta->clear->excluded = false;
    $request->requestBody->formToCreate->cta->clear->position = new FieldPosition();
    $request->requestBody->formToCreate->cta->clear->position->below = 'velit';
    $request->requestBody->formToCreate->cta->clear->position->fixed = FixedPositionEnum::FIRST;
    $request->requestBody->formToCreate->cta->clear->position->rightOf = 'error';
    $request->requestBody->formToCreate->cta->position = FormButtonsPositionEnum::TOP;
    $request->requestBody->formToCreate->cta->submit = new FormButton();
    $request->requestBody->formToCreate->cta->submit->children = 'quis';
    $request->requestBody->formToCreate->cta->submit->excluded = false;
    $request->requestBody->formToCreate->cta->submit->position = new FieldPosition();
    $request->requestBody->formToCreate->cta->submit->position->below = 'vitae';
    $request->requestBody->formToCreate->cta->submit->position->fixed = FixedPositionEnum::FIRST;
    $request->requestBody->formToCreate->cta->submit->position->rightOf = 'laborum';
    $request->requestBody->formToCreate->dataType = new FormDataTypeConfig();
    $request->requestBody->formToCreate->dataType->dataSourceType = FormDataSourceTypeEnum::CUSTOM;
    $request->requestBody->formToCreate->dataType->dataTypeName = 'enim';
    $request->requestBody->formToCreate->fields = [
        'quo' => new FieldConfig(),
    ];
    $request->requestBody->formToCreate->formActionType = FormActionTypeEnum::CREATE;
    $request->requestBody->formToCreate->labelDecorator = LabelDecoratorEnum::NONE;
    $request->requestBody->formToCreate->name = 'Mr. Alberta Schuster';
    $request->requestBody->formToCreate->schemaVersion = 'temporibus';
    $request->requestBody->formToCreate->sectionalElements = [
        'quasi' => new SectionalElement(),
        'reiciendis' => new SectionalElement(),
        'voluptatibus' => new SectionalElement(),
    ];
    $request->requestBody->formToCreate->style = new FormStyle();
    $request->requestBody->formToCreate->style->horizontalGap = new FormStyleConfig();
    $request->requestBody->formToCreate->style->horizontalGap->tokenReference = 'vero';
    $request->requestBody->formToCreate->style->horizontalGap->value = 'nihil';
    $request->requestBody->formToCreate->style->outerPadding = new FormStyleConfig();
    $request->requestBody->formToCreate->style->outerPadding->tokenReference = 'praesentium';
    $request->requestBody->formToCreate->style->outerPadding->value = 'voluptatibus';
    $request->requestBody->formToCreate->style->verticalGap = new FormStyleConfig();
    $request->requestBody->formToCreate->style->verticalGap->tokenReference = 'ipsa';
    $request->requestBody->formToCreate->style->verticalGap->value = 'omnis';
    $request->requestBody->formToCreate->tags = [
        'cum' => 'perferendis',
        'doloremque' => 'reprehenderit',
    ];
    $request->xAmzAlgorithm = 'ut';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'corporis';
    $request->xAmzSecurityToken = 'dolore';
    $request->xAmzSignature = 'iusto';
    $request->xAmzSignedHeaders = 'dicta';
    $request->appId = 'harum';
    $request->clientToken = 'enim';
    $request->environmentName = 'accusamus';

    $response = $sdk->sdk->createForm($request);

    if ($response->createFormResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTheme

Creates a theme to apply to the components in an Amplify app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateThemeRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateThemeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateThemeRequestBodyThemeToCreate;
use \OpenAPI\OpenAPI\Models\Shared\ThemeValues;
use \OpenAPI\OpenAPI\Models\Shared\ThemeValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateThemeRequest();
    $request->requestBody = new CreateThemeRequestBody();
    $request->requestBody->themeToCreate = new CreateThemeRequestBodyThemeToCreate();
    $request->requestBody->themeToCreate->name = 'Elvira Bergnaum';
    $request->requestBody->themeToCreate->overrides = [
        new ThemeValues(),
        new ThemeValues(),
        new ThemeValues(),
    ];
    $request->requestBody->themeToCreate->tags = [
        'pariatur' => 'modi',
        'praesentium' => 'rem',
        'voluptates' => 'quasi',
    ];
    $request->requestBody->themeToCreate->values = [
        new ThemeValues(),
        new ThemeValues(),
        new ThemeValues(),
        new ThemeValues(),
    ];
    $request->xAmzAlgorithm = 'sint';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'incidunt';
    $request->xAmzSecurityToken = 'enim';
    $request->xAmzSignature = 'consequatur';
    $request->xAmzSignedHeaders = 'est';
    $request->appId = 'quibusdam';
    $request->clientToken = 'explicabo';
    $request->environmentName = 'deserunt';

    $response = $sdk->sdk->createTheme($request);

    if ($response->createThemeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteComponent

Deletes a component from an Amplify app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteComponentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteComponentRequest();
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quibusdam';
    $request->xAmzCredential = 'labore';
    $request->xAmzDate = 'modi';
    $request->xAmzSecurityToken = 'qui';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'cupiditate';
    $request->appId = 'quos';
    $request->environmentName = 'perferendis';
    $request->id = '2d502a94-bb4f-463c-969e-9a3efa77dfb1';

    $response = $sdk->sdk->deleteComponent($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteForm

Deletes a form from an Amplify app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFormRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFormRequest();
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'cumque';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'ea';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'laborum';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->appId = 'non';
    $request->environmentName = 'occaecati';
    $request->id = '5efb9ba8-8f3a-4669-9707-4ba4469b6e21';

    $response = $sdk->sdk->deleteForm($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTheme

Deletes a theme from an Amplify app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteThemeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteThemeRequest();
    $request->xAmzAlgorithm = 'magnam';
    $request->xAmzContentSha256 = 'et';
    $request->xAmzCredential = 'excepturi';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'provident';
    $request->xAmzSignature = 'quos';
    $request->xAmzSignedHeaders = 'sint';
    $request->appId = 'accusantium';
    $request->environmentName = 'mollitia';
    $request->id = 'fa563e25-16fe-44c8-b711-e5b7fd2ed028';

    $response = $sdk->sdk->deleteTheme($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exchangeCodeForToken

Exchanges an access code for a token.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExchangeCodeForTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExchangeCodeForTokenRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ExchangeCodeForTokenRequestBodyRequest;
use \OpenAPI\OpenAPI\Models\Operations\ExchangeCodeForTokenProviderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExchangeCodeForTokenRequest();
    $request->requestBody = new ExchangeCodeForTokenRequestBody();
    $request->requestBody->request = new ExchangeCodeForTokenRequestBodyRequest();
    $request->requestBody->request->clientId = 'natus';
    $request->requestBody->request->code = 'magni';
    $request->requestBody->request->redirectUri = 'sunt';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'illum';
    $request->xAmzCredential = 'pariatur';
    $request->xAmzDate = 'maxime';
    $request->xAmzSecurityToken = 'ea';
    $request->xAmzSignature = 'excepturi';
    $request->xAmzSignedHeaders = 'odit';
    $request->provider = ExchangeCodeForTokenProviderEnum::FIGMA;

    $response = $sdk->sdk->exchangeCodeForToken($request);

    if ($response->exchangeCodeForTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportComponents

Exports component configurations to code that is ready to integrate into an Amplify app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportComponentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportComponentsRequest();
    $request->xAmzAlgorithm = 'ea';
    $request->xAmzContentSha256 = 'accusantium';
    $request->xAmzCredential = 'ab';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'voluptate';
    $request->appId = 'autem';
    $request->environmentName = 'nam';
    $request->nextToken = 'eaque';

    $response = $sdk->sdk->exportComponents($request);

    if ($response->exportComponentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportForms

Exports form configurations to code that is ready to integrate into an Amplify app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportFormsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportFormsRequest();
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'fugiat';
    $request->xAmzSignature = 'amet';
    $request->xAmzSignedHeaders = 'aut';
    $request->appId = 'cumque';
    $request->environmentName = 'corporis';
    $request->nextToken = 'hic';

    $response = $sdk->sdk->exportForms($request);

    if ($response->exportFormsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## exportThemes

Exports theme configurations to code that is ready to integrate into an Amplify app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ExportThemesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExportThemesRequest();
    $request->xAmzAlgorithm = 'libero';
    $request->xAmzContentSha256 = 'nobis';
    $request->xAmzCredential = 'dolores';
    $request->xAmzDate = 'quis';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'dignissimos';
    $request->xAmzSignedHeaders = 'eaque';
    $request->appId = 'quis';
    $request->environmentName = 'nesciunt';
    $request->nextToken = 'eos';

    $response = $sdk->sdk->exportThemes($request);

    if ($response->exportThemesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getComponent

Returns an existing component for an Amplify app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetComponentRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetComponentRequest();
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'minus';
    $request->xAmzDate = 'quam';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'vero';
    $request->xAmzSignedHeaders = 'nostrum';
    $request->appId = 'hic';
    $request->environmentName = 'recusandae';
    $request->id = '9b90c289-09b3-4fe4-9a8d-9cbf48633323';

    $response = $sdk->sdk->getComponent($request);

    if ($response->getComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getForm

Returns an existing form for an Amplify app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFormRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFormRequest();
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'excepturi';
    $request->xAmzCredential = 'cum';
    $request->xAmzDate = 'voluptate';
    $request->xAmzSecurityToken = 'dignissimos';
    $request->xAmzSignature = 'reiciendis';
    $request->xAmzSignedHeaders = 'amet';
    $request->appId = 'dolorum';
    $request->environmentName = 'numquam';
    $request->id = '100674eb-f692-480d-9ba7-7a89ebf737ae';

    $response = $sdk->sdk->getForm($request);

    if ($response->getFormResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMetadata

Returns existing metadata for an Amplify app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetMetadataRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMetadataRequest();
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'ad';
    $request->appId = 'saepe';
    $request->environmentName = 'suscipit';

    $response = $sdk->sdk->getMetadata($request);

    if ($response->getMetadataResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTheme

Returns an existing theme for an Amplify app.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetThemeRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetThemeRequest();
    $request->xAmzAlgorithm = 'deserunt';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'repellendus';
    $request->xAmzSecurityToken = 'totam';
    $request->xAmzSignature = 'similique';
    $request->xAmzSignedHeaders = 'alias';
    $request->appId = 'at';
    $request->environmentName = 'quaerat';
    $request->id = '46ce2af7-a73c-4f3b-a453-f870b326b5a7';

    $response = $sdk->sdk->getTheme($request);

    if ($response->getThemeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listComponents

Retrieves a list of components for a specified Amplify app and backend environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListComponentsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListComponentsRequest();
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'incidunt';
    $request->xAmzCredential = 'qui';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'maxime';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'soluta';
    $request->appId = 'dicta';
    $request->environmentName = 'laborum';
    $request->maxResults = 517379;
    $request->nextToken = 'incidunt';

    $response = $sdk->sdk->listComponents($request);

    if ($response->listComponentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listForms

Retrieves a list of forms for a specified Amplify app and backend environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFormsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFormsRequest();
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'aliquid';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'molestias';
    $request->appId = 'temporibus';
    $request->environmentName = 'qui';
    $request->maxResults = 204865;
    $request->nextToken = 'fugit';

    $response = $sdk->sdk->listForms($request);

    if ($response->listFormsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listThemes

Retrieves a list of themes for a specified Amplify app and backend environment.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListThemesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListThemesRequest();
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'voluptatem';
    $request->appId = 'cumque';
    $request->environmentName = 'soluta';
    $request->maxResults = 748664;
    $request->nextToken = 'et';

    $response = $sdk->sdk->listThemes($request);

    if ($response->listThemesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putMetadataFlag

Stores the metadata information about a feature on a form.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutMetadataFlagRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutMetadataFlagRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PutMetadataFlagRequestBodyBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutMetadataFlagRequest();
    $request->requestBody = new PutMetadataFlagRequestBody();
    $request->requestBody->body = new PutMetadataFlagRequestBodyBody();
    $request->requestBody->body->newValue = 'saepe';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'nobis';
    $request->xAmzDate = 'quos';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'cupiditate';
    $request->xAmzSignedHeaders = 'aperiam';
    $request->appId = 'delectus';
    $request->environmentName = 'dolorem';
    $request->featureName = 'dolore';

    $response = $sdk->sdk->putMetadataFlag($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## refreshToken

Refreshes a previously issued access token that might have expired.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RefreshTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\RefreshTokenRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RefreshTokenRequestBodyRefreshTokenBody;
use \OpenAPI\OpenAPI\Models\Operations\RefreshTokenProviderEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RefreshTokenRequest();
    $request->requestBody = new RefreshTokenRequestBody();
    $request->requestBody->refreshTokenBody = new RefreshTokenRequestBodyRefreshTokenBody();
    $request->requestBody->refreshTokenBody->clientId = 'labore';
    $request->requestBody->refreshTokenBody->token = 'adipisci';
    $request->xAmzAlgorithm = 'dolorum';
    $request->xAmzContentSha256 = 'architecto';
    $request->xAmzCredential = 'quae';
    $request->xAmzDate = 'aut';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'itaque';
    $request->xAmzSignedHeaders = 'consequatur';
    $request->provider = RefreshTokenProviderEnum::FIGMA;

    $response = $sdk->sdk->refreshToken($request);

    if ($response->refreshTokenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateComponent

Updates an existing component.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateComponentRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateComponentRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateComponentRequestBodyUpdatedComponent;
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
    $request = new UpdateComponentRequest();
    $request->requestBody = new UpdateComponentRequestBody();
    $request->requestBody->updatedComponent = new UpdateComponentRequestBodyUpdatedComponent();
    $request->requestBody->updatedComponent->bindingProperties = [
        'repellendus' => new ComponentBindingPropertiesValue(),
        'porro' => new ComponentBindingPropertiesValue(),
        'doloribus' => new ComponentBindingPropertiesValue(),
    ];
    $request->requestBody->updatedComponent->children = [
        new ComponentChild(),
        new ComponentChild(),
    ];
    $request->requestBody->updatedComponent->collectionProperties = [
        'cupiditate' => new ComponentDataConfiguration(),
        'qui' => new ComponentDataConfiguration(),
        'quae' => new ComponentDataConfiguration(),
    ];
    $request->requestBody->updatedComponent->componentType = 'laudantium';
    $request->requestBody->updatedComponent->events = [
        'occaecati' => new ComponentEvent(),
        'voluptatibus' => new ComponentEvent(),
    ];
    $request->requestBody->updatedComponent->id = 'ce953f73-ef7f-4bc7-abd7-4dd39c0f5d2c';
    $request->requestBody->updatedComponent->name = 'Domingo Kris';
    $request->requestBody->updatedComponent->overrides = [
        'officia' => [
            'ipsam' => 'ea',
            'aspernatur' => 'vel',
        ],
    ];
    $request->requestBody->updatedComponent->properties = 'possimus';
    $request->requestBody->updatedComponent->schemaVersion = 'magnam';
    $request->requestBody->updatedComponent->sourceId = 'ratione';
    $request->requestBody->updatedComponent->variants = [
        new ComponentVariant(),
        new ComponentVariant(),
    ];
    $request->xAmzAlgorithm = 'laudantium';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'dolor';
    $request->xAmzDate = 'maiores';
    $request->xAmzSecurityToken = 'quasi';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'nulla';
    $request->appId = 'excepturi';
    $request->clientToken = 'voluptatibus';
    $request->environmentName = 'nostrum';
    $request->id = 'fce6c556-146c-43e2-90fb-008c42e141aa';

    $response = $sdk->sdk->updateComponent($request);

    if ($response->updateComponentResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateForm

Updates an existing form.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFormRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFormRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFormRequestBodyUpdatedForm;
use \OpenAPI\OpenAPI\Models\Shared\FormCTA;
use \OpenAPI\OpenAPI\Models\Shared\FormButton;
use \OpenAPI\OpenAPI\Models\Shared\FieldPosition;
use \OpenAPI\OpenAPI\Models\Shared\FixedPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FormButtonsPositionEnum;
use \OpenAPI\OpenAPI\Models\Shared\FormDataTypeConfig;
use \OpenAPI\OpenAPI\Models\Shared\FormDataSourceTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldConfig;
use \OpenAPI\OpenAPI\Models\Shared\FieldInputConfig;
use \OpenAPI\OpenAPI\Models\Shared\FileUploaderFieldConfig;
use \OpenAPI\OpenAPI\Models\Shared\StorageAccessLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\ValueMappings;
use \OpenAPI\OpenAPI\Models\Shared\FormInputBindingPropertiesValue;
use \OpenAPI\OpenAPI\Models\Shared\FormInputBindingPropertiesValueProperties;
use \OpenAPI\OpenAPI\Models\Shared\ValueMapping;
use \OpenAPI\OpenAPI\Models\Shared\FormInputValueProperty;
use \OpenAPI\OpenAPI\Models\Shared\FormInputValuePropertyBindingProperties;
use \OpenAPI\OpenAPI\Models\Shared\FieldValidationConfiguration;
use \OpenAPI\OpenAPI\Models\Shared\FormActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\LabelDecoratorEnum;
use \OpenAPI\OpenAPI\Models\Shared\SectionalElement;
use \OpenAPI\OpenAPI\Models\Shared\FormStyle;
use \OpenAPI\OpenAPI\Models\Shared\FormStyleConfig;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFormRequest();
    $request->requestBody = new UpdateFormRequestBody();
    $request->requestBody->updatedForm = new UpdateFormRequestBodyUpdatedForm();
    $request->requestBody->updatedForm->cta = new FormCTA();
    $request->requestBody->updatedForm->cta->cancel = new FormButton();
    $request->requestBody->updatedForm->cta->cancel->children = 'placeat';
    $request->requestBody->updatedForm->cta->cancel->excluded = false;
    $request->requestBody->updatedForm->cta->cancel->position = new FieldPosition();
    $request->requestBody->updatedForm->cta->cancel->position->below = 'velit';
    $request->requestBody->updatedForm->cta->cancel->position->fixed = FixedPositionEnum::FIRST;
    $request->requestBody->updatedForm->cta->cancel->position->rightOf = 'eum';
    $request->requestBody->updatedForm->cta->clear = new FormButton();
    $request->requestBody->updatedForm->cta->clear->children = 'autem';
    $request->requestBody->updatedForm->cta->clear->excluded = false;
    $request->requestBody->updatedForm->cta->clear->position = new FieldPosition();
    $request->requestBody->updatedForm->cta->clear->position->below = 'nobis';
    $request->requestBody->updatedForm->cta->clear->position->fixed = FixedPositionEnum::FIRST;
    $request->requestBody->updatedForm->cta->clear->position->rightOf = 'quas';
    $request->requestBody->updatedForm->cta->position = FormButtonsPositionEnum::TOP_AND_BOTTOM;
    $request->requestBody->updatedForm->cta->submit = new FormButton();
    $request->requestBody->updatedForm->cta->submit->children = 'nulla';
    $request->requestBody->updatedForm->cta->submit->excluded = false;
    $request->requestBody->updatedForm->cta->submit->position = new FieldPosition();
    $request->requestBody->updatedForm->cta->submit->position->below = 'voluptas';
    $request->requestBody->updatedForm->cta->submit->position->fixed = FixedPositionEnum::FIRST;
    $request->requestBody->updatedForm->cta->submit->position->rightOf = 'libero';
    $request->requestBody->updatedForm->dataType = new FormDataTypeConfig();
    $request->requestBody->updatedForm->dataType->dataSourceType = FormDataSourceTypeEnum::DATA_STORE;
    $request->requestBody->updatedForm->dataType->dataTypeName = 'tempora';
    $request->requestBody->updatedForm->fields = [
        'explicabo' => new FieldConfig(),
        'provident' => new FieldConfig(),
    ];
    $request->requestBody->updatedForm->formActionType = FormActionTypeEnum::CREATE;
    $request->requestBody->updatedForm->labelDecorator = LabelDecoratorEnum::OPTIONAL;
    $request->requestBody->updatedForm->name = 'Viola Gibson';
    $request->requestBody->updatedForm->schemaVersion = 'rem';
    $request->requestBody->updatedForm->sectionalElements = [
        'reprehenderit' => new SectionalElement(),
        'quidem' => new SectionalElement(),
        'fugiat' => new SectionalElement(),
    ];
    $request->requestBody->updatedForm->style = new FormStyle();
    $request->requestBody->updatedForm->style->horizontalGap = new FormStyleConfig();
    $request->requestBody->updatedForm->style->horizontalGap->tokenReference = 'ut';
    $request->requestBody->updatedForm->style->horizontalGap->value = 'eum';
    $request->requestBody->updatedForm->style->outerPadding = new FormStyleConfig();
    $request->requestBody->updatedForm->style->outerPadding->tokenReference = 'suscipit';
    $request->requestBody->updatedForm->style->outerPadding->value = 'assumenda';
    $request->requestBody->updatedForm->style->verticalGap = new FormStyleConfig();
    $request->requestBody->updatedForm->style->verticalGap->tokenReference = 'eos';
    $request->requestBody->updatedForm->style->verticalGap->value = 'praesentium';
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'quo';
    $request->appId = 'illum';
    $request->clientToken = 'quo';
    $request->environmentName = 'fuga';
    $request->id = '4251904e-523c-47e0-bc71-78e4796f2a70';

    $response = $sdk->sdk->updateForm($request);

    if ($response->updateFormResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTheme

Updates an existing theme.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateThemeRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateThemeRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\UpdateThemeRequestBodyUpdatedTheme;
use \OpenAPI\OpenAPI\Models\Shared\ThemeValues;
use \OpenAPI\OpenAPI\Models\Shared\ThemeValue;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateThemeRequest();
    $request->requestBody = new UpdateThemeRequestBody();
    $request->requestBody->updatedTheme = new UpdateThemeRequestBodyUpdatedTheme();
    $request->requestBody->updatedTheme->id = 'c688282a-a482-4562-b222-e9817ee17cbe';
    $request->requestBody->updatedTheme->name = 'Frances Turner';
    $request->requestBody->updatedTheme->overrides = [
        new ThemeValues(),
        new ThemeValues(),
    ];
    $request->requestBody->updatedTheme->values = [
        new ThemeValues(),
        new ThemeValues(),
        new ThemeValues(),
    ];
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'minima';
    $request->xAmzCredential = 'distinctio';
    $request->xAmzDate = 'eligendi';
    $request->xAmzSecurityToken = 'sit';
    $request->xAmzSignature = 'culpa';
    $request->xAmzSignedHeaders = 'tempore';
    $request->appId = 'adipisci';
    $request->clientToken = 'cumque';
    $request->environmentName = 'consequuntur';
    $request->id = '0c4f3789-fd87-41f9-9dd2-efd121aa6f1e';

    $response = $sdk->sdk->updateTheme($request);

    if ($response->updateThemeResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
