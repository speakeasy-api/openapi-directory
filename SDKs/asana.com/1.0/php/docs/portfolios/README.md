# portfolios

## Overview

A portfolio gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent [status update](/docs/asana-statuses).
Portfolios have some restrictions on size. Each portfolio has a max of 500 items and, like projects, a maximum of 20 custom fields.

### Available Operations

* [addCustomFieldSettingForPortfolio](#addcustomfieldsettingforportfolio) - Add a custom field to a portfolio
* [addItemForPortfolio](#additemforportfolio) - Add a portfolio item
* [addMembersForPortfolio](#addmembersforportfolio) - Add users to a portfolio
* [createPortfolio](#createportfolio) - Create a portfolio
* [deletePortfolio](#deleteportfolio) - Delete a portfolio
* [getItemsForPortfolio](#getitemsforportfolio) - Get portfolio items
* [getPortfolio](#getportfolio) - Get a portfolio
* [getPortfolios](#getportfolios) - Get multiple portfolios
* [removeCustomFieldSettingForPortfolio](#removecustomfieldsettingforportfolio) - Remove a custom field from a portfolio
* [removeItemForPortfolio](#removeitemforportfolio) - Remove a portfolio item
* [removeMembersForPortfolio](#removemembersforportfolio) - Remove users from a portfolio
* [updatePortfolio](#updateportfolio) - Update a portfolio

## addCustomFieldSettingForPortfolio

Custom fields are associated with portfolios by way of custom field settings.  This method creates a setting for the portfolio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddCustomFieldSettingForPortfolioRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddCustomFieldSettingForPortfolioRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AddCustomFieldSettingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddCustomFieldSettingForPortfolioRequest();
    $request->requestBody = new AddCustomFieldSettingForPortfolioRequestBody();
    $request->requestBody->data = new AddCustomFieldSettingRequest();
    $request->requestBody->data->customField = '14916';
    $request->requestBody->data->insertAfter = '1331';
    $request->requestBody->data->insertBefore = '1331';
    $request->requestBody->data->isImportant = true;
    $request->optPretty = false;
    $request->portfolioGid = 'perferendis';

    $response = $sdk->portfolios->addCustomFieldSettingForPortfolio($request);

    if ($response->addCustomFieldSettingForPortfolio200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addItemForPortfolio

Add an item to a portfolio.
Returns an empty data block.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddItemForPortfolioRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddItemForPortfolioRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\PortfolioAddItemRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddItemForPortfolioRequest();
    $request->requestBody = new AddItemForPortfolioRequestBody();
    $request->requestBody->data = new PortfolioAddItemRequest();
    $request->requestBody->data->insertAfter = '1331';
    $request->requestBody->data->insertBefore = '1331';
    $request->requestBody->data->item = '1331';
    $request->optFields = [
        'magnam',
        'distinctio',
    ];
    $request->optPretty = false;
    $request->portfolioGid = 'id';

    $response = $sdk->portfolios->addItemForPortfolio($request);

    if ($response->addItemForPortfolio200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## addMembersForPortfolio

Adds the specified list of users as members of the portfolio.
Returns the updated portfolio record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddMembersForPortfolioRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddMembersForPortfolioRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AddMembersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddMembersForPortfolioRequest();
    $request->requestBody = new AddMembersForPortfolioRequestBody();
    $request->requestBody->data = new AddMembersRequest();
    $request->requestBody->data->members = '521621,621373';
    $request->optFields = [
        'labore',
        'suscipit',
    ];
    $request->optPretty = false;
    $request->portfolioGid = 'natus';

    $response = $sdk->portfolios->addMembersForPortfolio($request);

    if ($response->addMembersForPortfolio200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createPortfolio

Creates a new portfolio in the given workspace with the supplied name.

Note that portfolios created in the Asana UI may have some state
(like the “Priority” custom field) which is automatically added
to the portfolio when it is created. Portfolios created via our
API will *not* be created with the same initial state to allow
integrations to create their own starting state on a portfolio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreatePortfolioRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreatePortfolioRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\PortfolioRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\PortfolioRequestColorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreatePortfolioRequest();
    $request->requestBody = new CreatePortfolioRequestBodyInput();
    $request->requestBody->data = new PortfolioRequestInput();
    $request->requestBody->data->color = PortfolioRequestColorEnum::LIGHT_GREEN;
    $request->requestBody->data->name = 'Bug Portfolio';
    $request->requestBody->data->public = false;
    $request->requestBody->data->workspace = '167589';
    $request->optFields = [
        'eum',
        'vero',
        'aspernatur',
    ];
    $request->optPretty = false;

    $response = $sdk->portfolios->createPortfolio($request);

    if ($response->createPortfolio201ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deletePortfolio

An existing portfolio can be deleted by making a DELETE request on
the URL for that portfolio.

Returns an empty data record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeletePortfolioRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeletePortfolioRequest();
    $request->optFields = [
        'magnam',
    ];
    $request->optPretty = false;
    $request->portfolioGid = 'et';

    $response = $sdk->portfolios->deletePortfolio($request);

    if ($response->deletePortfolio200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItemsForPortfolio

Get a list of the items in compact form in a portfolio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetItemsForPortfolioRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItemsForPortfolioRequest();
    $request->limit = 569965;
    $request->offset = 'ullam';
    $request->optFields = [
        'quos',
        'sint',
        'accusantium',
    ];
    $request->optPretty = false;
    $request->portfolioGid = 'mollitia';

    $response = $sdk->portfolios->getItemsForPortfolio($request);

    if ($response->getItemsForPortfolio200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPortfolio

Returns the complete portfolio record for a single portfolio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPortfolioRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPortfolioRequest();
    $request->optFields = [
        'mollitia',
        'ad',
        'eum',
        'dolor',
    ];
    $request->optPretty = false;
    $request->portfolioGid = 'necessitatibus';

    $response = $sdk->portfolios->getPortfolio($request);

    if ($response->getPortfolio200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPortfolios

Returns a list of the portfolios in compact representation that are owned by the current API user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetPortfoliosRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetPortfoliosRequest();
    $request->limit = 141264;
    $request->offset = 'nemo';
    $request->optFields = [
        'iure',
    ];
    $request->optPretty = false;
    $request->owner = 'doloribus';
    $request->workspace = 'debitis';

    $response = $sdk->portfolios->getPortfolios($request);

    if ($response->getPortfolios200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeCustomFieldSettingForPortfolio

Removes a custom field setting from a portfolio.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveCustomFieldSettingForPortfolioRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveCustomFieldSettingForPortfolioRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\RemoveCustomFieldSettingRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveCustomFieldSettingForPortfolioRequest();
    $request->requestBody = new RemoveCustomFieldSettingForPortfolioRequestBody();
    $request->requestBody->data = new RemoveCustomFieldSettingRequest();
    $request->requestBody->data->customField = '14916';
    $request->optPretty = false;
    $request->portfolioGid = 'eius';

    $response = $sdk->portfolios->removeCustomFieldSettingForPortfolio($request);

    if ($response->removeCustomFieldSettingForPortfolio200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeItemForPortfolio

Remove an item from a portfolio.
Returns an empty data block.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveItemForPortfolioRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveItemForPortfolioRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\PortfolioRemoveItemRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveItemForPortfolioRequest();
    $request->requestBody = new RemoveItemForPortfolioRequestBody();
    $request->requestBody->data = new PortfolioRemoveItemRequest();
    $request->requestBody->data->item = '1331';
    $request->optFields = [
        'deleniti',
        'facilis',
        'in',
        'architecto',
    ];
    $request->optPretty = false;
    $request->portfolioGid = 'architecto';

    $response = $sdk->portfolios->removeItemForPortfolio($request);

    if ($response->removeItemForPortfolio200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeMembersForPortfolio

Removes the specified list of users from members of the portfolio.
Returns the updated portfolio record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveMembersForPortfolioRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveMembersForPortfolioRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\RemoveMembersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveMembersForPortfolioRequest();
    $request->requestBody = new RemoveMembersForPortfolioRequestBody();
    $request->requestBody->data = new RemoveMembersRequest();
    $request->requestBody->data->members = '521621,621373';
    $request->optFields = [
        'ullam',
        'expedita',
        'nihil',
        'repellat',
    ];
    $request->optPretty = false;
    $request->portfolioGid = 'quibusdam';

    $response = $sdk->portfolios->removeMembersForPortfolio($request);

    if ($response->removeMembersForPortfolio200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePortfolio

An existing portfolio can be updated by making a PUT request on the URL for
that portfolio. Only the fields provided in the `data` block will be updated;
any unspecified fields will remain unchanged.

Returns the complete updated portfolio record.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePortfolioRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePortfolioRequestBodyInput;
use \OpenAPI\OpenAPI\Models\Shared\PortfolioRequestInput;
use \OpenAPI\OpenAPI\Models\Shared\PortfolioRequestColorEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePortfolioRequest();
    $request->requestBody = new UpdatePortfolioRequestBodyInput();
    $request->requestBody->data = new PortfolioRequestInput();
    $request->requestBody->data->color = PortfolioRequestColorEnum::LIGHT_GREEN;
    $request->requestBody->data->name = 'Bug Portfolio';
    $request->requestBody->data->public = false;
    $request->requestBody->data->workspace = '167589';
    $request->optFields = [
        'saepe',
    ];
    $request->optPretty = false;
    $request->portfolioGid = 'pariatur';

    $response = $sdk->portfolios->updatePortfolio($request);

    if ($response->updatePortfolio200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
