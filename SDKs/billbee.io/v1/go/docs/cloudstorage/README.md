# CloudStorage

### Available Operations

* [CloudStorageAPIGetList](#cloudstorageapigetlist) - Gets a list of all connected cloud storage devices

## CloudStorageAPIGetList

Gets a list of all connected cloud storage devices

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
    res, err := s.CloudStorage.CloudStorageAPIGetList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCloudStorageAPIModel != nil {
        // handle response
    }
}
```
