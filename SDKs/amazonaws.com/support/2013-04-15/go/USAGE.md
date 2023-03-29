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

    req := operations.AddAttachmentsToSetRequest{
        Headers: operations.AddAttachmentsToSetHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSSupport_20130415.AddAttachmentsToSet",
        },
        Request: shared.AddAttachmentsToSetRequest{
            AttachmentSetID: "nihil",
            Attachments: []shared.Attachment{
                shared.Attachment{
                    Data: "facilis",
                    FileName: "eum",
                },
                shared.Attachment{
                    Data: "iusto",
                    FileName: "ullam",
                },
                shared.Attachment{
                    Data: "saepe",
                    FileName: "inventore",
                },
            },
        },
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