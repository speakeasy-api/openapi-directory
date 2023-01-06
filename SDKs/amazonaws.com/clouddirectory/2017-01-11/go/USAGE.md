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
            XAmzAlgorithm: "atque",
            XAmzContentSha256: "omnis",
            XAmzCredential: "unde",
            XAmzDate: "repellat",
            XAmzSecurityToken: "impedit",
            XAmzSignature: "tempore",
            XAmzSignedHeaders: "et",
            XAmzDataPartition: "quia",
        },
        Request: operations.AddFacetToObjectRequestBody{
            ObjectAttributeList: []shared.AttributeKeyAndValue{
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "voluptates",
                        Name: "consequatur",
                        SchemaArn: "explicabo",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: "qui",
                        BooleanValue: true,
                        DatetimeValue: "1985-06-24T23:34:28Z",
                        NumberValue: "autem",
                        StringValue: "perferendis",
                    },
                },
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "dolorem",
                        Name: "odit",
                        SchemaArn: "maxime",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: "et",
                        BooleanValue: true,
                        DatetimeValue: "1984-08-19T07:44:27Z",
                        NumberValue: "est",
                        StringValue: "velit",
                    },
                },
            },
            ObjectReference: operations.AddFacetToObjectRequestBodyObjectReference{
                Selector: "eveniet",
            },
            SchemaFacet: operations.AddFacetToObjectRequestBodySchemaFacet{
                FacetName: "nam",
                SchemaArn: "facilis",
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