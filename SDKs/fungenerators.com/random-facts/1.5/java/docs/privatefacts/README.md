# privateFacts

## Overview

Store and manage your own Facts online

Find out more
<http://fungenerators.com/api/facts#private>
### Available Operations

* [deleteFact](#deletefact) - Delete a Fact entry identified by the id.
* [getFact](#getfact) - Get a Fact belonging to the id.
* [putFact](#putfact) - Add a Fact entry to the database (private collection).

## deleteFact

Delete a Fact entry identified by the id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteFactRequest;
import org.openapis.openapi.models.operations.DeleteFactResponse;
import org.openapis.openapi.models.operations.DeleteFactSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteFactRequest req = new DeleteFactRequest("delectus");            

            DeleteFactResponse res = sdk.privateFacts.deleteFact(req, new DeleteFactSecurity("tempora") {{
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

## getFact

Get a Fact belonging to the id.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFactRequest;
import org.openapis.openapi.models.operations.GetFactResponse;
import org.openapis.openapi.models.operations.GetFactSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetFactRequest req = new GetFactRequest() {{
                id = "suscipit";
            }};            

            GetFactResponse res = sdk.privateFacts.getFact(req, new GetFactSecurity("molestiae") {{
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

## putFact

Add a Fact entry to the database (private collection).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutFactRequest;
import org.openapis.openapi.models.operations.PutFactResponse;
import org.openapis.openapi.models.operations.PutFactSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutFactRequest req = new PutFactRequest("minus", "placeat", "voluptatum", "iusto");            

            PutFactResponse res = sdk.privateFacts.putFact(req, new PutFactSecurity("excepturi") {{
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
