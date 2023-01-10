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
            XAmzAlgorithm: "earum",
            XAmzBearer: "quas",
            XAmzContentSha256: "repellendus",
            XAmzCredential: "ut",
            XAmzDate: "voluptas",
            XAmzSecurityToken: "quisquam",
            XAmzSignature: "qui",
            XAmzSignedHeaders: "voluptas",
        },
        Request: operations.CompleteAttachmentUploadRequestBody{
            AttachmentIds: []string{
                "deleniti",
                "totam",
                "nemo",
            },
            ClientToken: "eligendi",
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