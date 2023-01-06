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
            XAmzAlgorithm: "cumque",
            XAmzContentSha256: "odit",
            XAmzCredential: "tempore",
            XAmzDate: "maiores",
            XAmzSecurityToken: "dignissimos",
            XAmzSignature: "eaque",
            XAmzSignedHeaders: "voluptatum",
            XAmzTarget: "AWSShineFrontendService_20170701.CreateParallelData",
        },
        Request: shared.CreateParallelDataRequest{
            ClientToken: "corporis",
            Description: map[string]interface{}{
                "autem": "qui",
                "est": "est",
                "consequatur": "quia",
            },
            EncryptionKey: &shared.EncryptionKey{
                ID: "ad",
                Type: "KMS",
            },
            Name: "quia",
            ParallelDataConfig: shared.ParallelDataConfig{
                Format: "TSV",
                S3URI: "totam",
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