# blockedNumbers

### Available Operations

* [getBlockedNumbers](#getblockednumbers) - List blocked numbers
* [postBlockedNumbers](#postblockednumbers) - Create a blocked number

## getBlockedNumbers

List blocked numbers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBlockedNumbersRequest;
import org.openapis.openapi.models.operations.GetBlockedNumbersResponse;
import org.openapis.openapi.models.operations.GetBlockedNumbersSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBlockedNumbersRequest req = new GetBlockedNumbersRequest() {{
                limit = 602763;
                minId = 857946;
            }};            

            GetBlockedNumbersResponse res = sdk.blockedNumbers.getBlockedNumbers(req, new GetBlockedNumbersSecurity("corrupti", "illum") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.blockedNumber != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postBlockedNumbers

Blocked numbers are phone numbers to which your account is not permitted to send messages.
The numbers can be created via this API, by a recipient replying with a STOP message to one
of your previous SENT messages, or by a BulkSMS administrator.

Sending a message to a blocked number will result in the message being assigned a status of
`FAILED.BLOCKED`. Messages sent to blocked numbers are billed to your account.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostBlockedNumbersResponse;
import org.openapis.openapi.models.operations.PostBlockedNumbersSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new String[]{{
                add("44123456789"),
                add("44123456789"),
            }}            

            PostBlockedNumbersResponse res = sdk.blockedNumbers.postBlockedNumbers(req, new PostBlockedNumbersSecurity("error", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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
