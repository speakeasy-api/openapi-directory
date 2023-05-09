# execute

### Available Operations

* [deleteProxy](#deleteproxy) - DELETE
* [getProxy](#getproxy) - GET
* [optionsProxy](#optionsproxy) - OPTIONS
* [patchProxy](#patchproxy) - PATCH
* [postProxy](#postproxy) - POST
* [putProxy](#putproxy) - PUT

## deleteProxy

Proxies a downstream DELETE request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteProxyRequest;
import org.openapis.openapi.models.operations.DeleteProxyResponse;
import org.openapis.openapi.models.operations.DeleteProxySecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteProxyRequest req = new DeleteProxyRequest("corrupti", "illum", "vel", "error") {{
                xApideckDownstreamAuthorization = "deserunt";
            }};            

            DeleteProxyResponse res = sdk.execute.deleteProxy(req, new DeleteProxySecurity("suscipit") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteProxy200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getProxy

Proxies a downstream GET request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetProxyRequest;
import org.openapis.openapi.models.operations.GetProxyResponse;
import org.openapis.openapi.models.operations.GetProxySecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetProxyRequest req = new GetProxyRequest("iure", "magnam", "debitis", "ipsa") {{
                xApideckDownstreamAuthorization = "delectus";
            }};            

            GetProxyResponse res = sdk.execute.getProxy(req, new GetProxySecurity("tempora") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getProxy200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## optionsProxy

Proxies a downstream OPTION request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OptionsProxyRequest;
import org.openapis.openapi.models.operations.OptionsProxyResponse;
import org.openapis.openapi.models.operations.OptionsProxySecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OptionsProxyRequest req = new OptionsProxyRequest("suscipit", "molestiae", "minus", "placeat") {{
                xApideckDownstreamAuthorization = "voluptatum";
            }};            

            OptionsProxyResponse res = sdk.execute.optionsProxy(req, new OptionsProxySecurity("iusto") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.optionsProxy200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchProxy

Proxies a downstream PATCH request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchProxyRequest;
import org.openapis.openapi.models.operations.PatchProxyResponse;
import org.openapis.openapi.models.operations.PatchProxySecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchProxyRequest req = new PatchProxyRequest("excepturi", "nisi", "recusandae", "temporibus") {{
                requestBody = "ab".getBytes();
                xApideckDownstreamAuthorization = "quis";
            }};            

            PatchProxyResponse res = sdk.execute.patchProxy(req, new PatchProxySecurity("veritatis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.patchProxy200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postProxy

Proxies a downstream POST request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostProxyRequest;
import org.openapis.openapi.models.operations.PostProxyResponse;
import org.openapis.openapi.models.operations.PostProxySecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostProxyRequest req = new PostProxyRequest("deserunt", "perferendis", "ipsam", "repellendus") {{
                requestBody = "sapiente".getBytes();
                xApideckDownstreamAuthorization = "quo";
            }};            

            PostProxyResponse res = sdk.execute.postProxy(req, new PostProxySecurity("odit") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.postProxy200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putProxy

Proxies a downstream PUT request to a service and injects the necessary credentials into a request stored in Vault. This allows you to have an additional security layer and logging without needing to rely on Unify for normalization.
**Note**: Vault will proxy all data to the downstream URL and method/verb in the headers.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutProxyRequest;
import org.openapis.openapi.models.operations.PutProxyResponse;
import org.openapis.openapi.models.operations.PutProxySecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutProxyRequest req = new PutProxyRequest("at", "at", "maiores", "molestiae") {{
                requestBody = "quod".getBytes();
                xApideckDownstreamAuthorization = "quod";
            }};            

            PutProxyResponse res = sdk.execute.putProxy(req, new PutProxySecurity("esse") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.putProxy200ApplicationJSONAny != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
