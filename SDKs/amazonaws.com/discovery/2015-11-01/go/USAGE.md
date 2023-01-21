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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication",
        },
        Request: shared.AssociateConfigurationItemsToApplicationRequest{
            ApplicationConfigurationID: "fugit",
            ConfigurationIds: []string{
                "nihil",
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