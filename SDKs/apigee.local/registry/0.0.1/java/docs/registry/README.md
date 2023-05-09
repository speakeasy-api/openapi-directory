# registry

### Available Operations

* [registryCreateApi](#registrycreateapi) - CreateApi creates a specified API.
* [registryCreateApiDeployment](#registrycreateapideployment) - CreateApiDeployment creates a specified deployment.
* [registryCreateApiSpec](#registrycreateapispec) - CreateApiSpec creates a specified spec.
* [registryCreateApiVersion](#registrycreateapiversion) - CreateApiVersion creates a specified version.
* [registryCreateArtifact](#registrycreateartifact) - CreateArtifact creates a specified artifact.
* [registryDeleteApi](#registrydeleteapi) - DeleteApi removes a specified API and all of the resources that it
 owns.
* [registryDeleteApiDeployment](#registrydeleteapideployment) - DeleteApiDeployment removes a specified deployment, all revisions, and all
 child resources (e.g. artifacts).
* [registryDeleteApiDeploymentRevision](#registrydeleteapideploymentrevision) - DeleteApiDeploymentRevision deletes a revision of a deployment.
* [registryDeleteApiSpec](#registrydeleteapispec) - DeleteApiSpec removes a specified spec, all revisions, and all child
 resources (e.g. artifacts).
* [registryDeleteApiSpecRevision](#registrydeleteapispecrevision) - DeleteApiSpecRevision deletes a revision of a spec.
* [registryDeleteApiVersion](#registrydeleteapiversion) - DeleteApiVersion removes a specified version and all of the resources that
 it owns.
* [registryDeleteArtifact](#registrydeleteartifact) - DeleteArtifact removes a specified artifact.
* [registryGetApi](#registrygetapi) - GetApi returns a specified API.
* [registryGetApiDeployment](#registrygetapideployment) - GetApiDeployment returns a specified deployment.
* [registryGetApiSpec](#registrygetapispec) - GetApiSpec returns a specified spec.
* [registryGetApiSpecContents](#registrygetapispeccontents) - GetApiSpecContents returns the contents of a specified spec.
 If specs are stored with GZip compression, the default behavior
 is to return the spec uncompressed (the mime_type response field
 indicates the exact format returned).
* [registryGetApiVersion](#registrygetapiversion) - GetApiVersion returns a specified version.
* [registryGetArtifact](#registrygetartifact) - GetArtifact returns a specified artifact.
* [registryGetArtifactContents](#registrygetartifactcontents) - GetArtifactContents returns the contents of a specified artifact.
 If artifacts are stored with GZip compression, the default behavior
 is to return the artifact uncompressed (the mime_type response field
 indicates the exact format returned).
* [registryListApiDeploymentRevisions](#registrylistapideploymentrevisions) - ListApiDeploymentRevisions lists all revisions of a deployment.
 Revisions are returned in descending order of revision creation time.
* [registryListApiDeployments](#registrylistapideployments) - ListApiDeployments returns matching deployments.
* [registryListApiSpecRevisions](#registrylistapispecrevisions) - ListApiSpecRevisions lists all revisions of a spec.
 Revisions are returned in descending order of revision creation time.
* [registryListApiSpecs](#registrylistapispecs) - ListApiSpecs returns matching specs.
* [registryListApiVersions](#registrylistapiversions) - ListApiVersions returns matching versions.
* [registryListApis](#registrylistapis) - ListApis returns matching APIs.
* [registryListArtifacts](#registrylistartifacts) - ListArtifacts returns matching artifacts.
* [registryReplaceArtifact](#registryreplaceartifact) - ReplaceArtifact can be used to replace a specified artifact.
* [registryRollbackApiDeployment](#registryrollbackapideployment) - RollbackApiDeployment sets the current revision to a specified prior
 revision. Note that this creates a new revision with a new revision ID.
* [registryRollbackApiSpec](#registryrollbackapispec) - RollbackApiSpec sets the current revision to a specified prior revision.
 Note that this creates a new revision with a new revision ID.
* [registryTagApiDeploymentRevision](#registrytagapideploymentrevision) - TagApiDeploymentRevision adds a tag to a specified revision of a
 deployment.
* [registryTagApiSpecRevision](#registrytagapispecrevision) - TagApiSpecRevision adds a tag to a specified revision of a spec.
* [registryUpdateApi](#registryupdateapi) - UpdateApi can be used to modify a specified API.
* [registryUpdateApiDeployment](#registryupdateapideployment) - UpdateApiDeployment can be used to modify a specified deployment.
* [registryUpdateApiSpec](#registryupdateapispec) - UpdateApiSpec can be used to modify a specified spec.
* [registryUpdateApiVersion](#registryupdateapiversion) - UpdateApiVersion can be used to modify a specified version.

## registryCreateApi

CreateApi creates a specified API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryCreateApiRequest;
import org.openapis.openapi.models.operations.RegistryCreateApiResponse;
import org.openapis.openapi.models.shared.ApiInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryCreateApiRequest req = new RegistryCreateApiRequest(                new ApiInput() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("ab", "quis");
                                    put("veritatis", "deserunt");
                                    put("perferendis", "ipsam");
                                    put("repellendus", "sapiente");
                                }};
                                availability = "quo";
                                description = "odit";
                                displayName = "at";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("maiores", "molestiae");
                                    put("quod", "quod");
                                    put("esse", "totam");
                                    put("porro", "dolorum");
                                }};
                                name = "Antoinette Nikolaus";
                                recommendedDeployment = "deleniti";
                                recommendedVersion = "hic";
                            }};, "optio", "totam") {{
                apiId = "beatae";
            }};            

            RegistryCreateApiResponse res = sdk.registry.registryCreateApi(req);

            if (res.api != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryCreateApiDeployment

CreateApiDeployment creates a specified deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryCreateApiDeploymentRequest;
import org.openapis.openapi.models.operations.RegistryCreateApiDeploymentResponse;
import org.openapis.openapi.models.shared.ApiDeploymentInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryCreateApiDeploymentRequest req = new RegistryCreateApiDeploymentRequest(                new ApiDeploymentInput() {{
                                accessGuidance = "commodi";
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("modi", "qui");
                                    put("impedit", "cum");
                                }};
                                apiSpecRevision = "esse";
                                description = "ipsum";
                                displayName = "excepturi";
                                endpointUri = "aspernatur";
                                externalChannelUri = "perferendis";
                                intendedAudience = "ad";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("sed", "iste");
                                    put("dolor", "natus");
                                    put("laboriosam", "hic");
                                }};
                                name = "Wilbur Kirlin";
                            }};, "iure", "saepe", "quidem") {{
                apiDeploymentId = "architecto";
            }};            

            RegistryCreateApiDeploymentResponse res = sdk.registry.registryCreateApiDeployment(req);

            if (res.apiDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryCreateApiSpec

CreateApiSpec creates a specified spec.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryCreateApiSpecRequest;
import org.openapis.openapi.models.operations.RegistryCreateApiSpecResponse;
import org.openapis.openapi.models.shared.ApiSpecInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryCreateApiSpecRequest req = new RegistryCreateApiSpecRequest(                new ApiSpecInput() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("reiciendis", "est");
                                }};
                                contents = "mollitia";
                                description = "laborum";
                                filename = "dolores";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("corporis", "explicabo");
                                }};
                                mimeType = "nobis";
                                name = "Guadalupe Hickle";
                                sourceUri = "accusantium";
                            }};, "iure", "culpa", "doloribus", "sapiente") {{
                apiSpecId = "architecto";
            }};            

            RegistryCreateApiSpecResponse res = sdk.registry.registryCreateApiSpec(req);

            if (res.apiSpec != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryCreateApiVersion

CreateApiVersion creates a specified version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryCreateApiVersionRequest;
import org.openapis.openapi.models.operations.RegistryCreateApiVersionResponse;
import org.openapis.openapi.models.shared.ApiVersionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryCreateApiVersionRequest req = new RegistryCreateApiVersionRequest(                new ApiVersionInput() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("dolorem", "culpa");
                                    put("consequuntur", "repellat");
                                    put("mollitia", "occaecati");
                                }};
                                description = "numquam";
                                displayName = "commodi";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("molestiae", "velit");
                                    put("error", "quia");
                                }};
                                name = "Gloria Padberg";
                                state = "odit";
                            }};, "quo", "sequi", "tenetur") {{
                apiVersionId = "ipsam";
            }};            

            RegistryCreateApiVersionResponse res = sdk.registry.registryCreateApiVersion(req);

            if (res.apiVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryCreateArtifact

CreateArtifact creates a specified artifact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryCreateArtifactRequest;
import org.openapis.openapi.models.operations.RegistryCreateArtifactResponse;
import org.openapis.openapi.models.shared.ArtifactInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryCreateArtifactRequest req = new RegistryCreateArtifactRequest(                new ArtifactInput() {{
                                contents = "id";
                                mimeType = "possimus";
                                name = "Joyce Mueller";
                            }};, "quasi", "reiciendis") {{
                artifactId = "voluptatibus";
            }};            

            RegistryCreateArtifactResponse res = sdk.registry.registryCreateArtifact(req);

            if (res.artifact != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryDeleteApi

DeleteApi removes a specified API and all of the resources that it
 owns.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryDeleteApiRequest;
import org.openapis.openapi.models.operations.RegistryDeleteApiResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryDeleteApiRequest req = new RegistryDeleteApiRequest("vero", "nihil", "praesentium") {{
                force = false;
            }};            

            RegistryDeleteApiResponse res = sdk.registry.registryDeleteApi(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryDeleteApiDeployment

DeleteApiDeployment removes a specified deployment, all revisions, and all
 child resources (e.g. artifacts).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryDeleteApiDeploymentRequest;
import org.openapis.openapi.models.operations.RegistryDeleteApiDeploymentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryDeleteApiDeploymentRequest req = new RegistryDeleteApiDeploymentRequest("voluptatibus", "ipsa", "omnis", "voluptate") {{
                force = false;
            }};            

            RegistryDeleteApiDeploymentResponse res = sdk.registry.registryDeleteApiDeployment(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryDeleteApiDeploymentRevision

DeleteApiDeploymentRevision deletes a revision of a deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryDeleteApiDeploymentRevisionRequest;
import org.openapis.openapi.models.operations.RegistryDeleteApiDeploymentRevisionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryDeleteApiDeploymentRevisionRequest req = new RegistryDeleteApiDeploymentRevisionRequest("cum", "perferendis", "doloremque", "reprehenderit");            

            RegistryDeleteApiDeploymentRevisionResponse res = sdk.registry.registryDeleteApiDeploymentRevision(req);

            if (res.apiDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryDeleteApiSpec

DeleteApiSpec removes a specified spec, all revisions, and all child
 resources (e.g. artifacts).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryDeleteApiSpecRequest;
import org.openapis.openapi.models.operations.RegistryDeleteApiSpecResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryDeleteApiSpecRequest req = new RegistryDeleteApiSpecRequest("ut", "maiores", "dicta", "corporis", "dolore") {{
                force = false;
            }};            

            RegistryDeleteApiSpecResponse res = sdk.registry.registryDeleteApiSpec(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryDeleteApiSpecRevision

DeleteApiSpecRevision deletes a revision of a spec.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryDeleteApiSpecRevisionRequest;
import org.openapis.openapi.models.operations.RegistryDeleteApiSpecRevisionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryDeleteApiSpecRevisionRequest req = new RegistryDeleteApiSpecRevisionRequest("iusto", "dicta", "harum", "enim", "accusamus");            

            RegistryDeleteApiSpecRevisionResponse res = sdk.registry.registryDeleteApiSpecRevision(req);

            if (res.apiSpec != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryDeleteApiVersion

DeleteApiVersion removes a specified version and all of the resources that
 it owns.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryDeleteApiVersionRequest;
import org.openapis.openapi.models.operations.RegistryDeleteApiVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryDeleteApiVersionRequest req = new RegistryDeleteApiVersionRequest("commodi", "repudiandae", "quae", "ipsum") {{
                force = false;
            }};            

            RegistryDeleteApiVersionResponse res = sdk.registry.registryDeleteApiVersion(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryDeleteArtifact

DeleteArtifact removes a specified artifact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryDeleteArtifactRequest;
import org.openapis.openapi.models.operations.RegistryDeleteArtifactResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryDeleteArtifactRequest req = new RegistryDeleteArtifactRequest("quidem", "molestias", "excepturi");            

            RegistryDeleteArtifactResponse res = sdk.registry.registryDeleteArtifact(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryGetApi

GetApi returns a specified API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryGetApiRequest;
import org.openapis.openapi.models.operations.RegistryGetApiResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryGetApiRequest req = new RegistryGetApiRequest("pariatur", "modi", "praesentium");            

            RegistryGetApiResponse res = sdk.registry.registryGetApi(req);

            if (res.api != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryGetApiDeployment

GetApiDeployment returns a specified deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryGetApiDeploymentRequest;
import org.openapis.openapi.models.operations.RegistryGetApiDeploymentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryGetApiDeploymentRequest req = new RegistryGetApiDeploymentRequest("rem", "voluptates", "quasi", "repudiandae");            

            RegistryGetApiDeploymentResponse res = sdk.registry.registryGetApiDeployment(req);

            if (res.apiDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryGetApiSpec

GetApiSpec returns a specified spec.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryGetApiSpecRequest;
import org.openapis.openapi.models.operations.RegistryGetApiSpecResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryGetApiSpecRequest req = new RegistryGetApiSpecRequest("sint", "veritatis", "itaque", "incidunt", "enim");            

            RegistryGetApiSpecResponse res = sdk.registry.registryGetApiSpec(req);

            if (res.apiSpec != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryGetApiSpecContents

GetApiSpecContents returns the contents of a specified spec.
 If specs are stored with GZip compression, the default behavior
 is to return the spec uncompressed (the mime_type response field
 indicates the exact format returned).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryGetApiSpecContentsRequest;
import org.openapis.openapi.models.operations.RegistryGetApiSpecContentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryGetApiSpecContentsRequest req = new RegistryGetApiSpecContentsRequest("consequatur", "est", "quibusdam", "explicabo", "deserunt");            

            RegistryGetApiSpecContentsResponse res = sdk.registry.registryGetApiSpecContents(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryGetApiVersion

GetApiVersion returns a specified version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryGetApiVersionRequest;
import org.openapis.openapi.models.operations.RegistryGetApiVersionResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryGetApiVersionRequest req = new RegistryGetApiVersionRequest("distinctio", "quibusdam", "labore", "modi");            

            RegistryGetApiVersionResponse res = sdk.registry.registryGetApiVersion(req);

            if (res.apiVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryGetArtifact

GetArtifact returns a specified artifact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryGetArtifactRequest;
import org.openapis.openapi.models.operations.RegistryGetArtifactResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryGetArtifactRequest req = new RegistryGetArtifactRequest("qui", "aliquid", "cupiditate");            

            RegistryGetArtifactResponse res = sdk.registry.registryGetArtifact(req);

            if (res.artifact != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryGetArtifactContents

GetArtifactContents returns the contents of a specified artifact.
 If artifacts are stored with GZip compression, the default behavior
 is to return the artifact uncompressed (the mime_type response field
 indicates the exact format returned).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryGetArtifactContentsRequest;
import org.openapis.openapi.models.operations.RegistryGetArtifactContentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryGetArtifactContentsRequest req = new RegistryGetArtifactContentsRequest("quos", "perferendis", "magni");            

            RegistryGetArtifactContentsResponse res = sdk.registry.registryGetArtifactContents(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryListApiDeploymentRevisions

ListApiDeploymentRevisions lists all revisions of a deployment.
 Revisions are returned in descending order of revision creation time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryListApiDeploymentRevisionsRequest;
import org.openapis.openapi.models.operations.RegistryListApiDeploymentRevisionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryListApiDeploymentRevisionsRequest req = new RegistryListApiDeploymentRevisionsRequest("assumenda", "ipsam", "alias", "fugit") {{
                pageSize = 677817;
                pageToken = "excepturi";
            }};            

            RegistryListApiDeploymentRevisionsResponse res = sdk.registry.registryListApiDeploymentRevisions(req);

            if (res.listApiDeploymentRevisionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryListApiDeployments

ListApiDeployments returns matching deployments.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryListApiDeploymentsRequest;
import org.openapis.openapi.models.operations.RegistryListApiDeploymentsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryListApiDeploymentsRequest req = new RegistryListApiDeploymentsRequest("tempora", "facilis", "tempore") {{
                filter = "labore";
                pageSize = 962189;
                pageToken = "eum";
            }};            

            RegistryListApiDeploymentsResponse res = sdk.registry.registryListApiDeployments(req);

            if (res.listApiDeploymentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryListApiSpecRevisions

ListApiSpecRevisions lists all revisions of a spec.
 Revisions are returned in descending order of revision creation time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryListApiSpecRevisionsRequest;
import org.openapis.openapi.models.operations.RegistryListApiSpecRevisionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryListApiSpecRevisionsRequest req = new RegistryListApiSpecRevisionsRequest("non", "eligendi", "sint", "aliquid", "provident") {{
                pageSize = 896039;
                pageToken = "sint";
            }};            

            RegistryListApiSpecRevisionsResponse res = sdk.registry.registryListApiSpecRevisions(req);

            if (res.listApiSpecRevisionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryListApiSpecs

ListApiSpecs returns matching specs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryListApiSpecsRequest;
import org.openapis.openapi.models.operations.RegistryListApiSpecsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryListApiSpecsRequest req = new RegistryListApiSpecsRequest("officia", "dolor", "debitis", "a") {{
                filter = "dolorum";
                pageSize = 447125;
                pageToken = "in";
            }};            

            RegistryListApiSpecsResponse res = sdk.registry.registryListApiSpecs(req);

            if (res.listApiSpecsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryListApiVersions

ListApiVersions returns matching versions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryListApiVersionsRequest;
import org.openapis.openapi.models.operations.RegistryListApiVersionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryListApiVersionsRequest req = new RegistryListApiVersionsRequest("illum", "maiores", "rerum") {{
                filter = "dicta";
                pageSize = 297437;
                pageToken = "cumque";
            }};            

            RegistryListApiVersionsResponse res = sdk.registry.registryListApiVersions(req);

            if (res.listApiVersionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryListApis

ListApis returns matching APIs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryListApisRequest;
import org.openapis.openapi.models.operations.RegistryListApisResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryListApisRequest req = new RegistryListApisRequest("facere", "ea") {{
                filter = "aliquid";
                pageSize = 675439;
                pageToken = "accusamus";
            }};            

            RegistryListApisResponse res = sdk.registry.registryListApis(req);

            if (res.listApisResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryListArtifacts

ListArtifacts returns matching artifacts.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryListArtifactsRequest;
import org.openapis.openapi.models.operations.RegistryListArtifactsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryListArtifactsRequest req = new RegistryListArtifactsRequest("non", "occaecati") {{
                filter = "enim";
                pageSize = 881736;
                pageToken = "delectus";
            }};            

            RegistryListArtifactsResponse res = sdk.registry.registryListArtifacts(req);

            if (res.listArtifactsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryReplaceArtifact

ReplaceArtifact can be used to replace a specified artifact.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryReplaceArtifactRequest;
import org.openapis.openapi.models.operations.RegistryReplaceArtifactResponse;
import org.openapis.openapi.models.shared.ArtifactInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryReplaceArtifactRequest req = new RegistryReplaceArtifactRequest(                new ArtifactInput() {{
                                contents = "quidem";
                                mimeType = "provident";
                                name = "Lynn Kuvalis";
                            }};, "amet", "deserunt", "nisi");            

            RegistryReplaceArtifactResponse res = sdk.registry.registryReplaceArtifact(req);

            if (res.artifact != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryRollbackApiDeployment

RollbackApiDeployment sets the current revision to a specified prior
 revision. Note that this creates a new revision with a new revision ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryRollbackApiDeploymentRequest;
import org.openapis.openapi.models.operations.RegistryRollbackApiDeploymentResponse;
import org.openapis.openapi.models.shared.RollbackApiDeploymentRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryRollbackApiDeploymentRequest req = new RegistryRollbackApiDeploymentRequest(                new RollbackApiDeploymentRequest("vel", "natus");, "omnis", "molestiae", "perferendis", "nihil");            

            RegistryRollbackApiDeploymentResponse res = sdk.registry.registryRollbackApiDeployment(req);

            if (res.apiDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryRollbackApiSpec

RollbackApiSpec sets the current revision to a specified prior revision.
 Note that this creates a new revision with a new revision ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryRollbackApiSpecRequest;
import org.openapis.openapi.models.operations.RegistryRollbackApiSpecResponse;
import org.openapis.openapi.models.shared.RollbackApiSpecRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryRollbackApiSpecRequest req = new RegistryRollbackApiSpecRequest(                new RollbackApiSpecRequest("magnam", "distinctio");, "id", "labore", "labore", "suscipit", "natus");            

            RegistryRollbackApiSpecResponse res = sdk.registry.registryRollbackApiSpec(req);

            if (res.apiSpec != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryTagApiDeploymentRevision

TagApiDeploymentRevision adds a tag to a specified revision of a
 deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryTagApiDeploymentRevisionRequest;
import org.openapis.openapi.models.operations.RegistryTagApiDeploymentRevisionResponse;
import org.openapis.openapi.models.shared.TagApiDeploymentRevisionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryTagApiDeploymentRevisionRequest req = new RegistryTagApiDeploymentRevisionRequest(                new TagApiDeploymentRevisionRequest("nobis", "eum");, "vero", "aspernatur", "architecto", "magnam");            

            RegistryTagApiDeploymentRevisionResponse res = sdk.registry.registryTagApiDeploymentRevision(req);

            if (res.apiDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryTagApiSpecRevision

TagApiSpecRevision adds a tag to a specified revision of a spec.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryTagApiSpecRevisionRequest;
import org.openapis.openapi.models.operations.RegistryTagApiSpecRevisionResponse;
import org.openapis.openapi.models.shared.TagApiSpecRevisionRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryTagApiSpecRevisionRequest req = new RegistryTagApiSpecRevisionRequest(                new TagApiSpecRevisionRequest("et", "excepturi");, "ullam", "provident", "quos", "sint", "accusantium");            

            RegistryTagApiSpecRevisionResponse res = sdk.registry.registryTagApiSpecRevision(req);

            if (res.apiSpec != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryUpdateApi

UpdateApi can be used to modify a specified API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryUpdateApiRequest;
import org.openapis.openapi.models.operations.RegistryUpdateApiResponse;
import org.openapis.openapi.models.shared.ApiInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryUpdateApiRequest req = new RegistryUpdateApiRequest(                new ApiInput() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("reiciendis", "mollitia");
                                    put("ad", "eum");
                                    put("dolor", "necessitatibus");
                                }};
                                availability = "odit";
                                description = "nemo";
                                displayName = "quasi";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("doloribus", "debitis");
                                    put("eius", "maxime");
                                }};
                                name = "Mr. Andres King";
                                recommendedDeployment = "ullam";
                                recommendedVersion = "expedita";
                            }};, "nihil", "repellat", "quibusdam") {{
                allowMissing = false;
                updateMask = "sed";
            }};            

            RegistryUpdateApiResponse res = sdk.registry.registryUpdateApi(req);

            if (res.api != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryUpdateApiDeployment

UpdateApiDeployment can be used to modify a specified deployment.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryUpdateApiDeploymentRequest;
import org.openapis.openapi.models.operations.RegistryUpdateApiDeploymentResponse;
import org.openapis.openapi.models.shared.ApiDeploymentInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryUpdateApiDeploymentRequest req = new RegistryUpdateApiDeploymentRequest(                new ApiDeploymentInput() {{
                                accessGuidance = "saepe";
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("accusantium", "consequuntur");
                                    put("praesentium", "natus");
                                    put("magni", "sunt");
                                    put("quo", "illum");
                                }};
                                apiSpecRevision = "pariatur";
                                description = "maxime";
                                displayName = "ea";
                                endpointUri = "excepturi";
                                externalChannelUri = "odit";
                                intendedAudience = "ea";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("ab", "maiores");
                                }};
                                name = "Clyde Kling";
                            }};, "eaque", "pariatur", "nemo", "voluptatibus") {{
                allowMissing = false;
                updateMask = "perferendis";
            }};            

            RegistryUpdateApiDeploymentResponse res = sdk.registry.registryUpdateApiDeployment(req);

            if (res.apiDeployment != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryUpdateApiSpec

UpdateApiSpec can be used to modify a specified spec.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryUpdateApiSpecRequest;
import org.openapis.openapi.models.operations.RegistryUpdateApiSpecResponse;
import org.openapis.openapi.models.shared.ApiSpecInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryUpdateApiSpecRequest req = new RegistryUpdateApiSpecRequest(                new ApiSpecInput() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("amet", "aut");
                                    put("cumque", "corporis");
                                    put("hic", "libero");
                                    put("nobis", "dolores");
                                }};
                                contents = "quis";
                                description = "totam";
                                filename = "dignissimos";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("quis", "nesciunt");
                                }};
                                mimeType = "eos";
                                name = "Jacqueline Schimmel";
                                sourceUri = "vero";
                            }};, "nostrum", "hic", "recusandae", "omnis", "facilis") {{
                allowMissing = false;
                updateMask = "perspiciatis";
            }};            

            RegistryUpdateApiSpecResponse res = sdk.registry.registryUpdateApiSpec(req);

            if (res.apiSpec != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## registryUpdateApiVersion

UpdateApiVersion can be used to modify a specified version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RegistryUpdateApiVersionRequest;
import org.openapis.openapi.models.operations.RegistryUpdateApiVersionResponse;
import org.openapis.openapi.models.shared.ApiVersionInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RegistryUpdateApiVersionRequest req = new RegistryUpdateApiVersionRequest(                new ApiVersionInput() {{
                                annotations = new java.util.HashMap<String, String>() {{
                                    put("porro", "consequuntur");
                                }};
                                description = "blanditiis";
                                displayName = "error";
                                labels = new java.util.HashMap<String, String>() {{
                                    put("occaecati", "rerum");
                                }};
                                name = "Ollie Watsica";
                                state = "dolorum";
                            }};, "deleniti", "pariatur", "provident", "nobis") {{
                allowMissing = false;
                updateMask = "libero";
            }};            

            RegistryUpdateApiVersionResponse res = sdk.registry.registryUpdateApiVersion(req);

            if (res.apiVersion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
