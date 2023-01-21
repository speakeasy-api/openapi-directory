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
    
    req := operations.CreateContainerRequest{
        Headers: operations.CreateContainerHeaders{
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "MediaStore_20170901.CreateContainer",
        },
        Request: shared.CreateContainerInput{
            ContainerName: "fugit",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "nihil",
                    Value: "rerum",
                },
            },
        },
    }
    
    res, err := s.CreateContainer(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateContainerOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->