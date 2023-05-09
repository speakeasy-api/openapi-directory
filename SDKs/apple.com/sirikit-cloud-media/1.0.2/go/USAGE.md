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
    res, err := s.Config.ExtensionConfiguration(ctx, operations.ExtensionConfigurationRequest{
        AcceptLanguage: "corrupti",
        CacheControl: "provident",
        IfNoneMatch: sdk.String("distinctio"),
        RequestTimeout: 8442.66,
        UserAgent: "unde",
        XApplecloudextensionRetryCount: sdk.Float64(8579.46),
        XApplecloudextensionSessionID: "corrupti",
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