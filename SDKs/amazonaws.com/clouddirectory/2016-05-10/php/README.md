# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AddFacetToObjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\AddFacetToObjectRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AttributeKeyAndValue;
use \OpenAPI\OpenAPI\Models\Shared\AttributeKey;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValue;
use \OpenAPI\OpenAPI\Models\Operations\AddFacetToObjectRequestBodyObjectReference;
use \OpenAPI\OpenAPI\Models\Operations\AddFacetToObjectRequestBodySchemaFacet;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AddFacetToObjectRequest();
    $request->requestBody = new AddFacetToObjectRequestBody();
    $request->requestBody->objectAttributeList = [
        new AttributeKeyAndValue(),
        new AttributeKeyAndValue(),
        new AttributeKeyAndValue(),
    ];
    $request->requestBody->objectReference = new AddFacetToObjectRequestBodyObjectReference();
    $request->requestBody->objectReference->selector = 'provident';
    $request->requestBody->schemaFacet = new AddFacetToObjectRequestBodySchemaFacet();
    $request->requestBody->schemaFacet->facetName = 'distinctio';
    $request->requestBody->schemaFacet->schemaArn = 'quibusdam';
    $request->xAmzAlgorithm = 'unde';
    $request->xAmzContentSha256 = 'nulla';
    $request->xAmzCredential = 'corrupti';
    $request->xAmzDate = 'illum';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'error';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzDataPartition = 'suscipit';

    $response = $sdk->addFacetToObject($request);

    if ($response->addFacetToObjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations

### [SDK](docs/sdk/README.md)

* [addFacetToObject](docs/sdk/README.md#addfacettoobject) - Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.
* [applySchema](docs/sdk/README.md#applyschema) - Copies the input published schema, at the specified version, into the <a>Directory</a> with the same name and version as that of the published schema.
* [attachObject](docs/sdk/README.md#attachobject) - <p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>
* [attachPolicy](docs/sdk/README.md#attachpolicy) - Attaches a policy object to a regular object. An object can have a limited number of attached policies.
* [attachToIndex](docs/sdk/README.md#attachtoindex) - Attaches the specified object to the specified index.
* [attachTypedLink](docs/sdk/README.md#attachtypedlink) - Attaches a typed link to a specified source and target object. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [batchRead](docs/sdk/README.md#batchread) - Performs all the read operations in a batch. 
* [batchWrite](docs/sdk/README.md#batchwrite) - Performs all the write operations in a batch. Either all the operations succeed or none.
* [createDirectory](docs/sdk/README.md#createdirectory) - Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.
* [createFacet](docs/sdk/README.md#createfacet) - Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.
* [createIndex](docs/sdk/README.md#createindex) - Creates an index object. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_indexing.html">Indexing</a> for more information.
* [createObject](docs/sdk/README.md#createobject) - Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. 
* [createSchema](docs/sdk/README.md#createschema) - <p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>
* [createTypedLinkFacet](docs/sdk/README.md#createtypedlinkfacet) - Creates a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [deleteDirectory](docs/sdk/README.md#deletedirectory) - Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.
* [deleteFacet](docs/sdk/README.md#deletefacet) - Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s that are associated with the facet will be deleted. Only development schema facets are allowed deletion.
* [deleteObject](docs/sdk/README.md#deleteobject) - Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted.
* [deleteSchema](docs/sdk/README.md#deleteschema) - Deletes a given schema. Schemas in a development and published state can only be deleted. 
* [deleteTypedLinkFacet](docs/sdk/README.md#deletetypedlinkfacet) - Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [detachFromIndex](docs/sdk/README.md#detachfromindex) - Detaches the specified object from the specified index.
* [detachObject](docs/sdk/README.md#detachobject) - Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.
* [detachPolicy](docs/sdk/README.md#detachpolicy) - Detaches a policy from an object.
* [detachTypedLink](docs/sdk/README.md#detachtypedlink) - Detaches a typed link from a specified source and target object. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [disableDirectory](docs/sdk/README.md#disabledirectory) - Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.
* [enableDirectory](docs/sdk/README.md#enabledirectory) - Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.
* [getAppliedSchemaVersion](docs/sdk/README.md#getappliedschemaversion) - Returns current applied schema version ARN, including the minor version in use.
* [getDirectory](docs/sdk/README.md#getdirectory) - Retrieves metadata about a directory.
* [getFacet](docs/sdk/README.md#getfacet) - Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema facets -- published, development, or applied.
* [getLinkAttributes](docs/sdk/README.md#getlinkattributes) - Retrieves attributes that are associated with a typed link.
* [getObjectAttributes](docs/sdk/README.md#getobjectattributes) - Retrieves attributes within a facet that are associated with an object.
* [getObjectInformation](docs/sdk/README.md#getobjectinformation) - Retrieves metadata about an object.
* [getSchemaAsJson](docs/sdk/README.md#getschemaasjson) - Retrieves a JSON representation of the schema. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_schemas.html#jsonformat">JSON Schema Format</a> for more information.
* [getTypedLinkFacetInformation](docs/sdk/README.md#gettypedlinkfacetinformation) - Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [listAppliedSchemaArns](docs/sdk/README.md#listappliedschemaarns) - Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.
* [listAttachedIndices](docs/sdk/README.md#listattachedindices) - Lists indices attached to the specified object.
* [listDevelopmentSchemaArns](docs/sdk/README.md#listdevelopmentschemaarns) - Retrieves each Amazon Resource Name (ARN) of schemas in the development state.
* [listDirectories](docs/sdk/README.md#listdirectories) - Lists directories created within an account.
* [listFacetAttributes](docs/sdk/README.md#listfacetattributes) - Retrieves attributes attached to the facet.
* [listFacetNames](docs/sdk/README.md#listfacetnames) - Retrieves the names of facets that exist in a schema.
* [listIncomingTypedLinks](docs/sdk/README.md#listincomingtypedlinks) - Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [listIndex](docs/sdk/README.md#listindex) - Lists objects attached to the specified index.
* [listObjectAttributes](docs/sdk/README.md#listobjectattributes) - Lists all attributes that are associated with an object. 
* [listObjectChildren](docs/sdk/README.md#listobjectchildren) - Returns a paginated list of child objects that are associated with a given object.
* [listObjectParentPaths](docs/sdk/README.md#listobjectparentpaths) - <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#dirstructure">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>
* [listObjectParents](docs/sdk/README.md#listobjectparents) - Lists parent objects that are associated with a given object in pagination fashion.
* [listObjectPolicies](docs/sdk/README.md#listobjectpolicies) - Returns policies attached to an object in pagination fashion.
* [listOutgoingTypedLinks](docs/sdk/README.md#listoutgoingtypedlinks) - Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [listPolicyAttachments](docs/sdk/README.md#listpolicyattachments) - Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.
* [listPublishedSchemaArns](docs/sdk/README.md#listpublishedschemaarns) - Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.
* [listTagsForResource](docs/sdk/README.md#listtagsforresource) - Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.
* [listTypedLinkFacetAttributes](docs/sdk/README.md#listtypedlinkfacetattributes) - Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [listTypedLinkFacetNames](docs/sdk/README.md#listtypedlinkfacetnames) - Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [lookupPolicy](docs/sdk/README.md#lookuppolicy) - Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#policies">Policies</a>.
* [publishSchema](docs/sdk/README.md#publishschema) - Publishes a development schema with a major version and a recommended minor version.
* [putSchemaFromJson](docs/sdk/README.md#putschemafromjson) - Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_schemas.html#jsonformat">JSON Schema Format</a> for more information.
* [removeFacetFromObject](docs/sdk/README.md#removefacetfromobject) - Removes the specified facet from the specified object.
* [tagResource](docs/sdk/README.md#tagresource) - An API operation for adding tags to a resource.
* [untagResource](docs/sdk/README.md#untagresource) - An API operation for removing tags from a resource.
* [updateFacet](docs/sdk/README.md#updatefacet) - <p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>
* [updateLinkAttributes](docs/sdk/README.md#updatelinkattributes) - Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.
* [updateObjectAttributes](docs/sdk/README.md#updateobjectattributes) - Updates a given object's attributes.
* [updateSchema](docs/sdk/README.md#updateschema) - Updates the schema name with a new name. Only development schema names can be updated.
* [updateTypedLinkFacet](docs/sdk/README.md#updatetypedlinkfacet) - Updates a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [upgradeAppliedSchema](docs/sdk/README.md#upgradeappliedschema) - Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.
* [upgradePublishedSchema](docs/sdk/README.md#upgradepublishedschema) - Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
