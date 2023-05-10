# SDK

## Overview

<fullname>Amazon Cloud Directory</fullname> <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the development and management of cloud-scale web, mobile, and IoT applications. This guide describes the Cloud Directory operations that you can call programmatically and includes detailed information on data types and errors. For information about Cloud Directory features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory Service</a> and the <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is_cloud_directory.html">Amazon Cloud Directory Developer Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/clouddirectory/>
### Available Operations

* [addFacetToObject](#addfacettoobject) - Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.
* [applySchema](#applyschema) - Copies the input published schema, at the specified version, into the <a>Directory</a> with the same name and version as that of the published schema.
* [attachObject](#attachobject) - <p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>
* [attachPolicy](#attachpolicy) - Attaches a policy object to a regular object. An object can have a limited number of attached policies.
* [attachToIndex](#attachtoindex) - Attaches the specified object to the specified index.
* [attachTypedLink](#attachtypedlink) - Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [batchRead](#batchread) - Performs all the read operations in a batch. 
* [batchWrite](#batchwrite) - Performs all the write operations in a batch. Either all the operations succeed or none.
* [createDirectory](#createdirectory) - <p>Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.</p> <p>You can also quickly create a directory using a managed schema, called the <code>QuickStartSchema</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_managed.html">Managed Schema</a> in the <i>Amazon Cloud Directory Developer Guide</i>.</p>
* [createFacet](#createfacet) - Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.
* [createIndex](#createindex) - Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.html">Indexing and search</a> for more information.
* [createObject](#createobject) - Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. 
* [createSchema](#createschema) - <p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>
* [createTypedLinkFacet](#createtypedlinkfacet) - Creates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [deleteDirectory](#deletedirectory) - Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.
* [deleteFacet](#deletefacet) - Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s that are associated with the facet will be deleted. Only development schema facets are allowed deletion.
* [deleteObject](#deleteobject) - Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.
* [deleteSchema](#deleteschema) - Deletes a given schema. Schemas in a development and published state can only be deleted. 
* [deleteTypedLinkFacet](#deletetypedlinkfacet) - Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [detachFromIndex](#detachfromindex) - Detaches the specified object from the specified index.
* [detachObject](#detachobject) - Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.
* [detachPolicy](#detachpolicy) - Detaches a policy from an object.
* [detachTypedLink](#detachtypedlink) - Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [disableDirectory](#disabledirectory) - Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.
* [enableDirectory](#enabledirectory) - Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.
* [getAppliedSchemaVersion](#getappliedschemaversion) - Returns current applied schema version ARN, including the minor version in use.
* [getDirectory](#getdirectory) - Retrieves metadata about a directory.
* [getFacet](#getfacet) - Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema facets -- published, development, or applied.
* [getLinkAttributes](#getlinkattributes) - Retrieves attributes that are associated with a typed link.
* [getObjectAttributes](#getobjectattributes) - Retrieves attributes within a facet that are associated with an object.
* [getObjectInformation](#getobjectinformation) - Retrieves metadata about an object.
* [getSchemaAsJson](#getschemaasjson) - Retrieves a JSON representation of the schema. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.
* [getTypedLinkFacetInformation](#gettypedlinkfacetinformation) - Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [listAppliedSchemaArns](#listappliedschemaarns) - Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.
* [listAttachedIndices](#listattachedindices) - Lists indices attached to the specified object.
* [listDevelopmentSchemaArns](#listdevelopmentschemaarns) - Retrieves each Amazon Resource Name (ARN) of schemas in the development state.
* [listDirectories](#listdirectories) - Lists directories created within an account.
* [listFacetAttributes](#listfacetattributes) - Retrieves attributes attached to the facet.
* [listFacetNames](#listfacetnames) - Retrieves the names of facets that exist in a schema.
* [listIncomingTypedLinks](#listincomingtypedlinks) - Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [listIndex](#listindex) - Lists objects attached to the specified index.
* [listManagedSchemaArns](#listmanagedschemaarns) - Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.
* [listObjectAttributes](#listobjectattributes) - Lists all attributes that are associated with an object. 
* [listObjectChildren](#listobjectchildren) - Returns a paginated list of child objects that are associated with a given object.
* [listObjectParentPaths](#listobjectparentpaths) - <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>
* [listObjectParents](#listobjectparents) - Lists parent objects that are associated with a given object in pagination fashion.
* [listObjectPolicies](#listobjectpolicies) - Returns policies attached to an object in pagination fashion.
* [listOutgoingTypedLinks](#listoutgoingtypedlinks) - Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [listPolicyAttachments](#listpolicyattachments) - Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.
* [listPublishedSchemaArns](#listpublishedschemaarns) - Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.
* [listTagsForResource](#listtagsforresource) - Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.
* [listTypedLinkFacetAttributes](#listtypedlinkfacetattributes) - Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [listTypedLinkFacetNames](#listtypedlinkfacetnames) - Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [lookupPolicy](#lookuppolicy) - Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.
* [publishSchema](#publishschema) - Publishes a development schema with a major version and a recommended minor version.
* [putSchemaFromJson](#putschemafromjson) - Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.
* [removeFacetFromObject](#removefacetfromobject) - Removes the specified facet from the specified object.
* [tagResource](#tagresource) - An API operation for adding tags to a resource.
* [untagResource](#untagresource) - An API operation for removing tags from a resource.
* [updateFacet](#updatefacet) - <p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>
* [updateLinkAttributes](#updatelinkattributes) - Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.
* [updateObjectAttributes](#updateobjectattributes) - Updates a given object's attributes.
* [updateSchema](#updateschema) - Updates the schema name with a new name. Only development schema names can be updated.
* [updateTypedLinkFacet](#updatetypedlinkfacet) - Updates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* [upgradeAppliedSchema](#upgradeappliedschema) - Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.
* [upgradePublishedSchema](#upgradepublishedschema) - Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.

## addFacetToObject

Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.

### Example Usage

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
    ];
    $request->requestBody->objectReference = new AddFacetToObjectRequestBodyObjectReference();
    $request->requestBody->objectReference->selector = 'magnam';
    $request->requestBody->schemaFacet = new AddFacetToObjectRequestBodySchemaFacet();
    $request->requestBody->schemaFacet->facetName = 'debitis';
    $request->requestBody->schemaFacet->schemaArn = 'ipsa';
    $request->xAmzAlgorithm = 'delectus';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'suscipit';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'minus';
    $request->xAmzSignature = 'placeat';
    $request->xAmzSignedHeaders = 'voluptatum';
    $request->xAmzDataPartition = 'iusto';

    $response = $sdk->sdk->addFacetToObject($request);

    if ($response->addFacetToObjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## applySchema

Copies the input published schema, at the specified version, into the <a>Directory</a> with the same name and version as that of the published schema.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ApplySchemaRequest;
use \OpenAPI\OpenAPI\Models\Operations\ApplySchemaRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ApplySchemaRequest();
    $request->requestBody = new ApplySchemaRequestBody();
    $request->requestBody->publishedSchemaArn = 'excepturi';
    $request->xAmzAlgorithm = 'nisi';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'temporibus';
    $request->xAmzDate = 'ab';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'veritatis';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzDataPartition = 'perferendis';

    $response = $sdk->sdk->applySchema($request);

    if ($response->applySchemaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## attachObject

<p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AttachObjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\AttachObjectRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AttachObjectRequestBodyChildReference;
use \OpenAPI\OpenAPI\Models\Operations\AttachObjectRequestBodyParentReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AttachObjectRequest();
    $request->requestBody = new AttachObjectRequestBody();
    $request->requestBody->childReference = new AttachObjectRequestBodyChildReference();
    $request->requestBody->childReference->selector = 'ipsam';
    $request->requestBody->linkName = 'repellendus';
    $request->requestBody->parentReference = new AttachObjectRequestBodyParentReference();
    $request->requestBody->parentReference->selector = 'sapiente';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'odit';
    $request->xAmzCredential = 'at';
    $request->xAmzDate = 'at';
    $request->xAmzSecurityToken = 'maiores';
    $request->xAmzSignature = 'molestiae';
    $request->xAmzSignedHeaders = 'quod';
    $request->xAmzDataPartition = 'quod';

    $response = $sdk->sdk->attachObject($request);

    if ($response->attachObjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## attachPolicy

Attaches a policy object to a regular object. An object can have a limited number of attached policies.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AttachPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\AttachPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AttachPolicyRequestBodyObjectReference;
use \OpenAPI\OpenAPI\Models\Operations\AttachPolicyRequestBodyPolicyReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AttachPolicyRequest();
    $request->requestBody = new AttachPolicyRequestBody();
    $request->requestBody->objectReference = new AttachPolicyRequestBodyObjectReference();
    $request->requestBody->objectReference->selector = 'esse';
    $request->requestBody->policyReference = new AttachPolicyRequestBodyPolicyReference();
    $request->requestBody->policyReference->selector = 'totam';
    $request->xAmzAlgorithm = 'porro';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'dicta';
    $request->xAmzDate = 'nam';
    $request->xAmzSecurityToken = 'officia';
    $request->xAmzSignature = 'occaecati';
    $request->xAmzSignedHeaders = 'fugit';
    $request->xAmzDataPartition = 'deleniti';

    $response = $sdk->sdk->attachPolicy($request);

    if ($response->attachPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## attachToIndex

Attaches the specified object to the specified index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AttachToIndexRequest;
use \OpenAPI\OpenAPI\Models\Operations\AttachToIndexRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\AttachToIndexRequestBodyIndexReference;
use \OpenAPI\OpenAPI\Models\Operations\AttachToIndexRequestBodyTargetReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AttachToIndexRequest();
    $request->requestBody = new AttachToIndexRequestBody();
    $request->requestBody->indexReference = new AttachToIndexRequestBodyIndexReference();
    $request->requestBody->indexReference->selector = 'hic';
    $request->requestBody->targetReference = new AttachToIndexRequestBodyTargetReference();
    $request->requestBody->targetReference->selector = 'optio';
    $request->xAmzAlgorithm = 'totam';
    $request->xAmzContentSha256 = 'beatae';
    $request->xAmzCredential = 'commodi';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'modi';
    $request->xAmzSignature = 'qui';
    $request->xAmzSignedHeaders = 'impedit';
    $request->xAmzDataPartition = 'cum';

    $response = $sdk->sdk->attachToIndex($request);

    if ($response->attachToIndexResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## attachTypedLink

Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AttachTypedLinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\AttachTypedLinkRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AttributeNameAndValue;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValue;
use \OpenAPI\OpenAPI\Models\Operations\AttachTypedLinkRequestBodySourceObjectReference;
use \OpenAPI\OpenAPI\Models\Operations\AttachTypedLinkRequestBodyTargetObjectReference;
use \OpenAPI\OpenAPI\Models\Operations\AttachTypedLinkRequestBodyTypedLinkFacet;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AttachTypedLinkRequest();
    $request->requestBody = new AttachTypedLinkRequestBody();
    $request->requestBody->attributes = [
        new AttributeNameAndValue(),
        new AttributeNameAndValue(),
    ];
    $request->requestBody->sourceObjectReference = new AttachTypedLinkRequestBodySourceObjectReference();
    $request->requestBody->sourceObjectReference->selector = 'ipsum';
    $request->requestBody->targetObjectReference = new AttachTypedLinkRequestBodyTargetObjectReference();
    $request->requestBody->targetObjectReference->selector = 'excepturi';
    $request->requestBody->typedLinkFacet = new AttachTypedLinkRequestBodyTypedLinkFacet();
    $request->requestBody->typedLinkFacet->schemaArn = 'aspernatur';
    $request->requestBody->typedLinkFacet->typedLinkName = 'perferendis';
    $request->xAmzAlgorithm = 'ad';
    $request->xAmzContentSha256 = 'natus';
    $request->xAmzCredential = 'sed';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'dolor';
    $request->xAmzSignature = 'natus';
    $request->xAmzSignedHeaders = 'laboriosam';
    $request->xAmzDataPartition = 'hic';

    $response = $sdk->sdk->attachTypedLink($request);

    if ($response->attachTypedLinkResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchRead

Performs all the read operations in a batch. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchReadRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BatchReadOperation;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetLinkAttributes;
use \OpenAPI\OpenAPI\Models\Shared\TypedLinkSpecifier;
use \OpenAPI\OpenAPI\Models\Shared\AttributeNameAndValue;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\ObjectReference;
use \OpenAPI\OpenAPI\Models\Shared\TypedLinkSchemaAndFacetName;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetObjectAttributes;
use \OpenAPI\OpenAPI\Models\Shared\SchemaFacet;
use \OpenAPI\OpenAPI\Models\Shared\BatchGetObjectInformation;
use \OpenAPI\OpenAPI\Models\Shared\BatchListAttachedIndices;
use \OpenAPI\OpenAPI\Models\Shared\BatchListIncomingTypedLinks;
use \OpenAPI\OpenAPI\Models\Shared\TypedLinkAttributeRange;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValueRange;
use \OpenAPI\OpenAPI\Models\Shared\RangeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchListIndex;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAttributeRange;
use \OpenAPI\OpenAPI\Models\Shared\AttributeKey;
use \OpenAPI\OpenAPI\Models\Shared\BatchListObjectAttributes;
use \OpenAPI\OpenAPI\Models\Shared\BatchListObjectChildren;
use \OpenAPI\OpenAPI\Models\Shared\BatchListObjectParentPaths;
use \OpenAPI\OpenAPI\Models\Shared\BatchListObjectParents;
use \OpenAPI\OpenAPI\Models\Shared\BatchListObjectPolicies;
use \OpenAPI\OpenAPI\Models\Shared\BatchListOutgoingTypedLinks;
use \OpenAPI\OpenAPI\Models\Shared\BatchListPolicyAttachments;
use \OpenAPI\OpenAPI\Models\Shared\BatchLookupPolicy;
use \OpenAPI\OpenAPI\Models\Operations\BatchReadXAmzConsistencyLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchReadRequest();
    $request->requestBody = new BatchReadRequestBody();
    $request->requestBody->operations = [
        new BatchReadOperation(),
        new BatchReadOperation(),
        new BatchReadOperation(),
        new BatchReadOperation(),
    ];
    $request->xAmzAlgorithm = 'fuga';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'iste';
    $request->xAmzSecurityToken = 'iure';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzConsistencyLevel = BatchReadXAmzConsistencyLevelEnum::SERIALIZABLE;
    $request->xAmzDataPartition = 'ipsa';

    $response = $sdk->sdk->batchRead($request);

    if ($response->batchReadResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## batchWrite

Performs all the write operations in a batch. Either all the operations succeed or none.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BatchWriteRequest;
use \OpenAPI\OpenAPI\Models\Operations\BatchWriteRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\BatchWriteOperation;
use \OpenAPI\OpenAPI\Models\Shared\BatchAddFacetToObject;
use \OpenAPI\OpenAPI\Models\Shared\AttributeKeyAndValue;
use \OpenAPI\OpenAPI\Models\Shared\AttributeKey;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\ObjectReference;
use \OpenAPI\OpenAPI\Models\Shared\SchemaFacet;
use \OpenAPI\OpenAPI\Models\Shared\BatchAttachObject;
use \OpenAPI\OpenAPI\Models\Shared\BatchAttachPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BatchAttachToIndex;
use \OpenAPI\OpenAPI\Models\Shared\BatchAttachTypedLink;
use \OpenAPI\OpenAPI\Models\Shared\AttributeNameAndValue;
use \OpenAPI\OpenAPI\Models\Shared\TypedLinkSchemaAndFacetName;
use \OpenAPI\OpenAPI\Models\Shared\BatchCreateIndex;
use \OpenAPI\OpenAPI\Models\Shared\BatchCreateObject;
use \OpenAPI\OpenAPI\Models\Shared\BatchDeleteObject;
use \OpenAPI\OpenAPI\Models\Shared\BatchDetachFromIndex;
use \OpenAPI\OpenAPI\Models\Shared\BatchDetachObject;
use \OpenAPI\OpenAPI\Models\Shared\BatchDetachPolicy;
use \OpenAPI\OpenAPI\Models\Shared\BatchDetachTypedLink;
use \OpenAPI\OpenAPI\Models\Shared\TypedLinkSpecifier;
use \OpenAPI\OpenAPI\Models\Shared\BatchRemoveFacetFromObject;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateLinkAttributes;
use \OpenAPI\OpenAPI\Models\Shared\LinkAttributeUpdate;
use \OpenAPI\OpenAPI\Models\Shared\LinkAttributeAction;
use \OpenAPI\OpenAPI\Models\Shared\UpdateActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BatchUpdateObjectAttributes;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAttributeUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAttributeAction;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BatchWriteRequest();
    $request->requestBody = new BatchWriteRequestBody();
    $request->requestBody->operations = [
        new BatchWriteOperation(),
        new BatchWriteOperation(),
        new BatchWriteOperation(),
        new BatchWriteOperation(),
    ];
    $request->xAmzAlgorithm = 'est';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'laborum';
    $request->xAmzDate = 'dolores';
    $request->xAmzSecurityToken = 'dolorem';
    $request->xAmzSignature = 'corporis';
    $request->xAmzSignedHeaders = 'explicabo';
    $request->xAmzDataPartition = 'nobis';

    $response = $sdk->sdk->batchWrite($request);

    if ($response->batchWriteResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createDirectory

<p>Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.</p> <p>You can also quickly create a directory using a managed schema, called the <code>QuickStartSchema</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_managed.html">Managed Schema</a> in the <i>Amazon Cloud Directory Developer Guide</i>.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateDirectoryRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateDirectoryRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateDirectoryRequest();
    $request->requestBody = new CreateDirectoryRequestBody();
    $request->requestBody->name = 'Guadalupe Hickle';
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'iure';
    $request->xAmzCredential = 'culpa';
    $request->xAmzDate = 'doloribus';
    $request->xAmzSecurityToken = 'sapiente';
    $request->xAmzSignature = 'architecto';
    $request->xAmzSignedHeaders = 'mollitia';
    $request->xAmzDataPartition = 'dolorem';

    $response = $sdk->sdk->createDirectory($request);

    if ($response->createDirectoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createFacet

Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateFacetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateFacetRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\FacetAttribute;
use \OpenAPI\OpenAPI\Models\Shared\FacetAttributeDefinition;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FacetAttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FacetAttributeReference;
use \OpenAPI\OpenAPI\Models\Shared\RequiredAttributeBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFacetRequestBodyFacetStyleEnum;
use \OpenAPI\OpenAPI\Models\Operations\CreateFacetRequestBodyObjectTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateFacetRequest();
    $request->requestBody = new CreateFacetRequestBody();
    $request->requestBody->attributes = [
        new FacetAttribute(),
        new FacetAttribute(),
        new FacetAttribute(),
    ];
    $request->requestBody->facetStyle = CreateFacetRequestBodyFacetStyleEnum::STATIC;
    $request->requestBody->name = 'Shaun McCullough';
    $request->requestBody->objectType = CreateFacetRequestBodyObjectTypeEnum::LEAF_NODE;
    $request->xAmzAlgorithm = 'molestiae';
    $request->xAmzContentSha256 = 'velit';
    $request->xAmzCredential = 'error';
    $request->xAmzDate = 'quia';
    $request->xAmzSecurityToken = 'quis';
    $request->xAmzSignature = 'vitae';
    $request->xAmzSignedHeaders = 'laborum';
    $request->xAmzDataPartition = 'animi';

    $response = $sdk->sdk->createFacet($request);

    if ($response->createFacetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createIndex

Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.html">Indexing and search</a> for more information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateIndexRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateIndexRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AttributeKey;
use \OpenAPI\OpenAPI\Models\Operations\CreateIndexRequestBodyParentReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateIndexRequest();
    $request->requestBody = new CreateIndexRequestBody();
    $request->requestBody->isUnique = false;
    $request->requestBody->linkName = 'enim';
    $request->requestBody->orderedIndexedAttributeList = [
        new AttributeKey(),
    ];
    $request->requestBody->parentReference = new CreateIndexRequestBodyParentReference();
    $request->requestBody->parentReference->selector = 'quo';
    $request->xAmzAlgorithm = 'sequi';
    $request->xAmzContentSha256 = 'tenetur';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'possimus';
    $request->xAmzSignature = 'aut';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzDataPartition = 'error';

    $response = $sdk->sdk->createIndex($request);

    if ($response->createIndexResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createObject

Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateObjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateObjectRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\AttributeKeyAndValue;
use \OpenAPI\OpenAPI\Models\Shared\AttributeKey;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValue;
use \OpenAPI\OpenAPI\Models\Operations\CreateObjectRequestBodyParentReference;
use \OpenAPI\OpenAPI\Models\Shared\SchemaFacet;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateObjectRequest();
    $request->requestBody = new CreateObjectRequestBody();
    $request->requestBody->linkName = 'temporibus';
    $request->requestBody->objectAttributeList = [
        new AttributeKeyAndValue(),
        new AttributeKeyAndValue(),
        new AttributeKeyAndValue(),
    ];
    $request->requestBody->parentReference = new CreateObjectRequestBodyParentReference();
    $request->requestBody->parentReference->selector = 'quasi';
    $request->requestBody->schemaFacets = [
        new SchemaFacet(),
        new SchemaFacet(),
        new SchemaFacet(),
        new SchemaFacet(),
    ];
    $request->xAmzAlgorithm = 'voluptatibus';
    $request->xAmzContentSha256 = 'vero';
    $request->xAmzCredential = 'nihil';
    $request->xAmzDate = 'praesentium';
    $request->xAmzSecurityToken = 'voluptatibus';
    $request->xAmzSignature = 'ipsa';
    $request->xAmzSignedHeaders = 'omnis';
    $request->xAmzDataPartition = 'voluptate';

    $response = $sdk->sdk->createObject($request);

    if ($response->createObjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createSchema

<p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateSchemaRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateSchemaRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateSchemaRequest();
    $request->requestBody = new CreateSchemaRequestBody();
    $request->requestBody->name = 'Thomas Batz';
    $request->xAmzAlgorithm = 'maiores';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'corporis';
    $request->xAmzDate = 'dolore';
    $request->xAmzSecurityToken = 'iusto';
    $request->xAmzSignature = 'dicta';
    $request->xAmzSignedHeaders = 'harum';

    $response = $sdk->sdk->createSchema($request);

    if ($response->createSchemaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createTypedLinkFacet

Creates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateTypedLinkFacetRequest;
use \OpenAPI\OpenAPI\Models\Operations\CreateTypedLinkFacetRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\CreateTypedLinkFacetRequestBodyFacet;
use \OpenAPI\OpenAPI\Models\Shared\TypedLinkAttributeDefinition;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\RequiredAttributeBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FacetAttributeTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateTypedLinkFacetRequest();
    $request->requestBody = new CreateTypedLinkFacetRequestBody();
    $request->requestBody->facet = new CreateTypedLinkFacetRequestBodyFacet();
    $request->requestBody->facet->attributes = [
        new TypedLinkAttributeDefinition(),
        new TypedLinkAttributeDefinition(),
    ];
    $request->requestBody->facet->identityAttributeOrder = [
        'commodi',
        'repudiandae',
        'quae',
        'ipsum',
    ];
    $request->requestBody->facet->name = 'Virgil Mante';
    $request->xAmzAlgorithm = 'praesentium';
    $request->xAmzContentSha256 = 'rem';
    $request->xAmzCredential = 'voluptates';
    $request->xAmzDate = 'quasi';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'veritatis';
    $request->xAmzDataPartition = 'itaque';

    $response = $sdk->sdk->createTypedLinkFacet($request);

    if ($response->createTypedLinkFacetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteDirectory

Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteDirectoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteDirectoryRequest();
    $request->xAmzAlgorithm = 'incidunt';
    $request->xAmzContentSha256 = 'enim';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'quibusdam';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'deserunt';
    $request->xAmzDataPartition = 'distinctio';

    $response = $sdk->sdk->deleteDirectory($request);

    if ($response->deleteDirectoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteFacet

Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s that are associated with the facet will be deleted. Only development schema facets are allowed deletion.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFacetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteFacetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteFacetRequest();
    $request->requestBody = new DeleteFacetRequestBody();
    $request->requestBody->name = 'Francisco Gleason';
    $request->xAmzAlgorithm = 'cupiditate';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'magni';
    $request->xAmzSecurityToken = 'assumenda';
    $request->xAmzSignature = 'ipsam';
    $request->xAmzSignedHeaders = 'alias';
    $request->xAmzDataPartition = 'fugit';

    $response = $sdk->sdk->deleteFacet($request);

    if ($response->deleteFacetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteObject

Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteObjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteObjectRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DeleteObjectRequestBodyObjectReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteObjectRequest();
    $request->requestBody = new DeleteObjectRequestBody();
    $request->requestBody->objectReference = new DeleteObjectRequestBodyObjectReference();
    $request->requestBody->objectReference->selector = 'dolorum';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'tempora';
    $request->xAmzCredential = 'facilis';
    $request->xAmzDate = 'tempore';
    $request->xAmzSecurityToken = 'labore';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzDataPartition = 'non';

    $response = $sdk->sdk->deleteObject($request);

    if ($response->deleteObjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteSchema

Deletes a given schema. Schemas in a development and published state can only be deleted. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteSchemaRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteSchemaRequest();
    $request->xAmzAlgorithm = 'eligendi';
    $request->xAmzContentSha256 = 'sint';
    $request->xAmzCredential = 'aliquid';
    $request->xAmzDate = 'provident';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'sint';
    $request->xAmzSignedHeaders = 'officia';
    $request->xAmzDataPartition = 'dolor';

    $response = $sdk->sdk->deleteSchema($request);

    if ($response->deleteSchemaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## deleteTypedLinkFacet

Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTypedLinkFacetRequest;
use \OpenAPI\OpenAPI\Models\Operations\DeleteTypedLinkFacetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteTypedLinkFacetRequest();
    $request->requestBody = new DeleteTypedLinkFacetRequestBody();
    $request->requestBody->name = 'Randal Parisian';
    $request->xAmzAlgorithm = 'illum';
    $request->xAmzContentSha256 = 'maiores';
    $request->xAmzCredential = 'rerum';
    $request->xAmzDate = 'dicta';
    $request->xAmzSecurityToken = 'magnam';
    $request->xAmzSignature = 'cumque';
    $request->xAmzSignedHeaders = 'facere';
    $request->xAmzDataPartition = 'ea';

    $response = $sdk->sdk->deleteTypedLinkFacet($request);

    if ($response->deleteTypedLinkFacetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detachFromIndex

Detaches the specified object from the specified index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetachFromIndexRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetachFromIndexRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DetachFromIndexRequestBodyIndexReference;
use \OpenAPI\OpenAPI\Models\Operations\DetachFromIndexRequestBodyTargetReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetachFromIndexRequest();
    $request->requestBody = new DetachFromIndexRequestBody();
    $request->requestBody->indexReference = new DetachFromIndexRequestBodyIndexReference();
    $request->requestBody->indexReference->selector = 'aliquid';
    $request->requestBody->targetReference = new DetachFromIndexRequestBodyTargetReference();
    $request->requestBody->targetReference->selector = 'laborum';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'non';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'enim';
    $request->xAmzSecurityToken = 'accusamus';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'quidem';
    $request->xAmzDataPartition = 'provident';

    $response = $sdk->sdk->detachFromIndex($request);

    if ($response->detachFromIndexResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detachObject

Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetachObjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetachObjectRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DetachObjectRequestBodyParentReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetachObjectRequest();
    $request->requestBody = new DetachObjectRequestBody();
    $request->requestBody->linkName = 'nam';
    $request->requestBody->parentReference = new DetachObjectRequestBodyParentReference();
    $request->requestBody->parentReference->selector = 'id';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'sapiente';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'vel';
    $request->xAmzDataPartition = 'natus';

    $response = $sdk->sdk->detachObject($request);

    if ($response->detachObjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detachPolicy

Detaches a policy from an object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetachPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetachPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DetachPolicyRequestBodyObjectReference;
use \OpenAPI\OpenAPI\Models\Operations\DetachPolicyRequestBodyPolicyReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetachPolicyRequest();
    $request->requestBody = new DetachPolicyRequestBody();
    $request->requestBody->objectReference = new DetachPolicyRequestBodyObjectReference();
    $request->requestBody->objectReference->selector = 'omnis';
    $request->requestBody->policyReference = new DetachPolicyRequestBodyPolicyReference();
    $request->requestBody->policyReference->selector = 'molestiae';
    $request->xAmzAlgorithm = 'perferendis';
    $request->xAmzContentSha256 = 'nihil';
    $request->xAmzCredential = 'magnam';
    $request->xAmzDate = 'distinctio';
    $request->xAmzSecurityToken = 'id';
    $request->xAmzSignature = 'labore';
    $request->xAmzSignedHeaders = 'labore';
    $request->xAmzDataPartition = 'suscipit';

    $response = $sdk->sdk->detachPolicy($request);

    if ($response->detachPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## detachTypedLink

Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DetachTypedLinkRequest;
use \OpenAPI\OpenAPI\Models\Operations\DetachTypedLinkRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\DetachTypedLinkRequestBodyTypedLinkSpecifier;
use \OpenAPI\OpenAPI\Models\Shared\AttributeNameAndValue;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\ObjectReference;
use \OpenAPI\OpenAPI\Models\Shared\TypedLinkSchemaAndFacetName;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DetachTypedLinkRequest();
    $request->requestBody = new DetachTypedLinkRequestBody();
    $request->requestBody->typedLinkSpecifier = new DetachTypedLinkRequestBodyTypedLinkSpecifier();
    $request->requestBody->typedLinkSpecifier->identityAttributeValues = [
        new AttributeNameAndValue(),
        new AttributeNameAndValue(),
        new AttributeNameAndValue(),
    ];
    $request->requestBody->typedLinkSpecifier->sourceObjectReference = new ObjectReference();
    $request->requestBody->typedLinkSpecifier->sourceObjectReference->selector = 'nobis';
    $request->requestBody->typedLinkSpecifier->targetObjectReference = new ObjectReference();
    $request->requestBody->typedLinkSpecifier->targetObjectReference->selector = 'eum';
    $request->requestBody->typedLinkSpecifier->typedLinkFacet = new TypedLinkSchemaAndFacetName();
    $request->requestBody->typedLinkSpecifier->typedLinkFacet->schemaArn = 'vero';
    $request->requestBody->typedLinkSpecifier->typedLinkFacet->typedLinkName = 'aspernatur';
    $request->xAmzAlgorithm = 'architecto';
    $request->xAmzContentSha256 = 'magnam';
    $request->xAmzCredential = 'et';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'provident';
    $request->xAmzSignedHeaders = 'quos';
    $request->xAmzDataPartition = 'sint';

    $response = $sdk->sdk->detachTypedLink($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## disableDirectory

Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\DisableDirectoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DisableDirectoryRequest();
    $request->xAmzAlgorithm = 'accusantium';
    $request->xAmzContentSha256 = 'mollitia';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'ad';
    $request->xAmzSignature = 'eum';
    $request->xAmzSignedHeaders = 'dolor';
    $request->xAmzDataPartition = 'necessitatibus';

    $response = $sdk->sdk->disableDirectory($request);

    if ($response->disableDirectoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## enableDirectory

Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\EnableDirectoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EnableDirectoryRequest();
    $request->xAmzAlgorithm = 'odit';
    $request->xAmzContentSha256 = 'nemo';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'iure';
    $request->xAmzSecurityToken = 'doloribus';
    $request->xAmzSignature = 'debitis';
    $request->xAmzSignedHeaders = 'eius';
    $request->xAmzDataPartition = 'maxime';

    $response = $sdk->sdk->enableDirectory($request);

    if ($response->enableDirectoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAppliedSchemaVersion

Returns current applied schema version ARN, including the minor version in use.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetAppliedSchemaVersionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAppliedSchemaVersionRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAppliedSchemaVersionRequest();
    $request->requestBody = new GetAppliedSchemaVersionRequestBody();
    $request->requestBody->schemaArn = 'deleniti';
    $request->xAmzAlgorithm = 'facilis';
    $request->xAmzContentSha256 = 'in';
    $request->xAmzCredential = 'architecto';
    $request->xAmzDate = 'architecto';
    $request->xAmzSecurityToken = 'repudiandae';
    $request->xAmzSignature = 'ullam';
    $request->xAmzSignedHeaders = 'expedita';

    $response = $sdk->sdk->getAppliedSchemaVersion($request);

    if ($response->getAppliedSchemaVersionResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getDirectory

Retrieves metadata about a directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetDirectoryRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetDirectoryRequest();
    $request->xAmzAlgorithm = 'nihil';
    $request->xAmzContentSha256 = 'repellat';
    $request->xAmzCredential = 'quibusdam';
    $request->xAmzDate = 'sed';
    $request->xAmzSecurityToken = 'saepe';
    $request->xAmzSignature = 'pariatur';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzDataPartition = 'consequuntur';

    $response = $sdk->sdk->getDirectory($request);

    if ($response->getDirectoryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getFacet

Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema facets -- published, development, or applied.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetFacetRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetFacetRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetFacetRequest();
    $request->requestBody = new GetFacetRequestBody();
    $request->requestBody->name = 'Miss Nick Cummerata';
    $request->xAmzAlgorithm = 'pariatur';
    $request->xAmzContentSha256 = 'maxime';
    $request->xAmzCredential = 'ea';
    $request->xAmzDate = 'excepturi';
    $request->xAmzSecurityToken = 'odit';
    $request->xAmzSignature = 'ea';
    $request->xAmzSignedHeaders = 'accusantium';
    $request->xAmzDataPartition = 'ab';

    $response = $sdk->sdk->getFacet($request);

    if ($response->getFacetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getLinkAttributes

Retrieves attributes that are associated with a typed link.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetLinkAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetLinkAttributesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetLinkAttributesRequestBodyConsistencyLevelEnum;
use \OpenAPI\OpenAPI\Models\Operations\GetLinkAttributesRequestBodyTypedLinkSpecifier;
use \OpenAPI\OpenAPI\Models\Shared\AttributeNameAndValue;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\ObjectReference;
use \OpenAPI\OpenAPI\Models\Shared\TypedLinkSchemaAndFacetName;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetLinkAttributesRequest();
    $request->requestBody = new GetLinkAttributesRequestBody();
    $request->requestBody->attributeNames = [
        'quidem',
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->requestBody->consistencyLevel = GetLinkAttributesRequestBodyConsistencyLevelEnum::EVENTUAL;
    $request->requestBody->typedLinkSpecifier = new GetLinkAttributesRequestBodyTypedLinkSpecifier();
    $request->requestBody->typedLinkSpecifier->identityAttributeValues = [
        new AttributeNameAndValue(),
    ];
    $request->requestBody->typedLinkSpecifier->sourceObjectReference = new ObjectReference();
    $request->requestBody->typedLinkSpecifier->sourceObjectReference->selector = 'pariatur';
    $request->requestBody->typedLinkSpecifier->targetObjectReference = new ObjectReference();
    $request->requestBody->typedLinkSpecifier->targetObjectReference->selector = 'nemo';
    $request->requestBody->typedLinkSpecifier->typedLinkFacet = new TypedLinkSchemaAndFacetName();
    $request->requestBody->typedLinkSpecifier->typedLinkFacet->schemaArn = 'voluptatibus';
    $request->requestBody->typedLinkSpecifier->typedLinkFacet->typedLinkName = 'perferendis';
    $request->xAmzAlgorithm = 'fugiat';
    $request->xAmzContentSha256 = 'amet';
    $request->xAmzCredential = 'aut';
    $request->xAmzDate = 'cumque';
    $request->xAmzSecurityToken = 'corporis';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'libero';
    $request->xAmzDataPartition = 'nobis';

    $response = $sdk->sdk->getLinkAttributes($request);

    if ($response->getLinkAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getObjectAttributes

Retrieves attributes within a facet that are associated with an object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetObjectAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetObjectAttributesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetObjectAttributesRequestBodyObjectReference;
use \OpenAPI\OpenAPI\Models\Operations\GetObjectAttributesRequestBodySchemaFacet;
use \OpenAPI\OpenAPI\Models\Operations\GetObjectAttributesXAmzConsistencyLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetObjectAttributesRequest();
    $request->requestBody = new GetObjectAttributesRequestBody();
    $request->requestBody->attributeNames = [
        'quis',
    ];
    $request->requestBody->objectReference = new GetObjectAttributesRequestBodyObjectReference();
    $request->requestBody->objectReference->selector = 'totam';
    $request->requestBody->schemaFacet = new GetObjectAttributesRequestBodySchemaFacet();
    $request->requestBody->schemaFacet->facetName = 'dignissimos';
    $request->requestBody->schemaFacet->schemaArn = 'eaque';
    $request->xAmzAlgorithm = 'quis';
    $request->xAmzContentSha256 = 'nesciunt';
    $request->xAmzCredential = 'eos';
    $request->xAmzDate = 'perferendis';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'quam';
    $request->xAmzConsistencyLevel = GetObjectAttributesXAmzConsistencyLevelEnum::SERIALIZABLE;
    $request->xAmzDataPartition = 'vero';

    $response = $sdk->sdk->getObjectAttributes($request);

    if ($response->getObjectAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getObjectInformation

Retrieves metadata about an object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetObjectInformationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetObjectInformationRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\GetObjectInformationRequestBodyObjectReference;
use \OpenAPI\OpenAPI\Models\Operations\GetObjectInformationXAmzConsistencyLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetObjectInformationRequest();
    $request->requestBody = new GetObjectInformationRequestBody();
    $request->requestBody->objectReference = new GetObjectInformationRequestBodyObjectReference();
    $request->requestBody->objectReference->selector = 'nostrum';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'recusandae';
    $request->xAmzCredential = 'omnis';
    $request->xAmzDate = 'facilis';
    $request->xAmzSecurityToken = 'perspiciatis';
    $request->xAmzSignature = 'voluptatem';
    $request->xAmzSignedHeaders = 'porro';
    $request->xAmzConsistencyLevel = GetObjectInformationXAmzConsistencyLevelEnum::SERIALIZABLE;
    $request->xAmzDataPartition = 'blanditiis';

    $response = $sdk->sdk->getObjectInformation($request);

    if ($response->getObjectInformationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getSchemaAsJson

Retrieves a JSON representation of the schema. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetSchemaAsJsonRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetSchemaAsJsonRequest();
    $request->xAmzAlgorithm = 'error';
    $request->xAmzContentSha256 = 'eaque';
    $request->xAmzCredential = 'occaecati';
    $request->xAmzDate = 'rerum';
    $request->xAmzSecurityToken = 'adipisci';
    $request->xAmzSignature = 'asperiores';
    $request->xAmzSignedHeaders = 'earum';
    $request->xAmzDataPartition = 'modi';

    $response = $sdk->sdk->getSchemaAsJson($request);

    if ($response->getSchemaAsJsonResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTypedLinkFacetInformation

Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetTypedLinkFacetInformationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTypedLinkFacetInformationRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTypedLinkFacetInformationRequest();
    $request->requestBody = new GetTypedLinkFacetInformationRequestBody();
    $request->requestBody->name = 'Omar Leuschke';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'delectus';
    $request->xAmzDate = 'quaerat';
    $request->xAmzSecurityToken = 'quos';
    $request->xAmzSignature = 'aliquid';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzDataPartition = 'dolorem';

    $response = $sdk->sdk->getTypedLinkFacetInformation($request);

    if ($response->getTypedLinkFacetInformationResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAppliedSchemaArns

Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAppliedSchemaArnsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAppliedSchemaArnsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAppliedSchemaArnsRequest();
    $request->maxResults = 'dolor';
    $request->nextToken = 'qui';
    $request->requestBody = new ListAppliedSchemaArnsRequestBody();
    $request->requestBody->directoryArn = 'ipsum';
    $request->requestBody->maxResults = 944373;
    $request->requestBody->nextToken = 'excepturi';
    $request->requestBody->schemaArn = 'cum';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'dignissimos';
    $request->xAmzCredential = 'reiciendis';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'dolorum';
    $request->xAmzSignature = 'numquam';
    $request->xAmzSignedHeaders = 'veritatis';

    $response = $sdk->sdk->listAppliedSchemaArns($request);

    if ($response->listAppliedSchemaArnsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listAttachedIndices

Lists indices attached to the specified object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListAttachedIndicesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListAttachedIndicesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListAttachedIndicesRequestBodyTargetReference;
use \OpenAPI\OpenAPI\Models\Operations\ListAttachedIndicesXAmzConsistencyLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListAttachedIndicesRequest();
    $request->maxResults = 'ipsa';
    $request->nextToken = 'ipsa';
    $request->requestBody = new ListAttachedIndicesRequestBody();
    $request->requestBody->maxResults = 434417;
    $request->requestBody->nextToken = 'odio';
    $request->requestBody->targetReference = new ListAttachedIndicesRequestBodyTargetReference();
    $request->requestBody->targetReference->selector = 'quaerat';
    $request->xAmzAlgorithm = 'accusamus';
    $request->xAmzContentSha256 = 'quidem';
    $request->xAmzCredential = 'voluptatibus';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'natus';
    $request->xAmzSignature = 'eos';
    $request->xAmzSignedHeaders = 'atque';
    $request->xAmzConsistencyLevel = ListAttachedIndicesXAmzConsistencyLevelEnum::SERIALIZABLE;
    $request->xAmzDataPartition = 'fugiat';

    $response = $sdk->sdk->listAttachedIndices($request);

    if ($response->listAttachedIndicesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDevelopmentSchemaArns

Retrieves each Amazon Resource Name (ARN) of schemas in the development state.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDevelopmentSchemaArnsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDevelopmentSchemaArnsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDevelopmentSchemaArnsRequest();
    $request->maxResults = 'ab';
    $request->nextToken = 'soluta';
    $request->requestBody = new ListDevelopmentSchemaArnsRequestBody();
    $request->requestBody->maxResults = 679393;
    $request->requestBody->nextToken = 'iusto';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'dolorum';
    $request->xAmzCredential = 'deleniti';
    $request->xAmzDate = 'omnis';
    $request->xAmzSecurityToken = 'necessitatibus';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'asperiores';

    $response = $sdk->sdk->listDevelopmentSchemaArns($request);

    if ($response->listDevelopmentSchemaArnsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listDirectories

Lists directories created within an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListDirectoriesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListDirectoriesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListDirectoriesRequestBodyStateEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListDirectoriesRequest();
    $request->maxResults = 'nihil';
    $request->nextToken = 'ipsum';
    $request->requestBody = new ListDirectoriesRequestBody();
    $request->requestBody->maxResults = 456015;
    $request->requestBody->nextToken = 'id';
    $request->requestBody->state = ListDirectoriesRequestBodyStateEnum::DELETED;
    $request->xAmzAlgorithm = 'eius';
    $request->xAmzContentSha256 = 'aspernatur';
    $request->xAmzCredential = 'perferendis';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'optio';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'ad';

    $response = $sdk->sdk->listDirectories($request);

    if ($response->listDirectoriesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFacetAttributes

Retrieves attributes attached to the facet.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFacetAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFacetAttributesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFacetAttributesRequest();
    $request->maxResults = 'saepe';
    $request->nextToken = 'suscipit';
    $request->requestBody = new ListFacetAttributesRequestBody();
    $request->requestBody->maxResults = 645785;
    $request->requestBody->name = 'Derek Sipes';
    $request->requestBody->nextToken = 'alias';
    $request->xAmzAlgorithm = 'at';
    $request->xAmzContentSha256 = 'quaerat';
    $request->xAmzCredential = 'tempora';
    $request->xAmzDate = 'vel';
    $request->xAmzSecurityToken = 'quod';
    $request->xAmzSignature = 'officiis';
    $request->xAmzSignedHeaders = 'qui';
    $request->xAmzDataPartition = 'dolorum';

    $response = $sdk->sdk->listFacetAttributes($request);

    if ($response->listFacetAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listFacetNames

Retrieves the names of facets that exist in a schema.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListFacetNamesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListFacetNamesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListFacetNamesRequest();
    $request->maxResults = 'a';
    $request->nextToken = 'esse';
    $request->requestBody = new ListFacetNamesRequestBody();
    $request->requestBody->maxResults = 687488;
    $request->requestBody->nextToken = 'iusto';
    $request->xAmzAlgorithm = 'ipsum';
    $request->xAmzContentSha256 = 'quisquam';
    $request->xAmzCredential = 'tenetur';
    $request->xAmzDate = 'amet';
    $request->xAmzSecurityToken = 'tempore';
    $request->xAmzSignature = 'accusamus';
    $request->xAmzSignedHeaders = 'numquam';
    $request->xAmzDataPartition = 'enim';

    $response = $sdk->sdk->listFacetNames($request);

    if ($response->listFacetNamesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIncomingTypedLinks

Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIncomingTypedLinksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListIncomingTypedLinksRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListIncomingTypedLinksRequestBodyConsistencyLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\TypedLinkAttributeRange;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValueRange;
use \OpenAPI\OpenAPI\Models\Shared\RangeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValue;
use \OpenAPI\OpenAPI\Models\Operations\ListIncomingTypedLinksRequestBodyFilterTypedLink;
use \OpenAPI\OpenAPI\Models\Operations\ListIncomingTypedLinksRequestBodyObjectReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIncomingTypedLinksRequest();
    $request->requestBody = new ListIncomingTypedLinksRequestBody();
    $request->requestBody->consistencyLevel = ListIncomingTypedLinksRequestBodyConsistencyLevelEnum::SERIALIZABLE;
    $request->requestBody->filterAttributeRanges = [
        new TypedLinkAttributeRange(),
        new TypedLinkAttributeRange(),
        new TypedLinkAttributeRange(),
        new TypedLinkAttributeRange(),
    ];
    $request->requestBody->filterTypedLink = new ListIncomingTypedLinksRequestBodyFilterTypedLink();
    $request->requestBody->filterTypedLink->schemaArn = 'totam';
    $request->requestBody->filterTypedLink->typedLinkName = 'nihil';
    $request->requestBody->maxResults = 25662;
    $request->requestBody->nextToken = 'expedita';
    $request->requestBody->objectReference = new ListIncomingTypedLinksRequestBodyObjectReference();
    $request->requestBody->objectReference->selector = 'neque';
    $request->xAmzAlgorithm = 'sed';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'libero';
    $request->xAmzDate = 'voluptas';
    $request->xAmzSecurityToken = 'deserunt';
    $request->xAmzSignature = 'quam';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzDataPartition = 'incidunt';

    $response = $sdk->sdk->listIncomingTypedLinks($request);

    if ($response->listIncomingTypedLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listIndex

Lists objects attached to the specified index.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListIndexRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListIndexRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListIndexRequestBodyIndexReference;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAttributeRange;
use \OpenAPI\OpenAPI\Models\Shared\AttributeKey;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValueRange;
use \OpenAPI\OpenAPI\Models\Shared\RangeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValue;
use \OpenAPI\OpenAPI\Models\Operations\ListIndexXAmzConsistencyLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListIndexRequest();
    $request->maxResults = 'qui';
    $request->nextToken = 'cupiditate';
    $request->requestBody = new ListIndexRequestBody();
    $request->requestBody->indexReference = new ListIndexRequestBodyIndexReference();
    $request->requestBody->indexReference->selector = 'maxime';
    $request->requestBody->maxResults = 863856;
    $request->requestBody->nextToken = 'soluta';
    $request->requestBody->rangesOnIndexedValues = [
        new ObjectAttributeRange(),
    ];
    $request->xAmzAlgorithm = 'laborum';
    $request->xAmzContentSha256 = 'totam';
    $request->xAmzCredential = 'incidunt';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'dolores';
    $request->xAmzSignature = 'distinctio';
    $request->xAmzSignedHeaders = 'facilis';
    $request->xAmzConsistencyLevel = ListIndexXAmzConsistencyLevelEnum::SERIALIZABLE;
    $request->xAmzDataPartition = 'quam';

    $response = $sdk->sdk->listIndex($request);

    if ($response->listIndexResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listManagedSchemaArns

Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListManagedSchemaArnsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListManagedSchemaArnsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListManagedSchemaArnsRequest();
    $request->maxResults = 'molestias';
    $request->nextToken = 'temporibus';
    $request->requestBody = new ListManagedSchemaArnsRequestBody();
    $request->requestBody->maxResults = 183280;
    $request->requestBody->nextToken = 'neque';
    $request->requestBody->schemaArn = 'fugit';
    $request->xAmzAlgorithm = 'magni';
    $request->xAmzContentSha256 = 'odio';
    $request->xAmzCredential = 'sunt';
    $request->xAmzDate = 'ullam';
    $request->xAmzSecurityToken = 'nam';
    $request->xAmzSignature = 'hic';
    $request->xAmzSignedHeaders = 'voluptatem';

    $response = $sdk->sdk->listManagedSchemaArns($request);

    if ($response->listManagedSchemaArnsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listObjectAttributes

Lists all attributes that are associated with an object. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectAttributesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectAttributesRequestBodyFacetFilter;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectAttributesRequestBodyObjectReference;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectAttributesXAmzConsistencyLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListObjectAttributesRequest();
    $request->maxResults = 'cumque';
    $request->nextToken = 'soluta';
    $request->requestBody = new ListObjectAttributesRequestBody();
    $request->requestBody->facetFilter = new ListObjectAttributesRequestBodyFacetFilter();
    $request->requestBody->facetFilter->facetName = 'nobis';
    $request->requestBody->facetFilter->schemaArn = 'et';
    $request->requestBody->maxResults = 903720;
    $request->requestBody->nextToken = 'ipsum';
    $request->requestBody->objectReference = new ListObjectAttributesRequestBodyObjectReference();
    $request->requestBody->objectReference->selector = 'veritatis';
    $request->xAmzAlgorithm = 'nobis';
    $request->xAmzContentSha256 = 'quos';
    $request->xAmzCredential = 'tempore';
    $request->xAmzDate = 'cupiditate';
    $request->xAmzSecurityToken = 'aperiam';
    $request->xAmzSignature = 'delectus';
    $request->xAmzSignedHeaders = 'dolorem';
    $request->xAmzConsistencyLevel = ListObjectAttributesXAmzConsistencyLevelEnum::SERIALIZABLE;
    $request->xAmzDataPartition = 'labore';

    $response = $sdk->sdk->listObjectAttributes($request);

    if ($response->listObjectAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listObjectChildren

Returns a paginated list of child objects that are associated with a given object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectChildrenRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectChildrenRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectChildrenRequestBodyObjectReference;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectChildrenXAmzConsistencyLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListObjectChildrenRequest();
    $request->maxResults = 'adipisci';
    $request->nextToken = 'dolorum';
    $request->requestBody = new ListObjectChildrenRequestBody();
    $request->requestBody->maxResults = 100294;
    $request->requestBody->nextToken = 'quae';
    $request->requestBody->objectReference = new ListObjectChildrenRequestBodyObjectReference();
    $request->requestBody->objectReference->selector = 'aut';
    $request->xAmzAlgorithm = 'quas';
    $request->xAmzContentSha256 = 'itaque';
    $request->xAmzCredential = 'consequatur';
    $request->xAmzDate = 'est';
    $request->xAmzSecurityToken = 'repellendus';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'doloribus';
    $request->xAmzConsistencyLevel = ListObjectChildrenXAmzConsistencyLevelEnum::SERIALIZABLE;
    $request->xAmzDataPartition = 'facilis';

    $response = $sdk->sdk->listObjectChildren($request);

    if ($response->listObjectChildrenResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listObjectParentPaths

<p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectParentPathsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectParentPathsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectParentPathsRequestBodyObjectReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListObjectParentPathsRequest();
    $request->maxResults = 'cupiditate';
    $request->nextToken = 'qui';
    $request->requestBody = new ListObjectParentPathsRequestBody();
    $request->requestBody->maxResults = 63955;
    $request->requestBody->nextToken = 'laudantium';
    $request->requestBody->objectReference = new ListObjectParentPathsRequestBodyObjectReference();
    $request->requestBody->objectReference->selector = 'odio';
    $request->xAmzAlgorithm = 'occaecati';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'quisquam';
    $request->xAmzDate = 'vero';
    $request->xAmzSecurityToken = 'omnis';
    $request->xAmzSignature = 'quis';
    $request->xAmzSignedHeaders = 'ipsum';
    $request->xAmzDataPartition = 'delectus';

    $response = $sdk->sdk->listObjectParentPaths($request);

    if ($response->listObjectParentPathsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listObjectParents

Lists parent objects that are associated with a given object in pagination fashion.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectParentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectParentsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectParentsRequestBodyObjectReference;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectParentsXAmzConsistencyLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListObjectParentsRequest();
    $request->maxResults = 'voluptate';
    $request->nextToken = 'consectetur';
    $request->requestBody = new ListObjectParentsRequestBody();
    $request->requestBody->includeAllLinksToEachParent = false;
    $request->requestBody->maxResults = 878870;
    $request->requestBody->nextToken = 'tenetur';
    $request->requestBody->objectReference = new ListObjectParentsRequestBodyObjectReference();
    $request->requestBody->objectReference->selector = 'dignissimos';
    $request->xAmzAlgorithm = 'hic';
    $request->xAmzContentSha256 = 'distinctio';
    $request->xAmzCredential = 'quod';
    $request->xAmzDate = 'odio';
    $request->xAmzSecurityToken = 'similique';
    $request->xAmzSignature = 'facilis';
    $request->xAmzSignedHeaders = 'vero';
    $request->xAmzConsistencyLevel = ListObjectParentsXAmzConsistencyLevelEnum::SERIALIZABLE;
    $request->xAmzDataPartition = 'dolore';

    $response = $sdk->sdk->listObjectParents($request);

    if ($response->listObjectParentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listObjectPolicies

Returns policies attached to an object in pagination fashion.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectPoliciesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectPoliciesRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectPoliciesRequestBodyObjectReference;
use \OpenAPI\OpenAPI\Models\Operations\ListObjectPoliciesXAmzConsistencyLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListObjectPoliciesRequest();
    $request->maxResults = 'quibusdam';
    $request->nextToken = 'illum';
    $request->requestBody = new ListObjectPoliciesRequestBody();
    $request->requestBody->maxResults = 194342;
    $request->requestBody->nextToken = 'natus';
    $request->requestBody->objectReference = new ListObjectPoliciesRequestBodyObjectReference();
    $request->requestBody->objectReference->selector = 'impedit';
    $request->xAmzAlgorithm = 'aut';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'exercitationem';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'fugit';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'maiores';
    $request->xAmzConsistencyLevel = ListObjectPoliciesXAmzConsistencyLevelEnum::EVENTUAL;
    $request->xAmzDataPartition = 'iusto';

    $response = $sdk->sdk->listObjectPolicies($request);

    if ($response->listObjectPoliciesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listOutgoingTypedLinks

Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListOutgoingTypedLinksRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListOutgoingTypedLinksRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum;
use \OpenAPI\OpenAPI\Models\Shared\TypedLinkAttributeRange;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValueRange;
use \OpenAPI\OpenAPI\Models\Shared\RangeModeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValue;
use \OpenAPI\OpenAPI\Models\Operations\ListOutgoingTypedLinksRequestBodyFilterTypedLink;
use \OpenAPI\OpenAPI\Models\Operations\ListOutgoingTypedLinksRequestBodyObjectReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListOutgoingTypedLinksRequest();
    $request->requestBody = new ListOutgoingTypedLinksRequestBody();
    $request->requestBody->consistencyLevel = ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum::EVENTUAL;
    $request->requestBody->filterAttributeRanges = [
        new TypedLinkAttributeRange(),
        new TypedLinkAttributeRange(),
    ];
    $request->requestBody->filterTypedLink = new ListOutgoingTypedLinksRequestBodyFilterTypedLink();
    $request->requestBody->filterTypedLink->schemaArn = 'alias';
    $request->requestBody->filterTypedLink->typedLinkName = 'officia';
    $request->requestBody->maxResults = 269479;
    $request->requestBody->nextToken = 'ipsam';
    $request->requestBody->objectReference = new ListOutgoingTypedLinksRequestBodyObjectReference();
    $request->requestBody->objectReference->selector = 'ea';
    $request->xAmzAlgorithm = 'aspernatur';
    $request->xAmzContentSha256 = 'vel';
    $request->xAmzCredential = 'possimus';
    $request->xAmzDate = 'magnam';
    $request->xAmzSecurityToken = 'ratione';
    $request->xAmzSignature = 'ex';
    $request->xAmzSignedHeaders = 'laudantium';
    $request->xAmzDataPartition = 'dicta';

    $response = $sdk->sdk->listOutgoingTypedLinks($request);

    if ($response->listOutgoingTypedLinksResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPolicyAttachments

Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPolicyAttachmentsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPolicyAttachmentsRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\ListPolicyAttachmentsRequestBodyPolicyReference;
use \OpenAPI\OpenAPI\Models\Operations\ListPolicyAttachmentsXAmzConsistencyLevelEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPolicyAttachmentsRequest();
    $request->maxResults = 'dolor';
    $request->nextToken = 'maiores';
    $request->requestBody = new ListPolicyAttachmentsRequestBody();
    $request->requestBody->maxResults = 97844;
    $request->requestBody->nextToken = 'ex';
    $request->requestBody->policyReference = new ListPolicyAttachmentsRequestBodyPolicyReference();
    $request->requestBody->policyReference->selector = 'nulla';
    $request->xAmzAlgorithm = 'excepturi';
    $request->xAmzContentSha256 = 'voluptatibus';
    $request->xAmzCredential = 'nostrum';
    $request->xAmzDate = 'sapiente';
    $request->xAmzSecurityToken = 'quisquam';
    $request->xAmzSignature = 'saepe';
    $request->xAmzSignedHeaders = 'ea';
    $request->xAmzConsistencyLevel = ListPolicyAttachmentsXAmzConsistencyLevelEnum::EVENTUAL;
    $request->xAmzDataPartition = 'corporis';

    $response = $sdk->sdk->listPolicyAttachments($request);

    if ($response->listPolicyAttachmentsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listPublishedSchemaArns

Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListPublishedSchemaArnsRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListPublishedSchemaArnsRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListPublishedSchemaArnsRequest();
    $request->maxResults = 'veniam';
    $request->nextToken = 'aliquid';
    $request->requestBody = new ListPublishedSchemaArnsRequestBody();
    $request->requestBody->maxResults = 81101;
    $request->requestBody->nextToken = 'magnam';
    $request->requestBody->schemaArn = 'ea';
    $request->xAmzAlgorithm = 'quo';
    $request->xAmzContentSha256 = 'consectetur';
    $request->xAmzCredential = 'recusandae';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'minima';
    $request->xAmzSignature = 'eaque';
    $request->xAmzSignedHeaders = 'a';

    $response = $sdk->sdk->listPublishedSchemaArns($request);

    if ($response->listPublishedSchemaArnsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTagsForResource

Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTagsForResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTagsForResourceRequest();
    $request->maxResults = 'libero';
    $request->nextToken = 'aut';
    $request->requestBody = new ListTagsForResourceRequestBody();
    $request->requestBody->maxResults = 11427;
    $request->requestBody->nextToken = 'deleniti';
    $request->requestBody->resourceArn = 'impedit';
    $request->xAmzAlgorithm = 'aliquam';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'accusamus';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'non';
    $request->xAmzSignature = 'et';
    $request->xAmzSignedHeaders = 'dolorum';

    $response = $sdk->sdk->listTagsForResource($request);

    if ($response->listTagsForResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTypedLinkFacetAttributes

Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTypedLinkFacetAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTypedLinkFacetAttributesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTypedLinkFacetAttributesRequest();
    $request->maxResults = 'laborum';
    $request->nextToken = 'placeat';
    $request->requestBody = new ListTypedLinkFacetAttributesRequestBody();
    $request->requestBody->maxResults = 245367;
    $request->requestBody->name = 'Stacey Rolfson';
    $request->requestBody->nextToken = 'nulla';
    $request->xAmzAlgorithm = 'voluptas';
    $request->xAmzContentSha256 = 'libero';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'tempora';
    $request->xAmzSecurityToken = 'numquam';
    $request->xAmzSignature = 'explicabo';
    $request->xAmzSignedHeaders = 'provident';
    $request->xAmzDataPartition = 'ipsa';

    $response = $sdk->sdk->listTypedLinkFacetAttributes($request);

    if ($response->listTypedLinkFacetAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listTypedLinkFacetNames

Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\ListTypedLinkFacetNamesRequest;
use \OpenAPI\OpenAPI\Models\Operations\ListTypedLinkFacetNamesRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ListTypedLinkFacetNamesRequest();
    $request->maxResults = 'molestiae';
    $request->nextToken = 'magnam';
    $request->requestBody = new ListTypedLinkFacetNamesRequestBody();
    $request->requestBody->maxResults = 487935;
    $request->requestBody->nextToken = 'eius';
    $request->xAmzAlgorithm = 'esse';
    $request->xAmzContentSha256 = 'esse';
    $request->xAmzCredential = 'rem';
    $request->xAmzDate = 'fuga';
    $request->xAmzSecurityToken = 'reprehenderit';
    $request->xAmzSignature = 'quidem';
    $request->xAmzSignedHeaders = 'fugiat';
    $request->xAmzDataPartition = 'ut';

    $response = $sdk->sdk->listTypedLinkFacetNames($request);

    if ($response->listTypedLinkFacetNamesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lookupPolicy

Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\LookupPolicyRequest;
use \OpenAPI\OpenAPI\Models\Operations\LookupPolicyRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\LookupPolicyRequestBodyObjectReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LookupPolicyRequest();
    $request->maxResults = 'eum';
    $request->nextToken = 'suscipit';
    $request->requestBody = new LookupPolicyRequestBody();
    $request->requestBody->maxResults = 826871;
    $request->requestBody->nextToken = 'eos';
    $request->requestBody->objectReference = new LookupPolicyRequestBodyObjectReference();
    $request->requestBody->objectReference->selector = 'praesentium';
    $request->xAmzAlgorithm = 'quisquam';
    $request->xAmzContentSha256 = 'veritatis';
    $request->xAmzCredential = 'ipsa';
    $request->xAmzDate = 'id';
    $request->xAmzSecurityToken = 'quidem';
    $request->xAmzSignature = 'neque';
    $request->xAmzSignedHeaders = 'quo';
    $request->xAmzDataPartition = 'illum';

    $response = $sdk->sdk->lookupPolicy($request);

    if ($response->lookupPolicyResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## publishSchema

Publishes a development schema with a major version and a recommended minor version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PublishSchemaRequest;
use \OpenAPI\OpenAPI\Models\Operations\PublishSchemaRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PublishSchemaRequest();
    $request->requestBody = new PublishSchemaRequestBody();
    $request->requestBody->minorVersion = 'quo';
    $request->requestBody->name = 'Herbert Daugherty V';
    $request->requestBody->version = 'consequatur';
    $request->xAmzAlgorithm = 'tempora';
    $request->xAmzContentSha256 = 'debitis';
    $request->xAmzCredential = 'ipsam';
    $request->xAmzDate = 'aspernatur';
    $request->xAmzSecurityToken = 'sequi';
    $request->xAmzSignature = 'quo';
    $request->xAmzSignedHeaders = 'esse';
    $request->xAmzDataPartition = 'recusandae';

    $response = $sdk->sdk->publishSchema($request);

    if ($response->publishSchemaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## putSchemaFromJson

Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PutSchemaFromJsonRequest;
use \OpenAPI\OpenAPI\Models\Operations\PutSchemaFromJsonRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PutSchemaFromJsonRequest();
    $request->requestBody = new PutSchemaFromJsonRequestBody();
    $request->requestBody->document = 'aperiam';
    $request->xAmzAlgorithm = 'distinctio';
    $request->xAmzContentSha256 = 'quod';
    $request->xAmzCredential = 'dignissimos';
    $request->xAmzDate = 'inventore';
    $request->xAmzSecurityToken = 'nihil';
    $request->xAmzSignature = 'totam';
    $request->xAmzSignedHeaders = 'accusamus';
    $request->xAmzDataPartition = 'aliquam';

    $response = $sdk->sdk->putSchemaFromJson($request);

    if ($response->putSchemaFromJsonResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## removeFacetFromObject

Removes the specified facet from the specified object.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\RemoveFacetFromObjectRequest;
use \OpenAPI\OpenAPI\Models\Operations\RemoveFacetFromObjectRequestBody;
use \OpenAPI\OpenAPI\Models\Operations\RemoveFacetFromObjectRequestBodyObjectReference;
use \OpenAPI\OpenAPI\Models\Operations\RemoveFacetFromObjectRequestBodySchemaFacet;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RemoveFacetFromObjectRequest();
    $request->requestBody = new RemoveFacetFromObjectRequestBody();
    $request->requestBody->objectReference = new RemoveFacetFromObjectRequestBodyObjectReference();
    $request->requestBody->objectReference->selector = 'odio';
    $request->requestBody->schemaFacet = new RemoveFacetFromObjectRequestBodySchemaFacet();
    $request->requestBody->schemaFacet->facetName = 'occaecati';
    $request->requestBody->schemaFacet->schemaArn = 'commodi';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'dolores';
    $request->xAmzCredential = 'deserunt';
    $request->xAmzDate = 'molestiae';
    $request->xAmzSecurityToken = 'accusantium';
    $request->xAmzSignature = 'porro';
    $request->xAmzSignedHeaders = 'eum';
    $request->xAmzDataPartition = 'quas';

    $response = $sdk->sdk->removeFacetFromObject($request);

    if ($response->removeFacetFromObjectResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## tagResource

An API operation for adding tags to a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\TagResourceRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Tag;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TagResourceRequest();
    $request->requestBody = new TagResourceRequestBody();
    $request->requestBody->resourceArn = 'praesentium';
    $request->requestBody->tags = [
        new Tag(),
    ];
    $request->xAmzAlgorithm = 'deleniti';
    $request->xAmzContentSha256 = 'fugit';
    $request->xAmzCredential = 'fuga';
    $request->xAmzDate = 'mollitia';
    $request->xAmzSecurityToken = 'incidunt';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'explicabo';

    $response = $sdk->sdk->tagResource($request);

    if ($response->tagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## untagResource

An API operation for removing tags from a resource.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequest;
use \OpenAPI\OpenAPI\Models\Operations\UntagResourceRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UntagResourceRequest();
    $request->requestBody = new UntagResourceRequestBody();
    $request->requestBody->resourceArn = 'minima';
    $request->requestBody->tagKeys = [
        'fugit',
        'sapiente',
    ];
    $request->xAmzAlgorithm = 'consequuntur';
    $request->xAmzContentSha256 = 'ratione';
    $request->xAmzCredential = 'explicabo';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'occaecati';
    $request->xAmzSignature = 'atque';
    $request->xAmzSignedHeaders = 'et';

    $response = $sdk->sdk->untagResource($request);

    if ($response->untagResourceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateFacet

<p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFacetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFacetRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\FacetAttributeUpdate;
use \OpenAPI\OpenAPI\Models\Shared\UpdateActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FacetAttribute;
use \OpenAPI\OpenAPI\Models\Shared\FacetAttributeDefinition;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FacetAttributeTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FacetAttributeReference;
use \OpenAPI\OpenAPI\Models\Shared\RequiredAttributeBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Operations\UpdateFacetRequestBodyObjectTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateFacetRequest();
    $request->requestBody = new UpdateFacetRequestBody();
    $request->requestBody->attributeUpdates = [
        new FacetAttributeUpdate(),
        new FacetAttributeUpdate(),
    ];
    $request->requestBody->name = 'Sheldon Boehm';
    $request->requestBody->objectType = UpdateFacetRequestBodyObjectTypeEnum::POLICY;
    $request->xAmzAlgorithm = 'vero';
    $request->xAmzContentSha256 = 'aliquid';
    $request->xAmzCredential = 'quasi';
    $request->xAmzDate = 'saepe';
    $request->xAmzSecurityToken = 'vel';
    $request->xAmzSignature = 'harum';
    $request->xAmzSignedHeaders = 'molestiae';
    $request->xAmzDataPartition = 'rerum';

    $response = $sdk->sdk->updateFacet($request);

    if ($response->updateFacetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateLinkAttributes

Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLinkAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLinkAttributesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\LinkAttributeUpdate;
use \OpenAPI\OpenAPI\Models\Shared\LinkAttributeAction;
use \OpenAPI\OpenAPI\Models\Shared\UpdateActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\AttributeKey;
use \OpenAPI\OpenAPI\Models\Operations\UpdateLinkAttributesRequestBodyTypedLinkSpecifier;
use \OpenAPI\OpenAPI\Models\Shared\AttributeNameAndValue;
use \OpenAPI\OpenAPI\Models\Shared\ObjectReference;
use \OpenAPI\OpenAPI\Models\Shared\TypedLinkSchemaAndFacetName;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateLinkAttributesRequest();
    $request->requestBody = new UpdateLinkAttributesRequestBody();
    $request->requestBody->attributeUpdates = [
        new LinkAttributeUpdate(),
        new LinkAttributeUpdate(),
        new LinkAttributeUpdate(),
    ];
    $request->requestBody->typedLinkSpecifier = new UpdateLinkAttributesRequestBodyTypedLinkSpecifier();
    $request->requestBody->typedLinkSpecifier->identityAttributeValues = [
        new AttributeNameAndValue(),
        new AttributeNameAndValue(),
    ];
    $request->requestBody->typedLinkSpecifier->sourceObjectReference = new ObjectReference();
    $request->requestBody->typedLinkSpecifier->sourceObjectReference->selector = 'distinctio';
    $request->requestBody->typedLinkSpecifier->targetObjectReference = new ObjectReference();
    $request->requestBody->typedLinkSpecifier->targetObjectReference->selector = 'eligendi';
    $request->requestBody->typedLinkSpecifier->typedLinkFacet = new TypedLinkSchemaAndFacetName();
    $request->requestBody->typedLinkSpecifier->typedLinkFacet->schemaArn = 'sit';
    $request->requestBody->typedLinkSpecifier->typedLinkFacet->typedLinkName = 'culpa';
    $request->xAmzAlgorithm = 'tempore';
    $request->xAmzContentSha256 = 'adipisci';
    $request->xAmzCredential = 'cumque';
    $request->xAmzDate = 'consequuntur';
    $request->xAmzSecurityToken = 'consequatur';
    $request->xAmzSignature = 'minus';
    $request->xAmzSignedHeaders = 'quaerat';
    $request->xAmzDataPartition = 'sapiente';

    $response = $sdk->sdk->updateLinkAttributes($request);

    if ($response->updateLinkAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateObjectAttributes

Updates a given object's attributes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateObjectAttributesRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateObjectAttributesRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAttributeUpdate;
use \OpenAPI\OpenAPI\Models\Shared\ObjectAttributeAction;
use \OpenAPI\OpenAPI\Models\Shared\UpdateActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\AttributeKey;
use \OpenAPI\OpenAPI\Models\Operations\UpdateObjectAttributesRequestBodyObjectReference;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateObjectAttributesRequest();
    $request->requestBody = new UpdateObjectAttributesRequestBody();
    $request->requestBody->attributeUpdates = [
        new ObjectAttributeUpdate(),
    ];
    $request->requestBody->objectReference = new UpdateObjectAttributesRequestBodyObjectReference();
    $request->requestBody->objectReference->selector = 'esse';
    $request->xAmzAlgorithm = 'blanditiis';
    $request->xAmzContentSha256 = 'provident';
    $request->xAmzCredential = 'a';
    $request->xAmzDate = 'nulla';
    $request->xAmzSecurityToken = 'quas';
    $request->xAmzSignature = 'esse';
    $request->xAmzSignedHeaders = 'quasi';
    $request->xAmzDataPartition = 'a';

    $response = $sdk->sdk->updateObjectAttributes($request);

    if ($response->updateObjectAttributesResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateSchema

Updates the schema name with a new name. Only development schema names can be updated.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSchemaRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateSchemaRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateSchemaRequest();
    $request->requestBody = new UpdateSchemaRequestBody();
    $request->requestBody->name = 'Kirk Stracke';
    $request->xAmzAlgorithm = 'eveniet';
    $request->xAmzContentSha256 = 'asperiores';
    $request->xAmzCredential = 'facere';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'consequuntur';
    $request->xAmzSignature = 'quasi';
    $request->xAmzSignedHeaders = 'similique';
    $request->xAmzDataPartition = 'culpa';

    $response = $sdk->sdk->updateSchema($request);

    if ($response->updateSchemaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## updateTypedLinkFacet

Updates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTypedLinkFacetRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpdateTypedLinkFacetRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\TypedLinkFacetAttributeUpdate;
use \OpenAPI\OpenAPI\Models\Shared\UpdateActionTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\TypedLinkAttributeDefinition;
use \OpenAPI\OpenAPI\Models\Shared\TypedAttributeValue;
use \OpenAPI\OpenAPI\Models\Shared\RequiredAttributeBehaviorEnum;
use \OpenAPI\OpenAPI\Models\Shared\Rule;
use \OpenAPI\OpenAPI\Models\Shared\RuleTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\FacetAttributeTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpdateTypedLinkFacetRequest();
    $request->requestBody = new UpdateTypedLinkFacetRequestBody();
    $request->requestBody->attributeUpdates = [
        new TypedLinkFacetAttributeUpdate(),
        new TypedLinkFacetAttributeUpdate(),
    ];
    $request->requestBody->identityAttributeOrder = [
        'quae',
        'earum',
        'vel',
        'in',
    ];
    $request->requestBody->name = 'Jeannette Stanton II';
    $request->xAmzAlgorithm = 'sapiente';
    $request->xAmzContentSha256 = 'dicta';
    $request->xAmzCredential = 'ullam';
    $request->xAmzDate = 'reprehenderit';
    $request->xAmzSecurityToken = 'ullam';
    $request->xAmzSignature = 'nisi';
    $request->xAmzSignedHeaders = 'aut';
    $request->xAmzDataPartition = 'voluptatum';

    $response = $sdk->sdk->updateTypedLinkFacet($request);

    if ($response->updateTypedLinkFacetResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## upgradeAppliedSchema

Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpgradeAppliedSchemaRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpgradeAppliedSchemaRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpgradeAppliedSchemaRequest();
    $request->requestBody = new UpgradeAppliedSchemaRequestBody();
    $request->requestBody->directoryArn = 'qui';
    $request->requestBody->dryRun = false;
    $request->requestBody->publishedSchemaArn = 'quibusdam';
    $request->xAmzAlgorithm = 'ex';
    $request->xAmzContentSha256 = 'deleniti';
    $request->xAmzCredential = 'itaque';
    $request->xAmzDate = 'dolorum';
    $request->xAmzSecurityToken = 'architecto';
    $request->xAmzSignature = 'omnis';
    $request->xAmzSignedHeaders = 'tenetur';

    $response = $sdk->sdk->upgradeAppliedSchema($request);

    if ($response->upgradeAppliedSchemaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## upgradePublishedSchema

Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UpgradePublishedSchemaRequest;
use \OpenAPI\OpenAPI\Models\Operations\UpgradePublishedSchemaRequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UpgradePublishedSchemaRequest();
    $request->requestBody = new UpgradePublishedSchemaRequestBody();
    $request->requestBody->developmentSchemaArn = 'quasi';
    $request->requestBody->dryRun = false;
    $request->requestBody->minorVersion = 'at';
    $request->requestBody->publishedSchemaArn = 'et';
    $request->xAmzAlgorithm = 'voluptate';
    $request->xAmzContentSha256 = 'ipsa';
    $request->xAmzCredential = 'minima';
    $request->xAmzDate = 'veritatis';
    $request->xAmzSecurityToken = 'consectetur';
    $request->xAmzSignature = 'adipisci';
    $request->xAmzSignedHeaders = 'iste';

    $response = $sdk->sdk->upgradePublishedSchema($request);

    if ($response->upgradePublishedSchemaResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
