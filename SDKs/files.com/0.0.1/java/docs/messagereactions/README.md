# messageReactions

## Overview

Operations about message_reactions

### Available Operations

* [deleteMessageReactionsId](#deletemessagereactionsid) - Delete Message Reaction
* [getMessageReactions](#getmessagereactions) - List Message Reactions
* [getMessageReactionsId](#getmessagereactionsid) - Show Message Reaction
* [postMessageReactions](#postmessagereactions) - Create Message Reaction

## deleteMessageReactionsId

Delete Message Reaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteMessageReactionsIdRequest;
import org.openapis.openapi.models.operations.DeleteMessageReactionsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteMessageReactionsIdRequest req = new DeleteMessageReactionsIdRequest(292794);            

            DeleteMessageReactionsIdResponse res = sdk.messageReactions.deleteMessageReactionsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMessageReactions

List Message Reactions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMessageReactionsRequest;
import org.openapis.openapi.models.operations.GetMessageReactionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMessageReactionsRequest req = new GetMessageReactionsRequest(671907) {{
                cursor = "sed";
                perPage = 447516;
                userId = 417486;
            }};            

            GetMessageReactionsResponse res = sdk.messageReactions.getMessageReactions(req);

            if (res.messageReactionEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMessageReactionsId

Show Message Reaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMessageReactionsIdRequest;
import org.openapis.openapi.models.operations.GetMessageReactionsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMessageReactionsIdRequest req = new GetMessageReactionsIdRequest(696077);            

            GetMessageReactionsIdResponse res = sdk.messageReactions.getMessageReactionsId(req);

            if (res.messageReactionEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMessageReactions

Create Message Reaction

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMessageReactionsRequestBody;
import org.openapis.openapi.models.operations.PostMessageReactionsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMessageReactionsRequestBody req = new PostMessageReactionsRequestBody("explicabo") {{
                userId = 378326;
            }};            

            PostMessageReactionsResponse res = sdk.messageReactions.postMessageReactions(req);

            if (res.messageReactionEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
