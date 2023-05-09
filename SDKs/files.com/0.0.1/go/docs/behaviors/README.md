# Behaviors

## Overview

Operations about behaviors

### Available Operations

* [BehaviorListForPath](#behaviorlistforpath) - List Behaviors by path
* [DeleteBehaviorsID](#deletebehaviorsid) - Delete Behavior
* [GetBehaviors](#getbehaviors) - List Behaviors
* [GetBehaviorsID](#getbehaviorsid) - Show Behavior
* [PatchBehaviorsID](#patchbehaviorsid) - Update Behavior
* [PostBehaviors](#postbehaviors) - Create Behavior
* [PostBehaviorsWebhookTest](#postbehaviorswebhooktest) - Test webhook.

## BehaviorListForPath

List Behaviors by path

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
    res, err := s.Behaviors.BehaviorListForPath(ctx, operations.BehaviorListForPathRequest{
        Behavior: sdk.String("minus"),
        Cursor: sdk.String("quam"),
        Filter: map[string]interface{}{
            "vero": "nostrum",
        },
        FilterPrefix: map[string]interface{}{
            "recusandae": "omnis",
            "facilis": "perspiciatis",
            "voluptatem": "porro",
            "consequuntur": "blanditiis",
        },
        Path: "error",
        PerPage: sdk.Int(50370),
        Recursive: sdk.String("occaecati"),
        SortBy: map[string]interface{}{
            "adipisci": "asperiores",
            "earum": "modi",
            "iste": "dolorum",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BehaviorEntities != nil {
        // handle response
    }
}
```

## DeleteBehaviorsID

Delete Behavior

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
    res, err := s.Behaviors.DeleteBehaviorsID(ctx, operations.DeleteBehaviorsIDRequest{
        ID: 535633,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetBehaviors

List Behaviors

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
    res, err := s.Behaviors.GetBehaviors(ctx, operations.GetBehaviorsRequest{
        Behavior: sdk.String("pariatur"),
        Cursor: sdk.String("provident"),
        Filter: map[string]interface{}{
            "libero": "delectus",
            "quaerat": "quos",
            "aliquid": "dolorem",
            "dolorem": "dolor",
        },
        FilterPrefix: map[string]interface{}{
            "ipsum": "hic",
        },
        PerPage: sdk.Int(569574),
        SortBy: map[string]interface{}{
            "voluptate": "dignissimos",
            "reiciendis": "amet",
            "dolorum": "numquam",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BehaviorEntities != nil {
        // handle response
    }
}
```

## GetBehaviorsID

Show Behavior

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
    res, err := s.Behaviors.GetBehaviorsID(ctx, operations.GetBehaviorsIDRequest{
        ID: 85295,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BehaviorEntity != nil {
        // handle response
    }
}
```

## PatchBehaviorsID

Update Behavior

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
    res, err := s.Behaviors.PatchBehaviorsID(ctx, operations.PatchBehaviorsIDRequest{
        RequestBody: &operations.PatchBehaviorsIDRequestBody{
            AttachmentDelete: sdk.Bool(false),
            AttachmentFile: &operations.PatchBehaviorsIDRequestBodyAttachmentFile{
                AttachmentFile: "ipsa",
                Content: []byte("ipsa"),
            },
            Behavior: sdk.String("webhook"),
            Description: sdk.String("example"),
            Name: sdk.String("example"),
            Path: sdk.String("iure"),
            Value: sdk.String("{"method": "GET"}"),
        },
        ID: 487838,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BehaviorEntity != nil {
        // handle response
    }
}
```

## PostBehaviors

Create Behavior

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
    res, err := s.Behaviors.PostBehaviors(ctx, operations.PostBehaviorsRequestBody{
        AttachmentFile: &operations.PostBehaviorsRequestBodyAttachmentFile{
            AttachmentFile: "quaerat",
            Content: []byte("accusamus"),
        },
        Behavior: "webhook",
        Description: sdk.String("example"),
        Name: sdk.String("example"),
        Path: "quidem",
        Value: sdk.String("{"method": "GET"}"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BehaviorEntity != nil {
        // handle response
    }
}
```

## PostBehaviorsWebhookTest

Test webhook.

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
    res, err := s.Behaviors.PostBehaviorsWebhookTest(ctx, operations.PostBehaviorsWebhookTestRequestBody{
        Action: sdk.String("test"),
        Body: map[string]interface{}{
            "voluptas": "natus",
            "eos": "atque",
            "sit": "fugiat",
            "ab": "soluta",
        },
        Encoding: sdk.String("RAW"),
        Headers: map[string]interface{}{
            "iusto": "voluptate",
            "dolorum": "deleniti",
            "omnis": "necessitatibus",
        },
        Method: sdk.String("GET"),
        URL: "https://www.site.com/...",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusEntity != nil {
        // handle response
    }
}
```
