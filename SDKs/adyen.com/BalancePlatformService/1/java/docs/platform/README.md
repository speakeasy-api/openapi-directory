# platform

### Available Operations

* [getBalancePlatformsId](#getbalanceplatformsid) - Get a balance platform
* [getBalancePlatformsIdAccountHolders](#getbalanceplatformsidaccountholders) - Get all account holders under a balance platform

## getBalancePlatformsId

Returns a balance platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBalancePlatformsIdRequest;
import org.openapis.openapi.models.operations.GetBalancePlatformsIdResponse;
import org.openapis.openapi.models.operations.GetBalancePlatformsIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBalancePlatformsIdRequest req = new GetBalancePlatformsIdRequest("provident");            

            GetBalancePlatformsIdResponse res = sdk.platform.getBalancePlatformsId(req, new GetBalancePlatformsIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.balancePlatform != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getBalancePlatformsIdAccountHolders

Returns a paginated list of all the account holders that belong to the balance platform. To fetch multiple pages, use the query parameters. 

For example, to limit the page to 5 account holders and to skip the first 20, use `/balancePlatforms/{id}/accountHolders?limit=5&offset=20`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetBalancePlatformsIdAccountHoldersRequest;
import org.openapis.openapi.models.operations.GetBalancePlatformsIdAccountHoldersResponse;
import org.openapis.openapi.models.operations.GetBalancePlatformsIdAccountHoldersSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetBalancePlatformsIdAccountHoldersRequest req = new GetBalancePlatformsIdAccountHoldersRequest("a") {{
                limit = 857723;
                offset = 557811;
            }};            

            GetBalancePlatformsIdAccountHoldersResponse res = sdk.platform.getBalancePlatformsIdAccountHolders(req, new GetBalancePlatformsIdAccountHoldersSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.paginatedAccountHoldersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
