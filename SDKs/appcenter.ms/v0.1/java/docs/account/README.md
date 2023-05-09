# account

### Available Operations

* [usersGetUserMetadata](#usersgetusermetadata)
* [appApiTokensDelete](#appapitokensdelete) - Delete the App Api Token object with the specific ID
* [appApiTokensList](#appapitokenslist) - Returns App API tokens for the app
* [appApiTokensNew](#appapitokensnew) - Creates a new App API token
* [appInvitationsAccept](#appinvitationsaccept) - Accepts a pending invitation for the specified user
* [appInvitationsCreate](#appinvitationscreate) - Invites a new or existing user to an app
* [~~appInvitationsCreateByEmail~~](#appinvitationscreatebyemail) - Invites a new or existing user to an app :warning: **Deprecated**
* [appInvitationsDelete](#appinvitationsdelete) - Removes a user's invitation to an app
* [appInvitationsList](#appinvitationslist) - Gets the pending invitations for the app
* [appInvitationsReject](#appinvitationsreject) - Rejects a pending invitation for the specified user
* [appInvitationsUpdatePermissions](#appinvitationsupdatepermissions) - Update pending invitation permission
* [appsCreate](#appscreate) - Creates a new app and returns it to the caller
* [appsCreateForOrg](#appscreatefororg) - Creates a new app for the organization and returns it to the caller
* [appsDelete](#appsdelete) - Delete an app
* [appsDeleteAvatar](#appsdeleteavatar) - Deletes the uploaded app avatar
* [appsGet](#appsget) - Return a specific app with the given app name which belongs to the given owner.
* [appsGetForOrgUser](#appsgetfororguser) - Get a user apps information from an organization by name
* [appsGetTeams](#appsgetteams) - Returns the details of all teams that have access to the app.
* [appsList](#appslist) - Returns a list of apps
* [appsListForOrg](#appslistfororg) - Returns a list of apps for the organization
* [appsListTesters](#appslisttesters) - Returns the testers associated with the app specified with the given app name which belongs to the given owner.
* [appsRemoveUser](#appsremoveuser) - Removes the user from the app
* [appsTransferOwnershipJson](#appstransferownershipjson) - Transfers ownership of an app to a different user or organization
* [appsTransferOwnershipRaw](#appstransferownershipraw) - Transfers ownership of an app to a different user or organization
* [appsTransferToOrg](#appstransfertoorg) - Transfers ownership of an app to a new organization
* [appsUpdate](#appsupdate) - Partially updates a single app
* [appsUpdateAvatar](#appsupdateavatar) - Sets the app avatar
* [appsUpdateUserPermissions](#appsupdateuserpermissions) - Update user permission for the app
* [azureSubscriptionDeleteForApp](#azuresubscriptiondeleteforapp) - Delete the azure subscriptions for the app
* [azureSubscriptionLinkForApp](#azuresubscriptionlinkforapp) - Link azure subscription to an app
* [azureSubscriptionListForApp](#azuresubscriptionlistforapp) - Returns a list of azure subscriptions for the app
* [azureSubscriptionListForOrg](#azuresubscriptionlistfororg) - Returns a list of azure subscriptions for the organization
* [azureSubscriptionListForUser](#azuresubscriptionlistforuser) - Returns a list of azure subscriptions for the user
* [distributionGroupInvitationsAcceptAll](#distributiongroupinvitationsacceptall) - Accepts all pending invitations to distribution groups for the specified user
* [distributionGroupsAddApps](#distributiongroupsaddapps) - Add apps to distribution group in an org
* [distributionGroupsAddUser](#distributiongroupsadduser) - Adds the members to the specified distribution group
* [distributionGroupsAddUsersForOrg](#distributiongroupsaddusersfororg) - Accepts an array of user email addresses to get added to the specified group
* [distributionGroupsBulkDeleteApps](#distributiongroupsbulkdeleteapps) - Delete apps from distribution group in an org
* [distributionGroupsBulkDeleteUsers](#distributiongroupsbulkdeleteusers) - Delete testers from distribution group in an org
* [distributionGroupsCreate](#distributiongroupscreate) - Creates a new distribution group and returns it to the caller
* [distributionGroupsCreateForOrg](#distributiongroupscreatefororg) - Creates a disribution goup which can be shared across apps under an organization
* [distributionGroupsDelete](#distributiongroupsdelete) - Deletes a distribution group
* [distributionGroupsDeleteForOrg](#distributiongroupsdeletefororg) - Deletes a single distribution group from an org with a given distribution group name
* [distributionGroupsDetailsForOrg](#distributiongroupsdetailsfororg) - Returns a list of distribution groups with details for an organization
* [distributionGroupsGet](#distributiongroupsget) - Returns a single distribution group for a given distribution group name
* [distributionGroupsGetApps](#distributiongroupsgetapps) - Get apps from a distribution group in an org
* [distributionGroupsGetForOrg](#distributiongroupsgetfororg) - Returns a single distribution group in org for a given distribution group name
* [distributionGroupsList](#distributiongroupslist) - Returns a list of distribution groups in the app specified
* [distributionGroupsListAllTestersForOrg](#distributiongroupslistalltestersfororg) - Returns a unique list of users including the whole organization members plus testers in any shared group of that org
* [distributionGroupsListForOrg](#distributiongroupslistfororg) - Returns a list of distribution groups in the org specified
* [distributionGroupsListUsers](#distributiongroupslistusers) - Returns a list of member details in the distribution group specified
* [distributionGroupsListUsersForOrg](#distributiongroupslistusersfororg) - Returns a list of member in the distribution group specified
* [distributionGroupsPatchForOrg](#distributiongroupspatchfororg) - Update one given distribution group name in an org
* [distributionGroupsRemoveUser](#distributiongroupsremoveuser) - Remove the users from the distribution group
* [distributionGroupsResendInvite](#distributiongroupsresendinvite) - Resend distribution group app invite notification to previously invited testers
* [distributionGroupsResendSharedInvite](#distributiongroupsresendsharedinvite) - Resend shared distribution group invite notification to previously invited testers
* [distributionGroupsUpdate](#distributiongroupsupdate) - Updates the attributes of distribution group
* [invitationsSent](#invitationssent) - Returns all invitations sent by the caller
* [orgInvitations](#orginvitations) - Removes a user's invitation to an organization
* [orgInvitationsAccept](#orginvitationsaccept) - Accepts a pending organization invitation for the specified user
* [orgInvitationsCreate](#orginvitationscreate) - Invites a new or existing user to an organization
* [orgInvitationsDelete](#orginvitationsdelete) - Removes a user's invitation to an organization
* [orgInvitationsListPending](#orginvitationslistpending) - Gets the pending invitations for the organization
* [orgInvitationsReject](#orginvitationsreject) - Rejects a pending organization invitation
* [orgInvitationsSendNewInvitation](#orginvitationssendnewinvitation) - Cancels an existing organization invitation for the user and sends a new one
* [orgInvitationsUpdate](#orginvitationsupdate) - Allows the role of an invited user to be changed
* [organizationDeleteAvatar](#organizationdeleteavatar) - Deletes the uploaded organization avatar
* [organizationUpdateAvatar](#organizationupdateavatar) - Sets the organization avatar
* [organizationsCreateOrUpdate](#organizationscreateorupdate) - Creates a new organization and returns it to the caller
* [organizationsDelete](#organizationsdelete) - Deletes a single organization
* [organizationsGet](#organizationsget) - Returns the details of a single organization
* [organizationsList](#organizationslist) - Returns a list of organizations the requesting user has access to
* [organizationsListAdministered](#organizationslistadministered) - Returns a list organizations in which the requesting user is an admin
* [organizationsUpdate](#organizationsupdate) - Returns a list of organizations the requesting user has access to
* [sharedconnectionConnections](#sharedconnectionconnections) - Gets all service connections of the service type for GDPR export.
* [teamsAddApp](#teamsaddapp) - Adds an app to a team
* [teamsAddUser](#teamsadduser) - Adds a new user to a team that is owned by an organization
* [teamsCreateTeam](#teamscreateteam) - Creates a team and returns it
* [teamsDelete](#teamsdelete) - Deletes a single team
* [teamsGetTeam](#teamsgetteam) - Returns the details of a single team
* [teamsGetUsers](#teamsgetusers) - Returns the users of a team which is owned by an organization
* [teamsListAll](#teamslistall) - Returns the list of all teams in this org
* [teamsListApps](#teamslistapps) - Returns the apps a team has access to
* [teamsRemoveApp](#teamsremoveapp) - Removes an app from a team
* [teamsRemoveUser](#teamsremoveuser) - Removes a user from a team that is owned by an organization
* [teamsUpdate](#teamsupdate) - Updates a single team
* [teamsUpdatePermissions](#teamsupdatepermissions) - Updates the permissions the team has to the app
* [userApiTokensDelete](#userapitokensdelete) - Delete the user api_token object with the specific id
* [userApiTokensList](#userapitokenslist) - Returns api tokens for the authenticated user
* [userApiTokensNew](#userapitokensnew) - Creates a new User API token
* [usersGet](#usersget) - Returns the user profile data
* [usersGetForOrg](#usersgetfororg) - Get a user information from an organization by name - if there is explicit permission return it, if not if not return highest implicit permission
* [usersList](#userslist) - Returns the users associated with the app specified with the given app name which belongs to the given owner.
* [usersListForOrg](#userslistfororg) - Returns a list of users that belong to an organization
* [usersRemoveFromOrg](#usersremovefromorg) - Removes a user from an organization.
* [usersUpdate](#usersupdate) - Updates the user profile and returns the updated user data
* [usersUpdateOrgRole](#usersupdateorgrole) - Updates the given organization user

## usersGetUserMetadata

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersGetUserMetadataResponse;
import org.openapis.openapi.models.operations.UsersGetUserMetadataSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersGetUserMetadataResponse res = sdk.account.usersGetUserMetadata(new UsersGetUserMetadataSecurity("provident") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.usersGetUserMetadata200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appApiTokensDelete

Delete the App Api Token object with the specific ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppApiTokensDeleteRequest;
import org.openapis.openapi.models.operations.AppApiTokensDeleteResponse;
import org.openapis.openapi.models.operations.AppApiTokensDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppApiTokensDeleteRequest req = new AppApiTokensDeleteRequest("distinctio", "quibusdam", "unde");            

            AppApiTokensDeleteResponse res = sdk.account.appApiTokensDelete(req, new AppApiTokensDeleteSecurity("nulla", "corrupti") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## appApiTokensList

Returns App API tokens for the app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppApiTokensListRequest;
import org.openapis.openapi.models.operations.AppApiTokensListResponse;
import org.openapis.openapi.models.operations.AppApiTokensListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppApiTokensListRequest req = new AppApiTokensListRequest("illum", "vel");            

            AppApiTokensListResponse res = sdk.account.appApiTokensList(req, new AppApiTokensListSecurity("error", "deserunt") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.appApiTokensList200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appApiTokensNew

Creates a new App API token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppApiTokensNewRequest;
import org.openapis.openapi.models.operations.AppApiTokensNewRequestBody;
import org.openapis.openapi.models.operations.AppApiTokensNewRequestBodyScopeEnum;
import org.openapis.openapi.models.operations.AppApiTokensNewResponse;
import org.openapis.openapi.models.operations.AppApiTokensNewSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppApiTokensNewRequest req = new AppApiTokensNewRequest("suscipit", "iure") {{
                requestBody = new AppApiTokensNewRequestBody() {{
                    description = "magnam";
                    scope = new org.openapis.openapi.models.operations.AppApiTokensNewRequestBodyScopeEnum[]{{
                        add(AppApiTokensNewRequestBodyScopeEnum.ALL),
                        add(AppApiTokensNewRequestBodyScopeEnum.VIEWER),
                        add(AppApiTokensNewRequestBodyScopeEnum.ALL),
                        add(AppApiTokensNewRequestBodyScopeEnum.ALL),
                    }};
                }};;
            }};            

            AppApiTokensNewResponse res = sdk.account.appApiTokensNew(req, new AppApiTokensNewSecurity("molestiae", "minus") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.appApiTokensNew201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appInvitationsAccept

Accepts a pending invitation for the specified user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppInvitationsAcceptRequest;
import org.openapis.openapi.models.operations.AppInvitationsAcceptResponse;
import org.openapis.openapi.models.operations.AppInvitationsAcceptSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppInvitationsAcceptRequest req = new AppInvitationsAcceptRequest("placeat") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("iusto", "excepturi");
                    put("nisi", "recusandae");
                    put("temporibus", "ab");
                }};
            }};            

            AppInvitationsAcceptResponse res = sdk.account.appInvitationsAccept(req, new AppInvitationsAcceptSecurity("quis") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## appInvitationsCreate

Invites a new or existing user to an app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppInvitationsCreateRequest;
import org.openapis.openapi.models.operations.AppInvitationsCreateRequestBody;
import org.openapis.openapi.models.operations.AppInvitationsCreateRequestBodyRoleEnum;
import org.openapis.openapi.models.operations.AppInvitationsCreateResponse;
import org.openapis.openapi.models.operations.AppInvitationsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppInvitationsCreateRequest req = new AppInvitationsCreateRequest("veritatis", "deserunt") {{
                requestBody = new AppInvitationsCreateRequestBody("perferendis") {{
                    role = AppInvitationsCreateRequestBodyRoleEnum.COLLABORATOR;
                }};;
            }};            

            AppInvitationsCreateResponse res = sdk.account.appInvitationsCreate(req, new AppInvitationsCreateSecurity("repellendus") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## ~~appInvitationsCreateByEmail~~

Invites a new or existing user to an app

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppInvitationsCreateByEmailRequest;
import org.openapis.openapi.models.operations.AppInvitationsCreateByEmailRequestBody;
import org.openapis.openapi.models.operations.AppInvitationsCreateByEmailRequestBodyRoleEnum;
import org.openapis.openapi.models.operations.AppInvitationsCreateByEmailResponse;
import org.openapis.openapi.models.operations.AppInvitationsCreateByEmailSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppInvitationsCreateByEmailRequest req = new AppInvitationsCreateByEmailRequest("sapiente", "quo", "odit") {{
                requestBody = new AppInvitationsCreateByEmailRequestBody() {{
                    role = AppInvitationsCreateByEmailRequestBodyRoleEnum.MEMBER;
                }};;
            }};            

            AppInvitationsCreateByEmailResponse res = sdk.account.appInvitationsCreateByEmail(req, new AppInvitationsCreateByEmailSecurity("at") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## appInvitationsDelete

Removes a user's invitation to an app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppInvitationsDeleteRequest;
import org.openapis.openapi.models.operations.AppInvitationsDeleteResponse;
import org.openapis.openapi.models.operations.AppInvitationsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppInvitationsDeleteRequest req = new AppInvitationsDeleteRequest("maiores", "molestiae", "quod");            

            AppInvitationsDeleteResponse res = sdk.account.appInvitationsDelete(req, new AppInvitationsDeleteSecurity("quod") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## appInvitationsList

Gets the pending invitations for the app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppInvitationsListRequest;
import org.openapis.openapi.models.operations.AppInvitationsListResponse;
import org.openapis.openapi.models.operations.AppInvitationsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppInvitationsListRequest req = new AppInvitationsListRequest("esse", "totam");            

            AppInvitationsListResponse res = sdk.account.appInvitationsList(req, new AppInvitationsListSecurity("porro") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.appInvitationsList200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appInvitationsReject

Rejects a pending invitation for the specified user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppInvitationsRejectRequest;
import org.openapis.openapi.models.operations.AppInvitationsRejectResponse;
import org.openapis.openapi.models.operations.AppInvitationsRejectSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppInvitationsRejectRequest req = new AppInvitationsRejectRequest("dolorum") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("nam", "officia");
                }};
            }};            

            AppInvitationsRejectResponse res = sdk.account.appInvitationsReject(req, new AppInvitationsRejectSecurity("occaecati") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## appInvitationsUpdatePermissions

Update pending invitation permission

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppInvitationsUpdatePermissionsRequest;
import org.openapis.openapi.models.operations.AppInvitationsUpdatePermissionsRequestBody;
import org.openapis.openapi.models.operations.AppInvitationsUpdatePermissionsRequestBodyPermissionsEnum;
import org.openapis.openapi.models.operations.AppInvitationsUpdatePermissionsResponse;
import org.openapis.openapi.models.operations.AppInvitationsUpdatePermissionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppInvitationsUpdatePermissionsRequest req = new AppInvitationsUpdatePermissionsRequest(                new AppInvitationsUpdatePermissionsRequestBody(                new org.openapis.openapi.models.operations.AppInvitationsUpdatePermissionsRequestBodyPermissionsEnum[]{{
                                                add(AppInvitationsUpdatePermissionsRequestBodyPermissionsEnum.DEVELOPER),
                                            }});, "hic", "optio", "totam");            

            AppInvitationsUpdatePermissionsResponse res = sdk.account.appInvitationsUpdatePermissions(req, new AppInvitationsUpdatePermissionsSecurity("beatae") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## appsCreate

Creates a new app and returns it to the caller

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsCreateRequestBody;
import org.openapis.openapi.models.operations.AppsCreateRequestBodyOsEnum;
import org.openapis.openapi.models.operations.AppsCreateRequestBodyPlatformEnum;
import org.openapis.openapi.models.operations.AppsCreateResponse;
import org.openapis.openapi.models.operations.AppsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsCreateRequestBody req = new AppsCreateRequestBody("commodi", AppsCreateRequestBodyOsEnum.TIZEN, AppsCreateRequestBodyPlatformEnum.UWP) {{
                description = "qui";
                name = "Jonathon Klocko";
                releaseType = "aspernatur";
            }};            

            AppsCreateResponse res = sdk.account.appsCreate(req, new AppsCreateSecurity("perferendis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.appsCreate201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsCreateForOrg

Creates a new app for the organization and returns it to the caller

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsCreateForOrgRequest;
import org.openapis.openapi.models.operations.AppsCreateForOrgRequestBody;
import org.openapis.openapi.models.operations.AppsCreateForOrgRequestBodyOsEnum;
import org.openapis.openapi.models.operations.AppsCreateForOrgRequestBodyPlatformEnum;
import org.openapis.openapi.models.operations.AppsCreateForOrgResponse;
import org.openapis.openapi.models.operations.AppsCreateForOrgSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsCreateForOrgRequest req = new AppsCreateForOrgRequest(                new AppsCreateForOrgRequestBody("ad", AppsCreateForOrgRequestBodyOsEnum.TV_OS, AppsCreateForOrgRequestBodyPlatformEnum.OBJECTIVE_C_SWIFT) {{
                                description = "iste";
                                name = "Faye Howe";
                                releaseType = "fuga";
                            }};, "in");            

            AppsCreateForOrgResponse res = sdk.account.appsCreateForOrg(req, new AppsCreateForOrgSecurity("corporis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.appsCreateForOrg200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsDelete

Delete an app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsDeleteRequest;
import org.openapis.openapi.models.operations.AppsDeleteResponse;
import org.openapis.openapi.models.operations.AppsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsDeleteRequest req = new AppsDeleteRequest("iste", "iure");            

            AppsDeleteResponse res = sdk.account.appsDelete(req, new AppsDeleteSecurity("saepe") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## appsDeleteAvatar

Deletes the uploaded app avatar

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsDeleteAvatarRequest;
import org.openapis.openapi.models.operations.AppsDeleteAvatarResponse;
import org.openapis.openapi.models.operations.AppsDeleteAvatarSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsDeleteAvatarRequest req = new AppsDeleteAvatarRequest("quidem", "architecto");            

            AppsDeleteAvatarResponse res = sdk.account.appsDeleteAvatar(req, new AppsDeleteAvatarSecurity("ipsa") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.appsDeleteAvatar200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsGet

Return a specific app with the given app name which belongs to the given owner.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsGetRequest;
import org.openapis.openapi.models.operations.AppsGetResponse;
import org.openapis.openapi.models.operations.AppsGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsGetRequest req = new AppsGetRequest("reiciendis", "est");            

            AppsGetResponse res = sdk.account.appsGet(req, new AppsGetSecurity("mollitia") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.appsGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsGetForOrgUser

Get a user apps information from an organization by name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsGetForOrgUserRequest;
import org.openapis.openapi.models.operations.AppsGetForOrgUserResponse;
import org.openapis.openapi.models.operations.AppsGetForOrgUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsGetForOrgUserRequest req = new AppsGetForOrgUserRequest("laborum", "dolores");            

            AppsGetForOrgUserResponse res = sdk.account.appsGetForOrgUser(req, new AppsGetForOrgUserSecurity("dolorem") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.appsGetForOrgUser200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsGetTeams

Returns the details of all teams that have access to the app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsGetTeamsRequest;
import org.openapis.openapi.models.operations.AppsGetTeamsResponse;
import org.openapis.openapi.models.operations.AppsGetTeamsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsGetTeamsRequest req = new AppsGetTeamsRequest("corporis", "explicabo");            

            AppsGetTeamsResponse res = sdk.account.appsGetTeams(req, new AppsGetTeamsSecurity("nobis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.appsGetTeams200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsList

Returns a list of apps

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsListDollarOrderByEnum;
import org.openapis.openapi.models.operations.AppsListRequest;
import org.openapis.openapi.models.operations.AppsListResponse;
import org.openapis.openapi.models.operations.AppsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsListRequest req = new AppsListRequest() {{
                dollarOrderBy = AppsListDollarOrderByEnum.DISPLAY_NAME;
            }};            

            AppsListResponse res = sdk.account.appsList(req, new AppsListSecurity("omnis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.appsList200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsListForOrg

Returns a list of apps for the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsListForOrgRequest;
import org.openapis.openapi.models.operations.AppsListForOrgResponse;
import org.openapis.openapi.models.operations.AppsListForOrgSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsListForOrgRequest req = new AppsListForOrgRequest("nemo");            

            AppsListForOrgResponse res = sdk.account.appsListForOrg(req, new AppsListForOrgSecurity("minima") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.appsListForOrg200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsListTesters

Returns the testers associated with the app specified with the given app name which belongs to the given owner.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsListTestersRequest;
import org.openapis.openapi.models.operations.AppsListTestersResponse;
import org.openapis.openapi.models.operations.AppsListTestersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsListTestersRequest req = new AppsListTestersRequest("excepturi", "accusantium");            

            AppsListTestersResponse res = sdk.account.appsListTesters(req, new AppsListTestersSecurity("iure") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.appsListTesters200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsRemoveUser

Removes the user from the app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsRemoveUserRequest;
import org.openapis.openapi.models.operations.AppsRemoveUserResponse;
import org.openapis.openapi.models.operations.AppsRemoveUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsRemoveUserRequest req = new AppsRemoveUserRequest("culpa", "doloribus", "sapiente");            

            AppsRemoveUserResponse res = sdk.account.appsRemoveUser(req, new AppsRemoveUserSecurity("architecto") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## appsTransferOwnershipJson

Transfers ownership of an app to a different user or organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsTransferOwnershipJsonRequest;
import org.openapis.openapi.models.operations.AppsTransferOwnershipJsonResponse;
import org.openapis.openapi.models.operations.AppsTransferOwnershipJsonSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsTransferOwnershipJsonRequest req = new AppsTransferOwnershipJsonRequest("mollitia", "dolorem", "culpa") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("repellat", "mollitia");
                }};
            }};            

            AppsTransferOwnershipJsonResponse res = sdk.account.appsTransferOwnershipJson(req, new AppsTransferOwnershipJsonSecurity("occaecati") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.appsTransferOwnershipJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsTransferOwnershipRaw

Transfers ownership of an app to a different user or organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsTransferOwnershipRawRequest;
import org.openapis.openapi.models.operations.AppsTransferOwnershipRawResponse;
import org.openapis.openapi.models.operations.AppsTransferOwnershipRawSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsTransferOwnershipRawRequest req = new AppsTransferOwnershipRawRequest("numquam", "commodi", "quam") {{
                requestBody = "molestiae".getBytes();
            }};            

            AppsTransferOwnershipRawResponse res = sdk.account.appsTransferOwnershipRaw(req, new AppsTransferOwnershipRawSecurity("velit") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.appsTransferOwnershipRaw200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsTransferToOrg

Transfers ownership of an app to a new organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsTransferToOrgRequest;
import org.openapis.openapi.models.operations.AppsTransferToOrgResponse;
import org.openapis.openapi.models.operations.AppsTransferToOrgSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsTransferToOrgRequest req = new AppsTransferToOrgRequest("error", "quia") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("vitae", "laborum");
                    put("animi", "enim");
                }};
            }};            

            AppsTransferToOrgResponse res = sdk.account.appsTransferToOrg(req, new AppsTransferToOrgSecurity("odit") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.appsTransferToOrg200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsUpdate

Partially updates a single app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsUpdateRequest;
import org.openapis.openapi.models.operations.AppsUpdateRequestBody;
import org.openapis.openapi.models.operations.AppsUpdateResponse;
import org.openapis.openapi.models.operations.AppsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsUpdateRequest req = new AppsUpdateRequest("quo", "sequi") {{
                requestBody = new AppsUpdateRequestBody() {{
                    description = "tenetur";
                    displayName = "ipsam";
                    iconAssetId = "ad019da1-ffe7-48f0-97b0-074f15471b5e";
                    iconUrl = "commodi";
                    name = "Eric Emmerich";
                    releaseType = "excepturi";
                }};;
            }};            

            AppsUpdateResponse res = sdk.account.appsUpdate(req, new AppsUpdateSecurity("pariatur") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.appsUpdate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsUpdateAvatar

Sets the app avatar

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsUpdateAvatarRequest;
import org.openapis.openapi.models.operations.AppsUpdateAvatarRequestBody;
import org.openapis.openapi.models.operations.AppsUpdateAvatarRequestBodyAvatar;
import org.openapis.openapi.models.operations.AppsUpdateAvatarResponse;
import org.openapis.openapi.models.operations.AppsUpdateAvatarSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsUpdateAvatarRequest req = new AppsUpdateAvatarRequest("modi", "praesentium") {{
                requestBody = new AppsUpdateAvatarRequestBody() {{
                    avatar = new AppsUpdateAvatarRequestBodyAvatar("rem", "voluptates".getBytes());;
                }};;
            }};            

            AppsUpdateAvatarResponse res = sdk.account.appsUpdateAvatar(req, new AppsUpdateAvatarSecurity("quasi") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.appsUpdateAvatar200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## appsUpdateUserPermissions

Update user permission for the app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AppsUpdateUserPermissionsRequest;
import org.openapis.openapi.models.operations.AppsUpdateUserPermissionsRequestBody;
import org.openapis.openapi.models.operations.AppsUpdateUserPermissionsRequestBodyPermissionsEnum;
import org.openapis.openapi.models.operations.AppsUpdateUserPermissionsResponse;
import org.openapis.openapi.models.operations.AppsUpdateUserPermissionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AppsUpdateUserPermissionsRequest req = new AppsUpdateUserPermissionsRequest(                new AppsUpdateUserPermissionsRequestBody(                new org.openapis.openapi.models.operations.AppsUpdateUserPermissionsRequestBodyPermissionsEnum[]{{
                                                add(AppsUpdateUserPermissionsRequestBodyPermissionsEnum.DEVELOPER),
                                                add(AppsUpdateUserPermissionsRequestBodyPermissionsEnum.MANAGER),
                                                add(AppsUpdateUserPermissionsRequestBodyPermissionsEnum.VIEWER),
                                                add(AppsUpdateUserPermissionsRequestBodyPermissionsEnum.MANAGER),
                                            }});, "enim", "consequatur", "est");            

            AppsUpdateUserPermissionsResponse res = sdk.account.appsUpdateUserPermissions(req, new AppsUpdateUserPermissionsSecurity("quibusdam") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## azureSubscriptionDeleteForApp

Delete the azure subscriptions for the app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AzureSubscriptionDeleteForAppRequest;
import org.openapis.openapi.models.operations.AzureSubscriptionDeleteForAppResponse;
import org.openapis.openapi.models.operations.AzureSubscriptionDeleteForAppSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AzureSubscriptionDeleteForAppRequest req = new AzureSubscriptionDeleteForAppRequest("explicabo", "abd44269-802d-4502-a94b-b4f63c969e9a", "dolor");            

            AzureSubscriptionDeleteForAppResponse res = sdk.account.azureSubscriptionDeleteForApp(req, new AzureSubscriptionDeleteForAppSecurity("debitis") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## azureSubscriptionLinkForApp

Link azure subscription to an app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AzureSubscriptionLinkForAppRequest;
import org.openapis.openapi.models.operations.AzureSubscriptionLinkForAppRequestBody;
import org.openapis.openapi.models.operations.AzureSubscriptionLinkForAppResponse;
import org.openapis.openapi.models.operations.AzureSubscriptionLinkForAppSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AzureSubscriptionLinkForAppRequest req = new AzureSubscriptionLinkForAppRequest(                new AzureSubscriptionLinkForAppRequestBody("fa77dfb1-4cd6-46ae-b95e-fb9ba88f3a66");, "natus", "omnis");            

            AzureSubscriptionLinkForAppResponse res = sdk.account.azureSubscriptionLinkForApp(req, new AzureSubscriptionLinkForAppSecurity("molestiae") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## azureSubscriptionListForApp

Returns a list of azure subscriptions for the app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AzureSubscriptionListForAppRequest;
import org.openapis.openapi.models.operations.AzureSubscriptionListForAppResponse;
import org.openapis.openapi.models.operations.AzureSubscriptionListForAppSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AzureSubscriptionListForAppRequest req = new AzureSubscriptionListForAppRequest("perferendis", "nihil");            

            AzureSubscriptionListForAppResponse res = sdk.account.azureSubscriptionListForApp(req, new AzureSubscriptionListForAppSecurity("magnam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.azureSubscriptionListForApp200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## azureSubscriptionListForOrg

Returns a list of azure subscriptions for the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AzureSubscriptionListForOrgRequest;
import org.openapis.openapi.models.operations.AzureSubscriptionListForOrgResponse;
import org.openapis.openapi.models.operations.AzureSubscriptionListForOrgSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AzureSubscriptionListForOrgRequest req = new AzureSubscriptionListForOrgRequest("distinctio");            

            AzureSubscriptionListForOrgResponse res = sdk.account.azureSubscriptionListForOrg(req, new AzureSubscriptionListForOrgSecurity("id") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.azureSubscriptionListForOrg200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## azureSubscriptionListForUser

Returns a list of azure subscriptions for the user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AzureSubscriptionListForUserResponse;
import org.openapis.openapi.models.operations.AzureSubscriptionListForUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AzureSubscriptionListForUserResponse res = sdk.account.azureSubscriptionListForUser(new AzureSubscriptionListForUserSecurity("labore") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.azureSubscriptionListForUser200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## distributionGroupInvitationsAcceptAll

Accepts all pending invitations to distribution groups for the specified user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupInvitationsAcceptAllResponse;
import org.openapis.openapi.models.operations.DistributionGroupInvitationsAcceptAllSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = new java.util.HashMap<String, Object>() {{
                put("suscipit", "natus");
                put("nobis", "eum");
            }}            

            DistributionGroupInvitationsAcceptAllResponse res = sdk.account.distributionGroupInvitationsAcceptAll(req, new DistributionGroupInvitationsAcceptAllSecurity("vero") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## distributionGroupsAddApps

Add apps to distribution group in an org

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsAddAppsRequest;
import org.openapis.openapi.models.operations.DistributionGroupsAddAppsRequestBody;
import org.openapis.openapi.models.operations.DistributionGroupsAddAppsRequestBodyApps;
import org.openapis.openapi.models.operations.DistributionGroupsAddAppsResponse;
import org.openapis.openapi.models.operations.DistributionGroupsAddAppsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsAddAppsRequest req = new DistributionGroupsAddAppsRequest(                new DistributionGroupsAddAppsRequestBody() {{
                                apps = new org.openapis.openapi.models.operations.DistributionGroupsAddAppsRequestBodyApps[]{{
                                    add(new DistributionGroupsAddAppsRequestBodyApps("provident") {{
                                        name = "Danielle Bosco";
                                    }}),
                                }};
                            }};, "quos", "sint");            

            DistributionGroupsAddAppsResponse res = sdk.account.distributionGroupsAddApps(req, new DistributionGroupsAddAppsSecurity("accusantium") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## distributionGroupsAddUser

Adds the members to the specified distribution group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsAddUserRequest;
import org.openapis.openapi.models.operations.DistributionGroupsAddUserRequestBody;
import org.openapis.openapi.models.operations.DistributionGroupsAddUserResponse;
import org.openapis.openapi.models.operations.DistributionGroupsAddUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsAddUserRequest req = new DistributionGroupsAddUserRequest(                new DistributionGroupsAddUserRequestBody() {{
                                userEmails = new String[]{{
                                    add("reiciendis"),
                                    add("mollitia"),
                                    add("ad"),
                                }};
                            }};, "eum", "dolor", "necessitatibus");            

            DistributionGroupsAddUserResponse res = sdk.account.distributionGroupsAddUser(req, new DistributionGroupsAddUserSecurity("odit") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.distributionGroupsAddUser200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## distributionGroupsAddUsersForOrg

Accepts an array of user email addresses to get added to the specified group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsAddUsersForOrgRequest;
import org.openapis.openapi.models.operations.DistributionGroupsAddUsersForOrgRequestBody;
import org.openapis.openapi.models.operations.DistributionGroupsAddUsersForOrgResponse;
import org.openapis.openapi.models.operations.DistributionGroupsAddUsersForOrgSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsAddUsersForOrgRequest req = new DistributionGroupsAddUsersForOrgRequest(                new DistributionGroupsAddUsersForOrgRequestBody() {{
                                userEmails = new String[]{{
                                    add("quasi"),
                                    add("iure"),
                                }};
                            }};, "doloribus", "debitis");            

            DistributionGroupsAddUsersForOrgResponse res = sdk.account.distributionGroupsAddUsersForOrg(req, new DistributionGroupsAddUsersForOrgSecurity("eius") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.distributionGroupsAddUsersForOrg200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## distributionGroupsBulkDeleteApps

Delete apps from distribution group in an org

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsBulkDeleteAppsRequest;
import org.openapis.openapi.models.operations.DistributionGroupsBulkDeleteAppsRequestBody;
import org.openapis.openapi.models.operations.DistributionGroupsBulkDeleteAppsRequestBodyApps;
import org.openapis.openapi.models.operations.DistributionGroupsBulkDeleteAppsResponse;
import org.openapis.openapi.models.operations.DistributionGroupsBulkDeleteAppsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsBulkDeleteAppsRequest req = new DistributionGroupsBulkDeleteAppsRequest(                new DistributionGroupsBulkDeleteAppsRequestBody() {{
                                apps = new org.openapis.openapi.models.operations.DistributionGroupsBulkDeleteAppsRequestBodyApps[]{{
                                    add(new DistributionGroupsBulkDeleteAppsRequestBodyApps("ullam") {{
                                        name = "Mr. Andres King";
                                    }}),
                                    add(new DistributionGroupsBulkDeleteAppsRequestBodyApps("saepe") {{
                                        name = "Jessie Zulauf";
                                    }}),
                                    add(new DistributionGroupsBulkDeleteAppsRequestBodyApps("magni") {{
                                        name = "Edward Crooks";
                                    }}),
                                    add(new DistributionGroupsBulkDeleteAppsRequestBodyApps("ea") {{
                                        name = "Angelica Stanton";
                                    }}),
                                }};
                            }};, "excepturi", "odit");            

            DistributionGroupsBulkDeleteAppsResponse res = sdk.account.distributionGroupsBulkDeleteApps(req, new DistributionGroupsBulkDeleteAppsSecurity("ea") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## distributionGroupsBulkDeleteUsers

Delete testers from distribution group in an org

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsBulkDeleteUsersRequest;
import org.openapis.openapi.models.operations.DistributionGroupsBulkDeleteUsersRequestBody;
import org.openapis.openapi.models.operations.DistributionGroupsBulkDeleteUsersResponse;
import org.openapis.openapi.models.operations.DistributionGroupsBulkDeleteUsersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsBulkDeleteUsersRequest req = new DistributionGroupsBulkDeleteUsersRequest(                new DistributionGroupsBulkDeleteUsersRequestBody() {{
                                userEmails = new String[]{{
                                    add("ab"),
                                }};
                            }};, "maiores", "quidem");            

            DistributionGroupsBulkDeleteUsersResponse res = sdk.account.distributionGroupsBulkDeleteUsers(req, new DistributionGroupsBulkDeleteUsersSecurity("ipsam") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## distributionGroupsCreate

Creates a new distribution group and returns it to the caller

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsCreateRequest;
import org.openapis.openapi.models.operations.DistributionGroupsCreateRequestBody;
import org.openapis.openapi.models.operations.DistributionGroupsCreateResponse;
import org.openapis.openapi.models.operations.DistributionGroupsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsCreateRequest req = new DistributionGroupsCreateRequest(                new DistributionGroupsCreateRequestBody("voluptate") {{
                                displayName = "autem";
                            }};, "nam", "eaque");            

            DistributionGroupsCreateResponse res = sdk.account.distributionGroupsCreate(req, new DistributionGroupsCreateSecurity("pariatur") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.distributionGroupsCreate201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## distributionGroupsCreateForOrg

Creates a disribution goup which can be shared across apps under an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsCreateForOrgRequest;
import org.openapis.openapi.models.operations.DistributionGroupsCreateForOrgRequestBody;
import org.openapis.openapi.models.operations.DistributionGroupsCreateForOrgResponse;
import org.openapis.openapi.models.operations.DistributionGroupsCreateForOrgSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsCreateForOrgRequest req = new DistributionGroupsCreateForOrgRequest(                new DistributionGroupsCreateForOrgRequestBody("nemo") {{
                                displayName = "voluptatibus";
                            }};, "perferendis");            

            DistributionGroupsCreateForOrgResponse res = sdk.account.distributionGroupsCreateForOrg(req, new DistributionGroupsCreateForOrgSecurity("fugiat") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.distributionGroupsCreateForOrg201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## distributionGroupsDelete

Deletes a distribution group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsDeleteRequest;
import org.openapis.openapi.models.operations.DistributionGroupsDeleteResponse;
import org.openapis.openapi.models.operations.DistributionGroupsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsDeleteRequest req = new DistributionGroupsDeleteRequest("amet", "aut", "cumque");            

            DistributionGroupsDeleteResponse res = sdk.account.distributionGroupsDelete(req, new DistributionGroupsDeleteSecurity("corporis") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## distributionGroupsDeleteForOrg

Deletes a single distribution group from an org with a given distribution group name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsDeleteForOrgRequest;
import org.openapis.openapi.models.operations.DistributionGroupsDeleteForOrgResponse;
import org.openapis.openapi.models.operations.DistributionGroupsDeleteForOrgSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsDeleteForOrgRequest req = new DistributionGroupsDeleteForOrgRequest("hic", "libero");            

            DistributionGroupsDeleteForOrgResponse res = sdk.account.distributionGroupsDeleteForOrg(req, new DistributionGroupsDeleteForOrgSecurity("nobis") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## distributionGroupsDetailsForOrg

Returns a list of distribution groups with details for an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsDetailsForOrgRequest;
import org.openapis.openapi.models.operations.DistributionGroupsDetailsForOrgResponse;
import org.openapis.openapi.models.operations.DistributionGroupsDetailsForOrgSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsDetailsForOrgRequest req = new DistributionGroupsDetailsForOrgRequest("dolores") {{
                appsLimit = 3394.04;
            }};            

            DistributionGroupsDetailsForOrgResponse res = sdk.account.distributionGroupsDetailsForOrg(req, new DistributionGroupsDetailsForOrgSecurity("totam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.distributionGroupsDetailsForOrg200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## distributionGroupsGet

Returns a single distribution group for a given distribution group name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsGetRequest;
import org.openapis.openapi.models.operations.DistributionGroupsGetResponse;
import org.openapis.openapi.models.operations.DistributionGroupsGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsGetRequest req = new DistributionGroupsGetRequest("dignissimos", "eaque", "quis");            

            DistributionGroupsGetResponse res = sdk.account.distributionGroupsGet(req, new DistributionGroupsGetSecurity("nesciunt") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.distributionGroupsGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## distributionGroupsGetApps

Get apps from a distribution group in an org

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsGetAppsRequest;
import org.openapis.openapi.models.operations.DistributionGroupsGetAppsResponse;
import org.openapis.openapi.models.operations.DistributionGroupsGetAppsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsGetAppsRequest req = new DistributionGroupsGetAppsRequest("eos", "perferendis");            

            DistributionGroupsGetAppsResponse res = sdk.account.distributionGroupsGetApps(req, new DistributionGroupsGetAppsSecurity("dolores") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.distributionGroupsGetApps200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## distributionGroupsGetForOrg

Returns a single distribution group in org for a given distribution group name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsGetForOrgRequest;
import org.openapis.openapi.models.operations.DistributionGroupsGetForOrgResponse;
import org.openapis.openapi.models.operations.DistributionGroupsGetForOrgSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsGetForOrgRequest req = new DistributionGroupsGetForOrgRequest("minus", "quam");            

            DistributionGroupsGetForOrgResponse res = sdk.account.distributionGroupsGetForOrg(req, new DistributionGroupsGetForOrgSecurity("dolor") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.distributionGroupsGetForOrg200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## distributionGroupsList

Returns a list of distribution groups in the app specified

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsListRequest;
import org.openapis.openapi.models.operations.DistributionGroupsListResponse;
import org.openapis.openapi.models.operations.DistributionGroupsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsListRequest req = new DistributionGroupsListRequest("vero", "nostrum");            

            DistributionGroupsListResponse res = sdk.account.distributionGroupsList(req, new DistributionGroupsListSecurity("hic") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.distributionGroupsList200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## distributionGroupsListAllTestersForOrg

Returns a unique list of users including the whole organization members plus testers in any shared group of that org

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsListAllTestersForOrgRequest;
import org.openapis.openapi.models.operations.DistributionGroupsListAllTestersForOrgResponse;
import org.openapis.openapi.models.operations.DistributionGroupsListAllTestersForOrgSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsListAllTestersForOrgRequest req = new DistributionGroupsListAllTestersForOrgRequest("recusandae");            

            DistributionGroupsListAllTestersForOrgResponse res = sdk.account.distributionGroupsListAllTestersForOrg(req, new DistributionGroupsListAllTestersForOrgSecurity("omnis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.distributionGroupsListAllTestersForOrg200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## distributionGroupsListForOrg

Returns a list of distribution groups in the org specified

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsListForOrgRequest;
import org.openapis.openapi.models.operations.DistributionGroupsListForOrgResponse;
import org.openapis.openapi.models.operations.DistributionGroupsListForOrgSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsListForOrgRequest req = new DistributionGroupsListForOrgRequest("facilis");            

            DistributionGroupsListForOrgResponse res = sdk.account.distributionGroupsListForOrg(req, new DistributionGroupsListForOrgSecurity("perspiciatis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.distributionGroupsListForOrg201ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## distributionGroupsListUsers

Returns a list of member details in the distribution group specified

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsListUsersRequest;
import org.openapis.openapi.models.operations.DistributionGroupsListUsersResponse;
import org.openapis.openapi.models.operations.DistributionGroupsListUsersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsListUsersRequest req = new DistributionGroupsListUsersRequest("voluptatem", "porro", "consequuntur") {{
                excludePendingInvitations = false;
            }};            

            DistributionGroupsListUsersResponse res = sdk.account.distributionGroupsListUsers(req, new DistributionGroupsListUsersSecurity("blanditiis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.distributionGroupsListUsers200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## distributionGroupsListUsersForOrg

Returns a list of member in the distribution group specified

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsListUsersForOrgRequest;
import org.openapis.openapi.models.operations.DistributionGroupsListUsersForOrgResponse;
import org.openapis.openapi.models.operations.DistributionGroupsListUsersForOrgSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsListUsersForOrgRequest req = new DistributionGroupsListUsersForOrgRequest("error", "eaque");            

            DistributionGroupsListUsersForOrgResponse res = sdk.account.distributionGroupsListUsersForOrg(req, new DistributionGroupsListUsersForOrgSecurity("occaecati") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.distributionGroupsListUsersForOrg200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## distributionGroupsPatchForOrg

Update one given distribution group name in an org

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsPatchForOrgRequest;
import org.openapis.openapi.models.operations.DistributionGroupsPatchForOrgRequestBody;
import org.openapis.openapi.models.operations.DistributionGroupsPatchForOrgResponse;
import org.openapis.openapi.models.operations.DistributionGroupsPatchForOrgSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsPatchForOrgRequest req = new DistributionGroupsPatchForOrgRequest("rerum", "adipisci") {{
                requestBody = new DistributionGroupsPatchForOrgRequestBody() {{
                    isPublic = false;
                    name = "Merle Gleichner";
                }};;
            }};            

            DistributionGroupsPatchForOrgResponse res = sdk.account.distributionGroupsPatchForOrg(req, new DistributionGroupsPatchForOrgSecurity("deleniti") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.distributionGroupsPatchForOrg200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## distributionGroupsRemoveUser

Remove the users from the distribution group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsRemoveUserRequest;
import org.openapis.openapi.models.operations.DistributionGroupsRemoveUserRequestBody;
import org.openapis.openapi.models.operations.DistributionGroupsRemoveUserResponse;
import org.openapis.openapi.models.operations.DistributionGroupsRemoveUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsRemoveUserRequest req = new DistributionGroupsRemoveUserRequest(                new DistributionGroupsRemoveUserRequestBody() {{
                                userEmails = new String[]{{
                                    add("provident"),
                                    add("nobis"),
                                    add("libero"),
                                    add("delectus"),
                                }};
                            }};, "quaerat", "quos", "aliquid");            

            DistributionGroupsRemoveUserResponse res = sdk.account.distributionGroupsRemoveUser(req, new DistributionGroupsRemoveUserSecurity("dolorem") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.distributionGroupsRemoveUser200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## distributionGroupsResendInvite

Resend distribution group app invite notification to previously invited testers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsResendInviteRequest;
import org.openapis.openapi.models.operations.DistributionGroupsResendInviteRequestBody;
import org.openapis.openapi.models.operations.DistributionGroupsResendInviteResponse;
import org.openapis.openapi.models.operations.DistributionGroupsResendInviteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsResendInviteRequest req = new DistributionGroupsResendInviteRequest(                new DistributionGroupsResendInviteRequestBody() {{
                                userEmails = new String[]{{
                                    add("dolor"),
                                }};
                            }};, "qui", "ipsum", "hic");            

            DistributionGroupsResendInviteResponse res = sdk.account.distributionGroupsResendInvite(req, new DistributionGroupsResendInviteSecurity("excepturi") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## distributionGroupsResendSharedInvite

Resend shared distribution group invite notification to previously invited testers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsResendSharedInviteRequest;
import org.openapis.openapi.models.operations.DistributionGroupsResendSharedInviteRequestBody;
import org.openapis.openapi.models.operations.DistributionGroupsResendSharedInviteResponse;
import org.openapis.openapi.models.operations.DistributionGroupsResendSharedInviteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsResendSharedInviteRequest req = new DistributionGroupsResendSharedInviteRequest(                new DistributionGroupsResendSharedInviteRequestBody() {{
                                userEmails = new String[]{{
                                    add("voluptate"),
                                    add("dignissimos"),
                                    add("reiciendis"),
                                }};
                            }};, "amet", "dolorum");            

            DistributionGroupsResendSharedInviteResponse res = sdk.account.distributionGroupsResendSharedInvite(req, new DistributionGroupsResendSharedInviteSecurity("numquam") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## distributionGroupsUpdate

Updates the attributes of distribution group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DistributionGroupsUpdateRequest;
import org.openapis.openapi.models.operations.DistributionGroupsUpdateRequestBody;
import org.openapis.openapi.models.operations.DistributionGroupsUpdateResponse;
import org.openapis.openapi.models.operations.DistributionGroupsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DistributionGroupsUpdateRequest req = new DistributionGroupsUpdateRequest(                new DistributionGroupsUpdateRequestBody() {{
                                isPublic = false;
                                name = "Melissa Bednar";
                            }};, "quaerat", "accusamus", "quidem");            

            DistributionGroupsUpdateResponse res = sdk.account.distributionGroupsUpdate(req, new DistributionGroupsUpdateSecurity("voluptatibus") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.distributionGroupsUpdate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## invitationsSent

Returns all invitations sent by the caller

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.InvitationsSentResponse;
import org.openapis.openapi.models.operations.InvitationsSentSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            InvitationsSentResponse res = sdk.account.invitationsSent(new InvitationsSentSecurity("voluptas") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.invitationsSent200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgInvitations

Removes a user's invitation to an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgInvitationsRequest;
import org.openapis.openapi.models.operations.OrgInvitationsResponse;
import org.openapis.openapi.models.operations.OrgInvitationsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgInvitationsRequest req = new OrgInvitationsRequest("natus", "eos") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("sit", "fugiat");
                    put("ab", "soluta");
                    put("dolorum", "iusto");
                }};
            }};            

            OrgInvitationsResponse res = sdk.account.orgInvitations(req, new OrgInvitationsSecurity("voluptate") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## orgInvitationsAccept

Accepts a pending organization invitation for the specified user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgInvitationsAcceptRequest;
import org.openapis.openapi.models.operations.OrgInvitationsAcceptResponse;
import org.openapis.openapi.models.operations.OrgInvitationsAcceptSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgInvitationsAcceptRequest req = new OrgInvitationsAcceptRequest("dolorum") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("omnis", "necessitatibus");
                    put("distinctio", "asperiores");
                    put("nihil", "ipsum");
                }};
            }};            

            OrgInvitationsAcceptResponse res = sdk.account.orgInvitationsAccept(req, new OrgInvitationsAcceptSecurity("voluptate") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## orgInvitationsCreate

Invites a new or existing user to an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgInvitationsCreateRequest;
import org.openapis.openapi.models.operations.OrgInvitationsCreateRequestBody;
import org.openapis.openapi.models.operations.OrgInvitationsCreateRequestBodyRoleEnum;
import org.openapis.openapi.models.operations.OrgInvitationsCreateResponse;
import org.openapis.openapi.models.operations.OrgInvitationsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgInvitationsCreateRequest req = new OrgInvitationsCreateRequest(                new OrgInvitationsCreateRequestBody("id") {{
                                role = OrgInvitationsCreateRequestBodyRoleEnum.MEMBER;
                            }};, "eius");            

            OrgInvitationsCreateResponse res = sdk.account.orgInvitationsCreate(req, new OrgInvitationsCreateSecurity("aspernatur") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## orgInvitationsDelete

Removes a user's invitation to an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgInvitationsDeleteRequest;
import org.openapis.openapi.models.operations.OrgInvitationsDeleteRequestBody;
import org.openapis.openapi.models.operations.OrgInvitationsDeleteResponse;
import org.openapis.openapi.models.operations.OrgInvitationsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgInvitationsDeleteRequest req = new OrgInvitationsDeleteRequest(                new OrgInvitationsDeleteRequestBody("perferendis");, "amet");            

            OrgInvitationsDeleteResponse res = sdk.account.orgInvitationsDelete(req, new OrgInvitationsDeleteSecurity("optio") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## orgInvitationsListPending

Gets the pending invitations for the organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgInvitationsListPendingRequest;
import org.openapis.openapi.models.operations.OrgInvitationsListPendingResponse;
import org.openapis.openapi.models.operations.OrgInvitationsListPendingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgInvitationsListPendingRequest req = new OrgInvitationsListPendingRequest("accusamus");            

            OrgInvitationsListPendingResponse res = sdk.account.orgInvitationsListPending(req, new OrgInvitationsListPendingSecurity("ad") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.orgInvitationsListPending200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## orgInvitationsReject

Rejects a pending organization invitation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgInvitationsRejectRequest;
import org.openapis.openapi.models.operations.OrgInvitationsRejectResponse;
import org.openapis.openapi.models.operations.OrgInvitationsRejectSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgInvitationsRejectRequest req = new OrgInvitationsRejectRequest("saepe") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("deserunt", "provident");
                    put("minima", "repellendus");
                }};
            }};            

            OrgInvitationsRejectResponse res = sdk.account.orgInvitationsReject(req, new OrgInvitationsRejectSecurity("totam") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## orgInvitationsSendNewInvitation

Cancels an existing organization invitation for the user and sends a new one

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgInvitationsSendNewInvitationRequest;
import org.openapis.openapi.models.operations.OrgInvitationsSendNewInvitationRequestBody;
import org.openapis.openapi.models.operations.OrgInvitationsSendNewInvitationRequestBodyRoleEnum;
import org.openapis.openapi.models.operations.OrgInvitationsSendNewInvitationResponse;
import org.openapis.openapi.models.operations.OrgInvitationsSendNewInvitationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgInvitationsSendNewInvitationRequest req = new OrgInvitationsSendNewInvitationRequest("similique", "alias") {{
                requestBody = new OrgInvitationsSendNewInvitationRequestBody() {{
                    role = OrgInvitationsSendNewInvitationRequestBodyRoleEnum.MEMBER;
                }};;
            }};            

            OrgInvitationsSendNewInvitationResponse res = sdk.account.orgInvitationsSendNewInvitation(req, new OrgInvitationsSendNewInvitationSecurity("quaerat") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## orgInvitationsUpdate

Allows the role of an invited user to be changed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrgInvitationsUpdateRequest;
import org.openapis.openapi.models.operations.OrgInvitationsUpdateRequestBody;
import org.openapis.openapi.models.operations.OrgInvitationsUpdateRequestBodyRoleEnum;
import org.openapis.openapi.models.operations.OrgInvitationsUpdateResponse;
import org.openapis.openapi.models.operations.OrgInvitationsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrgInvitationsUpdateRequest req = new OrgInvitationsUpdateRequest(                new OrgInvitationsUpdateRequestBody() {{
                                role = OrgInvitationsUpdateRequestBodyRoleEnum.ADMIN;
                            }};, "vel", "quod");            

            OrgInvitationsUpdateResponse res = sdk.account.orgInvitationsUpdate(req, new OrgInvitationsUpdateSecurity("officiis") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## organizationDeleteAvatar

Deletes the uploaded organization avatar

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrganizationDeleteAvatarRequest;
import org.openapis.openapi.models.operations.OrganizationDeleteAvatarResponse;
import org.openapis.openapi.models.operations.OrganizationDeleteAvatarSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrganizationDeleteAvatarRequest req = new OrganizationDeleteAvatarRequest("qui");            

            OrganizationDeleteAvatarResponse res = sdk.account.organizationDeleteAvatar(req, new OrganizationDeleteAvatarSecurity("dolorum") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.organizationDeleteAvatar200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## organizationUpdateAvatar

Sets the organization avatar

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrganizationUpdateAvatarRequest;
import org.openapis.openapi.models.operations.OrganizationUpdateAvatarRequestBody;
import org.openapis.openapi.models.operations.OrganizationUpdateAvatarRequestBodyAvatar;
import org.openapis.openapi.models.operations.OrganizationUpdateAvatarResponse;
import org.openapis.openapi.models.operations.OrganizationUpdateAvatarSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrganizationUpdateAvatarRequest req = new OrganizationUpdateAvatarRequest("a") {{
                requestBody = new OrganizationUpdateAvatarRequestBody() {{
                    avatar = new OrganizationUpdateAvatarRequestBodyAvatar("esse", "harum".getBytes());;
                }};;
            }};            

            OrganizationUpdateAvatarResponse res = sdk.account.organizationUpdateAvatar(req, new OrganizationUpdateAvatarSecurity("iusto") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.organizationUpdateAvatar200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## organizationsCreateOrUpdate

Creates a new organization and returns it to the caller

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrganizationsCreateOrUpdateRequestBody;
import org.openapis.openapi.models.operations.OrganizationsCreateOrUpdateResponse;
import org.openapis.openapi.models.operations.OrganizationsCreateOrUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrganizationsCreateOrUpdateRequestBody req = new OrganizationsCreateOrUpdateRequestBody() {{
                displayName = "ipsum";
                name = "Saul Fay";
            }};            

            OrganizationsCreateOrUpdateResponse res = sdk.account.organizationsCreateOrUpdate(req, new OrganizationsCreateOrUpdateSecurity("numquam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.organizationsCreateOrUpdate201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## organizationsDelete

Deletes a single organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrganizationsDeleteRequest;
import org.openapis.openapi.models.operations.OrganizationsDeleteResponse;
import org.openapis.openapi.models.operations.OrganizationsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrganizationsDeleteRequest req = new OrganizationsDeleteRequest("enim");            

            OrganizationsDeleteResponse res = sdk.account.organizationsDelete(req, new OrganizationsDeleteSecurity("dolorem") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## organizationsGet

Returns the details of a single organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrganizationsGetRequest;
import org.openapis.openapi.models.operations.OrganizationsGetResponse;
import org.openapis.openapi.models.operations.OrganizationsGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrganizationsGetRequest req = new OrganizationsGetRequest("sapiente");            

            OrganizationsGetResponse res = sdk.account.organizationsGet(req, new OrganizationsGetSecurity("totam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.organizationsGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## organizationsList

Returns a list of organizations the requesting user has access to

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrganizationsListResponse;
import org.openapis.openapi.models.operations.OrganizationsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrganizationsListResponse res = sdk.account.organizationsList(new OrganizationsListSecurity("nihil") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.organizationsList200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## organizationsListAdministered

Returns a list organizations in which the requesting user is an admin

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrganizationsListAdministeredResponse;
import org.openapis.openapi.models.operations.OrganizationsListAdministeredSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrganizationsListAdministeredResponse res = sdk.account.organizationsListAdministered(new OrganizationsListAdministeredSecurity("sit") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.organizationsListAdministered200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## organizationsUpdate

Returns a list of organizations the requesting user has access to

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OrganizationsUpdateRequest;
import org.openapis.openapi.models.operations.OrganizationsUpdateRequestBody;
import org.openapis.openapi.models.operations.OrganizationsUpdateResponse;
import org.openapis.openapi.models.operations.OrganizationsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OrganizationsUpdateRequest req = new OrganizationsUpdateRequest(                new OrganizationsUpdateRequestBody() {{
                                displayName = "expedita";
                                name = "Jane Kassulke";
                            }};, "deserunt");            

            OrganizationsUpdateResponse res = sdk.account.organizationsUpdate(req, new OrganizationsUpdateSecurity("quam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.organizationsUpdate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sharedconnectionConnections

Gets all service connections of the service type for GDPR export.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SharedconnectionConnectionsResponse;
import org.openapis.openapi.models.operations.SharedconnectionConnectionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SharedconnectionConnectionsResponse res = sdk.account.sharedconnectionConnections(new SharedconnectionConnectionsSecurity("ipsum") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.sharedconnectionConnections200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsAddApp

Adds an app to a team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsAddAppRequest;
import org.openapis.openapi.models.operations.TeamsAddAppRequestBody;
import org.openapis.openapi.models.operations.TeamsAddAppResponse;
import org.openapis.openapi.models.operations.TeamsAddAppSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsAddAppRequest req = new TeamsAddAppRequest(                new TeamsAddAppRequestBody("incidunt");, "qui", "cupiditate");            

            TeamsAddAppResponse res = sdk.account.teamsAddApp(req, new TeamsAddAppSecurity("maxime") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.teamsAddApp201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsAddUser

Adds a new user to a team that is owned by an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsAddUserRequest;
import org.openapis.openapi.models.operations.TeamsAddUserRequestBody;
import org.openapis.openapi.models.operations.TeamsAddUserResponse;
import org.openapis.openapi.models.operations.TeamsAddUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsAddUserRequest req = new TeamsAddUserRequest(                new TeamsAddUserRequestBody("pariatur");, "soluta", "dicta");            

            TeamsAddUserResponse res = sdk.account.teamsAddUser(req, new TeamsAddUserSecurity("laborum") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.teamsAddUser201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsCreateTeam

Creates a team and returns it

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsCreateTeamRequest;
import org.openapis.openapi.models.operations.TeamsCreateTeamRequestBody;
import org.openapis.openapi.models.operations.TeamsCreateTeamResponse;
import org.openapis.openapi.models.operations.TeamsCreateTeamSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsCreateTeamRequest req = new TeamsCreateTeamRequest(                new TeamsCreateTeamRequestBody("totam") {{
                                description = "incidunt";
                                name = "Bonnie Raynor";
                            }};, "quam");            

            TeamsCreateTeamResponse res = sdk.account.teamsCreateTeam(req, new TeamsCreateTeamSecurity("molestias") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.teamsCreateTeam201ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsDelete

Deletes a single team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsDeleteRequest;
import org.openapis.openapi.models.operations.TeamsDeleteResponse;
import org.openapis.openapi.models.operations.TeamsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsDeleteRequest req = new TeamsDeleteRequest("temporibus", "qui");            

            TeamsDeleteResponse res = sdk.account.teamsDelete(req, new TeamsDeleteSecurity("neque") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## teamsGetTeam

Returns the details of a single team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsGetTeamRequest;
import org.openapis.openapi.models.operations.TeamsGetTeamResponse;
import org.openapis.openapi.models.operations.TeamsGetTeamSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsGetTeamRequest req = new TeamsGetTeamRequest("fugit", "magni");            

            TeamsGetTeamResponse res = sdk.account.teamsGetTeam(req, new TeamsGetTeamSecurity("odio") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.teamsGetTeam200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsGetUsers

Returns the users of a team which is owned by an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsGetUsersRequest;
import org.openapis.openapi.models.operations.TeamsGetUsersResponse;
import org.openapis.openapi.models.operations.TeamsGetUsersSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsGetUsersRequest req = new TeamsGetUsersRequest("sunt", "ullam");            

            TeamsGetUsersResponse res = sdk.account.teamsGetUsers(req, new TeamsGetUsersSecurity("nam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.teamsGetUsers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsListAll

Returns the list of all teams in this org

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListAllRequest;
import org.openapis.openapi.models.operations.TeamsListAllResponse;
import org.openapis.openapi.models.operations.TeamsListAllSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListAllRequest req = new TeamsListAllRequest("hic");            

            TeamsListAllResponse res = sdk.account.teamsListAll(req, new TeamsListAllSecurity("voluptatem") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.teamsListAll200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsListApps

Returns the apps a team has access to

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsListAppsRequest;
import org.openapis.openapi.models.operations.TeamsListAppsResponse;
import org.openapis.openapi.models.operations.TeamsListAppsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsListAppsRequest req = new TeamsListAppsRequest("cumque", "soluta");            

            TeamsListAppsResponse res = sdk.account.teamsListApps(req, new TeamsListAppsSecurity("nobis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.teamsListApps200ApplicationJSONAnies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsRemoveApp

Removes an app from a team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsRemoveAppRequest;
import org.openapis.openapi.models.operations.TeamsRemoveAppResponse;
import org.openapis.openapi.models.operations.TeamsRemoveAppSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsRemoveAppRequest req = new TeamsRemoveAppRequest("et", "saepe", "ipsum");            

            TeamsRemoveAppResponse res = sdk.account.teamsRemoveApp(req, new TeamsRemoveAppSecurity("veritatis") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## teamsRemoveUser

Removes a user from a team that is owned by an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsRemoveUserRequest;
import org.openapis.openapi.models.operations.TeamsRemoveUserResponse;
import org.openapis.openapi.models.operations.TeamsRemoveUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsRemoveUserRequest req = new TeamsRemoveUserRequest("nobis", "quos", "tempore");            

            TeamsRemoveUserResponse res = sdk.account.teamsRemoveUser(req, new TeamsRemoveUserSecurity("cupiditate") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## teamsUpdate

Updates a single team

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsUpdateRequest;
import org.openapis.openapi.models.operations.TeamsUpdateRequestBody;
import org.openapis.openapi.models.operations.TeamsUpdateResponse;
import org.openapis.openapi.models.operations.TeamsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsUpdateRequest req = new TeamsUpdateRequest(                new TeamsUpdateRequestBody("aperiam");, "delectus", "dolorem");            

            TeamsUpdateResponse res = sdk.account.teamsUpdate(req, new TeamsUpdateSecurity("dolore") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.teamsUpdate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## teamsUpdatePermissions

Updates the permissions the team has to the app

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TeamsUpdatePermissionsRequest;
import org.openapis.openapi.models.operations.TeamsUpdatePermissionsRequestBody;
import org.openapis.openapi.models.operations.TeamsUpdatePermissionsRequestBodyPermissionsEnum;
import org.openapis.openapi.models.operations.TeamsUpdatePermissionsResponse;
import org.openapis.openapi.models.operations.TeamsUpdatePermissionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TeamsUpdatePermissionsRequest req = new TeamsUpdatePermissionsRequest(                new TeamsUpdatePermissionsRequestBody(                new org.openapis.openapi.models.operations.TeamsUpdatePermissionsRequestBodyPermissionsEnum[]{{
                                                add(TeamsUpdatePermissionsRequestBodyPermissionsEnum.MANAGER),
                                                add(TeamsUpdatePermissionsRequestBodyPermissionsEnum.VIEWER),
                                            }});, "architecto", "quae", "aut");            

            TeamsUpdatePermissionsResponse res = sdk.account.teamsUpdatePermissions(req, new TeamsUpdatePermissionsSecurity("quas") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.teamsUpdatePermissions200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userApiTokensDelete

Delete the user api_token object with the specific id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserApiTokensDeleteRequest;
import org.openapis.openapi.models.operations.UserApiTokensDeleteResponse;
import org.openapis.openapi.models.operations.UserApiTokensDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserApiTokensDeleteRequest req = new UserApiTokensDeleteRequest("itaque");            

            UserApiTokensDeleteResponse res = sdk.account.userApiTokensDelete(req, new UserApiTokensDeleteSecurity("consequatur", "est") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
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

## userApiTokensList

Returns api tokens for the authenticated user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserApiTokensListResponse;
import org.openapis.openapi.models.operations.UserApiTokensListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserApiTokensListResponse res = sdk.account.userApiTokensList(new UserApiTokensListSecurity("repellendus", "porro") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.userApiTokensList200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## userApiTokensNew

Creates a new User API token

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UserApiTokensNewRequestBody;
import org.openapis.openapi.models.operations.UserApiTokensNewRequestBodyScopeEnum;
import org.openapis.openapi.models.operations.UserApiTokensNewResponse;
import org.openapis.openapi.models.operations.UserApiTokensNewSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UserApiTokensNewRequestBody req = new UserApiTokensNewRequestBody() {{
                description = "doloribus";
                scope = new org.openapis.openapi.models.operations.UserApiTokensNewRequestBodyScopeEnum[]{{
                    add(UserApiTokensNewRequestBodyScopeEnum.VIEWER),
                    add(UserApiTokensNewRequestBodyScopeEnum.VIEWER),
                }};
            }};            

            UserApiTokensNewResponse res = sdk.account.userApiTokensNew(req, new UserApiTokensNewSecurity("qui", "quae") {{
                password = "YOUR_PASSWORD_HERE";
                username = "YOUR_USERNAME_HERE";
            }});

            if (res.userApiTokensNew201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersGet

Returns the user profile data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersGetResponse;
import org.openapis.openapi.models.operations.UsersGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersGetResponse res = sdk.account.usersGet(new UsersGetSecurity("laudantium") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.usersGet200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersGetForOrg

Get a user information from an organization by name - if there is explicit permission return it, if not if not return highest implicit permission

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersGetForOrgRequest;
import org.openapis.openapi.models.operations.UsersGetForOrgResponse;
import org.openapis.openapi.models.operations.UsersGetForOrgSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersGetForOrgRequest req = new UsersGetForOrgRequest("odio", "occaecati");            

            UsersGetForOrgResponse res = sdk.account.usersGetForOrg(req, new UsersGetForOrgSecurity("voluptatibus") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.usersGetForOrg200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersList

Returns the users associated with the app specified with the given app name which belongs to the given owner.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersListRequest;
import org.openapis.openapi.models.operations.UsersListResponse;
import org.openapis.openapi.models.operations.UsersListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersListRequest req = new UsersListRequest("quisquam", "vero");            

            UsersListResponse res = sdk.account.usersList(req, new UsersListSecurity("omnis") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.usersList200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersListForOrg

Returns a list of users that belong to an organization

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersListForOrgRequest;
import org.openapis.openapi.models.operations.UsersListForOrgResponse;
import org.openapis.openapi.models.operations.UsersListForOrgSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersListForOrgRequest req = new UsersListForOrgRequest("quis");            

            UsersListForOrgResponse res = sdk.account.usersListForOrg(req, new UsersListForOrgSecurity("ipsum") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.usersListForOrg200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersRemoveFromOrg

Removes a user from an organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersRemoveFromOrgRequest;
import org.openapis.openapi.models.operations.UsersRemoveFromOrgResponse;
import org.openapis.openapi.models.operations.UsersRemoveFromOrgSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersRemoveFromOrgRequest req = new UsersRemoveFromOrgRequest("delectus", "voluptate");            

            UsersRemoveFromOrgResponse res = sdk.account.usersRemoveFromOrg(req, new UsersRemoveFromOrgSecurity("consectetur") {{
                apiToken = "YOUR_API_KEY_HERE";
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

## usersUpdate

Updates the user profile and returns the updated user data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersUpdateRequestBody;
import org.openapis.openapi.models.operations.UsersUpdateResponse;
import org.openapis.openapi.models.operations.UsersUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersUpdateRequestBody req = new UsersUpdateRequestBody() {{
                displayName = "vero";
            }};            

            UsersUpdateResponse res = sdk.account.usersUpdate(req, new UsersUpdateSecurity("tenetur") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.usersUpdate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## usersUpdateOrgRole

Updates the given organization user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UsersUpdateOrgRoleRequest;
import org.openapis.openapi.models.operations.UsersUpdateOrgRoleRequestBody;
import org.openapis.openapi.models.operations.UsersUpdateOrgRoleRequestBodyRoleEnum;
import org.openapis.openapi.models.operations.UsersUpdateOrgRoleResponse;
import org.openapis.openapi.models.operations.UsersUpdateOrgRoleSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UsersUpdateOrgRoleRequest req = new UsersUpdateOrgRoleRequest(                new UsersUpdateOrgRoleRequestBody() {{
                                role = UsersUpdateOrgRoleRequestBodyRoleEnum.COLLABORATOR;
                            }};, "hic", "distinctio");            

            UsersUpdateOrgRoleResponse res = sdk.account.usersUpdateOrgRole(req, new UsersUpdateOrgRoleSecurity("quod") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.usersUpdateOrgRole200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
