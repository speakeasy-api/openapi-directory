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
            XAmzAlgorithm: "dolorum",
            XAmzContentSha256: "ut",
            XAmzCredential: "voluptatum",
            XAmzDate: "alias",
            XAmzSecurityToken: "consequatur",
            XAmzSignature: "eum",
            XAmzSignedHeaders: "nemo",
        },
        Request: operations.CreateAppRequestBody{
            CreateApplicationRequest: operations.CreateAppRequestBodyCreateApplicationRequest{
                Name: "omnis",
                Tags: map[string]string{
                    "reprehenderit": "omnis",
                    "velit": "molestiae",
                    "id": "quia",
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