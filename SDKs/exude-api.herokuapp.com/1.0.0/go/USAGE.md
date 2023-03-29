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
        PathParams: operations.FilterFileDataStoppingsPathParams{
            Type: "unde",
        },
        Request: operations.FilterFileDataStoppingsRequestBody{
            File: &operations.FilterFileDataStoppingsRequestBodyFile{
                Content: []byte("deserunt"),
                File: "porro",
            },
        },
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