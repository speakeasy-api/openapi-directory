# Badges

### Available Operations

* [AdminListBadges](#adminlistbadges) - List badges
* [CreateBadge](#createbadge) - Create badge
* [DeleteBadge](#deletebadge) - Delete badge
* [ListUserBadges](#listuserbadges) - List badges for a user
* [UpdateBadge](#updatebadge) - Update badge

## AdminListBadges

List badges

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Badges.AdminListBadges(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.AdminListBadges200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateBadge

Create badge

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
    res, err := s.Badges.CreateBadge(ctx, operations.CreateBadgeRequestBody{
        BadgeTypeID: 392785,
        Name: "Jake Bernier MD",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateBadge200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteBadge

Delete badge

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
    res, err := s.Badges.DeleteBadge(ctx, operations.DeleteBadgeRequest{
        ID: 20218,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ListUserBadges

List badges for a user

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
    res, err := s.Badges.ListUserBadges(ctx, operations.ListUserBadgesRequest{
        Username: "Freeda_Sipes14",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListUserBadges200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateBadge

Update badge

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
    res, err := s.Badges.UpdateBadge(ctx, operations.UpdateBadgeRequest{
        RequestBody: &operations.UpdateBadgeRequestBody{
            BadgeTypeID: 870013,
            Name: "Emilio Krajcik",
        },
        ID: 461479,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateBadge200ApplicationJSONObject != nil {
        // handle response
    }
}
```
