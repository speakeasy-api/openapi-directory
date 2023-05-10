# domains

## Overview

Manage your domains.

### Available Operations

* [configureDomain](#configuredomain) - Edit domain name renew state
* [editNameServers](#editnameservers) - Edit domain name servers
* [getDomain](#getdomain) - Details of a domain
* [getDomains](#getdomains) - Overviews of domains
* [register](#register) - Register a domain
* [transfer](#transfer) - Transfer a domain

## configureDomain

Allowed if can_toggle_renew is true on the domain detail:<br /><ul><li>If there are no unpaid invoices for the domain name anymore.</li><li>If the renewal won't start within 1 month.</li></ul>
Allowed if the requesting user has the finance role.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfigureDomainRequest;
use \OpenAPI\OpenAPI\Models\Shared\EditDomainWillRenewRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfigureDomainRequest();
    $request->editDomainWillRenewRequest = new EditDomainWillRenewRequest();
    $request->editDomainWillRenewRequest->willRenew = false;
    $request->domainNamePathParameter = 'commodi';
    $request->domainNameQueryParameter = 'quam';

    $response = $sdk->domains->configureDomain($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## editNameServers

Edit domain name servers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EditNameServersRequest;
use \OpenAPI\OpenAPI\Models\Shared\EditNameServers;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EditNameServersRequest();
    $request->editNameServers = new EditNameServers();
    $request->editNameServers->domainName = 'molestiae';
    $request->editNameServers->nameServers = [
        'error',
    ];
    $request->domainNamePathParameter = 'quia';
    $request->domainNameQueryParameter = 'quis';

    $response = $sdk->domains->editNameServers($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomain

Details of a domain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainRequest();
    $request->domainNamePathParameter = 'vitae';
    $request->domainNameQueryParameter = 'laborum';

    $response = $sdk->domains->getDomain($request);

    if ($response->domainDetail !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDomains

Overviews of domains

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetDomainsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDomainsRequest();
    $request->skip = 656330;
    $request->take = 317202;

    $response = $sdk->domains->getDomains($request);

    if ($response->domains !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## register

Registers an available domain.<br />Domain names with extension '.ca' are only available for registrants with country code 'CA'.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RegisterDomain;
use \OpenAPI\OpenAPI\Models\Shared\RegistrantInput;
use \OpenAPI\OpenAPI\Models\Shared\ExtraField;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RegisterDomain();
    $request->domainName = 'odit';
    $request->nameServers = [
        'sequi',
        'tenetur',
        'ipsam',
        'id',
    ];
    $request->registrant = new RegistrantInput();
    $request->registrant->address = '006 Pacocha Cliffs';
    $request->registrant->city = 'Weymouth Town';
    $request->registrant->companyName = 'vero';
    $request->registrant->countryCode = 'KH';
    $request->registrant->email = 'Whitney.Bednar@yahoo.com';
    $request->registrant->enterpriseNumber = 'cum';
    $request->registrant->extraFields = [
        new ExtraField(),
    ];
    $request->registrant->fax = 'doloremque';
    $request->registrant->firstName = 'Iliana';
    $request->registrant->languageCode = 'ut';
    $request->registrant->lastName = 'Wuckert';
    $request->registrant->phone = '(424) 263-8490';
    $request->registrant->postalCode = '65582';

    $response = $sdk->domains->register($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transfer

Transfers a domain with a transfer authorization code.<br />Domain names with extension '.ca' are only available for registrants with country code 'CA'.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\TransferDomain;
use \OpenAPI\OpenAPI\Models\Shared\RegistrantInput;
use \OpenAPI\OpenAPI\Models\Shared\ExtraField;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferDomain();
    $request->authCode = 'praesentium';
    $request->domainName = 'rem';
    $request->nameServers = [
        'quasi',
        'repudiandae',
        'sint',
        'veritatis',
    ];
    $request->registrant = new RegistrantInput();
    $request->registrant->address = '230 Spinka Courts';
    $request->registrant->city = 'Rauhaven';
    $request->registrant->companyName = 'labore';
    $request->registrant->countryCode = 'EH';
    $request->registrant->email = 'Grant.McGlynn@gmail.com';
    $request->registrant->enterpriseNumber = 'magni';
    $request->registrant->extraFields = [
        new ExtraField(),
        new ExtraField(),
        new ExtraField(),
        new ExtraField(),
    ];
    $request->registrant->fax = 'ipsam';
    $request->registrant->firstName = 'Abigale';
    $request->registrant->languageCode = 'fugit';
    $request->registrant->lastName = 'Pagac';
    $request->registrant->phone = '(477) 494-2753 x5856';
    $request->registrant->postalCode = '89644';

    $response = $sdk->domains->transfer($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
