# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/iottwinmaker/2021-11-29/go
```
<!-- End SDK Installation -->

## SDK Example Usage
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

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `BatchPutPropertyValues` - Sets values for multiple time series properties.
* `CreateComponentType` - Creates a component type.
* `CreateEntity` - Creates an entity.
* `CreateScene` - Creates a scene.
* `CreateSyncJob` - This action creates a SyncJob.
* `CreateWorkspace` - Creates a workplace.
* `DeleteComponentType` - Deletes a component type.
* `DeleteEntity` - Deletes an entity.
* `DeleteScene` - Deletes a scene.
* `DeleteSyncJob` - Delete the SyncJob.
* `DeleteWorkspace` - Deletes a workspace.
* `ExecuteQuery` - Run queries to access information from your knowledge graph of entities within individual workspaces.
* `GetComponentType` - Retrieves information about a component type.
* `GetEntity` - Retrieves information about an entity.
* `GetPricingPlan` - Gets the pricing plan.
* `GetPropertyValue` - <p>Gets the property values for a component, component type, entity, or workspace.</p> <p>You must specify a value for either <code>componentName</code>, <code>componentTypeId</code>, <code>entityId</code>, or <code>workspaceId</code>.</p>
* `GetPropertyValueHistory` - <p>Retrieves information about the history of a time series property value for a component, component type, entity, or workspace.</p> <p>You must specify a value for <code>workspaceId</code>. For entity-specific queries, specify values for <code>componentName</code> and <code>entityId</code>. For cross-entity quries, specify a value for <code>componentTypeId</code>.</p>
* `GetScene` - Retrieves information about a scene.
* `GetSyncJob` - Gets the SyncJob.
* `GetWorkspace` - Retrieves information about a workspace.
* `ListComponentTypes` - Lists all component types in a workspace.
* `ListEntities` - Lists all entities in a workspace.
* `ListScenes` - Lists all scenes in a workspace.
* `ListSyncJobs` - List all SyncJobs.
* `ListSyncResources` - Lists the sync resources.
* `ListTagsForResource` - Lists all tags associated with a resource.
* `ListWorkspaces` - Retrieves information about workspaces in the current account.
* `TagResource` - Adds tags to a resource.
* `UntagResource` - Removes tags from a resource.
* `UpdateComponentType` - Updates information in a component type.
* `UpdateEntity` - Updates an entity.
* `UpdatePricingPlan` - Update the pricing plan.
* `UpdateScene` - Updates a scene.
* `UpdateWorkspace` - Updates a workspace.
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
