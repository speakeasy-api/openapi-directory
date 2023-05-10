# itv

### Available Operations

* [activateSaveOffer](#activatesaveoffer) - Activates the discount for a user. Only Stripe platform is currently supported.
* [changeCardDetails](#changecarddetails) - Change payment card details.
* [changeEmail](#changeemail) - Change email address related to account/profile.

The expected token scope is Settings.

* [changeMarketing](#changemarketing) - Change marketing preferences related to account/profile.

The expected token scope is Settings.

* [checkPreviousEntitlements](#checkpreviousentitlements) - Check whether the user has been previously entitled.
* [checkVoucher](#checkvoucher) - Validates the coupon/voucher for specified payment platform.
* [confirmPurchase](#confirmpurchase) - Confirms purchase and returns the details of purchased subscription for specified payment platform.
* [confirmPurchaseStrong](#confirmpurchasestrong) - Confirms purchase and returns the details of purchased subscription for specified payment platform.
* [confirmPurchaseWithOffer](#confirmpurchasewithoffer) - Confirms purchase and returns the details of purchased subscription for specified payment platform.
* [deleteAccount](#deleteaccount) - Delete account in compliance with GDPR.

The expected token scope is Settings.

* [deleteItvPurchasePlatform](#deleteitvpurchaseplatform) - Cancel a plan subscription.

A cancelled subscription will continue to be valid until the subscription
expiry date or next renewal date.

* [executeTransaction](#executetransaction) - Sends request to execute specified transaction.
* [getAccountTokenWithPin](#getaccounttokenwithpin) - Provides authorization with parental control pin.

Returns an array containing account token with Playback scope.

Requires access token with Catalog scope.

Pin must be a 4-digit string

* [getBillingHistory](#getbillinghistory) - Returns the list of billing records for specified payment platform.
* [getCardDetails](#getcarddetails) - Get payment card details.
* [getCurrentEntitlement](#getcurrententitlement) - Returns current entitlement.
* [getCurrentSubscription](#getcurrentsubscription) - Returns the details of current subscription for specified payment platform.
* [getEntitlementsHistory](#getentitlementshistory) - Returns the state of subscription for any payment platform.
* [getFeatureFlag](#getfeatureflag) - Gets info whether or not a feature is enabled or disabled using a feature flag. Feature flags are set as a custom field within PM. It also supports custom feature flag data if needed. Such data can be return as well.
* [getFullPriceRenewal](#getfullpricerenewal) - Returns full price renewal state and reason for specific user.
* [getItvProfileToken](#getitvprofiletoken) - Returns the ITV profile token.
* [getPublicPreview](#getpublicpreview) - Returns public preview for Samsung based on the page '/samsung-preview' configured in PresentationManager.
There is a hard limit of max 40 items to be returned. It splits evenly items count into the page rows, remaining items are added into the first row.

* [getRecommendedList](#getrecommendedlist) - Get the list of recommended items under the active profile.
* [getSaveOffer](#getsaveoffer) - Checks the provided coupon id for a user. Only Stripe platform is currently supported.
* [getSubscriptionState](#getsubscriptionstate) - Returns the state of subscription for any payment platform.
* [getSubscriptionStatus](#getsubscriptionstatus) - Returns status of latest payment intent.
* [getUpcomingInvoice](#getupcominginvoice) - Returns an upcoming invoice
* [getVoucherById](#getvoucherbyid) - Checks the provided coupon id for a user. Only Stripe platform is currently supported.
* [getItvItemsummaryExternalId](#getitvitemsummaryexternalid) - Redirects to corresponding Axis Item details page.
* [getItvPlansPlatform](#getitvplansplatform) - Returns the plans available for specified payment platform.
* [getItvProfile](#getitvprofile) - Returns the ITV profile object.
* [getItvRokuPlans](#getitvrokuplans) - Gets available Roku plans.
* [googlePaySubscription](#googlepaysubscription) - Get the list of recommended items under the active profile.
* [resubscribe](#resubscribe) - Resubscription for a user.
* [updatePaymentIntentStrong](#updatepaymentintentstrong) - Change payment method details.
* [updatePaymentMethodStrong](#updatepaymentmethodstrong) - Change payment method details.
* [updateProfile](#updateprofile) - Update ITV profile.

The expected token scope is Settings.

* [upgradePlan](#upgradeplan) - Upgrades the plan for the current user.

## activateSaveOffer

Activates the discount for a user. Only Stripe platform is currently supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ActivateSaveOfferRequest;
use \OpenAPI\OpenAPI\Models\Operations\ActivateSaveOfferSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ActivateSaveOfferRequest();
    $request->requestBody = 'ullam';
    $request->lang = 'in';

    $requestSecurity = new ActivateSaveOfferSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->activateSaveOffer($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changeCardDetails

Change payment card details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangeCardDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvChangeCardDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ChangeCardDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeCardDetailsRequest();
    $request->itvChangeCardDetailsRequest = new ItvChangeCardDetailsRequest();
    $request->itvChangeCardDetailsRequest->cardToken = 'nam';
    $request->itvChangeCardDetailsRequest->profileToken = 'earum';
    $request->lang = 'officia';
    $request->platform = 'laborum';

    $requestSecurity = new ChangeCardDetailsSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->changeCardDetails($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changeEmail

Change email address related to account/profile.

The expected token scope is Settings.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangeEmailRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvChangeEmailRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChangeEmailSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeEmailRequest();
    $request->itvChangeEmailRequest = new ItvChangeEmailRequest();
    $request->itvChangeEmailRequest->email = 'Dixie_Wolf@hotmail.com';
    $request->itvChangeEmailRequest->profileToken = 'sapiente';
    $request->ff = [
        FeatureFlagsEnum::ALL,
        FeatureFlagsEnum::CAS,
        FeatureFlagsEnum::LDP,
        FeatureFlagsEnum::LDP,
    ];
    $request->lang = 'inventore';

    $requestSecurity = new ChangeEmailSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->changeEmail($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## changeMarketing

Change marketing preferences related to account/profile.

The expected token scope is Settings.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ChangeMarketingRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvChangeMarketingRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\ChangeMarketingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ChangeMarketingRequest();
    $request->itvChangeMarketingRequest = new ItvChangeMarketingRequest();
    $request->itvChangeMarketingRequest->emailOptIn = false;
    $request->itvChangeMarketingRequest->profileToken = 'fugit';
    $request->ff = [
        FeatureFlagsEnum::ALL,
        FeatureFlagsEnum::ALL,
        FeatureFlagsEnum::IDP,
        FeatureFlagsEnum::IDP,
    ];
    $request->lang = 'eum';

    $requestSecurity = new ChangeMarketingSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->changeMarketing($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checkPreviousEntitlements

Check whether the user has been previously entitled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CheckPreviousEntitlementsRequest;
use \OpenAPI\OpenAPI\Models\Operations\CheckPreviousEntitlementsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CheckPreviousEntitlementsRequest();
    $request->lang = 'eius';

    $requestSecurity = new CheckPreviousEntitlementsSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->checkPreviousEntitlements($request, $requestSecurity);

    if ($response->itvHadEntitlement !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## checkVoucher

Validates the coupon/voucher for specified payment platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CheckVoucherRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvVoucherRequest;
use \OpenAPI\OpenAPI\Models\Operations\CheckVoucherSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CheckVoucherRequest();
    $request->itvVoucherRequest = new ItvVoucherRequest();
    $request->itvVoucherRequest->voucher = 'rem';
    $request->lang = 'at';
    $request->platform = 'impedit';

    $requestSecurity = new CheckVoucherSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->checkVoucher($request, $requestSecurity);

    if ($response->itvVoucher !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmPurchase

Confirms purchase and returns the details of purchased subscription for specified payment platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPurchaseRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvPurchaseRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPurchaseSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmPurchaseRequest();
    $request->itvPurchaseRequest = new ItvPurchaseRequest();
    $request->itvPurchaseRequest->cardToken = 'eos';
    $request->itvPurchaseRequest->planId = 'sapiente';
    $request->itvPurchaseRequest->profileToken = 'eum';
    $request->itvPurchaseRequest->voucher = 'dicta';
    $request->lang = 'minima';
    $request->platform = 'beatae';

    $requestSecurity = new ConfirmPurchaseSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->confirmPurchase($request, $requestSecurity);

    if ($response->itvPurchase !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmPurchaseStrong

Confirms purchase and returns the details of purchased subscription for specified payment platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPurchaseStrongRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvPurchaseStrongRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPurchaseStrongSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmPurchaseStrongRequest();
    $request->itvPurchaseStrongRequest = new ItvPurchaseStrongRequest();
    $request->itvPurchaseStrongRequest->paymentMethodFromToken = 'cupiditate';
    $request->itvPurchaseStrongRequest->paymentMethodId = 'provident';
    $request->itvPurchaseStrongRequest->planId = 'earum';
    $request->itvPurchaseStrongRequest->profileToken = 'soluta';
    $request->itvPurchaseStrongRequest->voucher = 'hic';
    $request->lang = 'illum';
    $request->platform = 'eaque';

    $requestSecurity = new ConfirmPurchaseStrongSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->confirmPurchaseStrong($request, $requestSecurity);

    if ($response->itvPurchaseStrongResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## confirmPurchaseWithOffer

Confirms purchase and returns the details of purchased subscription for specified payment platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPurchaseWithOfferRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvPurchaseWithOfferRequest;
use \OpenAPI\OpenAPI\Models\Operations\ConfirmPurchaseWithOfferSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ConfirmPurchaseWithOfferRequest();
    $request->itvPurchaseWithOfferRequest = new ItvPurchaseWithOfferRequest();
    $request->itvPurchaseWithOfferRequest->couponId = 'earum';
    $request->itvPurchaseWithOfferRequest->paymentMethodFromToken = 'perspiciatis';
    $request->itvPurchaseWithOfferRequest->paymentMethodId = 'maiores';
    $request->itvPurchaseWithOfferRequest->planId = 'debitis';
    $request->itvPurchaseWithOfferRequest->profileToken = 'aliquid';
    $request->lang = 'porro';
    $request->platform = 'suscipit';

    $requestSecurity = new ConfirmPurchaseWithOfferSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->confirmPurchaseWithOffer($request, $requestSecurity);

    if ($response->itvPurchaseWithOfferResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteAccount

Delete account in compliance with GDPR.

The expected token scope is Settings.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvDeleteAccountRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAccountRequest();
    $request->itvDeleteAccountRequest = new ItvDeleteAccountRequest();
    $request->itvDeleteAccountRequest->profileToken = 'dolorem';
    $request->ff = [
        FeatureFlagsEnum::LRL,
    ];
    $request->lang = 'fuga';

    $requestSecurity = new DeleteAccountSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->deleteAccount($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteItvPurchasePlatform

Cancel a plan subscription.

A cancelled subscription will continue to be valid until the subscription
expiry date or next renewal date.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteItvPurchasePlatformRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvCancelSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteItvPurchasePlatformSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteItvPurchasePlatformRequest();
    $request->itvCancelSubscriptionRequest = new ItvCancelSubscriptionRequest();
    $request->itvCancelSubscriptionRequest->profileToken = 'ratione';
    $request->lang = 'animi';
    $request->platform = 'necessitatibus';

    $requestSecurity = new DeleteItvPurchasePlatformSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->deleteItvPurchasePlatform($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## executeTransaction

Sends request to execute specified transaction.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ExecuteTransactionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvRokuTransactionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ExecuteTransactionRequest();
    $request->itvRokuTransactionRequest = new ItvRokuTransactionRequest();
    $request->itvRokuTransactionRequest->profileToken = 'nulla';
    $request->lang = 'consequatur';
    $request->transactionid = 'quasi';

    $response = $sdk->itv->executeTransaction($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountTokenWithPin

Provides authorization with parental control pin.

Returns an array containing account token with Playback scope.

Requires access token with Catalog scope.

Pin must be a 4-digit string


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountTokenWithPinRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvPinAuthRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvPinAuthRequestCookieTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\ItvPinAuthRequestScopesEnum;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountTokenWithPinSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountTokenWithPinRequest();
    $request->itvPinAuthRequest = new ItvPinAuthRequest();
    $request->itvPinAuthRequest->cookieType = ItvPinAuthRequestCookieTypeEnum::SESSION;
    $request->itvPinAuthRequest->pin = 'ducimus';
    $request->itvPinAuthRequest->scopes = [
        ItvPinAuthRequestScopesEnum::SETTINGS,
        ItvPinAuthRequestScopesEnum::COMMERCE,
        ItvPinAuthRequestScopesEnum::CATALOG,
    ];
    $request->ff = [
        FeatureFlagsEnum::IDP,
    ];
    $request->lang = 'doloribus';

    $requestSecurity = new GetAccountTokenWithPinSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->getAccountTokenWithPin($request, $requestSecurity);

    if ($response->accessTokens !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBillingHistory

Returns the list of billing records for specified payment platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBillingHistoryRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvBillingHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBillingHistorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBillingHistoryRequest();
    $request->itvBillingHistoryRequest = new ItvBillingHistoryRequest();
    $request->itvBillingHistoryRequest->profileToken = 'nulla';
    $request->lang = 'necessitatibus';
    $request->platform = 'ipsa';

    $requestSecurity = new GetBillingHistorySecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->getBillingHistory($request, $requestSecurity);

    if ($response->itvBillingHistory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCardDetails

Get payment card details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCardDetailsRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvGetCardDetailsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCardDetailsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCardDetailsRequest();
    $request->itvGetCardDetailsRequest = new ItvGetCardDetailsRequest();
    $request->itvGetCardDetailsRequest->profileToken = 'tempora';
    $request->lang = 'nihil';
    $request->platform = 'molestiae';

    $requestSecurity = new GetCardDetailsSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->getCardDetails($request, $requestSecurity);

    if ($response->itvCardDetails !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCurrentEntitlement

Returns current entitlement.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCurrentEntitlementRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCurrentEntitlementSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCurrentEntitlementRequest();
    $request->lang = 'dicta';

    $requestSecurity = new GetCurrentEntitlementSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->getCurrentEntitlement($request, $requestSecurity);

    if ($response->itvEntitlementCurrent !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getCurrentSubscription

Returns the details of current subscription for specified payment platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetCurrentSubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetCurrentSubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetCurrentSubscriptionRequest();
    $request->lang = 'iusto';
    $request->platform = 'esse';

    $requestSecurity = new GetCurrentSubscriptionSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->getCurrentSubscription($request, $requestSecurity);

    if ($response->itvCurrentSubscription !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getEntitlementsHistory

Returns the state of subscription for any payment platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetEntitlementsHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetEntitlementsHistorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetEntitlementsHistoryRequest();
    $request->lang = 'praesentium';

    $requestSecurity = new GetEntitlementsHistorySecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->getEntitlementsHistory($request, $requestSecurity);

    if ($response->itvEntitlementsHistory !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFeatureFlag

Gets info whether or not a feature is enabled or disabled using a feature flag. Feature flags are set as a custom field within PM. It also supports custom feature flag data if needed. Such data can be return as well.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFeatureFlagRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFeatureFlagRequest();
    $request->feature = 'maiores';
    $request->lang = 'reiciendis';

    $response = $sdk->itv->getFeatureFlag($request);

    if ($response->itvFeatureFlag !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFullPriceRenewal

Returns full price renewal state and reason for specific user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetFullPriceRenewalRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFullPriceRenewalSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFullPriceRenewalRequest();
    $request->lang = 'vel';

    $requestSecurity = new GetFullPriceRenewalSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->getFullPriceRenewal($request, $requestSecurity);

    if ($response->itvSubscriptionFullPriceRenewal !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItvProfileToken

Returns the ITV profile token.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItvProfileTokenRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvProfileTokenRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetItvProfileTokenSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItvProfileTokenRequest();
    $request->itvProfileTokenRequest = new ItvProfileTokenRequest();
    $request->itvProfileTokenRequest->password = 'architecto';
    $request->lang = 'fugiat';

    $requestSecurity = new GetItvProfileTokenSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->getItvProfileToken($request, $requestSecurity);

    if ($response->itvProfileToken !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getPublicPreview

Returns public preview for Samsung based on the page '/samsung-preview' configured in PresentationManager.
There is a hard limit of max 40 items to be returned. It splits evenly items count into the page rows, remaining items are added into the first row.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->itv->getPublicPreview();

    if ($response->samsungPreview !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getRecommendedList

Get the list of recommended items under the active profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetRecommendedListRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetRecommendedListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetRecommendedListRequest();
    $request->device = 'doloremque';
    $request->ff = [
        FeatureFlagsEnum::HB,
    ];
    $request->itemTypes = [
        'esse',
        'ex',
    ];
    $request->lang = 'consectetur';
    $request->page = 399812;
    $request->pageSize = 58870;
    $request->segments = [
        'sunt',
        'nostrum',
        'fugiat',
    ];
    $request->sub = 'expedita';

    $requestSecurity = new GetRecommendedListSecurity();
    $requestSecurity->profileAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->getRecommendedList($request, $requestSecurity);

    if ($response->itemList !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSaveOffer

Checks the provided coupon id for a user. Only Stripe platform is currently supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSaveOfferRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSaveOfferSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSaveOfferRequest();
    $request->lang = 'aliquid';

    $requestSecurity = new GetSaveOfferSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->getSaveOffer($request, $requestSecurity);

    if ($response->itvGetDiscountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubscriptionState

Returns the state of subscription for any payment platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriptionStateRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriptionStateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubscriptionStateRequest();
    $request->lang = 'officia';

    $requestSecurity = new GetSubscriptionStateSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->getSubscriptionState($request, $requestSecurity);

    if ($response->itvSubscriptionState !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSubscriptionStatus

Returns status of latest payment intent.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriptionStatusRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetSubscriptionStatusSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSubscriptionStatusRequest();
    $request->lang = 'suscipit';
    $request->platform = 'aliquid';

    $requestSecurity = new GetSubscriptionStatusSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->getSubscriptionStatus($request, $requestSecurity);

    if ($response->itvSubscriptionStatusResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUpcomingInvoice

Returns an upcoming invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetUpcomingInvoiceRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetUpcomingInvoiceSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUpcomingInvoiceRequest();
    $request->lang = 'perferendis';

    $requestSecurity = new GetUpcomingInvoiceSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->getUpcomingInvoice($request, $requestSecurity);

    if ($response->itvGetDiscountResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVoucherById

Checks the provided coupon id for a user. Only Stripe platform is currently supported.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetVoucherByIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetVoucherByIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetVoucherByIdRequest();
    $request->lang = 'eum';
    $request->planId = 'voluptas';
    $request->voucherId = 'iste';

    $requestSecurity = new GetVoucherByIdSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->getVoucherById($request, $requestSecurity);

    if ($response->itvVoucher !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItvItemsummaryExternalId

Redirects to corresponding Axis Item details page.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItvItemsummaryExternalIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItvItemsummaryExternalIdRequest();
    $request->externalId = 'id';

    $response = $sdk->itv->getItvItemsummaryExternalId($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItvPlansPlatform

Returns the plans available for specified payment platform.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItvPlansPlatformRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetItvPlansPlatformSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItvPlansPlatformRequest();
    $request->lang = 'ab';
    $request->platform = 'error';

    $requestSecurity = new GetItvPlansPlatformSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->getItvPlansPlatform($request, $requestSecurity);

    if ($response->itvPlans !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItvProfile

Returns the ITV profile object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItvProfileRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetItvProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItvProfileRequest();
    $request->lang = 'possimus';

    $requestSecurity = new GetItvProfileSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->getItvProfile($request, $requestSecurity);

    if ($response->getItvProfile200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getItvRokuPlans

Gets available Roku plans.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetItvRokuPlansRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetItvRokuPlansRequest();
    $request->lang = 'voluptates';

    $response = $sdk->itv->getItvRokuPlans($request);

    if ($response->rokuPlans !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## googlePaySubscription

Get the list of recommended items under the active profile.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GooglePaySubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvGooglePaySubscriptionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GooglePaySubscriptionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GooglePaySubscriptionRequest();
    $request->itvGooglePaySubscriptionRequest = new ItvGooglePaySubscriptionRequest();
    $request->itvGooglePaySubscriptionRequest->purchaseToken = 'mollitia';
    $request->itvGooglePaySubscriptionRequest->subscriptionItem = 'laborum';
    $request->lang = 'libero';

    $requestSecurity = new GooglePaySubscriptionSecurity();
    $requestSecurity->profileAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->googlePaySubscription($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resubscribe

Resubscription for a user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ResubscribeRequest;
use \OpenAPI\OpenAPI\Models\Operations\ResubscribeSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ResubscribeRequest();
    $request->lang = 'ad';
    $request->planId = 'deleniti';
    $request->platform = 'enim';

    $requestSecurity = new ResubscribeSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->resubscribe($request, $requestSecurity);

    if ($response->resubscribe200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePaymentIntentStrong

Change payment method details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaymentIntentStrongRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvUpdateIntentStrongRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaymentIntentStrongSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePaymentIntentStrongRequest();
    $request->itvUpdateIntentStrongRequest = new ItvUpdateIntentStrongRequest();
    $request->itvUpdateIntentStrongRequest->paymentMethodFromToken = 'vitae';
    $request->itvUpdateIntentStrongRequest->paymentMethodId = 'repellendus';
    $request->itvUpdateIntentStrongRequest->profileToken = 'ex';
    $request->lang = 'quo';
    $request->platform = 'ex';

    $requestSecurity = new UpdatePaymentIntentStrongSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->updatePaymentIntentStrong($request, $requestSecurity);

    if ($response->itvUpdateIntentStrongResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updatePaymentMethodStrong

Change payment method details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaymentMethodStrongRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvUpdatePaymentStrongRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdatePaymentMethodStrongSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdatePaymentMethodStrongRequest();
    $request->itvUpdatePaymentStrongRequest = new ItvUpdatePaymentStrongRequest();
    $request->itvUpdatePaymentStrongRequest->paymentMethodFromToken = 'ut';
    $request->itvUpdatePaymentStrongRequest->paymentMethodId = 'ad';
    $request->itvUpdatePaymentStrongRequest->profileToken = 'expedita';
    $request->lang = 'voluptatem';
    $request->platform = 'molestias';

    $requestSecurity = new UpdatePaymentMethodStrongSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->updatePaymentMethodStrong($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateProfile

Update ITV profile.

The expected token scope is Settings.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvUpdateProfileRequest;
use \OpenAPI\OpenAPI\Models\Shared\FeatureFlagsEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateProfileSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateProfileRequest();
    $request->itvUpdateProfileRequest = new ItvUpdateProfileRequest();
    $request->itvUpdateProfileRequest->dateOfBirth = 'cum';
    $request->itvUpdateProfileRequest->email = 'Bernhard.Lemke@yahoo.com';
    $request->itvUpdateProfileRequest->firstName = 'Mazie';
    $request->itvUpdateProfileRequest->lastName = 'O'Reilly';
    $request->itvUpdateProfileRequest->postcode = '09816-8800';
    $request->itvUpdateProfileRequest->profileToken = 'deleniti';
    $request->itvUpdateProfileRequest->title = 'Dr.';
    $request->ff = [
        FeatureFlagsEnum::CD,
        FeatureFlagsEnum::RPT,
    ];
    $request->lang = 'minus';

    $requestSecurity = new UpdateProfileSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->updateProfile($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## upgradePlan

Upgrades the plan for the current user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\UpgradePlanRequest;
use \OpenAPI\OpenAPI\Models\Shared\ItvUpgradePlanRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpgradePlanSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpgradePlanRequest();
    $request->itvUpgradePlanRequest = new ItvUpgradePlanRequest();
    $request->itvUpgradePlanRequest->planId = 'nemo';
    $request->lang = 'asperiores';
    $request->platform = 'ratione';

    $requestSecurity = new UpgradePlanSecurity();
    $requestSecurity->accountAuth = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->itv->upgradePlan($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
