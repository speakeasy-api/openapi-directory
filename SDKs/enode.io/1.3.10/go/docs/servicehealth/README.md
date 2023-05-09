# ServiceHealth

### Available Operations

* [GetHealthReady](#gethealthready) - Check Service Readiness
* [GetHealthVendors](#gethealthvendors) - Check Available Vendors

## GetHealthReady

Gets the combined health status of the service and all functionalities and dependencies.

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
    res, err := s.ServiceHealth.GetHealthReady(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetHealthVendors

List the supported vendors and their current status.

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
    res, err := s.ServiceHealth.GetHealthVendors(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.GetHealthVendors200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
