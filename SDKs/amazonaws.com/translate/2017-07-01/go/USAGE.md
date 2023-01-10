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
            XAmzAlgorithm: "et",
            XAmzContentSha256: "ut",
            XAmzCredential: "sapiente",
            XAmzDate: "laborum",
            XAmzSecurityToken: "dolor",
            XAmzSignature: "accusamus",
            XAmzSignedHeaders: "pariatur",
            XAmzTarget: "AWSShineFrontendService_20170701.CreateParallelData",
        },
        Request: shared.CreateParallelDataRequest{
            ClientToken: "eos",
            Description: "ut",
            EncryptionKey: &shared.EncryptionKey{
                ID: "animi",
                Type: "KMS",
            },
            Name: "eum",
            ParallelDataConfig: shared.ParallelDataConfig{
                Format: "TMX",
                S3URI: "maiores",
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