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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.ApplyArchiveRuleRequest{
        RequestBody: operations.ApplyArchiveRuleRequestBody{
            AnalyzerArn: "corrupti",
            ClientToken: "provident",
            RuleName: "distinctio",
        },
        XAmzAlgorithm: "quibusdam",
        XAmzContentSha256: "unde",
        XAmzCredential: "nulla",
        XAmzDate: "corrupti",
        XAmzSecurityToken: "illum",
        XAmzSignature: "vel",
        XAmzSignedHeaders: "error",
    }

    ctx := context.Background()
    res, err := s.ApplyArchiveRule(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->