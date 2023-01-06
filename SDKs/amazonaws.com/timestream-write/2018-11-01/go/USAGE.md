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
            XAmzAlgorithm: "consequatur",
            XAmzContentSha256: "excepturi",
            XAmzCredential: "ut",
            XAmzDate: "ipsa",
            XAmzSecurityToken: "sit",
            XAmzSignature: "aliquid",
            XAmzSignedHeaders: "eos",
            XAmzTarget: "Timestream_20181101.CreateDatabase",
        },
        Request: shared.CreateDatabaseRequest{
            DatabaseName: "fuga",
            KmsKeyID: "soluta",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "vel",
                    Value: "iusto",
                },
                shared.Tag{
                    Key: "voluptatum",
                    Value: "illo",
                },
                shared.Tag{
                    Key: "exercitationem",
                    Value: "aut",
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