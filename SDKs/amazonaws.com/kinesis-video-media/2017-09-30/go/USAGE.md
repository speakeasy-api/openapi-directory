<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.GetMedia(ctx, operations.GetMediaRequest{
        RequestBody: operations.GetMediaRequestBody{
            StartSelector: operations.GetMediaRequestBodyStartSelector{
                AfterFragmentNumber: sdk.String("corrupti"),
                ContinuationToken: sdk.String("provident"),
                StartSelectorType: shared.StartSelectorTypeEnumEarliest.ToPointer(),
                StartTimestamp: types.MustTimeFromString("2021-03-11T23:22:42.658Z"),
            },
            StreamARN: sdk.String("nulla"),
            StreamName: sdk.String("corrupti"),
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("vel"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetMediaOutput != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->