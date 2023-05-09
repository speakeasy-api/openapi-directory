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
    res, err := s.GetNhArt(ctx, operations.GetNhArtRequest{
        AcceptVersion: "corrupti",
        XAPIKey: "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
        Excludedetails: sdk.String("perferendis"),
        Hasfake: sdk.String("ipsam"),
        Thumbsize: sdk.Int64(832620),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.NHArtworks != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->