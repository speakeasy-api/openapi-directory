# crx

### Available Operations

* [getCrxdeStatus](#getcrxdestatus)
* [getInstallStatus](#getinstallstatus)
* [getPackageManagerServlet](#getpackagemanagerservlet)
* [postPackageService](#postpackageservice)
* [postPackageServiceJson](#postpackageservicejson)
* [postPackageUpdate](#postpackageupdate)
* [postSetPassword](#postsetpassword)

## getCrxdeStatus

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCrxdeStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi", "molestiae") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetCrxdeStatusResponse res = sdk.crx.getCrxdeStatus();

            if (res.getCrxdeStatus200PlainTextString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getInstallStatus

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetInstallStatusResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi", "qui") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetInstallStatusResponse res = sdk.crx.getInstallStatus();

            if (res.installStatus != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPackageManagerServlet

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPackageManagerServletResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit", "cum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetPackageManagerServletResponse res = sdk.crx.getPackageManagerServlet();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPackageService

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPackageServiceRequest;
import org.openapis.openapi.models.operations.PostPackageServiceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse", "ipsum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostPackageServiceRequest req = new PostPackageServiceRequest("excepturi");            

            PostPackageServiceResponse res = sdk.crx.postPackageService(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPackageServiceJson

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPackageServiceJsonRequest;
import org.openapis.openapi.models.operations.PostPackageServiceJsonRequestBody;
import org.openapis.openapi.models.operations.PostPackageServiceJsonRequestBodyPackage;
import org.openapis.openapi.models.operations.PostPackageServiceJsonResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aspernatur", "perferendis") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostPackageServiceJsonRequest req = new PostPackageServiceJsonRequest("ad", "natus") {{
                requestBody = new PostPackageServiceJsonRequestBody() {{
                    package_ = new PostPackageServiceJsonRequestBodyPackage("sed".getBytes(), "iste");;
                }};;
                charset = "dolor";
                force = false;
                groupName = "natus";
                packageName = "laboriosam";
                packageVersion = "hic";
                recursive = false;
            }};            

            PostPackageServiceJsonResponse res = sdk.crx.postPackageServiceJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPackageUpdate

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPackageUpdateRequest;
import org.openapis.openapi.models.operations.PostPackageUpdateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe", "fuga") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostPackageUpdateRequest req = new PostPackageUpdateRequest("in", "corporis", "iste", "iure") {{
                charset = "saepe";
                filter = "quidem";
            }};            

            PostPackageUpdateResponse res = sdk.crx.postPackageUpdate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetPassword

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetPasswordRequest;
import org.openapis.openapi.models.operations.PostSetPasswordResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto", "ipsa") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            PostSetPasswordRequest req = new PostSetPasswordRequest("reiciendis", "est", "mollitia");            

            PostSetPasswordResponse res = sdk.crx.postSetPassword(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
