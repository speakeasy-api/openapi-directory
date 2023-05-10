# locale

## Overview

The Locale service allows you to customize your app based on your users' location.

### Available Operations

* [localeGet](#localeget) - Get User Locale
* [localeGetContinents](#localegetcontinents) - List Continents
* [localeGetCountries](#localegetcountries) - List Countries
* [localeGetCountriesEU](#localegetcountrieseu) - List EU Countries
* [localeGetCountriesPhones](#localegetcountriesphones) - List Countries Phone Codes
* [localeGetCurrencies](#localegetcurrencies) - List Currencies
* [localeGetLanguages](#localegetlanguages) - List Languages

## localeGet

Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.

([IP Geolocation by DB-IP](https://db-ip.com))

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LocaleGetSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new LocaleGetSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->locale->localeGet($requestSecurity);

    if ($response->locale !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## localeGetContinents

List of all continents. You can use the locale header to get the data in a supported language.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LocaleGetContinentsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new LocaleGetContinentsSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->locale->localeGetContinents($requestSecurity);

    if ($response->continentList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## localeGetCountries

List of all countries. You can use the locale header to get the data in a supported language.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LocaleGetCountriesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new LocaleGetCountriesSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->locale->localeGetCountries($requestSecurity);

    if ($response->countryList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## localeGetCountriesEU

List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LocaleGetCountriesEUSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new LocaleGetCountriesEUSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->locale->localeGetCountriesEU($requestSecurity);

    if ($response->countryList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## localeGetCountriesPhones

List of all countries phone codes. You can use the locale header to get the data in a supported language.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LocaleGetCountriesPhonesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new LocaleGetCountriesPhonesSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->locale->localeGetCountriesPhones($requestSecurity);

    if ($response->phoneList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## localeGetCurrencies

List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LocaleGetCurrenciesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new LocaleGetCurrenciesSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->locale->localeGetCurrencies($requestSecurity);

    if ($response->currencyList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## localeGetLanguages

List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LocaleGetLanguagesSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new LocaleGetLanguagesSecurity();
    $requestSecurity->jwt = 'YOUR_API_KEY_HERE';
    $requestSecurity->project = 'YOUR_API_KEY_HERE';

    $response = $sdk->locale->localeGetLanguages($requestSecurity);

    if ($response->languageList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
