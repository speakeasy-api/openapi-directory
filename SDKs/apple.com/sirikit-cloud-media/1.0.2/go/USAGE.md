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
            AcceptLanguage: "et",
            CacheControl: "et",
            IfNoneMatch: "sequi",
            RequestTimeout: 33.200001,
            UserAgent: "iusto",
            XApplecloudextensionRetryCount: 61.099998,
            XApplecloudextensionSessionID: "eos",
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