# formFieldSets

## Overview

Operations about form_field_sets

### Available Operations

* [deleteFormFieldSetsId](#deleteformfieldsetsid) - Delete Form Field Set
* [getFormFieldSets](#getformfieldsets) - List Form Field Sets
* [getFormFieldSetsId](#getformfieldsetsid) - Show Form Field Set
* [patchFormFieldSetsId](#patchformfieldsetsid) - Update Form Field Set
* [postFormFieldSets](#postformfieldsets) - Create Form Field Set

## deleteFormFieldSetsId

Delete Form Field Set

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFormFieldSetsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFormFieldSetsIdRequest();
    $request->id = 556429;

    $response = $sdk->formFieldSets->deleteFormFieldSetsId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFormFieldSets

List Form Field Sets

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFormFieldSetsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFormFieldSetsRequest();
    $request->cursor = 'praesentium';
    $request->perPage = 159867;
    $request->userId = 536178;

    $response = $sdk->formFieldSets->getFormFieldSets($request);

    if ($response->formFieldSetEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFormFieldSetsId

Show Form Field Set

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFormFieldSetsIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFormFieldSetsIdRequest();
    $request->id = 143829;

    $response = $sdk->formFieldSets->getFormFieldSetsId($request);

    if ($response->formFieldSetEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchFormFieldSetsId

Update Form Field Set

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchFormFieldSetsIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\PatchFormFieldSets;
use \OpenAPI\OpenAPI\Models\Shared\PatchFormFieldSetsFormFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchFormFieldSetsIdRequest();
    $request->id = 681393;
    $request->patchFormFieldSets = new PatchFormFieldSets();
    $request->patchFormFieldSets->formFields = [
        new PatchFormFieldSetsFormFields(),
        new PatchFormFieldSetsFormFields(),
        new PatchFormFieldSetsFormFields(),
    ];
    $request->patchFormFieldSets->skipCompany = false;
    $request->patchFormFieldSets->skipEmail = false;
    $request->patchFormFieldSets->skipName = false;
    $request->patchFormFieldSets->title = 'Mrs.';

    $response = $sdk->formFieldSets->patchFormFieldSetsId($request);

    if ($response->formFieldSetEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postFormFieldSets

Create Form Field Set

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PostFormFieldSets;
use \OpenAPI\OpenAPI\Models\Shared\PostFormFieldSetsFormFields;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostFormFieldSets();
    $request->formFields = [
        new PostFormFieldSetsFormFields(),
        new PostFormFieldSetsFormFields(),
        new PostFormFieldSetsFormFields(),
    ];
    $request->skipCompany = false;
    $request->skipEmail = false;
    $request->skipName = false;
    $request->title = 'Mr.';
    $request->userId = 325685;

    $response = $sdk->formFieldSets->postFormFieldSets($request);

    if ($response->formFieldSetEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
