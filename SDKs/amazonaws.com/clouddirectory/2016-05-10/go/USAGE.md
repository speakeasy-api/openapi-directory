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
            XAmzAlgorithm: "doloremque",
            XAmzContentSha256: "animi",
            XAmzCredential: "exercitationem",
            XAmzDate: "quia",
            XAmzSecurityToken: "ut",
            XAmzSignature: "hic",
            XAmzSignedHeaders: "veniam",
            XAmzDataPartition: "et",
        },
        Request: operations.AddFacetToObjectRequestBody{
            ObjectAttributeList: []shared.AttributeKeyAndValue{
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "animi",
                        Name: "atque",
                        SchemaArn: "omnis",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: "unde",
                        BooleanValue: true,
                        DatetimeValue: "2005-01-25T14:48:44Z",
                        NumberValue: "et",
                        StringValue: "quia",
                    },
                },
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "qui",
                        Name: "voluptates",
                        SchemaArn: "consequatur",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: "explicabo",
                        BooleanValue: true,
                        DatetimeValue: "1976-01-04T20:15:51Z",
                        NumberValue: "ipsum",
                        StringValue: "autem",
                    },
                },
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "perferendis",
                        Name: "dolorem",
                        SchemaArn: "odit",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: "maxime",
                        BooleanValue: false,
                        DatetimeValue: "2000-05-27T21:15:40Z",
                        NumberValue: "dolore",
                        StringValue: "est",
                    },
                },
            },
            ObjectReference: operations.AddFacetToObjectRequestBodyObjectReference{
                Selector: "velit",
            },
            SchemaFacet: operations.AddFacetToObjectRequestBodySchemaFacet{
                FacetName: "eveniet",
                SchemaArn: "nam",
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