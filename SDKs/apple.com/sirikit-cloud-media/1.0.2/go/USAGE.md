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
            AcceptLanguage: "beatae",
            CacheControl: "aut",
            IfNoneMatch: "quia",
            RequestTimeout: 22.200001,
            UserAgent: "ea",
            XApplecloudextensionRetryCount: 66.099998,
            XApplecloudextensionSessionID: "animi",
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