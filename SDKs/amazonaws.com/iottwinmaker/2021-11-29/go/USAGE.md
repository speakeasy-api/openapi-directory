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

    req := operations.BatchPutPropertyValuesRequest{
        PathParams: operations.BatchPutPropertyValuesPathParams{
            WorkspaceID: "unde",
        },
        Headers: operations.BatchPutPropertyValuesHeaders{
            XAmzAlgorithm: "deserunt",
            XAmzContentSha256: "porro",
            XAmzCredential: "nulla",
            XAmzDate: "id",
            XAmzSecurityToken: "vero",
            XAmzSignature: "perspiciatis",
            XAmzSignedHeaders: "nulla",
        },
        Request: operations.BatchPutPropertyValuesRequestBody{
            Entries: []shared.PropertyValueEntry{
                shared.PropertyValueEntry{
                    EntityPropertyReference: shared.EntityPropertyReference{
                        ComponentName: "fuga",
                        EntityID: "facilis",
                        ExternalIDProperty: map[string]string{
                            "iusto": "ullam",
                            "saepe": "inventore",
                        },
                        PropertyName: "sapiente",
                    },
                    PropertyValues: []shared.PropertyValue{
                        shared.PropertyValue{
                            Time: "eum",
                            Timestamp: "2022-10-06T15:36:45.360Z",
                            Value: shared.DataValue{
                                BooleanValue: false,
                                DoubleValue: 7917.25,
                                Expression: "vel",
                                IntegerValue: 528895,
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: 568045,
                                MapValue: map[string]shared.DataValue{
                                    "molestiae": shared.DataValue{},
                                    "quo": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: "quasi",
                                    TargetEntityID: "laboriosam",
                                },
                                StringValue: "dicta",
                            },
                        },
                        shared.PropertyValue{
                            Time: "est",
                            Timestamp: "2023-03-22T14:50:44.430Z",
                            Value: shared.DataValue{
                                BooleanValue: false,
                                DoubleValue: 3682.41,
                                Expression: "fugiat",
                                IntegerValue: 957156,
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: 140350,
                                MapValue: map[string]shared.DataValue{
                                    "accusamus": shared.DataValue{},
                                    "reiciendis": shared.DataValue{},
                                    "rem": shared.DataValue{},
                                    "quibusdam": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: "et",
                                    TargetEntityID: "praesentium",
                                },
                                StringValue: "occaecati",
                            },
                        },
                    },
                },
                shared.PropertyValueEntry{
                    EntityPropertyReference: shared.EntityPropertyReference{
                        ComponentName: "dolor",
                        EntityID: "soluta",
                        ExternalIDProperty: map[string]string{
                            "quisquam": "rerum",
                        },
                        PropertyName: "culpa",
                    },
                    PropertyValues: []shared.PropertyValue{
                        shared.PropertyValue{
                            Time: "sed",
                            Timestamp: "2022-04-19T04:39:33.773Z",
                            Value: shared.DataValue{
                                BooleanValue: false,
                                DoubleValue: 7586.16,
                                Expression: "occaecati",
                                IntegerValue: 105907,
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: 473600,
                                MapValue: map[string]shared.DataValue{
                                    "amet": shared.DataValue{},
                                    "est": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: "id",
                                    TargetEntityID: "blanditiis",
                                },
                                StringValue: "numquam",
                            },
                        },
                    },
                },
            },
        },
    }

    ctx := context.Background()
    res, err := s.BatchPutPropertyValues(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPutPropertyValuesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->