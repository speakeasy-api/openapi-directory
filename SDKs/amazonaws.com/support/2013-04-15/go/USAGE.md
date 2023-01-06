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
            XAmzAlgorithm: "assumenda",
            XAmzContentSha256: "fuga",
            XAmzCredential: "aut",
            XAmzDate: "corrupti",
            XAmzSecurityToken: "amet",
            XAmzSignature: "et",
            XAmzSignedHeaders: "iusto",
            XAmzTarget: "AWSSupport_20130415.AddAttachmentsToSet",
        },
        Request: shared.AddAttachmentsToSetRequest{
            AttachmentSetID: "nesciunt",
            Attachments: []shared.Attachment{
                shared.Attachment{
                    Data: "quasi",
                    FileName: "et",
                },
                shared.Attachment{
                    Data: "quod",
                    FileName: "autem",
                },
                shared.Attachment{
                    Data: "quod",
                    FileName: "impedit",
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