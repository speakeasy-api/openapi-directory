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
                            Timestamp: "2022-10-06T18:28:35.643Z",
                            Value: shared.DataValue{
                                BooleanValue: false,
                                DoubleValue: 7917.25,
                                Expression: "placeat",
                                IntegerValue: 528895,
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: 568045,
                                MapValue: map[string]shared.DataValue{
                                    "recusandae": shared.DataValue{},
                                    "temporibus": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: "ab",
                                    TargetEntityID: "quis",
                                },
                                StringValue: "veritatis",
                            },
                        },
                        shared.PropertyValue{
                            Time: "deserunt",
                            Timestamp: "2023-03-22T17:42:34.730Z",
                            Value: shared.DataValue{
                                BooleanValue: false,
                                DoubleValue: 3682.41,
                                Expression: "repellendus",
                                IntegerValue: 957156,
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: 140350,
                                MapValue: map[string]shared.DataValue{
                                    "at": shared.DataValue{},
                                    "maiores": shared.DataValue{},
                                    "molestiae": shared.DataValue{},
                                    "quod": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: "quod",
                                    TargetEntityID: "esse",
                                },
                                StringValue: "totam",
                            },
                        },
                    },
                },
                shared.PropertyValueEntry{
                    EntityPropertyReference: shared.EntityPropertyReference{
                        ComponentName: "porro",
                        EntityID: "dolorum",
                        ExternalIDProperty: map[string]string{
                            "nam": "officia",
                        },
                        PropertyName: "occaecati",
                    },
                    PropertyValues: []shared.PropertyValue{
                        shared.PropertyValue{
                            Time: "deleniti",
                            Timestamp: "2022-04-19T07:31:24.085Z",
                            Value: shared.DataValue{
                                BooleanValue: false,
                                DoubleValue: 7586.16,
                                Expression: "totam",
                                IntegerValue: 105907,
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: 473600,
                                MapValue: map[string]shared.DataValue{
                                    "qui": shared.DataValue{},
                                    "impedit": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: "cum",
                                    TargetEntityID: "esse",
                                },
                                StringValue: "ipsum",
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