# PublicListOfValuesLOV

### Available Operations

* [GetPublicListOfValues](#getpubliclistofvalues) - Get the list of values related to this list name
* [GetPublicLovIndex](#getpubliclovindex) - Get all list names

## GetPublicListOfValues

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
    res, err := s.PublicListOfValuesLOV.GetPublicListOfValues(ctx, operations.GetPublicListOfValuesRequest{
        AcceptLanguage: []string{
            "quasi",
        },
        IfNoneMatch: sdk.String("non"),
        ListName: "maiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicListOfValuesResponse != nil {
        // handle response
    }
}
```

## GetPublicLovIndex

Get all list names

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
    res, err := s.PublicListOfValuesLOV.GetPublicLovIndex(ctx, operations.GetPublicLovIndexRequest{
        IfNoneMatch: sdk.String("enim"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublicLovIndex != nil {
        // handle response
    }
}
```
