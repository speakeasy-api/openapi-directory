# behaviors

## Overview

Operations about behaviors

### Available Operations

* [behaviorListForPath](#behaviorlistforpath) - List Behaviors by path
* [deleteBehaviorsId](#deletebehaviorsid) - Delete Behavior
* [getBehaviors](#getbehaviors) - List Behaviors
* [getBehaviorsId](#getbehaviorsid) - Show Behavior
* [patchBehaviorsId](#patchbehaviorsid) - Update Behavior
* [postBehaviors](#postbehaviors) - Create Behavior
* [postBehaviorsWebhookTest](#postbehaviorswebhooktest) - Test webhook.

## behaviorListForPath

List Behaviors by path

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BehaviorListForPathRequest;
import org.openapis.openapi.models.operations.BehaviorListForPathResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BehaviorListForPathRequest req = new BehaviorListForPathRequest("nemo") {{
                behavior = "voluptatibus";
                cursor = "perferendis";
                filter = new java.util.HashMap<String, Object>() {{
                    put("amet", "aut");
                    put("cumque", "corporis");
                    put("hic", "libero");
                    put("nobis", "dolores");
                }};
                filterPrefix = new java.util.HashMap<String, Object>() {{
                    put("totam", "dignissimos");
                    put("eaque", "quis");
                }};
                perPage = 199996;
                recursive = "eos";
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("dolores", "minus");
                }};
            }};            

            BehaviorListForPathResponse res = sdk.behaviors.behaviorListForPath(req);

            if (res.behaviorEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteBehaviorsId

Delete Behavior

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteBehaviorsIdRequest;
import org.openapis.openapi.models.operations.DeleteBehaviorsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBehaviorsIdRequest req = new DeleteBehaviorsIdRequest(463451);            

            DeleteBehaviorsIdResponse res = sdk.behaviors.deleteBehaviorsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBehaviors

List Behaviors

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBehaviorsRequest;
import org.openapis.openapi.models.operations.GetBehaviorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBehaviorsRequest req = new GetBehaviorsRequest() {{
                behavior = "dolor";
                cursor = "vero";
                filter = new java.util.HashMap<String, Object>() {{
                    put("hic", "recusandae");
                    put("omnis", "facilis");
                }};
                filterPrefix = new java.util.HashMap<String, Object>() {{
                    put("voluptatem", "porro");
                    put("consequuntur", "blanditiis");
                    put("error", "eaque");
                }};
                perPage = 577229;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("adipisci", "asperiores");
                    put("earum", "modi");
                    put("iste", "dolorum");
                }};
            }};            

            GetBehaviorsResponse res = sdk.behaviors.getBehaviors(req);

            if (res.behaviorEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBehaviorsId

Show Behavior

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBehaviorsIdRequest;
import org.openapis.openapi.models.operations.GetBehaviorsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBehaviorsIdRequest req = new GetBehaviorsIdRequest(535633);            

            GetBehaviorsIdResponse res = sdk.behaviors.getBehaviorsId(req);

            if (res.behaviorEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchBehaviorsId

Update Behavior

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchBehaviorsIdRequest;
import org.openapis.openapi.models.operations.PatchBehaviorsIdRequestBody;
import org.openapis.openapi.models.operations.PatchBehaviorsIdRequestBodyAttachmentFile;
import org.openapis.openapi.models.operations.PatchBehaviorsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchBehaviorsIdRequest req = new PatchBehaviorsIdRequest(864282) {{
                requestBody = new PatchBehaviorsIdRequestBody() {{
                    attachmentDelete = false;
                    attachmentFile = new PatchBehaviorsIdRequestBodyAttachmentFile("provident", "nobis".getBytes());;
                    behavior = "webhook";
                    description = "example";
                    name = "example";
                    path = "libero";
                    value = "{"method": "GET"}";
                }};;
            }};            

            PatchBehaviorsIdResponse res = sdk.behaviors.patchBehaviorsId(req);

            if (res.behaviorEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBehaviors

Create Behavior

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBehaviorsRequestBody;
import org.openapis.openapi.models.operations.PostBehaviorsRequestBodyAttachmentFile;
import org.openapis.openapi.models.operations.PostBehaviorsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostBehaviorsRequestBody req = new PostBehaviorsRequestBody("webhook", "delectus") {{
                attachmentFile = new PostBehaviorsRequestBodyAttachmentFile("quaerat", "quos".getBytes());;
                description = "example";
                name = "example";
                value = "{"method": "GET"}";
            }};            

            PostBehaviorsResponse res = sdk.behaviors.postBehaviors(req);

            if (res.behaviorEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBehaviorsWebhookTest

Test webhook.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBehaviorsWebhookTestRequestBody;
import org.openapis.openapi.models.operations.PostBehaviorsWebhookTestResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostBehaviorsWebhookTestRequestBody req = new PostBehaviorsWebhookTestRequestBody("https://www.site.com/...") {{
                action = "test";
                body = new java.util.HashMap<String, Object>() {{
                    put("dolorem", "dolorem");
                    put("dolor", "qui");
                }};
                encoding = "RAW";
                headers = new java.util.HashMap<String, Object>() {{
                    put("hic", "excepturi");
                }};
                method = "GET";
            }};            

            PostBehaviorsWebhookTestResponse res = sdk.behaviors.postBehaviorsWebhookTest(req);

            if (res.statusEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
