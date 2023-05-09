# artifacts

## Overview

The primary way to interact with the Apicurio Registry API is to add, update, 
or delete artifacts. This section includes all of these primary operations.

### Available Operations

* [createArtifactJson](#createartifactjson) - Create artifact
* [createArtifactRaw](#createartifactraw) - Create artifact
* [deleteArtifact](#deleteartifact) - Delete artifact
* [deleteArtifactsInGroup](#deleteartifactsingroup) - Delete artifacts in group
* [getContentByGlobalId](#getcontentbyglobalid) - Get artifact by global ID
* [getContentByHash](#getcontentbyhash) - Get artifact content by SHA-256 hash
* [getContentById](#getcontentbyid) - Get artifact content by ID
* [getLatestArtifact](#getlatestartifact) - Get latest artifact
* [listArtifactsInGroup](#listartifactsingroup) - List artifacts in group
* [referencesByContentHash](#referencesbycontenthash) - List artifact references by hash
* [referencesByContentId](#referencesbycontentid) - List artifact references by content ID
* [referencesByGlobalId](#referencesbyglobalid) - List artifact references by global ID
* [searchArtifacts](#searchartifacts) - Search for artifacts
* [searchArtifactsByContent](#searchartifactsbycontent) - Search for artifacts by content
* [updateArtifactState](#updateartifactstate) - Update artifact state
* [updateArtifactJson](#updateartifactjson) - Update artifact
* [updateArtifactRaw](#updateartifactraw) - Update artifact

## createArtifactJson

Creates a new artifact by posting the artifact content.  The body of the request should
be the raw content of the artifact.  This is typically in JSON format for *most* of the 
supported types, but may be in another format for a few (for example, `PROTOBUF`).

The registry attempts to figure out what kind of artifact is being added from the
following supported list:

* Avro (`AVRO`)
* Protobuf (`PROTOBUF`)
* JSON Schema (`JSON`)
* Kafka Connect (`KCONNECT`)
* OpenAPI (`OPENAPI`)
* AsyncAPI (`ASYNCAPI`)
* GraphQL (`GRAPHQL`)
* Web Services Description Language (`WSDL`)
* XML Schema (`XSD`)

Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType` 
HTTP request header, or include a hint in the request's `Content-Type`.  For example:

```
Content-Type: application/json; artifactType=AVRO
```

An artifact is created using the content provided in the body of the request.  This
content is created under a unique artifact ID that can be provided in the request
using the `X-Registry-ArtifactId` request header.  If not provided in the request,
the server generates a unique ID for the artifact.  It is typically recommended
that callers provide the ID, because this is typically a meaningful identifier, 
and for most use cases should be supplied by the caller.

If an artifact with the provided artifact ID already exists, the default behavior
is for the server to reject the content with a 409 error.  However, the caller can
supply the `ifExists` query parameter to alter this default behavior. The `ifExists`
query parameter can have one of the following values:

* `FAIL` (*default*) - server rejects the content with a 409 error
* `UPDATE` - server updates the existing artifact and returns the new metadata
* `RETURN` - server does not create or add content to the server, but instead 
returns the metadata for the existing artifact
* `RETURN_OR_UPDATE` - server returns an existing **version** that matches the 
provided content if such a version exists, otherwise a new version is created

This operation may fail for one of the following reasons:

* An invalid `ArtifactType` was indicated (HTTP error `400`)
* No `ArtifactType` was indicated and the server could not determine one from the content (HTTP error `400`)
* Provided content (request body) was empty (HTTP error `400`)
* An artifact with the provided ID already exists (HTTP error `409`)
* The content violates one of the configured global rules (HTTP error `409`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateArtifactJsonRequest;
import org.openapis.openapi.models.operations.CreateArtifactJsonResponse;
import org.openapis.openapi.models.operations.CreateArtifactJsonXRegistryHashAlgorithmEnum;
import org.openapis.openapi.models.shared.ArtifactContent;
import org.openapis.openapi.models.shared.ArtifactReference;
import org.openapis.openapi.models.shared.IfExistsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateArtifactJsonRequest req = new CreateArtifactJsonRequest(                new ArtifactContent("nisi",                 new org.openapis.openapi.models.shared.ArtifactReference[]{{
                                                add(new ArtifactReference("quo", "odit", "at") {{
                                                    artifactId = "temporibus";
                                                    groupId = "ab";
                                                    name = "Mrs. Marie O'Connell";
                                                    version = "sapiente";
                                                }}),
                                                add(new ArtifactReference("dolorum", "dicta", "nam") {{
                                                    artifactId = "at";
                                                    groupId = "maiores";
                                                    name = "Bernadette Schmidt";
                                                    version = "porro";
                                                }}),
                                                add(new ArtifactReference("commodi", "molestiae", "modi") {{
                                                    artifactId = "officia";
                                                    groupId = "occaecati";
                                                    name = "Cassandra Welch";
                                                    version = "beatae";
                                                }}),
                                                add(new ArtifactReference("ad", "natus", "sed") {{
                                                    artifactId = "qui";
                                                    groupId = "impedit";
                                                    name = "Cory Emmerich";
                                                    version = "perferendis";
                                                }}),
                                            }});, ""my-group"") {{
                xRegistryArtifactId = "iste";
                xRegistryArtifactType = "AVRO";
                xRegistryContentHash = "dolor";
                xRegistryDescription = ""Artifact description"";
                xRegistryDescriptionEncoded = ""QXJ0aWZhY3QgZGVzY3JpcHRpb24K"";
                xRegistryHashAlgorithm = CreateArtifactJsonXRegistryHashAlgorithmEnum.MD5;
                xRegistryName = ""Artifact name"";
                xRegistryNameEncoded = ""QXJ0aWZhY3QgbmFtZQo="";
                xRegistryVersion = ""3.1.6"";
                canonical = false;
                ifExists = IfExistsEnum.UPDATE;
            }};            

            CreateArtifactJsonResponse res = sdk.artifacts.createArtifactJson(req);

            if (res.artifactMetaData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createArtifactRaw

Creates a new artifact by posting the artifact content.  The body of the request should
be the raw content of the artifact.  This is typically in JSON format for *most* of the 
supported types, but may be in another format for a few (for example, `PROTOBUF`).

The registry attempts to figure out what kind of artifact is being added from the
following supported list:

* Avro (`AVRO`)
* Protobuf (`PROTOBUF`)
* JSON Schema (`JSON`)
* Kafka Connect (`KCONNECT`)
* OpenAPI (`OPENAPI`)
* AsyncAPI (`ASYNCAPI`)
* GraphQL (`GRAPHQL`)
* Web Services Description Language (`WSDL`)
* XML Schema (`XSD`)

Alternatively, you can specify the artifact type using the `X-Registry-ArtifactType` 
HTTP request header, or include a hint in the request's `Content-Type`.  For example:

```
Content-Type: application/json; artifactType=AVRO
```

An artifact is created using the content provided in the body of the request.  This
content is created under a unique artifact ID that can be provided in the request
using the `X-Registry-ArtifactId` request header.  If not provided in the request,
the server generates a unique ID for the artifact.  It is typically recommended
that callers provide the ID, because this is typically a meaningful identifier, 
and for most use cases should be supplied by the caller.

If an artifact with the provided artifact ID already exists, the default behavior
is for the server to reject the content with a 409 error.  However, the caller can
supply the `ifExists` query parameter to alter this default behavior. The `ifExists`
query parameter can have one of the following values:

* `FAIL` (*default*) - server rejects the content with a 409 error
* `UPDATE` - server updates the existing artifact and returns the new metadata
* `RETURN` - server does not create or add content to the server, but instead 
returns the metadata for the existing artifact
* `RETURN_OR_UPDATE` - server returns an existing **version** that matches the 
provided content if such a version exists, otherwise a new version is created

This operation may fail for one of the following reasons:

* An invalid `ArtifactType` was indicated (HTTP error `400`)
* No `ArtifactType` was indicated and the server could not determine one from the content (HTTP error `400`)
* Provided content (request body) was empty (HTTP error `400`)
* An artifact with the provided ID already exists (HTTP error `409`)
* The content violates one of the configured global rules (HTTP error `409`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateArtifactRawRequest;
import org.openapis.openapi.models.operations.CreateArtifactRawResponse;
import org.openapis.openapi.models.operations.CreateArtifactRawXRegistryHashAlgorithmEnum;
import org.openapis.openapi.models.shared.IfExistsEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateArtifactRawRequest req = new CreateArtifactRawRequest("hic".getBytes(), ""my-group"") {{
                xRegistryArtifactId = "saepe";
                xRegistryArtifactType = "AVRO";
                xRegistryContentHash = "fuga";
                xRegistryDescription = ""Artifact description"";
                xRegistryDescriptionEncoded = ""QXJ0aWZhY3QgZGVzY3JpcHRpb24K"";
                xRegistryHashAlgorithm = CreateArtifactRawXRegistryHashAlgorithmEnum.SHA256;
                xRegistryName = ""Artifact name"";
                xRegistryNameEncoded = ""QXJ0aWZhY3QgbmFtZQo="";
                xRegistryVersion = ""3.1.6"";
                canonical = false;
                ifExists = IfExistsEnum.UPDATE;
            }};            

            CreateArtifactRawResponse res = sdk.artifacts.createArtifactRaw(req);

            if (res.artifactMetaData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteArtifact

Deletes an artifact completely, resulting in all versions of the artifact also being
deleted.  This may fail for one of the following reasons:

* No artifact with the `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteArtifactRequest;
import org.openapis.openapi.models.operations.DeleteArtifactResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteArtifactRequest req = new DeleteArtifactRequest(""example-artifact"", ""my-group"");            

            DeleteArtifactResponse res = sdk.artifacts.deleteArtifact(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteArtifactsInGroup

Deletes all of the artifacts that exist in a given group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteArtifactsInGroupRequest;
import org.openapis.openapi.models.operations.DeleteArtifactsInGroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteArtifactsInGroupRequest req = new DeleteArtifactsInGroupRequest(""my-group"");            

            DeleteArtifactsInGroupResponse res = sdk.artifacts.deleteArtifactsInGroup(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContentByGlobalId

Gets the content for an artifact version in the registry using its globally unique
identifier.

This operation may fail for one of the following reasons:

* No artifact version with this `globalId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContentByGlobalIdRequest;
import org.openapis.openapi.models.operations.GetContentByGlobalIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContentByGlobalIdRequest req = new GetContentByGlobalIdRequest(613064L) {{
                dereference = false;
            }};            

            GetContentByGlobalIdResponse res = sdk.artifacts.getContentByGlobalId(req);

            if (res.fileContent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContentByHash

Gets the content for an artifact version in the registry using the 
SHA-256 hash of the content.  This content hash may be shared by multiple artifact
versions in the case where the artifact versions have identical content.

This operation may fail for one of the following reasons:

* No content with this `contentHash` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContentByHashRequest;
import org.openapis.openapi.models.operations.GetContentByHashResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContentByHashRequest req = new GetContentByHashRequest("iure");            

            GetContentByHashResponse res = sdk.artifacts.getContentByHash(req);

            if (res.fileContent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContentById

Gets the content for an artifact version in the registry using the unique content
identifier for that content.  This content ID may be shared by multiple artifact
versions in the case where the artifact versions are identical.

This operation may fail for one of the following reasons:

* No content with this `contentId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContentByIdRequest;
import org.openapis.openapi.models.operations.GetContentByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetContentByIdRequest req = new GetContentByIdRequest(902349L);            

            GetContentByIdResponse res = sdk.artifacts.getContentById(req);

            if (res.fileContent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getLatestArtifact

Returns the latest version of the artifact in its raw form.  The `Content-Type` of the
response depends on the artifact type.  In most cases, this is `application/json`, but 
for some types it may be different (for example, `PROTOBUF`).
If the latest version of the artifact is marked as `DISABLED`, the next available non-disabled version will be used.

This operation may fail for one of the following reasons:

* No artifact with this `artifactId` exists or all versions are `DISABLED` (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetLatestArtifactRequest;
import org.openapis.openapi.models.operations.GetLatestArtifactResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetLatestArtifactRequest req = new GetLatestArtifactRequest(""example-artifact"", ""my-group"") {{
                dereference = false;
            }};            

            GetLatestArtifactResponse res = sdk.artifacts.getLatestArtifact(req);

            if (res.fileContent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listArtifactsInGroup

Returns a list of all artifacts in the group.  This list is paged.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListArtifactsInGroupRequest;
import org.openapis.openapi.models.operations.ListArtifactsInGroupResponse;
import org.openapis.openapi.models.shared.SortByEnum;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListArtifactsInGroupRequest req = new ListArtifactsInGroupRequest(""my-group"") {{
                limit = 697631L;
                offset = 99280L;
                order = SortOrderEnum.ASC;
                orderby = SortByEnum.CREATED_ON;
            }};            

            ListArtifactsInGroupResponse res = sdk.artifacts.listArtifactsInGroup(req);

            if (res.artifactSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## referencesByContentHash

Returns a list containing all the artifact references using the artifact content hash.

This operation may fail for one of the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReferencesByContentHashRequest;
import org.openapis.openapi.models.operations.ReferencesByContentHashResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReferencesByContentHashRequest req = new ReferencesByContentHashRequest("est");            

            ReferencesByContentHashResponse res = sdk.artifacts.referencesByContentHash(req);

            if (res.artifactReferences != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## referencesByContentId

Returns a list containing all the artifact references using the artifact content ID.

This operation may fail for one of the following reasons:

* A server error occurred (HTTP error `500`)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReferencesByContentIdRequest;
import org.openapis.openapi.models.operations.ReferencesByContentIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReferencesByContentIdRequest req = new ReferencesByContentIdRequest(653140L);            

            ReferencesByContentIdResponse res = sdk.artifacts.referencesByContentId(req);

            if (res.artifactReferences != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## referencesByGlobalId

Returns a list containing all the artifact references using the artifact global ID.

This operation may fail for one of the following reasons:

* A server error occurred (HTTP error `500`)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReferencesByGlobalIdRequest;
import org.openapis.openapi.models.operations.ReferencesByGlobalIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ReferencesByGlobalIdRequest req = new ReferencesByGlobalIdRequest(670638L);            

            ReferencesByGlobalIdResponse res = sdk.artifacts.referencesByGlobalId(req);

            if (res.artifactReferences != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchArtifacts

Returns a paginated list of all artifacts that match the provided filter criteria.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchArtifactsRequest;
import org.openapis.openapi.models.operations.SearchArtifactsResponse;
import org.openapis.openapi.models.shared.SortByEnum;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchArtifactsRequest req = new SearchArtifactsRequest() {{
                contentId = 170909L;
                description = "dolorem";
                globalId = 358152L;
                group = "explicabo";
                labels = new String[]{{
                    add("enim"),
                    add("omnis"),
                    add("nemo"),
                    add("minima"),
                }};
                limit = 570197L;
                name = "Charlene Nicolas";
                offset = 102044L;
                order = SortOrderEnum.DESC;
                orderby = SortByEnum.NAME;
                properties = new String[]{{
                    add("consequuntur"),
                    add("repellat"),
                    add("mollitia"),
                }};
            }};            

            SearchArtifactsResponse res = sdk.artifacts.searchArtifacts(req);

            if (res.artifactSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchArtifactsByContent

Returns a paginated list of all artifacts with at least one version that matches the
posted content.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchArtifactsByContentOrderEnum;
import org.openapis.openapi.models.operations.SearchArtifactsByContentOrderbyEnum;
import org.openapis.openapi.models.operations.SearchArtifactsByContentRequest;
import org.openapis.openapi.models.operations.SearchArtifactsByContentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SearchArtifactsByContentRequest req = new SearchArtifactsByContentRequest("occaecati".getBytes()) {{
                artifactType = "AVRO";
                canonical = false;
                limit = 253291L;
                offset = 414369L;
                order = SearchArtifactsByContentOrderEnum.ASC;
                orderby = SearchArtifactsByContentOrderbyEnum.NAME;
            }};            

            SearchArtifactsByContentResponse res = sdk.artifacts.searchArtifactsByContent(req);

            if (res.artifactSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateArtifactState

Updates the state of the artifact.  For example, you can use this to mark the latest version of an artifact as `DEPRECATED`. The operation changes the state of the latest version of the artifact, even if this version is `DISABLED`. If multiple versions exist, only the most recent is changed.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateArtifactStateRequest;
import org.openapis.openapi.models.operations.UpdateArtifactStateResponse;
import org.openapis.openapi.models.shared.ArtifactStateEnum;
import org.openapis.openapi.models.shared.UpdateState;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateArtifactStateRequest req = new UpdateArtifactStateRequest(                new UpdateState(ArtifactStateEnum.ENABLED);, ""example-artifact"", ""my-group"");            

            UpdateArtifactStateResponse res = sdk.artifacts.updateArtifactState(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateArtifactJson

Updates an artifact by uploading new content.  The body of the request can
be the raw content of the artifact or a JSON object containing both the raw content and
a set of references to other artifacts..  This is typically in JSON format for *most*
of the supported types, but may be in another format for a few (for example, `PROTOBUF`).
The type of the content should be compatible with the artifact's type (it would be
an error to update an `AVRO` artifact with new `OPENAPI` content, for example).

The update could fail for a number of reasons including:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with the `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
* A server error occurred (HTTP error `500`)

When successful, this creates a new version of the artifact, making it the most recent
(and therefore official) version of the artifact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateArtifactJsonRequest;
import org.openapis.openapi.models.operations.UpdateArtifactJsonResponse;
import org.openapis.openapi.models.shared.ArtifactContent;
import org.openapis.openapi.models.shared.ArtifactReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateArtifactJsonRequest req = new UpdateArtifactJsonRequest(                new ArtifactContent("error",                 new org.openapis.openapi.models.shared.ArtifactReference[]{{
                                                add(new ArtifactReference("tenetur", "ipsam", "id") {{
                                                    artifactId = "quis";
                                                    groupId = "vitae";
                                                    name = "Matt Hamill";
                                                    version = "sequi";
                                                }}),
                                            }});, ""example-artifact"", ""my-group"") {{
                xRegistryDescription = ""Artifact description"";
                xRegistryDescriptionEncoded = ""QXJ0aWZhY3QgZGVzY3JpcHRpb24K"";
                xRegistryName = ""Artifact name"";
                xRegistryNameEncoded = ""QXJ0aWZhY3QgbmFtZQo="";
                xRegistryVersion = ""3.1.6"";
            }};            

            UpdateArtifactJsonResponse res = sdk.artifacts.updateArtifactJson(req);

            if (res.artifactMetaData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateArtifactRaw

Updates an artifact by uploading new content.  The body of the request can
be the raw content of the artifact or a JSON object containing both the raw content and
a set of references to other artifacts..  This is typically in JSON format for *most*
of the supported types, but may be in another format for a few (for example, `PROTOBUF`).
The type of the content should be compatible with the artifact's type (it would be
an error to update an `AVRO` artifact with new `OPENAPI` content, for example).

The update could fail for a number of reasons including:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with the `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
* A server error occurred (HTTP error `500`)

When successful, this creates a new version of the artifact, making it the most recent
(and therefore official) version of the artifact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateArtifactRawRequest;
import org.openapis.openapi.models.operations.UpdateArtifactRawResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateArtifactRawRequest req = new UpdateArtifactRawRequest("possimus".getBytes(), ""example-artifact"", ""my-group"") {{
                xRegistryDescription = ""Artifact description"";
                xRegistryDescriptionEncoded = ""QXJ0aWZhY3QgZGVzY3JpcHRpb24K"";
                xRegistryName = ""Artifact name"";
                xRegistryNameEncoded = ""QXJ0aWZhY3QgbmFtZQo="";
                xRegistryVersion = ""3.1.6"";
            }};            

            UpdateArtifactRawResponse res = sdk.artifacts.updateArtifactRaw(req);

            if (res.artifactMetaData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
