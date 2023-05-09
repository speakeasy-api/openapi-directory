<!-- Start SDK Example Usage -->
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
                Content: []byte("corrupti"),
                File: "provident",
            },
        },
        Type: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExudeResponseBean != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->