# Teams

## Overview

The Teams service allows you to group users of your project and to enable them to share read and write access to your project resources

### Available Operations

* [TeamsCreate](#teamscreate) - Create Team
* [TeamsCreateMembership](#teamscreatemembership) - Create Team Membership
* [TeamsDelete](#teamsdelete) - Delete Team
* [TeamsDeleteMembership](#teamsdeletemembership) - Delete Team Membership
* [TeamsGet](#teamsget) - Get Team
* [TeamsGetMemberships](#teamsgetmemberships) - Get Team Memberships
* [TeamsList](#teamslist) - List Teams
* [TeamsUpdate](#teamsupdate) - Update Team
* [TeamsUpdateMembershipRoles](#teamsupdatemembershiproles) - Update Membership Roles
* [TeamsUpdateMembershipStatus](#teamsupdatemembershipstatus) - Update Team Membership Status

## TeamsCreate

Create a new team. The user who creates the team will automatically be assigned as the owner of the team. The team owner can invite new members, who will be able add new owners and update or delete the team from your project.

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
    res, err := s.Teams.TeamsCreate(ctx, operations.TeamsCreateRequestBody{
        Name: "Dorothy Kovacek",
        Roles: []string{
            "labore",
            "labore",
            "suscipit",
        },
    }, operations.TeamsCreateSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Team != nil {
        // handle response
    }
}
```

## TeamsCreateMembership

Use this endpoint to invite a new member to join your team. If initiated from Client SDK, an email with a link to join the team will be sent to the new member's email address if the member doesn't exist in the project it will be created automatically. If initiated from server side SDKs, new member will automatically be added to the team.

Use the 'URL' parameter to redirect the user from the invitation email back to your app. When the user is redirected, use the [Update Team Membership Status](/docs/client/teams#teamsUpdateMembershipStatus) endpoint to allow the user to accept the invitation to the team.  While calling from side SDKs the redirect url can be empty string.

Please note that in order to avoid a [Redirect Attacks](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URL's are the once from domains you have set when added your platforms in the console interface.

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
    res, err := s.Teams.TeamsCreateMembership(ctx, operations.TeamsCreateMembershipRequest{
        RequestBody: &operations.TeamsCreateMembershipRequestBody{
            Email: "Nellie.Keebler10@yahoo.com",
            Name: sdk.String("Frances Marks"),
            Roles: []string{
                "sint",
                "accusantium",
                "mollitia",
            },
            URL: "reiciendis",
        },
        TeamID: "mollitia",
    }, operations.TeamsCreateMembershipSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Membership != nil {
        // handle response
    }
}
```

## TeamsDelete

Delete a team by its unique ID. Only team owners have write access for this resource.

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
    res, err := s.Teams.TeamsDelete(ctx, operations.TeamsDeleteRequest{
        TeamID: "ad",
    }, operations.TeamsDeleteSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsDeleteMembership

This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.

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
    res, err := s.Teams.TeamsDeleteMembership(ctx, operations.TeamsDeleteMembershipRequest{
        MembershipID: "eum",
        TeamID: "dolor",
    }, operations.TeamsDeleteMembershipSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## TeamsGet

Get a team by its unique ID. All team members have read access for this resource.

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
    res, err := s.Teams.TeamsGet(ctx, operations.TeamsGetRequest{
        TeamID: "necessitatibus",
    }, operations.TeamsGetSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Team != nil {
        // handle response
    }
}
```

## TeamsGetMemberships

Get a team members by the team unique ID. All team members have read access for this list of resources.

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
    res, err := s.Teams.TeamsGetMemberships(ctx, operations.TeamsGetMembershipsRequest{
        Limit: sdk.Int(141264),
        Offset: sdk.Int(367562),
        OrderType: sdk.String("quasi"),
        Search: sdk.String("iure"),
        TeamID: "doloribus",
    }, operations.TeamsGetMembershipsSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MembershipList != nil {
        // handle response
    }
}
```

## TeamsList

Get a list of all the current user teams. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's teams. [Learn more about different API modes](/docs/admin).

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
    res, err := s.Teams.TeamsList(ctx, operations.TeamsListRequest{
        Limit: sdk.Int(891924),
        Offset: sdk.Int(260341),
        OrderType: sdk.String("maxime"),
        Search: sdk.String("deleniti"),
    }, operations.TeamsListSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.TeamList != nil {
        // handle response
    }
}
```

## TeamsUpdate

Update a team by its unique ID. Only team owners have write access for this resource.

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
    res, err := s.Teams.TeamsUpdate(ctx, operations.TeamsUpdateRequest{
        RequestBody: &operations.TeamsUpdateRequestBody{
            Name: "Dr. Arnold Bradtke",
        },
        TeamID: "expedita",
    }, operations.TeamsUpdateSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Team != nil {
        // handle response
    }
}
```

## TeamsUpdateMembershipRoles

Update Membership Roles

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
    res, err := s.Teams.TeamsUpdateMembershipRoles(ctx, operations.TeamsUpdateMembershipRolesRequest{
        RequestBody: &operations.TeamsUpdateMembershipRolesRequestBody{
            Roles: []string{
                "repellat",
                "quibusdam",
            },
        },
        MembershipID: "sed",
        TeamID: "saepe",
    }, operations.TeamsUpdateMembershipRolesSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Key: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Membership != nil {
        // handle response
    }
}
```

## TeamsUpdateMembershipStatus

Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email recieved by the user.

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
    res, err := s.Teams.TeamsUpdateMembershipStatus(ctx, operations.TeamsUpdateMembershipStatusRequest{
        RequestBody: &operations.TeamsUpdateMembershipStatusRequestBody{
            Secret: "pariatur",
            UserID: "accusantium",
        },
        MembershipID: "consequuntur",
        TeamID: "praesentium",
    }, operations.TeamsUpdateMembershipStatusSecurity{
        Jwt: "YOUR_API_KEY_HERE",
        Project: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Membership != nil {
        // handle response
    }
}
```
