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
            XAmzAlgorithm: "consectetur",
            XAmzContentSha256: "voluptatibus",
            XAmzCredential: "doloremque",
            XAmzDate: "neque",
            XAmzSecurityToken: "sint",
            XAmzSignature: "iste",
            XAmzSignedHeaders: "temporibus",
            XAmzTarget: "AWSCognitoIdentityProviderService.AddCustomAttributes",
        },
        Request: shared.AddCustomAttributesRequest{
            CustomAttributes: []shared.SchemaAttributeType{
                shared.SchemaAttributeType{
                    AttributeDataType: "Boolean",
                    DeveloperOnlyAttribute: false,
                    Mutable: true,
                    Name: "ducimus",
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: "ut",
                        MinValue: "incidunt",
                    },
                    Required: false,
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: "voluptatem",
                        MinLength: "voluptates",
                    },
                },
                shared.SchemaAttributeType{
                    AttributeDataType: "DateTime",
                    DeveloperOnlyAttribute: true,
                    Mutable: false,
                    Name: "ut",
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: "quaerat",
                        MinValue: "ut",
                    },
                    Required: true,
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: "vel",
                        MinLength: "et",
                    },
                },
                shared.SchemaAttributeType{
                    AttributeDataType: "DateTime",
                    DeveloperOnlyAttribute: false,
                    Mutable: true,
                    Name: "inventore",
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: "impedit",
                        MinValue: "molestiae",
                    },
                    Required: false,
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: "dignissimos",
                        MinLength: "consectetur",
                    },
                },
            },
            UserPoolID: "repellendus",
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