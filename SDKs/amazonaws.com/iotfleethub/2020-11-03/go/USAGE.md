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
            XAmzAlgorithm: "temporibus",
            XAmzContentSha256: "explicabo",
            XAmzCredential: "eaque",
            XAmzDate: "rem",
            XAmzSecurityToken: "explicabo",
            XAmzSignature: "veritatis",
            XAmzSignedHeaders: "ducimus",
        },
        Request: operations.CreateApplicationRequestBody{
            ApplicationDescription: "ut",
            ApplicationName: "incidunt",
            ClientToken: "inventore",
            RoleArn: "voluptatem",
            Tags: map[string]string{
                "quisquam": "architecto",
                "sunt": "ut",
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