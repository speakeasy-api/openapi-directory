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
            XAmzAlgorithm: "omnis",
            XAmzContentSha256: "accusantium",
            XAmzCredential: "architecto",
            XAmzDate: "omnis",
            XAmzSecurityToken: "porro",
            XAmzSignature: "ut",
            XAmzSignedHeaders: "eius",
            XAmzTarget: "Timestream_20181101.CreateDatabase",
        },
        Request: shared.CreateDatabaseRequest{
            DatabaseName: "beatae",
            KmsKeyID: "quia",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "id",
                    Value: "dolorem",
                },
                shared.Tag{
                    Key: "et",
                    Value: "quibusdam",
                },
                shared.Tag{
                    Key: "cupiditate",
                    Value: "eaque",
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