# head

### Available Operations

* [headKeyPK](#headkeypk) - HEAD info on Authentiq ID

* [signRetrieveHead](#signretrievehead) - HEAD to get the status of a verification job

## headKeyPK

HEAD info on Authentiq ID


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HeadKeyPKRequest;
import org.openapis.openapi.models.operations.HeadKeyPKResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            HeadKeyPKRequest req = new HeadKeyPKRequest("deserunt");            

            HeadKeyPKResponse res = sdk.head.headKeyPK(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## signRetrieveHead

HEAD to get the status of a verification job

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SignRetrieveHeadRequest;
import org.openapis.openapi.models.operations.SignRetrieveHeadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SignRetrieveHeadRequest req = new SignRetrieveHeadRequest("suscipit");            

            SignRetrieveHeadResponse res = sdk.head.signRetrieveHead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
