# AccountHolders

### Available Operations

* [GetAccountHoldersID](#getaccountholdersid) - Get an account holder
* [GetAccountHoldersIDBalanceAccounts](#getaccountholdersidbalanceaccounts) - Get all balance accounts of an account holder
* [PatchAccountHoldersID](#patchaccountholdersid) - Update an account holder
* [PostAccountHolders](#postaccountholders) - Create an account holder

## GetAccountHoldersID

Returns an account holder.

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
    res, err := s.AccountHolders.GetAccountHoldersID(ctx, operations.GetAccountHoldersIDRequest{
        ID: "a05dfc2d-df7c-4c78-8a1b-a928fc816742",
    }, operations.GetAccountHoldersIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountHolder != nil {
        // handle response
    }
}
```

## GetAccountHoldersIDBalanceAccounts

Returns a paginated list of the balance accounts associated with an account holder. To fetch multiple pages, use the query parameters. 

For example, to limit the page to 5 balance accounts and skip the first 10, use `/accountHolders/{id}/balanceAccounts?limit=5&offset=10`.

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
    res, err := s.AccountHolders.GetAccountHoldersIDBalanceAccounts(ctx, operations.GetAccountHoldersIDBalanceAccountsRequest{
        ID: "cb739205-9293-496f-aa75-96eb10faaa23",
        Limit: sdk.Int(358152),
        Offset: sdk.Int(128926),
    }, operations.GetAccountHoldersIDBalanceAccountsSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PaginatedBalanceAccountsResponse != nil {
        // handle response
    }
}
```

## PatchAccountHoldersID

Updates an account holder. When updating an account holder resource, if a parameter is not provided in the request, it is left unchanged.

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
    res, err := s.AccountHolders.PatchAccountHoldersID(ctx, operations.PatchAccountHoldersIDRequest{
        AccountHolderInput: &shared.AccountHolderInput{
            BalancePlatform: sdk.String("nobis"),
            Capabilities: map[string]shared.AccountHolderCapabilityInput{
                "omnis": shared.AccountHolderCapabilityInput{
                    AllowedSettings: &shared.JSONObject{
                        Paths: []shared.JSONPath{
                            shared.JSONPath{
                                Content: []string{
                                    "excepturi",
                                    "accusantium",
                                },
                            },
                            shared.JSONPath{
                                Content: []string{
                                    "culpa",
                                    "doloribus",
                                },
                            },
                        },
                        RootPath: &shared.JSONPath{
                            Content: []string{
                                "architecto",
                                "mollitia",
                                "dolorem",
                                "culpa",
                            },
                        },
                    },
                    Enabled: sdk.Bool(false),
                    Requested: sdk.Bool(false),
                    RequestedLevel: shared.AccountHolderCapabilityRequestedLevelEnumHigh.ToPointer(),
                    RequestedSettings: &shared.JSONObject{
                        Paths: []shared.JSONPath{
                            shared.JSONPath{
                                Content: []string{
                                    "occaecati",
                                    "numquam",
                                    "commodi",
                                },
                            },
                            shared.JSONPath{
                                Content: []string{
                                    "molestiae",
                                    "velit",
                                },
                            },
                            shared.JSONPath{
                                Content: []string{
                                    "quia",
                                    "quis",
                                    "vitae",
                                },
                            },
                            shared.JSONPath{
                                Content: []string{
                                    "animi",
                                    "enim",
                                    "odit",
                                },
                            },
                        },
                        RootPath: &shared.JSONPath{
                            Content: []string{
                                "sequi",
                                "tenetur",
                                "ipsam",
                                "id",
                            },
                        },
                    },
                    TransferInstruments: []shared.AccountSupportingEntityCapabilityInput{
                        shared.AccountSupportingEntityCapabilityInput{
                            Enabled: sdk.Bool(false),
                            Requested: sdk.Bool(false),
                            RequestedLevel: shared.AccountSupportingEntityCapabilityRequestedLevelEnumHigh.ToPointer(),
                        },
                        shared.AccountSupportingEntityCapabilityInput{
                            Enabled: sdk.Bool(false),
                            Requested: sdk.Bool(false),
                            RequestedLevel: shared.AccountSupportingEntityCapabilityRequestedLevelEnumHigh.ToPointer(),
                        },
                        shared.AccountSupportingEntityCapabilityInput{
                            Enabled: sdk.Bool(false),
                            Requested: sdk.Bool(false),
                            RequestedLevel: shared.AccountSupportingEntityCapabilityRequestedLevelEnumMedium.ToPointer(),
                        },
                        shared.AccountSupportingEntityCapabilityInput{
                            Enabled: sdk.Bool(false),
                            Requested: sdk.Bool(false),
                            RequestedLevel: shared.AccountSupportingEntityCapabilityRequestedLevelEnumNotApplicable.ToPointer(),
                        },
                    },
                },
                "laborum": shared.AccountHolderCapabilityInput{
                    AllowedSettings: &shared.JSONObject{
                        Paths: []shared.JSONPath{
                            shared.JSONPath{
                                Content: []string{
                                    "voluptatibus",
                                    "vero",
                                    "nihil",
                                    "praesentium",
                                },
                            },
                        },
                        RootPath: &shared.JSONPath{
                            Content: []string{
                                "ipsa",
                                "omnis",
                                "voluptate",
                                "cum",
                            },
                        },
                    },
                    Enabled: sdk.Bool(false),
                    Requested: sdk.Bool(false),
                    RequestedLevel: shared.AccountHolderCapabilityRequestedLevelEnumHigh.ToPointer(),
                    RequestedSettings: &shared.JSONObject{
                        Paths: []shared.JSONPath{
                            shared.JSONPath{
                                Content: []string{
                                    "ut",
                                    "maiores",
                                },
                            },
                        },
                        RootPath: &shared.JSONPath{
                            Content: []string{
                                "corporis",
                            },
                        },
                    },
                    TransferInstruments: []shared.AccountSupportingEntityCapabilityInput{
                        shared.AccountSupportingEntityCapabilityInput{
                            Enabled: sdk.Bool(false),
                            Requested: sdk.Bool(false),
                            RequestedLevel: shared.AccountSupportingEntityCapabilityRequestedLevelEnumLow.ToPointer(),
                        },
                        shared.AccountSupportingEntityCapabilityInput{
                            Enabled: sdk.Bool(false),
                            Requested: sdk.Bool(false),
                            RequestedLevel: shared.AccountSupportingEntityCapabilityRequestedLevelEnumHigh.ToPointer(),
                        },
                    },
                },
            },
            ContactDetails: &shared.ContactDetails{
                Address: shared.Address{
                    City: "Hamillside",
                    Country: "Iraq",
                    HouseNumberOrName: "repudiandae",
                    PostalCode: "26558",
                    StateOrProvince: sdk.String("modi"),
                    Street: "5909 Boehm Viaduct",
                },
                Email: "Emily_Altenwerth13@gmail.com",
                Phone: shared.Phone{
                    Number: "deserunt",
                    Type: shared.PhoneTypeEnumMobile,
                },
                WebAddress: sdk.String("quibusdam"),
            },
            Description: sdk.String("labore"),
            LegalEntityID: "modi",
            PrimaryBalanceAccount: sdk.String("qui"),
            Reference: sdk.String("aliquid"),
            Status: shared.AccountHolderStatusEnumInactive.ToPointer(),
            TimeZone: sdk.String("quos"),
        },
        ID: "02d502a9-4bb4-4f63-8969-e9a3efa77dfb",
    }, operations.PatchAccountHoldersIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountHolder != nil {
        // handle response
    }
}
```

## PostAccountHolders

Creates an account holder linked to a [legal entity](https://docs.adyen.com/api-explorer/#/legalentity/latest/post/legalEntities).



### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.AccountHolders.PostAccountHolders(ctx, shared.AccountHolderInfoInput{
        BalancePlatform: sdk.String("dicta"),
        Capabilities: map[string]shared.AccountHolderCapabilityInput{
            "cumque": shared.AccountHolderCapabilityInput{
                AllowedSettings: &shared.JSONObject{
                    Paths: []shared.JSONPath{
                        shared.JSONPath{
                            Content: []string{
                                "aliquid",
                                "laborum",
                            },
                        },
                        shared.JSONPath{
                            Content: []string{
                                "non",
                                "occaecati",
                                "enim",
                                "accusamus",
                            },
                        },
                        shared.JSONPath{
                            Content: []string{
                                "quidem",
                                "provident",
                                "nam",
                                "id",
                            },
                        },
                        shared.JSONPath{
                            Content: []string{
                                "deleniti",
                                "sapiente",
                                "amet",
                            },
                        },
                    },
                    RootPath: &shared.JSONPath{
                        Content: []string{
                            "nisi",
                            "vel",
                            "natus",
                        },
                    },
                },
                Enabled: sdk.Bool(false),
                Requested: sdk.Bool(false),
                RequestedLevel: shared.AccountHolderCapabilityRequestedLevelEnumMedium.ToPointer(),
                RequestedSettings: &shared.JSONObject{
                    Paths: []shared.JSONPath{
                        shared.JSONPath{
                            Content: []string{
                                "nihil",
                            },
                        },
                        shared.JSONPath{
                            Content: []string{
                                "distinctio",
                                "id",
                            },
                        },
                    },
                    RootPath: &shared.JSONPath{
                        Content: []string{
                            "labore",
                            "suscipit",
                        },
                    },
                },
                TransferInstruments: []shared.AccountSupportingEntityCapabilityInput{
                    shared.AccountSupportingEntityCapabilityInput{
                        Enabled: sdk.Bool(false),
                        Requested: sdk.Bool(false),
                        RequestedLevel: shared.AccountSupportingEntityCapabilityRequestedLevelEnumMedium.ToPointer(),
                    },
                    shared.AccountSupportingEntityCapabilityInput{
                        Enabled: sdk.Bool(false),
                        Requested: sdk.Bool(false),
                        RequestedLevel: shared.AccountSupportingEntityCapabilityRequestedLevelEnumLow.ToPointer(),
                    },
                    shared.AccountSupportingEntityCapabilityInput{
                        Enabled: sdk.Bool(false),
                        Requested: sdk.Bool(false),
                        RequestedLevel: shared.AccountSupportingEntityCapabilityRequestedLevelEnumNotApplicable.ToPointer(),
                    },
                },
            },
            "aspernatur": shared.AccountHolderCapabilityInput{
                AllowedSettings: &shared.JSONObject{
                    Paths: []shared.JSONPath{
                        shared.JSONPath{
                            Content: []string{
                                "et",
                                "excepturi",
                            },
                        },
                    },
                    RootPath: &shared.JSONPath{
                        Content: []string{
                            "provident",
                            "quos",
                        },
                    },
                },
                Enabled: sdk.Bool(false),
                Requested: sdk.Bool(false),
                RequestedLevel: shared.AccountHolderCapabilityRequestedLevelEnumMedium.ToPointer(),
                RequestedSettings: &shared.JSONObject{
                    Paths: []shared.JSONPath{
                        shared.JSONPath{
                            Content: []string{
                                "reiciendis",
                                "mollitia",
                                "ad",
                            },
                        },
                    },
                    RootPath: &shared.JSONPath{
                        Content: []string{
                            "dolor",
                            "necessitatibus",
                        },
                    },
                },
                TransferInstruments: []shared.AccountSupportingEntityCapabilityInput{
                    shared.AccountSupportingEntityCapabilityInput{
                        Enabled: sdk.Bool(false),
                        Requested: sdk.Bool(false),
                        RequestedLevel: shared.AccountSupportingEntityCapabilityRequestedLevelEnumLow.ToPointer(),
                    },
                },
            },
        },
        ContactDetails: &shared.ContactDetails{
            Address: shared.Address{
                City: "South Wiltonside",
                Country: "Equatorial Guinea",
                HouseNumberOrName: "maxime",
                PostalCode: "74109-3749",
                StateOrProvince: sdk.String("quibusdam"),
                Street: "98015 Cummerata Court",
            },
            Email: "Rosendo.Streich56@hotmail.com",
            Phone: shared.Phone{
                Number: "odit",
                Type: shared.PhoneTypeEnumLandline,
            },
            WebAddress: sdk.String("accusantium"),
        },
        Description: sdk.String("ab"),
        LegalEntityID: "maiores",
        Reference: sdk.String("quidem"),
        TimeZone: sdk.String("ipsam"),
    }, operations.PostAccountHoldersSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AccountHolder != nil {
        // handle response
    }
}
```
