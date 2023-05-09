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
    res, err := s.AddAttachmentsToSet(ctx, operations.AddAttachmentsToSetRequest{
        AddAttachmentsToSetRequest: shared.AddAttachmentsToSetRequest{
            AttachmentSetID: sdk.String("corrupti"),
            Attachments: []shared.Attachment{
                shared.Attachment{
                    Data: sdk.String("distinctio"),
                    FileName: sdk.String("quibusdam"),
                },
                shared.Attachment{
                    Data: sdk.String("unde"),
                    FileName: sdk.String("nulla"),
                },
                shared.Attachment{
                    Data: sdk.String("corrupti"),
                    FileName: sdk.String("illum"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("suscipit"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("debitis"),
        XAmzTarget: operations.AddAttachmentsToSetXAmzTargetEnumAwsSupport20130415AddAttachmentsToSet,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddAttachmentsToSetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->