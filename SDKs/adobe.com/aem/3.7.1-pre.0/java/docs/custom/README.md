# custom

### Available Operations

* [getAemHealthCheck](#getaemhealthcheck)
* [postConfigAemHealthCheckServlet](#postconfigaemhealthcheckservlet)
* [postConfigAemPasswordReset](#postconfigaempasswordreset)

## getAemHealthCheck

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAemHealthCheckRequest;
import org.openapis.openapi.models.operations.GetAemHealthCheckResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum", "dolores") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetAemHealthCheckRequest req = new GetAemHealthCheckRequest() {{
                combineTagsOr = false;
                tags = "dolorem";
            }};            

            GetAemHealthCheckResponse res = sdk.custom.getAemHealthCheck(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConfigAemHealthCheckServlet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConfigAemHealthCheckServletRequest;
import org.openapis.openapi.models.operations.PostConfigAemHealthCheckServletResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis", "explicabo") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostConfigAemHealthCheckServletRequest req = new PostConfigAemHealthCheckServletRequest() {{
                bundlesIgnored = new String[]{{
                    add("enim"),
                    add("omnis"),
                    add("nemo"),
                    add("minima"),
                }};
                bundlesIgnoredAtTypeHint = "excepturi";
            }};            

            PostConfigAemHealthCheckServletResponse res = sdk.custom.postConfigAemHealthCheckServlet(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConfigAemPasswordReset

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConfigAemPasswordResetRequest;
import org.openapis.openapi.models.operations.PostConfigAemPasswordResetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium", "iure") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostConfigAemPasswordResetRequest req = new PostConfigAemPasswordResetRequest() {{
                pwdresetAuthorizables = new String[]{{
                    add("doloribus"),
                    add("sapiente"),
                    add("architecto"),
                }};
                pwdresetAuthorizablesAtTypeHint = "mollitia";
            }};            

            PostConfigAemPasswordResetResponse res = sdk.custom.postConfigAemPasswordReset(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
