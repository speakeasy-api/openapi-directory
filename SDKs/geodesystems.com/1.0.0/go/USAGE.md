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
    res, err := s.ServiceMediaTabularExtractsheet.MediaTabularExtractsheet(ctx, operations.MediaTabularExtractsheetRequest{
        Arg1: sdk.String("corrupti"),
        Entryid: "provident",
        Output: "distinctio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->