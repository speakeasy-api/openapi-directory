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
    
    req := operations.CompleteAttachmentUploadRequest{
        Headers: operations.CompleteAttachmentUploadHeaders{
            XAmzAlgorithm: "sit",
            XAmzBearer: "voluptas",
            XAmzContentSha256: "culpa",
            XAmzCredential: "expedita",
            XAmzDate: "consequuntur",
            XAmzSecurityToken: "dolor",
            XAmzSignature: "expedita",
            XAmzSignedHeaders: "voluptas",
        },
        Request: operations.CompleteAttachmentUploadRequestBody{
            AttachmentIds: []string{
                "et",
            },
            ClientToken: "nihil",
        },
    }
    
    res, err := s.CompleteAttachmentUpload(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CompleteAttachmentUploadResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->