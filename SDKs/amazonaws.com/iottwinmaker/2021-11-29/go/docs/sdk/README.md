# SDK

## Overview

IoT TwinMaker is a service with which you can build operational digital twins of physical systems. IoT TwinMaker overlays measurements and analysis from real-world sensors, cameras, and enterprise applications so you can create data visualizations to monitor your physical factory, building, or industrial plant. You can use this real-world data to monitor operations and diagnose and repair errors.

Amazon Web Services documentation
<https://docs.aws.amazon.com/iottwinmaker/>
### Available Operations

* [BatchPutPropertyValues](#batchputpropertyvalues) - Sets values for multiple time series properties.
* [CreateComponentType](#createcomponenttype) - Creates a component type.
* [CreateEntity](#createentity) - Creates an entity.
* [CreateScene](#createscene) - Creates a scene.
* [CreateSyncJob](#createsyncjob) - This action creates a SyncJob.
* [CreateWorkspace](#createworkspace) - Creates a workplace.
* [DeleteComponentType](#deletecomponenttype) - Deletes a component type.
* [DeleteEntity](#deleteentity) - Deletes an entity.
* [DeleteScene](#deletescene) - Deletes a scene.
* [DeleteSyncJob](#deletesyncjob) - Delete the SyncJob.
* [DeleteWorkspace](#deleteworkspace) - Deletes a workspace.
* [ExecuteQuery](#executequery) - Run queries to access information from your knowledge graph of entities within individual workspaces.
* [GetComponentType](#getcomponenttype) - Retrieves information about a component type.
* [GetEntity](#getentity) - Retrieves information about an entity.
* [GetPricingPlan](#getpricingplan) - Gets the pricing plan.
* [GetPropertyValue](#getpropertyvalue) - <p>Gets the property values for a component, component type, entity, or workspace.</p> <p>You must specify a value for either <code>componentName</code>, <code>componentTypeId</code>, <code>entityId</code>, or <code>workspaceId</code>.</p>
* [GetPropertyValueHistory](#getpropertyvaluehistory) - <p>Retrieves information about the history of a time series property value for a component, component type, entity, or workspace.</p> <p>You must specify a value for <code>workspaceId</code>. For entity-specific queries, specify values for <code>componentName</code> and <code>entityId</code>. For cross-entity quries, specify a value for <code>componentTypeId</code>.</p>
* [GetScene](#getscene) - Retrieves information about a scene.
* [GetSyncJob](#getsyncjob) - Gets the SyncJob.
* [GetWorkspace](#getworkspace) - Retrieves information about a workspace.
* [ListComponentTypes](#listcomponenttypes) - Lists all component types in a workspace.
* [ListEntities](#listentities) - Lists all entities in a workspace.
* [ListScenes](#listscenes) - Lists all scenes in a workspace.
* [ListSyncJobs](#listsyncjobs) - List all SyncJobs.
* [ListSyncResources](#listsyncresources) - Lists the sync resources.
* [ListTagsForResource](#listtagsforresource) - Lists all tags associated with a resource.
* [ListWorkspaces](#listworkspaces) - Retrieves information about workspaces in the current account.
* [TagResource](#tagresource) - Adds tags to a resource.
* [UntagResource](#untagresource) - Removes tags from a resource.
* [UpdateComponentType](#updatecomponenttype) - Updates information in a component type.
* [UpdateEntity](#updateentity) - Updates an entity.
* [UpdatePricingPlan](#updatepricingplan) - Update the pricing plan.
* [UpdateScene](#updatescene) - Updates a scene.
* [UpdateWorkspace](#updateworkspace) - Updates a workspace.

## BatchPutPropertyValues

Sets values for multiple time series properties.

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
    res, err := s.SDK.BatchPutPropertyValues(ctx, operations.BatchPutPropertyValuesRequest{
        RequestBody: operations.BatchPutPropertyValuesRequestBody{
            Entries: []shared.PropertyValueEntry{
                shared.PropertyValueEntry{
                    EntityPropertyReference: shared.EntityPropertyReference{
                        ComponentName: sdk.String("temporibus"),
                        EntityID: sdk.String("laborum"),
                        ExternalIDProperty: map[string]string{
                            "reiciendis": "voluptatibus",
                        },
                        PropertyName: "vero",
                    },
                    PropertyValues: []shared.PropertyValue{
                        shared.PropertyValue{
                            Time: sdk.String("praesentium"),
                            Timestamp: types.MustTimeFromString("2022-10-31T23:49:03.388Z"),
                            Value: shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(6048.46),
                                Expression: sdk.String("voluptate"),
                                IntegerValue: sdk.Int64(739264),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(39187),
                                MapValue: map[string]shared.DataValue{
                                    "ut": shared.DataValue{},
                                    "maiores": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("dicta"),
                                    TargetEntityID: sdk.String("corporis"),
                                },
                                StringValue: sdk.String("dolore"),
                            },
                        },
                        shared.PropertyValue{
                            Time: sdk.String("iusto"),
                            Timestamp: types.MustTimeFromString("2022-04-24T15:19:40.519Z"),
                            Value: shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(3179.83),
                                Expression: sdk.String("accusamus"),
                                IntegerValue: sdk.Int64(414263),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(64147),
                                MapValue: map[string]shared.DataValue{
                                    "quidem": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("molestias"),
                                    TargetEntityID: sdk.String("excepturi"),
                                },
                                StringValue: sdk.String("pariatur"),
                            },
                        },
                    },
                },
                shared.PropertyValueEntry{
                    EntityPropertyReference: shared.EntityPropertyReference{
                        ComponentName: sdk.String("modi"),
                        EntityID: sdk.String("praesentium"),
                        ExternalIDProperty: map[string]string{
                            "voluptates": "quasi",
                            "repudiandae": "sint",
                            "veritatis": "itaque",
                        },
                        PropertyName: "incidunt",
                    },
                    PropertyValues: []shared.PropertyValue{
                        shared.PropertyValue{
                            Time: sdk.String("consequatur"),
                            Timestamp: types.MustTimeFromString("2021-04-26T02:10:00.226Z"),
                            Value: shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(1317.97),
                                Expression: sdk.String("deserunt"),
                                IntegerValue: sdk.Int64(716327),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(289406),
                                MapValue: map[string]shared.DataValue{
                                    "qui": shared.DataValue{},
                                    "aliquid": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("cupiditate"),
                                    TargetEntityID: sdk.String("quos"),
                                },
                                StringValue: sdk.String("perferendis"),
                            },
                        },
                        shared.PropertyValue{
                            Time: sdk.String("magni"),
                            Timestamp: types.MustTimeFromString("2021-11-22T01:26:35.048Z"),
                            Value: shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(46.95),
                                Expression: sdk.String("fugit"),
                                IntegerValue: sdk.Int64(677817),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(270008),
                                MapValue: map[string]shared.DataValue{
                                    "tempore": shared.DataValue{},
                                    "labore": shared.DataValue{},
                                    "delectus": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("eum"),
                                    TargetEntityID: sdk.String("non"),
                                },
                                StringValue: sdk.String("eligendi"),
                            },
                        },
                    },
                },
                shared.PropertyValueEntry{
                    EntityPropertyReference: shared.EntityPropertyReference{
                        ComponentName: sdk.String("sint"),
                        EntityID: sdk.String("aliquid"),
                        ExternalIDProperty: map[string]string{
                            "necessitatibus": "sint",
                            "officia": "dolor",
                            "debitis": "a",
                        },
                        PropertyName: "dolorum",
                    },
                    PropertyValues: []shared.PropertyValue{
                        shared.PropertyValue{
                            Time: sdk.String("in"),
                            Timestamp: types.MustTimeFromString("2020-01-25T11:09:22.009Z"),
                            Value: shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(6994.79),
                                Expression: sdk.String("dicta"),
                                IntegerValue: sdk.Int64(297437),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(813798),
                                MapValue: map[string]shared.DataValue{
                                    "aliquid": shared.DataValue{},
                                    "laborum": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("accusamus"),
                                    TargetEntityID: sdk.String("non"),
                                },
                                StringValue: sdk.String("occaecati"),
                            },
                        },
                        shared.PropertyValue{
                            Time: sdk.String("enim"),
                            Timestamp: types.MustTimeFromString("2020-02-08T20:51:42.354Z"),
                            Value: shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(6925.32),
                                Expression: sdk.String("provident"),
                                IntegerValue: sdk.Int64(725255),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(501324),
                                MapValue: map[string]shared.DataValue{
                                    "sapiente": shared.DataValue{},
                                    "amet": shared.DataValue{},
                                    "deserunt": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("nisi"),
                                    TargetEntityID: sdk.String("vel"),
                                },
                                StringValue: sdk.String("natus"),
                            },
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("omnis"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("perferendis"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("id"),
        WorkspaceID: "labore",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchPutPropertyValuesResponse != nil {
        // handle response
    }
}
```

## CreateComponentType

Creates a component type.

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
    res, err := s.SDK.CreateComponentType(ctx, operations.CreateComponentTypeRequest{
        RequestBody: operations.CreateComponentTypeRequestBody{
            ComponentTypeName: sdk.String("labore"),
            Description: sdk.String("suscipit"),
            ExtendsFrom: []string{
                "nobis",
                "eum",
                "vero",
            },
            Functions: map[string]shared.FunctionRequest{
                "architecto": shared.FunctionRequest{
                    ImplementedBy: &shared.DataConnector{
                        IsNative: sdk.Bool(false),
                        Lambda: &shared.LambdaFunction{
                            Arn: "magnam",
                        },
                    },
                    RequiredProperties: []string{
                        "excepturi",
                    },
                    Scope: shared.ScopeEnumEntity.ToPointer(),
                },
            },
            IsSingleton: sdk.Bool(false),
            PropertyDefinitions: map[string]shared.PropertyDefinitionRequest{
                "quos": shared.PropertyDefinitionRequest{
                    Configuration: map[string]string{
                        "accusantium": "mollitia",
                        "reiciendis": "mollitia",
                        "ad": "eum",
                    },
                    DataType: &shared.DataType{
                        AllowedValues: []shared.DataValue{
                            shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(8965.47),
                                Expression: sdk.String("odit"),
                                IntegerValue: sdk.Int64(367562),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(435865),
                                MapValue: map[string]shared.DataValue{
                                    "debitis": shared.DataValue{},
                                    "eius": shared.DataValue{},
                                    "maxime": shared.DataValue{},
                                    "deleniti": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("facilis"),
                                    TargetEntityID: sdk.String("in"),
                                },
                                StringValue: sdk.String("architecto"),
                            },
                        },
                        NestedType: &shared.DataType{},
                        Relationship: &shared.Relationship{
                            RelationshipType: sdk.String("architecto"),
                            TargetComponentTypeID: sdk.String("repudiandae"),
                        },
                        Type: shared.TypeEnumLong,
                        UnitOfMeasure: sdk.String("expedita"),
                    },
                    DefaultValue: &shared.DataValue{
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(4692.49),
                        Expression: sdk.String("repellat"),
                        IntegerValue: sdk.Int64(841140),
                        ListValue: []shared.DataValue{
                            shared.DataValue{},
                        },
                        LongValue: sdk.Int64(904648),
                        MapValue: map[string]shared.DataValue{
                            "accusantium": shared.DataValue{},
                            "consequuntur": shared.DataValue{},
                            "praesentium": shared.DataValue{},
                            "natus": shared.DataValue{},
                        },
                        RelationshipValue: &shared.RelationshipValue{
                            TargetComponentName: sdk.String("magni"),
                            TargetEntityID: sdk.String("sunt"),
                        },
                        StringValue: sdk.String("quo"),
                    },
                    DisplayName: sdk.String("illum"),
                    IsExternalID: sdk.Bool(false),
                    IsRequiredInEntity: sdk.Bool(false),
                    IsStoredExternally: sdk.Bool(false),
                    IsTimeSeries: sdk.Bool(false),
                },
                "pariatur": shared.PropertyDefinitionRequest{
                    Configuration: map[string]string{
                        "ea": "excepturi",
                        "odit": "ea",
                        "accusantium": "ab",
                        "maiores": "quidem",
                    },
                    DataType: &shared.DataType{
                        AllowedValues: []shared.DataValue{
                            shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(4535.43),
                                Expression: sdk.String("autem"),
                                IntegerValue: sdk.Int64(722056),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(866383),
                                MapValue: map[string]shared.DataValue{
                                    "voluptatibus": shared.DataValue{},
                                    "perferendis": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("fugiat"),
                                    TargetEntityID: sdk.String("amet"),
                                },
                                StringValue: sdk.String("aut"),
                            },
                            shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(7649.12),
                                Expression: sdk.String("corporis"),
                                IntegerValue: sdk.Int64(944124),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(749999),
                                MapValue: map[string]shared.DataValue{
                                    "quis": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("totam"),
                                    TargetEntityID: sdk.String("dignissimos"),
                                },
                                StringValue: sdk.String("eaque"),
                            },
                        },
                        NestedType: &shared.DataType{},
                        Relationship: &shared.Relationship{
                            RelationshipType: sdk.String("quis"),
                            TargetComponentTypeID: sdk.String("nesciunt"),
                        },
                        Type: shared.TypeEnumString,
                        UnitOfMeasure: sdk.String("perferendis"),
                    },
                    DefaultValue: &shared.DataValue{
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(1709.86),
                        Expression: sdk.String("minus"),
                        IntegerValue: sdk.Int64(463451),
                        ListValue: []shared.DataValue{
                            shared.DataValue{},
                        },
                        LongValue: sdk.Int64(874573),
                        MapValue: map[string]shared.DataValue{
                            "hic": shared.DataValue{},
                            "recusandae": shared.DataValue{},
                        },
                        RelationshipValue: &shared.RelationshipValue{
                            TargetComponentName: sdk.String("omnis"),
                            TargetEntityID: sdk.String("facilis"),
                        },
                        StringValue: sdk.String("perspiciatis"),
                    },
                    DisplayName: sdk.String("voluptatem"),
                    IsExternalID: sdk.Bool(false),
                    IsRequiredInEntity: sdk.Bool(false),
                    IsStoredExternally: sdk.Bool(false),
                    IsTimeSeries: sdk.Bool(false),
                },
                "porro": shared.PropertyDefinitionRequest{
                    Configuration: map[string]string{
                        "blanditiis": "error",
                    },
                    DataType: &shared.DataType{
                        AllowedValues: []shared.DataValue{
                            shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(5772.29),
                                Expression: sdk.String("rerum"),
                                IntegerValue: sdk.Int64(237893),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(934214),
                                MapValue: map[string]shared.DataValue{
                                    "iste": shared.DataValue{},
                                    "dolorum": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("deleniti"),
                                    TargetEntityID: sdk.String("pariatur"),
                                },
                                StringValue: sdk.String("provident"),
                            },
                        },
                        NestedType: &shared.DataType{},
                        Relationship: &shared.Relationship{
                            RelationshipType: sdk.String("nobis"),
                            TargetComponentTypeID: sdk.String("libero"),
                        },
                        Type: shared.TypeEnumMap,
                        UnitOfMeasure: sdk.String("quaerat"),
                    },
                    DefaultValue: &shared.DataValue{
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(5542.42),
                        Expression: sdk.String("aliquid"),
                        IntegerValue: sdk.Int64(212390),
                        ListValue: []shared.DataValue{
                            shared.DataValue{},
                        },
                        LongValue: sdk.Int64(222443),
                        MapValue: map[string]shared.DataValue{
                            "ipsum": shared.DataValue{},
                        },
                        RelationshipValue: &shared.RelationshipValue{
                            TargetComponentName: sdk.String("hic"),
                            TargetEntityID: sdk.String("excepturi"),
                        },
                        StringValue: sdk.String("cum"),
                    },
                    DisplayName: sdk.String("voluptate"),
                    IsExternalID: sdk.Bool(false),
                    IsRequiredInEntity: sdk.Bool(false),
                    IsStoredExternally: sdk.Bool(false),
                    IsTimeSeries: sdk.Bool(false),
                },
            },
            PropertyGroups: map[string]shared.PropertyGroupRequest{
                "reiciendis": shared.PropertyGroupRequest{
                    GroupType: shared.GroupTypeEnumTabular.ToPointer(),
                    PropertyNames: []string{
                        "dolorum",
                    },
                },
                "numquam": shared.PropertyGroupRequest{
                    GroupType: shared.GroupTypeEnumTabular.ToPointer(),
                    PropertyNames: []string{
                        "ipsa",
                    },
                },
            },
            Tags: map[string]string{
                "iure": "odio",
            },
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("voluptatibus"),
        XAmzSecurityToken: sdk.String("voluptas"),
        XAmzSignature: sdk.String("natus"),
        XAmzSignedHeaders: sdk.String("eos"),
        ComponentTypeID: "atque",
        WorkspaceID: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateComponentTypeResponse != nil {
        // handle response
    }
}
```

## CreateEntity

Creates an entity.

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
    res, err := s.SDK.CreateEntity(ctx, operations.CreateEntityRequest{
        RequestBody: operations.CreateEntityRequestBody{
            Components: map[string]shared.ComponentRequest{
                "ab": shared.ComponentRequest{
                    ComponentTypeID: sdk.String("soluta"),
                    Description: sdk.String("dolorum"),
                    Properties: sdk.String("iusto"),
                    PropertyGroups: map[string]shared.ComponentPropertyGroupRequest{
                        "dolorum": shared.ComponentPropertyGroupRequest{
                            GroupType: shared.GroupTypeEnumTabular.ToPointer(),
                            PropertyNames: []string{
                                "omnis",
                                "necessitatibus",
                                "distinctio",
                            },
                            UpdateType: shared.PropertyGroupUpdateTypeEnumCreate.ToPointer(),
                        },
                        "nihil": shared.ComponentPropertyGroupRequest{
                            GroupType: shared.GroupTypeEnumTabular.ToPointer(),
                            PropertyNames: []string{
                                "voluptate",
                            },
                            UpdateType: shared.PropertyGroupUpdateTypeEnumDelete.ToPointer(),
                        },
                    },
                },
                "saepe": shared.ComponentRequest{
                    ComponentTypeID: sdk.String("eius"),
                    Description: sdk.String("aspernatur"),
                    Properties: sdk.String("perferendis"),
                    PropertyGroups: map[string]shared.ComponentPropertyGroupRequest{
                        "optio": shared.ComponentPropertyGroupRequest{
                            GroupType: shared.GroupTypeEnumTabular.ToPointer(),
                            PropertyNames: []string{
                                "ad",
                                "saepe",
                                "suscipit",
                                "deserunt",
                            },
                            UpdateType: shared.PropertyGroupUpdateTypeEnumDelete.ToPointer(),
                        },
                    },
                },
                "minima": shared.ComponentRequest{
                    ComponentTypeID: sdk.String("repellendus"),
                    Description: sdk.String("totam"),
                    Properties: sdk.String("similique"),
                    PropertyGroups: map[string]shared.ComponentPropertyGroupRequest{
                        "at": shared.ComponentPropertyGroupRequest{
                            GroupType: shared.GroupTypeEnumTabular.ToPointer(),
                            PropertyNames: []string{
                                "tempora",
                                "vel",
                            },
                            UpdateType: shared.PropertyGroupUpdateTypeEnumCreate.ToPointer(),
                        },
                    },
                },
                "officiis": shared.ComponentRequest{
                    ComponentTypeID: sdk.String("qui"),
                    Description: sdk.String("dolorum"),
                    Properties: sdk.String("a"),
                    PropertyGroups: map[string]shared.ComponentPropertyGroupRequest{
                        "harum": shared.ComponentPropertyGroupRequest{
                            GroupType: shared.GroupTypeEnumTabular.ToPointer(),
                            PropertyNames: []string{
                                "ipsum",
                                "quisquam",
                            },
                            UpdateType: shared.PropertyGroupUpdateTypeEnumCreate.ToPointer(),
                        },
                        "amet": shared.ComponentPropertyGroupRequest{
                            GroupType: shared.GroupTypeEnumTabular.ToPointer(),
                            PropertyNames: []string{
                                "accusamus",
                                "numquam",
                                "enim",
                            },
                            UpdateType: shared.PropertyGroupUpdateTypeEnumUpdate.ToPointer(),
                        },
                    },
                },
            },
            Description: sdk.String("sapiente"),
            EntityID: sdk.String("totam"),
            EntityName: "nihil",
            ParentEntityID: sdk.String("sit"),
            Tags: map[string]string{
                "neque": "sed",
                "vel": "libero",
                "voluptas": "deserunt",
            },
        },
        XAmzAlgorithm: sdk.String("quam"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("maxime"),
        XAmzSignedHeaders: sdk.String("pariatur"),
        WorkspaceID: "soluta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateEntityResponse != nil {
        // handle response
    }
}
```

## CreateScene

Creates a scene.

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
    res, err := s.SDK.CreateScene(ctx, operations.CreateSceneRequest{
        RequestBody: operations.CreateSceneRequestBody{
            Capabilities: []string{
                "laborum",
            },
            ContentLocation: "totam",
            Description: sdk.String("incidunt"),
            SceneID: "aspernatur",
            SceneMetadata: map[string]string{
                "distinctio": "facilis",
            },
            Tags: map[string]string{
                "quam": "molestias",
                "temporibus": "qui",
            },
        },
        XAmzAlgorithm: sdk.String("neque"),
        XAmzContentSha256: sdk.String("fugit"),
        XAmzCredential: sdk.String("magni"),
        XAmzDate: sdk.String("odio"),
        XAmzSecurityToken: sdk.String("sunt"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("nam"),
        WorkspaceID: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSceneResponse != nil {
        // handle response
    }
}
```

## CreateSyncJob

This action creates a SyncJob.

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
    res, err := s.SDK.CreateSyncJob(ctx, operations.CreateSyncJobRequest{
        RequestBody: operations.CreateSyncJobRequestBody{
            SyncRole: "voluptatem",
            Tags: map[string]string{
                "soluta": "nobis",
                "et": "saepe",
                "ipsum": "veritatis",
                "nobis": "quos",
            },
        },
        XAmzAlgorithm: sdk.String("tempore"),
        XAmzContentSha256: sdk.String("cupiditate"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("dolorem"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("labore"),
        SyncSource: "adipisci",
        WorkspaceID: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSyncJobResponse != nil {
        // handle response
    }
}
```

## CreateWorkspace

Creates a workplace.

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
    res, err := s.SDK.CreateWorkspace(ctx, operations.CreateWorkspaceRequest{
        RequestBody: operations.CreateWorkspaceRequestBody{
            Description: sdk.String("architecto"),
            Role: "quae",
            S3Location: "aut",
            Tags: map[string]string{
                "itaque": "consequatur",
                "est": "repellendus",
                "porro": "doloribus",
            },
        },
        XAmzAlgorithm: sdk.String("ut"),
        XAmzContentSha256: sdk.String("facilis"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("qui"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("odio"),
        WorkspaceID: "occaecati",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateWorkspaceResponse != nil {
        // handle response
    }
}
```

## DeleteComponentType

Deletes a component type.

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
    res, err := s.SDK.DeleteComponentType(ctx, operations.DeleteComponentTypeRequest{
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("quisquam"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("omnis"),
        XAmzSecurityToken: sdk.String("quis"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("delectus"),
        ComponentTypeID: "voluptate",
        WorkspaceID: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteComponentTypeResponse != nil {
        // handle response
    }
}
```

## DeleteEntity

Deletes an entity.

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
    res, err := s.SDK.DeleteEntity(ctx, operations.DeleteEntityRequest{
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("tenetur"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("hic"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("quod"),
        XAmzSignedHeaders: sdk.String("odio"),
        EntityID: "similique",
        IsRecursive: sdk.Bool(false),
        WorkspaceID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteEntityResponse != nil {
        // handle response
    }
}
```

## DeleteScene

Deletes a scene.

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
    res, err := s.SDK.DeleteScene(ctx, operations.DeleteSceneRequest{
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("dolore"),
        XAmzDate: sdk.String("quibusdam"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("natus"),
        SceneID: "impedit",
        WorkspaceID: "aut",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSceneResponse != nil {
        // handle response
    }
}
```

## DeleteSyncJob

Delete the SyncJob.

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
    res, err := s.SDK.DeleteSyncJob(ctx, operations.DeleteSyncJobRequest{
        XAmzAlgorithm: sdk.String("voluptatibus"),
        XAmzContentSha256: sdk.String("exercitationem"),
        XAmzCredential: sdk.String("nulla"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("porro"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        SyncSource: "iusto",
        WorkspaceID: "eligendi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSyncJobResponse != nil {
        // handle response
    }
}
```

## DeleteWorkspace

Deletes a workspace.

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
    res, err := s.SDK.DeleteWorkspace(ctx, operations.DeleteWorkspaceRequest{
        XAmzAlgorithm: sdk.String("ducimus"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("tempora"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("ea"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        WorkspaceID: "vel",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteWorkspaceResponse != nil {
        // handle response
    }
}
```

## ExecuteQuery

Run queries to access information from your knowledge graph of entities within individual workspaces.

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
    res, err := s.SDK.ExecuteQuery(ctx, operations.ExecuteQueryRequest{
        RequestBody: operations.ExecuteQueryRequestBody{
            MaxResults: sdk.Int64(822118),
            NextToken: sdk.String("magnam"),
            QueryStatement: "ratione",
            WorkspaceID: "ex",
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("ex"),
        XAmzSignedHeaders: sdk.String("nulla"),
        MaxResults: sdk.String("excepturi"),
        NextToken: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ExecuteQueryResponse != nil {
        // handle response
    }
}
```

## GetComponentType

Retrieves information about a component type.

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
    res, err := s.SDK.GetComponentType(ctx, operations.GetComponentTypeRequest{
        XAmzAlgorithm: sdk.String("nostrum"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("ea"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("corporis"),
        ComponentTypeID: "veniam",
        WorkspaceID: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetComponentTypeResponse != nil {
        // handle response
    }
}
```

## GetEntity

Retrieves information about an entity.

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
    res, err := s.SDK.GetEntity(ctx, operations.GetEntityRequest{
        XAmzAlgorithm: sdk.String("inventore"),
        XAmzContentSha256: sdk.String("magnam"),
        XAmzCredential: sdk.String("ea"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("recusandae"),
        XAmzSignedHeaders: sdk.String("aspernatur"),
        EntityID: "minima",
        WorkspaceID: "eaque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetEntityResponse != nil {
        // handle response
    }
}
```

## GetPricingPlan

Gets the pricing plan.

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
    res, err := s.SDK.GetPricingPlan(ctx, operations.GetPricingPlanRequest{
        XAmzAlgorithm: sdk.String("a"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("deleniti"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("aliquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPricingPlanResponse != nil {
        // handle response
    }
}
```

## GetPropertyValue

<p>Gets the property values for a component, component type, entity, or workspace.</p> <p>You must specify a value for either <code>componentName</code>, <code>componentTypeId</code>, <code>entityId</code>, or <code>workspaceId</code>.</p>

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
    res, err := s.SDK.GetPropertyValue(ctx, operations.GetPropertyValueRequest{
        RequestBody: operations.GetPropertyValueRequestBody{
            ComponentName: sdk.String("fugit"),
            ComponentTypeID: sdk.String("accusamus"),
            EntityID: sdk.String("inventore"),
            MaxResults: sdk.Int64(250622),
            NextToken: sdk.String("et"),
            PropertyGroupName: sdk.String("dolorum"),
            SelectedProperties: []string{
                "placeat",
                "velit",
                "eum",
            },
            TabularConditions: &operations.GetPropertyValueRequestBodyTabularConditions{
                OrderBy: []shared.OrderBy{
                    shared.OrderBy{
                        Order: shared.OrderEnumDescending.ToPointer(),
                        PropertyName: "quas",
                    },
                    shared.OrderBy{
                        Order: shared.OrderEnumDescending.ToPointer(),
                        PropertyName: "nulla",
                    },
                },
                PropertyFilters: []shared.PropertyFilter{
                    shared.PropertyFilter{
                        Operator: sdk.String("libero"),
                        PropertyName: sdk.String("quasi"),
                        Value: &shared.DataValue{
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(2703.28),
                            Expression: sdk.String("numquam"),
                            IntegerValue: sdk.Int64(131482),
                            ListValue: []shared.DataValue{
                                shared.DataValue{},
                                shared.DataValue{},
                                shared.DataValue{},
                            },
                            LongValue: sdk.Int64(55374),
                            MapValue: map[string]shared.DataValue{
                                "magnam": shared.DataValue{},
                                "odio": shared.DataValue{},
                            },
                            RelationshipValue: &shared.RelationshipValue{
                                TargetComponentName: sdk.String("eius"),
                                TargetEntityID: sdk.String("esse"),
                            },
                            StringValue: sdk.String("esse"),
                        },
                    },
                    shared.PropertyFilter{
                        Operator: sdk.String("rem"),
                        PropertyName: sdk.String("fuga"),
                        Value: &shared.DataValue{
                            BooleanValue: sdk.Bool(false),
                            DoubleValue: sdk.Float64(4420.15),
                            Expression: sdk.String("quidem"),
                            IntegerValue: sdk.Int64(852635),
                            ListValue: []shared.DataValue{
                                shared.DataValue{},
                                shared.DataValue{},
                            },
                            LongValue: sdk.Int64(433439),
                            MapValue: map[string]shared.DataValue{
                                "assumenda": shared.DataValue{},
                                "eos": shared.DataValue{},
                            },
                            RelationshipValue: &shared.RelationshipValue{
                                TargetComponentName: sdk.String("praesentium"),
                                TargetEntityID: sdk.String("quisquam"),
                            },
                            StringValue: sdk.String("veritatis"),
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("ipsa"),
        XAmzContentSha256: sdk.String("id"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("quo"),
        MaxResults: sdk.String("fuga"),
        NextToken: sdk.String("eius"),
        WorkspaceID: "eos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPropertyValueResponse != nil {
        // handle response
    }
}
```

## GetPropertyValueHistory

<p>Retrieves information about the history of a time series property value for a component, component type, entity, or workspace.</p> <p>You must specify a value for <code>workspaceId</code>. For entity-specific queries, specify values for <code>componentName</code> and <code>entityId</code>. For cross-entity quries, specify a value for <code>componentTypeId</code>.</p>

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
    res, err := s.SDK.GetPropertyValueHistory(ctx, operations.GetPropertyValueHistoryRequest{
        RequestBody: operations.GetPropertyValueHistoryRequestBody{
            ComponentName: sdk.String("voluptas"),
            ComponentTypeID: sdk.String("ab"),
            EndDateTime: types.MustTimeFromString("2022-12-24T22:15:46.522Z"),
            EndTime: sdk.String("tempora"),
            EntityID: sdk.String("debitis"),
            Interpolation: &operations.GetPropertyValueHistoryRequestBodyInterpolation{
                InterpolationType: shared.InterpolationTypeEnumLinear.ToPointer(),
                IntervalInSeconds: sdk.Int64(370853),
            },
            MaxResults: sdk.Int64(133465),
            NextToken: sdk.String("sequi"),
            OrderByTime: operations.GetPropertyValueHistoryRequestBodyOrderByTimeEnumDescending.ToPointer(),
            PropertyFilters: []shared.PropertyFilter{
                shared.PropertyFilter{
                    Operator: sdk.String("recusandae"),
                    PropertyName: sdk.String("aperiam"),
                    Value: &shared.DataValue{
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(7151.79),
                        Expression: sdk.String("quod"),
                        IntegerValue: sdk.Int64(490819),
                        ListValue: []shared.DataValue{
                            shared.DataValue{},
                        },
                        LongValue: sdk.Int64(469498),
                        MapValue: map[string]shared.DataValue{
                            "accusamus": shared.DataValue{},
                            "aliquam": shared.DataValue{},
                            "odio": shared.DataValue{},
                        },
                        RelationshipValue: &shared.RelationshipValue{
                            TargetComponentName: sdk.String("occaecati"),
                            TargetEntityID: sdk.String("commodi"),
                        },
                        StringValue: sdk.String("sapiente"),
                    },
                },
                shared.PropertyFilter{
                    Operator: sdk.String("dolores"),
                    PropertyName: sdk.String("deserunt"),
                    Value: &shared.DataValue{
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(4752.89),
                        Expression: sdk.String("accusantium"),
                        IntegerValue: sdk.Int64(783648),
                        ListValue: []shared.DataValue{
                            shared.DataValue{},
                            shared.DataValue{},
                        },
                        LongValue: sdk.Int64(556429),
                        MapValue: map[string]shared.DataValue{
                            "consequuntur": shared.DataValue{},
                            "deleniti": shared.DataValue{},
                            "fugit": shared.DataValue{},
                        },
                        RelationshipValue: &shared.RelationshipValue{
                            TargetComponentName: sdk.String("fuga"),
                            TargetEntityID: sdk.String("mollitia"),
                        },
                        StringValue: sdk.String("incidunt"),
                    },
                },
            },
            SelectedProperties: []string{
                "explicabo",
                "minima",
                "nisi",
            },
            StartDateTime: types.MustTimeFromString("2022-01-16T21:53:08.951Z"),
            StartTime: sdk.String("consequuntur"),
        },
        XAmzAlgorithm: sdk.String("ratione"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("occaecati"),
        XAmzSecurityToken: sdk.String("atque"),
        XAmzSignature: sdk.String("et"),
        XAmzSignedHeaders: sdk.String("esse"),
        MaxResults: sdk.String("eveniet"),
        NextToken: sdk.String("accusamus"),
        WorkspaceID: "veritatis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetPropertyValueHistoryResponse != nil {
        // handle response
    }
}
```

## GetScene

Retrieves information about a scene.

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
    res, err := s.SDK.GetScene(ctx, operations.GetSceneRequest{
        XAmzAlgorithm: sdk.String("esse"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("nam"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("aliquid"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("saepe"),
        SceneID: "vel",
        WorkspaceID: "harum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSceneResponse != nil {
        // handle response
    }
}
```

## GetSyncJob

Gets the SyncJob.

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
    res, err := s.SDK.GetSyncJob(ctx, operations.GetSyncJobRequest{
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("minima"),
        XAmzSecurityToken: sdk.String("distinctio"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("sit"),
        SyncSource: "culpa",
        Workspace: sdk.String("tempore"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSyncJobResponse != nil {
        // handle response
    }
}
```

## GetWorkspace

Retrieves information about a workspace.

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
    res, err := s.SDK.GetWorkspace(ctx, operations.GetWorkspaceRequest{
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("cumque"),
        XAmzCredential: sdk.String("consequuntur"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("minus"),
        XAmzSignature: sdk.String("quaerat"),
        XAmzSignedHeaders: sdk.String("sapiente"),
        WorkspaceID: "consectetur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetWorkspaceResponse != nil {
        // handle response
    }
}
```

## ListComponentTypes

Lists all component types in a workspace.

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
    res, err := s.SDK.ListComponentTypes(ctx, operations.ListComponentTypesRequest{
        RequestBody: operations.ListComponentTypesRequestBody{
            Filters: []shared.ListComponentTypesFilter{
                shared.ListComponentTypesFilter{
                    ExtendsFrom: sdk.String("blanditiis"),
                    IsAbstract: sdk.Bool(false),
                    Namespace: sdk.String("provident"),
                },
                shared.ListComponentTypesFilter{
                    ExtendsFrom: sdk.String("a"),
                    IsAbstract: sdk.Bool(false),
                    Namespace: sdk.String("nulla"),
                },
            },
            MaxResults: sdk.Int64(557811),
            NextToken: sdk.String("esse"),
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("error"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("pariatur"),
        XAmzSignature: sdk.String("possimus"),
        XAmzSignedHeaders: sdk.String("quia"),
        MaxResults: sdk.String("eveniet"),
        NextToken: sdk.String("asperiores"),
        WorkspaceID: "facere",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListComponentTypesResponse != nil {
        // handle response
    }
}
```

## ListEntities

Lists all entities in a workspace.

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
    res, err := s.SDK.ListEntities(ctx, operations.ListEntitiesRequest{
        RequestBody: operations.ListEntitiesRequestBody{
            Filters: []shared.ListEntitiesFilter{
                shared.ListEntitiesFilter{
                    ComponentTypeID: sdk.String("consequuntur"),
                    ExternalID: sdk.String("quasi"),
                    ParentEntityID: sdk.String("similique"),
                },
            },
            MaxResults: sdk.Int64(633608),
            NextToken: sdk.String("aliquid"),
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("quae"),
        XAmzCredential: sdk.String("earum"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("in"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("libero"),
        MaxResults: sdk.String("illum"),
        NextToken: sdk.String("soluta"),
        WorkspaceID: "accusantium",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListEntitiesResponse != nil {
        // handle response
    }
}
```

## ListScenes

Lists all scenes in a workspace.

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
    res, err := s.SDK.ListScenes(ctx, operations.ListScenesRequest{
        RequestBody: operations.ListScenesRequestBody{
            MaxResults: sdk.Int64(306986),
            NextToken: sdk.String("sapiente"),
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("ullam"),
        XAmzCredential: sdk.String("reprehenderit"),
        XAmzDate: sdk.String("ullam"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        MaxResults: sdk.String("qui"),
        NextToken: sdk.String("quibusdam"),
        WorkspaceID: "ex",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListScenesResponse != nil {
        // handle response
    }
}
```

## ListSyncJobs

List all SyncJobs.

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
    res, err := s.SDK.ListSyncJobs(ctx, operations.ListSyncJobsRequest{
        RequestBody: operations.ListSyncJobsRequestBody{
            MaxResults: sdk.Int64(536275),
            NextToken: sdk.String("itaque"),
        },
        XAmzAlgorithm: sdk.String("dolorum"),
        XAmzContentSha256: sdk.String("architecto"),
        XAmzCredential: sdk.String("omnis"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("quasi"),
        XAmzSignature: sdk.String("at"),
        XAmzSignedHeaders: sdk.String("et"),
        MaxResults: sdk.String("voluptate"),
        NextToken: sdk.String("ipsa"),
        WorkspaceID: "minima",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSyncJobsResponse != nil {
        // handle response
    }
}
```

## ListSyncResources

Lists the sync resources.

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
    res, err := s.SDK.ListSyncResources(ctx, operations.ListSyncResourcesRequest{
        RequestBody: operations.ListSyncResourcesRequestBody{
            Filters: []shared.SyncResourceFilter{
                shared.SyncResourceFilter{
                    ExternalID: sdk.String("consectetur"),
                    ResourceID: sdk.String("adipisci"),
                    ResourceType: shared.SyncResourceTypeEnumComponentType.ToPointer(),
                    State: shared.SyncResourceStateEnumError.ToPointer(),
                },
            },
            MaxResults: sdk.Int64(33074),
            NextToken: sdk.String("rem"),
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("laudantium"),
        XAmzCredential: sdk.String("eum"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("corrupti"),
        XAmzSignedHeaders: sdk.String("non"),
        MaxResults: sdk.String("voluptatem"),
        NextToken: sdk.String("dolor"),
        SyncSource: "occaecati",
        WorkspaceID: "numquam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListSyncResourcesResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Lists all tags associated with a resource.

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
        RequestBody: operations.ListTagsForResourceRequestBody{
            MaxResults: sdk.Int64(771089),
            NextToken: sdk.String("explicabo"),
            ResourceARN: "voluptas",
        },
        XAmzAlgorithm: sdk.String("aut"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("voluptatibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListWorkspaces

Retrieves information about workspaces in the current account.

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
    res, err := s.SDK.ListWorkspaces(ctx, operations.ListWorkspacesRequest{
        RequestBody: operations.ListWorkspacesRequestBody{
            MaxResults: sdk.Int64(374323),
            NextToken: sdk.String("asperiores"),
        },
        XAmzAlgorithm: sdk.String("aperiam"),
        XAmzContentSha256: sdk.String("ea"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("consequuntur"),
        XAmzSecurityToken: sdk.String("repellendus"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("maxime"),
        MaxResults: sdk.String("dignissimos"),
        NextToken: sdk.String("officia"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListWorkspacesResponse != nil {
        // handle response
    }
}
```

## TagResource

Adds tags to a resource.

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
            ResourceARN: "asperiores",
            Tags: map[string]string{
                "quae": "quaerat",
                "porro": "quod",
            },
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("ab"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("fuga"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("suscipit"),
        XAmzSignedHeaders: sdk.String("velit"),
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

Removes tags from a resource.

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
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("vel"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        ResourceARN: "quos",
        TagKeys: []string{
            "labore",
            "possimus",
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

## UpdateComponentType

Updates information in a component type.

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
    res, err := s.SDK.UpdateComponentType(ctx, operations.UpdateComponentTypeRequest{
        RequestBody: operations.UpdateComponentTypeRequestBody{
            ComponentTypeName: sdk.String("facilis"),
            Description: sdk.String("cum"),
            ExtendsFrom: []string{
                "in",
                "corporis",
            },
            Functions: map[string]shared.FunctionRequest{
                "assumenda": shared.FunctionRequest{
                    ImplementedBy: &shared.DataConnector{
                        IsNative: sdk.Bool(false),
                        Lambda: &shared.LambdaFunction{
                            Arn: "nemo",
                        },
                    },
                    RequiredProperties: []string{
                        "aliquid",
                        "aperiam",
                        "cum",
                        "consectetur",
                    },
                    Scope: shared.ScopeEnumEntity.ToPointer(),
                },
                "exercitationem": shared.FunctionRequest{
                    ImplementedBy: &shared.DataConnector{
                        IsNative: sdk.Bool(false),
                        Lambda: &shared.LambdaFunction{
                            Arn: "earum",
                        },
                    },
                    RequiredProperties: []string{
                        "numquam",
                        "doloribus",
                        "suscipit",
                        "reiciendis",
                    },
                    Scope: shared.ScopeEnumWorkspace.ToPointer(),
                },
                "saepe": shared.FunctionRequest{
                    ImplementedBy: &shared.DataConnector{
                        IsNative: sdk.Bool(false),
                        Lambda: &shared.LambdaFunction{
                            Arn: "necessitatibus",
                        },
                    },
                    RequiredProperties: []string{
                        "sunt",
                        "asperiores",
                    },
                    Scope: shared.ScopeEnumEntity.ToPointer(),
                },
                "non": shared.FunctionRequest{
                    ImplementedBy: &shared.DataConnector{
                        IsNative: sdk.Bool(false),
                        Lambda: &shared.LambdaFunction{
                            Arn: "amet",
                        },
                    },
                    RequiredProperties: []string{
                        "dignissimos",
                    },
                    Scope: shared.ScopeEnumWorkspace.ToPointer(),
                },
            },
            IsSingleton: sdk.Bool(false),
            PropertyDefinitions: map[string]shared.PropertyDefinitionRequest{
                "consectetur": shared.PropertyDefinitionRequest{
                    Configuration: map[string]string{
                        "harum": "laboriosam",
                        "ipsa": "voluptates",
                    },
                    DataType: &shared.DataType{
                        AllowedValues: []shared.DataValue{
                            shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(1138.16),
                                Expression: sdk.String("accusamus"),
                                IntegerValue: sdk.Int64(631126),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(132815),
                                MapValue: map[string]shared.DataValue{
                                    "voluptas": shared.DataValue{},
                                    "voluptas": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("minima"),
                                    TargetEntityID: sdk.String("nobis"),
                                },
                                StringValue: sdk.String("dolorum"),
                            },
                            shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(2378.07),
                                Expression: sdk.String("minus"),
                                IntegerValue: sdk.Int64(171853),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(449292),
                                MapValue: map[string]shared.DataValue{
                                    "aliquam": shared.DataValue{},
                                    "officiis": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("temporibus"),
                                    TargetEntityID: sdk.String("ullam"),
                                },
                                StringValue: sdk.String("adipisci"),
                            },
                            shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(7383.91),
                                Expression: sdk.String("blanditiis"),
                                IntegerValue: sdk.Int64(555361),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(201517),
                                MapValue: map[string]shared.DataValue{
                                    "corrupti": shared.DataValue{},
                                    "pariatur": shared.DataValue{},
                                    "totam": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("hic"),
                                    TargetEntityID: sdk.String("exercitationem"),
                                },
                                StringValue: sdk.String("nobis"),
                            },
                        },
                        NestedType: &shared.DataType{},
                        Relationship: &shared.Relationship{
                            RelationshipType: sdk.String("sit"),
                            TargetComponentTypeID: sdk.String("rerum"),
                        },
                        Type: shared.TypeEnumString,
                        UnitOfMeasure: sdk.String("reiciendis"),
                    },
                    DefaultValue: &shared.DataValue{
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(1318.52),
                        Expression: sdk.String("asperiores"),
                        IntegerValue: sdk.Int64(707918),
                        ListValue: []shared.DataValue{
                            shared.DataValue{},
                            shared.DataValue{},
                        },
                        LongValue: sdk.Int64(709072),
                        MapValue: map[string]shared.DataValue{
                            "iste": shared.DataValue{},
                        },
                        RelationshipValue: &shared.RelationshipValue{
                            TargetComponentName: sdk.String("dolore"),
                            TargetEntityID: sdk.String("laborum"),
                        },
                        StringValue: sdk.String("sed"),
                    },
                    DisplayName: sdk.String("in"),
                    IsExternalID: sdk.Bool(false),
                    IsRequiredInEntity: sdk.Bool(false),
                    IsStoredExternally: sdk.Bool(false),
                    IsTimeSeries: sdk.Bool(false),
                },
                "commodi": shared.PropertyDefinitionRequest{
                    Configuration: map[string]string{
                        "explicabo": "voluptas",
                        "unde": "architecto",
                        "suscipit": "sapiente",
                    },
                    DataType: &shared.DataType{
                        AllowedValues: []shared.DataValue{
                            shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(724.34),
                                Expression: sdk.String("reiciendis"),
                                IntegerValue: sdk.Int64(19300),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(979574),
                                MapValue: map[string]shared.DataValue{
                                    "sed": shared.DataValue{},
                                    "provident": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("eius"),
                                    TargetEntityID: sdk.String("necessitatibus"),
                                },
                                StringValue: sdk.String("ipsum"),
                            },
                            shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(4067.33),
                                Expression: sdk.String("occaecati"),
                                IntegerValue: sdk.Int64(552078),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(271653),
                                MapValue: map[string]shared.DataValue{
                                    "voluptate": shared.DataValue{},
                                    "reiciendis": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("ex"),
                                    TargetEntityID: sdk.String("sit"),
                                },
                                StringValue: sdk.String("non"),
                            },
                            shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(8880.44),
                                Expression: sdk.String("praesentium"),
                                IntegerValue: sdk.Int64(708609),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(277773),
                                MapValue: map[string]shared.DataValue{
                                    "debitis": shared.DataValue{},
                                    "rem": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("sit"),
                                    TargetEntityID: sdk.String("nobis"),
                                },
                                StringValue: sdk.String("error"),
                            },
                            shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(3335.07),
                                Expression: sdk.String("minima"),
                                IntegerValue: sdk.Int64(924159),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(862319),
                                MapValue: map[string]shared.DataValue{
                                    "aperiam": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("saepe"),
                                    TargetEntityID: sdk.String("numquam"),
                                },
                                StringValue: sdk.String("veniam"),
                            },
                        },
                        NestedType: &shared.DataType{},
                        Relationship: &shared.Relationship{
                            RelationshipType: sdk.String("in"),
                            TargetComponentTypeID: sdk.String("officiis"),
                        },
                        Type: shared.TypeEnumRelationship,
                        UnitOfMeasure: sdk.String("laudantium"),
                    },
                    DefaultValue: &shared.DataValue{
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(3484.76),
                        Expression: sdk.String("praesentium"),
                        IntegerValue: sdk.Int64(740098),
                        ListValue: []shared.DataValue{
                            shared.DataValue{},
                            shared.DataValue{},
                        },
                        LongValue: sdk.Int64(680515),
                        MapValue: map[string]shared.DataValue{
                            "error": shared.DataValue{},
                            "hic": shared.DataValue{},
                            "expedita": shared.DataValue{},
                        },
                        RelationshipValue: &shared.RelationshipValue{
                            TargetComponentName: sdk.String("debitis"),
                            TargetEntityID: sdk.String("neque"),
                        },
                        StringValue: sdk.String("dolorum"),
                    },
                    DisplayName: sdk.String("nostrum"),
                    IsExternalID: sdk.Bool(false),
                    IsRequiredInEntity: sdk.Bool(false),
                    IsStoredExternally: sdk.Bool(false),
                    IsTimeSeries: sdk.Bool(false),
                },
                "officia": shared.PropertyDefinitionRequest{
                    Configuration: map[string]string{
                        "corrupti": "accusamus",
                        "tempora": "atque",
                        "fugit": "ut",
                    },
                    DataType: &shared.DataType{
                        AllowedValues: []shared.DataValue{
                            shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(302.35),
                                Expression: sdk.String("culpa"),
                                IntegerValue: sdk.Int64(710337),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(7884),
                                MapValue: map[string]shared.DataValue{
                                    "ipsam": shared.DataValue{},
                                    "sit": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("voluptatum"),
                                    TargetEntityID: sdk.String("quas"),
                                },
                                StringValue: sdk.String("repudiandae"),
                            },
                            shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(3611.51),
                                Expression: sdk.String("et"),
                                IntegerValue: sdk.Int64(502710),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(153627),
                                MapValue: map[string]shared.DataValue{
                                    "vel": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("nostrum"),
                                    TargetEntityID: sdk.String("saepe"),
                                },
                                StringValue: sdk.String("error"),
                            },
                            shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(85.11),
                                Expression: sdk.String("incidunt"),
                                IntegerValue: sdk.Int64(968865),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(690894),
                                MapValue: map[string]shared.DataValue{
                                    "architecto": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("occaecati"),
                                    TargetEntityID: sdk.String("labore"),
                                },
                                StringValue: sdk.String("quidem"),
                            },
                            shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(5390.74),
                                Expression: sdk.String("laborum"),
                                IntegerValue: sdk.Int64(724148),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(388867),
                                MapValue: map[string]shared.DataValue{
                                    "amet": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("deserunt"),
                                    TargetEntityID: sdk.String("voluptate"),
                                },
                                StringValue: sdk.String("unde"),
                            },
                        },
                        NestedType: &shared.DataType{},
                        Relationship: &shared.Relationship{
                            RelationshipType: sdk.String("reiciendis"),
                            TargetComponentTypeID: sdk.String("provident"),
                        },
                        Type: shared.TypeEnumList,
                        UnitOfMeasure: sdk.String("delectus"),
                    },
                    DefaultValue: &shared.DataValue{
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(9147.91),
                        Expression: sdk.String("perferendis"),
                        IntegerValue: sdk.Int64(667285),
                        ListValue: []shared.DataValue{
                            shared.DataValue{},
                            shared.DataValue{},
                            shared.DataValue{},
                        },
                        LongValue: sdk.Int64(440666),
                        MapValue: map[string]shared.DataValue{
                            "fuga": shared.DataValue{},
                            "praesentium": shared.DataValue{},
                            "mollitia": shared.DataValue{},
                            "veniam": shared.DataValue{},
                        },
                        RelationshipValue: &shared.RelationshipValue{
                            TargetComponentName: sdk.String("voluptatem"),
                            TargetEntityID: sdk.String("quisquam"),
                        },
                        StringValue: sdk.String("repudiandae"),
                    },
                    DisplayName: sdk.String("quasi"),
                    IsExternalID: sdk.Bool(false),
                    IsRequiredInEntity: sdk.Bool(false),
                    IsStoredExternally: sdk.Bool(false),
                    IsTimeSeries: sdk.Bool(false),
                },
                "atque": shared.PropertyDefinitionRequest{
                    Configuration: map[string]string{
                        "asperiores": "totam",
                        "suscipit": "quidem",
                    },
                    DataType: &shared.DataType{
                        AllowedValues: []shared.DataValue{
                            shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(908.85),
                                Expression: sdk.String("esse"),
                                IntegerValue: sdk.Int64(227759),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(410301),
                                MapValue: map[string]shared.DataValue{
                                    "error": shared.DataValue{},
                                    "officiis": shared.DataValue{},
                                    "officiis": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("accusamus"),
                                    TargetEntityID: sdk.String("natus"),
                                },
                                StringValue: sdk.String("minima"),
                            },
                            shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(1334.61),
                                Expression: sdk.String("ex"),
                                IntegerValue: sdk.Int64(980581),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(871786),
                                MapValue: map[string]shared.DataValue{
                                    "blanditiis": shared.DataValue{},
                                    "suscipit": shared.DataValue{},
                                    "repudiandae": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("atque"),
                                    TargetEntityID: sdk.String("atque"),
                                },
                                StringValue: sdk.String("sunt"),
                            },
                            shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(9233.06),
                                Expression: sdk.String("dolorum"),
                                IntegerValue: sdk.Int64(829898),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(968287),
                                MapValue: map[string]shared.DataValue{
                                    "repudiandae": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("dicta"),
                                    TargetEntityID: sdk.String("accusantium"),
                                },
                                StringValue: sdk.String("beatae"),
                            },
                            shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(1747.72),
                                Expression: sdk.String("enim"),
                                IntegerValue: sdk.Int64(389135),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(952143),
                                MapValue: map[string]shared.DataValue{
                                    "magnam": shared.DataValue{},
                                    "saepe": shared.DataValue{},
                                    "consequuntur": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("occaecati"),
                                    TargetEntityID: sdk.String("officiis"),
                                },
                                StringValue: sdk.String("perspiciatis"),
                            },
                        },
                        NestedType: &shared.DataType{},
                        Relationship: &shared.Relationship{
                            RelationshipType: sdk.String("in"),
                            TargetComponentTypeID: sdk.String("adipisci"),
                        },
                        Type: shared.TypeEnumMap,
                        UnitOfMeasure: sdk.String("occaecati"),
                    },
                    DefaultValue: &shared.DataValue{
                        BooleanValue: sdk.Bool(false),
                        DoubleValue: sdk.Float64(1602.3),
                        Expression: sdk.String("fugit"),
                        IntegerValue: sdk.Int64(661118),
                        ListValue: []shared.DataValue{
                            shared.DataValue{},
                            shared.DataValue{},
                        },
                        LongValue: sdk.Int64(440264),
                        MapValue: map[string]shared.DataValue{
                            "illo": shared.DataValue{},
                            "corporis": shared.DataValue{},
                            "quidem": shared.DataValue{},
                        },
                        RelationshipValue: &shared.RelationshipValue{
                            TargetComponentName: sdk.String("eveniet"),
                            TargetEntityID: sdk.String("non"),
                        },
                        StringValue: sdk.String("vero"),
                    },
                    DisplayName: sdk.String("doloremque"),
                    IsExternalID: sdk.Bool(false),
                    IsRequiredInEntity: sdk.Bool(false),
                    IsStoredExternally: sdk.Bool(false),
                    IsTimeSeries: sdk.Bool(false),
                },
            },
            PropertyGroups: map[string]shared.PropertyGroupRequest{
                "ipsa": shared.PropertyGroupRequest{
                    GroupType: shared.GroupTypeEnumTabular.ToPointer(),
                    PropertyNames: []string{
                        "quae",
                        "molestiae",
                        "eveniet",
                    },
                },
                "qui": shared.PropertyGroupRequest{
                    GroupType: shared.GroupTypeEnumTabular.ToPointer(),
                    PropertyNames: []string{
                        "iure",
                        "necessitatibus",
                        "ratione",
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("distinctio"),
        XAmzCredential: sdk.String("voluptatum"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("ad"),
        XAmzSignedHeaders: sdk.String("repellat"),
        ComponentTypeID: "alias",
        WorkspaceID: "corporis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateComponentTypeResponse != nil {
        // handle response
    }
}
```

## UpdateEntity

Updates an entity.

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
    res, err := s.SDK.UpdateEntity(ctx, operations.UpdateEntityRequest{
        RequestBody: operations.UpdateEntityRequestBody{
            ComponentUpdates: map[string]shared.ComponentUpdateRequest{
                "nihil": shared.ComponentUpdateRequest{
                    ComponentTypeID: sdk.String("mollitia"),
                    Description: sdk.String("voluptas"),
                    PropertyGroupUpdates: map[string]shared.ComponentPropertyGroupRequest{
                        "maiores": shared.ComponentPropertyGroupRequest{
                            GroupType: shared.GroupTypeEnumTabular.ToPointer(),
                            PropertyNames: []string{
                                "dolores",
                                "id",
                                "minima",
                                "dolore",
                            },
                            UpdateType: shared.PropertyGroupUpdateTypeEnumCreate.ToPointer(),
                        },
                    },
                    PropertyUpdates: map[string]shared.PropertyRequest{
                        "quae": shared.PropertyRequest{
                            Definition: &shared.PropertyDefinitionRequest{
                                Configuration: map[string]string{
                                    "omnis": "quaerat",
                                    "molestiae": "ex",
                                    "ut": "culpa",
                                    "adipisci": "debitis",
                                },
                                DataType: &shared.DataType{
                                    AllowedValues: []shared.DataValue{
                                        shared.DataValue{
                                            BooleanValue: sdk.Bool(false),
                                            DoubleValue: sdk.Float64(4326.06),
                                            Expression: sdk.String("nemo"),
                                            IntegerValue: sdk.Int64(928219),
                                            ListValue: []shared.DataValue{
                                                shared.DataValue{},
                                                shared.DataValue{},
                                            },
                                            LongValue: sdk.Int64(592081),
                                            MapValue: map[string]shared.DataValue{
                                                "eum": shared.DataValue{},
                                                "reiciendis": shared.DataValue{},
                                            },
                                            RelationshipValue: &shared.RelationshipValue{
                                                TargetComponentName: sdk.String("provident"),
                                                TargetEntityID: sdk.String("aspernatur"),
                                            },
                                            StringValue: sdk.String("ullam"),
                                        },
                                        shared.DataValue{
                                            BooleanValue: sdk.Bool(false),
                                            DoubleValue: sdk.Float64(968.04),
                                            Expression: sdk.String("animi"),
                                            IntegerValue: sdk.Int64(343392),
                                            ListValue: []shared.DataValue{
                                                shared.DataValue{},
                                                shared.DataValue{},
                                                shared.DataValue{},
                                            },
                                            LongValue: sdk.Int64(591027),
                                            MapValue: map[string]shared.DataValue{
                                                "animi": shared.DataValue{},
                                                "ex": shared.DataValue{},
                                                "aliquid": shared.DataValue{},
                                                "accusantium": shared.DataValue{},
                                            },
                                            RelationshipValue: &shared.RelationshipValue{
                                                TargetComponentName: sdk.String("repellat"),
                                                TargetEntityID: sdk.String("doloribus"),
                                            },
                                            StringValue: sdk.String("ullam"),
                                        },
                                        shared.DataValue{
                                            BooleanValue: sdk.Bool(false),
                                            DoubleValue: sdk.Float64(4481.43),
                                            Expression: sdk.String("nam"),
                                            IntegerValue: sdk.Int64(937636),
                                            ListValue: []shared.DataValue{
                                                shared.DataValue{},
                                                shared.DataValue{},
                                                shared.DataValue{},
                                            },
                                            LongValue: sdk.Int64(672041),
                                            MapValue: map[string]shared.DataValue{
                                                "modi": shared.DataValue{},
                                                "voluptatibus": shared.DataValue{},
                                                "molestias": shared.DataValue{},
                                                "officiis": shared.DataValue{},
                                            },
                                            RelationshipValue: &shared.RelationshipValue{
                                                TargetComponentName: sdk.String("sapiente"),
                                                TargetEntityID: sdk.String("cumque"),
                                            },
                                            StringValue: sdk.String("vitae"),
                                        },
                                    },
                                    NestedType: &shared.DataType{},
                                    Relationship: &shared.Relationship{
                                        RelationshipType: sdk.String("rerum"),
                                        TargetComponentTypeID: sdk.String("tempora"),
                                    },
                                    Type: shared.TypeEnumLong,
                                    UnitOfMeasure: sdk.String("inventore"),
                                },
                                DefaultValue: &shared.DataValue{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(1476.85),
                                    Expression: sdk.String("cumque"),
                                    IntegerValue: sdk.Int64(62636),
                                    ListValue: []shared.DataValue{
                                        shared.DataValue{},
                                    },
                                    LongValue: sdk.Int64(241901),
                                    MapValue: map[string]shared.DataValue{
                                        "eum": shared.DataValue{},
                                    },
                                    RelationshipValue: &shared.RelationshipValue{
                                        TargetComponentName: sdk.String("eius"),
                                        TargetEntityID: sdk.String("rem"),
                                    },
                                    StringValue: sdk.String("at"),
                                },
                                DisplayName: sdk.String("impedit"),
                                IsExternalID: sdk.Bool(false),
                                IsRequiredInEntity: sdk.Bool(false),
                                IsStoredExternally: sdk.Bool(false),
                                IsTimeSeries: sdk.Bool(false),
                            },
                            UpdateType: shared.PropertyUpdateTypeEnumUpdate.ToPointer(),
                            Value: &shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(9587.41),
                                Expression: sdk.String("eum"),
                                IntegerValue: sdk.Int64(117320),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(107004),
                                MapValue: map[string]shared.DataValue{
                                    "provident": shared.DataValue{},
                                    "earum": shared.DataValue{},
                                    "soluta": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("hic"),
                                    TargetEntityID: sdk.String("illum"),
                                },
                                StringValue: sdk.String("eaque"),
                            },
                        },
                    },
                    UpdateType: shared.ComponentUpdateTypeEnumDelete.ToPointer(),
                },
                "perspiciatis": shared.ComponentUpdateRequest{
                    ComponentTypeID: sdk.String("maiores"),
                    Description: sdk.String("debitis"),
                    PropertyGroupUpdates: map[string]shared.ComponentPropertyGroupRequest{
                        "porro": shared.ComponentPropertyGroupRequest{
                            GroupType: shared.GroupTypeEnumTabular.ToPointer(),
                            PropertyNames: []string{
                                "dolorem",
                                "fugit",
                            },
                            UpdateType: shared.PropertyGroupUpdateTypeEnumCreate.ToPointer(),
                        },
                        "fuga": shared.ComponentPropertyGroupRequest{
                            GroupType: shared.GroupTypeEnumTabular.ToPointer(),
                            PropertyNames: []string{
                                "animi",
                            },
                            UpdateType: shared.PropertyGroupUpdateTypeEnumCreate.ToPointer(),
                        },
                    },
                    PropertyUpdates: map[string]shared.PropertyRequest{
                        "consequatur": shared.PropertyRequest{
                            Definition: &shared.PropertyDefinitionRequest{
                                Configuration: map[string]string{
                                    "et": "ducimus",
                                },
                                DataType: &shared.DataType{
                                    AllowedValues: []shared.DataValue{
                                        shared.DataValue{
                                            BooleanValue: sdk.Bool(false),
                                            DoubleValue: sdk.Float64(5810.82),
                                            Expression: sdk.String("suscipit"),
                                            IntegerValue: sdk.Int64(241557),
                                            ListValue: []shared.DataValue{
                                                shared.DataValue{},
                                            },
                                            LongValue: sdk.Int64(169025),
                                            MapValue: map[string]shared.DataValue{
                                                "nulla": shared.DataValue{},
                                                "necessitatibus": shared.DataValue{},
                                                "ipsa": shared.DataValue{},
                                                "tempora": shared.DataValue{},
                                            },
                                            RelationshipValue: &shared.RelationshipValue{
                                                TargetComponentName: sdk.String("nihil"),
                                                TargetEntityID: sdk.String("molestiae"),
                                            },
                                            StringValue: sdk.String("dicta"),
                                        },
                                        shared.DataValue{
                                            BooleanValue: sdk.Bool(false),
                                            DoubleValue: sdk.Float64(4797.54),
                                            Expression: sdk.String("esse"),
                                            IntegerValue: sdk.Int64(508390),
                                            ListValue: []shared.DataValue{
                                                shared.DataValue{},
                                                shared.DataValue{},
                                                shared.DataValue{},
                                                shared.DataValue{},
                                            },
                                            LongValue: sdk.Int64(967260),
                                            MapValue: map[string]shared.DataValue{
                                                "architecto": shared.DataValue{},
                                                "fugiat": shared.DataValue{},
                                            },
                                            RelationshipValue: &shared.RelationshipValue{
                                                TargetComponentName: sdk.String("doloremque"),
                                                TargetEntityID: sdk.String("dicta"),
                                            },
                                            StringValue: sdk.String("odio"),
                                        },
                                        shared.DataValue{
                                            BooleanValue: sdk.Bool(false),
                                            DoubleValue: sdk.Float64(2712.52),
                                            Expression: sdk.String("esse"),
                                            IntegerValue: sdk.Int64(403793),
                                            ListValue: []shared.DataValue{
                                                shared.DataValue{},
                                            },
                                            LongValue: sdk.Int64(399812),
                                            MapValue: map[string]shared.DataValue{
                                                "laborum": shared.DataValue{},
                                            },
                                            RelationshipValue: &shared.RelationshipValue{
                                                TargetComponentName: sdk.String("sunt"),
                                                TargetEntityID: sdk.String("nostrum"),
                                            },
                                            StringValue: sdk.String("fugiat"),
                                        },
                                    },
                                    NestedType: &shared.DataType{},
                                    Relationship: &shared.Relationship{
                                        RelationshipType: sdk.String("expedita"),
                                        TargetComponentTypeID: sdk.String("aliquid"),
                                    },
                                    Type: shared.TypeEnumDouble,
                                    UnitOfMeasure: sdk.String("suscipit"),
                                },
                                DefaultValue: &shared.DataValue{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(3991.61),
                                    Expression: sdk.String("perferendis"),
                                    IntegerValue: sdk.Int64(431760),
                                    ListValue: []shared.DataValue{
                                        shared.DataValue{},
                                        shared.DataValue{},
                                    },
                                    LongValue: sdk.Int64(614528),
                                    MapValue: map[string]shared.DataValue{
                                        "ab": shared.DataValue{},
                                        "error": shared.DataValue{},
                                        "possimus": shared.DataValue{},
                                    },
                                    RelationshipValue: &shared.RelationshipValue{
                                        TargetComponentName: sdk.String("voluptates"),
                                        TargetEntityID: sdk.String("mollitia"),
                                    },
                                    StringValue: sdk.String("laborum"),
                                },
                                DisplayName: sdk.String("libero"),
                                IsExternalID: sdk.Bool(false),
                                IsRequiredInEntity: sdk.Bool(false),
                                IsStoredExternally: sdk.Bool(false),
                                IsTimeSeries: sdk.Bool(false),
                            },
                            UpdateType: shared.PropertyUpdateTypeEnumUpdate.ToPointer(),
                            Value: &shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(5369.23),
                                Expression: sdk.String("enim"),
                                IntegerValue: sdk.Int64(110477),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(405036),
                                MapValue: map[string]shared.DataValue{
                                    "ex": shared.DataValue{},
                                    "ut": shared.DataValue{},
                                    "ad": shared.DataValue{},
                                    "expedita": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("voluptatem"),
                                    TargetEntityID: sdk.String("molestias"),
                                },
                                StringValue: sdk.String("cum"),
                            },
                        },
                        "aliquid": shared.PropertyRequest{
                            Definition: &shared.PropertyDefinitionRequest{
                                Configuration: map[string]string{
                                    "voluptatum": "omnis",
                                },
                                DataType: &shared.DataType{
                                    AllowedValues: []shared.DataValue{
                                        shared.DataValue{
                                            BooleanValue: sdk.Bool(false),
                                            DoubleValue: sdk.Float64(7032.18),
                                            Expression: sdk.String("est"),
                                            IntegerValue: sdk.Int64(634786),
                                            ListValue: []shared.DataValue{
                                                shared.DataValue{},
                                            },
                                            LongValue: sdk.Int64(959143),
                                            MapValue: map[string]shared.DataValue{
                                                "architecto": shared.DataValue{},
                                                "fuga": shared.DataValue{},
                                                "pariatur": shared.DataValue{},
                                                "debitis": shared.DataValue{},
                                            },
                                            RelationshipValue: &shared.RelationshipValue{
                                                TargetComponentName: sdk.String("voluptatem"),
                                                TargetEntityID: sdk.String("alias"),
                                            },
                                            StringValue: sdk.String("deleniti"),
                                        },
                                    },
                                    NestedType: &shared.DataType{},
                                    Relationship: &shared.Relationship{
                                        RelationshipType: sdk.String("earum"),
                                        TargetComponentTypeID: sdk.String("ex"),
                                    },
                                    Type: shared.TypeEnumMap,
                                    UnitOfMeasure: sdk.String("rem"),
                                },
                                DefaultValue: &shared.DataValue{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(7963.2),
                                    Expression: sdk.String("nemo"),
                                    IntegerValue: sdk.Int64(992074),
                                    ListValue: []shared.DataValue{
                                        shared.DataValue{},
                                    },
                                    LongValue: sdk.Int64(355225),
                                    MapValue: map[string]shared.DataValue{
                                        "illum": shared.DataValue{},
                                    },
                                    RelationshipValue: &shared.RelationshipValue{
                                        TargetComponentName: sdk.String("totam"),
                                        TargetEntityID: sdk.String("impedit"),
                                    },
                                    StringValue: sdk.String("quibusdam"),
                                },
                                DisplayName: sdk.String("nam"),
                                IsExternalID: sdk.Bool(false),
                                IsRequiredInEntity: sdk.Bool(false),
                                IsStoredExternally: sdk.Bool(false),
                                IsTimeSeries: sdk.Bool(false),
                            },
                            UpdateType: shared.PropertyUpdateTypeEnumDelete.ToPointer(),
                            Value: &shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(6334.15),
                                Expression: sdk.String("dolor"),
                                IntegerValue: sdk.Int64(307376),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(537279),
                                MapValue: map[string]shared.DataValue{
                                    "tempora": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("dolor"),
                                    TargetEntityID: sdk.String("consequatur"),
                                },
                                StringValue: sdk.String("architecto"),
                            },
                        },
                        "sit": shared.PropertyRequest{
                            Definition: &shared.PropertyDefinitionRequest{
                                Configuration: map[string]string{
                                    "fugit": "ab",
                                    "laudantium": "quae",
                                },
                                DataType: &shared.DataType{
                                    AllowedValues: []shared.DataValue{
                                        shared.DataValue{
                                            BooleanValue: sdk.Bool(false),
                                            DoubleValue: sdk.Float64(8562.77),
                                            Expression: sdk.String("ipsam"),
                                            IntegerValue: sdk.Int64(162120),
                                            ListValue: []shared.DataValue{
                                                shared.DataValue{},
                                            },
                                            LongValue: sdk.Int64(559682),
                                            MapValue: map[string]shared.DataValue{
                                                "impedit": shared.DataValue{},
                                                "officiis": shared.DataValue{},
                                                "esse": shared.DataValue{},
                                                "necessitatibus": shared.DataValue{},
                                            },
                                            RelationshipValue: &shared.RelationshipValue{
                                                TargetComponentName: sdk.String("sed"),
                                                TargetEntityID: sdk.String("veniam"),
                                            },
                                            StringValue: sdk.String("nesciunt"),
                                        },
                                    },
                                    NestedType: &shared.DataType{},
                                    Relationship: &shared.Relationship{
                                        RelationshipType: sdk.String("expedita"),
                                        TargetComponentTypeID: sdk.String("eum"),
                                    },
                                    Type: shared.TypeEnumBoolean,
                                    UnitOfMeasure: sdk.String("voluptatum"),
                                },
                                DefaultValue: &shared.DataValue{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(3016.92),
                                    Expression: sdk.String("exercitationem"),
                                    IntegerValue: sdk.Int64(70410),
                                    ListValue: []shared.DataValue{
                                        shared.DataValue{},
                                        shared.DataValue{},
                                        shared.DataValue{},
                                        shared.DataValue{},
                                    },
                                    LongValue: sdk.Int64(421844),
                                    MapValue: map[string]shared.DataValue{
                                        "laboriosam": shared.DataValue{},
                                        "recusandae": shared.DataValue{},
                                        "consequuntur": shared.DataValue{},
                                        "voluptatem": shared.DataValue{},
                                    },
                                    RelationshipValue: &shared.RelationshipValue{
                                        TargetComponentName: sdk.String("exercitationem"),
                                        TargetEntityID: sdk.String("necessitatibus"),
                                    },
                                    StringValue: sdk.String("quasi"),
                                },
                                DisplayName: sdk.String("nisi"),
                                IsExternalID: sdk.Bool(false),
                                IsRequiredInEntity: sdk.Bool(false),
                                IsStoredExternally: sdk.Bool(false),
                                IsTimeSeries: sdk.Bool(false),
                            },
                            UpdateType: shared.PropertyUpdateTypeEnumCreate.ToPointer(),
                            Value: &shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(8783.73),
                                Expression: sdk.String("est"),
                                IntegerValue: sdk.Int64(690785),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(987349),
                                MapValue: map[string]shared.DataValue{
                                    "optio": shared.DataValue{},
                                    "occaecati": shared.DataValue{},
                                    "nemo": shared.DataValue{},
                                    "voluptate": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("blanditiis"),
                                    TargetEntityID: sdk.String("officia"),
                                },
                                StringValue: sdk.String("voluptas"),
                            },
                        },
                        "numquam": shared.PropertyRequest{
                            Definition: &shared.PropertyDefinitionRequest{
                                Configuration: map[string]string{
                                    "quos": "eius",
                                    "aspernatur": "ducimus",
                                },
                                DataType: &shared.DataType{
                                    AllowedValues: []shared.DataValue{
                                        shared.DataValue{
                                            BooleanValue: sdk.Bool(false),
                                            DoubleValue: sdk.Float64(6817.4),
                                            Expression: sdk.String("laudantium"),
                                            IntegerValue: sdk.Int64(277340),
                                            ListValue: []shared.DataValue{
                                                shared.DataValue{},
                                            },
                                            LongValue: sdk.Int64(524380),
                                            MapValue: map[string]shared.DataValue{
                                                "dicta": shared.DataValue{},
                                                "nisi": shared.DataValue{},
                                                "consequuntur": shared.DataValue{},
                                                "consectetur": shared.DataValue{},
                                            },
                                            RelationshipValue: &shared.RelationshipValue{
                                                TargetComponentName: sdk.String("aperiam"),
                                                TargetEntityID: sdk.String("cupiditate"),
                                            },
                                            StringValue: sdk.String("reiciendis"),
                                        },
                                    },
                                    NestedType: &shared.DataType{},
                                    Relationship: &shared.Relationship{
                                        RelationshipType: sdk.String("soluta"),
                                        TargetComponentTypeID: sdk.String("alias"),
                                    },
                                    Type: shared.TypeEnumInteger,
                                    UnitOfMeasure: sdk.String("eos"),
                                },
                                DefaultValue: &shared.DataValue{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(5790.11),
                                    Expression: sdk.String("iste"),
                                    IntegerValue: sdk.Int64(170099),
                                    ListValue: []shared.DataValue{
                                        shared.DataValue{},
                                    },
                                    LongValue: sdk.Int64(686362),
                                    MapValue: map[string]shared.DataValue{
                                        "voluptatibus": shared.DataValue{},
                                        "distinctio": shared.DataValue{},
                                        "omnis": shared.DataValue{},
                                        "delectus": shared.DataValue{},
                                    },
                                    RelationshipValue: &shared.RelationshipValue{
                                        TargetComponentName: sdk.String("minima"),
                                        TargetEntityID: sdk.String("praesentium"),
                                    },
                                    StringValue: sdk.String("maxime"),
                                },
                                DisplayName: sdk.String("magnam"),
                                IsExternalID: sdk.Bool(false),
                                IsRequiredInEntity: sdk.Bool(false),
                                IsStoredExternally: sdk.Bool(false),
                                IsTimeSeries: sdk.Bool(false),
                            },
                            UpdateType: shared.PropertyUpdateTypeEnumCreate.ToPointer(),
                            Value: &shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(5495.01),
                                Expression: sdk.String("commodi"),
                                IntegerValue: sdk.Int64(930819),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(520761),
                                MapValue: map[string]shared.DataValue{
                                    "modi": shared.DataValue{},
                                    "nam": shared.DataValue{},
                                    "vero": shared.DataValue{},
                                    "voluptatem": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("ipsam"),
                                    TargetEntityID: sdk.String("vel"),
                                },
                                StringValue: sdk.String("alias"),
                            },
                        },
                    },
                    UpdateType: shared.ComponentUpdateTypeEnumCreate.ToPointer(),
                },
                "non": shared.ComponentUpdateRequest{
                    ComponentTypeID: sdk.String("maiores"),
                    Description: sdk.String("enim"),
                    PropertyGroupUpdates: map[string]shared.ComponentPropertyGroupRequest{
                        "nulla": shared.ComponentPropertyGroupRequest{
                            GroupType: shared.GroupTypeEnumTabular.ToPointer(),
                            PropertyNames: []string{
                                "esse",
                                "nemo",
                                "reprehenderit",
                            },
                            UpdateType: shared.PropertyGroupUpdateTypeEnumCreate.ToPointer(),
                        },
                        "quis": shared.ComponentPropertyGroupRequest{
                            GroupType: shared.GroupTypeEnumTabular.ToPointer(),
                            PropertyNames: []string{
                                "accusamus",
                                "impedit",
                                "hic",
                            },
                            UpdateType: shared.PropertyGroupUpdateTypeEnumCreate.ToPointer(),
                        },
                        "asperiores": shared.ComponentPropertyGroupRequest{
                            GroupType: shared.GroupTypeEnumTabular.ToPointer(),
                            PropertyNames: []string{
                                "voluptas",
                                "debitis",
                            },
                            UpdateType: shared.PropertyGroupUpdateTypeEnumCreate.ToPointer(),
                        },
                    },
                    PropertyUpdates: map[string]shared.PropertyRequest{
                        "minus": shared.PropertyRequest{
                            Definition: &shared.PropertyDefinitionRequest{
                                Configuration: map[string]string{
                                    "laborum": "consectetur",
                                    "velit": "atque",
                                    "ipsum": "impedit",
                                },
                                DataType: &shared.DataType{
                                    AllowedValues: []shared.DataValue{
                                        shared.DataValue{
                                            BooleanValue: sdk.Bool(false),
                                            DoubleValue: sdk.Float64(7465.85),
                                            Expression: sdk.String("repudiandae"),
                                            IntegerValue: sdk.Int64(721430),
                                            ListValue: []shared.DataValue{
                                                shared.DataValue{},
                                                shared.DataValue{},
                                            },
                                            LongValue: sdk.Int64(482892),
                                            MapValue: map[string]shared.DataValue{
                                                "sequi": shared.DataValue{},
                                                "dignissimos": shared.DataValue{},
                                            },
                                            RelationshipValue: &shared.RelationshipValue{
                                                TargetComponentName: sdk.String("neque"),
                                                TargetEntityID: sdk.String("quo"),
                                            },
                                            StringValue: sdk.String("deleniti"),
                                        },
                                    },
                                    NestedType: &shared.DataType{},
                                    Relationship: &shared.Relationship{
                                        RelationshipType: sdk.String("quibusdam"),
                                        TargetComponentTypeID: sdk.String("iure"),
                                    },
                                    Type: shared.TypeEnumString,
                                    UnitOfMeasure: sdk.String("voluptatibus"),
                                },
                                DefaultValue: &shared.DataValue{
                                    BooleanValue: sdk.Bool(false),
                                    DoubleValue: sdk.Float64(4269.04),
                                    Expression: sdk.String("magnam"),
                                    IntegerValue: sdk.Int64(842855),
                                    ListValue: []shared.DataValue{
                                        shared.DataValue{},
                                    },
                                    LongValue: sdk.Int64(818034),
                                    MapValue: map[string]shared.DataValue{
                                        "architecto": shared.DataValue{},
                                        "voluptatibus": shared.DataValue{},
                                        "quia": shared.DataValue{},
                                    },
                                    RelationshipValue: &shared.RelationshipValue{
                                        TargetComponentName: sdk.String("porro"),
                                        TargetEntityID: sdk.String("aliquam"),
                                    },
                                    StringValue: sdk.String("velit"),
                                },
                                DisplayName: sdk.String("illo"),
                                IsExternalID: sdk.Bool(false),
                                IsRequiredInEntity: sdk.Bool(false),
                                IsStoredExternally: sdk.Bool(false),
                                IsTimeSeries: sdk.Bool(false),
                            },
                            UpdateType: shared.PropertyUpdateTypeEnumUpdate.ToPointer(),
                            Value: &shared.DataValue{
                                BooleanValue: sdk.Bool(false),
                                DoubleValue: sdk.Float64(4246.63),
                                Expression: sdk.String("ea"),
                                IntegerValue: sdk.Int64(107617),
                                ListValue: []shared.DataValue{
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                    shared.DataValue{},
                                },
                                LongValue: sdk.Int64(568218),
                                MapValue: map[string]shared.DataValue{
                                    "velit": shared.DataValue{},
                                    "ut": shared.DataValue{},
                                },
                                RelationshipValue: &shared.RelationshipValue{
                                    TargetComponentName: sdk.String("perspiciatis"),
                                    TargetEntityID: sdk.String("earum"),
                                },
                                StringValue: sdk.String("dicta"),
                            },
                        },
                    },
                    UpdateType: shared.ComponentUpdateTypeEnumDelete.ToPointer(),
                },
            },
            Description: sdk.String("voluptatibus"),
            EntityName: sdk.String("iste"),
            ParentEntityUpdate: &operations.UpdateEntityRequestBodyParentEntityUpdate{
                ParentEntityID: sdk.String("itaque"),
                UpdateType: shared.ParentEntityUpdateTypeEnumUpdate.ToPointer(),
            },
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("velit"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("dolor"),
        XAmzSignedHeaders: sdk.String("iusto"),
        EntityID: "sit",
        WorkspaceID: "doloremque",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateEntityResponse != nil {
        // handle response
    }
}
```

## UpdatePricingPlan

Update the pricing plan.

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
    res, err := s.SDK.UpdatePricingPlan(ctx, operations.UpdatePricingPlanRequest{
        RequestBody: operations.UpdatePricingPlanRequestBody{
            BundleNames: []string{
                "officia",
            },
            PricingMode: operations.UpdatePricingPlanRequestBodyPricingModeEnumTieredBundle,
        },
        XAmzAlgorithm: sdk.String("ea"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("voluptas"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("placeat"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("expedita"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdatePricingPlanResponse != nil {
        // handle response
    }
}
```

## UpdateScene

Updates a scene.

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
    res, err := s.SDK.UpdateScene(ctx, operations.UpdateSceneRequest{
        RequestBody: operations.UpdateSceneRequestBody{
            Capabilities: []string{
                "a",
                "voluptate",
                "ullam",
            },
            ContentLocation: sdk.String("unde"),
            Description: sdk.String("necessitatibus"),
            SceneMetadata: map[string]string{
                "impedit": "ipsam",
                "corporis": "est",
                "error": "esse",
            },
        },
        XAmzAlgorithm: sdk.String("labore"),
        XAmzContentSha256: sdk.String("veritatis"),
        XAmzCredential: sdk.String("vero"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("vitae"),
        XAmzSignature: sdk.String("inventore"),
        XAmzSignedHeaders: sdk.String("dolorem"),
        SceneID: "ad",
        WorkspaceID: "qui",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSceneResponse != nil {
        // handle response
    }
}
```

## UpdateWorkspace

Updates a workspace.

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
    res, err := s.SDK.UpdateWorkspace(ctx, operations.UpdateWorkspaceRequest{
        RequestBody: operations.UpdateWorkspaceRequestBody{
            Description: sdk.String("iste"),
            Role: sdk.String("ex"),
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("rem"),
        XAmzSecurityToken: sdk.String("dolorum"),
        XAmzSignature: sdk.String("odio"),
        XAmzSignedHeaders: sdk.String("fugit"),
        WorkspaceID: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateWorkspaceResponse != nil {
        // handle response
    }
}
```
