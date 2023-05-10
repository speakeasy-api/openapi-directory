# form

## Overview

Create and edit forms

### Available Operations

* [deleteFormsId](#deleteformsid) - Delete this form and all of it's responses.
* [getFormResponses](#getformresponses) - List form responses
* [getFormResponsesId](#getformresponsesid) - Get a single form response by id
* [getForms](#getforms) - List forms
* [getFormsId](#getformsid) - Get a single form by id
* [postFormResponses](#postformresponses) - Submit a response to a form
* [postForms](#postforms) - Create a form

## deleteFormsId

Delete this form and all of it's responses.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFormsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFormsIdRequest();
    $request->id = '0eb1ea42-6555-4ba3-8287-44ed53b88f3a';

    $response = $sdk->form->deleteFormsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFormResponses

List form responses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFormResponsesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFormResponsesRequest();
    $request->contribution = 'corrupti';
    $request->form = 'pariatur';
    $request->user = 'totam';

    $response = $sdk->form->getFormResponses($request);

    if ($response->formResponses !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFormResponsesId

Get a single form response by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFormResponsesIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFormResponsesIdRequest();
    $request->id = 'f5c0b2f2-fb7b-4194-a276-b26916fe1f08';

    $response = $sdk->form->getFormResponsesId($request);

    if ($response->formResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getForms

List forms

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFormsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFormsRequest();
    $request->ownedBy = 'maiores';

    $response = $sdk->form->getForms($request);

    if ($response->forms !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFormsId

Get a single form by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFormsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFormsIdRequest();
    $request->id = '4294e369-8f44-47f6-83e8-b445e80ca55e';

    $response = $sdk->form->getFormsId($request);

    if ($response->form !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFormResponses

Submit a response to a form

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\FormResponseSubmission;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FormResponseSubmission();
    $request->contribution = 'reiciendis';
    $request->form = 'nulla';
    $request->responses = [
        'aperiam' => 'saepe',
    ];

    $response = $sdk->form->postFormResponses($request);

    if ($response->formResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postForms

Create a form

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\FormSubmission;
use \OpenAPI\OpenAPI\Models\Shared\FormField;
use \OpenAPI\OpenAPI\Models\Shared\Tag;
use \OpenAPI\OpenAPI\Models\Shared\TagSet;

$sdk = SDK::builder()
    ->build();

try {
    $request = new FormSubmission();
    $request->callToAction = 'numquam';
    $request->cssUrl = 'veniam';
    $request->fields = [
        new FormField(),
        new FormField(),
    ];
    $request->heading = 'officiis';
    $request->name = 'Marsha Heidenreich';
    $request->noCss = false;
    $request->tags = [
        new Tag(),
        new Tag(),
    ];

    $response = $sdk->form->postForms($request);

    if ($response->form !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
