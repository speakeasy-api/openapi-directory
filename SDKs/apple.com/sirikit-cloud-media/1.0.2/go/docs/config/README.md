# Config

### Available Operations

* [ExtensionConfiguration](#extensionconfiguration) - Configuration Resource

## ExtensionConfiguration

Configuration Resource

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
    res, err := s.Config.ExtensionConfiguration(ctx, operations.ExtensionConfigurationRequest{
        AcceptLanguage: "illum",
        CacheControl: "vel",
        IfNoneMatch: sdk.String("error"),
        RequestTimeout: 6458.94,
        UserAgent: "suscipit",
        XApplecloudextensionRetryCount: sdk.Float64(4375.87),
        XApplecloudextensionSessionID: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
