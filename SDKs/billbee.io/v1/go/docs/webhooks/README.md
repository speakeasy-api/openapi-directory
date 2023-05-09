# Webhooks

### Available Operations

* [WebHookManagementDelete](#webhookmanagementdelete) - Deletes an existing WebHook registration.
* [WebHookManagementDeleteAll](#webhookmanagementdeleteall) - Deletes all existing WebHook registrations.
* [WebHookManagementGet](#webhookmanagementget) - Gets all registered WebHooks for a given user.
* [WebHookManagementGetFilters](#webhookmanagementgetfilters) - Returns a list of all known filters you can use to register webhooks
* [WebHookManagementLookup](#webhookmanagementlookup) - Looks up a registered WebHook with the given {id} for a given user.
* [WebHookManagementPost](#webhookmanagementpost) - Registers a new WebHook for a given user.
* [WebHookManagementPut](#webhookmanagementput) - Updates an existing WebHook registration.

## WebHookManagementDelete

Deletes an existing WebHook registration.

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
    res, err := s.Webhooks.WebHookManagementDelete(ctx, operations.WebHookManagementDeleteRequest{
        ID: "d40bcacc-6cbd-46b5-b3ec-909304f926ba",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.WebHookManagementDelete200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## WebHookManagementDeleteAll

Deletes all existing WebHook registrations.

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
    res, err := s.Webhooks.WebHookManagementDeleteAll(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.WebHookManagementDeleteAll200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## WebHookManagementGet

Gets all registered WebHooks for a given user.

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
    res, err := s.Webhooks.WebHookManagementGet(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIWebHookAPIModels != nil {
        // handle response
    }
}
```

## WebHookManagementGetFilters

Returns a list of all known filters you can use to register webhooks

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
    res, err := s.Webhooks.WebHookManagementGetFilters(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.WebHookManagementGetFilters200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## WebHookManagementLookup

Looks up a registered WebHook with the given {id} for a given user.

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
    res, err := s.Webhooks.WebHookManagementLookup(ctx, operations.WebHookManagementLookupRequest{
        ID: "d2553819-b474-4b0e-920e-56248fff639a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIWebHookAPIModel != nil {
        // handle response
    }
}
```

## WebHookManagementPost

Registers a new WebHook for a given user.

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
    res, err := s.Webhooks.WebHookManagementPost(ctx, shared.RechnungsdruckWebAppControllersAPIWebHookAPIModel{
        Description: sdk.String("provident"),
        Filters: []string{
            "ipsa",
        },
        Headers: map[string]string{
            "nam": "assumenda",
            "quo": "fuga",
            "tempore": "commodi",
        },
        ID: sdk.String("2676696e-1ec0-4022-9b33-5d89acb3ecfd"),
        IsPaused: sdk.Bool(false),
        Properties: map[string]map[string]interface{}{
            "atque": map[string]interface{}{
                "sit": "quo",
                "veniam": "aliquam",
                "provident": "vero",
                "earum": "doloremque",
            },
            "ipsum": map[string]interface{}{
                "doloremque": "tempora",
            },
            "perspiciatis": map[string]interface{}{
                "atque": "officia",
                "ex": "architecto",
            },
        },
        Secret: "a",
        WebHookURI: "laborum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIWebHookAPIModel != nil {
        // handle response
    }
}
```

## WebHookManagementPut

Updates an existing WebHook registration.

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
    res, err := s.Webhooks.WebHookManagementPut(ctx, operations.WebHookManagementPutRequest{
        RechnungsdruckWebAppControllersAPIWebHookAPIModel: shared.RechnungsdruckWebAppControllersAPIWebHookAPIModel{
            Description: sdk.String("veritatis"),
            Filters: []string{
                "a",
                "qui",
                "accusantium",
                "commodi",
            },
            Headers: map[string]string{
                "totam": "tenetur",
                "voluptate": "quam",
                "quod": "vitae",
            },
            ID: sdk.String("ffc71dca-163f-42a3-880a-97ff334cddf8"),
            IsPaused: sdk.Bool(false),
            Properties: map[string]map[string]interface{}{
                "esse": map[string]interface{}{
                    "perspiciatis": "voluptates",
                    "eum": "quasi",
                    "quas": "odio",
                },
                "commodi": map[string]interface{}{
                    "aliquid": "mollitia",
                    "quidem": "explicabo",
                    "et": "nulla",
                    "magni": "natus",
                },
            },
            Secret: "illum",
            WebHookURI: "a",
        },
        ID: "c94d6fec-d799-4390-866a-6d2d00035533",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIWebHookAPIModel != nil {
        // handle response
    }
}
```
