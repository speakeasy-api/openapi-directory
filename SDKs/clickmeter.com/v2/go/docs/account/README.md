# Account

### Available Operations

* [AccountDeleteDomainWhitelist](#accountdeletedomainwhitelist) - Delete an domain entry
* [AccountDeleteGuest](#accountdeleteguest) - Delete a guest
* [AccountDeleteIPBlacklist](#accountdeleteipblacklist) - Delete an ip blacklist entry
* [AccountGet](#accountget) - Retrieve current account data
* [AccountGetDomainWhitelist](#accountgetdomainwhitelist) - Retrieve list of a domains allowed to redirect in DDU mode
* [AccountGetGuest](#accountgetguest) - Retrieve a guest
* [AccountGetGuests](#accountgetguests) - Retrieve list of a guest
* [AccountGetGuestsCount](#accountgetguestscount) - Retrieve count of guests
* [AccountGetIPBlacklist](#accountgetipblacklist) - Retrieve list of a ip to exclude from event tracking
* [AccountGetPermissions](#accountgetpermissions) - Retrieve permissions for a guest
* [AccountGetPermissionsCount](#accountgetpermissionscount) - Retrieve count of the permissions for a guest
* [AccountGetPlan](#accountgetplan) - Retrieve current account plan
* [AccountPatchPermissionsForm](#accountpatchpermissionsform) - Change the permission on a shared object
* [AccountPatchPermissionsJSON](#accountpatchpermissionsjson) - Change the permission on a shared object
* [AccountPatchPermissionsRaw](#accountpatchpermissionsraw) - Change the permission on a shared object
* [AccountPostGuestForm](#accountpostguestform) - Update a guest
* [AccountPostGuestJSON](#accountpostguestjson) - Update a guest
* [AccountPostGuestRaw](#accountpostguestraw) - Update a guest
* [AccountPostForm](#accountpostform) - Update current account data
* [AccountPostJSON](#accountpostjson) - Update current account data
* [AccountPostRaw](#accountpostraw) - Update current account data
* [AccountPutDomainWhitelistForm](#accountputdomainwhitelistform) - Create an domain entry
* [AccountPutDomainWhitelistJSON](#accountputdomainwhitelistjson) - Create an domain entry
* [AccountPutDomainWhitelistRaw](#accountputdomainwhitelistraw) - Create an domain entry
* [AccountPutGuestForm](#accountputguestform) - Create a guest
* [AccountPutGuestJSON](#accountputguestjson) - Create a guest
* [AccountPutGuestRaw](#accountputguestraw) - Create a guest
* [AccountPutIPBlacklistForm](#accountputipblacklistform) - Create an ip blacklist entry
* [AccountPutIPBlacklistJSON](#accountputipblacklistjson) - Create an ip blacklist entry
* [AccountPutIPBlacklistRaw](#accountputipblacklistraw) - Create an ip blacklist entry
* [PostAccountGuestsGuestIDTypePermissionsPatchForm](#postaccountguestsguestidtypepermissionspatchform) - Change the permission on a shared object
* [PostAccountGuestsGuestIDTypePermissionsPatchJSON](#postaccountguestsguestidtypepermissionspatchjson) - Change the permission on a shared object
* [PostAccountGuestsGuestIDTypePermissionsPatchRaw](#postaccountguestsguestidtypepermissionspatchraw) - Change the permission on a shared object

## AccountDeleteDomainWhitelist

Delete an domain entry

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountDeleteDomainWhitelist(ctx, operations.AccountDeleteDomainWhitelistRequest{
        WhitelistID: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingDomainWhitelistEntry != nil {
        // handle response
    }
}
```

## AccountDeleteGuest

Delete a guest

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountDeleteGuest(ctx, operations.AccountDeleteGuestRequest{
        GuestID: 715190,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## AccountDeleteIPBlacklist

Delete an ip blacklist entry

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountDeleteIPBlacklist(ctx, operations.AccountDeleteIPBlacklistRequest{
        BlacklistID: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingIPBlacklistEntry != nil {
        // handle response
    }
}
```

## AccountGet

Retrieve current account data

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingUser != nil {
        // handle response
    }
}
```

## AccountGetDomainWhitelist

Retrieve list of a domains allowed to redirect in DDU mode

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountGetDomainWhitelist(ctx, operations.AccountGetDomainWhitelistRequest{
        Limit: sdk.Int(602763),
        Offset: sdk.Int(857946),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreDtoAccountingDomainWhitelistEntry != nil {
        // handle response
    }
}
```

## AccountGetGuest

Retrieve a guest

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountGetGuest(ctx, operations.AccountGetGuestRequest{
        GuestID: 544883,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingGuest != nil {
        // handle response
    }
}
```

## AccountGetGuests

Retrieve list of a guest

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountGetGuests(ctx, operations.AccountGetGuestsRequest{
        Limit: sdk.Int(847252),
        Offset: sdk.Int(423655),
        SortBy: sdk.String("error"),
        SortDirection: operations.AccountGetGuestsSortDirectionEnumDesc.ToPointer(),
        TextSearch: sdk.String("suscipit"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## AccountGetGuestsCount

Retrieve count of guests

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountGetGuestsCount(ctx, operations.AccountGetGuestsCountRequest{
        TextSearch: sdk.String("iure"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesCountResponce != nil {
        // handle response
    }
}
```

## AccountGetIPBlacklist

Retrieve list of a ip to exclude from event tracking

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountGetIPBlacklist(ctx, operations.AccountGetIPBlacklistRequest{
        Limit: sdk.Int(297534),
        Offset: sdk.Int(891773),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreDtoAccountingIPBlacklistEntry != nil {
        // handle response
    }
}
```

## AccountGetPermissions

Retrieve permissions for a guest

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountGetPermissions(ctx, operations.AccountGetPermissionsRequest{
        EntityID: sdk.Int64(56713),
        EntityType: operations.AccountGetPermissionsEntityTypeEnumGroup.ToPointer(),
        GuestID: 272656,
        Limit: sdk.Int(383441),
        Offset: sdk.Int(477665),
        Type: operations.AccountGetPermissionsTypeEnumW.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntitiesResponseAPICoreDtoGrantsGrant != nil {
        // handle response
    }
}
```

## AccountGetPermissionsCount

Retrieve count of the permissions for a guest

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountGetPermissionsCount(ctx, operations.AccountGetPermissionsCountRequest{
        EntityID: sdk.Int64(812169),
        EntityType: operations.AccountGetPermissionsCountEntityTypeEnumGroup.ToPointer(),
        GuestID: 479977,
        Type: operations.AccountGetPermissionsCountTypeEnumW.ToPointer(),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesCountResponce != nil {
        // handle response
    }
}
```

## AccountGetPlan

Retrieve current account plan

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountGetPlan(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingPlan != nil {
        // handle response
    }
}
```

## AccountPatchPermissionsForm

Change the permission on a shared object

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountPatchPermissionsForm(ctx, operations.AccountPatchPermissionsFormRequest{
        APICoreRequestsPermissionPatchRequest: shared.APICoreRequestsPermissionPatchRequest{
            Action: sdk.String("nisi"),
            ID: sdk.Int64(925597),
            Verb: sdk.String("temporibus"),
        },
        GuestID: 71036,
        Type: operations.AccountPatchPermissionsFormTypeEnumDatapoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## AccountPatchPermissionsJSON

Change the permission on a shared object

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountPatchPermissionsJSON(ctx, operations.AccountPatchPermissionsJSONRequest{
        APICoreRequestsPermissionPatchRequest: shared.APICoreRequestsPermissionPatchRequest{
            Action: sdk.String("veritatis"),
            ID: sdk.Int64(648172),
            Verb: sdk.String("perferendis"),
        },
        GuestID: 368241,
        Type: operations.AccountPatchPermissionsJSONTypeEnumGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## AccountPatchPermissionsRaw

Change the permission on a shared object

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountPatchPermissionsRaw(ctx, operations.AccountPatchPermissionsRawRequest{
        RequestBody: []byte("sapiente"),
        GuestID: 778157,
        Type: operations.AccountPatchPermissionsRawTypeEnumDatapoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## AccountPostGuestForm

Update a guest

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountPostGuestForm(ctx, operations.AccountPostGuestFormRequest{
        APICoreDtoAccountingGuest: shared.APICoreDtoAccountingGuest{
            APIKey: sdk.String("at"),
            ConversionOptions: &shared.APICoreDtoAccountingConversionOptions{
                HideComCost: sdk.Bool(false),
                HideCost: sdk.Bool(false),
                HideCount: sdk.Bool(false),
                HideParams: sdk.Bool(false),
                HideValue: sdk.Bool(false),
                PercentCommission: sdk.Int(870088),
                PercentValue: sdk.Int(978619),
            },
            CreationDate: sdk.String("20120203120530"),
            CurrentGrant: &shared.APICoreDtoGrantsGrant{
                DatapointType: sdk.String("molestiae"),
                Entity: &shared.APICoreResponsesEntityURISystemInt64{
                    ID: sdk.Int64(799159),
                    URI: sdk.String("https://jumbo-lobotomy.net"),
                },
                EntityName: sdk.String("dolorum"),
                EntityType: sdk.String("dicta"),
                Type: sdk.String("nam"),
            },
            DateFormat: sdk.String("officia"),
            DecimalSeparator: sdk.String("occaecati"),
            Email: sdk.String("Kale_Welch10@gmail.com"),
            ExtendedGrants: &shared.APICoreDtoAccountingExtendedGrants{
                AllowAllGrants: sdk.Bool(false),
                AllowGroupCreation: sdk.Bool(false),
            },
            GroupGrants: sdk.Int64(414662),
            HitOptions: &shared.APICoreDtoAccountingHitOptions{
                HideReferrer: sdk.Bool(false),
            },
            ID: sdk.Int64(473600),
            Key: sdk.String("modi"),
            Language: sdk.String("qui"),
            LoginCount: sdk.Int(774234),
            Name: sdk.String("Cory Emmerich"),
            Notes: sdk.String("perferendis"),
            NumberGroupSeparator: sdk.String("ad"),
            Password: sdk.String("natus"),
            TimeFormat: shared.APICoreDtoAccountingGuestTimeFormatEnumAmPm.ToPointer(),
            TimeZone: sdk.Int(612096),
            TimeframeMinDate: sdk.String("20120203120530"),
            Timezonename: sdk.String("dolor"),
            TlGrants: sdk.Int64(616934),
            TpGrants: sdk.Int64(386489),
            UserName: sdk.String("Tyra.Turcotte35"),
        },
        GuestID: 613064,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingGuest != nil {
        // handle response
    }
}
```

## AccountPostGuestJSON

Update a guest

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountPostGuestJSON(ctx, operations.AccountPostGuestJSONRequest{
        APICoreDtoAccountingGuest: shared.APICoreDtoAccountingGuest{
            APIKey: sdk.String("iure"),
            ConversionOptions: &shared.APICoreDtoAccountingConversionOptions{
                HideComCost: sdk.Bool(false),
                HideCost: sdk.Bool(false),
                HideCount: sdk.Bool(false),
                HideParams: sdk.Bool(false),
                HideValue: sdk.Bool(false),
                PercentCommission: sdk.Int(902349),
                PercentValue: sdk.Int(697631),
            },
            CreationDate: sdk.String("20120203120530"),
            CurrentGrant: &shared.APICoreDtoGrantsGrant{
                DatapointType: sdk.String("architecto"),
                Entity: &shared.APICoreResponsesEntityURISystemInt64{
                    ID: sdk.Int64(60225),
                    URI: sdk.String("https://qualified-pew.net"),
                },
                EntityName: sdk.String("dolores"),
                EntityType: sdk.String("dolorem"),
                Type: sdk.String("corporis"),
            },
            DateFormat: sdk.String("explicabo"),
            DecimalSeparator: sdk.String("nobis"),
            Email: sdk.String("Lenore57@gmail.com"),
            ExtendedGrants: &shared.APICoreDtoAccountingExtendedGrants{
                AllowAllGrants: sdk.Bool(false),
                AllowGroupCreation: sdk.Bool(false),
            },
            GroupGrants: sdk.Int64(38425),
            HitOptions: &shared.APICoreDtoAccountingHitOptions{
                HideReferrer: sdk.Bool(false),
            },
            ID: sdk.Int64(438601),
            Key: sdk.String("culpa"),
            Language: sdk.String("doloribus"),
            LoginCount: sdk.Int(958950),
            Name: sdk.String("Angie Durgan"),
            Notes: sdk.String("repellat"),
            NumberGroupSeparator: sdk.String("mollitia"),
            Password: sdk.String("occaecati"),
            TimeFormat: shared.APICoreDtoAccountingGuestTimeFormatEnumAmPm.ToPointer(),
            TimeZone: sdk.Int(414369),
            TimeframeMinDate: sdk.String("20120203120530"),
            Timezonename: sdk.String("quam"),
            TlGrants: sdk.Int64(474697),
            TpGrants: sdk.Int64(244425),
            UserName: sdk.String("Linda.Cronin"),
        },
        GuestID: 674752,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingGuest != nil {
        // handle response
    }
}
```

## AccountPostGuestRaw

Update a guest

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountPostGuestRaw(ctx, operations.AccountPostGuestRawRequest{
        RequestBody: []byte("animi"),
        GuestID: 317202,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingGuest != nil {
        // handle response
    }
}
```

## AccountPostForm

Update current account data

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountPostForm(ctx, shared.APICoreDtoAccountingUser{
        BoGoVal: sdk.String("odit"),
        BonusClicks: sdk.Int64(778346),
        CompanyName: sdk.String("sequi"),
        CompanyRole: sdk.String("tenetur"),
        Email: sdk.String("Makayla9@yahoo.com"),
        FirstName: sdk.String("Lina"),
        LastName: sdk.String("Smitham"),
        Phone: sdk.String("1-299-945-9064 x7004"),
        RedirectOnly: sdk.Bool(false),
        RegistrationDate: sdk.String("20120203120530"),
        TimeframeMinDate: sdk.String("20120203120530"),
        Timezone: sdk.Int(282807),
        Timezonename: sdk.String("maiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingUser != nil {
        // handle response
    }
}
```

## AccountPostJSON

Update current account data

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountPostJSON(ctx, shared.APICoreDtoAccountingUser{
        BoGoVal: sdk.String("dicta"),
        BonusClicks: sdk.Int64(359444),
        CompanyName: sdk.String("dolore"),
        CompanyRole: sdk.String("iusto"),
        Email: sdk.String("Martine.Hamill91@gmail.com"),
        FirstName: sdk.String("Anissa"),
        LastName: sdk.String("Emmerich"),
        Phone: sdk.String("658.455.9095 x0923"),
        RedirectOnly: sdk.Bool(false),
        RegistrationDate: sdk.String("20120203120530"),
        TimeframeMinDate: sdk.String("20120203120530"),
        Timezone: sdk.Int(9356),
        Timezonename: sdk.String("est"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingUser != nil {
        // handle response
    }
}
```

## AccountPostRaw

Update current account data

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountPostRaw(ctx, []byte("quibusdam"))
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingUser != nil {
        // handle response
    }
}
```

## AccountPutDomainWhitelistForm

Create an domain entry

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountPutDomainWhitelistForm(ctx, shared.APICoreDtoAccountingDomainWhitelistEntry{
        ID: sdk.String("2abd4426-9802-4d50-aa94-bb4f63c969e9"),
        Name: sdk.String("Curtis Toy"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingDomainWhitelistEntry != nil {
        // handle response
    }
}
```

## AccountPutDomainWhitelistJSON

Create an domain entry

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountPutDomainWhitelistJSON(ctx, shared.APICoreDtoAccountingDomainWhitelistEntry{
        ID: sdk.String("77dfb14c-d66a-4e39-9efb-9ba88f3a6699"),
        Name: sdk.String("Dorothy Kovacek"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingDomainWhitelistEntry != nil {
        // handle response
    }
}
```

## AccountPutDomainWhitelistRaw

Create an domain entry

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountPutDomainWhitelistRaw(ctx, []byte("id"))
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingDomainWhitelistEntry != nil {
        // handle response
    }
}
```

## AccountPutGuestForm

Create a guest

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountPutGuestForm(ctx, shared.APICoreDtoAccountingGuest{
        APIKey: sdk.String("labore"),
        ConversionOptions: &shared.APICoreDtoAccountingConversionOptions{
            HideComCost: sdk.Bool(false),
            HideCost: sdk.Bool(false),
            HideCount: sdk.Bool(false),
            HideParams: sdk.Bool(false),
            HideValue: sdk.Bool(false),
            PercentCommission: sdk.Int(290077),
            PercentValue: sdk.Int(383462),
        },
        CreationDate: sdk.String("20120203120530"),
        CurrentGrant: &shared.APICoreDtoGrantsGrant{
            DatapointType: sdk.String("natus"),
            Entity: &shared.APICoreResponsesEntityURISystemInt64{
                ID: sdk.Int64(749170),
                URI: sdk.String("http://ugly-cash.com"),
            },
            EntityName: sdk.String("magnam"),
            EntityType: sdk.String("et"),
            Type: sdk.String("excepturi"),
        },
        DateFormat: sdk.String("ullam"),
        DecimalSeparator: sdk.String("provident"),
        Email: sdk.String("Kiley_Bartoletti@yahoo.com"),
        ExtendedGrants: &shared.APICoreDtoAccountingExtendedGrants{
            AllowAllGrants: sdk.Bool(false),
            AllowGroupCreation: sdk.Bool(false),
        },
        GroupGrants: sdk.Int64(652103),
        HitOptions: &shared.APICoreDtoAccountingHitOptions{
            HideReferrer: sdk.Bool(false),
        },
        ID: sdk.Int64(320997),
        Key: sdk.String("eum"),
        Language: sdk.String("dolor"),
        LoginCount: sdk.Int(896547),
        Name: sdk.String("Vivian Boyle"),
        Notes: sdk.String("debitis"),
        NumberGroupSeparator: sdk.String("eius"),
        Password: sdk.String("maxime"),
        TimeFormat: shared.APICoreDtoAccountingGuestTimeFormatEnumH24.ToPointer(),
        TimeZone: sdk.Int(703889),
        TimeframeMinDate: sdk.String("20120203120530"),
        Timezonename: sdk.String("in"),
        TlGrants: sdk.Int64(100226),
        TpGrants: sdk.Int64(99569),
        UserName: sdk.String("Tevin.Herman99"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingGuest != nil {
        // handle response
    }
}
```

## AccountPutGuestJSON

Create a guest

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountPutGuestJSON(ctx, shared.APICoreDtoAccountingGuest{
        APIKey: sdk.String("quibusdam"),
        ConversionOptions: &shared.APICoreDtoAccountingConversionOptions{
            HideComCost: sdk.Bool(false),
            HideCost: sdk.Bool(false),
            HideCount: sdk.Bool(false),
            HideParams: sdk.Bool(false),
            HideValue: sdk.Bool(false),
            PercentCommission: sdk.Int(149448),
            PercentValue: sdk.Int(904648),
        },
        CreationDate: sdk.String("20120203120530"),
        CurrentGrant: &shared.APICoreDtoGrantsGrant{
            DatapointType: sdk.String("pariatur"),
            Entity: &shared.APICoreResponsesEntityURISystemInt64{
                ID: sdk.Int64(37559),
                URI: sdk.String("http://luminous-oregano.biz"),
            },
            EntityName: sdk.String("sunt"),
            EntityType: sdk.String("quo"),
            Type: sdk.String("illum"),
        },
        DateFormat: sdk.String("pariatur"),
        DecimalSeparator: sdk.String("maxime"),
        Email: sdk.String("Keven.Connelly@yahoo.com"),
        ExtendedGrants: &shared.APICoreDtoAccountingExtendedGrants{
            AllowAllGrants: sdk.Bool(false),
            AllowGroupCreation: sdk.Bool(false),
        },
        GroupGrants: sdk.Int64(69167),
        HitOptions: &shared.APICoreDtoAccountingHitOptions{
            HideReferrer: sdk.Bool(false),
        },
        ID: sdk.Int64(982575),
        Key: sdk.String("quidem"),
        Language: sdk.String("ipsam"),
        LoginCount: sdk.Int(453543),
        Name: sdk.String("Candice Beatty"),
        Notes: sdk.String("voluptatibus"),
        NumberGroupSeparator: sdk.String("perferendis"),
        Password: sdk.String("fugiat"),
        TimeFormat: shared.APICoreDtoAccountingGuestTimeFormatEnumAmPm.ToPointer(),
        TimeZone: sdk.Int(11714),
        TimeframeMinDate: sdk.String("20120203120530"),
        Timezonename: sdk.String("cumque"),
        TlGrants: sdk.Int64(359978),
        TpGrants: sdk.Int64(944124),
        UserName: sdk.String("Morgan33"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingGuest != nil {
        // handle response
    }
}
```

## AccountPutGuestRaw

Create a guest

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountPutGuestRaw(ctx, []byte("totam"))
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingGuest != nil {
        // handle response
    }
}
```

## AccountPutIPBlacklistForm

Create an ip blacklist entry

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountPutIPBlacklistForm(ctx, shared.APICoreDtoAccountingIPBlacklistEntry{
        ID: sdk.String("7053202c-73d5-4fe9-b90c-28909b3fe49a"),
        IP: sdk.String("deleniti"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingIPBlacklistEntry != nil {
        // handle response
    }
}
```

## AccountPutIPBlacklistJSON

Create an ip blacklist entry

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountPutIPBlacklistJSON(ctx, shared.APICoreDtoAccountingIPBlacklistEntry{
        ID: sdk.String("d9cbf486-3332-43f9-b77f-3a4100674ebf"),
        IP: sdk.String("voluptas"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingIPBlacklistEntry != nil {
        // handle response
    }
}
```

## AccountPutIPBlacklistRaw

Create an ip blacklist entry

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.AccountPutIPBlacklistRaw(ctx, []byte("natus"))
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreDtoAccountingIPBlacklistEntry != nil {
        // handle response
    }
}
```

## PostAccountGuestsGuestIDTypePermissionsPatchForm

Change the permission on a shared object

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.PostAccountGuestsGuestIDTypePermissionsPatchForm(ctx, operations.PostAccountGuestsGuestIDTypePermissionsPatchFormRequest{
        APICoreRequestsPermissionPatchRequest: shared.APICoreRequestsPermissionPatchRequest{
            Action: sdk.String("eos"),
            ID: sdk.Int64(542499),
            Verb: sdk.String("sit"),
        },
        GuestID: 854614,
        Type: operations.PostAccountGuestsGuestIDTypePermissionsPatchFormTypeEnumDatapoint,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## PostAccountGuestsGuestIDTypePermissionsPatchJSON

Change the permission on a shared object

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.PostAccountGuestsGuestIDTypePermissionsPatchJSON(ctx, operations.PostAccountGuestsGuestIDTypePermissionsPatchJSONRequest{
        APICoreRequestsPermissionPatchRequest: shared.APICoreRequestsPermissionPatchRequest{
            Action: sdk.String("soluta"),
            ID: sdk.Int64(679393),
            Verb: sdk.String("iusto"),
        },
        GuestID: 453697,
        Type: operations.PostAccountGuestsGuestIDTypePermissionsPatchJSONTypeEnumGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```

## PostAccountGuestsGuestIDTypePermissionsPatchRaw

Change the permission on a shared object

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Account.PostAccountGuestsGuestIDTypePermissionsPatchRaw(ctx, operations.PostAccountGuestsGuestIDTypePermissionsPatchRawRequest{
        RequestBody: []byte("deleniti"),
        GuestID: 607045,
        Type: operations.PostAccountGuestsGuestIDTypePermissionsPatchRawTypeEnumGroup,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.APICoreResponsesEntityURISystemInt64 != nil {
        // handle response
    }
}
```
