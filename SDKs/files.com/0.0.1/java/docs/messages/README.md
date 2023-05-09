# messages

## Overview

Operations about messages

### Available Operations

* [deleteMessagesId](#deletemessagesid) - Delete Message
* [getMessages](#getmessages) - List Messages
* [getMessagesId](#getmessagesid) - Show Message
* [patchMessagesId](#patchmessagesid) - Update Message
* [postMessages](#postmessages) - Create Message

## deleteMessagesId

Delete Message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMessagesIdRequest;
import org.openapis.openapi.models.operations.DeleteMessagesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMessagesIdRequest req = new DeleteMessagesIdRequest(604118);            

            DeleteMessagesIdResponse res = sdk.messages.deleteMessagesId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMessages

List Messages

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMessagesRequest;
import org.openapis.openapi.models.operations.GetMessagesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMessagesRequest req = new GetMessagesRequest(100032) {{
                cursor = "suscipit";
                perPage = 960257;
                userId = 895386;
            }};            

            GetMessagesResponse res = sdk.messages.getMessages(req);

            if (res.messageEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMessagesId

Show Message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMessagesIdRequest;
import org.openapis.openapi.models.operations.GetMessagesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMessagesIdRequest req = new GetMessagesIdRequest(72434);            

            GetMessagesIdResponse res = sdk.messages.getMessagesId(req);

            if (res.messageEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchMessagesId

Update Message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchMessagesIdRequest;
import org.openapis.openapi.models.operations.PatchMessagesIdRequestBody;
import org.openapis.openapi.models.operations.PatchMessagesIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchMessagesIdRequest req = new PatchMessagesIdRequest(                new PatchMessagesIdRequestBody("We should upgrade our Files.com account!", 967795, "Files.com Account Upgrade");, 19300);            

            PatchMessagesIdResponse res = sdk.messages.patchMessagesId(req);

            if (res.messageEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMessages

Create Message

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMessagesRequestBody;
import org.openapis.openapi.models.operations.PostMessagesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMessagesRequestBody req = new PostMessagesRequestBody("We should upgrade our Files.com account!", 546885, "Files.com Account Upgrade") {{
                userId = 979574;
            }};            

            PostMessagesResponse res = sdk.messages.postMessages(req);

            if (res.messageEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
