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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AppendTextUsingGETRequest{
        PadID: "corrupti",
        Text: "provident",
    }

    ctx := context.Background()
    res, err := s.AppendTextUsingGET(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AppendTextUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->