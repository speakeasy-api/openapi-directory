# paymentMethodsMerchantLevel

### Available Operations

* [getMerchantsMerchantIdPaymentMethodSettings](#getmerchantsmerchantidpaymentmethodsettings) - Get all payment methods
* [getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId](#getmerchantsmerchantidpaymentmethodsettingspaymentmethodid) - Get payment method details
* [getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains](#getmerchantsmerchantidpaymentmethodsettingspaymentmethodidgetapplepaydomains) - Get Apple Pay domains
* [patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId](#patchmerchantsmerchantidpaymentmethodsettingspaymentmethodid) - Update a payment method
* [postMerchantsMerchantIdPaymentMethodSettings](#postmerchantsmerchantidpaymentmethodsettings) - Request a payment method
* [postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains](#postmerchantsmerchantidpaymentmethodsettingspaymentmethodidaddapplepaydomains) - Add an Apple Pay domain

## getMerchantsMerchantIdPaymentMethodSettings

Returns details for all payment methods of the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdPaymentMethodSettingsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdPaymentMethodSettingsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdPaymentMethodSettingsRequest();
    $request->businessLineId = 'ea';
    $request->merchantId = 'accusantium';
    $request->pageNumber = 69167;
    $request->pageSize = 982575;
    $request->storeId = 'quidem';

    $requestSecurity = new GetMerchantsMerchantIdPaymentMethodSettingsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->paymentMethodsMerchantLevel->getMerchantsMerchantIdPaymentMethodSettings($request, $requestSecurity);

    if ($response->paymentMethodResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId

Returns details for the merchant account and the payment method identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest();
    $request->merchantId = 'ipsam';
    $request->paymentMethodId = 'voluptate';

    $requestSecurity = new GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->paymentMethodsMerchantLevel->getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId($request, $requestSecurity);

    if ($response->paymentMethod !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains

Returns all Apple Pay domains that are registered with the merchant account and the payment method identified in the path. For more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay#register-merchant-domain).

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsRequest();
    $request->merchantId = 'autem';
    $request->paymentMethodId = 'nam';

    $requestSecurity = new GetMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->paymentMethodsMerchantLevel->getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains($request, $requestSecurity);

    if ($response->applePayInfo !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId

Updates payment method details for the merchant account and the payment method identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read and write


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest;
use \OpenAPI\OpenAPI\Models\Shared\UpdatePaymentMethodInfo;
use \OpenAPI\OpenAPI\Models\Shared\ShopperStatement;
use \OpenAPI\OpenAPI\Models\Shared\ShopperStatementTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRequest();
    $request->updatePaymentMethodInfo = new UpdatePaymentMethodInfo();
    $request->updatePaymentMethodInfo->countries = [
        'pariatur',
    ];
    $request->updatePaymentMethodInfo->currencies = [
        'voluptatibus',
        'perferendis',
    ];
    $request->updatePaymentMethodInfo->customRoutingFlags = [
        'amet',
        'aut',
        'cumque',
        'corporis',
    ];
    $request->updatePaymentMethodInfo->enabled = false;
    $request->updatePaymentMethodInfo->shopperStatement = new ShopperStatement();
    $request->updatePaymentMethodInfo->shopperStatement->doingBusinessAsName = 'hic';
    $request->updatePaymentMethodInfo->shopperStatement->type = ShopperStatementTypeEnum::FIXED;
    $request->updatePaymentMethodInfo->storeIds = [
        'dolores',
        'quis',
        'totam',
    ];
    $request->merchantId = 'dignissimos';
    $request->paymentMethodId = 'eaque';

    $requestSecurity = new PatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->paymentMethodsMerchantLevel->patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId($request, $requestSecurity);

    if ($response->paymentMethod !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMerchantsMerchantIdPaymentMethodSettings

Sends a request to add a new payment method to the merchant account identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read and write


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdPaymentMethodSettingsRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentMethodSetupInfo;
use \OpenAPI\OpenAPI\Models\Shared\ApplePayInfo;
use \OpenAPI\OpenAPI\Models\Shared\BcmcInfo;
use \OpenAPI\OpenAPI\Models\Shared\CartesBancairesInfo;
use \OpenAPI\OpenAPI\Models\Shared\GiroPayInfo;
use \OpenAPI\OpenAPI\Models\Shared\GooglePayInfo;
use \OpenAPI\OpenAPI\Models\Shared\KlarnaInfo;
use \OpenAPI\OpenAPI\Models\Shared\KlarnaInfoRegionEnum;
use \OpenAPI\OpenAPI\Models\Shared\MealVoucherFRInfo;
use \OpenAPI\OpenAPI\Models\Shared\PayPalInfo;
use \OpenAPI\OpenAPI\Models\Shared\PaymentMethodSetupInfoShopperInteractionEnum;
use \OpenAPI\OpenAPI\Models\Shared\SofortInfo;
use \OpenAPI\OpenAPI\Models\Shared\SwishInfo;
use \OpenAPI\OpenAPI\Models\Shared\PaymentMethodSetupInfoTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\VippsInfo;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdPaymentMethodSettingsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMerchantsMerchantIdPaymentMethodSettingsRequest();
    $request->paymentMethodSetupInfo = new PaymentMethodSetupInfo();
    $request->paymentMethodSetupInfo->applePay = new ApplePayInfo();
    $request->paymentMethodSetupInfo->applePay->domains = [
        'nesciunt',
        'eos',
    ];
    $request->paymentMethodSetupInfo->bcmc = new BcmcInfo();
    $request->paymentMethodSetupInfo->bcmc->enableBcmcMobile = false;
    $request->paymentMethodSetupInfo->businessLineId = 'perferendis';
    $request->paymentMethodSetupInfo->cartesBancaires = new CartesBancairesInfo();
    $request->paymentMethodSetupInfo->cartesBancaires->siret = 'dolores';
    $request->paymentMethodSetupInfo->countries = [
        'quam',
        'dolor',
        'vero',
        'nostrum',
    ];
    $request->paymentMethodSetupInfo->currencies = [
        'recusandae',
        'omnis',
        'facilis',
        'perspiciatis',
    ];
    $request->paymentMethodSetupInfo->customRoutingFlags = [
        'porro',
    ];
    $request->paymentMethodSetupInfo->giroPay = new GiroPayInfo();
    $request->paymentMethodSetupInfo->giroPay->supportEmail = 'consequuntur';
    $request->paymentMethodSetupInfo->googlePay = new GooglePayInfo();
    $request->paymentMethodSetupInfo->googlePay->merchantId = 'blanditiis';
    $request->paymentMethodSetupInfo->googlePay->reuseMerchantId = false;
    $request->paymentMethodSetupInfo->klarna = new KlarnaInfo();
    $request->paymentMethodSetupInfo->klarna->autoCapture = false;
    $request->paymentMethodSetupInfo->klarna->disputeEmail = 'error';
    $request->paymentMethodSetupInfo->klarna->region = KlarnaInfoRegionEnum::NA;
    $request->paymentMethodSetupInfo->klarna->supportEmail = 'occaecati';
    $request->paymentMethodSetupInfo->mealVoucherFR = new MealVoucherFRInfo();
    $request->paymentMethodSetupInfo->mealVoucherFR->conecsId = 'rerum';
    $request->paymentMethodSetupInfo->mealVoucherFR->siret = 'adipisci';
    $request->paymentMethodSetupInfo->mealVoucherFR->subTypes = [
        'earum',
        'modi',
        'iste',
        'dolorum',
    ];
    $request->paymentMethodSetupInfo->paypal = new PayPalInfo();
    $request->paymentMethodSetupInfo->paypal->directCapture = false;
    $request->paymentMethodSetupInfo->paypal->payerId = 'deleniti';
    $request->paymentMethodSetupInfo->paypal->subject = 'pariatur';
    $request->paymentMethodSetupInfo->reference = 'provident';
    $request->paymentMethodSetupInfo->shopperInteraction = PaymentMethodSetupInfoShopperInteractionEnum::CONT_AUTH;
    $request->paymentMethodSetupInfo->sofort = new SofortInfo();
    $request->paymentMethodSetupInfo->sofort->currencyCode = 'libero';
    $request->paymentMethodSetupInfo->sofort->logo = 'delectus';
    $request->paymentMethodSetupInfo->storeId = 'quaerat';
    $request->paymentMethodSetupInfo->swish = new SwishInfo();
    $request->paymentMethodSetupInfo->swish->swishNumber = 'quos';
    $request->paymentMethodSetupInfo->type = PaymentMethodSetupInfoTypeEnum::GIROCARD;
    $request->paymentMethodSetupInfo->vipps = new VippsInfo();
    $request->paymentMethodSetupInfo->vipps->logo = 'dolorem';
    $request->paymentMethodSetupInfo->vipps->subscriptionCancelUrl = 'dolorem';
    $request->merchantId = 'dolor';

    $requestSecurity = new PostMerchantsMerchantIdPaymentMethodSettingsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->paymentMethodsMerchantLevel->postMerchantsMerchantIdPaymentMethodSettings($request, $requestSecurity);

    if ($response->paymentMethod !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains

Adds the new domain to the list of Apple Pay domains that are registered with the merchant account and the payment method identified in the path. For more information, see [Apple Pay documentation](https://docs.adyen.com/payment-methods/apple-pay/enable-apple-pay#register-merchant-domain).

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Payment methods read and write


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ApplePayInfo;
use \OpenAPI\OpenAPI\Models\Operations\PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsRequest();
    $request->applePayInfo = new ApplePayInfo();
    $request->applePayInfo->domains = [
        'ipsum',
    ];
    $request->merchantId = 'hic';
    $request->paymentMethodId = 'excepturi';

    $requestSecurity = new PostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->paymentMethodsMerchantLevel->postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
