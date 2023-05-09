# versions

## Overview

When artifact content is updated, old versions of the artifact content are not lost.  All versions can be listed and accessed if necessary. This section describes the operations used to list and access all versions of an artifact's content and metadata.

### Available Operations

* [createArtifactVersionJson](#createartifactversionjson) - Create artifact version
* [createArtifactVersionRaw](#createartifactversionraw) - Create artifact version
* [deleteArtifactVersion](#deleteartifactversion) - Delete artifact version
* [getArtifactVersion](#getartifactversion) - Get artifact version
* [getArtifactVersionReferences](#getartifactversionreferences) - Get artifact version
* [listArtifactVersions](#listartifactversions) - List artifact versions
* [updateArtifactVersionState](#updateartifactversionstate) - Update artifact version state

## createArtifactVersionJson

Creates a new version of the artifact by uploading new content.  The configured rules for
the artifact are applied, and if they all pass, the new content is added as the most recent 
version of the artifact.  If any of the rules fail, an error is returned.

The body of the request can be the raw content of the new artifact version, or the raw content 
and a set of references pointing to other artifacts, and the type
of that content should match the artifact's type (for example if the artifact type is `AVRO`
then the content of the request should be an Apache Avro document).

This operation can fail for the following reasons:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with this `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateArtifactVersionJsonRequest;
import org.openapis.openapi.models.operations.CreateArtifactVersionJsonResponse;
import org.openapis.openapi.models.shared.ArtifactContent;
import org.openapis.openapi.models.shared.ArtifactReference;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateArtifactVersionJsonRequest req = new CreateArtifactVersionJsonRequest(                new ArtifactContent("maiores",                 new org.openapis.openapi.models.shared.ArtifactReference[]{{
                                                add(new ArtifactReference("non", "occaecati", "enim") {{
                                                    artifactId = "dicta";
                                                    groupId = "magnam";
                                                    name = "Irving Jenkins";
                                                    version = "accusamus";
                                                }}),
                                                add(new ArtifactReference("sapiente", "amet", "deserunt") {{
                                                    artifactId = "accusamus";
                                                    groupId = "delectus";
                                                    name = "Rene Reinger";
                                                    version = "deleniti";
                                                }}),
                                                add(new ArtifactReference("id", "labore", "labore") {{
                                                    artifactId = "nisi";
                                                    groupId = "vel";
                                                    name = "Ms. Arturo Krajcik";
                                                    version = "distinctio";
                                                }}),
                                            }});, ""example-artifact"", ""my-group"") {{
                xRegistryDescription = ""Artifact description"";
                xRegistryDescriptionEncoded = ""QXJ0aWZhY3QgZGVzY3JpcHRpb24K"";
                xRegistryName = ""Artifact name"";
                xRegistryNameEncoded = ""QXJ0aWZhY3QgbmFtZQo="";
                xRegistryVersion = ""3.1.6"";
            }};            

            CreateArtifactVersionJsonResponse res = sdk.versions.createArtifactVersionJson(req);

            if (res.versionMetaData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createArtifactVersionRaw

Creates a new version of the artifact by uploading new content.  The configured rules for
the artifact are applied, and if they all pass, the new content is added as the most recent 
version of the artifact.  If any of the rules fail, an error is returned.

The body of the request can be the raw content of the new artifact version, or the raw content 
and a set of references pointing to other artifacts, and the type
of that content should match the artifact's type (for example if the artifact type is `AVRO`
then the content of the request should be an Apache Avro document).

This operation can fail for the following reasons:

* Provided content (request body) was empty (HTTP error `400`)
* No artifact with this `artifactId` exists (HTTP error `404`)
* The new content violates one of the rules configured for the artifact (HTTP error `409`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateArtifactVersionRawRequest;
import org.openapis.openapi.models.operations.CreateArtifactVersionRawResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreateArtifactVersionRawRequest req = new CreateArtifactVersionRawRequest("suscipit".getBytes(), ""example-artifact"", ""my-group"") {{
                xRegistryDescription = ""Artifact description"";
                xRegistryDescriptionEncoded = ""QXJ0aWZhY3QgZGVzY3JpcHRpb24K"";
                xRegistryName = ""Artifact name"";
                xRegistryNameEncoded = ""QXJ0aWZhY3QgbmFtZQo="";
                xRegistryVersion = ""3.1.6"";
            }};            

            CreateArtifactVersionRawResponse res = sdk.versions.createArtifactVersionRaw(req);

            if (res.versionMetaData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteArtifactVersion

Deletes a single version of the artifact. Parameters `groupId`, `artifactId` and the unique `version`
are needed. If this is the only version of the artifact, this operation is the same as 
deleting the entire artifact.

This feature is disabled by default and it's discouraged for normal usage. To enable it, set the `registry.rest.artifact.deletion.enabled` property to true. This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No version with this `version` exists (HTTP error `404`)
 * Feature is disabled (HTTP error `405`)
 * A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteArtifactVersionRequest;
import org.openapis.openapi.models.operations.DeleteArtifactVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteArtifactVersionRequest req = new DeleteArtifactVersionRequest(""example-artifact"", ""my-group"", ""3.1.6"");            

            DeleteArtifactVersionResponse res = sdk.versions.deleteArtifactVersion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getArtifactVersion

Retrieves a single version of the artifact content.  Both the `artifactId` and the
unique `version` number must be provided.  The `Content-Type` of the response depends 
on the artifact type.  In most cases, this is `application/json`, but for some types 
it may be different (for example, `PROTOBUF`).

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No version with this `version` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetArtifactVersionRequest;
import org.openapis.openapi.models.operations.GetArtifactVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetArtifactVersionRequest req = new GetArtifactVersionRequest(""example-artifact"", ""my-group"", ""3.1.6"") {{
                dereference = false;
            }};            

            GetArtifactVersionResponse res = sdk.versions.getArtifactVersion(req);

            if (res.fileContent != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getArtifactVersionReferences

Retrieves a single version of the artifact content.  Both the `artifactId` and the
unique `version` number must be provided.  The `Content-Type` of the response depends 
on the artifact type.  In most cases, this is `application/json`, but for some types 
it may be different (for example, `PROTOBUF`).

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No version with this `version` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetArtifactVersionReferencesRequest;
import org.openapis.openapi.models.operations.GetArtifactVersionReferencesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetArtifactVersionReferencesRequest req = new GetArtifactVersionReferencesRequest(""example-artifact"", ""my-group"", ""3.1.6"");            

            GetArtifactVersionReferencesResponse res = sdk.versions.getArtifactVersionReferences(req);

            if (res.artifactReferences != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listArtifactVersions

Returns a list of all versions of the artifact.  The result set is paged.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListArtifactVersionsRequest;
import org.openapis.openapi.models.operations.ListArtifactVersionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListArtifactVersionsRequest req = new ListArtifactVersionsRequest(""example-artifact"", ""my-group"") {{
                limit = 618016L;
                offset = 749170L;
            }};            

            ListArtifactVersionsResponse res = sdk.versions.listArtifactVersions(req);

            if (res.versionSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateArtifactVersionState

Updates the state of a specific version of an artifact.  For example, you can use 
this operation to disable a specific version.

This operation can fail for the following reasons:

* No artifact with this `artifactId` exists (HTTP error `404`)
* No version with this `version` exists (HTTP error `404`)
* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateArtifactVersionStateRequest;
import org.openapis.openapi.models.operations.UpdateArtifactVersionStateResponse;
import org.openapis.openapi.models.shared.ArtifactStateEnum;
import org.openapis.openapi.models.shared.UpdateState;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateArtifactVersionStateRequest req = new UpdateArtifactVersionStateRequest(                new UpdateState(ArtifactStateEnum.DISABLED);, ""example-artifact"", ""my-group"", ""3.1.6"");            

            UpdateArtifactVersionStateResponse res = sdk.versions.updateArtifactVersionState(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
