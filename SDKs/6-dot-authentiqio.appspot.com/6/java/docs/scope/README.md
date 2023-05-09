# scope

### Available Operations

* [signConfirm](#signconfirm) - this is a scope confirmation
* [signDelete](#signdelete) - delete a verification job
* [signRequest](#signrequest) - scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples

* [signRetrieve](#signretrieve) - get the status / current content of a verification job
* [signRetrieveHead](#signretrievehead) - HEAD to get the status of a verification job
* [signUpdate](#signupdate) - authority updates a JWT with its signature
See: https://github.com/skion/authentiq/wiki/JWT-Examples


## signConfirm

this is a scope confirmation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SignConfirmRequest;
import org.openapis.openapi.models.operations.SignConfirmResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SignConfirmRequest req = new SignConfirmRequest("odit");            

            SignConfirmResponse res = sdk.scope.signConfirm(req);

            if (res.signConfirm202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## signDelete

delete a verification job

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SignDeleteRequest;
import org.openapis.openapi.models.operations.SignDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SignDeleteRequest req = new SignDeleteRequest("at");            

            SignDeleteResponse res = sdk.scope.signDelete(req);

            if (res.signDelete200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## signRequest

scope verification request
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SignRequestRequest;
import org.openapis.openapi.models.operations.SignRequestResponse;
import org.openapis.openapi.models.shared.Claims;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SignRequestRequest req = new SignRequestRequest("at".getBytes()) {{
                test = 978619L;
            }};            

            SignRequestResponse res = sdk.scope.signRequest(req);

            if (res.signRequest201ApplicationJSONObject != null) {
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

            SignRetrieveRequest req = new SignRetrieveRequest("molestiae");            

            SignRetrieveResponse res = sdk.scope.signRetrieve(req);

            if (res.jwt != null) {
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

            SignRetrieveHeadRequest req = new SignRetrieveHeadRequest("quod");            

            SignRetrieveHeadResponse res = sdk.scope.signRetrieveHead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## signUpdate

authority updates a JWT with its signature
See: https://github.com/skion/authentiq/wiki/JWT-Examples


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SignUpdateRequest;
import org.openapis.openapi.models.operations.SignUpdateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SignUpdateRequest req = new SignUpdateRequest("quod");            

            SignUpdateResponse res = sdk.scope.signUpdate(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
