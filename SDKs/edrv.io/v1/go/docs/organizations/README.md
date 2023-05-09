# Organizations

### Available Operations

* [GetOrganization](#getorganization) - Get one organization's data by id
* [GetOrganizations](#getorganizations) - Get an array of all Organizations
* [PatchOrganization](#patchorganization) - Update an organization's data

## GetOrganization

Get one organization's data by id

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Organizations.GetOrganization(ctx, operations.GetOrganizationRequest{
        ID: "4f157560-82d6-48ea-99f1-d17051339d08",
        IncludeLocations: sdk.Bool(false),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrganizations

Get an array of all Organizations

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Organizations.GetOrganizations(ctx, operations.GetOrganizationsRequest{
        CreatedAtDollarGte: types.MustTimeFromString("2022-06-27T17:27:50.523Z"),
        CreatedAtDollarLte: types.MustTimeFromString("2022-05-08T19:28:18.512Z"),
        IncludeLocations: sdk.Bool(false),
        PaginateEnabled: sdk.Bool(false),
        PaginateLimit: sdk.Int64(68074),
        PaginatePage: sdk.String("corrupti"),
        SortBy: sdk.String("non"),
        SortOrder: shared.SortOrder1EnumDesc.ToPointer(),
        UpdatedAtDollarGte: types.MustTimeFromString("2022-06-03T05:52:14.954Z"),
        UpdatedAtDollarLte: types.MustTimeFromString("2022-03-25T13:15:35.424Z"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## PatchOrganization

Update an organization's data

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
            Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Organizations.PatchOrganization(ctx, operations.PatchOrganizationRequest{
        RequestBody: operations.PatchOrganizationRequestBody{
            Active: sdk.Bool(false),
            Address: &operations.PatchOrganizationRequestBodyAddress{
                City: sdk.String("South Adolfomouth"),
                Country: sdk.String("Bouvet Island (Bouvetoya)"),
                PostalCode: sdk.String("62939-0431"),
                StreetAndNumber: sdk.String("repellendus"),
            },
            Channels: &operations.PatchOrganizationRequestBodyChannels{
                Slack: map[string]interface{}{
                    "maxime": "dignissimos",
                    "officia": "asperiores",
                    "nemo": "quae",
                },
                Telegram: map[string]interface{}{
                    "porro": "quod",
                    "labore": "ab",
                },
            },
            Configurations: &operations.PatchOrganizationRequestBodyConfigurations{
                BasicAuthEnabled: sdk.Bool(false),
                BasicAuthPassword: sdk.Bool(false),
            },
            Links: &operations.PatchOrganizationRequestBodyLinks{
                About: sdk.String("adipisci"),
                Contact: sdk.String("fuga"),
                Privacy: sdk.String("id"),
                Support: sdk.String("suscipit"),
            },
            Locations: []interface{}{
                "culpa",
            },
            Logo: sdk.String("est"),
            Name: sdk.String("Felix Stehr"),
            Otp: sdk.String("quos"),
            StripeConnectedAccountID: sdk.String("vel"),
            StripeCountry: sdk.String("labore"),
            StripeCurrency: sdk.String("possimus"),
            StripeReserveAmount: sdk.Int64(706575),
            Support: &operations.PatchOrganizationRequestBodySupport{
                BusinessHours: sdk.String("cum"),
                Chat: &operations.PatchOrganizationRequestBodySupportChat{
                    Type: sdk.String("commodi"),
                    Value: sdk.String("in"),
                },
                ContactNumber: sdk.String("corporis"),
                Email: sdk.String("Rhoda.Hettinger4@hotmail.com"),
            },
            SupportChat: &operations.PatchOrganizationRequestBodySupportChat1{
                ID: sdk.String("b375ed4f-6fbe-4e41-b333-17fe35b60eb1"),
                Name: sdk.String("Otis Goldner"),
            },
            Theme: &operations.PatchOrganizationRequestBodyTheme{
                Colors: &operations.PatchOrganizationRequestBodyThemeColors{
                    Primary: sdk.String("voluptas"),
                    Secondary: sdk.String("voluptas"),
                },
            },
        },
        ID: "5ba3c287-44ed-453b-88f3-a8d8f5c0b2f2",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
