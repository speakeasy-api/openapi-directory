# terminalSettingsCompanyLevel

### Available Operations

* [getCompaniesCompanyIdTerminalLogos](#getcompaniescompanyidterminallogos) - Get the terminal logo
* [getCompaniesCompanyIdTerminalSettings](#getcompaniescompanyidterminalsettings) - Get terminal settings
* [patchCompaniesCompanyIdTerminalLogos](#patchcompaniescompanyidterminallogos) - Update the terminal logo
* [patchCompaniesCompanyIdTerminalSettings](#patchcompaniescompanyidterminalsettings) - Update terminal settings

## getCompaniesCompanyIdTerminalLogos

Returns the logo that is configured for a specific payment terminal model at the company identified in the path. 

The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. 
This logo applies to all terminals of the specified model under the company, unless a different logo is configured at a lower level (merchant account, store, or individual terminal).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdTerminalLogosRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdTerminalLogosSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdTerminalLogosRequest();
    $request->companyId = 'autem';
    $request->model = 'nobis';

    $requestSecurity = new GetCompaniesCompanyIdTerminalLogosSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsCompanyLevel->getCompaniesCompanyIdTerminalLogos($request, $requestSecurity);

    if ($response->logo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCompaniesCompanyIdTerminalSettings

Returns the payment terminal settings that are configured for the company identified in the path. These settings apply to all terminals under the company, unless different values are configured at a lower level (merchant account, store, or individual terminal).

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
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdTerminalSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCompaniesCompanyIdTerminalSettingsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCompaniesCompanyIdTerminalSettingsRequest();
    $request->companyId = 'quas';

    $requestSecurity = new GetCompaniesCompanyIdTerminalSettingsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsCompanyLevel->getCompaniesCompanyIdTerminalSettings($request, $requestSecurity);

    if ($response->terminalSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchCompaniesCompanyIdTerminalLogos

Updates the logo that is configured for a specific payment terminal model at the company identified in the path. You can update the logo for only one terminal model at a time.
This logo applies to all terminals of the specified model under the company, unless a different logo is configured at a lower level (merchant account, store, or individual terminal). 
* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from the Adyen PSP level, specify an empty logo value.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchCompaniesCompanyIdTerminalLogosRequest;
use \OpenAPI\OpenAPI\Models\Shared\Logo;
use \OpenAPI\OpenAPI\Models\Operations\PatchCompaniesCompanyIdTerminalLogosSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchCompaniesCompanyIdTerminalLogosRequest();
    $request->logo = new Logo();
    $request->logo->data = 'assumenda';
    $request->companyId = 'nulla';
    $request->model = 'voluptas';

    $requestSecurity = new PatchCompaniesCompanyIdTerminalLogosSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsCompanyLevel->patchCompaniesCompanyIdTerminalLogos($request, $requestSecurity);

    if ($response->logo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchCompaniesCompanyIdTerminalSettings

Updates payment terminal settings for the company identified in the path. These settings apply to all terminals under the company, unless different values are configured at a lower level (merchant account, store, or individual terminal).

* To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
* To restore a parameter value inherited from the Adyen PSP level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
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
use \OpenAPI\OpenAPI\Models\Operations\PatchCompaniesCompanyIdTerminalSettingsRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\PatchCompaniesCompanyIdTerminalSettingsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchCompaniesCompanyIdTerminalSettingsRequest();
    $request->terminalSettings = new TerminalSettings();
    $request->terminalSettings->cardholderReceipt = new CardholderReceipt();
    $request->terminalSettings->cardholderReceipt->headerForAuthorizedReceipt = 'libero';
    $request->terminalSettings->connectivity = new Connectivity();
    $request->terminalSettings->connectivity->simcardStatus = ConnectivitySimcardStatusEnum::ACTIVATED;
    $request->terminalSettings->gratuities = [
        new Gratuity(),
        new Gratuity(),
    ];
    $request->terminalSettings->hardware = new Hardware();
    $request->terminalSettings->hardware->displayMaximumBackLight = 256139;
    $request->terminalSettings->nexo = new Nexo();
    $request->terminalSettings->nexo->displayUrls = new NotificationUrl();
    $request->terminalSettings->nexo->displayUrls->localUrls = [
        new Url(),
    ];
    $request->terminalSettings->nexo->displayUrls->publicUrls = [
        new Url(),
        new Url(),
        new Url(),
    ];
    $request->terminalSettings->nexo->encryptionKey = new Key();
    $request->terminalSettings->nexo->encryptionKey->identifier = 'ipsa';
    $request->terminalSettings->nexo->encryptionKey->passphrase = 'molestiae';
    $request->terminalSettings->nexo->encryptionKey->version = 301598;
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
        'esse',
        'rem',
    ];
    $request->terminalSettings->offlineProcessing = new OfflineProcessing();
    $request->terminalSettings->offlineProcessing->chipFloorLimit = 683282;
    $request->terminalSettings->offlineProcessing->offlineSwipeLimits = [
        new MinorUnitsMonetaryValue(),
        new MinorUnitsMonetaryValue(),
    ];
    $request->terminalSettings->opi = new Opi();
    $request->terminalSettings->opi->enablePayAtTable = false;
    $request->terminalSettings->opi->payAtTableStoreNumber = 'quidem';
    $request->terminalSettings->opi->payAtTableURL = 'fugiat';
    $request->terminalSettings->passcodes = new Passcodes();
    $request->terminalSettings->passcodes->adminMenuPin = 'ut';
    $request->terminalSettings->passcodes->refundPin = 'eum';
    $request->terminalSettings->passcodes->screenLockPin = 'suscipit';
    $request->terminalSettings->passcodes->txMenuPin = 'assumenda';
    $request->terminalSettings->payAtTable = new PayAtTable();
    $request->terminalSettings->payAtTable->authenticationMethod = PayAtTableAuthenticationMethodEnum::MAGSWIPE;
    $request->terminalSettings->payAtTable->enablePayAtTable = false;
    $request->terminalSettings->payment = new Payment();
    $request->terminalSettings->payment->hideMinorUnitsInCurrencies = [
        'quisquam',
        'veritatis',
        'ipsa',
    ];
    $request->terminalSettings->receiptOptions = new ReceiptOptions();
    $request->terminalSettings->receiptOptions->logo = 'id';
    $request->terminalSettings->receiptOptions->qrCodeData = 'quidem';
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
    $request->terminalSettings->signature->deviceName = 'neque';
    $request->terminalSettings->signature->deviceSlogan = 'quo';
    $request->terminalSettings->signature->skipSignature = false;
    $request->terminalSettings->standalone = new Standalone();
    $request->terminalSettings->standalone->currencyCode = 'illum';
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
    $request->terminalSettings->timeouts->fromActiveToSleep = 681359;
    $request->terminalSettings->wifiProfiles = new WifiProfiles();
    $request->terminalSettings->wifiProfiles->profiles = [
        new Profile(),
        new Profile(),
    ];
    $request->terminalSettings->wifiProfiles->settings = new Settings();
    $request->terminalSettings->wifiProfiles->settings->band = 'eos';
    $request->terminalSettings->wifiProfiles->settings->roaming = false;
    $request->terminalSettings->wifiProfiles->settings->timeout = 373813;
    $request->companyId = 'ab';

    $requestSecurity = new PatchCompaniesCompanyIdTerminalSettingsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsCompanyLevel->patchCompaniesCompanyIdTerminalSettings($request, $requestSecurity);

    if ($response->terminalSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
