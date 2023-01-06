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
    
    req := operations.CreateAppRequest{
        Headers: operations.CreateAppHeaders{
            XAmzAlgorithm: "laboriosam",
            XAmzContentSha256: "reprehenderit",
            XAmzCredential: "non",
            XAmzDate: "quis",
            XAmzSecurityToken: "facilis",
            XAmzSignature: "mollitia",
            XAmzSignedHeaders: "sequi",
        },
        Request: operations.CreateAppRequestBody{
            CreateApplicationRequest: operations.CreateAppRequestBodyCreateApplicationRequest{
                Name: "maxime",
                Tags: map[string]string{
                    "voluptas": "voluptatem",
                },
            },
        },
    }
    
    res, err := s.CreateApp(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateAppResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->