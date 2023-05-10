# categories

## Overview

Categorisation

### Available Operations

* [~~getAccountCategory~~](#getaccountcategory) - Get suggested and/or confirmed category for a specific account :warning: **Deprecated**
* [~~listAccountsCategories~~](#listaccountscategories) - List suggested and confirmed account categories :warning: **Deprecated**
* [~~listAvailableAccountCategories~~](#listavailableaccountcategories) - List account categories :warning: **Deprecated**
* [~~updateAccountCategory~~](#updateaccountcategory) - Patch account categories :warning: **Deprecated**
* [~~updateAccountsCategories~~](#updateaccountscategories) - Confirm categories for accounts :warning: **Deprecated**

## ~~getAccountCategory~~

Get category for specific nominal account.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountCategoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountCategoryRequest();
    $request->accountId = 'provident';
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';

    $response = $sdk->categories->getAccountCategory($request);

    if ($response->categorisedAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listAccountsCategories~~

Lists suggested and confirmed chart of account categories for the given company and data connection.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAccountsCategoriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAccountsCategoriesRequest();
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';
    $request->orderBy = '-modifiedDate';
    $request->page = 1;
    $request->pageSize = 100;
    $request->query = 'distinctio';

    $response = $sdk->categories->listAccountsCategories($request);

    if ($response->categorisedAccounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~listAvailableAccountCategories~~

Lists available account categories Codat's categorisation engine can provide. 

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->categories->listAvailableAccountCategories();

    if ($response->categories !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~updateAccountCategory~~

Update category for a specific nominal account

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountCategoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfirmCategory;
use \OpenAPI\OpenAPI\Models\Shared\AccountCategory;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccountCategoryRequest();
    $request->confirmCategory = new ConfirmCategory();
    $request->confirmCategory->confirmed = new AccountCategory();
    $request->confirmCategory->confirmed->detailType = 'quibusdam';
    $request->confirmCategory->confirmed->subtype = 'unde';
    $request->confirmCategory->confirmed->type = 'nulla';
    $request->accountId = 'corrupti';
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';

    $response = $sdk->categories->updateAccountCategory($request);

    if ($response->categorisedAccount !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## ~~updateAccountsCategories~~

Comfirms the categories for all or a batch of accounts for a specific connection.

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateAccountsCategoriesRequest;
use \OpenAPI\OpenAPI\Models\Shared\ConfirmCategories;
use \OpenAPI\OpenAPI\Models\Shared\ConfirmCategoriesCategories;
use \OpenAPI\OpenAPI\Models\Shared\ConfirmCategoriesCategoriesAccountRef;
use \OpenAPI\OpenAPI\Models\Shared\AccountCategory;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateAccountsCategoriesRequest();
    $request->confirmCategories = new ConfirmCategories();
    $request->confirmCategories->categories = [
        new ConfirmCategoriesCategories(),
        new ConfirmCategoriesCategories(),
        new ConfirmCategoriesCategories(),
        new ConfirmCategoriesCategories(),
    ];
    $request->companyId = '8a210b68-6988-11ed-a1eb-0242ac120002';
    $request->connectionId = '2e9d2c44-f675-40ba-8049-353bfcb5e171';

    $response = $sdk->categories->updateAccountsCategories($request);

    if ($response->categorisedAccounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
