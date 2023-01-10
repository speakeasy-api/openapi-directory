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
    
    req := operations.AbortMultipartUploadRequest{
        PathParams: operations.AbortMultipartUploadPathParams{
            AccountID: "similique",
            UploadID: "recusandae",
            VaultName: "error",
        },
        Headers: operations.AbortMultipartUploadHeaders{
            XAmzAlgorithm: "hic",
            XAmzContentSha256: "atque",
            XAmzCredential: "rerum",
            XAmzDate: "voluptates",
            XAmzSecurityToken: "iste",
            XAmzSignature: "reiciendis",
            XAmzSignedHeaders: "ipsam",
        },
    }
    
    res, err := s.AbortMultipartUpload(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->