# UserListOfValuesLOV

### Available Operations

* [GetUserListOfValues](#getuserlistofvalues) - Get the list of values related to this list name
* [GetUserLovIndex](#getuserlovindex) - Get all list names

## GetUserListOfValues

Get the list of values related to this list name

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
    res, err := s.UserListOfValuesLOV.GetUserListOfValues(ctx, operations.GetUserListOfValuesRequest{
        AcceptLanguage: []string{
            "nulla",
            "deserunt",
            "esse",
        },
        IfNoneMatch: sdk.String("nemo"),
        ListName: "reprehenderit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserListOfValuesResponse != nil {
        // handle response
    }
}
```

## GetUserLovIndex

Get all list names

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
    res, err := s.UserListOfValuesLOV.GetUserLovIndex(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.UserLovIndex != nil {
        // handle response
    }
}
```
