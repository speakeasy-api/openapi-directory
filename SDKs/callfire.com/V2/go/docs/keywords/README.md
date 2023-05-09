# Keywords

### Available Operations

* [FindKeywordLeaseConfigs](#findkeywordleaseconfigs) - Find keyword lease configs
* [FindKeywordLeases](#findkeywordleases) - Find keyword leases
* [FindKeywords](#findkeywords) - Find keywords
* [GetKeywordLease](#getkeywordlease) - Find a specific lease
* [GetKeywordLeaseByID](#getkeywordleasebyid) - Find a keyword by id
* [GetKeywordLeaseConfig](#getkeywordleaseconfig) - Find a specific keyword lease config
* [IsKeywordAvailable](#iskeywordavailable) - Check for a specific keyword
* [UpdateKeywordLease](#updatekeywordlease) - Update a lease
* [UpdateKeywordLeaseConfig](#updatekeywordleaseconfig) - Update a keyword lease config

## FindKeywordLeaseConfigs

Searches for all keyword lease configs for the user. Returns a paged list of KeywordConfig

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
    res, err := s.Keywords.FindKeywordLeaseConfigs(ctx, operations.FindKeywordLeaseConfigsRequest{
        Fields: sdk.String("illum"),
        Filter: sdk.String("soluta"),
        LabelName: sdk.String("accusantium"),
        Limit: sdk.Int(306986),
        Offset: sdk.Int(958983),
    }, operations.FindKeywordLeaseConfigsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Page != nil {
        // handle response
    }
}
```

## FindKeywordLeases

Searches for all keywords owned by user. A keyword lease is the ownership information involving a keyword

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
    res, err := s.Keywords.FindKeywordLeases(ctx, operations.FindKeywordLeasesRequest{
        Fields: sdk.String("dicta"),
        Filter: sdk.String("ullam"),
        LabelName: sdk.String("reprehenderit"),
        Limit: sdk.Int(356707),
        Offset: sdk.Int(391774),
    }, operations.FindKeywordLeasesSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeywordLeasePage != nil {
        // handle response
    }
}
```

## FindKeywords

Searches for all keywords available for purchase on the CallFire platform. If a keyword appears in the response, it is available for purchase. List the 'keywords' in a query parameter to search for multiple keywords (at least one keyword should be sent in request). Keyword should only consist of uppercase and lowercase letters and numbers. Number of characters must be greater than 2, but less than 65.

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
    res, err := s.Keywords.FindKeywords(ctx, operations.FindKeywordsRequest{
        Keywords: []string{
            "voluptatum",
        },
    }, operations.FindKeywordsSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeywordList != nil {
        // handle response
    }
}
```

## GetKeywordLease

Searches for all keywords owned by user

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
    res, err := s.Keywords.GetKeywordLease(ctx, operations.GetKeywordLeaseRequest{
        Fields: sdk.String("qui"),
        Keyword: "quibusdam",
    }, operations.GetKeywordLeaseSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeywordLease != nil {
        // handle response
    }
}
```

## GetKeywordLeaseByID

Get keyword by id

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
    res, err := s.Keywords.GetKeywordLeaseByID(ctx, operations.GetKeywordLeaseByIDRequest{
        Fields: sdk.String("ex"),
        ID: 536275,
    }, operations.GetKeywordLeaseByIDSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeywordLease != nil {
        // handle response
    }
}
```

## GetKeywordLeaseConfig

Returns a single KeywordConfig instance for a given keyword lease

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
    res, err := s.Keywords.GetKeywordLeaseConfig(ctx, operations.GetKeywordLeaseConfigRequest{
        Fields: sdk.String("itaque"),
        Keyword: "dolorum",
    }, operations.GetKeywordLeaseConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.KeywordConfig != nil {
        // handle response
    }
}
```

## IsKeywordAvailable

Searches for the specific keyword to purchase on the CallFire platform. Returns 'true' if keyword is available. Keyword should only consist of uppercase and lowercase letters and numbers. Number of characters must be greater than 2, but less than 65.

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
    res, err := s.Keywords.IsKeywordAvailable(ctx, operations.IsKeywordAvailableRequest{
        Keyword: "architecto",
    }, operations.IsKeywordAvailableSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.IsKeywordAvailable200ApplicationJSONBoolean != nil {
        // handle response
    }
}
```

## UpdateKeywordLease

Updates a keyword lease. Turns the autoRenew on/off. Configure double opt in feature. Add/remove contact list from keyword.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Keywords.UpdateKeywordLease(ctx, operations.UpdateKeywordLeaseRequest{
        KeywordLease: &shared.KeywordLease{
            AutoRenew: sdk.Bool(false),
            ContactListID: sdk.Int64(609178),
            DoubleOptInEnabled: sdk.Bool(false),
            Keyword: sdk.String("tenetur"),
            Labels: []string{
                "at",
            },
            LeaseBegin: sdk.Int64(92027),
            LeaseEnd: sdk.Int64(454162),
            Number: sdk.String("ipsa"),
            OptInConfirmationMessage: sdk.String("minima"),
            ShortCode: sdk.String("veritatis"),
            Status: shared.KeywordLeaseStatusEnumPending.ToPointer(),
            Type: shared.KeywordLeaseTypeEnumPlan.ToPointer(),
        },
        Keyword: "iste",
    }, operations.UpdateKeywordLeaseSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateKeywordLeaseConfig

Updates a keyword lease configuration. Use this API endpoint to enable/disable inbound SMS forwarding, set forward number. Forward number must be in E.164 format)

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Keywords.UpdateKeywordLeaseConfig(ctx, operations.UpdateKeywordLeaseConfigRequest{
        KeywordConfig: &shared.KeywordConfig{
            Keyword: sdk.String("temporibus"),
            TextInboundConfig: &shared.TextInboundConfig{
                ForwardEnabled: sdk.Bool(false),
                ForwardNumber: sdk.String("accusantium"),
            },
        },
        Keyword: "rem",
    }, operations.UpdateKeywordLeaseConfigSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
