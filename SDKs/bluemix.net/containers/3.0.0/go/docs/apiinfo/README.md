# APIInfo

### Available Operations

* [GetContainersMessages](#getcontainersmessages) - List messages for the user
* [GetContainersVersion](#getcontainersversion) - List latest API version

## GetContainersMessages

This endpoint retrieves all IBM Containers system messages for the user.

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
    res, err := s.APIInfo.GetContainersMessages(ctx, operations.GetContainersMessagesRequest{
        XAuthProjectID: "distinctio",
        XAuthToken: "quibusdam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetContainersMessages200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetContainersVersion

This endpoint retrieves a list of all microservices that are used in the IBM Containers service with their current build version. This method does not require authentication.

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
    res, err := s.APIInfo.GetContainersVersion(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ContainersVersionGetInfo != nil {
        // handle response
    }
}
```
