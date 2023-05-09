# privateRiddles

## Overview

Store and Retrive your Riddles

Find out more
<http://fungenerators.com/api/riddle>
### Available Operations

* [deleteRiddle](#deleteriddle) - Create a random Riddle entry.
* [getRiddle](#getriddle) - Get a Riddle entry for a given id. Retrieves a riddle question and answer based on the id.
* [postRiddle](#postriddle) - Create a random Riddle entry. Same as 'PUT' but can be used when some of the client libraries don't support 'PUT'.
* [putRiddle](#putriddle) - Create a random Riddle entry.

## deleteRiddle

Create a random Riddle entry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteRiddleRequest;
import org.openapis.openapi.models.operations.DeleteRiddleResponse;
import org.openapis.openapi.models.operations.DeleteRiddleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteRiddleRequest req = new DeleteRiddleRequest("distinctio");            

            DeleteRiddleResponse res = sdk.privateRiddles.deleteRiddle(req, new DeleteRiddleSecurity("quibusdam") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
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

## getRiddle

Get a Riddle entry for a given id. Retrieves a riddle question and answer based on the id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRiddleRequest;
import org.openapis.openapi.models.operations.GetRiddleResponse;
import org.openapis.openapi.models.operations.GetRiddleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRiddleRequest req = new GetRiddleRequest() {{
                id = "unde";
            }};            

            GetRiddleResponse res = sdk.privateRiddles.getRiddle(req, new GetRiddleSecurity("nulla") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
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

## postRiddle

Create a random Riddle entry. Same as 'PUT' but can be used when some of the client libraries don't support 'PUT'.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRiddleRequest;
import org.openapis.openapi.models.operations.PostRiddleResponse;
import org.openapis.openapi.models.operations.PostRiddleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostRiddleRequest req = new PostRiddleRequest("corrupti", "illum", "vel");            

            PostRiddleResponse res = sdk.privateRiddles.postRiddle(req, new PostRiddleSecurity("error") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
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

## putRiddle

Create a random Riddle entry.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutRiddleRequest;
import org.openapis.openapi.models.operations.PutRiddleResponse;
import org.openapis.openapi.models.operations.PutRiddleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutRiddleRequest req = new PutRiddleRequest("deserunt", "suscipit", "iure");            

            PutRiddleResponse res = sdk.privateRiddles.putRiddle(req, new PutRiddleSecurity("magnam") {{
                xFungeneratorsApiSecret = "YOUR_API_KEY_HERE";
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
