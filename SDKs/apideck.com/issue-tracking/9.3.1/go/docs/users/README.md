# Users

### Available Operations

* [CollectionUsersAll](#collectionusersall) - List Users
* [CollectionUsersOne](#collectionusersone) - Get user

## CollectionUsersAll

List Users

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
    res, err := s.Users.CollectionUsersAll(ctx, operations.CollectionUsersAllRequest{
        CollectionID: "apideck-io",
        Cursor: sdk.String("quasi"),
        Fields: sdk.String("repudiandae"),
        Limit: sdk.Int64(575947),
        Raw: sdk.Bool(false),
        XApideckAppID: "veritatis",
        XApideckConsumerID: "itaque",
        XApideckServiceID: sdk.String("incidunt"),
    }, operations.CollectionUsersAllSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCollectionUsersResponse != nil {
        // handle response
    }
}
```

## CollectionUsersOne

Get user

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
    res, err := s.Users.CollectionUsersOne(ctx, operations.CollectionUsersOneRequest{
        CollectionID: "apideck-io",
        Fields: sdk.String("enim"),
        ID: "0ad2abd4-4269-4802-9502-a94bb4f63c96",
        Raw: sdk.Bool(false),
        XApideckAppID: "provident",
        XApideckConsumerID: "necessitatibus",
        XApideckServiceID: sdk.String("sint"),
    }, operations.CollectionUsersOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetCollectionUserResponse != nil {
        // handle response
    }
}
```
