# APIResources

### Available Operations

* [APIResourceCoverageOne](#apiresourcecoverageone) - Get API Resource Coverage
* [APIResourcesOne](#apiresourcesone) - Get API Resource

## APIResourceCoverageOne

Get API Resource Coverage

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
    res, err := s.APIResources.APIResourceCoverageOne(ctx, operations.APIResourceCoverageOneRequest{
        ID: "5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb",
        ResourceID: "esse",
        XApideckAppID: "ipsum",
    }, operations.APIResourceCoverageOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIResourceCoverageResponse != nil {
        // handle response
    }
}
```

## APIResourcesOne

Get API Resource

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
    res, err := s.APIResources.APIResourcesOne(ctx, operations.APIResourcesOneRequest{
        ID: "92059293-96fe-4a75-96eb-10faaa2352c5",
        ResourceID: "omnis",
        XApideckAppID: "nemo",
    }, operations.APIResourcesOneSecurity{
        APIKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAPIResourceResponse != nil {
        // handle response
    }
}
```
