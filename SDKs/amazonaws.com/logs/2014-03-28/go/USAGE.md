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
    
    req := operations.AssociateKmsKeyRequest{
        Headers: operations.AssociateKmsKeyHeaders{
            XAmzAlgorithm: "et",
            XAmzContentSha256: "vel",
            XAmzCredential: "dolores",
            XAmzDate: "iste",
            XAmzSecurityToken: "ut",
            XAmzSignature: "quia",
            XAmzSignedHeaders: "dolorum",
            XAmzTarget: "Logs_20140328.AssociateKmsKey",
        },
        Request: shared.AssociateKmsKeyRequest{
            KmsKeyID: "ducimus",
            LogGroupName: "ipsum",
        },
    }
    
    res, err := s.AssociateKmsKey(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->