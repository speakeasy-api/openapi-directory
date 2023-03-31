<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.FilterFileDataStoppingsRequest{
        RequestBody: operations.FilterFileDataStoppingsRequestBody{
            File: &operations.FilterFileDataStoppingsRequestBodyFile{
                Content: []byte("corrupti"),
                File: "provident",
            },
        },
        Type: "distinctio",
    }

    ctx := context.Background()
    res, err := s.Exude.FilterFileDataStoppings(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ExudeResponseBean != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->