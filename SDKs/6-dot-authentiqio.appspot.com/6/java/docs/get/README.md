# get

### Available Operations

* [keyRetrieve](#keyretrieve) - Get public details of an Authentiq ID.

* [signRetrieve](#signretrieve) - get the status / current content of a verification job

## keyRetrieve

Get public details of an Authentiq ID.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.KeyRetrieveRequest;
import org.openapis.openapi.models.operations.KeyRetrieveResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            KeyRetrieveRequest req = new KeyRetrieveRequest("vel");            

            KeyRetrieveResponse res = sdk.get.keyRetrieve(req);

            if (res.jwt != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## signRetrieve

get the status / current content of a verification job

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SignRetrieveRequest;
import org.openapis.openapi.models.operations.SignRetrieveResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SignRetrieveRequest req = new SignRetrieveRequest("error");            

            SignRetrieveResponse res = sdk.get.signRetrieve(req);

            if (res.jwt != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
