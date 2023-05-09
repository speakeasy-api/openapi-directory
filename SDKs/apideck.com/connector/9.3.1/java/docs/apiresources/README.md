# apiResources

### Available Operations

* [apiResourceCoverageOne](#apiresourcecoverageone) - Get API Resource Coverage
* [apiResourcesOne](#apiresourcesone) - Get API Resource

## apiResourceCoverageOne

Get API Resource Coverage

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApiResourceCoverageOneRequest;
import org.openapis.openapi.models.operations.ApiResourceCoverageOneResponse;
import org.openapis.openapi.models.operations.ApiResourceCoverageOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApiResourceCoverageOneRequest req = new ApiResourceCoverageOneRequest("unde", "nulla", "corrupti");            

            ApiResourceCoverageOneResponse res = sdk.apiResources.apiResourceCoverageOne(req, new ApiResourceCoverageOneSecurity("illum") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getApiResourceCoverageResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## apiResourcesOne

Get API Resource

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ApiResourcesOneRequest;
import org.openapis.openapi.models.operations.ApiResourcesOneResponse;
import org.openapis.openapi.models.operations.ApiResourcesOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ApiResourcesOneRequest req = new ApiResourcesOneRequest("vel", "error", "deserunt");            

            ApiResourcesOneResponse res = sdk.apiResources.apiResourcesOne(req, new ApiResourcesOneSecurity("suscipit") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getApiResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
