# items

## Overview

Access and manage items inside 1Password Vaults

### Available Operations

* [createVaultItem](#createvaultitem) - Create a new Item
* [deleteVaultItem](#deletevaultitem) - Delete an Item
* [getVaultItemById](#getvaultitembyid) - Get the details of an Item
* [getVaultItems](#getvaultitems) - Get all items for inside a Vault
* [patchVaultItem](#patchvaultitem) - Update a subset of Item attributes
* [updateVaultItem](#updatevaultitem) - Update an Item

## createVaultItem

Create a new Item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateVaultItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\FullItemInput;
use \OpenAPI\OpenAPI\Models\Shared\FullItemCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldInput;
use \OpenAPI\OpenAPI\Models\Shared\FieldPurposeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GeneratorRecipe;
use \OpenAPI\OpenAPI\Models\Shared\GeneratorRecipeCharacterSetsEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldSection;
use \OpenAPI\OpenAPI\Models\Shared\FieldTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FileInput;
use \OpenAPI\OpenAPI\Models\Shared\FileSection;
use \OpenAPI\OpenAPI\Models\Shared\FullItemSections;
use \OpenAPI\OpenAPI\Models\Shared\FullItemUrls;
use \OpenAPI\OpenAPI\Models\Shared\FullItemVault;
use \OpenAPI\OpenAPI\Models\Operations\CreateVaultItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateVaultItemRequest();
    $request->fullItemInput = new FullItemInput();
    $request->fullItemInput->category = FullItemCategoryEnum::SSH_KEY;
    $request->fullItemInput->favorite = false;
    $request->fullItemInput->fields = [
        new FieldInput(),
        new FieldInput(),
        new FieldInput(),
    ];
    $request->fullItemInput->files = [
        new FileInput(),
        new FileInput(),
    ];
    $request->fullItemInput->id = '7dfb14cd-66ae-4395-afb9-ba88f3a66997';
    $request->fullItemInput->sections = [
        new FullItemSections(),
    ];
    $request->fullItemInput->tags = [
        'magnam',
        'distinctio',
    ];
    $request->fullItemInput->title = 'Miss';
    $request->fullItemInput->urls = [
        new FullItemUrls(),
        new FullItemUrls(),
    ];
    $request->fullItemInput->vault = new FullItemVault();
    $request->fullItemInput->vault->id = '469b6e21-4195-4989-8afa-563e2516fe4c';
    $request->fullItemInput->version = 537023;
    $request->vaultUuid = 'facilis';

    $requestSecurity = new CreateVaultItemSecurity();
    $requestSecurity->connectToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->items->createVaultItem($request, $requestSecurity);

    if ($response->fullItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteVaultItem

Delete an Item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVaultItemRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteVaultItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteVaultItemRequest();
    $request->itemUuid = 'in';
    $request->vaultUuid = 'architecto';

    $requestSecurity = new DeleteVaultItemSecurity();
    $requestSecurity->connectToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->items->deleteVaultItem($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVaultItemById

Get the details of an Item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVaultItemByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVaultItemByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVaultItemByIdRequest();
    $request->itemUuid = 'architecto';
    $request->vaultUuid = 'repudiandae';

    $requestSecurity = new GetVaultItemByIdSecurity();
    $requestSecurity->connectToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->items->getVaultItemById($request, $requestSecurity);

    if ($response->fullItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVaultItems

Get all items for inside a Vault

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVaultItemsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVaultItemsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVaultItemsRequest();
    $request->filter = 'title eq "Some Item Name"';
    $request->vaultUuid = 'ullam';

    $requestSecurity = new GetVaultItemsSecurity();
    $requestSecurity->connectToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->items->getVaultItems($request, $requestSecurity);

    if ($response->items !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchVaultItem

Applies a modified [RFC6902 JSON Patch](https://tools.ietf.org/html/rfc6902) document to an Item or ItemField. This endpoint only supports `add`, `remove` and `replace` operations.

When modifying a specific ItemField, the ItemField's ID in the `path` attribute of the operation object: `/fields/{fieldId}`


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchVaultItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\Patch;
use \OpenAPI\OpenAPI\Models\Shared\PatchOpEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchVaultItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchVaultItemRequest();
    $request->requestBody = [
        new Patch(),
        new Patch(),
        new Patch(),
    ];
    $request->itemUuid = 'nihil';
    $request->vaultUuid = 'repellat';

    $requestSecurity = new PatchVaultItemSecurity();
    $requestSecurity->connectToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->items->patchVaultItem($request, $requestSecurity);

    if ($response->fullItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVaultItem

Update an Item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVaultItemRequest;
use \OpenAPI\OpenAPI\Models\Shared\FullItemInput;
use \OpenAPI\OpenAPI\Models\Shared\FullItemCategoryEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldInput;
use \OpenAPI\OpenAPI\Models\Shared\FieldPurposeEnum;
use \OpenAPI\OpenAPI\Models\Shared\GeneratorRecipe;
use \OpenAPI\OpenAPI\Models\Shared\GeneratorRecipeCharacterSetsEnum;
use \OpenAPI\OpenAPI\Models\Shared\FieldSection;
use \OpenAPI\OpenAPI\Models\Shared\FieldTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FileInput;
use \OpenAPI\OpenAPI\Models\Shared\FileSection;
use \OpenAPI\OpenAPI\Models\Shared\FullItemSections;
use \OpenAPI\OpenAPI\Models\Shared\FullItemUrls;
use \OpenAPI\OpenAPI\Models\Shared\FullItemVault;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVaultItemSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVaultItemRequest();
    $request->fullItemInput = new FullItemInput();
    $request->fullItemInput->category = FullItemCategoryEnum::SOCIAL_SECURITY_NUMBER;
    $request->fullItemInput->favorite = false;
    $request->fullItemInput->fields = [
        new FieldInput(),
    ];
    $request->fullItemInput->files = [
        new FileInput(),
        new FileInput(),
        new FileInput(),
        new FileInput(),
    ];
    $request->fullItemInput->id = 'd028921c-ddc6-4926-81fb-576b0d5f0d30';
    $request->fullItemInput->sections = [
        new FullItemSections(),
        new FullItemSections(),
        new FullItemSections(),
        new FullItemSections(),
    ];
    $request->fullItemInput->tags = [
        'hic',
        'libero',
    ];
    $request->fullItemInput->title = 'Miss';
    $request->fullItemInput->urls = [
        new FullItemUrls(),
    ];
    $request->fullItemInput->vault = new FullItemVault();
    $request->fullItemInput->vault->id = '58705320-2c73-4d5f-a9b9-0c28909b3fe4';
    $request->fullItemInput->version = 613966;
    $request->itemUuid = 'dolorum';
    $request->vaultUuid = 'deleniti';

    $requestSecurity = new UpdateVaultItemSecurity();
    $requestSecurity->connectToken = 'Bearer YOUR_BEARER_TOKEN_HERE';

    $response = $sdk->items->updateVaultItem($request, $requestSecurity);

    if ($response->fullItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
