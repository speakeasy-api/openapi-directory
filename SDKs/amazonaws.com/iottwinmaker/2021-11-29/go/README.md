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
