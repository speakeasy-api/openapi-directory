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
            XAmzAlgorithm: "incidunt",
            XAmzContentSha256: "neque",
            XAmzCredential: "quo",
            XAmzDate: "omnis",
            XAmzSecurityToken: "ratione",
            XAmzSignature: "tempora",
            XAmzSignedHeaders: "cupiditate",
            XAmzTarget: "Logs_20140328.AssociateKmsKey",
        },
        Request: shared.AssociateKmsKeyRequest{
            KmsKeyID: "odit",
            LogGroupName: "hic",
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