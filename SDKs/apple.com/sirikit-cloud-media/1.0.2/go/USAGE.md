<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.ExtensionConfigurationRequest{
        Headers: operations.ExtensionConfigurationHeaders{
            AcceptLanguage: "sit",
            CacheControl: "voluptas",
            IfNoneMatch: "culpa",
            RequestTimeout: 6.200000,
            UserAgent: "dolor",
            XApplecloudextensionRetryCount: 67.199997,
            XApplecloudextensionSessionID: "fugit",
        },
    }
    
    res, err := s.Config.ExtensionConfiguration(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->