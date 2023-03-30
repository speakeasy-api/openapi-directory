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
            XAmzAlgorithm: "corrupti",
            XAmzContentSha256: "provident",
            XAmzCredential: "distinctio",
            XAmzDate: "quibusdam",
            XAmzSecurityToken: "unde",
            XAmzSignature: "nulla",
            XAmzSignedHeaders: "corrupti",
            XAmzDataPartition: "illum",
        },
        Request: operations.AddFacetToObjectRequestBody{
            ObjectAttributeList: []shared.AttributeKeyAndValue{
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "error",
                        Name: "deserunt",
                        SchemaArn: "suscipit",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: "iure",
                        BooleanValue: false,
                        DatetimeValue: "2022-12-11T12:23:33.239Z",
                        NumberValue: "debitis",
                        StringValue: "ipsa",
                    },
                },
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "delectus",
                        Name: "tempora",
                        SchemaArn: "suscipit",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: "molestiae",
                        BooleanValue: false,
                        DatetimeValue: "2022-06-14T03:17:04.392Z",
                        NumberValue: "placeat",
                        StringValue: "voluptatum",
                    },
                },
            },
            ObjectReference: operations.AddFacetToObjectRequestBodyObjectReference{
                Selector: "iusto",
            },
            SchemaFacet: operations.AddFacetToObjectRequestBodySchemaFacet{
                FacetName: "excepturi",
                SchemaArn: "nisi",
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