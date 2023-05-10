# syncFlowPreferences

## Overview

Configure preferences for any given sync for commerce company using sync flow.

### Available Operations

* [getConfigTextSyncFlow](#getconfigtextsyncflow) - Retrieve preferences for text fields on Sync Flow
* [getSyncFlowUrl](#getsyncflowurl) - Retrieve sync flow url
* [getVisibleAccounts](#getvisibleaccounts) - List visible accounts
* [updateConfigTextSyncFlow](#updateconfigtextsyncflow) - Update preferences for text fields on sync flow
* [updateVisibleAccountsSyncFlow](#updatevisibleaccountssyncflow) - Update the visible accounts on Sync Flow

## getConfigTextSyncFlow

To enable retrieval of preferences set for the text fields on Sync Flow.

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
    $response = $sdk->syncFlowPreferences->getConfigTextSyncFlow();

    if ($response->localizationInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSyncFlowUrl

Get a URL for Sync Flow including a one time passcode.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSyncFlowUrlRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSyncFlowUrlRequest();
    $request->accountingKey = 'quibusdam';
    $request->commerceKey = 'sed';
    $request->merchantIdentifier = 'saepe';

    $response = $sdk->syncFlowPreferences->getSyncFlowUrl($request);

    if ($response->syncFlowUrl !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVisibleAccounts

Enable retrieval for accounts which are visible on sync flow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetVisibleAccountsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVisibleAccountsRequest();
    $request->clientId = 'd028921c-ddc6-4926-81fb-576b0d5f0d30';
    $request->platformKey = 'c5fbb258-7053-4202-873d-5fe9b90c2890';

    $response = $sdk->syncFlowPreferences->getVisibleAccounts($request);

    if ($response->visibleAccounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateConfigTextSyncFlow

To enable update of preferences set for the text fields on sync flow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\Localization;

$sdk = SDK::builder()
    ->build();

try {
    $request = [
        'rerum' => new Localization(),
        'adipisci' => new Localization(),
        'asperiores' => new Localization(),
    ]

    $response = $sdk->syncFlowPreferences->updateConfigTextSyncFlow($request);

    if ($response->localizationInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateVisibleAccountsSyncFlow

To enable update of accounts visible preferences set on Sync Flow.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateVisibleAccountsSyncFlowRequest;
use \OpenAPI\OpenAPI\Models\Shared\VisibleAccounts;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateVisibleAccountsSyncFlowRequest();
    $request->visibleAccounts = new VisibleAccounts();
    $request->visibleAccounts->visibleAccounts = [
        'modi',
        'iste',
        'dolorum',
        'deleniti',
    ];
    $request->commerceKey = 'd9cbf486-3332-43f9-b77f-3a4100674ebf';

    $response = $sdk->syncFlowPreferences->updateVisibleAccountsSyncFlow($request);

    if ($response->visibleAccounts !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
