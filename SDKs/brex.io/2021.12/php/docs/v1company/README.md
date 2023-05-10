# v1Company

## Overview

Company Search methods

### Available Operations

* [companyAlternativeSearch](#companyalternativesearch) - Retrieves a list of companies from the KYC API company index
* [companyAnnouncement](#companyannouncement) - Retrieves announcement data
* [companyDeepsearchISIN](#companydeepsearchisin) - Retrieves a list of stock exchange listings
* [companyDeepsearchLEI](#companydeepsearchlei) - Retrieves a list of companies
* [companyDeepsearchName](#companydeepsearchname) - Retrieves a list of companies from the official business register
* [companyDeepsearchNumber](#companydeepsearchnumber) - Retrieves a list of companies from the official business register
* [companyIdAnnouncements](#companyidannouncements) - Retrieves company announcements
* [companyIdDataset](#companyiddataset) - Retrieves company details
* [companyIdSuper](#companyidsuper) - Retrieves structured data extracted from a company document
* [companyMonitorChangeTypesList](#companymonitorchangetypeslist) - Get available ChangeTypes
* [companyMonitorId](#companymonitorid) - Get monitor status for specific company id
* [companyMonitorList](#companymonitorlist) - Retrieves a list of registered monitors
* [companyMonitorRegister](#companymonitorregister) - Register a Company for monitoring
* [companyMonitorUnregister](#companymonitorunregister) - Deactivates an active notification
* [companyNotificationId](#companynotificationid) - Retrieves a list of registered notifications
* [companyNotificationList](#companynotificationlist) - Retrieves a list of registered notifications
* [companyNotificationRegister](#companynotificationregister) - Creates a new notification
* [companyNotificationUnregister](#companynotificationunregister) - Unregister a company from Monitoring
* [companySearchName](#companysearchname) - Retrieves a list of companies from the KYC API company index
* [companySearchNumber](#companysearchnumber) - Retrieves a list of companies from the KYC API company index

## companyAlternativeSearch

KYC API company index lookup by country and mixed parameters. This function requires a country code then a mixture of name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyAlternativeSearchRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompanyAlternativeSearchRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CompanyAlternativeSearchSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyAlternativeSearchRequest();
    $request->requestBody = new CompanyAlternativeSearchRequestBody();
    $request->requestBody->address = '8971 Strosin Wall';
    $request->requestBody->name = 'Bernadette Schmidt';
    $request->requestBody->number = 'porro';
    $request->requestBody->phone = '1-276-615-9751 x4421';
    $request->requestBody->url = 'impedit';
    $request->requestBody->vat = 'cum';
    $request->country = 'esse';

    $requestSecurity = new CompanyAlternativeSearchSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companyAlternativeSearch($request, $requestSecurity);

    if ($response->companyAlternativeSearch200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companyAnnouncement

Request full announcement data identified by announcement id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyAnnouncementRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompanyAnnouncementSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyAnnouncementRequest();
    $request->id = 'ipsum';

    $requestSecurity = new CompanyAnnouncementSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companyAnnouncement($request, $requestSecurity);

    if ($response->companyAnnouncement200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companyDeepsearchISIN

Lookup stock exchange listings identified by an ISIN (International Securities Identification Number) number. Search is forwarded to a provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyDeepsearchISINRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CompanyDeepsearchISINSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyDeepsearchISINRequestBody();
    $request->isin = 'excepturi';

    $requestSecurity = new CompanyDeepsearchISINSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companyDeepsearchISIN($request, $requestSecurity);

    if ($response->companyDeepsearchISIN200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companyDeepsearchLEI

Lookup companies identified by a LEI (Legal Entity Identifier) number. Search is forwarded to a provider.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyDeepsearchLEIRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompanyDeepsearchLEISecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyDeepsearchLEIRequest();
    $request->number = 'aspernatur';
    $request->page = 18789;

    $requestSecurity = new CompanyDeepsearchLEISecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companyDeepsearchLEI($request, $requestSecurity);

    if ($response->companyDeepsearchLEI200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companyDeepsearchName

Search for companies with a certain name. Search is forwarded to the respective business register of the country.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyDeepsearchNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompanyDeepsearchNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyDeepsearchNameRequest();
    $request->country = 'ad';
    $request->name = 'natus';

    $requestSecurity = new CompanyDeepsearchNameSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companyDeepsearchName($request, $requestSecurity);

    if ($response->companyDeepsearchName200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companyDeepsearchNumber

Search for companies with a certain register number. Search is forwarded to the respective business register of the country.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyDeepsearchNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompanyDeepsearchNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyDeepsearchNumberRequest();
    $request->country = 'sed';
    $request->number = 'iste';

    $requestSecurity = new CompanyDeepsearchNumberSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companyDeepsearchNumber($request, $requestSecurity);

    if ($response->companyDeepsearchNumber200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companyIdAnnouncements

Search announcements filed to the business register from a company identified by an id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyIdAnnouncementsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompanyIdAnnouncementsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyIdAnnouncementsRequest();
    $request->data = false;
    $request->id = 'dolor';
    $request->limit = 616934;
    $request->offset = 386489;

    $requestSecurity = new CompanyIdAnnouncementsSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companyIdAnnouncements($request, $requestSecurity);

    if ($response->companyIdAnnouncements200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companyIdDataset

Get company details by id. The level of details is defined by the dataset parameter

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyIdDatasetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompanyIdDatasetDatasetEnum;
use \OpenAPI\OpenAPI\Models\Operations\CompanyIdDatasetLangEnum;
use \OpenAPI\OpenAPI\Models\Operations\CompanyIdDatasetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyIdDatasetRequest();
    $request->checkStockListing = false;
    $request->dataset = CompanyIdDatasetDatasetEnum::REFRESH;
    $request->id = 'saepe';
    $request->lang = CompanyIdDatasetLangEnum::ES;

    $requestSecurity = new CompanyIdDatasetSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companyIdDataset($request, $requestSecurity);

    if ($response->oneapi1v11company1deepsearch1lei1Percent7BnumberPercent7DGetResponses200ContentApplication1jsonSchemaPropertiesCompany !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companyIdSuper

Request company superdata identified by company id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyIdSuperRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompanyIdSuperLangEnum;
use \OpenAPI\OpenAPI\Models\Operations\CompanyIdSuperSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyIdSuperRequest();
    $request->country = 'in';
    $request->id = 'corporis';
    $request->lang = CompanyIdSuperLangEnum::OG;

    $requestSecurity = new CompanyIdSuperSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companyIdSuper($request, $requestSecurity);

    if ($response->companyIdSuper200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companyMonitorChangeTypesList

Get current list of available ChangeTypes to subscribe to

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyMonitorChangeTypesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new CompanyMonitorChangeTypesListSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companyMonitorChangeTypesList($requestSecurity);

    if ($response->companyMonitorChangeTypesList200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companyMonitorId

Query status of registered monitors for a specific company identified by a company id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyMonitorIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompanyMonitorIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyMonitorIdRequest();
    $request->id = 'iure';

    $requestSecurity = new CompanyMonitorIdSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companyMonitorId($request, $requestSecurity);

    if ($response->companyMonitorId200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companyMonitorList

Query list of all registered monitors for logged in user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyMonitorListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new CompanyMonitorListSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companyMonitorList($requestSecurity);

    if ($response->companyMonitorList200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companyMonitorRegister

Add a company to your perpetual monitoring list and register a callback URL to get monitoring alerts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyMonitorRegisterRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompanyMonitorRegisterRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CompanyMonitorRegisterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyMonitorRegisterRequest();
    $request->requestBody = new CompanyMonitorRegisterRequestBody();
    $request->requestBody->callbackUrl = 'saepe';
    $request->requestBody->changeType = 'quidem';
    $request->id = 'architecto';

    $requestSecurity = new CompanyMonitorRegisterSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companyMonitorRegister($request, $requestSecurity);

    if ($response->companyMonitorRegister200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companyMonitorUnregister

Deactivate a previously registered company monitor identified by the notifier id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyMonitorUnregisterRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompanyMonitorUnregisterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyMonitorUnregisterRequest();
    $request->id = 'ipsa';

    $requestSecurity = new CompanyMonitorUnregisterSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companyMonitorUnregister($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companyNotificationId

Query list of registered notifications for a specific company identified by a company id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyNotificationIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompanyNotificationIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyNotificationIdRequest();
    $request->id = 'reiciendis';

    $requestSecurity = new CompanyNotificationIdSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companyNotificationId($request, $requestSecurity);

    if ($response->companyNotificationId200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companyNotificationList

Query list of registered callback URLs for logged in user

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyNotificationListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new CompanyNotificationListSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companyNotificationList($requestSecurity);

    if ($response->companyNotificationList200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companyNotificationRegister

Register a new callback URL to get notifications about companies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyNotificationRegisterRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompanyNotificationRegisterRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CompanyNotificationRegisterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyNotificationRegisterRequest();
    $request->requestBody = new CompanyNotificationRegisterRequestBody();
    $request->requestBody->callbackUrl = 'est';
    $request->id = 'mollitia';

    $requestSecurity = new CompanyNotificationRegisterSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companyNotificationRegister($request, $requestSecurity);

    if ($response->companyNotificationRegister200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companyNotificationUnregister

Deactivate a previously registered company monitor identified by the notifier id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanyNotificationUnregisterRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompanyNotificationUnregisterSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanyNotificationUnregisterRequest();
    $request->id = 'laborum';

    $requestSecurity = new CompanyNotificationUnregisterSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companyNotificationUnregister($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companySearchName

KYC API company index lookup for companies with a certain name in a country.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanySearchNameRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompanySearchNameSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanySearchNameRequest();
    $request->country = 'dolores';
    $request->limit = 210382;
    $request->name = 'corporis';

    $requestSecurity = new CompanySearchNameSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companySearchName($request, $requestSecurity);

    if ($response->companySearchName200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## companySearchNumber

KYC API company index lookup for companies with a certain register number in a country.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CompanySearchNumberRequest;
use \OpenAPI\OpenAPI\Models\Operations\CompanySearchNumberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CompanySearchNumberRequest();
    $request->country = 'explicabo';
    $request->limit = 750686;
    $request->number = 'enim';

    $requestSecurity = new CompanySearchNumberSecurity();
    $requestSecurity->userKey = 'YOUR_API_KEY_HERE';

    $response = $sdk->v1Company->companySearchNumber($request, $requestSecurity);

    if ($response->companySearchNumber200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
