<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AcceptQualificationRequest(ctx, operations.AcceptQualificationRequestRequest{
        AcceptQualificationRequestRequest: shared.AcceptQualificationRequestRequest{
            IntegerValue: sdk.Int64(548814),
            QualificationRequestID: "provident",
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("unde"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("vel"),
        XAmzTarget: operations.AcceptQualificationRequestXAmzTargetEnumMTurkRequesterServiceV20170117AcceptQualificationRequest,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AcceptQualificationRequestResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->