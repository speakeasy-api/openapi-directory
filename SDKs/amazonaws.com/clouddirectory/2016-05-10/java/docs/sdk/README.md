# SDK

## Overview

<fullname>Amazon Cloud Directory</fullname> <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the development and management of cloud-scale web, mobile, and IoT applications. This guide describes the Cloud Directory operations that you can call programmatically and includes detailed information on data types and errors. For information about AWS Directory Services features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory Service</a> and the <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/what_is.html">AWS Directory Service Administration Guide</a>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/clouddirectory/>
### Available Operations

* [addFacetToObject](#addfacettoobject) - Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.
* [applySchema](#applyschema) - Copies the input published schema, at the specified version, into the <a>Directory</a> with the same name and version as that of the published schema.
* [attachObject](#attachobject) - <p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>
* [attachPolicy](#attachpolicy) - Attaches a policy object to a regular object. An object can have a limited number of attached policies.
* [attachToIndex](#attachtoindex) - Attaches the specified object to the specified index.
* [attachTypedLink](#attachtypedlink) - Attaches a typed link to a specified source and target object. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [batchRead](#batchread) - Performs all the read operations in a batch. 
* [batchWrite](#batchwrite) - Performs all the write operations in a batch. Either all the operations succeed or none.
* [createDirectory](#createdirectory) - Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.
* [createFacet](#createfacet) - Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.
* [createIndex](#createindex) - Creates an index object. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_indexing.html">Indexing</a> for more information.
* [createObject](#createobject) - Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. 
* [createSchema](#createschema) - <p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>
* [createTypedLinkFacet](#createtypedlinkfacet) - Creates a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [deleteDirectory](#deletedirectory) - Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.
* [deleteFacet](#deletefacet) - Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s that are associated with the facet will be deleted. Only development schema facets are allowed deletion.
* [deleteObject](#deleteobject) - Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted.
* [deleteSchema](#deleteschema) - Deletes a given schema. Schemas in a development and published state can only be deleted. 
* [deleteTypedLinkFacet](#deletetypedlinkfacet) - Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [detachFromIndex](#detachfromindex) - Detaches the specified object from the specified index.
* [detachObject](#detachobject) - Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.
* [detachPolicy](#detachpolicy) - Detaches a policy from an object.
* [detachTypedLink](#detachtypedlink) - Detaches a typed link from a specified source and target object. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [disableDirectory](#disabledirectory) - Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.
* [enableDirectory](#enabledirectory) - Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.
* [getAppliedSchemaVersion](#getappliedschemaversion) - Returns current applied schema version ARN, including the minor version in use.
* [getDirectory](#getdirectory) - Retrieves metadata about a directory.
* [getFacet](#getfacet) - Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema facets -- published, development, or applied.
* [getLinkAttributes](#getlinkattributes) - Retrieves attributes that are associated with a typed link.
* [getObjectAttributes](#getobjectattributes) - Retrieves attributes within a facet that are associated with an object.
* [getObjectInformation](#getobjectinformation) - Retrieves metadata about an object.
* [getSchemaAsJson](#getschemaasjson) - Retrieves a JSON representation of the schema. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_schemas.html#jsonformat">JSON Schema Format</a> for more information.
* [getTypedLinkFacetInformation](#gettypedlinkfacetinformation) - Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [listAppliedSchemaArns](#listappliedschemaarns) - Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.
* [listAttachedIndices](#listattachedindices) - Lists indices attached to the specified object.
* [listDevelopmentSchemaArns](#listdevelopmentschemaarns) - Retrieves each Amazon Resource Name (ARN) of schemas in the development state.
* [listDirectories](#listdirectories) - Lists directories created within an account.
* [listFacetAttributes](#listfacetattributes) - Retrieves attributes attached to the facet.
* [listFacetNames](#listfacetnames) - Retrieves the names of facets that exist in a schema.
* [listIncomingTypedLinks](#listincomingtypedlinks) - Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [listIndex](#listindex) - Lists objects attached to the specified index.
* [listObjectAttributes](#listobjectattributes) - Lists all attributes that are associated with an object. 
* [listObjectChildren](#listobjectchildren) - Returns a paginated list of child objects that are associated with a given object.
* [listObjectParentPaths](#listobjectparentpaths) - <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#dirstructure">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>
* [listObjectParents](#listobjectparents) - Lists parent objects that are associated with a given object in pagination fashion.
* [listObjectPolicies](#listobjectpolicies) - Returns policies attached to an object in pagination fashion.
* [listOutgoingTypedLinks](#listoutgoingtypedlinks) - Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [listPolicyAttachments](#listpolicyattachments) - Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.
* [listPublishedSchemaArns](#listpublishedschemaarns) - Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.
* [listTagsForResource](#listtagsforresource) - Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.
* [listTypedLinkFacetAttributes](#listtypedlinkfacetattributes) - Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [listTypedLinkFacetNames](#listtypedlinkfacetnames) - Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* [lookupPolicy](#lookuppolicy) - Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#policies">Policies</a>.
* [publishSchema](#publishschema) - Publishes a development schema with a major version and a recommended minor version.
* [putSchemaFromJson](#putschemafromjson) - Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_schemas.html#jsonformat">JSON Schema Format</a> for more information.
* [removeFacetFromObject](#removefacetfromobject) - Removes the specified facet from the specified object.
* [tagResource](#tagresource) - An API operation for adding tags to a resource.
* [untagResource](#untagresource) - An API operation for removing tags from a resource.
* [updateFacet](#updatefacet) - <p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>
* [updateLinkAttributes](#updatelinkattributes) - Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.
* [updateObjectAttributes](#updateobjectattributes) - Updates a given object's attributes.
* [updateSchema](#updateschema) - Updates the schema name with a new name. Only development schema names can be updated.
* [updateTypedLinkFacet](#updatetypedlinkfacet) - Updates a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
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

Attaches a typed link to a specified source and target object. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
                                                    listObjectPolicies = new BatchListObjectPolicies(                new ObjectReference() {{
                                                                        selector = "ipsum";
                                                                    }};) {{
                                                        maxResults = 748664L;
                                                        nextToken = "et";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "saepe";
                                                        }};
                                                    }};
                                                    listOutgoingTypedLinks = new BatchListOutgoingTypedLinks(                new ObjectReference() {{
                                                                        selector = "ipsum";
                                                                    }};) {{
                                                        filterAttributeRanges = new org.openapis.openapi.models.shared.TypedLinkAttributeRange[]{{
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.EXCLUSIVE, RangeModeEnum.FIRST) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "est";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2020-08-24T06:10:53.249Z");
                                                                                    numberValue = "doloribus";
                                                                                    stringValue = "ut";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "facilis";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-08-21T09:49:15.782Z");
                                                                                    numberValue = "quae";
                                                                                    stringValue = "laudantium";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "nobis";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.LAST_BEFORE_MISSING_VALUES) {{
                                                                    endMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "tempore";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-11-28T16:49:52.722Z");
                                                                        numberValue = "delectus";
                                                                        stringValue = "dolorem";
                                                                    }};
                                                                    startMode = RangeModeEnum.LAST;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "labore";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-04-28T19:10:24.037Z");
                                                                        numberValue = "architecto";
                                                                        stringValue = "quae";
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                        filterTypedLink = new TypedLinkSchemaAndFacetName("voluptatibus", "quisquam") {{
                                                            schemaArn = "odio";
                                                            typedLinkName = "occaecati";
                                                        }};
                                                        maxResults = 876506L;
                                                        nextToken = "omnis";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "quis";
                                                        }};
                                                    }};
                                                    listPolicyAttachments = new BatchListPolicyAttachments(                new ObjectReference() {{
                                                                        selector = "vero";
                                                                    }};) {{
                                                        maxResults = 961571L;
                                                        nextToken = "voluptate";
                                                        policyReference = new ObjectReference() {{
                                                            selector = "consectetur";
                                                        }};
                                                    }};
                                                    lookupPolicy = new BatchLookupPolicy(                new ObjectReference() {{
                                                                        selector = "distinctio";
                                                                    }};) {{
                                                        maxResults = 949319L;
                                                        nextToken = "dignissimos";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "hic";
                                                        }};
                                                    }};
                                                }}),
                                                add(new BatchReadOperation() {{
                                                    getLinkAttributes = new BatchGetLinkAttributes(                new String[]{{
                                                                        add("ea"),
                                                                        add("quo"),
                                                                    }},                 new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                                        add(new AttributeNameAndValue("aut",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "aut";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2021-06-17T11:25:30.782Z");
                                                                                                            numberValue = "aliquam";
                                                                                                            stringValue = "fugit";
                                                                                                        }};) {{
                                                                                            attributeName = "recusandae";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "aspernatur";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-12-12T11:58:39.585Z");
                                                                                                numberValue = "a";
                                                                                                stringValue = "libero";
                                                                                            }};
                                                                                        }}),
                                                                                    }},                 new ObjectReference() {{
                                                                                        selector = "accusamus";
                                                                                    }};,                 new ObjectReference() {{
                                                                                        selector = "inventore";
                                                                                    }};,                 new TypedLinkSchemaAndFacetName("non", "et"););) {{
                                                        attributeNames = new String[]{{
                                                            add("odio"),
                                                            add("similique"),
                                                            add("facilis"),
                                                            add("vero"),
                                                        }};
                                                        typedLinkSpecifier = new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                            add(new AttributeNameAndValue("nostrum",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "sapiente";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2020-04-13T07:43:17.350Z");
                                                                                                numberValue = "ea";
                                                                                                stringValue = "impedit";
                                                                                            }};) {{
                                                                                attributeName = "maiores";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "quasi";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-02-20T07:12:08.273Z");
                                                                                    numberValue = "excepturi";
                                                                                    stringValue = "voluptatibus";
                                                                                }};
                                                                            }}),
                                                                        }},                 new ObjectReference() {{
                                                                            selector = "corporis";
                                                                        }};,                 new ObjectReference() {{
                                                                            selector = "veniam";
                                                                        }};,                 new TypedLinkSchemaAndFacetName("aliquid", "inventore");) {{
                                                            identityAttributeValues = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                add(new AttributeNameAndValue("aut",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "voluptatibus";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-02-20T06:09:58.619Z");
                                                                                    numberValue = "fugit";
                                                                                    stringValue = "porro";
                                                                                }};) {{
                                                                    attributeName = "dolore";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "quibusdam";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-06-02T04:41:10.492Z");
                                                                        numberValue = "natus";
                                                                        stringValue = "impedit";
                                                                    }};
                                                                }}),
                                                                add(new AttributeNameAndValue("officia",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "tempora";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-08-04T04:05:19.236Z");
                                                                                    numberValue = "aspernatur";
                                                                                    stringValue = "vel";
                                                                                }};) {{
                                                                    attributeName = "maiores";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "doloribus";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-03-31T22:43:48.703Z");
                                                                        numberValue = "ducimus";
                                                                        stringValue = "alias";
                                                                    }};
                                                                }}),
                                                            }};
                                                            sourceObjectReference = new ObjectReference() {{
                                                                selector = "possimus";
                                                            }};
                                                            targetObjectReference = new ObjectReference() {{
                                                                selector = "magnam";
                                                            }};
                                                            typedLinkFacet = new TypedLinkSchemaAndFacetName("laudantium", "dicta") {{
                                                                schemaArn = "ratione";
                                                                typedLinkName = "ex";
                                                            }};
                                                        }};
                                                    }};
                                                    getObjectAttributes = new BatchGetObjectAttributes(                new String[]{{
                                                                        add("assumenda"),
                                                                        add("nulla"),
                                                                        add("voluptas"),
                                                                    }},                 new ObjectReference() {{
                                                                        selector = "libero";
                                                                    }};,                 new SchemaFacet() {{
                                                                        facetName = "quasi";
                                                                        schemaArn = "tempora";
                                                                    }};) {{
                                                        attributeNames = new String[]{{
                                                            add("laborum"),
                                                            add("placeat"),
                                                            add("velit"),
                                                        }};
                                                        objectReference = new ObjectReference() {{
                                                            selector = "eum";
                                                        }};
                                                        schemaFacet = new SchemaFacet() {{
                                                            facetName = "autem";
                                                            schemaArn = "nobis";
                                                        }};
                                                    }};
                                                    getObjectInformation = new BatchGetObjectInformation(                new ObjectReference() {{
                                                                        selector = "explicabo";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "numquam";
                                                        }};
                                                    }};
                                                    listAttachedIndices = new BatchListAttachedIndices(                new ObjectReference() {{
                                                                        selector = "magnam";
                                                                    }};) {{
                                                        maxResults = 591935L;
                                                        nextToken = "ipsa";
                                                        targetReference = new ObjectReference() {{
                                                            selector = "molestiae";
                                                        }};
                                                    }};
                                                    listIncomingTypedLinks = new BatchListIncomingTypedLinks(                new ObjectReference() {{
                                                                        selector = "fugit";
                                                                    }};) {{
                                                        filterAttributeRanges = new org.openapis.openapi.models.shared.TypedLinkAttributeRange[]{{
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.FIRST) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "id";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-08-03T04:27:44.236Z");
                                                                                    numberValue = "quo";
                                                                                    stringValue = "illum";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "quo";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-06-25T14:54:59.204Z");
                                                                                    numberValue = "eos";
                                                                                    stringValue = "voluptas";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "eius";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.INCLUSIVE) {{
                                                                    endMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "esse";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-08-20T04:54:39.392Z");
                                                                        numberValue = "reprehenderit";
                                                                        stringValue = "quidem";
                                                                    }};
                                                                    startMode = RangeModeEnum.EXCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "ut";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-08-15T07:50:23.042Z");
                                                                        numberValue = "assumenda";
                                                                        stringValue = "eos";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.LAST_BEFORE_MISSING_VALUES) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "totam";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-01-30T01:01:49.335Z");
                                                                                    numberValue = "odio";
                                                                                    stringValue = "occaecati";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "commodi";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-06-24T08:20:15.921Z");
                                                                                    numberValue = "deserunt";
                                                                                    stringValue = "molestiae";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "ab";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.LAST_BEFORE_MISSING_VALUES) {{
                                                                    endMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "consequatur";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-02-09T09:38:41.756Z");
                                                                        numberValue = "ipsam";
                                                                        stringValue = "aspernatur";
                                                                    }};
                                                                    startMode = RangeModeEnum.FIRST;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "quo";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-01-28T07:34:05.998Z");
                                                                        numberValue = "aperiam";
                                                                        stringValue = "distinctio";
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                        filterTypedLink = new TypedLinkSchemaAndFacetName("eum", "quas") {{
                                                            schemaArn = "accusantium";
                                                            typedLinkName = "porro";
                                                        }};
                                                        maxResults = 510017L;
                                                        nextToken = "consequuntur";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "deleniti";
                                                        }};
                                                    }};
                                                    listIndex = new BatchListIndex(                new ObjectReference() {{
                                                                        selector = "illum";
                                                                    }};) {{
                                                        indexReference = new ObjectReference() {{
                                                            selector = "fuga";
                                                        }};
                                                        maxResults = 649463L;
                                                        nextToken = "incidunt";
                                                        rangesOnIndexedValues = new org.openapis.openapi.models.shared.ObjectAttributeRange[]{{
                                                            add(new ObjectAttributeRange() {{
                                                                attributeKey = new AttributeKey("explicabo", "saepe", "occaecati") {{
                                                                    facetName = "explicabo";
                                                                    name = "Sue Corkery";
                                                                    schemaArn = "ratione";
                                                                }};
                                                                range = new TypedAttributeValueRange(RangeModeEnum.EXCLUSIVE, RangeModeEnum.LAST_BEFORE_MISSING_VALUES) {{
                                                                    endMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "et";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-02-02T15:37:41.657Z");
                                                                        numberValue = "accusamus";
                                                                        stringValue = "veritatis";
                                                                    }};
                                                                    startMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "quod";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-03-31T16:39:55.446Z");
                                                                        numberValue = "aliquid";
                                                                        stringValue = "quasi";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new ObjectAttributeRange() {{
                                                                attributeKey = new AttributeKey("sit", "culpa", "tempore") {{
                                                                    facetName = "harum";
                                                                    name = "Luz McClure";
                                                                    schemaArn = "eligendi";
                                                                }};
                                                                range = new TypedAttributeValueRange(RangeModeEnum.EXCLUSIVE, RangeModeEnum.LAST_BEFORE_MISSING_VALUES) {{
                                                                    endMode = RangeModeEnum.LAST;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "cumque";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-12-28T10:26:44.811Z");
                                                                        numberValue = "minus";
                                                                        stringValue = "quaerat";
                                                                    }};
                                                                    startMode = RangeModeEnum.EXCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "consectetur";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-07-01T05:58:32.179Z");
                                                                        numberValue = "provident";
                                                                        stringValue = "a";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new ObjectAttributeRange() {{
                                                                attributeKey = new AttributeKey("quia", "eveniet", "asperiores") {{
                                                                    facetName = "esse";
                                                                    name = "Lorene Mueller";
                                                                    schemaArn = "possimus";
                                                                }};
                                                                range = new TypedAttributeValueRange(RangeModeEnum.LAST, RangeModeEnum.INCLUSIVE) {{
                                                                    endMode = RangeModeEnum.EXCLUSIVE;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "veritatis";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-11-27T12:32:54.264Z");
                                                                        numberValue = "similique";
                                                                        stringValue = "culpa";
                                                                    }};
                                                                    startMode = RangeModeEnum.LAST;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "tenetur";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-01-24T02:06:03.033Z");
                                                                        numberValue = "vel";
                                                                        stringValue = "in";
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    listObjectAttributes = new BatchListObjectAttributes(                new ObjectReference() {{
                                                                        selector = "ullam";
                                                                    }};) {{
                                                        facetFilter = new SchemaFacet() {{
                                                            facetName = "soluta";
                                                            schemaArn = "accusantium";
                                                        }};
                                                        maxResults = 306986L;
                                                        nextToken = "sapiente";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "dicta";
                                                        }};
                                                    }};
                                                    listObjectChildren = new BatchListObjectChildren(                new ObjectReference() {{
                                                                        selector = "aut";
                                                                    }};) {{
                                                        maxResults = 443879L;
                                                        nextToken = "ullam";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "nisi";
                                                        }};
                                                    }};
                                                    listObjectParentPaths = new BatchListObjectParentPaths(                new ObjectReference() {{
                                                                        selector = "ex";
                                                                    }};) {{
                                                        maxResults = 531849L;
                                                        nextToken = "qui";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "quibusdam";
                                                        }};
                                                    }};
                                                    listObjectPolicies = new BatchListObjectPolicies(                new ObjectReference() {{
                                                                        selector = "architecto";
                                                                    }};) {{
                                                        maxResults = 536275L;
                                                        nextToken = "itaque";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "dolorum";
                                                        }};
                                                    }};
                                                    listOutgoingTypedLinks = new BatchListOutgoingTypedLinks(                new ObjectReference() {{
                                                                        selector = "doloribus";
                                                                    }};) {{
                                                        filterAttributeRanges = new org.openapis.openapi.models.shared.TypedLinkAttributeRange[]{{
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.LAST_BEFORE_MISSING_VALUES) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "mollitia";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-06-16T05:23:01.658Z");
                                                                                    numberValue = "non";
                                                                                    stringValue = "voluptatem";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "dolor";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-06-30T04:05:24.454Z");
                                                                                    numberValue = "impedit";
                                                                                    stringValue = "explicabo";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "tenetur";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.FIRST) {{
                                                                    endMode = RangeModeEnum.FIRST;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "at";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-07-19T05:32:14.038Z");
                                                                        numberValue = "ipsa";
                                                                        stringValue = "minima";
                                                                    }};
                                                                    startMode = RangeModeEnum.FIRST;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "consectetur";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-05-21T17:17:20.623Z");
                                                                        numberValue = "temporibus";
                                                                        stringValue = "accusantium";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.EXCLUSIVE) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "dignissimos";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-01-08T17:32:26.674Z");
                                                                                    numberValue = "nemo";
                                                                                    stringValue = "quae";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "quaerat";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2020-08-05T23:44:45.300Z");
                                                                                    numberValue = "labore";
                                                                                    stringValue = "ab";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "voluptas";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.EXCLUSIVE) {{
                                                                    endMode = RangeModeEnum.FIRST;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "dignissimos";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-01-07T16:50:11.026Z");
                                                                        numberValue = "natus";
                                                                        stringValue = "velit";
                                                                    }};
                                                                    startMode = RangeModeEnum.EXCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "voluptas";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-11-12T00:03:51.639Z");
                                                                        numberValue = "ea";
                                                                        stringValue = "quaerat";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.EXCLUSIVE, RangeModeEnum.INCLUSIVE) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "cum";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-07-21T19:01:11.341Z");
                                                                                    numberValue = "corporis";
                                                                                    stringValue = "reiciendis";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "assumenda";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-01-28T09:17:23.255Z");
                                                                                    numberValue = "aliquid";
                                                                                    stringValue = "aperiam";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "adipisci";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.LAST) {{
                                                                    endMode = RangeModeEnum.INCLUSIVE;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "id";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-10-03T04:29:10.698Z");
                                                                        numberValue = "culpa";
                                                                        stringValue = "est";
                                                                    }};
                                                                    startMode = RangeModeEnum.EXCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "totam";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-09-23T14:56:28.537Z");
                                                                        numberValue = "ducimus";
                                                                        stringValue = "quos";
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                        filterTypedLink = new TypedLinkSchemaAndFacetName("in", "exercitationem") {{
                                                            schemaArn = "cum";
                                                            typedLinkName = "consectetur";
                                                        }};
                                                        maxResults = 937285L;
                                                        nextToken = "facere";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "numquam";
                                                        }};
                                                    }};
                                                    listPolicyAttachments = new BatchListPolicyAttachments(                new ObjectReference() {{
                                                                        selector = "saepe";
                                                                    }};) {{
                                                        maxResults = 381760L;
                                                        nextToken = "reiciendis";
                                                        policyReference = new ObjectReference() {{
                                                            selector = "quidem";
                                                        }};
                                                    }};
                                                    lookupPolicy = new BatchLookupPolicy(                new ObjectReference() {{
                                                                        selector = "asperiores";
                                                                    }};) {{
                                                        maxResults = 897071L;
                                                        nextToken = "dolore";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "sunt";
                                                        }};
                                                    }};
                                                }}),
                                                add(new BatchReadOperation() {{
                                                    getLinkAttributes = new BatchGetLinkAttributes(                new String[]{{
                                                                        add("reiciendis"),
                                                                    }},                 new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                                        add(new AttributeNameAndValue("dolore",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "laborum";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-07-21T15:45:39.001Z");
                                                                                                            numberValue = "commodi";
                                                                                                            stringValue = "quidem";
                                                                                                        }};) {{
                                                                                            attributeName = "asperiores";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "facilis";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-04-17T04:31:41.347Z");
                                                                                                numberValue = "ab";
                                                                                                stringValue = "iste";
                                                                                            }};
                                                                                        }}),
                                                                                    }},                 new ObjectReference() {{
                                                                                        selector = "explicabo";
                                                                                    }};,                 new ObjectReference() {{
                                                                                        selector = "voluptas";
                                                                                    }};,                 new TypedLinkSchemaAndFacetName("unde", "architecto"););) {{
                                                        attributeNames = new String[]{{
                                                            add("non"),
                                                        }};
                                                        typedLinkSpecifier = new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                            add(new AttributeNameAndValue("blanditiis",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "in";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-09-11T20:51:23.700Z");
                                                                                                numberValue = "officiis";
                                                                                                stringValue = "temporibus";
                                                                                            }};) {{
                                                                                attributeName = "minima";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "nobis";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-07-11T09:37:00.887Z");
                                                                                    numberValue = "minus";
                                                                                    stringValue = "dolores";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("nesciunt",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "culpa";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2021-04-07T21:05:22.480Z");
                                                                                                numberValue = "totam";
                                                                                                stringValue = "hic";
                                                                                            }};) {{
                                                                                attributeName = "ullam";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "adipisci";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-12-30T06:08:11.710Z");
                                                                                    numberValue = "quas";
                                                                                    stringValue = "hic";
                                                                                }};
                                                                            }}),
                                                                        }},                 new ObjectReference() {{
                                                                            selector = "exercitationem";
                                                                        }};,                 new ObjectReference() {{
                                                                            selector = "nobis";
                                                                        }};,                 new TypedLinkSchemaAndFacetName("sit", "rerum");) {{
                                                            identityAttributeValues = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                add(new AttributeNameAndValue("harum",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "laboriosam";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-01-31T09:28:16.792Z");
                                                                                    numberValue = "libero";
                                                                                    stringValue = "vitae";
                                                                                }};) {{
                                                                    attributeName = "beatae";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "dignissimos";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2020-04-29T18:47:01.945Z");
                                                                        numberValue = "consectetur";
                                                                        stringValue = "corporis";
                                                                    }};
                                                                }}),
                                                            }};
                                                            sourceObjectReference = new ObjectReference() {{
                                                                selector = "accusamus";
                                                            }};
                                                            targetObjectReference = new ObjectReference() {{
                                                                selector = "similique";
                                                            }};
                                                            typedLinkFacet = new TypedLinkSchemaAndFacetName("voluptas", "voluptas") {{
                                                                schemaArn = "tempora";
                                                                typedLinkName = "aspernatur";
                                                            }};
                                                        }};
                                                    }};
                                                    getObjectAttributes = new BatchGetObjectAttributes(                new String[]{{
                                                                        add("maiores"),
                                                                        add("incidunt"),
                                                                        add("sed"),
                                                                    }},                 new ObjectReference() {{
                                                                        selector = "provident";
                                                                    }};,                 new SchemaFacet() {{
                                                                        facetName = "eius";
                                                                        schemaArn = "necessitatibus";
                                                                    }};) {{
                                                        attributeNames = new String[]{{
                                                            add("sapiente"),
                                                            add("debitis"),
                                                        }};
                                                        objectReference = new ObjectReference() {{
                                                            selector = "illo";
                                                        }};
                                                        schemaFacet = new SchemaFacet() {{
                                                            facetName = "reiciendis";
                                                            schemaArn = "perferendis";
                                                        }};
                                                    }};
                                                    getObjectInformation = new BatchGetObjectInformation(                new ObjectReference() {{
                                                                        selector = "ea";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "ipsum";
                                                        }};
                                                    }};
                                                    listAttachedIndices = new BatchListAttachedIndices(                new ObjectReference() {{
                                                                        selector = "tempora";
                                                                    }};) {{
                                                        maxResults = 579912L;
                                                        nextToken = "quos";
                                                        targetReference = new ObjectReference() {{
                                                            selector = "voluptatibus";
                                                        }};
                                                    }};
                                                    listIncomingTypedLinks = new BatchListIncomingTypedLinks(                new ObjectReference() {{
                                                                        selector = "quas";
                                                                    }};) {{
                                                        filterAttributeRanges = new org.openapis.openapi.models.shared.TypedLinkAttributeRange[]{{
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.LAST) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "minima";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2020-02-07T00:03:24.642Z");
                                                                                    numberValue = "nulla";
                                                                                    stringValue = "magni";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "aperiam";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-03-29T06:16:27.485Z");
                                                                                    numberValue = "veniam";
                                                                                    stringValue = "in";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "voluptate";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.INCLUSIVE) {{
                                                                    endMode = RangeModeEnum.EXCLUSIVE;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "ex";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-10-02T07:53:52.364Z");
                                                                        numberValue = "officiis";
                                                                        stringValue = "praesentium";
                                                                    }};
                                                                    startMode = RangeModeEnum.INCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "quaerat";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-08-17T20:12:51.918Z");
                                                                        numberValue = "debitis";
                                                                        stringValue = "rem";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.LAST, RangeModeEnum.INCLUSIVE) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "dolorum";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-03-30T03:48:24.857Z");
                                                                                    numberValue = "tempora";
                                                                                    stringValue = "atque";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "fugit";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-02-22T10:47:09.142Z");
                                                                                    numberValue = "voluptatem";
                                                                                    stringValue = "culpa";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "officiis";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.LAST, RangeModeEnum.INCLUSIVE) {{
                                                                    endMode = RangeModeEnum.FIRST;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "laudantium";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-06-28T14:53:26.431Z");
                                                                        numberValue = "cum";
                                                                        stringValue = "laboriosam";
                                                                    }};
                                                                    startMode = RangeModeEnum.INCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "voluptatum";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-02-10T08:43:29.852Z");
                                                                        numberValue = "expedita";
                                                                        stringValue = "debitis";
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                        filterTypedLink = new TypedLinkSchemaAndFacetName("consequatur", "esse") {{
                                                            schemaArn = "expedita";
                                                            typedLinkName = "magnam";
                                                        }};
                                                        maxResults = 372679L;
                                                        nextToken = "sit";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "voluptatum";
                                                        }};
                                                    }};
                                                    listIndex = new BatchListIndex(                new ObjectReference() {{
                                                                        selector = "atque";
                                                                    }};) {{
                                                        indexReference = new ObjectReference() {{
                                                            selector = "repudiandae";
                                                        }};
                                                        maxResults = 361151L;
                                                        nextToken = "et";
                                                        rangesOnIndexedValues = new org.openapis.openapi.models.shared.ObjectAttributeRange[]{{
                                                            add(new ObjectAttributeRange() {{
                                                                attributeKey = new AttributeKey("consequatur", "incidunt", "reiciendis") {{
                                                                    facetName = "ex";
                                                                    name = "Karen Kautzer";
                                                                    schemaArn = "error";
                                                                }};
                                                                range = new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.LAST) {{
                                                                    endMode = RangeModeEnum.LAST;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "harum";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-11-25T17:06:43.735Z");
                                                                        numberValue = "occaecati";
                                                                        stringValue = "labore";
                                                                    }};
                                                                    startMode = RangeModeEnum.INCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "atque";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-07-21T08:55:46.635Z");
                                                                        numberValue = "tenetur";
                                                                        stringValue = "laboriosam";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new ObjectAttributeRange() {{
                                                                attributeKey = new AttributeKey("voluptates", "perferendis", "est") {{
                                                                    facetName = "deserunt";
                                                                    name = "Lindsey Witting";
                                                                    schemaArn = "delectus";
                                                                }};
                                                                range = new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.EXCLUSIVE) {{
                                                                    endMode = RangeModeEnum.INCLUSIVE;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "reprehenderit";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2020-12-11T19:46:56.272Z");
                                                                        numberValue = "praesentium";
                                                                        stringValue = "mollitia";
                                                                    }};
                                                                    startMode = RangeModeEnum.LAST;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "voluptatem";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2020-03-30T02:42:49.718Z");
                                                                        numberValue = "quasi";
                                                                        stringValue = "atque";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new ObjectAttributeRange() {{
                                                                attributeKey = new AttributeKey("ea", "atque", "error") {{
                                                                    facetName = "totam";
                                                                    name = "Ms. Alison Schoen";
                                                                    schemaArn = "assumenda";
                                                                }};
                                                                range = new TypedAttributeValueRange(RangeModeEnum.LAST, RangeModeEnum.EXCLUSIVE) {{
                                                                    endMode = RangeModeEnum.EXCLUSIVE;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "officiis";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-02-22T09:14:53.307Z");
                                                                        numberValue = "minima";
                                                                        stringValue = "aspernatur";
                                                                    }};
                                                                    startMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "maiores";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-04-04T14:18:49.875Z");
                                                                        numberValue = "error";
                                                                        stringValue = "blanditiis";
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                    }};
                                                    listObjectAttributes = new BatchListObjectAttributes(                new ObjectReference() {{
                                                                        selector = "labore";
                                                                    }};) {{
                                                        facetFilter = new SchemaFacet() {{
                                                            facetName = "atque";
                                                            schemaArn = "sunt";
                                                        }};
                                                        maxResults = 923306L;
                                                        nextToken = "dolorum";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "repellendus";
                                                        }};
                                                    }};
                                                    listObjectChildren = new BatchListObjectChildren(                new ObjectReference() {{
                                                                        selector = "dicta";
                                                                    }};) {{
                                                        maxResults = 968287L;
                                                        nextToken = "doloremque";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "repudiandae";
                                                        }};
                                                    }};
                                                    listObjectParentPaths = new BatchListObjectParentPaths(                new ObjectReference() {{
                                                                        selector = "enim";
                                                                    }};) {{
                                                        maxResults = 36033L;
                                                        nextToken = "beatae";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "dolores";
                                                        }};
                                                    }};
                                                    listObjectPolicies = new BatchListObjectPolicies(                new ObjectReference() {{
                                                                        selector = "molestias";
                                                                    }};) {{
                                                        maxResults = 389135L;
                                                        nextToken = "velit";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "a";
                                                        }};
                                                    }};
                                                    listOutgoingTypedLinks = new BatchListOutgoingTypedLinks(                new ObjectReference() {{
                                                                        selector = "ut";
                                                                    }};) {{
                                                        filterAttributeRanges = new org.openapis.openapi.models.shared.TypedLinkAttributeRange[]{{
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.LAST) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "quidem";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-04-05T02:21:38.050Z");
                                                                                    numberValue = "vero";
                                                                                    stringValue = "doloremque";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "iure";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-06-26T01:43:04.262Z");
                                                                                    numberValue = "quae";
                                                                                    stringValue = "molestiae";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "saepe";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.INCLUSIVE) {{
                                                                    endMode = RangeModeEnum.FIRST;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "occaecati";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-03-17T06:13:21.698Z");
                                                                        numberValue = "in";
                                                                        stringValue = "adipisci";
                                                                    }};
                                                                    startMode = RangeModeEnum.EXCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "occaecati";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-11-08T18:10:37.954Z");
                                                                        numberValue = "id";
                                                                        stringValue = "quis";
                                                                    }};
                                                                }};
                                                            }}),
                                                            add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.LAST_BEFORE_MISSING_VALUES) {{
                                                                                endValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "mollitia";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-12-30T02:32:19.151Z");
                                                                                    numberValue = "maiores";
                                                                                    stringValue = "reiciendis";
                                                                                }};;
                                                                                startValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "dolores";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-05-06T13:39:00.258Z");
                                                                                    numberValue = "dolore";
                                                                                    stringValue = "dolorum";
                                                                                }};;
                                                                            }};) {{
                                                                attributeName = "eveniet";
                                                                range = new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.LAST) {{
                                                                    endMode = RangeModeEnum.FIRST;
                                                                    endValue = new TypedAttributeValue() {{
                                                                        binaryValue = "cum";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-02-07T04:58:25.283Z");
                                                                        numberValue = "ratione";
                                                                        stringValue = "laborum";
                                                                    }};
                                                                    startMode = RangeModeEnum.INCLUSIVE;
                                                                    startValue = new TypedAttributeValue() {{
                                                                        binaryValue = "voluptatum";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-05-23T18:05:58.128Z");
                                                                        numberValue = "ad";
                                                                        stringValue = "repellat";
                                                                    }};
                                                                }};
                                                            }}),
                                                        }};
                                                        filterTypedLink = new TypedLinkSchemaAndFacetName("recusandae", "omnis") {{
                                                            schemaArn = "nesciunt";
                                                            typedLinkName = "quae";
                                                        }};
                                                        maxResults = 309251L;
                                                        nextToken = "molestiae";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "ex";
                                                        }};
                                                    }};
                                                    listPolicyAttachments = new BatchListPolicyAttachments(                new ObjectReference() {{
                                                                        selector = "laudantium";
                                                                    }};) {{
                                                        maxResults = 633062L;
                                                        nextToken = "adipisci";
                                                        policyReference = new ObjectReference() {{
                                                            selector = "debitis";
                                                        }};
                                                    }};
                                                    lookupPolicy = new BatchLookupPolicy(                new ObjectReference() {{
                                                                        selector = "esse";
                                                                    }};) {{
                                                        maxResults = 432606L;
                                                        nextToken = "nemo";
                                                        objectReference = new ObjectReference() {{
                                                            selector = "recusandae";
                                                        }};
                                                    }};
                                                }}),
                                            }});, "provident") {{
                xAmzAlgorithm = "quis";
                xAmzContentSha256 = "eum";
                xAmzCredential = "reiciendis";
                xAmzDate = "provident";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "quasi";
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
                .setSecurity(new Security("nostrum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            BatchWriteRequest req = new BatchWriteRequest(                new BatchWriteRequestBody(                new org.openapis.openapi.models.shared.BatchWriteOperation[]{{
                                                add(new BatchWriteOperation() {{
                                                    addFacetToObject = new BatchAddFacetToObject(                new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("doloremque", "dicta", "odio");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "tempora";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-08-06T14:46:31.435Z");
                                                                                            numberValue = "consectetur";
                                                                                            stringValue = "aliquid";
                                                                                        }};) {{
                                                                            key = new AttributeKey("iusto", "esse", "praesentium") {{
                                                                                facetName = "nulla";
                                                                                name = "Jeffrey Goldner";
                                                                                schemaArn = "dicta";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "maiores";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2021-09-24T00:59:48.564Z");
                                                                                numberValue = "architecto";
                                                                                stringValue = "fugiat";
                                                                            }};
                                                                        }}),
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("ab", "error", "possimus");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "voluptates";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2021-08-28T14:09:49.511Z");
                                                                                            numberValue = "libero";
                                                                                            stringValue = "ad";
                                                                                        }};) {{
                                                                            key = new AttributeKey("officia", "suscipit", "aliquid") {{
                                                                                facetName = "ipsa";
                                                                                name = "Ralph Hegmann";
                                                                                schemaArn = "aliquid";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "perferendis";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-08-17T05:09:58.137Z");
                                                                                numberValue = "iste";
                                                                                stringValue = "id";
                                                                            }};
                                                                        }}),
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("voluptatum", "omnis", "veritatis");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "rerum";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2021-09-24T14:32:36.483Z");
                                                                                            numberValue = "voluptatem";
                                                                                            stringValue = "sapiente";
                                                                                        }};) {{
                                                                            key = new AttributeKey("ut", "ad", "expedita") {{
                                                                                facetName = "deleniti";
                                                                                name = "Gloria Skiles";
                                                                                schemaArn = "ex";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "voluptatem";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2021-07-11T19:18:20.130Z");
                                                                                numberValue = "aliquid";
                                                                                stringValue = "beatae";
                                                                            }};
                                                                        }}),
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("ullam", "perferendis", "illum");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "totam";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2020-06-22T03:49:26.507Z");
                                                                                            numberValue = "nam";
                                                                                            stringValue = "ipsam";
                                                                                        }};) {{
                                                                            key = new AttributeKey("earum", "ex", "sapiente") {{
                                                                                facetName = "officiis";
                                                                                name = "Kristine Stroman Jr.";
                                                                                schemaArn = "deleniti";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "rem";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2021-11-27T05:10:30.323Z");
                                                                                numberValue = "asperiores";
                                                                                stringValue = "ratione";
                                                                            }};
                                                                        }}),
                                                                    }},                 new ObjectReference() {{
                                                                        selector = "culpa";
                                                                    }};,                 new SchemaFacet() {{
                                                                        facetName = "dolor";
                                                                        schemaArn = "aliquam";
                                                                    }};) {{
                                                        objectAttributeList = new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                            add(new AttributeKeyAndValue(                new AttributeKey("molestias", "officiis", "sapiente");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "cumque";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-04-21T03:20:35.575Z");
                                                                                numberValue = "tempora";
                                                                                stringValue = "quis";
                                                                            }};) {{
                                                                key = new AttributeKey("in", "nam", "earum") {{
                                                                    facetName = "possimus";
                                                                    name = "Dr. Reginald Hyatt";
                                                                    schemaArn = "ullam";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "officia";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2021-05-17T11:17:46.661Z");
                                                                    numberValue = "modi";
                                                                    stringValue = "voluptatibus";
                                                                }};
                                                            }}),
                                                            add(new AttributeKeyAndValue(                new AttributeKey("minima", "beatae", "cupiditate");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "provident";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2020-10-06T18:56:18.922Z");
                                                                                numberValue = "hic";
                                                                                stringValue = "illum";
                                                                            }};) {{
                                                                key = new AttributeKey("eius", "rem", "at") {{
                                                                    facetName = "inventore";
                                                                    name = "Mrs. Erma Berge";
                                                                    schemaArn = "eum";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "impedit";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-01-16T01:25:46.171Z");
                                                                    numberValue = "eum";
                                                                    stringValue = "dicta";
                                                                }};
                                                            }}),
                                                            add(new AttributeKeyAndValue(                new AttributeKey("nulla", "consequatur", "quasi");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "et";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-05-19T23:57:30.950Z");
                                                                                numberValue = "occaecati";
                                                                                stringValue = "suscipit";
                                                                            }};) {{
                                                                key = new AttributeKey("suscipit", "dolorem", "fugit") {{
                                                                    facetName = "eaque";
                                                                    name = "Freddie Wyman";
                                                                    schemaArn = "porro";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "cumque";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-08-15T23:37:19.342Z");
                                                                    numberValue = "animi";
                                                                    stringValue = "necessitatibus";
                                                                }};
                                                            }}),
                                                        }};
                                                        objectReference = new ObjectReference() {{
                                                            selector = "adipisci";
                                                        }};
                                                        schemaFacet = new SchemaFacet() {{
                                                            facetName = "quasi";
                                                            schemaArn = "magni";
                                                        }};
                                                    }};
                                                    attachObject = new BatchAttachObject(                new ObjectReference() {{
                                                                        selector = "tempora";
                                                                    }};, "dolor",                 new ObjectReference() {{
                                                                        selector = "consequatur";
                                                                    }};) {{
                                                        childReference = new ObjectReference() {{
                                                            selector = "inventore";
                                                        }};
                                                        linkName = "deleniti";
                                                        parentReference = new ObjectReference() {{
                                                            selector = "veritatis";
                                                        }};
                                                    }};
                                                    attachPolicy = new BatchAttachPolicy(                new ObjectReference() {{
                                                                        selector = "modi";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "fugit";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "architecto";
                                                        }};
                                                        policyReference = new ObjectReference() {{
                                                            selector = "sit";
                                                        }};
                                                    }};
                                                    attachToIndex = new BatchAttachToIndex(                new ObjectReference() {{
                                                                        selector = "quae";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "dolor";
                                                                    }};) {{
                                                        indexReference = new ObjectReference() {{
                                                            selector = "ab";
                                                        }};
                                                        targetReference = new ObjectReference() {{
                                                            selector = "laudantium";
                                                        }};
                                                    }};
                                                    attachTypedLink = new BatchAttachTypedLink(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                        add(new AttributeNameAndValue("aperiam",                 new TypedAttributeValue() {{
                                                                                            binaryValue = "cupiditate";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2020-10-05T05:08:23.872Z");
                                                                                            numberValue = "alias";
                                                                                            stringValue = "omnis";
                                                                                        }};) {{
                                                                            attributeName = "rem";
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "fugiat";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-08-09T15:02:09.217Z");
                                                                                numberValue = "consequuntur";
                                                                                stringValue = "consectetur";
                                                                            }};
                                                                        }}),
                                                                    }},                 new ObjectReference() {{
                                                                        selector = "eos";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "occaecati";
                                                                    }};,                 new TypedLinkSchemaAndFacetName("iste", "magni");) {{
                                                        attributes = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                            add(new AttributeNameAndValue("officiis",                 new TypedAttributeValue() {{
                                                                                binaryValue = "esse";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-07-17T01:27:56.063Z");
                                                                                numberValue = "veniam";
                                                                                stringValue = "nesciunt";
                                                                            }};) {{
                                                                attributeName = "ipsam";
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "consequuntur";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-06-10T17:10:55.416Z");
                                                                    numberValue = "eveniet";
                                                                    stringValue = "impedit";
                                                                }};
                                                            }}),
                                                            add(new AttributeNameAndValue("ab",                 new TypedAttributeValue() {{
                                                                                binaryValue = "porro";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-04-01T21:03:01.050Z");
                                                                                numberValue = "laboriosam";
                                                                                stringValue = "recusandae";
                                                                            }};) {{
                                                                attributeName = "expedita";
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "eum";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-06-22T04:40:09.209Z");
                                                                    numberValue = "magnam";
                                                                    stringValue = "exercitationem";
                                                                }};
                                                            }}),
                                                            add(new AttributeNameAndValue("at",                 new TypedAttributeValue() {{
                                                                                binaryValue = "vero";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2021-08-14T17:27:02.277Z");
                                                                                numberValue = "sequi";
                                                                                stringValue = "doloribus";
                                                                            }};) {{
                                                                attributeName = "consequuntur";
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "voluptatem";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-02-08T01:44:39.255Z");
                                                                    numberValue = "quasi";
                                                                    stringValue = "nisi";
                                                                }};
                                                            }}),
                                                            add(new AttributeNameAndValue("officia",                 new TypedAttributeValue() {{
                                                                                binaryValue = "voluptas";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-08-20T19:22:19.746Z");
                                                                                numberValue = "quos";
                                                                                stringValue = "eius";
                                                                            }};) {{
                                                                attributeName = "repudiandae";
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "optio";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-04-09T21:10:40.487Z");
                                                                    numberValue = "voluptate";
                                                                    stringValue = "blanditiis";
                                                                }};
                                                            }}),
                                                        }};
                                                        sourceObjectReference = new ObjectReference() {{
                                                            selector = "aspernatur";
                                                        }};
                                                        targetObjectReference = new ObjectReference() {{
                                                            selector = "ducimus";
                                                        }};
                                                        typedLinkFacet = new TypedLinkSchemaAndFacetName("laudantium", "incidunt") {{
                                                            schemaArn = "nesciunt";
                                                            typedLinkName = "fuga";
                                                        }};
                                                    }};
                                                    createIndex = new BatchCreateIndex(false,                 new org.openapis.openapi.models.shared.AttributeKey[]{{
                                                                        add(new AttributeKey("velit", "atque", "ipsum") {{
                                                                            facetName = "debitis";
                                                                            name = "Eric Schiller";
                                                                            schemaArn = "consectetur";
                                                                        }}),
                                                                        add(new AttributeKey("voluptate", "sequi", "dignissimos") {{
                                                                            facetName = "impedit";
                                                                            name = "Shelia Walker";
                                                                            schemaArn = "iusto";
                                                                        }}),
                                                                    }}) {{
                                                        batchReferenceName = "inventore";
                                                        isUnique = false;
                                                        linkName = "fuga";
                                                        orderedIndexedAttributeList = new org.openapis.openapi.models.shared.AttributeKey[]{{
                                                            add(new AttributeKey("magnam", "temporibus", "quos") {{
                                                                facetName = "voluptatibus";
                                                                name = "Alejandro Wisoky";
                                                                schemaArn = "maxime";
                                                            }}),
                                                            add(new AttributeKey("vero", "voluptatem", "ipsam") {{
                                                                facetName = "commodi";
                                                                name = "Leslie Lebsack";
                                                                schemaArn = "nam";
                                                            }}),
                                                            add(new AttributeKey("nulla", "deserunt", "esse") {{
                                                                facetName = "vel";
                                                                name = "Frances Franey";
                                                                schemaArn = "sint";
                                                            }}),
                                                            add(new AttributeKey("hic", "necessitatibus", "asperiores") {{
                                                                facetName = "nemo";
                                                                name = "Monique Harvey";
                                                                schemaArn = "impedit";
                                                            }}),
                                                        }};
                                                        parentReference = new ObjectReference() {{
                                                            selector = "ex";
                                                        }};
                                                    }};
                                                    createObject = new BatchCreateObject(                new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("neque", "exercitationem", "itaque");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "et";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-05-26T04:28:20.312Z");
                                                                                            numberValue = "nulla";
                                                                                            stringValue = "distinctio";
                                                                                        }};) {{
                                                                            key = new AttributeKey("odio", "fugit", "alias") {{
                                                                                facetName = "iste";
                                                                                name = "Vivian Rodriguez";
                                                                                schemaArn = "dolorum";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "magni";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-12-08T11:32:42.651Z");
                                                                                numberValue = "quae";
                                                                                stringValue = "modi";
                                                                            }};
                                                                        }}),
                                                                    }},                 new org.openapis.openapi.models.shared.SchemaFacet[]{{
                                                                        add(new SchemaFacet() {{
                                                                            facetName = "quia";
                                                                            schemaArn = "quia";
                                                                        }}),
                                                                        add(new SchemaFacet() {{
                                                                            facetName = "nostrum";
                                                                            schemaArn = "omnis";
                                                                        }}),
                                                                        add(new SchemaFacet() {{
                                                                            facetName = "libero";
                                                                            schemaArn = "dicta";
                                                                        }}),
                                                                        add(new SchemaFacet() {{
                                                                            facetName = "id";
                                                                            schemaArn = "libero";
                                                                        }}),
                                                                    }}) {{
                                                        batchReferenceName = "neque";
                                                        linkName = "quo";
                                                        objectAttributeList = new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                            add(new AttributeKeyAndValue(                new AttributeKey("velit", "illo", "accusantium");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "vel";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-11-22T17:16:07.137Z");
                                                                                numberValue = "vero";
                                                                                stringValue = "excepturi";
                                                                            }};) {{
                                                                key = new AttributeKey("inventore", "facere", "libero") {{
                                                                    facetName = "quibusdam";
                                                                    name = "Christina Wolf";
                                                                    schemaArn = "quibusdam";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "architecto";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-07-13T18:14:43.574Z");
                                                                    numberValue = "porro";
                                                                    stringValue = "aliquam";
                                                                }};
                                                            }}),
                                                            add(new AttributeKeyAndValue(                new AttributeKey("dolor", "iusto", "sit");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "doloremque";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-05-12T12:10:59.574Z");
                                                                                numberValue = "recusandae";
                                                                                stringValue = "ea";
                                                                            }};) {{
                                                                key = new AttributeKey("iste", "itaque", "alias") {{
                                                                    facetName = "eum";
                                                                    name = "Leslie Metz DDS";
                                                                    schemaArn = "voluptatibus";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "nisi";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-04-10T19:32:47.130Z");
                                                                    numberValue = "laborum";
                                                                    stringValue = "non";
                                                                }};
                                                            }}),
                                                            add(new AttributeKeyAndValue(                new AttributeKey("corporis", "est", "error");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "esse";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-11-30T22:48:52.392Z");
                                                                                numberValue = "vero";
                                                                                stringValue = "consectetur";
                                                                            }};) {{
                                                                key = new AttributeKey("a", "voluptate", "ullam") {{
                                                                    facetName = "quidem";
                                                                    name = "Flora Schowalter";
                                                                    schemaArn = "deleniti";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "unde";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2021-01-14T18:43:36.668Z");
                                                                    numberValue = "impedit";
                                                                    stringValue = "ipsam";
                                                                }};
                                                            }}),
                                                        }};
                                                        parentReference = new ObjectReference() {{
                                                            selector = "vitae";
                                                        }};
                                                        schemaFacet = new org.openapis.openapi.models.shared.SchemaFacet[]{{
                                                            add(new SchemaFacet() {{
                                                                facetName = "dolorem";
                                                                schemaArn = "ad";
                                                            }}),
                                                        }};
                                                    }};
                                                    deleteObject = new BatchDeleteObject(                new ObjectReference() {{
                                                                        selector = "officia";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "fugiat";
                                                        }};
                                                    }};
                                                    detachFromIndex = new BatchDetachFromIndex(                new ObjectReference() {{
                                                                        selector = "sit";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "iusto";
                                                                    }};) {{
                                                        indexReference = new ObjectReference() {{
                                                            selector = "quos";
                                                        }};
                                                        targetReference = new ObjectReference() {{
                                                            selector = "placeat";
                                                        }};
                                                    }};
                                                    detachObject = new BatchDetachObject("aperiam",                 new ObjectReference() {{
                                                                        selector = "totam";
                                                                    }};) {{
                                                        batchReferenceName = "ipsa";
                                                        linkName = "voluptates";
                                                        parentReference = new ObjectReference() {{
                                                            selector = "inventore";
                                                        }};
                                                    }};
                                                    detachPolicy = new BatchDetachPolicy(                new ObjectReference() {{
                                                                        selector = "distinctio";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "voluptatem";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "dolore";
                                                        }};
                                                        policyReference = new ObjectReference() {{
                                                            selector = "eligendi";
                                                        }};
                                                    }};
                                                    detachTypedLink = new BatchDetachTypedLink(                new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                                        add(new AttributeNameAndValue("est",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "impedit";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2020-10-17T04:42:29.949Z");
                                                                                                            numberValue = "vero";
                                                                                                            stringValue = "odit";
                                                                                                        }};) {{
                                                                                            attributeName = "voluptas";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "quo";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-03-16T14:37:42.020Z");
                                                                                                numberValue = "fuga";
                                                                                                stringValue = "nostrum";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("minima",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "in";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-06-07T17:40:07.973Z");
                                                                                                            numberValue = "dolores";
                                                                                                            stringValue = "error";
                                                                                                        }};) {{
                                                                                            attributeName = "repellat";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "pariatur";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-07-23T22:01:25.539Z");
                                                                                                numberValue = "aperiam";
                                                                                                stringValue = "odio";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("optio",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "ex";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-08-01T21:46:48.262Z");
                                                                                                            numberValue = "officiis";
                                                                                                            stringValue = "placeat";
                                                                                                        }};) {{
                                                                                            attributeName = "veritatis";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "ducimus";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-02-18T14:55:56.571Z");
                                                                                                numberValue = "itaque";
                                                                                                stringValue = "similique";
                                                                                            }};
                                                                                        }}),
                                                                                    }},                 new ObjectReference() {{
                                                                                        selector = "quidem";
                                                                                    }};,                 new ObjectReference() {{
                                                                                        selector = "exercitationem";
                                                                                    }};,                 new TypedLinkSchemaAndFacetName("quam", "dolorem"););) {{
                                                        typedLinkSpecifier = new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                            add(new AttributeNameAndValue("corporis",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "error";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-04-13T22:13:24.007Z");
                                                                                                numberValue = "recusandae";
                                                                                                stringValue = "similique";
                                                                                            }};) {{
                                                                                attributeName = "eos";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "quibusdam";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-06-28T19:16:42.798Z");
                                                                                    numberValue = "odit";
                                                                                    stringValue = "explicabo";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("delectus",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "cupiditate";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-09-30T10:14:18.921Z");
                                                                                                numberValue = "numquam";
                                                                                                stringValue = "nesciunt";
                                                                                            }};) {{
                                                                                attributeName = "ut";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "quidem";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-11-23T05:12:24.210Z");
                                                                                    numberValue = "unde";
                                                                                    stringValue = "molestiae";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("qui",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "expedita";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2021-10-29T05:11:03.916Z");
                                                                                                numberValue = "minima";
                                                                                                stringValue = "placeat";
                                                                                            }};) {{
                                                                                attributeName = "at";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "officia";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-03-29T07:53:10.726Z");
                                                                                    numberValue = "necessitatibus";
                                                                                    stringValue = "corporis";
                                                                                }};
                                                                            }}),
                                                                            add(new AttributeNameAndValue("corporis",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "magnam";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2020-01-25T21:38:07.032Z");
                                                                                                numberValue = "tempore";
                                                                                                stringValue = "aperiam";
                                                                                            }};) {{
                                                                                attributeName = "enim";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "neque";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-03-16T07:33:51.366Z");
                                                                                    numberValue = "eum";
                                                                                    stringValue = "modi";
                                                                                }};
                                                                            }}),
                                                                        }},                 new ObjectReference() {{
                                                                            selector = "libero";
                                                                        }};,                 new ObjectReference() {{
                                                                            selector = "ratione";
                                                                        }};,                 new TypedLinkSchemaAndFacetName("labore", "totam");) {{
                                                            identityAttributeValues = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                add(new AttributeNameAndValue("corrupti",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "molestiae";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2021-03-27T22:23:24.313Z");
                                                                                    numberValue = "necessitatibus";
                                                                                    stringValue = "tempore";
                                                                                }};) {{
                                                                    attributeName = "esse";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "dolores";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-09-05T14:30:04.979Z");
                                                                        numberValue = "est";
                                                                        stringValue = "facere";
                                                                    }};
                                                                }}),
                                                                add(new AttributeNameAndValue("corporis",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "officiis";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2020-10-15T16:19:08.064Z");
                                                                                    numberValue = "at";
                                                                                    stringValue = "alias";
                                                                                }};) {{
                                                                    attributeName = "sint";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "ea";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-08-17T16:02:36.189Z");
                                                                        numberValue = "rerum";
                                                                        stringValue = "laudantium";
                                                                    }};
                                                                }}),
                                                            }};
                                                            sourceObjectReference = new ObjectReference() {{
                                                                selector = "quia";
                                                            }};
                                                            targetObjectReference = new ObjectReference() {{
                                                                selector = "quidem";
                                                            }};
                                                            typedLinkFacet = new TypedLinkSchemaAndFacetName("accusantium", "expedita") {{
                                                                schemaArn = "fuga";
                                                                typedLinkName = "repudiandae";
                                                            }};
                                                        }};
                                                    }};
                                                    removeFacetFromObject = new BatchRemoveFacetFromObject(                new ObjectReference() {{
                                                                        selector = "vero";
                                                                    }};,                 new SchemaFacet() {{
                                                                        facetName = "sequi";
                                                                        schemaArn = "repudiandae";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "modi";
                                                        }};
                                                        schemaFacet = new SchemaFacet() {{
                                                            facetName = "ipsa";
                                                            schemaArn = "sint";
                                                        }};
                                                    }};
                                                    updateLinkAttributes = new BatchUpdateLinkAttributes(                new org.openapis.openapi.models.shared.LinkAttributeUpdate[]{{
                                                                        add(new LinkAttributeUpdate() {{
                                                                            attributeAction = new LinkAttributeAction() {{
                                                                                attributeActionType = UpdateActionTypeEnum.DELETE;
                                                                                attributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "porro";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-07-05T13:39:32.205Z");
                                                                                    numberValue = "esse";
                                                                                    stringValue = "fugiat";
                                                                                }};
                                                                            }};
                                                                            attributeKey = new AttributeKey("illo", "ab", "incidunt") {{
                                                                                facetName = "ad";
                                                                                name = "Jill Wintheiser";
                                                                                schemaArn = "libero";
                                                                            }};
                                                                        }}),
                                                                    }},                 new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                                        add(new AttributeNameAndValue("reprehenderit",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "praesentium";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-01-01T01:40:36.755Z");
                                                                                                            numberValue = "quisquam";
                                                                                                            stringValue = "sequi";
                                                                                                        }};) {{
                                                                                            attributeName = "saepe";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "tempore";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-10-28T13:51:54.669Z");
                                                                                                numberValue = "reiciendis";
                                                                                                stringValue = "earum";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("quisquam",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "provident";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2021-02-27T03:28:54.764Z");
                                                                                                            numberValue = "consequatur";
                                                                                                            stringValue = "maxime";
                                                                                                        }};) {{
                                                                                            attributeName = "nihil";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "deleniti";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-09-17T01:25:37.017Z");
                                                                                                numberValue = "assumenda";
                                                                                                stringValue = "aliquam";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("rerum",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "dignissimos";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-02-16T01:13:48.306Z");
                                                                                                            numberValue = "similique";
                                                                                                            stringValue = "repellendus";
                                                                                                        }};) {{
                                                                                            attributeName = "aspernatur";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "nam";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2021-11-18T19:16:30.817Z");
                                                                                                numberValue = "provident";
                                                                                                stringValue = "repudiandae";
                                                                                            }};
                                                                                        }}),
                                                                                        add(new AttributeNameAndValue("voluptatem",                 new TypedAttributeValue() {{
                                                                                                            binaryValue = "ad";
                                                                                                            booleanValue = false;
                                                                                                            datetimeValue = OffsetDateTime.parse("2022-10-09T04:59:20.428Z");
                                                                                                            numberValue = "illum";
                                                                                                            stringValue = "praesentium";
                                                                                                        }};) {{
                                                                                            attributeName = "iure";
                                                                                            value = new TypedAttributeValue() {{
                                                                                                binaryValue = "dolorem";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2022-03-25T12:03:53.573Z");
                                                                                                numberValue = "commodi";
                                                                                                stringValue = "aut";
                                                                                            }};
                                                                                        }}),
                                                                                    }},                 new ObjectReference() {{
                                                                                        selector = "quidem";
                                                                                    }};,                 new ObjectReference() {{
                                                                                        selector = "cum";
                                                                                    }};,                 new TypedLinkSchemaAndFacetName("amet", "quasi"););) {{
                                                        attributeUpdates = new org.openapis.openapi.models.shared.LinkAttributeUpdate[]{{
                                                            add(new LinkAttributeUpdate() {{
                                                                attributeAction = new LinkAttributeAction() {{
                                                                    attributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                    attributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "earum";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-05-05T08:48:48.155Z");
                                                                        numberValue = "dolores";
                                                                        stringValue = "nam";
                                                                    }};
                                                                }};
                                                                attributeKey = new AttributeKey("quasi", "laboriosam", "pariatur") {{
                                                                    facetName = "dicta";
                                                                    name = "Ms. Kelley Rogahn";
                                                                    schemaArn = "veritatis";
                                                                }};
                                                            }}),
                                                            add(new LinkAttributeUpdate() {{
                                                                attributeAction = new LinkAttributeAction() {{
                                                                    attributeActionType = UpdateActionTypeEnum.DELETE;
                                                                    attributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "excepturi";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-04-07T10:05:07.368Z");
                                                                        numberValue = "aliquam";
                                                                        stringValue = "nostrum";
                                                                    }};
                                                                }};
                                                                attributeKey = new AttributeKey("totam", "molestias", "odio") {{
                                                                    facetName = "doloribus";
                                                                    name = "Kirk Haley";
                                                                    schemaArn = "quas";
                                                                }};
                                                            }}),
                                                            add(new LinkAttributeUpdate() {{
                                                                attributeAction = new LinkAttributeAction() {{
                                                                    attributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                    attributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "saepe";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-06-12T13:18:33.057Z");
                                                                        numberValue = "iste";
                                                                        stringValue = "assumenda";
                                                                    }};
                                                                }};
                                                                attributeKey = new AttributeKey("ipsum", "adipisci", "saepe") {{
                                                                    facetName = "tempore";
                                                                    name = "Lee Batz";
                                                                    schemaArn = "cum";
                                                                }};
                                                            }}),
                                                        }};
                                                        typedLinkSpecifier = new TypedLinkSpecifier(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                            add(new AttributeNameAndValue("neque",                 new TypedAttributeValue() {{
                                                                                                binaryValue = "iusto";
                                                                                                booleanValue = false;
                                                                                                datetimeValue = OffsetDateTime.parse("2021-12-15T19:28:43.232Z");
                                                                                                numberValue = "eligendi";
                                                                                                stringValue = "fugiat";
                                                                                            }};) {{
                                                                                attributeName = "debitis";
                                                                                value = new TypedAttributeValue() {{
                                                                                    binaryValue = "labore";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-08-22T17:59:10.804Z");
                                                                                    numberValue = "reprehenderit";
                                                                                    stringValue = "nostrum";
                                                                                }};
                                                                            }}),
                                                                        }},                 new ObjectReference() {{
                                                                            selector = "unde";
                                                                        }};,                 new ObjectReference() {{
                                                                            selector = "officiis";
                                                                        }};,                 new TypedLinkSchemaAndFacetName("ducimus", "dolor");) {{
                                                            identityAttributeValues = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                add(new AttributeNameAndValue("molestiae",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "eligendi";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-03-31T15:31:53.121Z");
                                                                                    numberValue = "magnam";
                                                                                    stringValue = "itaque";
                                                                                }};) {{
                                                                    attributeName = "doloremque";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "quis";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-04-10T11:16:06.933Z");
                                                                        numberValue = "architecto";
                                                                        stringValue = "cupiditate";
                                                                    }};
                                                                }}),
                                                                add(new AttributeNameAndValue("odit",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "pariatur";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-08-27T02:09:55.586Z");
                                                                                    numberValue = "ab";
                                                                                    stringValue = "velit";
                                                                                }};) {{
                                                                    attributeName = "sed";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "asperiores";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-11-01T22:41:35.458Z");
                                                                        numberValue = "facere";
                                                                        stringValue = "laudantium";
                                                                    }};
                                                                }}),
                                                                add(new AttributeNameAndValue("distinctio",                 new TypedAttributeValue() {{
                                                                                    binaryValue = "nisi";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-08-10T22:40:04.682Z");
                                                                                    numberValue = "libero";
                                                                                    stringValue = "minus";
                                                                                }};) {{
                                                                    attributeName = "facilis";
                                                                    value = new TypedAttributeValue() {{
                                                                        binaryValue = "tempore";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-01-09T04:56:37.970Z");
                                                                        numberValue = "quaerat";
                                                                        stringValue = "blanditiis";
                                                                    }};
                                                                }}),
                                                            }};
                                                            sourceObjectReference = new ObjectReference() {{
                                                                selector = "facere";
                                                            }};
                                                            targetObjectReference = new ObjectReference() {{
                                                                selector = "facilis";
                                                            }};
                                                            typedLinkFacet = new TypedLinkSchemaAndFacetName("voluptatibus", "voluptatibus") {{
                                                                schemaArn = "ipsum";
                                                                typedLinkName = "ad";
                                                            }};
                                                        }};
                                                    }};
                                                    updateObjectAttributes = new BatchUpdateObjectAttributes(                new org.openapis.openapi.models.shared.ObjectAttributeUpdate[]{{
                                                                        add(new ObjectAttributeUpdate() {{
                                                                            objectAttributeAction = new ObjectAttributeAction() {{
                                                                                objectAttributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                                objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "totam";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-12-20T19:24:32.195Z");
                                                                                    numberValue = "velit";
                                                                                    stringValue = "dolor";
                                                                                }};
                                                                            }};
                                                                            objectAttributeKey = new AttributeKey("minus", "esse", "voluptatem") {{
                                                                                facetName = "sunt";
                                                                                name = "Curtis McCullough PhD";
                                                                                schemaArn = "labore";
                                                                            }};
                                                                        }}),
                                                                        add(new ObjectAttributeUpdate() {{
                                                                            objectAttributeAction = new ObjectAttributeAction() {{
                                                                                objectAttributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                                objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "rerum";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-12-14T22:06:13.266Z");
                                                                                    numberValue = "dignissimos";
                                                                                    stringValue = "repellat";
                                                                                }};
                                                                            }};
                                                                            objectAttributeKey = new AttributeKey("soluta", "natus", "temporibus") {{
                                                                                facetName = "velit";
                                                                                name = "Rene Feeney";
                                                                                schemaArn = "consectetur";
                                                                            }};
                                                                        }}),
                                                                        add(new ObjectAttributeUpdate() {{
                                                                            objectAttributeAction = new ObjectAttributeAction() {{
                                                                                objectAttributeActionType = UpdateActionTypeEnum.DELETE;
                                                                                objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "amet";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-08-07T07:49:22.459Z");
                                                                                    numberValue = "quo";
                                                                                    stringValue = "itaque";
                                                                                }};
                                                                            }};
                                                                            objectAttributeKey = new AttributeKey("explicabo", "explicabo", "exercitationem") {{
                                                                                facetName = "illum";
                                                                                name = "Cody Terry";
                                                                                schemaArn = "repellat";
                                                                            }};
                                                                        }}),
                                                                        add(new ObjectAttributeUpdate() {{
                                                                            objectAttributeAction = new ObjectAttributeAction() {{
                                                                                objectAttributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                                                objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                                    binaryValue = "non";
                                                                                    booleanValue = false;
                                                                                    datetimeValue = OffsetDateTime.parse("2022-12-05T10:40:26.460Z");
                                                                                    numberValue = "hic";
                                                                                    stringValue = "deserunt";
                                                                                }};
                                                                            }};
                                                                            objectAttributeKey = new AttributeKey("repudiandae", "modi", "in") {{
                                                                                facetName = "delectus";
                                                                                name = "Beulah Kirlin";
                                                                                schemaArn = "numquam";
                                                                            }};
                                                                        }}),
                                                                    }},                 new ObjectReference() {{
                                                                        selector = "explicabo";
                                                                    }};) {{
                                                        attributeUpdates = new org.openapis.openapi.models.shared.ObjectAttributeUpdate[]{{
                                                            add(new ObjectAttributeUpdate() {{
                                                                objectAttributeAction = new ObjectAttributeAction() {{
                                                                    objectAttributeActionType = UpdateActionTypeEnum.DELETE;
                                                                    objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                                        binaryValue = "doloremque";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-07-24T17:17:44.726Z");
                                                                        numberValue = "amet";
                                                                        stringValue = "provident";
                                                                    }};
                                                                }};
                                                                objectAttributeKey = new AttributeKey("facilis", "corrupti", "aperiam") {{
                                                                    facetName = "dolorum";
                                                                    name = "Mrs. Terrence Waelchi";
                                                                    schemaArn = "itaque";
                                                                }};
                                                            }}),
                                                        }};
                                                        objectReference = new ObjectReference() {{
                                                            selector = "sint";
                                                        }};
                                                    }};
                                                }}),
                                                add(new BatchWriteOperation() {{
                                                    addFacetToObject = new BatchAddFacetToObject(                new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("enim", "optio", "rem");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "perferendis";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2021-01-25T01:11:52.226Z");
                                                                                            numberValue = "a";
                                                                                            stringValue = "iste";
                                                                                        }};) {{
                                                                            key = new AttributeKey("quisquam", "dicta", "voluptatibus") {{
                                                                                facetName = "rerum";
                                                                                name = "Pat Fritsch";
                                                                                schemaArn = "ullam";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "eligendi";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-02-11T23:12:30.713Z");
                                                                                numberValue = "architecto";
                                                                                stringValue = "architecto";
                                                                            }};
                                                                        }}),
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("totam", "reiciendis", "ab");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "sint";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-07-17T16:18:24.838Z");
                                                                                            numberValue = "iure";
                                                                                            stringValue = "odio";
                                                                                        }};) {{
                                                                            key = new AttributeKey("modi", "consequuntur", "assumenda") {{
                                                                                facetName = "dicta";
                                                                                name = "Dan Grimes";
                                                                                schemaArn = "maxime";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "vero";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2020-09-05T18:53:26.263Z");
                                                                                numberValue = "porro";
                                                                                stringValue = "accusamus";
                                                                            }};
                                                                        }}),
                                                                    }},                 new ObjectReference() {{
                                                                        selector = "nesciunt";
                                                                    }};,                 new SchemaFacet() {{
                                                                        facetName = "debitis";
                                                                        schemaArn = "vel";
                                                                    }};) {{
                                                        objectAttributeList = new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                            add(new AttributeKeyAndValue(                new AttributeKey("dignissimos", "fugiat", "nostrum");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "molestiae";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-01-12T05:45:23.430Z");
                                                                                numberValue = "ab";
                                                                                stringValue = "modi";
                                                                            }};) {{
                                                                key = new AttributeKey("minima", "libero", "magnam") {{
                                                                    facetName = "rem";
                                                                    name = "Kathy Leuschke";
                                                                    schemaArn = "similique";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "sit";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-07-28T00:11:01.662Z");
                                                                    numberValue = "nesciunt";
                                                                    stringValue = "mollitia";
                                                                }};
                                                            }}),
                                                            add(new AttributeKeyAndValue(                new AttributeKey("distinctio", "iusto", "quas");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "et";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-07-17T15:04:57.362Z");
                                                                                numberValue = "autem";
                                                                                stringValue = "fuga";
                                                                            }};) {{
                                                                key = new AttributeKey("possimus", "voluptate", "consectetur") {{
                                                                    facetName = "aut";
                                                                    name = "Olive Kub";
                                                                    schemaArn = "dolorum";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "nesciunt";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-01-26T17:47:50.539Z");
                                                                    numberValue = "minus";
                                                                    stringValue = "sunt";
                                                                }};
                                                            }}),
                                                            add(new AttributeKeyAndValue(                new AttributeKey("voluptatem", "alias", "eveniet");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "hic";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-09-21T09:52:12.575Z");
                                                                                numberValue = "qui";
                                                                                stringValue = "qui";
                                                                            }};) {{
                                                                key = new AttributeKey("quae", "eaque", "saepe") {{
                                                                    facetName = "alias";
                                                                    name = "David Lubowitz";
                                                                    schemaArn = "veritatis";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "delectus";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2021-04-13T22:16:25.275Z");
                                                                    numberValue = "officia";
                                                                    stringValue = "sed";
                                                                }};
                                                            }}),
                                                            add(new AttributeKeyAndValue(                new AttributeKey("impedit", "ducimus", "odit");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "velit";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2020-01-04T06:43:39.012Z");
                                                                                numberValue = "nulla";
                                                                                stringValue = "laborum";
                                                                            }};) {{
                                                                key = new AttributeKey("voluptatibus", "molestias", "officia") {{
                                                                    facetName = "necessitatibus";
                                                                    name = "Nicholas Brekke";
                                                                    schemaArn = "optio";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "libero";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-08-13T05:20:10.013Z");
                                                                    numberValue = "aliquid";
                                                                    stringValue = "ea";
                                                                }};
                                                            }}),
                                                        }};
                                                        objectReference = new ObjectReference() {{
                                                            selector = "natus";
                                                        }};
                                                        schemaFacet = new SchemaFacet() {{
                                                            facetName = "accusamus";
                                                            schemaArn = "doloremque";
                                                        }};
                                                    }};
                                                    attachObject = new BatchAttachObject(                new ObjectReference() {{
                                                                        selector = "consequuntur";
                                                                    }};, "officia",                 new ObjectReference() {{
                                                                        selector = "reprehenderit";
                                                                    }};) {{
                                                        childReference = new ObjectReference() {{
                                                            selector = "neque";
                                                        }};
                                                        linkName = "corporis";
                                                        parentReference = new ObjectReference() {{
                                                            selector = "voluptas";
                                                        }};
                                                    }};
                                                    attachPolicy = new BatchAttachPolicy(                new ObjectReference() {{
                                                                        selector = "ipsa";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "rem";
                                                                    }};) {{
                                                        objectReference = new ObjectReference() {{
                                                            selector = "distinctio";
                                                        }};
                                                        policyReference = new ObjectReference() {{
                                                            selector = "eius";
                                                        }};
                                                    }};
                                                    attachToIndex = new BatchAttachToIndex(                new ObjectReference() {{
                                                                        selector = "veniam";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "saepe";
                                                                    }};) {{
                                                        indexReference = new ObjectReference() {{
                                                            selector = "maiores";
                                                        }};
                                                        targetReference = new ObjectReference() {{
                                                            selector = "accusantium";
                                                        }};
                                                    }};
                                                    attachTypedLink = new BatchAttachTypedLink(                new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                                        add(new AttributeNameAndValue("commodi",                 new TypedAttributeValue() {{
                                                                                            binaryValue = "sapiente";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-09-02T09:20:25.526Z");
                                                                                            numberValue = "debitis";
                                                                                            stringValue = "officia";
                                                                                        }};) {{
                                                                            attributeName = "ipsam";
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "cupiditate";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-12-29T17:44:28.341Z");
                                                                                numberValue = "quidem";
                                                                                stringValue = "nesciunt";
                                                                            }};
                                                                        }}),
                                                                    }},                 new ObjectReference() {{
                                                                        selector = "sint";
                                                                    }};,                 new ObjectReference() {{
                                                                        selector = "ut";
                                                                    }};,                 new TypedLinkSchemaAndFacetName("numquam", "tenetur");) {{
                                                        attributes = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                            add(new AttributeNameAndValue("delectus",                 new TypedAttributeValue() {{
                                                                                binaryValue = "velit";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-10-19T14:23:55.205Z");
                                                                                numberValue = "similique";
                                                                                stringValue = "illo";
                                                                            }};) {{
                                                                attributeName = "facere";
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "aliquam";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2021-01-12T02:47:10.751Z");
                                                                    numberValue = "fugiat";
                                                                    stringValue = "est";
                                                                }};
                                                            }}),
                                                        }};
                                                        sourceObjectReference = new ObjectReference() {{
                                                            selector = "repellat";
                                                        }};
                                                        targetObjectReference = new ObjectReference() {{
                                                            selector = "nemo";
                                                        }};
                                                        typedLinkFacet = new TypedLinkSchemaAndFacetName("unde", "incidunt") {{
                                                            schemaArn = "doloribus";
                                                            typedLinkName = "possimus";
                                                        }};
                                                    }};
                                                    createIndex = new BatchCreateIndex(false,                 new org.openapis.openapi.models.shared.AttributeKey[]{{
                                                                        add(new AttributeKey("modi", "veniam", "quod") {{
                                                                            facetName = "impedit";
                                                                            name = "Renee Nader";
                                                                            schemaArn = "deserunt";
                                                                        }}),
                                                                        add(new AttributeKey("architecto", "alias", "culpa") {{
                                                                            facetName = "itaque";
                                                                            name = "Devin Halvorson";
                                                                            schemaArn = "officiis";
                                                                        }}),
                                                                        add(new AttributeKey("ullam", "architecto", "accusantium") {{
                                                                            facetName = "ipsa";
                                                                            name = "Ms. Santiago Crist";
                                                                            schemaArn = "debitis";
                                                                        }}),
                                                                    }}) {{
                                                        batchReferenceName = "adipisci";
                                                        isUnique = false;
                                                        linkName = "libero";
                                                        orderedIndexedAttributeList = new org.openapis.openapi.models.shared.AttributeKey[]{{
                                                            add(new AttributeKey("dolor", "ducimus", "fuga") {{
                                                                facetName = "minima";
                                                                name = "Dr. Alexandra Bernhard";
                                                                schemaArn = "quisquam";
                                                            }}),
                                                            add(new AttributeKey("praesentium", "dolor", "exercitationem") {{
                                                                facetName = "minima";
                                                                name = "Lois Hyatt";
                                                                schemaArn = "adipisci";
                                                            }}),
                                                        }};
                                                        parentReference = new ObjectReference() {{
                                                            selector = "expedita";
                                                        }};
                                                    }};
                                                    createObject = new BatchCreateObject(                new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("maxime", "consequatur", "eaque");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "architecto";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2021-06-08T05:02:10.598Z");
                                                                                            numberValue = "blanditiis";
                                                                                            stringValue = "quae";
                                                                                        }};) {{
                                                                            key = new AttributeKey("quasi", "deserunt", "quod") {{
                                                                                facetName = "magnam";
                                                                                name = "Georgia Lowe";
                                                                                schemaArn = "impedit";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "laboriosam";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-12-20T11:24:22.596Z");
                                                                                numberValue = "facere";
                                                                                stringValue = "necessitatibus";
                                                                            }};
                                                                        }}),
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("earum", "doloribus", "velit");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "eius";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-07-22T00:15:01.648Z");
                                                                                            numberValue = "eligendi";
                                                                                            stringValue = "quasi";
                                                                                        }};) {{
                                                                            key = new AttributeKey("maiores", "laudantium", "maiores") {{
                                                                                facetName = "magni";
                                                                                name = "Louis Treutel V";
                                                                                schemaArn = "a";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "alias";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2021-06-06T21:58:33.426Z");
                                                                                numberValue = "dicta";
                                                                                stringValue = "suscipit";
                                                                            }};
                                                                        }}),
                                                                        add(new AttributeKeyAndValue(                new AttributeKey("accusantium", "id", "laboriosam");,                 new TypedAttributeValue() {{
                                                                                            binaryValue = "ex";
                                                                                            booleanValue = false;
                                                                                            datetimeValue = OffsetDateTime.parse("2022-10-30T08:52:41.857Z");
                                                                                            numberValue = "ullam";
                                                                                            stringValue = "quae";
                                                                                        }};) {{
                                                                            key = new AttributeKey("incidunt", "dicta", "odit") {{
                                                                                facetName = "neque";
                                                                                name = "Andy Bashirian";
                                                                                schemaArn = "beatae";
                                                                            }};
                                                                            value = new TypedAttributeValue() {{
                                                                                binaryValue = "corporis";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-12-28T14:26:49.342Z");
                                                                                numberValue = "error";
                                                                                stringValue = "vel";
                                                                            }};
                                                                        }}),
                                                                    }},                 new org.openapis.openapi.models.shared.SchemaFacet[]{{
                                                                        add(new SchemaFacet() {{
                                                                            facetName = "incidunt";
                                                                            schemaArn = "quam";
                                                                        }}),
                                                                        add(new SchemaFacet() {{
                                                                            facetName = "magni";
                                                                            schemaArn = "deserunt";
                                                                        }}),
                                                                        add(new SchemaFacet() {{
                                                                            facetName = "delectus";
                                                                            schemaArn = "omnis";
                                                                        }}),
                                                                    }}) {{
                                                        batchReferenceName = "perferendis";
                                                        linkName = "veritatis";
                                                        objectAttributeList = new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                                            add(new AttributeKeyAndValue(                new AttributeKey("doloribus", "facilis", "quidem");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "itaque";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-05-26T08:59:20.911Z");
                                                                                numberValue = "modi";
                                                                                stringValue = "perspiciatis";
                                                                            }};) {{
                                                                key = new AttributeKey("magnam", "dignissimos", "laboriosam") {{
                                                                    facetName = "cumque";
                                                                    name = "Doreen Schmeler";
                                                                    schemaArn = "velit";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "sed";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-05-20T19:36:03.657Z");
                                                                    numberValue = "provident";
                                                                    stringValue = "cum";
                                                                }};
                                                            }}),
                                                            add(new AttributeKeyAndValue(                new AttributeKey("illum", "facilis", "non");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "mollitia";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2020-03-20T20:47:10.956Z");
                                                                                numberValue = "distinctio";
                                                                                stringValue = "pariatur";
                                                                            }};) {{
                                                                key = new AttributeKey("quod", "id", "saepe") {{
                                                                    facetName = "hic";
                                                                    name = "Brandon Reinger";
                                                                    schemaArn = "recusandae";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "autem";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2022-05-28T02:31:04.579Z");
                                                                    numberValue = "illum";
                                                                    stringValue = "nemo";
                                                                }};
                                                            }}),
                                                            add(new AttributeKeyAndValue(                new AttributeKey("labore", "quo", "perferendis");,                 new TypedAttributeValue() {{
                                                                                binaryValue = "fugit";
                                                                                booleanValue = false;
                                                                                datetimeValue = OffsetDateTime.parse("2022-09-13T00:32:01.100Z");
                                                                                numberValue = "quaerat";
                                                                                stringValue = "eligendi";
                                                                            }};) {{
                                                                key = new AttributeKey("ipsam", "alias", "suscipit") {{
                                                                    facetName = "ad";
                                                                    name = "Pablo Veum";
                                                                    schemaArn = "maxime";
                                                                }};
                                                                value = new TypedAttributeValue() {{
                                                                    binaryValue = "deserunt";
                                                                    booleanValue = false;
                                                                    datetimeValue = OffsetDateTime.parse("2021-08-27T18:58:54.647Z");
                                                                    numberValue = "est";
                                                                    stringValue = "occaecati";
                                                                }};
                                                            }}),
                                                        }};
                                                        parentReference = new ObjectReference() {{
                                                            selector = "hic";
                                                        }};
                                                        schemaFacet = new org.openapis.openapi.models.shared.SchemaFacet[]{{
                                                            add(new SchemaFacet() {{
                                                                facetName = "officiis";
                                                                schemaArn = "unde";
                                                            }}),
                                                            add(new SchemaFacet() {{
                                                                facetName = "nulla";
                                                                schemaArn = "error";
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

Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.

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

            CreateFacetRequest req = new CreateFacetRequest(                new CreateFacetRequestBody("reiciendis", CreateFacetRequestBodyObjectTypeEnum.POLICY) {{
                                attributes = new org.openapis.openapi.models.shared.FacetAttribute[]{{
                                    add(new FacetAttribute("voluptate") {{
                                        attributeDefinition = new FacetAttributeDefinition(FacetAttributeTypeEnum.STRING) {{
                                            defaultValue = new TypedAttributeValue() {{
                                                binaryValue = "repudiandae";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-05-20T18:46:17.003Z");
                                                numberValue = "ab";
                                                stringValue = "officiis";
                                            }};
                                            isImmutable = false;
                                            rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                put("rerum", new Rule() {{
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("ab", "ad");
                                                        put("blanditiis", "porro");
                                                        put("labore", "impedit");
                                                        put("ut", "earum");
                                                    }};
                                                    type = RuleTypeEnum.NUMBER_COMPARISON;
                                                }});
                                                put("numquam", new Rule() {{
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("cupiditate", "occaecati");
                                                        put("itaque", "fuga");
                                                    }};
                                                    type = RuleTypeEnum.BINARY_LENGTH;
                                                }});
                                            }};
                                            type = FacetAttributeTypeEnum.BINARY;
                                        }};
                                        attributeReference = new FacetAttributeReference("ipsa", "eveniet") {{
                                            targetAttributeName = "explicabo";
                                            targetFacetName = "suscipit";
                                        }};
                                        name = "Mr. Robin Dibbert";
                                        requiredBehavior = RequiredAttributeBehaviorEnum.NOT_REQUIRED;
                                    }}),
                                    add(new FacetAttribute("amet") {{
                                        attributeDefinition = new FacetAttributeDefinition(FacetAttributeTypeEnum.DATETIME) {{
                                            defaultValue = new TypedAttributeValue() {{
                                                binaryValue = "deleniti";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-10-25T12:18:27.611Z");
                                                numberValue = "expedita";
                                                stringValue = "quibusdam";
                                            }};
                                            isImmutable = false;
                                            rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                put("maiores", new Rule() {{
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("in", "culpa");
                                                        put("doloremque", "fuga");
                                                        put("dicta", "architecto");
                                                    }};
                                                    type = RuleTypeEnum.NUMBER_COMPARISON;
                                                }});
                                                put("eligendi", new Rule() {{
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("dignissimos", "fugit");
                                                        put("ratione", "possimus");
                                                        put("quaerat", "aut");
                                                        put("natus", "esse");
                                                    }};
                                                    type = RuleTypeEnum.STRING_LENGTH;
                                                }});
                                                put("deserunt", new Rule() {{
                                                    parameters = new java.util.HashMap<String, String>() {{
                                                        put("ipsa", "debitis");
                                                    }};
                                                    type = RuleTypeEnum.STRING_FROM_SET;
                                                }});
                                            }};
                                            type = FacetAttributeTypeEnum.NUMBER;
                                        }};
                                        attributeReference = new FacetAttributeReference("ipsam", "libero") {{
                                            targetAttributeName = "ducimus";
                                            targetFacetName = "consequuntur";
                                        }};
                                        name = "Belinda Cartwright";
                                        requiredBehavior = RequiredAttributeBehaviorEnum.REQUIRED_ALWAYS;
                                    }}),
                                }};
                            }};, "consequatur") {{
                xAmzAlgorithm = "fugiat";
                xAmzContentSha256 = "voluptatum";
                xAmzCredential = "velit";
                xAmzDate = "hic";
                xAmzSecurityToken = "ullam";
                xAmzSignature = "deserunt";
                xAmzSignedHeaders = "itaque";
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

Creates an index object. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_indexing.html">Indexing</a> for more information.

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
                .setSecurity(new Security("distinctio") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateIndexRequest req = new CreateIndexRequest(                new CreateIndexRequestBody(false,                 new org.openapis.openapi.models.shared.AttributeKey[]{{
                                                add(new AttributeKey("optio", "quasi", "repellat") {{
                                                    facetName = "dignissimos";
                                                    name = "Mr. Tracy Shields";
                                                    schemaArn = "deleniti";
                                                }}),
                                                add(new AttributeKey("illum", "porro", "quaerat") {{
                                                    facetName = "atque";
                                                    name = "Erika Farrell III";
                                                    schemaArn = "delectus";
                                                }}),
                                            }}) {{
                                linkName = "magni";
                                parentReference = new CreateIndexRequestBodyParentReference() {{
                                    selector = "cumque";
                                }};;
                            }};, "quos") {{
                xAmzAlgorithm = "in";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "maxime";
                xAmzDate = "sed";
                xAmzSecurityToken = "minus";
                xAmzSignature = "consequuntur";
                xAmzSignedHeaders = "possimus";
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
                .setSecurity(new Security("delectus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateObjectRequest req = new CreateObjectRequest(                new CreateObjectRequestBody(                new org.openapis.openapi.models.shared.SchemaFacet[]{{
                                                add(new SchemaFacet() {{
                                                    facetName = "aliquam";
                                                    schemaArn = "eligendi";
                                                }}),
                                                add(new SchemaFacet() {{
                                                    facetName = "hic";
                                                    schemaArn = "quo";
                                                }}),
                                                add(new SchemaFacet() {{
                                                    facetName = "illo";
                                                    schemaArn = "nobis";
                                                }}),
                                            }}) {{
                                linkName = "esse";
                                objectAttributeList = new org.openapis.openapi.models.shared.AttributeKeyAndValue[]{{
                                    add(new AttributeKeyAndValue(                new AttributeKey("repellendus", "nam", "ab");,                 new TypedAttributeValue() {{
                                                        binaryValue = "magnam";
                                                        booleanValue = false;
                                                        datetimeValue = OffsetDateTime.parse("2020-11-15T09:20:11.425Z");
                                                        numberValue = "autem";
                                                        stringValue = "tempore";
                                                    }};) {{
                                        key = new AttributeKey("maiores", "nam", "architecto") {{
                                            facetName = "explicabo";
                                            name = "Linda Wisozk";
                                            schemaArn = "vitae";
                                        }};
                                        value = new TypedAttributeValue() {{
                                            binaryValue = "rerum";
                                            booleanValue = false;
                                            datetimeValue = OffsetDateTime.parse("2022-06-21T21:58:15.396Z");
                                            numberValue = "dolorem";
                                            stringValue = "hic";
                                        }};
                                    }}),
                                    add(new AttributeKeyAndValue(                new AttributeKey("voluptatem", "temporibus", "id");,                 new TypedAttributeValue() {{
                                                        binaryValue = "quae";
                                                        booleanValue = false;
                                                        datetimeValue = OffsetDateTime.parse("2022-01-17T15:26:53.853Z");
                                                        numberValue = "minus";
                                                        stringValue = "sed";
                                                    }};) {{
                                        key = new AttributeKey("natus", "deleniti", "necessitatibus") {{
                                            facetName = "recusandae";
                                            name = "Sandy Hirthe";
                                            schemaArn = "excepturi";
                                        }};
                                        value = new TypedAttributeValue() {{
                                            binaryValue = "aspernatur";
                                            booleanValue = false;
                                            datetimeValue = OffsetDateTime.parse("2022-04-30T21:03:41.157Z");
                                            numberValue = "vero";
                                            stringValue = "eos";
                                        }};
                                    }}),
                                }};
                                parentReference = new CreateObjectRequestBodyParentReference() {{
                                    selector = "nam";
                                }};;
                            }};, "quia") {{
                xAmzAlgorithm = "iusto";
                xAmzContentSha256 = "ab";
                xAmzCredential = "deserunt";
                xAmzDate = "sed";
                xAmzSecurityToken = "blanditiis";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "placeat";
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
                .setSecurity(new Security("ullam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSchemaRequest req = new CreateSchemaRequest(                new CreateSchemaRequestBody("molestiae");) {{
                xAmzAlgorithm = "itaque";
                xAmzContentSha256 = "rem";
                xAmzCredential = "nemo";
                xAmzDate = "non";
                xAmzSecurityToken = "recusandae";
                xAmzSignature = "omnis";
                xAmzSignedHeaders = "ipsa";
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

Creates a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
                .setSecurity(new Security("aliquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateTypedLinkFacetRequest req = new CreateTypedLinkFacetRequest(                new CreateTypedLinkFacetRequestBody(                new CreateTypedLinkFacetRequestBodyFacet() {{
                                                attributes = new org.openapis.openapi.models.shared.TypedLinkAttributeDefinition[]{{
                                                    add(new TypedLinkAttributeDefinition("maiores", RequiredAttributeBehaviorEnum.REQUIRED_ALWAYS, FacetAttributeTypeEnum.STRING) {{
                                                        defaultValue = new TypedAttributeValue() {{
                                                            binaryValue = "occaecati";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-06-29T04:51:31.510Z");
                                                            numberValue = "consequuntur";
                                                            stringValue = "consequuntur";
                                                        }};
                                                        isImmutable = false;
                                                        name = "Tonya Hilpert";
                                                        requiredBehavior = RequiredAttributeBehaviorEnum.REQUIRED_ALWAYS;
                                                        rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                            put("explicabo", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("doloremque", "odio");
                                                                    put("sit", "voluptatum");
                                                                }};
                                                                type = RuleTypeEnum.NUMBER_COMPARISON;
                                                            }});
                                                            put("delectus", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("dolorum", "libero");
                                                                    put("ratione", "molestiae");
                                                                }};
                                                                type = RuleTypeEnum.STRING_LENGTH;
                                                            }});
                                                        }};
                                                        type = FacetAttributeTypeEnum.DATETIME;
                                                    }}),
                                                }};
                                                identityAttributeOrder = new String[]{{
                                                    add("consequuntur"),
                                                }};
                                                name = "Jean Mayert";
                                            }};);, "quidem") {{
                xAmzAlgorithm = "exercitationem";
                xAmzContentSha256 = "veniam";
                xAmzCredential = "modi";
                xAmzDate = "quasi";
                xAmzSecurityToken = "quae";
                xAmzSignature = "similique";
                xAmzSignedHeaders = "possimus";
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
                .setSecurity(new Security("quo") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDirectoryRequest req = new DeleteDirectoryRequest("suscipit") {{
                xAmzAlgorithm = "ex";
                xAmzContentSha256 = "sint";
                xAmzCredential = "est";
                xAmzDate = "doloribus";
                xAmzSecurityToken = "provident";
                xAmzSignature = "alias";
                xAmzSignedHeaders = "deserunt";
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
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteFacetRequest req = new DeleteFacetRequest(                new DeleteFacetRequestBody("autem");, "quo") {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "maxime";
                xAmzCredential = "facere";
                xAmzDate = "impedit";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "deleniti";
                xAmzSignedHeaders = "quasi";
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

Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted.

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
                .setSecurity(new Security("maiores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteObjectRequest req = new DeleteObjectRequest(                new DeleteObjectRequestBody(                new DeleteObjectRequestBodyObjectReference() {{
                                                selector = "voluptatem";
                                            }};);, "aliquid") {{
                xAmzAlgorithm = "laudantium";
                xAmzContentSha256 = "unde";
                xAmzCredential = "corrupti";
                xAmzDate = "quae";
                xAmzSecurityToken = "facere";
                xAmzSignature = "ea";
                xAmzSignedHeaders = "libero";
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
                .setSecurity(new Security("nam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSchemaRequest req = new DeleteSchemaRequest("amet") {{
                xAmzAlgorithm = "adipisci";
                xAmzContentSha256 = "minus";
                xAmzCredential = "hic";
                xAmzDate = "similique";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "labore";
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

Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
                .setSecurity(new Security("laudantium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteTypedLinkFacetRequest req = new DeleteTypedLinkFacetRequest(                new DeleteTypedLinkFacetRequestBody("cumque");, "adipisci") {{
                xAmzAlgorithm = "veritatis";
                xAmzContentSha256 = "nam";
                xAmzCredential = "voluptatibus";
                xAmzDate = "magnam";
                xAmzSecurityToken = "aperiam";
                xAmzSignature = "ducimus";
                xAmzSignedHeaders = "itaque";
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
                .setSecurity(new Security("necessitatibus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetachFromIndexRequest req = new DetachFromIndexRequest(                new DetachFromIndexRequestBody(                new DetachFromIndexRequestBodyIndexReference() {{
                                                selector = "numquam";
                                            }};,                 new DetachFromIndexRequestBodyTargetReference() {{
                                                selector = "doloribus";
                                            }};);, "eligendi") {{
                xAmzAlgorithm = "sapiente";
                xAmzContentSha256 = "alias";
                xAmzCredential = "impedit";
                xAmzDate = "numquam";
                xAmzSecurityToken = "aspernatur";
                xAmzSignature = "nobis";
                xAmzSignedHeaders = "nihil";
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
                .setSecurity(new Security("voluptatum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetachObjectRequest req = new DetachObjectRequest(                new DetachObjectRequestBody("reiciendis",                 new DetachObjectRequestBodyParentReference() {{
                                                selector = "vitae";
                                            }};);, "ullam") {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "consequuntur";
                xAmzCredential = "voluptas";
                xAmzDate = "ratione";
                xAmzSecurityToken = "excepturi";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "est";
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
                .setSecurity(new Security("perferendis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetachPolicyRequest req = new DetachPolicyRequest(                new DetachPolicyRequestBody(                new DetachPolicyRequestBodyObjectReference() {{
                                                selector = "quibusdam";
                                            }};,                 new DetachPolicyRequestBodyPolicyReference() {{
                                                selector = "impedit";
                                            }};);, "ducimus") {{
                xAmzAlgorithm = "nisi";
                xAmzContentSha256 = "nisi";
                xAmzCredential = "dolor";
                xAmzDate = "fugit";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "maxime";
                xAmzSignedHeaders = "maxime";
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

Detaches a typed link from a specified source and target object. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
                .setSecurity(new Security("expedita") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DetachTypedLinkRequest req = new DetachTypedLinkRequest(                new DetachTypedLinkRequestBody(                new DetachTypedLinkRequestBodyTypedLinkSpecifier() {{
                                                identityAttributeValues = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                    add(new AttributeNameAndValue("consequuntur",                 new TypedAttributeValue() {{
                                                                        binaryValue = "repellendus";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-10-30T04:54:37.407Z");
                                                                        numberValue = "enim";
                                                                        stringValue = "aspernatur";
                                                                    }};) {{
                                                        attributeName = "ea";
                                                        value = new TypedAttributeValue() {{
                                                            binaryValue = "impedit";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2021-06-23T12:33:28.750Z");
                                                            numberValue = "est";
                                                            stringValue = "inventore";
                                                        }};
                                                    }}),
                                                }};
                                                sourceObjectReference = new ObjectReference() {{
                                                    selector = "perspiciatis";
                                                }};;
                                                targetObjectReference = new ObjectReference() {{
                                                    selector = "magni";
                                                }};;
                                                typedLinkFacet = new TypedLinkSchemaAndFacetName("odio", "alias");;
                                            }};);, "quidem") {{
                xAmzAlgorithm = "deleniti";
                xAmzContentSha256 = "possimus";
                xAmzCredential = "ipsam";
                xAmzDate = "odio";
                xAmzSecurityToken = "fugit";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "at";
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
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DisableDirectoryRequest req = new DisableDirectoryRequest("praesentium") {{
                xAmzAlgorithm = "sint";
                xAmzContentSha256 = "exercitationem";
                xAmzCredential = "cum";
                xAmzDate = "voluptatum";
                xAmzSecurityToken = "facilis";
                xAmzSignature = "placeat";
                xAmzSignedHeaders = "reiciendis";
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
                .setSecurity(new Security("dolores") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            EnableDirectoryRequest req = new EnableDirectoryRequest("dolore") {{
                xAmzAlgorithm = "pariatur";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "cupiditate";
                xAmzDate = "nemo";
                xAmzSecurityToken = "natus";
                xAmzSignature = "nisi";
                xAmzSignedHeaders = "provident";
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
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAppliedSchemaVersionRequest req = new GetAppliedSchemaVersionRequest(                new GetAppliedSchemaVersionRequestBody("dolor");) {{
                xAmzAlgorithm = "nostrum";
                xAmzContentSha256 = "qui";
                xAmzCredential = "tenetur";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "velit";
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
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDirectoryRequest req = new GetDirectoryRequest("cupiditate") {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "numquam";
                xAmzCredential = "fugiat";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "quas";
                xAmzSignature = "repellendus";
                xAmzSignedHeaders = "saepe";
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
                .setSecurity(new Security("amet") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFacetRequest req = new GetFacetRequest(                new GetFacetRequestBody("distinctio");, "vel") {{
                xAmzAlgorithm = "necessitatibus";
                xAmzContentSha256 = "iste";
                xAmzCredential = "nesciunt";
                xAmzDate = "corrupti";
                xAmzSecurityToken = "cupiditate";
                xAmzSignature = "voluptatibus";
                xAmzSignedHeaders = "ullam";
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
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLinkAttributesRequest req = new GetLinkAttributesRequest(                new GetLinkAttributesRequestBody(                new String[]{{
                                                add("cum"),
                                                add("in"),
                                                add("delectus"),
                                            }},                 new GetLinkAttributesRequestBodyTypedLinkSpecifier() {{
                                                identityAttributeValues = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                    add(new AttributeNameAndValue("qui",                 new TypedAttributeValue() {{
                                                                        binaryValue = "praesentium";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-06-25T12:24:15.391Z");
                                                                        numberValue = "qui";
                                                                        stringValue = "deserunt";
                                                                    }};) {{
                                                        attributeName = "commodi";
                                                        value = new TypedAttributeValue() {{
                                                            binaryValue = "fugit";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-08-24T14:06:09.275Z");
                                                            numberValue = "doloremque";
                                                            stringValue = "est";
                                                        }};
                                                    }}),
                                                    add(new AttributeNameAndValue("possimus",                 new TypedAttributeValue() {{
                                                                        binaryValue = "odit";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-12-02T10:27:20.280Z");
                                                                        numberValue = "minima";
                                                                        stringValue = "facilis";
                                                                    }};) {{
                                                        attributeName = "eligendi";
                                                        value = new TypedAttributeValue() {{
                                                            binaryValue = "incidunt";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-07-23T20:31:31.337Z");
                                                            numberValue = "est";
                                                            stringValue = "reiciendis";
                                                        }};
                                                    }}),
                                                }};
                                                sourceObjectReference = new ObjectReference() {{
                                                    selector = "facilis";
                                                }};;
                                                targetObjectReference = new ObjectReference() {{
                                                    selector = "deserunt";
                                                }};;
                                                typedLinkFacet = new TypedLinkSchemaAndFacetName("nisi", "ipsam");;
                                            }};) {{
                                consistencyLevel = GetLinkAttributesRequestBodyConsistencyLevelEnum.SERIALIZABLE;
                            }};, "illo") {{
                xAmzAlgorithm = "iure";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "eveniet";
                xAmzDate = "quae";
                xAmzSecurityToken = "ea";
                xAmzSignature = "asperiores";
                xAmzSignedHeaders = "veniam";
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
                .setSecurity(new Security("quidem") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetObjectAttributesRequest req = new GetObjectAttributesRequest(                new GetObjectAttributesRequestBody(                new String[]{{
                                                add("eum"),
                                                add("deserunt"),
                                                add("repudiandae"),
                                                add("nemo"),
                                            }},                 new GetObjectAttributesRequestBodyObjectReference() {{
                                                selector = "molestias";
                                            }};,                 new GetObjectAttributesRequestBodySchemaFacet() {{
                                                facetName = "architecto";
                                                schemaArn = "expedita";
                                            }};);, "quisquam") {{
                xAmzAlgorithm = "praesentium";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "assumenda";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "maiores";
                xAmzSignature = "ipsum";
                xAmzSignedHeaders = "commodi";
                xAmzConsistencyLevel = GetObjectAttributesXAmzConsistencyLevelEnum.SERIALIZABLE;
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
                .setSecurity(new Security("fugit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetObjectInformationRequest req = new GetObjectInformationRequest(                new GetObjectInformationRequestBody(                new GetObjectInformationRequestBodyObjectReference() {{
                                                selector = "nam";
                                            }};);, "ex") {{
                xAmzAlgorithm = "neque";
                xAmzContentSha256 = "quod";
                xAmzCredential = "eos";
                xAmzDate = "alias";
                xAmzSecurityToken = "ad";
                xAmzSignature = "a";
                xAmzSignedHeaders = "facere";
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

Retrieves a JSON representation of the schema. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_schemas.html#jsonformat">JSON Schema Format</a> for more information.

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
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSchemaAsJsonRequest req = new GetSchemaAsJsonRequest("quaerat") {{
                xAmzAlgorithm = "aperiam";
                xAmzContentSha256 = "dignissimos";
                xAmzCredential = "quam";
                xAmzDate = "modi";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "iure";
                xAmzSignedHeaders = "deleniti";
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

Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
                .setSecurity(new Security("officia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTypedLinkFacetInformationRequest req = new GetTypedLinkFacetInformationRequest(                new GetTypedLinkFacetInformationRequestBody("sint");, "laborum") {{
                xAmzAlgorithm = "dolor";
                xAmzContentSha256 = "ad";
                xAmzCredential = "illum";
                xAmzDate = "sit";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "voluptas";
                xAmzSignedHeaders = "expedita";
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
                .setSecurity(new Security("voluptas") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAppliedSchemaArnsRequest req = new ListAppliedSchemaArnsRequest(                new ListAppliedSchemaArnsRequestBody("maiores") {{
                                maxResults = 412024L;
                                nextToken = "vel";
                                schemaArn = "delectus";
                            }};) {{
                maxResults = "accusamus";
                nextToken = "reiciendis";
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "sed";
                xAmzCredential = "accusantium";
                xAmzDate = "voluptates";
                xAmzSecurityToken = "provident";
                xAmzSignature = "maiores";
                xAmzSignedHeaders = "quaerat";
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
                .setSecurity(new Security("numquam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAttachedIndicesRequest req = new ListAttachedIndicesRequest(                new ListAttachedIndicesRequestBody(                new ListAttachedIndicesRequestBodyTargetReference() {{
                                                selector = "non";
                                            }};) {{
                                maxResults = 741024L;
                                nextToken = "incidunt";
                            }};, "dolores") {{
                maxResults = "enim";
                nextToken = "nihil";
                xAmzAlgorithm = "libero";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "excepturi";
                xAmzDate = "eos";
                xAmzSecurityToken = "quisquam";
                xAmzSignature = "corrupti";
                xAmzSignedHeaders = "repellendus";
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
                .setSecurity(new Security("quibusdam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDevelopmentSchemaArnsRequest req = new ListDevelopmentSchemaArnsRequest(                new ListDevelopmentSchemaArnsRequestBody() {{
                                maxResults = 667418L;
                                nextToken = "commodi";
                            }};) {{
                maxResults = "similique";
                nextToken = "autem";
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "recusandae";
                xAmzCredential = "sapiente";
                xAmzDate = "id";
                xAmzSecurityToken = "odit";
                xAmzSignature = "inventore";
                xAmzSignedHeaders = "iste";
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
                .setSecurity(new Security("atque") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDirectoriesRequest req = new ListDirectoriesRequest(                new ListDirectoriesRequestBody() {{
                                maxResults = 129531L;
                                nextToken = "ullam";
                                state = ListDirectoriesRequestBodyStateEnum.DISABLED;
                            }};) {{
                maxResults = "doloribus";
                nextToken = "pariatur";
                xAmzAlgorithm = "aut";
                xAmzContentSha256 = "similique";
                xAmzCredential = "iste";
                xAmzDate = "eveniet";
                xAmzSecurityToken = "nam";
                xAmzSignature = "animi";
                xAmzSignedHeaders = "labore";
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
                .setSecurity(new Security("voluptate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFacetAttributesRequest req = new ListFacetAttributesRequest(                new ListFacetAttributesRequestBody("voluptatibus") {{
                                maxResults = 466862L;
                                nextToken = "nulla";
                            }};, "dolorem") {{
                maxResults = "voluptates";
                nextToken = "a";
                xAmzAlgorithm = "perferendis";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "excepturi";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "dolore";
                xAmzSignature = "voluptatem";
                xAmzSignedHeaders = "illum";
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
                .setSecurity(new Security("laboriosam") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListFacetNamesRequest req = new ListFacetNamesRequest(                new ListFacetNamesRequestBody() {{
                                maxResults = 632850L;
                                nextToken = "dicta";
                            }};, "atque") {{
                maxResults = "ratione";
                nextToken = "vitae";
                xAmzAlgorithm = "quisquam";
                xAmzContentSha256 = "atque";
                xAmzCredential = "nihil";
                xAmzDate = "culpa";
                xAmzSecurityToken = "temporibus";
                xAmzSignature = "a";
                xAmzSignedHeaders = "ad";
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

Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
                .setSecurity(new Security("cupiditate") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIncomingTypedLinksRequest req = new ListIncomingTypedLinksRequest(                new ListIncomingTypedLinksRequestBody(                new ListIncomingTypedLinksRequestBodyObjectReference() {{
                                                selector = "suscipit";
                                            }};) {{
                                consistencyLevel = ListIncomingTypedLinksRequestBodyConsistencyLevelEnum.EVENTUAL;
                                filterAttributeRanges = new org.openapis.openapi.models.shared.TypedLinkAttributeRange[]{{
                                    add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.INCLUSIVE) {{
                                                        endValue = new TypedAttributeValue() {{
                                                            binaryValue = "occaecati";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-04-07T22:59:50.324Z");
                                                            numberValue = "officia";
                                                            stringValue = "iste";
                                                        }};;
                                                        startValue = new TypedAttributeValue() {{
                                                            binaryValue = "unde";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-03-25T08:17:37.868Z");
                                                            numberValue = "ducimus";
                                                            stringValue = "voluptatum";
                                                        }};;
                                                    }};) {{
                                        attributeName = "delectus";
                                        range = new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.FIRST) {{
                                            endMode = RangeModeEnum.FIRST;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "mollitia";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2021-06-26T00:44:17.067Z");
                                                numberValue = "neque";
                                                stringValue = "quam";
                                            }};
                                            startMode = RangeModeEnum.INCLUSIVE;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "debitis";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-12-11T08:56:33.553Z");
                                                numberValue = "quisquam";
                                                stringValue = "vitae";
                                            }};
                                        }};
                                    }}),
                                    add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.EXCLUSIVE, RangeModeEnum.EXCLUSIVE) {{
                                                        endValue = new TypedAttributeValue() {{
                                                            binaryValue = "eaque";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-07-31T08:49:37.370Z");
                                                            numberValue = "vitae";
                                                            stringValue = "numquam";
                                                        }};;
                                                        startValue = new TypedAttributeValue() {{
                                                            binaryValue = "incidunt";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-06-13T05:59:27.704Z");
                                                            numberValue = "minus";
                                                            stringValue = "voluptate";
                                                        }};;
                                                    }};) {{
                                        attributeName = "sapiente";
                                        range = new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.LAST_BEFORE_MISSING_VALUES) {{
                                            endMode = RangeModeEnum.INCLUSIVE;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "dolor";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2021-09-09T09:09:47.250Z");
                                                numberValue = "sint";
                                                stringValue = "autem";
                                            }};
                                            startMode = RangeModeEnum.INCLUSIVE;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "cupiditate";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-04-26T10:03:41.349Z");
                                                numberValue = "a";
                                                stringValue = "dolor";
                                            }};
                                        }};
                                    }}),
                                    add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.EXCLUSIVE, RangeModeEnum.EXCLUSIVE) {{
                                                        endValue = new TypedAttributeValue() {{
                                                            binaryValue = "itaque";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2020-01-02T20:48:49.687Z");
                                                            numberValue = "cupiditate";
                                                            stringValue = "adipisci";
                                                        }};;
                                                        startValue = new TypedAttributeValue() {{
                                                            binaryValue = "aliquam";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-09-02T13:32:32.751Z");
                                                            numberValue = "sed";
                                                            stringValue = "necessitatibus";
                                                        }};;
                                                    }};) {{
                                        attributeName = "error";
                                        range = new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.LAST_BEFORE_MISSING_VALUES) {{
                                            endMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "reprehenderit";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-12-24T06:32:15.469Z");
                                                numberValue = "voluptates";
                                                stringValue = "delectus";
                                            }};
                                            startMode = RangeModeEnum.FIRST;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "delectus";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-10-13T14:14:32.798Z");
                                                numberValue = "laboriosam";
                                                stringValue = "doloremque";
                                            }};
                                        }};
                                    }}),
                                    add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.LAST_BEFORE_MISSING_VALUES) {{
                                                        endValue = new TypedAttributeValue() {{
                                                            binaryValue = "illo";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-12-29T23:51:54.650Z");
                                                            numberValue = "delectus";
                                                            stringValue = "incidunt";
                                                        }};;
                                                        startValue = new TypedAttributeValue() {{
                                                            binaryValue = "dolore";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-05-01T13:28:23.519Z");
                                                            numberValue = "quo";
                                                            stringValue = "maxime";
                                                        }};;
                                                    }};) {{
                                        attributeName = "possimus";
                                        range = new TypedAttributeValueRange(RangeModeEnum.EXCLUSIVE, RangeModeEnum.INCLUSIVE) {{
                                            endMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "itaque";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-08-24T02:19:57.449Z");
                                                numberValue = "non";
                                                stringValue = "delectus";
                                            }};
                                            startMode = RangeModeEnum.LAST;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "quod";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-08-24T23:24:13.030Z");
                                                numberValue = "quam";
                                                stringValue = "illum";
                                            }};
                                        }};
                                    }}),
                                }};
                                filterTypedLink = new ListIncomingTypedLinksRequestBodyFilterTypedLink() {{
                                    schemaArn = "delectus";
                                    typedLinkName = "laboriosam";
                                }};;
                                maxResults = 387567L;
                                nextToken = "quam";
                            }};, "fuga") {{
                xAmzAlgorithm = "officia";
                xAmzContentSha256 = "repellat";
                xAmzCredential = "cupiditate";
                xAmzDate = "soluta";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "culpa";
                xAmzSignedHeaders = "fugiat";
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
                .setSecurity(new Security("inventore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListIndexRequest req = new ListIndexRequest(                new ListIndexRequestBody(                new ListIndexRequestBodyIndexReference() {{
                                                selector = "atque";
                                            }};) {{
                                maxResults = 323215L;
                                nextToken = "sapiente";
                                rangesOnIndexedValues = new org.openapis.openapi.models.shared.ObjectAttributeRange[]{{
                                    add(new ObjectAttributeRange() {{
                                        attributeKey = new AttributeKey("nemo", "cumque", "voluptatum") {{
                                            facetName = "ut";
                                            name = "Rebecca Sporer";
                                            schemaArn = "delectus";
                                        }};
                                        range = new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.EXCLUSIVE) {{
                                            endMode = RangeModeEnum.FIRST;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "atque";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2020-11-10T02:39:59.601Z");
                                                numberValue = "rerum";
                                                stringValue = "totam";
                                            }};
                                            startMode = RangeModeEnum.INCLUSIVE;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "aspernatur";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-03-24T16:32:13.224Z");
                                                numberValue = "nam";
                                                stringValue = "ex";
                                            }};
                                        }};
                                    }}),
                                    add(new ObjectAttributeRange() {{
                                        attributeKey = new AttributeKey("sint", "occaecati", "debitis") {{
                                            facetName = "minus";
                                            name = "Verna Gislason";
                                            schemaArn = "repudiandae";
                                        }};
                                        range = new TypedAttributeValueRange(RangeModeEnum.EXCLUSIVE, RangeModeEnum.EXCLUSIVE) {{
                                            endMode = RangeModeEnum.LAST;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "eos";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-09-20T22:00:48.719Z");
                                                numberValue = "porro";
                                                stringValue = "occaecati";
                                            }};
                                            startMode = RangeModeEnum.EXCLUSIVE;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "voluptate";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-02-08T10:54:10.339Z");
                                                numberValue = "omnis";
                                                stringValue = "possimus";
                                            }};
                                        }};
                                    }}),
                                    add(new ObjectAttributeRange() {{
                                        attributeKey = new AttributeKey("totam", "vero", "dolore") {{
                                            facetName = "expedita";
                                            name = "Tamara Pfeffer";
                                            schemaArn = "ratione";
                                        }};
                                        range = new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.FIRST) {{
                                            endMode = RangeModeEnum.INCLUSIVE;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "officia";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2021-03-31T07:19:57.193Z");
                                                numberValue = "illo";
                                                stringValue = "saepe";
                                            }};
                                            startMode = RangeModeEnum.LAST;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "eaque";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-02-02T19:14:56.667Z");
                                                numberValue = "delectus";
                                                stringValue = "deleniti";
                                            }};
                                        }};
                                    }}),
                                    add(new ObjectAttributeRange() {{
                                        attributeKey = new AttributeKey("maiores", "veritatis", "autem") {{
                                            facetName = "dolorum";
                                            name = "Anita Reilly";
                                            schemaArn = "nostrum";
                                        }};
                                        range = new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.LAST_BEFORE_MISSING_VALUES) {{
                                            endMode = RangeModeEnum.EXCLUSIVE;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "minima";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-03-07T02:09:13.671Z");
                                                numberValue = "nesciunt";
                                                stringValue = "corrupti";
                                            }};
                                            startMode = RangeModeEnum.LAST;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "fuga";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-03-12T22:02:50.786Z");
                                                numberValue = "numquam";
                                                stringValue = "laborum";
                                            }};
                                        }};
                                    }}),
                                }};
                            }};, "adipisci") {{
                maxResults = "sunt";
                nextToken = "rerum";
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "provident";
                xAmzCredential = "necessitatibus";
                xAmzDate = "fugit";
                xAmzSecurityToken = "autem";
                xAmzSignature = "optio";
                xAmzSignedHeaders = "eveniet";
                xAmzConsistencyLevel = ListIndexXAmzConsistencyLevelEnum.EVENTUAL;
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
                .setSecurity(new Security("blanditiis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListObjectAttributesRequest req = new ListObjectAttributesRequest(                new ListObjectAttributesRequestBody(                new ListObjectAttributesRequestBodyObjectReference() {{
                                                selector = "a";
                                            }};) {{
                                facetFilter = new ListObjectAttributesRequestBodyFacetFilter() {{
                                    facetName = "natus";
                                    schemaArn = "sapiente";
                                }};;
                                maxResults = 832989L;
                                nextToken = "facilis";
                            }};, "molestias") {{
                maxResults = "dolore";
                nextToken = "et";
                xAmzAlgorithm = "accusantium";
                xAmzContentSha256 = "maiores";
                xAmzCredential = "nisi";
                xAmzDate = "velit";
                xAmzSecurityToken = "tempore";
                xAmzSignature = "expedita";
                xAmzSignedHeaders = "hic";
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
                .setSecurity(new Security("vitae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListObjectChildrenRequest req = new ListObjectChildrenRequest(                new ListObjectChildrenRequestBody(                new ListObjectChildrenRequestBodyObjectReference() {{
                                                selector = "iusto";
                                            }};) {{
                                maxResults = 542242L;
                                nextToken = "velit";
                            }};, "molestiae") {{
                maxResults = "nam";
                nextToken = "aperiam";
                xAmzAlgorithm = "vitae";
                xAmzContentSha256 = "mollitia";
                xAmzCredential = "asperiores";
                xAmzDate = "at";
                xAmzSecurityToken = "quibusdam";
                xAmzSignature = "quam";
                xAmzSignedHeaders = "deleniti";
                xAmzConsistencyLevel = ListObjectChildrenXAmzConsistencyLevelEnum.EVENTUAL;
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

<p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#dirstructure">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>

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
                .setSecurity(new Security("vel") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListObjectParentPathsRequest req = new ListObjectParentPathsRequest(                new ListObjectParentPathsRequestBody(                new ListObjectParentPathsRequestBodyObjectReference() {{
                                                selector = "eos";
                                            }};) {{
                                maxResults = 286464L;
                                nextToken = "sunt";
                            }};, "blanditiis") {{
                maxResults = "iste";
                nextToken = "accusamus";
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "labore";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "consectetur";
                xAmzSignedHeaders = "sapiente";
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
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListObjectParentsRequest req = new ListObjectParentsRequest(                new ListObjectParentsRequestBody(                new ListObjectParentsRequestBodyObjectReference() {{
                                                selector = "accusantium";
                                            }};) {{
                                maxResults = 190260L;
                                nextToken = "consectetur";
                            }};, "asperiores") {{
                maxResults = "architecto";
                nextToken = "sint";
                xAmzAlgorithm = "possimus";
                xAmzContentSha256 = "tempore";
                xAmzCredential = "asperiores";
                xAmzDate = "quasi";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "nobis";
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
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListObjectPoliciesRequest req = new ListObjectPoliciesRequest(                new ListObjectPoliciesRequestBody(                new ListObjectPoliciesRequestBodyObjectReference() {{
                                                selector = "veritatis";
                                            }};) {{
                                maxResults = 328744L;
                                nextToken = "magni";
                            }};, "itaque") {{
                maxResults = "error";
                nextToken = "expedita";
                xAmzAlgorithm = "error";
                xAmzContentSha256 = "placeat";
                xAmzCredential = "temporibus";
                xAmzDate = "voluptate";
                xAmzSecurityToken = "earum";
                xAmzSignature = "minima";
                xAmzSignedHeaders = "odit";
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

Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
                                                selector = "error";
                                            }};) {{
                                consistencyLevel = ListOutgoingTypedLinksRequestBodyConsistencyLevelEnum.SERIALIZABLE;
                                filterAttributeRanges = new org.openapis.openapi.models.shared.TypedLinkAttributeRange[]{{
                                    add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.FIRST, RangeModeEnum.EXCLUSIVE) {{
                                                        endValue = new TypedAttributeValue() {{
                                                            binaryValue = "autem";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-01-02T13:55:44.675Z");
                                                            numberValue = "amet";
                                                            stringValue = "cumque";
                                                        }};;
                                                        startValue = new TypedAttributeValue() {{
                                                            binaryValue = "dolore";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2020-09-02T21:57:03.450Z");
                                                            numberValue = "repudiandae";
                                                            stringValue = "tempora";
                                                        }};;
                                                    }};) {{
                                        attributeName = "alias";
                                        range = new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.EXCLUSIVE) {{
                                            endMode = RangeModeEnum.EXCLUSIVE;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "ab";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-10-10T07:56:10.437Z");
                                                numberValue = "cum";
                                                stringValue = "iusto";
                                            }};
                                            startMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "non";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-02-15T00:15:59.783Z");
                                                numberValue = "eligendi";
                                                stringValue = "minima";
                                            }};
                                        }};
                                    }}),
                                    add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.LAST, RangeModeEnum.FIRST) {{
                                                        endValue = new TypedAttributeValue() {{
                                                            binaryValue = "architecto";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-08-22T16:03:58.622Z");
                                                            numberValue = "nihil";
                                                            stringValue = "officiis";
                                                        }};;
                                                        startValue = new TypedAttributeValue() {{
                                                            binaryValue = "dolore";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-01-07T15:17:27.791Z");
                                                            numberValue = "ipsam";
                                                            stringValue = "dicta";
                                                        }};;
                                                    }};) {{
                                        attributeName = "libero";
                                        range = new TypedAttributeValueRange(RangeModeEnum.LAST, RangeModeEnum.LAST_BEFORE_MISSING_VALUES) {{
                                            endMode = RangeModeEnum.LAST;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "illum";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-08-07T14:30:32.777Z");
                                                numberValue = "sint";
                                                stringValue = "aliquid";
                                            }};
                                            startMode = RangeModeEnum.EXCLUSIVE;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "sapiente";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-03-30T12:21:20.207Z");
                                                numberValue = "ullam";
                                                stringValue = "nihil";
                                            }};
                                        }};
                                    }}),
                                    add(new TypedLinkAttributeRange(                new TypedAttributeValueRange(RangeModeEnum.INCLUSIVE, RangeModeEnum.FIRST) {{
                                                        endValue = new TypedAttributeValue() {{
                                                            binaryValue = "incidunt";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-09-10T06:19:45.720Z");
                                                            numberValue = "suscipit";
                                                            stringValue = "ducimus";
                                                        }};;
                                                        startValue = new TypedAttributeValue() {{
                                                            binaryValue = "tenetur";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-06-22T04:31:01.154Z");
                                                            numberValue = "corrupti";
                                                            stringValue = "nihil";
                                                        }};;
                                                    }};) {{
                                        attributeName = "hic";
                                        range = new TypedAttributeValueRange(RangeModeEnum.LAST_BEFORE_MISSING_VALUES, RangeModeEnum.LAST) {{
                                            endMode = RangeModeEnum.LAST_BEFORE_MISSING_VALUES;
                                            endValue = new TypedAttributeValue() {{
                                                binaryValue = "libero";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-06-26T09:22:07.434Z");
                                                numberValue = "tempora";
                                                stringValue = "quo";
                                            }};
                                            startMode = RangeModeEnum.LAST;
                                            startValue = new TypedAttributeValue() {{
                                                binaryValue = "sunt";
                                                booleanValue = false;
                                                datetimeValue = OffsetDateTime.parse("2022-01-26T22:07:44.132Z");
                                                numberValue = "officiis";
                                                stringValue = "dicta";
                                            }};
                                        }};
                                    }}),
                                }};
                                filterTypedLink = new ListOutgoingTypedLinksRequestBodyFilterTypedLink() {{
                                    schemaArn = "eius";
                                    typedLinkName = "placeat";
                                }};;
                                maxResults = 145973L;
                                nextToken = "facere";
                            }};, "ipsam") {{
                xAmzAlgorithm = "nobis";
                xAmzContentSha256 = "porro";
                xAmzCredential = "labore";
                xAmzDate = "perspiciatis";
                xAmzSecurityToken = "ducimus";
                xAmzSignature = "qui";
                xAmzSignedHeaders = "qui";
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
                .setSecurity(new Security("consectetur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPolicyAttachmentsRequest req = new ListPolicyAttachmentsRequest(                new ListPolicyAttachmentsRequestBody(                new ListPolicyAttachmentsRequestBodyPolicyReference() {{
                                                selector = "ratione";
                                            }};) {{
                                maxResults = 904193L;
                                nextToken = "iure";
                            }};, "aliquid") {{
                maxResults = "cum";
                nextToken = "fugiat";
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "voluptatibus";
                xAmzCredential = "officiis";
                xAmzDate = "corporis";
                xAmzSecurityToken = "repellendus";
                xAmzSignature = "aut";
                xAmzSignedHeaders = "voluptatem";
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
                .setSecurity(new Security("excepturi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListPublishedSchemaArnsRequest req = new ListPublishedSchemaArnsRequest(                new ListPublishedSchemaArnsRequestBody() {{
                                maxResults = 485438L;
                                nextToken = "omnis";
                                schemaArn = "officiis";
                            }};) {{
                maxResults = "delectus";
                nextToken = "magni";
                xAmzAlgorithm = "sit";
                xAmzContentSha256 = "velit";
                xAmzCredential = "voluptatum";
                xAmzDate = "nihil";
                xAmzSecurityToken = "neque";
                xAmzSignature = "aspernatur";
                xAmzSignedHeaders = "eaque";
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
                .setSecurity(new Security("corporis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest(                new ListTagsForResourceRequestBody("cupiditate") {{
                                maxResults = 15563L;
                                nextToken = "impedit";
                            }};) {{
                maxResults = "quod";
                nextToken = "quo";
                xAmzAlgorithm = "architecto";
                xAmzContentSha256 = "voluptatem";
                xAmzCredential = "perspiciatis";
                xAmzDate = "ea";
                xAmzSecurityToken = "eius";
                xAmzSignature = "aperiam";
                xAmzSignedHeaders = "voluptatem";
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

Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
                .setSecurity(new Security("non") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTypedLinkFacetAttributesRequest req = new ListTypedLinkFacetAttributesRequest(                new ListTypedLinkFacetAttributesRequestBody("beatae") {{
                                maxResults = 192880L;
                                nextToken = "rerum";
                            }};, "ipsum") {{
                maxResults = "debitis";
                nextToken = "quis";
                xAmzAlgorithm = "eaque";
                xAmzContentSha256 = "incidunt";
                xAmzCredential = "ut";
                xAmzDate = "delectus";
                xAmzSecurityToken = "aliquid";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "maiores";
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

Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
                .setSecurity(new Security("debitis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTypedLinkFacetNamesRequest req = new ListTypedLinkFacetNamesRequest(                new ListTypedLinkFacetNamesRequestBody() {{
                                maxResults = 442668L;
                                nextToken = "eos";
                            }};, "assumenda") {{
                maxResults = "cumque";
                nextToken = "ut";
                xAmzAlgorithm = "quae";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "quam";
                xAmzDate = "assumenda";
                xAmzSecurityToken = "consequatur";
                xAmzSignature = "cumque";
                xAmzSignedHeaders = "placeat";
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

Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#policies">Policies</a>.

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
                .setSecurity(new Security("adipisci") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            LookupPolicyRequest req = new LookupPolicyRequest(                new LookupPolicyRequestBody(                new LookupPolicyRequestBodyObjectReference() {{
                                                selector = "tenetur";
                                            }};) {{
                                maxResults = 252717L;
                                nextToken = "accusantium";
                            }};, "corrupti") {{
                maxResults = "itaque";
                nextToken = "earum";
                xAmzAlgorithm = "impedit";
                xAmzContentSha256 = "dicta";
                xAmzCredential = "corporis";
                xAmzDate = "impedit";
                xAmzSecurityToken = "eveniet";
                xAmzSignature = "cum";
                xAmzSignedHeaders = "dolore";
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
                .setSecurity(new Security("illum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PublishSchemaRequest req = new PublishSchemaRequest(                new PublishSchemaRequestBody("ea") {{
                                minorVersion = "officiis";
                                name = "Eloise O'Kon DVM";
                            }};, "odio") {{
                xAmzAlgorithm = "veniam";
                xAmzContentSha256 = "fuga";
                xAmzCredential = "itaque";
                xAmzDate = "possimus";
                xAmzSecurityToken = "tenetur";
                xAmzSignature = "sed";
                xAmzSignedHeaders = "deserunt";
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

Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_schemas.html#jsonformat">JSON Schema Format</a> for more information.

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
                .setSecurity(new Security("eligendi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutSchemaFromJsonRequest req = new PutSchemaFromJsonRequest(                new PutSchemaFromJsonRequestBody("id");, "distinctio") {{
                xAmzAlgorithm = "corporis";
                xAmzContentSha256 = "quas";
                xAmzCredential = "soluta";
                xAmzDate = "cupiditate";
                xAmzSecurityToken = "unde";
                xAmzSignature = "et";
                xAmzSignedHeaders = "quisquam";
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
                .setSecurity(new Security("unde") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            RemoveFacetFromObjectRequest req = new RemoveFacetFromObjectRequest(                new RemoveFacetFromObjectRequestBody(                new RemoveFacetFromObjectRequestBodyObjectReference() {{
                                                selector = "sed";
                                            }};,                 new RemoveFacetFromObjectRequestBodySchemaFacet() {{
                                                facetName = "suscipit";
                                                schemaArn = "facere";
                                            }};);, "pariatur") {{
                xAmzAlgorithm = "nam";
                xAmzContentSha256 = "quaerat";
                xAmzCredential = "corrupti";
                xAmzDate = "sint";
                xAmzSecurityToken = "eius";
                xAmzSignature = "vel";
                xAmzSignedHeaders = "quasi";
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
                .setSecurity(new Security("vero") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody("odio",                 new org.openapis.openapi.models.shared.Tag[]{{
                                                add(new Tag() {{
                                                    key = "fugit";
                                                    value = "inventore";
                                                }}),
                                                add(new Tag() {{
                                                    key = "optio";
                                                    value = "nobis";
                                                }}),
                                            }});) {{
                xAmzAlgorithm = "recusandae";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "possimus";
                xAmzDate = "provident";
                xAmzSecurityToken = "veniam";
                xAmzSignature = "sit";
                xAmzSignedHeaders = "fugit";
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
                .setSecurity(new Security("a") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest(                new UntagResourceRequestBody("consequatur",                 new String[]{{
                                                add("id"),
                                                add("error"),
                                                add("ratione"),
                                                add("perferendis"),
                                            }});) {{
                xAmzAlgorithm = "distinctio";
                xAmzContentSha256 = "voluptas";
                xAmzCredential = "sint";
                xAmzDate = "maiores";
                xAmzSecurityToken = "nihil";
                xAmzSignature = "fuga";
                xAmzSignedHeaders = "cumque";
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
                .setSecurity(new Security("consequuntur") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateFacetRequest req = new UpdateFacetRequest(                new UpdateFacetRequestBody("maiores") {{
                                attributeUpdates = new org.openapis.openapi.models.shared.FacetAttributeUpdate[]{{
                                    add(new FacetAttributeUpdate() {{
                                        action = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                        attribute = new FacetAttribute("autem") {{
                                            attributeDefinition = new FacetAttributeDefinition(FacetAttributeTypeEnum.BOOLEAN_) {{
                                                defaultValue = new TypedAttributeValue() {{
                                                    binaryValue = "delectus";
                                                    booleanValue = false;
                                                    datetimeValue = OffsetDateTime.parse("2021-12-06T15:54:45.514Z");
                                                    numberValue = "enim";
                                                    stringValue = "sit";
                                                }};
                                                isImmutable = false;
                                                rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                    put("natus", new Rule() {{
                                                        parameters = new java.util.HashMap<String, String>() {{
                                                            put("tempora", "occaecati");
                                                        }};
                                                        type = RuleTypeEnum.BINARY_LENGTH;
                                                    }});
                                                }};
                                                type = FacetAttributeTypeEnum.STRING;
                                            }};
                                            attributeReference = new FacetAttributeReference("dolores", "perferendis") {{
                                                targetAttributeName = "doloremque";
                                                targetFacetName = "quas";
                                            }};
                                            name = "Tracey Kutch";
                                            requiredBehavior = RequiredAttributeBehaviorEnum.NOT_REQUIRED;
                                        }};
                                    }}),
                                    add(new FacetAttributeUpdate() {{
                                        action = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                        attribute = new FacetAttribute("odit") {{
                                            attributeDefinition = new FacetAttributeDefinition(FacetAttributeTypeEnum.BINARY) {{
                                                defaultValue = new TypedAttributeValue() {{
                                                    binaryValue = "beatae";
                                                    booleanValue = false;
                                                    datetimeValue = OffsetDateTime.parse("2022-07-16T10:21:09.980Z");
                                                    numberValue = "soluta";
                                                    stringValue = "tenetur";
                                                }};
                                                isImmutable = false;
                                                rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                    put("perspiciatis", new Rule() {{
                                                        parameters = new java.util.HashMap<String, String>() {{
                                                            put("ullam", "unde");
                                                            put("debitis", "quidem");
                                                        }};
                                                        type = RuleTypeEnum.NUMBER_COMPARISON;
                                                    }});
                                                    put("doloremque", new Rule() {{
                                                        parameters = new java.util.HashMap<String, String>() {{
                                                            put("quod", "sunt");
                                                            put("voluptas", "earum");
                                                            put("est", "earum");
                                                            put("nihil", "nostrum");
                                                        }};
                                                        type = RuleTypeEnum.STRING_FROM_SET;
                                                    }});
                                                    put("perferendis", new Rule() {{
                                                        parameters = new java.util.HashMap<String, String>() {{
                                                            put("ullam", "ratione");
                                                            put("eos", "id");
                                                            put("modi", "illum");
                                                        }};
                                                        type = RuleTypeEnum.STRING_FROM_SET;
                                                    }});
                                                    put("consectetur", new Rule() {{
                                                        parameters = new java.util.HashMap<String, String>() {{
                                                            put("eligendi", "cum");
                                                            put("culpa", "culpa");
                                                        }};
                                                        type = RuleTypeEnum.STRING_LENGTH;
                                                    }});
                                                }};
                                                type = FacetAttributeTypeEnum.BINARY;
                                            }};
                                            attributeReference = new FacetAttributeReference("quod", "quaerat") {{
                                                targetAttributeName = "ad";
                                                targetFacetName = "quia";
                                            }};
                                            name = "Jesus Champlin";
                                            requiredBehavior = RequiredAttributeBehaviorEnum.NOT_REQUIRED;
                                        }};
                                    }}),
                                }};
                                objectType = UpdateFacetRequestBodyObjectTypeEnum.POLICY;
                            }};, "at") {{
                xAmzAlgorithm = "ipsum";
                xAmzContentSha256 = "explicabo";
                xAmzCredential = "nulla";
                xAmzDate = "est";
                xAmzSecurityToken = "sapiente";
                xAmzSignature = "necessitatibus";
                xAmzSignedHeaders = "voluptatum";
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
                .setSecurity(new Security("quasi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateLinkAttributesRequest req = new UpdateLinkAttributesRequest(                new UpdateLinkAttributesRequestBody(                new org.openapis.openapi.models.shared.LinkAttributeUpdate[]{{
                                                add(new LinkAttributeUpdate() {{
                                                    attributeAction = new LinkAttributeAction() {{
                                                        attributeActionType = UpdateActionTypeEnum.DELETE;
                                                        attributeUpdateValue = new TypedAttributeValue() {{
                                                            binaryValue = "blanditiis";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-02-24T12:06:11.081Z");
                                                            numberValue = "incidunt";
                                                            stringValue = "labore";
                                                        }};
                                                    }};
                                                    attributeKey = new AttributeKey("nulla", "tempora", "quam") {{
                                                        facetName = "ut";
                                                        name = "Marcia Dicki";
                                                        schemaArn = "quod";
                                                    }};
                                                }}),
                                                add(new LinkAttributeUpdate() {{
                                                    attributeAction = new LinkAttributeAction() {{
                                                        attributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                        attributeUpdateValue = new TypedAttributeValue() {{
                                                            binaryValue = "nemo";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-01-23T05:40:24.870Z");
                                                            numberValue = "eum";
                                                            stringValue = "dolor";
                                                        }};
                                                    }};
                                                    attributeKey = new AttributeKey("unde", "deserunt", "id") {{
                                                        facetName = "placeat";
                                                        name = "Aaron Becker";
                                                        schemaArn = "nihil";
                                                    }};
                                                }}),
                                                add(new LinkAttributeUpdate() {{
                                                    attributeAction = new LinkAttributeAction() {{
                                                        attributeActionType = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                        attributeUpdateValue = new TypedAttributeValue() {{
                                                            binaryValue = "occaecati";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2020-05-23T18:52:28.912Z");
                                                            numberValue = "ad";
                                                            stringValue = "asperiores";
                                                        }};
                                                    }};
                                                    attributeKey = new AttributeKey("dicta", "rem", "fuga") {{
                                                        facetName = "nam";
                                                        name = "Darrin Kohler";
                                                        schemaArn = "culpa";
                                                    }};
                                                }}),
                                            }},                 new UpdateLinkAttributesRequestBodyTypedLinkSpecifier() {{
                                                identityAttributeValues = new org.openapis.openapi.models.shared.AttributeNameAndValue[]{{
                                                    add(new AttributeNameAndValue("quis",                 new TypedAttributeValue() {{
                                                                        binaryValue = "quos";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-05-22T07:23:57.099Z");
                                                                        numberValue = "vero";
                                                                        stringValue = "nisi";
                                                                    }};) {{
                                                        attributeName = "totam";
                                                        value = new TypedAttributeValue() {{
                                                            binaryValue = "magni";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-04-25T01:04:15.961Z");
                                                            numberValue = "voluptatibus";
                                                            stringValue = "omnis";
                                                        }};
                                                    }}),
                                                    add(new AttributeNameAndValue("ullam",                 new TypedAttributeValue() {{
                                                                        binaryValue = "quaerat";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-02-26T20:43:29.509Z");
                                                                        numberValue = "accusamus";
                                                                        stringValue = "ipsam";
                                                                    }};) {{
                                                        attributeName = "praesentium";
                                                        value = new TypedAttributeValue() {{
                                                            binaryValue = "eum";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-05-06T00:25:49.728Z");
                                                            numberValue = "possimus";
                                                            stringValue = "libero";
                                                        }};
                                                    }}),
                                                }};
                                                sourceObjectReference = new ObjectReference() {{
                                                    selector = "fugiat";
                                                }};;
                                                targetObjectReference = new ObjectReference() {{
                                                    selector = "odio";
                                                }};;
                                                typedLinkFacet = new TypedLinkSchemaAndFacetName("ullam", "inventore");;
                                            }};);, "eligendi") {{
                xAmzAlgorithm = "occaecati";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "necessitatibus";
                xAmzDate = "rem";
                xAmzSecurityToken = "a";
                xAmzSignature = "nihil";
                xAmzSignedHeaders = "veniam";
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
                .setSecurity(new Security("aut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateObjectAttributesRequest req = new UpdateObjectAttributesRequest(                new UpdateObjectAttributesRequestBody(                new org.openapis.openapi.models.shared.ObjectAttributeUpdate[]{{
                                                add(new ObjectAttributeUpdate() {{
                                                    objectAttributeAction = new ObjectAttributeAction() {{
                                                        objectAttributeActionType = UpdateActionTypeEnum.DELETE;
                                                        objectAttributeUpdateValue = new TypedAttributeValue() {{
                                                            binaryValue = "voluptatibus";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2020-08-11T14:35:32.552Z");
                                                            numberValue = "non";
                                                            stringValue = "dolore";
                                                        }};
                                                    }};
                                                    objectAttributeKey = new AttributeKey("dolore", "eius", "nostrum") {{
                                                        facetName = "enim";
                                                        name = "Dr. Vickie Gislason IV";
                                                        schemaArn = "autem";
                                                    }};
                                                }}),
                                            }},                 new UpdateObjectAttributesRequestBodyObjectReference() {{
                                                selector = "ex";
                                            }};);, "amet") {{
                xAmzAlgorithm = "voluptate";
                xAmzContentSha256 = "molestias";
                xAmzCredential = "voluptatibus";
                xAmzDate = "ipsum";
                xAmzSecurityToken = "hic";
                xAmzSignature = "quidem";
                xAmzSignedHeaders = "odit";
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
                .setSecurity(new Security("molestiae") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateSchemaRequest req = new UpdateSchemaRequest(                new UpdateSchemaRequestBody("accusamus");, "quia") {{
                xAmzAlgorithm = "inventore";
                xAmzContentSha256 = "doloribus";
                xAmzCredential = "praesentium";
                xAmzDate = "aliquid";
                xAmzSecurityToken = "consequuntur";
                xAmzSignature = "laboriosam";
                xAmzSignedHeaders = "nemo";
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

Updates a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.

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
                .setSecurity(new Security("reprehenderit") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateTypedLinkFacetRequest req = new UpdateTypedLinkFacetRequest(                new UpdateTypedLinkFacetRequestBody(                new org.openapis.openapi.models.shared.TypedLinkFacetAttributeUpdate[]{{
                                                add(new TypedLinkFacetAttributeUpdate(UpdateActionTypeEnum.CREATE_OR_UPDATE,                 new TypedLinkAttributeDefinition("amet", RequiredAttributeBehaviorEnum.NOT_REQUIRED, FacetAttributeTypeEnum.NUMBER) {{
                                                                    defaultValue = new TypedAttributeValue() {{
                                                                        binaryValue = "minus";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2020-09-06T04:49:44.902Z");
                                                                        numberValue = "omnis";
                                                                        stringValue = "et";
                                                                    }};;
                                                                    isImmutable = false;
                                                                    rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                                        put("fuga", new Rule() {{
                                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                                put("distinctio", "fugiat");
                                                                                put("nulla", "totam");
                                                                                put("praesentium", "officiis");
                                                                            }};
                                                                            type = RuleTypeEnum.NUMBER_COMPARISON;
                                                                        }});
                                                                        put("vitae", new Rule() {{
                                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                                put("laboriosam", "minus");
                                                                                put("labore", "quas");
                                                                                put("sed", "veniam");
                                                                                put("sed", "quibusdam");
                                                                            }};
                                                                            type = RuleTypeEnum.NUMBER_COMPARISON;
                                                                        }});
                                                                        put("voluptate", new Rule() {{
                                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                                put("et", "eveniet");
                                                                                put("voluptate", "hic");
                                                                            }};
                                                                            type = RuleTypeEnum.STRING_LENGTH;
                                                                        }});
                                                                        put("perferendis", new Rule() {{
                                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                                put("eius", "aut");
                                                                                put("consequatur", "iste");
                                                                            }};
                                                                            type = RuleTypeEnum.STRING_LENGTH;
                                                                        }});
                                                                    }};
                                                                }};) {{
                                                    action = UpdateActionTypeEnum.CREATE_OR_UPDATE;
                                                    attribute = new TypedLinkAttributeDefinition("cumque", RequiredAttributeBehaviorEnum.NOT_REQUIRED, FacetAttributeTypeEnum.BINARY) {{
                                                        defaultValue = new TypedAttributeValue() {{
                                                            binaryValue = "vel";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2020-07-31T09:19:12.515Z");
                                                            numberValue = "vel";
                                                            stringValue = "distinctio";
                                                        }};
                                                        isImmutable = false;
                                                        name = "Moses Hayes";
                                                        requiredBehavior = RequiredAttributeBehaviorEnum.NOT_REQUIRED;
                                                        rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                            put("ad", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("nostrum", "minus");
                                                                }};
                                                                type = RuleTypeEnum.NUMBER_COMPARISON;
                                                            }});
                                                            put("quam", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("numquam", "architecto");
                                                                    put("fuga", "totam");
                                                                }};
                                                                type = RuleTypeEnum.BINARY_LENGTH;
                                                            }});
                                                            put("quasi", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("officiis", "veniam");
                                                                }};
                                                                type = RuleTypeEnum.BINARY_LENGTH;
                                                            }});
                                                            put("dolore", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("libero", "ut");
                                                                    put("cumque", "quia");
                                                                }};
                                                                type = RuleTypeEnum.BINARY_LENGTH;
                                                            }});
                                                        }};
                                                        type = FacetAttributeTypeEnum.NUMBER;
                                                    }};
                                                }}),
                                                add(new TypedLinkFacetAttributeUpdate(UpdateActionTypeEnum.CREATE_OR_UPDATE,                 new TypedLinkAttributeDefinition("illo", RequiredAttributeBehaviorEnum.NOT_REQUIRED, FacetAttributeTypeEnum.STRING) {{
                                                                    defaultValue = new TypedAttributeValue() {{
                                                                        binaryValue = "aliquam";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2021-12-02T00:52:51.188Z");
                                                                        numberValue = "dicta";
                                                                        stringValue = "magnam";
                                                                    }};;
                                                                    isImmutable = false;
                                                                    rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                                        put("cum", new Rule() {{
                                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                                put("eius", "maiores");
                                                                                put("delectus", "quos");
                                                                            }};
                                                                            type = RuleTypeEnum.STRING_FROM_SET;
                                                                        }});
                                                                    }};
                                                                }};) {{
                                                    action = UpdateActionTypeEnum.DELETE;
                                                    attribute = new TypedLinkAttributeDefinition("repudiandae", RequiredAttributeBehaviorEnum.NOT_REQUIRED, FacetAttributeTypeEnum.NUMBER) {{
                                                        defaultValue = new TypedAttributeValue() {{
                                                            binaryValue = "voluptatum";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-07-08T13:23:00.631Z");
                                                            numberValue = "natus";
                                                            stringValue = "repellendus";
                                                        }};
                                                        isImmutable = false;
                                                        name = "Raymond Schulist";
                                                        requiredBehavior = RequiredAttributeBehaviorEnum.REQUIRED_ALWAYS;
                                                        rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                            put("voluptate", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("ullam", "illum");
                                                                    put("mollitia", "ipsa");
                                                                    put("quos", "quo");
                                                                }};
                                                                type = RuleTypeEnum.NUMBER_COMPARISON;
                                                            }});
                                                            put("in", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("id", "eum");
                                                                    put("cumque", "odio");
                                                                    put("atque", "similique");
                                                                    put("quia", "architecto");
                                                                }};
                                                                type = RuleTypeEnum.NUMBER_COMPARISON;
                                                            }});
                                                            put("accusamus", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("excepturi", "harum");
                                                                }};
                                                                type = RuleTypeEnum.STRING_FROM_SET;
                                                            }});
                                                        }};
                                                        type = FacetAttributeTypeEnum.DATETIME;
                                                    }};
                                                }}),
                                                add(new TypedLinkFacetAttributeUpdate(UpdateActionTypeEnum.CREATE_OR_UPDATE,                 new TypedLinkAttributeDefinition("temporibus", RequiredAttributeBehaviorEnum.NOT_REQUIRED, FacetAttributeTypeEnum.NUMBER) {{
                                                                    defaultValue = new TypedAttributeValue() {{
                                                                        binaryValue = "commodi";
                                                                        booleanValue = false;
                                                                        datetimeValue = OffsetDateTime.parse("2022-06-29T11:32:33.368Z");
                                                                        numberValue = "magni";
                                                                        stringValue = "quisquam";
                                                                    }};;
                                                                    isImmutable = false;
                                                                    rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                                        put("in", new Rule() {{
                                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                                put("delectus", "blanditiis");
                                                                            }};
                                                                            type = RuleTypeEnum.STRING_LENGTH;
                                                                        }});
                                                                        put("tenetur", new Rule() {{
                                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                                put("exercitationem", "a");
                                                                                put("tempore", "laboriosam");
                                                                                put("earum", "occaecati");
                                                                                put("dicta", "quidem");
                                                                            }};
                                                                            type = RuleTypeEnum.STRING_FROM_SET;
                                                                        }});
                                                                        put("laborum", new Rule() {{
                                                                            parameters = new java.util.HashMap<String, String>() {{
                                                                                put("a", "dignissimos");
                                                                                put("labore", "laudantium");
                                                                                put("dolore", "aliquid");
                                                                            }};
                                                                            type = RuleTypeEnum.STRING_LENGTH;
                                                                        }});
                                                                    }};
                                                                }};) {{
                                                    action = UpdateActionTypeEnum.DELETE;
                                                    attribute = new TypedLinkAttributeDefinition("magni", RequiredAttributeBehaviorEnum.NOT_REQUIRED, FacetAttributeTypeEnum.NUMBER) {{
                                                        defaultValue = new TypedAttributeValue() {{
                                                            binaryValue = "ab";
                                                            booleanValue = false;
                                                            datetimeValue = OffsetDateTime.parse("2022-12-28T01:35:11.563Z");
                                                            numberValue = "itaque";
                                                            stringValue = "repellat";
                                                        }};
                                                        isImmutable = false;
                                                        name = "Carmen Reichel";
                                                        requiredBehavior = RequiredAttributeBehaviorEnum.REQUIRED_ALWAYS;
                                                        rules = new java.util.HashMap<String, org.openapis.openapi.models.shared.Rule>() {{
                                                            put("recusandae", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("mollitia", "mollitia");
                                                                    put("blanditiis", "suscipit");
                                                                }};
                                                                type = RuleTypeEnum.STRING_FROM_SET;
                                                            }});
                                                            put("quis", new Rule() {{
                                                                parameters = new java.util.HashMap<String, String>() {{
                                                                    put("corporis", "iste");
                                                                    put("ea", "autem");
                                                                }};
                                                                type = RuleTypeEnum.NUMBER_COMPARISON;
                                                            }});
                                                        }};
                                                        type = FacetAttributeTypeEnum.STRING;
                                                    }};
                                                }}),
                                            }},                 new String[]{{
                                                add("quod"),
                                            }}, "dolorem");, "neque") {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "repellendus";
                xAmzDate = "soluta";
                xAmzSecurityToken = "aut";
                xAmzSignature = "ullam";
                xAmzSignedHeaders = "amet";
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
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpgradeAppliedSchemaRequest req = new UpgradeAppliedSchemaRequest(                new UpgradeAppliedSchemaRequestBody("quibusdam", "sint") {{
                                dryRun = false;
                            }};) {{
                xAmzAlgorithm = "voluptates";
                xAmzContentSha256 = "nihil";
                xAmzCredential = "ad";
                xAmzDate = "eligendi";
                xAmzSecurityToken = "fuga";
                xAmzSignature = "consequatur";
                xAmzSignedHeaders = "sit";
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
                .setSecurity(new Security("iure") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpgradePublishedSchemaRequest req = new UpgradePublishedSchemaRequest(                new UpgradePublishedSchemaRequestBody("earum", "quis", "dolorem") {{
                                dryRun = false;
                            }};) {{
                xAmzAlgorithm = "omnis";
                xAmzContentSha256 = "sed";
                xAmzCredential = "quo";
                xAmzDate = "et";
                xAmzSecurityToken = "illo";
                xAmzSignature = "est";
                xAmzSignedHeaders = "quia";
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
