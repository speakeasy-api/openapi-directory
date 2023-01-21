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
    
    req := operations.CreateParallelDataRequest{
        Headers: operations.CreateParallelDataHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSShineFrontendService_20170701.CreateParallelData",
        },
        Request: shared.CreateParallelDataRequest{
            ClientToken: "fugit",
            Description: "et",
            EncryptionKey: &shared.EncryptionKey{
                ID: "nihil",
                Type: "KMS",
            },
            Name: "dicta",
            ParallelDataConfig: shared.ParallelDataConfig{
                Format: "TSV",
                S3URI: "voluptatum",
            },
        },
    }
    
    res, err := s.CreateParallelData(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateParallelDataResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->