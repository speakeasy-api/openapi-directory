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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzTarget: "AWSCognitoIdentityProviderService.AddCustomAttributes",
        },
        Request: shared.AddCustomAttributesRequest{
            CustomAttributes: []shared.SchemaAttributeType{
                shared.SchemaAttributeType{
                    AttributeDataType: "String",
                    DeveloperOnlyAttribute: true,
                    Mutable: true,
                    Name: "dicta",
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: "debitis",
                        MinValue: "voluptatum",
                    },
                    Required: false,
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: "ut",
                        MinLength: "dolorem",
                    },
                },
            },
            UserPoolID: "et",
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