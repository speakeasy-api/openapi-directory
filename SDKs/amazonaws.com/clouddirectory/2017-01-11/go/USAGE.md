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

    req := operations.AddFacetToObjectRequest{
        Headers: operations.AddFacetToObjectHeaders{
            XAmzAlgorithm: "unde",
            XAmzContentSha256: "deserunt",
            XAmzCredential: "porro",
            XAmzDate: "nulla",
            XAmzSecurityToken: "id",
            XAmzSignature: "vero",
            XAmzSignedHeaders: "perspiciatis",
            XAmzDataPartition: "nulla",
        },
        Request: operations.AddFacetToObjectRequestBody{
            ObjectAttributeList: []shared.AttributeKeyAndValue{
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "fuga",
                        Name: "facilis",
                        SchemaArn: "eum",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: "iusto",
                        BooleanValue: false,
                        DatetimeValue: "2022-12-11T09:27:23.983Z",
                        NumberValue: "saepe",
                        StringValue: "inventore",
                    },
                },
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "sapiente",
                        Name: "enim",
                        SchemaArn: "eum",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: "voluptatum",
                        BooleanValue: false,
                        DatetimeValue: "2022-06-14T00:20:55.134Z",
                        NumberValue: "vel",
                        StringValue: "non",
                    },
                },
            },
            ObjectReference: operations.AddFacetToObjectRequestBodyObjectReference{
                Selector: "deleniti",
            },
            SchemaFacet: operations.AddFacetToObjectRequestBodySchemaFacet{
                FacetName: "similique",
                SchemaArn: "reprehenderit",
            },
        },
    }

    ctx := context.Background()
    res, err := s.AddFacetToObject(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddFacetToObjectResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->