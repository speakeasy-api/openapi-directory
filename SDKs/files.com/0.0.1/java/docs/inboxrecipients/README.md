# inboxRecipients

## Overview

Operations about inbox_recipients

### Available Operations

* [getInboxRecipients](#getinboxrecipients) - List Inbox Recipients
* [postInboxRecipients](#postinboxrecipients) - Create Inbox Recipient

## getInboxRecipients

List Inbox Recipients

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInboxRecipientsRequest;
import org.openapis.openapi.models.operations.GetInboxRecipientsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetInboxRecipientsRequest req = new GetInboxRecipientsRequest(246063) {{
                cursor = "culpa";
                filter = new java.util.HashMap<String, Object>() {{
                    put("recusandae", "totam");
                    put("fugiat", "vel");
                    put("ducimus", "quos");
                }};
                perPage = 427834;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("possimus", "facilis");
                    put("cum", "commodi");
                }};
            }};            

            GetInboxRecipientsResponse res = sdk.inboxRecipients.getInboxRecipients(req);

            if (res.inboxRecipientEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postInboxRecipients

Create Inbox Recipient

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostInboxRecipientsRequestBody;
import org.openapis.openapi.models.operations.PostInboxRecipientsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostInboxRecipientsRequestBody req = new PostInboxRecipientsRequestBody(447144, "johndoe@gmail.com") {{
                company = "Acme Ltd";
                name = "John Smith";
                note = "Just a note.";
                shareAfterCreate = false;
            }};            

            PostInboxRecipientsResponse res = sdk.inboxRecipients.postInboxRecipients(req);

            if (res.inboxRecipientEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
