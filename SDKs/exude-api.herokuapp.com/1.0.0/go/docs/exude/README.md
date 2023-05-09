# Exude

### Available Operations

* [FilterFileDataStoppings](#filterfiledatastoppings) - Filter the stopping words from the provided input file
* [FilterStoppings](#filterstoppings) - Filter the stopping words from the provided input data or links

## FilterFileDataStoppings

Filter the stopping words from the provided input file

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
    res, err := s.Exude.FilterFileDataStoppings(ctx, operations.FilterFileDataStoppingsRequest{
        RequestBody: operations.FilterFileDataStoppingsRequestBody{
            File: &operations.FilterFileDataStoppingsRequestBodyFile{
                Content: []byte("quibusdam"),
                File: "unde",
            },
        },
        Type: "nulla",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExudeResponseBean != nil {
        // handle response
    }
}
```

## FilterStoppings

Filter the stopping words from the provided input data or links

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
    res, err := s.Exude.FilterStoppings(ctx, operations.FilterStoppingsRequest{
        ExudeBean: shared.ExudeBean{
            Data: sdk.String("corrupti"),
            Links: []string{
                "vel",
                "error",
                "deserunt",
                "suscipit",
            },
        },
        Type: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExudeResponseBean != nil {
        // handle response
    }
}
```
