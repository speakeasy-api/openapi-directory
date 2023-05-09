# analyse

### Available Operations

* [interference](#interference) - Find the best server for overlapping coverage
* [mesh](#mesh) - Merge sites into a super layer.
* [network](#network) - Find the best server for somewhere

## interference

Merge and analyse sites within a network channel to determine the best server at a given location. Each site will be dynamically allocated a monochrome colour from a palette and the strongest signal promoted at a given location.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InterferenceRequest;
import org.openapis.openapi.models.operations.InterferenceResponse;
import org.openapis.openapi.models.operations.InterferenceSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InterferenceRequest req = new InterferenceRequest("quibusdam", "unde");            

            InterferenceResponse res = sdk.analyse.interference(req, new InterferenceSecurity("nulla") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
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

## mesh

A merge of 'area' calculations for a network to create a single super layer. Stronger signals are promoted over weaker ones. The same colour key must be used.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MeshRequest;
import org.openapis.openapi.models.operations.MeshResponse;
import org.openapis.openapi.models.operations.MeshSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MeshRequest req = new MeshRequest("corrupti", "illum");            

            MeshResponse res = sdk.analyse.mesh(req, new MeshSecurity("vel") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
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

## network

Query your network to find the best server(s) for a given receiver/customer location. A previously generated network is required.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NetworkRequest;
import org.openapis.openapi.models.operations.NetworkResponse;
import org.openapis.openapi.models.operations.NetworkSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NetworkRequest req = new NetworkRequest(623564, 6458.94, 3843.82, "iure", "magnam") {{
                rxg = 8917.73;
            }};            

            NetworkResponse res = sdk.analyse.network(req, new NetworkSecurity("ipsa") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
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
