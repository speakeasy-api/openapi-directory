# session

### Available Operations

* [createSessionUsingGET](#createsessionusingget) - creates a new session. validUntil is an unix timestamp in seconds
* [createSessionUsingPOST](#createsessionusingpost) - creates a new session. validUntil is an unix timestamp in seconds
* [deleteSessionUsingGET](#deletesessionusingget) - deletes a session
* [deleteSessionUsingPOST](#deletesessionusingpost) - deletes a session
* [getSessionInfoUsingGET](#getsessioninfousingget) - returns informations about a session
* [getSessionInfoUsingPOST](#getsessioninfousingpost) - returns informations about a session

## createSessionUsingGET

creates a new session. validUntil is an unix timestamp in seconds

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSessionUsingGETRequest;
import org.openapis.openapi.models.operations.CreateSessionUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deleniti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSessionUsingGETRequest req = new CreateSessionUsingGETRequest() {{
                authorID = "sapiente";
                groupID = "amet";
                validUntil = "deserunt";
            }};            

            CreateSessionUsingGETResponse res = sdk.session.createSessionUsingGET(req);

            if (res.createSessionUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createSessionUsingPOST

creates a new session. validUntil is an unix timestamp in seconds

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateSessionUsingPOSTRequest;
import org.openapis.openapi.models.operations.CreateSessionUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nisi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateSessionUsingPOSTRequest req = new CreateSessionUsingPOSTRequest() {{
                authorID = "vel";
                groupID = "natus";
                validUntil = "omnis";
            }};            

            CreateSessionUsingPOSTResponse res = sdk.session.createSessionUsingPOST(req);

            if (res.createSessionUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSessionUsingGET

deletes a session

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSessionUsingGETRequest;
import org.openapis.openapi.models.operations.DeleteSessionUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSessionUsingGETRequest req = new DeleteSessionUsingGETRequest() {{
                sessionID = "perferendis";
            }};            

            DeleteSessionUsingGETResponse res = sdk.session.deleteSessionUsingGET(req);

            if (res.deleteSessionUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteSessionUsingPOST

deletes a session

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteSessionUsingPOSTRequest;
import org.openapis.openapi.models.operations.DeleteSessionUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteSessionUsingPOSTRequest req = new DeleteSessionUsingPOSTRequest() {{
                sessionID = "magnam";
            }};            

            DeleteSessionUsingPOSTResponse res = sdk.session.deleteSessionUsingPOST(req);

            if (res.deleteSessionUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSessionInfoUsingGET

returns informations about a session

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSessionInfoUsingGETRequest;
import org.openapis.openapi.models.operations.GETSessionInfoUsingGETResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GETSessionInfoUsingGETRequest req = new GETSessionInfoUsingGETRequest() {{
                sessionID = "id";
            }};            

            GETSessionInfoUsingGETResponse res = sdk.session.getSessionInfoUsingGET(req);

            if (res.getSessionInfoUsingGET200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSessionInfoUsingPOST

returns informations about a session

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSessionInfoUsingPOSTRequest;
import org.openapis.openapi.models.operations.GetSessionInfoUsingPOSTResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetSessionInfoUsingPOSTRequest req = new GetSessionInfoUsingPOSTRequest() {{
                sessionID = "labore";
            }};            

            GetSessionInfoUsingPOSTResponse res = sdk.session.getSessionInfoUsingPOST(req);

            if (res.getSessionInfoUsingPOST200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
