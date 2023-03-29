<!-- Start SDK Example Usage -->
```go
package main

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: shared.SchemeHmac{
                APIKey: "YOUR_API_KEY_HERE",
            },
        }),
    )

    req := operations.AddCustomAttributesRequest{
        Headers: operations.AddCustomAttributesHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzTarget: "AWSCognitoIdentityProviderService.AddCustomAttributes",
        },
        Request: shared.AddCustomAttributesRequest{
            CustomAttributes: []shared.SchemaAttributeType{
                shared.SchemaAttributeType{
                    AttributeDataType: "DateTime",
                    DeveloperOnlyAttribute: false,
                    Mutable: false,
                    Name: "facilis",
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: "eum",
                        MinValue: "iusto",
                    },
                    Required: false,
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: "ullam",
                        MinLength: "saepe",
                    },
                },
                shared.SchemaAttributeType{
                    AttributeDataType: "String",
                    DeveloperOnlyAttribute: false,
                    Mutable: false,
                    Name: "sapiente",
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: "enim",
                        MinValue: "eum",
                    },
                    Required: false,
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: "voluptatum",
                        MinLength: "autem",
                    },
                },
            },
            UserPoolID: "vel",
        },
    }

    ctx := context.Background()
    res, err := s.AddCustomAttributes(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddCustomAttributesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->