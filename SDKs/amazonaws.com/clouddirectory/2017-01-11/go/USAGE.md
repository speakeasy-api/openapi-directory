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
                        DatetimeValue: "2022-02-09T12:04:06.508Z",
                        NumberValue: "ipsa",
                        StringValue: "delectus",
                    },
                },
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "tempora",
                        Name: "suscipit",
                        SchemaArn: "molestiae",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: "minus",
                        BooleanValue: false,
                        DatetimeValue: "2021-05-31T20:38:28.793Z",
                        NumberValue: "iusto",
                        StringValue: "excepturi",
                    },
                },
            },
            ObjectReference: operations.AddFacetToObjectRequestBodyObjectReference{
                Selector: "nisi",
            },
            SchemaFacet: operations.AddFacetToObjectRequestBodySchemaFacet{
                FacetName: "recusandae",
                SchemaArn: "temporibus",
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