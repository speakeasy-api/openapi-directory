# usersCompanyLevel

### Available Operations

* [getCompaniesCompanyIdUsers](#getcompaniescompanyidusers) - Get a list of users
* [getCompaniesCompanyIdUsersUserId](#getcompaniescompanyidusersuserid) - Get user details
* [patchCompaniesCompanyIdUsersUserId](#patchcompaniescompanyidusersuserid) - Update user details
* [postCompaniesCompanyIdUsers](#postcompaniescompanyidusers) - Create a new user

## getCompaniesCompanyIdUsers

Returns the list of users for the `companyId` identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdUsersRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdUsersResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdUsersSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdUsersRequest req = new GetCompaniesCompanyIdUsersRequest("quam") {{
                pageNumber = 667169;
                pageSize = 307306;
                username = "Viola.Nicolas";
            }};            

            GetCompaniesCompanyIdUsersResponse res = sdk.usersCompanyLevel.getCompaniesCompanyIdUsers(req, new GetCompaniesCompanyIdUsersSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.listCompanyUsersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompaniesCompanyIdUsersUserId

Returns user details for the `userId` and the `companyId` identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdUsersUserIdRequest;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdUsersUserIdResponse;
import org.openapis.openapi.models.operations.GetCompaniesCompanyIdUsersUserIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCompaniesCompanyIdUsersUserIdRequest req = new GetCompaniesCompanyIdUsersUserIdRequest("quod", "voluptatibus");            

            GetCompaniesCompanyIdUsersUserIdResponse res = sdk.usersCompanyLevel.getCompaniesCompanyIdUsersUserId(req, new GetCompaniesCompanyIdUsersUserIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.companyUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchCompaniesCompanyIdUsersUserId

Updates user details for the `userId` and the `companyId` identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchCompaniesCompanyIdUsersUserIdRequest;
import org.openapis.openapi.models.operations.PatchCompaniesCompanyIdUsersUserIdResponse;
import org.openapis.openapi.models.operations.PatchCompaniesCompanyIdUsersUserIdSecurity;
import org.openapis.openapi.models.shared.Name2;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.UpdateCompanyUserRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchCompaniesCompanyIdUsersUserIdRequest req = new PatchCompaniesCompanyIdUsersUserIdRequest("voluptas", "non") {{
                updateCompanyUserRequest = new UpdateCompanyUserRequest() {{
                    accountGroups = new String[]{{
                        add("laborum"),
                        add("voluptas"),
                    }};
                    active = false;
                    associatedMerchantAccounts = new String[]{{
                        add("animi"),
                        add("recusandae"),
                        add("corporis"),
                        add("non"),
                    }};
                    authnAppsToAdd = new String[]{{
                        add("distinctio"),
                        add("maiores"),
                        add("laboriosam"),
                        add("voluptatem"),
                    }};
                    authnAppsToRemove = new String[]{{
                        add("sequi"),
                        add("sunt"),
                        add("vitae"),
                        add("voluptatibus"),
                    }};
                    email = "Camden.Farrell34@gmail.com";
                    name = new Name2() {{
                        firstName = "Rodger";
                        lastName = "Dibbert";
                    }};;
                    roles = new String[]{{
                        add("nisi"),
                    }};
                    timeZoneCode = "dignissimos";
                }};;
            }};            

            PatchCompaniesCompanyIdUsersUserIdResponse res = sdk.usersCompanyLevel.patchCompaniesCompanyIdUsersUserId(req, new PatchCompaniesCompanyIdUsersUserIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.companyUser != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCompaniesCompanyIdUsers

Creates the user for the `companyId` identified in the path.

To make this request, your API credential must have the following [role](https://docs.adyen.com/development-resources/api-credentials#api-permissions):
* Management API—Users read and write


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdUsersRequest;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdUsersResponse;
import org.openapis.openapi.models.operations.PostCompaniesCompanyIdUsersSecurity;
import org.openapis.openapi.models.shared.CreateCompanyUserRequest;
import org.openapis.openapi.models.shared.Name;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostCompaniesCompanyIdUsersRequest req = new PostCompaniesCompanyIdUsersRequest("reiciendis") {{
                createCompanyUserRequest = new CreateCompanyUserRequest("itaque",                 new Name("vitae", "est");, "accusantium") {{
                    accountGroups = new String[]{{
                        add("minus"),
                        add("quos"),
                        add("possimus"),
                        add("maiores"),
                    }};
                    associatedMerchantAccounts = new String[]{{
                        add("provident"),
                        add("sapiente"),
                    }};
                    authnApps = new String[]{{
                        add("similique"),
                    }};
                    roles = new String[]{{
                        add("provident"),
                    }};
                    timeZoneCode = "ex";
                }};;
            }};            

            PostCompaniesCompanyIdUsersResponse res = sdk.usersCompanyLevel.postCompaniesCompanyIdUsers(req, new PostCompaniesCompanyIdUsersSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.createCompanyUserResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
