# Test

### Available Operations

* [GetAlmawsV1TaskListsTest](#getalmawsv1taskliststest) - GET Task-lists Test API
* [PostAlmawsV1TaskListsTest](#postalmawsv1taskliststest) - POST Task-lists Test API

## GetAlmawsV1TaskListsTest

This API is used to test if the API key was configured correctly.It returns a short XML (no schema available - the output is subject to changes) with the following structure:<test>GET - OK - institutionCode: 01ABC_INST</test>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Test.GetAlmawsV1TaskListsTest(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAlmawsV1TaskListsTest200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## PostAlmawsV1TaskListsTest

This API is used to test if the API key was configured correctly, including read/write permissions.It returns a short XML (no schema available - the output is subject to changes) with the following structure:<test>POST - OK</test>

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Test.PostAlmawsV1TaskListsTest(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.PostAlmawsV1TaskListsTest200ApplicationJSONObject != nil {
        // handle response
    }
}
```
