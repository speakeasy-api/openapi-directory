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

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [BatchPutPropertyValues](docs/sdk/README.md#batchputpropertyvalues) - Sets values for multiple time series properties.
* [CreateComponentType](docs/sdk/README.md#createcomponenttype) - Creates a component type.
* [CreateEntity](docs/sdk/README.md#createentity) - Creates an entity.
* [CreateScene](docs/sdk/README.md#createscene) - Creates a scene.
* [CreateSyncJob](docs/sdk/README.md#createsyncjob) - This action creates a SyncJob.
* [CreateWorkspace](docs/sdk/README.md#createworkspace) - Creates a workplace.
* [DeleteComponentType](docs/sdk/README.md#deletecomponenttype) - Deletes a component type.
* [DeleteEntity](docs/sdk/README.md#deleteentity) - Deletes an entity.
* [DeleteScene](docs/sdk/README.md#deletescene) - Deletes a scene.
* [DeleteSyncJob](docs/sdk/README.md#deletesyncjob) - Delete the SyncJob.
* [DeleteWorkspace](docs/sdk/README.md#deleteworkspace) - Deletes a workspace.
* [ExecuteQuery](docs/sdk/README.md#executequery) - Run queries to access information from your knowledge graph of entities within individual workspaces.
* [GetComponentType](docs/sdk/README.md#getcomponenttype) - Retrieves information about a component type.
* [GetEntity](docs/sdk/README.md#getentity) - Retrieves information about an entity.
* [GetPricingPlan](docs/sdk/README.md#getpricingplan) - Gets the pricing plan.
* [GetPropertyValue](docs/sdk/README.md#getpropertyvalue) - <p>Gets the property values for a component, component type, entity, or workspace.</p> <p>You must specify a value for either <code>componentName</code>, <code>componentTypeId</code>, <code>entityId</code>, or <code>workspaceId</code>.</p>
* [GetPropertyValueHistory](docs/sdk/README.md#getpropertyvaluehistory) - <p>Retrieves information about the history of a time series property value for a component, component type, entity, or workspace.</p> <p>You must specify a value for <code>workspaceId</code>. For entity-specific queries, specify values for <code>componentName</code> and <code>entityId</code>. For cross-entity quries, specify a value for <code>componentTypeId</code>.</p>
* [GetScene](docs/sdk/README.md#getscene) - Retrieves information about a scene.
* [GetSyncJob](docs/sdk/README.md#getsyncjob) - Gets the SyncJob.
* [GetWorkspace](docs/sdk/README.md#getworkspace) - Retrieves information about a workspace.
* [ListComponentTypes](docs/sdk/README.md#listcomponenttypes) - Lists all component types in a workspace.
* [ListEntities](docs/sdk/README.md#listentities) - Lists all entities in a workspace.
* [ListScenes](docs/sdk/README.md#listscenes) - Lists all scenes in a workspace.
* [ListSyncJobs](docs/sdk/README.md#listsyncjobs) - List all SyncJobs.
* [ListSyncResources](docs/sdk/README.md#listsyncresources) - Lists the sync resources.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Lists all tags associated with a resource.
* [ListWorkspaces](docs/sdk/README.md#listworkspaces) - Retrieves information about workspaces in the current account.
* [TagResource](docs/sdk/README.md#tagresource) - Adds tags to a resource.
* [UntagResource](docs/sdk/README.md#untagresource) - Removes tags from a resource.
* [UpdateComponentType](docs/sdk/README.md#updatecomponenttype) - Updates information in a component type.
* [UpdateEntity](docs/sdk/README.md#updateentity) - Updates an entity.
* [UpdatePricingPlan](docs/sdk/README.md#updatepricingplan) - Update the pricing plan.
* [UpdateScene](docs/sdk/README.md#updatescene) - Updates a scene.
* [UpdateWorkspace](docs/sdk/README.md#updateworkspace) - Updates a workspace.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
