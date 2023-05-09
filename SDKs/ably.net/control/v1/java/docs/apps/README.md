# apps

### Available Operations

* [deleteAppsId](#deleteappsid) - Deletes an app
* [getAccountsAccountIdApps](#getaccountsaccountidapps) - Lists account apps
* [patchAppsId](#patchappsid) - Updates an app
* [postAccountsAccountIdApps](#postaccountsaccountidapps) - Creates an app
* [postAppsIdPkcs12](#postappsidpkcs12) - Updates app's APNS info from a .p12 file

## deleteAppsId

Deletes an app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAppsIdRequest;
import org.openapis.openapi.models.operations.DeleteAppsIdResponse;
import org.openapis.openapi.models.operations.DeleteAppsIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAppsIdRequest req = new DeleteAppsIdRequest("distinctio");            

            DeleteAppsIdResponse res = sdk.apps.deleteAppsId(req, new DeleteAppsIdSecurity("quibusdam") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
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

## getAccountsAccountIdApps

Lists account apps

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAccountsAccountIdAppsRequest;
import org.openapis.openapi.models.operations.GetAccountsAccountIdAppsResponse;
import org.openapis.openapi.models.operations.GetAccountsAccountIdAppsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAccountsAccountIdAppsRequest req = new GetAccountsAccountIdAppsRequest("unde");            

            GetAccountsAccountIdAppsResponse res = sdk.apps.getAccountsAccountIdApps(req, new GetAccountsAccountIdAppsSecurity("nulla") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.appResponses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchAppsId

Updates an app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchAppsIdRequest;
import org.openapis.openapi.models.operations.PatchAppsIdResponse;
import org.openapis.openapi.models.operations.PatchAppsIdSecurity;
import org.openapis.openapi.models.shared.AppPatch;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchAppsIdRequest req = new PatchAppsIdRequest("corrupti") {{
                appPatch = new AppPatch() {{
                    apnsCertificate = "illum";
                    apnsPrivateKey = "vel";
                    apnsUseSandboxEndpoint = false;
                    fcmKey = "error";
                    name = "Rick Kertzmann";
                    status = "ipsa";
                    tlsOnly = false;
                }};;
            }};            

            PatchAppsIdResponse res = sdk.apps.patchAppsId(req, new PatchAppsIdSecurity("delectus") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.appResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAccountsAccountIdApps

Creates an app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAccountsAccountIdAppsRequest;
import org.openapis.openapi.models.operations.PostAccountsAccountIdAppsResponse;
import org.openapis.openapi.models.operations.PostAccountsAccountIdAppsSecurity;
import org.openapis.openapi.models.shared.AppPost;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAccountsAccountIdAppsRequest req = new PostAccountsAccountIdAppsRequest("tempora") {{
                appPost = new AppPost("suscipit") {{
                    apnsCertificate = "molestiae";
                    apnsPrivateKey = "minus";
                    apnsUseSandboxEndpoint = false;
                    fcmKey = "placeat";
                    status = "voluptatum";
                    tlsOnly = false;
                }};;
            }};            

            PostAccountsAccountIdAppsResponse res = sdk.apps.postAccountsAccountIdApps(req, new PostAccountsAccountIdAppsSecurity("iusto") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.appResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAppsIdPkcs12

Updates app's APNS info from a .p12 file

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAppsIdPkcs12Request;
import org.openapis.openapi.models.operations.PostAppsIdPkcs12Response;
import org.openapis.openapi.models.operations.PostAppsIdPkcs12Security;
import org.openapis.openapi.models.shared.AppPkcs12;
import org.openapis.openapi.models.shared.AppPkcs12P12File;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAppsIdPkcs12Request req = new PostAppsIdPkcs12Request("excepturi") {{
                appPkcs12 = new AppPkcs12(                new AppPkcs12P12File("nisi".getBytes(), "recusandae");, "temporibus");;
            }};            

            PostAppsIdPkcs12Response res = sdk.apps.postAppsIdPkcs12(req, new PostAppsIdPkcs12Security("ab") {{
                bearerAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.appResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
