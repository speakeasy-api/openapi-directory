<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AddCustomAttributes(ctx, operations.AddCustomAttributesRequest{
        AddCustomAttributesRequest: shared.AddCustomAttributesRequest{
            CustomAttributes: []shared.SchemaAttributeType{
                shared.SchemaAttributeType{
                    AttributeDataType: shared.AttributeDataTypeEnumDateTime.ToPointer(),
                    DeveloperOnlyAttribute: sdk.Bool(false),
                    Mutable: sdk.Bool(false),
                    Name: sdk.String("Ellis Mitchell"),
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: sdk.String("illum"),
                        MinValue: sdk.String("vel"),
                    },
                    Required: sdk.Bool(false),
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: sdk.String("error"),
                        MinLength: sdk.String("deserunt"),
                    },
                },
                shared.SchemaAttributeType{
                    AttributeDataType: shared.AttributeDataTypeEnumNumber.ToPointer(),
                    DeveloperOnlyAttribute: sdk.Bool(false),
                    Mutable: sdk.Bool(false),
                    Name: sdk.String("Dr. Valerie Toy"),
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: sdk.String("suscipit"),
                        MinValue: sdk.String("molestiae"),
                    },
                    Required: sdk.Bool(false),
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: sdk.String("minus"),
                        MinLength: sdk.String("placeat"),
                    },
                },
                shared.SchemaAttributeType{
                    AttributeDataType: shared.AttributeDataTypeEnumDateTime.ToPointer(),
                    DeveloperOnlyAttribute: sdk.Bool(false),
                    Mutable: sdk.Bool(false),
                    Name: sdk.String("Miriam Huel"),
                    NumberAttributeConstraints: &shared.NumberAttributeConstraintsType{
                        MaxValue: sdk.String("ab"),
                        MinValue: sdk.String("quis"),
                    },
                    Required: sdk.Bool(false),
                    StringAttributeConstraints: &shared.StringAttributeConstraintsType{
                        MaxLength: sdk.String("veritatis"),
                        MinLength: sdk.String("deserunt"),
                    },
                },
            },
            UserPoolID: "perferendis",
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("at"),
        XAmzTarget: operations.AddCustomAttributesXAmzTargetEnumAwsCognitoIdentityProviderServiceAddCustomAttributes,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddCustomAttributesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->