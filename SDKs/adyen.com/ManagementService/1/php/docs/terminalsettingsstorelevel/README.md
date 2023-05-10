# terminalSettingsStoreLevel

### Available Operations

* [getMerchantsMerchantIdStoresReferenceTerminalLogos](#getmerchantsmerchantidstoresreferenceterminallogos) - Get the terminal logo
* [getMerchantsMerchantIdStoresReferenceTerminalSettings](#getmerchantsmerchantidstoresreferenceterminalsettings) - Get terminal settings
* [getStoresStoreIdTerminalLogos](#getstoresstoreidterminallogos) - Get the terminal logo
* [getStoresStoreIdTerminalSettings](#getstoresstoreidterminalsettings) - Get terminal settings
* [patchMerchantsMerchantIdStoresReferenceTerminalLogos](#patchmerchantsmerchantidstoresreferenceterminallogos) - Update the terminal logo
* [patchMerchantsMerchantIdStoresReferenceTerminalSettings](#patchmerchantsmerchantidstoresreferenceterminalsettings) - Update terminal settings
* [patchStoresStoreIdTerminalLogos](#patchstoresstoreidterminallogos) - Update the terminal logo
* [patchStoresStoreIdTerminalSettings](#patchstoresstoreidterminalsettings) - Update terminal settings

## getMerchantsMerchantIdStoresReferenceTerminalLogos

Returns the logo that is configured for a specific payment terminal model at the store identified in the path. 
The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. 
This logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdStoresReferenceTerminalLogosRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdStoresReferenceTerminalLogosSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdStoresReferenceTerminalLogosRequest();
    $request->merchantId = 'ratione';
    $request->model = 'explicabo';
    $request->reference = 'saepe';

    $requestSecurity = new GetMerchantsMerchantIdStoresReferenceTerminalLogosSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsStoreLevel->getMerchantsMerchantIdStoresReferenceTerminalLogos($request, $requestSecurity);

    if ($response->logo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMerchantsMerchantIdStoresReferenceTerminalSettings

Returns the payment terminal settings that are configured for the store identified in the path. These settings apply to all terminals under the store unless different values are configured for an individual terminal.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdStoresReferenceTerminalSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdStoresReferenceTerminalSettingsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdStoresReferenceTerminalSettingsRequest();
    $request->merchantId = 'occaecati';
    $request->reference = 'atque';

    $requestSecurity = new GetMerchantsMerchantIdStoresReferenceTerminalSettingsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsStoreLevel->getMerchantsMerchantIdStoresReferenceTerminalSettings($request, $requestSecurity);

    if ($response->terminalSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStoresStoreIdTerminalLogos

Returns the logo that is configured for a specific payment terminal model at the store identified in the path. 
The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. 
This logo applies to all terminals of that model under the store unless a different logo is configured for an individual terminal.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStoresStoreIdTerminalLogosRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStoresStoreIdTerminalLogosSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoresStoreIdTerminalLogosRequest();
    $request->model = 'et';
    $request->storeId = 'esse';

    $requestSecurity = new GetStoresStoreIdTerminalLogosSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsStoreLevel->getStoresStoreIdTerminalLogos($request, $requestSecurity);

    if ($response->logo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getStoresStoreIdTerminalSettings

Returns the payment terminal settings that are configured for the store identified in the path. These settings apply to all terminals under the store unless different values are configured for an individual terminal.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetStoresStoreIdTerminalSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetStoresStoreIdTerminalSettingsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetStoresStoreIdTerminalSettingsRequest();
    $request->storeId = 'eveniet';

    $requestSecurity = new GetStoresStoreIdTerminalSettingsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsStoreLevel->getStoresStoreIdTerminalSettings($request, $requestSecurity);

    if ($response->terminalSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchMerchantsMerchantIdStoresReferenceTerminalLogos

Updates the logo that is configured for a specific payment terminal model at the store identified in the path. You can update the logo for only one terminal model at a time.
This logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal. 

* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from a higher level (merchant or company account), specify an empty logo value.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdStoresReferenceTerminalLogosRequest;
use \OpenAPI\OpenAPI\Models\Shared\Logo;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdStoresReferenceTerminalLogosSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchMerchantsMerchantIdStoresReferenceTerminalLogosRequest();
    $request->logo = new Logo();
    $request->logo->data = 'accusamus';
    $request->merchantId = 'veritatis';
    $request->model = 'esse';
    $request->reference = 'quod';

    $requestSecurity = new PatchMerchantsMerchantIdStoresReferenceTerminalLogosSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsStoreLevel->patchMerchantsMerchantIdStoresReferenceTerminalLogos($request, $requestSecurity);

    if ($response->logo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchMerchantsMerchantIdStoresReferenceTerminalSettings

Updates payment terminal settings for the store identified in the path. These settings apply to all terminals under the store, unless different values are configured for an individual terminal.

* To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
* To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
* Objects that are not included in the request are not updated.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdStoresReferenceTerminalSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TerminalSettings;
use \OpenAPI\OpenAPI\Models\Shared\CardholderReceipt;
use \OpenAPI\OpenAPI\Models\Shared\Connectivity;
use \OpenAPI\OpenAPI\Models\Shared\ConnectivitySimcardStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Gratuity;
use \OpenAPI\OpenAPI\Models\Shared\Hardware;
use \OpenAPI\OpenAPI\Models\Shared\Nexo;
use \OpenAPI\OpenAPI\Models\Shared\NotificationUrl;
use \OpenAPI\OpenAPI\Models\Shared\Url;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\EventUrl;
use \OpenAPI\OpenAPI\Models\Shared\OfflineProcessing;
use \OpenAPI\OpenAPI\Models\Shared\MinorUnitsMonetaryValue;
use \OpenAPI\OpenAPI\Models\Shared\Opi;
use \OpenAPI\OpenAPI\Models\Shared\Passcodes;
use \OpenAPI\OpenAPI\Models\Shared\PayAtTable;
use \OpenAPI\OpenAPI\Models\Shared\PayAtTableAuthenticationMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\Payment;
use \OpenAPI\OpenAPI\Models\Shared\ReceiptOptions;
use \OpenAPI\OpenAPI\Models\Shared\ReceiptPrinting;
use \OpenAPI\OpenAPI\Models\Shared\Signature;
use \OpenAPI\OpenAPI\Models\Shared\Standalone;
use \OpenAPI\OpenAPI\Models\Shared\Surcharge;
use \OpenAPI\OpenAPI\Models\Shared\Configuration;
use \OpenAPI\OpenAPI\Models\Shared\Currency;
use \OpenAPI\OpenAPI\Models\Shared\Timeouts;
use \OpenAPI\OpenAPI\Models\Shared\WifiProfiles;
use \OpenAPI\OpenAPI\Models\Shared\Profile;
use \OpenAPI\OpenAPI\Models\Shared\File;
use \OpenAPI\OpenAPI\Models\Shared\Settings;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdStoresReferenceTerminalSettingsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchMerchantsMerchantIdStoresReferenceTerminalSettingsRequest();
    $request->terminalSettings = new TerminalSettings();
    $request->terminalSettings->cardholderReceipt = new CardholderReceipt();
    $request->terminalSettings->cardholderReceipt->headerForAuthorizedReceipt = 'nam';
    $request->terminalSettings->connectivity = new Connectivity();
    $request->terminalSettings->connectivity->simcardStatus = ConnectivitySimcardStatusEnum::INVENTORY;
    $request->terminalSettings->gratuities = [
        new Gratuity(),
        new Gratuity(),
    ];
    $request->terminalSettings->hardware = new Hardware();
    $request->terminalSettings->hardware->displayMaximumBackLight = 93459;
    $request->terminalSettings->nexo = new Nexo();
    $request->terminalSettings->nexo->displayUrls = new NotificationUrl();
    $request->terminalSettings->nexo->displayUrls->localUrls = [
        new Url(),
        new Url(),
        new Url(),
        new Url(),
    ];
    $request->terminalSettings->nexo->displayUrls->publicUrls = [
        new Url(),
        new Url(),
    ];
    $request->terminalSettings->nexo->encryptionKey = new Key();
    $request->terminalSettings->nexo->encryptionKey->identifier = 'harum';
    $request->terminalSettings->nexo->encryptionKey->passphrase = 'molestiae';
    $request->terminalSettings->nexo->encryptionKey->version = 699622;
    $request->terminalSettings->nexo->eventUrls = new EventUrl();
    $request->terminalSettings->nexo->eventUrls->eventLocalUrls = [
        new Url(),
        new Url(),
        new Url(),
    ];
    $request->terminalSettings->nexo->eventUrls->eventPublicUrls = [
        new Url(),
        new Url(),
    ];
    $request->terminalSettings->nexo->nexoEventUrls = [
        'eligendi',
        'sit',
        'culpa',
    ];
    $request->terminalSettings->offlineProcessing = new OfflineProcessing();
    $request->terminalSettings->offlineProcessing->chipFloorLimit = 731398;
    $request->terminalSettings->offlineProcessing->offlineSwipeLimits = [
        new MinorUnitsMonetaryValue(),
    ];
    $request->terminalSettings->opi = new Opi();
    $request->terminalSettings->opi->enablePayAtTable = false;
    $request->terminalSettings->opi->payAtTableStoreNumber = 'cumque';
    $request->terminalSettings->opi->payAtTableURL = 'consequuntur';
    $request->terminalSettings->passcodes = new Passcodes();
    $request->terminalSettings->passcodes->adminMenuPin = 'consequatur';
    $request->terminalSettings->passcodes->refundPin = 'minus';
    $request->terminalSettings->passcodes->screenLockPin = 'quaerat';
    $request->terminalSettings->passcodes->txMenuPin = 'sapiente';
    $request->terminalSettings->payAtTable = new PayAtTable();
    $request->terminalSettings->payAtTable->authenticationMethod = PayAtTableAuthenticationMethodEnum::MAGSWIPE;
    $request->terminalSettings->payAtTable->enablePayAtTable = false;
    $request->terminalSettings->payment = new Payment();
    $request->terminalSettings->payment->hideMinorUnitsInCurrencies = [
        'blanditiis',
        'provident',
    ];
    $request->terminalSettings->receiptOptions = new ReceiptOptions();
    $request->terminalSettings->receiptOptions->logo = 'a';
    $request->terminalSettings->receiptOptions->qrCodeData = 'nulla';
    $request->terminalSettings->receiptPrinting = new ReceiptPrinting();
    $request->terminalSettings->receiptPrinting->merchantApproved = false;
    $request->terminalSettings->receiptPrinting->merchantCancelled = false;
    $request->terminalSettings->receiptPrinting->merchantCaptureApproved = false;
    $request->terminalSettings->receiptPrinting->merchantCaptureRefused = false;
    $request->terminalSettings->receiptPrinting->merchantRefundApproved = false;
    $request->terminalSettings->receiptPrinting->merchantRefundRefused = false;
    $request->terminalSettings->receiptPrinting->merchantRefused = false;
    $request->terminalSettings->receiptPrinting->merchantVoid = false;
    $request->terminalSettings->receiptPrinting->shopperApproved = false;
    $request->terminalSettings->receiptPrinting->shopperCancelled = false;
    $request->terminalSettings->receiptPrinting->shopperCaptureApproved = false;
    $request->terminalSettings->receiptPrinting->shopperCaptureRefused = false;
    $request->terminalSettings->receiptPrinting->shopperRefundApproved = false;
    $request->terminalSettings->receiptPrinting->shopperRefundRefused = false;
    $request->terminalSettings->receiptPrinting->shopperRefused = false;
    $request->terminalSettings->receiptPrinting->shopperVoid = false;
    $request->terminalSettings->signature = new Signature();
    $request->terminalSettings->signature->askSignatureOnScreen = false;
    $request->terminalSettings->signature->deviceName = 'quas';
    $request->terminalSettings->signature->deviceSlogan = 'esse';
    $request->terminalSettings->signature->skipSignature = false;
    $request->terminalSettings->standalone = new Standalone();
    $request->terminalSettings->standalone->currencyCode = 'quasi';
    $request->terminalSettings->standalone->enableStandalone = false;
    $request->terminalSettings->surcharge = new Surcharge();
    $request->terminalSettings->surcharge->askConfirmation = false;
    $request->terminalSettings->surcharge->configurations = [
        new Configuration(),
        new Configuration(),
        new Configuration(),
        new Configuration(),
    ];
    $request->terminalSettings->timeouts = new Timeouts();
    $request->terminalSettings->timeouts->fromActiveToSleep = 621679;
    $request->terminalSettings->wifiProfiles = new WifiProfiles();
    $request->terminalSettings->wifiProfiles->profiles = [
        new Profile(),
        new Profile(),
        new Profile(),
    ];
    $request->terminalSettings->wifiProfiles->settings = new Settings();
    $request->terminalSettings->wifiProfiles->settings->band = 'pariatur';
    $request->terminalSettings->wifiProfiles->settings->roaming = false;
    $request->terminalSettings->wifiProfiles->settings->timeout = 820767;
    $request->merchantId = 'quia';
    $request->reference = 'eveniet';

    $requestSecurity = new PatchMerchantsMerchantIdStoresReferenceTerminalSettingsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsStoreLevel->patchMerchantsMerchantIdStoresReferenceTerminalSettings($request, $requestSecurity);

    if ($response->terminalSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchStoresStoreIdTerminalLogos

Updates the logo that is configured for a specific payment terminal model at the store identified in the path. You can update the logo for only one terminal model at a time.
This logo applies to all terminals of the specified model under the store, unless a different logo is configured for an individual terminal. 

* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from a higher level (merchant or company account), specify an empty logo value.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchStoresStoreIdTerminalLogosRequest;
use \OpenAPI\OpenAPI\Models\Shared\Logo;
use \OpenAPI\OpenAPI\Models\Operations\PatchStoresStoreIdTerminalLogosSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchStoresStoreIdTerminalLogosRequest();
    $request->logo = new Logo();
    $request->logo->data = 'asperiores';
    $request->model = 'facere';
    $request->storeId = 'veritatis';

    $requestSecurity = new PatchStoresStoreIdTerminalLogosSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsStoreLevel->patchStoresStoreIdTerminalLogos($request, $requestSecurity);

    if ($response->logo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchStoresStoreIdTerminalSettings

Updates payment terminal settings for the store identified in the path. These settings apply to all terminals under the store, unless different values are configured for an individual terminal.

* To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
* To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
* Objects that are not included in the request are not updated.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

For [sensitive terminal settings](https://docs.adyen.com/point-of-sale/automating-terminal-management/configure-terminals-api#sensitive-terminal-settings), your API credential must have the following role:
* Management API—Terminal settings Advanced read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchStoresStoreIdTerminalSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\TerminalSettings;
use \OpenAPI\OpenAPI\Models\Shared\CardholderReceipt;
use \OpenAPI\OpenAPI\Models\Shared\Connectivity;
use \OpenAPI\OpenAPI\Models\Shared\ConnectivitySimcardStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\Gratuity;
use \OpenAPI\OpenAPI\Models\Shared\Hardware;
use \OpenAPI\OpenAPI\Models\Shared\Nexo;
use \OpenAPI\OpenAPI\Models\Shared\NotificationUrl;
use \OpenAPI\OpenAPI\Models\Shared\Url;
use \OpenAPI\OpenAPI\Models\Shared\Key;
use \OpenAPI\OpenAPI\Models\Shared\EventUrl;
use \OpenAPI\OpenAPI\Models\Shared\OfflineProcessing;
use \OpenAPI\OpenAPI\Models\Shared\MinorUnitsMonetaryValue;
use \OpenAPI\OpenAPI\Models\Shared\Opi;
use \OpenAPI\OpenAPI\Models\Shared\Passcodes;
use \OpenAPI\OpenAPI\Models\Shared\PayAtTable;
use \OpenAPI\OpenAPI\Models\Shared\PayAtTableAuthenticationMethodEnum;
use \OpenAPI\OpenAPI\Models\Shared\Payment;
use \OpenAPI\OpenAPI\Models\Shared\ReceiptOptions;
use \OpenAPI\OpenAPI\Models\Shared\ReceiptPrinting;
use \OpenAPI\OpenAPI\Models\Shared\Signature;
use \OpenAPI\OpenAPI\Models\Shared\Standalone;
use \OpenAPI\OpenAPI\Models\Shared\Surcharge;
use \OpenAPI\OpenAPI\Models\Shared\Configuration;
use \OpenAPI\OpenAPI\Models\Shared\Currency;
use \OpenAPI\OpenAPI\Models\Shared\Timeouts;
use \OpenAPI\OpenAPI\Models\Shared\WifiProfiles;
use \OpenAPI\OpenAPI\Models\Shared\Profile;
use \OpenAPI\OpenAPI\Models\Shared\File;
use \OpenAPI\OpenAPI\Models\Shared\Settings;
use \OpenAPI\OpenAPI\Models\Operations\PatchStoresStoreIdTerminalSettingsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchStoresStoreIdTerminalSettingsRequest();
    $request->terminalSettings = new TerminalSettings();
    $request->terminalSettings->cardholderReceipt = new CardholderReceipt();
    $request->terminalSettings->cardholderReceipt->headerForAuthorizedReceipt = 'consequuntur';
    $request->terminalSettings->connectivity = new Connectivity();
    $request->terminalSettings->connectivity->simcardStatus = ConnectivitySimcardStatusEnum::ACTIVATED;
    $request->terminalSettings->gratuities = [
        new Gratuity(),
        new Gratuity(),
        new Gratuity(),
    ];
    $request->terminalSettings->hardware = new Hardware();
    $request->terminalSettings->hardware->displayMaximumBackLight = 633608;
    $request->terminalSettings->nexo = new Nexo();
    $request->terminalSettings->nexo->displayUrls = new NotificationUrl();
    $request->terminalSettings->nexo->displayUrls->localUrls = [
        new Url(),
        new Url(),
    ];
    $request->terminalSettings->nexo->displayUrls->publicUrls = [
        new Url(),
        new Url(),
        new Url(),
        new Url(),
    ];
    $request->terminalSettings->nexo->encryptionKey = new Key();
    $request->terminalSettings->nexo->encryptionKey->identifier = 'quae';
    $request->terminalSettings->nexo->encryptionKey->passphrase = 'earum';
    $request->terminalSettings->nexo->encryptionKey->version = 424032;
    $request->terminalSettings->nexo->eventUrls = new EventUrl();
    $request->terminalSettings->nexo->eventUrls->eventLocalUrls = [
        new Url(),
        new Url(),
    ];
    $request->terminalSettings->nexo->eventUrls->eventPublicUrls = [
        new Url(),
        new Url(),
    ];
    $request->terminalSettings->nexo->nexoEventUrls = [
        'illum',
        'soluta',
        'accusantium',
    ];
    $request->terminalSettings->offlineProcessing = new OfflineProcessing();
    $request->terminalSettings->offlineProcessing->chipFloorLimit = 306986;
    $request->terminalSettings->offlineProcessing->offlineSwipeLimits = [
        new MinorUnitsMonetaryValue(),
        new MinorUnitsMonetaryValue(),
        new MinorUnitsMonetaryValue(),
        new MinorUnitsMonetaryValue(),
    ];
    $request->terminalSettings->opi = new Opi();
    $request->terminalSettings->opi->enablePayAtTable = false;
    $request->terminalSettings->opi->payAtTableStoreNumber = 'dicta';
    $request->terminalSettings->opi->payAtTableURL = 'ullam';
    $request->terminalSettings->passcodes = new Passcodes();
    $request->terminalSettings->passcodes->adminMenuPin = 'reprehenderit';
    $request->terminalSettings->passcodes->refundPin = 'ullam';
    $request->terminalSettings->passcodes->screenLockPin = 'nisi';
    $request->terminalSettings->passcodes->txMenuPin = 'aut';
    $request->terminalSettings->payAtTable = new PayAtTable();
    $request->terminalSettings->payAtTable->authenticationMethod = PayAtTableAuthenticationMethodEnum::MKE;
    $request->terminalSettings->payAtTable->enablePayAtTable = false;
    $request->terminalSettings->payment = new Payment();
    $request->terminalSettings->payment->hideMinorUnitsInCurrencies = [
        'quibusdam',
    ];
    $request->terminalSettings->receiptOptions = new ReceiptOptions();
    $request->terminalSettings->receiptOptions->logo = 'ex';
    $request->terminalSettings->receiptOptions->qrCodeData = 'deleniti';
    $request->terminalSettings->receiptPrinting = new ReceiptPrinting();
    $request->terminalSettings->receiptPrinting->merchantApproved = false;
    $request->terminalSettings->receiptPrinting->merchantCancelled = false;
    $request->terminalSettings->receiptPrinting->merchantCaptureApproved = false;
    $request->terminalSettings->receiptPrinting->merchantCaptureRefused = false;
    $request->terminalSettings->receiptPrinting->merchantRefundApproved = false;
    $request->terminalSettings->receiptPrinting->merchantRefundRefused = false;
    $request->terminalSettings->receiptPrinting->merchantRefused = false;
    $request->terminalSettings->receiptPrinting->merchantVoid = false;
    $request->terminalSettings->receiptPrinting->shopperApproved = false;
    $request->terminalSettings->receiptPrinting->shopperCancelled = false;
    $request->terminalSettings->receiptPrinting->shopperCaptureApproved = false;
    $request->terminalSettings->receiptPrinting->shopperCaptureRefused = false;
    $request->terminalSettings->receiptPrinting->shopperRefundApproved = false;
    $request->terminalSettings->receiptPrinting->shopperRefundRefused = false;
    $request->terminalSettings->receiptPrinting->shopperRefused = false;
    $request->terminalSettings->receiptPrinting->shopperVoid = false;
    $request->terminalSettings->signature = new Signature();
    $request->terminalSettings->signature->askSignatureOnScreen = false;
    $request->terminalSettings->signature->deviceName = 'itaque';
    $request->terminalSettings->signature->deviceSlogan = 'dolorum';
    $request->terminalSettings->signature->skipSignature = false;
    $request->terminalSettings->standalone = new Standalone();
    $request->terminalSettings->standalone->currencyCode = 'architecto';
    $request->terminalSettings->standalone->enableStandalone = false;
    $request->terminalSettings->surcharge = new Surcharge();
    $request->terminalSettings->surcharge->askConfirmation = false;
    $request->terminalSettings->surcharge->configurations = [
        new Configuration(),
        new Configuration(),
        new Configuration(),
    ];
    $request->terminalSettings->timeouts = new Timeouts();
    $request->terminalSettings->timeouts->fromActiveToSleep = 945302;
    $request->terminalSettings->wifiProfiles = new WifiProfiles();
    $request->terminalSettings->wifiProfiles->profiles = [
        new Profile(),
    ];
    $request->terminalSettings->wifiProfiles->settings = new Settings();
    $request->terminalSettings->wifiProfiles->settings->band = 'at';
    $request->terminalSettings->wifiProfiles->settings->roaming = false;
    $request->terminalSettings->wifiProfiles->settings->timeout = 92027;
    $request->storeId = 'voluptate';

    $requestSecurity = new PatchStoresStoreIdTerminalSettingsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsStoreLevel->patchStoresStoreIdTerminalSettings($request, $requestSecurity);

    if ($response->terminalSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
