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
    
    req := operations.CreateDatabaseRequest{
        Headers: operations.CreateDatabaseHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "Timestream_20181101.CreateDatabase",
        },
        Request: shared.CreateDatabaseRequest{
            DatabaseName: "fugit",
            KmsKeyID: "et",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "rerum",
                    Value: "dicta",
                },
            },
        },
    }
    
    res, err := s.CreateDatabase(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDatabaseResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->