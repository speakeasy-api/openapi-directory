# SDK

## Overview

<fullname>Amazon Cloud Directory</fullname> <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the development and management of cloud-scale web, mobile, and IoT applications. This guide describes the Cloud Directory operations that you can call programmatically and includes detailed information on data types and errors. For information about AWS Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">AWS Directory Service Administration Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/clouddirectory/>
### Available Operations

* [AddFacetToObject](#addfacettoobject) - Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.
* [ApplySchema](#applyschema) - Copies the input published schema, at the specified version, into the <a>Directory</a> with the same name and version as that of the published schema.
* [AttachObject](#attachobject) - <p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>
* [AttachPolicy](#attachpolicy) - Attaches a policy object to a regular object. An object can have a limited number of attached policies.
* [AttachToIndex](#attachtoindex) - Attaches the specified object to the specified index.
* [AttachTypedLink](#attachtypedlink) - Attaches a typed link to a specified source and target object. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [BatchRead](#batchread) - Performs all the read operations in a batch. 
* [BatchWrite](#batchwrite) - Performs all the write operations in a batch. Either all the operations succeed or none.
* [CreateDirectory](#createdirectory) - Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.
* [CreateFacet](#createfacet) - Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.
* [CreateIndex](#createindex) - Creates an index object. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_indexing.html">Indexing</a> for more information.
* [CreateObject](#createobject) - Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. 
* [CreateSchema](#createschema) - <p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>
* [CreateTypedLinkFacet](#createtypedlinkfacet) - Creates a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [DeleteDirectory](#deletedirectory) - Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.
* [DeleteFacet](#deletefacet) - Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s that are associated with the facet will be deleted. Only development schema facets are allowed deletion.
* [DeleteObject](#deleteobject) - Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted.
* [DeleteSchema](#deleteschema) - Deletes a given schema. Schemas in a development and published state can only be deleted. 
* [DeleteTypedLinkFacet](#deletetypedlinkfacet) - Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [DetachFromIndex](#detachfromindex) - Detaches the specified object from the specified index.
* [DetachObject](#detachobject) - Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.
* [DetachPolicy](#detachpolicy) - Detaches a policy from an object.
* [DetachTypedLink](#detachtypedlink) - Detaches a typed link from a specified source and target object. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [DisableDirectory](#disabledirectory) - Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.
* [EnableDirectory](#enabledirectory) - Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.
* [GetAppliedSchemaVersion](#getappliedschemaversion) - Returns current applied schema version ARN, including the minor version in use.
* [GetDirectory](#getdirectory) - Retrieves metadata about a directory.
* [GetFacet](#getfacet) - Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema facets -- published, development, or applied.
* [GetLinkAttributes](#getlinkattributes) - Retrieves attributes that are associated with a typed link.
* [GetObjectAttributes](#getobjectattributes) - Retrieves attributes within a facet that are associated with an object.
* [GetObjectInformation](#getobjectinformation) - Retrieves metadata about an object.
* [GetSchemaAsJSON](#getschemaasjson) - Retrieves a JSON representation of the schema. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_schemas.html#jsonformat">JSON Schema Format</a> for more information.
* [GetTypedLinkFacetInformation](#gettypedlinkfacetinformation) - Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [ListAppliedSchemaArns](#listappliedschemaarns) - Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.
* [ListAttachedIndices](#listattachedindices) - Lists indices attached to the specified object.
* [ListDevelopmentSchemaArns](#listdevelopmentschemaarns) - Retrieves each Amazon Resource Name (ARN) of schemas in the development state.
* [ListDirectories](#listdirectories) - Lists directories created within an account.
* [ListFacetAttributes](#listfacetattributes) - Retrieves attributes attached to the facet.
* [ListFacetNames](#listfacetnames) - Retrieves the names of facets that exist in a schema.
* [ListIncomingTypedLinks](#listincomingtypedlinks) - Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [ListIndex](#listindex) - Lists objects attached to the specified index.
* [ListObjectAttributes](#listobjectattributes) - Lists all attributes that are associated with an object. 
* [ListObjectChildren](#listobjectchildren) - Returns a paginated list of child objects that are associated with a given object.
* [ListObjectParentPaths](#listobjectparentpaths) - <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#dirstructure">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>
* [ListObjectParents](#listobjectparents) - Lists parent objects that are associated with a given object in pagination fashion.
* [ListObjectPolicies](#listobjectpolicies) - Returns policies attached to an object in pagination fashion.
* [ListOutgoingTypedLinks](#listoutgoingtypedlinks) - Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [ListPolicyAttachments](#listpolicyattachments) - Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.
* [ListPublishedSchemaArns](#listpublishedschemaarns) - Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.
* [ListTagsForResource](#listtagsforresource) - Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.
* [ListTypedLinkFacetAttributes](#listtypedlinkfacetattributes) - Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [ListTypedLinkFacetNames](#listtypedlinkfacetnames) - Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [LookupPolicy](#lookuppolicy) - Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#policies">Policies</a>.
* [PublishSchema](#publishschema) - Publishes a development schema with a major version and a recommended minor version.
* [PutSchemaFromJSON](#putschemafromjson) - Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_schemas.html#jsonformat">JSON Schema Format</a> for more information.
* [RemoveFacetFromObject](#removefacetfromobject) - Removes the specified facet from the specified object.
* [TagResource](#tagresource) - An API operation for adding tags to a resource.
* [UntagResource](#untagresource) - An API operation for removing tags from a resource.
* [UpdateFacet](#updatefacet) - <p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>
* [UpdateLinkAttributes](#updatelinkattributes) - Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.
* [UpdateObjectAttributes](#updateobjectattributes) - Updates a given object's attributes.
* [UpdateSchema](#updateschema) - Updates the schema name with a new name. Only development schema names can be updated.
* [UpdateTypedLinkFacet](#updatetypedlinkfacet) - Updates a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [UpgradeAppliedSchema](#upgradeappliedschema) - Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.
* [UpgradePublishedSchema](#upgradepublishedschema) - Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.

## AddFacetToObject

Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.

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
    res, err := s.SDK.AddFacetToObject(ctx, operations.AddFacetToObjectRequest{
        RequestBody: operations.AddFacetToObjectRequestBody{
            ObjectAttributeList: []shared.AttributeKeyAndValue{
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "officia",
                        Name: "Wayne Lind",
                        SchemaArn: "totam",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: sdk.String("beatae"),
                        BooleanValue: sdk.Bool(false),
                        DatetimeValue: types.MustTimeFromString("2022-07-12T03:15:36.542Z"),
                        NumberValue: sdk.String("modi"),
                        StringValue: sdk.String("qui"),
                    },
                },
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "impedit",
                        Name: "Cory Emmerich",
                        SchemaArn: "perferendis",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: sdk.String("ad"),
                        BooleanValue: sdk.Bool(false),
                        DatetimeValue: types.MustTimeFromString("2022-09-13T17:41:46.141Z"),
                        NumberValue: sdk.String("iste"),
                        StringValue: sdk.String("dolor"),
                    },
                },
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "natus",
                        Name: "May Turcotte",
                        SchemaArn: "corporis",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: sdk.String("iste"),
                        BooleanValue: sdk.Bool(false),
                        DatetimeValue: types.MustTimeFromString("2022-02-05T15:25:35.140Z"),
                        NumberValue: sdk.String("quidem"),
                        StringValue: sdk.String("architecto"),
                    },
                },
            },
            ObjectReference: operations.AddFacetToObjectRequestBodyObjectReference{
                Selector: sdk.String("ipsa"),
            },
            SchemaFacet: operations.AddFacetToObjectRequestBodySchemaFacet{
                FacetName: sdk.String("reiciendis"),
                SchemaArn: sdk.String("est"),
            },
        },
        XAmzAlgorithm: sdk.String("mollitia"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("dolores"),
        XAmzDate: sdk.String("dolorem"),
        XAmzSecurityToken: sdk.String("corporis"),
        XAmzSignature: sdk.String("explicabo"),
        XAmzSignedHeaders: sdk.String("nobis"),
        XAmzDataPartition: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddFacetToObjectResponse != nil {
        // handle response
    }
}
```

## ApplySchema

Copies the input published schema, at the specified version, into the <a>Directory</a> with the same name and version as that of the published schema.

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
    res, err := s.SDK.ApplySchema(ctx, operations.ApplySchemaRequest{
        RequestBody: operations.ApplySchemaRequestBody{
            PublishedSchemaArn: "omnis",
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("excepturi"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("iure"),
        XAmzSignature: sdk.String("culpa"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzDataPartition: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ApplySchemaResponse != nil {
        // handle response
    }
}
```

## AttachObject

<p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>

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
    res, err := s.SDK.AttachObject(ctx, operations.AttachObjectRequest{
        RequestBody: operations.AttachObjectRequestBody{
            ChildReference: operations.AttachObjectRequestBodyChildReference{
                Selector: sdk.String("architecto"),
            },
            LinkName: "mollitia",
            ParentReference: operations.AttachObjectRequestBodyParentReference{
                Selector: sdk.String("dolorem"),
            },
        },
        XAmzAlgorithm: sdk.String("culpa"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("mollitia"),
        XAmzSecurityToken: sdk.String("occaecati"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("commodi"),
        XAmzDataPartition: "quam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AttachObjectResponse != nil {
        // handle response
    }
}
```

## AttachPolicy

Attaches a policy object to a regular object. An object can have a limited number of attached policies.

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
    res, err := s.SDK.AttachPolicy(ctx, operations.AttachPolicyRequest{
        RequestBody: operations.AttachPolicyRequestBody{
            ObjectReference: operations.AttachPolicyRequestBodyObjectReference{
                Selector: sdk.String("molestiae"),
            },
            PolicyReference: operations.AttachPolicyRequestBodyPolicyReference{
                Selector: sdk.String("velit"),
            },
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("quia"),
        XAmzCredential: sdk.String("quis"),
        XAmzDate: sdk.String("vitae"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("animi"),
        XAmzSignedHeaders: sdk.String("enim"),
        XAmzDataPartition: "odit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AttachPolicyResponse != nil {
        // handle response
    }
}
```

## AttachToIndex

Attaches the specified object to the specified index.

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
    res, err := s.SDK.AttachToIndex(ctx, operations.AttachToIndexRequest{
        RequestBody: operations.AttachToIndexRequestBody{
            IndexReference: operations.AttachToIndexRequestBodyIndexReference{
                Selector: sdk.String("quo"),
            },
            TargetReference: operations.AttachToIndexRequestBodyTargetReference{
                Selector: sdk.String("sequi"),
            },
        },
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("id"),
        XAmzDate: sdk.String("possimus"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("quasi"),
        XAmzSignedHeaders: sdk.String("error"),
        XAmzDataPartition: "temporibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AttachToIndexResponse != nil {
        // handle response
    }
}
```

## AttachTypedLink

Attaches a typed link to a specified source and target object. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
    res, err := s.SDK.AttachTypedLink(ctx, operations.AttachTypedLinkRequest{
        RequestBody: operations.AttachTypedLinkRequestBody{
            Attributes: []shared.AttributeNameAndValue{
                shared.AttributeNameAndValue{
                    AttributeName: "quasi",
                    Value: shared.TypedAttributeValue{
                        BinaryValue: sdk.String("reiciendis"),
                        BooleanValue: sdk.Bool(false),
                        DatetimeValue: types.MustTimeFromString("2020-05-14T09:04:32.205Z"),
                        NumberValue: sdk.String("nihil"),
                        StringValue: sdk.String("praesentium"),
                    },
                },
                shared.AttributeNameAndValue{
                    AttributeName: "voluptatibus",
                    Value: shared.TypedAttributeValue{
                        BinaryValue: sdk.String("ipsa"),
                        BooleanValue: sdk.Bool(false),
                        DatetimeValue: types.MustTimeFromString("2022-02-05T15:41:25.512Z"),
                        NumberValue: sdk.String("cum"),
                        StringValue: sdk.String("perferendis"),
                    },
                },
                shared.AttributeNameAndValue{
                    AttributeName: "doloremque",
                    Value: shared.TypedAttributeValue{
                        BinaryValue: sdk.String("reprehenderit"),
                        BooleanValue: sdk.Bool(false),
                        DatetimeValue: types.MustTimeFromString("2022-01-08T10:49:12.847Z"),
                        NumberValue: sdk.String("dicta"),
                        StringValue: sdk.String("corporis"),
                    },
                },
            },
            SourceObjectReference: operations.AttachTypedLinkRequestBodySourceObjectReference{
                Selector: sdk.String("dolore"),
            },
            TargetObjectReference: operations.AttachTypedLinkRequestBodyTargetObjectReference{
                Selector: sdk.String("iusto"),
            },
            TypedLinkFacet: operations.AttachTypedLinkRequestBodyTypedLinkFacet{
                SchemaArn: sdk.String("dicta"),
                TypedLinkName: sdk.String("harum"),
            },
        },
        XAmzAlgorithm: sdk.String("enim"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("quae"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzDataPartition: "molestias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AttachTypedLinkResponse != nil {
        // handle response
    }
}
```

## BatchRead

Performs all the read operations in a batch. 

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
    res, err := s.SDK.BatchRead(ctx, operations.BatchReadRequest{
        RequestBody: operations.BatchReadRequestBody{
            Operations: []shared.BatchReadOperation{
                shared.BatchReadOperation{
                    GetLinkAttributes: &shared.BatchGetLinkAttributes{
                        AttributeNames: []string{
                            "modi",
                            "praesentium",
                            "rem",
                            "voluptates",
                        },
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "repudiandae",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("sint"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-01-26T19:21:55.034Z"),
                                        NumberValue: sdk.String("incidunt"),
                                        StringValue: sdk.String("enim"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("consequatur"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("est"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "quibusdam",
                                TypedLinkName: "explicabo",
                            },
                        },
                    },
                    GetObjectAttributes: &shared.BatchGetObjectAttributes{
                        AttributeNames: []string{
                            "distinctio",
                            "quibusdam",
                            "labore",
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("modi"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("qui"),
                            SchemaArn: sdk.String("aliquid"),
                        },
                    },
                    GetObjectInformation: &shared.BatchGetObjectInformation{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("cupiditate"),
                        },
                    },
                    ListAttachedIndices: &shared.BatchListAttachedIndices{
                        MaxResults: sdk.Int64(552822),
                        NextToken: sdk.String("perferendis"),
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("magni"),
                        },
                    },
                    ListIncomingTypedLinks: &shared.BatchListIncomingTypedLinks{
                        FilterAttributeRanges: []shared.TypedLinkAttributeRange{
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("ipsam"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumFirst,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("fugit"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-11-11T04:17:07.569Z"),
                                        NumberValue: sdk.String("tempora"),
                                        StringValue: sdk.String("facilis"),
                                    },
                                    StartMode: shared.RangeModeEnumInclusive,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("labore"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-09-13T13:11:22.288Z"),
                                        NumberValue: sdk.String("non"),
                                        StringValue: sdk.String("eligendi"),
                                    },
                                },
                            },
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("sint"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumLast,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("provident"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-04-14T09:13:11.675Z"),
                                        NumberValue: sdk.String("officia"),
                                        StringValue: sdk.String("dolor"),
                                    },
                                    StartMode: shared.RangeModeEnumExclusive,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("a"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-02-08T14:21:47.573Z"),
                                        NumberValue: sdk.String("in"),
                                        StringValue: sdk.String("illum"),
                                    },
                                },
                            },
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("maiores"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumInclusive,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("dicta"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-03-27T00:52:20.281Z"),
                                        NumberValue: sdk.String("facere"),
                                        StringValue: sdk.String("ea"),
                                    },
                                    StartMode: shared.RangeModeEnumLast,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("laborum"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-04-02T11:21:13.260Z"),
                                        NumberValue: sdk.String("occaecati"),
                                        StringValue: sdk.String("enim"),
                                    },
                                },
                            },
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("accusamus"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumExclusive,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("quidem"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-07-20T13:32:41.687Z"),
                                        NumberValue: sdk.String("id"),
                                        StringValue: sdk.String("blanditiis"),
                                    },
                                    StartMode: shared.RangeModeEnumLastBeforeMissingValues,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("sapiente"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-05-10T22:38:44.806Z"),
                                        NumberValue: sdk.String("nisi"),
                                        StringValue: sdk.String("vel"),
                                    },
                                },
                            },
                        },
                        FilterTypedLink: &shared.TypedLinkSchemaAndFacetName{
                            SchemaArn: "natus",
                            TypedLinkName: "omnis",
                        },
                        MaxResults: sdk.Int64(474867),
                        NextToken: sdk.String("perferendis"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("nihil"),
                        },
                    },
                    ListIndex: &shared.BatchListIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("magnam"),
                        },
                        MaxResults: sdk.Int64(716075),
                        NextToken: sdk.String("id"),
                        RangesOnIndexedValues: []shared.ObjectAttributeRange{
                            shared.ObjectAttributeRange{
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "labore",
                                    Name: "Ada Rohan",
                                    SchemaArn: "aspernatur",
                                },
                                Range: &shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumFirst,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("magnam"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-06-06T23:06:26.119Z"),
                                        NumberValue: sdk.String("ullam"),
                                        StringValue: sdk.String("provident"),
                                    },
                                    StartMode: shared.RangeModeEnumLastBeforeMissingValues,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("sint"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-05-07T13:57:38.738Z"),
                                        NumberValue: sdk.String("reiciendis"),
                                        StringValue: sdk.String("mollitia"),
                                    },
                                },
                            },
                            shared.ObjectAttributeRange{
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "ad",
                                    Name: "Carmen Treutel",
                                    SchemaArn: "quasi",
                                },
                                Range: &shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumLastBeforeMissingValues,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("doloribus"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-03-21T22:14:24.691Z"),
                                        NumberValue: sdk.String("maxime"),
                                        StringValue: sdk.String("deleniti"),
                                    },
                                    StartMode: shared.RangeModeEnumInclusive,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("in"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-11-25T15:46:28.441Z"),
                                        NumberValue: sdk.String("repudiandae"),
                                        StringValue: sdk.String("ullam"),
                                    },
                                },
                            },
                        },
                    },
                    ListObjectAttributes: &shared.BatchListObjectAttributes{
                        FacetFilter: &shared.SchemaFacet{
                            FacetName: sdk.String("expedita"),
                            SchemaArn: sdk.String("nihil"),
                        },
                        MaxResults: sdk.Int64(998848),
                        NextToken: sdk.String("quibusdam"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("sed"),
                        },
                    },
                    ListObjectChildren: &shared.BatchListObjectChildren{
                        MaxResults: sdk.Int64(904648),
                        NextToken: sdk.String("pariatur"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("accusantium"),
                        },
                    },
                    ListObjectParentPaths: &shared.BatchListObjectParentPaths{
                        MaxResults: sdk.Int64(162493),
                        NextToken: sdk.String("praesentium"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("natus"),
                        },
                    },
                    ListObjectPolicies: &shared.BatchListObjectPolicies{
                        MaxResults: sdk.Int64(166847),
                        NextToken: sdk.String("sunt"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("quo"),
                        },
                    },
                    ListOutgoingTypedLinks: &shared.BatchListOutgoingTypedLinks{
                        FilterAttributeRanges: []shared.TypedLinkAttributeRange{
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("pariatur"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumExclusive,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("ea"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-09-20T19:40:48.375Z"),
                                        NumberValue: sdk.String("ea"),
                                        StringValue: sdk.String("accusantium"),
                                    },
                                    StartMode: shared.RangeModeEnumFirst,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("maiores"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-04-03T11:56:45.015Z"),
                                        NumberValue: sdk.String("voluptate"),
                                        StringValue: sdk.String("autem"),
                                    },
                                },
                            },
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("nam"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumFirst,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("pariatur"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-01-09T22:25:53.570Z"),
                                        NumberValue: sdk.String("perferendis"),
                                        StringValue: sdk.String("fugiat"),
                                    },
                                    StartMode: shared.RangeModeEnumLast,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("aut"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-12-02T19:46:35.147Z"),
                                        NumberValue: sdk.String("hic"),
                                        StringValue: sdk.String("libero"),
                                    },
                                },
                            },
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("nobis"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumFirst,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("quis"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-01-08T15:06:08.615Z"),
                                        NumberValue: sdk.String("eaque"),
                                        StringValue: sdk.String("quis"),
                                    },
                                    StartMode: shared.RangeModeEnumFirst,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("eos"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-10-30T14:09:25.982Z"),
                                        NumberValue: sdk.String("minus"),
                                        StringValue: sdk.String("quam"),
                                    },
                                },
                            },
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("dolor"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumExclusive,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("nostrum"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2020-03-20T18:01:24.992Z"),
                                        NumberValue: sdk.String("omnis"),
                                        StringValue: sdk.String("facilis"),
                                    },
                                    StartMode: shared.RangeModeEnumLastBeforeMissingValues,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("voluptatem"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-07-04T15:50:14.407Z"),
                                        NumberValue: sdk.String("blanditiis"),
                                        StringValue: sdk.String("error"),
                                    },
                                },
                            },
                        },
                        FilterTypedLink: &shared.TypedLinkSchemaAndFacetName{
                            SchemaArn: "eaque",
                            TypedLinkName: "occaecati",
                        },
                        MaxResults: sdk.Int64(699098),
                        NextToken: sdk.String("adipisci"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("asperiores"),
                        },
                    },
                    ListPolicyAttachments: &shared.BatchListPolicyAttachments{
                        MaxResults: sdk.Int64(934214),
                        NextToken: sdk.String("modi"),
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("iste"),
                        },
                    },
                    LookupPolicy: &shared.BatchLookupPolicy{
                        MaxResults: sdk.Int64(679091),
                        NextToken: sdk.String("deleniti"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("pariatur"),
                        },
                    },
                },
                shared.BatchReadOperation{
                    GetLinkAttributes: &shared.BatchGetLinkAttributes{
                        AttributeNames: []string{
                            "nobis",
                            "libero",
                            "delectus",
                        },
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "quos",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("aliquid"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-10-16T09:46:06.582Z"),
                                        NumberValue: sdk.String("dolor"),
                                        StringValue: sdk.String("qui"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "ipsum",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("hic"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-07-10T03:04:11.898Z"),
                                        NumberValue: sdk.String("voluptate"),
                                        StringValue: sdk.String("dignissimos"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("reiciendis"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("amet"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "dolorum",
                                TypedLinkName: "numquam",
                            },
                        },
                    },
                    GetObjectAttributes: &shared.BatchGetObjectAttributes{
                        AttributeNames: []string{
                            "ipsa",
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("ipsa"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("iure"),
                            SchemaArn: sdk.String("odio"),
                        },
                    },
                    GetObjectInformation: &shared.BatchGetObjectInformation{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("quaerat"),
                        },
                    },
                    ListAttachedIndices: &shared.BatchListAttachedIndices{
                        MaxResults: sdk.Int64(881005),
                        NextToken: sdk.String("quidem"),
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("voluptatibus"),
                        },
                    },
                    ListIncomingTypedLinks: &shared.BatchListIncomingTypedLinks{
                        FilterAttributeRanges: []shared.TypedLinkAttributeRange{
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("natus"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumFirst,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("atque"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-02-23T01:35:05.899Z"),
                                        NumberValue: sdk.String("ab"),
                                        StringValue: sdk.String("soluta"),
                                    },
                                    StartMode: shared.RangeModeEnumInclusive,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("iusto"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-04-28T20:45:55.086Z"),
                                        NumberValue: sdk.String("deleniti"),
                                        StringValue: sdk.String("omnis"),
                                    },
                                },
                            },
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("necessitatibus"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumInclusive,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("asperiores"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-10-13T19:58:56.024Z"),
                                        NumberValue: sdk.String("voluptate"),
                                        StringValue: sdk.String("id"),
                                    },
                                    StartMode: shared.RangeModeEnumExclusive,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("eius"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-24T11:05:48.936Z"),
                                        NumberValue: sdk.String("amet"),
                                        StringValue: sdk.String("optio"),
                                    },
                                },
                            },
                        },
                        FilterTypedLink: &shared.TypedLinkSchemaAndFacetName{
                            SchemaArn: "accusamus",
                            TypedLinkName: "ad",
                        },
                        MaxResults: sdk.Int64(904425),
                        NextToken: sdk.String("suscipit"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("deserunt"),
                        },
                    },
                    ListIndex: &shared.BatchListIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("provident"),
                        },
                        MaxResults: sdk.Int64(324683),
                        NextToken: sdk.String("repellendus"),
                        RangesOnIndexedValues: []shared.ObjectAttributeRange{
                            shared.ObjectAttributeRange{
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "similique",
                                    Name: "Cristina Hahn",
                                    SchemaArn: "quod",
                                },
                                Range: &shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumExclusive,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("qui"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-02-04T11:05:24.484Z"),
                                        NumberValue: sdk.String("esse"),
                                        StringValue: sdk.String("harum"),
                                    },
                                    StartMode: shared.RangeModeEnumLastBeforeMissingValues,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("ipsum"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2020-02-28T15:06:02.733Z"),
                                        NumberValue: sdk.String("amet"),
                                        StringValue: sdk.String("tempore"),
                                    },
                                },
                            },
                            shared.ObjectAttributeRange{
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "accusamus",
                                    Name: "Darlene Effertz",
                                    SchemaArn: "nihil",
                                },
                                Range: &shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumFirst,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("expedita"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-11-05T21:38:15.600Z"),
                                        NumberValue: sdk.String("vel"),
                                        StringValue: sdk.String("libero"),
                                    },
                                    StartMode: shared.RangeModeEnumLast,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("deserunt"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-10-14T13:38:40.307Z"),
                                        NumberValue: sdk.String("incidunt"),
                                        StringValue: sdk.String("qui"),
                                    },
                                },
                            },
                            shared.ObjectAttributeRange{
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "cupiditate",
                                    Name: "Miss Jody Rogahn",
                                    SchemaArn: "incidunt",
                                },
                                Range: &shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumFirst,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("dolores"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-08-04T17:36:39.068Z"),
                                        NumberValue: sdk.String("aliquid"),
                                        StringValue: sdk.String("quam"),
                                    },
                                    StartMode: shared.RangeModeEnumLastBeforeMissingValues,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("temporibus"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-10-18T05:22:32.548Z"),
                                        NumberValue: sdk.String("fugit"),
                                        StringValue: sdk.String("magni"),
                                    },
                                },
                            },
                        },
                    },
                    ListObjectAttributes: &shared.BatchListObjectAttributes{
                        FacetFilter: &shared.SchemaFacet{
                            FacetName: sdk.String("odio"),
                            SchemaArn: sdk.String("sunt"),
                        },
                        MaxResults: sdk.Int64(355613),
                        NextToken: sdk.String("nam"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("hic"),
                        },
                    },
                    ListObjectChildren: &shared.BatchListObjectChildren{
                        MaxResults: sdk.Int64(30452),
                        NextToken: sdk.String("cumque"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("soluta"),
                        },
                    },
                    ListObjectParentPaths: &shared.BatchListObjectParentPaths{
                        MaxResults: sdk.Int64(748664),
                        NextToken: sdk.String("et"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("saepe"),
                        },
                    },
                    ListObjectPolicies: &shared.BatchListObjectPolicies{
                        MaxResults: sdk.Int64(217450),
                        NextToken: sdk.String("veritatis"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("nobis"),
                        },
                    },
                    ListOutgoingTypedLinks: &shared.BatchListOutgoingTypedLinks{
                        FilterAttributeRanges: []shared.TypedLinkAttributeRange{
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("tempore"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumLastBeforeMissingValues,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("aperiam"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-05-16T23:21:11.104Z"),
                                        NumberValue: sdk.String("dolore"),
                                        StringValue: sdk.String("labore"),
                                    },
                                    StartMode: shared.RangeModeEnumLast,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("dolorum"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-08T23:47:03.469Z"),
                                        NumberValue: sdk.String("aut"),
                                        StringValue: sdk.String("quas"),
                                    },
                                },
                            },
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("itaque"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumFirst,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("est"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2020-08-24T06:10:53.249Z"),
                                        NumberValue: sdk.String("doloribus"),
                                        StringValue: sdk.String("ut"),
                                    },
                                    StartMode: shared.RangeModeEnumInclusive,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("cupiditate"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-08T15:45:05.802Z"),
                                        NumberValue: sdk.String("laudantium"),
                                        StringValue: sdk.String("odio"),
                                    },
                                },
                            },
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("occaecati"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumExclusive,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("quisquam"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-03-07T21:49:29.078Z"),
                                        NumberValue: sdk.String("quis"),
                                        StringValue: sdk.String("ipsum"),
                                    },
                                    StartMode: shared.RangeModeEnumExclusive,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("voluptate"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-02-14T05:06:03.793Z"),
                                        NumberValue: sdk.String("tenetur"),
                                        StringValue: sdk.String("dignissimos"),
                                    },
                                },
                            },
                        },
                        FilterTypedLink: &shared.TypedLinkSchemaAndFacetName{
                            SchemaArn: "hic",
                            TypedLinkName: "distinctio",
                        },
                        MaxResults: sdk.Int64(799203),
                        NextToken: sdk.String("odio"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("similique"),
                        },
                    },
                    ListPolicyAttachments: &shared.BatchListPolicyAttachments{
                        MaxResults: sdk.Int64(708548),
                        NextToken: sdk.String("vero"),
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("ducimus"),
                        },
                    },
                    LookupPolicy: &shared.BatchLookupPolicy{
                        MaxResults: sdk.Int64(293020),
                        NextToken: sdk.String("quibusdam"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("illum"),
                        },
                    },
                },
                shared.BatchReadOperation{
                    GetLinkAttributes: &shared.BatchGetLinkAttributes{
                        AttributeNames: []string{
                            "natus",
                        },
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "aut",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("voluptatibus"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-02-20T06:09:58.619Z"),
                                        NumberValue: sdk.String("fugit"),
                                        StringValue: sdk.String("porro"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "maiores",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("doloribus"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-03-31T22:43:48.703Z"),
                                        NumberValue: sdk.String("ducimus"),
                                        StringValue: sdk.String("alias"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "officia",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("tempora"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-08-04T04:05:19.236Z"),
                                        NumberValue: sdk.String("aspernatur"),
                                        StringValue: sdk.String("vel"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "possimus",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("magnam"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-08-07T14:04:49.880Z"),
                                        NumberValue: sdk.String("laudantium"),
                                        StringValue: sdk.String("dicta"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("dolor"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("maiores"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "quasi",
                                TypedLinkName: "ex",
                            },
                        },
                    },
                    GetObjectAttributes: &shared.BatchGetObjectAttributes{
                        AttributeNames: []string{
                            "excepturi",
                            "voluptatibus",
                            "nostrum",
                            "sapiente",
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("quisquam"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("saepe"),
                            SchemaArn: sdk.String("ea"),
                        },
                    },
                    GetObjectInformation: &shared.BatchGetObjectInformation{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("impedit"),
                        },
                    },
                    ListAttachedIndices: &shared.BatchListAttachedIndices{
                        MaxResults: sdk.Int64(359271),
                        NextToken: sdk.String("veniam"),
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("aliquid"),
                        },
                    },
                    ListIncomingTypedLinks: &shared.BatchListIncomingTypedLinks{
                        FilterAttributeRanges: []shared.TypedLinkAttributeRange{
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("magnam"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumLastBeforeMissingValues,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("quo"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-01-27T22:22:28.881Z"),
                                        NumberValue: sdk.String("aspernatur"),
                                        StringValue: sdk.String("minima"),
                                    },
                                    StartMode: shared.RangeModeEnumFirst,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("a"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-21T19:37:25.645Z"),
                                        NumberValue: sdk.String("aut"),
                                        StringValue: sdk.String("deleniti"),
                                    },
                                },
                            },
                        },
                        FilterTypedLink: &shared.TypedLinkSchemaAndFacetName{
                            SchemaArn: "impedit",
                            TypedLinkName: "aliquam",
                        },
                        MaxResults: sdk.Int64(146946),
                        NextToken: sdk.String("accusamus"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("inventore"),
                        },
                    },
                    ListIndex: &shared.BatchListIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("non"),
                        },
                        MaxResults: sdk.Int64(89603),
                        NextToken: sdk.String("dolorum"),
                        RangesOnIndexedValues: []shared.ObjectAttributeRange{
                            shared.ObjectAttributeRange{
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "placeat",
                                    Name: "Agnes Johnston",
                                    SchemaArn: "assumenda",
                                },
                                Range: &shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumExclusive,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("voluptas"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-10-22T12:27:01.822Z"),
                                        NumberValue: sdk.String("tempora"),
                                        StringValue: sdk.String("numquam"),
                                    },
                                    StartMode: shared.RangeModeEnumFirst,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("provident"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-07-11T02:03:34.375Z"),
                                        NumberValue: sdk.String("magnam"),
                                        StringValue: sdk.String("odio"),
                                    },
                                },
                            },
                            shared.ObjectAttributeRange{
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "eius",
                                    Name: "Tamara Leffler",
                                    SchemaArn: "quidem",
                                },
                                Range: &shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumExclusive,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("ut"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-08-15T07:50:23.042Z"),
                                        NumberValue: sdk.String("assumenda"),
                                        StringValue: sdk.String("eos"),
                                    },
                                    StartMode: shared.RangeModeEnumLastBeforeMissingValues,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("quisquam"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-11T06:00:38.230Z"),
                                        NumberValue: sdk.String("id"),
                                        StringValue: sdk.String("quidem"),
                                    },
                                },
                            },
                            shared.ObjectAttributeRange{
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "neque",
                                    Name: "Dallas Sanford",
                                    SchemaArn: "eos",
                                },
                                Range: &shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumLast,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("ab"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-24T22:15:46.522Z"),
                                        NumberValue: sdk.String("tempora"),
                                        StringValue: sdk.String("debitis"),
                                    },
                                    StartMode: shared.RangeModeEnumLast,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("aspernatur"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-03-22T14:16:41.787Z"),
                                        NumberValue: sdk.String("esse"),
                                        StringValue: sdk.String("recusandae"),
                                    },
                                },
                            },
                        },
                    },
                    ListObjectAttributes: &shared.BatchListObjectAttributes{
                        FacetFilter: &shared.SchemaFacet{
                            FacetName: sdk.String("aperiam"),
                            SchemaArn: sdk.String("distinctio"),
                        },
                        MaxResults: sdk.Int64(799796),
                        NextToken: sdk.String("dignissimos"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("inventore"),
                        },
                    },
                    ListObjectChildren: &shared.BatchListObjectChildren{
                        MaxResults: sdk.Int64(469498),
                        NextToken: sdk.String("totam"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("accusamus"),
                        },
                    },
                    ListObjectParentPaths: &shared.BatchListObjectParentPaths{
                        MaxResults: sdk.Int64(306810),
                        NextToken: sdk.String("odio"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("occaecati"),
                        },
                    },
                    ListObjectPolicies: &shared.BatchListObjectPolicies{
                        MaxResults: sdk.Int64(414567),
                        NextToken: sdk.String("sapiente"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("dolores"),
                        },
                    },
                    ListOutgoingTypedLinks: &shared.BatchListOutgoingTypedLinks{
                        FilterAttributeRanges: []shared.TypedLinkAttributeRange{
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("molestiae"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumFirst,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("porro"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-06-11T21:40:41.165Z"),
                                        NumberValue: sdk.String("praesentium"),
                                        StringValue: sdk.String("consequuntur"),
                                    },
                                    StartMode: shared.RangeModeEnumLastBeforeMissingValues,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("fugit"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-09-13T21:24:27.316Z"),
                                        NumberValue: sdk.String("incidunt"),
                                        StringValue: sdk.String("atque"),
                                    },
                                },
                            },
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("explicabo"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumLast,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("nisi"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-01-16T21:53:08.951Z"),
                                        NumberValue: sdk.String("consequuntur"),
                                        StringValue: sdk.String("ratione"),
                                    },
                                    StartMode: shared.RangeModeEnumFirst,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("saepe"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-11-30T00:31:10.440Z"),
                                        NumberValue: sdk.String("et"),
                                        StringValue: sdk.String("esse"),
                                    },
                                },
                            },
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("eveniet"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumExclusive,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("veritatis"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-03-14T20:41:04.723Z"),
                                        NumberValue: sdk.String("nam"),
                                        StringValue: sdk.String("vero"),
                                    },
                                    StartMode: shared.RangeModeEnumLast,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("quasi"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-09-21T04:40:52.923Z"),
                                        NumberValue: sdk.String("harum"),
                                        StringValue: sdk.String("molestiae"),
                                    },
                                },
                            },
                        },
                        FilterTypedLink: &shared.TypedLinkSchemaAndFacetName{
                            SchemaArn: "rerum",
                            TypedLinkName: "occaecati",
                        },
                        MaxResults: sdk.Int64(327720),
                        NextToken: sdk.String("distinctio"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("eligendi"),
                        },
                    },
                    ListPolicyAttachments: &shared.BatchListPolicyAttachments{
                        MaxResults: sdk.Int64(27069),
                        NextToken: sdk.String("culpa"),
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("tempore"),
                        },
                    },
                    LookupPolicy: &shared.BatchLookupPolicy{
                        MaxResults: sdk.Int64(240020),
                        NextToken: sdk.String("cumque"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("consequuntur"),
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("consequatur"),
        XAmzContentSha256: sdk.String("minus"),
        XAmzCredential: sdk.String("quaerat"),
        XAmzDate: sdk.String("sapiente"),
        XAmzSecurityToken: sdk.String("consectetur"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("blanditiis"),
        XAmzConsistencyLevel: operations.BatchReadXAmzConsistencyLevelEnumEventual.ToPointer(),
        XAmzDataPartition: "a",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchReadResponse != nil {
        // handle response
    }
}
```

## BatchWrite

Performs all the write operations in a batch. Either all the operations succeed or none.

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
    res, err := s.SDK.BatchWrite(ctx, operations.BatchWriteRequest{
        RequestBody: operations.BatchWriteRequestBody{
            Operations: []shared.BatchWriteOperation{
                shared.BatchWriteOperation{
                    AddFacetToObject: &shared.BatchAddFacetToObject{
                        ObjectAttributeList: []shared.AttributeKeyAndValue{
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "esse",
                                    Name: "Lorene Mueller",
                                    SchemaArn: "possimus",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("quia"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2020-01-10T06:57:07.831Z"),
                                    NumberValue: sdk.String("facere"),
                                    StringValue: sdk.String("veritatis"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "consequuntur",
                                    Name: "Hattie Nader",
                                    SchemaArn: "quae",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("earum"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-07-21T16:57:57.397Z"),
                                    NumberValue: sdk.String("eius"),
                                    StringValue: sdk.String("libero"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "illum",
                                    Name: "Kenneth Hackett II",
                                    SchemaArn: "reprehenderit",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("ullam"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-12-26T00:57:43.290Z"),
                                    NumberValue: sdk.String("voluptatum"),
                                    StringValue: sdk.String("qui"),
                                },
                            },
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("quibusdam"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("ex"),
                            SchemaArn: sdk.String("deleniti"),
                        },
                    },
                    AttachObject: &shared.BatchAttachObject{
                        ChildReference: shared.ObjectReference{
                            Selector: sdk.String("itaque"),
                        },
                        LinkName: "dolorum",
                        ParentReference: shared.ObjectReference{
                            Selector: sdk.String("architecto"),
                        },
                    },
                    AttachPolicy: &shared.BatchAttachPolicy{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("omnis"),
                        },
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("tenetur"),
                        },
                    },
                    AttachToIndex: &shared.BatchAttachToIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("quasi"),
                        },
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("at"),
                        },
                    },
                    AttachTypedLink: &shared.BatchAttachTypedLink{
                        Attributes: []shared.AttributeNameAndValue{
                            shared.AttributeNameAndValue{
                                AttributeName: "voluptate",
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("ipsa"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-11-30T09:58:30.487Z"),
                                    NumberValue: sdk.String("consectetur"),
                                    StringValue: sdk.String("adipisci"),
                                },
                            },
                        },
                        SourceObjectReference: shared.ObjectReference{
                            Selector: sdk.String("iste"),
                        },
                        TargetObjectReference: shared.ObjectReference{
                            Selector: sdk.String("temporibus"),
                        },
                        TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                            SchemaArn: "accusantium",
                            TypedLinkName: "rem",
                        },
                    },
                    CreateIndex: &shared.BatchCreateIndex{
                        BatchReferenceName: sdk.String("aut"),
                        IsUnique: false,
                        LinkName: sdk.String("laudantium"),
                        OrderedIndexedAttributeList: []shared.AttributeKey{
                            shared.AttributeKey{
                                FacetName: "mollitia",
                                Name: "Mrs. Priscilla Fritsch",
                                SchemaArn: "numquam",
                            },
                            shared.AttributeKey{
                                FacetName: "impedit",
                                Name: "Loretta Anderson DVM",
                                SchemaArn: "natus",
                            },
                        },
                        ParentReference: &shared.ObjectReference{
                            Selector: sdk.String("velit"),
                        },
                    },
                    CreateObject: &shared.BatchCreateObject{
                        BatchReferenceName: sdk.String("voluptatibus"),
                        LinkName: sdk.String("voluptas"),
                        ObjectAttributeList: []shared.AttributeKeyAndValue{
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "aperiam",
                                    Name: "Bertha Cruickshank",
                                    SchemaArn: "maxime",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("dignissimos"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2021-01-08T17:32:26.674Z"),
                                    NumberValue: sdk.String("nemo"),
                                    StringValue: sdk.String("quae"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "quaerat",
                                    Name: "Mrs. Forrest Green",
                                    SchemaArn: "id",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("suscipit"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-05-14T14:45:53.115Z"),
                                    NumberValue: sdk.String("est"),
                                    StringValue: sdk.String("recusandae"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "totam",
                                    Name: "Chester Kuphal",
                                    SchemaArn: "labore",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("possimus"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2021-07-11T02:16:12.828Z"),
                                    NumberValue: sdk.String("commodi"),
                                    StringValue: sdk.String("in"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "corporis",
                                    Name: "Mack Hettinger",
                                    SchemaArn: "aperiam",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("cum"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-07-21T02:01:44.496Z"),
                                    NumberValue: sdk.String("exercitationem"),
                                    StringValue: sdk.String("earum"),
                                },
                            },
                        },
                        ParentReference: &shared.ObjectReference{
                            Selector: sdk.String("facere"),
                        },
                        SchemaFacet: []shared.SchemaFacet{
                            shared.SchemaFacet{
                                FacetName: sdk.String("doloribus"),
                                SchemaArn: sdk.String("suscipit"),
                            },
                            shared.SchemaFacet{
                                FacetName: sdk.String("reiciendis"),
                                SchemaArn: sdk.String("quidem"),
                            },
                        },
                    },
                    DeleteObject: &shared.BatchDeleteObject{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("saepe"),
                        },
                    },
                    DetachFromIndex: &shared.BatchDetachFromIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("necessitatibus"),
                        },
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("dolore"),
                        },
                    },
                    DetachObject: &shared.BatchDetachObject{
                        BatchReferenceName: sdk.String("sunt"),
                        LinkName: "asperiores",
                        ParentReference: shared.ObjectReference{
                            Selector: sdk.String("adipisci"),
                        },
                    },
                    DetachPolicy: &shared.BatchDetachPolicy{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("non"),
                        },
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("amet"),
                        },
                    },
                    DetachTypedLink: &shared.BatchDetachTypedLink{
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "dignissimos",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("a"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-04-20T09:42:55.692Z"),
                                        NumberValue: sdk.String("corporis"),
                                        StringValue: sdk.String("harum"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("laboriosam"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("ipsa"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "voluptates",
                                TypedLinkName: "libero",
                            },
                        },
                    },
                    RemoveFacetFromObject: &shared.BatchRemoveFacetFromObject{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("vitae"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("accusamus"),
                            SchemaArn: sdk.String("similique"),
                        },
                    },
                    UpdateLinkAttributes: &shared.BatchUpdateLinkAttributes{
                        AttributeUpdates: []shared.LinkAttributeUpdate{
                            shared.LinkAttributeUpdate{
                                AttributeAction: &shared.LinkAttributeAction{
                                    AttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    AttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("voluptas"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-08-17T09:09:54.947Z"),
                                        NumberValue: sdk.String("minima"),
                                        StringValue: sdk.String("nobis"),
                                    },
                                },
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "dolorum",
                                    Name: "Bethany D'Amore",
                                    SchemaArn: "dolore",
                                },
                            },
                            shared.LinkAttributeUpdate{
                                AttributeAction: &shared.LinkAttributeAction{
                                    AttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    AttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("officiis"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-12-11T16:50:29.051Z"),
                                        NumberValue: sdk.String("adipisci"),
                                        StringValue: sdk.String("cum"),
                                    },
                                },
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "blanditiis",
                                    Name: "Moses Douglas",
                                    SchemaArn: "pariatur",
                                },
                            },
                        },
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "hic",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("exercitationem"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-05T00:59:14.180Z"),
                                        NumberValue: sdk.String("rerum"),
                                        StringValue: sdk.String("sed"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "reiciendis",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("explicabo"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2020-11-16T19:55:44.497Z"),
                                        NumberValue: sdk.String("voluptate"),
                                        StringValue: sdk.String("expedita"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "ab",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("iste"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-04-30T18:05:39.925Z"),
                                        NumberValue: sdk.String("sed"),
                                        StringValue: sdk.String("in"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("commodi"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("quidem"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "explicabo",
                                TypedLinkName: "voluptas",
                            },
                        },
                    },
                    UpdateObjectAttributes: &shared.BatchUpdateObjectAttributes{
                        AttributeUpdates: []shared.ObjectAttributeUpdate{
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("suscipit"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2020-04-25T13:15:32.117Z"),
                                        NumberValue: sdk.String("illo"),
                                        StringValue: sdk.String("reiciendis"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "perferendis",
                                    Name: "Emilio Goodwin",
                                    SchemaArn: "eius",
                                },
                            },
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("ipsum"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-06-03T07:58:02.123Z"),
                                        NumberValue: sdk.String("quos"),
                                        StringValue: sdk.String("voluptatibus"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "tempora",
                                    Name: "Allison Wisozk I",
                                    SchemaArn: "officiis",
                                },
                            },
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("facilis"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-09-21T14:42:08.721Z"),
                                        NumberValue: sdk.String("ipsam"),
                                        StringValue: sdk.String("debitis"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "rem",
                                    Name: "Della Muller",
                                    SchemaArn: "recusandae",
                                },
                            },
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("reiciendis"),
                        },
                    },
                },
                shared.BatchWriteOperation{
                    AddFacetToObject: &shared.BatchAddFacetToObject{
                        ObjectAttributeList: []shared.AttributeKeyAndValue{
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "magni",
                                    Name: "Gwen Fritsch",
                                    SchemaArn: "officiis",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("beatae"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-04-21T14:42:01.744Z"),
                                    NumberValue: sdk.String("praesentium"),
                                    StringValue: sdk.String("cum"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "laboriosam",
                                    Name: "Bob Mueller",
                                    SchemaArn: "debitis",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("neque"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-04-26T13:26:55.921Z"),
                                    NumberValue: sdk.String("officia"),
                                    StringValue: sdk.String("dolorum"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "corrupti",
                                    Name: "Ricky Little",
                                    SchemaArn: "fugiat",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("voluptatem"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2021-07-31T10:53:55.286Z"),
                                    NumberValue: sdk.String("magnam"),
                                    StringValue: sdk.String("consequatur"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "esse",
                                    Name: "Karen Lehner",
                                    SchemaArn: "corporis",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("et"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-03-10T15:53:25.215Z"),
                                    NumberValue: sdk.String("sed"),
                                    StringValue: sdk.String("sit"),
                                },
                            },
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("vel"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("nostrum"),
                            SchemaArn: sdk.String("saepe"),
                        },
                    },
                    AttachObject: &shared.BatchAttachObject{
                        ChildReference: shared.ObjectReference{
                            Selector: sdk.String("error"),
                        },
                        LinkName: "consequatur",
                        ParentReference: shared.ObjectReference{
                            Selector: sdk.String("incidunt"),
                        },
                    },
                    AttachPolicy: &shared.BatchAttachPolicy{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("reiciendis"),
                        },
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("dolorem"),
                        },
                    },
                    AttachToIndex: &shared.BatchAttachToIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("harum"),
                        },
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("dicta"),
                        },
                    },
                    AttachTypedLink: &shared.BatchAttachTypedLink{
                        Attributes: []shared.AttributeNameAndValue{
                            shared.AttributeNameAndValue{
                                AttributeName: "occaecati",
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("labore"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2021-12-03T11:25:52.746Z"),
                                    NumberValue: sdk.String("laborum"),
                                    StringValue: sdk.String("nam"),
                                },
                            },
                        },
                        SourceObjectReference: shared.ObjectReference{
                            Selector: sdk.String("tenetur"),
                        },
                        TargetObjectReference: shared.ObjectReference{
                            Selector: sdk.String("laboriosam"),
                        },
                        TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                            SchemaArn: "alias",
                            TypedLinkName: "amet",
                        },
                    },
                    CreateIndex: &shared.BatchCreateIndex{
                        BatchReferenceName: sdk.String("deserunt"),
                        IsUnique: false,
                        LinkName: sdk.String("voluptate"),
                        OrderedIndexedAttributeList: []shared.AttributeKey{
                            shared.AttributeKey{
                                FacetName: "reiciendis",
                                Name: "Marcos Windler MD",
                                SchemaArn: "quidem",
                            },
                            shared.AttributeKey{
                                FacetName: "reprehenderit",
                                Name: "Grant Langosh",
                                SchemaArn: "voluptatem",
                            },
                            shared.AttributeKey{
                                FacetName: "quisquam",
                                Name: "Ryan Littel",
                                SchemaArn: "totam",
                            },
                        },
                        ParentReference: &shared.ObjectReference{
                            Selector: sdk.String("suscipit"),
                        },
                    },
                    CreateObject: &shared.BatchCreateObject{
                        BatchReferenceName: sdk.String("quidem"),
                        LinkName: sdk.String("maxime"),
                        ObjectAttributeList: []shared.AttributeKeyAndValue{
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "esse",
                                    Name: "Angelina Jenkins",
                                    SchemaArn: "officiis",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("officiis"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2021-02-22T09:14:53.307Z"),
                                    NumberValue: sdk.String("minima"),
                                    StringValue: sdk.String("aspernatur"),
                                },
                            },
                        },
                        ParentReference: &shared.ObjectReference{
                            Selector: sdk.String("ex"),
                        },
                        SchemaFacet: []shared.SchemaFacet{
                            shared.SchemaFacet{
                                FacetName: sdk.String("corrupti"),
                                SchemaArn: sdk.String("at"),
                            },
                            shared.SchemaFacet{
                                FacetName: sdk.String("error"),
                                SchemaArn: sdk.String("blanditiis"),
                            },
                            shared.SchemaFacet{
                                FacetName: sdk.String("suscipit"),
                                SchemaArn: sdk.String("repudiandae"),
                            },
                            shared.SchemaFacet{
                                FacetName: sdk.String("atque"),
                                SchemaArn: sdk.String("atque"),
                            },
                        },
                    },
                    DeleteObject: &shared.BatchDeleteObject{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("sunt"),
                        },
                    },
                    DetachFromIndex: &shared.BatchDetachFromIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("recusandae"),
                        },
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("dolorum"),
                        },
                    },
                    DetachObject: &shared.BatchDetachObject{
                        BatchReferenceName: sdk.String("repellendus"),
                        LinkName: "labore",
                        ParentReference: shared.ObjectReference{
                            Selector: sdk.String("reiciendis"),
                        },
                    },
                    DetachPolicy: &shared.BatchDetachPolicy{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("doloremque"),
                        },
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("repudiandae"),
                        },
                    },
                    DetachTypedLink: &shared.BatchDetachTypedLink{
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "accusantium",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("beatae"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-09-07T11:33:56.286Z"),
                                        NumberValue: sdk.String("laboriosam"),
                                        StringValue: sdk.String("velit"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("a"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("molestias"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "magnam",
                                TypedLinkName: "saepe",
                            },
                        },
                    },
                    RemoveFacetFromObject: &shared.BatchRemoveFacetFromObject{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("consequuntur"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("occaecati"),
                            SchemaArn: sdk.String("officiis"),
                        },
                    },
                    UpdateLinkAttributes: &shared.BatchUpdateLinkAttributes{
                        AttributeUpdates: []shared.LinkAttributeUpdate{
                            shared.LinkAttributeUpdate{
                                AttributeAction: &shared.LinkAttributeAction{
                                    AttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    AttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("adipisci"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-04-04T22:16:56.307Z"),
                                        NumberValue: sdk.String("consequuntur"),
                                        StringValue: sdk.String("fugit"),
                                    },
                                },
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "id",
                                    Name: "Mrs. Bessie Muller",
                                    SchemaArn: "eveniet",
                                },
                            },
                            shared.LinkAttributeUpdate{
                                AttributeAction: &shared.LinkAttributeAction{
                                    AttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    AttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("vero"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-07-26T12:47:49.082Z"),
                                        NumberValue: sdk.String("ipsa"),
                                        StringValue: sdk.String("totam"),
                                    },
                                },
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "quae",
                                    Name: "Tricia Denesik",
                                    SchemaArn: "necessitatibus",
                                },
                            },
                            shared.LinkAttributeUpdate{
                                AttributeAction: &shared.LinkAttributeAction{
                                    AttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    AttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("laborum"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-12-10T20:58:20.380Z"),
                                        NumberValue: sdk.String("rem"),
                                        StringValue: sdk.String("aliquam"),
                                    },
                                },
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "ad",
                                    Name: "John Hettinger",
                                    SchemaArn: "mollitia",
                                },
                            },
                        },
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "alias",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("maiores"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-06-23T17:58:38.501Z"),
                                        NumberValue: sdk.String("id"),
                                        StringValue: sdk.String("minima"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "dolore",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("dolorum"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-08T22:18:03.712Z"),
                                        NumberValue: sdk.String("recusandae"),
                                        StringValue: sdk.String("omnis"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("quaerat"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("molestiae"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "ex",
                                TypedLinkName: "ut",
                            },
                        },
                    },
                    UpdateObjectAttributes: &shared.BatchUpdateObjectAttributes{
                        AttributeUpdates: []shared.ObjectAttributeUpdate{
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("debitis"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-02-19T04:44:11.304Z"),
                                        NumberValue: sdk.String("nemo"),
                                        StringValue: sdk.String("recusandae"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "esse",
                                    Name: "Alvin Kemmer",
                                    SchemaArn: "aspernatur",
                                },
                            },
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("quasi"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-04-25T07:46:36.414Z"),
                                        NumberValue: sdk.String("mollitia"),
                                        StringValue: sdk.String("provident"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "possimus",
                                    Name: "Dr. Reginald Hyatt",
                                    SchemaArn: "ullam",
                                },
                            },
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("nam"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-02-01T20:19:35.908Z"),
                                        NumberValue: sdk.String("laborum"),
                                        StringValue: sdk.String("placeat"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "modi",
                                    Name: "Virgil Towne",
                                    SchemaArn: "vitae",
                                },
                            },
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("rerum"),
                        },
                    },
                },
                shared.BatchWriteOperation{
                    AddFacetToObject: &shared.BatchAddFacetToObject{
                        ObjectAttributeList: []shared.AttributeKeyAndValue{
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "quis",
                                    Name: "Mr. Denise Runolfsdottir",
                                    SchemaArn: "aspernatur",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("eum"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-06-24T11:18:45.161Z"),
                                    NumberValue: sdk.String("at"),
                                    StringValue: sdk.String("impedit"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "eos",
                                    Name: "Andre Carroll V",
                                    SchemaArn: "provident",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("earum"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2021-02-13T05:30:19.145Z"),
                                    NumberValue: sdk.String("illum"),
                                    StringValue: sdk.String("eaque"),
                                },
                            },
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("earum"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("perspiciatis"),
                            SchemaArn: sdk.String("maiores"),
                        },
                    },
                    AttachObject: &shared.BatchAttachObject{
                        ChildReference: shared.ObjectReference{
                            Selector: sdk.String("debitis"),
                        },
                        LinkName: "aliquid",
                        ParentReference: shared.ObjectReference{
                            Selector: sdk.String("porro"),
                        },
                    },
                    AttachPolicy: &shared.BatchAttachPolicy{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("suscipit"),
                        },
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("dolorem"),
                        },
                    },
                    AttachToIndex: &shared.BatchAttachToIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("fugit"),
                        },
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("cumque"),
                        },
                    },
                    AttachTypedLink: &shared.BatchAttachTypedLink{
                        Attributes: []shared.AttributeNameAndValue{
                            shared.AttributeNameAndValue{
                                AttributeName: "ratione",
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("animi"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2020-06-01T00:59:41.712Z"),
                                    NumberValue: sdk.String("consequatur"),
                                    StringValue: sdk.String("quasi"),
                                },
                            },
                            shared.AttributeNameAndValue{
                                AttributeName: "et",
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("ducimus"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2021-11-02T19:26:40.219Z"),
                                    NumberValue: sdk.String("suscipit"),
                                    StringValue: sdk.String("adipisci"),
                                },
                            },
                            shared.AttributeNameAndValue{
                                AttributeName: "quasi",
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("magni"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2020-06-03T18:12:56.279Z"),
                                    NumberValue: sdk.String("necessitatibus"),
                                    StringValue: sdk.String("ipsa"),
                                },
                            },
                        },
                        SourceObjectReference: shared.ObjectReference{
                            Selector: sdk.String("tempora"),
                        },
                        TargetObjectReference: shared.ObjectReference{
                            Selector: sdk.String("nihil"),
                        },
                        TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                            SchemaArn: "molestiae",
                            TypedLinkName: "dicta",
                        },
                    },
                    CreateIndex: &shared.BatchCreateIndex{
                        BatchReferenceName: sdk.String("iusto"),
                        IsUnique: false,
                        LinkName: sdk.String("esse"),
                        OrderedIndexedAttributeList: []shared.AttributeKey{
                            shared.AttributeKey{
                                FacetName: "maiores",
                                Name: "Ben Bradtke Sr.",
                                SchemaArn: "odio",
                            },
                            shared.AttributeKey{
                                FacetName: "tempora",
                                Name: "Carla Feil MD",
                                SchemaArn: "sunt",
                            },
                            shared.AttributeKey{
                                FacetName: "nostrum",
                                Name: "Damon Jacobs",
                                SchemaArn: "aliquid",
                            },
                        },
                        ParentReference: &shared.ObjectReference{
                            Selector: sdk.String("perferendis"),
                        },
                    },
                    CreateObject: &shared.BatchCreateObject{
                        BatchReferenceName: sdk.String("eum"),
                        LinkName: sdk.String("voluptas"),
                        ObjectAttributeList: []shared.AttributeKeyAndValue{
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "id",
                                    Name: "Isabel Schuster",
                                    SchemaArn: "laborum",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("libero"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-06-19T00:33:15.754Z"),
                                    NumberValue: sdk.String("enim"),
                                    StringValue: sdk.String("vitae"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "repellendus",
                                    Name: "Krista Jakubowski",
                                    SchemaArn: "expedita",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("voluptatem"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2021-07-11T19:18:20.130Z"),
                                    NumberValue: sdk.String("aliquid"),
                                    StringValue: sdk.String("beatae"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "voluptatum",
                                    Name: "Peter Prosacco",
                                    SchemaArn: "voluptatem",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("sapiente"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-09-09T21:19:27.244Z"),
                                    NumberValue: sdk.String("fuga"),
                                    StringValue: sdk.String("pariatur"),
                                },
                            },
                        },
                        ParentReference: &shared.ObjectReference{
                            Selector: sdk.String("debitis"),
                        },
                        SchemaFacet: []shared.SchemaFacet{
                            shared.SchemaFacet{
                                FacetName: sdk.String("alias"),
                                SchemaArn: sdk.String("deleniti"),
                            },
                        },
                    },
                    DeleteObject: &shared.BatchDeleteObject{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("earum"),
                        },
                    },
                    DetachFromIndex: &shared.BatchDetachFromIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("ex"),
                        },
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("sapiente"),
                        },
                    },
                    DetachObject: &shared.BatchDetachObject{
                        BatchReferenceName: sdk.String("rem"),
                        LinkName: "minus",
                        ParentReference: shared.ObjectReference{
                            Selector: sdk.String("nemo"),
                        },
                    },
                    DetachPolicy: &shared.BatchDetachPolicy{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("asperiores"),
                        },
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("ratione"),
                        },
                    },
                    DetachTypedLink: &shared.BatchDetachTypedLink{
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "perferendis",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("illum"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-06-17T09:46:58.064Z"),
                                        NumberValue: sdk.String("quibusdam"),
                                        StringValue: sdk.String("nam"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "ipsam",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("culpa"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-09-10T19:23:06.016Z"),
                                        NumberValue: sdk.String("inventore"),
                                        StringValue: sdk.String("deleniti"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("veritatis"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("tempora"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "dolor",
                                TypedLinkName: "consequatur",
                            },
                        },
                    },
                    RemoveFacetFromObject: &shared.BatchRemoveFacetFromObject{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("architecto"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("sit"),
                            SchemaArn: sdk.String("modi"),
                        },
                    },
                    UpdateLinkAttributes: &shared.BatchUpdateLinkAttributes{
                        AttributeUpdates: []shared.LinkAttributeUpdate{
                            shared.LinkAttributeUpdate{
                                AttributeAction: &shared.LinkAttributeAction{
                                    AttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    AttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("laudantium"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-10-11T17:30:58.651Z"),
                                        NumberValue: sdk.String("fugiat"),
                                        StringValue: sdk.String("ipsam"),
                                    },
                                },
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "consequuntur",
                                    Name: "Tracey Vandervort",
                                    SchemaArn: "esse",
                                },
                            },
                        },
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "sed",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("veniam"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-04-15T18:45:38.448Z"),
                                        NumberValue: sdk.String("eum"),
                                        StringValue: sdk.String("vel"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "voluptatum",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("magnam"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-06T07:12:03.115Z"),
                                        NumberValue: sdk.String("porro"),
                                        StringValue: sdk.String("autem"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "nobis",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("laboriosam"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-07-09T08:51:26.881Z"),
                                        NumberValue: sdk.String("voluptatem"),
                                        StringValue: sdk.String("exercitationem"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "necessitatibus",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("quasi"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-02-17T01:08:30.498Z"),
                                        NumberValue: sdk.String("vero"),
                                        StringValue: sdk.String("est"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("harum"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("sequi"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "doloribus",
                                TypedLinkName: "repudiandae",
                            },
                        },
                    },
                    UpdateObjectAttributes: &shared.BatchUpdateObjectAttributes{
                        AttributeUpdates: []shared.ObjectAttributeUpdate{
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("nemo"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-07-02T02:41:11.426Z"),
                                        NumberValue: sdk.String("officia"),
                                        StringValue: sdk.String("voluptas"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "numquam",
                                    Name: "Brandy Gibson",
                                    SchemaArn: "nesciunt",
                                },
                            },
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("laudantium"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-11-26T09:57:27.688Z"),
                                        NumberValue: sdk.String("rem"),
                                        StringValue: sdk.String("fugiat"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "dicta",
                                    Name: "Ms. Marilyn Feest",
                                    SchemaArn: "soluta",
                                },
                            },
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("omnis"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-06-03T15:51:42.244Z"),
                                        NumberValue: sdk.String("iste"),
                                        StringValue: sdk.String("magni"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "inventore",
                                    Name: "Tomas Wolff",
                                    SchemaArn: "delectus",
                                },
                            },
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("praesentium"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-02-06T01:23:27.992Z"),
                                        NumberValue: sdk.String("temporibus"),
                                        StringValue: sdk.String("quos"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "commodi",
                                    Name: "Leslie Lebsack",
                                    SchemaArn: "nam",
                                },
                            },
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("vero"),
                        },
                    },
                },
                shared.BatchWriteOperation{
                    AddFacetToObject: &shared.BatchAddFacetToObject{
                        ObjectAttributeList: []shared.AttributeKeyAndValue{
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "ipsam",
                                    Name: "Mary Botsford",
                                    SchemaArn: "enim",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("sint"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2021-01-26T04:08:23.317Z"),
                                    NumberValue: sdk.String("esse"),
                                    StringValue: sdk.String("nemo"),
                                },
                            },
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("reprehenderit"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("est"),
                            SchemaArn: sdk.String("quis"),
                        },
                    },
                    AttachObject: &shared.BatchAttachObject{
                        ChildReference: shared.ObjectReference{
                            Selector: sdk.String("sint"),
                        },
                        LinkName: "accusamus",
                        ParentReference: shared.ObjectReference{
                            Selector: sdk.String("impedit"),
                        },
                    },
                    AttachPolicy: &shared.BatchAttachPolicy{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("hic"),
                        },
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("necessitatibus"),
                        },
                    },
                    AttachToIndex: &shared.BatchAttachToIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("asperiores"),
                        },
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("ex"),
                        },
                    },
                    AttachTypedLink: &shared.BatchAttachTypedLink{
                        Attributes: []shared.AttributeNameAndValue{
                            shared.AttributeNameAndValue{
                                AttributeName: "debitis",
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("delectus"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-03-17T23:08:05.815Z"),
                                    NumberValue: sdk.String("fuga"),
                                    StringValue: sdk.String("laborum"),
                                },
                            },
                            shared.AttributeNameAndValue{
                                AttributeName: "consectetur",
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("velit"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-07-26T23:40:06.851Z"),
                                    NumberValue: sdk.String("impedit"),
                                    StringValue: sdk.String("magni"),
                                },
                            },
                        },
                        SourceObjectReference: shared.ObjectReference{
                            Selector: sdk.String("soluta"),
                        },
                        TargetObjectReference: shared.ObjectReference{
                            Selector: sdk.String("repudiandae"),
                        },
                        TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                            SchemaArn: "nam",
                            TypedLinkName: "dolore",
                        },
                    },
                    CreateIndex: &shared.BatchCreateIndex{
                        BatchReferenceName: sdk.String("iusto"),
                        IsUnique: false,
                        LinkName: sdk.String("voluptate"),
                        OrderedIndexedAttributeList: []shared.AttributeKey{
                            shared.AttributeKey{
                                FacetName: "dignissimos",
                                Name: "Angelica Leuschke",
                                SchemaArn: "odit",
                            },
                        },
                        ParentReference: &shared.ObjectReference{
                            Selector: sdk.String("voluptatibus"),
                        },
                    },
                    CreateObject: &shared.BatchCreateObject{
                        BatchReferenceName: sdk.String("vel"),
                        LinkName: sdk.String("magnam"),
                        ObjectAttributeList: []shared.AttributeKeyAndValue{
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "inventore",
                                    Name: "Wm Brakus",
                                    SchemaArn: "porro",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("aliquam"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-12-04T11:51:15.430Z"),
                                    NumberValue: sdk.String("accusantium"),
                                    StringValue: sdk.String("vel"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "ea",
                                    Name: "Leigh Mante",
                                    SchemaArn: "ut",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("perspiciatis"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-08-25T07:25:33.000Z"),
                                    NumberValue: sdk.String("impedit"),
                                    StringValue: sdk.String("voluptatibus"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "iste",
                                    Name: "John Huel",
                                    SchemaArn: "laborum",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("non"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-07-08T13:28:20.794Z"),
                                    NumberValue: sdk.String("sit"),
                                    StringValue: sdk.String("doloremque"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "consequatur",
                                    Name: "Clay Jast",
                                    SchemaArn: "facilis",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("placeat"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2021-08-01T09:41:55.270Z"),
                                    NumberValue: sdk.String("deleniti"),
                                    StringValue: sdk.String("a"),
                                },
                            },
                        },
                        ParentReference: &shared.ObjectReference{
                            Selector: sdk.String("voluptate"),
                        },
                        SchemaFacet: []shared.SchemaFacet{
                            shared.SchemaFacet{
                                FacetName: sdk.String("unde"),
                                SchemaArn: sdk.String("necessitatibus"),
                            },
                            shared.SchemaFacet{
                                FacetName: sdk.String("animi"),
                                SchemaArn: sdk.String("impedit"),
                            },
                        },
                    },
                    DeleteObject: &shared.BatchDeleteObject{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("ipsam"),
                        },
                    },
                    DetachFromIndex: &shared.BatchDetachFromIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("corporis"),
                        },
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("est"),
                        },
                    },
                    DetachObject: &shared.BatchDetachObject{
                        BatchReferenceName: sdk.String("error"),
                        LinkName: "esse",
                        ParentReference: shared.ObjectReference{
                            Selector: sdk.String("labore"),
                        },
                    },
                    DetachPolicy: &shared.BatchDetachPolicy{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("veritatis"),
                        },
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("vero"),
                        },
                    },
                    DetachTypedLink: &shared.BatchDetachTypedLink{
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "vitae",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("inventore"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-09-05T11:07:40.496Z"),
                                        NumberValue: sdk.String("qui"),
                                        StringValue: sdk.String("iste"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("ex"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("nemo"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "soluta",
                                TypedLinkName: "libero",
                            },
                        },
                    },
                    RemoveFacetFromObject: &shared.BatchRemoveFacetFromObject{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("rem"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("dolorum"),
                            SchemaArn: sdk.String("odio"),
                        },
                    },
                    UpdateLinkAttributes: &shared.BatchUpdateLinkAttributes{
                        AttributeUpdates: []shared.LinkAttributeUpdate{
                            shared.LinkAttributeUpdate{
                                AttributeAction: &shared.LinkAttributeAction{
                                    AttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    AttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("magni"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-08T11:32:42.651Z"),
                                        NumberValue: sdk.String("quae"),
                                        StringValue: sdk.String("modi"),
                                    },
                                },
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "neque",
                                    Name: "Kellie Bogisich",
                                    SchemaArn: "nulla",
                                },
                            },
                        },
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "maxime",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("quia"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-08-29T02:52:30.806Z"),
                                        NumberValue: sdk.String("omnis"),
                                        StringValue: sdk.String("libero"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "dicta",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("id"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-04-17T05:51:37.071Z"),
                                        NumberValue: sdk.String("officia"),
                                        StringValue: sdk.String("quos"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "placeat",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("sit"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-11T01:52:16.024Z"),
                                        NumberValue: sdk.String("voluptates"),
                                        StringValue: sdk.String("inventore"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("aperiam"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("totam"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "dolore",
                                TypedLinkName: "eligendi",
                            },
                        },
                    },
                    UpdateObjectAttributes: &shared.BatchUpdateObjectAttributes{
                        AttributeUpdates: []shared.ObjectAttributeUpdate{
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("autem"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-10-29T20:56:45.429Z"),
                                        NumberValue: sdk.String("assumenda"),
                                        StringValue: sdk.String("beatae"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "est",
                                    Name: "Johnnie Kozey",
                                    SchemaArn: "necessitatibus",
                                },
                            },
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("sint"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-07-31T00:51:48.447Z"),
                                        NumberValue: sdk.String("ipsam"),
                                        StringValue: sdk.String("rerum"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "laudantium",
                                    Name: "Cecelia Wiza",
                                    SchemaArn: "alias",
                                },
                            },
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("quidem"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-02-28T18:13:48.502Z"),
                                        NumberValue: sdk.String("accusantium"),
                                        StringValue: sdk.String("expedita"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "officiis",
                                    Name: "Rosemarie Kub",
                                    SchemaArn: "explicabo",
                                },
                            },
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("corporis"),
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("error"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("recusandae"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("ut"),
        XAmzSignedHeaders: sdk.String("quidem"),
        XAmzDataPartition: "quis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchWriteResponse != nil {
        // handle response
    }
}
```

## CreateDirectory

Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.

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
    res, err := s.SDK.CreateDirectory(ctx, operations.CreateDirectoryRequest{
        RequestBody: operations.CreateDirectoryRequestBody{
            Name: "Lindsey Kreiger",
        },
        XAmzAlgorithm: sdk.String("fugit"),
        XAmzContentSha256: sdk.String("numquam"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("officia"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzDataPartition: "optio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateDirectoryResponse != nil {
        // handle response
    }
}
```

## CreateFacet

Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.

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
    res, err := s.SDK.CreateFacet(ctx, operations.CreateFacetRequest{
        RequestBody: operations.CreateFacetRequestBody{
            Attributes: []shared.FacetAttribute{
                shared.FacetAttribute{
                    AttributeDefinition: &shared.FacetAttributeDefinition{
                        DefaultValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("corporis"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-04-17T06:03:26.436Z"),
                            NumberValue: sdk.String("voluptatum"),
                            StringValue: sdk.String("cupiditate"),
                        },
                        IsImmutable: sdk.Bool(false),
                        Rules: map[string]shared.Rule{
                            "placeat": shared.Rule{
                                Parameters: map[string]string{
                                    "neque": "in",
                                    "minus": "eum",
                                },
                                Type: shared.RuleTypeEnumNumberComparison.ToPointer(),
                            },
                            "corporis": shared.Rule{
                                Parameters: map[string]string{
                                    "voluptates": "maiores",
                                    "tempore": "aperiam",
                                },
                                Type: shared.RuleTypeEnumStringFromSet.ToPointer(),
                            },
                        },
                        Type: shared.FacetAttributeTypeEnumString,
                    },
                    AttributeReference: &shared.FacetAttributeReference{
                        TargetAttributeName: "labore",
                        TargetFacetName: "totam",
                    },
                    Name: "Glen Satterfield",
                    RequiredBehavior: shared.RequiredAttributeBehaviorEnumNotRequired.ToPointer(),
                },
                shared.FacetAttribute{
                    AttributeDefinition: &shared.FacetAttributeDefinition{
                        DefaultValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("nostrum"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2021-06-17T06:18:33.339Z"),
                            NumberValue: sdk.String("delectus"),
                            StringValue: sdk.String("tempore"),
                        },
                        IsImmutable: sdk.Bool(false),
                        Rules: map[string]shared.Rule{
                            "odit": shared.Rule{
                                Parameters: map[string]string{
                                    "pariatur": "nemo",
                                    "reprehenderit": "aperiam",
                                    "odio": "minima",
                                    "in": "ducimus",
                                },
                                Type: shared.RuleTypeEnumStringFromSet.ToPointer(),
                            },
                            "dolores": shared.Rule{
                                Parameters: map[string]string{
                                    "veritatis": "ducimus",
                                    "voluptate": "pariatur",
                                    "itaque": "similique",
                                },
                                Type: shared.RuleTypeEnumStringLength.ToPointer(),
                            },
                            "ex": shared.Rule{
                                Parameters: map[string]string{
                                    "commodi": "officiis",
                                    "placeat": "quidem",
                                },
                                Type: shared.RuleTypeEnumNumberComparison.ToPointer(),
                            },
                            "quam": shared.Rule{
                                Parameters: map[string]string{
                                    "modi": "ipsa",
                                },
                                Type: shared.RuleTypeEnumStringFromSet.ToPointer(),
                            },
                        },
                        Type: shared.FacetAttributeTypeEnumDatetime,
                    },
                    AttributeReference: &shared.FacetAttributeReference{
                        TargetAttributeName: "sequi",
                        TargetFacetName: "repudiandae",
                    },
                    Name: "Willie Wehner",
                    RequiredBehavior: shared.RequiredAttributeBehaviorEnumRequiredAlways.ToPointer(),
                },
                shared.FacetAttribute{
                    AttributeDefinition: &shared.FacetAttributeDefinition{
                        DefaultValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("nam"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-11-01T23:04:52.664Z"),
                            NumberValue: sdk.String("necessitatibus"),
                            StringValue: sdk.String("nobis"),
                        },
                        IsImmutable: sdk.Bool(false),
                        Rules: map[string]shared.Rule{
                            "ducimus": shared.Rule{
                                Parameters: map[string]string{
                                    "veritatis": "quasi",
                                    "laboriosam": "pariatur",
                                    "libero": "excepturi",
                                    "occaecati": "nemo",
                                },
                                Type: shared.RuleTypeEnumNumberComparison.ToPointer(),
                            },
                        },
                        Type: shared.FacetAttributeTypeEnumBinary,
                    },
                    AttributeReference: &shared.FacetAttributeReference{
                        TargetAttributeName: "doloribus",
                        TargetFacetName: "eligendi",
                    },
                    Name: "Ronnie Welch",
                    RequiredBehavior: shared.RequiredAttributeBehaviorEnumNotRequired.ToPointer(),
                },
                shared.FacetAttribute{
                    AttributeDefinition: &shared.FacetAttributeDefinition{
                        DefaultValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("molestias"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-12-13T07:44:48.227Z"),
                            NumberValue: sdk.String("saepe"),
                            StringValue: sdk.String("architecto"),
                        },
                        IsImmutable: sdk.Bool(false),
                        Rules: map[string]shared.Rule{
                            "iste": shared.Rule{
                                Parameters: map[string]string{
                                    "tempore": "libero",
                                    "velit": "doloremque",
                                    "delectus": "impedit",
                                    "cum": "ipsum",
                                },
                                Type: shared.RuleTypeEnumBinaryLength.ToPointer(),
                            },
                            "saepe": shared.Rule{
                                Parameters: map[string]string{
                                    "doloremque": "quis",
                                    "veniam": "libero",
                                    "architecto": "cupiditate",
                                },
                                Type: shared.RuleTypeEnumNumberComparison.ToPointer(),
                            },
                            "eligendi": shared.Rule{
                                Parameters: map[string]string{
                                    "non": "magnam",
                                    "itaque": "sed",
                                    "asperiores": "veniam",
                                    "consequuntur": "facere",
                                },
                                Type: shared.RuleTypeEnumStringFromSet.ToPointer(),
                            },
                        },
                        Type: shared.FacetAttributeTypeEnumString,
                    },
                    AttributeReference: &shared.FacetAttributeReference{
                        TargetAttributeName: "pariatur",
                        TargetFacetName: "amet",
                    },
                    Name: "Virginia Flatley",
                    RequiredBehavior: shared.RequiredAttributeBehaviorEnumRequiredAlways.ToPointer(),
                },
            },
            Name: "Alex Labadie",
            ObjectType: operations.CreateFacetRequestBodyObjectTypeEnumLeafNode,
        },
        XAmzAlgorithm: sdk.String("nisi"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("minus"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("facilis"),
        XAmzSignature: sdk.String("ipsum"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzDataPartition: "voluptatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateFacetResponse != nil {
        // handle response
    }
}
```

## CreateIndex

Creates an index object. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_indexing.html">Indexing</a> for more information.

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
    res, err := s.SDK.CreateIndex(ctx, operations.CreateIndexRequest{
        RequestBody: operations.CreateIndexRequestBody{
            IsUnique: false,
            LinkName: sdk.String("voluptatibus"),
            OrderedIndexedAttributeList: []shared.AttributeKey{
                shared.AttributeKey{
                    FacetName: "debitis",
                    Name: "Susie Davis",
                    SchemaArn: "neque",
                },
            },
            ParentReference: &operations.CreateIndexRequestBodyParentReference{
                Selector: sdk.String("iusto"),
            },
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("rem"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("fugiat"),
        XAmzSecurityToken: sdk.String("unde"),
        XAmzSignature: sdk.String("officiis"),
        XAmzSignedHeaders: sdk.String("ducimus"),
        XAmzDataPartition: "dolor",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateIndexResponse != nil {
        // handle response
    }
}
```

## CreateObject

Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. 

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
    res, err := s.SDK.CreateObject(ctx, operations.CreateObjectRequest{
        RequestBody: operations.CreateObjectRequestBody{
            LinkName: sdk.String("dicta"),
            ObjectAttributeList: []shared.AttributeKeyAndValue{
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "porro",
                        Name: "Marian Koelpin",
                        SchemaArn: "aspernatur",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: sdk.String("enim"),
                        BooleanValue: sdk.Bool(false),
                        DatetimeValue: types.MustTimeFromString("2021-07-21T13:41:09.845Z"),
                        NumberValue: sdk.String("dignissimos"),
                        StringValue: sdk.String("libero"),
                    },
                },
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "illo",
                        Name: "Debbie Thiel",
                        SchemaArn: "veniam",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: sdk.String("eos"),
                        BooleanValue: sdk.Bool(false),
                        DatetimeValue: types.MustTimeFromString("2020-03-08T14:51:04.568Z"),
                        NumberValue: sdk.String("reprehenderit"),
                        StringValue: sdk.String("praesentium"),
                    },
                },
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "nemo",
                        Name: "Devin Donnelly",
                        SchemaArn: "illo",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: sdk.String("labore"),
                        BooleanValue: sdk.Bool(false),
                        DatetimeValue: types.MustTimeFromString("2022-02-01T22:19:07.437Z"),
                        NumberValue: sdk.String("quisquam"),
                        StringValue: sdk.String("provident"),
                    },
                },
            },
            ParentReference: &operations.CreateObjectRequestBodyParentReference{
                Selector: sdk.String("laudantium"),
            },
            SchemaFacets: []shared.SchemaFacet{
                shared.SchemaFacet{
                    FacetName: sdk.String("consequatur"),
                    SchemaArn: sdk.String("maxime"),
                },
                shared.SchemaFacet{
                    FacetName: sdk.String("aspernatur"),
                    SchemaArn: sdk.String("nam"),
                },
                shared.SchemaFacet{
                    FacetName: sdk.String("expedita"),
                    SchemaArn: sdk.String("quas"),
                },
                shared.SchemaFacet{
                    FacetName: sdk.String("provident"),
                    SchemaArn: sdk.String("repudiandae"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("vero"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("iure"),
        XAmzDataPartition: "dolorem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateObjectResponse != nil {
        // handle response
    }
}
```

## CreateSchema

<p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>

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
    res, err := s.SDK.CreateSchema(ctx, operations.CreateSchemaRequest{
        RequestBody: operations.CreateSchemaRequestBody{
            Name: "Mr. Leticia Johns",
        },
        XAmzAlgorithm: sdk.String("quae"),
        XAmzContentSha256: sdk.String("amet"),
        XAmzCredential: sdk.String("illum"),
        XAmzDate: sdk.String("praesentium"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("cum"),
        XAmzSignedHeaders: sdk.String("amet"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateSchemaResponse != nil {
        // handle response
    }
}
```

## CreateTypedLinkFacet

Creates a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
    res, err := s.SDK.CreateTypedLinkFacet(ctx, operations.CreateTypedLinkFacetRequest{
        RequestBody: operations.CreateTypedLinkFacetRequestBody{
            Facet: operations.CreateTypedLinkFacetRequestBodyFacet{
                Attributes: []shared.TypedLinkAttributeDefinition{
                    shared.TypedLinkAttributeDefinition{
                        DefaultValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("dicta"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-12-02T06:45:21.747Z"),
                            NumberValue: sdk.String("earum"),
                            StringValue: sdk.String("iusto"),
                        },
                        IsImmutable: sdk.Bool(false),
                        Name: "Shelly Pagac",
                        RequiredBehavior: shared.RequiredAttributeBehaviorEnumNotRequired,
                        Rules: map[string]shared.Rule{
                            "nemo": shared.Rule{
                                Parameters: map[string]string{
                                    "itaque": "facilis",
                                    "corrupti": "aperiam",
                                },
                                Type: shared.RuleTypeEnumStringFromSet.ToPointer(),
                            },
                        },
                        Type: shared.FacetAttributeTypeEnumDatetime,
                    },
                },
                IdentityAttributeOrder: []string{
                    "totam",
                },
                Name: sdk.String("Sandra Frami DVM"),
            },
        },
        XAmzAlgorithm: sdk.String("dolor"),
        XAmzContentSha256: sdk.String("occaecati"),
        XAmzCredential: sdk.String("atque"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("labore"),
        XAmzSignedHeaders: sdk.String("minus"),
        XAmzDataPartition: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateTypedLinkFacetResponse != nil {
        // handle response
    }
}
```

## DeleteDirectory

Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.

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
    res, err := s.SDK.DeleteDirectory(ctx, operations.DeleteDirectoryRequest{
        XAmzAlgorithm: sdk.String("voluptatem"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("rerum"),
        XAmzDate: sdk.String("ea"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("repellat"),
        XAmzDataPartition: "velit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteDirectoryResponse != nil {
        // handle response
    }
}
```

## DeleteFacet

Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s that are associated with the facet will be deleted. Only development schema facets are allowed deletion.

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
    res, err := s.SDK.DeleteFacet(ctx, operations.DeleteFacetRequest{
        RequestBody: operations.DeleteFacetRequestBody{
            Name: "Rene Feeney",
        },
        XAmzAlgorithm: sdk.String("consectetur"),
        XAmzContentSha256: sdk.String("soluta"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("temporibus"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzDataPartition: "aspernatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteFacetResponse != nil {
        // handle response
    }
}
```

## DeleteObject

Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted.

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
    res, err := s.SDK.DeleteObject(ctx, operations.DeleteObjectRequest{
        RequestBody: operations.DeleteObjectRequestBody{
            ObjectReference: operations.DeleteObjectRequestBodyObjectReference{
                Selector: sdk.String("quo"),
            },
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("illum"),
        XAmzCredential: sdk.String("laborum"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("qui"),
        XAmzSignedHeaders: sdk.String("consectetur"),
        XAmzDataPartition: "repellat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteObjectResponse != nil {
        // handle response
    }
}
```

## DeleteSchema

Deletes a given schema. Schemas in a development and published state can only be deleted. 

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
    res, err := s.SDK.DeleteSchema(ctx, operations.DeleteSchemaRequest{
        XAmzAlgorithm: sdk.String("explicabo"),
        XAmzContentSha256: sdk.String("explicabo"),
        XAmzCredential: sdk.String("exercitationem"),
        XAmzDate: sdk.String("nihil"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("ab"),
        XAmzSignedHeaders: sdk.String("illo"),
        XAmzDataPartition: "hic",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteSchemaResponse != nil {
        // handle response
    }
}
```

## DeleteTypedLinkFacet

Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
    res, err := s.SDK.DeleteTypedLinkFacet(ctx, operations.DeleteTypedLinkFacetRequest{
        RequestBody: operations.DeleteTypedLinkFacetRequestBody{
            Name: "Toby Friesen",
        },
        XAmzAlgorithm: sdk.String("exercitationem"),
        XAmzContentSha256: sdk.String("labore"),
        XAmzCredential: sdk.String("numquam"),
        XAmzDate: sdk.String("repudiandae"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("in"),
        XAmzSignedHeaders: sdk.String("explicabo"),
        XAmzDataPartition: "accusamus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteTypedLinkFacetResponse != nil {
        // handle response
    }
}
```

## DetachFromIndex

Detaches the specified object from the specified index.

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
    res, err := s.SDK.DetachFromIndex(ctx, operations.DetachFromIndexRequest{
        RequestBody: operations.DetachFromIndexRequestBody{
            IndexReference: operations.DetachFromIndexRequestBodyIndexReference{
                Selector: sdk.String("rem"),
            },
            TargetReference: operations.DetachFromIndexRequestBodyTargetReference{
                Selector: sdk.String("aperiam"),
            },
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("deleniti"),
        XAmzCredential: sdk.String("enim"),
        XAmzDate: sdk.String("voluptate"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("minima"),
        XAmzSignedHeaders: sdk.String("libero"),
        XAmzDataPartition: "magnam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetachFromIndexResponse != nil {
        // handle response
    }
}
```

## DetachObject

Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.

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
    res, err := s.SDK.DetachObject(ctx, operations.DetachObjectRequest{
        RequestBody: operations.DetachObjectRequestBody{
            LinkName: "sit",
            ParentReference: operations.DetachObjectRequestBodyParentReference{
                Selector: sdk.String("modi"),
            },
        },
        XAmzAlgorithm: sdk.String("eum"),
        XAmzContentSha256: sdk.String("nesciunt"),
        XAmzCredential: sdk.String("mollitia"),
        XAmzDate: sdk.String("dignissimos"),
        XAmzSecurityToken: sdk.String("fugiat"),
        XAmzSignature: sdk.String("nostrum"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzDataPartition: "veniam",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetachObjectResponse != nil {
        // handle response
    }
}
```

## DetachPolicy

Detaches a policy from an object.

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
    res, err := s.SDK.DetachPolicy(ctx, operations.DetachPolicyRequest{
        RequestBody: operations.DetachPolicyRequestBody{
            ObjectReference: operations.DetachPolicyRequestBodyObjectReference{
                Selector: sdk.String("reiciendis"),
            },
            PolicyReference: operations.DetachPolicyRequestBodyPolicyReference{
                Selector: sdk.String("ab"),
            },
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("aut"),
        XAmzCredential: sdk.String("aut"),
        XAmzDate: sdk.String("eveniet"),
        XAmzSecurityToken: sdk.String("odio"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("numquam"),
        XAmzDataPartition: "dolorum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DetachPolicyResponse != nil {
        // handle response
    }
}
```

## DetachTypedLink

Detaches a typed link from a specified source and target object. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
    res, err := s.SDK.DetachTypedLink(ctx, operations.DetachTypedLinkRequest{
        RequestBody: operations.DetachTypedLinkRequestBody{
            TypedLinkSpecifier: operations.DetachTypedLinkRequestBodyTypedLinkSpecifier{
                IdentityAttributeValues: []shared.AttributeNameAndValue{
                    shared.AttributeNameAndValue{
                        AttributeName: "voluptate",
                        Value: shared.TypedAttributeValue{
                            BinaryValue: sdk.String("consectetur"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-09-09T14:53:16.274Z"),
                            NumberValue: sdk.String("itaque"),
                            StringValue: sdk.String("minus"),
                        },
                    },
                    shared.AttributeNameAndValue{
                        AttributeName: "sunt",
                        Value: shared.TypedAttributeValue{
                            BinaryValue: sdk.String("distinctio"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-06-11T07:28:15.655Z"),
                            NumberValue: sdk.String("et"),
                            StringValue: sdk.String("facilis"),
                        },
                    },
                    shared.AttributeNameAndValue{
                        AttributeName: "amet",
                        Value: shared.TypedAttributeValue{
                            BinaryValue: sdk.String("autem"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-12-28T02:58:03.534Z"),
                            NumberValue: sdk.String("rem"),
                            StringValue: sdk.String("aut"),
                        },
                    },
                    shared.AttributeNameAndValue{
                        AttributeName: "quos",
                        Value: shared.TypedAttributeValue{
                            BinaryValue: sdk.String("laudantium"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-10-01T19:06:45.765Z"),
                            NumberValue: sdk.String("quae"),
                            StringValue: sdk.String("eaque"),
                        },
                    },
                },
                SourceObjectReference: &shared.ObjectReference{
                    Selector: sdk.String("saepe"),
                },
                TargetObjectReference: &shared.ObjectReference{
                    Selector: sdk.String("delectus"),
                },
                TypedLinkFacet: &shared.TypedLinkSchemaAndFacetName{
                    SchemaArn: "mollitia",
                    TypedLinkName: "nulla",
                },
            },
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("sed"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("alias"),
        XAmzSecurityToken: sdk.String("eveniet"),
        XAmzSignature: sdk.String("hic"),
        XAmzSignedHeaders: sdk.String("voluptatem"),
        XAmzDataPartition: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DisableDirectory

Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.

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
    res, err := s.SDK.DisableDirectory(ctx, operations.DisableDirectoryRequest{
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("beatae"),
        XAmzSignedHeaders: sdk.String("aliquid"),
        XAmzDataPartition: "modi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DisableDirectoryResponse != nil {
        // handle response
    }
}
```

## EnableDirectory

Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.

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
    res, err := s.SDK.EnableDirectory(ctx, operations.EnableDirectoryRequest{
        XAmzAlgorithm: sdk.String("optio"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("molestias"),
        XAmzDate: sdk.String("officia"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("sequi"),
        XAmzDataPartition: "aliquid",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.EnableDirectoryResponse != nil {
        // handle response
    }
}
```

## GetAppliedSchemaVersion

Returns current applied schema version ARN, including the minor version in use.

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
    res, err := s.SDK.GetAppliedSchemaVersion(ctx, operations.GetAppliedSchemaVersionRequest{
        RequestBody: operations.GetAppliedSchemaVersionRequestBody{
            SchemaArn: "ea",
        },
        XAmzAlgorithm: sdk.String("impedit"),
        XAmzContentSha256: sdk.String("ducimus"),
        XAmzCredential: sdk.String("odit"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("reiciendis"),
        XAmzSignature: sdk.String("repellat"),
        XAmzSignedHeaders: sdk.String("nulla"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetAppliedSchemaVersionResponse != nil {
        // handle response
    }
}
```

## GetDirectory

Retrieves metadata about a directory.

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
    res, err := s.SDK.GetDirectory(ctx, operations.GetDirectoryRequest{
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("natus"),
        XAmzCredential: sdk.String("accusamus"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("nisi"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("recusandae"),
        XAmzDataPartition: "voluptates",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetDirectoryResponse != nil {
        // handle response
    }
}
```

## GetFacet

Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema facets -- published, development, or applied.

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
    res, err := s.SDK.GetFacet(ctx, operations.GetFacetRequest{
        RequestBody: operations.GetFacetRequestBody{
            Name: "Hilda Crona",
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("architecto"),
        XAmzDataPartition: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetFacetResponse != nil {
        // handle response
    }
}
```

## GetLinkAttributes

Retrieves attributes that are associated with a typed link.

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
    res, err := s.SDK.GetLinkAttributes(ctx, operations.GetLinkAttributesRequest{
        RequestBody: operations.GetLinkAttributesRequestBody{
            AttributeNames: []string{
                "rem",
                "perferendis",
                "facilis",
                "reiciendis",
            },
            ConsistencyLevel: operations.GetLinkAttributesRequestBodyConsistencyLevelEnumEventual.ToPointer(),
            TypedLinkSpecifier: operations.GetLinkAttributesRequestBodyTypedLinkSpecifier{
                IdentityAttributeValues: []shared.AttributeNameAndValue{
                    shared.AttributeNameAndValue{
                        AttributeName: "dicta",
                        Value: shared.TypedAttributeValue{
                            BinaryValue: sdk.String("quos"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-09-14T23:28:45.223Z"),
                            NumberValue: sdk.String("modi"),
                            StringValue: sdk.String("itaque"),
                        },
                    },
                    shared.AttributeNameAndValue{
                        AttributeName: "maxime",
                        Value: shared.TypedAttributeValue{
                            BinaryValue: sdk.String("modi"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-03-04T17:26:08.366Z"),
                            NumberValue: sdk.String("vero"),
                            StringValue: sdk.String("doloribus"),
                        },
                    },
                    shared.AttributeNameAndValue{
                        AttributeName: "impedit",
                        Value: shared.TypedAttributeValue{
                            BinaryValue: sdk.String("porro"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2021-06-11T16:56:41.770Z"),
                            NumberValue: sdk.String("reiciendis"),
                            StringValue: sdk.String("ab"),
                        },
                    },
                },
                SourceObjectReference: &shared.ObjectReference{
                    Selector: sdk.String("sint"),
                },
                TargetObjectReference: &shared.ObjectReference{
                    Selector: sdk.String("nihil"),
                },
                TypedLinkFacet: &shared.TypedLinkSchemaAndFacetName{
                    SchemaArn: "esse",
                    TypedLinkName: "iure",
                },
            },
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("nesciunt"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzDataPartition: "consequuntur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetLinkAttributesResponse != nil {
        // handle response
    }
}
```

## GetObjectAttributes

Retrieves attributes within a facet that are associated with an object.

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
    res, err := s.SDK.GetObjectAttributes(ctx, operations.GetObjectAttributesRequest{
        RequestBody: operations.GetObjectAttributesRequestBody{
            AttributeNames: []string{
                "reprehenderit",
                "distinctio",
                "eius",
            },
            ObjectReference: operations.GetObjectAttributesRequestBodyObjectReference{
                Selector: sdk.String("ipsa"),
            },
            SchemaFacet: operations.GetObjectAttributesRequestBodySchemaFacet{
                FacetName: sdk.String("rem"),
                SchemaArn: sdk.String("maiores"),
            },
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("veniam"),
        XAmzCredential: sdk.String("saepe"),
        XAmzDate: sdk.String("neque"),
        XAmzSecurityToken: sdk.String("facere"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("quos"),
        XAmzConsistencyLevel: operations.GetObjectAttributesXAmzConsistencyLevelEnumEventual.ToPointer(),
        XAmzDataPartition: "fugiat",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetObjectAttributesResponse != nil {
        // handle response
    }
}
```

## GetObjectInformation

Retrieves metadata about an object.

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
    res, err := s.SDK.GetObjectInformation(ctx, operations.GetObjectInformationRequest{
        RequestBody: operations.GetObjectInformationRequestBody{
            ObjectReference: operations.GetObjectInformationRequestBodyObjectReference{
                Selector: sdk.String("est"),
            },
        },
        XAmzAlgorithm: sdk.String("delectus"),
        XAmzContentSha256: sdk.String("velit"),
        XAmzCredential: sdk.String("vitae"),
        XAmzDate: sdk.String("nesciunt"),
        XAmzSecurityToken: sdk.String("similique"),
        XAmzSignature: sdk.String("illo"),
        XAmzSignedHeaders: sdk.String("repellat"),
        XAmzConsistencyLevel: operations.GetObjectInformationXAmzConsistencyLevelEnumSerializable.ToPointer(),
        XAmzDataPartition: "doloribus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetObjectInformationResponse != nil {
        // handle response
    }
}
```

## GetSchemaAsJSON

Retrieves a JSON representation of the schema. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_schemas.html#jsonformat">JSON Schema Format</a> for more information.

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
    res, err := s.SDK.GetSchemaAsJSON(ctx, operations.GetSchemaAsJSONRequest{
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("unde"),
        XAmzCredential: sdk.String("incidunt"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("ipsam"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("optio"),
        XAmzDataPartition: "alias",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetSchemaAsJSONResponse != nil {
        // handle response
    }
}
```

## GetTypedLinkFacetInformation

Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
    res, err := s.SDK.GetTypedLinkFacetInformation(ctx, operations.GetTypedLinkFacetInformationRequest{
        RequestBody: operations.GetTypedLinkFacetInformationRequestBody{
            Name: "Antonio Jerde",
        },
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("debitis"),
        XAmzCredential: sdk.String("officia"),
        XAmzDate: sdk.String("sint"),
        XAmzSecurityToken: sdk.String("ut"),
        XAmzSignature: sdk.String("numquam"),
        XAmzSignedHeaders: sdk.String("tenetur"),
        XAmzDataPartition: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetTypedLinkFacetInformationResponse != nil {
        // handle response
    }
}
```

## ListAppliedSchemaArns

Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.

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
    res, err := s.SDK.ListAppliedSchemaArns(ctx, operations.ListAppliedSchemaArnsRequest{
        MaxResults: sdk.String("libero"),
        NextToken: sdk.String("in"),
        RequestBody: operations.ListAppliedSchemaArnsRequestBody{
            DirectoryArn: "minima",
            MaxResults: sdk.Int64(403147),
            NextToken: sdk.String("minus"),
            SchemaArn: sdk.String("ab"),
        },
        XAmzAlgorithm: sdk.String("beatae"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("nisi"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("dolor"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("fuga"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAppliedSchemaArnsResponse != nil {
        // handle response
    }
}
```

## ListAttachedIndices

Lists indices attached to the specified object.

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
    res, err := s.SDK.ListAttachedIndices(ctx, operations.ListAttachedIndicesRequest{
        MaxResults: sdk.String("minima"),
        NextToken: sdk.String("architecto"),
        RequestBody: operations.ListAttachedIndicesRequestBody{
            MaxResults: sdk.Int64(181476),
            NextToken: sdk.String("aliquid"),
            TargetReference: operations.ListAttachedIndicesRequestBodyTargetReference{
                Selector: sdk.String("magni"),
            },
        },
        XAmzAlgorithm: sdk.String("incidunt"),
        XAmzContentSha256: sdk.String("adipisci"),
        XAmzCredential: sdk.String("praesentium"),
        XAmzDate: sdk.String("dolor"),
        XAmzSecurityToken: sdk.String("exercitationem"),
        XAmzSignature: sdk.String("expedita"),
        XAmzSignedHeaders: sdk.String("facilis"),
        XAmzConsistencyLevel: operations.ListAttachedIndicesXAmzConsistencyLevelEnumEventual.ToPointer(),
        XAmzDataPartition: "sit",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAttachedIndicesResponse != nil {
        // handle response
    }
}
```

## ListDevelopmentSchemaArns

Retrieves each Amazon Resource Name (ARN) of schemas in the development state.

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
    res, err := s.SDK.ListDevelopmentSchemaArns(ctx, operations.ListDevelopmentSchemaArnsRequest{
        MaxResults: sdk.String("nemo"),
        NextToken: sdk.String("culpa"),
        RequestBody: operations.ListDevelopmentSchemaArnsRequestBody{
            MaxResults: sdk.Int64(159393),
            NextToken: sdk.String("amet"),
        },
        XAmzAlgorithm: sdk.String("deserunt"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("quod"),
        XAmzSecurityToken: sdk.String("itaque"),
        XAmzSignature: sdk.String("a"),
        XAmzSignedHeaders: sdk.String("quisquam"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDevelopmentSchemaArnsResponse != nil {
        // handle response
    }
}
```

## ListDirectories

Lists directories created within an account.

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
    res, err := s.SDK.ListDirectories(ctx, operations.ListDirectoriesRequest{
        MaxResults: sdk.String("enim"),
        NextToken: sdk.String("doloribus"),
        RequestBody: operations.ListDirectoriesRequestBody{
            MaxResults: sdk.Int64(826806),
            NextToken: sdk.String("officiis"),
            State: operations.ListDirectoriesRequestBodyStateEnumEnabled.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("alias"),
        XAmzContentSha256: sdk.String("culpa"),
        XAmzCredential: sdk.String("ipsa"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("necessitatibus"),
        XAmzSignature: sdk.String("quia"),
        XAmzSignedHeaders: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListDirectoriesResponse != nil {
        // handle response
    }
}
```

## ListFacetAttributes

Retrieves attributes attached to the facet.

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
    res, err := s.SDK.ListFacetAttributes(ctx, operations.ListFacetAttributesRequest{
        MaxResults: sdk.String("vel"),
        NextToken: sdk.String("perspiciatis"),
        RequestBody: operations.ListFacetAttributesRequestBody{
            MaxResults: sdk.Int64(892708),
            Name: "Mr. Julie Bartoletti",
            NextToken: sdk.String("cumque"),
        },
        XAmzAlgorithm: sdk.String("iure"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("nemo"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("velit"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzDataPartition: "dignissimos",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFacetAttributesResponse != nil {
        // handle response
    }
}
```

## ListFacetNames

Retrieves the names of facets that exist in a schema.

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
    res, err := s.SDK.ListFacetNames(ctx, operations.ListFacetNamesRequest{
        MaxResults: sdk.String("laboriosam"),
        NextToken: sdk.String("sed"),
        RequestBody: operations.ListFacetNamesRequestBody{
            MaxResults: sdk.Int64(486272),
            NextToken: sdk.String("natus"),
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("cum"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("facilis"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        XAmzDataPartition: "unde",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListFacetNamesResponse != nil {
        // handle response
    }
}
```

## ListIncomingTypedLinks

Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
    res, err := s.SDK.ListIncomingTypedLinks(ctx, operations.ListIncomingTypedLinksRequest{
        RequestBody: operations.ListIncomingTypedLinksRequestBody{
            ConsistencyLevel: operations.ListIncomingTypedLinksRequestBodyConsistencyLevelEnumSerializable.ToPointer(),
            FilterAttributeRanges: []shared.TypedLinkAttributeRange{
                shared.TypedLinkAttributeRange{
                    AttributeName: sdk.String("hic"),
                    Range: shared.TypedAttributeValueRange{
                        EndMode: shared.RangeModeEnumInclusive,
                        EndValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("aspernatur"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2021-07-24T04:56:31.562Z"),
                            NumberValue: sdk.String("incidunt"),
                            StringValue: sdk.String("recusandae"),
                        },
                        StartMode: shared.RangeModeEnumInclusive,
                        StartValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("id"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2021-09-24T18:07:45.123Z"),
                            NumberValue: sdk.String("quo"),
                            StringValue: sdk.String("nesciunt"),
                        },
                    },
                },
                shared.TypedLinkAttributeRange{
                    AttributeName: sdk.String("illum"),
                    Range: shared.TypedAttributeValueRange{
                        EndMode: shared.RangeModeEnumLast,
                        EndValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("illum"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-07-04T05:44:09.732Z"),
                            NumberValue: sdk.String("mollitia"),
                            StringValue: sdk.String("assumenda"),
                        },
                        StartMode: shared.RangeModeEnumExclusive,
                        StartValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("distinctio"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-01-11T21:57:18.174Z"),
                            NumberValue: sdk.String("facere"),
                            StringValue: sdk.String("laborum"),
                        },
                    },
                },
                shared.TypedLinkAttributeRange{
                    AttributeName: sdk.String("eveniet"),
                    Range: shared.TypedAttributeValueRange{
                        EndMode: shared.RangeModeEnumInclusive,
                        EndValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("incidunt"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2021-11-22T08:55:16.108Z"),
                            NumberValue: sdk.String("alias"),
                            StringValue: sdk.String("suscipit"),
                        },
                        StartMode: shared.RangeModeEnumInclusive,
                        StartValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("molestias"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2021-08-31T04:48:59.619Z"),
                            NumberValue: sdk.String("occaecati"),
                            StringValue: sdk.String("labore"),
                        },
                    },
                },
            },
            FilterTypedLink: &operations.ListIncomingTypedLinksRequestBodyFilterTypedLink{
                SchemaArn: sdk.String("quo"),
                TypedLinkName: sdk.String("perferendis"),
            },
            MaxResults: sdk.Int64(143528),
            NextToken: sdk.String("aliquid"),
            ObjectReference: operations.ListIncomingTypedLinksRequestBodyObjectReference{
                Selector: sdk.String("magnam"),
            },
        },
        XAmzAlgorithm: sdk.String("quaerat"),
        XAmzContentSha256: sdk.String("eligendi"),
        XAmzCredential: sdk.String("hic"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("unde"),
        XAmzSignedHeaders: sdk.String("nulla"),
        XAmzDataPartition: "error",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIncomingTypedLinksResponse != nil {
        // handle response
    }
}
```

## ListIndex

Lists objects attached to the specified index.

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
    res, err := s.SDK.ListIndex(ctx, operations.ListIndexRequest{
        MaxResults: sdk.String("mollitia"),
        NextToken: sdk.String("magnam"),
        RequestBody: operations.ListIndexRequestBody{
            IndexReference: operations.ListIndexRequestBodyIndexReference{
                Selector: sdk.String("nostrum"),
            },
            MaxResults: sdk.Int64(460909),
            NextToken: sdk.String("corrupti"),
            RangesOnIndexedValues: []shared.ObjectAttributeRange{
                shared.ObjectAttributeRange{
                    AttributeKey: &shared.AttributeKey{
                        FacetName: "facere",
                        Name: "Roger O'Connell",
                        SchemaArn: "doloremque",
                    },
                    Range: &shared.TypedAttributeValueRange{
                        EndMode: shared.RangeModeEnumFirst,
                        EndValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("facere"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2020-07-30T17:13:23.320Z"),
                            NumberValue: sdk.String("consequatur"),
                            StringValue: sdk.String("eaque"),
                        },
                        StartMode: shared.RangeModeEnumFirst,
                        StartValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("similique"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2021-06-29T19:31:58.518Z"),
                            NumberValue: sdk.String("quae"),
                            StringValue: sdk.String("magni"),
                        },
                    },
                },
                shared.ObjectAttributeRange{
                    AttributeKey: &shared.AttributeKey{
                        FacetName: "officiis",
                        Name: "Ms. Kelley Rutherford",
                        SchemaArn: "maiores",
                    },
                    Range: &shared.TypedAttributeValueRange{
                        EndMode: shared.RangeModeEnumLastBeforeMissingValues,
                        EndValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("maiores"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-01-03T16:14:13.728Z"),
                            NumberValue: sdk.String("rem"),
                            StringValue: sdk.String("dicta"),
                        },
                        StartMode: shared.RangeModeEnumLast,
                        StartValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("earum"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-04-08T04:42:37.704Z"),
                            NumberValue: sdk.String("eius"),
                            StringValue: sdk.String("esse"),
                        },
                    },
                },
                shared.ObjectAttributeRange{
                    AttributeKey: &shared.AttributeKey{
                        FacetName: "in",
                        Name: "Arthur Doyle",
                        SchemaArn: "accusantium",
                    },
                    Range: &shared.TypedAttributeValueRange{
                        EndMode: shared.RangeModeEnumFirst,
                        EndValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("impedit"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-09-21T09:50:22.025Z"),
                            NumberValue: sdk.String("dicta"),
                            StringValue: sdk.String("odit"),
                        },
                        StartMode: shared.RangeModeEnumLast,
                        StartValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("rerum"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-05-18T01:24:07.279Z"),
                            NumberValue: sdk.String("vel"),
                            StringValue: sdk.String("accusantium"),
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzConsistencyLevel: operations.ListIndexXAmzConsistencyLevelEnumEventual.ToPointer(),
        XAmzDataPartition: "incidunt",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIndexResponse != nil {
        // handle response
    }
}
```

## ListObjectAttributes

Lists all attributes that are associated with an object. 

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
    res, err := s.SDK.ListObjectAttributes(ctx, operations.ListObjectAttributesRequest{
        MaxResults: sdk.String("quam"),
        NextToken: sdk.String("magni"),
        RequestBody: operations.ListObjectAttributesRequestBody{
            FacetFilter: &operations.ListObjectAttributesRequestBodyFacetFilter{
                FacetName: sdk.String("deserunt"),
                SchemaArn: sdk.String("delectus"),
            },
            MaxResults: sdk.Int64(609537),
            NextToken: sdk.String("sed"),
            ObjectReference: operations.ListObjectAttributesRequestBodyObjectReference{
                Selector: sdk.String("nesciunt"),
            },
        },
        XAmzAlgorithm: sdk.String("maxime"),
        XAmzContentSha256: sdk.String("quis"),
        XAmzCredential: sdk.String("cupiditate"),
        XAmzDate: sdk.String("aliquam"),
        XAmzSecurityToken: sdk.String("excepturi"),
        XAmzSignature: sdk.String("maiores"),
        XAmzSignedHeaders: sdk.String("laudantium"),
        XAmzConsistencyLevel: operations.ListObjectAttributesXAmzConsistencyLevelEnumSerializable.ToPointer(),
        XAmzDataPartition: "reiciendis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListObjectAttributesResponse != nil {
        // handle response
    }
}
```

## ListObjectChildren

Returns a paginated list of child objects that are associated with a given object.

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
    res, err := s.SDK.ListObjectChildren(ctx, operations.ListObjectChildrenRequest{
        MaxResults: sdk.String("amet"),
        NextToken: sdk.String("nemo"),
        RequestBody: operations.ListObjectChildrenRequestBody{
            MaxResults: sdk.Int64(57470),
            NextToken: sdk.String("quisquam"),
            ObjectReference: operations.ListObjectChildrenRequestBodyObjectReference{
                Selector: sdk.String("tenetur"),
            },
        },
        XAmzAlgorithm: sdk.String("quas"),
        XAmzContentSha256: sdk.String("molestiae"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("asperiores"),
        XAmzSecurityToken: sdk.String("a"),
        XAmzSignature: sdk.String("nobis"),
        XAmzSignedHeaders: sdk.String("perspiciatis"),
        XAmzConsistencyLevel: operations.ListObjectChildrenXAmzConsistencyLevelEnumSerializable.ToPointer(),
        XAmzDataPartition: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListObjectChildrenResponse != nil {
        // handle response
    }
}
```

## ListObjectParentPaths

<p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#dirstructure">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>

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
    res, err := s.SDK.ListObjectParentPaths(ctx, operations.ListObjectParentPathsRequest{
        MaxResults: sdk.String("minus"),
        NextToken: sdk.String("commodi"),
        RequestBody: operations.ListObjectParentPathsRequestBody{
            MaxResults: sdk.Int64(908734),
            NextToken: sdk.String("porro"),
            ObjectReference: operations.ListObjectParentPathsRequestBodyObjectReference{
                Selector: sdk.String("tempore"),
            },
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("modi"),
        XAmzCredential: sdk.String("voluptates"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("sequi"),
        XAmzSignedHeaders: sdk.String("eligendi"),
        XAmzDataPartition: "asperiores",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListObjectParentPathsResponse != nil {
        // handle response
    }
}
```

## ListObjectParents

Lists parent objects that are associated with a given object in pagination fashion.

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
    res, err := s.SDK.ListObjectParents(ctx, operations.ListObjectParentsRequest{
        MaxResults: sdk.String("esse"),
        NextToken: sdk.String("blanditiis"),
        RequestBody: operations.ListObjectParentsRequestBody{
            MaxResults: sdk.Int64(573610),
            NextToken: sdk.String("repellat"),
            ObjectReference: operations.ListObjectParentsRequestBodyObjectReference{
                Selector: sdk.String("a"),
            },
        },
        XAmzAlgorithm: sdk.String("animi"),
        XAmzContentSha256: sdk.String("maiores"),
        XAmzCredential: sdk.String("itaque"),
        XAmzDate: sdk.String("nulla"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("velit"),
        XAmzConsistencyLevel: operations.ListObjectParentsXAmzConsistencyLevelEnumEventual.ToPointer(),
        XAmzDataPartition: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListObjectParentsResponse != nil {
        // handle response
    }
}
```

## ListObjectPolicies

Returns policies attached to an object in pagination fashion.

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
    res, err := s.SDK.ListObjectPolicies(ctx, operations.ListObjectPoliciesRequest{
        MaxResults: sdk.String("officia"),
        NextToken: sdk.String("saepe"),
        RequestBody: operations.ListObjectPoliciesRequestBody{
            MaxResults: sdk.Int64(429997),
            NextToken: sdk.String("repudiandae"),
            ObjectReference: operations.ListObjectPoliciesRequestBodyObjectReference{
                Selector: sdk.String("accusantium"),
            },
        },
        XAmzAlgorithm: sdk.String("officia"),
        XAmzContentSha256: sdk.String("impedit"),
        XAmzCredential: sdk.String("quasi"),
        XAmzDate: sdk.String("blanditiis"),
        XAmzSecurityToken: sdk.String("eius"),
        XAmzSignature: sdk.String("quisquam"),
        XAmzSignedHeaders: sdk.String("eos"),
        XAmzConsistencyLevel: operations.ListObjectPoliciesXAmzConsistencyLevelEnumEventual.ToPointer(),
        XAmzDataPartition: "natus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListObjectPoliciesResponse != nil {
        // handle response
    }
}
```

## ListOutgoingTypedLinks

Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
    res, err := s.SDK.ListOutgoingTypedLinks(ctx, operations.ListOutgoingTypedLinksRequest{
        RequestBody: operations.ListOutgoingTypedLinksRequestBody{
            ConsistencyLevel: operations.ListOutgoingTypedLinksRequestBodyConsistencyLevelEnumEventual.ToPointer(),
            FilterAttributeRanges: []shared.TypedLinkAttributeRange{
                shared.TypedLinkAttributeRange{
                    AttributeName: sdk.String("magnam"),
                    Range: shared.TypedAttributeValueRange{
                        EndMode: shared.RangeModeEnumLastBeforeMissingValues,
                        EndValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("quod"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2021-11-26T08:12:43.733Z"),
                            NumberValue: sdk.String("amet"),
                            StringValue: sdk.String("molestiae"),
                        },
                        StartMode: shared.RangeModeEnumLast,
                        StartValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("laborum"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-12-24T04:53:51.587Z"),
                            NumberValue: sdk.String("necessitatibus"),
                            StringValue: sdk.String("architecto"),
                        },
                    },
                },
            },
            FilterTypedLink: &operations.ListOutgoingTypedLinksRequestBodyFilterTypedLink{
                SchemaArn: sdk.String("molestias"),
                TypedLinkName: sdk.String("dolore"),
            },
            MaxResults: sdk.Int64(125811),
            NextToken: sdk.String("maiores"),
            ObjectReference: operations.ListOutgoingTypedLinksRequestBodyObjectReference{
                Selector: sdk.String("neque"),
            },
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("earum"),
        XAmzCredential: sdk.String("veniam"),
        XAmzDate: sdk.String("ipsam"),
        XAmzSecurityToken: sdk.String("eaque"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("veniam"),
        XAmzDataPartition: "nihil",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListOutgoingTypedLinksResponse != nil {
        // handle response
    }
}
```

## ListPolicyAttachments

Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.

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
    res, err := s.SDK.ListPolicyAttachments(ctx, operations.ListPolicyAttachmentsRequest{
        MaxResults: sdk.String("ad"),
        NextToken: sdk.String("nisi"),
        RequestBody: operations.ListPolicyAttachmentsRequestBody{
            MaxResults: sdk.Int64(946808),
            NextToken: sdk.String("quis"),
            PolicyReference: operations.ListPolicyAttachmentsRequestBodyPolicyReference{
                Selector: sdk.String("quibusdam"),
            },
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("suscipit"),
        XAmzCredential: sdk.String("pariatur"),
        XAmzDate: sdk.String("sit"),
        XAmzSecurityToken: sdk.String("quidem"),
        XAmzSignature: sdk.String("repellendus"),
        XAmzSignedHeaders: sdk.String("perferendis"),
        XAmzConsistencyLevel: operations.ListPolicyAttachmentsXAmzConsistencyLevelEnumEventual.ToPointer(),
        XAmzDataPartition: "sapiente",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPolicyAttachmentsResponse != nil {
        // handle response
    }
}
```

## ListPublishedSchemaArns

Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.

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
    res, err := s.SDK.ListPublishedSchemaArns(ctx, operations.ListPublishedSchemaArnsRequest{
        MaxResults: sdk.String("sed"),
        NextToken: sdk.String("possimus"),
        RequestBody: operations.ListPublishedSchemaArnsRequestBody{
            MaxResults: sdk.Int64(996072),
            NextToken: sdk.String("repudiandae"),
            SchemaArn: sdk.String("architecto"),
        },
        XAmzAlgorithm: sdk.String("adipisci"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("dolore"),
        XAmzSecurityToken: sdk.String("voluptatibus"),
        XAmzSignature: sdk.String("iure"),
        XAmzSignedHeaders: sdk.String("explicabo"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListPublishedSchemaArnsResponse != nil {
        // handle response
    }
}
```

## ListTagsForResource

Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.

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
        MaxResults: sdk.String("minus"),
        NextToken: sdk.String("soluta"),
        RequestBody: operations.ListTagsForResourceRequestBody{
            MaxResults: sdk.Int64(677509),
            NextToken: sdk.String("velit"),
            ResourceArn: "earum",
        },
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("error"),
        XAmzCredential: sdk.String("non"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("mollitia"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("harum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTagsForResourceResponse != nil {
        // handle response
    }
}
```

## ListTypedLinkFacetAttributes

Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
    res, err := s.SDK.ListTypedLinkFacetAttributes(ctx, operations.ListTypedLinkFacetAttributesRequest{
        MaxResults: sdk.String("cumque"),
        NextToken: sdk.String("doloremque"),
        RequestBody: operations.ListTypedLinkFacetAttributesRequestBody{
            MaxResults: sdk.Int64(711871),
            Name: "Timothy Nolan",
            NextToken: sdk.String("magni"),
        },
        XAmzAlgorithm: sdk.String("tempora"),
        XAmzContentSha256: sdk.String("possimus"),
        XAmzCredential: sdk.String("dolor"),
        XAmzDate: sdk.String("rerum"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("accusamus"),
        XAmzSignedHeaders: sdk.String("optio"),
        XAmzDataPartition: "delectus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTypedLinkFacetAttributesResponse != nil {
        // handle response
    }
}
```

## ListTypedLinkFacetNames

Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
    res, err := s.SDK.ListTypedLinkFacetNames(ctx, operations.ListTypedLinkFacetNamesRequest{
        MaxResults: sdk.String("minus"),
        NextToken: sdk.String("quo"),
        RequestBody: operations.ListTypedLinkFacetNamesRequestBody{
            MaxResults: sdk.Int64(550338),
            NextToken: sdk.String("asperiores"),
        },
        XAmzAlgorithm: sdk.String("voluptatum"),
        XAmzContentSha256: sdk.String("iste"),
        XAmzCredential: sdk.String("corporis"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("illo"),
        XAmzSignature: sdk.String("aut"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzDataPartition: "nostrum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListTypedLinkFacetNamesResponse != nil {
        // handle response
    }
}
```

## LookupPolicy

Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#policies">Policies</a>.

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
    res, err := s.SDK.LookupPolicy(ctx, operations.LookupPolicyRequest{
        MaxResults: sdk.String("at"),
        NextToken: sdk.String("possimus"),
        RequestBody: operations.LookupPolicyRequestBody{
            MaxResults: sdk.Int64(205499),
            NextToken: sdk.String("pariatur"),
            ObjectReference: operations.LookupPolicyRequestBodyObjectReference{
                Selector: sdk.String("vel"),
            },
        },
        XAmzAlgorithm: sdk.String("sapiente"),
        XAmzContentSha256: sdk.String("mollitia"),
        XAmzCredential: sdk.String("quae"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("aperiam"),
        XAmzSignature: sdk.String("non"),
        XAmzSignedHeaders: sdk.String("voluptates"),
        XAmzDataPartition: "ad",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LookupPolicyResponse != nil {
        // handle response
    }
}
```

## PublishSchema

Publishes a development schema with a major version and a recommended minor version.

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
    res, err := s.SDK.PublishSchema(ctx, operations.PublishSchemaRequest{
        RequestBody: operations.PublishSchemaRequestBody{
            MinorVersion: sdk.String("aliquam"),
            Name: sdk.String("Clifton Crooks III"),
            Version: "laudantium",
        },
        XAmzAlgorithm: sdk.String("est"),
        XAmzContentSha256: sdk.String("dolor"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("consectetur"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("rem"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        XAmzDataPartition: "ducimus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PublishSchemaResponse != nil {
        // handle response
    }
}
```

## PutSchemaFromJSON

Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_schemas.html#jsonformat">JSON Schema Format</a> for more information.

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
    res, err := s.SDK.PutSchemaFromJSON(ctx, operations.PutSchemaFromJSONRequest{
        RequestBody: operations.PutSchemaFromJSONRequestBody{
            Document: "adipisci",
        },
        XAmzAlgorithm: sdk.String("recusandae"),
        XAmzContentSha256: sdk.String("tempora"),
        XAmzCredential: sdk.String("blanditiis"),
        XAmzDate: sdk.String("numquam"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("voluptatum"),
        XAmzSignedHeaders: sdk.String("sit"),
        XAmzDataPartition: "rerum",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PutSchemaFromJSONResponse != nil {
        // handle response
    }
}
```

## RemoveFacetFromObject

Removes the specified facet from the specified object.

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
    res, err := s.SDK.RemoveFacetFromObject(ctx, operations.RemoveFacetFromObjectRequest{
        RequestBody: operations.RemoveFacetFromObjectRequestBody{
            ObjectReference: operations.RemoveFacetFromObjectRequestBodyObjectReference{
                Selector: sdk.String("veritatis"),
            },
            SchemaFacet: operations.RemoveFacetFromObjectRequestBodySchemaFacet{
                FacetName: sdk.String("tenetur"),
                SchemaArn: sdk.String("autem"),
            },
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("totam"),
        XAmzCredential: sdk.String("porro"),
        XAmzDate: sdk.String("deserunt"),
        XAmzSecurityToken: sdk.String("magni"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("voluptas"),
        XAmzDataPartition: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveFacetFromObjectResponse != nil {
        // handle response
    }
}
```

## TagResource

An API operation for adding tags to a resource.

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
    res, err := s.SDK.TagResource(ctx, operations.TagResourceRequest{
        RequestBody: operations.TagResourceRequestBody{
            ResourceArn: "commodi",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("fuga"),
                    Value: sdk.String("aut"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("dolore"),
        XAmzContentSha256: sdk.String("maxime"),
        XAmzCredential: sdk.String("aliquam"),
        XAmzDate: sdk.String("iste"),
        XAmzSecurityToken: sdk.String("ullam"),
        XAmzSignature: sdk.String("eligendi"),
        XAmzSignedHeaders: sdk.String("placeat"),
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

An API operation for removing tags from a resource.

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
        RequestBody: operations.UntagResourceRequestBody{
            ResourceArn: "voluptas",
            TagKeys: []string{
                "unde",
                "illo",
                "nihil",
            },
        },
        XAmzAlgorithm: sdk.String("inventore"),
        XAmzContentSha256: sdk.String("libero"),
        XAmzCredential: sdk.String("ipsam"),
        XAmzDate: sdk.String("quasi"),
        XAmzSecurityToken: sdk.String("cumque"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("harum"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UntagResourceResponse != nil {
        // handle response
    }
}
```

## UpdateFacet

<p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>

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
    res, err := s.SDK.UpdateFacet(ctx, operations.UpdateFacetRequest{
        RequestBody: operations.UpdateFacetRequestBody{
            AttributeUpdates: []shared.FacetAttributeUpdate{
                shared.FacetAttributeUpdate{
                    Action: shared.UpdateActionTypeEnumDelete.ToPointer(),
                    Attribute: &shared.FacetAttribute{
                        AttributeDefinition: &shared.FacetAttributeDefinition{
                            DefaultValue: &shared.TypedAttributeValue{
                                BinaryValue: sdk.String("beatae"),
                                BooleanValue: sdk.Bool(false),
                                DatetimeValue: types.MustTimeFromString("2020-02-09T20:39:20.538Z"),
                                NumberValue: sdk.String("labore"),
                                StringValue: sdk.String("expedita"),
                            },
                            IsImmutable: sdk.Bool(false),
                            Rules: map[string]shared.Rule{
                                "rem": shared.Rule{
                                    Parameters: map[string]string{
                                        "officiis": "cum",
                                        "pariatur": "sapiente",
                                        "quo": "incidunt",
                                    },
                                    Type: shared.RuleTypeEnumStringLength.ToPointer(),
                                },
                                "minus": shared.Rule{
                                    Parameters: map[string]string{
                                        "id": "excepturi",
                                        "occaecati": "libero",
                                        "quo": "esse",
                                        "hic": "maxime",
                                    },
                                    Type: shared.RuleTypeEnumBinaryLength.ToPointer(),
                                },
                                "soluta": shared.Rule{
                                    Parameters: map[string]string{
                                        "pariatur": "eligendi",
                                    },
                                    Type: shared.RuleTypeEnumStringLength.ToPointer(),
                                },
                            },
                            Type: shared.FacetAttributeTypeEnumString,
                        },
                        AttributeReference: &shared.FacetAttributeReference{
                            TargetAttributeName: "aut",
                            TargetFacetName: "laudantium",
                        },
                        Name: "Tiffany Von",
                        RequiredBehavior: shared.RequiredAttributeBehaviorEnumNotRequired.ToPointer(),
                    },
                },
                shared.FacetAttributeUpdate{
                    Action: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                    Attribute: &shared.FacetAttribute{
                        AttributeDefinition: &shared.FacetAttributeDefinition{
                            DefaultValue: &shared.TypedAttributeValue{
                                BinaryValue: sdk.String("voluptatem"),
                                BooleanValue: sdk.Bool(false),
                                DatetimeValue: types.MustTimeFromString("2022-02-16T05:43:18.445Z"),
                                NumberValue: sdk.String("eum"),
                                StringValue: sdk.String("reprehenderit"),
                            },
                            IsImmutable: sdk.Bool(false),
                            Rules: map[string]shared.Rule{
                                "blanditiis": shared.Rule{
                                    Parameters: map[string]string{
                                        "atque": "rerum",
                                        "deserunt": "atque",
                                    },
                                    Type: shared.RuleTypeEnumNumberComparison.ToPointer(),
                                },
                                "atque": shared.Rule{
                                    Parameters: map[string]string{
                                        "est": "enim",
                                    },
                                    Type: shared.RuleTypeEnumStringFromSet.ToPointer(),
                                },
                                "magni": shared.Rule{
                                    Parameters: map[string]string{
                                        "quas": "placeat",
                                    },
                                    Type: shared.RuleTypeEnumNumberComparison.ToPointer(),
                                },
                            },
                            Type: shared.FacetAttributeTypeEnumBinary,
                        },
                        AttributeReference: &shared.FacetAttributeReference{
                            TargetAttributeName: "sapiente",
                            TargetFacetName: "saepe",
                        },
                        Name: "Gerard Mraz",
                        RequiredBehavior: shared.RequiredAttributeBehaviorEnumRequiredAlways.ToPointer(),
                    },
                },
                shared.FacetAttributeUpdate{
                    Action: shared.UpdateActionTypeEnumDelete.ToPointer(),
                    Attribute: &shared.FacetAttribute{
                        AttributeDefinition: &shared.FacetAttributeDefinition{
                            DefaultValue: &shared.TypedAttributeValue{
                                BinaryValue: sdk.String("quia"),
                                BooleanValue: sdk.Bool(false),
                                DatetimeValue: types.MustTimeFromString("2021-01-17T15:26:43.931Z"),
                                NumberValue: sdk.String("cumque"),
                                StringValue: sdk.String("quis"),
                            },
                            IsImmutable: sdk.Bool(false),
                            Rules: map[string]shared.Rule{
                                "eum": shared.Rule{
                                    Parameters: map[string]string{
                                        "illum": "nesciunt",
                                        "sit": "odio",
                                    },
                                    Type: shared.RuleTypeEnumStringLength.ToPointer(),
                                },
                                "asperiores": shared.Rule{
                                    Parameters: map[string]string{
                                        "voluptates": "praesentium",
                                        "dicta": "fugit",
                                        "sit": "aliquid",
                                        "necessitatibus": "sed",
                                    },
                                    Type: shared.RuleTypeEnumStringFromSet.ToPointer(),
                                },
                            },
                            Type: shared.FacetAttributeTypeEnumString,
                        },
                        AttributeReference: &shared.FacetAttributeReference{
                            TargetAttributeName: "nesciunt",
                            TargetFacetName: "delectus",
                        },
                        Name: "Jay Nolan DDS",
                        RequiredBehavior: shared.RequiredAttributeBehaviorEnumRequiredAlways.ToPointer(),
                    },
                },
                shared.FacetAttributeUpdate{
                    Action: shared.UpdateActionTypeEnumDelete.ToPointer(),
                    Attribute: &shared.FacetAttribute{
                        AttributeDefinition: &shared.FacetAttributeDefinition{
                            DefaultValue: &shared.TypedAttributeValue{
                                BinaryValue: sdk.String("ipsa"),
                                BooleanValue: sdk.Bool(false),
                                DatetimeValue: types.MustTimeFromString("2022-05-16T04:51:59.785Z"),
                                NumberValue: sdk.String("repellat"),
                                StringValue: sdk.String("aspernatur"),
                            },
                            IsImmutable: sdk.Bool(false),
                            Rules: map[string]shared.Rule{
                                "sequi": shared.Rule{
                                    Parameters: map[string]string{
                                        "fuga": "hic",
                                    },
                                    Type: shared.RuleTypeEnumBinaryLength.ToPointer(),
                                },
                            },
                            Type: shared.FacetAttributeTypeEnumBinary,
                        },
                        AttributeReference: &shared.FacetAttributeReference{
                            TargetAttributeName: "architecto",
                            TargetFacetName: "aperiam",
                        },
                        Name: "Mrs. Christie Halvorson",
                        RequiredBehavior: shared.RequiredAttributeBehaviorEnumRequiredAlways.ToPointer(),
                    },
                },
            },
            Name: "Loren Jakubowski IV",
            ObjectType: operations.UpdateFacetRequestBodyObjectTypeEnumPolicy.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("hic"),
        XAmzContentSha256: sdk.String("excepturi"),
        XAmzCredential: sdk.String("aliquid"),
        XAmzDate: sdk.String("sed"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzDataPartition: "animi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateFacetResponse != nil {
        // handle response
    }
}
```

## UpdateLinkAttributes

Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.

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
    res, err := s.SDK.UpdateLinkAttributes(ctx, operations.UpdateLinkAttributesRequest{
        RequestBody: operations.UpdateLinkAttributesRequestBody{
            AttributeUpdates: []shared.LinkAttributeUpdate{
                shared.LinkAttributeUpdate{
                    AttributeAction: &shared.LinkAttributeAction{
                        AttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                        AttributeUpdateValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("dignissimos"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-05-06T04:17:50.243Z"),
                            NumberValue: sdk.String("laudantium"),
                            StringValue: sdk.String("esse"),
                        },
                    },
                    AttributeKey: &shared.AttributeKey{
                        FacetName: "eveniet",
                        Name: "Melvin Torp",
                        SchemaArn: "itaque",
                    },
                },
                shared.LinkAttributeUpdate{
                    AttributeAction: &shared.LinkAttributeAction{
                        AttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                        AttributeUpdateValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("ipsam"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-03-25T08:30:08.963Z"),
                            NumberValue: sdk.String("aliquid"),
                            StringValue: sdk.String("quis"),
                        },
                    },
                    AttributeKey: &shared.AttributeKey{
                        FacetName: "facilis",
                        Name: "Ms. Leslie Hagenes",
                        SchemaArn: "dolor",
                    },
                },
            },
            TypedLinkSpecifier: operations.UpdateLinkAttributesRequestBodyTypedLinkSpecifier{
                IdentityAttributeValues: []shared.AttributeNameAndValue{
                    shared.AttributeNameAndValue{
                        AttributeName: "libero",
                        Value: shared.TypedAttributeValue{
                            BinaryValue: sdk.String("iste"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-03-17T17:42:34.376Z"),
                            NumberValue: sdk.String("quos"),
                            StringValue: sdk.String("temporibus"),
                        },
                    },
                    shared.AttributeNameAndValue{
                        AttributeName: "sint",
                        Value: shared.TypedAttributeValue{
                            BinaryValue: sdk.String("iusto"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-02-13T08:47:27.063Z"),
                            NumberValue: sdk.String("aperiam"),
                            StringValue: sdk.String("voluptates"),
                        },
                    },
                    shared.AttributeNameAndValue{
                        AttributeName: "laudantium",
                        Value: shared.TypedAttributeValue{
                            BinaryValue: sdk.String("tempora"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-05-24T05:54:09.135Z"),
                            NumberValue: sdk.String("illum"),
                            StringValue: sdk.String("rem"),
                        },
                    },
                },
                SourceObjectReference: &shared.ObjectReference{
                    Selector: sdk.String("tenetur"),
                },
                TargetObjectReference: &shared.ObjectReference{
                    Selector: sdk.String("deleniti"),
                },
                TypedLinkFacet: &shared.TypedLinkSchemaAndFacetName{
                    SchemaArn: "modi",
                    TypedLinkName: "earum",
                },
            },
        },
        XAmzAlgorithm: sdk.String("architecto"),
        XAmzContentSha256: sdk.String("aliquam"),
        XAmzCredential: sdk.String("labore"),
        XAmzDate: sdk.String("maiores"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("saepe"),
        XAmzSignedHeaders: sdk.String("consequatur"),
        XAmzDataPartition: "esse",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateLinkAttributesResponse != nil {
        // handle response
    }
}
```

## UpdateObjectAttributes

Updates a given object's attributes.

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
    res, err := s.SDK.UpdateObjectAttributes(ctx, operations.UpdateObjectAttributesRequest{
        RequestBody: operations.UpdateObjectAttributesRequestBody{
            AttributeUpdates: []shared.ObjectAttributeUpdate{
                shared.ObjectAttributeUpdate{
                    ObjectAttributeAction: &shared.ObjectAttributeAction{
                        ObjectAttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                        ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("quisquam"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-02-03T08:21:40.004Z"),
                            NumberValue: sdk.String("dolorum"),
                            StringValue: sdk.String("deserunt"),
                        },
                    },
                    ObjectAttributeKey: &shared.AttributeKey{
                        FacetName: "ad",
                        Name: "Jimmy Schaden",
                        SchemaArn: "quibusdam",
                    },
                },
                shared.ObjectAttributeUpdate{
                    ObjectAttributeAction: &shared.ObjectAttributeAction{
                        ObjectAttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                        ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("aut"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-05-11T09:02:32.338Z"),
                            NumberValue: sdk.String("cupiditate"),
                            StringValue: sdk.String("reprehenderit"),
                        },
                    },
                    ObjectAttributeKey: &shared.AttributeKey{
                        FacetName: "quia",
                        Name: "Edward Hand",
                        SchemaArn: "quia",
                    },
                },
                shared.ObjectAttributeUpdate{
                    ObjectAttributeAction: &shared.ObjectAttributeAction{
                        ObjectAttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                        ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("sed"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-07-09T20:41:14.694Z"),
                            NumberValue: sdk.String("expedita"),
                            StringValue: sdk.String("eos"),
                        },
                    },
                    ObjectAttributeKey: &shared.AttributeKey{
                        FacetName: "repellendus",
                        Name: "Angela Mayer",
                        SchemaArn: "accusantium",
                    },
                },
                shared.ObjectAttributeUpdate{
                    ObjectAttributeAction: &shared.ObjectAttributeAction{
                        ObjectAttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                        ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("sapiente"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-05-02T11:36:03.663Z"),
                            NumberValue: sdk.String("aliquam"),
                            StringValue: sdk.String("delectus"),
                        },
                    },
                    ObjectAttributeKey: &shared.AttributeKey{
                        FacetName: "culpa",
                        Name: "Tyrone Schmitt",
                        SchemaArn: "non",
                    },
                },
            },
            ObjectReference: operations.UpdateObjectAttributesRequestBodyObjectReference{
                Selector: sdk.String("ullam"),
            },
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("voluptas"),
        XAmzCredential: sdk.String("doloribus"),
        XAmzDate: sdk.String("animi"),
        XAmzSecurityToken: sdk.String("recusandae"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("non"),
        XAmzDataPartition: "necessitatibus",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateObjectAttributesResponse != nil {
        // handle response
    }
}
```

## UpdateSchema

Updates the schema name with a new name. Only development schema names can be updated.

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
    res, err := s.SDK.UpdateSchema(ctx, operations.UpdateSchemaRequest{
        RequestBody: operations.UpdateSchemaRequestBody{
            Name: "Miss Cary Howe",
        },
        XAmzAlgorithm: sdk.String("sunt"),
        XAmzContentSha256: sdk.String("vitae"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("doloremque"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzDataPartition: "in",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateSchemaResponse != nil {
        // handle response
    }
}
```

## UpdateTypedLinkFacet

Updates a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
    res, err := s.SDK.UpdateTypedLinkFacet(ctx, operations.UpdateTypedLinkFacetRequest{
        RequestBody: operations.UpdateTypedLinkFacetRequestBody{
            AttributeUpdates: []shared.TypedLinkFacetAttributeUpdate{
                shared.TypedLinkFacetAttributeUpdate{
                    Action: shared.UpdateActionTypeEnumDelete,
                    Attribute: shared.TypedLinkAttributeDefinition{
                        DefaultValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("ratione"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-08-11T08:06:56.057Z"),
                            NumberValue: sdk.String("dignissimos"),
                            StringValue: sdk.String("reiciendis"),
                        },
                        IsImmutable: sdk.Bool(false),
                        Name: "Miss Gerald Orn",
                        RequiredBehavior: shared.RequiredAttributeBehaviorEnumNotRequired,
                        Rules: map[string]shared.Rule{
                            "maiores": shared.Rule{
                                Parameters: map[string]string{
                                    "provident": "sapiente",
                                    "aperiam": "similique",
                                },
                                Type: shared.RuleTypeEnumBinaryLength.ToPointer(),
                            },
                            "provident": shared.Rule{
                                Parameters: map[string]string{
                                    "repellendus": "unde",
                                    "alias": "impedit",
                                },
                                Type: shared.RuleTypeEnumBinaryLength.ToPointer(),
                            },
                            "commodi": shared.Rule{
                                Parameters: map[string]string{
                                    "expedita": "in",
                                    "quisquam": "sunt",
                                },
                                Type: shared.RuleTypeEnumNumberComparison.ToPointer(),
                            },
                            "nulla": shared.Rule{
                                Parameters: map[string]string{
                                    "distinctio": "mollitia",
                                    "impedit": "accusamus",
                                    "et": "quas",
                                    "blanditiis": "cum",
                                },
                                Type: shared.RuleTypeEnumBinaryLength.ToPointer(),
                            },
                        },
                        Type: shared.FacetAttributeTypeEnumNumber,
                    },
                },
                shared.TypedLinkFacetAttributeUpdate{
                    Action: shared.UpdateActionTypeEnumCreateOrUpdate,
                    Attribute: shared.TypedLinkAttributeDefinition{
                        DefaultValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("eveniet"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-07-20T08:48:29.633Z"),
                            NumberValue: sdk.String("impedit"),
                            StringValue: sdk.String("quas"),
                        },
                        IsImmutable: sdk.Bool(false),
                        Name: "Duane Romaguera",
                        RequiredBehavior: shared.RequiredAttributeBehaviorEnumRequiredAlways,
                        Rules: map[string]shared.Rule{
                            "maiores": shared.Rule{
                                Parameters: map[string]string{
                                    "vero": "quidem",
                                    "illo": "quo",
                                    "dignissimos": "minus",
                                    "distinctio": "possimus",
                                },
                                Type: shared.RuleTypeEnumStringFromSet.ToPointer(),
                            },
                        },
                        Type: shared.FacetAttributeTypeEnumBinary,
                    },
                },
            },
            IdentityAttributeOrder: []string{
                "earum",
                "quod",
                "nihil",
                "quaerat",
            },
            Name: "Jo Larkin",
        },
        XAmzAlgorithm: sdk.String("odit"),
        XAmzContentSha256: sdk.String("ad"),
        XAmzCredential: sdk.String("sequi"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("iusto"),
        XAmzSignature: sdk.String("esse"),
        XAmzSignedHeaders: sdk.String("magnam"),
        XAmzDataPartition: "odio",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateTypedLinkFacetResponse != nil {
        // handle response
    }
}
```

## UpgradeAppliedSchema

Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.

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
    res, err := s.SDK.UpgradeAppliedSchema(ctx, operations.UpgradeAppliedSchemaRequest{
        RequestBody: operations.UpgradeAppliedSchemaRequestBody{
            DirectoryArn: "nulla",
            DryRun: sdk.Bool(false),
            PublishedSchemaArn: "impedit",
        },
        XAmzAlgorithm: sdk.String("cupiditate"),
        XAmzContentSha256: sdk.String("illo"),
        XAmzCredential: sdk.String("exercitationem"),
        XAmzDate: sdk.String("laborum"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("maxime"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpgradeAppliedSchemaResponse != nil {
        // handle response
    }
}
```

## UpgradePublishedSchema

Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.

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
    res, err := s.SDK.UpgradePublishedSchema(ctx, operations.UpgradePublishedSchemaRequest{
        RequestBody: operations.UpgradePublishedSchemaRequestBody{
            DevelopmentSchemaArn: "dolorum",
            DryRun: sdk.Bool(false),
            MinorVersion: "repellat",
            PublishedSchemaArn: "nostrum",
        },
        XAmzAlgorithm: sdk.String("illum"),
        XAmzContentSha256: sdk.String("quibusdam"),
        XAmzCredential: sdk.String("commodi"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("consectetur"),
        XAmzSignedHeaders: sdk.String("temporibus"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpgradePublishedSchemaResponse != nil {
        // handle response
    }
}
```
