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
            XAmzAlgorithm: "magnam",
            XAmzContentSha256: "veniam",
            XAmzCredential: "dolores",
            XAmzDate: "rerum",
            XAmzSecurityToken: "et",
            XAmzSignature: "voluptatem",
            XAmzSignedHeaders: "voluptatem",
            XAmzTarget: "MediaStore_20170901.CreateContainer",
        },
        Request: shared.CreateContainerInput{
            ContainerName: "est",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: "et",
                    Value: "ea",
                },
                shared.Tag{
                    Key: "voluptas",
                    Value: "velit",
                },
                shared.Tag{
                    Key: "ipsa",
                    Value: "in",
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