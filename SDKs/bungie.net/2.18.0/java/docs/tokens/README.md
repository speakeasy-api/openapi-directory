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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TokensApplyMissingPartnerOffersWithoutClaimRequest;
import org.openapis.openapi.models.operations.TokensApplyMissingPartnerOffersWithoutClaimResponse;
import org.openapis.openapi.models.operations.TokensApplyMissingPartnerOffersWithoutClaimSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TokensApplyMissingPartnerOffersWithoutClaimRequest req = new TokensApplyMissingPartnerOffersWithoutClaimRequest(944124, 729991L);            

            TokensApplyMissingPartnerOffersWithoutClaimResponse res = sdk.tokens.tokensApplyMissingPartnerOffersWithoutClaim(req, new TokensApplyMissingPartnerOffersWithoutClaimSecurity("nobis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tokensClaimPartnerOffer

Claim a partner offer as the authenticated user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TokensClaimPartnerOfferResponse;
import org.openapis.openapi.models.operations.TokensClaimPartnerOfferSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TokensClaimPartnerOfferResponse res = sdk.tokens.tokensClaimPartnerOffer(new TokensClaimPartnerOfferSecurity("dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tokensForceDropsRepair

Twitch Drops self-repair function - scans twitch for drops not marked as fulfilled and resyncs them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TokensForceDropsRepairResponse;
import org.openapis.openapi.models.operations.TokensForceDropsRepairSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TokensForceDropsRepairResponse res = sdk.tokens.tokensForceDropsRepair(new TokensForceDropsRepairSecurity("quis") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tokensGetBungieRewardsForPlatformUser

Returns the bungie rewards for the targeted user when a platform membership Id and Type are used.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TokensGetBungieRewardsForPlatformUserRequest;
import org.openapis.openapi.models.operations.TokensGetBungieRewardsForPlatformUserResponse;
import org.openapis.openapi.models.operations.TokensGetBungieRewardsForPlatformUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TokensGetBungieRewardsForPlatformUserRequest req = new TokensGetBungieRewardsForPlatformUserRequest(521037L, 489549);            

            TokensGetBungieRewardsForPlatformUserResponse res = sdk.tokens.tokensGetBungieRewardsForPlatformUser(req, new TokensGetBungieRewardsForPlatformUserSecurity("eaque") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tokensGetBungieRewardsForUser

Returns the bungie rewards for the targeted user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TokensGetBungieRewardsForUserRequest;
import org.openapis.openapi.models.operations.TokensGetBungieRewardsForUserResponse;
import org.openapis.openapi.models.operations.TokensGetBungieRewardsForUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TokensGetBungieRewardsForUserRequest req = new TokensGetBungieRewardsForUserRequest(338985L);            

            TokensGetBungieRewardsForUserResponse res = sdk.tokens.tokensGetBungieRewardsForUser(req, new TokensGetBungieRewardsForUserSecurity("nesciunt") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tokensGetBungieRewardsList

Returns a list of the current bungie rewards

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TokensGetBungieRewardsListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TokensGetBungieRewardsListResponse res = sdk.tokens.tokensGetBungieRewardsList();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tokensGetPartnerOfferSkuHistory

Returns the partner sku and offer history of the targeted user. Elevated permissions are required to see users that are not yourself.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TokensGetPartnerOfferSkuHistoryRequest;
import org.openapis.openapi.models.operations.TokensGetPartnerOfferSkuHistoryResponse;
import org.openapis.openapi.models.operations.TokensGetPartnerOfferSkuHistorySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TokensGetPartnerOfferSkuHistoryRequest req = new TokensGetPartnerOfferSkuHistoryRequest(179490, 18521L);            

            TokensGetPartnerOfferSkuHistoryResponse res = sdk.tokens.tokensGetPartnerOfferSkuHistory(req, new TokensGetPartnerOfferSkuHistorySecurity("dolores") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tokensGetPartnerRewardHistory

Returns the partner rewards history of the targeted user, both partner offers and Twitch drops.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TokensGetPartnerRewardHistoryRequest;
import org.openapis.openapi.models.operations.TokensGetPartnerRewardHistoryResponse;
import org.openapis.openapi.models.operations.TokensGetPartnerRewardHistorySecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TokensGetPartnerRewardHistoryRequest req = new TokensGetPartnerRewardHistoryRequest(793698, 463451L);            

            TokensGetPartnerRewardHistoryResponse res = sdk.tokens.tokensGetPartnerRewardHistory(req, new TokensGetPartnerRewardHistorySecurity("dolor") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
