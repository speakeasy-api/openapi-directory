# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/amazonaws.com/clouddirectory/2017-01-11/go
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
    res, err := s.AddFacetToObject(ctx, operations.AddFacetToObjectRequest{
        RequestBody: operations.AddFacetToObjectRequestBody{
            ObjectAttributeList: []shared.AttributeKeyAndValue{
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "provident",
                        Name: "Ellis Mitchell",
                        SchemaArn: "illum",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: sdk.String("vel"),
                        BooleanValue: sdk.Bool(false),
                        DatetimeValue: types.MustTimeFromString("2021-09-16T11:56:06.019Z"),
                        NumberValue: sdk.String("suscipit"),
                        StringValue: sdk.String("iure"),
                    },
                },
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "magnam",
                        Name: "Larry Windler",
                        SchemaArn: "molestiae",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: sdk.String("minus"),
                        BooleanValue: sdk.Bool(false),
                        DatetimeValue: types.MustTimeFromString("2021-05-31T20:38:28.793Z"),
                        NumberValue: sdk.String("iusto"),
                        StringValue: sdk.String("excepturi"),
                    },
                },
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "nisi",
                        Name: "Jake Bernier MD",
                        SchemaArn: "perferendis",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: sdk.String("ipsam"),
                        BooleanValue: sdk.Bool(false),
                        DatetimeValue: types.MustTimeFromString("2020-02-17T21:57:45.117Z"),
                        NumberValue: sdk.String("quo"),
                        StringValue: sdk.String("odit"),
                    },
                },
            },
            ObjectReference: operations.AddFacetToObjectRequestBodyObjectReference{
                Selector: sdk.String("at"),
            },
            SchemaFacet: operations.AddFacetToObjectRequestBodySchemaFacet{
                FacetName: sdk.String("at"),
                SchemaArn: sdk.String("maiores"),
            },
        },
        XAmzAlgorithm: sdk.String("molestiae"),
        XAmzContentSha256: sdk.String("quod"),
        XAmzCredential: sdk.String("quod"),
        XAmzDate: sdk.String("esse"),
        XAmzSecurityToken: sdk.String("totam"),
        XAmzSignature: sdk.String("porro"),
        XAmzSignedHeaders: sdk.String("dolorum"),
        XAmzDataPartition: "dicta",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddFacetToObjectResponse != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [AddFacetToObject](docs/sdk/README.md#addfacettoobject) - Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.
* [ApplySchema](docs/sdk/README.md#applyschema) - Copies the input published schema, at the specified version, into the <a>Directory</a> with the same name and version as that of the published schema.
* [AttachObject](docs/sdk/README.md#attachobject) - <p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>
* [AttachPolicy](docs/sdk/README.md#attachpolicy) - Attaches a policy object to a regular object. An object can have a limited number of attached policies.
* [AttachToIndex](docs/sdk/README.md#attachtoindex) - Attaches the specified object to the specified index.
* [AttachTypedLink](docs/sdk/README.md#attachtypedlink) - Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [BatchRead](docs/sdk/README.md#batchread) - Performs all the read operations in a batch. 
* [BatchWrite](docs/sdk/README.md#batchwrite) - Performs all the write operations in a batch. Either all the operations succeed or none.
* [CreateDirectory](docs/sdk/README.md#createdirectory) - <p>Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.</p> <p>You can also quickly create a directory using a managed schema, called the <code>QuickStartSchema</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_managed.html">Managed Schema</a> in the <i>Amazon Cloud Directory Developer Guide</i>.</p>
* [CreateFacet](docs/sdk/README.md#createfacet) - Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.
* [CreateIndex](docs/sdk/README.md#createindex) - Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.html">Indexing and search</a> for more information.
* [CreateObject](docs/sdk/README.md#createobject) - Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. 
* [CreateSchema](docs/sdk/README.md#createschema) - <p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>
* [CreateTypedLinkFacet](docs/sdk/README.md#createtypedlinkfacet) - Creates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [DeleteDirectory](docs/sdk/README.md#deletedirectory) - Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.
* [DeleteFacet](docs/sdk/README.md#deletefacet) - Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s that are associated with the facet will be deleted. Only development schema facets are allowed deletion.
* [DeleteObject](docs/sdk/README.md#deleteobject) - Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.
* [DeleteSchema](docs/sdk/README.md#deleteschema) - Deletes a given schema. Schemas in a development and published state can only be deleted. 
* [DeleteTypedLinkFacet](docs/sdk/README.md#deletetypedlinkfacet) - Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [DetachFromIndex](docs/sdk/README.md#detachfromindex) - Detaches the specified object from the specified index.
* [DetachObject](docs/sdk/README.md#detachobject) - Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.
* [DetachPolicy](docs/sdk/README.md#detachpolicy) - Detaches a policy from an object.
* [DetachTypedLink](docs/sdk/README.md#detachtypedlink) - Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [DisableDirectory](docs/sdk/README.md#disabledirectory) - Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.
* [EnableDirectory](docs/sdk/README.md#enabledirectory) - Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.
* [GetAppliedSchemaVersion](docs/sdk/README.md#getappliedschemaversion) - Returns current applied schema version ARN, including the minor version in use.
* [GetDirectory](docs/sdk/README.md#getdirectory) - Retrieves metadata about a directory.
* [GetFacet](docs/sdk/README.md#getfacet) - Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema facets -- published, development, or applied.
* [GetLinkAttributes](docs/sdk/README.md#getlinkattributes) - Retrieves attributes that are associated with a typed link.
* [GetObjectAttributes](docs/sdk/README.md#getobjectattributes) - Retrieves attributes within a facet that are associated with an object.
* [GetObjectInformation](docs/sdk/README.md#getobjectinformation) - Retrieves metadata about an object.
* [GetSchemaAsJSON](docs/sdk/README.md#getschemaasjson) - Retrieves a JSON representation of the schema. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.
* [GetTypedLinkFacetInformation](docs/sdk/README.md#gettypedlinkfacetinformation) - Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [ListAppliedSchemaArns](docs/sdk/README.md#listappliedschemaarns) - Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.
* [ListAttachedIndices](docs/sdk/README.md#listattachedindices) - Lists indices attached to the specified object.
* [ListDevelopmentSchemaArns](docs/sdk/README.md#listdevelopmentschemaarns) - Retrieves each Amazon Resource Name (ARN) of schemas in the development state.
* [ListDirectories](docs/sdk/README.md#listdirectories) - Lists directories created within an account.
* [ListFacetAttributes](docs/sdk/README.md#listfacetattributes) - Retrieves attributes attached to the facet.
* [ListFacetNames](docs/sdk/README.md#listfacetnames) - Retrieves the names of facets that exist in a schema.
* [ListIncomingTypedLinks](docs/sdk/README.md#listincomingtypedlinks) - Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [ListIndex](docs/sdk/README.md#listindex) - Lists objects attached to the specified index.
* [ListManagedSchemaArns](docs/sdk/README.md#listmanagedschemaarns) - Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.
* [ListObjectAttributes](docs/sdk/README.md#listobjectattributes) - Lists all attributes that are associated with an object. 
* [ListObjectChildren](docs/sdk/README.md#listobjectchildren) - Returns a paginated list of child objects that are associated with a given object.
* [ListObjectParentPaths](docs/sdk/README.md#listobjectparentpaths) - <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>
* [ListObjectParents](docs/sdk/README.md#listobjectparents) - Lists parent objects that are associated with a given object in pagination fashion.
* [ListObjectPolicies](docs/sdk/README.md#listobjectpolicies) - Returns policies attached to an object in pagination fashion.
* [ListOutgoingTypedLinks](docs/sdk/README.md#listoutgoingtypedlinks) - Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [ListPolicyAttachments](docs/sdk/README.md#listpolicyattachments) - Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.
* [ListPublishedSchemaArns](docs/sdk/README.md#listpublishedschemaarns) - Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.
* [ListTagsForResource](docs/sdk/README.md#listtagsforresource) - Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.
* [ListTypedLinkFacetAttributes](docs/sdk/README.md#listtypedlinkfacetattributes) - Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [ListTypedLinkFacetNames](docs/sdk/README.md#listtypedlinkfacetnames) - Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [LookupPolicy](docs/sdk/README.md#lookuppolicy) - Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.
* [PublishSchema](docs/sdk/README.md#publishschema) - Publishes a development schema with a major version and a recommended minor version.
* [PutSchemaFromJSON](docs/sdk/README.md#putschemafromjson) - Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.
* [RemoveFacetFromObject](docs/sdk/README.md#removefacetfromobject) - Removes the specified facet from the specified object.
* [TagResource](docs/sdk/README.md#tagresource) - An API operation for adding tags to a resource.
* [UntagResource](docs/sdk/README.md#untagresource) - An API operation for removing tags from a resource.
* [UpdateFacet](docs/sdk/README.md#updatefacet) - <p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>
* [UpdateLinkAttributes](docs/sdk/README.md#updatelinkattributes) - Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.
* [UpdateObjectAttributes](docs/sdk/README.md#updateobjectattributes) - Updates a given object's attributes.
* [UpdateSchema](docs/sdk/README.md#updateschema) - Updates the schema name with a new name. Only development schema names can be updated.
* [UpdateTypedLinkFacet](docs/sdk/README.md#updatetypedlinkfacet) - Updates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [UpgradeAppliedSchema](docs/sdk/README.md#upgradeappliedschema) - Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.
* [UpgradePublishedSchema](docs/sdk/README.md#upgradepublishedschema) - Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
