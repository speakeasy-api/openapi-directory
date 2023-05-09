# Items

## Overview

Access and manage items inside 1Password Vaults

### Available Operations

* [CreateVaultItem](#createvaultitem) - Create a new Item
* [DeleteVaultItem](#deletevaultitem) - Delete an Item
* [GetVaultItemByID](#getvaultitembyid) - Get the details of an Item
* [GetVaultItems](#getvaultitems) - Get all items for inside a Vault
* [PatchVaultItem](#patchvaultitem) - Update a subset of Item attributes
* [UpdateVaultItem](#updatevaultitem) - Update an Item

## CreateVaultItem

Create a new Item

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
    res, err := s.Items.CreateVaultItem(ctx, operations.CreateVaultItemRequest{
        FullItemInput: &shared.FullItemInput{
            Category: shared.FullItemCategoryEnumSSHKey,
            Favorite: sdk.Bool(false),
            Fields: []shared.FieldInput{
                shared.FieldInput{
                    Generate: sdk.Bool(false),
                    ID: "77dfb14c-d66a-4e39-9efb-9ba88f3a6699",
                    Label: sdk.String("molestiae"),
                    Purpose: shared.FieldPurposeEnumUnknown.ToPointer(),
                    Recipe: &shared.GeneratorRecipe{
                        CharacterSets: []shared.GeneratorRecipeCharacterSetsEnum{
                            shared.GeneratorRecipeCharacterSetsEnumLetters,
                            shared.GeneratorRecipeCharacterSetsEnumSymbols,
                        },
                        ExcludeCharacters: sdk.String("abc1"),
                        Length: sdk.Int64(660174),
                    },
                    Section: &shared.FieldSection{
                        ID: sdk.String("4469b6e2-1419-4598-90af-a563e2516fe4"),
                    },
                    Type: shared.FieldTypeEnumMonthYear,
                    Value: sdk.String("deleniti"),
                },
                shared.FieldInput{
                    Generate: sdk.Bool(false),
                    ID: "b711e5b7-fd2e-4d02-8921-cddc692601fb",
                    Label: sdk.String("ipsam"),
                    Purpose: shared.FieldPurposeEnumUsername.ToPointer(),
                    Recipe: &shared.GeneratorRecipe{
                        CharacterSets: []shared.GeneratorRecipeCharacterSetsEnum{
                            shared.GeneratorRecipeCharacterSetsEnumSymbols,
                            shared.GeneratorRecipeCharacterSetsEnumLetters,
                        },
                        ExcludeCharacters: sdk.String("abc1"),
                        Length: sdk.Int64(866383),
                    },
                    Section: &shared.FieldSection{
                        ID: sdk.String("5f0d30c5-fbb2-4587-8532-02c73d5fe9b9"),
                    },
                    Type: shared.FieldTypeEnumString,
                    Value: sdk.String("porro"),
                },
                shared.FieldInput{
                    Generate: sdk.Bool(false),
                    ID: "28909b3f-e49a-48d9-8bf4-8633323f9b77",
                    Label: sdk.String("reiciendis"),
                    Purpose: shared.FieldPurposeEnumUnknown.ToPointer(),
                    Recipe: &shared.GeneratorRecipe{
                        CharacterSets: []shared.GeneratorRecipeCharacterSetsEnum{
                            shared.GeneratorRecipeCharacterSetsEnumLetters,
                            shared.GeneratorRecipeCharacterSetsEnumLetters,
                            shared.GeneratorRecipeCharacterSetsEnumLetters,
                        },
                        ExcludeCharacters: sdk.String("abc1"),
                        Length: sdk.Int64(56418),
                    },
                    Section: &shared.FieldSection{
                        ID: sdk.String("674ebf69-280d-41ba-b7a8-9ebf737ae420"),
                    },
                    Type: shared.FieldTypeEnumEmail,
                    Value: sdk.String("optio"),
                },
            },
            Files: []shared.FileInput{
                shared.FileInput{
                    Content: sdk.String("ad"),
                    ID: sdk.String("e6a95d8a-0d44-46ce-aaf7-a73cf3be453f"),
                    Name: sdk.String("Christian Balistreri"),
                    Section: &shared.FileSection{
                        ID: sdk.String("26b5a734-29cd-4b1a-8422-bb679d232271"),
                    },
                    Size: sdk.Int64(355613),
                },
                shared.FileInput{
                    Content: sdk.String("nam"),
                    ID: sdk.String("f0cbb1e3-1b8b-490f-b443-a1108e0adcf4"),
                    Name: sdk.String("Ms. Terrance Davis"),
                    Section: &shared.FileSection{
                        ID: sdk.String("9fce953f-73ef-47fb-87ab-d74dd39c0f5d"),
                    },
                    Size: sdk.Int64(148141),
                },
                shared.FileInput{
                    Content: sdk.String("porro"),
                    ID: sdk.String("ff7c70a4-5626-4d43-a813-f16d9f5fce6c"),
                    Name: sdk.String("Mrs. Sally Jacobi"),
                    Section: &shared.FileSection{
                        ID: sdk.String("c3e250fb-008c-442e-941a-ac366c8dd6b1"),
                    },
                    Size: sdk.Int64(270328),
                },
                shared.FileInput{
                    Content: sdk.String("numquam"),
                    ID: sdk.String("29074747-78a7-4bd4-a6d2-8c10ab3cdca4"),
                    Name: sdk.String("Brittany Bernier II"),
                    Section: &shared.FileSection{
                        ID: sdk.String("e523c7e0-bc71-478e-8796-f2a70c688282"),
                    },
                    Size: sdk.Int64(681393),
                },
            },
            ID: sdk.String("a482562f-222e-4981-bee1-7cbe61e6b7b9"),
            Sections: []shared.FullItemSections{
                shared.FullItemSections{
                    ID: sdk.String("bc0ab3c2-0c4f-4378-9fd8-71f99dd2efd1"),
                    Label: sdk.String("consequuntur"),
                },
                shared.FullItemSections{
                    ID: sdk.String("1aa6f1e6-74bd-4b04-b157-56082d68ea19"),
                    Label: sdk.String("tenetur"),
                },
            },
            Tags: []string{
                "at",
            },
            Title: sdk.String("Mr."),
            Urls: []shared.FullItemUrls{
                shared.FullItemUrls{
                    Href: "ipsa",
                    Label: sdk.String("minima"),
                    Primary: sdk.Bool(false),
                },
                shared.FullItemUrls{
                    Href: "veritatis",
                    Label: sdk.String("consectetur"),
                    Primary: sdk.Bool(false),
                },
            },
            Vault: shared.FullItemVault{
                ID: "39d08086-a184-4039-8c26-071f93f5f064",
            },
            Version: sdk.Int64(162954),
        },
        VaultUUID: "repellendus",
    }, operations.CreateVaultItemSecurity{
        ConnectToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FullItem != nil {
        // handle response
    }
}
```

## DeleteVaultItem

Delete an Item

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
    res, err := s.Items.DeleteVaultItem(ctx, operations.DeleteVaultItemRequest{
        ItemUUID: "officia",
        VaultUUID: "maxime",
    }, operations.DeleteVaultItemSecurity{
        ConnectToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetVaultItemByID

Get the details of an Item

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
    res, err := s.Items.GetVaultItemByID(ctx, operations.GetVaultItemByIDRequest{
        ItemUUID: "dignissimos",
        VaultUUID: "officia",
    }, operations.GetVaultItemByIDSecurity{
        ConnectToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FullItem != nil {
        // handle response
    }
}
```

## GetVaultItems

Get all items for inside a Vault

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
    res, err := s.Items.GetVaultItems(ctx, operations.GetVaultItemsRequest{
        Filter: sdk.String("title eq "Some Item Name""),
        VaultUUID: "asperiores",
    }, operations.GetVaultItemsSecurity{
        ConnectToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Items != nil {
        // handle response
    }
}
```

## PatchVaultItem

Applies a modified [RFC6902 JSON Patch](https://tools.ietf.org/html/rfc6902) document to an Item or ItemField. This endpoint only supports `add`, `remove` and `replace` operations.

When modifying a specific ItemField, the ItemField's ID in the `path` attribute of the operation object: `/fields/{fieldId}`


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
    res, err := s.Items.PatchVaultItem(ctx, operations.PatchVaultItemRequest{
        RequestBody: []shared.Patch{
            shared.Patch{
                Op: shared.PatchOpEnumAdd,
                Path: "/fields/06gnn2b95example10q91512p5/label",
                Value: map[string]interface{}{
                    "porro": "quod",
                    "labore": "ab",
                },
            },
            shared.Patch{
                Op: shared.PatchOpEnumAdd,
                Path: "/fields/06gnn2b95example10q91512p5/label",
                Value: map[string]interface{}{
                    "id": "suscipit",
                    "velit": "culpa",
                    "est": "recusandae",
                },
            },
        },
        ItemUUID: "totam",
        VaultUUID: "fugiat",
    }, operations.PatchVaultItemSecurity{
        ConnectToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FullItem != nil {
        // handle response
    }
}
```

## UpdateVaultItem

Update an Item

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
    res, err := s.Items.UpdateVaultItem(ctx, operations.UpdateVaultItemRequest{
        FullItemInput: &shared.FullItemInput{
            Category: shared.FullItemCategoryEnumOutdoorLicense,
            Favorite: sdk.Bool(false),
            Fields: []shared.FieldInput{
                shared.FieldInput{
                    Generate: sdk.Bool(false),
                    ID: "864dbb67-5fd5-4e60-b375-ed4f6fbee41f",
                    Label: sdk.String("adipisci"),
                    Purpose: shared.FieldPurposeEnumUnknown.ToPointer(),
                    Recipe: &shared.GeneratorRecipe{
                        CharacterSets: []shared.GeneratorRecipeCharacterSetsEnum{
                            shared.GeneratorRecipeCharacterSetsEnumLetters,
                        },
                        ExcludeCharacters: sdk.String("abc1"),
                        Length: sdk.Int64(489509),
                    },
                    Section: &shared.FieldSection{
                        ID: sdk.String("fe35b60e-b1ea-4426-955b-a3c28744ed53"),
                    },
                    Type: shared.FieldTypeEnumDate,
                    Value: sdk.String("blanditiis"),
                },
                shared.FieldInput{
                    Generate: sdk.Bool(false),
                    ID: "8f3a8d8f-5c0b-42f2-bb7b-194a276b2691",
                    Label: sdk.String("suscipit"),
                    Purpose: shared.FieldPurposeEnumNotes.ToPointer(),
                    Recipe: &shared.GeneratorRecipe{
                        CharacterSets: []shared.GeneratorRecipeCharacterSetsEnum{
                            shared.GeneratorRecipeCharacterSetsEnumLetters,
                            shared.GeneratorRecipeCharacterSetsEnumSymbols,
                            shared.GeneratorRecipeCharacterSetsEnumLetters,
                            shared.GeneratorRecipeCharacterSetsEnumDigits,
                        },
                        ExcludeCharacters: sdk.String("abc1"),
                        Length: sdk.Int64(979574),
                    },
                    Section: &shared.FieldSection{
                        ID: sdk.String("4294e369-8f44-47f6-83e8-b445e80ca55e"),
                    },
                    Type: shared.FieldTypeEnumMenu,
                    Value: sdk.String("nulla"),
                },
            },
            Files: []shared.FileInput{
                shared.FileInput{
                    Content: sdk.String("aperiam"),
                    ID: sdk.String("e457e185-8b6a-489f-be3a-5aa8e4824d0a"),
                    Name: sdk.String("Miguel Adams"),
                    Section: &shared.FileSection{
                        ID: sdk.String("088e5186-2065-4e90-8f3b-1194b8abf603"),
                    },
                    Size: sdk.Int64(647197),
                },
            },
            ID: sdk.String("79f9dfe0-ab7d-4a8a-90ce-187f86bc173d"),
            Sections: []shared.FullItemSections{
                shared.FullItemSections{
                    ID: sdk.String("89eee952-6f8d-4986-a881-ead4f0e10125"),
                    Label: sdk.String("laboriosam"),
                },
                shared.FullItemSections{
                    ID: sdk.String("3f94e29e-973e-4922-a57a-15be3e060807"),
                    Label: sdk.String("eveniet"),
                },
            },
            Tags: []string{
                "cum",
            },
            Title: sdk.String("Ms."),
            Urls: []shared.FullItemUrls{
                shared.FullItemUrls{
                    Href: "ratione",
                    Label: sdk.String("laborum"),
                    Primary: sdk.Bool(false),
                },
                shared.FullItemUrls{
                    Href: "distinctio",
                    Label: sdk.String("voluptatum"),
                    Primary: sdk.Bool(false),
                },
                shared.FullItemUrls{
                    Href: "rem",
                    Label: sdk.String("aliquam"),
                    Primary: sdk.Bool(false),
                },
                shared.FullItemUrls{
                    Href: "ad",
                    Label: sdk.String("repellat"),
                    Primary: sdk.Bool(false),
                },
            },
            Vault: shared.FullItemVault{
                ID: "0597a60f-f2a5-44a3-9e94-764a3e865e79",
            },
            Version: sdk.Int64(337477),
        },
        ItemUUID: "eum",
        VaultUUID: "reiciendis",
    }, operations.UpdateVaultItemSecurity{
        ConnectToken: "Bearer YOUR_BEARER_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.FullItem != nil {
        // handle response
    }
}
```
