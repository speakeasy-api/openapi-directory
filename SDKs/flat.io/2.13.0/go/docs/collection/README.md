# Collection

## Overview

Collections let you organize your content in a Flat account. They work like a regular _folder_ with some specificities:
  - Our design goal here is to create a system similar to a _book_ or a _playlist of songs_.
  - Collections can't have children collections (except the `trash` and `sharedWithMe` that are special collections).
  - Any score can be added to one or multiple collections. For example, you can have a single private score in two or more collections, or add any public or shared scores to one of your collections.

All the collections don't have the same capabilities. Capabilities depend on the `type` of collection and the `rights` you have on a collection. They are available when [listing the collection](#operation/listCollections) or [retrieving the collection details](#operation/getCollection).

At this time, only `private` privacy mode is widely available. Privacy modes `public`, `organizationPublic` and `privateLink`, and 1:1 sharing will be available in an upcoming update later this year.


### Available Operations

* [AddScoreToCollection](#addscoretocollection) - Add a score to the collection
* [CreateCollection](#createcollection) - Create a new collection
* [DeleteCollection](#deletecollection) - Delete the collection
* [DeleteScoreFromCollection](#deletescorefromcollection) - Delete a score from the collection
* [EditCollection](#editcollection) - Update a collection's metadata
* [GetCollection](#getcollection) - Get collection details
* [ListCollectionScores](#listcollectionscores) - List the scores contained in a collection
* [ListCollections](#listcollections) - List the collections
* [UntrashCollection](#untrashcollection) - Untrash a collection

## AddScoreToCollection

This operation will add a score to a collection. The default behavior will make the score available across multiple collections.
You must have the capability `canAddScores` on the provided `collection` to perform the action.


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
    res, err := s.Collection.AddScoreToCollection(ctx, operations.AddScoreToCollectionRequest{
        Collection: "doloremque",
        Score: "reprehenderit",
        SharingKey: sdk.String("ut"),
    }, operations.AddScoreToCollectionSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreDetails != nil {
        // handle response
    }
}
```

## CreateCollection

This method will create a new collection and add it to your `root` collection.


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
    res, err := s.Collection.CreateCollection(ctx, shared.CollectionCreation{
        Privacy: shared.CollectionPrivacyEnumPrivate,
        Title: "Dr.",
    }, operations.CreateCollectionSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Collection != nil {
        // handle response
    }
}
```

## DeleteCollection

This method will schedule the deletion of the collection. Until deleted, the collection will be available in the `trash`.


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
    res, err := s.Collection.DeleteCollection(ctx, operations.DeleteCollectionRequest{
        Collection: "dicta",
    }, operations.DeleteCollectionSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteScoreFromCollection

This method will delete a score from the collection. Unlike [`DELETE /scores/{score}`](#operation/deleteScore), this score will not remove the score from your account, but only from the collection.
This can be used to *move* a score from one collection to another, or simply remove a score from one collection when this one is contained in multiple collections.


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
    res, err := s.Collection.DeleteScoreFromCollection(ctx, operations.DeleteScoreFromCollectionRequest{
        Collection: "corporis",
        Score: "dolore",
        SharingKey: sdk.String("iusto"),
    }, operations.DeleteScoreFromCollectionSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## EditCollection

Update a collection's metadata

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
    res, err := s.Collection.EditCollection(ctx, operations.EditCollectionRequest{
        CollectionModification: &shared.CollectionModification{
            Privacy: shared.CollectionPrivacyEnumPrivate.ToPointer(),
            Title: sdk.String("Mr."),
        },
        Collection: "harum",
    }, operations.EditCollectionSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Collection != nil {
        // handle response
    }
}
```

## GetCollection

Get collection details

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
    res, err := s.Collection.GetCollection(ctx, operations.GetCollectionRequest{
        Collection: "enim",
        SharingKey: sdk.String("accusamus"),
    }, operations.GetCollectionSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Collection != nil {
        // handle response
    }
}
```

## ListCollectionScores

Use this method to list the scores contained in a collection.
If no sort option is provided, the scores are sorted by `modificationDate` `desc`.


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
    res, err := s.Collection.ListCollectionScores(ctx, operations.ListCollectionScoresRequest{
        Collection: "commodi",
        Direction: operations.ListCollectionScoresDirectionEnumDesc.ToPointer(),
        Limit: sdk.Int64(64147),
        Next: sdk.String("ipsum"),
        Previous: sdk.String("quidem"),
        SharingKey: sdk.String("molestias"),
        Sort: operations.ListCollectionScoresSortEnumModificationDate.ToPointer(),
    }, operations.ListCollectionScoresSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ScoreDetails != nil {
        // handle response
    }
}
```

## ListCollections

Use this method to list the user's collections contained in `parent` (by default in the `root` collection).
If no sort option is provided, the collections are sorted by `creationDate` `desc`.

Note that this method will not include the `parent` collection in the listing.
For example, if you need the details of the `root` collection, you can use `GET /v2/collections/root`.


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
    res, err := s.Collection.ListCollections(ctx, operations.ListCollectionsRequest{
        Direction: operations.ListCollectionsDirectionEnumDesc.ToPointer(),
        Limit: sdk.Int64(265389),
        Next: sdk.String("praesentium"),
        Parent: sdk.String("rem"),
        Previous: sdk.String("voluptates"),
        Sort: operations.ListCollectionsSortEnumCreationDate.ToPointer(),
    }, operations.ListCollectionsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Collections != nil {
        // handle response
    }
}
```

## UntrashCollection

This method will restore the collection by removing it from the `trash` and add it back to the `root` collection.


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
    res, err := s.Collection.UntrashCollection(ctx, operations.UntrashCollectionRequest{
        Collection: "repudiandae",
    }, operations.UntrashCollectionSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
