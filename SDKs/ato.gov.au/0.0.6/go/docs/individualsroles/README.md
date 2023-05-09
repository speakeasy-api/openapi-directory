# IndividualsRoles

## Overview

A role defines the characteristics of a relationship between parties.
An Individual can participate in a relationship with other individuals and organisations.

For example:

| Party         | Role           | Relationship     | Role          | Party                           |
| ------------- | -------------- | ---------------- | ------------- | ------------------------------- |
| Homer Simpson | Husband        | Marriage         | Wife          | Marge Simpson                   |
| Homer Simpson | Employee       | Employment       | Employer      | Springfield Nuclear Power Plant |
| Homer Simpson | Safety Officer | Colleague        | Supervisor    | Carl Carlson                    |
| Homer Simpson | Director       | Directorship     | Company       | Compu Global Hyper Mega Net     |
| Homer Simpson | Employee       | Employment       | Employer      | Compu Global Hyper Mega Net     |
| Homer Simpson | Member         | Membership       | Organisation  | The Stonecutters                |
| Homer Simpson | Partner        | Partnership      | Partnership   | The Be Sharps                   |
| Homer Simpson | Trustee        | Trusteeship      | Trust         | The Simpson Family Trust        |
| Homer Simpson | Member         | Membership       | Association   | Mensa International             |

You can use the API's **metadata services** to retrieve information about the classifcation schemes and
values used by the Registry.


### Available Operations

* [DeleteIndividualsPartyIDRolesRoleID](#deleteindividualspartyidrolesroleid) - Delete a role
* [GetIndividualsPartyIDRoles](#getindividualspartyidroles) - Retrieve a list of roles
* [GetIndividualsPartyIDRolesRoleID](#getindividualspartyidrolesroleid) - Retrieve a role
* [PostIndividualsPartyIDRoles](#postindividualspartyidroles) - Create a role
* [PutIndividualsPartyIDRolesRoleID](#putindividualspartyidrolesroleid) - Update a role

## DeleteIndividualsPartyIDRolesRoleID

Delete a role


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
    res, err := s.IndividualsRoles.DeleteIndividualsPartyIDRolesRoleID(ctx, operations.DeleteIndividualsPartyIDRolesRoleIDRequest{
        APIKey: "commodi",
        PartyID: "repudiandae",
        RoleID: "quae",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetIndividualsPartyIDRoles

Retrieve a list of roles

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
    res, err := s.IndividualsRoles.GetIndividualsPartyIDRoles(ctx, operations.GetIndividualsPartyIDRolesRequest{
        APIKey: "ipsum",
        PartyID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PartyRoles != nil {
        // handle response
    }
}
```

## GetIndividualsPartyIDRolesRoleID

Retrieve a role


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
    res, err := s.IndividualsRoles.GetIndividualsPartyIDRolesRoleID(ctx, operations.GetIndividualsPartyIDRolesRoleIDRequest{
        APIKey: "molestias",
        PartyID: "excepturi",
        RoleID: "pariatur",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PartyRole != nil {
        // handle response
    }
}
```

## PostIndividualsPartyIDRoles

Create a role


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
    res, err := s.IndividualsRoles.PostIndividualsPartyIDRoles(ctx, operations.PostIndividualsPartyIDRolesRequest{
        APIKey: "modi",
        PartyRoleInput: shared.PartyRoleInput{
            PartyRoleType: shared.PartyRolePartyRoleTypeEnumMember.ToPointer(),
            RelatedPartyID: "123e4567-e89b-12d3-a456-426655440000",
            RelatedPartyRoleType: shared.PartyRoleRelatedPartyRoleTypeEnumOrganisation.ToPointer(),
            RelationshipType: shared.PartyRoleRelationshipTypeEnumTrusteeship,
        },
        PartyID: "quasi",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PartyRole != nil {
        // handle response
    }
}
```

## PutIndividualsPartyIDRolesRoleID

Update a role


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
    res, err := s.IndividualsRoles.PutIndividualsPartyIDRolesRoleID(ctx, operations.PutIndividualsPartyIDRolesRoleIDRequest{
        APIKey: "repudiandae",
        PartyRoleInput: shared.PartyRoleInput{
            PartyRoleType: shared.PartyRolePartyRoleTypeEnumMember.ToPointer(),
            RelatedPartyID: "123e4567-e89b-12d3-a456-426655440000",
            RelatedPartyRoleType: shared.PartyRoleRelatedPartyRoleTypeEnumAssociation.ToPointer(),
            RelationshipType: shared.PartyRoleRelationshipTypeEnumTrusteeship,
        },
        PartyID: "incidunt",
        RoleID: "enim",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PartyRole != nil {
        // handle response
    }
}
```
