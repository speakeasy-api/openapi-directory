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
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.DeleteEarthObservationJobRequest{
        PathParams: operations.DeleteEarthObservationJobPathParams{
            Arn: "corrupti",
        },
        Headers: operations.DeleteEarthObservationJobHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
        },
    }

    ctx := context.Background()
    res, err := s.DeleteEarthObservationJob(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEarthObservationJobOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->