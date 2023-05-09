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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AppendTextUsingGET(ctx, operations.AppendTextUsingGETRequest{
        PadID: sdk.String("corrupti"),
        Text: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppendTextUsingGET200ApplicationJSONObject != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->