<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.AddFacetToObject(ctx, operations.AddFacetToObjectRequest{
        RequestBody: operations.AddFacetToObjectRequestBody{
            ObjectAttributeList: []shared.AttributeKeyAndValue{
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "provident",
                        Name: "Ellis Mitchell",
                        SchemaArn: "illum",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: sdk.String("vel"),
                        BooleanValue: sdk.Bool(false),
                        DatetimeValue: types.MustTimeFromString("2021-09-16T11:56:06.019Z"),
                        NumberValue: sdk.String("suscipit"),
                        StringValue: sdk.String("iure"),
                    },
                },
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "magnam",
                        Name: "Larry Windler",
                        SchemaArn: "molestiae",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: sdk.String("minus"),
                        BooleanValue: sdk.Bool(false),
                        DatetimeValue: types.MustTimeFromString("2021-05-31T20:38:28.793Z"),
                        NumberValue: sdk.String("iusto"),
                        StringValue: sdk.String("excepturi"),
                    },
                },
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "nisi",
                        Name: "Jake Bernier MD",
                        SchemaArn: "perferendis",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: sdk.String("ipsam"),
                        BooleanValue: sdk.Bool(false),
                        DatetimeValue: types.MustTimeFromString("2020-02-17T21:57:45.117Z"),
                        NumberValue: sdk.String("quo"),
                        StringValue: sdk.String("odit"),
                    },
                },
            },
            ObjectReference: operations.AddFacetToObjectRequestBodyObjectReference{
                Selector: sdk.String("at"),
            },
            SchemaFacet: operations.AddFacetToObjectRequestBodySchemaFacet{
                FacetName: sdk.String("at"),
                SchemaArn: sdk.String("maiores"),
            },
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzDataPartition: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddFacetToObjectResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->