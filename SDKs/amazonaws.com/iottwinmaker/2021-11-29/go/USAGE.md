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
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.BatchPutPropertyValuesRequest{
        RequestBody: operations.BatchPutPropertyValuesRequestBody{
            Entries: []shared.PropertyValueEntry{
                shared.PropertyValueEntry{
                    EntityPropertyReference: shared.EntityPropertyReference{
                        ComponentName: "provident",
                        EntityID: "distinctio",
                        ExternalIDProperty: map[string]string{
                            "unde": "nulla",
                            "corrupti": "illum",
                            "vel": "error",
                            "deserunt": "suscipit",
                        },
                        PropertyName: "iure",
                    },
                    PropertyValues: []shared.PropertyValue{
                        shared.PropertyValue{
                            Time: "debitis",
                            Timestamp: "2022-01-14T06:18:51.036Z",
                            Value: shared.DataValue{
                                BooleanValue: false,
                                DoubleValue: 2726.56,
                                Expression: "suscipit",
                                IntegerValue: 477665,
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: 812169,
                                MapValue: map[string]shared.DataValue{
                                    "iusto": shared.DataValue{},
                                    "excepturi": shared.DataValue{},
                                    "nisi": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: "recusandae",
                                    TargetEntityID: "temporibus",
                                },
                                StringValue: "ab",
                            },
                        },
                        shared.PropertyValue{
                            Time: "quis",
                            Timestamp: "2022-05-09T10:00:51.349Z",
                            Value: shared.DataValue{
                                BooleanValue: false,
                                DoubleValue: 202.18,
                                Expression: "ipsam",
                                IntegerValue: 832620,
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: 778157,
                                MapValue: map[string]shared.DataValue{
                                    "at": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: "at",
                                    TargetEntityID: "maiores",
                                },
                                StringValue: "molestiae",
                            },
                        },
                    },
                },
                shared.PropertyValueEntry{
                    EntityPropertyReference: shared.EntityPropertyReference{
                        ComponentName: "quod",
                        EntityID: "quod",
                        ExternalIDProperty: map[string]string{
                            "totam": "porro",
                            "dolorum": "dicta",
                        },
                        PropertyName: "nam",
                    },
                    PropertyValues: []shared.PropertyValue{
                        shared.PropertyValue{
                            Time: "occaecati",
                            Timestamp: "2022-06-18T20:36:37.412Z",
                            Value: shared.DataValue{
                                BooleanValue: false,
                                DoubleValue: 9446.69,
                                Expression: "optio",
                                IntegerValue: 521848,
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                },
                                LongValue: 414662,
                                MapValue: map[string]shared.DataValue{
                                    "modi": shared.DataValue{},
                                    "qui": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: "impedit",
                                    TargetEntityID: "cum",
                                },
                                StringValue: "esse",
                            },
                        },
                        shared.PropertyValue{
                            Time: "ipsum",
                            Timestamp: "2022-09-24T06:58:38.511Z",
                            Value: shared.DataValue{
                                BooleanValue: false,
                                DoubleValue: 187.89,
                                Expression: "ad",
                                IntegerValue: 617636,
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                },
                                LongValue: 612096,
                                MapValue: map[string]shared.DataValue{
                                    "natus": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: "laboriosam",
                                    TargetEntityID: "hic",
                                },
                                StringValue: "saepe",
                            },
                        },
                        shared.PropertyValue{
                            Time: "fuga",
                            Timestamp: "2022-08-22T18:42:38.160Z",
                            Value: shared.DataValue{
                                BooleanValue: false,
                                DoubleValue: 6130.64,
                                Expression: "iure",
                                IntegerValue: 902349,
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: 99280,
                                MapValue: map[string]shared.DataValue{
                                    "reiciendis": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: "est",
                                    TargetEntityID: "mollitia",
                                },
                                StringValue: "laborum",
                            },
                        },
                    },
                },
                shared.PropertyValueEntry{
                    EntityPropertyReference: shared.EntityPropertyReference{
                        ComponentName: "dolores",
                        EntityID: "dolorem",
                        ExternalIDProperty: map[string]string{
                            "explicabo": "nobis",
                            "enim": "omnis",
                        },
                        PropertyName: "nemo",
                    },
                    PropertyValues: []shared.PropertyValue{
                        shared.PropertyValue{
                            Time: "excepturi",
                            Timestamp: "2022-07-24T21:51:02.112Z",
                            Value: shared.DataValue{
                                BooleanValue: false,
                                DoubleValue: 6342.74,
                                Expression: "doloribus",
                                IntegerValue: 958950,
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                },
                                LongValue: 652790,
                                MapValue: map[string]shared.DataValue{
                                    "culpa": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: "consequuntur",
                                    TargetEntityID: "repellat",
                                },
                                StringValue: "mollitia",
                            },
                        },
                        shared.PropertyValue{
                            Time: "occaecati",
                            Timestamp: "2022-08-02T18:07:51.623Z",
                            Value: shared.DataValue{
                                BooleanValue: false,
                                DoubleValue: 4663.11,
                                Expression: "molestiae",
                                IntegerValue: 244425,
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: 158969,
                                MapValue: map[string]shared.DataValue{
                                    "vitae": shared.DataValue{},
                                    "laborum": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: "animi",
                                    TargetEntityID: "enim",
                                },
                                StringValue: "odit",
                            },
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: "quo",
        XAmzContentSha256: "sequi",
        XAmzCredential: "tenetur",
        XAmzDate: "ipsam",
        XAmzSecurityToken: "id",
        XAmzSignature: "possimus",
        XAmzSignedHeaders: "aut",
        WorkspaceID: "quasi",
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