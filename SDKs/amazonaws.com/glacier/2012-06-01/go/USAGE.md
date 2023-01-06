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
            AccountID: "aut",
            UploadID: "rerum",
            VaultName: "nisi",
        },
        Headers: operations.AbortMultipartUploadHeaders{
            XAmzAlgorithm: "aut",
            XAmzContentSha256: "quia",
            XAmzCredential: "debitis",
            XAmzDate: "harum",
            XAmzSecurityToken: "vel",
            XAmzSignature: "quo",
            XAmzSignedHeaders: "non",
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