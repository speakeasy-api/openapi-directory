# SDK

## Overview

<fullname>Amazon Cloud Directory</fullname> <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the development and management of cloud-scale web, mobile, and IoT applications. This guide describes the Cloud Directory operations that you can call programmatically and includes detailed information on data types and errors. For information about Cloud Directory features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory Service</a> and the <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is_cloud_directory.html">Amazon Cloud Directory Developer Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/clouddirectory/>
### Available Operations

* [AddFacetToObject](#addfacettoobject) - Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.
* [ApplySchema](#applyschema) - Copies the input published schema, at the specified version, into the <a>Directory</a> with the same name and version as that of the published schema.
* [AttachObject](#attachobject) - <p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>
* [AttachPolicy](#attachpolicy) - Attaches a policy object to a regular object. An object can have a limited number of attached policies.
* [AttachToIndex](#attachtoindex) - Attaches the specified object to the specified index.
* [AttachTypedLink](#attachtypedlink) - Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [BatchRead](#batchread) - Performs all the read operations in a batch. 
* [BatchWrite](#batchwrite) - Performs all the write operations in a batch. Either all the operations succeed or none.
* [CreateDirectory](#createdirectory) - <p>Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.</p> <p>You can also quickly create a directory using a managed schema, called the <code>QuickStartSchema</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_managed.html">Managed Schema</a> in the <i>Amazon Cloud Directory Developer Guide</i>.</p>
* [CreateFacet](#createfacet) - Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.
* [CreateIndex](#createindex) - Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.html">Indexing and search</a> for more information.
* [CreateObject](#createobject) - Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. 
* [CreateSchema](#createschema) - <p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>
* [CreateTypedLinkFacet](#createtypedlinkfacet) - Creates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [DeleteDirectory](#deletedirectory) - Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.
* [DeleteFacet](#deletefacet) - Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s that are associated with the facet will be deleted. Only development schema facets are allowed deletion.
* [DeleteObject](#deleteobject) - Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.
* [DeleteSchema](#deleteschema) - Deletes a given schema. Schemas in a development and published state can only be deleted. 
* [DeleteTypedLinkFacet](#deletetypedlinkfacet) - Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [DetachFromIndex](#detachfromindex) - Detaches the specified object from the specified index.
* [DetachObject](#detachobject) - Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.
* [DetachPolicy](#detachpolicy) - Detaches a policy from an object.
* [DetachTypedLink](#detachtypedlink) - Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [DisableDirectory](#disabledirectory) - Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.
* [EnableDirectory](#enabledirectory) - Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.
* [GetAppliedSchemaVersion](#getappliedschemaversion) - Returns current applied schema version ARN, including the minor version in use.
* [GetDirectory](#getdirectory) - Retrieves metadata about a directory.
* [GetFacet](#getfacet) - Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema facets -- published, development, or applied.
* [GetLinkAttributes](#getlinkattributes) - Retrieves attributes that are associated with a typed link.
* [GetObjectAttributes](#getobjectattributes) - Retrieves attributes within a facet that are associated with an object.
* [GetObjectInformation](#getobjectinformation) - Retrieves metadata about an object.
* [GetSchemaAsJSON](#getschemaasjson) - Retrieves a JSON representation of the schema. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.
* [GetTypedLinkFacetInformation](#gettypedlinkfacetinformation) - Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [ListAppliedSchemaArns](#listappliedschemaarns) - Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.
* [ListAttachedIndices](#listattachedindices) - Lists indices attached to the specified object.
* [ListDevelopmentSchemaArns](#listdevelopmentschemaarns) - Retrieves each Amazon Resource Name (ARN) of schemas in the development state.
* [ListDirectories](#listdirectories) - Lists directories created within an account.
* [ListFacetAttributes](#listfacetattributes) - Retrieves attributes attached to the facet.
* [ListFacetNames](#listfacetnames) - Retrieves the names of facets that exist in a schema.
* [ListIncomingTypedLinks](#listincomingtypedlinks) - Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [ListIndex](#listindex) - Lists objects attached to the specified index.
* [ListManagedSchemaArns](#listmanagedschemaarns) - Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.
* [ListObjectAttributes](#listobjectattributes) - Lists all attributes that are associated with an object. 
* [ListObjectChildren](#listobjectchildren) - Returns a paginated list of child objects that are associated with a given object.
* [ListObjectParentPaths](#listobjectparentpaths) - <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>
* [ListObjectParents](#listobjectparents) - Lists parent objects that are associated with a given object in pagination fashion.
* [ListObjectPolicies](#listobjectpolicies) - Returns policies attached to an object in pagination fashion.
* [ListOutgoingTypedLinks](#listoutgoingtypedlinks) - Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [ListPolicyAttachments](#listpolicyattachments) - Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.
* [ListPublishedSchemaArns](#listpublishedschemaarns) - Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.
* [ListTagsForResource](#listtagsforresource) - Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.
* [ListTypedLinkFacetAttributes](#listtypedlinkfacetattributes) - Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [ListTypedLinkFacetNames](#listtypedlinkfacetnames) - Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [LookupPolicy](#lookuppolicy) - Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.
* [PublishSchema](#publishschema) - Publishes a development schema with a major version and a recommended minor version.
* [PutSchemaFromJSON](#putschemafromjson) - Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.
* [RemoveFacetFromObject](#removefacetfromobject) - Removes the specified facet from the specified object.
* [TagResource](#tagresource) - An API operation for adding tags to a resource.
* [UntagResource](#untagresource) - An API operation for removing tags from a resource.
* [UpdateFacet](#updatefacet) - <p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>
* [UpdateLinkAttributes](#updatelinkattributes) - Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.
* [UpdateObjectAttributes](#updateobjectattributes) - Updates a given object's attributes.
* [UpdateSchema](#updateschema) - Updates the schema name with a new name. Only development schema names can be updated.
* [UpdateTypedLinkFacet](#updatetypedlinkfacet) - Updates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
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

Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

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
                    ListObjectParents: &shared.BatchListObjectParents{
                        MaxResults: sdk.Int64(166847),
                        NextToken: sdk.String("sunt"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("quo"),
                        },
                    },
                    ListObjectPolicies: &shared.BatchListObjectPolicies{
                        MaxResults: sdk.Int64(848009),
                        NextToken: sdk.String("pariatur"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("maxime"),
                        },
                    },
                    ListOutgoingTypedLinks: &shared.BatchListOutgoingTypedLinks{
                        FilterAttributeRanges: []shared.TypedLinkAttributeRange{
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("excepturi"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumFirst,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("ea"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-06T18:05:48.866Z"),
                                        NumberValue: sdk.String("maiores"),
                                        StringValue: sdk.String("quidem"),
                                    },
                                    StartMode: shared.RangeModeEnumLast,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("voluptate"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-04-12T10:47:34.158Z"),
                                        NumberValue: sdk.String("eaque"),
                                        StringValue: sdk.String("pariatur"),
                                    },
                                },
                            },
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("nemo"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumExclusive,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("perferendis"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-04-23T08:05:27.776Z"),
                                        NumberValue: sdk.String("aut"),
                                        StringValue: sdk.String("cumque"),
                                    },
                                    StartMode: shared.RangeModeEnumLast,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("hic"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-07-02T12:00:47.197Z"),
                                        NumberValue: sdk.String("dolores"),
                                        StringValue: sdk.String("quis"),
                                    },
                                },
                            },
                        },
                        FilterTypedLink: &shared.TypedLinkSchemaAndFacetName{
                            SchemaArn: "totam",
                            TypedLinkName: "dignissimos",
                        },
                        MaxResults: sdk.Int64(54338),
                        NextToken: sdk.String("quis"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("nesciunt"),
                        },
                    },
                    ListPolicyAttachments: &shared.BatchListPolicyAttachments{
                        MaxResults: sdk.Int64(179490),
                        NextToken: sdk.String("perferendis"),
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("dolores"),
                        },
                    },
                    LookupPolicy: &shared.BatchLookupPolicy{
                        MaxResults: sdk.Int64(793698),
                        NextToken: sdk.String("quam"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("dolor"),
                        },
                    },
                },
                shared.BatchReadOperation{
                    GetLinkAttributes: &shared.BatchGetLinkAttributes{
                        AttributeNames: []string{
                            "nostrum",
                            "hic",
                            "recusandae",
                            "omnis",
                        },
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "perspiciatis",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("voluptatem"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-07-04T15:50:14.407Z"),
                                        NumberValue: sdk.String("blanditiis"),
                                        StringValue: sdk.String("error"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "eaque",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("occaecati"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-07-11T08:07:03.616Z"),
                                        NumberValue: sdk.String("asperiores"),
                                        StringValue: sdk.String("earum"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "modi",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("iste"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-12-05T23:42:47.745Z"),
                                        NumberValue: sdk.String("pariatur"),
                                        StringValue: sdk.String("provident"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("nobis"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("libero"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "delectus",
                                TypedLinkName: "quaerat",
                            },
                        },
                    },
                    GetObjectAttributes: &shared.BatchGetObjectAttributes{
                        AttributeNames: []string{
                            "aliquid",
                            "dolorem",
                            "dolorem",
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("dolor"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("qui"),
                            SchemaArn: sdk.String("ipsum"),
                        },
                    },
                    GetObjectInformation: &shared.BatchGetObjectInformation{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("hic"),
                        },
                    },
                    ListAttachedIndices: &shared.BatchListAttachedIndices{
                        MaxResults: sdk.Int64(569574),
                        NextToken: sdk.String("cum"),
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("voluptate"),
                        },
                    },
                    ListIncomingTypedLinks: &shared.BatchListIncomingTypedLinks{
                        FilterAttributeRanges: []shared.TypedLinkAttributeRange{
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("reiciendis"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumLast,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("dolorum"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-11-30T20:48:38.083Z"),
                                        NumberValue: sdk.String("ipsa"),
                                        StringValue: sdk.String("ipsa"),
                                    },
                                    StartMode: shared.RangeModeEnumLastBeforeMissingValues,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("odio"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-02-13T10:24:00.119Z"),
                                        NumberValue: sdk.String("quidem"),
                                        StringValue: sdk.String("voluptatibus"),
                                    },
                                },
                            },
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("voluptas"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumInclusive,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("eos"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-13T23:37:42.244Z"),
                                        NumberValue: sdk.String("fugiat"),
                                        StringValue: sdk.String("ab"),
                                    },
                                    StartMode: shared.RangeModeEnumInclusive,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("dolorum"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-07-19T09:36:55.923Z"),
                                        NumberValue: sdk.String("dolorum"),
                                        StringValue: sdk.String("deleniti"),
                                    },
                                },
                            },
                        },
                        FilterTypedLink: &shared.TypedLinkSchemaAndFacetName{
                            SchemaArn: "omnis",
                            TypedLinkName: "necessitatibus",
                        },
                        MaxResults: sdk.Int64(714697),
                        NextToken: sdk.String("asperiores"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("nihil"),
                        },
                    },
                    ListIndex: &shared.BatchListIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("ipsum"),
                        },
                        MaxResults: sdk.Int64(456015),
                        NextToken: sdk.String("id"),
                        RangesOnIndexedValues: []shared.ObjectAttributeRange{
                            shared.ObjectAttributeRange{
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "eius",
                                    Name: "Lisa Fay",
                                    SchemaArn: "ad",
                                },
                                Range: &shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumExclusive,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("suscipit"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-10-28T12:41:02.358Z"),
                                        NumberValue: sdk.String("minima"),
                                        StringValue: sdk.String("repellendus"),
                                    },
                                    StartMode: shared.RangeModeEnumLastBeforeMissingValues,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("similique"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-02-16T11:34:48.736Z"),
                                        NumberValue: sdk.String("quaerat"),
                                        StringValue: sdk.String("tempora"),
                                    },
                                },
                            },
                            shared.ObjectAttributeRange{
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "vel",
                                    Name: "Erick Denesik",
                                    SchemaArn: "esse",
                                },
                                Range: &shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumInclusive,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("iusto"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-03-19T02:38:33.395Z"),
                                        NumberValue: sdk.String("tenetur"),
                                        StringValue: sdk.String("amet"),
                                    },
                                    StartMode: shared.RangeModeEnumInclusive,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("accusamus"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-09-08T12:03:15.868Z"),
                                        NumberValue: sdk.String("dolorem"),
                                        StringValue: sdk.String("sapiente"),
                                    },
                                },
                            },
                            shared.ObjectAttributeRange{
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "totam",
                                    Name: "Karen Rath",
                                    SchemaArn: "vel",
                                },
                                Range: &shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumInclusive,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("voluptas"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-01-27T14:09:30.399Z"),
                                        NumberValue: sdk.String("ipsum"),
                                        StringValue: sdk.String("incidunt"),
                                    },
                                    StartMode: shared.RangeModeEnumFirst,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("cupiditate"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2020-05-30T01:52:29.137Z"),
                                        NumberValue: sdk.String("soluta"),
                                        StringValue: sdk.String("dicta"),
                                    },
                                },
                            },
                            shared.ObjectAttributeRange{
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "laborum",
                                    Name: "Randall Cole",
                                    SchemaArn: "facilis",
                                },
                                Range: &shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumLast,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("quam"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-04-27T11:41:31.258Z"),
                                        NumberValue: sdk.String("qui"),
                                        StringValue: sdk.String("neque"),
                                    },
                                    StartMode: shared.RangeModeEnumFirst,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("magni"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-11-16T10:27:43.717Z"),
                                        NumberValue: sdk.String("ullam"),
                                        StringValue: sdk.String("nam"),
                                    },
                                },
                            },
                        },
                    },
                    ListObjectAttributes: &shared.BatchListObjectAttributes{
                        FacetFilter: &shared.SchemaFacet{
                            FacetName: sdk.String("hic"),
                            SchemaArn: sdk.String("voluptatem"),
                        },
                        MaxResults: sdk.Int64(765326),
                        NextToken: sdk.String("soluta"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("nobis"),
                        },
                    },
                    ListObjectChildren: &shared.BatchListObjectChildren{
                        MaxResults: sdk.Int64(92596),
                        NextToken: sdk.String("saepe"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("ipsum"),
                        },
                    },
                    ListObjectParentPaths: &shared.BatchListObjectParentPaths{
                        MaxResults: sdk.Int64(83422),
                        NextToken: sdk.String("nobis"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("quos"),
                        },
                    },
                    ListObjectParents: &shared.BatchListObjectParents{
                        MaxResults: sdk.Int64(731694),
                        NextToken: sdk.String("cupiditate"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("aperiam"),
                        },
                    },
                    ListObjectPolicies: &shared.BatchListObjectPolicies{
                        MaxResults: sdk.Int64(961937),
                        NextToken: sdk.String("dolorem"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("dolore"),
                        },
                    },
                    ListOutgoingTypedLinks: &shared.BatchListOutgoingTypedLinks{
                        FilterAttributeRanges: []shared.TypedLinkAttributeRange{
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("adipisci"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumInclusive,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("architecto"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-26T00:04:34.165Z"),
                                        NumberValue: sdk.String("quas"),
                                        StringValue: sdk.String("itaque"),
                                    },
                                    StartMode: shared.RangeModeEnumFirst,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("est"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2020-08-24T06:10:53.249Z"),
                                        NumberValue: sdk.String("doloribus"),
                                        StringValue: sdk.String("ut"),
                                    },
                                },
                            },
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("facilis"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumLastBeforeMissingValues,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("qui"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-06-27T23:25:59.184Z"),
                                        NumberValue: sdk.String("odio"),
                                        StringValue: sdk.String("occaecati"),
                                    },
                                    StartMode: shared.RangeModeEnumExclusive,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("quisquam"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-03-07T21:49:29.078Z"),
                                        NumberValue: sdk.String("quis"),
                                        StringValue: sdk.String("ipsum"),
                                    },
                                },
                            },
                        },
                        FilterTypedLink: &shared.TypedLinkSchemaAndFacetName{
                            SchemaArn: "delectus",
                            TypedLinkName: "voluptate",
                        },
                        MaxResults: sdk.Int64(231701),
                        NextToken: sdk.String("vero"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("tenetur"),
                        },
                    },
                    ListPolicyAttachments: &shared.BatchListPolicyAttachments{
                        MaxResults: sdk.Int64(492268),
                        NextToken: sdk.String("hic"),
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("distinctio"),
                        },
                    },
                    LookupPolicy: &shared.BatchLookupPolicy{
                        MaxResults: sdk.Int64(799203),
                        NextToken: sdk.String("odio"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("similique"),
                        },
                    },
                },
                shared.BatchReadOperation{
                    GetLinkAttributes: &shared.BatchGetLinkAttributes{
                        AttributeNames: []string{
                            "vero",
                            "ducimus",
                            "dolore",
                        },
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "illum",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("sequi"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-06-15T11:19:41.363Z"),
                                        NumberValue: sdk.String("aut"),
                                        StringValue: sdk.String("voluptatibus"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "exercitationem",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("nulla"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-03-22T03:27:44.973Z"),
                                        NumberValue: sdk.String("maiores"),
                                        StringValue: sdk.String("doloribus"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "iusto",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("eligendi"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-30T12:32:17.948Z"),
                                        NumberValue: sdk.String("officia"),
                                        StringValue: sdk.String("tempora"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "ipsam",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("ea"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-07-28T16:45:32.822Z"),
                                        NumberValue: sdk.String("possimus"),
                                        StringValue: sdk.String("magnam"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("ratione"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("ex"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "laudantium",
                                TypedLinkName: "dicta",
                            },
                        },
                    },
                    GetObjectAttributes: &shared.BatchGetObjectAttributes{
                        AttributeNames: []string{
                            "maiores",
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("quasi"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("ex"),
                            SchemaArn: sdk.String("nulla"),
                        },
                    },
                    GetObjectInformation: &shared.BatchGetObjectInformation{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("excepturi"),
                        },
                    },
                    ListAttachedIndices: &shared.BatchListAttachedIndices{
                        MaxResults: sdk.Int64(972920),
                        NextToken: sdk.String("nostrum"),
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("sapiente"),
                        },
                    },
                    ListIncomingTypedLinks: &shared.BatchListIncomingTypedLinks{
                        FilterAttributeRanges: []shared.TypedLinkAttributeRange{
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("saepe"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumLastBeforeMissingValues,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("impedit"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-09-01T09:38:53.685Z"),
                                        NumberValue: sdk.String("aliquid"),
                                        StringValue: sdk.String("inventore"),
                                    },
                                    StartMode: shared.RangeModeEnumLast,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("ea"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-04-21T16:53:11.568Z"),
                                        NumberValue: sdk.String("recusandae"),
                                        StringValue: sdk.String("aspernatur"),
                                    },
                                },
                            },
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("minima"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumFirst,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("a"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-21T19:37:25.645Z"),
                                        NumberValue: sdk.String("aut"),
                                        StringValue: sdk.String("deleniti"),
                                    },
                                    StartMode: shared.RangeModeEnumInclusive,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("aliquam"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-02-12T18:08:46.973Z"),
                                        NumberValue: sdk.String("inventore"),
                                        StringValue: sdk.String("non"),
                                    },
                                },
                            },
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("et"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumInclusive,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("laborum"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-04-07T07:44:57.988Z"),
                                        NumberValue: sdk.String("eum"),
                                        StringValue: sdk.String("autem"),
                                    },
                                    StartMode: shared.RangeModeEnumInclusive,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("quas"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2020-06-02T16:42:54.630Z"),
                                        NumberValue: sdk.String("voluptas"),
                                        StringValue: sdk.String("libero"),
                                    },
                                },
                            },
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("quasi"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumLast,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("numquam"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-05-29T22:38:52.265Z"),
                                        NumberValue: sdk.String("ipsa"),
                                        StringValue: sdk.String("molestiae"),
                                    },
                                    StartMode: shared.RangeModeEnumLast,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("odio"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-07-17T15:24:44.492Z"),
                                        NumberValue: sdk.String("esse"),
                                        StringValue: sdk.String("rem"),
                                    },
                                },
                            },
                        },
                        FilterTypedLink: &shared.TypedLinkSchemaAndFacetName{
                            SchemaArn: "fuga",
                            TypedLinkName: "reprehenderit",
                        },
                        MaxResults: sdk.Int64(695626),
                        NextToken: sdk.String("fugiat"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("ut"),
                        },
                    },
                    ListIndex: &shared.BatchListIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("eum"),
                        },
                        MaxResults: sdk.Int64(379927),
                        NextToken: sdk.String("assumenda"),
                        RangesOnIndexedValues: []shared.ObjectAttributeRange{
                            shared.ObjectAttributeRange{
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "praesentium",
                                    Name: "Harold Bednar",
                                    SchemaArn: "neque",
                                },
                                Range: &shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumInclusive,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("illum"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2020-12-15T21:52:54.784Z"),
                                        NumberValue: sdk.String("eius"),
                                        StringValue: sdk.String("eos"),
                                    },
                                    StartMode: shared.RangeModeEnumLast,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("ab"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-24T22:15:46.522Z"),
                                        NumberValue: sdk.String("tempora"),
                                        StringValue: sdk.String("debitis"),
                                    },
                                },
                            },
                        },
                    },
                    ListObjectAttributes: &shared.BatchListObjectAttributes{
                        FacetFilter: &shared.SchemaFacet{
                            FacetName: sdk.String("ipsam"),
                            SchemaArn: sdk.String("aspernatur"),
                        },
                        MaxResults: sdk.Int64(197054),
                        NextToken: sdk.String("quo"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("esse"),
                        },
                    },
                    ListObjectChildren: &shared.BatchListObjectChildren{
                        MaxResults: sdk.Int64(925164),
                        NextToken: sdk.String("aperiam"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("distinctio"),
                        },
                    },
                    ListObjectParentPaths: &shared.BatchListObjectParentPaths{
                        MaxResults: sdk.Int64(799796),
                        NextToken: sdk.String("dignissimos"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("inventore"),
                        },
                    },
                    ListObjectParents: &shared.BatchListObjectParents{
                        MaxResults: sdk.Int64(469498),
                        NextToken: sdk.String("totam"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("accusamus"),
                        },
                    },
                    ListObjectPolicies: &shared.BatchListObjectPolicies{
                        MaxResults: sdk.Int64(306810),
                        NextToken: sdk.String("odio"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("occaecati"),
                        },
                    },
                    ListOutgoingTypedLinks: &shared.BatchListOutgoingTypedLinks{
                        FilterAttributeRanges: []shared.TypedLinkAttributeRange{
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("sapiente"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumFirst,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("deserunt"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-19T02:13:29.248Z"),
                                        NumberValue: sdk.String("porro"),
                                        StringValue: sdk.String("eum"),
                                    },
                                    StartMode: shared.RangeModeEnumLastBeforeMissingValues,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("praesentium"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-06-19T07:05:05.913Z"),
                                        NumberValue: sdk.String("fugit"),
                                        StringValue: sdk.String("fuga"),
                                    },
                                },
                            },
                            shared.TypedLinkAttributeRange{
                                AttributeName: sdk.String("mollitia"),
                                Range: shared.TypedAttributeValueRange{
                                    EndMode: shared.RangeModeEnumLast,
                                    EndValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("atque"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-09-04T03:00:04.529Z"),
                                        NumberValue: sdk.String("nisi"),
                                        StringValue: sdk.String("fugit"),
                                    },
                                    StartMode: shared.RangeModeEnumExclusive,
                                    StartValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("consequuntur"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-11-14T18:20:51.649Z"),
                                        NumberValue: sdk.String("saepe"),
                                        StringValue: sdk.String("occaecati"),
                                    },
                                },
                            },
                        },
                        FilterTypedLink: &shared.TypedLinkSchemaAndFacetName{
                            SchemaArn: "atque",
                            TypedLinkName: "et",
                        },
                        MaxResults: sdk.Int64(456911),
                        NextToken: sdk.String("eveniet"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("accusamus"),
                        },
                    },
                    ListPolicyAttachments: &shared.BatchListPolicyAttachments{
                        MaxResults: sdk.Int64(82971),
                        NextToken: sdk.String("esse"),
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("quod"),
                        },
                    },
                    LookupPolicy: &shared.BatchLookupPolicy{
                        MaxResults: sdk.Int64(724168),
                        NextToken: sdk.String("vero"),
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("aliquid"),
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("quasi"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("harum"),
        XAmzSecurityToken: sdk.String("molestiae"),
        XAmzSignature: sdk.String("rerum"),
        XAmzSignedHeaders: sdk.String("occaecati"),
        XAmzConsistencyLevel: operations.BatchReadXAmzConsistencyLevelEnumSerializable.ToPointer(),
        XAmzDataPartition: "distinctio",
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
                                    FacetName: "culpa",
                                    Name: "Chad Runolfsson DDS",
                                    SchemaArn: "quaerat",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("sapiente"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-07-17T18:42:13.476Z"),
                                    NumberValue: sdk.String("blanditiis"),
                                    StringValue: sdk.String("provident"),
                                },
                            },
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("a"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("nulla"),
                            SchemaArn: sdk.String("quas"),
                        },
                    },
                    AttachObject: &shared.BatchAttachObject{
                        ChildReference: shared.ObjectReference{
                            Selector: sdk.String("esse"),
                        },
                        LinkName: "quasi",
                        ParentReference: shared.ObjectReference{
                            Selector: sdk.String("a"),
                        },
                    },
                    AttachPolicy: &shared.BatchAttachPolicy{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("error"),
                        },
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("sint"),
                        },
                    },
                    AttachToIndex: &shared.BatchAttachToIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("pariatur"),
                        },
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("possimus"),
                        },
                    },
                    AttachTypedLink: &shared.BatchAttachTypedLink{
                        Attributes: []shared.AttributeNameAndValue{
                            shared.AttributeNameAndValue{
                                AttributeName: "eveniet",
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("asperiores"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-09-29T22:10:17.894Z"),
                                    NumberValue: sdk.String("consequuntur"),
                                    StringValue: sdk.String("quasi"),
                                },
                            },
                        },
                        SourceObjectReference: shared.ObjectReference{
                            Selector: sdk.String("similique"),
                        },
                        TargetObjectReference: shared.ObjectReference{
                            Selector: sdk.String("culpa"),
                        },
                        TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                            SchemaArn: "aliquid",
                            TypedLinkName: "tenetur",
                        },
                    },
                    CreateIndex: &shared.BatchCreateIndex{
                        BatchReferenceName: sdk.String("quae"),
                        IsUnique: false,
                        LinkName: sdk.String("earum"),
                        OrderedIndexedAttributeList: []shared.AttributeKey{
                            shared.AttributeKey{
                                FacetName: "in",
                                Name: "Jeannette Stanton II",
                                SchemaArn: "sapiente",
                            },
                            shared.AttributeKey{
                                FacetName: "dicta",
                                Name: "Delores Hermiston IV",
                                SchemaArn: "qui",
                            },
                        },
                        ParentReference: &shared.ObjectReference{
                            Selector: sdk.String("quibusdam"),
                        },
                    },
                    CreateObject: &shared.BatchCreateObject{
                        BatchReferenceName: sdk.String("ex"),
                        LinkName: sdk.String("deleniti"),
                        ObjectAttributeList: []shared.AttributeKeyAndValue{
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "dolorum",
                                    Name: "Dr. Belinda West III",
                                    SchemaArn: "ipsa",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("minima"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-10-08T01:09:40.281Z"),
                                    NumberValue: sdk.String("adipisci"),
                                    StringValue: sdk.String("iste"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "temporibus",
                                    Name: "Patsy Armstrong",
                                    SchemaArn: "mollitia",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("ab"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-07-01T01:59:37.066Z"),
                                    NumberValue: sdk.String("voluptatem"),
                                    StringValue: sdk.String("dolor"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "occaecati",
                                    Name: "Leticia Christiansen IV",
                                    SchemaArn: "dicta",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("maiores"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-07-06T09:42:25.585Z"),
                                    NumberValue: sdk.String("voluptatibus"),
                                    StringValue: sdk.String("voluptas"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "asperiores",
                                    Name: "Eileen Hagenes",
                                    SchemaArn: "officia",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("maxime"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-05-12T09:23:17.883Z"),
                                    NumberValue: sdk.String("asperiores"),
                                    StringValue: sdk.String("nemo"),
                                },
                            },
                        },
                        ParentReference: &shared.ObjectReference{
                            Selector: sdk.String("quae"),
                        },
                        SchemaFacet: []shared.SchemaFacet{
                            shared.SchemaFacet{
                                FacetName: sdk.String("porro"),
                                SchemaArn: sdk.String("quod"),
                            },
                            shared.SchemaFacet{
                                FacetName: sdk.String("labore"),
                                SchemaArn: sdk.String("ab"),
                            },
                        },
                    },
                    DeleteObject: &shared.BatchDeleteObject{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("adipisci"),
                        },
                    },
                    DetachFromIndex: &shared.BatchDetachFromIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("fuga"),
                        },
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("id"),
                        },
                    },
                    DetachObject: &shared.BatchDetachObject{
                        BatchReferenceName: sdk.String("suscipit"),
                        LinkName: "velit",
                        ParentReference: shared.ObjectReference{
                            Selector: sdk.String("culpa"),
                        },
                    },
                    DetachPolicy: &shared.BatchDetachPolicy{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("est"),
                        },
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("recusandae"),
                        },
                    },
                    DetachTypedLink: &shared.BatchDetachTypedLink{
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "fugiat",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("vel"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-06-12T12:56:04.738Z"),
                                        NumberValue: sdk.String("vel"),
                                        StringValue: sdk.String("labore"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "possimus",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("facilis"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-03-04T03:42:26.898Z"),
                                        NumberValue: sdk.String("in"),
                                        StringValue: sdk.String("corporis"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "reiciendis",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("assumenda"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-01-28T09:17:23.255Z"),
                                        NumberValue: sdk.String("aliquid"),
                                        StringValue: sdk.String("aperiam"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("cum"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("consectetur"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "in",
                                TypedLinkName: "exercitationem",
                            },
                        },
                    },
                    RemoveFacetFromObject: &shared.BatchRemoveFacetFromObject{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("earum"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("facere"),
                            SchemaArn: sdk.String("numquam"),
                        },
                    },
                    UpdateLinkAttributes: &shared.BatchUpdateLinkAttributes{
                        AttributeUpdates: []shared.LinkAttributeUpdate{
                            shared.LinkAttributeUpdate{
                                AttributeAction: &shared.LinkAttributeAction{
                                    AttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    AttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("reiciendis"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-03-11T09:18:18.070Z"),
                                        NumberValue: sdk.String("necessitatibus"),
                                        StringValue: sdk.String("dolore"),
                                    },
                                },
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "sunt",
                                    Name: "Chad Franey IV",
                                    SchemaArn: "a",
                                },
                            },
                            shared.LinkAttributeUpdate{
                                AttributeAction: &shared.LinkAttributeAction{
                                    AttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                                    AttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("consectetur"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-04-24T05:37:47.670Z"),
                                        NumberValue: sdk.String("laboriosam"),
                                        StringValue: sdk.String("ipsa"),
                                    },
                                },
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "voluptates",
                                    Name: "Terry Tillman",
                                    SchemaArn: "aspernatur",
                                },
                            },
                            shared.LinkAttributeUpdate{
                                AttributeAction: &shared.LinkAttributeAction{
                                    AttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    AttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("voluptas"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-09-04T14:12:47.618Z"),
                                        NumberValue: sdk.String("nobis"),
                                        StringValue: sdk.String("dolorum"),
                                    },
                                },
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "adipisci",
                                    Name: "Ernest Labadie",
                                    SchemaArn: "aliquam",
                                },
                            },
                            shared.LinkAttributeUpdate{
                                AttributeAction: &shared.LinkAttributeAction{
                                    AttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                                    AttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("temporibus"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-10-06T05:22:53.091Z"),
                                        NumberValue: sdk.String("cum"),
                                        StringValue: sdk.String("blanditiis"),
                                    },
                                },
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "quas",
                                    Name: "Danny Nader",
                                    SchemaArn: "totam",
                                },
                            },
                        },
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "exercitationem",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("nobis"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-04-20T15:43:20.562Z"),
                                        NumberValue: sdk.String("sed"),
                                        StringValue: sdk.String("reiciendis"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "explicabo",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("asperiores"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-02-05T04:05:02.351Z"),
                                        NumberValue: sdk.String("expedita"),
                                        StringValue: sdk.String("ab"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "iste",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("dolore"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-09-11T18:44:43.336Z"),
                                        NumberValue: sdk.String("in"),
                                        StringValue: sdk.String("commodi"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "quidem",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("explicabo"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-05-25T11:55:40.494Z"),
                                        NumberValue: sdk.String("architecto"),
                                        StringValue: sdk.String("suscipit"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("sapiente"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("debitis"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "illo",
                                TypedLinkName: "reiciendis",
                            },
                        },
                    },
                    UpdateObjectAttributes: &shared.BatchUpdateObjectAttributes{
                        AttributeUpdates: []shared.ObjectAttributeUpdate{
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("maiores"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-11-07T19:19:54.306Z"),
                                        NumberValue: sdk.String("provident"),
                                        StringValue: sdk.String("eius"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "necessitatibus",
                                    Name: "Rosemary McClure",
                                    SchemaArn: "tempora",
                                },
                            },
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("tempora"),
                        },
                    },
                },
                shared.BatchWriteOperation{
                    AddFacetToObject: &shared.BatchAddFacetToObject{
                        ObjectAttributeList: []shared.AttributeKeyAndValue{
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "reiciendis",
                                    Name: "Karen Franey",
                                    SchemaArn: "facilis",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("quaerat"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-08-17T20:12:51.918Z"),
                                    NumberValue: sdk.String("debitis"),
                                    StringValue: sdk.String("rem"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "sit",
                                    Name: "Julius Hartmann",
                                    SchemaArn: "reiciendis",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("nulla"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-12-14T05:28:22.043Z"),
                                    NumberValue: sdk.String("saepe"),
                                    StringValue: sdk.String("numquam"),
                                },
                            },
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("veniam"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("in"),
                            SchemaArn: sdk.String("officiis"),
                        },
                    },
                    AttachObject: &shared.BatchAttachObject{
                        ChildReference: shared.ObjectReference{
                            Selector: sdk.String("beatae"),
                        },
                        LinkName: "laudantium",
                        ParentReference: shared.ObjectReference{
                            Selector: sdk.String("exercitationem"),
                        },
                    },
                    AttachPolicy: &shared.BatchAttachPolicy{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("praesentium"),
                        },
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("cum"),
                        },
                    },
                    AttachToIndex: &shared.BatchAttachToIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("laboriosam"),
                        },
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("dolorum"),
                        },
                    },
                    AttachTypedLink: &shared.BatchAttachTypedLink{
                        Attributes: []shared.AttributeNameAndValue{
                            shared.AttributeNameAndValue{
                                AttributeName: "error",
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("hic"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2021-03-20T05:03:12.319Z"),
                                    NumberValue: sdk.String("neque"),
                                    StringValue: sdk.String("dolorum"),
                                },
                            },
                            shared.AttributeNameAndValue{
                                AttributeName: "nostrum",
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("officia"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2021-11-26T16:42:33.328Z"),
                                    NumberValue: sdk.String("accusamus"),
                                    StringValue: sdk.String("tempora"),
                                },
                            },
                            shared.AttributeNameAndValue{
                                AttributeName: "atque",
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("fugit"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-02-22T10:47:09.142Z"),
                                    NumberValue: sdk.String("voluptatem"),
                                    StringValue: sdk.String("culpa"),
                                },
                            },
                        },
                        SourceObjectReference: shared.ObjectReference{
                            Selector: sdk.String("expedita"),
                        },
                        TargetObjectReference: shared.ObjectReference{
                            Selector: sdk.String("magnam"),
                        },
                        TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                            SchemaArn: "consequatur",
                            TypedLinkName: "esse",
                        },
                    },
                    CreateIndex: &shared.BatchCreateIndex{
                        BatchReferenceName: sdk.String("ipsam"),
                        IsUnique: false,
                        LinkName: sdk.String("sit"),
                        OrderedIndexedAttributeList: []shared.AttributeKey{
                            shared.AttributeKey{
                                FacetName: "quas",
                                Name: "Zachary Borer",
                                SchemaArn: "sed",
                            },
                            shared.AttributeKey{
                                FacetName: "sit",
                                Name: "Bernice Ullrich II",
                                SchemaArn: "reiciendis",
                            },
                            shared.AttributeKey{
                                FacetName: "dolorem",
                                Name: "Gerald Bradtke",
                                SchemaArn: "quidem",
                            },
                        },
                        ParentReference: &shared.ObjectReference{
                            Selector: sdk.String("atque"),
                        },
                    },
                    CreateObject: &shared.BatchCreateObject{
                        BatchReferenceName: sdk.String("laborum"),
                        LinkName: sdk.String("nam"),
                        ObjectAttributeList: []shared.AttributeKeyAndValue{
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "laboriosam",
                                    Name: "Grace O'Connell",
                                    SchemaArn: "reiciendis",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("provident"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2020-02-11T18:23:46.078Z"),
                                    NumberValue: sdk.String("voluptates"),
                                    StringValue: sdk.String("perferendis"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "est",
                                    Name: "Ron Schulist",
                                    SchemaArn: "mollitia",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("veniam"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-03-18T08:14:24.399Z"),
                                    NumberValue: sdk.String("repudiandae"),
                                    StringValue: sdk.String("quasi"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "atque",
                                    Name: "Tabitha Leannon",
                                    SchemaArn: "maxime",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("et"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-10-09T20:49:35.642Z"),
                                    NumberValue: sdk.String("assumenda"),
                                    StringValue: sdk.String("ea"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "atque",
                                    Name: "Frankie Torphy",
                                    SchemaArn: "minima",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("aspernatur"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-01-08T02:07:04.894Z"),
                                    NumberValue: sdk.String("corrupti"),
                                    StringValue: sdk.String("at"),
                                },
                            },
                        },
                        ParentReference: &shared.ObjectReference{
                            Selector: sdk.String("error"),
                        },
                        SchemaFacet: []shared.SchemaFacet{
                            shared.SchemaFacet{
                                FacetName: sdk.String("suscipit"),
                                SchemaArn: sdk.String("repudiandae"),
                            },
                            shared.SchemaFacet{
                                FacetName: sdk.String("atque"),
                                SchemaArn: sdk.String("atque"),
                            },
                            shared.SchemaFacet{
                                FacetName: sdk.String("sunt"),
                                SchemaArn: sdk.String("recusandae"),
                            },
                        },
                    },
                    DeleteObject: &shared.BatchDeleteObject{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("dolorum"),
                        },
                    },
                    DetachFromIndex: &shared.BatchDetachFromIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("repellendus"),
                        },
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("labore"),
                        },
                    },
                    DetachObject: &shared.BatchDetachObject{
                        BatchReferenceName: sdk.String("reiciendis"),
                        LinkName: "doloremque",
                        ParentReference: shared.ObjectReference{
                            Selector: sdk.String("repudiandae"),
                        },
                    },
                    DetachPolicy: &shared.BatchDetachPolicy{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("dicta"),
                        },
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("accusantium"),
                        },
                    },
                    DetachTypedLink: &shared.BatchDetachTypedLink{
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "dolores",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("enim"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-10-03T00:21:18.046Z"),
                                        NumberValue: sdk.String("a"),
                                        StringValue: sdk.String("molestias"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("magnam"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("saepe"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "consequuntur",
                                TypedLinkName: "occaecati",
                            },
                        },
                    },
                    RemoveFacetFromObject: &shared.BatchRemoveFacetFromObject{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("officiis"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("perspiciatis"),
                            SchemaArn: sdk.String("in"),
                        },
                    },
                    UpdateLinkAttributes: &shared.BatchUpdateLinkAttributes{
                        AttributeUpdates: []shared.LinkAttributeUpdate{
                            shared.LinkAttributeUpdate{
                                AttributeAction: &shared.LinkAttributeAction{
                                    AttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                                    AttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("occaecati"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-11-08T18:10:37.954Z"),
                                        NumberValue: sdk.String("id"),
                                        StringValue: sdk.String("quis"),
                                    },
                                },
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "reprehenderit",
                                    Name: "Jerry Hessel",
                                    SchemaArn: "non",
                                },
                            },
                        },
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "doloremque",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("iure"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-06-26T01:43:04.262Z"),
                                        NumberValue: sdk.String("quae"),
                                        StringValue: sdk.String("molestiae"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "eveniet",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("qui"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-02-17T14:59:36.472Z"),
                                        NumberValue: sdk.String("necessitatibus"),
                                        StringValue: sdk.String("ratione"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "laborum",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("distinctio"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-12-15T04:55:40.282Z"),
                                        NumberValue: sdk.String("aliquam"),
                                        StringValue: sdk.String("ad"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "repellat",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("alias"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-05-27T23:37:34.170Z"),
                                        NumberValue: sdk.String("nihil"),
                                        StringValue: sdk.String("mollitia"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("voluptas"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("alias"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "maiores",
                                TypedLinkName: "reiciendis",
                            },
                        },
                    },
                    UpdateObjectAttributes: &shared.BatchUpdateObjectAttributes{
                        AttributeUpdates: []shared.ObjectAttributeUpdate{
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("minima"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-04-27T16:08:43.983Z"),
                                        NumberValue: sdk.String("nesciunt"),
                                        StringValue: sdk.String("quae"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "recusandae",
                                    Name: "Calvin Kreiger",
                                    SchemaArn: "culpa",
                                },
                            },
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("adipisci"),
                        },
                    },
                },
                shared.BatchWriteOperation{
                    AddFacetToObject: &shared.BatchAddFacetToObject{
                        ObjectAttributeList: []shared.AttributeKeyAndValue{
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "laudantium",
                                    Name: "Vivian Ward",
                                    SchemaArn: "quis",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("eum"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2021-03-22T21:44:03.640Z"),
                                    NumberValue: sdk.String("aspernatur"),
                                    StringValue: sdk.String("ullam"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "quasi",
                                    Name: "Gordon O'Hara",
                                    SchemaArn: "animi",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("ex"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-12-18T06:55:47.674Z"),
                                    NumberValue: sdk.String("repellat"),
                                    StringValue: sdk.String("doloribus"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "ullam",
                                    Name: "Antoinette Wehner",
                                    SchemaArn: "placeat",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("modi"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2021-04-23T08:23:19.189Z"),
                                    NumberValue: sdk.String("officiis"),
                                    StringValue: sdk.String("sapiente"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "cumque",
                                    Name: "Luz Goldner Sr.",
                                    SchemaArn: "cumque",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("quae"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-10-04T16:56:27.065Z"),
                                    NumberValue: sdk.String("aspernatur"),
                                    StringValue: sdk.String("eum"),
                                },
                            },
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("eius"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("rem"),
                            SchemaArn: sdk.String("at"),
                        },
                    },
                    AttachObject: &shared.BatchAttachObject{
                        ChildReference: shared.ObjectReference{
                            Selector: sdk.String("impedit"),
                        },
                        LinkName: "eos",
                        ParentReference: shared.ObjectReference{
                            Selector: sdk.String("sapiente"),
                        },
                    },
                    AttachPolicy: &shared.BatchAttachPolicy{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("eum"),
                        },
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("dicta"),
                        },
                    },
                    AttachToIndex: &shared.BatchAttachToIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("minima"),
                        },
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("beatae"),
                        },
                    },
                    AttachTypedLink: &shared.BatchAttachTypedLink{
                        Attributes: []shared.AttributeNameAndValue{
                            shared.AttributeNameAndValue{
                                AttributeName: "provident",
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("earum"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2021-02-13T05:30:19.145Z"),
                                    NumberValue: sdk.String("illum"),
                                    StringValue: sdk.String("eaque"),
                                },
                            },
                            shared.AttributeNameAndValue{
                                AttributeName: "earum",
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("perspiciatis"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2020-04-29T11:28:14.354Z"),
                                    NumberValue: sdk.String("aliquid"),
                                    StringValue: sdk.String("porro"),
                                },
                            },
                            shared.AttributeNameAndValue{
                                AttributeName: "suscipit",
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("dolorem"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-03-27T18:38:54.968Z"),
                                    NumberValue: sdk.String("fuga"),
                                    StringValue: sdk.String("ratione"),
                                },
                            },
                        },
                        SourceObjectReference: shared.ObjectReference{
                            Selector: sdk.String("animi"),
                        },
                        TargetObjectReference: shared.ObjectReference{
                            Selector: sdk.String("necessitatibus"),
                        },
                        TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                            SchemaArn: "nulla",
                            TypedLinkName: "consequatur",
                        },
                    },
                    CreateIndex: &shared.BatchCreateIndex{
                        BatchReferenceName: sdk.String("quasi"),
                        IsUnique: false,
                        LinkName: sdk.String("et"),
                        OrderedIndexedAttributeList: []shared.AttributeKey{
                            shared.AttributeKey{
                                FacetName: "natus",
                                Name: "Mr. Sam Flatley",
                                SchemaArn: "nulla",
                            },
                            shared.AttributeKey{
                                FacetName: "necessitatibus",
                                Name: "Anita Kovacek IV",
                                SchemaArn: "esse",
                            },
                        },
                        ParentReference: &shared.ObjectReference{
                            Selector: sdk.String("praesentium"),
                        },
                    },
                    CreateObject: &shared.BatchCreateObject{
                        BatchReferenceName: sdk.String("maiores"),
                        LinkName: sdk.String("reiciendis"),
                        ObjectAttributeList: []shared.AttributeKeyAndValue{
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "architecto",
                                    Name: "Brian Carroll",
                                    SchemaArn: "esse",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("ex"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-08-08T01:38:43.693Z"),
                                    NumberValue: sdk.String("ipsa"),
                                    StringValue: sdk.String("laborum"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "sunt",
                                    Name: "Janis Ratke",
                                    SchemaArn: "suscipit",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("aliquid"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-07-27T09:46:52.119Z"),
                                    NumberValue: sdk.String("voluptas"),
                                    StringValue: sdk.String("iste"),
                                },
                            },
                        },
                        ParentReference: &shared.ObjectReference{
                            Selector: sdk.String("id"),
                        },
                        SchemaFacet: []shared.SchemaFacet{
                            shared.SchemaFacet{
                                FacetName: sdk.String("error"),
                                SchemaArn: sdk.String("possimus"),
                            },
                        },
                    },
                    DeleteObject: &shared.BatchDeleteObject{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("voluptates"),
                        },
                    },
                    DetachFromIndex: &shared.BatchDetachFromIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("mollitia"),
                        },
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("laborum"),
                        },
                    },
                    DetachObject: &shared.BatchDetachObject{
                        BatchReferenceName: sdk.String("libero"),
                        LinkName: "ad",
                        ParentReference: shared.ObjectReference{
                            Selector: sdk.String("deleniti"),
                        },
                    },
                    DetachPolicy: &shared.BatchDetachPolicy{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("enim"),
                        },
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("vitae"),
                        },
                    },
                    DetachTypedLink: &shared.BatchDetachTypedLink{
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "ex",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("quo"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-09-20T09:05:59.303Z"),
                                        NumberValue: sdk.String("ad"),
                                        StringValue: sdk.String("expedita"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "voluptatem",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("molestias"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-03-15T05:57:22.639Z"),
                                        NumberValue: sdk.String("beatae"),
                                        StringValue: sdk.String("voluptatum"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "omnis",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("veritatis"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-09-02T01:19:33.894Z"),
                                        NumberValue: sdk.String("culpa"),
                                        StringValue: sdk.String("voluptatem"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "sapiente",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("officiis"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-04-27T00:38:16.352Z"),
                                        NumberValue: sdk.String("pariatur"),
                                        StringValue: sdk.String("debitis"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("voluptatem"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("alias"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "deleniti",
                                TypedLinkName: "earum",
                            },
                        },
                    },
                    RemoveFacetFromObject: &shared.BatchRemoveFacetFromObject{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("ex"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("sapiente"),
                            SchemaArn: sdk.String("rem"),
                        },
                    },
                    UpdateLinkAttributes: &shared.BatchUpdateLinkAttributes{
                        AttributeUpdates: []shared.LinkAttributeUpdate{
                            shared.LinkAttributeUpdate{
                                AttributeAction: &shared.LinkAttributeAction{
                                    AttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    AttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("asperiores"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-08-24T08:13:37.314Z"),
                                        NumberValue: sdk.String("perferendis"),
                                        StringValue: sdk.String("illum"),
                                    },
                                },
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "totam",
                                    Name: "Taylor Reichel",
                                    SchemaArn: "dolor",
                                },
                            },
                            shared.LinkAttributeUpdate{
                                AttributeAction: &shared.LinkAttributeAction{
                                    AttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    AttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("inventore"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-10-30T17:21:08.305Z"),
                                        NumberValue: sdk.String("tempora"),
                                        StringValue: sdk.String("dolor"),
                                    },
                                },
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "consequatur",
                                    Name: "Karen Gleason IV",
                                    SchemaArn: "quae",
                                },
                            },
                            shared.LinkAttributeUpdate{
                                AttributeAction: &shared.LinkAttributeAction{
                                    AttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    AttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("fugiat"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-11-02T19:49:34.406Z"),
                                        NumberValue: sdk.String("ipsa"),
                                        StringValue: sdk.String("quas"),
                                    },
                                },
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "eveniet",
                                    Name: "Erick Klocko",
                                    SchemaArn: "veniam",
                                },
                            },
                            shared.LinkAttributeUpdate{
                                AttributeAction: &shared.LinkAttributeAction{
                                    AttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    AttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("expedita"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-07-29T03:58:31.955Z"),
                                        NumberValue: sdk.String("voluptatum"),
                                        StringValue: sdk.String("magnam"),
                                    },
                                },
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "exercitationem",
                                    Name: "Johnnie Jones",
                                    SchemaArn: "recusandae",
                                },
                            },
                        },
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "voluptatem",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("exercitationem"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-09-18T07:06:33.190Z"),
                                        NumberValue: sdk.String("nisi"),
                                        StringValue: sdk.String("at"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("vero"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("est"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "harum",
                                TypedLinkName: "sequi",
                            },
                        },
                    },
                    UpdateObjectAttributes: &shared.BatchUpdateObjectAttributes{
                        AttributeUpdates: []shared.ObjectAttributeUpdate{
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("optio"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-04-09T21:10:40.487Z"),
                                        NumberValue: sdk.String("voluptate"),
                                        StringValue: sdk.String("blanditiis"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "officia",
                                    Name: "Marjorie Hickle",
                                    SchemaArn: "aspernatur",
                                },
                            },
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("nesciunt"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-12-21T17:45:55.733Z"),
                                        NumberValue: sdk.String("incidunt"),
                                        StringValue: sdk.String("quasi"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "rem",
                                    Name: "Keith Hyatt",
                                    SchemaArn: "aperiam",
                                },
                            },
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("reiciendis"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-29T04:21:58.833Z"),
                                        NumberValue: sdk.String("omnis"),
                                        StringValue: sdk.String("eos"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "occaecati",
                                    Name: "Ernest Bode",
                                    SchemaArn: "voluptatibus",
                                },
                            },
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("omnis"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-01-06T10:12:04.022Z"),
                                        NumberValue: sdk.String("praesentium"),
                                        StringValue: sdk.String("maxime"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "magnam",
                                    Name: "Byron Johns",
                                    SchemaArn: "totam",
                                },
                            },
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("earum"),
                        },
                    },
                },
                shared.BatchWriteOperation{
                    AddFacetToObject: &shared.BatchAddFacetToObject{
                        ObjectAttributeList: []shared.AttributeKeyAndValue{
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "nam",
                                    Name: "Kenneth Hilpert Sr.",
                                    SchemaArn: "non",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("maiores"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-06-05T01:08:19.216Z"),
                                    NumberValue: sdk.String("nulla"),
                                    StringValue: sdk.String("deserunt"),
                                },
                            },
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "esse",
                                    Name: "Melinda Orn",
                                    SchemaArn: "accusamus",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("impedit"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2020-04-20T09:18:57.946Z"),
                                    NumberValue: sdk.String("asperiores"),
                                    StringValue: sdk.String("ex"),
                                },
                            },
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("voluptas"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("debitis"),
                            SchemaArn: sdk.String("delectus"),
                        },
                    },
                    AttachObject: &shared.BatchAttachObject{
                        ChildReference: shared.ObjectReference{
                            Selector: sdk.String("quae"),
                        },
                        LinkName: "minus",
                        ParentReference: shared.ObjectReference{
                            Selector: sdk.String("fuga"),
                        },
                    },
                    AttachPolicy: &shared.BatchAttachPolicy{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("laborum"),
                        },
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("consectetur"),
                        },
                    },
                    AttachToIndex: &shared.BatchAttachToIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("velit"),
                        },
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("atque"),
                        },
                    },
                    AttachTypedLink: &shared.BatchAttachTypedLink{
                        Attributes: []shared.AttributeNameAndValue{
                            shared.AttributeNameAndValue{
                                AttributeName: "impedit",
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("magni"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2021-02-26T09:18:15.106Z"),
                                    NumberValue: sdk.String("nam"),
                                    StringValue: sdk.String("dolore"),
                                },
                            },
                        },
                        SourceObjectReference: shared.ObjectReference{
                            Selector: sdk.String("iusto"),
                        },
                        TargetObjectReference: shared.ObjectReference{
                            Selector: sdk.String("voluptate"),
                        },
                        TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                            SchemaArn: "sequi",
                            TypedLinkName: "dignissimos",
                        },
                    },
                    CreateIndex: &shared.BatchCreateIndex{
                        BatchReferenceName: sdk.String("neque"),
                        IsUnique: false,
                        LinkName: sdk.String("quo"),
                        OrderedIndexedAttributeList: []shared.AttributeKey{
                            shared.AttributeKey{
                                FacetName: "quibusdam",
                                Name: "Christina Wolf",
                                SchemaArn: "quibusdam",
                            },
                            shared.AttributeKey{
                                FacetName: "inventore",
                                Name: "Wm Brakus",
                                SchemaArn: "porro",
                            },
                            shared.AttributeKey{
                                FacetName: "aliquam",
                                Name: "Martha Bashirian",
                                SchemaArn: "beatae",
                            },
                        },
                        ParentReference: &shared.ObjectReference{
                            Selector: sdk.String("vero"),
                        },
                    },
                    CreateObject: &shared.BatchCreateObject{
                        BatchReferenceName: sdk.String("excepturi"),
                        LinkName: sdk.String("eum"),
                        ObjectAttributeList: []shared.AttributeKeyAndValue{
                            shared.AttributeKeyAndValue{
                                Key: shared.AttributeKey{
                                    FacetName: "ut",
                                    Name: "Merle Carroll",
                                    SchemaArn: "iste",
                                },
                                Value: shared.TypedAttributeValue{
                                    BinaryValue: sdk.String("itaque"),
                                    BooleanValue: sdk.Bool(false),
                                    DatetimeValue: types.MustTimeFromString("2022-08-10T23:51:31.143Z"),
                                    NumberValue: sdk.String("itaque"),
                                    StringValue: sdk.String("velit"),
                                },
                            },
                        },
                        ParentReference: &shared.ObjectReference{
                            Selector: sdk.String("laborum"),
                        },
                        SchemaFacet: []shared.SchemaFacet{
                            shared.SchemaFacet{
                                FacetName: sdk.String("dolor"),
                                SchemaArn: sdk.String("iusto"),
                            },
                            shared.SchemaFacet{
                                FacetName: sdk.String("sit"),
                                SchemaArn: sdk.String("doloremque"),
                            },
                        },
                    },
                    DeleteObject: &shared.BatchDeleteObject{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("consequatur"),
                        },
                    },
                    DetachFromIndex: &shared.BatchDetachFromIndex{
                        IndexReference: shared.ObjectReference{
                            Selector: sdk.String("officia"),
                        },
                        TargetReference: shared.ObjectReference{
                            Selector: sdk.String("recusandae"),
                        },
                    },
                    DetachObject: &shared.BatchDetachObject{
                        BatchReferenceName: sdk.String("ea"),
                        LinkName: "quidem",
                        ParentReference: shared.ObjectReference{
                            Selector: sdk.String("voluptas"),
                        },
                    },
                    DetachPolicy: &shared.BatchDetachPolicy{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("facilis"),
                        },
                        PolicyReference: shared.ObjectReference{
                            Selector: sdk.String("placeat"),
                        },
                    },
                    DetachTypedLink: &shared.BatchDetachTypedLink{
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "expedita",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("deleniti"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-08-20T03:23:43.072Z"),
                                        NumberValue: sdk.String("ullam"),
                                        StringValue: sdk.String("unde"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "necessitatibus",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("animi"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-11-18T12:30:52.334Z"),
                                        NumberValue: sdk.String("corporis"),
                                        StringValue: sdk.String("est"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "error",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("esse"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-11-30T22:48:52.392Z"),
                                        NumberValue: sdk.String("vero"),
                                        StringValue: sdk.String("consectetur"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("vitae"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("inventore"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "dolorem",
                                TypedLinkName: "ad",
                            },
                        },
                    },
                    RemoveFacetFromObject: &shared.BatchRemoveFacetFromObject{
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("qui"),
                        },
                        SchemaFacet: shared.SchemaFacet{
                            FacetName: sdk.String("iste"),
                            SchemaArn: sdk.String("ex"),
                        },
                    },
                    UpdateLinkAttributes: &shared.BatchUpdateLinkAttributes{
                        AttributeUpdates: []shared.LinkAttributeUpdate{
                            shared.LinkAttributeUpdate{
                                AttributeAction: &shared.LinkAttributeAction{
                                    AttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                                    AttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("libero"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-08-24T00:23:56.434Z"),
                                        NumberValue: sdk.String("odio"),
                                        StringValue: sdk.String("fugit"),
                                    },
                                },
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "alias",
                                    Name: "Mrs. Gina Bergnaum",
                                    SchemaArn: "exercitationem",
                                },
                            },
                            shared.LinkAttributeUpdate{
                                AttributeAction: &shared.LinkAttributeAction{
                                    AttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                                    AttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("et"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-05-26T04:28:20.312Z"),
                                        NumberValue: sdk.String("nulla"),
                                        StringValue: sdk.String("distinctio"),
                                    },
                                },
                                AttributeKey: &shared.AttributeKey{
                                    FacetName: "maxime",
                                    Name: "Marilyn Heaney",
                                    SchemaArn: "dicta",
                                },
                            },
                        },
                        TypedLinkSpecifier: shared.TypedLinkSpecifier{
                            IdentityAttributeValues: []shared.AttributeNameAndValue{
                                shared.AttributeNameAndValue{
                                    AttributeName: "libero",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("fugiat"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-11-22T03:20:54.795Z"),
                                        NumberValue: sdk.String("placeat"),
                                        StringValue: sdk.String("sit"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "iusto",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("ipsa"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-10-05T07:59:39.108Z"),
                                        NumberValue: sdk.String("aperiam"),
                                        StringValue: sdk.String("totam"),
                                    },
                                },
                                shared.AttributeNameAndValue{
                                    AttributeName: "dolore",
                                    Value: shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("eligendi"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-12-08T10:34:18.161Z"),
                                        NumberValue: sdk.String("autem"),
                                        StringValue: sdk.String("esse"),
                                    },
                                },
                            },
                            SourceObjectReference: shared.ObjectReference{
                                Selector: sdk.String("dolores"),
                            },
                            TargetObjectReference: shared.ObjectReference{
                                Selector: sdk.String("assumenda"),
                            },
                            TypedLinkFacet: shared.TypedLinkSchemaAndFacetName{
                                SchemaArn: "beatae",
                                TypedLinkName: "est",
                            },
                        },
                    },
                    UpdateObjectAttributes: &shared.BatchUpdateObjectAttributes{
                        AttributeUpdates: []shared.ObjectAttributeUpdate{
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("molestiae"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-03-27T22:23:24.313Z"),
                                        NumberValue: sdk.String("necessitatibus"),
                                        StringValue: sdk.String("tempore"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "sint",
                                    Name: "Stacey Hintz",
                                    SchemaArn: "corporis",
                                },
                            },
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("voluptatibus"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2021-04-04T05:15:35.912Z"),
                                        NumberValue: sdk.String("alias"),
                                        StringValue: sdk.String("quia"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "quidem",
                                    Name: "Phil Barton",
                                    SchemaArn: "eos",
                                },
                            },
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("odio"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-09-20T13:39:46.907Z"),
                                        NumberValue: sdk.String("explicabo"),
                                        StringValue: sdk.String("corporis"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "error",
                                    Name: "Jeff Walker",
                                    SchemaArn: "quidem",
                                },
                            },
                            shared.ObjectAttributeUpdate{
                                ObjectAttributeAction: &shared.ObjectAttributeAction{
                                    ObjectAttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                                    ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                                        BinaryValue: sdk.String("beatae"),
                                        BooleanValue: sdk.Bool(false),
                                        DatetimeValue: types.MustTimeFromString("2022-01-17T19:54:28.296Z"),
                                        NumberValue: sdk.String("delectus"),
                                        StringValue: sdk.String("cupiditate"),
                                    },
                                },
                                ObjectAttributeKey: &shared.AttributeKey{
                                    FacetName: "fugit",
                                    Name: "Carrie Douglas",
                                    SchemaArn: "dignissimos",
                                },
                            },
                        },
                        ObjectReference: shared.ObjectReference{
                            Selector: sdk.String("optio"),
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("qui"),
        XAmzDate: sdk.String("expedita"),
        XAmzSecurityToken: sdk.String("voluptatum"),
        XAmzSignature: sdk.String("cupiditate"),
        XAmzSignedHeaders: sdk.String("minima"),
        XAmzDataPartition: "placeat",
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

<p>Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.</p> <p>You can also quickly create a directory using a managed schema, called the <code>QuickStartSchema</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_managed.html">Managed Schema</a> in the <i>Amazon Cloud Directory Developer Guide</i>.</p>

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
            Name: "Gladys King",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("corporis"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("voluptates"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("tempore"),
        XAmzSignedHeaders: sdk.String("aperiam"),
        XAmzDataPartition: "libero",
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
                            BinaryValue: sdk.String("labore"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2021-11-05T06:31:50.944Z"),
                            NumberValue: sdk.String("voluptas"),
                            StringValue: sdk.String("quo"),
                        },
                        IsImmutable: sdk.Bool(false),
                        Rules: map[string]shared.Rule{
                            "minus": shared.Rule{
                                Parameters: map[string]string{
                                    "nostrum": "est",
                                    "impedit": "delectus",
                                    "tempore": "vero",
                                },
                                Type: shared.RuleTypeEnumBinaryLength.ToPointer(),
                            },
                        },
                        Type: shared.FacetAttributeTypeEnumVariant,
                    },
                    AttributeReference: &shared.FacetAttributeReference{
                        TargetAttributeName: "pariatur",
                        TargetFacetName: "nemo",
                    },
                    Name: "Sarah Kuhlman",
                    RequiredBehavior: shared.RequiredAttributeBehaviorEnumRequiredAlways.ToPointer(),
                },
            },
            FacetStyle: operations.CreateFacetRequestBodyFacetStyleEnumDynamic.ToPointer(),
            Name: "Natasha Bogan",
            ObjectType: operations.CreateFacetRequestBodyObjectTypeEnumIndex.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("optio"),
        XAmzDate: sdk.String("ex"),
        XAmzSecurityToken: sdk.String("quaerat"),
        XAmzSignature: sdk.String("commodi"),
        XAmzSignedHeaders: sdk.String("officiis"),
        XAmzDataPartition: "placeat",
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

Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.html">Indexing and search</a> for more information.

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
            LinkName: sdk.String("quidem"),
            OrderedIndexedAttributeList: []shared.AttributeKey{
                shared.AttributeKey{
                    FacetName: "quam",
                    Name: "Pauline Beier",
                    SchemaArn: "sequi",
                },
                shared.AttributeKey{
                    FacetName: "repudiandae",
                    Name: "Willie Wehner",
                    SchemaArn: "dolores",
                },
            },
            ParentReference: &operations.CreateIndexRequestBodyParentReference{
                Selector: sdk.String("nam"),
            },
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("consequuntur"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("nobis"),
        XAmzSecurityToken: sdk.String("ipsa"),
        XAmzSignature: sdk.String("ducimus"),
        XAmzSignedHeaders: sdk.String("maiores"),
        XAmzDataPartition: "veritatis",
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
            LinkName: sdk.String("quasi"),
            ObjectAttributeList: []shared.AttributeKeyAndValue{
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "pariatur",
                        Name: "Andy Mayert",
                        SchemaArn: "nostrum",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: sdk.String("doloribus"),
                        BooleanValue: sdk.Bool(false),
                        DatetimeValue: types.MustTimeFromString("2021-04-12T10:26:34.895Z"),
                        NumberValue: sdk.String("enim"),
                        StringValue: sdk.String("hic"),
                    },
                },
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "animi",
                        Name: "Felix Mann PhD",
                        SchemaArn: "architecto",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: sdk.String("quos"),
                        BooleanValue: sdk.Bool(false),
                        DatetimeValue: types.MustTimeFromString("2021-05-07T09:23:04.849Z"),
                        NumberValue: sdk.String("tempore"),
                        StringValue: sdk.String("libero"),
                    },
                },
            },
            ParentReference: &operations.CreateObjectRequestBodyParentReference{
                Selector: sdk.String("velit"),
            },
            SchemaFacets: []shared.SchemaFacet{
                shared.SchemaFacet{
                    FacetName: sdk.String("delectus"),
                    SchemaArn: sdk.String("impedit"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("cum"),
        XAmzContentSha256: sdk.String("ipsum"),
        XAmzCredential: sdk.String("adipisci"),
        XAmzDate: sdk.String("saepe"),
        XAmzSecurityToken: sdk.String("deserunt"),
        XAmzSignature: sdk.String("doloremque"),
        XAmzSignedHeaders: sdk.String("quis"),
        XAmzDataPartition: "veniam",
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
            Name: "Roger McDermott",
        },
        XAmzAlgorithm: sdk.String("possimus"),
        XAmzContentSha256: sdk.String("non"),
        XAmzCredential: sdk.String("magnam"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("sed"),
        XAmzSignature: sdk.String("asperiores"),
        XAmzSignedHeaders: sdk.String("veniam"),
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

Creates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

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
                            BinaryValue: sdk.String("facere"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-09-20T12:28:22.531Z"),
                            NumberValue: sdk.String("pariatur"),
                            StringValue: sdk.String("amet"),
                        },
                        IsImmutable: sdk.Bool(false),
                        Name: "Virginia Flatley",
                        RequiredBehavior: shared.RequiredAttributeBehaviorEnumRequiredAlways,
                        Rules: map[string]shared.Rule{
                            "quaerat": shared.Rule{
                                Parameters: map[string]string{
                                    "distinctio": "nisi",
                                    "quis": "nisi",
                                    "libero": "minus",
                                },
                                Type: shared.RuleTypeEnumStringLength.ToPointer(),
                            },
                            "facilis": shared.Rule{
                                Parameters: map[string]string{
                                    "ad": "voluptatibus",
                                },
                                Type: shared.RuleTypeEnumStringLength.ToPointer(),
                            },
                            "consequuntur": shared.Rule{
                                Parameters: map[string]string{
                                    "labore": "rerum",
                                    "eos": "reprehenderit",
                                    "nostrum": "neque",
                                    "iusto": "est",
                                },
                                Type: shared.RuleTypeEnumStringFromSet.ToPointer(),
                            },
                            "eligendi": shared.Rule{
                                Parameters: map[string]string{
                                    "unde": "officiis",
                                    "ducimus": "dolor",
                                    "dicta": "error",
                                    "porro": "vitae",
                                },
                                Type: shared.RuleTypeEnumNumberComparison.ToPointer(),
                            },
                        },
                        Type: shared.FacetAttributeTypeEnumBoolean,
                    },
                },
                IdentityAttributeOrder: []string{
                    "ad",
                    "aspernatur",
                    "enim",
                    "delectus",
                },
                Name: sdk.String("Mr. Marian Renner"),
            },
        },
        XAmzAlgorithm: sdk.String("accusamus"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("tempore"),
        XAmzDate: sdk.String("veniam"),
        XAmzSecurityToken: sdk.String("eos"),
        XAmzSignature: sdk.String("reiciendis"),
        XAmzSignedHeaders: sdk.String("earum"),
        XAmzDataPartition: "reprehenderit",
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
        XAmzAlgorithm: sdk.String("praesentium"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("deleniti"),
        XAmzDataPartition: "illo",
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
            Name: "Nadine Gutmann",
        },
        XAmzAlgorithm: sdk.String("laudantium"),
        XAmzContentSha256: sdk.String("repudiandae"),
        XAmzCredential: sdk.String("consequatur"),
        XAmzDate: sdk.String("maxime"),
        XAmzSecurityToken: sdk.String("aspernatur"),
        XAmzSignature: sdk.String("nam"),
        XAmzSignedHeaders: sdk.String("expedita"),
        XAmzDataPartition: "quas",
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

Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.

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
                Selector: sdk.String("provident"),
            },
        },
        XAmzAlgorithm: sdk.String("repudiandae"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("dignissimos"),
        XAmzDate: sdk.String("corporis"),
        XAmzSecurityToken: sdk.String("vero"),
        XAmzSignature: sdk.String("similique"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzDataPartition: "iure",
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
        XAmzAlgorithm: sdk.String("dolorem"),
        XAmzContentSha256: sdk.String("commodi"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("commodi"),
        XAmzSecurityToken: sdk.String("aut"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzDataPartition: "quae",
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

Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

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
            Name: "Desiree Lakin",
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("quasi"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("laudantium"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("earum"),
        XAmzSignedHeaders: sdk.String("iusto"),
        XAmzDataPartition: "amet",
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
                Selector: sdk.String("provident"),
            },
            TargetReference: operations.DetachFromIndexRequestBodyTargetReference{
                Selector: sdk.String("dolorum"),
            },
        },
        XAmzAlgorithm: sdk.String("necessitatibus"),
        XAmzContentSha256: sdk.String("provident"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("consequatur"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("itaque"),
        XAmzDataPartition: "facilis",
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
            LinkName: "corrupti",
            ParentReference: operations.DetachObjectRequestBodyParentReference{
                Selector: sdk.String("aperiam"),
            },
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("accusamus"),
        XAmzCredential: sdk.String("eos"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("dicta"),
        XAmzSignature: sdk.String("voluptatem"),
        XAmzSignedHeaders: sdk.String("velit"),
        XAmzDataPartition: "dolor",
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
                Selector: sdk.String("sunt"),
            },
            PolicyReference: operations.DetachPolicyRequestBodyPolicyReference{
                Selector: sdk.String("a"),
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

    if res.DetachPolicyResponse != nil {
        // handle response
    }
}
```

## DetachTypedLink

Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

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
                        AttributeName: "perferendis",
                        Value: shared.TypedAttributeValue{
                            BinaryValue: sdk.String("rerum"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-12-14T22:06:13.266Z"),
                            NumberValue: sdk.String("dignissimos"),
                            StringValue: sdk.String("repellat"),
                        },
                    },
                },
                SourceObjectReference: &shared.ObjectReference{
                    Selector: sdk.String("velit"),
                },
                TargetObjectReference: &shared.ObjectReference{
                    Selector: sdk.String("porro"),
                },
                TypedLinkFacet: &shared.TypedLinkSchemaAndFacetName{
                    SchemaArn: "provident",
                    TypedLinkName: "consectetur",
                },
            },
        },
        XAmzAlgorithm: sdk.String("eligendi"),
        XAmzContentSha256: sdk.String("dignissimos"),
        XAmzCredential: sdk.String("consectetur"),
        XAmzDate: sdk.String("soluta"),
        XAmzSecurityToken: sdk.String("natus"),
        XAmzSignature: sdk.String("temporibus"),
        XAmzSignedHeaders: sdk.String("officia"),
        XAmzDataPartition: "amet",
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
        XAmzAlgorithm: sdk.String("tenetur"),
        XAmzContentSha256: sdk.String("aspernatur"),
        XAmzCredential: sdk.String("quo"),
        XAmzDate: sdk.String("itaque"),
        XAmzSecurityToken: sdk.String("illum"),
        XAmzSignature: sdk.String("laborum"),
        XAmzSignedHeaders: sdk.String("dignissimos"),
        XAmzDataPartition: "vero",
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
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("consectetur"),
        XAmzCredential: sdk.String("repellat"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("exercitationem"),
        XAmzSignedHeaders: sdk.String("nihil"),
        XAmzDataPartition: "non",
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
            SchemaArn: "ab",
        },
        XAmzAlgorithm: sdk.String("illo"),
        XAmzContentSha256: sdk.String("hic"),
        XAmzCredential: sdk.String("deserunt"),
        XAmzDate: sdk.String("delectus"),
        XAmzSecurityToken: sdk.String("non"),
        XAmzSignature: sdk.String("distinctio"),
        XAmzSignedHeaders: sdk.String("in"),
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
            Name: "Kevin Conroy",
        },
        XAmzAlgorithm: sdk.String("voluptate"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("minima"),
        XAmzDate: sdk.String("libero"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("sit"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzDataPartition: "eum",
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
                "mollitia",
            },
            ConsistencyLevel: operations.GetLinkAttributesRequestBodyConsistencyLevelEnumSerializable.ToPointer(),
            TypedLinkSpecifier: operations.GetLinkAttributesRequestBodyTypedLinkSpecifier{
                IdentityAttributeValues: []shared.AttributeNameAndValue{
                    shared.AttributeNameAndValue{
                        AttributeName: "nostrum",
                        Value: shared.TypedAttributeValue{
                            BinaryValue: sdk.String("molestiae"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-01-12T05:45:23.430Z"),
                            NumberValue: sdk.String("ab"),
                            StringValue: sdk.String("modi"),
                        },
                    },
                    shared.AttributeNameAndValue{
                        AttributeName: "aut",
                        Value: shared.TypedAttributeValue{
                            BinaryValue: sdk.String("aut"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2021-07-20T06:58:28.443Z"),
                            NumberValue: sdk.String("commodi"),
                            StringValue: sdk.String("numquam"),
                        },
                    },
                    shared.AttributeNameAndValue{
                        AttributeName: "dolorum",
                        Value: shared.TypedAttributeValue{
                            BinaryValue: sdk.String("possimus"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-10-08T00:54:40.246Z"),
                            NumberValue: sdk.String("nesciunt"),
                            StringValue: sdk.String("quaerat"),
                        },
                    },
                    shared.AttributeNameAndValue{
                        AttributeName: "itaque",
                        Value: shared.TypedAttributeValue{
                            BinaryValue: sdk.String("minus"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-04-14T23:20:42.137Z"),
                            NumberValue: sdk.String("iusto"),
                            StringValue: sdk.String("quas"),
                        },
                    },
                },
                SourceObjectReference: &shared.ObjectReference{
                    Selector: sdk.String("et"),
                },
                TargetObjectReference: &shared.ObjectReference{
                    Selector: sdk.String("facilis"),
                },
                TypedLinkFacet: &shared.TypedLinkSchemaAndFacetName{
                    SchemaArn: "amet",
                    TypedLinkName: "autem",
                },
            },
        },
        XAmzAlgorithm: sdk.String("fuga"),
        XAmzContentSha256: sdk.String("alias"),
        XAmzCredential: sdk.String("rem"),
        XAmzDate: sdk.String("aut"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("laudantium"),
        XAmzSignedHeaders: sdk.String("repellendus"),
        XAmzDataPartition: "veritatis",
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
                "eaque",
            },
            ObjectReference: operations.GetObjectAttributesRequestBodyObjectReference{
                Selector: sdk.String("saepe"),
            },
            SchemaFacet: operations.GetObjectAttributesRequestBodySchemaFacet{
                FacetName: sdk.String("delectus"),
                SchemaArn: sdk.String("mollitia"),
            },
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("sed"),
        XAmzDate: sdk.String("voluptatem"),
        XAmzSecurityToken: sdk.String("alias"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzConsistencyLevel: operations.GetObjectAttributesXAmzConsistencyLevelEnumSerializable.ToPointer(),
        XAmzDataPartition: "incidunt",
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
                Selector: sdk.String("qui"),
            },
        },
        XAmzAlgorithm: sdk.String("qui"),
        XAmzContentSha256: sdk.String("necessitatibus"),
        XAmzCredential: sdk.String("harum"),
        XAmzDate: sdk.String("explicabo"),
        XAmzSecurityToken: sdk.String("beatae"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("modi"),
        XAmzConsistencyLevel: operations.GetObjectInformationXAmzConsistencyLevelEnumEventual.ToPointer(),
        XAmzDataPartition: "voluptatibus",
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

Retrieves a JSON representation of the schema. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.

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
        XAmzAlgorithm: sdk.String("molestias"),
        XAmzContentSha256: sdk.String("officia"),
        XAmzCredential: sdk.String("libero"),
        XAmzDate: sdk.String("totam"),
        XAmzSecurityToken: sdk.String("sequi"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("ea"),
        XAmzDataPartition: "impedit",
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

Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

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
            Name: "Kathy Frami",
        },
        XAmzAlgorithm: sdk.String("nulla"),
        XAmzContentSha256: sdk.String("laborum"),
        XAmzCredential: sdk.String("natus"),
        XAmzDate: sdk.String("accusamus"),
        XAmzSecurityToken: sdk.String("doloremque"),
        XAmzSignature: sdk.String("nisi"),
        XAmzSignedHeaders: sdk.String("rerum"),
        XAmzDataPartition: "recusandae",
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
        MaxResults: sdk.String("voluptates"),
        NextToken: sdk.String("non"),
        RequestBody: operations.ListAppliedSchemaArnsRequestBody{
            DirectoryArn: "rem",
            MaxResults: sdk.Int64(157884),
            NextToken: sdk.String("ullam"),
            SchemaArn: sdk.String("quisquam"),
        },
        XAmzAlgorithm: sdk.String("dicta"),
        XAmzContentSha256: sdk.String("voluptatibus"),
        XAmzCredential: sdk.String("eligendi"),
        XAmzDate: sdk.String("quae"),
        XAmzSecurityToken: sdk.String("officiis"),
        XAmzSignature: sdk.String("architecto"),
        XAmzSignedHeaders: sdk.String("architecto"),
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
        MaxResults: sdk.String("enim"),
        NextToken: sdk.String("optio"),
        RequestBody: operations.ListAttachedIndicesRequestBody{
            MaxResults: sdk.Int64(525951),
            NextToken: sdk.String("perferendis"),
            TargetReference: operations.ListAttachedIndicesRequestBodyTargetReference{
                Selector: sdk.String("facilis"),
            },
        },
        XAmzAlgorithm: sdk.String("reiciendis"),
        XAmzContentSha256: sdk.String("a"),
        XAmzCredential: sdk.String("iste"),
        XAmzDate: sdk.String("dicta"),
        XAmzSecurityToken: sdk.String("quos"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("dolore"),
        XAmzConsistencyLevel: operations.ListAttachedIndicesXAmzConsistencyLevelEnumSerializable.ToPointer(),
        XAmzDataPartition: "itaque",
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
        MaxResults: sdk.String("maxime"),
        NextToken: sdk.String("modi"),
        RequestBody: operations.ListDevelopmentSchemaArnsRequestBody{
            MaxResults: sdk.Int64(163558),
            NextToken: sdk.String("assumenda"),
        },
        XAmzAlgorithm: sdk.String("vero"),
        XAmzContentSha256: sdk.String("doloribus"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("porro"),
        XAmzSecurityToken: sdk.String("accusamus"),
        XAmzSignature: sdk.String("totam"),
        XAmzSignedHeaders: sdk.String("reiciendis"),
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
        MaxResults: sdk.String("ab"),
        NextToken: sdk.String("sint"),
        RequestBody: operations.ListDirectoriesRequestBody{
            MaxResults: sdk.Int64(472414),
            NextToken: sdk.String("esse"),
            State: operations.ListDirectoriesRequestBodyStateEnumDisabled.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("odio"),
        XAmzContentSha256: sdk.String("nesciunt"),
        XAmzCredential: sdk.String("debitis"),
        XAmzDate: sdk.String("vel"),
        XAmzSecurityToken: sdk.String("neque"),
        XAmzSignature: sdk.String("corporis"),
        XAmzSignedHeaders: sdk.String("voluptas"),
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
        MaxResults: sdk.String("consequuntur"),
        NextToken: sdk.String("officia"),
        RequestBody: operations.ListFacetAttributesRequestBody{
            MaxResults: sdk.Int64(441374),
            Name: "Ray Bednar",
            NextToken: sdk.String("accusantium"),
        },
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("neque"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("aliquam"),
        XAmzSignature: sdk.String("quos"),
        XAmzSignedHeaders: sdk.String("doloribus"),
        XAmzDataPartition: "fugiat",
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
        MaxResults: sdk.String("est"),
        NextToken: sdk.String("delectus"),
        RequestBody: operations.ListFacetNamesRequestBody{
            MaxResults: sdk.Int64(245278),
            NextToken: sdk.String("vitae"),
        },
        XAmzAlgorithm: sdk.String("nesciunt"),
        XAmzContentSha256: sdk.String("similique"),
        XAmzCredential: sdk.String("illo"),
        XAmzDate: sdk.String("repellat"),
        XAmzSecurityToken: sdk.String("nemo"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("possimus"),
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

Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

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
                    AttributeName: sdk.String("ipsam"),
                    Range: shared.TypedAttributeValueRange{
                        EndMode: shared.RangeModeEnumLastBeforeMissingValues,
                        EndValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("optio"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-04-21T23:30:19.456Z"),
                            NumberValue: sdk.String("nesciunt"),
                            StringValue: sdk.String("commodi"),
                        },
                        StartMode: shared.RangeModeEnumExclusive,
                        StartValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("consequuntur"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-02-08T18:33:02.297Z"),
                            NumberValue: sdk.String("officia"),
                            StringValue: sdk.String("sint"),
                        },
                    },
                },
            },
            FilterTypedLink: &operations.ListIncomingTypedLinksRequestBodyFilterTypedLink{
                SchemaArn: sdk.String("ut"),
                TypedLinkName: sdk.String("numquam"),
            },
            MaxResults: sdk.Int64(947822),
            NextToken: sdk.String("adipisci"),
            ObjectReference: operations.ListIncomingTypedLinksRequestBodyObjectReference{
                Selector: sdk.String("libero"),
            },
        },
        XAmzAlgorithm: sdk.String("in"),
        XAmzContentSha256: sdk.String("minima"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("minus"),
        XAmzSecurityToken: sdk.String("ab"),
        XAmzSignature: sdk.String("beatae"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzDataPartition: "nisi",
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
        MaxResults: sdk.String("quisquam"),
        NextToken: sdk.String("dolor"),
        RequestBody: operations.ListIndexRequestBody{
            IndexReference: operations.ListIndexRequestBodyIndexReference{
                Selector: sdk.String("ducimus"),
            },
            MaxResults: sdk.Int64(683727),
            NextToken: sdk.String("minima"),
            RangesOnIndexedValues: []shared.ObjectAttributeRange{
                shared.ObjectAttributeRange{
                    AttributeKey: &shared.AttributeKey{
                        FacetName: "qui",
                        Name: "Sara Gorczany",
                        SchemaArn: "dolor",
                    },
                    Range: &shared.TypedAttributeValueRange{
                        EndMode: shared.RangeModeEnumLast,
                        EndValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("expedita"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2021-06-18T04:00:58.908Z"),
                            NumberValue: sdk.String("sit"),
                            StringValue: sdk.String("nemo"),
                        },
                        StartMode: shared.RangeModeEnumInclusive,
                        StartValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("consequuntur"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-05-10T16:07:37.512Z"),
                            NumberValue: sdk.String("modi"),
                            StringValue: sdk.String("veniam"),
                        },
                    },
                },
            },
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("quisquam"),
        XAmzSecurityToken: sdk.String("enim"),
        XAmzSignature: sdk.String("doloribus"),
        XAmzSignedHeaders: sdk.String("assumenda"),
        XAmzConsistencyLevel: operations.ListIndexXAmzConsistencyLevelEnumEventual.ToPointer(),
        XAmzDataPartition: "architecto",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListIndexResponse != nil {
        // handle response
    }
}
```

## ListManagedSchemaArns

Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.

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
    res, err := s.SDK.ListManagedSchemaArns(ctx, operations.ListManagedSchemaArnsRequest{
        MaxResults: sdk.String("alias"),
        NextToken: sdk.String("culpa"),
        RequestBody: operations.ListManagedSchemaArnsRequestBody{
            MaxResults: sdk.Int64(60335),
            NextToken: sdk.String("nobis"),
            SchemaArn: sdk.String("necessitatibus"),
        },
        XAmzAlgorithm: sdk.String("quia"),
        XAmzContentSha256: sdk.String("dicta"),
        XAmzCredential: sdk.String("vel"),
        XAmzDate: sdk.String("perspiciatis"),
        XAmzSecurityToken: sdk.String("debitis"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("architecto"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListManagedSchemaArnsResponse != nil {
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
        MaxResults: sdk.String("accusantium"),
        NextToken: sdk.String("perferendis"),
        RequestBody: operations.ListObjectAttributesRequestBody{
            FacetFilter: &operations.ListObjectAttributesRequestBodyFacetFilter{
                FacetName: sdk.String("veritatis"),
                SchemaArn: sdk.String("provident"),
            },
            MaxResults: sdk.Int64(765833),
            NextToken: sdk.String("iure"),
            ObjectReference: operations.ListObjectAttributesRequestBodyObjectReference{
                Selector: sdk.String("quibusdam"),
            },
        },
        XAmzAlgorithm: sdk.String("quod"),
        XAmzContentSha256: sdk.String("nemo"),
        XAmzCredential: sdk.String("recusandae"),
        XAmzDate: sdk.String("velit"),
        XAmzSecurityToken: sdk.String("magnam"),
        XAmzSignature: sdk.String("dignissimos"),
        XAmzSignedHeaders: sdk.String("laboriosam"),
        XAmzConsistencyLevel: operations.ListObjectAttributesXAmzConsistencyLevelEnumSerializable.ToPointer(),
        XAmzDataPartition: "odio",
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
        MaxResults: sdk.String("natus"),
        NextToken: sdk.String("provident"),
        RequestBody: operations.ListObjectChildrenRequestBody{
            MaxResults: sdk.Int64(739508),
            NextToken: sdk.String("doloribus"),
            ObjectReference: operations.ListObjectChildrenRequestBodyObjectReference{
                Selector: sdk.String("facilis"),
            },
        },
        XAmzAlgorithm: sdk.String("quidem"),
        XAmzContentSha256: sdk.String("itaque"),
        XAmzCredential: sdk.String("laboriosam"),
        XAmzDate: sdk.String("unde"),
        XAmzSecurityToken: sdk.String("modi"),
        XAmzSignature: sdk.String("perspiciatis"),
        XAmzSignedHeaders: sdk.String("hic"),
        XAmzConsistencyLevel: operations.ListObjectChildrenXAmzConsistencyLevelEnumEventual.ToPointer(),
        XAmzDataPartition: "aspernatur",
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

<p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>

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
        MaxResults: sdk.String("libero"),
        NextToken: sdk.String("nam"),
        RequestBody: operations.ListObjectParentPathsRequestBody{
            MaxResults: sdk.Int64(279172),
            NextToken: sdk.String("recusandae"),
            ObjectReference: operations.ListObjectParentPathsRequestBodyObjectReference{
                Selector: sdk.String("quod"),
            },
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("saepe"),
        XAmzCredential: sdk.String("autem"),
        XAmzDate: sdk.String("quo"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("illum"),
        XAmzSignedHeaders: sdk.String("nemo"),
        XAmzDataPartition: "illum",
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
        MaxResults: sdk.String("facilis"),
        NextToken: sdk.String("non"),
        RequestBody: operations.ListObjectParentsRequestBody{
            IncludeAllLinksToEachParent: sdk.Bool(false),
            MaxResults: sdk.Int64(649534),
            NextToken: sdk.String("assumenda"),
            ObjectReference: operations.ListObjectParentsRequestBodyObjectReference{
                Selector: sdk.String("recusandae"),
            },
        },
        XAmzAlgorithm: sdk.String("distinctio"),
        XAmzContentSha256: sdk.String("pariatur"),
        XAmzCredential: sdk.String("ad"),
        XAmzDate: sdk.String("facere"),
        XAmzSecurityToken: sdk.String("laborum"),
        XAmzSignature: sdk.String("eveniet"),
        XAmzSignedHeaders: sdk.String("laborum"),
        XAmzConsistencyLevel: operations.ListObjectParentsXAmzConsistencyLevelEnumSerializable.ToPointer(),
        XAmzDataPartition: "maxime",
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
        MaxResults: sdk.String("ipsam"),
        NextToken: sdk.String("alias"),
        RequestBody: operations.ListObjectPoliciesRequestBody{
            MaxResults: sdk.Int64(379894),
            NextToken: sdk.String("deserunt"),
            ObjectReference: operations.ListObjectPoliciesRequestBodyObjectReference{
                Selector: sdk.String("molestias"),
            },
        },
        XAmzAlgorithm: sdk.String("laborum"),
        XAmzContentSha256: sdk.String("est"),
        XAmzCredential: sdk.String("occaecati"),
        XAmzDate: sdk.String("labore"),
        XAmzSecurityToken: sdk.String("quo"),
        XAmzSignature: sdk.String("perferendis"),
        XAmzSignedHeaders: sdk.String("fugit"),
        XAmzConsistencyLevel: operations.ListObjectPoliciesXAmzConsistencyLevelEnumSerializable.ToPointer(),
        XAmzDataPartition: "magnam",
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

Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

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
            ConsistencyLevel: operations.ListOutgoingTypedLinksRequestBodyConsistencyLevelEnumSerializable.ToPointer(),
            FilterAttributeRanges: []shared.TypedLinkAttributeRange{
                shared.TypedLinkAttributeRange{
                    AttributeName: sdk.String("hic"),
                    Range: shared.TypedAttributeValueRange{
                        EndMode: shared.RangeModeEnumLast,
                        EndValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("officiis"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2021-04-12T23:21:24.871Z"),
                            NumberValue: sdk.String("error"),
                            StringValue: sdk.String("mollitia"),
                        },
                        StartMode: shared.RangeModeEnumLast,
                        StartValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("nostrum"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-06-14T16:04:49.162Z"),
                            NumberValue: sdk.String("fuga"),
                            StringValue: sdk.String("facere"),
                        },
                    },
                },
                shared.TypedLinkAttributeRange{
                    AttributeName: sdk.String("impedit"),
                    Range: shared.TypedAttributeValueRange{
                        EndMode: shared.RangeModeEnumFirst,
                        EndValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("deserunt"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2021-11-04T14:46:37.615Z"),
                            NumberValue: sdk.String("doloremque"),
                            StringValue: sdk.String("voluptatem"),
                        },
                        StartMode: shared.RangeModeEnumExclusive,
                        StartValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("necessitatibus"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-12-21T17:37:11.705Z"),
                            NumberValue: sdk.String("eaque"),
                            StringValue: sdk.String("architecto"),
                        },
                    },
                },
                shared.TypedLinkAttributeRange{
                    AttributeName: sdk.String("similique"),
                    Range: shared.TypedAttributeValueRange{
                        EndMode: shared.RangeModeEnumInclusive,
                        EndValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("blanditiis"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-10-31T00:22:51.438Z"),
                            NumberValue: sdk.String("officiis"),
                            StringValue: sdk.String("sed"),
                        },
                        StartMode: shared.RangeModeEnumExclusive,
                        StartValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("impedit"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-06-07T19:00:41.176Z"),
                            NumberValue: sdk.String("a"),
                            StringValue: sdk.String("maiores"),
                        },
                    },
                },
                shared.TypedLinkAttributeRange{
                    AttributeName: sdk.String("laudantium"),
                    Range: shared.TypedAttributeValueRange{
                        EndMode: shared.RangeModeEnumExclusive,
                        EndValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("alias"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2021-06-06T21:58:33.426Z"),
                            NumberValue: sdk.String("dicta"),
                            StringValue: sdk.String("suscipit"),
                        },
                        StartMode: shared.RangeModeEnumExclusive,
                        StartValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("doloribus"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-09-27T21:14:48.058Z"),
                            NumberValue: sdk.String("esse"),
                            StringValue: sdk.String("in"),
                        },
                    },
                },
            },
            FilterTypedLink: &operations.ListOutgoingTypedLinksRequestBodyFilterTypedLink{
                SchemaArn: sdk.String("eligendi"),
                TypedLinkName: sdk.String("quasi"),
            },
            MaxResults: sdk.Int64(203621),
            NextToken: sdk.String("vero"),
            ObjectReference: operations.ListOutgoingTypedLinksRequestBodyObjectReference{
                Selector: sdk.String("excepturi"),
            },
        },
        XAmzAlgorithm: sdk.String("accusantium"),
        XAmzContentSha256: sdk.String("qui"),
        XAmzCredential: sdk.String("impedit"),
        XAmzDate: sdk.String("beatae"),
        XAmzSecurityToken: sdk.String("incidunt"),
        XAmzSignature: sdk.String("dicta"),
        XAmzSignedHeaders: sdk.String("odit"),
        XAmzDataPartition: "corporis",
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
        MaxResults: sdk.String("rerum"),
        NextToken: sdk.String("alias"),
        RequestBody: operations.ListPolicyAttachmentsRequestBody{
            MaxResults: sdk.Int64(624498),
            NextToken: sdk.String("vel"),
            PolicyReference: operations.ListPolicyAttachmentsRequestBodyPolicyReference{
                Selector: sdk.String("accusantium"),
            },
        },
        XAmzAlgorithm: sdk.String("id"),
        XAmzContentSha256: sdk.String("laboriosam"),
        XAmzCredential: sdk.String("ex"),
        XAmzDate: sdk.String("quas"),
        XAmzSecurityToken: sdk.String("veritatis"),
        XAmzSignature: sdk.String("ullam"),
        XAmzSignedHeaders: sdk.String("quae"),
        XAmzConsistencyLevel: operations.ListPolicyAttachmentsXAmzConsistencyLevelEnumEventual.ToPointer(),
        XAmzDataPartition: "incidunt",
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
        MaxResults: sdk.String("quam"),
        NextToken: sdk.String("magni"),
        RequestBody: operations.ListPublishedSchemaArnsRequestBody{
            MaxResults: sdk.Int64(646329),
            NextToken: sdk.String("delectus"),
            SchemaArn: sdk.String("omnis"),
        },
        XAmzAlgorithm: sdk.String("sed"),
        XAmzContentSha256: sdk.String("nesciunt"),
        XAmzCredential: sdk.String("maxime"),
        XAmzDate: sdk.String("quis"),
        XAmzSecurityToken: sdk.String("cupiditate"),
        XAmzSignature: sdk.String("aliquam"),
        XAmzSignedHeaders: sdk.String("excepturi"),
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
        MaxResults: sdk.String("maiores"),
        NextToken: sdk.String("laudantium"),
        RequestBody: operations.ListTagsForResourceRequestBody{
            MaxResults: sdk.Int64(243904),
            NextToken: sdk.String("reiciendis"),
            ResourceArn: "amet",
        },
        XAmzAlgorithm: sdk.String("nemo"),
        XAmzContentSha256: sdk.String("ipsa"),
        XAmzCredential: sdk.String("quisquam"),
        XAmzDate: sdk.String("tenetur"),
        XAmzSecurityToken: sdk.String("quas"),
        XAmzSignature: sdk.String("molestiae"),
        XAmzSignedHeaders: sdk.String("aliquid"),
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

Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

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
        MaxResults: sdk.String("asperiores"),
        NextToken: sdk.String("a"),
        RequestBody: operations.ListTypedLinkFacetAttributesRequestBody{
            MaxResults: sdk.Int64(749702),
            Name: "Steven Carter",
            NextToken: sdk.String("eveniet"),
        },
        XAmzAlgorithm: sdk.String("porro"),
        XAmzContentSha256: sdk.String("tempore"),
        XAmzCredential: sdk.String("quidem"),
        XAmzDate: sdk.String("modi"),
        XAmzSecurityToken: sdk.String("voluptates"),
        XAmzSignature: sdk.String("fugit"),
        XAmzSignedHeaders: sdk.String("eius"),
        XAmzDataPartition: "sequi",
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

Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

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
        MaxResults: sdk.String("eligendi"),
        NextToken: sdk.String("asperiores"),
        RequestBody: operations.ListTypedLinkFacetNamesRequestBody{
            MaxResults: sdk.Int64(459875),
            NextToken: sdk.String("blanditiis"),
        },
        XAmzAlgorithm: sdk.String("sint"),
        XAmzContentSha256: sdk.String("repellat"),
        XAmzCredential: sdk.String("a"),
        XAmzDate: sdk.String("animi"),
        XAmzSecurityToken: sdk.String("maiores"),
        XAmzSignature: sdk.String("itaque"),
        XAmzSignedHeaders: sdk.String("nulla"),
        XAmzDataPartition: "deserunt",
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

Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.

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
        MaxResults: sdk.String("corporis"),
        NextToken: sdk.String("velit"),
        RequestBody: operations.LookupPolicyRequestBody{
            MaxResults: sdk.Int64(887701),
            NextToken: sdk.String("enim"),
            ObjectReference: operations.LookupPolicyRequestBodyObjectReference{
                Selector: sdk.String("officia"),
            },
        },
        XAmzAlgorithm: sdk.String("saepe"),
        XAmzContentSha256: sdk.String("eum"),
        XAmzCredential: sdk.String("repudiandae"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("officia"),
        XAmzSignature: sdk.String("impedit"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzDataPartition: "blanditiis",
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
            MinorVersion: sdk.String("eius"),
            Name: sdk.String("Jesse Rogahn"),
            Version: "quia",
        },
        XAmzAlgorithm: sdk.String("magnam"),
        XAmzContentSha256: sdk.String("reprehenderit"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("quos"),
        XAmzSecurityToken: sdk.String("corrupti"),
        XAmzSignature: sdk.String("amet"),
        XAmzSignedHeaders: sdk.String("molestiae"),
        XAmzDataPartition: "amet",
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

Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.

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
            Document: "laborum",
        },
        XAmzAlgorithm: sdk.String("modi"),
        XAmzContentSha256: sdk.String("perferendis"),
        XAmzCredential: sdk.String("necessitatibus"),
        XAmzDate: sdk.String("architecto"),
        XAmzSecurityToken: sdk.String("molestias"),
        XAmzSignature: sdk.String("dolore"),
        XAmzSignedHeaders: sdk.String("sunt"),
        XAmzDataPartition: "maiores",
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
                Selector: sdk.String("neque"),
            },
            SchemaFacet: operations.RemoveFacetFromObjectRequestBodySchemaFacet{
                FacetName: sdk.String("odit"),
                SchemaArn: sdk.String("earum"),
            },
        },
        XAmzAlgorithm: sdk.String("veniam"),
        XAmzContentSha256: sdk.String("ipsam"),
        XAmzCredential: sdk.String("eaque"),
        XAmzDate: sdk.String("exercitationem"),
        XAmzSecurityToken: sdk.String("veniam"),
        XAmzSignature: sdk.String("nihil"),
        XAmzSignedHeaders: sdk.String("ad"),
        XAmzDataPartition: "nisi",
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
            ResourceArn: "tenetur",
            Tags: []shared.Tag{
                shared.Tag{
                    Key: sdk.String("quibusdam"),
                    Value: sdk.String("nemo"),
                },
                shared.Tag{
                    Key: sdk.String("suscipit"),
                    Value: sdk.String("pariatur"),
                },
            },
        },
        XAmzAlgorithm: sdk.String("sit"),
        XAmzContentSha256: sdk.String("quidem"),
        XAmzCredential: sdk.String("repellendus"),
        XAmzDate: sdk.String("perferendis"),
        XAmzSecurityToken: sdk.String("id"),
        XAmzSignature: sdk.String("sapiente"),
        XAmzSignedHeaders: sdk.String("sed"),
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
            ResourceArn: "possimus",
            TagKeys: []string{
                "repudiandae",
                "architecto",
                "adipisci",
                "pariatur",
            },
        },
        XAmzAlgorithm: sdk.String("harum"),
        XAmzContentSha256: sdk.String("dolore"),
        XAmzCredential: sdk.String("voluptatibus"),
        XAmzDate: sdk.String("iure"),
        XAmzSecurityToken: sdk.String("explicabo"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("soluta"),
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
                    Action: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                    Attribute: &shared.FacetAttribute{
                        AttributeDefinition: &shared.FacetAttributeDefinition{
                            DefaultValue: &shared.TypedAttributeValue{
                                BinaryValue: sdk.String("earum"),
                                BooleanValue: sdk.Bool(false),
                                DatetimeValue: types.MustTimeFromString("2021-10-04T13:37:16.883Z"),
                                NumberValue: sdk.String("non"),
                                StringValue: sdk.String("quasi"),
                            },
                            IsImmutable: sdk.Bool(false),
                            Rules: map[string]shared.Rule{
                                "accusamus": shared.Rule{
                                    Parameters: map[string]string{
                                        "cumque": "doloremque",
                                        "expedita": "corrupti",
                                        "eaque": "deserunt",
                                    },
                                    Type: shared.RuleTypeEnumNumberComparison.ToPointer(),
                                },
                                "excepturi": shared.Rule{
                                    Parameters: map[string]string{
                                        "tempora": "possimus",
                                    },
                                    Type: shared.RuleTypeEnumBinaryLength.ToPointer(),
                                },
                                "rerum": shared.Rule{
                                    Parameters: map[string]string{
                                        "accusamus": "optio",
                                    },
                                    Type: shared.RuleTypeEnumStringLength.ToPointer(),
                                },
                            },
                            Type: shared.FacetAttributeTypeEnumDatetime,
                        },
                        AttributeReference: &shared.FacetAttributeReference{
                            TargetAttributeName: "quo",
                            TargetFacetName: "quos",
                        },
                        Name: "Jaime Morar Jr.",
                        RequiredBehavior: shared.RequiredAttributeBehaviorEnumRequiredAlways.ToPointer(),
                    },
                },
                shared.FacetAttributeUpdate{
                    Action: shared.UpdateActionTypeEnumDelete.ToPointer(),
                    Attribute: &shared.FacetAttribute{
                        AttributeDefinition: &shared.FacetAttributeDefinition{
                            DefaultValue: &shared.TypedAttributeValue{
                                BinaryValue: sdk.String("nostrum"),
                                BooleanValue: sdk.Bool(false),
                                DatetimeValue: types.MustTimeFromString("2020-07-13T07:09:47.394Z"),
                                NumberValue: sdk.String("neque"),
                                StringValue: sdk.String("pariatur"),
                            },
                            IsImmutable: sdk.Bool(false),
                            Rules: map[string]shared.Rule{
                                "sapiente": shared.Rule{
                                    Parameters: map[string]string{
                                        "quae": "quos",
                                        "aperiam": "non",
                                        "voluptates": "ad",
                                    },
                                    Type: shared.RuleTypeEnumNumberComparison.ToPointer(),
                                },
                                "quisquam": shared.Rule{
                                    Parameters: map[string]string{
                                        "consequuntur": "maiores",
                                        "inventore": "aliquid",
                                        "laudantium": "est",
                                    },
                                    Type: shared.RuleTypeEnumBinaryLength.ToPointer(),
                                },
                            },
                            Type: shared.FacetAttributeTypeEnumBoolean,
                        },
                        AttributeReference: &shared.FacetAttributeReference{
                            TargetAttributeName: "consectetur",
                            TargetFacetName: "cumque",
                        },
                        Name: "Wallace Kuphal",
                        RequiredBehavior: shared.RequiredAttributeBehaviorEnumRequiredAlways.ToPointer(),
                    },
                },
                shared.FacetAttributeUpdate{
                    Action: shared.UpdateActionTypeEnumDelete.ToPointer(),
                    Attribute: &shared.FacetAttribute{
                        AttributeDefinition: &shared.FacetAttributeDefinition{
                            DefaultValue: &shared.TypedAttributeValue{
                                BinaryValue: sdk.String("numquam"),
                                BooleanValue: sdk.Bool(false),
                                DatetimeValue: types.MustTimeFromString("2022-06-20T16:52:25.586Z"),
                                NumberValue: sdk.String("sit"),
                                StringValue: sdk.String("rerum"),
                            },
                            IsImmutable: sdk.Bool(false),
                            Rules: map[string]shared.Rule{
                                "tenetur": shared.Rule{
                                    Parameters: map[string]string{
                                        "quidem": "totam",
                                        "porro": "deserunt",
                                    },
                                    Type: shared.RuleTypeEnumBinaryLength.ToPointer(),
                                },
                            },
                            Type: shared.FacetAttributeTypeEnumBoolean,
                        },
                        AttributeReference: &shared.FacetAttributeReference{
                            TargetAttributeName: "voluptas",
                            TargetFacetName: "animi",
                        },
                        Name: "Mrs. Mary Pfannerstill",
                        RequiredBehavior: shared.RequiredAttributeBehaviorEnumRequiredAlways.ToPointer(),
                    },
                },
            },
            Name: "Derrick Roob",
            ObjectType: operations.UpdateFacetRequestBodyObjectTypeEnumPolicy.ToPointer(),
        },
        XAmzAlgorithm: sdk.String("unde"),
        XAmzContentSha256: sdk.String("illo"),
        XAmzCredential: sdk.String("nihil"),
        XAmzDate: sdk.String("inventore"),
        XAmzSecurityToken: sdk.String("libero"),
        XAmzSignature: sdk.String("ipsam"),
        XAmzSignedHeaders: sdk.String("quasi"),
        XAmzDataPartition: "cumque",
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
                            BinaryValue: sdk.String("facere"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-10-16T01:52:24.248Z"),
                            NumberValue: sdk.String("cumque"),
                            StringValue: sdk.String("delectus"),
                        },
                    },
                    AttributeKey: &shared.AttributeKey{
                        FacetName: "labore",
                        Name: "Byron Ledner",
                        SchemaArn: "cum",
                    },
                },
            },
            TypedLinkSpecifier: operations.UpdateLinkAttributesRequestBodyTypedLinkSpecifier{
                IdentityAttributeValues: []shared.AttributeNameAndValue{
                    shared.AttributeNameAndValue{
                        AttributeName: "sapiente",
                        Value: shared.TypedAttributeValue{
                            BinaryValue: sdk.String("quo"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-03-15T23:42:52.032Z"),
                            NumberValue: sdk.String("minus"),
                            StringValue: sdk.String("porro"),
                        },
                    },
                    shared.AttributeNameAndValue{
                        AttributeName: "id",
                        Value: shared.TypedAttributeValue{
                            BinaryValue: sdk.String("excepturi"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2021-07-19T09:34:11.767Z"),
                            NumberValue: sdk.String("quo"),
                            StringValue: sdk.String("esse"),
                        },
                    },
                    shared.AttributeNameAndValue{
                        AttributeName: "hic",
                        Value: shared.TypedAttributeValue{
                            BinaryValue: sdk.String("maxime"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-04-04T14:39:59.075Z"),
                            NumberValue: sdk.String("fugit"),
                            StringValue: sdk.String("pariatur"),
                        },
                    },
                    shared.AttributeNameAndValue{
                        AttributeName: "eligendi",
                        Value: shared.TypedAttributeValue{
                            BinaryValue: sdk.String("recusandae"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-12-27T00:31:59.035Z"),
                            NumberValue: sdk.String("laudantium"),
                            StringValue: sdk.String("iusto"),
                        },
                    },
                },
                SourceObjectReference: &shared.ObjectReference{
                    Selector: sdk.String("dolor"),
                },
                TargetObjectReference: &shared.ObjectReference{
                    Selector: sdk.String("voluptates"),
                },
                TypedLinkFacet: &shared.TypedLinkSchemaAndFacetName{
                    SchemaArn: "tempora",
                    TypedLinkName: "magni",
                },
            },
        },
        XAmzAlgorithm: sdk.String("rerum"),
        XAmzContentSha256: sdk.String("doloremque"),
        XAmzCredential: sdk.String("voluptatem"),
        XAmzDate: sdk.String("eum"),
        XAmzSecurityToken: sdk.String("at"),
        XAmzSignature: sdk.String("eum"),
        XAmzSignedHeaders: sdk.String("reprehenderit"),
        XAmzDataPartition: "voluptatum",
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
                        ObjectAttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                        ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("atque"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2021-09-16T18:03:50.064Z"),
                            NumberValue: sdk.String("atque"),
                            StringValue: sdk.String("nostrum"),
                        },
                    },
                    ObjectAttributeKey: &shared.AttributeKey{
                        FacetName: "atque",
                        Name: "Monique Hamill",
                        SchemaArn: "quae",
                    },
                },
                shared.ObjectAttributeUpdate{
                    ObjectAttributeAction: &shared.ObjectAttributeAction{
                        ObjectAttributeActionType: shared.UpdateActionTypeEnumDelete.ToPointer(),
                        ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("placeat"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-09-18T10:40:00.413Z"),
                            NumberValue: sdk.String("sapiente"),
                            StringValue: sdk.String("saepe"),
                        },
                    },
                    ObjectAttributeKey: &shared.AttributeKey{
                        FacetName: "delectus",
                        Name: "Jeremiah Runolfsdottir",
                        SchemaArn: "doloribus",
                    },
                },
                shared.ObjectAttributeUpdate{
                    ObjectAttributeAction: &shared.ObjectAttributeAction{
                        ObjectAttributeActionType: shared.UpdateActionTypeEnumCreateOrUpdate.ToPointer(),
                        ObjectAttributeUpdateValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("officiis"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2021-06-21T11:58:27.723Z"),
                            NumberValue: sdk.String("quis"),
                            StringValue: sdk.String("enim"),
                        },
                    },
                    ObjectAttributeKey: &shared.AttributeKey{
                        FacetName: "eum",
                        Name: "Ms. Desiree Douglas",
                        SchemaArn: "asperiores",
                    },
                },
            },
            ObjectReference: operations.UpdateObjectAttributesRequestBodyObjectReference{
                Selector: sdk.String("recusandae"),
            },
        },
        XAmzAlgorithm: sdk.String("voluptates"),
        XAmzContentSha256: sdk.String("praesentium"),
        XAmzCredential: sdk.String("dicta"),
        XAmzDate: sdk.String("fugit"),
        XAmzSecurityToken: sdk.String("sit"),
        XAmzSignature: sdk.String("aliquid"),
        XAmzSignedHeaders: sdk.String("necessitatibus"),
        XAmzDataPartition: "sed",
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
            Name: "Ralph Dooley",
        },
        XAmzAlgorithm: sdk.String("aliquam"),
        XAmzContentSha256: sdk.String("deserunt"),
        XAmzCredential: sdk.String("modi"),
        XAmzDate: sdk.String("sunt"),
        XAmzSecurityToken: sdk.String("impedit"),
        XAmzSignature: sdk.String("eius"),
        XAmzSignedHeaders: sdk.String("voluptatum"),
        XAmzDataPartition: "ipsa",
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

Updates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

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
                    Action: shared.UpdateActionTypeEnumCreateOrUpdate,
                    Attribute: shared.TypedLinkAttributeDefinition{
                        DefaultValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("repellat"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-12-02T16:42:16.559Z"),
                            NumberValue: sdk.String("sequi"),
                            StringValue: sdk.String("fugit"),
                        },
                        IsImmutable: sdk.Bool(false),
                        Name: "Moses Beatty Jr.",
                        RequiredBehavior: shared.RequiredAttributeBehaviorEnumRequiredAlways,
                        Rules: map[string]shared.Rule{
                            "enim": shared.Rule{
                                Parameters: map[string]string{
                                    "magnam": "delectus",
                                },
                                Type: shared.RuleTypeEnumNumberComparison.ToPointer(),
                            },
                            "optio": shared.Rule{
                                Parameters: map[string]string{
                                    "ex": "repellat",
                                    "quae": "deleniti",
                                    "expedita": "hic",
                                    "excepturi": "aliquid",
                                },
                                Type: shared.RuleTypeEnumBinaryLength.ToPointer(),
                            },
                            "beatae": shared.Rule{
                                Parameters: map[string]string{
                                    "ea": "animi",
                                    "dolore": "tenetur",
                                    "dignissimos": "esse",
                                },
                                Type: shared.RuleTypeEnumStringFromSet.ToPointer(),
                            },
                            "laudantium": shared.Rule{
                                Parameters: map[string]string{
                                    "eveniet": "earum",
                                    "velit": "officiis",
                                },
                                Type: shared.RuleTypeEnumNumberComparison.ToPointer(),
                            },
                        },
                        Type: shared.FacetAttributeTypeEnumDatetime,
                    },
                },
                shared.TypedLinkFacetAttributeUpdate{
                    Action: shared.UpdateActionTypeEnumDelete,
                    Attribute: shared.TypedLinkAttributeDefinition{
                        DefaultValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("dignissimos"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-11-13T22:25:09.106Z"),
                            NumberValue: sdk.String("impedit"),
                            StringValue: sdk.String("aliquid"),
                        },
                        IsImmutable: sdk.Bool(false),
                        Name: "Flora Erdman",
                        RequiredBehavior: shared.RequiredAttributeBehaviorEnumRequiredAlways,
                        Rules: map[string]shared.Rule{
                            "eveniet": shared.Rule{
                                Parameters: map[string]string{
                                    "expedita": "libero",
                                },
                                Type: shared.RuleTypeEnumStringFromSet.ToPointer(),
                            },
                            "illo": shared.Rule{
                                Parameters: map[string]string{
                                    "quos": "temporibus",
                                    "sint": "iusto",
                                    "enim": "accusamus",
                                    "aperiam": "voluptates",
                                },
                                Type: shared.RuleTypeEnumStringFromSet.ToPointer(),
                            },
                            "tempora": shared.Rule{
                                Parameters: map[string]string{
                                    "omnis": "illum",
                                },
                                Type: shared.RuleTypeEnumStringFromSet.ToPointer(),
                            },
                        },
                        Type: shared.FacetAttributeTypeEnumVariant,
                    },
                },
                shared.TypedLinkFacetAttributeUpdate{
                    Action: shared.UpdateActionTypeEnumDelete,
                    Attribute: shared.TypedLinkAttributeDefinition{
                        DefaultValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("modi"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-09-11T23:53:23.627Z"),
                            NumberValue: sdk.String("aliquam"),
                            StringValue: sdk.String("labore"),
                        },
                        IsImmutable: sdk.Bool(false),
                        Name: "Ms. Jimmy Turcotte",
                        RequiredBehavior: shared.RequiredAttributeBehaviorEnumNotRequired,
                        Rules: map[string]shared.Rule{
                            "cumque": shared.Rule{
                                Parameters: map[string]string{
                                    "dolorum": "deserunt",
                                    "ad": "reiciendis",
                                },
                                Type: shared.RuleTypeEnumBinaryLength.ToPointer(),
                            },
                            "porro": shared.Rule{
                                Parameters: map[string]string{
                                    "nobis": "quibusdam",
                                    "omnis": "aut",
                                    "ipsam": "officia",
                                },
                                Type: shared.RuleTypeEnumStringFromSet.ToPointer(),
                            },
                            "reprehenderit": shared.Rule{
                                Parameters: map[string]string{
                                    "necessitatibus": "accusantium",
                                },
                                Type: shared.RuleTypeEnumNumberComparison.ToPointer(),
                            },
                            "nisi": shared.Rule{
                                Parameters: map[string]string{
                                    "quia": "laudantium",
                                    "sed": "odit",
                                },
                                Type: shared.RuleTypeEnumNumberComparison.ToPointer(),
                            },
                        },
                        Type: shared.FacetAttributeTypeEnumDatetime,
                    },
                },
                shared.TypedLinkFacetAttributeUpdate{
                    Action: shared.UpdateActionTypeEnumCreateOrUpdate,
                    Attribute: shared.TypedLinkAttributeDefinition{
                        DefaultValue: &shared.TypedAttributeValue{
                            BinaryValue: sdk.String("repellendus"),
                            BooleanValue: sdk.Bool(false),
                            DatetimeValue: types.MustTimeFromString("2022-12-10T20:42:52.039Z"),
                            NumberValue: sdk.String("sint"),
                            StringValue: sdk.String("dolore"),
                        },
                        IsImmutable: sdk.Bool(false),
                        Name: "Sharon Raynor",
                        RequiredBehavior: shared.RequiredAttributeBehaviorEnumNotRequired,
                        Rules: map[string]shared.Rule{
                            "delectus": shared.Rule{
                                Parameters: map[string]string{
                                    "voluptatum": "iusto",
                                    "quod": "voluptatibus",
                                    "voluptas": "non",
                                },
                                Type: shared.RuleTypeEnumNumberComparison.ToPointer(),
                            },
                            "laborum": shared.Rule{
                                Parameters: map[string]string{
                                    "doloribus": "animi",
                                    "recusandae": "corporis",
                                },
                                Type: shared.RuleTypeEnumNumberComparison.ToPointer(),
                            },
                        },
                        Type: shared.FacetAttributeTypeEnumVariant,
                    },
                },
            },
            IdentityAttributeOrder: []string{
                "maiores",
                "laboriosam",
                "voluptatem",
            },
            Name: "Dr. Johnny Cassin Sr.",
        },
        XAmzAlgorithm: sdk.String("amet"),
        XAmzContentSha256: sdk.String("rerum"),
        XAmzCredential: sdk.String("in"),
        XAmzDate: sdk.String("nostrum"),
        XAmzSecurityToken: sdk.String("temporibus"),
        XAmzSignature: sdk.String("ratione"),
        XAmzSignedHeaders: sdk.String("dolor"),
        XAmzDataPartition: "nisi",
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
            DirectoryArn: "dignissimos",
            DryRun: sdk.Bool(false),
            PublishedSchemaArn: "reiciendis",
        },
        XAmzAlgorithm: sdk.String("itaque"),
        XAmzContentSha256: sdk.String("vitae"),
        XAmzCredential: sdk.String("est"),
        XAmzDate: sdk.String("accusantium"),
        XAmzSecurityToken: sdk.String("quod"),
        XAmzSignature: sdk.String("minus"),
        XAmzSignedHeaders: sdk.String("quos"),
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
            DevelopmentSchemaArn: "possimus",
            DryRun: sdk.Bool(false),
            MinorVersion: "maiores",
            PublishedSchemaArn: "odio",
        },
        XAmzAlgorithm: sdk.String("provident"),
        XAmzContentSha256: sdk.String("sapiente"),
        XAmzCredential: sdk.String("aperiam"),
        XAmzDate: sdk.String("similique"),
        XAmzSecurityToken: sdk.String("nesciunt"),
        XAmzSignature: sdk.String("provident"),
        XAmzSignedHeaders: sdk.String("ex"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpgradePublishedSchemaResponse != nil {
        // handle response
    }
}
```
