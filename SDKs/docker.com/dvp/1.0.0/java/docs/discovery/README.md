# discovery

### Available Operations

* [getNamespace](#getnamespace) - Get namespace
* [getNamespaces](#getnamespaces) - Get namespaces and repos

## getNamespace

Gets metadata associated with specified namespace, including extra repos associated with the namespace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamespaceRequest;
import org.openapis.openapi.models.operations.GetNamespaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quibusdam") {{
                    hubAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetNamespaceRequest req = new GetNamespaceRequest("unde");            

            GetNamespaceResponse res = sdk.discovery.getNamespace(req);

            if (res.namespaceMetadata != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamespaces

Gets a list of your namespaces and repos which have data available

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamespacesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nulla") {{
                    hubAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetNamespacesResponse res = sdk.discovery.getNamespaces();

            if (res.namespaceData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
