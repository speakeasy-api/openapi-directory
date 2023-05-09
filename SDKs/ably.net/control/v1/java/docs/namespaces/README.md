# namespaces

### Available Operations

* [deleteAppsAppIdNamespacesNamespaceId](#deleteappsappidnamespacesnamespaceid) - Deletes a namespace
* [getAppsAppIdNamespaces](#getappsappidnamespaces) - Lists namespaces
* [patchAppsAppIdNamespacesNamespaceId](#patchappsappidnamespacesnamespaceid) - Updates a namespace
* [postAppsAppIdNamespaces](#postappsappidnamespaces) - Creates a namespace

## deleteAppsAppIdNamespacesNamespaceId

Deletes a namespace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppsAppIdNamespacesNamespaceIdRequest;
import org.openapis.openapi.models.operations.DeleteAppsAppIdNamespacesNamespaceIdResponse;
import org.openapis.openapi.models.operations.DeleteAppsAppIdNamespacesNamespaceIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAppsAppIdNamespacesNamespaceIdRequest req = new DeleteAppsAppIdNamespacesNamespaceIdRequest("esse", "ipsum");            

            DeleteAppsAppIdNamespacesNamespaceIdResponse res = sdk.namespaces.deleteAppsAppIdNamespacesNamespaceId(req, new DeleteAppsAppIdNamespacesNamespaceIdSecurity("excepturi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAppsAppIdNamespaces

Lists namespaces

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppsAppIdNamespacesRequest;
import org.openapis.openapi.models.operations.GetAppsAppIdNamespacesResponse;
import org.openapis.openapi.models.operations.GetAppsAppIdNamespacesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAppsAppIdNamespacesRequest req = new GetAppsAppIdNamespacesRequest("aspernatur");            

            GetAppsAppIdNamespacesResponse res = sdk.namespaces.getAppsAppIdNamespaces(req, new GetAppsAppIdNamespacesSecurity("perferendis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.namespaceResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchAppsAppIdNamespacesNamespaceId

Updates a namespace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchAppsAppIdNamespacesNamespaceIdRequest;
import org.openapis.openapi.models.operations.PatchAppsAppIdNamespacesNamespaceIdResponse;
import org.openapis.openapi.models.operations.PatchAppsAppIdNamespacesNamespaceIdSecurity;
import org.openapis.openapi.models.shared.NamespacePatch;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchAppsAppIdNamespacesNamespaceIdRequest req = new PatchAppsAppIdNamespacesNamespaceIdRequest("ad", "natus") {{
                namespacePatch = new NamespacePatch() {{
                    authenticated = false;
                    exposeTimeserial = false;
                    persistLast = false;
                    persisted = false;
                    pushEnabled = false;
                    tlsOnly = false;
                }};;
            }};            

            PatchAppsAppIdNamespacesNamespaceIdResponse res = sdk.namespaces.patchAppsAppIdNamespacesNamespaceId(req, new PatchAppsAppIdNamespacesNamespaceIdSecurity("sed") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.namespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAppsAppIdNamespaces

Creates a namespace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAppsAppIdNamespacesRequest;
import org.openapis.openapi.models.operations.PostAppsAppIdNamespacesResponse;
import org.openapis.openapi.models.operations.PostAppsAppIdNamespacesSecurity;
import org.openapis.openapi.models.shared.NamespacePost;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAppsAppIdNamespacesRequest req = new PostAppsAppIdNamespacesRequest("iste") {{
                namespacePost = new NamespacePost("dolor") {{
                    authenticated = false;
                    exposeTimeserial = false;
                    persistLast = false;
                    persisted = false;
                    pushEnabled = false;
                    tlsOnly = false;
                }};;
            }};            

            PostAppsAppIdNamespacesResponse res = sdk.namespaces.postAppsAppIdNamespaces(req, new PostAppsAppIdNamespacesSecurity("natus") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.namespaceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
