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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

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

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
