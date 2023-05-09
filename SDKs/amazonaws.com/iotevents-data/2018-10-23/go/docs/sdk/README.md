# SDK

## Overview

<p>IoT Events monitors your equipment or device fleets for failures or changes in operation, and triggers actions when such events occur. You can use IoT Events Data API commands to send inputs to detectors, list detectors, and view or update a detector's status.</p> <p> For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/what-is-iotevents.html">What is IoT Events?</a> in the <i>IoT Events Developer Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/iotevents/>
### Available Operations

* [BatchAcknowledgeAlarm](#batchacknowledgealarm) - Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state after you acknowledge them.
* [BatchDeleteDetector](#batchdeletedetector) - Deletes one or more detectors that were created. When a detector is deleted, its state will be cleared and the detector will be removed from the list of detectors. The deleted detector will no longer appear if referenced in the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html">ListDetectors</a> API call.
* [BatchDisableAlarm](#batchdisablealarm) - Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after you disable them.
* [BatchEnableAlarm](#batchenablealarm) - Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you enable them.
* [BatchPutMessage](#batchputmessage) - Sends a set of messages to the IoT Events system. Each message payload is transformed into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor that input. If multiple messages are sent, the order in which the messages are processed isn't guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful response.
* [BatchResetAlarm](#batchresetalarm) - Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you reset them.
* [BatchSnoozeAlarm](#batchsnoozealarm) - Changes one or more alarms to the snooze mode. The alarms change to the <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.
* [BatchUpdateDetector](#batchupdatedetector) - Updates the state, variable values, and timer settings of one or more detectors (instances) of a specified detector model.
* [DescribeAlarm](#describealarm) - Retrieves information about an alarm.
* [DescribeDetector](#describedetector) - Returns information about the specified detector (instance).
* [ListAlarms](#listalarms) - Lists one or more alarms. The operation returns only the metadata associated with each alarm.
* [ListDetectors](#listdetectors) - Lists detectors (the instances of a detector model).

## BatchAcknowledgeAlarm

Acknowledges one or more alarms. The alarms change to the <code>ACKNOWLEDGED</code> state after you acknowledge them.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchAcknowledgeAlarm(ctx, operations.BatchAcknowledgeAlarmRequest{
        RequestBody: operations.BatchAcknowledgeAlarmRequestBody{
            AcknowledgeActionRequests: []shared.AcknowledgeAlarmActionRequest{
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "placeat",
                    KeyValue: sdk.String("voluptatum"),
                    Note: sdk.String("iusto"),
                    RequestID: "excepturi",
                },
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "nisi",
                    KeyValue: sdk.String("recusandae"),
                    Note: sdk.String("temporibus"),
                    RequestID: "ab",
                },
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "quis",
                    KeyValue: sdk.String("veritatis"),
                    Note: sdk.String("deserunt"),
                    RequestID: "perferendis",
                },
                shared.AcknowledgeAlarmActionRequest{
                    AlarmModelName: "ipsam",
                    KeyValue: sdk.String("repellendus"),
                    Note: sdk.String("sapiente"),
                    RequestID: "quo",
                },
            },
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("at"),
        XAmzCredential: sdk.String("at"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("quod"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchAcknowledgeAlarmResponse != nil {
        // handle response
    }
}
```

## BatchDeleteDetector

Deletes one or more detectors that were created. When a detector is deleted, its state will be cleared and the detector will be removed from the list of detectors. The deleted detector will no longer appear if referenced in the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_iotevents-data_ListDetectors.html">ListDetectors</a> API call.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchDeleteDetector(ctx, operations.BatchDeleteDetectorRequest{
        RequestBody: operations.BatchDeleteDetectorRequestBody{
            Detectors: []shared.DeleteDetectorRequest{
                shared.DeleteDetectorRequest{
                    DetectorModelName: "totam",
                    KeyValue: sdk.String("porro"),
                    MessageID: "dolorum",
                },
                shared.DeleteDetectorRequest{
                    DetectorModelName: "dicta",
                    KeyValue: sdk.String("nam"),
                    MessageID: "officia",
                },
            },
        },
        XAmzAlgorithm: sdk.String("occaecati"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("optio"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("beatae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDeleteDetectorResponse != nil {
        // handle response
    }
}
```

## BatchDisableAlarm

Disables one or more alarms. The alarms change to the <code>DISABLED</code> state after you disable them.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchDisableAlarm(ctx, operations.BatchDisableAlarmRequest{
        RequestBody: operations.BatchDisableAlarmRequestBody{
            DisableActionRequests: []shared.DisableAlarmActionRequest{
                shared.DisableAlarmActionRequest{
                    AlarmModelName: "molestiae",
                    KeyValue: sdk.String("modi"),
                    Note: sdk.String("qui"),
                    RequestID: "impedit",
                },
                shared.DisableAlarmActionRequest{
                    AlarmModelName: "cum",
                    KeyValue: sdk.String("esse"),
                    Note: sdk.String("ipsum"),
                    RequestID: "excepturi",
                },
            },
        },
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("iste"),
        XAmzSignedHeaders: sdk.String("dolor"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchDisableAlarmResponse != nil {
        // handle response
    }
}
```

## BatchEnableAlarm

Enables one or more alarms. The alarms change to the <code>NORMAL</code> state after you enable them.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchEnableAlarm(ctx, operations.BatchEnableAlarmRequest{
        RequestBody: operations.BatchEnableAlarmRequestBody{
            EnableActionRequests: []shared.EnableAlarmActionRequest{
                shared.EnableAlarmActionRequest{
                    AlarmModelName: "laboriosam",
                    KeyValue: sdk.String("hic"),
                    Note: sdk.String("saepe"),
                    RequestID: "fuga",
                },
                shared.EnableAlarmActionRequest{
                    AlarmModelName: "in",
                    KeyValue: sdk.String("corporis"),
                    Note: sdk.String("iste"),
                    RequestID: "iure",
                },
                shared.EnableAlarmActionRequest{
                    AlarmModelName: "saepe",
                    KeyValue: sdk.String("quidem"),
                    Note: sdk.String("architecto"),
                    RequestID: "ipsa",
                },
            },
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("dolores"),
        XAmzSignature: sdk.String("dolorem"),
        XAmzSignedHeaders: sdk.String("corporis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchEnableAlarmResponse != nil {
        // handle response
    }
}
```

## BatchPutMessage

Sends a set of messages to the IoT Events system. Each message payload is transformed into the input you specify (<code>"inputName"</code>) and ingested into any detectors that monitor that input. If multiple messages are sent, the order in which the messages are processed isn't guaranteed. To guarantee ordering, you must send messages one at a time and wait for a successful response.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchPutMessage(ctx, operations.BatchPutMessageRequest{
        RequestBody: operations.BatchPutMessageRequestBody{
            Messages: []shared.Message{
                shared.Message{
                    InputName: "nobis",
                    MessageID: "enim",
                    Payload: "omnis",
                    Timestamp: &shared.TimestampValue{
                        TimeInMillis: sdk.Int64(363711),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("minima"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("accusantium"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("culpa"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("sapiente"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPutMessageResponse != nil {
        // handle response
    }
}
```

## BatchResetAlarm

Resets one or more alarms. The alarms return to the <code>NORMAL</code> state after you reset them.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchResetAlarm(ctx, operations.BatchResetAlarmRequest{
        RequestBody: operations.BatchResetAlarmRequestBody{
            ResetActionRequests: []shared.ResetAlarmActionRequest{
                shared.ResetAlarmActionRequest{
                    AlarmModelName: "mollitia",
                    KeyValue: sdk.String("dolorem"),
                    Note: sdk.String("culpa"),
                    RequestID: "consequuntur",
                },
            },
        },
        XAmzAlgorithm: sdk.String("repellat"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("commodi"),
        XAmzSignature: sdk.String("quam"),
        XAmzSignedHeaders: sdk.String("molestiae"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchResetAlarmResponse != nil {
        // handle response
    }
}
```

## BatchSnoozeAlarm

Changes one or more alarms to the snooze mode. The alarms change to the <code>SNOOZE_DISABLED</code> state after you set them to the snooze mode.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchSnoozeAlarm(ctx, operations.BatchSnoozeAlarmRequest{
        RequestBody: operations.BatchSnoozeAlarmRequestBody{
            SnoozeActionRequests: []shared.SnoozeAlarmActionRequest{
                shared.SnoozeAlarmActionRequest{
                    AlarmModelName: "error",
                    KeyValue: sdk.String("quia"),
                    Note: sdk.String("quis"),
                    RequestID: "vitae",
                    SnoozeDuration: 674752,
                },
            },
        },
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("enim"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("tenetur"),
        XAmzSignedHeaders: sdk.String("ipsam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchSnoozeAlarmResponse != nil {
        // handle response
    }
}
```

## BatchUpdateDetector

Updates the state, variable values, and timer settings of one or more detectors (instances) of a specified detector model.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.BatchUpdateDetector(ctx, operations.BatchUpdateDetectorRequest{
        RequestBody: operations.BatchUpdateDetectorRequestBody{
            Detectors: []shared.UpdateDetectorRequest{
                shared.UpdateDetectorRequest{
                    DetectorModelName: "possimus",
                    KeyValue: sdk.String("aut"),
                    MessageID: "quasi",
                    State: shared.DetectorStateDefinition{
                        StateName: "error",
                        Timers: []shared.TimerDefinition{
                            shared.TimerDefinition{
                                Name: "Ryan Witting",
                                Seconds: 468651,
                            },
                            shared.TimerDefinition{
                                Name: "Jan Bednar",
                                Seconds: 739264,
                            },
                            shared.TimerDefinition{
                                Name: "Sharon Kiehn",
                                Seconds: 120196,
                            },
                            shared.TimerDefinition{
                                Name: "Miss Valerie Kshlerin",
                                Seconds: 880476,
                            },
                        },
                        Variables: []shared.VariableDefinition{
                            shared.VariableDefinition{
                                Name: "Eric Emmerich",
                                Value: "excepturi",
                            },
                            shared.VariableDefinition{
                                Name: "Joel Lang",
                                Value: "quasi",
                            },
                        },
                    },
                },
                shared.UpdateDetectorRequest{
                    DetectorModelName: "repudiandae",
                    KeyValue: sdk.String("sint"),
                    MessageID: "veritatis",
                    State: shared.DetectorStateDefinition{
                        StateName: "itaque",
                        Timers: []shared.TimerDefinition{
                            shared.TimerDefinition{
                                Name: "Elizabeth Orn",
                                Seconds: 647174,
                            },
                            shared.TimerDefinition{
                                Name: "Marty Green",
                                Seconds: 397821,
                            },
                        },
                        Variables: []shared.VariableDefinition{
                            shared.VariableDefinition{
                                Name: "Christopher Cummerata",
                                Value: "alias",
                            },
                            shared.VariableDefinition{
                                Name: "Sonya Marks",
                                Value: "tempore",
                            },
                            shared.VariableDefinition{
                                Name: "Lucia Kemmer",
                                Value: "sint",
                            },
                        },
                    },
                },
                shared.UpdateDetectorRequest{
                    DetectorModelName: "aliquid",
                    KeyValue: sdk.String("provident"),
                    MessageID: "necessitatibus",
                    State: shared.DetectorStateDefinition{
                        StateName: "sint",
                        Timers: []shared.TimerDefinition{
                            shared.TimerDefinition{
                                Name: "Raquel Wilderman",
                                Seconds: 449198,
                            },
                            shared.TimerDefinition{
                                Name: "Mrs. Emilio Price",
                                Seconds: 813798,
                            },
                            shared.TimerDefinition{
                                Name: "Beth Padberg",
                                Seconds: 581273,
                            },
                        },
                        Variables: []shared.VariableDefinition{
                            shared.VariableDefinition{
                                Name: "Toby Pouros",
                                Value: "id",
                            },
                            shared.VariableDefinition{
                                Name: "Jaime Will",
                                Value: "nisi",
                            },
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("vel"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("molestiae"),
        XAmzSecurityToken: sdk.String("perferendis"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("magnam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchUpdateDetectorResponse != nil {
        // handle response
    }
}
```

## DescribeAlarm

Retrieves information about an alarm.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeAlarm(ctx, operations.DescribeAlarmRequest{
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("suscipit"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("nobis"),
        AlarmModelName: "eum",
        KeyValue: sdk.String("vero"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeAlarmResponse != nil {
        // handle response
    }
}
```

## DescribeDetector

Returns information about the specified detector (instance).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.DescribeDetector(ctx, operations.DescribeDetectorRequest{
        XAmzAlgorithm: sdk.String("aspernatur"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("et"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("provident"),
        DetectorModelName: "quos",
        KeyValue: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DescribeDetectorResponse != nil {
        // handle response
    }
}
```

## ListAlarms

Lists one or more alarms. The operation returns only the metadata associated with each alarm.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListAlarms(ctx, operations.ListAlarmsRequest{
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("reiciendis"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("dolor"),
        AlarmModelName: "necessitatibus",
        MaxResults: sdk.Int64(141264),
        NextToken: sdk.String("nemo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAlarmsResponse != nil {
        // handle response
    }
}
```

## ListDetectors

Lists detectors (the instances of a detector model).

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.ListDetectors(ctx, operations.ListDetectorsRequest{
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("iure"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("debitis"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        DetectorModelName: "facilis",
        MaxResults: sdk.Int64(447926),
        NextToken: sdk.String("architecto"),
        StateName: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDetectorsResponse != nil {
        // handle response
    }
}
```
