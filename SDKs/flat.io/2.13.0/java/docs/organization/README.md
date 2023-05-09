# organization

## Overview

Flat for Education organizations

### Available Operations

* [countOrgaUsers](#countorgausers) - Count the organization users using the provided filters
* [createLtiCredentials](#createlticredentials) - Create a new couple of LTI 1.x credentials
* [createOrganizationInvitation](#createorganizationinvitation) - Create a new invitation to join the organization
* [createOrganizationUser](#createorganizationuser) - Create a new user account
* [listLtiCredentials](#listlticredentials) - List LTI 1.x credentials
* [listOrganizationInvitations](#listorganizationinvitations) - List the organization invitations
* [listOrganizationUsers](#listorganizationusers) - List the organization users
* [removeOrganizationInvitation](#removeorganizationinvitation) - Remove an organization invitation
* [removeOrganizationUser](#removeorganizationuser) - Remove an account from Flat
* [revokeLtiCredentials](#revokelticredentials) - Revoke LTI 1.x credentials
* [updateOrganizationUser](#updateorganizationuser) - Update account information

## countOrgaUsers

Count the organization users using the provided filters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CountOrgaUsersRequest;
import org.openapis.openapi.models.operations.CountOrgaUsersResponse;
import org.openapis.openapi.models.operations.CountOrgaUsersSecurity;
import org.openapis.openapi.models.shared.RoleEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CountOrgaUsersRequest req = new CountOrgaUsersRequest() {{
                group = new String[]{{
                    add("accusamus"),
                    add("non"),
                    add("occaecati"),
                }};
                noActiveLicense = false;
                q = "enim";
                role = new org.openapis.openapi.models.shared.RoleEnum[]{{
                    add(RoleEnum.ADMIN),
                    add(RoleEnum.ADMIN),
                    add(RoleEnum.TEACHER),
                    add(RoleEnum.ADMIN),
                }};
            }};            

            CountOrgaUsersResponse res = sdk.organization.countOrgaUsers(req, new CountOrgaUsersSecurity("id") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.countOrgaUsers200ApplicationJSONInteger != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createLtiCredentials

Flat for Education is a Certified LTI Provider. You can use these API methods to automate the creation of LTI credentials. You can read more about our LTI implementation, supported components and LTI Endpoints in our [Developer Documentation](https://flat.io/developers/docs/lti/).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateLtiCredentialsResponse;
import org.openapis.openapi.models.operations.CreateLtiCredentialsSecurity;
import org.openapis.openapi.models.shared.LmsNameEnum;
import org.openapis.openapi.models.shared.LtiCredentialsCreation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.LtiCredentialsCreation req = new LtiCredentialsCreation(LmsNameEnum.DESIRE2LEARN, "deleniti");            

            CreateLtiCredentialsResponse res = sdk.organization.createLtiCredentials(req, new CreateLtiCredentialsSecurity("sapiente") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ltiCredentials != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOrganizationInvitation

This method creates and sends invitation for teachers and admins.

Invitations can only be used by new Flat users or users who are not part of the organization yet.

If the email of the user is already associated to a user of your organization, the API will simply update the role of the existing user and won't send an invitation. In this case, the property `usedBy` will be directly filled with the uniquer identifier of the corresponding user.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationInvitationResponse;
import org.openapis.openapi.models.operations.CreateOrganizationInvitationSecurity;
import org.openapis.openapi.models.shared.OrganizationInvitationCreation;
import org.openapis.openapi.models.shared.OrganizationRolesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.OrganizationInvitationCreation req = new OrganizationInvitationCreation() {{
                email = "Luis_Huels@gmail.com";
                organizationRole = OrganizationRolesEnum.TEACHER;
            }};            

            CreateOrganizationInvitationResponse res = sdk.organization.createOrganizationInvitation(req, new CreateOrganizationInvitationSecurity("molestiae") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.organizationInvitation != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createOrganizationUser

Create a new user account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateOrganizationUserResponse;
import org.openapis.openapi.models.operations.CreateOrganizationUserSecurity;
import org.openapis.openapi.models.shared.FlatLocalesEnum;
import org.openapis.openapi.models.shared.UserCreation;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.UserCreation req = new UserCreation("perferendis", "nihil") {{
                email = "Michele29@gmail.com";
                firstname = "Geraldine";
                lastname = "Mosciski";
                locale = FlatLocalesEnum.RO;
            }};            

            CreateOrganizationUserResponse res = sdk.organization.createOrganizationUser(req, new CreateOrganizationUserSecurity("eum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userDetailsAdmin != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listLtiCredentials

List LTI 1.x credentials

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListLtiCredentialsResponse;
import org.openapis.openapi.models.operations.ListLtiCredentialsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListLtiCredentialsResponse res = sdk.organization.listLtiCredentials(new ListLtiCredentialsSecurity("vero") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.ltiCredentials != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOrganizationInvitations

List the organization invitations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOrganizationInvitationsRequest;
import org.openapis.openapi.models.operations.ListOrganizationInvitationsResponse;
import org.openapis.openapi.models.operations.ListOrganizationInvitationsRoleEnum;
import org.openapis.openapi.models.operations.ListOrganizationInvitationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListOrganizationInvitationsRequest req = new ListOrganizationInvitationsRequest() {{
                limit = 135474L;
                next = "architecto";
                previous = "magnam";
                role = ListOrganizationInvitationsRoleEnum.USER;
            }};            

            ListOrganizationInvitationsResponse res = sdk.organization.listOrganizationInvitations(req, new ListOrganizationInvitationsSecurity("excepturi") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.organizationInvitations != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listOrganizationUsers

List the organization users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListOrganizationUsersRequest;
import org.openapis.openapi.models.operations.ListOrganizationUsersResponse;
import org.openapis.openapi.models.operations.ListOrganizationUsersSecurity;
import org.openapis.openapi.models.shared.RoleEnum;
import org.openapis.openapi.models.shared.SortDirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListOrganizationUsersRequest req = new ListOrganizationUsersRequest() {{
                direction = SortDirectionEnum.ASC;
                group = new String[]{{
                    add("quos"),
                    add("sint"),
                    add("accusantium"),
                }};
                licenseExpirationDate = new String[]{{
                    add("reiciendis"),
                    add("mollitia"),
                    add("ad"),
                }};
                limit = 431418L;
                next = "dolor";
                noActiveLicense = false;
                onlyIds = false;
                previous = "necessitatibus";
                q = "odit";
                role = new org.openapis.openapi.models.shared.RoleEnum[]{{
                    add(RoleEnum.USER),
                    add(RoleEnum.TEACHER),
                }};
                sort = "doloribus";
            }};            

            ListOrganizationUsersResponse res = sdk.organization.listOrganizationUsers(req, new ListOrganizationUsersSecurity("debitis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userDetailsAdmins != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## removeOrganizationInvitation

Remove an organization invitation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveOrganizationInvitationRequest;
import org.openapis.openapi.models.operations.RemoveOrganizationInvitationResponse;
import org.openapis.openapi.models.operations.RemoveOrganizationInvitationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveOrganizationInvitationRequest req = new RemoveOrganizationInvitationRequest("eius");            

            RemoveOrganizationInvitationResponse res = sdk.organization.removeOrganizationInvitation(req, new RemoveOrganizationInvitationSecurity("maxime") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## removeOrganizationUser

This operation removes an account from Flat and its data, including:
* The music scores created by this user (documents, history, comments, collaboration information)
* Education related data (assignments and classroom information)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemoveOrganizationUserRequest;
import org.openapis.openapi.models.operations.RemoveOrganizationUserResponse;
import org.openapis.openapi.models.operations.RemoveOrganizationUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RemoveOrganizationUserRequest req = new RemoveOrganizationUserRequest("deleniti") {{
                convertToIndividual = false;
            }};            

            RemoveOrganizationUserResponse res = sdk.organization.removeOrganizationUser(req, new RemoveOrganizationUserSecurity("facilis") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## revokeLtiCredentials

Revoke LTI 1.x credentials

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RevokeLtiCredentialsRequest;
import org.openapis.openapi.models.operations.RevokeLtiCredentialsResponse;
import org.openapis.openapi.models.operations.RevokeLtiCredentialsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RevokeLtiCredentialsRequest req = new RevokeLtiCredentialsRequest("in");            

            RevokeLtiCredentialsResponse res = sdk.organization.revokeLtiCredentials(req, new RevokeLtiCredentialsSecurity("architecto") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
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

## updateOrganizationUser

Update account information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateOrganizationUserRequest;
import org.openapis.openapi.models.operations.UpdateOrganizationUserResponse;
import org.openapis.openapi.models.operations.UpdateOrganizationUserSecurity;
import org.openapis.openapi.models.shared.OrganizationRolesEnum;
import org.openapis.openapi.models.shared.UserAdminUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateOrganizationUserRequest req = new UpdateOrganizationUserRequest(                new UserAdminUpdate() {{
                                email = "Tevin.Herman99@gmail.com";
                                firstname = "Roman";
                                lastname = "Cormier";
                                organizationRole = OrganizationRolesEnum.USER;
                                password = "pariatur";
                                username = "Alia_Crooks";
                            }};, "magni");            

            UpdateOrganizationUserResponse res = sdk.organization.updateOrganizationUser(req, new UpdateOrganizationUserSecurity("sunt") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userDetailsAdmin != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
