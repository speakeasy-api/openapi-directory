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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzTarget: "AWSCognitoIdentityProviderService.AddCustomAttributes",
        },
        Request: shared.AddCustomAttributesRequest{
            CustomAttributes: []shared.SchemaAttributeType{
                shared.SchemaAttributeType{
                    AttributeDataType: "Number",
                    DeveloperOnlyAttribute: false,
                    Mutable: false,
                    Name: "error",
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: "deserunt",
                        MinValue: "suscipit",
                    },
                    Required: false,
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: "iure",
                        MinLength: "magnam",
                    },
                },
                shared.SchemaAttributeType{
                    AttributeDataType: "Boolean",
                    DeveloperOnlyAttribute: false,
                    Mutable: false,
                    Name: "ipsa",
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: "delectus",
                        MinValue: "tempora",
                    },
                    Required: false,
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: "suscipit",
                        MinLength: "molestiae",
                    },
                },
                shared.SchemaAttributeType{
                    AttributeDataType: "Boolean",
                    DeveloperOnlyAttribute: false,
                    Mutable: false,
                    Name: "placeat",
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: "voluptatum",
                        MinValue: "iusto",
                    },
                    Required: false,
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: "excepturi",
                        MinLength: "nisi",
                    },
                },
                shared.SchemaAttributeType{
                    AttributeDataType: "Boolean",
                    DeveloperOnlyAttribute: false,
                    Mutable: false,
                    Name: "temporibus",
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: "ab",
                        MinValue: "quis",
                    },
                    Required: false,
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: "veritatis",
                        MinLength: "deserunt",
                    },
                },
            },
            UserPoolID: "perferendis",
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