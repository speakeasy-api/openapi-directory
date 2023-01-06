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
            XAmzAlgorithm: "ea",
            XAmzContentSha256: "architecto",
            XAmzCredential: "esse",
            XAmzDate: "explicabo",
            XAmzSecurityToken: "distinctio",
            XAmzSignature: "dolore",
            XAmzSignedHeaders: "non",
            XAmzDataPartition: "accusantium",
        },
        Request: operations.AddFacetToObjectRequestBody{
            ObjectAttributeList: []shared.AttributeKeyAndValue{
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "consequatur",
                        Name: "doloremque",
                        SchemaArn: "animi",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: "exercitationem",
                        BooleanValue: true,
                        DatetimeValue: "1989-04-07T20:39:58Z",
                        NumberValue: "hic",
                        StringValue: "veniam",
                    },
                },
            },
            ObjectReference: operations.AddFacetToObjectRequestBodyObjectReference{
                Selector: "et",
            },
            SchemaFacet: operations.AddFacetToObjectRequestBodySchemaFacet{
                FacetName: "ut",
                SchemaArn: "animi",
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