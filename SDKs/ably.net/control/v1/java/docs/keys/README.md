# keys

### Available Operations

* [getAppsAppIdKeys](#getappsappidkeys) - Lists app keys
* [patchAppsAppIdKeysKeyId](#patchappsappidkeyskeyid) - Updates a key
* [postAppsAppIdKeys](#postappsappidkeys) - Creates a key
* [postAppsAppIdKeysKeyIdRevoke](#postappsappidkeyskeyidrevoke) - Revokes a key

## getAppsAppIdKeys

Lists app keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAppsAppIdKeysRequest;
import org.openapis.openapi.models.operations.GetAppsAppIdKeysResponse;
import org.openapis.openapi.models.operations.GetAppsAppIdKeysSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAppsAppIdKeysRequest req = new GetAppsAppIdKeysRequest("quis");            

            GetAppsAppIdKeysResponse res = sdk.keys.getAppsAppIdKeys(req, new GetAppsAppIdKeysSecurity("veritatis") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.keyResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchAppsAppIdKeysKeyId

Updates a key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchAppsAppIdKeysKeyIdRequest;
import org.openapis.openapi.models.operations.PatchAppsAppIdKeysKeyIdResponse;
import org.openapis.openapi.models.operations.PatchAppsAppIdKeysKeyIdSecurity;
import org.openapis.openapi.models.shared.KeyPatch;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchAppsAppIdKeysKeyIdRequest req = new PatchAppsAppIdKeysKeyIdRequest("deserunt", "perferendis") {{
                keyPatch = new KeyPatch() {{
                    capability = new java.util.HashMap<String, String[]>() {{
                        put("repellendus", new String[]{{
                            add("quo"),
                            add("odit"),
                            add("at"),
                            add("at"),
                        }});
                        put("maiores", new String[]{{
                            add("quod"),
                            add("quod"),
                        }});
                    }};
                    name = "Deanna Sauer MD";
                }};;
            }};            

            PatchAppsAppIdKeysKeyIdResponse res = sdk.keys.patchAppsAppIdKeysKeyId(req, new PatchAppsAppIdKeysKeyIdSecurity("officia") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.keyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAppsAppIdKeys

Creates a key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAppsAppIdKeysRequest;
import org.openapis.openapi.models.operations.PostAppsAppIdKeysResponse;
import org.openapis.openapi.models.operations.PostAppsAppIdKeysSecurity;
import org.openapis.openapi.models.shared.KeyPost;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAppsAppIdKeysRequest req = new PostAppsAppIdKeysRequest("occaecati") {{
                keyPost = new KeyPost(                new java.util.HashMap<String, String[]>() {{
                                    put("deleniti", new String[]{{
                                        add("optio"),
                                        add("totam"),
                                        add("beatae"),
                                        add("commodi"),
                                    }});
                                }}, "molestiae");;
            }};            

            PostAppsAppIdKeysResponse res = sdk.keys.postAppsAppIdKeys(req, new PostAppsAppIdKeysSecurity("modi") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.keyResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAppsAppIdKeysKeyIdRevoke

Revokes a key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAppsAppIdKeysKeyIdRevokeRequest;
import org.openapis.openapi.models.operations.PostAppsAppIdKeysKeyIdRevokeResponse;
import org.openapis.openapi.models.operations.PostAppsAppIdKeysKeyIdRevokeSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAppsAppIdKeysKeyIdRevokeRequest req = new PostAppsAppIdKeysKeyIdRevokeRequest("qui", "impedit");            

            PostAppsAppIdKeysKeyIdRevokeResponse res = sdk.keys.postAppsAppIdKeysKeyIdRevoke(req, new PostAppsAppIdKeysKeyIdRevokeSecurity("cum") {{
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
