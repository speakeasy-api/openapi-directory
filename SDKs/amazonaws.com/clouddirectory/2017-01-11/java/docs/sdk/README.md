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

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AddFacetToObjectRequest;
import org.openapis.openapi.models.operations.AddFacetToObjectRequestBody;
import org.openapis.openapi.models.operations.AddFacetToObjectRequestBodyObjectReference;
import org.openapis.openapi.models.operations.AddFacetToObjectRequestBodySchemaFacet;
import org.openapis.openapi.models.operations.AddFacetToObjectResponse;
import org.openapis.openapi.models.shared.AttributeKey;
import org.openapis.openapi.models.shared.AttributeKeyAndValue;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypedAttributeValue;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AddFacetToObjectRequest req = new AddFacetToObjectRequest(                new AddFacetToObjectRequestBody(                new AddFacetToObjectRequestBodyObjectReference() {{
                                                selector = "architecto";
                                            }};,                 new AddFacetToObjectRequestBodySchemaFacet() {{
                                                facetName = "ipsa";
                                                schemaArn = "reiciendis";
                                            }};) {{
                                objectAttributeList = new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                    add(new AttributeKeyAndValue(                new AttributeKey("doloribus", "sapiente", "architecto");,                 new TypedAttributeValue() {{
                                                        binaryValue = "mollitia";
                                                        booleanValue = false;
                                                        datetimeValue = OffsetDateTime.parse("2022-05-14T04:53:02.888Z");
                                                        numberValue = "consequuntur";
                                                        stringValue = "repellat";
                                                    }};) {{
                                        key = new AttributeKey("enim", "omnis", "nemo") {{
                                            facetName = "mollitia";
                                            name = "Ernest Ebert";
                                            schemaArn = "nobis";
                                        }};
                                        value = new TypedAttributeValue() {{
                                            binaryValue = "minima";
                                            booleanValue = false;
                                            datetimeValue = OffsetDateTime.parse("2022-12-03T22:47:10.600Z");
                                            numberValue = "iure";
                                            stringValue = "culpa";
                                        }};
                                    }}),
                                    add(new AttributeKeyAndValue(                new AttributeKey("quo", "sequi", "tenetur");,                 new TypedAttributeValue() {{
                                                        binaryValue = "ipsam";
                                                        booleanValue = false;
                                                        datetimeValue = OffsetDateTime.parse("2021-05-11T16:11:54.761Z");
                                                        numberValue = "aut";
                                                        stringValue = "quasi";
                                                    }};) {{
                                        key = new AttributeKey("error", "quia", "quis") {{
                                            facetName = "mollitia";
                                            name = "Francis Jerde";
                                            schemaArn = "velit";
                                        }};
                                        value = new TypedAttributeValue() {{
                                            binaryValue = "vitae";
                                            booleanValue = false;
                                            datetimeValue = OffsetDateTime.parse("2021-09-08T21:06:19.630Z");
                                            numberValue = "enim";
                                            stringValue = "odit";
                                        }};
                                    }}),
                                    add(new AttributeKeyAndValue(                new AttributeKey("doloremque", "reprehenderit", "ut");,                 new TypedAttributeValue() {{
                                                        binaryValue = "maiores";
                                                        booleanValue = false;
                                                        datetimeValue = OffsetDateTime.parse("2022-08-22T19:15:58.586Z");
                                                        numberValue = "dolore";
                                                        stringValue = "iusto";
                                                    }};) {{
                                        key = new AttributeKey("nihil", "praesentium", "voluptatibus") {{
                                            facetName = "error";
                                            name = "Neal Boyer";
                                            schemaArn = "vero";
                                        }};
                                        value = new TypedAttributeValue() {{
                                            binaryValue = "ipsa";
                                            booleanValue = false;
                                            datetimeValue = OffsetDateTime.parse("2022-02-05T15:41:25.512Z");
                                            numberValue = "cum";
                                            stringValue = "perferendis";
                                        }};
                                    }}),
                                }};
                            }};, "dicta") {{
                xAmzAlgorithm = "harum";
                xAmzContentSha256 = "enim";
                xAmzCredential = "accusamus";
                xAmzDate = "commodi";
                xAmzSecurityToken = "repudiandae";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "ipsum";
            }};            

            AddFacetToObjectResponse res = sdk.sdk.addFacetToObject(req);

            if (res.addFacetToObjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## applySchema

Copies the input published schema, at the specified version, into the <a>Directory</a> with the same name and version as that of the published schema.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApplySchemaRequest;
import org.openapis.openapi.models.operations.ApplySchemaRequestBody;
import org.openapis.openapi.models.operations.ApplySchemaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ApplySchemaRequest req = new ApplySchemaRequest(                new ApplySchemaRequestBody("molestias");, "excepturi") {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "modi";
                xAmzCredential = "praesentium";
                xAmzDate = "rem";
                xAmzSecurityToken = "voluptates";
                xAmzSignature = "quasi";
                xAmzSignedHeaders = "repudiandae";
            }};            

            ApplySchemaResponse res = sdk.sdk.applySchema(req);

            if (res.applySchemaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## attachObject

<p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AttachObjectRequest;
import org.openapis.openapi.models.operations.AttachObjectRequestBody;
import org.openapis.openapi.models.operations.AttachObjectRequestBodyChildReference;
import org.openapis.openapi.models.operations.AttachObjectRequestBodyParentReference;
import org.openapis.openapi.models.operations.AttachObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AttachObjectRequest req = new AttachObjectRequest(                new AttachObjectRequestBody(                new AttachObjectRequestBodyChildReference() {{
                                                selector = "veritatis";
                                            }};, "itaque",                 new AttachObjectRequestBodyParentReference() {{
                                                selector = "incidunt";
                                            }};);, "enim") {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "est";
                xAmzCredential = "quibusdam";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quibusdam";
            }};            

            AttachObjectResponse res = sdk.sdk.attachObject(req);

            if (res.attachObjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## attachPolicy

Attaches a policy object to a regular object. An object can have a limited number of attached policies.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AttachPolicyRequest;
import org.openapis.openapi.models.operations.AttachPolicyRequestBody;
import org.openapis.openapi.models.operations.AttachPolicyRequestBodyObjectReference;
import org.openapis.openapi.models.operations.AttachPolicyRequestBodyPolicyReference;
import org.openapis.openapi.models.operations.AttachPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AttachPolicyRequest req = new AttachPolicyRequest(                new AttachPolicyRequestBody(                new AttachPolicyRequestBodyObjectReference() {{
                                                selector = "modi";
                                            }};,                 new AttachPolicyRequestBodyPolicyReference() {{
                                                selector = "qui";
                                            }};);, "aliquid") {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "quos";
                xAmzCredential = "perferendis";
                xAmzDate = "magni";
                xAmzSecurityToken = "assumenda";
                xAmzSignature = "ipsam";
                xAmzSignedHeaders = "alias";
            }};            

            AttachPolicyResponse res = sdk.sdk.attachPolicy(req);

            if (res.attachPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## attachToIndex

Attaches the specified object to the specified index.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AttachToIndexRequest;
import org.openapis.openapi.models.operations.AttachToIndexRequestBody;
import org.openapis.openapi.models.operations.AttachToIndexRequestBodyIndexReference;
import org.openapis.openapi.models.operations.AttachToIndexRequestBodyTargetReference;
import org.openapis.openapi.models.operations.AttachToIndexResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AttachToIndexRequest req = new AttachToIndexRequest(                new AttachToIndexRequestBody(                new AttachToIndexRequestBodyIndexReference() {{
                                                selector = "dolorum";
                                            }};,                 new AttachToIndexRequestBodyTargetReference() {{
                                                selector = "excepturi";
                                            }};);, "tempora") {{
                xAmzAlgorithm = "facilis";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "labore";
                xAmzDate = "delectus";
                xAmzSecurityToken = "eum";
                xAmzSignature = "non";
                xAmzSignedHeaders = "eligendi";
            }};            

            AttachToIndexResponse res = sdk.sdk.attachToIndex(req);

            if (res.attachToIndexResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## attachTypedLink

Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AttachTypedLinkRequest;
import org.openapis.openapi.models.operations.AttachTypedLinkRequestBody;
import org.openapis.openapi.models.operations.AttachTypedLinkRequestBodySourceObjectReference;
import org.openapis.openapi.models.operations.AttachTypedLinkRequestBodyTargetObjectReference;
import org.openapis.openapi.models.operations.AttachTypedLinkRequestBodyTypedLinkFacet;
import org.openapis.openapi.models.operations.AttachTypedLinkResponse;
import org.openapis.openapi.models.shared.AttributeNameAndValue;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypedAttributeValue;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            AttachTypedLinkRequest req = new AttachTypedLinkRequest(                new AttachTypedLinkRequestBody(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                add(new AttributeNameAndValue("a",                 new TypedAttributeValue() {{
                                                                    binaryValue = "dolorum";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-07-21T01:01:39.776Z");
                                                                    numberValue = "illum";
                                                                    stringValue = "maiores";
                                                                }};) {{
                                                    attributeName = "provident";
                                                    value = new TypedAttributeValue() {{
                                                        binaryValue = "necessitatibus";
                                                        booleanValue = false;
                                                        datetimeValue = OffsetDateTime.parse("2021-09-21T14:06:09.271Z");
                                                        numberValue = "dolor";
                                                        stringValue = "debitis";
                                                    }};
                                                }}),
                                                add(new AttributeNameAndValue("aliquid",                 new TypedAttributeValue() {{
                                                                    binaryValue = "laborum";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-04-02T11:21:13.260Z");
                                                                    numberValue = "occaecati";
                                                                    stringValue = "enim";
                                                                }};) {{
                                                    attributeName = "rerum";
                                                    value = new TypedAttributeValue() {{
                                                        binaryValue = "dicta";
                                                        booleanValue = false;
                                                        datetimeValue = OffsetDateTime.parse("2022-03-27T00:52:20.281Z");
                                                        numberValue = "facere";
                                                        stringValue = "ea";
                                                    }};
                                                }}),
                                            }},                 new AttachTypedLinkRequestBodySourceObjectReference() {{
                                                selector = "accusamus";
                                            }};,                 new AttachTypedLinkRequestBodyTargetObjectReference() {{
                                                selector = "delectus";
                                            }};,                 new AttachTypedLinkRequestBodyTypedLinkFacet() {{
                                                schemaArn = "quidem";
                                                typedLinkName = "provident";
                                            }};);, "nam") {{
                xAmzAlgorithm = "id";
                xAmzContentSha256 = "blanditiis";
                xAmzCredential = "deleniti";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "amet";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "nisi";
            }};            

            AttachTypedLinkResponse res = sdk.sdk.attachTypedLink(req);

            if (res.attachTypedLinkResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchRead

Performs all the read operations in a batch. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchReadRequest;
import org.openapis.openapi.models.operations.BatchReadRequestBody;
import org.openapis.openapi.models.operations.BatchReadResponse;
import org.openapis.openapi.models.operations.BatchReadXAmzConsistencyLevelEnum;
import org.openapis.openapi.models.shared.AttributeKey;
import org.openapis.openapi.models.shared.AttributeNameAndValue;
import org.openapis.openapi.models.shared.BatchGetLinkAttributes;
import org.openapis.openapi.models.shared.BatchGetObjectAttributes;
import org.openapis.openapi.models.shared.BatchGetObjectInformation;
import org.openapis.openapi.models.shared.BatchListAttachedIndices;
import org.openapis.openapi.models.shared.BatchListIncomingTypedLinks;
import org.openapis.openapi.models.shared.BatchListIndex;
import org.openapis.openapi.models.shared.BatchListObjectAttributes;
import org.openapis.openapi.models.shared.BatchListObjectChildren;
import org.openapis.openapi.models.shared.BatchListObjectParentPaths;
import org.openapis.openapi.models.shared.BatchListObjectParents;
import org.openapis.openapi.models.shared.BatchListObjectPolicies;
import org.openapis.openapi.models.shared.BatchListOutgoingTypedLinks;
import org.openapis.openapi.models.shared.BatchListPolicyAttachments;
import org.openapis.openapi.models.shared.BatchLookupPolicy;
import org.openapis.openapi.models.shared.BatchReadOperation;
import org.openapis.openapi.models.shared.ObjectAttributeRange;
import org.openapis.openapi.models.shared.ObjectReference;
import org.openapis.openapi.models.shared.RangeModeEnum;
import org.openapis.openapi.models.shared.SchemaFacet;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypedAttributeValue;
import org.openapis.openapi.models.shared.TypedAttributeValueRange;
import org.openapis.openapi.models.shared.TypedLinkAttributeRange;
import org.openapis.openapi.models.shared.TypedLinkSchemaAndFacetName;
import org.openapis.openapi.models.shared.TypedLinkSpecifier;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchReadRequest req = new BatchReadRequest(                new BatchReadRequestBody(                new org.openapis.openapi.models.shared.BatchReadOperation[]{{
                                                add(new BatchReadOperation() {{
                                                    getLinkAttributes = new BatchGetLinkAttributes(                new String[]{{
                                                                        add("quis"),
                                                                    }},                 new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                                        add(new AttributeNameAndValue("dolores",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "minus";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-10-11T06:25:10.430Z");
                                                                                                            numberValue = "vero";
                                                                                                            stringValue = "nostrum";
                                                                                                        }};) {{
                                                                                            attributeName = "dignissimos";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "eaque";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-10-20T00:01:48.775Z");
                                                                                                numberValue = "eos";
                                                                                                stringValue = "perferendis";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("porro",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "consequuntur";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2021-10-04T07:41:53.553Z");
                                                                                                            numberValue = "eaque";
                                                                                                            stringValue = "occaecati";
                                                                                                        }};) {{
                                                                                            attributeName = "hic";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "recusandae";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2021-08-04T18:39:34.709Z");
                                                                                                numberValue = "perspiciatis";
                                                                                                stringValue = "voluptatem";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("dolorum",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "deleniti";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2021-03-26T01:09:56.415Z");
                                                                                                            numberValue = "nobis";
                                                                                                            stringValue = "libero";
                                                                                                        }};) {{
                                                                                            attributeName = "rerum";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "adipisci";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2020-03-14T00:51:21.656Z");
                                                                                                numberValue = "modi";
                                                                                                stringValue = "iste";
                                                                                            }};
                                                                                        }}),
                                                                                    }},                 new ObjectReference() {{
                                                                                        selector = "delectus";
                                                                                    }};,                 new ObjectReference() {{
                                                                                        selector = "quaerat";
                                                                                    }};,                 new TypedLinkSchemaAndFacetName("quos", "aliquid"););) {{
                                                        attributeNames = new String[]{{
                                                            add("molestiae"),
                                                            add("perferendis"),
                                                            add("nihil"),
                                                        }};
                                                        typedLinkSpecifier = new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                            add(new AttributeNameAndValue("architecto",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "architecto";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2021-12-11T05:14:57.773Z");
                                                                                                numberValue = "expedita";
                                                                                                stringValue = "nihil";
                                                                                            }};) {{
                                                                                attributeName = "debitis";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "eius";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-05-22T23:02:53.221Z");
                                                                                    numberValue = "facilis";
                                                                                    stringValue = "in";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("consequuntur",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "praesentium";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-09-01T04:49:52.515Z");
                                                                                                numberValue = "sunt";
                                                                                                stringValue = "quo";
                                                                                            }};) {{
                                                                                attributeName = "repellat";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "quibusdam";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-02-04T19:17:08.641Z");
                                                                                    numberValue = "pariatur";
                                                                                    stringValue = "accusantium";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("ea",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "accusantium";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-01-07T08:38:36.147Z");
                                                                                                numberValue = "quidem";
                                                                                                stringValue = "ipsam";
                                                                                            }};) {{
                                                                                attributeName = "illum";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "pariatur";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-10-07T12:29:38.109Z");
                                                                                    numberValue = "excepturi";
                                                                                    stringValue = "odit";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("voluptatibus",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "perferendis";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-04-23T08:05:27.776Z");
                                                                                                numberValue = "aut";
                                                                                                stringValue = "cumque";
                                                                                            }};) {{
                                                                                attributeName = "voluptate";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "autem";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-11-25T01:41:45.601Z");
                                                                                    numberValue = "pariatur";
                                                                                    stringValue = "nemo";
                                                                                }};
                                                                            }}),
                                                                        }},                 new ObjectReference() {{
                                                                            selector = "corporis";
                                                                        }};,                 new ObjectReference() {{
                                                                            selector = "hic";
                                                                        }};,                 new TypedLinkSchemaAndFacetName("libero", "nobis");) {{
                                                            identityAttributeValues = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                add(new AttributeNameAndValue("nobis",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "eum";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-08-05T15:44:28.456Z");
                                                                                    numberValue = "architecto";
                                                                                    stringValue = "magnam";
                                                                                }};) {{
                                                                    attributeName = "distinctio";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "id";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-09-17T02:55:11.783Z");
                                                                        numberValue = "suscipit";
                                                                        stringValue = "natus";
                                                                    }};
                                                                }}),
                                                                add(new AttributeNameAndValue("accusantium",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "mollitia";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-01-16T22:43:33.071Z");
                                                                                    numberValue = "ad";
                                                                                    stringValue = "eum";
                                                                                }};) {{
                                                                    attributeName = "et";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "excepturi";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-05-30T07:57:16.138Z");
                                                                        numberValue = "quos";
                                                                        stringValue = "sint";
                                                                    }};
                                                                }}),
                                                            }};
                                                            sourceObjectReference = new ObjectReference() {{
                                                                selector = "dolor";
                                                            }};
                                                            targetObjectReference = new ObjectReference() {{
                                                                selector = "necessitatibus";
                                                            }};
                                                            typedLinkFacet = new TypedLinkSchemaAndFacetName("quasi", "iure") {{
                                                                schemaArn = "odit";
                                                                typedLinkName = "nemo";
                                                            }};
                                                        }};
                                                    }};
                                                    getObjectAttributes = new BatchGetObjectAttributes(                new String[]{{
                                                                        add("excepturi"),
                                                                        add("cum"),
                                                                        add("voluptate"),
                                                                        add("dignissimos"),
                                                                    }},                 new ObjectReference() {{
                                                                        selector = "reiciendis";
                                                                    }};,                 new SchemaFacet() {{
                                                                        facetName = "amet";
                                                                        schemaArn = "dolorum";
                                                                    }};) {{
                                                        attributeNames = new String[]{{
                                                            add("dolorem"),
                                                        }};
                                                        objectReference = new ObjectReference() {{
                                                            selector = "dolor";
                                                        }};
                                                        schemaFacet = new SchemaFacet() {{
                                                            facetName = "qui";
                                                            schemaArn = "ipsum";
                                                        }};
                                                    }};
                                                    getObjectInformation = new BatchGetObjectInformation(                new ObjectReference() {{
                                                                        selector = "veritatis";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "numquam";
                                                        }};
                                                    }};
                                                    listAttachedIndices = new BatchListAttachedIndices(                new ObjectReference() {{
                                                                        selector = "odio";
                                                                    }};) {{
                                                        maxResults = 58029L;
                                                        nextToken = "ipsa";
                                                        targetReference = new ObjectReference() {{
                                                            selector = "iure";
                                                        }};
                                                    }};
                                                    listIncomingTypedLinks = new BatchListIncomingTypedLinks(                new ObjectReference() {{
                                                                        selector = "dolorem";
                                                                    }};) {{
                                                        filterAttributeRanges = new org.openapis.openapi.models.shared.TypedLinkAttributeRange[]{{
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.INCLUSIVE) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "necessitatibus";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-01-08T01:15:41.988Z");
                                                                                    numberValue = "nihil";
                                                                                    stringValue = "ipsum";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "voluptate";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-03-10T07:33:18.208Z");
                                                                                    numberValue = "eius";
                                                                                    stringValue = "aspernatur";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "accusamus";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.INCLUSIVE) {{
                                                                    endMode = RangeModeEnum.INCLUSIVE;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "voluptatibus";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-05-20T13:18:59.478Z");
                                                                        numberValue = "eos";
                                                                        stringValue = "atque";
                                                                    }};
                                                                    startMode = RangeModeEnum.FIRST;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "fugiat";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-04-04T12:00:33.616Z");
                                                                        numberValue = "dolorum";
                                                                        stringValue = "iusto";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.LAST, RangeModeEnum.LAST) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "vel";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2020-05-06T13:19:34.143Z");
                                                                                    numberValue = "qui";
                                                                                    stringValue = "dolorum";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "a";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-04-25T01:36:09.517Z");
                                                                                    numberValue = "iusto";
                                                                                    stringValue = "ipsum";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "perferendis";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.EXCLUSIVE) {{
                                                                    endMode = RangeModeEnum.LAST;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "optio";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-01-15T13:56:57.287Z");
                                                                        numberValue = "saepe";
                                                                        stringValue = "suscipit";
                                                                    }};
                                                                    startMode = RangeModeEnum.INCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "provident";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-03-03T16:00:55.670Z");
                                                                        numberValue = "totam";
                                                                        stringValue = "similique";
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                        filterTypedLink = new TypedLinkSchemaAndFacetName("amet", "tempore") {{
                                                            schemaArn = "quisquam";
                                                            typedLinkName = "tenetur";
                                                        }};
                                                        maxResults = 880298L;
                                                        nextToken = "numquam";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "enim";
                                                        }};
                                                    }};
                                                    listIndex = new BatchListIndex(                new ObjectReference() {{
                                                                        selector = "quam";
                                                                    }};) {{
                                                        indexReference = new ObjectReference() {{
                                                            selector = "sapiente";
                                                        }};
                                                        maxResults = 518201L;
                                                        nextToken = "nihil";
                                                        rangesOnIndexedValues = new org.openapis.openapi.models.shared.ObjectAttributeRange[]{{
                                                            add(new ObjectAttributeRange() {{
                                                                attributeKey = new AttributeKey("quam", "ipsum", "incidunt") {{
                                                                    facetName = "expedita";
                                                                    name = "Jane Kassulke";
                                                                    schemaArn = "deserunt";
                                                                }};
                                                                range = new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.LAST) {{
                                                                    endMode = RangeModeEnum.FIRST;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "cupiditate";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2020-05-30T01:52:29.137Z");
                                                                        numberValue = "soluta";
                                                                        stringValue = "dicta";
                                                                    }};
                                                                    startMode = RangeModeEnum.INCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "totam";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-11-13T19:04:59.225Z");
                                                                        numberValue = "dolores";
                                                                        stringValue = "distinctio";
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    listObjectAttributes = new BatchListObjectAttributes(                new ObjectReference() {{
                                                                        selector = "magni";
                                                                    }};) {{
                                                        facetFilter = new SchemaFacet() {{
                                                            facetName = "molestias";
                                                            schemaArn = "temporibus";
                                                        }};
                                                        maxResults = 183280L;
                                                        nextToken = "neque";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "fugit";
                                                        }};
                                                    }};
                                                    listObjectChildren = new BatchListObjectChildren(                new ObjectReference() {{
                                                                        selector = "nam";
                                                                    }};) {{
                                                        maxResults = 488056L;
                                                        nextToken = "sunt";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "ullam";
                                                        }};
                                                    }};
                                                    listObjectParentPaths = new BatchListObjectParentPaths(                new ObjectReference() {{
                                                                        selector = "soluta";
                                                                    }};) {{
                                                        maxResults = 940432L;
                                                        nextToken = "voluptatem";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "cumque";
                                                        }};
                                                    }};
                                                    listObjectParents = new BatchListObjectParents(                new ObjectReference() {{
                                                                        selector = "ipsum";
                                                                    }};) {{
                                                        maxResults = 748664L;
                                                        nextToken = "et";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "saepe";
                                                        }};
                                                    }};
                                                    listObjectPolicies = new BatchListObjectPolicies(                new ObjectReference() {{
                                                                        selector = "tempore";
                                                                    }};) {{
                                                        maxResults = 83422L;
                                                        nextToken = "nobis";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "quos";
                                                        }};
                                                    }};
                                                    listOutgoingTypedLinks = new BatchListOutgoingTypedLinks(                new ObjectReference() {{
                                                                        selector = "corporis";
                                                                    }};) {{
                                                        filterAttributeRanges = new org.openapis.openapi.models.shared.TypedLinkAttributeRange[]{{
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.EXCLUSIVE) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "ut";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-10-29T22:05:37.347Z");
                                                                                    numberValue = "qui";
                                                                                    stringValue = "quae";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "laudantium";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-06-03T03:16:58.870Z");
                                                                                    numberValue = "voluptatibus";
                                                                                    stringValue = "quisquam";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "aperiam";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.EXCLUSIVE) {{
                                                                    endMode = RangeModeEnum.EXCLUSIVE;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "dolorem";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-09-18T06:37:26.413Z");
                                                                        numberValue = "adipisci";
                                                                        stringValue = "dolorum";
                                                                    }};
                                                                    startMode = RangeModeEnum.FIRST;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "quae";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-06-12T04:30:45.210Z");
                                                                        numberValue = "itaque";
                                                                        stringValue = "consequatur";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.EXCLUSIVE) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "ducimus";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-02-26T17:44:28.591Z");
                                                                                    numberValue = "illum";
                                                                                    stringValue = "sequi";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "natus";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-12-17T12:08:06.467Z");
                                                                                    numberValue = "voluptatibus";
                                                                                    stringValue = "exercitationem";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "vero";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.INCLUSIVE) {{
                                                                    endMode = RangeModeEnum.INCLUSIVE;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "quis";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-01-15T00:38:43.469Z");
                                                                        numberValue = "voluptate";
                                                                        stringValue = "consectetur";
                                                                    }};
                                                                    startMode = RangeModeEnum.EXCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "tenetur";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-01-22T09:31:52.637Z");
                                                                        numberValue = "distinctio";
                                                                        stringValue = "quod";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.EXCLUSIVE, RangeModeEnum.LAST) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "ratione";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-06-28T08:50:44.084Z");
                                                                                    numberValue = "dicta";
                                                                                    stringValue = "dolor";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "maiores";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-08-05T18:23:03.713Z");
                                                                                    numberValue = "nulla";
                                                                                    stringValue = "excepturi";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "nulla";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.LAST_BEFORE_MISSING_VALUES) {{
                                                                    endMode = RangeModeEnum.FIRST;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "porro";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2020-01-18T09:21:05.997Z");
                                                                        numberValue = "iusto";
                                                                        stringValue = "eligendi";
                                                                    }};
                                                                    startMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "alias";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-06-18T06:43:12.261Z");
                                                                        numberValue = "ipsam";
                                                                        stringValue = "ea";
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                        filterTypedLink = new TypedLinkSchemaAndFacetName("sapiente", "quisquam") {{
                                                            schemaArn = "voluptatibus";
                                                            typedLinkName = "nostrum";
                                                        }};
                                                        maxResults = 906556L;
                                                        nextToken = "ea";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "impedit";
                                                        }};
                                                    }};
                                                    listPolicyAttachments = new BatchListPolicyAttachments(                new ObjectReference() {{
                                                                        selector = "magnam";
                                                                    }};) {{
                                                        maxResults = 333145L;
                                                        nextToken = "aliquid";
                                                        policyReference = new ObjectReference() {{
                                                            selector = "inventore";
                                                        }};
                                                    }};
                                                    lookupPolicy = new BatchLookupPolicy(                new ObjectReference() {{
                                                                        selector = "recusandae";
                                                                    }};) {{
                                                        maxResults = 407241L;
                                                        nextToken = "quo";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "consectetur";
                                                        }};
                                                    }};
                                                }}),
                                                add(new BatchReadOperation() {{
                                                    getLinkAttributes = new BatchGetLinkAttributes(                new String[]{{
                                                                        add("distinctio"),
                                                                    }},                 new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                                        add(new AttributeNameAndValue("odio",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "occaecati";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-01-15T19:21:50.024Z");
                                                                                                            numberValue = "dolores";
                                                                                                            stringValue = "deserunt";
                                                                                                        }};) {{
                                                                                            attributeName = "dignissimos";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "inventore";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-06-25T15:00:14.304Z");
                                                                                                numberValue = "accusamus";
                                                                                                stringValue = "aliquam";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("consequuntur",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "deleniti";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-04-27T07:00:05.421Z");
                                                                                                            numberValue = "mollitia";
                                                                                                            stringValue = "incidunt";
                                                                                                        }};) {{
                                                                                            attributeName = "molestiae";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "accusantium";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2021-09-16T17:01:25.429Z");
                                                                                                numberValue = "quas";
                                                                                                stringValue = "praesentium";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("consequuntur",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "ratione";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-02-05T01:06:02.008Z");
                                                                                                            numberValue = "occaecati";
                                                                                                            stringValue = "atque";
                                                                                                        }};) {{
                                                                                            attributeName = "atque";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "explicabo";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-08-10T16:09:39.108Z");
                                                                                                numberValue = "fugit";
                                                                                                stringValue = "sapiente";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("quod",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "nam";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2021-10-21T01:36:51.257Z");
                                                                                                            numberValue = "quasi";
                                                                                                            stringValue = "saepe";
                                                                                                        }};) {{
                                                                                            attributeName = "et";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "esse";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2020-05-10T03:57:05.694Z");
                                                                                                numberValue = "veritatis";
                                                                                                stringValue = "esse";
                                                                                            }};
                                                                                        }}),
                                                                                    }},                 new ObjectReference() {{
                                                                                        selector = "vel";
                                                                                    }};,                 new ObjectReference() {{
                                                                                        selector = "harum";
                                                                                    }};,                 new TypedLinkSchemaAndFacetName("molestiae", "rerum"););) {{
                                                        attributeNames = new String[]{{
                                                            add("minima"),
                                                        }};
                                                        typedLinkSpecifier = new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                            add(new AttributeNameAndValue("tempora",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "numquam";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-05-29T22:38:52.265Z");
                                                                                                numberValue = "ipsa";
                                                                                                stringValue = "molestiae";
                                                                                            }};) {{
                                                                                attributeName = "quas";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "assumenda";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-11-11T22:59:32.230Z");
                                                                                    numberValue = "libero";
                                                                                    stringValue = "quasi";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("fuga",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "reprehenderit";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2021-04-18T13:50:09.955Z");
                                                                                                numberValue = "ut";
                                                                                                stringValue = "eum";
                                                                                            }};) {{
                                                                                attributeName = "magnam";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "odio";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-07-17T15:24:44.492Z");
                                                                                    numberValue = "esse";
                                                                                    stringValue = "rem";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("ipsa",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "id";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-08-03T04:27:44.236Z");
                                                                                                numberValue = "quo";
                                                                                                stringValue = "illum";
                                                                                            }};) {{
                                                                                attributeName = "suscipit";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "assumenda";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-06-29T02:09:48.123Z");
                                                                                    numberValue = "quisquam";
                                                                                    stringValue = "veritatis";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("cupiditate",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "consequatur";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-02-09T09:38:41.756Z");
                                                                                                numberValue = "ipsam";
                                                                                                stringValue = "aspernatur";
                                                                                            }};) {{
                                                                                attributeName = "quo";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "fuga";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-10-27T21:30:06.318Z");
                                                                                    numberValue = "voluptas";
                                                                                    stringValue = "ab";
                                                                                }};
                                                                            }}),
                                                                        }},                 new ObjectReference() {{
                                                                            selector = "sequi";
                                                                        }};,                 new ObjectReference() {{
                                                                            selector = "quo";
                                                                        }};,                 new TypedLinkSchemaAndFacetName("esse", "recusandae");) {{
                                                            identityAttributeValues = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                add(new AttributeNameAndValue("aliquam",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "fugit";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-10-05T22:09:33.495Z");
                                                                                    numberValue = "non";
                                                                                    stringValue = "et";
                                                                                }};) {{
                                                                    attributeName = "a";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "libero";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-12-27T19:53:42.787Z");
                                                                        numberValue = "deleniti";
                                                                        stringValue = "impedit";
                                                                    }};
                                                                }}),
                                                            }};
                                                            sourceObjectReference = new ObjectReference() {{
                                                                selector = "dolorum";
                                                            }};
                                                            targetObjectReference = new ObjectReference() {{
                                                                selector = "laborum";
                                                            }};
                                                            typedLinkFacet = new TypedLinkSchemaAndFacetName("eum", "autem") {{
                                                                schemaArn = "placeat";
                                                                typedLinkName = "velit";
                                                            }};
                                                        }};
                                                    }};
                                                    getObjectAttributes = new BatchGetObjectAttributes(                new String[]{{
                                                                        add("cumque"),
                                                                    }},                 new ObjectReference() {{
                                                                        selector = "consequuntur";
                                                                    }};,                 new SchemaFacet() {{
                                                                        facetName = "consequatur";
                                                                        schemaArn = "minus";
                                                                    }};) {{
                                                        attributeNames = new String[]{{
                                                            add("minima"),
                                                            add("distinctio"),
                                                            add("eligendi"),
                                                        }};
                                                        objectReference = new ObjectReference() {{
                                                            selector = "sit";
                                                        }};
                                                        schemaFacet = new SchemaFacet() {{
                                                            facetName = "culpa";
                                                            schemaArn = "tempore";
                                                        }};
                                                    }};
                                                    getObjectInformation = new BatchGetObjectInformation(                new ObjectReference() {{
                                                                        selector = "sapiente";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "quaerat";
                                                        }};
                                                    }};
                                                    listAttachedIndices = new BatchListAttachedIndices(                new ObjectReference() {{
                                                                        selector = "provident";
                                                                    }};) {{
                                                        maxResults = 232865L;
                                                        nextToken = "esse";
                                                        targetReference = new ObjectReference() {{
                                                            selector = "blanditiis";
                                                        }};
                                                    }};
                                                    listIncomingTypedLinks = new BatchListIncomingTypedLinks(                new ObjectReference() {{
                                                                        selector = "possimus";
                                                                    }};) {{
                                                        filterAttributeRanges = new org.openapis.openapi.models.shared.TypedLinkAttributeRange[]{{
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.INCLUSIVE) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "culpa";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-01-19T12:09:14.633Z");
                                                                                    numberValue = "quae";
                                                                                    stringValue = "earum";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "vel";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-09-28T13:55:38.564Z");
                                                                                    numberValue = "libero";
                                                                                    stringValue = "illum";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "nulla";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.FIRST) {{
                                                                    endMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "esse";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-01-18T13:34:46.515Z");
                                                                        numberValue = "error";
                                                                        stringValue = "sint";
                                                                    }};
                                                                    startMode = RangeModeEnum.EXCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "possimus";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-02-03T06:31:44.623Z");
                                                                        numberValue = "asperiores";
                                                                        stringValue = "facere";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.EXCLUSIVE, RangeModeEnum.INCLUSIVE) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "architecto";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-02-09T22:19:01.627Z");
                                                                                    numberValue = "quasi";
                                                                                    stringValue = "at";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "et";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-12-11T13:44:20.631Z");
                                                                                    numberValue = "minima";
                                                                                    stringValue = "veritatis";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "soluta";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.LAST_BEFORE_MISSING_VALUES) {{
                                                                    endMode = RangeModeEnum.FIRST;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "aliquam";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-08-22T20:24:31.399Z");
                                                                        numberValue = "ullam";
                                                                        stringValue = "reprehenderit";
                                                                    }};
                                                                    startMode = RangeModeEnum.LAST;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "nisi";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-06-20T21:00:03.729Z");
                                                                        numberValue = "qui";
                                                                        stringValue = "quibusdam";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.LAST) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "impedit";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-08-16T16:15:17.905Z");
                                                                                    numberValue = "aut";
                                                                                    stringValue = "dignissimos";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "dicta";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-02-22T18:20:18.826Z");
                                                                                    numberValue = "velit";
                                                                                    stringValue = "voluptatibus";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "consectetur";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.LAST) {{
                                                                    endMode = RangeModeEnum.LAST;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "iste";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-11-25T18:47:58.319Z");
                                                                        numberValue = "rem";
                                                                        stringValue = "aut";
                                                                    }};
                                                                    startMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "eum";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-11-12T07:20:30.934Z");
                                                                        numberValue = "corrupti";
                                                                        stringValue = "non";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.EXCLUSIVE) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "labore";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-10-04T21:10:21.697Z");
                                                                                    numberValue = "fuga";
                                                                                    stringValue = "id";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "suscipit";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-05-14T14:45:53.115Z");
                                                                                    numberValue = "est";
                                                                                    stringValue = "recusandae";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "voluptas";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.LAST) {{
                                                                    endMode = RangeModeEnum.EXCLUSIVE;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "aperiam";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-09-09T19:48:26.093Z");
                                                                        numberValue = "consequuntur";
                                                                        stringValue = "repellendus";
                                                                    }};
                                                                    startMode = RangeModeEnum.INCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "maxime";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-05-12T09:23:17.883Z");
                                                                        numberValue = "asperiores";
                                                                        stringValue = "nemo";
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                        filterTypedLink = new TypedLinkSchemaAndFacetName("vel", "ducimus") {{
                                                            schemaArn = "totam";
                                                            typedLinkName = "fugiat";
                                                        }};
                                                        maxResults = 554688L;
                                                        nextToken = "vel";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "labore";
                                                        }};
                                                    }};
                                                    listIndex = new BatchListIndex(                new ObjectReference() {{
                                                                        selector = "adipisci";
                                                                    }};) {{
                                                        indexReference = new ObjectReference() {{
                                                            selector = "facilis";
                                                        }};
                                                        maxResults = 738227L;
                                                        nextToken = "commodi";
                                                        rangesOnIndexedValues = new org.openapis.openapi.models.shared.ObjectAttributeRange[]{{
                                                            add(new ObjectAttributeRange() {{
                                                                attributeKey = new AttributeKey("cum", "consectetur", "in") {{
                                                                    facetName = "corporis";
                                                                    name = "Mack Hettinger";
                                                                    schemaArn = "aperiam";
                                                                }};
                                                                range = new TypedAttributeValueRange(RangeModeEnum.EXCLUSIVE, RangeModeEnum.LAST) {{
                                                                    endMode = RangeModeEnum.LAST;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "earum";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-03-25T07:54:13.852Z");
                                                                        numberValue = "doloribus";
                                                                        stringValue = "suscipit";
                                                                    }};
                                                                    startMode = RangeModeEnum.EXCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "quidem";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2020-04-23T16:59:51.275Z");
                                                                        numberValue = "dolore";
                                                                        stringValue = "sunt";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new ObjectAttributeRange() {{
                                                                attributeKey = new AttributeKey("corporis", "harum", "laboriosam") {{
                                                                    facetName = "non";
                                                                    name = "Heather Kuhn";
                                                                    schemaArn = "consectetur";
                                                                }};
                                                                range = new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.INCLUSIVE) {{
                                                                    endMode = RangeModeEnum.FIRST;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "voluptates";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-10-09T21:55:56.048Z");
                                                                        numberValue = "accusamus";
                                                                        stringValue = "similique";
                                                                    }};
                                                                    startMode = RangeModeEnum.LAST;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "aspernatur";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-08-17T09:37:02.210Z");
                                                                        numberValue = "voluptas";
                                                                        stringValue = "minima";
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    listObjectAttributes = new BatchListObjectAttributes(                new ObjectReference() {{
                                                                        selector = "aliquam";
                                                                    }};) {{
                                                        facetFilter = new SchemaFacet() {{
                                                            facetName = "minus";
                                                            schemaArn = "dolores";
                                                        }};
                                                        maxResults = 503934L;
                                                        nextToken = "in";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "dolore";
                                                        }};
                                                    }};
                                                    listObjectChildren = new BatchListObjectChildren(                new ObjectReference() {{
                                                                        selector = "adipisci";
                                                                    }};) {{
                                                        maxResults = 885963L;
                                                        nextToken = "temporibus";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "ullam";
                                                        }};
                                                    }};
                                                    listObjectParentPaths = new BatchListObjectParentPaths(                new ObjectReference() {{
                                                                        selector = "hic";
                                                                    }};) {{
                                                        maxResults = 738391L;
                                                        nextToken = "blanditiis";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "quas";
                                                        }};
                                                    }};
                                                    listObjectParents = new BatchListObjectParents(                new ObjectReference() {{
                                                                        selector = "pariatur";
                                                                    }};) {{
                                                        maxResults = 201517L;
                                                        nextToken = "culpa";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "corrupti";
                                                        }};
                                                    }};
                                                    listObjectPolicies = new BatchListObjectPolicies(                new ObjectReference() {{
                                                                        selector = "nobis";
                                                                    }};) {{
                                                        maxResults = 519643L;
                                                        nextToken = "hic";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "exercitationem";
                                                        }};
                                                    }};
                                                    listOutgoingTypedLinks = new BatchListOutgoingTypedLinks(                new ObjectReference() {{
                                                                        selector = "ea";
                                                                    }};) {{
                                                        filterAttributeRanges = new org.openapis.openapi.models.shared.TypedLinkAttributeRange[]{{
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.FIRST) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "voluptas";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-10-19T23:26:17.500Z");
                                                                                    numberValue = "suscipit";
                                                                                    stringValue = "sapiente";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "debitis";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-01-12T18:07:07.173Z");
                                                                                    numberValue = "perferendis";
                                                                                    stringValue = "corrupti";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "rerum";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.LAST_BEFORE_MISSING_VALUES) {{
                                                                    endMode = RangeModeEnum.FIRST;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "reiciendis";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-01-03T01:02:56.740Z");
                                                                        numberValue = "facilis";
                                                                        stringValue = "voluptate";
                                                                    }};
                                                                    startMode = RangeModeEnum.INCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "ab";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-06-01T06:14:54.164Z");
                                                                        numberValue = "laborum";
                                                                        stringValue = "sed";
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                        filterTypedLink = new TypedLinkSchemaAndFacetName("sed", "provident") {{
                                                            schemaArn = "maiores";
                                                            typedLinkName = "incidunt";
                                                        }};
                                                        maxResults = 258702L;
                                                        nextToken = "necessitatibus";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "ipsum";
                                                        }};
                                                    }};
                                                    listPolicyAttachments = new BatchListPolicyAttachments(                new ObjectReference() {{
                                                                        selector = "tempora";
                                                                    }};) {{
                                                        maxResults = 579912L;
                                                        nextToken = "quos";
                                                        policyReference = new ObjectReference() {{
                                                            selector = "voluptatibus";
                                                        }};
                                                    }};
                                                    lookupPolicy = new BatchLookupPolicy(                new ObjectReference() {{
                                                                        selector = "ex";
                                                                    }};) {{
                                                        maxResults = 273009L;
                                                        nextToken = "voluptate";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "reiciendis";
                                                        }};
                                                    }};
                                                }}),
                                                add(new BatchReadOperation() {{
                                                    getLinkAttributes = new BatchGetLinkAttributes(                new String[]{{
                                                                        add("facere"),
                                                                        add("fuga"),
                                                                    }},                 new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                                        add(new AttributeNameAndValue("atque",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "reprehenderit";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2021-06-10T15:39:04.964Z");
                                                                                                            numberValue = "suscipit";
                                                                                                            stringValue = "quidem";
                                                                                                        }};) {{
                                                                                            attributeName = "mollitia";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "veniam";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-03-18T08:14:24.399Z");
                                                                                                numberValue = "repudiandae";
                                                                                                stringValue = "quasi";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("atque",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "error";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2020-05-04T18:40:14.345Z");
                                                                                                            numberValue = "accusamus";
                                                                                                            stringValue = "natus";
                                                                                                        }};) {{
                                                                                            attributeName = "maxime";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "et";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-10-09T20:49:35.642Z");
                                                                                                numberValue = "assumenda";
                                                                                                stringValue = "ea";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("error",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "blanditiis";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-01-29T08:13:54.022Z");
                                                                                                            numberValue = "atque";
                                                                                                            stringValue = "atque";
                                                                                                        }};) {{
                                                                                            attributeName = "minima";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "aspernatur";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-01-08T02:07:04.894Z");
                                                                                                numberValue = "corrupti";
                                                                                                stringValue = "at";
                                                                                            }};
                                                                                        }}),
                                                                                    }},                 new ObjectReference() {{
                                                                                        selector = "sunt";
                                                                                    }};,                 new ObjectReference() {{
                                                                                        selector = "recusandae";
                                                                                    }};,                 new TypedLinkSchemaAndFacetName("dolorum", "repellendus"););) {{
                                                        attributeNames = new String[]{{
                                                            add("non"),
                                                        }};
                                                        typedLinkSpecifier = new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                            add(new AttributeNameAndValue("sed",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "sit";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-08-28T22:43:39.407Z");
                                                                                                numberValue = "saepe";
                                                                                                stringValue = "error";
                                                                                            }};) {{
                                                                                attributeName = "quas";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "repudiandae";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-11-29T08:01:39.148Z");
                                                                                    numberValue = "blanditiis";
                                                                                    stringValue = "ex";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("architecto",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "occaecati";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-04-22T05:26:04.783Z");
                                                                                                numberValue = "atque";
                                                                                                stringValue = "laborum";
                                                                                            }};) {{
                                                                                attributeName = "consequatur";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "incidunt";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-05-16T07:46:15.799Z");
                                                                                    numberValue = "harum";
                                                                                    stringValue = "dicta";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("voluptate",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "unde";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2021-03-27T07:55:22.584Z");
                                                                                                numberValue = "repellendus";
                                                                                                stringValue = "delectus";
                                                                                            }};) {{
                                                                                attributeName = "nam";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "tenetur";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-12-31T00:19:10.437Z");
                                                                                    numberValue = "amet";
                                                                                    stringValue = "deserunt";
                                                                                }};
                                                                            }}),
                                                                        }},                 new ObjectReference() {{
                                                                            selector = "voluptates";
                                                                        }};,                 new ObjectReference() {{
                                                                            selector = "perferendis";
                                                                        }};,                 new TypedLinkSchemaAndFacetName("est", "quidem");) {{
                                                            identityAttributeValues = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                add(new AttributeNameAndValue("rem",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "sit";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-02-14T22:16:10.503Z");
                                                                                    numberValue = "veniam";
                                                                                    stringValue = "minima";
                                                                                }};) {{
                                                                    attributeName = "praesentium";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "facilis";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-09-21T14:42:08.721Z");
                                                                        numberValue = "ipsam";
                                                                        stringValue = "debitis";
                                                                    }};
                                                                }}),
                                                                add(new AttributeNameAndValue("numquam",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "veniam";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-02-10T10:18:57.740Z");
                                                                                    numberValue = "beatae";
                                                                                    stringValue = "laudantium";
                                                                                }};) {{
                                                                    attributeName = "recusandae";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "reiciendis";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-06-30T09:48:42.630Z");
                                                                        numberValue = "aperiam";
                                                                        stringValue = "saepe";
                                                                    }};
                                                                }}),
                                                                add(new AttributeNameAndValue("error",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "hic";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-03-20T05:03:12.319Z");
                                                                                    numberValue = "neque";
                                                                                    stringValue = "dolorum";
                                                                                }};) {{
                                                                    attributeName = "exercitationem";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "praesentium";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-03-24T14:47:17.315Z");
                                                                        numberValue = "dolorum";
                                                                        stringValue = "voluptatum";
                                                                    }};
                                                                }}),
                                                                add(new AttributeNameAndValue("atque",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "fugit";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-02-22T10:47:09.142Z");
                                                                                    numberValue = "voluptatem";
                                                                                    stringValue = "culpa";
                                                                                }};) {{
                                                                    attributeName = "nostrum";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "officia";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-11-26T16:42:33.328Z");
                                                                        numberValue = "accusamus";
                                                                        stringValue = "tempora";
                                                                    }};
                                                                }}),
                                                            }};
                                                            sourceObjectReference = new ObjectReference() {{
                                                                selector = "expedita";
                                                            }};
                                                            targetObjectReference = new ObjectReference() {{
                                                                selector = "magnam";
                                                            }};
                                                            typedLinkFacet = new TypedLinkSchemaAndFacetName("ipsam", "sit") {{
                                                                schemaArn = "consequatur";
                                                                typedLinkName = "esse";
                                                            }};
                                                        }};
                                                    }};
                                                    getObjectAttributes = new BatchGetObjectAttributes(                new String[]{{
                                                                        add("dolores"),
                                                                    }},                 new ObjectReference() {{
                                                                        selector = "enim";
                                                                    }};,                 new SchemaFacet() {{
                                                                        facetName = "laboriosam";
                                                                        schemaArn = "velit";
                                                                    }};) {{
                                                        attributeNames = new String[]{{
                                                            add("reiciendis"),
                                                            add("doloremque"),
                                                        }};
                                                        objectReference = new ObjectReference() {{
                                                            selector = "repudiandae";
                                                        }};
                                                        schemaFacet = new SchemaFacet() {{
                                                            facetName = "dicta";
                                                            schemaArn = "accusantium";
                                                        }};
                                                    }};
                                                    getObjectInformation = new BatchGetObjectInformation(                new ObjectReference() {{
                                                                        selector = "molestias";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "a";
                                                        }};
                                                    }};
                                                    listAttachedIndices = new BatchListAttachedIndices(                new ObjectReference() {{
                                                                        selector = "occaecati";
                                                                    }};) {{
                                                        maxResults = 300029L;
                                                        nextToken = "saepe";
                                                        targetReference = new ObjectReference() {{
                                                            selector = "consequuntur";
                                                        }};
                                                    }};
                                                    listIncomingTypedLinks = new BatchListIncomingTypedLinks(                new ObjectReference() {{
                                                                        selector = "sapiente";
                                                                    }};) {{
                                                        filterAttributeRanges = new org.openapis.openapi.models.shared.TypedLinkAttributeRange[]{{
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.LAST, RangeModeEnum.EXCLUSIVE) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "doloremque";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-12-10T02:53:15.660Z");
                                                                                    numberValue = "totam";
                                                                                    stringValue = "quae";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "molestiae";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-06-13T02:57:02.580Z");
                                                                                    numberValue = "cum";
                                                                                    stringValue = "iure";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "perspiciatis";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.EXCLUSIVE) {{
                                                                    endMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "adipisci";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-04-04T22:16:56.307Z");
                                                                        numberValue = "consequuntur";
                                                                        stringValue = "fugit";
                                                                    }};
                                                                    startMode = RangeModeEnum.INCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "quis";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-05-17T16:22:29.335Z");
                                                                        numberValue = "illo";
                                                                        stringValue = "corporis";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.EXCLUSIVE) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "reiciendis";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-05-03T16:31:59.395Z");
                                                                                    numberValue = "minima";
                                                                                    stringValue = "dolore";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "dolorum";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-12-08T22:18:03.712Z");
                                                                                    numberValue = "recusandae";
                                                                                    stringValue = "omnis";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "necessitatibus";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.LAST) {{
                                                                    endMode = RangeModeEnum.FIRST;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "laborum";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-12-10T20:58:20.380Z");
                                                                        numberValue = "rem";
                                                                        stringValue = "aliquam";
                                                                    }};
                                                                    startMode = RangeModeEnum.LAST;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "repellat";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-08-21T19:13:25.245Z");
                                                                        numberValue = "perspiciatis";
                                                                        stringValue = "nihil";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.EXCLUSIVE, RangeModeEnum.LAST_BEFORE_MISSING_VALUES) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "aspernatur";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-11-26T15:59:49.659Z");
                                                                                    numberValue = "animi";
                                                                                    stringValue = "nostrum";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "mollitia";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-05-11T03:29:26.448Z");
                                                                                    numberValue = "animi";
                                                                                    stringValue = "ex";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "quaerat";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.LAST, RangeModeEnum.LAST_BEFORE_MISSING_VALUES) {{
                                                                    endMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "ex";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-05-14T22:22:36.102Z");
                                                                        numberValue = "adipisci";
                                                                        stringValue = "debitis";
                                                                    }};
                                                                    startMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "eum";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-01-27T04:48:14.748Z");
                                                                        numberValue = "esse";
                                                                        stringValue = "provident";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.EXCLUSIVE, RangeModeEnum.INCLUSIVE) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "vitae";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-06-16T06:32:28.803Z");
                                                                                    numberValue = "quis";
                                                                                    stringValue = "inventore";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "fugit";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-10-24T09:55:31.770Z");
                                                                                    numberValue = "perferendis";
                                                                                    stringValue = "velit";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "aliquid";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.EXCLUSIVE) {{
                                                                    endMode = RangeModeEnum.FIRST;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "repellat";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-12-11T16:15:06.555Z");
                                                                        numberValue = "in";
                                                                        stringValue = "nam";
                                                                    }};
                                                                    startMode = RangeModeEnum.EXCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "officia";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-05-17T11:17:46.661Z");
                                                                        numberValue = "modi";
                                                                        stringValue = "voluptatibus";
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                        filterTypedLink = new TypedLinkSchemaAndFacetName("eius", "rem") {{
                                                            schemaArn = "aspernatur";
                                                            typedLinkName = "eum";
                                                        }};
                                                        maxResults = 871083L;
                                                        nextToken = "impedit";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "eos";
                                                        }};
                                                    }};
                                                    listIndex = new BatchListIndex(                new ObjectReference() {{
                                                                        selector = "et";
                                                                    }};) {{
                                                        indexReference = new ObjectReference() {{
                                                            selector = "eum";
                                                        }};
                                                        maxResults = 117320L;
                                                        nextToken = "minima";
                                                        rangesOnIndexedValues = new org.openapis.openapi.models.shared.ObjectAttributeRange[]{{
                                                            add(new ObjectAttributeRange() {{
                                                                attributeKey = new AttributeKey("earum", "perspiciatis", "maiores") {{
                                                                    facetName = "cupiditate";
                                                                    name = "Darin Rodriguez";
                                                                    schemaArn = "eaque";
                                                                }};
                                                                range = new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.FIRST) {{
                                                                    endMode = RangeModeEnum.EXCLUSIVE;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "aliquid";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-11-10T12:47:28.024Z");
                                                                        numberValue = "dolorem";
                                                                        stringValue = "fugit";
                                                                    }};
                                                                    startMode = RangeModeEnum.INCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "fuga";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-05-06T06:45:54.702Z");
                                                                        numberValue = "necessitatibus";
                                                                        stringValue = "nulla";
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    listObjectAttributes = new BatchListObjectAttributes(                new ObjectReference() {{
                                                                        selector = "quasi";
                                                                    }};) {{
                                                        facetFilter = new SchemaFacet() {{
                                                            facetName = "ducimus";
                                                            schemaArn = "natus";
                                                        }};
                                                        maxResults = 581082L;
                                                        nextToken = "suscipit";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "adipisci";
                                                        }};
                                                    }};
                                                    listObjectChildren = new BatchListObjectChildren(                new ObjectReference() {{
                                                                        selector = "necessitatibus";
                                                                    }};) {{
                                                        maxResults = 169025L;
                                                        nextToken = "doloribus";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "nulla";
                                                        }};
                                                    }};
                                                    listObjectParentPaths = new BatchListObjectParentPaths(                new ObjectReference() {{
                                                                        selector = "molestiae";
                                                                    }};) {{
                                                        maxResults = 58534L;
                                                        nextToken = "tempora";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "nihil";
                                                        }};
                                                    }};
                                                    listObjectParents = new BatchListObjectParents(                new ObjectReference() {{
                                                                        selector = "praesentium";
                                                                    }};) {{
                                                        maxResults = 115834L;
                                                        nextToken = "iusto";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "esse";
                                                        }};
                                                    }};
                                                    listObjectPolicies = new BatchListObjectPolicies(                new ObjectReference() {{
                                                                        selector = "architecto";
                                                                    }};) {{
                                                        maxResults = 979963L;
                                                        nextToken = "reiciendis";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "vel";
                                                        }};
                                                    }};
                                                    listOutgoingTypedLinks = new BatchListOutgoingTypedLinks(                new ObjectReference() {{
                                                                        selector = "porro";
                                                                    }};) {{
                                                        filterAttributeRanges = new org.openapis.openapi.models.shared.TypedLinkAttributeRange[]{{
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.LAST) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "aliquid";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-07-27T09:46:52.119Z");
                                                                                    numberValue = "voluptas";
                                                                                    stringValue = "iste";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "id";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-05-17T17:51:43.476Z");
                                                                                    numberValue = "possimus";
                                                                                    stringValue = "voluptates";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "doloremque";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.LAST) {{
                                                                    endMode = RangeModeEnum.FIRST;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "odio";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-07-17T17:39:03.341Z");
                                                                        numberValue = "ex";
                                                                        stringValue = "consectetur";
                                                                    }};
                                                                    startMode = RangeModeEnum.LAST;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "ipsa";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-10-02T14:14:43.935Z");
                                                                        numberValue = "nostrum";
                                                                        stringValue = "fugiat";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.INCLUSIVE) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "aliquid";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-06-21T05:39:54.582Z");
                                                                                    numberValue = "omnis";
                                                                                    stringValue = "veritatis";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "rerum";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-09-24T14:32:36.483Z");
                                                                                    numberValue = "voluptatem";
                                                                                    stringValue = "sapiente";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "mollitia";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.FIRST) {{
                                                                    endMode = RangeModeEnum.INCLUSIVE;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "libero";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-06-19T00:33:15.754Z");
                                                                        numberValue = "enim";
                                                                        stringValue = "vitae";
                                                                    }};
                                                                    startMode = RangeModeEnum.EXCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "ex";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-10-14T02:46:55.259Z");
                                                                        numberValue = "ut";
                                                                        stringValue = "ad";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.LAST) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "perferendis";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-06-12T15:01:22.390Z");
                                                                                    numberValue = "impedit";
                                                                                    stringValue = "quibusdam";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "nam";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-05-14T19:17:09.662Z");
                                                                                    numberValue = "dolor";
                                                                                    stringValue = "aliquam";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "officiis";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.LAST, RangeModeEnum.EXCLUSIVE) {{
                                                                    endMode = RangeModeEnum.FIRST;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "fuga";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2020-04-30T00:15:31.727Z");
                                                                        numberValue = "voluptatem";
                                                                        stringValue = "alias";
                                                                    }};
                                                                    startMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "earum";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-01-16T05:13:39.110Z");
                                                                        numberValue = "rem";
                                                                        stringValue = "minus";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.LAST, RangeModeEnum.FIRST) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "ipsa";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-03-06T19:49:32.641Z");
                                                                                    numberValue = "impedit";
                                                                                    stringValue = "officiis";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "esse";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-07-17T01:27:56.063Z");
                                                                                    numberValue = "veniam";
                                                                                    stringValue = "nesciunt";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "inventore";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.LAST, RangeModeEnum.EXCLUSIVE) {{
                                                                    endMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "veritatis";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-10-12T04:34:00.871Z");
                                                                        numberValue = "consequatur";
                                                                        stringValue = "architecto";
                                                                    }};
                                                                    startMode = RangeModeEnum.FIRST;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "modi";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-12-07T20:31:49.684Z");
                                                                        numberValue = "laudantium";
                                                                        stringValue = "quae";
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                        filterTypedLink = new TypedLinkSchemaAndFacetName("vel", "voluptatum") {{
                                                            schemaArn = "expedita";
                                                            typedLinkName = "eum";
                                                        }};
                                                        maxResults = 301692L;
                                                        nextToken = "exercitationem";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "ab";
                                                        }};
                                                    }};
                                                    listPolicyAttachments = new BatchListPolicyAttachments(                new ObjectReference() {{
                                                                        selector = "recusandae";
                                                                    }};) {{
                                                        maxResults = 421844L;
                                                        nextToken = "nobis";
                                                        policyReference = new ObjectReference() {{
                                                            selector = "laboriosam";
                                                        }};
                                                    }};
                                                    lookupPolicy = new BatchLookupPolicy(                new ObjectReference() {{
                                                                        selector = "necessitatibus";
                                                                    }};) {{
                                                        maxResults = 160393L;
                                                        nextToken = "voluptatem";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "exercitationem";
                                                        }};
                                                    }};
                                                }}),
                                            }});, "quasi") {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "at";
                xAmzCredential = "vero";
                xAmzDate = "est";
                xAmzSecurityToken = "harum";
                xAmzSignature = "sequi";
                xAmzSignedHeaders = "doloribus";
                xAmzConsistencyLevel = BatchReadXAmzConsistencyLevelEnum.EVENTUAL;
            }};            

            BatchReadResponse res = sdk.sdk.batchRead(req);

            if (res.batchReadResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## batchWrite

Performs all the write operations in a batch. Either all the operations succeed or none.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BatchWriteRequest;
import org.openapis.openapi.models.operations.BatchWriteRequestBody;
import org.openapis.openapi.models.operations.BatchWriteResponse;
import org.openapis.openapi.models.shared.AttributeKey;
import org.openapis.openapi.models.shared.AttributeKeyAndValue;
import org.openapis.openapi.models.shared.AttributeNameAndValue;
import org.openapis.openapi.models.shared.BatchAddFacetToObject;
import org.openapis.openapi.models.shared.BatchAttachObject;
import org.openapis.openapi.models.shared.BatchAttachPolicy;
import org.openapis.openapi.models.shared.BatchAttachToIndex;
import org.openapis.openapi.models.shared.BatchAttachTypedLink;
import org.openapis.openapi.models.shared.BatchCreateIndex;
import org.openapis.openapi.models.shared.BatchCreateObject;
import org.openapis.openapi.models.shared.BatchDeleteObject;
import org.openapis.openapi.models.shared.BatchDetachFromIndex;
import org.openapis.openapi.models.shared.BatchDetachObject;
import org.openapis.openapi.models.shared.BatchDetachPolicy;
import org.openapis.openapi.models.shared.BatchDetachTypedLink;
import org.openapis.openapi.models.shared.BatchRemoveFacetFromObject;
import org.openapis.openapi.models.shared.BatchUpdateLinkAttributes;
import org.openapis.openapi.models.shared.BatchUpdateObjectAttributes;
import org.openapis.openapi.models.shared.BatchWriteOperation;
import org.openapis.openapi.models.shared.LinkAttributeAction;
import org.openapis.openapi.models.shared.LinkAttributeUpdate;
import org.openapis.openapi.models.shared.ObjectAttributeAction;
import org.openapis.openapi.models.shared.ObjectAttributeUpdate;
import org.openapis.openapi.models.shared.ObjectReference;
import org.openapis.openapi.models.shared.SchemaFacet;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypedAttributeValue;
import org.openapis.openapi.models.shared.TypedLinkSchemaAndFacetName;
import org.openapis.openapi.models.shared.TypedLinkSpecifier;
import org.openapis.openapi.models.shared.UpdateActionTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchWriteRequest req = new BatchWriteRequest(                new BatchWriteRequestBody(                new org.openapis.openapi.models.shared.BatchWriteOperation[]{{
                                                add(new BatchWriteOperation() {{
                                                    addFacetToObject = new BatchAddFacetToObject(                new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("est", "quis", "sint");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "accusamus";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2020-03-02T04:41:46.760Z");
                                                                                            numberValue = "necessitatibus";
                                                                                            stringValue = "asperiores";
                                                                                        }};) {{
                                                                            key = new AttributeKey("maiores", "enim", "sint") {{
                                                                                facetName = "nam";
                                                                                name = "Kenneth Hilpert Sr.";
                                                                                schemaArn = "non";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "nulla";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-01-31T07:01:27.539Z");
                                                                                numberValue = "nemo";
                                                                                stringValue = "reprehenderit";
                                                                            }};
                                                                        }}),
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("nam", "dolore", "iusto");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "voluptate";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-07-04T16:55:45.290Z");
                                                                                            numberValue = "neque";
                                                                                            stringValue = "quo";
                                                                                        }};) {{
                                                                            key = new AttributeKey("consectetur", "velit", "atque") {{
                                                                                facetName = "ex";
                                                                                name = "Miss Alyssa Wintheiser";
                                                                                schemaArn = "laborum";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "ipsum";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-07-03T04:15:46.912Z");
                                                                                numberValue = "soluta";
                                                                                stringValue = "repudiandae";
                                                                            }};
                                                                        }}),
                                                                    }},                 new ObjectReference() {{
                                                                        selector = "deleniti";
                                                                    }};,                 new SchemaFacet() {{
                                                                        facetName = "quibusdam";
                                                                        schemaArn = "iure";
                                                                    }};) {{
                                                        objectAttributeList = new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                            add(new AttributeKeyAndValue(                new AttributeKey("rem", "fugiat", "dicta");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "nisi";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-10-07T22:14:16.744Z");
                                                                                numberValue = "aperiam";
                                                                                stringValue = "cupiditate";
                                                                            }};) {{
                                                                key = new AttributeKey("eius", "aspernatur", "ducimus") {{
                                                                    facetName = "voluptate";
                                                                    name = "Gerard Hodkiewicz";
                                                                    schemaArn = "quos";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "nesciunt";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2021-12-21T17:45:55.733Z");
                                                                    numberValue = "incidunt";
                                                                    stringValue = "quasi";
                                                                }};
                                                            }}),
                                                            add(new AttributeKeyAndValue(                new AttributeKey("minima", "praesentium", "maxime");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "magnam";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2021-05-09T07:07:29.255Z");
                                                                                numberValue = "commodi";
                                                                                stringValue = "itaque";
                                                                            }};) {{
                                                                key = new AttributeKey("magni", "inventore", "fuga") {{
                                                                    facetName = "reiciendis";
                                                                    name = "John Monahan";
                                                                    schemaArn = "iste";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "accusamus";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2020-11-04T00:22:56.189Z");
                                                                    numberValue = "omnis";
                                                                    stringValue = "delectus";
                                                                }};
                                                            }}),
                                                        }};
                                                        objectReference = new ObjectReference() {{
                                                            selector = "commodi";
                                                        }};
                                                        schemaFacet = new SchemaFacet() {{
                                                            facetName = "totam";
                                                            schemaArn = "earum";
                                                        }};
                                                    }};
                                                    attachObject = new BatchAttachObject(                new ObjectReference() {{
                                                                        selector = "magnam";
                                                                    }};, "quibusdam",                 new ObjectReference() {{
                                                                        selector = "inventore";
                                                                    }};) {{
                                                        childReference = new ObjectReference() {{
                                                            selector = "odit";
                                                        }};
                                                        linkName = "voluptatibus";
                                                        parentReference = new ObjectReference() {{
                                                            selector = "vel";
                                                        }};
                                                    }};
                                                    attachPolicy = new BatchAttachPolicy(                new ObjectReference() {{
                                                                        selector = "architecto";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "voluptatibus";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "facere";
                                                        }};
                                                        policyReference = new ObjectReference() {{
                                                            selector = "libero";
                                                        }};
                                                    }};
                                                    attachToIndex = new BatchAttachToIndex(                new ObjectReference() {{
                                                                        selector = "aliquam";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "velit";
                                                                    }};) {{
                                                        indexReference = new ObjectReference() {{
                                                            selector = "quia";
                                                        }};
                                                        targetReference = new ObjectReference() {{
                                                            selector = "porro";
                                                        }};
                                                    }};
                                                    attachTypedLink = new BatchAttachTypedLink(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                        add(new AttributeNameAndValue("doloremque",                 new TypedAttributeValue() {{
                                                                                            binaryValue = "consequatur";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2021-02-22T23:54:26.109Z");
                                                                                            numberValue = "ea";
                                                                                            stringValue = "quidem";
                                                                                        }};) {{
                                                                            attributeName = "velit";
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "laborum";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-10-11T01:40:09.903Z");
                                                                                numberValue = "iusto";
                                                                                stringValue = "sit";
                                                                            }};
                                                                        }}),
                                                                        add(new AttributeNameAndValue("a",                 new TypedAttributeValue() {{
                                                                                            binaryValue = "voluptate";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-05-26T22:18:26.553Z");
                                                                                            numberValue = "necessitatibus";
                                                                                            stringValue = "animi";
                                                                                        }};) {{
                                                                            attributeName = "voluptas";
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "facilis";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2021-03-19T07:24:43.140Z");
                                                                                numberValue = "expedita";
                                                                                stringValue = "deleniti";
                                                                            }};
                                                                        }}),
                                                                        add(new AttributeNameAndValue("labore",                 new TypedAttributeValue() {{
                                                                                            binaryValue = "veritatis";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-04-20T16:11:36.555Z");
                                                                                            numberValue = "vitae";
                                                                                            stringValue = "inventore";
                                                                                        }};) {{
                                                                            attributeName = "impedit";
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "ipsam";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-05-02T02:16:13.030Z");
                                                                                numberValue = "error";
                                                                                stringValue = "esse";
                                                                            }};
                                                                        }}),
                                                                        add(new AttributeNameAndValue("soluta",                 new TypedAttributeValue() {{
                                                                                            binaryValue = "libero";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2021-08-24T00:23:56.434Z");
                                                                                            numberValue = "odio";
                                                                                            stringValue = "fugit";
                                                                                        }};) {{
                                                                            attributeName = "dolorem";
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "ad";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-05-22T20:46:18.043Z");
                                                                                numberValue = "ex";
                                                                                stringValue = "nemo";
                                                                            }};
                                                                        }}),
                                                                    }},                 new ObjectReference() {{
                                                                        selector = "alias";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "magni";
                                                                    }};,                 new TypedLinkSchemaAndFacetName("vel", "quae");) {{
                                                        attributes = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                            add(new AttributeNameAndValue("eum",                 new TypedAttributeValue() {{
                                                                                binaryValue = "velit";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-05-28T07:14:46.447Z");
                                                                                numberValue = "earum";
                                                                                stringValue = "dicta";
                                                                            }};) {{
                                                                attributeName = "accusantium";
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "vel";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-11-22T17:16:07.137Z");
                                                                    numberValue = "vero";
                                                                    stringValue = "excepturi";
                                                                }};
                                                            }}),
                                                        }};
                                                        sourceObjectReference = new ObjectReference() {{
                                                            selector = "impedit";
                                                        }};
                                                        targetObjectReference = new ObjectReference() {{
                                                            selector = "voluptatibus";
                                                        }};
                                                        typedLinkFacet = new TypedLinkSchemaAndFacetName("alias", "nisi") {{
                                                            schemaArn = "iste";
                                                            typedLinkName = "itaque";
                                                        }};
                                                    }};
                                                    createIndex = new BatchCreateIndex(false,                 new org.openapis.openapi.models.shared.AttributeKey[]{{
                                                                        add(new AttributeKey("placeat", "sit", "iusto") {{
                                                                            facetName = "libero";
                                                                            name = "Alberta Rempel";
                                                                            schemaArn = "quos";
                                                                        }}),
                                                                        add(new AttributeKey("distinctio", "voluptatem", "autem") {{
                                                                            facetName = "ipsa";
                                                                            name = "Walter Beatty";
                                                                            schemaArn = "eligendi";
                                                                        }}),
                                                                        add(new AttributeKey("molestiae", "provident", "accusamus") {{
                                                                            facetName = "esse";
                                                                            name = "Krystal Breitenberg";
                                                                            schemaArn = "corrupti";
                                                                        }}),
                                                                    }}) {{
                                                        batchReferenceName = "quae";
                                                        isUnique = false;
                                                        linkName = "modi";
                                                        orderedIndexedAttributeList = new org.openapis.openapi.models.shared.AttributeKey[]{{
                                                            add(new AttributeKey("maxime", "quia", "quia") {{
                                                                facetName = "exercitationem";
                                                                name = "Douglas Emard";
                                                                schemaArn = "distinctio";
                                                            }}),
                                                        }};
                                                        parentReference = new ObjectReference() {{
                                                            selector = "nostrum";
                                                        }};
                                                    }};
                                                    createObject = new BatchCreateObject(                new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("dolores", "error", "veritatis");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "ducimus";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-02-18T14:55:56.571Z");
                                                                                            numberValue = "itaque";
                                                                                            stringValue = "similique";
                                                                                        }};) {{
                                                                            key = new AttributeKey("nemo", "reprehenderit", "aperiam") {{
                                                                                facetName = "impedit";
                                                                                name = "Geoffrey Thiel";
                                                                                schemaArn = "pariatur";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "odio";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-07-21T08:17:09.073Z");
                                                                                numberValue = "ducimus";
                                                                                stringValue = "excepturi";
                                                                            }};
                                                                        }}),
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("repudiandae", "cum", "dicta");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "earum";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-05-05T08:48:48.155Z");
                                                                                            numberValue = "dolores";
                                                                                            stringValue = "nam";
                                                                                        }};) {{
                                                                            key = new AttributeKey("exercitationem", "quam", "dolorem") {{
                                                                                facetName = "optio";
                                                                                name = "Bertha Johnson";
                                                                                schemaArn = "quidem";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "modi";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-06-04T22:19:22.955Z");
                                                                                numberValue = "vero";
                                                                                stringValue = "sequi";
                                                                            }};
                                                                        }}),
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("nostrum", "doloribus", "eligendi");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "sint";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-01-21T02:14:42.373Z");
                                                                                            numberValue = "animi";
                                                                                            stringValue = "quas";
                                                                                        }};) {{
                                                                            key = new AttributeKey("quasi", "laboriosam", "pariatur") {{
                                                                                facetName = "dicta";
                                                                                name = "Ms. Kelley Rogahn";
                                                                                schemaArn = "veritatis";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "libero";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2021-11-04T21:45:16.507Z");
                                                                                numberValue = "nemo";
                                                                                stringValue = "aliquam";
                                                                            }};
                                                                        }}),
                                                                    }},                 new org.openapis.openapi.models.shared.SchemaFacet[]{{
                                                                        add(new SchemaFacet() {{
                                                                            facetName = "molestias";
                                                                            schemaArn = "odio";
                                                                        }}),
                                                                        add(new SchemaFacet() {{
                                                                            facetName = "eaque";
                                                                            schemaArn = "saepe";
                                                                        }}),
                                                                        add(new SchemaFacet() {{
                                                                            facetName = "architecto";
                                                                            schemaArn = "quos";
                                                                        }}),
                                                                    }}) {{
                                                        batchReferenceName = "necessitatibus";
                                                        linkName = "tempore";
                                                        objectAttributeList = new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                            add(new AttributeKeyAndValue(                new AttributeKey("accusantium", "expedita", "officiis");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "eos";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2021-07-20T13:08:36.205Z");
                                                                                numberValue = "praesentium";
                                                                                stringValue = "odit";
                                                                            }};) {{
                                                                key = new AttributeKey("voluptatibus", "cum", "at") {{
                                                                    facetName = "ea";
                                                                    name = "Brittany Prosacco";
                                                                    schemaArn = "officiis";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "alias";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-04-22T15:10:37.825Z");
                                                                    numberValue = "fuga";
                                                                    stringValue = "repudiandae";
                                                                }};
                                                            }}),
                                                            add(new AttributeKeyAndValue(                new AttributeKey("fugit", "numquam", "numquam");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "nesciunt";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2021-02-01T13:09:02.595Z");
                                                                                numberValue = "dignissimos";
                                                                                stringValue = "optio";
                                                                            }};) {{
                                                                key = new AttributeKey("ut", "quidem", "quis") {{
                                                                    facetName = "explicabo";
                                                                    name = "Natasha Wehner";
                                                                    schemaArn = "similique";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "beatae";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-01-17T19:54:28.296Z");
                                                                    numberValue = "delectus";
                                                                    stringValue = "cupiditate";
                                                                }};
                                                            }}),
                                                            add(new AttributeKeyAndValue(                new AttributeKey("magnam", "voluptates", "maiores");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "tempore";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-04-10T10:41:17.662Z");
                                                                                numberValue = "ratione";
                                                                                stringValue = "labore";
                                                                            }};) {{
                                                                key = new AttributeKey("placeat", "enim", "neque") {{
                                                                    facetName = "necessitatibus";
                                                                    name = "Phyllis Quitzon";
                                                                    schemaArn = "minima";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "in";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2021-09-13T18:43:27.876Z");
                                                                    numberValue = "modi";
                                                                    stringValue = "corporis";
                                                                }};
                                                            }}),
                                                        }};
                                                        parentReference = new ObjectReference() {{
                                                            selector = "totam";
                                                        }};
                                                        schemaFacet = new org.openapis.openapi.models.shared.SchemaFacet[]{{
                                                            add(new SchemaFacet() {{
                                                                facetName = "voluptas";
                                                                schemaArn = "quo";
                                                            }}),
                                                            add(new SchemaFacet() {{
                                                                facetName = "velit";
                                                                schemaArn = "minus";
                                                            }}),
                                                            add(new SchemaFacet() {{
                                                                facetName = "fuga";
                                                                schemaArn = "nostrum";
                                                            }}),
                                                        }};
                                                    }};
                                                    deleteObject = new BatchDeleteObject(                new ObjectReference() {{
                                                                        selector = "assumenda";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "iste";
                                                        }};
                                                    }};
                                                    detachFromIndex = new BatchDetachFromIndex(                new ObjectReference() {{
                                                                        selector = "velit";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "doloremque";
                                                                    }};) {{
                                                        indexReference = new ObjectReference() {{
                                                            selector = "tempore";
                                                        }};
                                                        targetReference = new ObjectReference() {{
                                                            selector = "libero";
                                                        }};
                                                    }};
                                                    detachObject = new BatchDetachObject("ipsum",                 new ObjectReference() {{
                                                                        selector = "adipisci";
                                                                    }};) {{
                                                        batchReferenceName = "delectus";
                                                        linkName = "impedit";
                                                        parentReference = new ObjectReference() {{
                                                            selector = "cum";
                                                        }};
                                                    }};
                                                    detachPolicy = new BatchDetachPolicy(                new ObjectReference() {{
                                                                        selector = "doloremque";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "quis";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "saepe";
                                                        }};
                                                        policyReference = new ObjectReference() {{
                                                            selector = "deserunt";
                                                        }};
                                                    }};
                                                    detachTypedLink = new BatchDetachTypedLink(                new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                                        add(new AttributeNameAndValue("delectus",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "iusto";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-04-09T14:42:35.220Z");
                                                                                                            numberValue = "illo";
                                                                                                            stringValue = "ab";
                                                                                                        }};) {{
                                                                                            attributeName = "dignissimos";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "esse";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-01-13T01:04:27.808Z");
                                                                                                numberValue = "aspernatur";
                                                                                                stringValue = "enim";
                                                                                            }};
                                                                                        }}),
                                                                                    }},                 new ObjectReference() {{
                                                                                        selector = "incidunt";
                                                                                    }};,                 new ObjectReference() {{
                                                                                        selector = "accusamus";
                                                                                    }};,                 new TypedLinkSchemaAndFacetName("saepe", "tempore"););) {{
                                                        typedLinkSpecifier = new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                            add(new AttributeNameAndValue("voluptatibus",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "voluptatibus";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-02-09T13:45:17.634Z");
                                                                                                numberValue = "labore";
                                                                                                stringValue = "rerum";
                                                                                            }};) {{
                                                                                attributeName = "libero";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "minus";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2020-11-18T20:43:00.067Z");
                                                                                    numberValue = "ipsum";
                                                                                    stringValue = "ad";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("rem",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "eligendi";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2021-03-10T12:50:31.117Z");
                                                                                                numberValue = "officiis";
                                                                                                stringValue = "ducimus";
                                                                                            }};) {{
                                                                                attributeName = "eos";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "reprehenderit";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-10-17T08:05:13.276Z");
                                                                                    numberValue = "iusto";
                                                                                    stringValue = "est";
                                                                                }};
                                                                            }}),
                                                                        }},                 new ObjectReference() {{
                                                                            selector = "dolor";
                                                                        }};,                 new ObjectReference() {{
                                                                            selector = "dicta";
                                                                        }};,                 new TypedLinkSchemaAndFacetName("error", "porro");) {{
                                                            identityAttributeValues = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                add(new AttributeNameAndValue("non",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "magnam";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-07-19T17:25:50.426Z");
                                                                                    numberValue = "asperiores";
                                                                                    stringValue = "veniam";
                                                                                }};) {{
                                                                    attributeName = "libero";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "architecto";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-01-18T19:40:42.789Z");
                                                                        numberValue = "eligendi";
                                                                        stringValue = "possimus";
                                                                    }};
                                                                }}),
                                                                add(new AttributeNameAndValue("exercitationem",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "ab";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-04-18T09:58:47.871Z");
                                                                                    numberValue = "tempore";
                                                                                    stringValue = "nisi";
                                                                                }};) {{
                                                                    attributeName = "consequuntur";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "facere";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-09-20T12:28:22.531Z");
                                                                        numberValue = "pariatur";
                                                                        stringValue = "amet";
                                                                    }};
                                                                }}),
                                                            }};
                                                            sourceObjectReference = new ObjectReference() {{
                                                                selector = "voluptatibus";
                                                            }};
                                                            targetObjectReference = new ObjectReference() {{
                                                                selector = "quaerat";
                                                            }};
                                                            typedLinkFacet = new TypedLinkSchemaAndFacetName("nisi", "quis") {{
                                                                schemaArn = "blanditiis";
                                                                typedLinkName = "distinctio";
                                                            }};
                                                        }};
                                                    }};
                                                    removeFacetFromObject = new BatchRemoveFacetFromObject(                new ObjectReference() {{
                                                                        selector = "earum";
                                                                    }};,                 new SchemaFacet() {{
                                                                        facetName = "reprehenderit";
                                                                        schemaArn = "praesentium";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "veniam";
                                                        }};
                                                        schemaFacet = new SchemaFacet() {{
                                                            facetName = "eos";
                                                            schemaArn = "reiciendis";
                                                        }};
                                                    }};
                                                    updateLinkAttributes = new BatchUpdateLinkAttributes(                new org.openapis.openapi.models.shared.LinkAttributeUpdate[]{{
                                                                        add(new LinkAttributeUpdate() {{
                                                                            attributeAction = new LinkAttributeAction() {{
                                                                                attributeActionType = UpdateActionTypeEnum.DELETE;
                                                                                attributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "qui";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-01-02T12:39:28.881Z");
                                                                                    numberValue = "explicabo";
                                                                                    stringValue = "explicabo";
                                                                                }};
                                                                            }};
                                                                            attributeKey = new AttributeKey("non", "distinctio", "in") {{
                                                                                facetName = "exercitationem";
                                                                                name = "Dr. Elaine Bernhard";
                                                                                schemaArn = "delectus";
                                                                            }};
                                                                        }}),
                                                                        add(new LinkAttributeUpdate() {{
                                                                            attributeAction = new LinkAttributeAction() {{
                                                                                attributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                                attributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "labore";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-01-29T18:21:22.366Z");
                                                                                    numberValue = "modi";
                                                                                    stringValue = "in";
                                                                                }};
                                                                            }};
                                                                            attributeKey = new AttributeKey("voluptate", "similique", "minima") {{
                                                                                facetName = "explicabo";
                                                                                name = "Ian Baumbach";
                                                                                schemaArn = "enim";
                                                                            }};
                                                                        }}),
                                                                    }},                 new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                                        add(new AttributeNameAndValue("dignissimos",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "fugiat";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-07-11T12:09:17.192Z");
                                                                                                            numberValue = "veniam";
                                                                                                            stringValue = "reiciendis";
                                                                                                        }};) {{
                                                                                            attributeName = "magnam";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "sit";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-07-28T00:11:01.662Z");
                                                                                                numberValue = "nesciunt";
                                                                                                stringValue = "mollitia";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("commodi",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "numquam";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2021-05-09T16:27:58.630Z");
                                                                                                            numberValue = "voluptate";
                                                                                                            stringValue = "consectetur";
                                                                                                        }};) {{
                                                                                            attributeName = "ab";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "modi";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-12-27T01:39:48.546Z");
                                                                                                numberValue = "eveniet";
                                                                                                stringValue = "odio";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("iusto",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "quas";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-04-18T16:39:17.670Z");
                                                                                                            numberValue = "amet";
                                                                                                            stringValue = "autem";
                                                                                                        }};) {{
                                                                                            attributeName = "nesciunt";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "quaerat";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2020-08-17T14:32:35.017Z");
                                                                                                numberValue = "sunt";
                                                                                                stringValue = "distinctio";
                                                                                            }};
                                                                                        }}),
                                                                                    }},                 new ObjectReference() {{
                                                                                        selector = "fuga";
                                                                                    }};,                 new ObjectReference() {{
                                                                                        selector = "alias";
                                                                                    }};,                 new TypedLinkSchemaAndFacetName("rem", "aut"););) {{
                                                        attributeUpdates = new org.openapis.openapi.models.shared.LinkAttributeUpdate[]{{
                                                            add(new LinkAttributeUpdate() {{
                                                                attributeAction = new LinkAttributeAction() {{
                                                                    attributeActionType = UpdateActionTypeEnum.DELETE;
                                                                    attributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "quisquam";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-07-14T12:02:01.961Z");
                                                                        numberValue = "deleniti";
                                                                        stringValue = "illo";
                                                                    }};
                                                                }};
                                                                attributeKey = new AttributeKey("consequatur", "maxime", "aspernatur") {{
                                                                    facetName = "labore";
                                                                    name = "Jim Schamberger";
                                                                    schemaArn = "repudiandae";
                                                                }};
                                                            }}),
                                                            add(new LinkAttributeUpdate() {{
                                                                attributeAction = new LinkAttributeAction() {{
                                                                    attributeActionType = UpdateActionTypeEnum.DELETE;
                                                                    attributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "expedita";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-10-26T16:10:32.283Z");
                                                                        numberValue = "repudiandae";
                                                                        stringValue = "rerum";
                                                                    }};
                                                                }};
                                                                attributeKey = new AttributeKey("commodi", "impedit", "commodi") {{
                                                                    facetName = "dignissimos";
                                                                    name = "Cristina Murphy";
                                                                    schemaArn = "dolorem";
                                                                }};
                                                            }}),
                                                        }};
                                                        typedLinkSpecifier = new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                            add(new AttributeNameAndValue("facilis",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "corrupti";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-06-05T10:57:17.595Z");
                                                                                                numberValue = "accusamus";
                                                                                                stringValue = "eos";
                                                                                            }};) {{
                                                                                attributeName = "provident";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "repudiandae";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-08-20T07:41:58.408Z");
                                                                                    numberValue = "molestiae";
                                                                                    stringValue = "itaque";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("a",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "dolor";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2021-12-02T22:28:09.993Z");
                                                                                                numberValue = "beatae";
                                                                                                stringValue = "at";
                                                                                            }};) {{
                                                                                attributeName = "totam";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "dicta";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-10-03T19:15:55.395Z");
                                                                                    numberValue = "dolor";
                                                                                    stringValue = "sunt";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("ea",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "aperiam";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-01-01T17:17:48.322Z");
                                                                                                numberValue = "velit";
                                                                                                stringValue = "porro";
                                                                                            }};) {{
                                                                                attributeName = "labore";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "minus";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-12-20T04:33:32.836Z");
                                                                                    numberValue = "perferendis";
                                                                                    stringValue = "rerum";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("natus",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "temporibus";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-07-17T22:25:06.067Z");
                                                                                                numberValue = "tenetur";
                                                                                                stringValue = "aspernatur";
                                                                                            }};) {{
                                                                                attributeName = "provident";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "consectetur";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-07-13T07:54:07.156Z");
                                                                                    numberValue = "consectetur";
                                                                                    stringValue = "soluta";
                                                                                }};
                                                                            }}),
                                                                        }},                 new ObjectReference() {{
                                                                            selector = "quo";
                                                                        }};,                 new ObjectReference() {{
                                                                            selector = "itaque";
                                                                        }};,                 new TypedLinkSchemaAndFacetName("illum", "laborum");) {{
                                                            identityAttributeValues = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                add(new AttributeNameAndValue("quidem",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "cum";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-11-26T08:21:17.085Z");
                                                                                    numberValue = "dicta";
                                                                                    stringValue = "laudantium";
                                                                                }};) {{
                                                                    attributeName = "voluptatem";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "ad";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-10-09T04:59:20.428Z");
                                                                        numberValue = "illum";
                                                                        stringValue = "praesentium";
                                                                    }};
                                                                }}),
                                                            }};
                                                            sourceObjectReference = new ObjectReference() {{
                                                                selector = "doloremque";
                                                            }};
                                                            targetObjectReference = new ObjectReference() {{
                                                                selector = "earum";
                                                            }};
                                                            typedLinkFacet = new TypedLinkSchemaAndFacetName("provident", "dolorum") {{
                                                                schemaArn = "iusto";
                                                                typedLinkName = "amet";
                                                            }};
                                                        }};
                                                    }};
                                                    updateObjectAttributes = new BatchUpdateObjectAttributes(                new org.openapis.openapi.models.shared.ObjectAttributeUpdate[]{{
                                                                        add(new ObjectAttributeUpdate() {{
                                                                            objectAttributeAction = new ObjectAttributeAction() {{
                                                                                objectAttributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                                objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "quisquam";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-01-10T20:22:27.516Z");
                                                                                    numberValue = "eligendi";
                                                                                    stringValue = "quae";
                                                                                }};
                                                                            }};
                                                                            objectAttributeKey = new AttributeKey("facilis", "reiciendis", "a") {{
                                                                                facetName = "officiis";
                                                                                name = "Alice Hamill";
                                                                                schemaArn = "perferendis";
                                                                            }};
                                                                        }}),
                                                                    }},                 new ObjectReference() {{
                                                                        selector = "iste";
                                                                    }};) {{
                                                        attributeUpdates = new org.openapis.openapi.models.shared.ObjectAttributeUpdate[]{{
                                                            add(new ObjectAttributeUpdate() {{
                                                                objectAttributeAction = new ObjectAttributeAction() {{
                                                                    objectAttributeActionType = UpdateActionTypeEnum.DELETE;
                                                                    objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "repellendus";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-12-09T19:34:59.129Z");
                                                                        numberValue = "eaque";
                                                                        stringValue = "saepe";
                                                                    }};
                                                                }};
                                                                objectAttributeKey = new AttributeKey("hic", "voluptatem", "incidunt") {{
                                                                    facetName = "delectus";
                                                                    name = "Orville Nitzsche Jr.";
                                                                    schemaArn = "eveniet";
                                                                }};
                                                            }}),
                                                            add(new ObjectAttributeUpdate() {{
                                                                objectAttributeAction = new ObjectAttributeAction() {{
                                                                    objectAttributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                    objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "qui";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2020-12-04T19:10:00.340Z");
                                                                        numberValue = "explicabo";
                                                                        stringValue = "beatae";
                                                                    }};
                                                                }};
                                                                objectAttributeKey = new AttributeKey("totam", "sequi", "aliquid") {{
                                                                    facetName = "aliquid";
                                                                    name = "Kara Wolf";
                                                                    schemaArn = "libero";
                                                                }};
                                                            }}),
                                                            add(new ObjectAttributeUpdate() {{
                                                                objectAttributeAction = new ObjectAttributeAction() {{
                                                                    objectAttributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                    objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "impedit";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-11-10T13:12:44.057Z");
                                                                        numberValue = "velit";
                                                                        stringValue = "reiciendis";
                                                                    }};
                                                                }};
                                                                objectAttributeKey = new AttributeKey("recusandae", "voluptates", "non") {{
                                                                    facetName = "repellat";
                                                                    name = "Cameron Mosciski III";
                                                                    schemaArn = "rerum";
                                                                }};
                                                            }}),
                                                        }};
                                                        objectReference = new ObjectReference() {{
                                                            selector = "rem";
                                                        }};
                                                    }};
                                                }}),
                                                add(new BatchWriteOperation() {{
                                                    addFacetToObject = new BatchAddFacetToObject(                new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("quos", "doloribus", "fugiat");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "est";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-04-07T10:05:43.584Z");
                                                                                            numberValue = "vitae";
                                                                                            stringValue = "nesciunt";
                                                                                        }};) {{
                                                                            key = new AttributeKey("rem", "maiores", "accusantium") {{
                                                                                facetName = "voluptas";
                                                                                name = "Blanche Kiehn";
                                                                                schemaArn = "ipsa";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "veniam";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-05-20T08:39:00.501Z");
                                                                                numberValue = "facere";
                                                                                stringValue = "aliquam";
                                                                            }};
                                                                        }}),
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("commodi", "sapiente", "consequuntur");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "veniam";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2021-01-31T23:06:28.366Z");
                                                                                            numberValue = "sint";
                                                                                            stringValue = "ut";
                                                                                        }};) {{
                                                                            key = new AttributeKey("incidunt", "explicabo", "ipsam") {{
                                                                                facetName = "similique";
                                                                                name = "Winifred Hettinger";
                                                                                schemaArn = "unde";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "cupiditate";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-12-29T17:44:28.341Z");
                                                                                numberValue = "quidem";
                                                                                stringValue = "nesciunt";
                                                                            }};
                                                                        }}),
                                                                    }},                 new ObjectReference() {{
                                                                        selector = "numquam";
                                                                    }};,                 new SchemaFacet() {{
                                                                        facetName = "tenetur";
                                                                        schemaArn = "adipisci";
                                                                    }};) {{
                                                        objectAttributeList = new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                            add(new AttributeKeyAndValue(                new AttributeKey("reiciendis", "ab", "sint");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "nihil";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-07-25T00:52:39.884Z");
                                                                                numberValue = "odio";
                                                                                stringValue = "nesciunt";
                                                                            }};) {{
                                                                key = new AttributeKey("consequuntur", "assumenda", "vero") {{
                                                                    facetName = "quos";
                                                                    name = "Eleanor Gleason";
                                                                    schemaArn = "modi";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "doloribus";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2020-08-26T04:20:10.413Z");
                                                                    numberValue = "accusamus";
                                                                    stringValue = "totam";
                                                                }};
                                                            }}),
                                                        }};
                                                        objectReference = new ObjectReference() {{
                                                            selector = "debitis";
                                                        }};
                                                        schemaFacet = new SchemaFacet() {{
                                                            facetName = "vel";
                                                            schemaArn = "neque";
                                                        }};
                                                    }};
                                                    attachObject = new BatchAttachObject(                new ObjectReference() {{
                                                                        selector = "ex";
                                                                    }};, "minus",                 new ObjectReference() {{
                                                                        selector = "ab";
                                                                    }};) {{
                                                        childReference = new ObjectReference() {{
                                                            selector = "libero";
                                                        }};
                                                        linkName = "in";
                                                        parentReference = new ObjectReference() {{
                                                            selector = "minima";
                                                        }};
                                                    }};
                                                    attachPolicy = new BatchAttachPolicy(                new ObjectReference() {{
                                                                        selector = "nisi";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "quisquam";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "beatae";
                                                        }};
                                                        policyReference = new ObjectReference() {{
                                                            selector = "hic";
                                                        }};
                                                    }};
                                                    attachToIndex = new BatchAttachToIndex(                new ObjectReference() {{
                                                                        selector = "fuga";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "minima";
                                                                    }};) {{
                                                        indexReference = new ObjectReference() {{
                                                            selector = "dolor";
                                                        }};
                                                        targetReference = new ObjectReference() {{
                                                            selector = "ducimus";
                                                        }};
                                                    }};
                                                    attachTypedLink = new BatchAttachTypedLink(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                        add(new AttributeNameAndValue("assumenda",                 new TypedAttributeValue() {{
                                                                                            binaryValue = "officiis";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-12-30T01:26:23.904Z");
                                                                                            numberValue = "culpa";
                                                                                            stringValue = "ipsa";
                                                                                        }};) {{
                                                                            attributeName = "quod";
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "itaque";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2020-08-20T09:59:23.505Z");
                                                                                numberValue = "enim";
                                                                                stringValue = "doloribus";
                                                                            }};
                                                                        }}),
                                                                        add(new AttributeNameAndValue("debitis",                 new TypedAttributeValue() {{
                                                                                            binaryValue = "ullam";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-12-19T16:09:38.668Z");
                                                                                            numberValue = "perferendis";
                                                                                            stringValue = "veritatis";
                                                                                        }};) {{
                                                                            attributeName = "nobis";
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "necessitatibus";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-11-18T14:09:11.046Z");
                                                                                numberValue = "vel";
                                                                                stringValue = "perspiciatis";
                                                                            }};
                                                                        }}),
                                                                    }},                 new ObjectReference() {{
                                                                        selector = "provident";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "cumque";
                                                                    }};,                 new TypedLinkSchemaAndFacetName("iure", "quibusdam");) {{
                                                        attributes = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                            add(new AttributeNameAndValue("dolor",                 new TypedAttributeValue() {{
                                                                                binaryValue = "exercitationem";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2021-08-03T07:41:11.908Z");
                                                                                numberValue = "impedit";
                                                                                stringValue = "sit";
                                                                            }};) {{
                                                                attributeName = "qui";
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "aliquid";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-09-22T00:32:53.375Z");
                                                                    numberValue = "adipisci";
                                                                    stringValue = "praesentium";
                                                                }};
                                                            }}),
                                                        }};
                                                        sourceObjectReference = new ObjectReference() {{
                                                            selector = "nemo";
                                                        }};
                                                        targetObjectReference = new ObjectReference() {{
                                                            selector = "culpa";
                                                        }};
                                                        typedLinkFacet = new TypedLinkSchemaAndFacetName("deserunt", "modi") {{
                                                            schemaArn = "consequuntur";
                                                            typedLinkName = "amet";
                                                        }};
                                                    }};
                                                    createIndex = new BatchCreateIndex(false,                 new org.openapis.openapi.models.shared.AttributeKey[]{{
                                                                        add(new AttributeKey("suscipit", "deserunt", "molestias") {{
                                                                            facetName = "laborum";
                                                                            name = "Neal Gorczany";
                                                                            schemaArn = "alias";
                                                                        }}),
                                                                        add(new AttributeKey("magnam", "quaerat", "eligendi") {{
                                                                            facetName = "laborum";
                                                                            name = "Sergio Grant Sr.";
                                                                            schemaArn = "aliquid";
                                                                        }}),
                                                                        add(new AttributeKey("magnam", "nostrum", "esse") {{
                                                                            facetName = "hic";
                                                                            name = "Cecelia Mitchell";
                                                                            schemaArn = "mollitia";
                                                                        }}),
                                                                        add(new AttributeKey("doloremque", "voluptatem", "facere") {{
                                                                            facetName = "corrupti";
                                                                            name = "Miss Carroll Rutherford";
                                                                            schemaArn = "laboriosam";
                                                                        }}),
                                                                    }}) {{
                                                        batchReferenceName = "quod";
                                                        isUnique = false;
                                                        linkName = "nemo";
                                                        orderedIndexedAttributeList = new org.openapis.openapi.models.shared.AttributeKey[]{{
                                                            add(new AttributeKey("provident", "cum", "doloribus") {{
                                                                facetName = "velit";
                                                                name = "Stella Howell";
                                                                schemaArn = "natus";
                                                            }}),
                                                            add(new AttributeKey("hic", "cum", "aspernatur") {{
                                                                facetName = "facilis";
                                                                name = "Bradford Hudson";
                                                                schemaArn = "perspiciatis";
                                                            }}),
                                                            add(new AttributeKey("autem", "quo", "nesciunt") {{
                                                                facetName = "libero";
                                                                name = "Barry Walsh";
                                                                schemaArn = "saepe";
                                                            }}),
                                                            add(new AttributeKey("recusandae", "distinctio", "pariatur") {{
                                                                facetName = "illum";
                                                                name = "Desiree Quigley";
                                                                schemaArn = "assumenda";
                                                            }}),
                                                        }};
                                                        parentReference = new ObjectReference() {{
                                                            selector = "ad";
                                                        }};
                                                    }};
                                                    createObject = new BatchCreateObject(                new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("laboriosam", "ex", "quas");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "veritatis";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-12-09T02:50:43.097Z");
                                                                                            numberValue = "similique";
                                                                                            stringValue = "incidunt";
                                                                                        }};) {{
                                                                            key = new AttributeKey("odit", "corporis", "rerum") {{
                                                                                facetName = "vero";
                                                                                name = "Edward Denesik II";
                                                                                schemaArn = "dicta";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "alias";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-02-24T20:33:32.880Z");
                                                                                numberValue = "accusantium";
                                                                                stringValue = "id";
                                                                            }};
                                                                        }}),
                                                                    }},                 new org.openapis.openapi.models.shared.SchemaFacet[]{{
                                                                        add(new SchemaFacet() {{
                                                                            facetName = "magni";
                                                                            schemaArn = "deserunt";
                                                                        }}),
                                                                        add(new SchemaFacet() {{
                                                                            facetName = "delectus";
                                                                            schemaArn = "omnis";
                                                                        }}),
                                                                    }}) {{
                                                        batchReferenceName = "necessitatibus";
                                                        linkName = "maxime";
                                                        objectAttributeList = new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                            add(new AttributeKeyAndValue(                new AttributeKey("maiores", "alias", "asperiores");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "rem";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-08-15T01:59:03.683Z");
                                                                                numberValue = "earum";
                                                                                stringValue = "doloribus";
                                                                            }};) {{
                                                                key = new AttributeKey("sed", "necessitatibus", "impedit") {{
                                                                    facetName = "eaque";
                                                                    name = "Marguerite Sawayn Sr.";
                                                                    schemaArn = "officiis";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "ipsa";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2021-02-05T19:15:12.149Z");
                                                                    numberValue = "maiores";
                                                                    stringValue = "laudantium";
                                                                }};
                                                            }}),
                                                        }};
                                                        parentReference = new ObjectReference() {{
                                                            selector = "velit";
                                                        }};
                                                        schemaFacet = new org.openapis.openapi.models.shared.SchemaFacet[]{{
                                                            add(new SchemaFacet() {{
                                                                facetName = "esse";
                                                                schemaArn = "in";
                                                            }}),
                                                            add(new SchemaFacet() {{
                                                                facetName = "eligendi";
                                                                schemaArn = "quasi";
                                                            }}),
                                                        }};
                                                    }};
                                                    deleteObject = new BatchDeleteObject(                new ObjectReference() {{
                                                                        selector = "nesciunt";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "sed";
                                                        }};
                                                    }};
                                                    detachFromIndex = new BatchDetachFromIndex(                new ObjectReference() {{
                                                                        selector = "cupiditate";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "aliquam";
                                                                    }};) {{
                                                        indexReference = new ObjectReference() {{
                                                            selector = "maxime";
                                                        }};
                                                        targetReference = new ObjectReference() {{
                                                            selector = "quis";
                                                        }};
                                                    }};
                                                    detachObject = new BatchDetachObject("velit",                 new ObjectReference() {{
                                                                        selector = "reiciendis";
                                                                    }};) {{
                                                        batchReferenceName = "excepturi";
                                                        linkName = "maiores";
                                                        parentReference = new ObjectReference() {{
                                                            selector = "laudantium";
                                                        }};
                                                    }};
                                                    detachPolicy = new BatchDetachPolicy(                new ObjectReference() {{
                                                                        selector = "ipsa";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "quisquam";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "amet";
                                                        }};
                                                        policyReference = new ObjectReference() {{
                                                            selector = "nemo";
                                                        }};
                                                    }};
                                                    detachTypedLink = new BatchDetachTypedLink(                new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                                        add(new AttributeNameAndValue("accusamus",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "harum";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-11-15T08:03:11.108Z");
                                                                                                            numberValue = "expedita";
                                                                                                            stringValue = "corrupti";
                                                                                                        }};) {{
                                                                                            attributeName = "earum";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "praesentium";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-06-30T16:40:09.613Z");
                                                                                                numberValue = "quasi";
                                                                                                stringValue = "mollitia";
                                                                                            }};
                                                                                        }}),
                                                                                    }},                 new ObjectReference() {{
                                                                                        selector = "eaque";
                                                                                    }};,                 new ObjectReference() {{
                                                                                        selector = "deserunt";
                                                                                    }};,                 new TypedLinkSchemaAndFacetName("aliquid", "excepturi"););) {{
                                                        typedLinkSpecifier = new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                            add(new AttributeNameAndValue("modi",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "perferendis";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-09-10T23:06:49.765Z");
                                                                                                numberValue = "molestias";
                                                                                                stringValue = "dolore";
                                                                                            }};) {{
                                                                                attributeName = "quos";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "corrupti";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-07-12T05:39:44.455Z");
                                                                                    numberValue = "amet";
                                                                                    stringValue = "laborum";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("ipsam",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "eaque";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-09-02T02:05:03.967Z");
                                                                                                numberValue = "nihil";
                                                                                                stringValue = "ad";
                                                                                            }};) {{
                                                                                attributeName = "sunt";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "maiores";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-11-10T23:49:36.434Z");
                                                                                    numberValue = "earum";
                                                                                    stringValue = "veniam";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("pariatur",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "sit";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2021-05-04T08:20:05.226Z");
                                                                                                numberValue = "perferendis";
                                                                                                stringValue = "id";
                                                                                            }};) {{
                                                                                attributeName = "nisi";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "tenetur";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-02-26T12:27:00.614Z");
                                                                                    numberValue = "nemo";
                                                                                    stringValue = "suscipit";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("adipisci",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "pariatur";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-05-31T04:27:23.970Z");
                                                                                                numberValue = "voluptatibus";
                                                                                                stringValue = "iure";
                                                                                            }};) {{
                                                                                attributeName = "sapiente";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "sed";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2020-01-06T07:14:49.176Z");
                                                                                    numberValue = "repudiandae";
                                                                                    stringValue = "architecto";
                                                                                }};
                                                                            }}),
                                                                        }},                 new ObjectReference() {{
                                                                            selector = "explicabo";
                                                                        }};,                 new ObjectReference() {{
                                                                            selector = "minus";
                                                                        }};,                 new TypedLinkSchemaAndFacetName("soluta", "dolorum");) {{
                                                            identityAttributeValues = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                add(new AttributeNameAndValue("perspiciatis",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "accusantium";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-03-16T15:01:20.520Z");
                                                                                    numberValue = "commodi";
                                                                                    stringValue = "eveniet";
                                                                                }};) {{
                                                                    attributeName = "quas";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "molestiae";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-01-05T00:04:42.693Z");
                                                                        numberValue = "a";
                                                                        stringValue = "nobis";
                                                                    }};
                                                                }}),
                                                                add(new AttributeNameAndValue("eius",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "sequi";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2020-01-09T18:56:15.963Z");
                                                                                    numberValue = "esse";
                                                                                    stringValue = "blanditiis";
                                                                                }};) {{
                                                                    attributeName = "porro";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "tempore";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-06-20T20:53:51.556Z");
                                                                        numberValue = "voluptates";
                                                                        stringValue = "fugit";
                                                                    }};
                                                                }}),
                                                                add(new AttributeNameAndValue("nulla",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "deserunt";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-10-02T23:59:05.337Z");
                                                                                    numberValue = "officiis";
                                                                                    stringValue = "enim";
                                                                                }};) {{
                                                                    attributeName = "sint";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "repellat";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-01-09T19:53:05.818Z");
                                                                        numberValue = "maiores";
                                                                        stringValue = "itaque";
                                                                    }};
                                                                }}),
                                                                add(new AttributeNameAndValue("impedit",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "quasi";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-06-24T12:50:17.676Z");
                                                                                    numberValue = "quisquam";
                                                                                    stringValue = "eos";
                                                                                }};) {{
                                                                    attributeName = "officia";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "saepe";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-01-29T10:27:27.068Z");
                                                                        numberValue = "accusantium";
                                                                        stringValue = "officia";
                                                                    }};
                                                                }}),
                                                            }};
                                                            sourceObjectReference = new ObjectReference() {{
                                                                selector = "nobis";
                                                            }};
                                                            targetObjectReference = new ObjectReference() {{
                                                                selector = "natus";
                                                            }};
                                                            typedLinkFacet = new TypedLinkSchemaAndFacetName("magnam", "reprehenderit") {{
                                                                schemaArn = "minus";
                                                                typedLinkName = "quia";
                                                            }};
                                                        }};
                                                    }};
                                                    removeFacetFromObject = new BatchRemoveFacetFromObject(                new ObjectReference() {{
                                                                        selector = "dolor";
                                                                    }};,                 new SchemaFacet() {{
                                                                        facetName = "rerum";
                                                                        schemaArn = "sed";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "magni";
                                                        }};
                                                        schemaFacet = new SchemaFacet() {{
                                                            facetName = "tempora";
                                                            schemaArn = "possimus";
                                                        }};
                                                    }};
                                                    updateLinkAttributes = new BatchUpdateLinkAttributes(                new org.openapis.openapi.models.shared.LinkAttributeUpdate[]{{
                                                                        add(new LinkAttributeUpdate() {{
                                                                            attributeAction = new LinkAttributeAction() {{
                                                                                attributeActionType = UpdateActionTypeEnum.DELETE;
                                                                                attributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "enim";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-01-16T07:19:53.468Z");
                                                                                    numberValue = "saepe";
                                                                                    stringValue = "delectus";
                                                                                }};
                                                                            }};
                                                                            attributeKey = new AttributeKey("officiis", "mollitia", "cumque") {{
                                                                                facetName = "officia";
                                                                                name = "Benny Mosciski";
                                                                                schemaArn = "quia";
                                                                            }};
                                                                        }}),
                                                                        add(new LinkAttributeUpdate() {{
                                                                            attributeAction = new LinkAttributeAction() {{
                                                                                attributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                                attributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "enim";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-08-20T13:52:40.620Z");
                                                                                    numberValue = "illum";
                                                                                    stringValue = "nesciunt";
                                                                                }};
                                                                            }};
                                                                            attributeKey = new AttributeKey("dicta", "fugit", "sit") {{
                                                                                facetName = "sit";
                                                                                name = "Bethany Zboncak";
                                                                                schemaArn = "praesentium";
                                                                            }};
                                                                        }}),
                                                                        add(new LinkAttributeUpdate() {{
                                                                            attributeAction = new LinkAttributeAction() {{
                                                                                attributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                                attributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "necessitatibus";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-06-18T22:23:22.308Z");
                                                                                    numberValue = "sunt";
                                                                                    stringValue = "nesciunt";
                                                                                }};
                                                                            }};
                                                                            attributeKey = new AttributeKey("voluptatum", "ipsa", "at") {{
                                                                                facetName = "delectus";
                                                                                name = "Jay Nolan DDS";
                                                                                schemaArn = "eius";
                                                                            }};
                                                                        }}),
                                                                    }},                 new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                                        add(new AttributeNameAndValue("hic",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "eaque";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-11-24T19:45:11.937Z");
                                                                                                            numberValue = "aperiam";
                                                                                                            stringValue = "aspernatur";
                                                                                                        }};) {{
                                                                                            attributeName = "repellat";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "aspernatur";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-10-22T11:14:59.383Z");
                                                                                                numberValue = "fugit";
                                                                                                stringValue = "fuga";
                                                                                            }};
                                                                                        }}),
                                                                                    }},                 new ObjectReference() {{
                                                                                        selector = "nulla";
                                                                                    }};,                 new ObjectReference() {{
                                                                                        selector = "enim";
                                                                                    }};,                 new TypedLinkSchemaAndFacetName("illo", "magnam"););) {{
                                                        attributeUpdates = new org.openapis.openapi.models.shared.LinkAttributeUpdate[]{{
                                                            add(new LinkAttributeUpdate() {{
                                                                attributeAction = new LinkAttributeAction() {{
                                                                    attributeActionType = UpdateActionTypeEnum.DELETE;
                                                                    attributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "delectus";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2020-09-04T15:37:57.416Z");
                                                                        numberValue = "quos";
                                                                        stringValue = "asperiores";
                                                                    }};
                                                                }};
                                                                attributeKey = new AttributeKey("at", "possimus", "neque") {{
                                                                    facetName = "voluptatum";
                                                                    name = "Mr. Zachary Bashirian";
                                                                    schemaArn = "nostrum";
                                                                }};
                                                            }}),
                                                            add(new LinkAttributeUpdate() {{
                                                                attributeAction = new LinkAttributeAction() {{
                                                                    attributeActionType = UpdateActionTypeEnum.DELETE;
                                                                    attributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "vel";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-01-16T11:55:22.213Z");
                                                                        numberValue = "quae";
                                                                        stringValue = "quos";
                                                                    }};
                                                                }};
                                                                attributeKey = new AttributeKey("consequuntur", "maiores", "inventore") {{
                                                                    facetName = "aperiam";
                                                                    name = "Alexis Hane";
                                                                    schemaArn = "quas";
                                                                }};
                                                            }}),
                                                            add(new LinkAttributeUpdate() {{
                                                                attributeAction = new LinkAttributeAction() {{
                                                                    attributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                    attributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "laudantium";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-07-23T10:18:08.861Z");
                                                                        numberValue = "aliquid";
                                                                        stringValue = "consectetur";
                                                                    }};
                                                                }};
                                                                attributeKey = new AttributeKey("blanditiis", "numquam", "sequi") {{
                                                                    facetName = "cumque";
                                                                    name = "Wallace Kuphal";
                                                                    schemaArn = "tempora";
                                                                }};
                                                            }}),
                                                            add(new LinkAttributeUpdate() {{
                                                                attributeAction = new LinkAttributeAction() {{
                                                                    attributeActionType = UpdateActionTypeEnum.DELETE;
                                                                    attributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "sit";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-10-31T13:11:59.129Z");
                                                                        numberValue = "tenetur";
                                                                        stringValue = "autem";
                                                                    }};
                                                                }};
                                                                attributeKey = new AttributeKey("animi", "commodi", "alias") {{
                                                                    facetName = "quidem";
                                                                    name = "Lowell Oberbrunner";
                                                                    schemaArn = "voluptas";
                                                                }};
                                                            }}),
                                                        }};
                                                        typedLinkSpecifier = new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                            add(new AttributeNameAndValue("fugit",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "pariatur";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2020-03-21T09:34:05.399Z");
                                                                                                numberValue = "veritatis";
                                                                                                stringValue = "aut";
                                                                                            }};) {{
                                                                                attributeName = "quo";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "esse";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2020-08-05T13:46:09.099Z");
                                                                                    numberValue = "accusantium";
                                                                                    stringValue = "soluta";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("rerum",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "doloremque";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-07-27T23:55:27.293Z");
                                                                                                numberValue = "at";
                                                                                                stringValue = "eum";
                                                                                            }};) {{
                                                                                attributeName = "laudantium";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "iusto";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-01-31T05:44:55.505Z");
                                                                                    numberValue = "tempora";
                                                                                    stringValue = "magni";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("deserunt",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "atque";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-06-17T01:05:50.884Z");
                                                                                                numberValue = "architecto";
                                                                                                stringValue = "est";
                                                                                            }};) {{
                                                                                attributeName = "reprehenderit";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "voluptatum";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-01-22T10:15:29.477Z");
                                                                                    numberValue = "atque";
                                                                                    stringValue = "rerum";
                                                                                }};
                                                                            }}),
                                                                        }},                 new ObjectReference() {{
                                                                            selector = "enim";
                                                                        }};,                 new ObjectReference() {{
                                                                            selector = "rem";
                                                                        }};,                 new TypedLinkSchemaAndFacetName("magni", "quae");) {{
                                                            identityAttributeValues = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                add(new AttributeNameAndValue("eligendi",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "placeat";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-06-04T04:18:38.456Z");
                                                                                    numberValue = "unde";
                                                                                    stringValue = "illo";
                                                                                }};) {{
                                                                    attributeName = "aut";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "dolore";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-02-02T21:29:17.128Z");
                                                                        numberValue = "iste";
                                                                        stringValue = "ullam";
                                                                    }};
                                                                }}),
                                                                add(new AttributeNameAndValue("dicta",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "harum";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2020-11-16T18:13:25.151Z");
                                                                                    numberValue = "beatae";
                                                                                    stringValue = "cumque";
                                                                                }};) {{
                                                                    attributeName = "nihil";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "inventore";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-04-04T23:03:08.944Z");
                                                                        numberValue = "quasi";
                                                                        stringValue = "cumque";
                                                                    }};
                                                                }}),
                                                                add(new AttributeNameAndValue("officiis",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "cum";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2020-02-18T05:26:29.481Z");
                                                                                    numberValue = "quo";
                                                                                    stringValue = "incidunt";
                                                                                }};) {{
                                                                    attributeName = "delectus";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "labore";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-11-26T18:32:59.154Z");
                                                                        numberValue = "rem";
                                                                        stringValue = "atque";
                                                                    }};
                                                                }}),
                                                            }};
                                                            sourceObjectReference = new ObjectReference() {{
                                                                selector = "quod";
                                                            }};
                                                            targetObjectReference = new ObjectReference() {{
                                                                selector = "minus";
                                                            }};
                                                            typedLinkFacet = new TypedLinkSchemaAndFacetName("excepturi", "occaecati") {{
                                                                schemaArn = "porro";
                                                                typedLinkName = "id";
                                                            }};
                                                        }};
                                                    }};
                                                    updateObjectAttributes = new BatchUpdateObjectAttributes(                new org.openapis.openapi.models.shared.ObjectAttributeUpdate[]{{
                                                                        add(new ObjectAttributeUpdate() {{
                                                                            objectAttributeAction = new ObjectAttributeAction() {{
                                                                                objectAttributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                                objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "aliquam";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-01-07T01:07:05.981Z");
                                                                                    numberValue = "sequi";
                                                                                    stringValue = "saepe";
                                                                                }};
                                                                            }};
                                                                            objectAttributeKey = new AttributeKey("dolorum", "deserunt", "ad") {{
                                                                                facetName = "consequatur";
                                                                                name = "Raquel Schumm";
                                                                                schemaArn = "aliquam";
                                                                            }};
                                                                        }}),
                                                                        add(new ObjectAttributeUpdate() {{
                                                                            objectAttributeAction = new ObjectAttributeAction() {{
                                                                                objectAttributeActionType = UpdateActionTypeEnum.DELETE;
                                                                                objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "sequi";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2020-12-26T16:15:07.247Z");
                                                                                    numberValue = "nobis";
                                                                                    stringValue = "quibusdam";
                                                                                }};
                                                                            }};
                                                                            objectAttributeKey = new AttributeKey("necessitatibus", "accusantium", "ad") {{
                                                                                facetName = "omnis";
                                                                                name = "Roberta Nolan";
                                                                                schemaArn = "quia";
                                                                            }};
                                                                        }}),
                                                                        add(new ObjectAttributeUpdate() {{
                                                                            objectAttributeAction = new ObjectAttributeAction() {{
                                                                                objectAttributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                                objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "molestiae";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-06-27T02:38:23.996Z");
                                                                                    numberValue = "sed";
                                                                                    stringValue = "odit";
                                                                                }};
                                                                            }};
                                                                            objectAttributeKey = new AttributeKey("esse", "accusantium", "distinctio") {{
                                                                                facetName = "iusto";
                                                                                name = "Jesse Simonis V";
                                                                                schemaArn = "dolore";
                                                                            }};
                                                                        }}),
                                                                        add(new ObjectAttributeUpdate() {{
                                                                            objectAttributeAction = new ObjectAttributeAction() {{
                                                                                objectAttributeActionType = UpdateActionTypeEnum.DELETE;
                                                                                objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "quam";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-05-21T15:59:19.662Z");
                                                                                    numberValue = "delectus";
                                                                                    stringValue = "culpa";
                                                                                }};
                                                                            }};
                                                                            objectAttributeKey = new AttributeKey("laborum", "voluptas", "doloribus") {{
                                                                                facetName = "voluptatum";
                                                                                name = "Jody Wolff";
                                                                                schemaArn = "ullam";
                                                                            }};
                                                                        }}),
                                                                    }},                 new ObjectReference() {{
                                                                        selector = "animi";
                                                                    }};) {{
                                                        attributeUpdates = new org.openapis.openapi.models.shared.ObjectAttributeUpdate[]{{
                                                            add(new ObjectAttributeUpdate() {{
                                                                objectAttributeAction = new ObjectAttributeAction() {{
                                                                    objectAttributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                    objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "optio";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-10-15T03:46:52.888Z");
                                                                        numberValue = "repellat";
                                                                        stringValue = "quae";
                                                                    }};
                                                                }};
                                                                objectAttributeKey = new AttributeKey("similique", "ea", "animi") {{
                                                                    facetName = "deleniti";
                                                                    name = "Irvin Marks";
                                                                    schemaArn = "beatae";
                                                                }};
                                                            }}),
                                                            add(new ObjectAttributeUpdate() {{
                                                                objectAttributeAction = new ObjectAttributeAction() {{
                                                                    objectAttributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                    objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "tenetur";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-07-17T21:21:49.214Z");
                                                                        numberValue = "animi";
                                                                        stringValue = "laudantium";
                                                                    }};
                                                                }};
                                                                objectAttributeKey = new AttributeKey("itaque", "dignissimos", "ipsam") {{
                                                                    facetName = "esse";
                                                                    name = "Merle Franecki";
                                                                    schemaArn = "rerum";
                                                                }};
                                                            }}),
                                                            add(new ObjectAttributeUpdate() {{
                                                                objectAttributeAction = new ObjectAttributeAction() {{
                                                                    objectAttributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                    objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "impedit";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-08-29T22:58:29.382Z");
                                                                        numberValue = "facilis";
                                                                        stringValue = "ipsum";
                                                                    }};
                                                                }};
                                                                objectAttributeKey = new AttributeKey("libero", "iste", "illo") {{
                                                                    facetName = "ut";
                                                                    name = "Julie Lakin";
                                                                    schemaArn = "expedita";
                                                                }};
                                                            }}),
                                                            add(new ObjectAttributeUpdate() {{
                                                                objectAttributeAction = new ObjectAttributeAction() {{
                                                                    objectAttributeActionType = UpdateActionTypeEnum.DELETE;
                                                                    objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "quos";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-04-09T13:27:40.113Z");
                                                                        numberValue = "iusto";
                                                                        stringValue = "enim";
                                                                    }};
                                                                }};
                                                                objectAttributeKey = new AttributeKey("rem", "tenetur", "deleniti") {{
                                                                    facetName = "accusamus";
                                                                    name = "Silvia Langworth V";
                                                                    schemaArn = "illum";
                                                                }};
                                                            }}),
                                                        }};
                                                        objectReference = new ObjectReference() {{
                                                            selector = "modi";
                                                        }};
                                                    }};
                                                }}),
                                                add(new BatchWriteOperation() {{
                                                    addFacetToObject = new BatchAddFacetToObject(                new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("fugit", "maxime", "dolorum");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "repellat";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-02-25T17:35:04.595Z");
                                                                                            numberValue = "quibusdam";
                                                                                            stringValue = "commodi";
                                                                                        }};) {{
                                                                            key = new AttributeKey("odio", "nulla", "impedit") {{
                                                                                facetName = "deserunt";
                                                                                name = "Ms. Erin Dickinson";
                                                                                schemaArn = "magnam";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "cupiditate";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-08-26T17:41:33.772Z");
                                                                                numberValue = "laborum";
                                                                                stringValue = "illum";
                                                                            }};
                                                                        }}),
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("ducimus", "doloremque", "perferendis");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "laudantium";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-06-15T09:26:04.551Z");
                                                                                            numberValue = "molestiae";
                                                                                            stringValue = "quis";
                                                                                        }};) {{
                                                                            key = new AttributeKey("culpa", "repudiandae", "aspernatur") {{
                                                                                facetName = "esse";
                                                                                name = "Edith Spencer DVM";
                                                                                schemaArn = "exercitationem";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "sapiente";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-05-12T04:39:14.708Z");
                                                                                numberValue = "suscipit";
                                                                                stringValue = "harum";
                                                                            }};
                                                                        }}),
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("minima", "tempora", "perferendis");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "corrupti";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-02-23T05:45:35.035Z");
                                                                                            numberValue = "numquam";
                                                                                            stringValue = "doloremque";
                                                                                        }};) {{
                                                                            key = new AttributeKey("iure", "quisquam", "provident") {{
                                                                                facetName = "iure";
                                                                                name = "Gail Fay";
                                                                                schemaArn = "est";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "laudantium";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-04-08T17:06:27.758Z");
                                                                                numberValue = "enim";
                                                                                stringValue = "ipsam";
                                                                            }};
                                                                        }}),
                                                                    }},                 new ObjectReference() {{
                                                                        selector = "cum";
                                                                    }};,                 new SchemaFacet() {{
                                                                        facetName = "nobis";
                                                                        schemaArn = "similique";
                                                                    }};) {{
                                                        objectAttributeList = new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                            add(new AttributeKeyAndValue(                new AttributeKey("rerum", "in", "nostrum");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "temporibus";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-10-12T00:49:16.585Z");
                                                                                numberValue = "nisi";
                                                                                stringValue = "dignissimos";
                                                                            }};) {{
                                                                key = new AttributeKey("optio", "sequi", "sunt") {{
                                                                    facetName = "corporis";
                                                                    name = "Gwen Reichel";
                                                                    schemaArn = "voluptatem";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "vitae";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-11-15T14:40:21.227Z");
                                                                    numberValue = "sed";
                                                                    stringValue = "amet";
                                                                }};
                                                            }}),
                                                            add(new AttributeKeyAndValue(                new AttributeKey("provident", "ex", "repellendus");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "unde";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-03-25T05:53:07.880Z");
                                                                                numberValue = "sequi";
                                                                                stringValue = "commodi";
                                                                            }};) {{
                                                                key = new AttributeKey("possimus", "maiores", "odio") {{
                                                                    facetName = "reiciendis";
                                                                    name = "Miss Gerald Orn";
                                                                    schemaArn = "quos";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "provident";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-11-12T03:58:41.553Z");
                                                                    numberValue = "similique";
                                                                    stringValue = "nesciunt";
                                                                }};
                                                            }}),
                                                            add(new AttributeKeyAndValue(                new AttributeKey("dicta", "impedit", "tempora");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "eveniet";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-07-20T08:48:29.633Z");
                                                                                numberValue = "impedit";
                                                                                stringValue = "quas";
                                                                            }};) {{
                                                                key = new AttributeKey("distinctio", "mollitia", "impedit") {{
                                                                    facetName = "labore";
                                                                    name = "Mrs. Arnold Schamberger";
                                                                    schemaArn = "maiores";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "accusamus";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-06-12T01:59:08.514Z");
                                                                    numberValue = "blanditiis";
                                                                    stringValue = "cum";
                                                                }};
                                                            }}),
                                                            add(new AttributeKeyAndValue(                new AttributeKey("possimus", "cum", "suscipit");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "saepe";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2020-08-08T03:32:10.715Z");
                                                                                numberValue = "nihil";
                                                                                stringValue = "quaerat";
                                                                            }};) {{
                                                                key = new AttributeKey("itaque", "vero", "quidem") {{
                                                                    facetName = "impedit";
                                                                    name = "Vicky Walker Jr.";
                                                                    schemaArn = "maiores";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "illo";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2021-07-12T09:24:12.136Z");
                                                                    numberValue = "minus";
                                                                    stringValue = "distinctio";
                                                                }};
                                                            }}),
                                                        }};
                                                        objectReference = new ObjectReference() {{
                                                            selector = "ipsum";
                                                        }};
                                                        schemaFacet = new SchemaFacet() {{
                                                            facetName = "ducimus";
                                                            schemaArn = "laudantium";
                                                        }};
                                                    }};
                                                    attachObject = new BatchAttachObject(                new ObjectReference() {{
                                                                        selector = "cumque";
                                                                    }};, "soluta",                 new ObjectReference() {{
                                                                        selector = "fugiat";
                                                                    }};) {{
                                                        childReference = new ObjectReference() {{
                                                            selector = "porro";
                                                        }};
                                                        linkName = "impedit";
                                                        parentReference = new ObjectReference() {{
                                                            selector = "nisi";
                                                        }};
                                                    }};
                                                    attachPolicy = new BatchAttachPolicy(                new ObjectReference() {{
                                                                        selector = "enim";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "maiores";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "laboriosam";
                                                        }};
                                                        policyReference = new ObjectReference() {{
                                                            selector = "nam";
                                                        }};
                                                    }};
                                                    attachToIndex = new BatchAttachToIndex(                new ObjectReference() {{
                                                                        selector = "maxime";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "cupiditate";
                                                                    }};) {{
                                                        indexReference = new ObjectReference() {{
                                                            selector = "consectetur";
                                                        }};
                                                        targetReference = new ObjectReference() {{
                                                            selector = "necessitatibus";
                                                        }};
                                                    }};
                                                    attachTypedLink = new BatchAttachTypedLink(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                        add(new AttributeNameAndValue("possimus",                 new TypedAttributeValue() {{
                                                                                            binaryValue = "fugit";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-01-30T12:03:43.119Z");
                                                                                            numberValue = "corporis";
                                                                                            stringValue = "ea";
                                                                                        }};) {{
                                                                            attributeName = "tempora";
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "voluptate";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-04-15T11:49:56.278Z");
                                                                                numberValue = "aperiam";
                                                                                stringValue = "voluptates";
                                                                            }};
                                                                        }}),
                                                                        add(new AttributeNameAndValue("autem",                 new TypedAttributeValue() {{
                                                                                            binaryValue = "nesciunt";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2021-09-08T12:11:31.407Z");
                                                                                            numberValue = "provident";
                                                                                            stringValue = "beatae";
                                                                                        }};) {{
                                                                            attributeName = "eos";
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "aliquam";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2021-02-11T13:32:57.106Z");
                                                                                numberValue = "maiores";
                                                                                stringValue = "asperiores";
                                                                            }};
                                                                        }}),
                                                                        add(new AttributeNameAndValue("tempore",                 new TypedAttributeValue() {{
                                                                                            binaryValue = "commodi";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-08-14T04:20:18.679Z");
                                                                                            numberValue = "voluptate";
                                                                                            stringValue = "nisi";
                                                                                        }};) {{
                                                                            attributeName = "ipsa";
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "mollitia";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2021-05-07T01:28:20.201Z");
                                                                                numberValue = "quo";
                                                                                stringValue = "fuga";
                                                                            }};
                                                                        }}),
                                                                    }},                 new ObjectReference() {{
                                                                        selector = "aliquid";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "provident";
                                                                    }};,                 new TypedLinkSchemaAndFacetName("laboriosam", "accusamus");) {{
                                                        attributes = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                            add(new AttributeNameAndValue("explicabo",                 new TypedAttributeValue() {{
                                                                                binaryValue = "vel";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2021-09-03T23:09:42.514Z");
                                                                                numberValue = "possimus";
                                                                                stringValue = "fugit";
                                                                            }};) {{
                                                                attributeName = "provident";
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "adipisci";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-09-13T00:04:52.333Z");
                                                                    numberValue = "repellat";
                                                                    stringValue = "omnis";
                                                                }};
                                                            }}),
                                                        }};
                                                        sourceObjectReference = new ObjectReference() {{
                                                            selector = "ipsam";
                                                        }};
                                                        targetObjectReference = new ObjectReference() {{
                                                            selector = "nostrum";
                                                        }};
                                                        typedLinkFacet = new TypedLinkSchemaAndFacetName("quasi", "error") {{
                                                            schemaArn = "sequi";
                                                            typedLinkName = "voluptatum";
                                                        }};
                                                    }};
                                                    createIndex = new BatchCreateIndex(false,                 new org.openapis.openapi.models.shared.AttributeKey[]{{
                                                                        add(new AttributeKey("tenetur", "voluptate", "quam") {{
                                                                            facetName = "veritatis";
                                                                            name = "Ms. Darnell Denesik";
                                                                            schemaArn = "totam";
                                                                        }}),
                                                                        add(new AttributeKey("facere", "maxime", "fuga") {{
                                                                            facetName = "quod";
                                                                            name = "Dixie Wisozk";
                                                                            schemaArn = "inventore";
                                                                        }}),
                                                                        add(new AttributeKey("eligendi", "voluptatum", "perferendis") {{
                                                                            facetName = "ab";
                                                                            name = "Kim Wunsch";
                                                                            schemaArn = "sequi";
                                                                        }}),
                                                                    }}) {{
                                                        batchReferenceName = "ab";
                                                        isUnique = false;
                                                        linkName = "itaque";
                                                        orderedIndexedAttributeList = new org.openapis.openapi.models.shared.AttributeKey[]{{
                                                            add(new AttributeKey("exercitationem", "illum", "praesentium") {{
                                                                facetName = "eaque";
                                                                name = "Miss Lois Cruickshank";
                                                                schemaArn = "amet";
                                                            }}),
                                                            add(new AttributeKey("asperiores", "temporibus", "id") {{
                                                                facetName = "unde";
                                                                name = "Delbert Reynolds";
                                                                schemaArn = "nobis";
                                                            }}),
                                                            add(new AttributeKey("vero", "earum", "doloremque") {{
                                                                facetName = "atque";
                                                                name = "Mark Satterfield";
                                                                schemaArn = "provident";
                                                            }}),
                                                            add(new AttributeKey("officia", "ex", "architecto") {{
                                                                facetName = "ipsum";
                                                                name = "Laura Goodwin";
                                                                schemaArn = "atque";
                                                            }}),
                                                        }};
                                                        parentReference = new ObjectReference() {{
                                                            selector = "a";
                                                        }};
                                                    }};
                                                    createObject = new BatchCreateObject(                new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("iure", "maiores", "est");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "fugit";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-02-06T15:03:03.707Z");
                                                                                            numberValue = "iste";
                                                                                            stringValue = "dicta";
                                                                                        }};) {{
                                                                            key = new AttributeKey("velit", "ratione", "quas") {{
                                                                                facetName = "fugiat";
                                                                                name = "Donna Abshire";
                                                                                schemaArn = "quis";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "maxime";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2020-09-12T14:59:58.242Z");
                                                                                numberValue = "doloremque";
                                                                                stringValue = "totam";
                                                                            }};
                                                                        }}),
                                                                    }},                 new org.openapis.openapi.models.shared.SchemaFacet[]{{
                                                                        add(new SchemaFacet() {{
                                                                            facetName = "consequuntur";
                                                                            schemaArn = "cumque";
                                                                        }}),
                                                                        add(new SchemaFacet() {{
                                                                            facetName = "quidem";
                                                                            schemaArn = "non";
                                                                        }}),
                                                                    }}) {{
                                                        batchReferenceName = "laborum";
                                                        linkName = "omnis";
                                                        objectAttributeList = new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                            add(new AttributeKeyAndValue(                new AttributeKey("eum", "quasi", "quas");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "odio";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-03-22T00:17:32.900Z");
                                                                                numberValue = "aliquid";
                                                                                stringValue = "mollitia";
                                                                            }};) {{
                                                                key = new AttributeKey("at", "tenetur", "molestias") {{
                                                                    facetName = "tenetur";
                                                                    name = "Jacob Fisher";
                                                                    schemaArn = "illum";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "ipsam";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-04-29T08:23:03.462Z");
                                                                    numberValue = "perspiciatis";
                                                                    stringValue = "voluptates";
                                                                }};
                                                            }}),
                                                            add(new AttributeKeyAndValue(                new AttributeKey("quisquam", "facere", "dignissimos");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "iste";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-07-23T07:29:30.904Z");
                                                                                numberValue = "sint";
                                                                                stringValue = "aperiam";
                                                                            }};) {{
                                                                key = new AttributeKey("a", "impedit", "unde") {{
                                                                    facetName = "quidem";
                                                                    name = "Frances Stokes";
                                                                    schemaArn = "illum";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "ut";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2021-11-13T21:22:20.627Z");
                                                                    numberValue = "doloribus";
                                                                    stringValue = "recusandae";
                                                                }};
                                                            }}),
                                                        }};
                                                        parentReference = new ObjectReference() {{
                                                            selector = "eaque";
                                                        }};
                                                        schemaFacet = new org.openapis.openapi.models.shared.SchemaFacet[]{{
                                                            add(new SchemaFacet() {{
                                                                facetName = "laboriosam";
                                                                schemaArn = "laborum";
                                                            }}),
                                                            add(new SchemaFacet() {{
                                                                facetName = "autem";
                                                                schemaArn = "assumenda";
                                                            }}),
                                                        }};
                                                    }};
                                                    deleteObject = new BatchDeleteObject(                new ObjectReference() {{
                                                                        selector = "sunt";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "beatae";
                                                        }};
                                                    }};
                                                    detachFromIndex = new BatchDetachFromIndex(                new ObjectReference() {{
                                                                        selector = "autem";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "ducimus";
                                                                    }};) {{
                                                        indexReference = new ObjectReference() {{
                                                            selector = "molestias";
                                                        }};
                                                        targetReference = new ObjectReference() {{
                                                            selector = "beatae";
                                                        }};
                                                    }};
                                                    detachObject = new BatchDetachObject("ipsum",                 new ObjectReference() {{
                                                                        selector = "impedit";
                                                                    }};) {{
                                                        batchReferenceName = "libero";
                                                        linkName = "molestias";
                                                        parentReference = new ObjectReference() {{
                                                            selector = "necessitatibus";
                                                        }};
                                                    }};
                                                    detachPolicy = new BatchDetachPolicy(                new ObjectReference() {{
                                                                        selector = "distinctio";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "voluptatem";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "quos";
                                                        }};
                                                        policyReference = new ObjectReference() {{
                                                            selector = "illum";
                                                        }};
                                                    }};
                                                    detachTypedLink = new BatchDetachTypedLink(                new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                                        add(new AttributeNameAndValue("optio",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "tempora";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2020-09-16T11:45:06.115Z");
                                                                                                            numberValue = "maxime";
                                                                                                            stringValue = "et";
                                                                                                        }};) {{
                                                                                            attributeName = "unde";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "deserunt";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-12-23T07:52:28.761Z");
                                                                                                numberValue = "adipisci";
                                                                                                stringValue = "doloremque";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("tempora",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "eos";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-12-08T02:45:20.375Z");
                                                                                                            numberValue = "suscipit";
                                                                                                            stringValue = "laudantium";
                                                                                                        }};) {{
                                                                                            attributeName = "beatae";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "id";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-06-13T16:11:51.549Z");
                                                                                                numberValue = "ratione";
                                                                                                stringValue = "iure";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("quaerat",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "corporis";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2021-07-22T23:14:33.263Z");
                                                                                                            numberValue = "sapiente";
                                                                                                            stringValue = "esse";
                                                                                                        }};) {{
                                                                                            attributeName = "facilis";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "laudantium";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-12-26T13:28:32.312Z");
                                                                                                numberValue = "quia";
                                                                                                stringValue = "officia";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("officiis",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "sequi";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-12-21T02:14:27.466Z");
                                                                                                            numberValue = "est";
                                                                                                            stringValue = "amet";
                                                                                                        }};) {{
                                                                                            attributeName = "neque";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "quidem";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2021-06-25T15:52:32.738Z");
                                                                                                numberValue = "tempora";
                                                                                                stringValue = "ipsam";
                                                                                            }};
                                                                                        }}),
                                                                                    }},                 new ObjectReference() {{
                                                                                        selector = "veritatis";
                                                                                    }};,                 new ObjectReference() {{
                                                                                        selector = "error";
                                                                                    }};,                 new TypedLinkSchemaAndFacetName("voluptatibus", "numquam"););) {{
                                                        typedLinkSpecifier = new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                            add(new AttributeNameAndValue("rem",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "officiis";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-08-03T06:58:15.775Z");
                                                                                                numberValue = "corporis";
                                                                                                stringValue = "quod";
                                                                                            }};) {{
                                                                                attributeName = "dicta";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "quia";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-10-18T11:41:45.332Z");
                                                                                    numberValue = "quibusdam";
                                                                                    stringValue = "numquam";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("sapiente",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "ipsum";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-04-04T20:12:39.224Z");
                                                                                                numberValue = "necessitatibus";
                                                                                                stringValue = "sequi";
                                                                                            }};) {{
                                                                                attributeName = "dolores";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "placeat";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-02-23T06:35:58.710Z");
                                                                                    numberValue = "quos";
                                                                                    stringValue = "dicta";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("illum",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "iusto";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-11-21T23:10:34.135Z");
                                                                                                numberValue = "aliquid";
                                                                                                stringValue = "ad";
                                                                                            }};) {{
                                                                                attributeName = "recusandae";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "labore";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-11-01T03:20:36.583Z");
                                                                                    numberValue = "aperiam";
                                                                                    stringValue = "dolores";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("quaerat",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "quasi";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-01-05T16:30:14.088Z");
                                                                                                numberValue = "doloremque";
                                                                                                stringValue = "assumenda";
                                                                                            }};) {{
                                                                                attributeName = "voluptate";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "vel";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-12-23T00:57:29.524Z");
                                                                                    numberValue = "vel";
                                                                                    stringValue = "laboriosam";
                                                                                }};
                                                                            }}),
                                                                        }},                 new ObjectReference() {{
                                                                            selector = "provident";
                                                                        }};,                 new ObjectReference() {{
                                                                            selector = "facere";
                                                                        }};,                 new TypedLinkSchemaAndFacetName("sed", "inventore");) {{
                                                            identityAttributeValues = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                add(new AttributeNameAndValue("consectetur",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "voluptas";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-01-23T12:59:04.523Z");
                                                                                    numberValue = "tenetur";
                                                                                    stringValue = "assumenda";
                                                                                }};) {{
                                                                    attributeName = "quaerat";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "consequatur";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-05-04T07:42:48.143Z");
                                                                        numberValue = "commodi";
                                                                        stringValue = "quibusdam";
                                                                    }};
                                                                }}),
                                                            }};
                                                            sourceObjectReference = new ObjectReference() {{
                                                                selector = "dolore";
                                                            }};
                                                            targetObjectReference = new ObjectReference() {{
                                                                selector = "enim";
                                                            }};
                                                            typedLinkFacet = new TypedLinkSchemaAndFacetName("alias", "ex") {{
                                                                schemaArn = "ullam";
                                                                typedLinkName = "perspiciatis";
                                                            }};
                                                        }};
                                                    }};
                                                    removeFacetFromObject = new BatchRemoveFacetFromObject(                new ObjectReference() {{
                                                                        selector = "earum";
                                                                    }};,                 new SchemaFacet() {{
                                                                        facetName = "excepturi";
                                                                        schemaArn = "numquam";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "rerum";
                                                        }};
                                                        schemaFacet = new SchemaFacet() {{
                                                            facetName = "dolorum";
                                                            schemaArn = "quibusdam";
                                                        }};
                                                    }};
                                                    updateLinkAttributes = new BatchUpdateLinkAttributes(                new org.openapis.openapi.models.shared.LinkAttributeUpdate[]{{
                                                                        add(new LinkAttributeUpdate() {{
                                                                            attributeAction = new LinkAttributeAction() {{
                                                                                attributeActionType = UpdateActionTypeEnum.DELETE;
                                                                                attributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "aut";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-05-24T17:08:44.205Z");
                                                                                    numberValue = "similique";
                                                                                    stringValue = "asperiores";
                                                                                }};
                                                                            }};
                                                                            attributeKey = new AttributeKey("porro", "fugiat", "soluta") {{
                                                                                facetName = "modi";
                                                                                name = "Mike Heaney";
                                                                                schemaArn = "non";
                                                                            }};
                                                                        }}),
                                                                        add(new LinkAttributeUpdate() {{
                                                                            attributeAction = new LinkAttributeAction() {{
                                                                                attributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                                attributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "reiciendis";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-02-15T16:22:51.183Z");
                                                                                    numberValue = "eos";
                                                                                    stringValue = "quas";
                                                                                }};
                                                                            }};
                                                                            attributeKey = new AttributeKey("laudantium", "modi", "magnam") {{
                                                                                facetName = "quasi";
                                                                                name = "Irma Kub";
                                                                                schemaArn = "iure";
                                                                            }};
                                                                        }}),
                                                                    }},                 new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                                        add(new AttributeNameAndValue("unde",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "quae";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-08-29T09:17:21.956Z");
                                                                                                            numberValue = "eveniet";
                                                                                                            stringValue = "laboriosam";
                                                                                                        }};) {{
                                                                                            attributeName = "nulla";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "repudiandae";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2021-06-26T03:36:42.239Z");
                                                                                                numberValue = "enim";
                                                                                                stringValue = "animi";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("dolores",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "consequatur";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-11-05T06:56:53.505Z");
                                                                                                            numberValue = "quidem";
                                                                                                            stringValue = "voluptas";
                                                                                                        }};) {{
                                                                                            attributeName = "ratione";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "blanditiis";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2021-04-21T11:40:48.900Z");
                                                                                                numberValue = "reiciendis";
                                                                                                stringValue = "placeat";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("dolorem",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "quidem";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-02-09T20:46:26.848Z");
                                                                                                            numberValue = "vitae";
                                                                                                            stringValue = "dolor";
                                                                                                        }};) {{
                                                                                            attributeName = "quo";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "laudantium";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-05-24T10:46:29.092Z");
                                                                                                numberValue = "omnis";
                                                                                                stringValue = "fugit";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("itaque",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "et";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-03-24T17:24:35.944Z");
                                                                                                            numberValue = "ex";
                                                                                                            stringValue = "praesentium";
                                                                                                        }};) {{
                                                                                            attributeName = "ad";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "atque";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-01-04T17:39:35.177Z");
                                                                                                numberValue = "reprehenderit";
                                                                                                stringValue = "deserunt";
                                                                                            }};
                                                                                        }}),
                                                                                    }},                 new ObjectReference() {{
                                                                                        selector = "natus";
                                                                                    }};,                 new ObjectReference() {{
                                                                                        selector = "vitae";
                                                                                    }};,                 new TypedLinkSchemaAndFacetName("tenetur", "laudantium"););) {{
                                                        attributeUpdates = new org.openapis.openapi.models.shared.LinkAttributeUpdate[]{{
                                                            add(new LinkAttributeUpdate() {{
                                                                attributeAction = new LinkAttributeAction() {{
                                                                    attributeActionType = UpdateActionTypeEnum.DELETE;
                                                                    attributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "error";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-12-11T00:26:54.870Z");
                                                                        numberValue = "aliquid";
                                                                        stringValue = "nihil";
                                                                    }};
                                                                }};
                                                                attributeKey = new AttributeKey("eum", "vel", "ad") {{
                                                                    facetName = "facilis";
                                                                    name = "Barry Daugherty";
                                                                    schemaArn = "aliquid";
                                                                }};
                                                            }}),
                                                            add(new LinkAttributeUpdate() {{
                                                                attributeAction = new LinkAttributeAction() {{
                                                                    attributeActionType = UpdateActionTypeEnum.DELETE;
                                                                    attributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "illo";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-02-26T18:26:18.471Z");
                                                                        numberValue = "fugiat";
                                                                        stringValue = "impedit";
                                                                    }};
                                                                }};
                                                                attributeKey = new AttributeKey("expedita", "modi", "cumque") {{
                                                                    facetName = "culpa";
                                                                    name = "Pat Wuckert DVM";
                                                                    schemaArn = "cumque";
                                                                }};
                                                            }}),
                                                        }};
                                                        typedLinkSpecifier = new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                            add(new AttributeNameAndValue("minima",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "quos";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2021-11-18T05:53:55.515Z");
                                                                                                numberValue = "voluptatem";
                                                                                                stringValue = "provident";
                                                                                            }};) {{
                                                                                attributeName = "reiciendis";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "iste";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-06-02T22:16:37.572Z");
                                                                                    numberValue = "aut";
                                                                                    stringValue = "impedit";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("error",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "recusandae";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-04-18T17:08:56.219Z");
                                                                                                numberValue = "sapiente";
                                                                                                stringValue = "voluptatibus";
                                                                                            }};) {{
                                                                                attributeName = "quas";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "ipsum";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2020-12-13T13:53:50.677Z");
                                                                                    numberValue = "facilis";
                                                                                    stringValue = "maiores";
                                                                                }};
                                                                            }}),
                                                                        }},                 new ObjectReference() {{
                                                                            selector = "assumenda";
                                                                        }};,                 new ObjectReference() {{
                                                                            selector = "repellendus";
                                                                        }};,                 new TypedLinkSchemaAndFacetName("omnis", "delectus");) {{
                                                            identityAttributeValues = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                add(new AttributeNameAndValue("quo",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "temporibus";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-09-05T01:09:34.246Z");
                                                                                    numberValue = "quibusdam";
                                                                                    stringValue = "ipsa";
                                                                                }};) {{
                                                                    attributeName = "occaecati";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "ipsum";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2020-08-20T00:05:02.582Z");
                                                                        numberValue = "quasi";
                                                                        stringValue = "fugit";
                                                                    }};
                                                                }}),
                                                                add(new AttributeNameAndValue("facere",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "nobis";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-04-26T13:44:30.471Z");
                                                                                    numberValue = "aut";
                                                                                    stringValue = "temporibus";
                                                                                }};) {{
                                                                    attributeName = "accusamus";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "placeat";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-05-16T20:51:35.405Z");
                                                                        numberValue = "delectus";
                                                                        stringValue = "saepe";
                                                                    }};
                                                                }}),
                                                            }};
                                                            sourceObjectReference = new ObjectReference() {{
                                                                selector = "tenetur";
                                                            }};
                                                            targetObjectReference = new ObjectReference() {{
                                                                selector = "incidunt";
                                                            }};
                                                            typedLinkFacet = new TypedLinkSchemaAndFacetName("similique", "dolore") {{
                                                                schemaArn = "numquam";
                                                                typedLinkName = "corrupti";
                                                            }};
                                                        }};
                                                    }};
                                                    updateObjectAttributes = new BatchUpdateObjectAttributes(                new org.openapis.openapi.models.shared.ObjectAttributeUpdate[]{{
                                                                        add(new ObjectAttributeUpdate() {{
                                                                            objectAttributeAction = new ObjectAttributeAction() {{
                                                                                objectAttributeActionType = UpdateActionTypeEnum.DELETE;
                                                                                objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "cupiditate";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2020-01-16T16:18:57.466Z");
                                                                                    numberValue = "omnis";
                                                                                    stringValue = "quam";
                                                                                }};
                                                                            }};
                                                                            objectAttributeKey = new AttributeKey("aliquid", "aperiam", "perspiciatis") {{
                                                                                facetName = "exercitationem";
                                                                                name = "Earl Hauck";
                                                                                schemaArn = "rem";
                                                                            }};
                                                                        }}),
                                                                        add(new ObjectAttributeUpdate() {{
                                                                            objectAttributeAction = new ObjectAttributeAction() {{
                                                                                objectAttributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                                objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "itaque";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-06-19T12:32:11.312Z");
                                                                                    numberValue = "dolor";
                                                                                    stringValue = "repellendus";
                                                                                }};
                                                                            }};
                                                                            objectAttributeKey = new AttributeKey("laborum", "dicta", "voluptatem") {{
                                                                                facetName = "temporibus";
                                                                                name = "Mr. Warren Wilderman DDS";
                                                                                schemaArn = "earum";
                                                                            }};
                                                                        }}),
                                                                        add(new ObjectAttributeUpdate() {{
                                                                            objectAttributeAction = new ObjectAttributeAction() {{
                                                                                objectAttributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                                objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "aliquid";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-01-17T07:07:15.756Z");
                                                                                    numberValue = "numquam";
                                                                                    stringValue = "architecto";
                                                                                }};
                                                                            }};
                                                                            objectAttributeKey = new AttributeKey("expedita", "quia", "vitae") {{
                                                                                facetName = "est";
                                                                                name = "Ernestine Bruen DVM";
                                                                                schemaArn = "officiis";
                                                                            }};
                                                                        }}),
                                                                    }},                 new ObjectReference() {{
                                                                        selector = "odio";
                                                                    }};) {{
                                                        attributeUpdates = new org.openapis.openapi.models.shared.ObjectAttributeUpdate[]{{
                                                            add(new ObjectAttributeUpdate() {{
                                                                objectAttributeAction = new ObjectAttributeAction() {{
                                                                    objectAttributeActionType = UpdateActionTypeEnum.DELETE;
                                                                    objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "repudiandae";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-12-02T09:58:06.659Z");
                                                                        numberValue = "ullam";
                                                                        stringValue = "iusto";
                                                                    }};
                                                                }};
                                                                objectAttributeKey = new AttributeKey("voluptate", "pariatur", "minus") {{
                                                                    facetName = "inventore";
                                                                    name = "Mrs. Irene Ebert";
                                                                    schemaArn = "voluptate";
                                                                }};
                                                            }}),
                                                        }};
                                                        objectReference = new ObjectReference() {{
                                                            selector = "a";
                                                        }};
                                                    }};
                                                }}),
                                            }});, "quas") {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "distinctio";
                xAmzCredential = "placeat";
                xAmzDate = "quod";
                xAmzSecurityToken = "eligendi";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "possimus";
            }};            

            BatchWriteResponse res = sdk.sdk.batchWrite(req);

            if (res.batchWriteResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDirectory

<p>Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.</p> <p>You can also quickly create a directory using a managed schema, called the <code>QuickStartSchema</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_managed.html">Managed Schema</a> in the <i>Amazon Cloud Directory Developer Guide</i>.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDirectoryRequest;
import org.openapis.openapi.models.operations.CreateDirectoryRequestBody;
import org.openapis.openapi.models.operations.CreateDirectoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDirectoryRequest req = new CreateDirectoryRequest(                new CreateDirectoryRequestBody("distinctio");, "assumenda") {{
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "magnam";
                xAmzDate = "laudantium";
                xAmzSecurityToken = "tempora";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "doloremque";
            }};            

            CreateDirectoryResponse res = sdk.sdk.createDirectory(req);

            if (res.createDirectoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createFacet

Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateFacetRequest;
import org.openapis.openapi.models.operations.CreateFacetRequestBody;
import org.openapis.openapi.models.operations.CreateFacetRequestBodyFacetStyleEnum;
import org.openapis.openapi.models.operations.CreateFacetRequestBodyObjectTypeEnum;
import org.openapis.openapi.models.operations.CreateFacetResponse;
import org.openapis.openapi.models.shared.FacetAttribute;
import org.openapis.openapi.models.shared.FacetAttributeDefinition;
import org.openapis.openapi.models.shared.FacetAttributeReference;
import org.openapis.openapi.models.shared.FacetAttributeTypeEnum;
import org.openapis.openapi.models.shared.RequiredAttributeBehaviorEnum;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypedAttributeValue;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateFacetRequest req = new CreateFacetRequest(                new CreateFacetRequestBody("reiciendis") {{
                                attributes = new org.openapis.openapi.models.shared.FacetAttribute[]{{
                                    add(new FacetAttribute("eligendi") {{
                                        attributeDefinition = new FacetAttributeDefinition(FacetAttributeTypeEnum.STRING) {{
                                            defaultValue = new TypedAttributeValue() {{
                                                binaryValue = "aliquam";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-04-26T23:17:59.840Z");
                                                numberValue = "natus";
                                                stringValue = "ab";
                                            }};
                                            isImmutable = false;
                                            rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                put("eum", new Rule() {{
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("placeat", "ab");
                                                        put("ad", "blanditiis");
                                                        put("porro", "labore");
                                                    }};
                                                    type = RuleTypeEnum.STRING_LENGTH;
                                                }});
                                                put("ut", new Rule() {{
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("ullam", "numquam");
                                                        put("enim", "cupiditate");
                                                        put("occaecati", "itaque");
                                                        put("fuga", "consectetur");
                                                    }};
                                                    type = RuleTypeEnum.NUMBER_COMPARISON;
                                                }});
                                                put("aspernatur", new Rule() {{
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("suscipit", "ipsa");
                                                    }};
                                                    type = RuleTypeEnum.STRING_LENGTH;
                                                }});
                                                put("sint", new Rule() {{
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("qui", "accusantium");
                                                        put("consequatur", "impedit");
                                                        put("recusandae", "voluptate");
                                                    }};
                                                    type = RuleTypeEnum.STRING_FROM_SET;
                                                }});
                                            }};
                                            type = FacetAttributeTypeEnum.NUMBER;
                                        }};
                                        attributeReference = new FacetAttributeReference("quos", "maiores") {{
                                            targetAttributeName = "expedita";
                                            targetFacetName = "quibusdam";
                                        }};
                                        name = "Miss Harvey Nicolas Sr.";
                                        requiredBehavior = RequiredAttributeBehaviorEnum.REQUIRED_ALWAYS;
                                    }}),
                                    add(new FacetAttribute("dignissimos") {{
                                        attributeDefinition = new FacetAttributeDefinition(FacetAttributeTypeEnum.BINARY) {{
                                            defaultValue = new TypedAttributeValue() {{
                                                binaryValue = "officiis";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-11-07T23:10:51.271Z");
                                                numberValue = "ratione";
                                                stringValue = "possimus";
                                            }};
                                            isImmutable = false;
                                            rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                put("aut", new Rule() {{
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("esse", "delectus");
                                                        put("deserunt", "ratione");
                                                        put("ipsa", "debitis");
                                                    }};
                                                    type = RuleTypeEnum.STRING_FROM_SET;
                                                }});
                                                put("deserunt", new Rule() {{
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("ducimus", "consequuntur");
                                                        put("ipsam", "libero");
                                                        put("quia", "omnis");
                                                        put("dicta", "qui");
                                                    }};
                                                    type = RuleTypeEnum.BINARY_LENGTH;
                                                }});
                                            }};
                                            type = FacetAttributeTypeEnum.STRING;
                                        }};
                                        attributeReference = new FacetAttributeReference("voluptatum", "velit") {{
                                            targetAttributeName = "consequatur";
                                            targetFacetName = "fugiat";
                                        }};
                                        name = "Dan Nolan";
                                        requiredBehavior = RequiredAttributeBehaviorEnum.REQUIRED_ALWAYS;
                                    }}),
                                    add(new FacetAttribute("repellendus") {{
                                        attributeDefinition = new FacetAttributeDefinition(FacetAttributeTypeEnum.NUMBER) {{
                                            defaultValue = new TypedAttributeValue() {{
                                                binaryValue = "provident";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2021-05-06T00:34:29.656Z");
                                                numberValue = "sunt";
                                                stringValue = "odit";
                                            }};
                                            isImmutable = false;
                                            rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                put("deleniti", new Rule() {{
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("quasi", "repellat");
                                                        put("atque", "magnam");
                                                        put("perspiciatis", "amet");
                                                        put("corrupti", "sunt");
                                                    }};
                                                    type = RuleTypeEnum.NUMBER_COMPARISON;
                                                }});
                                                put("delectus", new Rule() {{
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("porro", "quaerat");
                                                        put("magni", "cumque");
                                                        put("quos", "in");
                                                        put("commodi", "maxime");
                                                    }};
                                                    type = RuleTypeEnum.BINARY_LENGTH;
                                                }});
                                                put("minus", new Rule() {{
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("possimus", "delectus");
                                                    }};
                                                    type = RuleTypeEnum.STRING_FROM_SET;
                                                }});
                                                put("aliquam", new Rule() {{
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("hic", "quo");
                                                        put("illo", "nobis");
                                                        put("esse", "nisi");
                                                        put("explicabo", "sequi");
                                                    }};
                                                    type = RuleTypeEnum.BINARY_LENGTH;
                                                }});
                                            }};
                                            type = FacetAttributeTypeEnum.VARIANT;
                                        }};
                                        attributeReference = new FacetAttributeReference("maiores", "nam") {{
                                            targetAttributeName = "numquam";
                                            targetFacetName = "vitae";
                                        }};
                                        name = "Luz Shields";
                                        requiredBehavior = RequiredAttributeBehaviorEnum.NOT_REQUIRED;
                                    }}),
                                }};
                                facetStyle = CreateFacetRequestBodyFacetStyleEnum.DYNAMIC;
                                objectType = CreateFacetRequestBodyObjectTypeEnum.NODE;
                            }};, "magnam") {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "expedita";
                xAmzCredential = "autem";
                xAmzDate = "tempore";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "nostrum";
                xAmzSignedHeaders = "officia";
            }};            

            CreateFacetResponse res = sdk.sdk.createFacet(req);

            if (res.createFacetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createIndex

Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.html">Indexing and search</a> for more information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateIndexRequest;
import org.openapis.openapi.models.operations.CreateIndexRequestBody;
import org.openapis.openapi.models.operations.CreateIndexRequestBodyParentReference;
import org.openapis.openapi.models.operations.CreateIndexResponse;
import org.openapis.openapi.models.shared.AttributeKey;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateIndexRequest req = new CreateIndexRequest(                new CreateIndexRequestBody(false,                 new org.openapis.openapi.models.shared.AttributeKey[]{{
                                                add(new AttributeKey("laborum", "vero", "eos") {{
                                                    facetName = "corporis";
                                                    name = "Luther Leuschke";
                                                    schemaArn = "dolores";
                                                }}),
                                                add(new AttributeKey("sed", "nam", "quia") {{
                                                    facetName = "voluptatem";
                                                    name = "Alfonso Berge";
                                                    schemaArn = "minus";
                                                }}),
                                                add(new AttributeKey("ullam", "molestiae", "itaque") {{
                                                    facetName = "iusto";
                                                    name = "Sandy Cormier";
                                                    schemaArn = "placeat";
                                                }}),
                                            }}) {{
                                linkName = "rem";
                                parentReference = new CreateIndexRequestBodyParentReference() {{
                                    selector = "nemo";
                                }};;
                            }};, "non") {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "ipsa";
                xAmzDate = "aliquam";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "occaecati";
                xAmzSignedHeaders = "quibusdam";
            }};            

            CreateIndexResponse res = sdk.sdk.createIndex(req);

            if (res.createIndexResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createObject

Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. 

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateObjectRequest;
import org.openapis.openapi.models.operations.CreateObjectRequestBody;
import org.openapis.openapi.models.operations.CreateObjectRequestBodyParentReference;
import org.openapis.openapi.models.operations.CreateObjectResponse;
import org.openapis.openapi.models.shared.AttributeKey;
import org.openapis.openapi.models.shared.AttributeKeyAndValue;
import org.openapis.openapi.models.shared.SchemaFacet;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypedAttributeValue;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magni") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateObjectRequest req = new CreateObjectRequest(                new CreateObjectRequestBody(                new org.openapis.openapi.models.shared.SchemaFacet[]{{
                                                add(new SchemaFacet() {{
                                                    facetName = "consequuntur";
                                                    schemaArn = "eius";
                                                }}),
                                            }}) {{
                                linkName = "commodi";
                                objectAttributeList = new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                    add(new AttributeKeyAndValue(                new AttributeKey("ratione", "molestiae", "optio");,                 new TypedAttributeValue() {{
                                                        binaryValue = "saepe";
                                                        booleanValue = false;
                                                        datetimeValue = OffsetDateTime.parse("2022-11-23T10:25:23.320Z");
                                                        numberValue = "sed";
                                                        stringValue = "eos";
                                                    }};) {{
                                        key = new AttributeKey("odio", "sit", "voluptatum") {{
                                            facetName = "vel";
                                            name = "Don Huel";
                                            schemaArn = "doloremque";
                                        }};
                                        value = new TypedAttributeValue() {{
                                            binaryValue = "tempora";
                                            booleanValue = false;
                                            datetimeValue = OffsetDateTime.parse("2021-08-13T06:29:29.438Z");
                                            numberValue = "dolorum";
                                            stringValue = "libero";
                                        }};
                                    }}),
                                    add(new AttributeKeyAndValue(                new AttributeKey("suscipit", "ex", "sint");,                 new TypedAttributeValue() {{
                                                        binaryValue = "est";
                                                        booleanValue = false;
                                                        datetimeValue = OffsetDateTime.parse("2021-03-27T00:15:43.118Z");
                                                        numberValue = "alias";
                                                        stringValue = "deserunt";
                                                    }};) {{
                                        key = new AttributeKey("exercitationem", "veniam", "modi") {{
                                            facetName = "consequuntur";
                                            name = "Jean Mayert";
                                            schemaArn = "quidem";
                                        }};
                                        value = new TypedAttributeValue() {{
                                            binaryValue = "quasi";
                                            booleanValue = false;
                                            datetimeValue = OffsetDateTime.parse("2022-05-16T02:03:34.304Z");
                                            numberValue = "possimus";
                                            stringValue = "quo";
                                        }};
                                    }}),
                                }};
                                parentReference = new CreateObjectRequestBodyParentReference() {{
                                    selector = "fugit";
                                }};;
                            }};, "autem") {{
                xAmzAlgorithm = "quo";
                xAmzContentSha256 = "molestiae";
                xAmzCredential = "maxime";
                xAmzDate = "facere";
                xAmzSecurityToken = "impedit";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "deleniti";
            }};            

            CreateObjectResponse res = sdk.sdk.createObject(req);

            if (res.createObjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSchema

<p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSchemaRequest;
import org.openapis.openapi.models.operations.CreateSchemaRequestBody;
import org.openapis.openapi.models.operations.CreateSchemaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSchemaRequest req = new CreateSchemaRequest(                new CreateSchemaRequestBody("maiores");) {{
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "aliquid";
                xAmzCredential = "laudantium";
                xAmzDate = "unde";
                xAmzSecurityToken = "corrupti";
                xAmzSignature = "quae";
                xAmzSignedHeaders = "facere";
            }};            

            CreateSchemaResponse res = sdk.sdk.createSchema(req);

            if (res.createSchemaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTypedLinkFacet

Creates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTypedLinkFacetRequest;
import org.openapis.openapi.models.operations.CreateTypedLinkFacetRequestBody;
import org.openapis.openapi.models.operations.CreateTypedLinkFacetRequestBodyFacet;
import org.openapis.openapi.models.operations.CreateTypedLinkFacetResponse;
import org.openapis.openapi.models.shared.FacetAttributeTypeEnum;
import org.openapis.openapi.models.shared.RequiredAttributeBehaviorEnum;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypedAttributeValue;
import org.openapis.openapi.models.shared.TypedLinkAttributeDefinition;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTypedLinkFacetRequest req = new CreateTypedLinkFacetRequest(                new CreateTypedLinkFacetRequestBody(                new CreateTypedLinkFacetRequestBodyFacet() {{
                                                attributes = new org.openapis.openapi.models.shared.TypedLinkAttributeDefinition[]{{
                                                    add(new TypedLinkAttributeDefinition("eligendi", RequiredAttributeBehaviorEnum.NOT_REQUIRED, FacetAttributeTypeEnum.STRING) {{
                                                        defaultValue = new TypedAttributeValue() {{
                                                            binaryValue = "nam";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-10-05T20:38:51.218Z");
                                                            numberValue = "minus";
                                                            stringValue = "hic";
                                                        }};
                                                        isImmutable = false;
                                                        name = "Horace Feest";
                                                        requiredBehavior = RequiredAttributeBehaviorEnum.NOT_REQUIRED;
                                                        rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                            put("veritatis", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("voluptatibus", "magnam");
                                                                    put("aperiam", "ducimus");
                                                                    put("itaque", "necessitatibus");
                                                                }};
                                                                type = RuleTypeEnum.NUMBER_COMPARISON;
                                                            }});
                                                        }};
                                                        type = FacetAttributeTypeEnum.VARIANT;
                                                    }}),
                                                    add(new TypedLinkAttributeDefinition("expedita", RequiredAttributeBehaviorEnum.REQUIRED_ALWAYS, FacetAttributeTypeEnum.BOOLEAN_) {{
                                                        defaultValue = new TypedAttributeValue() {{
                                                            binaryValue = "impedit";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-11-12T06:51:32.985Z");
                                                            numberValue = "nobis";
                                                            stringValue = "nihil";
                                                        }};
                                                        isImmutable = false;
                                                        name = "Abel Buckridge";
                                                        requiredBehavior = RequiredAttributeBehaviorEnum.REQUIRED_ALWAYS;
                                                        rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                            put("ratione", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("corrupti", "est");
                                                                    put("perferendis", "quibusdam");
                                                                    put("impedit", "ducimus");
                                                                }};
                                                                type = RuleTypeEnum.NUMBER_COMPARISON;
                                                            }});
                                                            put("nisi", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("fugit", "dolore");
                                                                }};
                                                                type = RuleTypeEnum.STRING_LENGTH;
                                                            }});
                                                        }};
                                                        type = FacetAttributeTypeEnum.DATETIME;
                                                    }}),
                                                    add(new TypedLinkAttributeDefinition("pariatur", RequiredAttributeBehaviorEnum.NOT_REQUIRED, FacetAttributeTypeEnum.NUMBER) {{
                                                        defaultValue = new TypedAttributeValue() {{
                                                            binaryValue = "impedit";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2021-06-23T12:33:28.750Z");
                                                            numberValue = "est";
                                                            stringValue = "inventore";
                                                        }};
                                                        isImmutable = false;
                                                        name = "Kari Balistreri";
                                                        requiredBehavior = RequiredAttributeBehaviorEnum.REQUIRED_ALWAYS;
                                                        rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                            put("magni", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("alias", "quidem");
                                                                    put("deleniti", "possimus");
                                                                }};
                                                                type = RuleTypeEnum.NUMBER_COMPARISON;
                                                            }});
                                                            put("odio", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("aspernatur", "at");
                                                                }};
                                                                type = RuleTypeEnum.STRING_LENGTH;
                                                            }});
                                                            put("praesentium", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("exercitationem", "cum");
                                                                    put("voluptatum", "facilis");
                                                                    put("placeat", "reiciendis");
                                                                }};
                                                                type = RuleTypeEnum.BINARY_LENGTH;
                                                            }});
                                                        }};
                                                        type = FacetAttributeTypeEnum.BINARY;
                                                    }}),
                                                }};
                                                identityAttributeOrder = new String[]{{
                                                    add("natus"),
                                                    add("nisi"),
                                                }};
                                                name = "Vincent Ernser";
                                            }};);, "tenetur") {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "dolore";
                xAmzCredential = "ullam";
                xAmzDate = "velit";
                xAmzSecurityToken = "adipisci";
                xAmzSignature = "cupiditate";
                xAmzSignedHeaders = "occaecati";
            }};            

            CreateTypedLinkFacetResponse res = sdk.sdk.createTypedLinkFacet(req);

            if (res.createTypedLinkFacetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDirectory

Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDirectoryRequest;
import org.openapis.openapi.models.operations.DeleteDirectoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDirectoryRequest req = new DeleteDirectoryRequest("fugiat") {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "quas";
                xAmzCredential = "repellendus";
                xAmzDate = "saepe";
                xAmzSecurityToken = "amet";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "vel";
            }};            

            DeleteDirectoryResponse res = sdk.sdk.deleteDirectory(req);

            if (res.deleteDirectoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteFacet

Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s that are associated with the facet will be deleted. Only development schema facets are allowed deletion.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFacetRequest;
import org.openapis.openapi.models.operations.DeleteFacetRequestBody;
import org.openapis.openapi.models.operations.DeleteFacetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFacetRequest req = new DeleteFacetRequest(                new DeleteFacetRequestBody("iste");, "nesciunt") {{
                xAmzAlgorithm = "corrupti";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "voluptatibus";
                xAmzDate = "ullam";
                xAmzSecurityToken = "dolorum";
                xAmzSignature = "soluta";
                xAmzSignedHeaders = "cum";
            }};            

            DeleteFacetResponse res = sdk.sdk.deleteFacet(req);

            if (res.deleteFacetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteObject

Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteObjectRequest;
import org.openapis.openapi.models.operations.DeleteObjectRequestBody;
import org.openapis.openapi.models.operations.DeleteObjectRequestBodyObjectReference;
import org.openapis.openapi.models.operations.DeleteObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteObjectRequest req = new DeleteObjectRequest(                new DeleteObjectRequestBody(                new DeleteObjectRequestBodyObjectReference() {{
                                                selector = "delectus";
                                            }};);, "commodi") {{
                xAmzAlgorithm = "commodi";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "ullam";
                xAmzDate = "ullam";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "est";
                xAmzSignedHeaders = "qui";
            }};            

            DeleteObjectResponse res = sdk.sdk.deleteObject(req);

            if (res.deleteObjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSchema

Deletes a given schema. Schemas in a development and published state can only be deleted. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSchemaRequest;
import org.openapis.openapi.models.operations.DeleteSchemaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSchemaRequest req = new DeleteSchemaRequest("adipisci") {{
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "qui";
                xAmzCredential = "deserunt";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "incidunt";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "dolor";
            }};            

            DeleteSchemaResponse res = sdk.sdk.deleteSchema(req);

            if (res.deleteSchemaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTypedLinkFacet

Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTypedLinkFacetRequest;
import org.openapis.openapi.models.operations.DeleteTypedLinkFacetRequestBody;
import org.openapis.openapi.models.operations.DeleteTypedLinkFacetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("est") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTypedLinkFacetRequest req = new DeleteTypedLinkFacetRequest(                new DeleteTypedLinkFacetRequestBody("reiciendis");, "possimus") {{
                xAmzAlgorithm = "odit";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "inventore";
                xAmzDate = "minima";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "deserunt";
            }};            

            DeleteTypedLinkFacetResponse res = sdk.sdk.deleteTypedLinkFacet(req);

            if (res.deleteTypedLinkFacetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detachFromIndex

Detaches the specified object from the specified index.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetachFromIndexRequest;
import org.openapis.openapi.models.operations.DetachFromIndexRequestBody;
import org.openapis.openapi.models.operations.DetachFromIndexRequestBodyIndexReference;
import org.openapis.openapi.models.operations.DetachFromIndexRequestBodyTargetReference;
import org.openapis.openapi.models.operations.DetachFromIndexResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetachFromIndexRequest req = new DetachFromIndexRequest(                new DetachFromIndexRequestBody(                new DetachFromIndexRequestBodyIndexReference() {{
                                                selector = "ipsam";
                                            }};,                 new DetachFromIndexRequestBodyTargetReference() {{
                                                selector = "voluptatem";
                                            }};);, "illo") {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "eveniet";
                xAmzDate = "quae";
                xAmzSecurityToken = "ea";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "veniam";
            }};            

            DetachFromIndexResponse res = sdk.sdk.detachFromIndex(req);

            if (res.detachFromIndexResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detachObject

Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetachObjectRequest;
import org.openapis.openapi.models.operations.DetachObjectRequestBody;
import org.openapis.openapi.models.operations.DetachObjectRequestBodyParentReference;
import org.openapis.openapi.models.operations.DetachObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetachObjectRequest req = new DetachObjectRequest(                new DetachObjectRequestBody("asperiores",                 new DetachObjectRequestBodyParentReference() {{
                                                selector = "eum";
                                            }};);, "deserunt") {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "nemo";
                xAmzCredential = "molestias";
                xAmzDate = "architecto";
                xAmzSecurityToken = "expedita";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "praesentium";
            }};            

            DetachObjectResponse res = sdk.sdk.detachObject(req);

            if (res.detachObjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detachPolicy

Detaches a policy from an object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetachPolicyRequest;
import org.openapis.openapi.models.operations.DetachPolicyRequestBody;
import org.openapis.openapi.models.operations.DetachPolicyRequestBodyObjectReference;
import org.openapis.openapi.models.operations.DetachPolicyRequestBodyPolicyReference;
import org.openapis.openapi.models.operations.DetachPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facilis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetachPolicyRequest req = new DetachPolicyRequest(                new DetachPolicyRequestBody(                new DetachPolicyRequestBodyObjectReference() {{
                                                selector = "assumenda";
                                            }};,                 new DetachPolicyRequestBodyPolicyReference() {{
                                                selector = "repudiandae";
                                            }};);, "maiores") {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "vitae";
                xAmzDate = "fugit";
                xAmzSecurityToken = "nam";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "neque";
            }};            

            DetachPolicyResponse res = sdk.sdk.detachPolicy(req);

            if (res.detachPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## detachTypedLink

Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DetachTypedLinkRequest;
import org.openapis.openapi.models.operations.DetachTypedLinkRequestBody;
import org.openapis.openapi.models.operations.DetachTypedLinkRequestBodyTypedLinkSpecifier;
import org.openapis.openapi.models.operations.DetachTypedLinkResponse;
import org.openapis.openapi.models.shared.AttributeNameAndValue;
import org.openapis.openapi.models.shared.ObjectReference;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypedAttributeValue;
import org.openapis.openapi.models.shared.TypedLinkSchemaAndFacetName;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetachTypedLinkRequest req = new DetachTypedLinkRequest(                new DetachTypedLinkRequestBody(                new DetachTypedLinkRequestBodyTypedLinkSpecifier() {{
                                                identityAttributeValues = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                    add(new AttributeNameAndValue("quaerat",                 new TypedAttributeValue() {{
                                                                        binaryValue = "aperiam";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-07-15T16:16:56.846Z");
                                                                        numberValue = "modi";
                                                                        stringValue = "fuga";
                                                                    }};) {{
                                                        attributeName = "alias";
                                                        value = new TypedAttributeValue() {{
                                                            binaryValue = "ad";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2020-07-20T13:50:06.704Z");
                                                            numberValue = "id";
                                                            stringValue = "atque";
                                                        }};
                                                    }}),
                                                }};
                                                sourceObjectReference = new ObjectReference() {{
                                                    selector = "iure";
                                                }};;
                                                targetObjectReference = new ObjectReference() {{
                                                    selector = "deleniti";
                                                }};;
                                                typedLinkFacet = new TypedLinkSchemaAndFacetName("officia", "sint");;
                                            }};);, "laborum") {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "ad";
                xAmzCredential = "illum";
                xAmzDate = "sit";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "expedita";
            }};            

            DetachTypedLinkResponse res = sdk.sdk.detachTypedLink(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## disableDirectory

Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DisableDirectoryRequest;
import org.openapis.openapi.models.operations.DisableDirectoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableDirectoryRequest req = new DisableDirectoryRequest("maiores") {{
                xAmzAlgorithm = "ea";
                xAmzContentSha256 = "vel";
                xAmzCredential = "delectus";
                xAmzDate = "accusamus";
                xAmzSecurityToken = "reiciendis";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "sed";
            }};            

            DisableDirectoryResponse res = sdk.sdk.disableDirectory(req);

            if (res.disableDirectoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## enableDirectory

Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EnableDirectoryRequest;
import org.openapis.openapi.models.operations.EnableDirectoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableDirectoryRequest req = new EnableDirectoryRequest("voluptates") {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "quaerat";
                xAmzDate = "numquam";
                xAmzSecurityToken = "non";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "incidunt";
            }};            

            EnableDirectoryResponse res = sdk.sdk.enableDirectory(req);

            if (res.enableDirectoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAppliedSchemaVersion

Returns current applied schema version ARN, including the minor version in use.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppliedSchemaVersionRequest;
import org.openapis.openapi.models.operations.GetAppliedSchemaVersionRequestBody;
import org.openapis.openapi.models.operations.GetAppliedSchemaVersionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAppliedSchemaVersionRequest req = new GetAppliedSchemaVersionRequest(                new GetAppliedSchemaVersionRequestBody("enim");) {{
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "libero";
                xAmzCredential = "omnis";
                xAmzDate = "excepturi";
                xAmzSecurityToken = "eos";
                xAmzSignature = "quisquam";
                xAmzSignedHeaders = "corrupti";
            }};            

            GetAppliedSchemaVersionResponse res = sdk.sdk.getAppliedSchemaVersion(req);

            if (res.getAppliedSchemaVersionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDirectory

Retrieves metadata about a directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDirectoryRequest;
import org.openapis.openapi.models.operations.GetDirectoryResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDirectoryRequest req = new GetDirectoryRequest("cum") {{
                xAmzAlgorithm = "quibusdam";
                xAmzContentSha256 = "est";
                xAmzCredential = "commodi";
                xAmzDate = "similique";
                xAmzSecurityToken = "autem";
                xAmzSignature = "dicta";
                xAmzSignedHeaders = "recusandae";
            }};            

            GetDirectoryResponse res = sdk.sdk.getDirectory(req);

            if (res.getDirectoryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getFacet

Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema facets -- published, development, or applied.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFacetRequest;
import org.openapis.openapi.models.operations.GetFacetRequestBody;
import org.openapis.openapi.models.operations.GetFacetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFacetRequest req = new GetFacetRequest(                new GetFacetRequestBody("id");, "odit") {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "iste";
                xAmzCredential = "atque";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "atque";
                xAmzSignedHeaders = "doloribus";
            }};            

            GetFacetResponse res = sdk.sdk.getFacet(req);

            if (res.getFacetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLinkAttributes

Retrieves attributes that are associated with a typed link.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLinkAttributesRequest;
import org.openapis.openapi.models.operations.GetLinkAttributesRequestBody;
import org.openapis.openapi.models.operations.GetLinkAttributesRequestBodyConsistencyLevelEnum;
import org.openapis.openapi.models.operations.GetLinkAttributesRequestBodyTypedLinkSpecifier;
import org.openapis.openapi.models.operations.GetLinkAttributesResponse;
import org.openapis.openapi.models.shared.AttributeNameAndValue;
import org.openapis.openapi.models.shared.ObjectReference;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypedAttributeValue;
import org.openapis.openapi.models.shared.TypedLinkSchemaAndFacetName;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLinkAttributesRequest req = new GetLinkAttributesRequest(                new GetLinkAttributesRequestBody(                new String[]{{
                                                add("similique"),
                                            }},                 new GetLinkAttributesRequestBodyTypedLinkSpecifier() {{
                                                identityAttributeValues = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                    add(new AttributeNameAndValue("quam",                 new TypedAttributeValue() {{
                                                                        binaryValue = "nulla";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-01-31T18:52:52.080Z");
                                                                        numberValue = "a";
                                                                        stringValue = "perferendis";
                                                                    }};) {{
                                                        attributeName = "eveniet";
                                                        value = new TypedAttributeValue() {{
                                                            binaryValue = "nam";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-06-04T02:21:11.312Z");
                                                            numberValue = "voluptate";
                                                            stringValue = "voluptatibus";
                                                        }};
                                                    }}),
                                                    add(new AttributeNameAndValue("laboriosam",                 new TypedAttributeValue() {{
                                                                        binaryValue = "culpa";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-06-18T07:26:14.155Z");
                                                                        numberValue = "ratione";
                                                                        stringValue = "vitae";
                                                                    }};) {{
                                                        attributeName = "quaerat";
                                                        value = new TypedAttributeValue() {{
                                                            binaryValue = "excepturi";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-09-15T10:51:49.205Z");
                                                            numberValue = "voluptatem";
                                                            stringValue = "illum";
                                                        }};
                                                    }}),
                                                    add(new AttributeNameAndValue("ad",                 new TypedAttributeValue() {{
                                                                        binaryValue = "cupiditate";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-01-12T21:34:14.646Z");
                                                                        numberValue = "repellendus";
                                                                        stringValue = "delectus";
                                                                    }};) {{
                                                        attributeName = "quisquam";
                                                        value = new TypedAttributeValue() {{
                                                            binaryValue = "atque";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-05-15T08:31:10.596Z");
                                                            numberValue = "temporibus";
                                                            stringValue = "a";
                                                        }};
                                                    }}),
                                                }};
                                                sourceObjectReference = new ObjectReference() {{
                                                    selector = "ab";
                                                }};;
                                                targetObjectReference = new ObjectReference() {{
                                                    selector = "mollitia";
                                                }};;
                                                typedLinkFacet = new TypedLinkSchemaAndFacetName("possimus", "praesentium");;
                                            }};) {{
                                consistencyLevel = GetLinkAttributesRequestBodyConsistencyLevelEnum.SERIALIZABLE;
                            }};, "quam") {{
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "voluptatum";
                xAmzDate = "voluptatem";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "vitae";
                xAmzSignedHeaders = "cumque";
            }};            

            GetLinkAttributesResponse res = sdk.sdk.getLinkAttributes(req);

            if (res.getLinkAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getObjectAttributes

Retrieves attributes within a facet that are associated with an object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetObjectAttributesRequest;
import org.openapis.openapi.models.operations.GetObjectAttributesRequestBody;
import org.openapis.openapi.models.operations.GetObjectAttributesRequestBodyObjectReference;
import org.openapis.openapi.models.operations.GetObjectAttributesRequestBodySchemaFacet;
import org.openapis.openapi.models.operations.GetObjectAttributesResponse;
import org.openapis.openapi.models.operations.GetObjectAttributesXAmzConsistencyLevelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetObjectAttributesRequest req = new GetObjectAttributesRequest(                new GetObjectAttributesRequestBody(                new String[]{{
                                                add("eligendi"),
                                                add("occaecati"),
                                                add("quis"),
                                            }},                 new GetObjectAttributesRequestBodyObjectReference() {{
                                                selector = "tempore";
                                            }};,                 new GetObjectAttributesRequestBodySchemaFacet() {{
                                                facetName = "officia";
                                                schemaArn = "iste";
                                            }};);, "unde") {{
                xAmzAlgorithm = "quas";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "ducimus";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "dolor";
                xAmzConsistencyLevel = GetObjectAttributesXAmzConsistencyLevelEnum.EVENTUAL;
            }};            

            GetObjectAttributesResponse res = sdk.sdk.getObjectAttributes(req);

            if (res.getObjectAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getObjectInformation

Retrieves metadata about an object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetObjectInformationRequest;
import org.openapis.openapi.models.operations.GetObjectInformationRequestBody;
import org.openapis.openapi.models.operations.GetObjectInformationRequestBodyObjectReference;
import org.openapis.openapi.models.operations.GetObjectInformationResponse;
import org.openapis.openapi.models.operations.GetObjectInformationXAmzConsistencyLevelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetObjectInformationRequest req = new GetObjectInformationRequest(                new GetObjectInformationRequestBody(                new GetObjectInformationRequestBodyObjectReference() {{
                                                selector = "sint";
                                            }};);, "autem") {{
                xAmzAlgorithm = "iste";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "ab";
                xAmzDate = "fuga";
                xAmzSecurityToken = "a";
                xAmzSignature = "dolor";
                xAmzSignedHeaders = "voluptatum";
                xAmzConsistencyLevel = GetObjectInformationXAmzConsistencyLevelEnum.EVENTUAL;
            }};            

            GetObjectInformationResponse res = sdk.sdk.getObjectInformation(req);

            if (res.getObjectInformationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSchemaAsJson

Retrieves a JSON representation of the schema. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSchemaAsJsonRequest;
import org.openapis.openapi.models.operations.GetSchemaAsJsonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchemaAsJsonRequest req = new GetSchemaAsJsonRequest("repudiandae") {{
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "consectetur";
                xAmzCredential = "autem";
                xAmzDate = "vitae";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "incidunt";
                xAmzSignedHeaders = "modi";
            }};            

            GetSchemaAsJsonResponse res = sdk.sdk.getSchemaAsJson(req);

            if (res.getSchemaAsJsonResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTypedLinkFacetInformation

Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTypedLinkFacetInformationRequest;
import org.openapis.openapi.models.operations.GetTypedLinkFacetInformationRequestBody;
import org.openapis.openapi.models.operations.GetTypedLinkFacetInformationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTypedLinkFacetInformationRequest req = new GetTypedLinkFacetInformationRequest(                new GetTypedLinkFacetInformationRequestBody("minus");, "voluptate") {{
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "reprehenderit";
                xAmzCredential = "reprehenderit";
                xAmzDate = "animi";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "voluptates";
                xAmzSignedHeaders = "delectus";
            }};            

            GetTypedLinkFacetInformationResponse res = sdk.sdk.getTypedLinkFacetInformation(req);

            if (res.getTypedLinkFacetInformationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAppliedSchemaArns

Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAppliedSchemaArnsRequest;
import org.openapis.openapi.models.operations.ListAppliedSchemaArnsRequestBody;
import org.openapis.openapi.models.operations.ListAppliedSchemaArnsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAppliedSchemaArnsRequest req = new ListAppliedSchemaArnsRequest(                new ListAppliedSchemaArnsRequestBody("delectus") {{
                                maxResults = 348573L;
                                nextToken = "ipsum";
                                schemaArn = "laboriosam";
                            }};) {{
                maxResults = "doloremque";
                nextToken = "sed";
                xAmzAlgorithm = "voluptatum";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "a";
                xAmzDate = "itaque";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "cupiditate";
            }};            

            ListAppliedSchemaArnsResponse res = sdk.sdk.listAppliedSchemaArns(req);

            if (res.listAppliedSchemaArnsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAttachedIndices

Lists indices attached to the specified object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAttachedIndicesRequest;
import org.openapis.openapi.models.operations.ListAttachedIndicesRequestBody;
import org.openapis.openapi.models.operations.ListAttachedIndicesRequestBodyTargetReference;
import org.openapis.openapi.models.operations.ListAttachedIndicesResponse;
import org.openapis.openapi.models.operations.ListAttachedIndicesXAmzConsistencyLevelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAttachedIndicesRequest req = new ListAttachedIndicesRequest(                new ListAttachedIndicesRequestBody(                new ListAttachedIndicesRequestBodyTargetReference() {{
                                                selector = "aliquam";
                                            }};) {{
                                maxResults = 71751L;
                                nextToken = "veniam";
                            }};, "sed") {{
                maxResults = "necessitatibus";
                nextToken = "possimus";
                xAmzAlgorithm = "dignissimos";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "explicabo";
                xAmzDate = "ullam";
                xAmzSecurityToken = "non";
                xAmzSignature = "delectus";
                xAmzSignedHeaders = "incidunt";
                xAmzConsistencyLevel = ListAttachedIndicesXAmzConsistencyLevelEnum.EVENTUAL;
            }};            

            ListAttachedIndicesResponse res = sdk.sdk.listAttachedIndices(req);

            if (res.listAttachedIndicesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDevelopmentSchemaArns

Retrieves each Amazon Resource Name (ARN) of schemas in the development state.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDevelopmentSchemaArnsRequest;
import org.openapis.openapi.models.operations.ListDevelopmentSchemaArnsRequestBody;
import org.openapis.openapi.models.operations.ListDevelopmentSchemaArnsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDevelopmentSchemaArnsRequest req = new ListDevelopmentSchemaArnsRequest(                new ListDevelopmentSchemaArnsRequestBody() {{
                                maxResults = 353493L;
                                nextToken = "quam";
                            }};) {{
                maxResults = "illum";
                nextToken = "voluptates";
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "est";
                xAmzCredential = "in";
                xAmzDate = "illo";
                xAmzSecurityToken = "voluptate";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "delectus";
            }};            

            ListDevelopmentSchemaArnsResponse res = sdk.sdk.listDevelopmentSchemaArns(req);

            if (res.listDevelopmentSchemaArnsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDirectories

Lists directories created within an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDirectoriesRequest;
import org.openapis.openapi.models.operations.ListDirectoriesRequestBody;
import org.openapis.openapi.models.operations.ListDirectoriesRequestBodyStateEnum;
import org.openapis.openapi.models.operations.ListDirectoriesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDirectoriesRequest req = new ListDirectoriesRequest(                new ListDirectoriesRequestBody() {{
                                maxResults = 293023L;
                                nextToken = "nemo";
                                state = ListDirectoriesRequestBodyStateEnum.DELETED;
                            }};) {{
                maxResults = "quo";
                nextToken = "maxime";
                xAmzAlgorithm = "delectus";
                xAmzContentSha256 = "laboriosam";
                xAmzCredential = "laboriosam";
                xAmzDate = "quam";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "officia";
                xAmzSignedHeaders = "repellat";
            }};            

            ListDirectoriesResponse res = sdk.sdk.listDirectories(req);

            if (res.listDirectoriesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFacetAttributes

Retrieves attributes attached to the facet.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFacetAttributesRequest;
import org.openapis.openapi.models.operations.ListFacetAttributesRequestBody;
import org.openapis.openapi.models.operations.ListFacetAttributesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFacetAttributesRequest req = new ListFacetAttributesRequest(                new ListFacetAttributesRequestBody("soluta") {{
                                maxResults = 733226L;
                                nextToken = "culpa";
                            }};, "fugiat") {{
                maxResults = "inventore";
                nextToken = "atque";
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "sapiente";
                xAmzCredential = "voluptates";
                xAmzDate = "ut";
                xAmzSecurityToken = "nesciunt";
                xAmzSignature = "ab";
                xAmzSignedHeaders = "quibusdam";
            }};            

            ListFacetAttributesResponse res = sdk.sdk.listFacetAttributes(req);

            if (res.listFacetAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listFacetNames

Retrieves the names of facets that exist in a schema.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListFacetNamesRequest;
import org.openapis.openapi.models.operations.ListFacetNamesRequestBody;
import org.openapis.openapi.models.operations.ListFacetNamesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("suscipit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFacetNamesRequest req = new ListFacetNamesRequest(                new ListFacetNamesRequestBody() {{
                                maxResults = 696324L;
                                nextToken = "delectus";
                            }};, "nemo") {{
                maxResults = "cumque";
                nextToken = "voluptatum";
                xAmzAlgorithm = "sequi";
                xAmzContentSha256 = "atque";
                xAmzCredential = "maiores";
                xAmzDate = "expedita";
                xAmzSecurityToken = "rerum";
                xAmzSignature = "totam";
                xAmzSignedHeaders = "quod";
            }};            

            ListFacetNamesResponse res = sdk.sdk.listFacetNames(req);

            if (res.listFacetNamesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIncomingTypedLinks

Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIncomingTypedLinksRequest;
import org.openapis.openapi.models.operations.ListIncomingTypedLinksRequestBody;
import org.openapis.openapi.models.operations.ListIncomingTypedLinksRequestBodyConsistencyLevelEnum;
import org.openapis.openapi.models.operations.ListIncomingTypedLinksRequestBodyFilterTypedLink;
import org.openapis.openapi.models.operations.ListIncomingTypedLinksRequestBodyObjectReference;
import org.openapis.openapi.models.operations.ListIncomingTypedLinksResponse;
import org.openapis.openapi.models.shared.RangeModeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypedAttributeValue;
import org.openapis.openapi.models.shared.TypedAttributeValueRange;
import org.openapis.openapi.models.shared.TypedLinkAttributeRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIncomingTypedLinksRequest req = new ListIncomingTypedLinksRequest(                new ListIncomingTypedLinksRequestBody(                new ListIncomingTypedLinksRequestBodyObjectReference() {{
                                                selector = "eaque";
                                            }};) {{
                                consistencyLevel = ListIncomingTypedLinksRequestBodyConsistencyLevelEnum.EVENTUAL;
                                filterAttributeRanges = new org.openapis.openapi.models.shared.TypedLinkAttributeRange[]{{
                                    add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.LAST, RangeModeEnum.LAST) {{
                                                        endValue = new TypedAttributeValue() {{
                                                            binaryValue = "porro";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2021-01-22T09:17:38.552Z");
                                                            numberValue = "voluptate";
                                                            stringValue = "tempore";
                                                        }};;
                                                        startValue = new TypedAttributeValue() {{
                                                            binaryValue = "in";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2021-05-11T20:44:08.506Z");
                                                            numberValue = "tenetur";
                                                            stringValue = "recusandae";
                                                        }};;
                                                    }};) {{
                                        attributeName = "ex";
                                        range = new TypedAttributeValueRange(RangeModeEnum.LAST, RangeModeEnum.FIRST) {{
                                            endMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "delectus";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-02-24T13:15:27.697Z");
                                                numberValue = "distinctio";
                                                stringValue = "eius";
                                            }};
                                            startMode = RangeModeEnum.FIRST;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "veniam";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2021-04-14T07:30:31.624Z");
                                                numberValue = "occaecati";
                                                stringValue = "debitis";
                                            }};
                                        }};
                                    }}),
                                    add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.EXCLUSIVE, RangeModeEnum.LAST) {{
                                                        endValue = new TypedAttributeValue() {{
                                                            binaryValue = "eaque";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-02-02T19:14:56.667Z");
                                                            numberValue = "delectus";
                                                            stringValue = "deleniti";
                                                        }};;
                                                        startValue = new TypedAttributeValue() {{
                                                            binaryValue = "provident";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-04-27T18:27:57.430Z");
                                                            numberValue = "nostrum";
                                                            stringValue = "tempora";
                                                        }};;
                                                    }};) {{
                                        attributeName = "expedita";
                                        range = new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.FIRST) {{
                                            endMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "esse";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-05-11T04:37:28.493Z");
                                                numberValue = "quod";
                                                stringValue = "ratione";
                                            }};
                                            startMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "vero";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-04-12T03:29:25.285Z");
                                                numberValue = "officia";
                                                stringValue = "maiores";
                                            }};
                                        }};
                                    }}),
                                    add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.EXCLUSIVE) {{
                                                        endValue = new TypedAttributeValue() {{
                                                            binaryValue = "numquam";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2021-06-26T22:55:06.822Z");
                                                            numberValue = "autem";
                                                            stringValue = "adipisci";
                                                        }};;
                                                        startValue = new TypedAttributeValue() {{
                                                            binaryValue = "sunt";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2021-11-03T10:03:07.115Z");
                                                            numberValue = "provident";
                                                            stringValue = "necessitatibus";
                                                        }};;
                                                    }};) {{
                                        attributeName = "nam";
                                        range = new TypedAttributeValueRange(RangeModeEnum.LAST, RangeModeEnum.INCLUSIVE) {{
                                            endMode = RangeModeEnum.LAST;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "odio";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-01-08T05:48:24.485Z");
                                                numberValue = "veritatis";
                                                stringValue = "autem";
                                            }};
                                            startMode = RangeModeEnum.EXCLUSIVE;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "minima";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-03-07T02:09:13.671Z");
                                                numberValue = "nesciunt";
                                                stringValue = "corrupti";
                                            }};
                                        }};
                                    }}),
                                }};
                                filterTypedLink = new ListIncomingTypedLinksRequestBodyFilterTypedLink() {{
                                    schemaArn = "fugit";
                                    typedLinkName = "autem";
                                }};;
                                maxResults = 763709L;
                                nextToken = "eveniet";
                            }};, "fugiat") {{
                xAmzAlgorithm = "blanditiis";
                xAmzContentSha256 = "a";
                xAmzCredential = "natus";
                xAmzDate = "sapiente";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "facilis";
                xAmzSignedHeaders = "molestias";
            }};            

            ListIncomingTypedLinksResponse res = sdk.sdk.listIncomingTypedLinks(req);

            if (res.listIncomingTypedLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listIndex

Lists objects attached to the specified index.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListIndexRequest;
import org.openapis.openapi.models.operations.ListIndexRequestBody;
import org.openapis.openapi.models.operations.ListIndexRequestBodyIndexReference;
import org.openapis.openapi.models.operations.ListIndexResponse;
import org.openapis.openapi.models.operations.ListIndexXAmzConsistencyLevelEnum;
import org.openapis.openapi.models.shared.AttributeKey;
import org.openapis.openapi.models.shared.ObjectAttributeRange;
import org.openapis.openapi.models.shared.RangeModeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypedAttributeValue;
import org.openapis.openapi.models.shared.TypedAttributeValueRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIndexRequest req = new ListIndexRequest(                new ListIndexRequestBody(                new ListIndexRequestBodyIndexReference() {{
                                                selector = "et";
                                            }};) {{
                                maxResults = 37911L;
                                nextToken = "maiores";
                                rangesOnIndexedValues = new org.openapis.openapi.models.shared.ObjectAttributeRange[]{{
                                    add(new ObjectAttributeRange() {{
                                        attributeKey = new AttributeKey("velit", "molestiae", "nam") {{
                                            facetName = "velit";
                                            name = "Rudolph Weimann IV";
                                            schemaArn = "atque";
                                        }};
                                        range = new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.LAST_BEFORE_MISSING_VALUES) {{
                                            endMode = RangeModeEnum.FIRST;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "vitae";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2021-01-07T23:15:28.817Z");
                                                numberValue = "at";
                                                stringValue = "quibusdam";
                                            }};
                                            startMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "deleniti";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-02-25T01:49:55.199Z");
                                                numberValue = "eos";
                                                stringValue = "labore";
                                            }};
                                        }};
                                    }}),
                                    add(new ObjectAttributeRange() {{
                                        attributeKey = new AttributeKey("consectetur", "sapiente", "quis") {{
                                            facetName = "iste";
                                            name = "Rudy Gorczany";
                                            schemaArn = "ducimus";
                                        }};
                                        range = new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.EXCLUSIVE) {{
                                            endMode = RangeModeEnum.FIRST;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "ratione";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-01-04T10:52:35.870Z");
                                                numberValue = "architecto";
                                                stringValue = "sint";
                                            }};
                                            startMode = RangeModeEnum.EXCLUSIVE;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "tempore";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-09-15T09:59:31.091Z");
                                                numberValue = "consequuntur";
                                                stringValue = "nemo";
                                            }};
                                        }};
                                    }}),
                                }};
                            }};, "labore") {{
                maxResults = "veritatis";
                nextToken = "minima";
                xAmzAlgorithm = "magni";
                xAmzContentSha256 = "itaque";
                xAmzCredential = "error";
                xAmzDate = "expedita";
                xAmzSecurityToken = "error";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "temporibus";
                xAmzConsistencyLevel = ListIndexXAmzConsistencyLevelEnum.SERIALIZABLE;
            }};            

            ListIndexResponse res = sdk.sdk.listIndex(req);

            if (res.listIndexResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listManagedSchemaArns

Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListManagedSchemaArnsRequest;
import org.openapis.openapi.models.operations.ListManagedSchemaArnsRequestBody;
import org.openapis.openapi.models.operations.ListManagedSchemaArnsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListManagedSchemaArnsRequest req = new ListManagedSchemaArnsRequest(                new ListManagedSchemaArnsRequestBody() {{
                                maxResults = 327263L;
                                nextToken = "odit";
                                schemaArn = "odit";
                            }};) {{
                maxResults = "eius";
                nextToken = "error";
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "dolorum";
                xAmzCredential = "alias";
                xAmzDate = "itaque";
                xAmzSecurityToken = "ab";
                xAmzSignature = "sunt";
                xAmzSignedHeaders = "amet";
            }};            

            ListManagedSchemaArnsResponse res = sdk.sdk.listManagedSchemaArns(req);

            if (res.listManagedSchemaArnsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listObjectAttributes

Lists all attributes that are associated with an object. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListObjectAttributesRequest;
import org.openapis.openapi.models.operations.ListObjectAttributesRequestBody;
import org.openapis.openapi.models.operations.ListObjectAttributesRequestBodyFacetFilter;
import org.openapis.openapi.models.operations.ListObjectAttributesRequestBodyObjectReference;
import org.openapis.openapi.models.operations.ListObjectAttributesResponse;
import org.openapis.openapi.models.operations.ListObjectAttributesXAmzConsistencyLevelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("cum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListObjectAttributesRequest req = new ListObjectAttributesRequest(                new ListObjectAttributesRequestBody(                new ListObjectAttributesRequestBodyObjectReference() {{
                                                selector = "iusto";
                                            }};) {{
                                facetFilter = new ListObjectAttributesRequestBodyFacetFilter() {{
                                    facetName = "corrupti";
                                    schemaArn = "non";
                                }};;
                                maxResults = 457330L;
                                nextToken = "vero";
                            }};, "eligendi") {{
                maxResults = "minima";
                nextToken = "omnis";
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "architecto";
                xAmzCredential = "voluptatibus";
                xAmzDate = "autem";
                xAmzSecurityToken = "in";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "amet";
                xAmzConsistencyLevel = ListObjectAttributesXAmzConsistencyLevelEnum.EVENTUAL;
            }};            

            ListObjectAttributesResponse res = sdk.sdk.listObjectAttributes(req);

            if (res.listObjectAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listObjectChildren

Returns a paginated list of child objects that are associated with a given object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListObjectChildrenRequest;
import org.openapis.openapi.models.operations.ListObjectChildrenRequestBody;
import org.openapis.openapi.models.operations.ListObjectChildrenRequestBodyObjectReference;
import org.openapis.openapi.models.operations.ListObjectChildrenResponse;
import org.openapis.openapi.models.operations.ListObjectChildrenXAmzConsistencyLevelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListObjectChildrenRequest req = new ListObjectChildrenRequest(                new ListObjectChildrenRequestBody(                new ListObjectChildrenRequestBodyObjectReference() {{
                                                selector = "optio";
                                            }};) {{
                                maxResults = 776334L;
                                nextToken = "repudiandae";
                            }};, "tempora") {{
                maxResults = "libero";
                nextToken = "suscipit";
                xAmzAlgorithm = "illum";
                xAmzContentSha256 = "iusto";
                xAmzCredential = "aliquid";
                xAmzDate = "sint";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "repellat";
                xAmzSignedHeaders = "sapiente";
                xAmzConsistencyLevel = ListObjectChildrenXAmzConsistencyLevelEnum.SERIALIZABLE;
            }};            

            ListObjectChildrenResponse res = sdk.sdk.listObjectChildren(req);

            if (res.listObjectChildrenResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listObjectParentPaths

<p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListObjectParentPathsRequest;
import org.openapis.openapi.models.operations.ListObjectParentPathsRequestBody;
import org.openapis.openapi.models.operations.ListObjectParentPathsRequestBodyObjectReference;
import org.openapis.openapi.models.operations.ListObjectParentPathsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListObjectParentPathsRequest req = new ListObjectParentPathsRequest(                new ListObjectParentPathsRequestBody(                new ListObjectParentPathsRequestBodyObjectReference() {{
                                                selector = "ullam";
                                            }};) {{
                                maxResults = 471315L;
                                nextToken = "eius";
                            }};, "dignissimos") {{
                maxResults = "corporis";
                nextToken = "perferendis";
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "amet";
                xAmzCredential = "corporis";
                xAmzDate = "nihil";
                xAmzSecurityToken = "officiis";
                xAmzSignature = "dolore";
                xAmzSignedHeaders = "magnam";
            }};            

            ListObjectParentPathsResponse res = sdk.sdk.listObjectParentPaths(req);

            if (res.listObjectParentPathsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listObjectParents

Lists parent objects that are associated with a given object in pagination fashion.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListObjectParentsRequest;
import org.openapis.openapi.models.operations.ListObjectParentsRequestBody;
import org.openapis.openapi.models.operations.ListObjectParentsRequestBodyObjectReference;
import org.openapis.openapi.models.operations.ListObjectParentsResponse;
import org.openapis.openapi.models.operations.ListObjectParentsXAmzConsistencyLevelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListObjectParentsRequest req = new ListObjectParentsRequest(                new ListObjectParentsRequestBody(                new ListObjectParentsRequestBodyObjectReference() {{
                                                selector = "ipsam";
                                            }};) {{
                                includeAllLinksToEachParent = false;
                                maxResults = 115522L;
                                nextToken = "hic";
                            }};, "praesentium") {{
                maxResults = "libero";
                nextToken = "consequatur";
                xAmzAlgorithm = "totam";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "quo";
                xAmzDate = "dolor";
                xAmzSecurityToken = "sunt";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "quam";
                xAmzConsistencyLevel = ListObjectParentsXAmzConsistencyLevelEnum.EVENTUAL;
            }};            

            ListObjectParentsResponse res = sdk.sdk.listObjectParents(req);

            if (res.listObjectParentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listObjectPolicies

Returns policies attached to an object in pagination fashion.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListObjectPoliciesRequest;
import org.openapis.openapi.models.operations.ListObjectPoliciesRequestBody;
import org.openapis.openapi.models.operations.ListObjectPoliciesRequestBodyObjectReference;
import org.openapis.openapi.models.operations.ListObjectPoliciesResponse;
import org.openapis.openapi.models.operations.ListObjectPoliciesXAmzConsistencyLevelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListObjectPoliciesRequest req = new ListObjectPoliciesRequest(                new ListObjectPoliciesRequestBody(                new ListObjectPoliciesRequestBodyObjectReference() {{
                                                selector = "excepturi";
                                            }};) {{
                                maxResults = 233618L;
                                nextToken = "deserunt";
                            }};, "odit") {{
                maxResults = "incidunt";
                nextToken = "corporis";
                xAmzAlgorithm = "quaerat";
                xAmzContentSha256 = "suscipit";
                xAmzCredential = "ducimus";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "corrupti";
                xAmzConsistencyLevel = ListObjectPoliciesXAmzConsistencyLevelEnum.SERIALIZABLE;
            }};            

            ListObjectPoliciesResponse res = sdk.sdk.listObjectPolicies(req);

            if (res.listObjectPoliciesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOutgoingTypedLinks

Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOutgoingTypedLinksRequest;
import org.openapis.openapi.models.operations.ListOutgoingTypedLinksRequestBody;
import org.openapis.openapi.models.operations.ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum;
import org.openapis.openapi.models.operations.ListOutgoingTypedLinksRequestBodyFilterTypedLink;
import org.openapis.openapi.models.operations.ListOutgoingTypedLinksRequestBodyObjectReference;
import org.openapis.openapi.models.operations.ListOutgoingTypedLinksResponse;
import org.openapis.openapi.models.shared.RangeModeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypedAttributeValue;
import org.openapis.openapi.models.shared.TypedAttributeValueRange;
import org.openapis.openapi.models.shared.TypedLinkAttributeRange;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eius") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListOutgoingTypedLinksRequest req = new ListOutgoingTypedLinksRequest(                new ListOutgoingTypedLinksRequestBody(                new ListOutgoingTypedLinksRequestBodyObjectReference() {{
                                                selector = "placeat";
                                            }};) {{
                                consistencyLevel = ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum.SERIALIZABLE;
                                filterAttributeRanges = new org.openapis.openapi.models.shared.TypedLinkAttributeRange[]{{
                                    add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.EXCLUSIVE) {{
                                                        endValue = new TypedAttributeValue() {{
                                                            binaryValue = "officiis";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-03-03T17:14:19.847Z");
                                                            numberValue = "aut";
                                                            stringValue = "voluptatem";
                                                        }};;
                                                        startValue = new TypedAttributeValue() {{
                                                            binaryValue = "libero";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-01-11T15:07:25.289Z");
                                                            numberValue = "omnis";
                                                            stringValue = "officiis";
                                                        }};;
                                                    }};) {{
                                        attributeName = "ipsam";
                                        range = new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.EXCLUSIVE) {{
                                            endMode = RangeModeEnum.INCLUSIVE;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "porro";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-05-28T09:52:28.582Z");
                                                numberValue = "ducimus";
                                                stringValue = "qui";
                                            }};
                                            startMode = RangeModeEnum.FIRST;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "consectetur";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-02-04T23:16:33.857Z");
                                                numberValue = "iure";
                                                stringValue = "aliquid";
                                            }};
                                        }};
                                    }}),
                                    add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.FIRST) {{
                                                        endValue = new TypedAttributeValue() {{
                                                            binaryValue = "perspiciatis";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-09-27T06:51:12.468Z");
                                                            numberValue = "aperiam";
                                                            stringValue = "voluptatem";
                                                        }};;
                                                        startValue = new TypedAttributeValue() {{
                                                            binaryValue = "non";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-10-22T14:21:53.310Z");
                                                            numberValue = "rerum";
                                                            stringValue = "ipsum";
                                                        }};;
                                                    }};) {{
                                        attributeName = "delectus";
                                        range = new TypedAttributeValueRange(RangeModeEnum.EXCLUSIVE, RangeModeEnum.INCLUSIVE) {{
                                            endMode = RangeModeEnum.FIRST;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "sit";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-06-21T03:31:50.952Z");
                                                numberValue = "nihil";
                                                stringValue = "neque";
                                            }};
                                            startMode = RangeModeEnum.FIRST;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "eaque";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-05-31T13:36:01.431Z");
                                                numberValue = "aut";
                                                stringValue = "impedit";
                                            }};
                                        }};
                                    }}),
                                    add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.LAST_BEFORE_MISSING_VALUES) {{
                                                        endValue = new TypedAttributeValue() {{
                                                            binaryValue = "quam";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-12-25T23:11:07.179Z");
                                                            numberValue = "cumque";
                                                            stringValue = "placeat";
                                                        }};;
                                                        startValue = new TypedAttributeValue() {{
                                                            binaryValue = "adipisci";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-03-30T06:35:02.930Z");
                                                            numberValue = "accusantium";
                                                            stringValue = "corrupti";
                                                        }};;
                                                    }};) {{
                                        attributeName = "debitis";
                                        range = new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.LAST) {{
                                            endMode = RangeModeEnum.LAST;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "eaque";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-09-20T06:36:53.290Z");
                                                numberValue = "delectus";
                                                stringValue = "aliquid";
                                            }};
                                            startMode = RangeModeEnum.LAST;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "maiores";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2021-09-03T06:41:09.902Z");
                                                numberValue = "eos";
                                                stringValue = "assumenda";
                                            }};
                                        }};
                                    }}),
                                    add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.EXCLUSIVE, RangeModeEnum.FIRST) {{
                                                        endValue = new TypedAttributeValue() {{
                                                            binaryValue = "maiores";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-09-01T15:55:01.348Z");
                                                            numberValue = "fuga";
                                                            stringValue = "itaque";
                                                        }};;
                                                        startValue = new TypedAttributeValue() {{
                                                            binaryValue = "possimus";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-07-20T19:32:23.935Z");
                                                            numberValue = "deserunt";
                                                            stringValue = "eligendi";
                                                        }};;
                                                    }};) {{
                                        attributeName = "itaque";
                                        range = new TypedAttributeValueRange(RangeModeEnum.EXCLUSIVE, RangeModeEnum.INCLUSIVE) {{
                                            endMode = RangeModeEnum.EXCLUSIVE;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "impedit";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-08-23T00:22:20.586Z");
                                                numberValue = "impedit";
                                                stringValue = "eveniet";
                                            }};
                                            startMode = RangeModeEnum.INCLUSIVE;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "dolore";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2021-10-09T19:43:08.519Z");
                                                numberValue = "officiis";
                                                stringValue = "quasi";
                                            }};
                                        }};
                                    }}),
                                }};
                                filterTypedLink = new ListOutgoingTypedLinksRequestBodyFilterTypedLink() {{
                                    schemaArn = "id";
                                    typedLinkName = "distinctio";
                                }};;
                                maxResults = 358558L;
                                nextToken = "quas";
                            }};, "soluta") {{
                xAmzAlgorithm = "cupiditate";
                xAmzContentSha256 = "unde";
                xAmzCredential = "et";
                xAmzDate = "quisquam";
                xAmzSecurityToken = "unde";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "suscipit";
            }};            

            ListOutgoingTypedLinksResponse res = sdk.sdk.listOutgoingTypedLinks(req);

            if (res.listOutgoingTypedLinksResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPolicyAttachments

Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPolicyAttachmentsRequest;
import org.openapis.openapi.models.operations.ListPolicyAttachmentsRequestBody;
import org.openapis.openapi.models.operations.ListPolicyAttachmentsRequestBodyPolicyReference;
import org.openapis.openapi.models.operations.ListPolicyAttachmentsResponse;
import org.openapis.openapi.models.operations.ListPolicyAttachmentsXAmzConsistencyLevelEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("facere") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPolicyAttachmentsRequest req = new ListPolicyAttachmentsRequest(                new ListPolicyAttachmentsRequestBody(                new ListPolicyAttachmentsRequestBodyPolicyReference() {{
                                                selector = "pariatur";
                                            }};) {{
                                maxResults = 723382L;
                                nextToken = "quaerat";
                            }};, "corrupti") {{
                maxResults = "sint";
                nextToken = "eius";
                xAmzAlgorithm = "vel";
                xAmzContentSha256 = "quasi";
                xAmzCredential = "vero";
                xAmzDate = "odio";
                xAmzSecurityToken = "numquam";
                xAmzSignature = "fugit";
                xAmzSignedHeaders = "inventore";
                xAmzConsistencyLevel = ListPolicyAttachmentsXAmzConsistencyLevelEnum.EVENTUAL;
            }};            

            ListPolicyAttachmentsResponse res = sdk.sdk.listPolicyAttachments(req);

            if (res.listPolicyAttachmentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listPublishedSchemaArns

Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListPublishedSchemaArnsRequest;
import org.openapis.openapi.models.operations.ListPublishedSchemaArnsRequestBody;
import org.openapis.openapi.models.operations.ListPublishedSchemaArnsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nobis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPublishedSchemaArnsRequest req = new ListPublishedSchemaArnsRequest(                new ListPublishedSchemaArnsRequestBody() {{
                                maxResults = 924559L;
                                nextToken = "commodi";
                                schemaArn = "possimus";
                            }};) {{
                maxResults = "provident";
                nextToken = "veniam";
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "fugit";
                xAmzCredential = "a";
                xAmzDate = "consequatur";
                xAmzSecurityToken = "vero";
                xAmzSignature = "id";
                xAmzSignedHeaders = "error";
            }};            

            ListPublishedSchemaArnsResponse res = sdk.sdk.listPublishedSchemaArns(req);

            if (res.listPublishedSchemaArnsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceRequestBody;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ratione") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequestBody("perferendis") {{
                                maxResults = 716555L;
                                nextToken = "voluptas";
                            }};) {{
                maxResults = "sint";
                nextToken = "maiores";
                xAmzAlgorithm = "nihil";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "cumque";
                xAmzDate = "consequuntur";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "esse";
                xAmzSignedHeaders = "explicabo";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTypedLinkFacetAttributes

Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTypedLinkFacetAttributesRequest;
import org.openapis.openapi.models.operations.ListTypedLinkFacetAttributesRequestBody;
import org.openapis.openapi.models.operations.ListTypedLinkFacetAttributesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTypedLinkFacetAttributesRequest req = new ListTypedLinkFacetAttributesRequest(                new ListTypedLinkFacetAttributesRequestBody("quos") {{
                                maxResults = 534708L;
                                nextToken = "enim";
                            }};, "sit") {{
                maxResults = "voluptatem";
                nextToken = "natus";
                xAmzAlgorithm = "voluptatem";
                xAmzContentSha256 = "tempora";
                xAmzCredential = "occaecati";
                xAmzDate = "quasi";
                xAmzSecurityToken = "veritatis";
                xAmzSignature = "ex";
                xAmzSignedHeaders = "doloremque";
            }};            

            ListTypedLinkFacetAttributesResponse res = sdk.sdk.listTypedLinkFacetAttributes(req);

            if (res.listTypedLinkFacetAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTypedLinkFacetNames

Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTypedLinkFacetNamesRequest;
import org.openapis.openapi.models.operations.ListTypedLinkFacetNamesRequestBody;
import org.openapis.openapi.models.operations.ListTypedLinkFacetNamesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTypedLinkFacetNamesRequest req = new ListTypedLinkFacetNamesRequest(                new ListTypedLinkFacetNamesRequestBody() {{
                                maxResults = 172878L;
                                nextToken = "perferendis";
                            }};, "esse") {{
                maxResults = "quas";
                nextToken = "blanditiis";
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "minus";
                xAmzDate = "autem";
                xAmzSecurityToken = "vel";
                xAmzSignature = "beatae";
                xAmzSignedHeaders = "quos";
            }};            

            ListTypedLinkFacetNamesResponse res = sdk.sdk.listTypedLinkFacetNames(req);

            if (res.listTypedLinkFacetNamesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## lookupPolicy

Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LookupPolicyRequest;
import org.openapis.openapi.models.operations.LookupPolicyRequestBody;
import org.openapis.openapi.models.operations.LookupPolicyRequestBodyObjectReference;
import org.openapis.openapi.models.operations.LookupPolicyResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            LookupPolicyRequest req = new LookupPolicyRequest(                new LookupPolicyRequestBody(                new LookupPolicyRequestBodyObjectReference() {{
                                                selector = "soluta";
                                            }};) {{
                                maxResults = 945409L;
                                nextToken = "necessitatibus";
                            }};, "perspiciatis") {{
                maxResults = "suscipit";
                nextToken = "ullam";
                xAmzAlgorithm = "unde";
                xAmzContentSha256 = "debitis";
                xAmzCredential = "quidem";
                xAmzDate = "magnam";
                xAmzSecurityToken = "doloremque";
                xAmzSignature = "accusamus";
                xAmzSignedHeaders = "quod";
            }};            

            LookupPolicyResponse res = sdk.sdk.lookupPolicy(req);

            if (res.lookupPolicyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## publishSchema

Publishes a development schema with a major version and a recommended minor version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PublishSchemaRequest;
import org.openapis.openapi.models.operations.PublishSchemaRequestBody;
import org.openapis.openapi.models.operations.PublishSchemaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PublishSchemaRequest req = new PublishSchemaRequest(                new PublishSchemaRequestBody("voluptas") {{
                                minorVersion = "earum";
                                name = "Darin Kozey";
                            }};, "perferendis") {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "ullam";
                xAmzCredential = "ratione";
                xAmzDate = "eos";
                xAmzSecurityToken = "id";
                xAmzSignature = "modi";
                xAmzSignedHeaders = "illum";
            }};            

            PublishSchemaResponse res = sdk.sdk.publishSchema(req);

            if (res.publishSchemaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putSchemaFromJson

Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutSchemaFromJsonRequest;
import org.openapis.openapi.models.operations.PutSchemaFromJsonRequestBody;
import org.openapis.openapi.models.operations.PutSchemaFromJsonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutSchemaFromJsonRequest req = new PutSchemaFromJsonRequest(                new PutSchemaFromJsonRequestBody("consectetur");, "reprehenderit") {{
                xAmzAlgorithm = "eligendi";
                xAmzContentSha256 = "cum";
                xAmzCredential = "culpa";
                xAmzDate = "culpa";
                xAmzSecurityToken = "a";
                xAmzSignature = "magnam";
                xAmzSignedHeaders = "eius";
            }};            

            PutSchemaFromJsonResponse res = sdk.sdk.putSchemaFromJson(req);

            if (res.putSchemaFromJsonResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeFacetFromObject

Removes the specified facet from the specified object.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveFacetFromObjectRequest;
import org.openapis.openapi.models.operations.RemoveFacetFromObjectRequestBody;
import org.openapis.openapi.models.operations.RemoveFacetFromObjectRequestBodyObjectReference;
import org.openapis.openapi.models.operations.RemoveFacetFromObjectRequestBodySchemaFacet;
import org.openapis.openapi.models.operations.RemoveFacetFromObjectResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ad") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveFacetFromObjectRequest req = new RemoveFacetFromObjectRequest(                new RemoveFacetFromObjectRequestBody(                new RemoveFacetFromObjectRequestBodyObjectReference() {{
                                                selector = "quia";
                                            }};,                 new RemoveFacetFromObjectRequestBodySchemaFacet() {{
                                                facetName = "quod";
                                                schemaArn = "quaerat";
                                            }};);, "voluptatum") {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "eligendi";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "odit";
                xAmzSignedHeaders = "est";
            }};            

            RemoveFacetFromObjectResponse res = sdk.sdk.removeFacetFromObject(req);

            if (res.removeFacetFromObjectResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

An API operation for adding tags to a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Tag;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("at") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody("ipsum",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "nulla";
                                                    value = "est";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "voluptatum";
                xAmzDate = "quasi";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "voluptatum";
                xAmzSignedHeaders = "blanditiis";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

An API operation for removing tags from a resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceRequestBody;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequestBody("ut",                 new String[]{{
                                                add("labore"),
                                                add("ut"),
                                            }});) {{
                xAmzAlgorithm = "enim";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "ratione";
                xAmzDate = "tenetur";
                xAmzSecurityToken = "saepe";
                xAmzSignature = "quod";
                xAmzSignedHeaders = "nulla";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateFacet

<p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateFacetRequest;
import org.openapis.openapi.models.operations.UpdateFacetRequestBody;
import org.openapis.openapi.models.operations.UpdateFacetRequestBodyObjectTypeEnum;
import org.openapis.openapi.models.operations.UpdateFacetResponse;
import org.openapis.openapi.models.shared.FacetAttribute;
import org.openapis.openapi.models.shared.FacetAttributeDefinition;
import org.openapis.openapi.models.shared.FacetAttributeReference;
import org.openapis.openapi.models.shared.FacetAttributeTypeEnum;
import org.openapis.openapi.models.shared.FacetAttributeUpdate;
import org.openapis.openapi.models.shared.RequiredAttributeBehaviorEnum;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypedAttributeValue;
import org.openapis.openapi.models.shared.UpdateActionTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFacetRequest req = new UpdateFacetRequest(                new UpdateFacetRequestBody("quam") {{
                                attributeUpdates = new org.openapis.openapi.models.shared.FacetAttributeUpdate[]{{
                                    add(new FacetAttributeUpdate() {{
                                        action = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                        attribute = new FacetAttribute("praesentium") {{
                                            attributeDefinition = new FacetAttributeDefinition(FacetAttributeTypeEnum.BINARY) {{
                                                defaultValue = new TypedAttributeValue() {{
                                                    binaryValue = "nesciunt";
                                                    booleanValue = false;
                                                    datetimeValue = OffsetDateTime.parse("2021-09-17T10:48:49.409Z");
                                                    numberValue = "dolor";
                                                    stringValue = "placeat";
                                                }};
                                                isImmutable = false;
                                                rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                    put("sed", new Rule() {{
                                                        parameters = new java.util.HashMap<String, String>() {{
                                                            put("natus", "ratione");
                                                        }};
                                                        type = RuleTypeEnum.NUMBER_COMPARISON;
                                                    }});
                                                    put("unde", new Rule() {{
                                                        parameters = new java.util.HashMap<String, String>() {{
                                                            put("id", "ex");
                                                            put("occaecati", "optio");
                                                            put("at", "ad");
                                                        }};
                                                        type = RuleTypeEnum.STRING_LENGTH;
                                                    }});
                                                    put("nam", new Rule() {{
                                                        parameters = new java.util.HashMap<String, String>() {{
                                                            put("sapiente", "quam");
                                                            put("occaecati", "repellendus");
                                                            put("culpa", "dicta");
                                                            put("rem", "fuga");
                                                        }};
                                                        type = RuleTypeEnum.NUMBER_COMPARISON;
                                                    }});
                                                }};
                                                type = FacetAttributeTypeEnum.NUMBER;
                                            }};
                                            attributeReference = new FacetAttributeReference("voluptatibus", "omnis") {{
                                                targetAttributeName = "eos";
                                                targetFacetName = "harum";
                                            }};
                                            name = "Olga Morissette";
                                            requiredBehavior = RequiredAttributeBehaviorEnum.REQUIRED_ALWAYS;
                                        }};
                                    }}),
                                }};
                                objectType = UpdateFacetRequestBodyObjectTypeEnum.LEAF_NODE;
                            }};, "vitae") {{
                xAmzAlgorithm = "animi";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "libero";
                xAmzDate = "ullam";
                xAmzSecurityToken = "quaerat";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "iste";
            }};            

            UpdateFacetResponse res = sdk.sdk.updateFacet(req);

            if (res.updateFacetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateLinkAttributes

Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateLinkAttributesRequest;
import org.openapis.openapi.models.operations.UpdateLinkAttributesRequestBody;
import org.openapis.openapi.models.operations.UpdateLinkAttributesRequestBodyTypedLinkSpecifier;
import org.openapis.openapi.models.operations.UpdateLinkAttributesResponse;
import org.openapis.openapi.models.shared.AttributeKey;
import org.openapis.openapi.models.shared.AttributeNameAndValue;
import org.openapis.openapi.models.shared.LinkAttributeAction;
import org.openapis.openapi.models.shared.LinkAttributeUpdate;
import org.openapis.openapi.models.shared.ObjectReference;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypedAttributeValue;
import org.openapis.openapi.models.shared.TypedLinkSchemaAndFacetName;
import org.openapis.openapi.models.shared.UpdateActionTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLinkAttributesRequest req = new UpdateLinkAttributesRequest(                new UpdateLinkAttributesRequestBody(                new org.openapis.openapi.models.shared.LinkAttributeUpdate[]{{
                                                add(new LinkAttributeUpdate() {{
                                                    attributeAction = new LinkAttributeAction() {{
                                                        attributeActionType = UpdateActionTypeEnum.DELETE;
                                                        attributeUpdateValue = new TypedAttributeValue() {{
                                                            binaryValue = "odio";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-12-02T02:24:08.784Z");
                                                            numberValue = "eligendi";
                                                            stringValue = "occaecati";
                                                        }};
                                                    }};
                                                    attributeKey = new AttributeKey("magni", "rerum", "voluptatibus") {{
                                                        facetName = "doloribus";
                                                        name = "Wallace Wilderman";
                                                        schemaArn = "aut";
                                                    }};
                                                }}),
                                                add(new LinkAttributeUpdate() {{
                                                    attributeAction = new LinkAttributeAction() {{
                                                        attributeActionType = UpdateActionTypeEnum.DELETE;
                                                        attributeUpdateValue = new TypedAttributeValue() {{
                                                            binaryValue = "quod";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-09-15T23:46:26.544Z");
                                                            numberValue = "enim";
                                                            stringValue = "alias";
                                                        }};
                                                    }};
                                                    attributeKey = new AttributeKey("eius", "nostrum", "ex") {{
                                                        facetName = "blanditiis";
                                                        name = "Ms. Pamela Wilkinson";
                                                        schemaArn = "dolore";
                                                    }};
                                                }}),
                                            }},                 new UpdateLinkAttributesRequestBodyTypedLinkSpecifier() {{
                                                identityAttributeValues = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                    add(new AttributeNameAndValue("odit",                 new TypedAttributeValue() {{
                                                                        binaryValue = "molestiae";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-07-10T21:13:18.872Z");
                                                                        numberValue = "inventore";
                                                                        stringValue = "doloribus";
                                                                    }};) {{
                                                        attributeName = "voluptate";
                                                        value = new TypedAttributeValue() {{
                                                            binaryValue = "molestias";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-05-08T04:50:58.280Z");
                                                            numberValue = "hic";
                                                            stringValue = "quidem";
                                                        }};
                                                    }}),
                                                }};
                                                sourceObjectReference = new ObjectReference() {{
                                                    selector = "praesentium";
                                                }};;
                                                targetObjectReference = new ObjectReference() {{
                                                    selector = "aliquid";
                                                }};;
                                                typedLinkFacet = new TypedLinkSchemaAndFacetName("consequuntur", "laboriosam");;
                                            }};);, "nemo") {{
                xAmzAlgorithm = "reprehenderit";
                xAmzContentSha256 = "soluta";
                xAmzCredential = "ipsum";
                xAmzDate = "vel";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "vel";
            }};            

            UpdateLinkAttributesResponse res = sdk.sdk.updateLinkAttributes(req);

            if (res.updateLinkAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateObjectAttributes

Updates a given object's attributes.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateObjectAttributesRequest;
import org.openapis.openapi.models.operations.UpdateObjectAttributesRequestBody;
import org.openapis.openapi.models.operations.UpdateObjectAttributesRequestBodyObjectReference;
import org.openapis.openapi.models.operations.UpdateObjectAttributesResponse;
import org.openapis.openapi.models.shared.AttributeKey;
import org.openapis.openapi.models.shared.ObjectAttributeAction;
import org.openapis.openapi.models.shared.ObjectAttributeUpdate;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypedAttributeValue;
import org.openapis.openapi.models.shared.UpdateActionTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateObjectAttributesRequest req = new UpdateObjectAttributesRequest(                new UpdateObjectAttributesRequestBody(                new org.openapis.openapi.models.shared.ObjectAttributeUpdate[]{{
                                                add(new ObjectAttributeUpdate() {{
                                                    objectAttributeAction = new ObjectAttributeAction() {{
                                                        objectAttributeActionType = UpdateActionTypeEnum.DELETE;
                                                        objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                            binaryValue = "quis";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-01-15T04:37:44.760Z");
                                                            numberValue = "quod";
                                                            stringValue = "saepe";
                                                        }};
                                                    }};
                                                    objectAttributeKey = new AttributeKey("numquam", "architecto", "fuga") {{
                                                        facetName = "ad";
                                                        name = "Audrey Schimmel";
                                                        schemaArn = "ea";
                                                    }};
                                                }}),
                                                add(new ObjectAttributeUpdate() {{
                                                    objectAttributeAction = new ObjectAttributeAction() {{
                                                        objectAttributeActionType = UpdateActionTypeEnum.DELETE;
                                                        objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                            binaryValue = "velit";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-11-06T00:26:22.732Z");
                                                            numberValue = "officiis";
                                                            stringValue = "veniam";
                                                        }};
                                                    }};
                                                    objectAttributeKey = new AttributeKey("beatae", "porro", "cumque") {{
                                                        facetName = "quae";
                                                        name = "Arlene Renner";
                                                        schemaArn = "quia";
                                                    }};
                                                }}),
                                                add(new ObjectAttributeUpdate() {{
                                                    objectAttributeAction = new ObjectAttributeAction() {{
                                                        objectAttributeActionType = UpdateActionTypeEnum.DELETE;
                                                        objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                            binaryValue = "numquam";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-10-10T07:22:02.725Z");
                                                            numberValue = "culpa";
                                                            stringValue = "facilis";
                                                        }};
                                                    }};
                                                    objectAttributeKey = new AttributeKey("distinctio", "fugiat", "nulla") {{
                                                        facetName = "minus";
                                                        name = "Dr. Edmund Mohr";
                                                        schemaArn = "est";
                                                    }};
                                                }}),
                                            }},                 new UpdateObjectAttributesRequestBodyObjectReference() {{
                                                selector = "totam";
                                            }};);, "praesentium") {{
                xAmzAlgorithm = "officiis";
                xAmzContentSha256 = "esse";
                xAmzCredential = "vitae";
                xAmzDate = "delectus";
                xAmzSecurityToken = "laboriosam";
                xAmzSignature = "minus";
                xAmzSignedHeaders = "labore";
            }};            

            UpdateObjectAttributesResponse res = sdk.sdk.updateObjectAttributes(req);

            if (res.updateObjectAttributesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSchema

Updates the schema name with a new name. Only development schema names can be updated.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSchemaRequest;
import org.openapis.openapi.models.operations.UpdateSchemaRequestBody;
import org.openapis.openapi.models.operations.UpdateSchemaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSchemaRequest req = new UpdateSchemaRequest(                new UpdateSchemaRequestBody("sed");, "veniam") {{
                xAmzAlgorithm = "sed";
                xAmzContentSha256 = "quibusdam";
                xAmzCredential = "reprehenderit";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "reprehenderit";
                xAmzSignature = "et";
                xAmzSignedHeaders = "eveniet";
            }};            

            UpdateSchemaResponse res = sdk.sdk.updateSchema(req);

            if (res.updateSchemaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTypedLinkFacet

Updates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTypedLinkFacetRequest;
import org.openapis.openapi.models.operations.UpdateTypedLinkFacetRequestBody;
import org.openapis.openapi.models.operations.UpdateTypedLinkFacetResponse;
import org.openapis.openapi.models.shared.FacetAttributeTypeEnum;
import org.openapis.openapi.models.shared.RequiredAttributeBehaviorEnum;
import org.openapis.openapi.models.shared.Rule;
import org.openapis.openapi.models.shared.RuleTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TypedAttributeValue;
import org.openapis.openapi.models.shared.TypedLinkAttributeDefinition;
import org.openapis.openapi.models.shared.TypedLinkFacetAttributeUpdate;
import org.openapis.openapi.models.shared.UpdateActionTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTypedLinkFacetRequest req = new UpdateTypedLinkFacetRequest(                new UpdateTypedLinkFacetRequestBody(                new org.openapis.openapi.models.shared.TypedLinkFacetAttributeUpdate[]{{
                                                add(new TypedLinkFacetAttributeUpdate(UpdateActionTypeEnum.DELETE,                 new TypedLinkAttributeDefinition("officia", RequiredAttributeBehaviorEnum.REQUIRED_ALWAYS, FacetAttributeTypeEnum.STRING) {{
                                                                    defaultValue = new TypedAttributeValue() {{
                                                                        binaryValue = "cupiditate";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-09-11T23:12:06.763Z");
                                                                        numberValue = "excepturi";
                                                                        stringValue = "atque";
                                                                    }};;
                                                                    isImmutable = false;
                                                                    rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                                        put("magnam", new Rule() {{
                                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                                put("cum", "suscipit");
                                                                            }};
                                                                            type = RuleTypeEnum.NUMBER_COMPARISON;
                                                                        }});
                                                                    }};
                                                                }};) {{
                                                    action = UpdateActionTypeEnum.DELETE;
                                                    attribute = new TypedLinkAttributeDefinition("laborum", RequiredAttributeBehaviorEnum.NOT_REQUIRED, FacetAttributeTypeEnum.VARIANT) {{
                                                        defaultValue = new TypedAttributeValue() {{
                                                            binaryValue = "perferendis";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-09-28T09:58:46.411Z");
                                                            numberValue = "aut";
                                                            stringValue = "consequatur";
                                                        }};
                                                        isImmutable = false;
                                                        name = "Tomas Zieme";
                                                        requiredBehavior = RequiredAttributeBehaviorEnum.REQUIRED_ALWAYS;
                                                        rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                            put("repellendus", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("illo", "facere");
                                                                    put("fugiat", "ducimus");
                                                                    put("aut", "provident");
                                                                    put("voluptate", "tempore");
                                                                }};
                                                                type = RuleTypeEnum.NUMBER_COMPARISON;
                                                            }});
                                                            put("illum", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("ipsa", "quos");
                                                                    put("quo", "ullam");
                                                                    put("in", "doloribus");
                                                                }};
                                                                type = RuleTypeEnum.STRING_FROM_SET;
                                                            }});
                                                            put("eum", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("odio", "atque");
                                                                    put("similique", "quia");
                                                                    put("architecto", "ea");
                                                                    put("accusamus", "illo");
                                                                }};
                                                                type = RuleTypeEnum.STRING_FROM_SET;
                                                            }});
                                                        }};
                                                        type = FacetAttributeTypeEnum.DATETIME;
                                                    }};
                                                }}),
                                                add(new TypedLinkFacetAttributeUpdate(UpdateActionTypeEnum.CREATE_OR_UPDATE,                 new TypedLinkAttributeDefinition("animi", RequiredAttributeBehaviorEnum.NOT_REQUIRED, FacetAttributeTypeEnum.BOOLEAN_) {{
                                                                    defaultValue = new TypedAttributeValue() {{
                                                                        binaryValue = "temporibus";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2020-10-18T22:48:14.460Z");
                                                                        numberValue = "commodi";
                                                                        stringValue = "autem";
                                                                    }};;
                                                                    isImmutable = false;
                                                                    rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                                        put("magni", new Rule() {{
                                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                                put("expedita", "in");
                                                                                put("eaque", "delectus");
                                                                                put("blanditiis", "minus");
                                                                                put("tenetur", "assumenda");
                                                                            }};
                                                                            type = RuleTypeEnum.NUMBER_COMPARISON;
                                                                        }});
                                                                        put("a", new Rule() {{
                                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                                put("laboriosam", "earum");
                                                                                put("occaecati", "dicta");
                                                                                put("quidem", "omnis");
                                                                            }};
                                                                            type = RuleTypeEnum.STRING_FROM_SET;
                                                                        }});
                                                                        put("molestias", new Rule() {{
                                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                                put("dignissimos", "labore");
                                                                                put("laudantium", "dolore");
                                                                                put("aliquid", "repudiandae");
                                                                                put("aspernatur", "quod");
                                                                            }};
                                                                            type = RuleTypeEnum.BINARY_LENGTH;
                                                                        }});
                                                                    }};
                                                                }};) {{
                                                    action = UpdateActionTypeEnum.DELETE;
                                                    attribute = new TypedLinkAttributeDefinition("autem", RequiredAttributeBehaviorEnum.REQUIRED_ALWAYS, FacetAttributeTypeEnum.BINARY) {{
                                                        defaultValue = new TypedAttributeValue() {{
                                                            binaryValue = "delectus";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2021-09-04T18:39:29.554Z");
                                                            numberValue = "officiis";
                                                            stringValue = "ab";
                                                        }};
                                                        isImmutable = false;
                                                        name = "Jennifer Waters I";
                                                        requiredBehavior = RequiredAttributeBehaviorEnum.NOT_REQUIRED;
                                                        rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                            put("a", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("nihil", "recusandae");
                                                                }};
                                                                type = RuleTypeEnum.NUMBER_COMPARISON;
                                                            }});
                                                            put("mollitia", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("blanditiis", "suscipit");
                                                                    put("quas", "quis");
                                                                    put("enim", "corporis");
                                                                }};
                                                                type = RuleTypeEnum.STRING_FROM_SET;
                                                            }});
                                                        }};
                                                        type = FacetAttributeTypeEnum.BOOLEAN_;
                                                    }};
                                                }}),
                                                add(new TypedLinkFacetAttributeUpdate(UpdateActionTypeEnum.DELETE,                 new TypedLinkAttributeDefinition("provident", RequiredAttributeBehaviorEnum.REQUIRED_ALWAYS, FacetAttributeTypeEnum.VARIANT) {{
                                                                    defaultValue = new TypedAttributeValue() {{
                                                                        binaryValue = "excepturi";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-09-16T15:30:01.685Z");
                                                                        numberValue = "aspernatur";
                                                                        stringValue = "molestias";
                                                                    }};;
                                                                    isImmutable = false;
                                                                    rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                                        put("at", new Rule() {{
                                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                                put("laborum", "provident");
                                                                                put("hic", "corrupti");
                                                                                put("soluta", "earum");
                                                                            }};
                                                                            type = RuleTypeEnum.STRING_FROM_SET;
                                                                        }});
                                                                        put("explicabo", new Rule() {{
                                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                                put("illo", "architecto");
                                                                            }};
                                                                            type = RuleTypeEnum.BINARY_LENGTH;
                                                                        }});
                                                                        put("ad", new Rule() {{
                                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                                put("ullam", "provident");
                                                                            }};
                                                                            type = RuleTypeEnum.STRING_LENGTH;
                                                                        }});
                                                                    }};
                                                                }};) {{
                                                    action = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                    attribute = new TypedLinkAttributeDefinition("est", RequiredAttributeBehaviorEnum.NOT_REQUIRED, FacetAttributeTypeEnum.DATETIME) {{
                                                        defaultValue = new TypedAttributeValue() {{
                                                            binaryValue = "ipsa";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2021-05-04T07:03:12.007Z");
                                                            numberValue = "soluta";
                                                            stringValue = "aut";
                                                        }};
                                                        isImmutable = false;
                                                        name = "Grace Kerluke";
                                                        requiredBehavior = RequiredAttributeBehaviorEnum.NOT_REQUIRED;
                                                        rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                            put("ad", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("fuga", "consequatur");
                                                                    put("sit", "iure");
                                                                    put("earum", "quis");
                                                                    put("dolorem", "omnis");
                                                                }};
                                                                type = RuleTypeEnum.BINARY_LENGTH;
                                                            }});
                                                            put("quo", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("illo", "est");
                                                                }};
                                                                type = RuleTypeEnum.BINARY_LENGTH;
                                                            }});
                                                        }};
                                                        type = FacetAttributeTypeEnum.BINARY;
                                                    }};
                                                }}),
                                                add(new TypedLinkFacetAttributeUpdate(UpdateActionTypeEnum.DELETE,                 new TypedLinkAttributeDefinition("tenetur", RequiredAttributeBehaviorEnum.REQUIRED_ALWAYS, FacetAttributeTypeEnum.BOOLEAN_) {{
                                                                    defaultValue = new TypedAttributeValue() {{
                                                                        binaryValue = "quia";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-01-08T04:22:44.254Z");
                                                                        numberValue = "dicta";
                                                                        stringValue = "dicta";
                                                                    }};;
                                                                    isImmutable = false;
                                                                    rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                                        put("sint", new Rule() {{
                                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                                put("nobis", "quasi");
                                                                                put("itaque", "aliquam");
                                                                                put("vitae", "temporibus");
                                                                            }};
                                                                            type = RuleTypeEnum.STRING_FROM_SET;
                                                                        }});
                                                                        put("deserunt", new Rule() {{
                                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                                put("neque", "impedit");
                                                                            }};
                                                                            type = RuleTypeEnum.BINARY_LENGTH;
                                                                        }});
                                                                    }};
                                                                }};) {{
                                                    action = UpdateActionTypeEnum.DELETE;
                                                    attribute = new TypedLinkAttributeDefinition("eligendi", RequiredAttributeBehaviorEnum.REQUIRED_ALWAYS, FacetAttributeTypeEnum.STRING) {{
                                                        defaultValue = new TypedAttributeValue() {{
                                                            binaryValue = "blanditiis";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-06-24T21:34:45.170Z");
                                                            numberValue = "dignissimos";
                                                            stringValue = "repellat";
                                                        }};
                                                        isImmutable = false;
                                                        name = "Molly Kling";
                                                        requiredBehavior = RequiredAttributeBehaviorEnum.NOT_REQUIRED;
                                                        rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                            put("sed", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("nulla", "magni");
                                                                    put("modi", "voluptatum");
                                                                    put("dolore", "possimus");
                                                                    put("dolorum", "eos");
                                                                }};
                                                                type = RuleTypeEnum.BINARY_LENGTH;
                                                            }});
                                                            put("quam", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("omnis", "reiciendis");
                                                                }};
                                                                type = RuleTypeEnum.BINARY_LENGTH;
                                                            }});
                                                        }};
                                                        type = FacetAttributeTypeEnum.NUMBER;
                                                    }};
                                                }}),
                                            }},                 new String[]{{
                                                add("saepe"),
                                            }}, "amet");, "labore") {{
                xAmzAlgorithm = "repellat";
                xAmzContentSha256 = "eos";
                xAmzCredential = "quibusdam";
                xAmzDate = "repellat";
                xAmzSecurityToken = "mollitia";
                xAmzSignature = "quaerat";
                xAmzSignedHeaders = "officia";
            }};            

            UpdateTypedLinkFacetResponse res = sdk.sdk.updateTypedLinkFacet(req);

            if (res.updateTypedLinkFacetResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## upgradeAppliedSchema

Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpgradeAppliedSchemaRequest;
import org.openapis.openapi.models.operations.UpgradeAppliedSchemaRequestBody;
import org.openapis.openapi.models.operations.UpgradeAppliedSchemaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpgradeAppliedSchemaRequest req = new UpgradeAppliedSchemaRequest(                new UpgradeAppliedSchemaRequestBody("perspiciatis", "quam") {{
                                dryRun = false;
                            }};) {{
                xAmzAlgorithm = "a";
                xAmzContentSha256 = "iure";
                xAmzCredential = "nulla";
                xAmzDate = "recusandae";
                xAmzSecurityToken = "iste";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "aspernatur";
            }};            

            UpgradeAppliedSchemaResponse res = sdk.sdk.upgradeAppliedSchema(req);

            if (res.upgradeAppliedSchemaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## upgradePublishedSchema

Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpgradePublishedSchemaRequest;
import org.openapis.openapi.models.operations.UpgradePublishedSchemaRequestBody;
import org.openapis.openapi.models.operations.UpgradePublishedSchemaResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpgradePublishedSchemaRequest req = new UpgradePublishedSchemaRequest(                new UpgradePublishedSchemaRequestBody("ipsam", "et", "delectus") {{
                                dryRun = false;
                            }};) {{
                xAmzAlgorithm = "saepe";
                xAmzContentSha256 = "sunt";
                xAmzCredential = "in";
                xAmzDate = "architecto";
                xAmzSecurityToken = "sed";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "perspiciatis";
            }};            

            UpgradePublishedSchemaResponse res = sdk.sdk.upgradePublishedSchema(req);

            if (res.upgradePublishedSchemaResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
