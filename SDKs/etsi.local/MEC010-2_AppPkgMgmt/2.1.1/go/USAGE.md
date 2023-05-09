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
    res, err := s.AppPkgm.AppDGET(ctx, operations.AppDGETRequest{
        AllFields: sdk.String("corrupti"),
        AppDID: "provident",
        ExcludeDefault: sdk.String("distinctio"),
        ExcludeFields: sdk.String("quibusdam"),
        Fields: sdk.String("unde"),
        Filter: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->