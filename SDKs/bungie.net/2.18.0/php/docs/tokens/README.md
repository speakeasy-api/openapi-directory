# tokens

## Overview

tokens

### Available Operations

* [tokensApplyMissingPartnerOffersWithoutClaim](#tokensapplymissingpartnerofferswithoutclaim) - Apply a partner offer to the targeted user. This endpoint does not claim a new offer, but any already claimed offers will be applied to the game if not already.
* [tokensClaimPartnerOffer](#tokensclaimpartneroffer) - Claim a partner offer as the authenticated user.
* [tokensForceDropsRepair](#tokensforcedropsrepair) - Twitch Drops self-repair function - scans twitch for drops not marked as fulfilled and resyncs them.
* [tokensGetBungieRewardsForPlatformUser](#tokensgetbungierewardsforplatformuser) - Returns the bungie rewards for the targeted user when a platform membership Id and Type are used.
* [tokensGetBungieRewardsForUser](#tokensgetbungierewardsforuser) - Returns the bungie rewards for the targeted user.
* [tokensGetBungieRewardsList](#tokensgetbungierewardslist) - Returns a list of the current bungie rewards
* [tokensGetPartnerOfferSkuHistory](#tokensgetpartnerofferskuhistory) - Returns the partner sku and offer history of the targeted user. Elevated permissions are required to see users that are not yourself.
* [tokensGetPartnerRewardHistory](#tokensgetpartnerrewardhistory) - Returns the partner rewards history of the targeted user, both partner offers and Twitch drops.

## tokensApplyMissingPartnerOffersWithoutClaim

Apply a partner offer to the targeted user. This endpoint does not claim a new offer, but any already claimed offers will be applied to the game if not already.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TokensApplyMissingPartnerOffersWithoutClaimRequest;
use \OpenAPI\OpenAPI\Models\Operations\TokensApplyMissingPartnerOffersWithoutClaimSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TokensApplyMissingPartnerOffersWithoutClaimRequest();
    $request->partnerApplicationId = 652103;
    $request->targetBnetMembershipId = 320997;

    $requestSecurity = new TokensApplyMissingPartnerOffersWithoutClaimSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tokens->tokensApplyMissingPartnerOffersWithoutClaim($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tokensClaimPartnerOffer

Claim a partner offer as the authenticated user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TokensClaimPartnerOfferSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new TokensClaimPartnerOfferSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tokens->tokensClaimPartnerOffer($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tokensForceDropsRepair

Twitch Drops self-repair function - scans twitch for drops not marked as fulfilled and resyncs them.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TokensForceDropsRepairSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new TokensForceDropsRepairSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tokens->tokensForceDropsRepair($requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tokensGetBungieRewardsForPlatformUser

Returns the bungie rewards for the targeted user when a platform membership Id and Type are used.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TokensGetBungieRewardsForPlatformUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\TokensGetBungieRewardsForPlatformUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TokensGetBungieRewardsForPlatformUserRequest();
    $request->membershipId = 431418;
    $request->membershipType = 221262;

    $requestSecurity = new TokensGetBungieRewardsForPlatformUserSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tokens->tokensGetBungieRewardsForPlatformUser($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tokensGetBungieRewardsForUser

Returns the bungie rewards for the targeted user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TokensGetBungieRewardsForUserRequest;
use \OpenAPI\OpenAPI\Models\Operations\TokensGetBungieRewardsForUserSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TokensGetBungieRewardsForUserRequest();
    $request->membershipId = 896547;

    $requestSecurity = new TokensGetBungieRewardsForUserSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tokens->tokensGetBungieRewardsForUser($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tokensGetBungieRewardsList

Returns a list of the current bungie rewards

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->tokens->tokensGetBungieRewardsList();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tokensGetPartnerOfferSkuHistory

Returns the partner sku and offer history of the targeted user. Elevated permissions are required to see users that are not yourself.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TokensGetPartnerOfferSkuHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\TokensGetPartnerOfferSkuHistorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TokensGetPartnerOfferSkuHistoryRequest();
    $request->partnerApplicationId = 141264;
    $request->targetBnetMembershipId = 367562;

    $requestSecurity = new TokensGetPartnerOfferSkuHistorySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tokens->tokensGetPartnerOfferSkuHistory($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tokensGetPartnerRewardHistory

Returns the partner rewards history of the targeted user, both partner offers and Twitch drops.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TokensGetPartnerRewardHistoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\TokensGetPartnerRewardHistorySecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TokensGetPartnerRewardHistoryRequest();
    $request->partnerApplicationId = 97260;
    $request->targetBnetMembershipId = 435865;

    $requestSecurity = new TokensGetPartnerRewardHistorySecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->tokens->tokensGetPartnerRewardHistory($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
