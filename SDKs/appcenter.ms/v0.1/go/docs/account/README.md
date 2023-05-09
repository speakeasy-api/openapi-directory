# Account

### Available Operations

* [UsersGetUserMetadata](#usersgetusermetadata)
* [AppAPITokensDelete](#appapitokensdelete) - Delete the App Api Token object with the specific ID
* [AppAPITokensList](#appapitokenslist) - Returns App API tokens for the app
* [AppAPITokensNew](#appapitokensnew) - Creates a new App API token
* [AppInvitationsAccept](#appinvitationsaccept) - Accepts a pending invitation for the specified user
* [AppInvitationsCreate](#appinvitationscreate) - Invites a new or existing user to an app
* [~~AppInvitationsCreateByEmail~~](#appinvitationscreatebyemail) - Invites a new or existing user to an app :warning: **Deprecated**
* [AppInvitationsDelete](#appinvitationsdelete) - Removes a user's invitation to an app
* [AppInvitationsList](#appinvitationslist) - Gets the pending invitations for the app
* [AppInvitationsReject](#appinvitationsreject) - Rejects a pending invitation for the specified user
* [AppInvitationsUpdatePermissions](#appinvitationsupdatepermissions) - Update pending invitation permission
* [AppsCreate](#appscreate) - Creates a new app and returns it to the caller
* [AppsCreateForOrg](#appscreatefororg) - Creates a new app for the organization and returns it to the caller
* [AppsDelete](#appsdelete) - Delete an app
* [AppsDeleteAvatar](#appsdeleteavatar) - Deletes the uploaded app avatar
* [AppsGet](#appsget) - Return a specific app with the given app name which belongs to the given owner.
* [AppsGetForOrgUser](#appsgetfororguser) - Get a user apps information from an organization by name
* [AppsGetTeams](#appsgetteams) - Returns the details of all teams that have access to the app.
* [AppsList](#appslist) - Returns a list of apps
* [AppsListForOrg](#appslistfororg) - Returns a list of apps for the organization
* [AppsListTesters](#appslisttesters) - Returns the testers associated with the app specified with the given app name which belongs to the given owner.
* [AppsRemoveUser](#appsremoveuser) - Removes the user from the app
* [AppsTransferOwnershipJSON](#appstransferownershipjson) - Transfers ownership of an app to a different user or organization
* [AppsTransferOwnershipRaw](#appstransferownershipraw) - Transfers ownership of an app to a different user or organization
* [AppsTransferToOrg](#appstransfertoorg) - Transfers ownership of an app to a new organization
* [AppsUpdate](#appsupdate) - Partially updates a single app
* [AppsUpdateAvatar](#appsupdateavatar) - Sets the app avatar
* [AppsUpdateUserPermissions](#appsupdateuserpermissions) - Update user permission for the app
* [AzureSubscriptionDeleteForApp](#azuresubscriptiondeleteforapp) - Delete the azure subscriptions for the app
* [AzureSubscriptionLinkForApp](#azuresubscriptionlinkforapp) - Link azure subscription to an app
* [AzureSubscriptionListForApp](#azuresubscriptionlistforapp) - Returns a list of azure subscriptions for the app
* [AzureSubscriptionListForOrg](#azuresubscriptionlistfororg) - Returns a list of azure subscriptions for the organization
* [AzureSubscriptionListForUser](#azuresubscriptionlistforuser) - Returns a list of azure subscriptions for the user
* [DistributionGroupInvitationsAcceptAll](#distributiongroupinvitationsacceptall) - Accepts all pending invitations to distribution groups for the specified user
* [DistributionGroupsAddApps](#distributiongroupsaddapps) - Add apps to distribution group in an org
* [DistributionGroupsAddUser](#distributiongroupsadduser) - Adds the members to the specified distribution group
* [DistributionGroupsAddUsersForOrg](#distributiongroupsaddusersfororg) - Accepts an array of user email addresses to get added to the specified group
* [DistributionGroupsBulkDeleteApps](#distributiongroupsbulkdeleteapps) - Delete apps from distribution group in an org
* [DistributionGroupsBulkDeleteUsers](#distributiongroupsbulkdeleteusers) - Delete testers from distribution group in an org
* [DistributionGroupsCreate](#distributiongroupscreate) - Creates a new distribution group and returns it to the caller
* [DistributionGroupsCreateForOrg](#distributiongroupscreatefororg) - Creates a disribution goup which can be shared across apps under an organization
* [DistributionGroupsDelete](#distributiongroupsdelete) - Deletes a distribution group
* [DistributionGroupsDeleteForOrg](#distributiongroupsdeletefororg) - Deletes a single distribution group from an org with a given distribution group name
* [DistributionGroupsDetailsForOrg](#distributiongroupsdetailsfororg) - Returns a list of distribution groups with details for an organization
* [DistributionGroupsGet](#distributiongroupsget) - Returns a single distribution group for a given distribution group name
* [DistributionGroupsGetApps](#distributiongroupsgetapps) - Get apps from a distribution group in an org
* [DistributionGroupsGetForOrg](#distributiongroupsgetfororg) - Returns a single distribution group in org for a given distribution group name
* [DistributionGroupsList](#distributiongroupslist) - Returns a list of distribution groups in the app specified
* [DistributionGroupsListAllTestersForOrg](#distributiongroupslistalltestersfororg) - Returns a unique list of users including the whole organization members plus testers in any shared group of that org
* [DistributionGroupsListForOrg](#distributiongroupslistfororg) - Returns a list of distribution groups in the org specified
* [DistributionGroupsListUsers](#distributiongroupslistusers) - Returns a list of member details in the distribution group specified
* [DistributionGroupsListUsersForOrg](#distributiongroupslistusersfororg) - Returns a list of member in the distribution group specified
* [DistributionGroupsPatchForOrg](#distributiongroupspatchfororg) - Update one given distribution group name in an org
* [DistributionGroupsRemoveUser](#distributiongroupsremoveuser) - Remove the users from the distribution group
* [DistributionGroupsResendInvite](#distributiongroupsresendinvite) - Resend distribution group app invite notification to previously invited testers
* [DistributionGroupsResendSharedInvite](#distributiongroupsresendsharedinvite) - Resend shared distribution group invite notification to previously invited testers
* [DistributionGroupsUpdate](#distributiongroupsupdate) - Updates the attributes of distribution group
* [InvitationsSent](#invitationssent) - Returns all invitations sent by the caller
* [OrgInvitations](#orginvitations) - Removes a user's invitation to an organization
* [OrgInvitationsAccept](#orginvitationsaccept) - Accepts a pending organization invitation for the specified user
* [OrgInvitationsCreate](#orginvitationscreate) - Invites a new or existing user to an organization
* [OrgInvitationsDelete](#orginvitationsdelete) - Removes a user's invitation to an organization
* [OrgInvitationsListPending](#orginvitationslistpending) - Gets the pending invitations for the organization
* [OrgInvitationsReject](#orginvitationsreject) - Rejects a pending organization invitation
* [OrgInvitationsSendNewInvitation](#orginvitationssendnewinvitation) - Cancels an existing organization invitation for the user and sends a new one
* [OrgInvitationsUpdate](#orginvitationsupdate) - Allows the role of an invited user to be changed
* [OrganizationDeleteAvatar](#organizationdeleteavatar) - Deletes the uploaded organization avatar
* [OrganizationUpdateAvatar](#organizationupdateavatar) - Sets the organization avatar
* [OrganizationsCreateOrUpdate](#organizationscreateorupdate) - Creates a new organization and returns it to the caller
* [OrganizationsDelete](#organizationsdelete) - Deletes a single organization
* [OrganizationsGet](#organizationsget) - Returns the details of a single organization
* [OrganizationsList](#organizationslist) - Returns a list of organizations the requesting user has access to
* [OrganizationsListAdministered](#organizationslistadministered) - Returns a list organizations in which the requesting user is an admin
* [OrganizationsUpdate](#organizationsupdate) - Returns a list of organizations the requesting user has access to
* [SharedconnectionConnections](#sharedconnectionconnections) - Gets all service connections of the service type for GDPR export.
* [TeamsAddApp](#teamsaddapp) - Adds an app to a team
* [TeamsAddUser](#teamsadduser) - Adds a new user to a team that is owned by an organization
* [TeamsCreateTeam](#teamscreateteam) - Creates a team and returns it
* [TeamsDelete](#teamsdelete) - Deletes a single team
* [TeamsGetTeam](#teamsgetteam) - Returns the details of a single team
* [TeamsGetUsers](#teamsgetusers) - Returns the users of a team which is owned by an organization
* [TeamsListAll](#teamslistall) - Returns the list of all teams in this org
* [TeamsListApps](#teamslistapps) - Returns the apps a team has access to
* [TeamsRemoveApp](#teamsremoveapp) - Removes an app from a team
* [TeamsRemoveUser](#teamsremoveuser) - Removes a user from a team that is owned by an organization
* [TeamsUpdate](#teamsupdate) - Updates a single team
* [TeamsUpdatePermissions](#teamsupdatepermissions) - Updates the permissions the team has to the app
* [UserAPITokensDelete](#userapitokensdelete) - Delete the user api_token object with the specific id
* [UserAPITokensList](#userapitokenslist) - Returns api tokens for the authenticated user
* [UserAPITokensNew](#userapitokensnew) - Creates a new User API token
* [UsersGet](#usersget) - Returns the user profile data
* [UsersGetForOrg](#usersgetfororg) - Get a user information from an organization by name - if there is explicit permission return it, if not if not return highest implicit permission
* [UsersList](#userslist) - Returns the users associated with the app specified with the given app name which belongs to the given owner.
* [UsersListForOrg](#userslistfororg) - Returns a list of users that belong to an organization
* [UsersRemoveFromOrg](#usersremovefromorg) - Removes a user from an organization.
* [UsersUpdate](#usersupdate) - Updates the user profile and returns the updated user data
* [UsersUpdateOrgRole](#usersupdateorgrole) - Updates the given organization user

## UsersGetUserMetadata

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UsersGetUserMetadata(ctx, operations.UsersGetUserMetadataSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UsersGetUserMetadata200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppAPITokensDelete

Delete the App Api Token object with the specific ID

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppAPITokensDelete(ctx, operations.AppAPITokensDeleteRequest{
        APITokenID: "corrupti",
        AppName: "provident",
        OwnerName: "distinctio",
    }, operations.AppAPITokensDeleteSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppAPITokensList

Returns App API tokens for the app

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppAPITokensList(ctx, operations.AppAPITokensListRequest{
        AppName: "quibusdam",
        OwnerName: "unde",
    }, operations.AppAPITokensListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppAPITokensList200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## AppAPITokensNew

Creates a new App API token

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppAPITokensNew(ctx, operations.AppAPITokensNewRequest{
        RequestBody: &operations.AppAPITokensNewRequestBody{
            Description: sdk.String("nulla"),
            Scope: []AppAPITokensNewRequestBodyScopeEnum{
                operations.AppAPITokensNewRequestBodyScopeEnumViewer,
                operations.AppAPITokensNewRequestBodyScopeEnumAll,
                operations.AppAPITokensNewRequestBodyScopeEnumViewer,
            },
        },
        AppName: "deserunt",
        OwnerName: "suscipit",
    }, operations.AppAPITokensNewSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppAPITokensNew201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppInvitationsAccept

Accepts a pending invitation for the specified user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppInvitationsAccept(ctx, operations.AppInvitationsAcceptRequest{
        RequestBody: map[string]interface{}{
            "magnam": "debitis",
            "ipsa": "delectus",
        },
        InvitationToken: "tempora",
    }, operations.AppInvitationsAcceptSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppInvitationsCreate

Invites a new or existing user to an app

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppInvitationsCreate(ctx, operations.AppInvitationsCreateRequest{
        RequestBody: &operations.AppInvitationsCreateRequestBody{
            Role: operations.AppInvitationsCreateRequestBodyRoleEnumCollaborator.ToPointer(),
            UserEmail: "molestiae",
        },
        AppName: "minus",
        OwnerName: "placeat",
    }, operations.AppInvitationsCreateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## ~~AppInvitationsCreateByEmail~~

Invites a new or existing user to an app

> :warning: **DEPRECATED**: this method will be removed in a future release, please migrate away from it as soon as possible.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppInvitationsCreateByEmail(ctx, operations.AppInvitationsCreateByEmailRequest{
        RequestBody: &operations.AppInvitationsCreateByEmailRequestBody{
            Role: operations.AppInvitationsCreateByEmailRequestBodyRoleEnumCollaborator.ToPointer(),
        },
        AppName: "iusto",
        OwnerName: "excepturi",
        UserEmail: "nisi",
    }, operations.AppInvitationsCreateByEmailSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppInvitationsDelete

Removes a user's invitation to an app

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppInvitationsDelete(ctx, operations.AppInvitationsDeleteRequest{
        AppName: "recusandae",
        OwnerName: "temporibus",
        UserEmail: "ab",
    }, operations.AppInvitationsDeleteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppInvitationsList

Gets the pending invitations for the app

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppInvitationsList(ctx, operations.AppInvitationsListRequest{
        AppName: "quis",
        OwnerName: "veritatis",
    }, operations.AppInvitationsListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppInvitationsList200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppInvitationsReject

Rejects a pending invitation for the specified user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppInvitationsReject(ctx, operations.AppInvitationsRejectRequest{
        RequestBody: map[string]interface{}{
            "perferendis": "ipsam",
            "repellendus": "sapiente",
            "quo": "odit",
        },
        InvitationToken: "at",
    }, operations.AppInvitationsRejectSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppInvitationsUpdatePermissions

Update pending invitation permission

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppInvitationsUpdatePermissions(ctx, operations.AppInvitationsUpdatePermissionsRequest{
        RequestBody: operations.AppInvitationsUpdatePermissionsRequestBody{
            Permissions: []AppInvitationsUpdatePermissionsRequestBodyPermissionsEnum{
                operations.AppInvitationsUpdatePermissionsRequestBodyPermissionsEnumViewer,
                operations.AppInvitationsUpdatePermissionsRequestBodyPermissionsEnumDeveloper,
                operations.AppInvitationsUpdatePermissionsRequestBodyPermissionsEnumViewer,
                operations.AppInvitationsUpdatePermissionsRequestBodyPermissionsEnumViewer,
            },
        },
        AppName: "esse",
        OwnerName: "totam",
        UserEmail: "porro",
    }, operations.AppInvitationsUpdatePermissionsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsCreate

Creates a new app and returns it to the caller

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppsCreate(ctx, operations.AppsCreateRequestBody{
        Description: sdk.String("dolorum"),
        DisplayName: "dicta",
        Name: sdk.String("Luke McCullough"),
        Os: operations.AppsCreateRequestBodyOsEnumCustom,
        Platform: operations.AppsCreateRequestBodyPlatformEnumWpf,
        ReleaseType: sdk.String("totam"),
    }, operations.AppsCreateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsCreate201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsCreateForOrg

Creates a new app for the organization and returns it to the caller

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppsCreateForOrg(ctx, operations.AppsCreateForOrgRequest{
        RequestBody: operations.AppsCreateForOrgRequestBody{
            Description: sdk.String("beatae"),
            DisplayName: "commodi",
            Name: sdk.String("Pauline Dibbert"),
            Os: operations.AppsCreateForOrgRequestBodyOsEnumTizen,
            Platform: operations.AppsCreateForOrgRequestBodyPlatformEnumUwp,
            ReleaseType: sdk.String("excepturi"),
        },
        OrgName: "aspernatur",
    }, operations.AppsCreateForOrgSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsCreateForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsDelete

Delete an app

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppsDelete(ctx, operations.AppsDeleteRequest{
        AppName: "perferendis",
        OwnerName: "ad",
    }, operations.AppsDeleteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsDeleteAvatar

Deletes the uploaded app avatar

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppsDeleteAvatar(ctx, operations.AppsDeleteAvatarRequest{
        AppName: "natus",
        OwnerName: "sed",
    }, operations.AppsDeleteAvatarSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsDeleteAvatar200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsGet

Return a specific app with the given app name which belongs to the given owner.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppsGet(ctx, operations.AppsGetRequest{
        AppName: "iste",
        OwnerName: "dolor",
    }, operations.AppsGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsGetForOrgUser

Get a user apps information from an organization by name

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppsGetForOrgUser(ctx, operations.AppsGetForOrgUserRequest{
        OrgName: "natus",
        UserName: "Gertrude_Welch44",
    }, operations.AppsGetForOrgUserSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsGetForOrgUser200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## AppsGetTeams

Returns the details of all teams that have access to the app.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppsGetTeams(ctx, operations.AppsGetTeamsRequest{
        AppName: "corporis",
        OwnerName: "iste",
    }, operations.AppsGetTeamsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsGetTeams200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## AppsList

Returns a list of apps

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppsList(ctx, operations.AppsListRequest{
        DollarOrderBy: operations.AppsListDollarOrderByEnumDisplayName.ToPointer(),
    }, operations.AppsListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsList200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## AppsListForOrg

Returns a list of apps for the organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppsListForOrg(ctx, operations.AppsListForOrgRequest{
        OrgName: "saepe",
    }, operations.AppsListForOrgSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsListForOrg200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## AppsListTesters

Returns the testers associated with the app specified with the given app name which belongs to the given owner.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppsListTesters(ctx, operations.AppsListTestersRequest{
        AppName: "quidem",
        OwnerName: "architecto",
    }, operations.AppsListTestersSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsListTesters200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## AppsRemoveUser

Removes the user from the app

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppsRemoveUser(ctx, operations.AppsRemoveUserRequest{
        AppName: "ipsa",
        OwnerName: "reiciendis",
        UserEmail: "est",
    }, operations.AppsRemoveUserSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AppsTransferOwnershipJSON

Transfers ownership of an app to a different user or organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppsTransferOwnershipJSON(ctx, operations.AppsTransferOwnershipJSONRequest{
        RequestBody: map[string]interface{}{
            "laborum": "dolores",
            "dolorem": "corporis",
            "explicabo": "nobis",
        },
        AppName: "enim",
        DestinationOwnerName: "omnis",
        OwnerName: "nemo",
    }, operations.AppsTransferOwnershipJSONSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsTransferOwnershipJSON200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsTransferOwnershipRaw

Transfers ownership of an app to a different user or organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppsTransferOwnershipRaw(ctx, operations.AppsTransferOwnershipRawRequest{
        RequestBody: []byte("minima"),
        AppName: "excepturi",
        DestinationOwnerName: "accusantium",
        OwnerName: "iure",
    }, operations.AppsTransferOwnershipRawSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsTransferOwnershipRaw200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsTransferToOrg

Transfers ownership of an app to a new organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppsTransferToOrg(ctx, operations.AppsTransferToOrgRequest{
        RequestBody: map[string]interface{}{
            "doloribus": "sapiente",
            "architecto": "mollitia",
            "dolorem": "culpa",
        },
        AppName: "consequuntur",
        OwnerName: "repellat",
    }, operations.AppsTransferToOrgSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsTransferToOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsUpdate

Partially updates a single app

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppsUpdate(ctx, operations.AppsUpdateRequest{
        RequestBody: &operations.AppsUpdateRequestBody{
            Description: sdk.String("mollitia"),
            DisplayName: sdk.String("occaecati"),
            IconAssetID: sdk.String("46773925-1aa5-42c3-b5ad-019da1ffe78f"),
            IconURL: sdk.String("ipsa"),
            Name: sdk.String("Mr. Jared Ritchie"),
            ReleaseType: sdk.String("ut"),
        },
        AppName: "maiores",
        OwnerName: "dicta",
    }, operations.AppsUpdateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsUpdate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsUpdateAvatar

Sets the app avatar

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppsUpdateAvatar(ctx, operations.AppsUpdateAvatarRequest{
        RequestBody: &operations.AppsUpdateAvatarRequestBody{
            Avatar: &operations.AppsUpdateAvatarRequestBodyAvatar{
                Avatar: "corporis",
                Content: []byte("dolore"),
            },
        },
        AppName: "iusto",
        OwnerName: "dicta",
    }, operations.AppsUpdateAvatarSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AppsUpdateAvatar200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## AppsUpdateUserPermissions

Update user permission for the app

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AppsUpdateUserPermissions(ctx, operations.AppsUpdateUserPermissionsRequest{
        RequestBody: operations.AppsUpdateUserPermissionsRequestBody{
            Permissions: []AppsUpdateUserPermissionsRequestBodyPermissionsEnum{
                operations.AppsUpdateUserPermissionsRequestBodyPermissionsEnumManager,
                operations.AppsUpdateUserPermissionsRequestBodyPermissionsEnumViewer,
                operations.AppsUpdateUserPermissionsRequestBodyPermissionsEnumDeveloper,
            },
        },
        AppName: "repudiandae",
        OwnerName: "quae",
        UserEmail: "ipsum",
    }, operations.AppsUpdateUserPermissionsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AzureSubscriptionDeleteForApp

Delete the azure subscriptions for the app

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AzureSubscriptionDeleteForApp(ctx, operations.AzureSubscriptionDeleteForAppRequest{
        AppName: "quidem",
        AzureSubscriptionID: "99d488e1-e91e-4450-ad2a-bd44269802d5",
        OwnerName: "alias",
    }, operations.AzureSubscriptionDeleteForAppSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AzureSubscriptionLinkForApp

Link azure subscription to an app

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AzureSubscriptionLinkForApp(ctx, operations.AzureSubscriptionLinkForAppRequest{
        RequestBody: operations.AzureSubscriptionLinkForAppRequestBody{
            SubscriptionID: "2a94bb4f-63c9-469e-9a3e-fa77dfb14cd6",
        },
        AppName: "aliquid",
        OwnerName: "laborum",
    }, operations.AzureSubscriptionLinkForAppSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## AzureSubscriptionListForApp

Returns a list of azure subscriptions for the app

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AzureSubscriptionListForApp(ctx, operations.AzureSubscriptionListForAppRequest{
        AppName: "accusamus",
        OwnerName: "non",
    }, operations.AzureSubscriptionListForAppSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AzureSubscriptionListForApp200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## AzureSubscriptionListForOrg

Returns a list of azure subscriptions for the organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AzureSubscriptionListForOrg(ctx, operations.AzureSubscriptionListForOrgRequest{
        OrgName: "occaecati",
    }, operations.AzureSubscriptionListForOrgSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AzureSubscriptionListForOrg200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## AzureSubscriptionListForUser

Returns a list of azure subscriptions for the user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.AzureSubscriptionListForUser(ctx, operations.AzureSubscriptionListForUserSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AzureSubscriptionListForUser200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## DistributionGroupInvitationsAcceptAll

Accepts all pending invitations to distribution groups for the specified user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupInvitationsAcceptAll(ctx, map[string]interface{}{
        "accusamus": "delectus",
        "quidem": "provident",
    }, operations.DistributionGroupInvitationsAcceptAllSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DistributionGroupsAddApps

Add apps to distribution group in an org

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsAddApps(ctx, operations.DistributionGroupsAddAppsRequest{
        RequestBody: operations.DistributionGroupsAddAppsRequestBody{
            Apps: []DistributionGroupsAddAppsRequestBodyApps{
                operations.DistributionGroupsAddAppsRequestBodyApps{
                    Name: "Nelson Lesch",
                },
                operations.DistributionGroupsAddAppsRequestBodyApps{
                    Name: "Tyler Kassulke",
                },
                operations.DistributionGroupsAddAppsRequestBodyApps{
                    Name: "Dorothy Kovacek",
                },
            },
        },
        DistributionGroupName: "id",
        OrgName: "labore",
    }, operations.DistributionGroupsAddAppsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DistributionGroupsAddUser

Adds the members to the specified distribution group

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsAddUser(ctx, operations.DistributionGroupsAddUserRequest{
        RequestBody: operations.DistributionGroupsAddUserRequestBody{
            UserEmails: []string{
                "suscipit",
                "natus",
            },
        },
        AppName: "nobis",
        DistributionGroupName: "eum",
        OwnerName: "vero",
    }, operations.DistributionGroupsAddUserSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistributionGroupsAddUser200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## DistributionGroupsAddUsersForOrg

Accepts an array of user email addresses to get added to the specified group

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsAddUsersForOrg(ctx, operations.DistributionGroupsAddUsersForOrgRequest{
        RequestBody: operations.DistributionGroupsAddUsersForOrgRequestBody{
            UserEmails: []string{
                "architecto",
            },
        },
        DistributionGroupName: "magnam",
        OrgName: "et",
    }, operations.DistributionGroupsAddUsersForOrgSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistributionGroupsAddUsersForOrg200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## DistributionGroupsBulkDeleteApps

Delete apps from distribution group in an org

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsBulkDeleteApps(ctx, operations.DistributionGroupsBulkDeleteAppsRequest{
        RequestBody: operations.DistributionGroupsBulkDeleteAppsRequestBody{
            Apps: []DistributionGroupsBulkDeleteAppsRequestBodyApps{
                operations.DistributionGroupsBulkDeleteAppsRequestBodyApps{
                    Name: "Ramona Lueilwitz MD",
                },
                operations.DistributionGroupsBulkDeleteAppsRequestBodyApps{
                    Name: "Shaun Hammes",
                },
                operations.DistributionGroupsBulkDeleteAppsRequestBodyApps{
                    Name: "Ms. Fred Hilll",
                },
            },
        },
        DistributionGroupName: "debitis",
        OrgName: "eius",
    }, operations.DistributionGroupsBulkDeleteAppsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DistributionGroupsBulkDeleteUsers

Delete testers from distribution group in an org

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsBulkDeleteUsers(ctx, operations.DistributionGroupsBulkDeleteUsersRequest{
        RequestBody: operations.DistributionGroupsBulkDeleteUsersRequestBody{
            UserEmails: []string{
                "deleniti",
                "facilis",
                "in",
                "architecto",
            },
        },
        DistributionGroupName: "architecto",
        OrgName: "repudiandae",
    }, operations.DistributionGroupsBulkDeleteUsersSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DistributionGroupsCreate

Creates a new distribution group and returns it to the caller

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsCreate(ctx, operations.DistributionGroupsCreateRequest{
        RequestBody: operations.DistributionGroupsCreateRequestBody{
            DisplayName: sdk.String("ullam"),
            Name: "Jessie Zulauf",
        },
        AppName: "saepe",
        OwnerName: "pariatur",
    }, operations.DistributionGroupsCreateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistributionGroupsCreate201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DistributionGroupsCreateForOrg

Creates a disribution goup which can be shared across apps under an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsCreateForOrg(ctx, operations.DistributionGroupsCreateForOrgRequest{
        RequestBody: operations.DistributionGroupsCreateForOrgRequestBody{
            DisplayName: sdk.String("accusantium"),
            Name: "Irma Morissette DDS",
        },
        OrgName: "illum",
    }, operations.DistributionGroupsCreateForOrgSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistributionGroupsCreateForOrg201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DistributionGroupsDelete

Deletes a distribution group

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsDelete(ctx, operations.DistributionGroupsDeleteRequest{
        AppName: "pariatur",
        DistributionGroupName: "maxime",
        OwnerName: "ea",
    }, operations.DistributionGroupsDeleteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DistributionGroupsDeleteForOrg

Deletes a single distribution group from an org with a given distribution group name

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsDeleteForOrg(ctx, operations.DistributionGroupsDeleteForOrgRequest{
        DistributionGroupName: "excepturi",
        OrgName: "odit",
    }, operations.DistributionGroupsDeleteForOrgSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DistributionGroupsDetailsForOrg

Returns a list of distribution groups with details for an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsDetailsForOrg(ctx, operations.DistributionGroupsDetailsForOrgRequest{
        AppsLimit: sdk.Float64(4071.83),
        OrgName: "accusantium",
    }, operations.DistributionGroupsDetailsForOrgSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistributionGroupsDetailsForOrg200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## DistributionGroupsGet

Returns a single distribution group for a given distribution group name

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsGet(ctx, operations.DistributionGroupsGetRequest{
        AppName: "ab",
        DistributionGroupName: "maiores",
        OwnerName: "quidem",
    }, operations.DistributionGroupsGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistributionGroupsGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DistributionGroupsGetApps

Get apps from a distribution group in an org

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsGetApps(ctx, operations.DistributionGroupsGetAppsRequest{
        DistributionGroupName: "ipsam",
        OrgName: "voluptate",
    }, operations.DistributionGroupsGetAppsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistributionGroupsGetApps200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## DistributionGroupsGetForOrg

Returns a single distribution group in org for a given distribution group name

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsGetForOrg(ctx, operations.DistributionGroupsGetForOrgRequest{
        DistributionGroupName: "autem",
        OrgName: "nam",
    }, operations.DistributionGroupsGetForOrgSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistributionGroupsGetForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DistributionGroupsList

Returns a list of distribution groups in the app specified

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsList(ctx, operations.DistributionGroupsListRequest{
        AppName: "eaque",
        OwnerName: "pariatur",
    }, operations.DistributionGroupsListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistributionGroupsList200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## DistributionGroupsListAllTestersForOrg

Returns a unique list of users including the whole organization members plus testers in any shared group of that org

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsListAllTestersForOrg(ctx, operations.DistributionGroupsListAllTestersForOrgRequest{
        OrgName: "nemo",
    }, operations.DistributionGroupsListAllTestersForOrgSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistributionGroupsListAllTestersForOrg200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## DistributionGroupsListForOrg

Returns a list of distribution groups in the org specified

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsListForOrg(ctx, operations.DistributionGroupsListForOrgRequest{
        OrgName: "voluptatibus",
    }, operations.DistributionGroupsListForOrgSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistributionGroupsListForOrg201ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## DistributionGroupsListUsers

Returns a list of member details in the distribution group specified

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsListUsers(ctx, operations.DistributionGroupsListUsersRequest{
        AppName: "perferendis",
        DistributionGroupName: "fugiat",
        ExcludePendingInvitations: sdk.Bool(false),
        OwnerName: "amet",
    }, operations.DistributionGroupsListUsersSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistributionGroupsListUsers200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## DistributionGroupsListUsersForOrg

Returns a list of member in the distribution group specified

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsListUsersForOrg(ctx, operations.DistributionGroupsListUsersForOrgRequest{
        DistributionGroupName: "aut",
        OrgName: "cumque",
    }, operations.DistributionGroupsListUsersForOrgSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistributionGroupsListUsersForOrg200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## DistributionGroupsPatchForOrg

Update one given distribution group name in an org

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsPatchForOrg(ctx, operations.DistributionGroupsPatchForOrgRequest{
        RequestBody: &operations.DistributionGroupsPatchForOrgRequestBody{
            IsPublic: sdk.Bool(false),
            Name: sdk.String("Mindy Renner"),
        },
        DistributionGroupName: "quis",
        OrgName: "totam",
    }, operations.DistributionGroupsPatchForOrgSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistributionGroupsPatchForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DistributionGroupsRemoveUser

Remove the users from the distribution group

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsRemoveUser(ctx, operations.DistributionGroupsRemoveUserRequest{
        RequestBody: operations.DistributionGroupsRemoveUserRequestBody{
            UserEmails: []string{
                "eaque",
                "quis",
            },
        },
        AppName: "nesciunt",
        DistributionGroupName: "eos",
        OwnerName: "perferendis",
    }, operations.DistributionGroupsRemoveUserSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistributionGroupsRemoveUser200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## DistributionGroupsResendInvite

Resend distribution group app invite notification to previously invited testers

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsResendInvite(ctx, operations.DistributionGroupsResendInviteRequest{
        RequestBody: operations.DistributionGroupsResendInviteRequestBody{
            UserEmails: []string{
                "minus",
            },
        },
        AppName: "quam",
        DistributionGroupName: "dolor",
        OwnerName: "vero",
    }, operations.DistributionGroupsResendInviteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DistributionGroupsResendSharedInvite

Resend shared distribution group invite notification to previously invited testers

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsResendSharedInvite(ctx, operations.DistributionGroupsResendSharedInviteRequest{
        RequestBody: operations.DistributionGroupsResendSharedInviteRequestBody{
            UserEmails: []string{
                "hic",
                "recusandae",
            },
        },
        DistributionGroupName: "omnis",
        OrgName: "facilis",
    }, operations.DistributionGroupsResendSharedInviteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DistributionGroupsUpdate

Updates the attributes of distribution group

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.DistributionGroupsUpdate(ctx, operations.DistributionGroupsUpdateRequest{
        RequestBody: operations.DistributionGroupsUpdateRequestBody{
            IsPublic: sdk.Bool(false),
            Name: sdk.String("George Sawayn"),
        },
        AppName: "error",
        DistributionGroupName: "eaque",
        OwnerName: "occaecati",
    }, operations.DistributionGroupsUpdateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DistributionGroupsUpdate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## InvitationsSent

Returns all invitations sent by the caller

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.InvitationsSent(ctx, operations.InvitationsSentSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.InvitationsSent200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## OrgInvitations

Removes a user's invitation to an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.OrgInvitations(ctx, operations.OrgInvitationsRequest{
        RequestBody: map[string]interface{}{
            "adipisci": "asperiores",
            "earum": "modi",
            "iste": "dolorum",
        },
        Email: "Sam_McLaughlin96@yahoo.com",
        OrgName: "quaerat",
    }, operations.OrgInvitationsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgInvitationsAccept

Accepts a pending organization invitation for the specified user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.OrgInvitationsAccept(ctx, operations.OrgInvitationsAcceptRequest{
        RequestBody: map[string]interface{}{
            "aliquid": "dolorem",
            "dolorem": "dolor",
            "qui": "ipsum",
        },
        InvitationToken: "hic",
    }, operations.OrgInvitationsAcceptSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgInvitationsCreate

Invites a new or existing user to an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.OrgInvitationsCreate(ctx, operations.OrgInvitationsCreateRequest{
        RequestBody: operations.OrgInvitationsCreateRequestBody{
            Role: operations.OrgInvitationsCreateRequestBodyRoleEnumCollaborator.ToPointer(),
            UserEmail: "cum",
        },
        OrgName: "voluptate",
    }, operations.OrgInvitationsCreateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgInvitationsDelete

Removes a user's invitation to an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.OrgInvitationsDelete(ctx, operations.OrgInvitationsDeleteRequest{
        RequestBody: operations.OrgInvitationsDeleteRequestBody{
            UserEmail: "dignissimos",
        },
        OrgName: "reiciendis",
    }, operations.OrgInvitationsDeleteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgInvitationsListPending

Gets the pending invitations for the organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.OrgInvitationsListPending(ctx, operations.OrgInvitationsListPendingRequest{
        OrgName: "amet",
    }, operations.OrgInvitationsListPendingSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrgInvitationsListPending200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## OrgInvitationsReject

Rejects a pending organization invitation

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.OrgInvitationsReject(ctx, operations.OrgInvitationsRejectRequest{
        RequestBody: map[string]interface{}{
            "numquam": "veritatis",
            "ipsa": "ipsa",
            "iure": "odio",
        },
        InvitationToken: "quaerat",
    }, operations.OrgInvitationsRejectSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgInvitationsSendNewInvitation

Cancels an existing organization invitation for the user and sends a new one

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.OrgInvitationsSendNewInvitation(ctx, operations.OrgInvitationsSendNewInvitationRequest{
        RequestBody: &operations.OrgInvitationsSendNewInvitationRequestBody{
            Role: operations.OrgInvitationsSendNewInvitationRequestBodyRoleEnumMember.ToPointer(),
        },
        Email: "Weston.Hodkiewicz@hotmail.com",
        OrgName: "atque",
    }, operations.OrgInvitationsSendNewInvitationSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrgInvitationsUpdate

Allows the role of an invited user to be changed

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.OrgInvitationsUpdate(ctx, operations.OrgInvitationsUpdateRequest{
        RequestBody: operations.OrgInvitationsUpdateRequestBody{
            Role: operations.OrgInvitationsUpdateRequestBodyRoleEnumAdmin.ToPointer(),
        },
        Email: "Annamae.Roberts45@hotmail.com",
        OrgName: "dolorum",
    }, operations.OrgInvitationsUpdateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrganizationDeleteAvatar

Deletes the uploaded organization avatar

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.OrganizationDeleteAvatar(ctx, operations.OrganizationDeleteAvatarRequest{
        OrgName: "deleniti",
    }, operations.OrganizationDeleteAvatarSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationDeleteAvatar200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrganizationUpdateAvatar

Sets the organization avatar

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.OrganizationUpdateAvatar(ctx, operations.OrganizationUpdateAvatarRequest{
        RequestBody: &operations.OrganizationUpdateAvatarRequestBody{
            Avatar: &operations.OrganizationUpdateAvatarRequestBodyAvatar{
                Avatar: "omnis",
                Content: []byte("necessitatibus"),
            },
        },
        OrgName: "distinctio",
    }, operations.OrganizationUpdateAvatarSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationUpdateAvatar200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrganizationsCreateOrUpdate

Creates a new organization and returns it to the caller

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.OrganizationsCreateOrUpdate(ctx, operations.OrganizationsCreateOrUpdateRequestBody{
        DisplayName: sdk.String("asperiores"),
        Name: sdk.String("Edna Klocko"),
    }, operations.OrganizationsCreateOrUpdateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationsCreateOrUpdate201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrganizationsDelete

Deletes a single organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.OrganizationsDelete(ctx, operations.OrganizationsDeleteRequest{
        OrgName: "eius",
    }, operations.OrganizationsDeleteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## OrganizationsGet

Returns the details of a single organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.OrganizationsGet(ctx, operations.OrganizationsGetRequest{
        OrgName: "aspernatur",
    }, operations.OrganizationsGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationsGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrganizationsList

Returns a list of organizations the requesting user has access to

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.OrganizationsList(ctx, operations.OrganizationsListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationsList200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## OrganizationsListAdministered

Returns a list organizations in which the requesting user is an admin

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.OrganizationsListAdministered(ctx, operations.OrganizationsListAdministeredSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationsListAdministered200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## OrganizationsUpdate

Returns a list of organizations the requesting user has access to

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.OrganizationsUpdate(ctx, operations.OrganizationsUpdateRequest{
        RequestBody: operations.OrganizationsUpdateRequestBody{
            DisplayName: sdk.String("perferendis"),
            Name: sdk.String("Marianne Thompson"),
        },
        OrgName: "suscipit",
    }, operations.OrganizationsUpdateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationsUpdate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## SharedconnectionConnections

Gets all service connections of the service type for GDPR export.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.SharedconnectionConnections(ctx, operations.SharedconnectionConnectionsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.SharedconnectionConnections200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## TeamsAddApp

Adds an app to a team

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.TeamsAddApp(ctx, operations.TeamsAddAppRequest{
        RequestBody: operations.TeamsAddAppRequestBody{
            Name: "Rene Hane",
        },
        OrgName: "similique",
        TeamName: "alias",
    }, operations.TeamsAddAppSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamsAddApp201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TeamsAddUser

Adds a new user to a team that is owned by an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.TeamsAddUser(ctx, operations.TeamsAddUserRequest{
        RequestBody: operations.TeamsAddUserRequestBody{
            UserEmail: "at",
        },
        OrgName: "quaerat",
        TeamName: "tempora",
    }, operations.TeamsAddUserSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamsAddUser201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TeamsCreateTeam

Creates a team and returns it

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.TeamsCreateTeam(ctx, operations.TeamsCreateTeamRequest{
        RequestBody: operations.TeamsCreateTeamRequestBody{
            Description: sdk.String("vel"),
            DisplayName: "quod",
            Name: sdk.String("Clarence Parisian"),
        },
        OrgName: "harum",
    }, operations.TeamsCreateTeamSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamsCreateTeam201ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## TeamsDelete

Deletes a single team

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.TeamsDelete(ctx, operations.TeamsDeleteRequest{
        OrgName: "iusto",
        TeamName: "ipsum",
    }, operations.TeamsDeleteSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsGetTeam

Returns the details of a single team

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.TeamsGetTeam(ctx, operations.TeamsGetTeamRequest{
        OrgName: "quisquam",
        TeamName: "tenetur",
    }, operations.TeamsGetTeamSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamsGetTeam200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TeamsGetUsers

Returns the users of a team which is owned by an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.TeamsGetUsers(ctx, operations.TeamsGetUsersRequest{
        OrgName: "amet",
        TeamName: "tempore",
    }, operations.TeamsGetUsersSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamsGetUsers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TeamsListAll

Returns the list of all teams in this org

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.TeamsListAll(ctx, operations.TeamsListAllRequest{
        OrgName: "accusamus",
    }, operations.TeamsListAllSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamsListAll200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## TeamsListApps

Returns the apps a team has access to

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.TeamsListApps(ctx, operations.TeamsListAppsRequest{
        OrgName: "numquam",
        TeamName: "enim",
    }, operations.TeamsListAppsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamsListApps200ApplicationJSONAnies != nil {
        // handle response
    }
}
```

## TeamsRemoveApp

Removes an app from a team

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.TeamsRemoveApp(ctx, operations.TeamsRemoveAppRequest{
        AppName: "dolorem",
        OrgName: "sapiente",
        TeamName: "totam",
    }, operations.TeamsRemoveAppSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsRemoveUser

Removes a user from a team that is owned by an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.TeamsRemoveUser(ctx, operations.TeamsRemoveUserRequest{
        OrgName: "nihil",
        TeamName: "sit",
        UserName: "Merlin42",
    }, operations.TeamsRemoveUserSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsUpdate

Updates a single team

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.TeamsUpdate(ctx, operations.TeamsUpdateRequest{
        RequestBody: operations.TeamsUpdateRequestBody{
            DisplayName: "libero",
        },
        OrgName: "voluptas",
        TeamName: "deserunt",
    }, operations.TeamsUpdateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamsUpdate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## TeamsUpdatePermissions

Updates the permissions the team has to the app

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.TeamsUpdatePermissions(ctx, operations.TeamsUpdatePermissionsRequest{
        RequestBody: operations.TeamsUpdatePermissionsRequestBody{
            Permissions: []TeamsUpdatePermissionsRequestBodyPermissionsEnum{
                operations.TeamsUpdatePermissionsRequestBodyPermissionsEnumManager,
                operations.TeamsUpdatePermissionsRequestBodyPermissionsEnumManager,
            },
        },
        AppName: "qui",
        OrgName: "cupiditate",
        TeamName: "maxime",
    }, operations.TeamsUpdatePermissionsSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamsUpdatePermissions200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UserAPITokensDelete

Delete the user api_token object with the specific id

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UserAPITokensDelete(ctx, operations.UserAPITokensDeleteRequest{
        APITokenID: "pariatur",
    }, operations.UserAPITokensDeleteSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UserAPITokensList

Returns api tokens for the authenticated user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UserAPITokensList(ctx, operations.UserAPITokensListSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserAPITokensList200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UserAPITokensNew

Creates a new User API token

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UserAPITokensNew(ctx, operations.UserAPITokensNewRequestBody{
        Description: sdk.String("soluta"),
        Scope: []UserAPITokensNewRequestBodyScopeEnum{
            operations.UserAPITokensNewRequestBodyScopeEnumViewer,
        },
    }, operations.UserAPITokensNewSecurity{
        Password: "YOUR_PASSWORD_HERE",
        Username: "YOUR_USERNAME_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserAPITokensNew201ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UsersGet

Returns the user profile data

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UsersGet(ctx, operations.UsersGetSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UsersGet200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UsersGetForOrg

Get a user information from an organization by name - if there is explicit permission return it, if not if not return highest implicit permission

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UsersGetForOrg(ctx, operations.UsersGetForOrgRequest{
        OrgName: "totam",
        UserName: "Doyle71",
    }, operations.UsersGetForOrgSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UsersGetForOrg200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UsersList

Returns the users associated with the app specified with the given app name which belongs to the given owner.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UsersList(ctx, operations.UsersListRequest{
        AppName: "facilis",
        OwnerName: "aliquid",
    }, operations.UsersListSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UsersList200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UsersListForOrg

Returns a list of users that belong to an organization

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UsersListForOrg(ctx, operations.UsersListForOrgRequest{
        OrgName: "quam",
    }, operations.UsersListForOrgSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UsersListForOrg200ApplicationJSONObjects != nil {
        // handle response
    }
}
```

## UsersRemoveFromOrg

Removes a user from an organization.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UsersRemoveFromOrg(ctx, operations.UsersRemoveFromOrgRequest{
        OrgName: "molestias",
        UserName: "Roma14",
    }, operations.UsersRemoveFromOrgSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UsersUpdate

Updates the user profile and returns the updated user data

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UsersUpdate(ctx, operations.UsersUpdateRequestBody{
        DisplayName: sdk.String("magni"),
    }, operations.UsersUpdateSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UsersUpdate200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UsersUpdateOrgRole

Updates the given organization user

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Account.UsersUpdateOrgRole(ctx, operations.UsersUpdateOrgRoleRequest{
        RequestBody: operations.UsersUpdateOrgRoleRequestBody{
            Role: operations.UsersUpdateOrgRoleRequestBodyRoleEnumCollaborator.ToPointer(),
        },
        OrgName: "sunt",
        UserName: "Fiona.Reichert76",
    }, operations.UsersUpdateOrgRoleSecurity{
        APIToken: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UsersUpdateOrgRole200ApplicationJSONObject != nil {
        // handle response
    }
}
```
