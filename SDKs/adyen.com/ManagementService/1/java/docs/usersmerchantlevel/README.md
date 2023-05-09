# usersMerchantLevel

### Available Operations

* [getMerchantsMerchantIdUsers](#getmerchantsmerchantidusers) - Get a list of users
* [getMerchantsMerchantIdUsersUserId](#getmerchantsmerchantidusersuserid) - Get user details
* [patchMerchantsMerchantIdUsersUserId](#patchmerchantsmerchantidusersuserid) - Update a user
* [postMerchantsMerchantIdUsers](#postmerchantsmerchantidusers) - Create a new user

## getMerchantsMerchantIdUsers

Returns a list of users associated with the `merchantId` specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdUsersRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdUsersResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdUsersSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdUsersRequest req = new GetMerchantsMerchantIdUsersRequest("repellendus") {{
                pageNumber = 601277;
                pageSize = 1116;
                username = "Olga.Donnelly";
            }};            

            GetMerchantsMerchantIdUsersResponse res = sdk.usersMerchantLevel.getMerchantsMerchantIdUsers(req, new GetMerchantsMerchantIdUsersSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.listMerchantUsersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMerchantsMerchantIdUsersUserId

Returns user details for the `userId` and the `merchantId` specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdUsersUserIdRequest;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdUsersUserIdResponse;
import org.openapis.openapi.models.operations.GetMerchantsMerchantIdUsersUserIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMerchantsMerchantIdUsersUserIdRequest req = new GetMerchantsMerchantIdUsersUserIdRequest("expedita", "in");            

            GetMerchantsMerchantIdUsersUserIdResponse res = sdk.usersMerchantLevel.getMerchantsMerchantIdUsersUserId(req, new GetMerchantsMerchantIdUsersUserIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchMerchantsMerchantIdUsersUserId

Updates user details for the `userId` and the `merchantId` specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdUsersUserIdRequest;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdUsersUserIdResponse;
import org.openapis.openapi.models.operations.PatchMerchantsMerchantIdUsersUserIdSecurity;
import org.openapis.openapi.models.shared.Name2;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.UpdateMerchantUserRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchMerchantsMerchantIdUsersUserIdRequest req = new PatchMerchantsMerchantIdUsersUserIdRequest("quisquam", "sunt") {{
                updateMerchantUserRequest = new UpdateMerchantUserRequest() {{
                    accountGroups = new String[]{{
                        add("nulla"),
                        add("maiores"),
                    }};
                    active = false;
                    authnAppsToAdd = new String[]{{
                        add("mollitia"),
                        add("impedit"),
                        add("accusamus"),
                    }};
                    authnAppsToRemove = new String[]{{
                        add("quas"),
                    }};
                    email = "Naomie.Carter90@yahoo.com";
                    name = new Name2() {{
                        firstName = "Thalia";
                        lastName = "Corwin";
                    }};;
                    roles = new String[]{{
                        add("quas"),
                        add("impedit"),
                        add("vel"),
                        add("eligendi"),
                    }};
                    timeZoneCode = "recusandae";
                }};;
            }};            

            PatchMerchantsMerchantIdUsersUserIdResponse res = sdk.usersMerchantLevel.patchMerchantsMerchantIdUsersUserId(req, new PatchMerchantsMerchantIdUsersUserIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.user != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMerchantsMerchantIdUsers

Creates a user for the `merchantId` specified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdUsersRequest;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdUsersResponse;
import org.openapis.openapi.models.operations.PostMerchantsMerchantIdUsersSecurity;
import org.openapis.openapi.models.shared.CreateMerchantUserRequest;
import org.openapis.openapi.models.shared.Name;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostMerchantsMerchantIdUsersRequest req = new PostMerchantsMerchantIdUsersRequest("ex") {{
                createMerchantUserRequest = new CreateMerchantUserRequest("beatae",                 new Name("veritatis", "maiores");, "itaque") {{
                    accountGroups = new String[]{{
                        add("quidem"),
                        add("illo"),
                        add("quo"),
                        add("dignissimos"),
                    }};
                    authnApps = new String[]{{
                        add("distinctio"),
                        add("possimus"),
                        add("cum"),
                        add("suscipit"),
                    }};
                    roles = new String[]{{
                        add("earum"),
                        add("quod"),
                        add("nihil"),
                        add("quaerat"),
                    }};
                    timeZoneCode = "ipsum";
                }};;
            }};            

            PostMerchantsMerchantIdUsersResponse res = sdk.usersMerchantLevel.postMerchantsMerchantIdUsers(req, new PostMerchantsMerchantIdUsersSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.createUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
