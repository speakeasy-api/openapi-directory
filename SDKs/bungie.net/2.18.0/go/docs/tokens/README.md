# Tokens

## Overview

tokens

### Available Operations

* [TokensApplyMissingPartnerOffersWithoutClaim](#tokensapplymissingpartnerofferswithoutclaim) - Apply a partner offer to the targeted user. This endpoint does not claim a new offer, but any already claimed offers will be applied to the game if not already.
* [TokensClaimPartnerOffer](#tokensclaimpartneroffer) - Claim a partner offer as the authenticated user.
* [TokensForceDropsRepair](#tokensforcedropsrepair) - Twitch Drops self-repair function - scans twitch for drops not marked as fulfilled and resyncs them.
* [TokensGetBungieRewardsForPlatformUser](#tokensgetbungierewardsforplatformuser) - Returns the bungie rewards for the targeted user when a platform membership Id and Type are used.
* [TokensGetBungieRewardsForUser](#tokensgetbungierewardsforuser) - Returns the bungie rewards for the targeted user.
* [TokensGetBungieRewardsList](#tokensgetbungierewardslist) - Returns a list of the current bungie rewards
* [TokensGetPartnerOfferSkuHistory](#tokensgetpartnerofferskuhistory) - Returns the partner sku and offer history of the targeted user. Elevated permissions are required to see users that are not yourself.
* [TokensGetPartnerRewardHistory](#tokensgetpartnerrewardhistory) - Returns the partner rewards history of the targeted user, both partner offers and Twitch drops.

## TokensApplyMissingPartnerOffersWithoutClaim

Apply a partner offer to the targeted user. This endpoint does not claim a new offer, but any already claimed offers will be applied to the game if not already.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Tokens.TokensApplyMissingPartnerOffersWithoutClaim(ctx, operations.TokensApplyMissingPartnerOffersWithoutClaimRequest{
        PartnerApplicationID: 652103,
        TargetBnetMembershipID: 320997,
    }, operations.TokensApplyMissingPartnerOffersWithoutClaimSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TokensClaimPartnerOffer

Claim a partner offer as the authenticated user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Tokens.TokensClaimPartnerOffer(ctx, operations.TokensClaimPartnerOfferSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TokensForceDropsRepair

Twitch Drops self-repair function - scans twitch for drops not marked as fulfilled and resyncs them.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Tokens.TokensForceDropsRepair(ctx, operations.TokensForceDropsRepairSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TokensGetBungieRewardsForPlatformUser

Returns the bungie rewards for the targeted user when a platform membership Id and Type are used.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Tokens.TokensGetBungieRewardsForPlatformUser(ctx, operations.TokensGetBungieRewardsForPlatformUserRequest{
        MembershipID: 431418,
        MembershipType: 221262,
    }, operations.TokensGetBungieRewardsForPlatformUserSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TokensGetBungieRewardsForUser

Returns the bungie rewards for the targeted user.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Tokens.TokensGetBungieRewardsForUser(ctx, operations.TokensGetBungieRewardsForUserRequest{
        MembershipID: 896547,
    }, operations.TokensGetBungieRewardsForUserSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TokensGetBungieRewardsList

Returns a list of the current bungie rewards

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Tokens.TokensGetBungieRewardsList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TokensGetPartnerOfferSkuHistory

Returns the partner sku and offer history of the targeted user. Elevated permissions are required to see users that are not yourself.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Tokens.TokensGetPartnerOfferSkuHistory(ctx, operations.TokensGetPartnerOfferSkuHistoryRequest{
        PartnerApplicationID: 141264,
        TargetBnetMembershipID: 367562,
    }, operations.TokensGetPartnerOfferSkuHistorySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## TokensGetPartnerRewardHistory

Returns the partner rewards history of the targeted user, both partner offers and Twitch drops.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Tokens.TokensGetPartnerRewardHistory(ctx, operations.TokensGetPartnerRewardHistoryRequest{
        PartnerApplicationID: 97260,
        TargetBnetMembershipID: 435865,
    }, operations.TokensGetPartnerRewardHistorySecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
