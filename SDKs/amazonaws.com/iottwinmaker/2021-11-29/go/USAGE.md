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
            WorkspaceID: "corrupti",
        },
        Headers: operations.BatchPutPropertyValuesHeaders{
            XAmzAlgorithm: "provident",
            XAmzContentSha256: "distinctio",
            XAmzCredential: "quibusdam",
            XAmzDate: "unde",
            XAmzSecurityToken: "nulla",
            XAmzSignature: "corrupti",
            XAmzSignedHeaders: "illum",
        },
        Request: operations.BatchPutPropertyValuesRequestBody{
            Entries: []shared.PropertyValueEntry{
                shared.PropertyValueEntry{
                    EntityPropertyReference: shared.EntityPropertyReference{
                        ComponentName: "error",
                        EntityID: "deserunt",
                        ExternalIDProperty: map[string]string{
                            "iure": "magnam",
                            "debitis": "ipsa",
                        },
                        PropertyName: "delectus",
                    },
                    PropertyValues: []shared.PropertyValue{
                        shared.PropertyValue{
                            Time: "suscipit",
                            Timestamp: "2022-03-18T00:29:19.137Z",
                            Value: shared.DataValue{
                                BooleanValue: false,
                                DoubleValue: 8121.69,
                                Expression: "voluptatum",
                                IntegerValue: 479977,
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: 392785,
                                MapValue: map[string]shared.DataValue{
                                    "temporibus": shared.DataValue{},
                                    "ab": shared.DataValue{},
                                    "quis": shared.DataValue{},
                                    "veritatis": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: "deserunt",
                                    TargetEntityID: "perferendis",
                                },
                                StringValue: "ipsam",
                            },
                        },
                        shared.PropertyValue{
                            Time: "repellendus",
                            Timestamp: "2020-08-31T22:02:25.322Z",
                            Value: shared.DataValue{
                                BooleanValue: false,
                                DoubleValue: 1403.5,
                                Expression: "at",
                                IntegerValue: 870088,
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: 473608,
                                MapValue: map[string]shared.DataValue{
                                    "quod": shared.DataValue{},
                                    "esse": shared.DataValue{},
                                    "totam": shared.DataValue{},
                                    "porro": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: "dolorum",
                                    TargetEntityID: "dicta",
                                },
                                StringValue: "nam",
                            },
                        },
                    },
                },
                shared.PropertyValueEntry{
                    EntityPropertyReference: shared.EntityPropertyReference{
                        ComponentName: "officia",
                        EntityID: "occaecati",
                        ExternalIDProperty: map[string]string{
                            "deleniti": "hic",
                        },
                        PropertyName: "optio",
                    },
                    PropertyValues: []shared.PropertyValue{
                        shared.PropertyValue{
                            Time: "beatae",
                            Timestamp: "2022-07-12T03:15:36.542Z",
                            Value: shared.DataValue{
                                BooleanValue: false,
                                DoubleValue: 2645.55,
                                Expression: "qui",
                                IntegerValue: 774234,
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: 456150,
                                MapValue: map[string]shared.DataValue{
                                    "excepturi": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: "aspernatur",
                                    TargetEntityID: "perferendis",
                                },
                                StringValue: "ad",
                            },
                        },
                        shared.PropertyValue{
                            Time: "natus",
                            Timestamp: "2022-05-22T14:02:28.908Z",
                            Value: shared.DataValue{
                                BooleanValue: false,
                                DoubleValue: 2223.21,
                                Expression: "natus",
                                IntegerValue: 386489,
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: 902599,
                                MapValue: map[string]shared.DataValue{
                                    "in": shared.DataValue{},
                                    "corporis": shared.DataValue{},
                                    "iste": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: "iure",
                                    TargetEntityID: "saepe",
                                },
                                StringValue: "quidem",
                            },
                        },
                        shared.PropertyValue{
                            Time: "architecto",
                            Timestamp: "2022-01-12T00:28:21.182Z",
                            Value: shared.DataValue{
                                BooleanValue: false,
                                DoubleValue: 6667.67,
                                Expression: "mollitia",
                                IntegerValue: 670638,
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                },
                                LongValue: 210382,
                                MapValue: map[string]shared.DataValue{
                                    "explicabo": shared.DataValue{},
                                    "nobis": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: "enim",
                                    TargetEntityID: "omnis",
                                },
                                StringValue: "nemo",
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