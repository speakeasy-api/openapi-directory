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
    
    req := operations.CreateApplicationRequest{
        Headers: operations.CreateApplicationHeaders{
            XAmzAlgorithm: "vel",
            XAmzContentSha256: "tempora",
            XAmzCredential: "atque",
            XAmzDate: "repellendus",
            XAmzSecurityToken: "ut",
            XAmzSignature: "possimus",
            XAmzSignedHeaders: "cumque",
        },
        Request: operations.CreateApplicationRequestBody{
            ApplicationDescription: "odit",
            ApplicationName: "tempore",
            ClientToken: "maiores",
            RoleArn: "dignissimos",
            Tags: map[string]string{
                "voluptatum": "neque",
                "corporis": "quas",
                "autem": "qui",
            },
        },
    }
    
    res, err := s.CreateApplication(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateApplicationResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->