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
    
    req := operations.AddFacetToObjectRequest{
        Headers: operations.AddFacetToObjectHeaders{
            XAmzAlgorithm: "facilis",
            XAmzContentSha256: "omnis",
            XAmzCredential: "mollitia",
            XAmzDate: "velit",
            XAmzSecurityToken: "illum",
            XAmzSignature: "eum",
            XAmzSignedHeaders: "quo",
            XAmzDataPartition: "et",
        },
        Request: operations.AddFacetToObjectRequestBody{
            ObjectAttributeList: []shared.AttributeKeyAndValue{
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "omnis",
                        Name: "tempora",
                        SchemaArn: "aliquid",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: "molestiae",
                        BooleanValue: false,
                        DatetimeValue: "2009-08-28T03:28:02Z",
                        NumberValue: "cum",
                        StringValue: "a",
                    },
                },
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "quo",
                        Name: "delectus",
                        SchemaArn: "et",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: "ipsum",
                        BooleanValue: false,
                        DatetimeValue: "1971-08-17T05:31:18Z",
                        NumberValue: "et",
                        StringValue: "cupiditate",
                    },
                },
            },
            ObjectReference: operations.AddFacetToObjectRequestBodyObjectReference{
                Selector: "sed",
            },
            SchemaFacet: operations.AddFacetToObjectRequestBodySchemaFacet{
                FacetName: "praesentium",
                SchemaArn: "excepturi",
            },
        },
    }
    
    res, err := s.AddFacetToObject(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddFacetToObjectResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->