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
            XAmzAlgorithm: "illo",
            XAmzContentSha256: "aliquam",
            XAmzCredential: "qui",
            XAmzDate: "quia",
            XAmzSecurityToken: "aperiam",
            XAmzSignature: "ad",
            XAmzSignedHeaders: "voluptatem",
            XAmzTarget: "MediaStore_20170901.CreateContainer",
        },
        Request: shared.CreateContainerInput{
            ContainerName: "error",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "eaque",
                    Value: "non",
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