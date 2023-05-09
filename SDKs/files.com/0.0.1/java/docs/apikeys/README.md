# apiKeys

## Overview

Operations about api_keys

### Available Operations

* [deleteApiKeysId](#deleteapikeysid) - Delete Api Key
* [getApiKeys](#getapikeys) - List Api Keys
* [getApiKeysId](#getapikeysid) - Show Api Key
* [patchApiKeysId](#patchapikeysid) - Update Api Key
* [postApiKeys](#postapikeys) - Create Api Key

## deleteApiKeysId

Delete Api Key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiKeysIdRequest;
import org.openapis.openapi.models.operations.DeleteApiKeysIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteApiKeysIdRequest req = new DeleteApiKeysIdRequest(384382);            

            DeleteApiKeysIdResponse res = sdk.apiKeys.deleteApiKeysId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiKeys

List Api Keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiKeysRequest;
import org.openapis.openapi.models.operations.GetApiKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiKeysRequest req = new GetApiKeysRequest() {{
                cursor = "iure";
                filter = new java.util.HashMap<String, Object>() {{
                    put("debitis", "ipsa");
                    put("delectus", "tempora");
                }};
                filterGt = new java.util.HashMap<String, Object>() {{
                    put("molestiae", "minus");
                    put("placeat", "voluptatum");
                }};
                filterGteq = new java.util.HashMap<String, Object>() {{
                    put("excepturi", "nisi");
                    put("recusandae", "temporibus");
                }};
                filterLt = new java.util.HashMap<String, Object>() {{
                    put("quis", "veritatis");
                }};
                filterLteq = new java.util.HashMap<String, Object>() {{
                    put("perferendis", "ipsam");
                    put("repellendus", "sapiente");
                    put("quo", "odit");
                }};
                perPage = 870013;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("maiores", "molestiae");
                    put("quod", "quod");
                    put("esse", "totam");
                    put("porro", "dolorum");
                }};
                userId = 118274;
            }};            

            GetApiKeysResponse res = sdk.apiKeys.getApiKeys(req);

            if (res.apiKeyEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiKeysId

Show Api Key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiKeysIdRequest;
import org.openapis.openapi.models.operations.GetApiKeysIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetApiKeysIdRequest req = new GetApiKeysIdRequest(720633);            

            GetApiKeysIdResponse res = sdk.apiKeys.getApiKeysId(req);

            if (res.apiKeyEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchApiKeysId

Update Api Key

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchApiKeysIdRequest;
import org.openapis.openapi.models.operations.PatchApiKeysIdRequestBody;
import org.openapis.openapi.models.operations.PatchApiKeysIdRequestBodyPermissionSetEnum;
import org.openapis.openapi.models.operations.PatchApiKeysIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchApiKeysIdRequest req = new PatchApiKeysIdRequest(639921) {{
                requestBody = new PatchApiKeysIdRequestBody() {{
                    description = "example";
                    expiresAt = OffsetDateTime.parse("2000-01-01T01:00:00Z");
                    name = "My Main API Key";
                    permissionSet = PatchApiKeysIdRequestBodyPermissionSetEnum.FULL;
                }};;
            }};            

            PatchApiKeysIdResponse res = sdk.apiKeys.patchApiKeysId(req);

            if (res.apiKeyEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiKeys

Create Api Key

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiKeysRequestBody;
import org.openapis.openapi.models.operations.PostApiKeysRequestBodyPermissionSetEnum;
import org.openapis.openapi.models.operations.PostApiKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostApiKeysRequestBody req = new PostApiKeysRequestBody() {{
                description = "example";
                expiresAt = OffsetDateTime.parse("2000-01-01T01:00:00Z");
                name = "My Main API Key";
                path = "shared/docs";
                permissionSet = PostApiKeysRequestBodyPermissionSetEnum.FULL;
                userId = 582020;
            }};            

            PostApiKeysResponse res = sdk.apiKeys.postApiKeys(req);

            if (res.apiKeyEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
