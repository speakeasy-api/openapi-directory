<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"openapi/pkg/types"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BatchPutPropertyValues(ctx, operations.BatchPutPropertyValuesRequest{
        RequestBody: operations.BatchPutPropertyValuesRequestBody{
            Entries: []shared.PropertyValueEntry{
                shared.PropertyValueEntry{
                    EntityPropertyReference: shared.EntityPropertyReference{
                        ComponentName: sdk.String("provident"),
                        EntityID: sdk.String("distinctio"),
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
                            Time: sdk.String("debitis"),
                            Timestamp: types.MustTimeFromString("2022-01-14T06:18:51.036Z"),
                            Value: shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(2726.56),
                                Expression: sdk.String("suscipit"),
                                IntegerValue: sdk.Int64(477665),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(812169),
                                MapValue: map[string]shared.DataValue{
                                    "iusto": shared.DataValue{},
                                    "excepturi": shared.DataValue{},
                                    "nisi": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("recusandae"),
                                    TargetEntityID: sdk.String("temporibus"),
                                },
                                StringValue: sdk.String("ab"),
                            },
                        },
                        shared.PropertyValue{
                            Time: sdk.String("quis"),
                            Timestamp: types.MustTimeFromString("2022-05-09T10:00:51.349Z"),
                            Value: shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(202.18),
                                Expression: sdk.String("ipsam"),
                                IntegerValue: sdk.Int64(832620),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(778157),
                                MapValue: map[string]shared.DataValue{
                                    "at": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("at"),
                                    TargetEntityID: sdk.String("maiores"),
                                },
                                StringValue: sdk.String("molestiae"),
                            },
                        },
                    },
                },
                shared.PropertyValueEntry{
                    EntityPropertyReference: shared.EntityPropertyReference{
                        ComponentName: sdk.String("quod"),
                        EntityID: sdk.String("quod"),
                        ExternalIDProperty: map[string]string{
                            "totam": "porro",
                            "dolorum": "dicta",
                        },
                        PropertyName: "nam",
                    },
                    PropertyValues: []shared.PropertyValue{
                        shared.PropertyValue{
                            Time: sdk.String("occaecati"),
                            Timestamp: types.MustTimeFromString("2022-06-18T20:36:37.412Z"),
                            Value: shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(9446.69),
                                Expression: sdk.String("optio"),
                                IntegerValue: sdk.Int64(521848),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(414662),
                                MapValue: map[string]shared.DataValue{
                                    "modi": shared.DataValue{},
                                    "qui": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("impedit"),
                                    TargetEntityID: sdk.String("cum"),
                                },
                                StringValue: sdk.String("esse"),
                            },
                        },
                        shared.PropertyValue{
                            Time: sdk.String("ipsum"),
                            Timestamp: types.MustTimeFromString("2022-09-24T06:58:38.511Z"),
                            Value: shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(187.89),
                                Expression: sdk.String("ad"),
                                IntegerValue: sdk.Int64(617636),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(612096),
                                MapValue: map[string]shared.DataValue{
                                    "natus": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("laboriosam"),
                                    TargetEntityID: sdk.String("hic"),
                                },
                                StringValue: sdk.String("saepe"),
                            },
                        },
                        shared.PropertyValue{
                            Time: sdk.String("fuga"),
                            Timestamp: types.MustTimeFromString("2022-08-22T18:42:38.160Z"),
                            Value: shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(6130.64),
                                Expression: sdk.String("iure"),
                                IntegerValue: sdk.Int64(902349),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(99280),
                                MapValue: map[string]shared.DataValue{
                                    "reiciendis": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("est"),
                                    TargetEntityID: sdk.String("mollitia"),
                                },
                                StringValue: sdk.String("laborum"),
                            },
                        },
                    },
                },
                shared.PropertyValueEntry{
                    EntityPropertyReference: shared.EntityPropertyReference{
                        ComponentName: sdk.String("dolores"),
                        EntityID: sdk.String("dolorem"),
                        ExternalIDProperty: map[string]string{
                            "explicabo": "nobis",
                            "enim": "omnis",
                        },
                        PropertyName: "nemo",
                    },
                    PropertyValues: []shared.PropertyValue{
                        shared.PropertyValue{
                            Time: sdk.String("excepturi"),
                            Timestamp: types.MustTimeFromString("2022-07-24T21:51:02.112Z"),
                            Value: shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(6342.74),
                                Expression: sdk.String("doloribus"),
                                IntegerValue: sdk.Int64(958950),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(652790),
                                MapValue: map[string]shared.DataValue{
                                    "culpa": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("consequuntur"),
                                    TargetEntityID: sdk.String("repellat"),
                                },
                                StringValue: sdk.String("mollitia"),
                            },
                        },
                        shared.PropertyValue{
                            Time: sdk.String("occaecati"),
                            Timestamp: types.MustTimeFromString("2022-08-02T18:07:51.623Z"),
                            Value: shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(4663.11),
                                Expression: sdk.String("molestiae"),
                                IntegerValue: sdk.Int64(244425),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(158969),
                                MapValue: map[string]shared.DataValue{
                                    "vitae": shared.DataValue{},
                                    "laborum": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("animi"),
                                    TargetEntityID: sdk.String("enim"),
                                },
                                StringValue: sdk.String("odit"),
                            },
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("quo"),
        XAmzContentSha256: sdk.String("sequi"),
        XAmzCredential: sdk.String("tenetur"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("aut"),
        WorkspaceID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPutPropertyValuesResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->