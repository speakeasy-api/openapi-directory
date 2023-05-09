# SDK

## Overview

<p>Systems Manager Incident Manager is an incident management console designed to help users mitigate and recover from incidents affecting their Amazon Web Services-hosted applications. An incident is any unplanned interruption or reduction in quality of services. </p> <p>Incident Manager increases incident resolution by notifying responders of impact, highlighting relevant troubleshooting data, and providing collaboration tools to get services back up and running. To achieve the primary goal of reducing the time-to-resolution of critical incidents, Incident Manager automates response plans and enables responder team escalation. </p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/ssm-incidents/>
### Available Operations

* [CreateReplicationSet](#createreplicationset) - A replication set replicates and encrypts your data to the provided Regions with the provided KMS key. 
* [CreateResponsePlan](#createresponseplan) - Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.
* [CreateTimelineEvent](#createtimelineevent) - Creates a custom timeline event on the incident details page of an incident record. Incident Manager automatically creates timeline events that mark key moments during an incident. You can create custom timeline events to mark important events that Incident Manager can detect automatically.
* [DeleteIncidentRecord](#deleteincidentrecord) - Delete an incident record from Incident Manager. 
* [DeleteReplicationSet](#deletereplicationset) - Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.
* [DeleteResourcePolicy](#deleteresourcepolicy) - Deletes the resource policy that Resource Access Manager uses to share your Incident Manager resource.
* [DeleteResponsePlan](#deleteresponseplan) - Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.
* [DeleteTimelineEvent](#deletetimelineevent) - Deletes a timeline event from an incident.
* [GetIncidentRecord](#getincidentrecord) - Returns the details for the specified incident record.
* [GetReplicationSet](#getreplicationset) - Retrieve your Incident Manager replication set.
* [GetResourcePolicies](#getresourcepolicies) - Retrieves the resource policies attached to the specified response plan.
* [GetResponsePlan](#getresponseplan) - Retrieves the details of the specified response plan.
* [GetTimelineEvent](#gettimelineevent) - Retrieves a timeline event based on its ID and incident record.
* [ListIncidentRecords](#listincidentrecords) - Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update. 
* [ListRelatedItems](#listrelateditems) - List all related items for an incident record.
* [ListReplicationSets](#listreplicationsets) - Lists details about the replication set configured in your account. 
* [ListResponsePlans](#listresponseplans) - Lists all response plans in your account.
* [ListTagsForResource](#listtagsforresource) - Lists the tags that are attached to the specified response plan.
* [ListTimelineEvents](#listtimelineevents) - Lists timeline events for the specified incident record.
* [PutResourcePolicy](#putresourcepolicy) - Adds a resource policy to the specified response plan. The resource policy is used to share the response plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-manager-cross-account-cross-region.html">Cross-Region and cross-account incident management</a>.
* [StartIncident](#startincident) - Used to start an incident from CloudWatch alarms, EventBridge events, or manually. 
* [TagResource](#tagresource) - Adds a tag to a response plan.
* [UntagResource](#untagresource) - Removes a tag from a resource.
* [UpdateDeletionProtection](#updatedeletionprotection) - Update deletion protection to either allow or deny deletion of the final Region in a replication set.
* [UpdateIncidentRecord](#updateincidentrecord) - Update the details of an incident record. You can use this operation to update an incident record from the defined chat channel. For more information about using actions in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.
* [UpdateRelatedItems](#updaterelateditems) - Add or remove related items from the related items tab of an incident record.
* [UpdateReplicationSet](#updatereplicationset) - Add or delete Regions from your replication set.
* [UpdateResponsePlan](#updateresponseplan) - Updates the specified response plan.
* [UpdateTimelineEvent](#updatetimelineevent) - Updates a timeline event. You can update events of type <code>Custom Event</code>.

## CreateReplicationSet

A replication set replicates and encrypts your data to the provided Regions with the provided KMS key. 

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
    res, err := s.SDK.CreateReplicationSet(ctx, operations.CreateReplicationSetRequest{
        RequestBody: operations.CreateReplicationSetRequestBody{
            ClientToken: sdk.String("minus"),
            Regions: map[string]shared.RegionMapInputValue{
                "voluptatum": shared.RegionMapInputValue{
                    SseKmsKeyID: sdk.String("iusto"),
                },
                "excepturi": shared.RegionMapInputValue{
                    SseKmsKeyID: sdk.String("nisi"),
                },
                "recusandae": shared.RegionMapInputValue{
                    SseKmsKeyID: sdk.String("temporibus"),
                },
                "ab": shared.RegionMapInputValue{
                    SseKmsKeyID: sdk.String("quis"),
                },
            },
            Tags: map[string]string{
                "deserunt": "perferendis",
            },
        },
        XAmzAlgorithm: sdk.String("ipsam"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("at"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateReplicationSetOutput != nil {
        // handle response
    }
}
```

## CreateResponsePlan

Creates a response plan that automates the initial response to incidents. A response plan engages contacts, starts chat channel collaboration, and initiates runbooks at the beginning of an incident.

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
    res, err := s.SDK.CreateResponsePlan(ctx, operations.CreateResponsePlanRequest{
        RequestBody: operations.CreateResponsePlanRequestBody{
            Actions: []shared.Action{
                shared.Action{
                    SsmAutomation: &shared.SsmAutomation{
                        DocumentName: "molestiae",
                        DocumentVersion: sdk.String("quod"),
                        DynamicParameters: map[string]shared.DynamicSsmParameterValue{
                            "esse": shared.DynamicSsmParameterValue{
                                Variable: shared.VariableTypeEnumInvolvedResources.ToPointer(),
                            },
                            "porro": shared.DynamicSsmParameterValue{
                                Variable: shared.VariableTypeEnumInvolvedResources.ToPointer(),
                            },
                            "dicta": shared.DynamicSsmParameterValue{
                                Variable: shared.VariableTypeEnumInvolvedResources.ToPointer(),
                            },
                            "officia": shared.DynamicSsmParameterValue{
                                Variable: shared.VariableTypeEnumInvolvedResources.ToPointer(),
                            },
                        },
                        Parameters: map[string][]string{
                            "deleniti": []string{
                                "optio",
                                "totam",
                                "beatae",
                                "commodi",
                            },
                        },
                        RoleArn: "molestiae",
                        TargetAccount: shared.SsmTargetAccountEnumResponsePlanOwnerAccount.ToPointer(),
                    },
                },
                shared.Action{
                    SsmAutomation: &shared.SsmAutomation{
                        DocumentName: "qui",
                        DocumentVersion: sdk.String("impedit"),
                        DynamicParameters: map[string]shared.DynamicSsmParameterValue{
                            "esse": shared.DynamicSsmParameterValue{
                                Variable: shared.VariableTypeEnumIncidentRecordArn.ToPointer(),
                            },
                            "excepturi": shared.DynamicSsmParameterValue{
                                Variable: shared.VariableTypeEnumIncidentRecordArn.ToPointer(),
                            },
                            "perferendis": shared.DynamicSsmParameterValue{
                                Variable: shared.VariableTypeEnumIncidentRecordArn.ToPointer(),
                            },
                        },
                        Parameters: map[string][]string{
                            "sed": []string{
                                "dolor",
                                "natus",
                                "laboriosam",
                            },
                            "hic": []string{
                                "fuga",
                                "in",
                                "corporis",
                                "iste",
                            },
                            "iure": []string{
                                "quidem",
                                "architecto",
                                "ipsa",
                                "reiciendis",
                            },
                        },
                        RoleArn: "est",
                        TargetAccount: shared.SsmTargetAccountEnumImpactedAccount.ToPointer(),
                    },
                },
                shared.Action{
                    SsmAutomation: &shared.SsmAutomation{
                        DocumentName: "laborum",
                        DocumentVersion: sdk.String("dolores"),
                        DynamicParameters: map[string]shared.DynamicSsmParameterValue{
                            "corporis": shared.DynamicSsmParameterValue{
                                Variable: shared.VariableTypeEnumIncidentRecordArn.ToPointer(),
                            },
                        },
                        Parameters: map[string][]string{
                            "enim": []string{
                                "nemo",
                                "minima",
                                "excepturi",
                            },
                            "accusantium": []string{
                                "culpa",
                                "doloribus",
                            },
                            "sapiente": []string{
                                "mollitia",
                            },
                            "dolorem": []string{
                                "consequuntur",
                                "repellat",
                                "mollitia",
                            },
                        },
                        RoleArn: "occaecati",
                        TargetAccount: shared.SsmTargetAccountEnumResponsePlanOwnerAccount.ToPointer(),
                    },
                },
                shared.Action{
                    SsmAutomation: &shared.SsmAutomation{
                        DocumentName: "commodi",
                        DocumentVersion: sdk.String("quam"),
                        DynamicParameters: map[string]shared.DynamicSsmParameterValue{
                            "velit": shared.DynamicSsmParameterValue{
                                Variable: shared.VariableTypeEnumInvolvedResources.ToPointer(),
                            },
                            "quia": shared.DynamicSsmParameterValue{
                                Variable: shared.VariableTypeEnumIncidentRecordArn.ToPointer(),
                            },
                        },
                        Parameters: map[string][]string{
                            "laborum": []string{
                                "enim",
                                "odit",
                                "quo",
                            },
                        },
                        RoleArn: "sequi",
                        TargetAccount: shared.SsmTargetAccountEnumImpactedAccount.ToPointer(),
                    },
                },
            },
            ChatChannel: &operations.CreateResponsePlanRequestBodyChatChannel{
                ChatbotSns: []string{
                    "id",
                    "possimus",
                },
                Empty: map[string]interface{}{
                    "quasi": "error",
                },
            },
            ClientToken: sdk.String("temporibus"),
            DisplayName: sdk.String("laborum"),
            Engagements: []string{
                "reiciendis",
            },
            IncidentTemplate: operations.CreateResponsePlanRequestBodyIncidentTemplate{
                DedupeString: sdk.String("voluptatibus"),
                Impact: sdk.Int64(878194),
                IncidentTags: map[string]string{
                    "praesentium": "voluptatibus",
                    "ipsa": "omnis",
                },
                NotificationTargets: []shared.NotificationTargetItem{
                    shared.NotificationTargetItem{
                        SnsTopicArn: sdk.String("cum"),
                    },
                    shared.NotificationTargetItem{
                        SnsTopicArn: sdk.String("perferendis"),
                    },
                },
                Summary: sdk.String("doloremque"),
                Title: sdk.String("Ms."),
            },
            Integrations: []shared.Integration{
                shared.Integration{
                    PagerDutyConfiguration: &shared.PagerDutyConfiguration{
                        Name: "Willie Hessel",
                        PagerDutyIncidentConfiguration: shared.PagerDutyIncidentConfiguration{
                            ServiceID: "dicta",
                        },
                        SecretID: "harum",
                    },
                },
                shared.Integration{
                    PagerDutyConfiguration: &shared.PagerDutyConfiguration{
                        Name: "Sophia Jerde I",
                        PagerDutyIncidentConfiguration: shared.PagerDutyIncidentConfiguration{
                            ServiceID: "quidem",
                        },
                        SecretID: "molestias",
                    },
                },
            },
            Name: "Ervin Gleason",
            Tags: map[string]string{
                "quasi": "repudiandae",
                "sint": "veritatis",
                "itaque": "incidunt",
                "enim": "consequatur",
            },
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("explicabo"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("quibusdam"),
        XAmzSignedHeaders: sdk.String("labore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateResponsePlanOutput != nil {
        // handle response
    }
}
```

## CreateTimelineEvent

Creates a custom timeline event on the incident details page of an incident record. Incident Manager automatically creates timeline events that mark key moments during an incident. You can create custom timeline events to mark important events that Incident Manager can detect automatically.

### Example Usage

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
    res, err := s.SDK.CreateTimelineEvent(ctx, operations.CreateTimelineEventRequest{
        RequestBody: operations.CreateTimelineEventRequestBody{
            ClientToken: sdk.String("modi"),
            EventData: "qui",
            EventReferences: []shared.EventReference{
                shared.EventReference{
                    RelatedItemID: sdk.String("cupiditate"),
                    Resource: sdk.String("quos"),
                },
                shared.EventReference{
                    RelatedItemID: sdk.String("perferendis"),
                    Resource: sdk.String("magni"),
                },
            },
            EventTime: types.MustTimeFromString("2021-11-22T01:26:35.048Z"),
            EventType: "alias",
            IncidentRecordArn: "fugit",
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("tempora"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("tempore"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("delectus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTimelineEventOutput != nil {
        // handle response
    }
}
```

## DeleteIncidentRecord

Delete an incident record from Incident Manager. 

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
    res, err := s.SDK.DeleteIncidentRecord(ctx, operations.DeleteIncidentRecordRequest{
        RequestBody: operations.DeleteIncidentRecordRequestBody{
            Arn: "eum",
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("sint"),
        XAmzDate: sdk.String("aliquid"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("necessitatibus"),
        XAmzSignedHeaders: sdk.String("sint"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteIncidentRecordOutput != nil {
        // handle response
    }
}
```

## DeleteReplicationSet

Deletes all Regions in your replication set. Deleting the replication set deletes all Incident Manager data.

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
    res, err := s.SDK.DeleteReplicationSet(ctx, operations.DeleteReplicationSetRequest{
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("a"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("in"),
        Arn: "illum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteReplicationSetOutput != nil {
        // handle response
    }
}
```

## DeleteResourcePolicy

Deletes the resource policy that Resource Access Manager uses to share your Incident Manager resource.

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
    res, err := s.SDK.DeleteResourcePolicy(ctx, operations.DeleteResourcePolicyRequest{
        RequestBody: operations.DeleteResourcePolicyRequestBody{
            PolicyID: "maiores",
            ResourceArn: "rerum",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("cumque"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("laborum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResourcePolicyOutput != nil {
        // handle response
    }
}
```

## DeleteResponsePlan

Deletes the specified response plan. Deleting a response plan stops all linked CloudWatch alarms and EventBridge events from creating an incident with this response plan.

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
    res, err := s.SDK.DeleteResponsePlan(ctx, operations.DeleteResponsePlanRequest{
        RequestBody: operations.DeleteResponsePlanRequestBody{
            Arn: "accusamus",
        },
        XAmzAlgorithm: sdk.String("non"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("delectus"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteResponsePlanOutput != nil {
        // handle response
    }
}
```

## DeleteTimelineEvent

Deletes a timeline event from an incident.

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
    res, err := s.SDK.DeleteTimelineEvent(ctx, operations.DeleteTimelineEventRequest{
        RequestBody: operations.DeleteTimelineEventRequestBody{
            EventID: "nam",
            IncidentRecordArn: "id",
        },
        XAmzAlgorithm: sdk.String("blanditiis"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("sapiente"),
        XAmzDate: sdk.String("amet"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTimelineEventOutput != nil {
        // handle response
    }
}
```

## GetIncidentRecord

Returns the details for the specified incident record.

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
    res, err := s.SDK.GetIncidentRecord(ctx, operations.GetIncidentRecordRequest{
        XAmzAlgorithm: sdk.String("natus"),
        XAmzContentSha256: sdk.String("omnis"),
        XAmzCredential: sdk.String("molestiae"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("nihil"),
        XAmzSignature: sdk.String("magnam"),
        XAmzSignedHeaders: sdk.String("distinctio"),
        Arn: "id",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetIncidentRecordOutput != nil {
        // handle response
    }
}
```

## GetReplicationSet

Retrieve your Incident Manager replication set.

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
    res, err := s.SDK.GetReplicationSet(ctx, operations.GetReplicationSetRequest{
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("suscipit"),
        XAmzDate: sdk.String("natus"),
        XAmzSecurityToken: sdk.String("nobis"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("vero"),
        Arn: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetReplicationSetOutput != nil {
        // handle response
    }
}
```

## GetResourcePolicies

Retrieves the resource policies attached to the specified response plan.

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
    res, err := s.SDK.GetResourcePolicies(ctx, operations.GetResourcePoliciesRequest{
        RequestBody: operations.GetResourcePoliciesRequestBody{
            MaxResults: sdk.Int64(102863),
            NextToken: sdk.String("magnam"),
        },
        XAmzAlgorithm: sdk.String("et"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("ullam"),
        XAmzDate: sdk.String("provident"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("sint"),
        XAmzSignedHeaders: sdk.String("accusantium"),
        MaxResults: sdk.String("mollitia"),
        NextToken: sdk.String("reiciendis"),
        ResourceArn: "mollitia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResourcePoliciesOutput != nil {
        // handle response
    }
}
```

## GetResponsePlan

Retrieves the details of the specified response plan.

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
    res, err := s.SDK.GetResponsePlan(ctx, operations.GetResponsePlanRequest{
        XAmzAlgorithm: sdk.String("ad"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("necessitatibus"),
        XAmzSecurityToken: sdk.String("odit"),
        XAmzSignature: sdk.String("nemo"),
        XAmzSignedHeaders: sdk.String("quasi"),
        Arn: "iure",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetResponsePlanOutput != nil {
        // handle response
    }
}
```

## GetTimelineEvent

Retrieves a timeline event based on its ID and incident record.

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
    res, err := s.SDK.GetTimelineEvent(ctx, operations.GetTimelineEventRequest{
        XAmzAlgorithm: sdk.String("doloribus"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("eius"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("in"),
        EventID: "architecto",
        IncidentRecordArn: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTimelineEventOutput != nil {
        // handle response
    }
}
```

## ListIncidentRecords

Lists all incident records in your account. Use this command to retrieve the Amazon Resource Name (ARN) of the incident record you want to update. 

### Example Usage

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
    res, err := s.SDK.ListIncidentRecords(ctx, operations.ListIncidentRecordsRequest{
        RequestBody: operations.ListIncidentRecordsRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Condition: shared.Condition{
                        After: types.MustTimeFromString("2022-04-15T07:14:46.128Z"),
                        Before: types.MustTimeFromString("2022-01-01T10:06:00.916Z"),
                        Equals: &shared.AttributeValueList{
                            IntegerValues: []int64{
                                149448,
                                904648,
                                868126,
                                37559,
                            },
                            StringValues: []string{
                                "praesentium",
                            },
                        },
                    },
                    Key: "natus",
                },
                shared.Filter{
                    Condition: shared.Condition{
                        After: types.MustTimeFromString("2022-11-16T19:20:12.159Z"),
                        Before: types.MustTimeFromString("2020-06-16T10:20:37.479Z"),
                        Equals: &shared.AttributeValueList{
                            IntegerValues: []int64{
                                807319,
                                411397,
                                569101,
                                139972,
                            },
                            StringValues: []string{
                                "accusantium",
                                "ab",
                            },
                        },
                    },
                    Key: "maiores",
                },
                shared.Filter{
                    Condition: shared.Condition{
                        After: types.MustTimeFromString("2022-04-03T11:56:45.015Z"),
                        Before: types.MustTimeFromString("2022-07-31T16:08:22.625Z"),
                        Equals: &shared.AttributeValueList{
                            IntegerValues: []int64{
                                50588,
                                866383,
                                365496,
                            },
                            StringValues: []string{
                                "perferendis",
                                "fugiat",
                                "amet",
                                "aut",
                            },
                        },
                    },
                    Key: "cumque",
                },
                shared.Filter{
                    Condition: shared.Condition{
                        After: types.MustTimeFromString("2022-01-21T09:28:40.593Z"),
                        Before: types.MustTimeFromString("2021-07-02T12:00:47.197Z"),
                        Equals: &shared.AttributeValueList{
                            IntegerValues: []int64{
                                339404,
                            },
                            StringValues: []string{
                                "dignissimos",
                                "eaque",
                                "quis",
                            },
                        },
                    },
                    Key: "nesciunt",
                },
            },
            MaxResults: sdk.Int64(179490),
            NextToken: sdk.String("perferendis"),
        },
        XAmzAlgorithm: sdk.String("dolores"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("quam"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("hic"),
        MaxResults: sdk.String("recusandae"),
        NextToken: sdk.String("omnis"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIncidentRecordsOutput != nil {
        // handle response
    }
}
```

## ListRelatedItems

List all related items for an incident record.

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
    res, err := s.SDK.ListRelatedItems(ctx, operations.ListRelatedItemsRequest{
        RequestBody: operations.ListRelatedItemsRequestBody{
            IncidentRecordArn: "facilis",
            MaxResults: sdk.Int64(596656),
            NextToken: sdk.String("voluptatem"),
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("error"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("occaecati"),
        XAmzSignedHeaders: sdk.String("rerum"),
        MaxResults: sdk.String("adipisci"),
        NextToken: sdk.String("asperiores"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListRelatedItemsOutput != nil {
        // handle response
    }
}
```

## ListReplicationSets

Lists details about the replication set configured in your account. 

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
    res, err := s.SDK.ListReplicationSets(ctx, operations.ListReplicationSetsRequest{
        RequestBody: operations.ListReplicationSetsRequestBody{
            MaxResults: sdk.Int64(934214),
            NextToken: sdk.String("modi"),
        },
        XAmzAlgorithm: sdk.String("iste"),
        XAmzContentSha256: sdk.String("dolorum"),
        XAmzCredential: sdk.String("deleniti"),
        XAmzDate: sdk.String("pariatur"),
        XAmzSecurityToken: sdk.String("provident"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("libero"),
        MaxResults: sdk.String("delectus"),
        NextToken: sdk.String("quaerat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListReplicationSetsOutput != nil {
        // handle response
    }
}
```

## ListResponsePlans

Lists all response plans in your account.

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
    res, err := s.SDK.ListResponsePlans(ctx, operations.ListResponsePlansRequest{
        RequestBody: operations.ListResponsePlansRequestBody{
            MaxResults: sdk.Int64(554242),
            NextToken: sdk.String("aliquid"),
        },
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("ipsum"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("excepturi"),
        MaxResults: sdk.String("cum"),
        NextToken: sdk.String("voluptate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListResponsePlansOutput != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists the tags that are attached to the specified response plan.

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
    res, err := s.SDK.ListTagsForResource(ctx, operations.ListTagsForResourceRequest{
        XAmzAlgorithm: sdk.String("dignissimos"),
        XAmzContentSha256: sdk.String("reiciendis"),
        XAmzCredential: sdk.String("amet"),
        XAmzDate: sdk.String("dolorum"),
        XAmzSecurityToken: sdk.String("numquam"),
        XAmzSignature: sdk.String("veritatis"),
        XAmzSignedHeaders: sdk.String("ipsa"),
        ResourceArn: "ipsa",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTimelineEvents

Lists timeline events for the specified incident record.

### Example Usage

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
    res, err := s.SDK.ListTimelineEvents(ctx, operations.ListTimelineEventsRequest{
        RequestBody: operations.ListTimelineEventsRequestBody{
            Filters: []shared.Filter{
                shared.Filter{
                    Condition: shared.Condition{
                        After: types.MustTimeFromString("2022-09-09T04:40:04.540Z"),
                        Before: types.MustTimeFromString("2020-11-29T12:05:35.198Z"),
                        Equals: &shared.AttributeValueList{
                            IntegerValues: []int64{
                                377752,
                                617658,
                                179603,
                                542499,
                            },
                            StringValues: []string{
                                "fugiat",
                            },
                        },
                    },
                    Key: "ab",
                },
                shared.Filter{
                    Condition: shared.Condition{
                        After: types.MustTimeFromString("2021-08-23T01:02:18.527Z"),
                        Before: types.MustTimeFromString("2022-07-19T09:36:55.923Z"),
                        Equals: &shared.AttributeValueList{
                            IntegerValues: []int64{
                                536579,
                                607045,
                                896672,
                            },
                            StringValues: []string{
                                "asperiores",
                                "nihil",
                                "ipsum",
                            },
                        },
                    },
                    Key: "voluptate",
                },
            },
            IncidentRecordArn: "id",
            MaxResults: sdk.Int64(906418),
            NextToken: sdk.String("eius"),
            SortBy: operations.ListTimelineEventsRequestBodySortByEnumEventTime.ToPointer(),
            SortOrder: operations.ListTimelineEventsRequestBodySortOrderEnumAscending.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("perferendis"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("ad"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("suscipit"),
        MaxResults: sdk.String("deserunt"),
        NextToken: sdk.String("provident"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTimelineEventsOutput != nil {
        // handle response
    }
}
```

## PutResourcePolicy

Adds a resource policy to the specified response plan. The resource policy is used to share the response plan using Resource Access Manager (RAM). For more information about cross-account sharing, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/incident-manager-cross-account-cross-region.html">Cross-Region and cross-account incident management</a>.

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
    res, err := s.SDK.PutResourcePolicy(ctx, operations.PutResourcePolicyRequest{
        RequestBody: operations.PutResourcePolicyRequestBody{
            Policy: "minima",
            ResourceArn: "repellendus",
        },
        XAmzAlgorithm: sdk.String("totam"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("alias"),
        XAmzDate: sdk.String("at"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("tempora"),
        XAmzSignedHeaders: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutResourcePolicyOutput != nil {
        // handle response
    }
}
```

## StartIncident

Used to start an incident from CloudWatch alarms, EventBridge events, or manually. 

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/types"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Hmac: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.SDK.StartIncident(ctx, operations.StartIncidentRequest{
        RequestBody: operations.StartIncidentRequestBody{
            ClientToken: sdk.String("quod"),
            Impact: sdk.Int64(885338),
            RelatedItems: []shared.RelatedItem{
                shared.RelatedItem{
                    GeneratedID: sdk.String("dolorum"),
                    Identifier: shared.ItemIdentifier{
                        Type: shared.ItemTypeEnumTask,
                        Value: shared.ItemValue{
                            Arn: sdk.String("esse"),
                            MetricDefinition: sdk.String("harum"),
                            PagerDutyIncidentDetail: &shared.PagerDutyIncidentDetail{
                                AutoResolve: sdk.Bool(false),
                                ID: "73cf3be4-53f8-470b-b26b-5a73429cdb1a",
                                SecretID: sdk.String("totam"),
                            },
                            URL: sdk.String("incidunt"),
                        },
                    },
                    Title: sdk.String("Mr."),
                },
            },
            ResponsePlanArn: "dolores",
            Title: sdk.String("Miss"),
            TriggerDetails: &operations.StartIncidentRequestBodyTriggerDetails{
                RawData: sdk.String("facilis"),
                Source: sdk.String("aliquid"),
                Timestamp: types.MustTimeFromString("2022-06-08T14:54:33.206Z"),
                TriggerArn: sdk.String("temporibus"),
            },
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("neque"),
        XAmzCredential: sdk.String("fugit"),
        XAmzDate: sdk.String("magni"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("sunt"),
        XAmzSignedHeaders: sdk.String("ullam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StartIncidentOutput != nil {
        // handle response
    }
}
```

## TagResource

Adds a tag to a response plan.

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            Tags: map[string]string{
                "hic": "voluptatem",
                "cumque": "soluta",
                "nobis": "et",
            },
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("veritatis"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
        ResourceArn: "aperiam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TagResourceResponse != nil {
        // handle response
    }
}
```

## UntagResource

Removes a tag from a resource.

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
    res, err := s.SDK.UntagResource(ctx, operations.UntagResourceRequest{
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("dolorem"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("adipisci"),
        XAmzSignature: sdk.String("dolorum"),
        XAmzSignedHeaders: sdk.String("architecto"),
        ResourceArn: "quae",
        TagKeys: []string{
            "quas",
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateDeletionProtection

Update deletion protection to either allow or deny deletion of the final Region in a replication set.

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
    res, err := s.SDK.UpdateDeletionProtection(ctx, operations.UpdateDeletionProtectionRequest{
        RequestBody: operations.UpdateDeletionProtectionRequestBody{
            Arn: "itaque",
            ClientToken: sdk.String("consequatur"),
            DeletionProtected: false,
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("repellendus"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("doloribus"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("facilis"),
        XAmzSignedHeaders: sdk.String("cupiditate"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateDeletionProtectionOutput != nil {
        // handle response
    }
}
```

## UpdateIncidentRecord

Update the details of an incident record. You can use this operation to update an incident record from the defined chat channel. For more information about using actions in chat channels, see <a href="https://docs.aws.amazon.com/incident-manager/latest/userguide/chat.html#chat-interact">Interacting through chat</a>.

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
    res, err := s.SDK.UpdateIncidentRecord(ctx, operations.UpdateIncidentRecordRequest{
        RequestBody: operations.UpdateIncidentRecordRequestBody{
            Arn: "qui",
            ChatChannel: &operations.UpdateIncidentRecordRequestBodyChatChannel{
                ChatbotSns: []string{
                    "laudantium",
                },
                Empty: map[string]interface{}{
                    "occaecati": "voluptatibus",
                    "quisquam": "vero",
                },
            },
            ClientToken: sdk.String("omnis"),
            Impact: sdk.Int64(338159),
            NotificationTargets: []shared.NotificationTargetItem{
                shared.NotificationTargetItem{
                    SnsTopicArn: sdk.String("delectus"),
                },
            },
            Status: operations.UpdateIncidentRecordRequestBodyStatusEnumOpen.ToPointer(),
            Summary: sdk.String("consectetur"),
            Title: sdk.String("Dr."),
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("distinctio"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("similique"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateIncidentRecordOutput != nil {
        // handle response
    }
}
```

## UpdateRelatedItems

Add or remove related items from the related items tab of an incident record.

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
    res, err := s.SDK.UpdateRelatedItems(ctx, operations.UpdateRelatedItemsRequest{
        RequestBody: operations.UpdateRelatedItemsRequestBody{
            ClientToken: sdk.String("facilis"),
            IncidentRecordArn: "vero",
            RelatedItemsUpdate: operations.UpdateRelatedItemsRequestBodyRelatedItemsUpdate{
                ItemToAdd: &shared.RelatedItem{
                    GeneratedID: sdk.String("ducimus"),
                    Identifier: shared.ItemIdentifier{
                        Type: shared.ItemTypeEnumMetric,
                        Value: shared.ItemValue{
                            Arn: sdk.String("quibusdam"),
                            MetricDefinition: sdk.String("illum"),
                            PagerDutyIncidentDetail: &shared.PagerDutyIncidentDetail{
                                AutoResolve: sdk.Bool(false),
                                ID: "39c0f5d2-cff7-4c70-a456-26d436813f16",
                                SecretID: sdk.String("nulla"),
                            },
                            URL: sdk.String("excepturi"),
                        },
                    },
                    Title: sdk.String("Dr."),
                },
                ItemToRemove: &shared.ItemIdentifier{
                    Type: shared.ItemTypeEnumParent,
                    Value: shared.ItemValue{
                        Arn: sdk.String("sapiente"),
                        MetricDefinition: sdk.String("quisquam"),
                        PagerDutyIncidentDetail: &shared.PagerDutyIncidentDetail{
                            AutoResolve: sdk.Bool(false),
                            ID: "e6c55614-6c3e-4250-bb00-8c42e141aac3",
                            SecretID: sdk.String("eum"),
                        },
                        URL: sdk.String("autem"),
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("nobis"),
        XAmzContentSha256: sdk.String("quas"),
        XAmzCredential: sdk.String("assumenda"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("libero"),
        XAmzSignedHeaders: sdk.String("quasi"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateRelatedItemsOutput != nil {
        // handle response
    }
}
```

## UpdateReplicationSet

Add or delete Regions from your replication set.

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
    res, err := s.SDK.UpdateReplicationSet(ctx, operations.UpdateReplicationSetRequest{
        RequestBody: operations.UpdateReplicationSetRequestBody{
            Actions: []shared.UpdateReplicationSetAction{
                shared.UpdateReplicationSetAction{
                    AddRegionAction: &shared.AddRegionAction{
                        RegionName: "numquam",
                        SseKmsKeyID: sdk.String("explicabo"),
                    },
                    DeleteRegionAction: &shared.DeleteRegionAction{
                        RegionName: "provident",
                    },
                },
                shared.UpdateReplicationSetAction{
                    AddRegionAction: &shared.AddRegionAction{
                        RegionName: "ipsa",
                        SseKmsKeyID: sdk.String("molestiae"),
                    },
                    DeleteRegionAction: &shared.DeleteRegionAction{
                        RegionName: "magnam",
                    },
                },
            },
            Arn: "odio",
            ClientToken: sdk.String("eius"),
        },
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("esse"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("reprehenderit"),
        XAmzSignature: sdk.String("quidem"),
        XAmzSignedHeaders: sdk.String("fugiat"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateReplicationSetOutput != nil {
        // handle response
    }
}
```

## UpdateResponsePlan

Updates the specified response plan.

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
    res, err := s.SDK.UpdateResponsePlan(ctx, operations.UpdateResponsePlanRequest{
        RequestBody: operations.UpdateResponsePlanRequestBody{
            Actions: []shared.Action{
                shared.Action{
                    SsmAutomation: &shared.SsmAutomation{
                        DocumentName: "eum",
                        DocumentVersion: sdk.String("suscipit"),
                        DynamicParameters: map[string]shared.DynamicSsmParameterValue{
                            "eos": shared.DynamicSsmParameterValue{
                                Variable: shared.VariableTypeEnumInvolvedResources.ToPointer(),
                            },
                            "quisquam": shared.DynamicSsmParameterValue{
                                Variable: shared.VariableTypeEnumIncidentRecordArn.ToPointer(),
                            },
                            "ipsa": shared.DynamicSsmParameterValue{
                                Variable: shared.VariableTypeEnumInvolvedResources.ToPointer(),
                            },
                            "quidem": shared.DynamicSsmParameterValue{
                                Variable: shared.VariableTypeEnumIncidentRecordArn.ToPointer(),
                            },
                        },
                        Parameters: map[string][]string{
                            "illum": []string{
                                "fuga",
                                "eius",
                                "eos",
                                "voluptas",
                            },
                            "ab": []string{
                                "consequatur",
                                "tempora",
                                "debitis",
                            },
                            "ipsam": []string{
                                "sequi",
                            },
                            "quo": []string{
                                "recusandae",
                                "aperiam",
                            },
                        },
                        RoleArn: "distinctio",
                        TargetAccount: shared.SsmTargetAccountEnumImpactedAccount.ToPointer(),
                    },
                },
                shared.Action{
                    SsmAutomation: &shared.SsmAutomation{
                        DocumentName: "dignissimos",
                        DocumentVersion: sdk.String("inventore"),
                        DynamicParameters: map[string]shared.DynamicSsmParameterValue{
                            "totam": shared.DynamicSsmParameterValue{
                                Variable: shared.VariableTypeEnumInvolvedResources.ToPointer(),
                            },
                            "aliquam": shared.DynamicSsmParameterValue{
                                Variable: shared.VariableTypeEnumIncidentRecordArn.ToPointer(),
                            },
                        },
                        Parameters: map[string][]string{
                            "commodi": []string{
                                "dolores",
                                "deserunt",
                                "molestiae",
                                "accusantium",
                            },
                            "porro": []string{
                                "quas",
                                "praesentium",
                            },
                            "consequuntur": []string{
                                "fugit",
                                "fuga",
                                "mollitia",
                            },
                        },
                        RoleArn: "incidunt",
                        TargetAccount: shared.SsmTargetAccountEnumImpactedAccount.ToPointer(),
                    },
                },
            },
            Arn: "explicabo",
            ChatChannel: &operations.UpdateResponsePlanRequestBodyChatChannel{
                ChatbotSns: []string{
                    "nisi",
                    "fugit",
                },
                Empty: map[string]interface{}{
                    "consequuntur": "ratione",
                    "explicabo": "saepe",
                    "occaecati": "atque",
                    "et": "esse",
                },
            },
            ClientToken: sdk.String("eveniet"),
            DisplayName: sdk.String("accusamus"),
            Engagements: []string{
                "esse",
            },
            IncidentTemplateDedupeString: sdk.String("quod"),
            IncidentTemplateImpact: sdk.Int64(724168),
            IncidentTemplateNotificationTargets: []shared.NotificationTargetItem{
                shared.NotificationTargetItem{
                    SnsTopicArn: sdk.String("aliquid"),
                },
                shared.NotificationTargetItem{
                    SnsTopicArn: sdk.String("quasi"),
                },
                shared.NotificationTargetItem{
                    SnsTopicArn: sdk.String("saepe"),
                },
                shared.NotificationTargetItem{
                    SnsTopicArn: sdk.String("vel"),
                },
            },
            IncidentTemplateSummary: sdk.String("harum"),
            IncidentTemplateTags: map[string]string{
                "rerum": "occaecati",
                "minima": "distinctio",
            },
            IncidentTemplateTitle: sdk.String("eligendi"),
            Integrations: []shared.Integration{
                shared.Integration{
                    PagerDutyConfiguration: &shared.PagerDutyConfiguration{
                        Name: "Randolph Fisher",
                        PagerDutyIncidentConfiguration: shared.PagerDutyIncidentConfiguration{
                            ServiceID: "consequatur",
                        },
                        SecretID: "minus",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("blanditiis"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("a"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateResponsePlanOutput != nil {
        // handle response
    }
}
```

## UpdateTimelineEvent

Updates a timeline event. You can update events of type <code>Custom Event</code>.

### Example Usage

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
    res, err := s.SDK.UpdateTimelineEvent(ctx, operations.UpdateTimelineEventRequest{
        RequestBody: operations.UpdateTimelineEventRequestBody{
            ClientToken: sdk.String("nulla"),
            EventData: sdk.String("quas"),
            EventID: "esse",
            EventReferences: []shared.EventReference{
                shared.EventReference{
                    RelatedItemID: sdk.String("a"),
                    Resource: sdk.String("error"),
                },
            },
            EventTime: types.MustTimeFromString("2021-04-10T23:50:37.359Z"),
            EventType: sdk.String("possimus"),
            IncidentRecordArn: "quia",
        },
        XAmzAlgorithm: sdk.String("eveniet"),
        XAmzContentSha256: sdk.String("asperiores"),
        XAmzCredential: sdk.String("facere"),
        XAmzDate: sdk.String("veritatis"),
        XAmzSecurityToken: sdk.String("consequuntur"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("similique"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTimelineEventOutput != nil {
        // handle response
    }
}
```
