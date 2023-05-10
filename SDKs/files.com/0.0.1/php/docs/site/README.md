# site

## Overview

Operations about sites

### Available Operations

* [getSite](#getsite) - Show site settings
* [getSiteApiKeys](#getsiteapikeys) - List Api Keys
* [getSiteDnsRecords](#getsitednsrecords) - Show site DNS configuration.
* [getSiteIpAddresses](#getsiteipaddresses) - List IP Addresses associated with the current site
* [getSiteUsage](#getsiteusage) - Get the most recent usage snapshot (usage data for billing purposes) for a Site.
* [patchSite](#patchsite) - Update site settings.
* [postSiteApiKeys](#postsiteapikeys) - Create Api Key
* [postSiteTestWebhook](#postsitetestwebhook) - Test webhook.

## getSite

Show site settings

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->site->getSite();

    if ($response->siteEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSiteApiKeys

List Api Keys

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSiteApiKeysRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSiteApiKeysRequest();
    $request->cursor = 'eius';
    $request->filter = [
        'at' => 'impedit',
        'eos' => 'sapiente',
        'eum' => 'dicta',
    ];
    $request->filterGt = [
        'beatae' => 'cupiditate',
        'provident' => 'earum',
    ];
    $request->filterGteq = [
        'hic' => 'illum',
        'eaque' => 'earum',
        'perspiciatis' => 'maiores',
    ];
    $request->filterLt = [
        'aliquid' => 'porro',
        'suscipit' => 'dolorem',
        'fugit' => 'cumque',
        'fuga' => 'ratione',
    ];
    $request->filterLteq = [
        'necessitatibus' => 'nulla',
        'consequatur' => 'quasi',
        'et' => 'ducimus',
    ];
    $request->perPage = 619183;
    $request->sortBy = [
        'suscipit' => 'adipisci',
        'quasi' => 'magni',
        'doloribus' => 'nulla',
    ];
    $request->userId = 896582;

    $response = $sdk->site->getSiteApiKeys($request);

    if ($response->apiKeyEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSiteDnsRecords

Show site DNS configuration.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSiteDnsRecordsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSiteDnsRecordsRequest();
    $request->cursor = 'ipsa';
    $request->perPage = 271113;

    $response = $sdk->site->getSiteDnsRecords($request);

    if ($response->dnsRecordEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSiteIpAddresses

List IP Addresses associated with the current site

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetSiteIpAddressesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSiteIpAddressesRequest();
    $request->cursor = 'nihil';
    $request->perPage = 473190;

    $response = $sdk->site->getSiteIpAddresses($request);

    if ($response->ipAddressEntities !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSiteUsage

Get the most recent usage snapshot (usage data for billing purposes) for a Site.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->site->getSiteUsage();

    if ($response->usageSnapshotEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patchSite

Update site settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatchSiteRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PatchSiteRequestBodyBundleWatermarkAttachmentFile;
use \OpenAPI\OpenAPI\Models\Operations\PatchSiteRequestBodyIcon128File;
use \OpenAPI\OpenAPI\Models\Operations\PatchSiteRequestBodyIcon16File;
use \OpenAPI\OpenAPI\Models\Operations\PatchSiteRequestBodyIcon32File;
use \OpenAPI\OpenAPI\Models\Operations\PatchSiteRequestBodyIcon48File;
use \OpenAPI\OpenAPI\Models\Operations\PatchSiteRequestBodyLogoFile;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatchSiteRequestBody();
    $request->activeSftpHostKeyId = 115834;
    $request->allowBundleNames = false;
    $request->allowed2faMethodBypassForFtpSftpDav = false;
    $request->allowed2faMethodSms = false;
    $request->allowed2faMethodTotp = false;
    $request->allowed2faMethodU2f = false;
    $request->allowed2faMethodWebauthn = false;
    $request->allowed2faMethodYubi = false;
    $request->allowedCountries = 'iusto';
    $request->allowedIps = 'esse';
    $request->askAboutOverwrites = false;
    $request->bundleActivityNotifications = 'praesentium';
    $request->bundleExpiration = 979963;
    $request->bundlePasswordRequired = false;
    $request->bundleRegistrationNotifications = 'reiciendis';
    $request->bundleRequireShareRecipient = false;
    $request->bundleUploadReceiptNotifications = 'vel';
    $request->bundleWatermarkAttachmentDelete = false;
    $request->bundleWatermarkAttachmentFile = new PatchSiteRequestBodyBundleWatermarkAttachmentFile();
    $request->bundleWatermarkAttachmentFile->bundleWatermarkAttachmentFile = 'architecto';
    $request->bundleWatermarkAttachmentFile->content = 'fugiat';
    $request->bundleWatermarkValue = [
        'dicta' => 'odio',
    ];
    $request->color2Left = 'tempora';
    $request->color2Link = 'esse';
    $request->color2Text = 'ex';
    $request->color2Top = 'consectetur';
    $request->color2TopText = 'aliquid';
    $request->customNamespace = false;
    $request->daysToRetainBackups = 58870;
    $request->defaultTimeZone = 'laborum';
    $request->desktopApp = false;
    $request->desktopAppSessionIpPinning = false;
    $request->desktopAppSessionLifetime = 123844;
    $request->disable2faWithDelay = false;
    $request->disableFilesCertificateGeneration = false;
    $request->disablePasswordReset = false;
    $request->disableUsersFromInactivityPeriodDays = 344718;
    $request->disallowedCountries = 'fugiat';
    $request->domain = 'expedita';
    $request->domainHstsHeader = false;
    $request->domainLetsencryptChain = 'aliquid';
    $request->email = 'Georgiana43@yahoo.com';
    $request->folderPermissionsGroupsOnly = false;
    $request->ftpEnabled = false;
    $request->icon128Delete = false;
    $request->icon128File = new PatchSiteRequestBodyIcon128File();
    $request->icon128File->content = 'voluptas';
    $request->icon128File->icon128File = 'iste';
    $request->icon16Delete = false;
    $request->icon16File = new PatchSiteRequestBodyIcon16File();
    $request->icon16File->content = 'id';
    $request->icon16File->icon16File = 'ab';
    $request->icon32Delete = false;
    $request->icon32File = new PatchSiteRequestBodyIcon32File();
    $request->icon32File->content = 'error';
    $request->icon32File->icon32File = 'possimus';
    $request->icon48Delete = false;
    $request->icon48File = new PatchSiteRequestBodyIcon48File();
    $request->icon48File->content = 'voluptates';
    $request->icon48File->icon48File = 'mollitia';
    $request->immutableFiles = false;
    $request->includePasswordInWelcomeEmail = false;
    $request->language = 'laborum';
    $request->ldapBaseDn = 'libero';
    $request->ldapDomain = 'ad';
    $request->ldapEnabled = false;
    $request->ldapGroupAction = 'deleniti';
    $request->ldapGroupExclusion = 'enim';
    $request->ldapGroupInclusion = 'vitae';
    $request->ldapHost = 'repellendus';
    $request->ldapHost2 = 'ex';
    $request->ldapHost3 = 'quo';
    $request->ldapPasswordChange = 'ex';
    $request->ldapPasswordChangeConfirmation = 'ut';
    $request->ldapPort = 321043;
    $request->ldapSecure = false;
    $request->ldapType = 'expedita';
    $request->ldapUserAction = 'voluptatem';
    $request->ldapUserIncludeGroups = 'molestias';
    $request->ldapUsername = 'cum';
    $request->ldapUsernameField = 'aliquid';
    $request->loginHelpText = 'beatae';
    $request->logoDelete = false;
    $request->logoFile = new PatchSiteRequestBodyLogoFile();
    $request->logoFile->content = 'voluptatum';
    $request->logoFile->logoFile = 'omnis';
    $request->maxPriorPasswords = 85233;
    $request->mobileApp = false;
    $request->mobileAppSessionIpPinning = false;
    $request->mobileAppSessionLifetime = 703218;
    $request->motdText = 'est';
    $request->motdUseForFtp = false;
    $request->motdUseForSftp = false;
    $request->name = 'Donald Williamson MD';
    $request->nonSsoGroupsAllowed = false;
    $request->nonSsoUsersAllowed = false;
    $request->officeIntegrationAvailable = false;
    $request->officeIntegrationType = 'pariatur';
    $request->optOutGlobal = false;
    $request->passwordMinLength = 891315;
    $request->passwordRequireLetter = false;
    $request->passwordRequireMixed = false;
    $request->passwordRequireNumber = false;
    $request->passwordRequireSpecial = false;
    $request->passwordRequireUnbreached = false;
    $request->passwordRequirementsApplyToBundles = false;
    $request->passwordValidityDays = 29190;
    $request->pinAllRemoteServersToSiteRegion = false;
    $request->replyToEmail = 'alias';
    $request->require2fa = false;
    $request->require2faUserType = 'deleniti';
    $request->sessionExpiry = 9372.19;
    $request->sessionExpiryMinutes = 404244;
    $request->sessionPinnedByIp = false;
    $request->sftpEnabled = false;
    $request->sftpHostKeyType = 'sapiente';
    $request->sftpInsecureCiphers = false;
    $request->sftpUserRootEnabled = false;
    $request->sharingEnabled = false;
    $request->showRequestAccessLink = false;
    $request->siteFooter = 'rem';
    $request->siteHeader = 'minus';
    $request->smtpAddress = 'nemo';
    $request->smtpAuthentication = 'asperiores';
    $request->smtpFrom = 'ratione';
    $request->smtpPassword = 'ullam';
    $request->smtpPort = 19122;
    $request->smtpUsername = 'illum';
    $request->sslRequired = false;
    $request->subdomain = 'totam';
    $request->tlsDisabled = false;
    $request->uploadsViaEmailAuthentication = false;
    $request->useProvidedModifiedAt = false;
    $request->userLockout = false;
    $request->userLockoutLockPeriod = 770675;
    $request->userLockoutTries = 842777;
    $request->userLockoutWithin = 720528;
    $request->userRequestsEnabled = false;
    $request->userRequestsNotifyAdmins = false;
    $request->welcomeCustomText = 'ipsam';
    $request->welcomeEmailCc = 'culpa';
    $request->welcomeEmailEnabled = false;
    $request->welcomeEmailSubject = 'dolor';
    $request->welcomeScreen = 'aliquam';
    $request->windowsModeFtp = false;

    $response = $sdk->site->patchSite($request);

    if ($response->siteEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSiteApiKeys

Create Api Key

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostSiteApiKeysRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\PostSiteApiKeysRequestBodyPermissionSetEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSiteApiKeysRequestBody();
    $request->description = 'example';
    $request->expiresAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2000-01-01T01:00:00Z');
    $request->name = 'My Main API Key';
    $request->path = 'shared/docs';
    $request->permissionSet = PostSiteApiKeysRequestBodyPermissionSetEnum::FULL;
    $request->userId = 80532;

    $response = $sdk->site->postSiteApiKeys($request);

    if ($response->apiKeyEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSiteTestWebhook

Test webhook.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostSiteTestWebhookRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostSiteTestWebhookRequestBody();
    $request->action = 'test';
    $request->body = [
        'veritatis' => 'tempora',
        'dolor' => 'consequatur',
        'architecto' => 'sit',
    ];
    $request->encoding = 'RAW';
    $request->headers = [
        'fugit' => 'ab',
        'laudantium' => 'quae',
    ];
    $request->method = 'GET';
    $request->url = 'https://www.site.com/...';

    $response = $sdk->site->postSiteTestWebhook($request);

    if ($response->statusEntity !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
