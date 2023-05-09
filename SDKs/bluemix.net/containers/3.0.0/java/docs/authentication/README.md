# authentication

### Available Operations

* [getTlskey](#gettlskey) - Retrieve the TLS Certificate
* [putTlskeyRefresh](#puttlskeyrefresh) - Refresh the TLS Certificate

## getTlskey

This endpoint returns the TLS (Transport Layer Security) certificate to the user (corresponding IBM Containers command: `cf ic login`). The TLS certificate is a SSL certificate that is used to authenticate the user's CLI with the IBM Containers service and to establish a secure communication between the user's local machine and the container in Bluemix.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTlskeyRequest;
import org.openapis.openapi.models.operations.GetTlskeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTlskeyRequest req = new GetTlskeyRequest("unde", "nulla");            

            GetTlskeyResponse res = sdk.authentication.getTlskey(req);

            if (res.certificate != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putTlskeyRefresh

This endpoint requests to generate a new TLS (Transport Layer Security) certificate on the server and to update the existing user TLS certificate (corresponding IBM Containers command: `cf ic init`).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutTlskeyRefreshRequest;
import org.openapis.openapi.models.operations.PutTlskeyRefreshResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutTlskeyRefreshRequest req = new PutTlskeyRefreshRequest("corrupti", "illum");            

            PutTlskeyRefreshResponse res = sdk.authentication.putTlskeyRefresh(req);

            if (res.certificateRefresh != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
