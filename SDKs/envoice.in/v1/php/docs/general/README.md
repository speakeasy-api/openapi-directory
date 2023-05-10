# general

### Available Operations

* [generalApiCountries](#generalapicountries) - Return all of the platform supported countries
* [generalApiCurrencies](#generalapicurrencies) - Return all of the platform supported currencies
* [generalApiDateFormats](#generalapidateformats) - Return all of the platform supported Date Formats
* [generalApiUiLanguages](#generalapiuilanguages) - Return all of the platform supported UI languages

## generalApiCountries

Return all of the platform supported countries

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GeneralApiCountriesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GeneralApiCountriesRequest();
    $request->xAuthKey = 'et';
    $request->xAuthSecret = 'excepturi';

    $response = $sdk->general->generalApiCountries($request);

    if ($response->countryDetailsApiModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generalApiCurrencies

Return all of the platform supported currencies

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GeneralApiCurrenciesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GeneralApiCurrenciesRequest();
    $request->xAuthKey = 'ullam';
    $request->xAuthSecret = 'provident';

    $response = $sdk->general->generalApiCurrencies($request);

    if ($response->currencyDetailsApiModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generalApiDateFormats

Return all of the platform supported Date Formats

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GeneralApiDateFormatsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GeneralApiDateFormatsRequest();
    $request->xAuthKey = 'quos';
    $request->xAuthSecret = 'sint';

    $response = $sdk->general->generalApiDateFormats($request);

    if ($response->generalApiDateFormats200ApplicationJSONStrings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## generalApiUiLanguages

Return all of the platform supported UI languages

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GeneralApiUiLanguagesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GeneralApiUiLanguagesRequest();
    $request->xAuthKey = 'accusantium';
    $request->xAuthSecret = 'mollitia';

    $response = $sdk->general->generalApiUiLanguages($request);

    if ($response->uiLanguageDetailsApiModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
