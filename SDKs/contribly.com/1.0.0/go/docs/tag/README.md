# Tag

## Overview

Create and list tags and tag sets

### Available Operations

* [GetTags](#gettags) - List tags
* [GetTagsID](#gettagsid) - Retrieve a single tag by id
* [GetTagsets](#gettagsets) - List tag sets
* [GetTagsetsID](#gettagsetsid) - Retrieve a single tag set by id
* [PostTags](#posttags) - Create a new tag
* [PostTagsets](#posttagsets) - Create a new tag set

## GetTags

Retrieve tags.

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
    res, err := s.Tag.GetTags(ctx, operations.GetTagsRequest{
        OwnedBy: sdk.String("quas"),
        TagSet: sdk.String("et"),
        URLWords: sdk.String("facilis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tags != nil {
        // handle response
    }
}
```

## GetTagsID

Retrieve a single tag by id

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
    res, err := s.Tag.GetTagsID(ctx, operations.GetTagsIDRequest{
        ID: "36a08088-d100-4efa-9a20-0ef0422eb216",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## GetTagsets

Retrieve tag sets.

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
    res, err := s.Tag.GetTagsets(ctx, operations.GetTagsetsRequest{
        OwnedBy: sdk.String("modi"),
        URLWords: sdk.String("optio"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagSets != nil {
        // handle response
    }
}
```

## GetTagsetsID

Retrieve a single tag set by id

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
    res, err := s.Tag.GetTagsetsID(ctx, operations.GetTagsetsIDRequest{
        ID: "f9ab8366-c723-4ffd-a9e0-6bee4825c1fc",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagSet != nil {
        // handle response
    }
}
```

## PostTags

Create a new tag

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Tag.PostTags(ctx, shared.TagSubmission{
        Colour: sdk.String("quae"),
        Name: "Joe Bradtke",
        TagSet: &shared.TagSet{
            ID: "80bff918-544e-4c42-9efc-ce8f1977773e",
            Name: "Dawn Herzog",
        },
        URLWords: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Tag != nil {
        // handle response
    }
}
```

## PostTagsets

Create a new tag set

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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Tag.PostTagsets(ctx, shared.TagSetSubmission{
        Name: "Ms. Verna Gislason",
        URLWords: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagSet != nil {
        // handle response
    }
}
```
