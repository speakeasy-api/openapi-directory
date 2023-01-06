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
    
    req := operations.AddCustomAttributesRequest{
        Headers: operations.AddCustomAttributesHeaders{
            XAmzAlgorithm: "voluptatem",
            XAmzContentSha256: "optio",
            XAmzCredential: "et",
            XAmzDate: "consequatur",
            XAmzSecurityToken: "saepe",
            XAmzSignature: "consequatur",
            XAmzSignedHeaders: "non",
            XAmzTarget: "AWSCognitoIdentityProviderService.AddCustomAttributes",
        },
        Request: shared.AddCustomAttributesRequest{
            CustomAttributes: []shared.SchemaAttributeType{
                shared.SchemaAttributeType{
                    AttributeDataType: "DateTime",
                    DeveloperOnlyAttribute: false,
                    Mutable: false,
                    Name: "sit",
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: "est",
                        MinValue: "rerum",
                    },
                    Required: false,
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: "dolor",
                        MinLength: "itaque",
                    },
                },
            },
            UserPoolID: "reiciendis",
        },
    }
    
    res, err := s.AddCustomAttributes(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddCustomAttributesResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->