<!-- Start SDK Example Usage -->
```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AddAttachmentsToSetRequest{
        Headers: operations.AddAttachmentsToSetHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSSupport_20130415.AddAttachmentsToSet",
        },
        Request: shared.AddAttachmentsToSetRequest{
            AttachmentSetID: "fugit",
            Attachments: []shared.Attachment{
                shared.Attachment{
                    Data: "nihil",
                    FileName: "rerum",
                },
            },
        },
    }
    
    res, err := s.AddAttachmentsToSet(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddAttachmentsToSetResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->