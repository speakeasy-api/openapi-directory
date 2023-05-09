# SDK

## Overview

The Nookipedia API provides endpoints for retrieving *Animal Crossing* data pulled from the [Nookipedia wiki](https://nookipedia.com/wiki/Main_Page). A couple of the key benefits of using the Nookipedia API is access to data spanning the entire *Animal Crossing* series, as well as information that is constantly updated and expanding as editors work on the wiki.<br><br>Access to the Nookipedia API requires obtaining a key. This is so we can manage our scale and provide better support for our users. To request access to the API, please fill out [this form](https://forms.gle/wLwtXLerKhfDrRLY8).

### Available Operations

* [GetNhArt](#getnhart) - All New Horizons artwork
* [GetNhArtArtwork](#getnhartartwork) - Single New Horizons artwork
* [GetNhBugs](#getnhbugs) - All New Horizons bugs
* [GetNhBugsBug](#getnhbugsbug) - Single New Horizons bug
* [GetNhClothing](#getnhclothing) - All New Horizons clothing
* [GetNhClothingClothing](#getnhclothingclothing) - Single New Horizons clothing
* [GetNhEvents](#getnhevents) - All New Horizons events
* [GetNhFish](#getnhfish) - All New Horizons fish
* [GetNhFishFish](#getnhfishfish) - Single New Horizons fish
* [GetNhFossilsAll](#getnhfossilsall) - All New Horizons fossil groups or individual fossil
* [GetNhFossilsAllFossil](#getnhfossilsallfossil) - Single New Horizons fossil group with individual fossils
* [GetNhFossilsGroups](#getnhfossilsgroups) - All New Horizons fossil groups
* [GetNhFossilsGroupsFossilGroup](#getnhfossilsgroupsfossilgroup) - Single New Horizons fossil group
* [GetNhFossilsIndividuals](#getnhfossilsindividuals) - All New Horizons fossils
* [GetNhFossilsIndividualsFossil](#getnhfossilsindividualsfossil) - Single New Horizons fossil
* [GetNhFurniture](#getnhfurniture) - All New Horizons furniture
* [GetNhFurnitureFurniture](#getnhfurniturefurniture) - Single New Horizons furniture
* [GetNhInterior](#getnhinterior) - All New Horizons interior items
* [GetNhInteriorItem](#getnhinterioritem) - Single New Horizons interior item
* [GetNhItems](#getnhitems) - Miscellaneous New Horizons items
* [GetNhItemsItem](#getnhitemsitem) - Single New Horizons miscellaneous item
* [GetNhPhotos](#getnhphotos) - All New Horizons photos and posters
* [GetNhPhotosItem](#getnhphotositem) - Single New Horizons photo or poster
* [GetNhRecipes](#getnhrecipes) - All New Horizons recipes
* [GetNhRecipesItem](#getnhrecipesitem) - Single New Horizons recipe
* [GetNhSea](#getnhsea) - All New Horizons sea creatures
* [GetNhSeaSeaCreature](#getnhseaseacreature) - Single New Horizons sea creature
* [GetNhTools](#getnhtools) - All New Horizons tools
* [GetNhToolsTool](#getnhtoolstool) - Single New Horizons tool
* [GetVillagers](#getvillagers) - Villagers

## GetNhArt

Get a list of all artwork and their details in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhArt(ctx, operations.GetNhArtRequest{
        AcceptVersion: "sapiente",
        XAPIKey: "c2ddf7cc-78ca-41ba-928f-c816742cb739",
        Excludedetails: sdk.String("aspernatur"),
        Hasfake: sdk.String("perferendis"),
        Thumbsize: sdk.Int64(324141),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHArtworks != nil {
        // handle response
    }
}
```

## GetNhArtArtwork

Retrieve information about a specific artwork in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhArtArtwork(ctx, operations.GetNhArtArtworkRequest{
        AcceptVersion: "natus",
        XAPIKey: "29396fea-7596-4eb1-8faa-a2352c595590",
        Artwork: "iure",
        Thumbsize: sdk.Int64(634274),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHArtwork != nil {
        // handle response
    }
}
```

## GetNhBugs

Get a list of all bugs and their details in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhBugs(ctx, operations.GetNhBugsRequest{
        AcceptVersion: "doloribus",
        XAPIKey: "f1a3a2fa-9467-4739-a51a-a52c3f5ad019",
        Excludedetails: sdk.String("temporibus"),
        Month: sdk.String("laborum"),
        Thumbsize: sdk.Int64(96098),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHBugs != nil {
        // handle response
    }
}
```

## GetNhBugsBug

Retrieve information about a specific bug in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhBugsBug(ctx, operations.GetNhBugsBugRequest{
        AcceptVersion: "reiciendis",
        XAPIKey: "fe78f097-b007-44f1-9471-b5e6e13b99d4",
        Bug: "praesentium",
        Thumbsize: sdk.Int64(523248),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHBug != nil {
        // handle response
    }
}
```

## GetNhClothing

Get a list of all clothing items and their details in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhClothing(ctx, operations.GetNhClothingRequest{
        AcceptVersion: "voluptates",
        XAPIKey: "1e91e450-ad2a-4bd4-8269-802d502a94bb",
        Category: operations.GetNhClothingCategoryEnumDressUp.ToPointer(),
        Color: []GetNhClothingColorEnum{
            operations.GetNhClothingColorEnumGray,
            operations.GetNhClothingColorEnumBlue,
            operations.GetNhClothingColorEnumPurple,
            operations.GetNhClothingColorEnumOrange,
        },
        Excludedetails: sdk.String("aliquid"),
        Labeltheme: operations.GetNhClothingLabelthemeEnumParty.ToPointer(),
        Style: []GetNhClothingStyleEnum{
            operations.GetNhClothingStyleEnumElegant,
            operations.GetNhClothingStyleEnumElegant,
            operations.GetNhClothingStyleEnumCool,
            operations.GetNhClothingStyleEnumSimple,
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHClothings != nil {
        // handle response
    }
}
```

## GetNhClothingClothing

Retrieve information about a specific clothing item in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhClothingClothing(ctx, operations.GetNhClothingClothingRequest{
        AcceptVersion: "a",
        XAPIKey: "a77dfb14-cd66-4ae3-95ef-b9ba88f3a669",
        Clothing: "omnis",
        Thumbsize: sdk.Int64(474867),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHClothing != nil {
        // handle response
    }
}
```

## GetNhEvents

Get a list of events and dates in *Animal Crossing: New Horizons*, filterable to specific years, months, or days. Data is available for the current and next year.

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
    res, err := s.SDK.GetNhEvents(ctx, operations.GetNhEventsRequest{
        AcceptVersion: "perferendis",
        XAPIKey: "74ba4469-b6e2-4141-9598-90afa563e251",
        Date: sdk.String("iure"),
        Day: sdk.Int64(984043),
        Month: sdk.String("debitis"),
        Year: sdk.String("eius"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHEvents != nil {
        // handle response
    }
}
```

## GetNhFish

Get a list of all fish and their details in *New Horizons*.

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
    res, err := s.SDK.GetNhFish(ctx, operations.GetNhFishRequest{
        AcceptVersion: "maxime",
        XAPIKey: "8b711e5b-7fd2-4ed0-a892-1cddc692601f",
        Excludedetails: sdk.String("quidem"),
        Month: sdk.String("ipsam"),
        Thumbsize: sdk.Int64(453543),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHFish != nil {
        // handle response
    }
}
```

## GetNhFishFish

Retrieve information about a specific fish in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhFishFish(ctx, operations.GetNhFishFishRequest{
        AcceptVersion: "autem",
        XAPIKey: "b0d5f0d3-0c5f-4bb2-9870-53202c73d5fe",
        Fish: "omnis",
        Thumbsize: sdk.Int64(704415),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHFish != nil {
        // handle response
    }
}
```

## GetNhFossilsAll

Get a list of all the fossil groups with their respective individual fossils in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhFossilsAll(ctx, operations.GetNhFossilsAllRequest{
        AcceptVersion: "perspiciatis",
        XAPIKey: "0c28909b-3fe4-49a8-99cb-f48633323f9b",
        Thumbsize: sdk.Int64(452109),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHFossilGroupWithIndividualFossilsNoMatcheds != nil {
        // handle response
    }
}
```

## GetNhFossilsAllFossil

Retrieve information about a specific fossil group with their respective individual fossils in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhFossilsAllFossil(ctx, operations.GetNhFossilsAllFossilRequest{
        AcceptVersion: "dignissimos",
        XAPIKey: "f3a41006-74eb-4f69-a80d-1ba77a89ebf7",
        Fossil: "ipsum",
        Thumbsize: sdk.Int64(456015),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHFossilGroupWithIndividualFossils != nil {
        // handle response
    }
}
```

## GetNhFossilsGroups

Get a list of all the fossil groups in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhFossilsGroups(ctx, operations.GetNhFossilsGroupsRequest{
        AcceptVersion: "id",
        XAPIKey: "e4203ce5-e6a9-45d8-a0d4-46ce2af7a73c",
        Thumbsize: sdk.Int64(947371),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHFossilGroups != nil {
        // handle response
    }
}
```

## GetNhFossilsGroupsFossilGroup

Retrieve information about a specific fossil group in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhFossilsGroupsFossilGroup(ctx, operations.GetNhFossilsGroupsFossilGroupRequest{
        AcceptVersion: "amet",
        XAPIKey: "be453f87-0b32-46b5-a734-29cdb1a8422b",
        FossilGroup: "facilis",
        Thumbsize: sdk.Int64(396060),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHFossilGroup != nil {
        // handle response
    }
}
```

## GetNhFossilsIndividuals

Get a list of all the individual fossils in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhFossilsIndividuals(ctx, operations.GetNhFossilsIndividualsRequest{
        AcceptVersion: "quam",
        XAPIKey: "9d232271-5bf0-4cbb-9e31-b8b90f3443a1",
        Thumbsize: sdk.Int64(63038),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHIndividualFossils != nil {
        // handle response
    }
}
```

## GetNhFossilsIndividualsFossil

Retrieve information about a specific individual fossil in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhFossilsIndividualsFossil(ctx, operations.GetNhFossilsIndividualsFossilRequest{
        AcceptVersion: "aut",
        XAPIKey: "8e0adcf4-b921-4879-bce9-53f73ef7fbc7",
        Fossil: "similique",
        Thumbsize: sdk.Int64(708548),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHIndividualFossil != nil {
        // handle response
    }
}
```

## GetNhFurniture

Get a list of all furniture and their details in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhFurniture(ctx, operations.GetNhFurnitureRequest{
        AcceptVersion: "vero",
        XAPIKey: "74dd39c0-f5d2-4cff-bc70-a45626d43681",
        Category: operations.GetNhFurnitureCategoryEnumHousewares.ToPointer(),
        Color: []GetNhFurnitureColorEnum{
            operations.GetNhFurnitureColorEnumBeige,
            operations.GetNhFurnitureColorEnumColorful,
            operations.GetNhFurnitureColorEnumWhite,
            operations.GetNhFurnitureColorEnumGreen,
        },
        Excludedetails: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHFurnitures != nil {
        // handle response
    }
}
```

## GetNhFurnitureFurniture

Retrieve information about a specific furniture in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhFurnitureFurniture(ctx, operations.GetNhFurnitureFurnitureRequest{
        AcceptVersion: "nostrum",
        XAPIKey: "fce6c556-146c-43e2-90fb-008c42e141aa",
        Furniture: "placeat",
        Thumbsize: sdk.Int64(245367),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHFurniture != nil {
        // handle response
    }
}
```

## GetNhInterior

Get a list of all interior items (flooring, wallpaper, and rugs) and their details in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhInterior(ctx, operations.GetNhInteriorRequest{
        AcceptVersion: "eum",
        XAPIKey: "6c8dd6b1-4429-4074-b477-8a7bd466d28c",
        Color: []GetNhInteriorColorEnum{
            operations.GetNhInteriorColorEnumAqua,
        },
        Excludedetails: sdk.String("id"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHInteriors != nil {
        // handle response
    }
}
```

## GetNhInteriorItem

Retrieve information about a specific interior item in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhInteriorItem(ctx, operations.GetNhInteriorItemRequest{
        AcceptVersion: "quidem",
        XAPIKey: "3cdca425-1904-4e52-bc7e-0bc7178e4796",
        Color: []GetNhInteriorItemColorEnum{
            operations.GetNhInteriorItemColorEnumBlack,
            operations.GetNhInteriorItemColorEnumPink,
            operations.GetNhInteriorItemColorEnumGray,
            operations.GetNhInteriorItemColorEnumAqua,
        },
        Item: "porro",
        Thumbsize: sdk.Int64(430402),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHInterior != nil {
        // handle response
    }
}
```

## GetNhItems

Get a list of all miscellaneous items (such as materials, star fragments, fruits, fences, and plants) and their details in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhItems(ctx, operations.GetNhItemsRequest{
        AcceptVersion: "quas",
        XAPIKey: "8282aa48-2562-4f22-ae98-17ee17cbe61e",
        Excludedetails: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHItems != nil {
        // handle response
    }
}
```

## GetNhItemsItem

Retrieve information about a miscellaneous item (such as materials, star fragments, fruits, fences, and plants) in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhItemsItem(ctx, operations.GetNhItemsItemRequest{
        AcceptVersion: "harum",
        XAPIKey: "7b95bc0a-b3c2-40c4-b378-9fd871f99dd2",
        Item: "eveniet",
        Thumbsize: sdk.Int64(992430),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHItem != nil {
        // handle response
    }
}
```

## GetNhPhotos

Get a list of all character photos+posters and their details in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhPhotos(ctx, operations.GetNhPhotosRequest{
        AcceptVersion: "facere",
        XAPIKey: "121aa6f1-e674-4bdb-84f1-5756082d68ea",
        Excludedetails: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHPhotos != nil {
        // handle response
    }
}
```

## GetNhPhotosItem

Retrieve information about a character photo or poster in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhPhotosItem(ctx, operations.GetNhPhotosItemRequest{
        AcceptVersion: "omnis",
        XAPIKey: "f1d17051-339d-4080-86a1-840394c26071",
        Item: "maiores",
        Thumbsize: sdk.Int64(618480),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHPhoto != nil {
        // handle response
    }
}
```

## GetNhRecipes

Get a list of all recipes and their details in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhRecipes(ctx, operations.GetNhRecipesRequest{
        AcceptVersion: "velit",
        XAPIKey: "f5f0642d-ac7a-4f51-9cc4-13aa63aae8d6",
        Excludedetails: sdk.String("ducimus"),
        Material: sdk.String("quos"),
        Thumbsize: sdk.Int64(427834),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHRecipes != nil {
        // handle response
    }
}
```

## GetNhRecipesItem

Retrieve information about a specific recipe in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhRecipesItem(ctx, operations.GetNhRecipesItemRequest{
        AcceptVersion: "labore",
        XAPIKey: "dbb675fd-5e60-4b37-9ed4-f6fbee41f333",
        Item: "beatae",
        Thumbsize: sdk.Int64(489509),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHRecipe != nil {
        // handle response
    }
}
```

## GetNhSea

Get a list of all sea creatures and their details in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhSea(ctx, operations.GetNhSeaRequest{
        AcceptVersion: "a",
        XAPIKey: "e35b60eb-1ea4-4265-95ba-3c28744ed53b",
        Excludedetails: sdk.String("blanditiis"),
        Month: sdk.String("quas"),
        Thumbsize: sdk.Int64(942584),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHSeaCreatures != nil {
        // handle response
    }
}
```

## GetNhSeaSeaCreature

Retrieve information about a specific sea creature in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhSeaSeaCreature(ctx, operations.GetNhSeaSeaCreatureRequest{
        AcceptVersion: "nesciunt",
        XAPIKey: "a8d8f5c0-b2f2-4fb7-b194-a276b26916fe",
        SeaCreature: "illo",
        Thumbsize: sdk.Int64(967795),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHSeaCreature != nil {
        // handle response
    }
}
```

## GetNhTools

Get a list of all tools and their details in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhTools(ctx, operations.GetNhToolsRequest{
        AcceptVersion: "perferendis",
        XAPIKey: "8f4294e3-698f-4447-b603-e8b445e80ca5",
        Excludedetails: sdk.String("minima"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHTools != nil {
        // handle response
    }
}
```

## GetNhToolsTool

Retrieve information about a specific tool in *Animal Crossing: New Horizons*.

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
    res, err := s.SDK.GetNhToolsTool(ctx, operations.GetNhToolsToolRequest{
        AcceptVersion: "recusandae",
        XAPIKey: "fd20e457-e185-48b6-a89f-be3a5aa8e482",
        Thumbsize: sdk.Int64(282699),
        Tool: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHTool != nil {
        // handle response
    }
}
```

## GetVillagers

This endpoint retrieves villager information from the entire *Animal Crossing* series, with the option to filter by species, personality, game, and/or birthday. Filters use the AND operator (e.g. asking for villagers who have species `frog` and personality `smug` will return all smug frogs). Note that villagers only include the animals that act as residents. Special characters, such as Tom Nook and Isabelle, are not accessed through this endpoint.

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
    res, err := s.SDK.GetVillagers(ctx, operations.GetVillagersRequest{
        AcceptVersion: "voluptatem",
        XAPIKey: "ab407508-8e51-4862-865e-904f3b1194b8",
        Birthday: sdk.String("laborum"),
        Birthmonth: sdk.String("nam"),
        Excludedetails: sdk.String("tenetur"),
        Game: []GetVillagersGameEnum{
            operations.GetVillagersGameEnumDnm,
            operations.GetVillagersGameEnumEPlus,
        },
        Name: sdk.String("Karl Miller"),
        Nhdetails: sdk.String("repellendus"),
        Personality: operations.GetVillagersPersonalityEnumSnooty.ToPointer(),
        Species: operations.GetVillagersSpeciesEnumSheep.ToPointer(),
        Thumbsize: sdk.Int64(16871),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Villagers != nil {
        // handle response
    }
}
```
