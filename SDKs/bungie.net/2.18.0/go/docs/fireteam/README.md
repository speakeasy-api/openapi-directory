# Fireteam

## Overview

fireteam

### Available Operations

* [FireteamGetActivePrivateClanFireteamCount](#fireteamgetactiveprivateclanfireteamcount) - Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.
* [FireteamGetAvailableClanFireteams](#fireteamgetavailableclanfireteams) - Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.
* [FireteamGetClanFireteam](#fireteamgetclanfireteam) - Gets a specific fireteam.
* [FireteamGetMyClanFireteams](#fireteamgetmyclanfireteams) - Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.
* [FireteamSearchPublicAvailableClanFireteams](#fireteamsearchpublicavailableclanfireteams) - Gets a listing of all public fireteams starting now with open slots. Caller is not checked for join criteria so caching is maximized.

## FireteamGetActivePrivateClanFireteamCount

Gets a count of all active non-public fireteams for the specified clan. Maximum value returned is 25.

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
    res, err := s.Fireteam.FireteamGetActivePrivateClanFireteamCount(ctx, operations.FireteamGetActivePrivateClanFireteamCountRequest{
        GroupID: 820994,
    }, operations.FireteamGetActivePrivateClanFireteamCountSecurity{
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

## FireteamGetAvailableClanFireteams

Gets a listing of all of this clan's fireteams that are have available slots. Caller is not checked for join criteria so caching is maximized.

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
    res, err := s.Fireteam.FireteamGetAvailableClanFireteams(ctx, operations.FireteamGetAvailableClanFireteamsRequest{
        ActivityType: 13571,
        DateRange: 97101,
        ExcludeImmediate: sdk.Bool(false),
        GroupID: 622846,
        LangFilter: sdk.String("temporibus"),
        Page: 673660,
        Platform: 96098,
        PublicOnly: 971945,
        SlotFilter: 976460,
    }, operations.FireteamGetAvailableClanFireteamsSecurity{
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

## FireteamGetClanFireteam

Gets a specific fireteam.

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
    res, err := s.Fireteam.FireteamGetClanFireteam(ctx, operations.FireteamGetClanFireteamRequest{
        FireteamID: 878194,
        GroupID: 468651,
    }, operations.FireteamGetClanFireteamSecurity{
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

## FireteamGetMyClanFireteams

Gets a listing of all fireteams that caller is an applicant, a member, or an alternate of.

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
    res, err := s.Fireteam.FireteamGetMyClanFireteams(ctx, operations.FireteamGetMyClanFireteamsRequest{
        GroupFilter: sdk.Bool(false),
        GroupID: 509624,
        IncludeClosed: false,
        LangFilter: sdk.String("voluptatibus"),
        Page: 55714,
        Platform: 604846,
    }, operations.FireteamGetMyClanFireteamsSecurity{
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

## FireteamSearchPublicAvailableClanFireteams

Gets a listing of all public fireteams starting now with open slots. Caller is not checked for join criteria so caching is maximized.

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
    res, err := s.Fireteam.FireteamSearchPublicAvailableClanFireteams(ctx, operations.FireteamSearchPublicAvailableClanFireteamsRequest{
        ActivityType: 451159,
        DateRange: 739264,
        ExcludeImmediate: sdk.Bool(false),
        LangFilter: sdk.String("perferendis"),
        Page: 39187,
        Platform: 441711,
        SlotFilter: 282807,
    }, operations.FireteamSearchPublicAvailableClanFireteamsSecurity{
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
