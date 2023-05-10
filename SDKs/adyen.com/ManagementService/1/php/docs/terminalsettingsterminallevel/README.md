# terminalSettingsTerminalLevel

### Available Operations

* [getTerminalsTerminalIdTerminalLogos](#getterminalsterminalidterminallogos) - Get the terminal logo
* [getTerminalsTerminalIdTerminalSettings](#getterminalsterminalidterminalsettings) - Get terminal settings
* [patchTerminalsTerminalIdTerminalLogos](#patchterminalsterminalidterminallogos) - Update the logo
* [patchTerminalsTerminalIdTerminalSettings](#patchterminalsterminalidterminalsettings) - Update terminal settings

## getTerminalsTerminalIdTerminalLogos

Returns the logo that is configured for the payment terminal identified in the path.
The logo is returned as a Base64-encoded string. You need to Base64-decode the string to get the actual image file.

To make this request, your API credential must have one of the following [roles](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read
* Management API—Terminal settings read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTerminalsTerminalIdTerminalLogosRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTerminalsTerminalIdTerminalLogosSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTerminalsTerminalIdTerminalLogosRequest();
    $request->terminalId = 'ipsa';

    $requestSecurity = new GetTerminalsTerminalIdTerminalLogosSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsTerminalLevel->getTerminalsTerminalIdTerminalLogos($request, $requestSecurity);

    if ($response->logo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTerminalsTerminalIdTerminalSettings

Returns the settings that are configured for the payment terminal identified in the path.

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
use \OpenAPI\OpenAPI\Models\Operations\GetTerminalsTerminalIdTerminalSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTerminalsTerminalIdTerminalSettingsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTerminalsTerminalIdTerminalSettingsRequest();
    $request->terminalId = 'minima';

    $requestSecurity = new GetTerminalsTerminalIdTerminalSettingsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsTerminalLevel->getTerminalsTerminalIdTerminalSettings($request, $requestSecurity);

    if ($response->terminalSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchTerminalsTerminalIdTerminalLogos

Updates the logo for the payment terminal identified in the path.

* To change the logo, specify the image file as a Base64-encoded string.
* To restore the logo inherited from a higher level (store, merchant account, or company account), specify an empty logo value.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Terminal settings read and write

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchTerminalsTerminalIdTerminalLogosRequest;
use \OpenAPI\OpenAPI\Models\Shared\Logo;
use \OpenAPI\OpenAPI\Models\Operations\PatchTerminalsTerminalIdTerminalLogosSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchTerminalsTerminalIdTerminalLogosRequest();
    $request->logo = new Logo();
    $request->logo->data = 'veritatis';
    $request->terminalId = 'consectetur';

    $requestSecurity = new PatchTerminalsTerminalIdTerminalLogosSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsTerminalLevel->patchTerminalsTerminalIdTerminalLogos($request, $requestSecurity);

    if ($response->logo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchTerminalsTerminalIdTerminalSettings

Updates the settings that are configured for the payment terminal identified in the path.

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
use \OpenAPI\OpenAPI\Models\Operations\PatchTerminalsTerminalIdTerminalSettingsRequest;
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
use \OpenAPI\OpenAPI\Models\Operations\PatchTerminalsTerminalIdTerminalSettingsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchTerminalsTerminalIdTerminalSettingsRequest();
    $request->terminalSettings = new TerminalSettings();
    $request->terminalSettings->cardholderReceipt = new CardholderReceipt();
    $request->terminalSettings->cardholderReceipt->headerForAuthorizedReceipt = 'adipisci';
    $request->terminalSettings->connectivity = new Connectivity();
    $request->terminalSettings->connectivity->simcardStatus = ConnectivitySimcardStatusEnum::INVENTORY;
    $request->terminalSettings->gratuities = [
        new Gratuity(),
        new Gratuity(),
        new Gratuity(),
        new Gratuity(),
    ];
    $request->terminalSettings->hardware = new Hardware();
    $request->terminalSettings->hardware->displayMaximumBackLight = 33074;
    $request->terminalSettings->nexo = new Nexo();
    $request->terminalSettings->nexo->displayUrls = new NotificationUrl();
    $request->terminalSettings->nexo->displayUrls->localUrls = [
        new Url(),
        new Url(),
        new Url(),
    ];
    $request->terminalSettings->nexo->displayUrls->publicUrls = [
        new Url(),
    ];
    $request->terminalSettings->nexo->encryptionKey = new Key();
    $request->terminalSettings->nexo->encryptionKey->identifier = 'laudantium';
    $request->terminalSettings->nexo->encryptionKey->passphrase = 'eum';
    $request->terminalSettings->nexo->encryptionKey->version = 649832;
    $request->terminalSettings->nexo->eventUrls = new EventUrl();
    $request->terminalSettings->nexo->eventUrls->eventLocalUrls = [
        new Url(),
    ];
    $request->terminalSettings->nexo->eventUrls->eventPublicUrls = [
        new Url(),
        new Url(),
        new Url(),
    ];
    $request->terminalSettings->nexo->nexoEventUrls = [
        'voluptatem',
        'dolor',
    ];
    $request->terminalSettings->offlineProcessing = new OfflineProcessing();
    $request->terminalSettings->offlineProcessing->chipFloorLimit = 580152;
    $request->terminalSettings->offlineProcessing->offlineSwipeLimits = [
        new MinorUnitsMonetaryValue(),
        new MinorUnitsMonetaryValue(),
    ];
    $request->terminalSettings->opi = new Opi();
    $request->terminalSettings->opi->enablePayAtTable = false;
    $request->terminalSettings->opi->payAtTableStoreNumber = 'impedit';
    $request->terminalSettings->opi->payAtTableURL = 'explicabo';
    $request->terminalSettings->passcodes = new Passcodes();
    $request->terminalSettings->passcodes->adminMenuPin = 'voluptas';
    $request->terminalSettings->passcodes->refundPin = 'aut';
    $request->terminalSettings->passcodes->screenLockPin = 'dignissimos';
    $request->terminalSettings->passcodes->txMenuPin = 'dicta';
    $request->terminalSettings->payAtTable = new PayAtTable();
    $request->terminalSettings->payAtTable->authenticationMethod = PayAtTableAuthenticationMethodEnum::MKE;
    $request->terminalSettings->payAtTable->enablePayAtTable = false;
    $request->terminalSettings->payment = new Payment();
    $request->terminalSettings->payment->hideMinorUnitsInCurrencies = [
        'velit',
        'voluptatibus',
        'voluptas',
    ];
    $request->terminalSettings->receiptOptions = new ReceiptOptions();
    $request->terminalSettings->receiptOptions->logo = 'asperiores';
    $request->terminalSettings->receiptOptions->qrCodeData = 'aperiam';
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
    $request->terminalSettings->signature->deviceName = 'ea';
    $request->terminalSettings->signature->deviceSlogan = 'quaerat';
    $request->terminalSettings->signature->skipSignature = false;
    $request->terminalSettings->standalone = new Standalone();
    $request->terminalSettings->standalone->currencyCode = 'consequuntur';
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
    $request->terminalSettings->timeouts->fromActiveToSleep = 638762;
    $request->terminalSettings->wifiProfiles = new WifiProfiles();
    $request->terminalSettings->wifiProfiles->profiles = [
        new Profile(),
        new Profile(),
        new Profile(),
        new Profile(),
    ];
    $request->terminalSettings->wifiProfiles->settings = new Settings();
    $request->terminalSettings->wifiProfiles->settings->band = 'dignissimos';
    $request->terminalSettings->wifiProfiles->settings->roaming = false;
    $request->terminalSettings->wifiProfiles->settings->timeout = 640024;
    $request->terminalId = 'asperiores';

    $requestSecurity = new PatchTerminalsTerminalIdTerminalSettingsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->terminalSettingsTerminalLevel->patchTerminalsTerminalIdTerminalSettings($request, $requestSecurity);

    if ($response->terminalSettings !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
