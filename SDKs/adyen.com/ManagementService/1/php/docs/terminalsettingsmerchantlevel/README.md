# terminalSettingsMerchantLevel

### Available Operations

* [getMerchantsMerchantIdTerminalLogos](#getmerchantsmerchantidterminallogos) - Get the terminal logo
* [getMerchantsMerchantIdTerminalSettings](#getmerchantsmerchantidterminalsettings) - Get terminal settings
* [patchMerchantsMerchantIdTerminalLogos](#patchmerchantsmerchantidterminallogos) - Update the terminal logo
* [patchMerchantsMerchantIdTerminalSettings](#patchmerchantsmerchantidterminalsettings) - Update terminal settings

## getMerchantsMerchantIdTerminalLogos

Returns the logo that is configured for a specific payment terminal model at the merchant account identified in the path. 
The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file. 
This logo applies to all terminals of the specified model under the merchant account, unless a different logo is configured at a lower level (store or individual terminal).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdTerminalLogosRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdTerminalLogosSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdTerminalLogosRequest();
    $request->merchantId = 'cupiditate';
    $request->model = 'consequatur';

    $requestSecurity = new GetMerchantsMerchantIdTerminalLogosSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsMerchantLevel->getMerchantsMerchantIdTerminalLogos($request, $requestSecurity);

    if ($response->logo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMerchantsMerchantIdTerminalSettings

Returns the payment terminal settings that are configured for the merchant account identified in the path. These settings apply to all terminals under the merchant account unless different values are configured at a lower level (store or individual terminal).

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdTerminalSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdTerminalSettingsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdTerminalSettingsRequest();
    $request->merchantId = 'tempora';

    $requestSecurity = new GetMerchantsMerchantIdTerminalSettingsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsMerchantLevel->getMerchantsMerchantIdTerminalSettings($request, $requestSecurity);

    if ($response->terminalSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchMerchantsMerchantIdTerminalLogos

Updates the logo for a specific payment terminal model at the merchant account identified in the path. You can update the logo for only one terminal model at a time. 
This logo applies to all terminals of the specified model under the merchant account, unless a different logo is configured at a lower level (store or individual terminal).

* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from the company account, specify an empty logo value.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdTerminalLogosRequest;
use \OpenAPI\OpenAPI\Models\Shared\Logo;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdTerminalLogosSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchMerchantsMerchantIdTerminalLogosRequest();
    $request->logo = new Logo();
    $request->logo->data = 'debitis';
    $request->merchantId = 'ipsam';
    $request->model = 'aspernatur';

    $requestSecurity = new PatchMerchantsMerchantIdTerminalLogosSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsMerchantLevel->patchMerchantsMerchantIdTerminalLogos($request, $requestSecurity);

    if ($response->logo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchMerchantsMerchantIdTerminalSettings

Updates payment terminal settings for the merchant account identified in the path.
These settings apply to all terminals under the merchant account, unless different values are configured at a lower level (store or individual terminal).

* To change a parameter value, include the full object that contains the parameter, even if you don't want to change all parameters in the object.
* To restore a parameter value inherited from a higher level, include the full object that contains the parameter, and specify an empty value for the parameter or omit the parameter.
* Objects that are not included in the request are not updated.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdTerminalSettingsRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdTerminalSettingsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchMerchantsMerchantIdTerminalSettingsRequest();
    $request->terminalSettings = new TerminalSettings();
    $request->terminalSettings->cardholderReceipt = new CardholderReceipt();
    $request->terminalSettings->cardholderReceipt->headerForAuthorizedReceipt = 'sequi';
    $request->terminalSettings->connectivity = new Connectivity();
    $request->terminalSettings->connectivity->simcardStatus = ConnectivitySimcardStatusEnum::INVENTORY;
    $request->terminalSettings->gratuities = [
        new Gratuity(),
        new Gratuity(),
    ];
    $request->terminalSettings->hardware = new Hardware();
    $request->terminalSettings->hardware->displayMaximumBackLight = 925164;
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
    $request->terminalSettings->nexo->encryptionKey->identifier = 'quod';
    $request->terminalSettings->nexo->encryptionKey->passphrase = 'dignissimos';
    $request->terminalSettings->nexo->encryptionKey->version = 76956;
    $request->terminalSettings->nexo->eventUrls = new EventUrl();
    $request->terminalSettings->nexo->eventUrls->eventLocalUrls = [
        new Url(),
        new Url(),
    ];
    $request->terminalSettings->nexo->eventUrls->eventPublicUrls = [
        new Url(),
        new Url(),
        new Url(),
    ];
    $request->terminalSettings->nexo->nexoEventUrls = [
        'aliquam',
        'odio',
        'occaecati',
        'commodi',
    ];
    $request->terminalSettings->offlineProcessing = new OfflineProcessing();
    $request->terminalSettings->offlineProcessing->chipFloorLimit = 959434;
    $request->terminalSettings->offlineProcessing->offlineSwipeLimits = [
        new MinorUnitsMonetaryValue(),
    ];
    $request->terminalSettings->opi = new Opi();
    $request->terminalSettings->opi->enablePayAtTable = false;
    $request->terminalSettings->opi->payAtTableStoreNumber = 'deserunt';
    $request->terminalSettings->opi->payAtTableURL = 'molestiae';
    $request->terminalSettings->passcodes = new Passcodes();
    $request->terminalSettings->passcodes->adminMenuPin = 'accusantium';
    $request->terminalSettings->passcodes->refundPin = 'porro';
    $request->terminalSettings->passcodes->screenLockPin = 'eum';
    $request->terminalSettings->passcodes->txMenuPin = 'quas';
    $request->terminalSettings->payAtTable = new PayAtTable();
    $request->terminalSettings->payAtTable->authenticationMethod = PayAtTableAuthenticationMethodEnum::MKE;
    $request->terminalSettings->payAtTable->enablePayAtTable = false;
    $request->terminalSettings->payment = new Payment();
    $request->terminalSettings->payment->hideMinorUnitsInCurrencies = [
        'deleniti',
    ];
    $request->terminalSettings->receiptOptions = new ReceiptOptions();
    $request->terminalSettings->receiptOptions->logo = 'fugit';
    $request->terminalSettings->receiptOptions->qrCodeData = 'fuga';
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
    $request->terminalSettings->signature->deviceName = 'mollitia';
    $request->terminalSettings->signature->deviceSlogan = 'incidunt';
    $request->terminalSettings->signature->skipSignature = false;
    $request->terminalSettings->standalone = new Standalone();
    $request->terminalSettings->standalone->currencyCode = 'atque';
    $request->terminalSettings->standalone->enableStandalone = false;
    $request->terminalSettings->surcharge = new Surcharge();
    $request->terminalSettings->surcharge->askConfirmation = false;
    $request->terminalSettings->surcharge->configurations = [
        new Configuration(),
    ];
    $request->terminalSettings->timeouts = new Timeouts();
    $request->terminalSettings->timeouts->fromActiveToSleep = 325685;
    $request->terminalSettings->wifiProfiles = new WifiProfiles();
    $request->terminalSettings->wifiProfiles->profiles = [
        new Profile(),
        new Profile(),
    ];
    $request->terminalSettings->wifiProfiles->settings = new Settings();
    $request->terminalSettings->wifiProfiles->settings->band = 'fugit';
    $request->terminalSettings->wifiProfiles->settings->roaming = false;
    $request->terminalSettings->wifiProfiles->settings->timeout = 956406;
    $request->merchantId = 'consequuntur';

    $requestSecurity = new PatchMerchantsMerchantIdTerminalSettingsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsMerchantLevel->patchMerchantsMerchantIdTerminalSettings($request, $requestSecurity);

    if ($response->terminalSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
