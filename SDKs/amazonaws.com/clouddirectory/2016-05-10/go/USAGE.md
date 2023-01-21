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
            XAmzAlgorithm: "sit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "culpa",
            XAmzDate: "expedita",
            XAmzSecurityToken: "consequuntur",
            XAmzSignature: "dolor",
            XAmzSignedHeaders: "expedita",
            XAmzDataPartition: "voluptas",
        },
        Request: operations.AddFacetToObjectRequestBody{
            ObjectAttributeList: []shared.AttributeKeyAndValue{
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "et",
                        Name: "nihil",
                        SchemaArn: "rerum",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: "dicta",
                        BooleanValue: true,
                        DatetimeValue: "1981-07-21T06:30:48Z",
                        NumberValue: "et",
                        StringValue: "ut",
                    },
                },
            },
            ObjectReference: operations.AddFacetToObjectRequestBodyObjectReference{
                Selector: "dolorem",
            },
            SchemaFacet: operations.AddFacetToObjectRequestBodySchemaFacet{
                FacetName: "et",
                SchemaArn: "voluptate",
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