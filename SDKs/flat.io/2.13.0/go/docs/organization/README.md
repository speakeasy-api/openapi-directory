# Organization

## Overview

Flat for Education organizations

### Available Operations

* [CountOrgaUsers](#countorgausers) - Count the organization users using the provided filters
* [CreateLtiCredentials](#createlticredentials) - Create a new couple of LTI 1.x credentials
* [CreateOrganizationInvitation](#createorganizationinvitation) - Create a new invitation to join the organization
* [CreateOrganizationUser](#createorganizationuser) - Create a new user account
* [ListLtiCredentials](#listlticredentials) - List LTI 1.x credentials
* [ListOrganizationInvitations](#listorganizationinvitations) - List the organization invitations
* [ListOrganizationUsers](#listorganizationusers) - List the organization users
* [RemoveOrganizationInvitation](#removeorganizationinvitation) - Remove an organization invitation
* [RemoveOrganizationUser](#removeorganizationuser) - Remove an account from Flat
* [RevokeLtiCredentials](#revokelticredentials) - Revoke LTI 1.x credentials
* [UpdateOrganizationUser](#updateorganizationuser) - Update account information

## CountOrgaUsers

Count the organization users using the provided filters

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.CountOrgaUsers(ctx, operations.CountOrgaUsersRequest{
        Group: []string{
            "est",
        },
        NoActiveLicense: sdk.Bool(false),
        Q: sdk.String("quibusdam"),
        Role: []shared.RoleEnum{
            shared.RoleEnumTeacher,
        },
    }, operations.CountOrgaUsersSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CountOrgaUsers200ApplicationJSONInteger != nil {
        // handle response
    }
}
```

## CreateLtiCredentials

Flat for Education is a Certified LTI Provider. You can use these API methods to automate the creation of LTI credentials. You can read more about our LTI implementation, supported components and LTI Endpoints in our [Developer Documentation](https://flat.io/developers/docs/lti/).


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.CreateLtiCredentials(ctx, shared.LtiCredentialsCreation{
        Lms: shared.LmsNameEnumSakai,
        Name: "Francisco Gleason",
    }, operations.CreateLtiCredentialsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LtiCredentials != nil {
        // handle response
    }
}
```

## CreateOrganizationInvitation

This method creates and sends invitation for teachers and admins.

Invitations can only be used by new Flat users or users who are not part of the organization yet.

If the email of the user is already associated to a user of your organization, the API will simply update the role of the existing user and won't send an invitation. In this case, the property `usedBy` will be directly filled with the uniquer identifier of the corresponding user.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.CreateOrganizationInvitation(ctx, shared.OrganizationInvitationCreation{
        Email: sdk.String("Kavon82@yahoo.com"),
        OrganizationRole: shared.OrganizationRolesEnumBilling.ToPointer(),
    }, operations.CreateOrganizationInvitationSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationInvitation != nil {
        // handle response
    }
}
```

## CreateOrganizationUser

Create a new user account

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.CreateOrganizationUser(ctx, shared.UserCreation{
        Email: sdk.String("Caden.Pagac@gmail.com"),
        Firstname: sdk.String("Mckayla"),
        Lastname: sdk.String("Rice"),
        Locale: shared.FlatLocalesEnumDe.ToPointer(),
        Password: "delectus",
        Username: "Horacio_Franey39",
    }, operations.CreateOrganizationUserSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserDetailsAdmin != nil {
        // handle response
    }
}
```

## ListLtiCredentials

List LTI 1.x credentials

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
    res, err := s.Organization.ListLtiCredentials(ctx, operations.ListLtiCredentialsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.LtiCredentials != nil {
        // handle response
    }
}
```

## ListOrganizationInvitations

List the organization invitations

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
    res, err := s.Organization.ListOrganizationInvitations(ctx, operations.ListOrganizationInvitationsRequest{
        Limit: sdk.Int64(592042),
        Next: sdk.String("necessitatibus"),
        Previous: sdk.String("sint"),
        Role: operations.ListOrganizationInvitationsRoleEnumTeacher.ToPointer(),
    }, operations.ListOrganizationInvitationsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.OrganizationInvitations != nil {
        // handle response
    }
}
```

## ListOrganizationUsers

List the organization users

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.ListOrganizationUsers(ctx, operations.ListOrganizationUsersRequest{
        Direction: shared.SortDirectionEnumAsc.ToPointer(),
        Group: []string{
            "a",
            "dolorum",
            "in",
            "in",
        },
        LicenseExpirationDate: []string{
            "maiores",
            "rerum",
            "dicta",
            "magnam",
        },
        Limit: sdk.Int64(767024),
        Next: sdk.String("facere"),
        NoActiveLicense: sdk.Bool(false),
        OnlyIds: sdk.Bool(false),
        Previous: sdk.String("ea"),
        Q: sdk.String("aliquid"),
        Role: []shared.RoleEnum{
            shared.RoleEnumAdmin,
            shared.RoleEnumUser,
            shared.RoleEnumTeacher,
        },
        Sort: sdk.String("enim"),
    }, operations.ListOrganizationUsersSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserDetailsAdmins != nil {
        // handle response
    }
}
```

## RemoveOrganizationInvitation

Remove an organization invitation

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
    res, err := s.Organization.RemoveOrganizationInvitation(ctx, operations.RemoveOrganizationInvitationRequest{
        Invitation: "accusamus",
    }, operations.RemoveOrganizationInvitationSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RemoveOrganizationUser

This operation removes an account from Flat and its data, including:
* The music scores created by this user (documents, history, comments, collaboration information)
* Education related data (assignments and classroom information)


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
    res, err := s.Organization.RemoveOrganizationUser(ctx, operations.RemoveOrganizationUserRequest{
        ConvertToIndividual: sdk.Bool(false),
        User: "delectus",
    }, operations.RemoveOrganizationUserSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## RevokeLtiCredentials

Revoke LTI 1.x credentials

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
    res, err := s.Organization.RevokeLtiCredentials(ctx, operations.RevokeLtiCredentialsRequest{
        Credentials: "quidem",
    }, operations.RevokeLtiCredentialsSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## UpdateOrganizationUser

Update account information

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Organization.UpdateOrganizationUser(ctx, operations.UpdateOrganizationUserRequest{
        UserAdminUpdate: shared.UserAdminUpdate{
            Email: sdk.String("Mohammad_Olson@yahoo.com"),
            Firstname: sdk.String("Verlie"),
            Lastname: sdk.String("Feeney"),
            OrganizationRole: shared.OrganizationRolesEnumTeacher.ToPointer(),
            Password: sdk.String("nisi"),
            Username: sdk.String("Henry.Mosciski"),
        },
        User: "perferendis",
    }, operations.UpdateOrganizationUserSecurity{
        OAuth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserDetailsAdmin != nil {
        // handle response
    }
}
```
