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

    req := operations.ExtensionConfigurationRequest{
        AcceptLanguage: "corrupti",
        CacheControl: "provident",
        IfNoneMatch: "distinctio",
        RequestTimeout: 8442.66,
        UserAgent: "unde",
        XApplecloudextensionRetryCount: 8579.46,
        XApplecloudextensionSessionID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Config.ExtensionConfiguration(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->