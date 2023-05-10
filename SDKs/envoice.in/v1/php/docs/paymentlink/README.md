# paymentLink

### Available Operations

* [paymentLinkApiAll](#paymentlinkapiall) - Create a payment link
* [paymentLinkApiDeleteForm](#paymentlinkapideleteform) - Delete an existing payment link
* [paymentLinkApiDeleteJson](#paymentlinkapideletejson) - Delete an existing payment link
* [paymentLinkApiDeleteRaw](#paymentlinkapideleteraw) - Delete an existing payment link
* [paymentLinkApiNewForm](#paymentlinkapinewform) - Create a payment link
* [paymentLinkApiNewJson](#paymentlinkapinewjson) - Create a payment link
* [paymentLinkApiNewRaw](#paymentlinkapinewraw) - Create a payment link
* [paymentLinkApiUri](#paymentlinkapiuri) - Return the unique url to the client's payment link

## paymentLinkApiAll

Create a payment link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentLinkApiAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentLinkApiAllRequest();
    $request->queryOptionsPage = 877131;
    $request->queryOptionsPageSize = 399025;
    $request->xAuthKey = 'quasi';
    $request->xAuthSecret = 'saepe';

    $response = $sdk->paymentLink->paymentLinkApiAll($request);

    if ($response->listResultPaymentLink !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentLinkApiDeleteForm

Delete an existing payment link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentLinkApiDeleteFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentLink;
use \OpenAPI\OpenAPI\Models\Shared\Client;
use \OpenAPI\OpenAPI\Models\Shared\Currency;
use \OpenAPI\OpenAPI\Models\Shared\Invoice;
use \OpenAPI\OpenAPI\Models\Shared\Activity;
use \OpenAPI\OpenAPI\Models\Shared\ActivityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceAttachment;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceAttachmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceItem;
use \OpenAPI\OpenAPI\Models\Shared\PaymentGatewayForInvoice;
use \OpenAPI\OpenAPI\Models\Shared\Payment;
use \OpenAPI\OpenAPI\Models\Shared\PaymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentLinkItem;
use \OpenAPI\OpenAPI\Models\Shared\Tax;
use \OpenAPI\OpenAPI\Models\Shared\WorkType;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\ExternalConnection;
use \OpenAPI\OpenAPI\Models\Shared\UserSettings;
use \OpenAPI\OpenAPI\Models\Shared\Country;
use \OpenAPI\OpenAPI\Models\Shared\UserSettingsInvoiceTemplateEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserSettingsProfessionEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserSettingsReferralProgramEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserSettingsStoreCheckoutFieldsEnum;
use \OpenAPI\OpenAPI\Models\Shared\UiLanguage;
use \OpenAPI\OpenAPI\Models\Shared\UserStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlan;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlanFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlanRecurrenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlanStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlanSystemCancelationReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserYearsOfExperienceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentLinkApiDeleteFormRequest();
    $request->paymentLink = new PaymentLink();
    $request->paymentLink->accessToken = 'vel';
    $request->paymentLink->client = new Client();
    $request->paymentLink->client->address = '465 Michelle Row';
    $request->paymentLink->client->clientCountryId = 27069;
    $request->paymentLink->client->clientCurrencyId = 636061;
    $request->paymentLink->client->companyRegistrationNumber = 'tempore';
    $request->paymentLink->client->defaultDueDateInDays = 240020;
    $request->paymentLink->client->email = 'Carole.Altenwerth95@hotmail.com';
    $request->paymentLink->client->id = 232865;
    $request->paymentLink->client->name = 'Mattie McLaughlin';
    $request->paymentLink->client->phoneNumber = 'quas';
    $request->paymentLink->client->uiLanguageId = 457223;
    $request->paymentLink->client->userId = 97468;
    $request->paymentLink->client->vat = 'a';
    $request->paymentLink->clientId = 621679;
    $request->paymentLink->currency = new Currency();
    $request->paymentLink->currency->code = 'sint';
    $request->paymentLink->currency->id = 863023;
    $request->paymentLink->currency->name = 'Howard Upton';
    $request->paymentLink->currency->symbol = 'veritatis';
    $request->paymentLink->currency->value = 'consequuntur';
    $request->paymentLink->currencyId = 94458;
    $request->paymentLink->discountAmount = 6288.99;
    $request->paymentLink->id = 633608;
    $request->paymentLink->invoice = new Invoice();
    $request->paymentLink->invoice->accessToken = 'aliquid';
    $request->paymentLink->invoice->activities = [
        new Activity(),
        new Activity(),
        new Activity(),
        new Activity(),
    ];
    $request->paymentLink->invoice->attachments = [
        new InvoiceAttachment(),
    ];
    $request->paymentLink->invoice->clientId = 936747;
    $request->paymentLink->invoice->clonedFromId = 424032;
    $request->paymentLink->invoice->currencyId = 447378;
    $request->paymentLink->invoice->discountAmount = 2586.84;
    $request->paymentLink->invoice->duedate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-21T04:50:55.832Z');
    $request->paymentLink->invoice->enablePartialPayments = false;
    $request->paymentLink->invoice->estimationId = 742238;
    $request->paymentLink->invoice->id = 33304;
    $request->paymentLink->invoice->invoiceCategoryId = 306986;
    $request->paymentLink->invoice->isDigitallySigned = false;
    $request->paymentLink->invoice->issuedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-22T20:24:31.399Z');
    $request->paymentLink->invoice->items = [
        new InvoiceItem(),
        new InvoiceItem(),
    ];
    $request->paymentLink->invoice->notes = 'reprehenderit';
    $request->paymentLink->invoice->number = 'ullam';
    $request->paymentLink->invoice->orderId = 391774;
    $request->paymentLink->invoice->paymentGateways = [
        new PaymentGatewayForInvoice(),
    ];
    $request->paymentLink->invoice->paymentLinkId = 531849;
    $request->paymentLink->invoice->payments = [
        new Payment(),
    ];
    $request->paymentLink->invoice->poNumber = 'quibusdam';
    $request->paymentLink->invoice->recurringProfileId = 401259;
    $request->paymentLink->invoice->shouldSendReminders = false;
    $request->paymentLink->invoice->status = InvoiceStatusEnum::UNPAID;
    $request->paymentLink->invoice->subTotalAmount = 9292.92;
    $request->paymentLink->invoice->taxAmount = 6802.7;
    $request->paymentLink->invoice->terms = 'architecto';
    $request->paymentLink->invoice->totalAmount = 6091.78;
    $request->paymentLink->invoice->userId = 945302;
    $request->paymentLink->items = [
        new PaymentLinkItem(),
    ];
    $request->paymentLink->number = 'at';
    $request->paymentLink->subTotalAmount = 920.27;
    $request->paymentLink->taxAmount = 4541.62;
    $request->paymentLink->totalAmount = 559.65;
    $request->paymentLink->user = new User();
    $request->paymentLink->user->actionNotificationsLastReadOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-30T09:58:30.487Z');
    $request->paymentLink->user->email = 'Dasia.Morar52@gmail.com';
    $request->paymentLink->user->externalConnections = [
        new ExternalConnection(),
    ];
    $request->paymentLink->user->hasBeenOnboarded = false;
    $request->paymentLink->user->id = 513075;
    $request->paymentLink->user->isLocked = false;
    $request->paymentLink->user->isVerified = false;
    $request->paymentLink->user->knowledgeNotificationsLastReadOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-08T19:28:18.512Z');
    $request->paymentLink->user->lastSeenOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-06-16T05:23:01.658Z');
    $request->paymentLink->user->name = 'Donna Ernser';
    $request->paymentLink->user->password = 'impedit';
    $request->paymentLink->user->passwordSalt = 'explicabo';
    $request->paymentLink->user->referralPath = 'voluptas';
    $request->paymentLink->user->referredUsers = 12036;
    $request->paymentLink->user->referrerKey = 'dignissimos';
    $request->paymentLink->user->settings = new UserSettings();
    $request->paymentLink->user->settings->accountantEmail = 'dicta';
    $request->paymentLink->user->settings->address = '629 Yessenia Bypass';
    $request->paymentLink->user->settings->apiKey = 'ea';
    $request->paymentLink->user->settings->apiSecret = 'quaerat';
    $request->paymentLink->user->settings->backgroundImage = 'consequuntur';
    $request->paymentLink->user->settings->bank = 'repellendus';
    $request->paymentLink->user->settings->bankAccount = 'officia';
    $request->paymentLink->user->settings->cname = 'maxime';
    $request->paymentLink->user->settings->companyRegistrationNumber = 'dignissimos';
    $request->paymentLink->user->settings->country = new Country();
    $request->paymentLink->user->settings->country->id = 640024;
    $request->paymentLink->user->settings->country->name = 'Vernon Bergnaum';
    $request->paymentLink->user->settings->country->value = 'quod';
    $request->paymentLink->user->settings->countryId = 288398;
    $request->paymentLink->user->settings->currency = new Currency();
    $request->paymentLink->user->settings->currency->code = 'ab';
    $request->paymentLink->user->settings->currency->id = 241418;
    $request->paymentLink->user->settings->currency->name = 'Orlando Homenick';
    $request->paymentLink->user->settings->currency->symbol = 'est';
    $request->paymentLink->user->settings->currency->value = 'recusandae';
    $request->paymentLink->user->settings->currencyId = 517309;
    $request->paymentLink->user->settings->currencySymbol = 'fugiat';
    $request->paymentLink->user->settings->defaultDateFormat = 'vel';
    $request->paymentLink->user->settings->defaultDueDateInDays = 497678;
    $request->paymentLink->user->settings->doNotTrack = false;
    $request->paymentLink->user->settings->enableClientPortal = false;
    $request->paymentLink->user->settings->enablePredictiveInvoicing = false;
    $request->paymentLink->user->settings->enableRecurringInvoicing = false;
    $request->paymentLink->user->settings->hasInvoiceLogo = false;
    $request->paymentLink->user->settings->iban = 'quos';
    $request->paymentLink->user->settings->id = 427834;
    $request->paymentLink->user->settings->invoiceTemplate = UserSettingsInvoiceTemplateEnum::DEFAULT;
    $request->paymentLink->user->settings->invoiceTemplateColorHex = 'possimus';
    $request->paymentLink->user->settings->phoneNumber = 'facilis';
    $request->paymentLink->user->settings->profession = UserSettingsProfessionEnum::ENTERPRISE;
    $request->paymentLink->user->settings->receiveSmsNotifications = false;
    $request->paymentLink->user->settings->referralProgram = UserSettingsReferralProgramEnum::ENABLED;
    $request->paymentLink->user->settings->storeCheckoutFields = UserSettingsStoreCheckoutFieldsEnum::SHOW_MINIMUM_REQUIRED_FIELDS;
    $request->paymentLink->user->settings->storeColorHex = 'corporis';
    $request->paymentLink->user->settings->storeCurrency = new Currency();
    $request->paymentLink->user->settings->storeCurrency->code = 'reiciendis';
    $request->paymentLink->user->settings->storeCurrency->id = 828657;
    $request->paymentLink->user->settings->storeCurrency->name = 'Miss Sophie Jacobi';
    $request->paymentLink->user->settings->storeCurrency->symbol = 'in';
    $request->paymentLink->user->settings->storeCurrency->value = 'exercitationem';
    $request->paymentLink->user->settings->storeCurrencyId = 937285;
    $request->paymentLink->user->settings->storeCustomJavaScript = 'facere';
    $request->paymentLink->user->settings->storeDescription = 'numquam';
    $request->paymentLink->user->settings->storeEmail = 'doloribus';
    $request->paymentLink->user->settings->storeLanguage = new UiLanguage();
    $request->paymentLink->user->settings->storeLanguage->id = 381760;
    $request->paymentLink->user->settings->storeLanguage->name = 'Rickey Ullrich';
    $request->paymentLink->user->settings->storeLanguage->uiCulture = 'sunt';
    $request->paymentLink->user->settings->storeLanguageId = 992012;
    $request->paymentLink->user->settings->storeName = 'adipisci';
    $request->paymentLink->user->settings->storePurchaseEmailMessage = 'non';
    $request->paymentLink->user->settings->storePurchaseThankYouMessage = 'amet';
    $request->paymentLink->user->settings->storeTextColorHex = 'beatae';
    $request->paymentLink->user->settings->storeUrl = 'dignissimos';
    $request->paymentLink->user->settings->subscribeToProductEmails = false;
    $request->paymentLink->user->settings->swift = 'a';
    $request->paymentLink->user->settings->terms = 'debitis';
    $request->paymentLink->user->settings->userId = 233420;
    $request->paymentLink->user->settings->userSignature = 'corporis';
    $request->paymentLink->user->settings->vatNumber = 'harum';
    $request->paymentLink->user->settings->yearsOfExperience = 385237;
    $request->paymentLink->user->status = UserStatusEnum::NORMAL;
    $request->paymentLink->user->subscriptionPlan = new SubscriptionPlan();
    $request->paymentLink->user->subscriptionPlan->cancellatedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-10-22T20:57:52.942Z');
    $request->paymentLink->user->subscriptionPlan->couponCode = 'vitae';
    $request->paymentLink->user->subscriptionPlan->currencyCode = 'accusamus';
    $request->paymentLink->user->subscriptionPlan->externalIdentifier = 'similique';
    $request->paymentLink->user->subscriptionPlan->features = [
        SubscriptionPlanFeaturesEnum::API,
        SubscriptionPlanFeaturesEnum::CLIENTS,
    ];
    $request->paymentLink->user->subscriptionPlan->hasDuePayment = false;
    $request->paymentLink->user->subscriptionPlan->hasDuePaymentSince = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-17T09:09:54.947Z');
    $request->paymentLink->user->subscriptionPlan->id = 324405;
    $request->paymentLink->user->subscriptionPlan->identifier = 'nobis';
    $request->paymentLink->user->subscriptionPlan->isActive = false;
    $request->paymentLink->user->subscriptionPlan->isLifetime = false;
    $request->paymentLink->user->subscriptionPlan->lastPaymentOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-11T09:37:00.887Z');
    $request->paymentLink->user->subscriptionPlan->maxClients = 795535;
    $request->paymentLink->user->subscriptionPlan->name = 'Mattie Kirlin';
    $request->paymentLink->user->subscriptionPlan->onHold = false;
    $request->paymentLink->user->subscriptionPlan->orderIdentifier = 'officiis';
    $request->paymentLink->user->subscriptionPlan->price = 8391.89;
    $request->paymentLink->user->subscriptionPlan->recurrence = SubscriptionPlanRecurrenceEnum::MONTHLY;
    $request->paymentLink->user->subscriptionPlan->saleId = 237742;
    $request->paymentLink->user->subscriptionPlan->status = SubscriptionPlanStatusEnum::CANCELED;
    $request->paymentLink->user->subscriptionPlan->systemCancelationReason = SubscriptionPlanSystemCancelationReasonEnum::FRAUD;
    $request->paymentLink->user->subscriptionPlan->trialEndsOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-11T21:56:06.958Z');
    $request->paymentLink->user->subscriptionPlan->trialNumberOfDays = 201517;
    $request->paymentLink->user->subscriptionPlan->trialStartsOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-26T13:56:43.134Z');
    $request->paymentLink->user->subscriptionPlan->userId = 867290;
    $request->paymentLink->user->subscriptionPlan->version = 519643;
    $request->paymentLink->user->type = UserTypeEnum::COLLABORATOR;
    $request->paymentLink->user->username = 'Fausto69';
    $request->paymentLink->user->verifiedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-12T16:37:17.721Z');
    $request->paymentLink->user->yearsOfExperience = UserYearsOfExperienceEnum::ONE;
    $request->paymentLink->userId = 994401;
    $request->xAuthKey = 'facilis';
    $request->xAuthSecret = 'voluptate';

    $response = $sdk->paymentLink->paymentLinkApiDeleteForm($request);

    if ($response->paymentLinkApiDeleteForm200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentLinkApiDeleteJson

Delete an existing payment link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentLinkApiDeleteJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentLink;
use \OpenAPI\OpenAPI\Models\Shared\Client;
use \OpenAPI\OpenAPI\Models\Shared\Currency;
use \OpenAPI\OpenAPI\Models\Shared\Invoice;
use \OpenAPI\OpenAPI\Models\Shared\Activity;
use \OpenAPI\OpenAPI\Models\Shared\ActivityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceAttachment;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceAttachmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceItem;
use \OpenAPI\OpenAPI\Models\Shared\PaymentGatewayForInvoice;
use \OpenAPI\OpenAPI\Models\Shared\Payment;
use \OpenAPI\OpenAPI\Models\Shared\PaymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentLinkItem;
use \OpenAPI\OpenAPI\Models\Shared\Tax;
use \OpenAPI\OpenAPI\Models\Shared\WorkType;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\ExternalConnection;
use \OpenAPI\OpenAPI\Models\Shared\UserSettings;
use \OpenAPI\OpenAPI\Models\Shared\Country;
use \OpenAPI\OpenAPI\Models\Shared\UserSettingsInvoiceTemplateEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserSettingsProfessionEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserSettingsReferralProgramEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserSettingsStoreCheckoutFieldsEnum;
use \OpenAPI\OpenAPI\Models\Shared\UiLanguage;
use \OpenAPI\OpenAPI\Models\Shared\UserStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlan;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlanFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlanRecurrenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlanStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlanSystemCancelationReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserYearsOfExperienceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentLinkApiDeleteJsonRequest();
    $request->paymentLink = new PaymentLink();
    $request->paymentLink->accessToken = 'expedita';
    $request->paymentLink->client = new Client();
    $request->paymentLink->client->address = '62614 Mauricio Courts';
    $request->paymentLink->client->clientCountryId = 378326;
    $request->paymentLink->client->clientCurrencyId = 604118;
    $request->paymentLink->client->companyRegistrationNumber = 'architecto';
    $request->paymentLink->client->defaultDueDateInDays = 382808;
    $request->paymentLink->client->email = 'Sonia.Bins54@hotmail.com';
    $request->paymentLink->client->id = 979574;
    $request->paymentLink->client->name = 'Tammy Medhurst';
    $request->paymentLink->client->phoneNumber = 'ipsum';
    $request->paymentLink->client->uiLanguageId = 406733;
    $request->paymentLink->client->userId = 579912;
    $request->paymentLink->client->vat = 'quos';
    $request->paymentLink->clientId = 975752;
    $request->paymentLink->currency = new Currency();
    $request->paymentLink->currency->code = 'tempora';
    $request->paymentLink->currency->id = 273009;
    $request->paymentLink->currency->name = 'Mrs. Johanna Jacobson';
    $request->paymentLink->currency->symbol = 'praesentium';
    $request->paymentLink->currency->value = 'facilis';
    $request->paymentLink->currencyId = 310381;
    $request->paymentLink->discountAmount = 2777.73;
    $request->paymentLink->id = 373035;
    $request->paymentLink->invoice = new Invoice();
    $request->paymentLink->invoice->accessToken = 'debitis';
    $request->paymentLink->invoice->activities = [
        new Activity(),
        new Activity(),
        new Activity(),
    ];
    $request->paymentLink->invoice->attachments = [
        new InvoiceAttachment(),
    ];
    $request->paymentLink->invoice->clientId = 750595;
    $request->paymentLink->invoice->clonedFromId = 625637;
    $request->paymentLink->invoice->currencyId = 333507;
    $request->paymentLink->invoice->discountAmount = 3295.43;
    $request->paymentLink->invoice->duedate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-02-07T00:03:24.642Z');
    $request->paymentLink->invoice->enablePartialPayments = false;
    $request->paymentLink->invoice->estimationId = 862319;
    $request->paymentLink->invoice->id = 168576;
    $request->paymentLink->invoice->invoiceCategoryId = 48690;
    $request->paymentLink->invoice->isDigitallySigned = false;
    $request->paymentLink->invoice->issuedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-29T06:16:27.485Z');
    $request->paymentLink->invoice->items = [
        new InvoiceItem(),
        new InvoiceItem(),
    ];
    $request->paymentLink->invoice->notes = 'in';
    $request->paymentLink->invoice->number = 'officiis';
    $request->paymentLink->invoice->orderId = 104627;
    $request->paymentLink->invoice->paymentGateways = [
        new PaymentGatewayForInvoice(),
        new PaymentGatewayForInvoice(),
        new PaymentGatewayForInvoice(),
    ];
    $request->paymentLink->invoice->paymentLinkId = 348476;
    $request->paymentLink->invoice->payments = [
        new Payment(),
        new Payment(),
        new Payment(),
    ];
    $request->paymentLink->invoice->poNumber = 'cum';
    $request->paymentLink->invoice->recurringProfileId = 386827;
    $request->paymentLink->invoice->shouldSendReminders = false;
    $request->paymentLink->invoice->status = InvoiceStatusEnum::OVERDUE;
    $request->paymentLink->invoice->subTotalAmount = 5300.89;
    $request->paymentLink->invoice->taxAmount = 6223.85;
    $request->paymentLink->invoice->terms = 'hic';
    $request->paymentLink->invoice->totalAmount = 7105.29;
    $request->paymentLink->invoice->userId = 892863;
    $request->paymentLink->items = [
        new PaymentLinkItem(),
    ];
    $request->paymentLink->number = 'dolorum';
    $request->paymentLink->subTotalAmount = 3416.98;
    $request->paymentLink->taxAmount = 6390.28;
    $request->paymentLink->totalAmount = 6762.43;
    $request->paymentLink->user = new User();
    $request->paymentLink->user->actionNotificationsLastReadOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-30T03:48:24.857Z');
    $request->paymentLink->user->email = 'Karina85@gmail.com';
    $request->paymentLink->user->externalConnections = [
        new ExternalConnection(),
    ];
    $request->paymentLink->user->hasBeenOnboarded = false;
    $request->paymentLink->user->id = 635057;
    $request->paymentLink->user->isLocked = false;
    $request->paymentLink->user->isVerified = false;
    $request->paymentLink->user->knowledgeNotificationsLastReadOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-27T06:14:44.746Z');
    $request->paymentLink->user->lastSeenOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-17T00:28:30.755Z');
    $request->paymentLink->user->name = 'Karen Lehner';
    $request->paymentLink->user->password = 'corporis';
    $request->paymentLink->user->passwordSalt = 'et';
    $request->paymentLink->user->referralPath = 'blanditiis';
    $request->paymentLink->user->referredUsers = 405942;
    $request->paymentLink->user->referrerKey = 'sed';
    $request->paymentLink->user->settings = new UserSettings();
    $request->paymentLink->user->settings->accountantEmail = 'sit';
    $request->paymentLink->user->settings->address = '3960 Vivienne Estates';
    $request->paymentLink->user->settings->apiKey = 'harum';
    $request->paymentLink->user->settings->apiSecret = 'dicta';
    $request->paymentLink->user->settings->backgroundImage = 'architecto';
    $request->paymentLink->user->settings->bank = 'occaecati';
    $request->paymentLink->user->settings->bankAccount = 'labore';
    $request->paymentLink->user->settings->cname = 'quidem';
    $request->paymentLink->user->settings->companyRegistrationNumber = 'atque';
    $request->paymentLink->user->settings->country = new Country();
    $request->paymentLink->user->settings->country->id = 671957;
    $request->paymentLink->user->settings->country->name = 'Mrs. Roman Howell';
    $request->paymentLink->user->settings->country->value = 'voluptate';
    $request->paymentLink->user->settings->countryId = 600392;
    $request->paymentLink->user->settings->currency = new Currency();
    $request->paymentLink->user->settings->currency->code = 'reiciendis';
    $request->paymentLink->user->settings->currency->id = 588740;
    $request->paymentLink->user->settings->currency->name = 'Miss Brendan Volkman';
    $request->paymentLink->user->settings->currency->symbol = 'reprehenderit';
    $request->paymentLink->user->settings->currency->value = 'facere';
    $request->paymentLink->user->settings->currencyId = 685092;
    $request->paymentLink->user->settings->currencySymbol = 'praesentium';
    $request->paymentLink->user->settings->defaultDateFormat = 'mollitia';
    $request->paymentLink->user->settings->defaultDueDateInDays = 333965;
    $request->paymentLink->user->settings->doNotTrack = false;
    $request->paymentLink->user->settings->enableClientPortal = false;
    $request->paymentLink->user->settings->enablePredictiveInvoicing = false;
    $request->paymentLink->user->settings->enableRecurringInvoicing = false;
    $request->paymentLink->user->settings->hasInvoiceLogo = false;
    $request->paymentLink->user->settings->iban = 'voluptatem';
    $request->paymentLink->user->settings->id = 790840;
    $request->paymentLink->user->settings->invoiceTemplate = UserSettingsInvoiceTemplateEnum::TEMPLATE2;
    $request->paymentLink->user->settings->invoiceTemplateColorHex = 'quasi';
    $request->paymentLink->user->settings->phoneNumber = 'atque';
    $request->paymentLink->user->settings->profession = UserSettingsProfessionEnum::FREELANCERS;
    $request->paymentLink->user->settings->receiveSmsNotifications = false;
    $request->paymentLink->user->settings->referralProgram = UserSettingsReferralProgramEnum::DISABLED;
    $request->paymentLink->user->settings->storeCheckoutFields = UserSettingsStoreCheckoutFieldsEnum::SHOW_ALL_FIELDS;
    $request->paymentLink->user->settings->storeColorHex = 'suscipit';
    $request->paymentLink->user->settings->storeCurrency = new Currency();
    $request->paymentLink->user->settings->storeCurrency->code = 'quidem';
    $request->paymentLink->user->settings->storeCurrency->id = 806670;
    $request->paymentLink->user->settings->storeCurrency->name = 'Georgia Farrell';
    $request->paymentLink->user->settings->storeCurrency->symbol = 'atque';
    $request->paymentLink->user->settings->storeCurrency->value = 'error';
    $request->paymentLink->user->settings->storeCurrencyId = 887265;
    $request->paymentLink->user->settings->storeCustomJavaScript = 'officiis';
    $request->paymentLink->user->settings->storeDescription = 'accusamus';
    $request->paymentLink->user->settings->storeEmail = 'natus';
    $request->paymentLink->user->settings->storeLanguage = new UiLanguage();
    $request->paymentLink->user->settings->storeLanguage->id = 328303;
    $request->paymentLink->user->settings->storeLanguage->name = 'Tara Wuckert';
    $request->paymentLink->user->settings->storeLanguage->uiCulture = 'error';
    $request->paymentLink->user->settings->storeLanguageId = 502721;
    $request->paymentLink->user->settings->storeName = 'suscipit';
    $request->paymentLink->user->settings->storePurchaseEmailMessage = 'repudiandae';
    $request->paymentLink->user->settings->storePurchaseThankYouMessage = 'atque';
    $request->paymentLink->user->settings->storeTextColorHex = 'atque';
    $request->paymentLink->user->settings->storeUrl = 'sunt';
    $request->paymentLink->user->settings->subscribeToProductEmails = false;
    $request->paymentLink->user->settings->swift = 'recusandae';
    $request->paymentLink->user->settings->terms = 'dolorum';
    $request->paymentLink->user->settings->userId = 829898;
    $request->paymentLink->user->settings->userSignature = 'labore';
    $request->paymentLink->user->settings->vatNumber = 'reiciendis';
    $request->paymentLink->user->settings->yearsOfExperience = 42976;
    $request->paymentLink->user->status = UserStatusEnum::LOCKED;
    $request->paymentLink->user->subscriptionPlan = new SubscriptionPlan();
    $request->paymentLink->user->subscriptionPlan->cancellatedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-18T20:20:36.419Z');
    $request->paymentLink->user->subscriptionPlan->couponCode = 'beatae';
    $request->paymentLink->user->subscriptionPlan->currencyCode = 'dolores';
    $request->paymentLink->user->subscriptionPlan->externalIdentifier = 'enim';
    $request->paymentLink->user->subscriptionPlan->features = [
        SubscriptionPlanFeaturesEnum::TEAMS,
        SubscriptionPlanFeaturesEnum::CNAME,
    ];
    $request->paymentLink->user->subscriptionPlan->hasDuePayment = false;
    $request->paymentLink->user->subscriptionPlan->hasDuePaymentSince = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-26T23:29:35.541Z');
    $request->paymentLink->user->subscriptionPlan->id = 906355;
    $request->paymentLink->user->subscriptionPlan->identifier = 'consequuntur';
    $request->paymentLink->user->subscriptionPlan->isActive = false;
    $request->paymentLink->user->subscriptionPlan->isLifetime = false;
    $request->paymentLink->user->subscriptionPlan->lastPaymentOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-03-24T23:56:32.062Z');
    $request->paymentLink->user->subscriptionPlan->maxClients = 597937;
    $request->paymentLink->user->subscriptionPlan->name = 'Sylvia Upton';
    $request->paymentLink->user->subscriptionPlan->onHold = false;
    $request->paymentLink->user->subscriptionPlan->orderIdentifier = 'fugit';
    $request->paymentLink->user->subscriptionPlan->price = 6611.18;
    $request->paymentLink->user->subscriptionPlan->recurrence = SubscriptionPlanRecurrenceEnum::MONTHLY;
    $request->paymentLink->user->subscriptionPlan->saleId = 440264;
    $request->paymentLink->user->subscriptionPlan->status = SubscriptionPlanStatusEnum::CANCELED;
    $request->paymentLink->user->subscriptionPlan->systemCancelationReason = SubscriptionPlanSystemCancelationReasonEnum::FAIL_TO_CAPTURE_FEE;
    $request->paymentLink->user->subscriptionPlan->trialEndsOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-21T18:58:57.960Z');
    $request->paymentLink->user->subscriptionPlan->trialNumberOfDays = 910994;
    $request->paymentLink->user->subscriptionPlan->trialStartsOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-14T08:24:16.303Z');
    $request->paymentLink->user->subscriptionPlan->userId = 39615;
    $request->paymentLink->user->subscriptionPlan->version = 434156;
    $request->paymentLink->user->type = UserTypeEnum::ANONYMOUS;
    $request->paymentLink->user->username = 'Josephine_Beier';
    $request->paymentLink->user->verifiedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-05T22:37:00.418Z');
    $request->paymentLink->user->yearsOfExperience = UserYearsOfExperienceEnum::ONE_TO_THREE;
    $request->paymentLink->userId = 898063;
    $request->xAuthKey = 'ratione';
    $request->xAuthSecret = 'laborum';

    $response = $sdk->paymentLink->paymentLinkApiDeleteJson($request);

    if ($response->paymentLinkApiDeleteJSON200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentLinkApiDeleteRaw

Delete an existing payment link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentLinkApiDeleteRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentLinkApiDeleteRawRequest();
    $request->requestBody = 'distinctio';
    $request->xAuthKey = 'voluptatum';
    $request->xAuthSecret = 'rem';

    $response = $sdk->paymentLink->paymentLinkApiDeleteRaw($request);

    if ($response->paymentLinkApiDeleteRaw200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentLinkApiNewForm

Create a payment link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentLinkApiNewFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentLink;
use \OpenAPI\OpenAPI\Models\Shared\Client;
use \OpenAPI\OpenAPI\Models\Shared\Currency;
use \OpenAPI\OpenAPI\Models\Shared\Invoice;
use \OpenAPI\OpenAPI\Models\Shared\Activity;
use \OpenAPI\OpenAPI\Models\Shared\ActivityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceAttachment;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceAttachmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceItem;
use \OpenAPI\OpenAPI\Models\Shared\PaymentGatewayForInvoice;
use \OpenAPI\OpenAPI\Models\Shared\Payment;
use \OpenAPI\OpenAPI\Models\Shared\PaymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentLinkItem;
use \OpenAPI\OpenAPI\Models\Shared\Tax;
use \OpenAPI\OpenAPI\Models\Shared\WorkType;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\ExternalConnection;
use \OpenAPI\OpenAPI\Models\Shared\UserSettings;
use \OpenAPI\OpenAPI\Models\Shared\Country;
use \OpenAPI\OpenAPI\Models\Shared\UserSettingsInvoiceTemplateEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserSettingsProfessionEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserSettingsReferralProgramEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserSettingsStoreCheckoutFieldsEnum;
use \OpenAPI\OpenAPI\Models\Shared\UiLanguage;
use \OpenAPI\OpenAPI\Models\Shared\UserStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlan;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlanFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlanRecurrenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlanStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlanSystemCancelationReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserYearsOfExperienceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentLinkApiNewFormRequest();
    $request->paymentLink = new PaymentLink();
    $request->paymentLink->accessToken = 'aliquam';
    $request->paymentLink->client = new Client();
    $request->paymentLink->client->address = '90354 Hodkiewicz Avenue';
    $request->paymentLink->client->clientCountryId = 979527;
    $request->paymentLink->client->clientCurrencyId = 970222;
    $request->paymentLink->client->companyRegistrationNumber = 'dolores';
    $request->paymentLink->client->defaultDueDateInDays = 663866;
    $request->paymentLink->client->email = 'Elda6@gmail.com';
    $request->paymentLink->client->id = 925703;
    $request->paymentLink->client->name = 'Calvin Kreiger';
    $request->paymentLink->client->phoneNumber = 'culpa';
    $request->paymentLink->client->uiLanguageId = 238413;
    $request->paymentLink->client->userId = 890653;
    $request->paymentLink->client->vat = 'laudantium';
    $request->paymentLink->clientId = 432606;
    $request->paymentLink->currency = new Currency();
    $request->paymentLink->currency->code = 'nemo';
    $request->paymentLink->currency->id = 928219;
    $request->paymentLink->currency->name = 'Sherri Hauck';
    $request->paymentLink->currency->symbol = 'provident';
    $request->paymentLink->currency->value = 'aspernatur';
    $request->paymentLink->currencyId = 354506;
    $request->paymentLink->discountAmount = 968.04;
    $request->paymentLink->id = 657020;
    $request->paymentLink->invoice = new Invoice();
    $request->paymentLink->invoice->accessToken = 'nostrum';
    $request->paymentLink->invoice->activities = [
        new Activity(),
        new Activity(),
        new Activity(),
    ];
    $request->paymentLink->invoice->attachments = [
        new InvoiceAttachment(),
        new InvoiceAttachment(),
        new InvoiceAttachment(),
    ];
    $request->paymentLink->invoice->clientId = 821719;
    $request->paymentLink->invoice->clonedFromId = 659177;
    $request->paymentLink->invoice->currencyId = 402767;
    $request->paymentLink->invoice->discountAmount = 3972.57;
    $request->paymentLink->invoice->duedate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-01T06:19:29.377Z');
    $request->paymentLink->invoice->enablePartialPayments = false;
    $request->paymentLink->invoice->estimationId = 984632;
    $request->paymentLink->invoice->id = 351893;
    $request->paymentLink->invoice->invoiceCategoryId = 448143;
    $request->paymentLink->invoice->isDigitallySigned = false;
    $request->paymentLink->invoice->issuedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-15T12:37:51.202Z');
    $request->paymentLink->invoice->items = [
        new InvoiceItem(),
        new InvoiceItem(),
        new InvoiceItem(),
    ];
    $request->paymentLink->invoice->notes = 'laborum';
    $request->paymentLink->invoice->number = 'placeat';
    $request->paymentLink->invoice->orderId = 266697;
    $request->paymentLink->invoice->paymentGateways = [
        new PaymentGatewayForInvoice(),
        new PaymentGatewayForInvoice(),
        new PaymentGatewayForInvoice(),
        new PaymentGatewayForInvoice(),
    ];
    $request->paymentLink->invoice->paymentLinkId = 564064;
    $request->paymentLink->invoice->payments = [
        new Payment(),
        new Payment(),
        new Payment(),
        new Payment(),
    ];
    $request->paymentLink->invoice->poNumber = 'sapiente';
    $request->paymentLink->invoice->recurringProfileId = 764562;
    $request->paymentLink->invoice->shouldSendReminders = false;
    $request->paymentLink->invoice->status = InvoiceStatusEnum::DRAFT;
    $request->paymentLink->invoice->subTotalAmount = 6982.49;
    $request->paymentLink->invoice->taxAmount = 2722.29;
    $request->paymentLink->invoice->terms = 'quis';
    $request->paymentLink->invoice->totalAmount = 820.57;
    $request->paymentLink->invoice->userId = 147685;
    $request->paymentLink->items = [
        new PaymentLinkItem(),
        new PaymentLinkItem(),
        new PaymentLinkItem(),
        new PaymentLinkItem(),
    ];
    $request->paymentLink->number = 'quae';
    $request->paymentLink->subTotalAmount = 216.88;
    $request->paymentLink->taxAmount = 2419.01;
    $request->paymentLink->totalAmount = 1372.51;
    $request->paymentLink->user = new User();
    $request->paymentLink->user->actionNotificationsLastReadOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-27T20:53:33.627Z');
    $request->paymentLink->user->email = 'Sasha95@yahoo.com';
    $request->paymentLink->user->externalConnections = [
        new ExternalConnection(),
        new ExternalConnection(),
    ];
    $request->paymentLink->user->hasBeenOnboarded = false;
    $request->paymentLink->user->id = 117320;
    $request->paymentLink->user->isLocked = false;
    $request->paymentLink->user->isVerified = false;
    $request->paymentLink->user->knowledgeNotificationsLastReadOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-22T22:38:36.599Z');
    $request->paymentLink->user->lastSeenOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-10-27T12:32:54.445Z');
    $request->paymentLink->user->name = 'Ed Weimann DVM';
    $request->paymentLink->user->password = 'perspiciatis';
    $request->paymentLink->user->passwordSalt = 'maiores';
    $request->paymentLink->user->referralPath = 'debitis';
    $request->paymentLink->user->referredUsers = 399802;
    $request->paymentLink->user->referrerKey = 'porro';
    $request->paymentLink->user->settings = new UserSettings();
    $request->paymentLink->user->settings->accountantEmail = 'suscipit';
    $request->paymentLink->user->settings->address = '17616 Stoltenberg Avenue';
    $request->paymentLink->user->settings->apiKey = 'quasi';
    $request->paymentLink->user->settings->apiSecret = 'et';
    $request->paymentLink->user->settings->backgroundImage = 'ducimus';
    $request->paymentLink->user->settings->bank = 'natus';
    $request->paymentLink->user->settings->bankAccount = 'occaecati';
    $request->paymentLink->user->settings->cname = 'suscipit';
    $request->paymentLink->user->settings->companyRegistrationNumber = 'adipisci';
    $request->paymentLink->user->settings->country = new Country();
    $request->paymentLink->user->settings->country->id = 96562;
    $request->paymentLink->user->settings->country->name = 'Melba Stokes I';
    $request->paymentLink->user->settings->country->value = 'nihil';
    $request->paymentLink->user->settings->countryId = 473190;
    $request->paymentLink->user->settings->currency = new Currency();
    $request->paymentLink->user->settings->currency->code = 'dicta';
    $request->paymentLink->user->settings->currency->id = 479754;
    $request->paymentLink->user->settings->currency->name = 'Irma Wuckert';
    $request->paymentLink->user->settings->currency->symbol = 'architecto';
    $request->paymentLink->user->settings->currency->value = 'fugiat';
    $request->paymentLink->user->settings->currencyId = 39650;
    $request->paymentLink->user->settings->currencySymbol = 'dicta';
    $request->paymentLink->user->settings->defaultDateFormat = 'odio';
    $request->paymentLink->user->settings->defaultDueDateInDays = 271252;
    $request->paymentLink->user->settings->doNotTrack = false;
    $request->paymentLink->user->settings->enableClientPortal = false;
    $request->paymentLink->user->settings->enablePredictiveInvoicing = false;
    $request->paymentLink->user->settings->enableRecurringInvoicing = false;
    $request->paymentLink->user->settings->hasInvoiceLogo = false;
    $request->paymentLink->user->settings->iban = 'esse';
    $request->paymentLink->user->settings->id = 403793;
    $request->paymentLink->user->settings->invoiceTemplate = UserSettingsInvoiceTemplateEnum::DEFAULT;
    $request->paymentLink->user->settings->invoiceTemplateColorHex = 'aliquid';
    $request->paymentLink->user->settings->phoneNumber = 'ipsa';
    $request->paymentLink->user->settings->profession = UserSettingsProfessionEnum::SMES;
    $request->paymentLink->user->settings->receiveSmsNotifications = false;
    $request->paymentLink->user->settings->referralProgram = UserSettingsReferralProgramEnum::ENABLED;
    $request->paymentLink->user->settings->storeCheckoutFields = UserSettingsStoreCheckoutFieldsEnum::SHOW_MINIMUM_REQUIRED_FIELDS;
    $request->paymentLink->user->settings->storeColorHex = 'fugiat';
    $request->paymentLink->user->settings->storeCurrency = new Currency();
    $request->paymentLink->user->settings->storeCurrency->code = 'expedita';
    $request->paymentLink->user->settings->storeCurrency->id = 399667;
    $request->paymentLink->user->settings->storeCurrency->name = 'Ms. Ricardo Jacobi';
    $request->paymentLink->user->settings->storeCurrency->symbol = 'iste';
    $request->paymentLink->user->settings->storeCurrency->value = 'id';
    $request->paymentLink->user->settings->storeCurrencyId = 70042;
    $request->paymentLink->user->settings->storeCustomJavaScript = 'error';
    $request->paymentLink->user->settings->storeDescription = 'possimus';
    $request->paymentLink->user->settings->storeEmail = 'voluptates';
    $request->paymentLink->user->settings->storeLanguage = new UiLanguage();
    $request->paymentLink->user->settings->storeLanguage->id = 653421;
    $request->paymentLink->user->settings->storeLanguage->name = 'Wm Hane';
    $request->paymentLink->user->settings->storeLanguage->uiCulture = 'vitae';
    $request->paymentLink->user->settings->storeLanguageId = 833316;
    $request->paymentLink->user->settings->storeName = 'ex';
    $request->paymentLink->user->settings->storePurchaseEmailMessage = 'quo';
    $request->paymentLink->user->settings->storePurchaseThankYouMessage = 'ex';
    $request->paymentLink->user->settings->storeTextColorHex = 'ut';
    $request->paymentLink->user->settings->storeUrl = 'ad';
    $request->paymentLink->user->settings->subscribeToProductEmails = false;
    $request->paymentLink->user->settings->swift = 'expedita';
    $request->paymentLink->user->settings->terms = 'voluptatem';
    $request->paymentLink->user->settings->userId = 561577;
    $request->paymentLink->user->settings->userSignature = 'cum';
    $request->paymentLink->user->settings->vatNumber = 'aliquid';
    $request->paymentLink->user->settings->yearsOfExperience = 109784;
    $request->paymentLink->user->status = UserStatusEnum::FRAUDLENT;
    $request->paymentLink->user->subscriptionPlan = new SubscriptionPlan();
    $request->paymentLink->user->subscriptionPlan->cancellatedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-30T18:42:59.470Z');
    $request->paymentLink->user->subscriptionPlan->couponCode = 'rerum';
    $request->paymentLink->user->subscriptionPlan->currencyCode = 'est';
    $request->paymentLink->user->subscriptionPlan->externalIdentifier = 'culpa';
    $request->paymentLink->user->subscriptionPlan->features = [
        SubscriptionPlanFeaturesEnum::CNAME,
    ];
    $request->paymentLink->user->subscriptionPlan->hasDuePayment = false;
    $request->paymentLink->user->subscriptionPlan->hasDuePaymentSince = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-09T21:19:27.244Z');
    $request->paymentLink->user->subscriptionPlan->id = 682119;
    $request->paymentLink->user->subscriptionPlan->identifier = 'pariatur';
    $request->paymentLink->user->subscriptionPlan->isActive = false;
    $request->paymentLink->user->subscriptionPlan->isLifetime = false;
    $request->paymentLink->user->subscriptionPlan->lastPaymentOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-30T00:52:48.741Z');
    $request->paymentLink->user->subscriptionPlan->maxClients = 1207;
    $request->paymentLink->user->subscriptionPlan->name = 'Darin Jakubowski';
    $request->paymentLink->user->subscriptionPlan->onHold = false;
    $request->paymentLink->user->subscriptionPlan->orderIdentifier = 'minus';
    $request->paymentLink->user->subscriptionPlan->price = 3651;
    $request->paymentLink->user->subscriptionPlan->recurrence = SubscriptionPlanRecurrenceEnum::YEARLY;
    $request->paymentLink->user->subscriptionPlan->saleId = 190567;
    $request->paymentLink->user->subscriptionPlan->status = SubscriptionPlanStatusEnum::EXPIRED_TRIAL;
    $request->paymentLink->user->subscriptionPlan->systemCancelationReason = SubscriptionPlanSystemCancelationReasonEnum::FAIL_TO_CAPTURE_FEE;
    $request->paymentLink->user->subscriptionPlan->trialEndsOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-06-12T15:01:22.390Z');
    $request->paymentLink->user->subscriptionPlan->trialNumberOfDays = 770675;
    $request->paymentLink->user->subscriptionPlan->trialStartsOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-11-03T00:32:12.114Z');
    $request->paymentLink->user->subscriptionPlan->userId = 373216;
    $request->paymentLink->user->subscriptionPlan->version = 633415;
    $request->paymentLink->user->type = UserTypeEnum::ANONYMOUS;
    $request->paymentLink->user->username = 'Elody.Bode';
    $request->paymentLink->user->verifiedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-12T04:34:00.871Z');
    $request->paymentLink->user->yearsOfExperience = UserYearsOfExperienceEnum::ONE;
    $request->paymentLink->userId = 100014;
    $request->xAuthKey = 'sit';
    $request->xAuthSecret = 'modi';

    $response = $sdk->paymentLink->paymentLinkApiNewForm($request);

    if ($response->paymentLinkApiNewForm200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentLinkApiNewJson

Create a payment link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentLinkApiNewJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\PaymentLink;
use \OpenAPI\OpenAPI\Models\Shared\Client;
use \OpenAPI\OpenAPI\Models\Shared\Currency;
use \OpenAPI\OpenAPI\Models\Shared\Invoice;
use \OpenAPI\OpenAPI\Models\Shared\Activity;
use \OpenAPI\OpenAPI\Models\Shared\ActivityTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceAttachment;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceAttachmentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceItem;
use \OpenAPI\OpenAPI\Models\Shared\PaymentGatewayForInvoice;
use \OpenAPI\OpenAPI\Models\Shared\Payment;
use \OpenAPI\OpenAPI\Models\Shared\PaymentTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\InvoiceStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\PaymentLinkItem;
use \OpenAPI\OpenAPI\Models\Shared\Tax;
use \OpenAPI\OpenAPI\Models\Shared\WorkType;
use \OpenAPI\OpenAPI\Models\Shared\User;
use \OpenAPI\OpenAPI\Models\Shared\ExternalConnection;
use \OpenAPI\OpenAPI\Models\Shared\UserSettings;
use \OpenAPI\OpenAPI\Models\Shared\Country;
use \OpenAPI\OpenAPI\Models\Shared\UserSettingsInvoiceTemplateEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserSettingsProfessionEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserSettingsReferralProgramEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserSettingsStoreCheckoutFieldsEnum;
use \OpenAPI\OpenAPI\Models\Shared\UiLanguage;
use \OpenAPI\OpenAPI\Models\Shared\UserStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlan;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlanFeaturesEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlanRecurrenceEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlanStatusEnum;
use \OpenAPI\OpenAPI\Models\Shared\SubscriptionPlanSystemCancelationReasonEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\UserYearsOfExperienceEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentLinkApiNewJsonRequest();
    $request->paymentLink = new PaymentLink();
    $request->paymentLink->accessToken = 'fugit';
    $request->paymentLink->client = new Client();
    $request->paymentLink->client->address = '50283 Amy Mount';
    $request->paymentLink->client->clientCountryId = 911198;
    $request->paymentLink->client->clientCurrencyId = 773456;
    $request->paymentLink->client->companyRegistrationNumber = 'officiis';
    $request->paymentLink->client->defaultDueDateInDays = 456410;
    $request->paymentLink->client->email = 'Candice71@hotmail.com';
    $request->paymentLink->client->id = 432984;
    $request->paymentLink->client->name = 'Jennie Gutkowski DDS';
    $request->paymentLink->client->phoneNumber = 'autem';
    $request->paymentLink->client->uiLanguageId = 751022;
    $request->paymentLink->client->userId = 388319;
    $request->paymentLink->client->vat = 'recusandae';
    $request->paymentLink->clientId = 160393;
    $request->paymentLink->currency = new Currency();
    $request->paymentLink->currency->code = 'voluptatem';
    $request->paymentLink->currency->id = 350207;
    $request->paymentLink->currency->name = 'Arthur Huel';
    $request->paymentLink->currency->symbol = 'est';
    $request->paymentLink->currency->value = 'harum';
    $request->paymentLink->currencyId = 192718;
    $request->paymentLink->discountAmount = 9873.49;
    $request->paymentLink->id = 918092;
    $request->paymentLink->invoice = new Invoice();
    $request->paymentLink->invoice->accessToken = 'optio';
    $request->paymentLink->invoice->activities = [
        new Activity(),
        new Activity(),
        new Activity(),
    ];
    $request->paymentLink->invoice->attachments = [
        new InvoiceAttachment(),
        new InvoiceAttachment(),
    ];
    $request->paymentLink->invoice->clientId = 455898;
    $request->paymentLink->invoice->clonedFromId = 501063;
    $request->paymentLink->invoice->currencyId = 642352;
    $request->paymentLink->invoice->discountAmount = 3763.89;
    $request->paymentLink->invoice->duedate = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-20T19:22:19.746Z');
    $request->paymentLink->invoice->enablePartialPayments = false;
    $request->paymentLink->invoice->estimationId = 551079;
    $request->paymentLink->invoice->id = 260904;
    $request->paymentLink->invoice->invoiceCategoryId = 131903;
    $request->paymentLink->invoice->isDigitallySigned = false;
    $request->paymentLink->invoice->issuedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-19T19:28:46.304Z');
    $request->paymentLink->invoice->items = [
        new InvoiceItem(),
        new InvoiceItem(),
        new InvoiceItem(),
    ];
    $request->paymentLink->invoice->notes = 'laudantium';
    $request->paymentLink->invoice->number = 'incidunt';
    $request->paymentLink->invoice->orderId = 97493;
    $request->paymentLink->invoice->paymentGateways = [
        new PaymentGatewayForInvoice(),
        new PaymentGatewayForInvoice(),
        new PaymentGatewayForInvoice(),
    ];
    $request->paymentLink->invoice->paymentLinkId = 851854;
    $request->paymentLink->invoice->payments = [
        new Payment(),
    ];
    $request->paymentLink->invoice->poNumber = 'nisi';
    $request->paymentLink->invoice->recurringProfileId = 159845;
    $request->paymentLink->invoice->shouldSendReminders = false;
    $request->paymentLink->invoice->status = InvoiceStatusEnum::PAID;
    $request->paymentLink->invoice->subTotalAmount = 468.06;
    $request->paymentLink->invoice->taxAmount = 5854.32;
    $request->paymentLink->invoice->terms = 'reiciendis';
    $request->paymentLink->invoice->totalAmount = 7468.37;
    $request->paymentLink->invoice->userId = 3860;
    $request->paymentLink->items = [
        new PaymentLinkItem(),
        new PaymentLinkItem(),
        new PaymentLinkItem(),
    ];
    $request->paymentLink->number = 'eos';
    $request->paymentLink->subTotalAmount = 5790.11;
    $request->paymentLink->taxAmount = 6128.67;
    $request->paymentLink->totalAmount = 1700.99;
    $request->paymentLink->user = new User();
    $request->paymentLink->user->actionNotificationsLastReadOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-25T11:28:06.253Z');
    $request->paymentLink->user->email = 'Whitney_Reichel@hotmail.com';
    $request->paymentLink->user->externalConnections = [
        new ExternalConnection(),
        new ExternalConnection(),
    ];
    $request->paymentLink->user->hasBeenOnboarded = false;
    $request->paymentLink->user->id = 507636;
    $request->paymentLink->user->isLocked = false;
    $request->paymentLink->user->isVerified = false;
    $request->paymentLink->user->knowledgeNotificationsLastReadOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-06T01:23:27.992Z');
    $request->paymentLink->user->lastSeenOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-05-09T07:07:29.255Z');
    $request->paymentLink->user->name = 'Lorena Johns';
    $request->paymentLink->user->password = 'modi';
    $request->paymentLink->user->passwordSalt = 'nam';
    $request->paymentLink->user->referralPath = 'vero';
    $request->paymentLink->user->referredUsers = 32901;
    $request->paymentLink->user->referrerKey = 'ipsam';
    $request->paymentLink->user->settings = new UserSettings();
    $request->paymentLink->user->settings->accountantEmail = 'vel';
    $request->paymentLink->user->settings->address = '02935 Nolan Land';
    $request->paymentLink->user->settings->apiKey = 'nemo';
    $request->paymentLink->user->settings->apiSecret = 'reprehenderit';
    $request->paymentLink->user->settings->backgroundImage = 'est';
    $request->paymentLink->user->settings->bank = 'quis';
    $request->paymentLink->user->settings->bankAccount = 'sint';
    $request->paymentLink->user->settings->cname = 'accusamus';
    $request->paymentLink->user->settings->companyRegistrationNumber = 'impedit';
    $request->paymentLink->user->settings->country = new Country();
    $request->paymentLink->user->settings->country->id = 945027;
    $request->paymentLink->user->settings->country->name = 'Emmett Jakubowski';
    $request->paymentLink->user->settings->country->value = 'delectus';
    $request->paymentLink->user->settings->countryId = 65082;
    $request->paymentLink->user->settings->currency = new Currency();
    $request->paymentLink->user->settings->currency->code = 'minus';
    $request->paymentLink->user->settings->currency->id = 685478;
    $request->paymentLink->user->settings->currency->name = 'Vincent Frami';
    $request->paymentLink->user->settings->currency->symbol = 'impedit';
    $request->paymentLink->user->settings->currency->value = 'magni';
    $request->paymentLink->user->settings->currencyId = 746585;
    $request->paymentLink->user->settings->currencySymbol = 'repudiandae';
    $request->paymentLink->user->settings->defaultDateFormat = 'nam';
    $request->paymentLink->user->settings->defaultDueDateInDays = 294076;
    $request->paymentLink->user->settings->doNotTrack = false;
    $request->paymentLink->user->settings->enableClientPortal = false;
    $request->paymentLink->user->settings->enablePredictiveInvoicing = false;
    $request->paymentLink->user->settings->enableRecurringInvoicing = false;
    $request->paymentLink->user->settings->hasInvoiceLogo = false;
    $request->paymentLink->user->settings->iban = 'iusto';
    $request->paymentLink->user->settings->id = 453094;
    $request->paymentLink->user->settings->invoiceTemplate = UserSettingsInvoiceTemplateEnum::DEFAULT;
    $request->paymentLink->user->settings->invoiceTemplateColorHex = 'dignissimos';
    $request->paymentLink->user->settings->phoneNumber = 'neque';
    $request->paymentLink->user->settings->profession = UserSettingsProfessionEnum::ENTERPRISE;
    $request->paymentLink->user->settings->receiveSmsNotifications = false;
    $request->paymentLink->user->settings->referralProgram = UserSettingsReferralProgramEnum::DISABLED;
    $request->paymentLink->user->settings->storeCheckoutFields = UserSettingsStoreCheckoutFieldsEnum::SHOW_ALL_FIELDS;
    $request->paymentLink->user->settings->storeColorHex = 'iure';
    $request->paymentLink->user->settings->storeCurrency = new Currency();
    $request->paymentLink->user->settings->storeCurrency->code = 'odit';
    $request->paymentLink->user->settings->storeCurrency->id = 974990;
    $request->paymentLink->user->settings->storeCurrency->name = 'Dr. Megan Spinka';
    $request->paymentLink->user->settings->storeCurrency->symbol = 'architecto';
    $request->paymentLink->user->settings->storeCurrency->value = 'voluptatibus';
    $request->paymentLink->user->settings->storeCurrencyId = 156383;
    $request->paymentLink->user->settings->storeCustomJavaScript = 'porro';
    $request->paymentLink->user->settings->storeDescription = 'aliquam';
    $request->paymentLink->user->settings->storeEmail = 'velit';
    $request->paymentLink->user->settings->storeLanguage = new UiLanguage();
    $request->paymentLink->user->settings->storeLanguage->id = 75359;
    $request->paymentLink->user->settings->storeLanguage->name = 'Dr. Gina Jaskolski';
    $request->paymentLink->user->settings->storeLanguage->uiCulture = 'eum';
    $request->paymentLink->user->settings->storeLanguageId = 246557;
    $request->paymentLink->user->settings->storeName = 'ut';
    $request->paymentLink->user->settings->storePurchaseEmailMessage = 'perspiciatis';
    $request->paymentLink->user->settings->storePurchaseThankYouMessage = 'earum';
    $request->paymentLink->user->settings->storeTextColorHex = 'dicta';
    $request->paymentLink->user->settings->storeUrl = 'impedit';
    $request->paymentLink->user->settings->subscribeToProductEmails = false;
    $request->paymentLink->user->settings->swift = 'voluptatibus';
    $request->paymentLink->user->settings->terms = 'iste';
    $request->paymentLink->user->settings->userId = 932562;
    $request->paymentLink->user->settings->userSignature = 'alias';
    $request->paymentLink->user->settings->vatNumber = 'nisi';
    $request->paymentLink->user->settings->yearsOfExperience = 931505;
    $request->paymentLink->user->status = UserStatusEnum::NORMAL;
    $request->paymentLink->user->subscriptionPlan = new SubscriptionPlan();
    $request->paymentLink->user->subscriptionPlan->cancellatedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-02T05:01:22.981Z');
    $request->paymentLink->user->subscriptionPlan->couponCode = 'dolor';
    $request->paymentLink->user->subscriptionPlan->currencyCode = 'iusto';
    $request->paymentLink->user->subscriptionPlan->externalIdentifier = 'sit';
    $request->paymentLink->user->subscriptionPlan->features = [
        SubscriptionPlanFeaturesEnum::API,
    ];
    $request->paymentLink->user->subscriptionPlan->hasDuePayment = false;
    $request->paymentLink->user->subscriptionPlan->hasDuePaymentSince = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-02-22T23:54:26.109Z');
    $request->paymentLink->user->subscriptionPlan->id = 408303;
    $request->paymentLink->user->subscriptionPlan->identifier = 'quidem';
    $request->paymentLink->user->subscriptionPlan->isActive = false;
    $request->paymentLink->user->subscriptionPlan->isLifetime = false;
    $request->paymentLink->user->subscriptionPlan->lastPaymentOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-18T14:54:26.943Z');
    $request->paymentLink->user->subscriptionPlan->maxClients = 809365;
    $request->paymentLink->user->subscriptionPlan->name = 'Malcolm Lind';
    $request->paymentLink->user->subscriptionPlan->onHold = false;
    $request->paymentLink->user->subscriptionPlan->orderIdentifier = 'ullam';
    $request->paymentLink->user->subscriptionPlan->price = 6001.93;
    $request->paymentLink->user->subscriptionPlan->recurrence = SubscriptionPlanRecurrenceEnum::YEARLY;
    $request->paymentLink->user->subscriptionPlan->saleId = 654082;
    $request->paymentLink->user->subscriptionPlan->status = SubscriptionPlanStatusEnum::CANCELED;
    $request->paymentLink->user->subscriptionPlan->systemCancelationReason = SubscriptionPlanSystemCancelationReasonEnum::FAIL_TO_CAPTURE_FEE;
    $request->paymentLink->user->subscriptionPlan->trialEndsOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-02T02:16:13.030Z');
    $request->paymentLink->user->subscriptionPlan->trialNumberOfDays = 621666;
    $request->paymentLink->user->subscriptionPlan->trialStartsOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-17T16:07:37.080Z');
    $request->paymentLink->user->subscriptionPlan->userId = 85066;
    $request->paymentLink->user->subscriptionPlan->version = 874400;
    $request->paymentLink->user->type = UserTypeEnum::ANONYMOUS;
    $request->paymentLink->user->username = 'Bertha32';
    $request->paymentLink->user->verifiedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-22T20:46:18.043Z');
    $request->paymentLink->user->yearsOfExperience = UserYearsOfExperienceEnum::ONE_TO_THREE;
    $request->paymentLink->userId = 367626;
    $request->xAuthKey = 'soluta';
    $request->xAuthSecret = 'libero';

    $response = $sdk->paymentLink->paymentLinkApiNewJson($request);

    if ($response->paymentLinkApiNewJSON200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentLinkApiNewRaw

Create a payment link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentLinkApiNewRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentLinkApiNewRawRequest();
    $request->requestBody = 'rem';
    $request->xAuthKey = 'dolorum';
    $request->xAuthSecret = 'odio';

    $response = $sdk->paymentLink->paymentLinkApiNewRaw($request);

    if ($response->paymentLinkApiNewRaw200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## paymentLinkApiUri

Return the unique url to the client's payment link

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PaymentLinkApiUriRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PaymentLinkApiUriRequest();
    $request->id = 144691;
    $request->xAuthKey = 'alias';
    $request->xAuthSecret = 'magni';

    $response = $sdk->paymentLink->paymentLinkApiUri($request);

    if ($response->paymentLinkUriApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
