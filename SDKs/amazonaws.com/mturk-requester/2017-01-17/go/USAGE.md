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

    req := operations.AcceptQualificationRequestRequest{
        AcceptQualificationRequestRequest: shared.AcceptQualificationRequestRequest{
            IntegerValue: 548814,
            QualificationRequestID: "provident",
        },
        XAmzAlgorithm: "distinctio",
        XAmzContentSha256: "quibusdam",
        XAmzCredential: "unde",
        XAmzDate: "nulla",
        XAmzSecurityToken: "corrupti",
        XAmzSignature: "illum",
        XAmzSignedHeaders: "vel",
        XAmzTarget: "MTurkRequesterServiceV20170117.AcceptQualificationRequest",
    }

    ctx := context.Background()
    res, err := s.AcceptQualificationRequest(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptQualificationRequestResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->