# mailZones

## Overview

Manage your mail zones.

### Available Operations

* [configureAlias](#configurealias) - Configure a alias
* [configureAntiSpam](#configureantispam) - Configure anti-spam for mail zone
* [configureSmtpDomain](#configuresmtpdomain) - Configure an extra smtp domain
* [createAlias](#createalias) - Create a new alias
* [createCatchAll](#createcatchall) - Create a catch-all on the mail zone
* [createSmtpDomain](#createsmtpdomain) - Create an extra smtp domain
* [deleteAlias](#deletealias) - Delete a alias
* [deleteCatchAll](#deletecatchall) - Delete a catch-all on the mail zone
* [deleteSmtpDomain](#deletesmtpdomain) - Delete an extra smtp domain
* [getMailZone](#getmailzone) - Get the mail zone.

## configureAlias

Configure a alias

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAliasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureAliasRequest();
    $request->updateAliasRequest = new UpdateAliasRequest();
    $request->updateAliasRequest->destinations = [
        'blanditiis',
    ];
    $request->domainNamePathParameter = 'error';
    $request->domainNameQueryParameter = 'eaque';
    $request->emailAddressPathParameter = 'occaecati';
    $request->emailAddressQueryParameter = 'rerum';

    $response = $sdk->mailZones->configureAlias($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## configureAntiSpam

Configure anti-spam for mail zone

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureAntiSpamRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateAntiSpamRequest;
use \OpenAPI\OpenAPI\Models\Shared\AntiSpamTypesEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureAntiSpamRequest();
    $request->updateAntiSpamRequest = new UpdateAntiSpamRequest();
    $request->updateAntiSpamRequest->type = AntiSpamTypesEnum::NONE;
    $request->domainNamePathParameter = 'asperiores';
    $request->domainNameQueryParameter = 'earum';

    $response = $sdk->mailZones->configureAntiSpam($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## configureSmtpDomain

Configure an extra smtp domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureSmtpDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdateSmtpDomainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureSmtpDomainRequest();
    $request->updateSmtpDomainRequest = new UpdateSmtpDomainRequest();
    $request->updateSmtpDomainRequest->enabled = false;
    $request->domainNamePathParameter = 'modi';
    $request->domainNameQueryParameter = 'iste';
    $request->hostname = 'rash-mallard.org';

    $response = $sdk->mailZones->configureSmtpDomain($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createAlias

Create a new alias

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateAliasRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateAliasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateAliasRequest();
    $request->createAliasRequest = new CreateAliasRequest();
    $request->createAliasRequest->destinations = [
        'nobis',
        'libero',
        'delectus',
    ];
    $request->createAliasRequest->emailAddress = 'quaerat';
    $request->domainNamePathParameter = 'quos';
    $request->domainNameQueryParameter = 'aliquid';

    $response = $sdk->mailZones->createAlias($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createCatchAll

Create a catch-all on the mail zone

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateCatchAllRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateCatchAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateCatchAllRequest();
    $request->createCatchAllRequest = new CreateCatchAllRequest();
    $request->createCatchAllRequest->emailAddress = 'dolorem';
    $request->domainNamePathParameter = 'dolorem';
    $request->domainNameQueryParameter = 'dolor';

    $response = $sdk->mailZones->createCatchAll($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSmtpDomain

Create an extra smtp domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CreateSmtpDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\CreateSmtpDomainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSmtpDomainRequest();
    $request->createSmtpDomainRequest = new CreateSmtpDomainRequest();
    $request->createSmtpDomainRequest->hostname = 'dental-cravat.org';
    $request->domainNamePathParameter = 'excepturi';
    $request->domainNameQueryParameter = 'cum';

    $response = $sdk->mailZones->createSmtpDomain($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAlias

Delete a alias

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAliasRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAliasRequest();
    $request->domainNamePathParameter = 'voluptate';
    $request->domainNameQueryParameter = 'dignissimos';
    $request->emailAddressPathParameter = 'reiciendis';
    $request->emailAddressQueryParameter = 'amet';

    $response = $sdk->mailZones->deleteAlias($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteCatchAll

Delete a catch-all on the mail zone

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteCatchAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteCatchAllRequest();
    $request->domainNamePathParameter = 'dolorum';
    $request->domainNameQueryParameter = 'numquam';
    $request->emailAddressPathParameter = 'veritatis';
    $request->emailAddressQueryParameter = 'ipsa';

    $response = $sdk->mailZones->deleteCatchAll($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSmtpDomain

Delete an extra smtp domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSmtpDomainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSmtpDomainRequest();
    $request->domainNamePathParameter = 'ipsa';
    $request->domainNameQueryParameter = 'iure';
    $request->hostname = 'likely-epauliere.org';

    $response = $sdk->mailZones->deleteSmtpDomain($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMailZone

Get the mail zone.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMailZoneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMailZoneRequest();
    $request->domainNamePathParameter = 'quidem';
    $request->domainNameQueryParameter = 'voluptatibus';

    $response = $sdk->mailZones->getMailZone($request);

    if ($response->mailZone !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
