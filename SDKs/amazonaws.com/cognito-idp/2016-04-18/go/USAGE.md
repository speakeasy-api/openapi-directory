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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.AddCustomAttributesRequest{
        AddCustomAttributesRequest: shared.AddCustomAttributesRequest{
            CustomAttributes: []shared.SchemaAttributeType{
                shared.SchemaAttributeType{
                    AttributeDataType: "DateTime",
                    DeveloperOnlyAttribute: false,
                    Mutable: false,
                    Name: "distinctio",
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: "quibusdam",
                        MinValue: "unde",
                    },
                    Required: false,
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: "nulla",
                        MinLength: "corrupti",
                    },
                },
                shared.SchemaAttributeType{
                    AttributeDataType: "Boolean",
                    DeveloperOnlyAttribute: false,
                    Mutable: false,
                    Name: "vel",
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: "error",
                        MinValue: "deserunt",
                    },
                    Required: false,
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: "suscipit",
                        MinLength: "iure",
                    },
                },
                shared.SchemaAttributeType{
                    AttributeDataType: "Number",
                    DeveloperOnlyAttribute: false,
                    Mutable: false,
                    Name: "debitis",
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: "ipsa",
                        MinValue: "delectus",
                    },
                    Required: false,
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: "tempora",
                        MinLength: "suscipit",
                    },
                },
            },
            UserPoolID: "molestiae",
        },
        XAmzAlgorithm: "minus",
        XAmzContentSha256: "placeat",
        XAmzCredential: "voluptatum",
        XAmzDate: "iusto",
        XAmzSecurityToken: "excepturi",
        XAmzSignature: "nisi",
        XAmzSignedHeaders: "recusandae",
        XAmzTarget: "AWSCognitoIdentityProviderService.AddCustomAttributes",
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