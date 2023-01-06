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
    
    req := operations.AssociateConfigurationItemsToApplicationRequest{
        Headers: operations.AssociateConfigurationItemsToApplicationHeaders{
            XAmzAlgorithm: "non",
            XAmzContentSha256: "nulla",
            XAmzCredential: "inventore",
            XAmzDate: "reprehenderit",
            XAmzSecurityToken: "quos",
            XAmzSignature: "saepe",
            XAmzSignedHeaders: "aperiam",
            XAmzTarget: "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication",
        },
        Request: shared.AssociateConfigurationItemsToApplicationRequest{
            ApplicationConfigurationID: "ab",
            ConfigurationIds: []string{
                "molestias",
                "voluptas",
                "animi",
            },
        },
    }
    
    res, err := s.AssociateConfigurationItemsToApplication(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateConfigurationItemsToApplicationResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->