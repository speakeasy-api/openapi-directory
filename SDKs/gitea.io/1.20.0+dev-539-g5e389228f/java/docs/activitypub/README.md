# activitypub

### Available Operations

* [activitypubPerson](#activitypubperson) - Returns the Person actor for a user
* [activitypubPersonInbox](#activitypubpersoninbox) - Send to the inbox

## activitypubPerson

Returns the Person actor for a user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivitypubPersonRequest;
import org.openapis.openapi.models.operations.ActivitypubPersonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ActivitypubPersonRequest req = new ActivitypubPersonRequest(592845L);            

            ActivitypubPersonResponse res = sdk.activitypub.activitypubPerson(req);

            if (res.activityPub != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## activitypubPersonInbox

Send to the inbox

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ActivitypubPersonInboxRequest;
import org.openapis.openapi.models.operations.ActivitypubPersonInboxResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    accessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ActivitypubPersonInboxRequest req = new ActivitypubPersonInboxRequest(715190L);            

            ActivitypubPersonInboxResponse res = sdk.activitypub.activitypubPersonInbox(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
