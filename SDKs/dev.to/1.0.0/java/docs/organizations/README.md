# organizations

### Available Operations

* [getOrgArticles](#getorgarticles) - Organization's Articles
* [getOrgUsers](#getorgusers) - Organization's users
* [getOrganization](#getorganization) - An organization

## getOrgArticles

This endpoint allows the client to retrieve a list of Articles belonging to the organization

It supports pagination, each page will contain `30` users by default.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrgArticlesRequest;
import org.openapis.openapi.models.operations.GetOrgArticlesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloribus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrgArticlesRequest req = new GetOrgArticlesRequest("sapiente") {{
                page = 102044;
                perPage = 652790;
            }};            

            GetOrgArticlesResponse res = sdk.organizations.getOrgArticles(req);

            if (res.articleIndices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrgUsers

This endpoint allows the client to retrieve a list of users belonging to the organization

It supports pagination, each page will contain `30` users by default.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrgUsersRequest;
import org.openapis.openapi.models.operations.GetOrgUsersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrgUsersRequest req = new GetOrgUsersRequest("culpa") {{
                page = 161309;
                perPage = 995300;
            }};            

            GetOrgUsersResponse res = sdk.organizations.getOrgUsers(req);

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrganization

This endpoint allows the client to retrieve a single organization by their username

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrganizationRequest;
import org.openapis.openapi.models.operations.GetOrganizationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrganizationRequest req = new GetOrganizationRequest("occaecati");            

            GetOrganizationResponse res = sdk.organizations.getOrganization(req);

            if (res.getOrganization200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
