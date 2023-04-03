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

    req := operations.AddAttachmentsToSetRequest{
        AddAttachmentsToSetRequest: shared.AddAttachmentsToSetRequest{
            AttachmentSetID: "corrupti",
            Attachments: []shared.Attachment{
                shared.Attachment{
                    Data: "distinctio",
                    FileName: "quibusdam",
                },
                shared.Attachment{
                    Data: "unde",
                    FileName: "nulla",
                },
                shared.Attachment{
                    Data: "corrupti",
                    FileName: "illum",
                },
            },
        },
        XAmzAlgorithm: "vel",
        XAmzContentSha256: "error",
        XAmzCredential: "deserunt",
        XAmzDate: "suscipit",
        XAmzSecurityToken: "iure",
        XAmzSignature: "magnam",
        XAmzSignedHeaders: "debitis",
        XAmzTarget: "AWSSupport_20130415.AddAttachmentsToSet",
    }

    ctx := context.Background()
    res, err := s.AddAttachmentsToSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddAttachmentsToSetResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->