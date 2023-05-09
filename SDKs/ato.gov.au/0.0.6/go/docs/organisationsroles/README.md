# OrganisationsRoles

## Overview

A role defines the characteristics of a relationship between parties.
An Organisation can participate in a relationship with other organisations and indiviuals.

For example:

| Party                           | Role     | Relationship | Role         | Party             |
| ------------------------------- | -------- | -------------| ------------ | ----------------- |
| Springfield Nuclear Power Plant | Employer | Employment   | Employee     | Homer Simpson     |
| Springfield Nuclear Power Plant | Company  | Directorship | Director     | Mr Burns          |
| Springfield Nuclear Power Plant | Employer | Employment   | Employee     | Mr Burns          |
| Springfield Nuclear Power Plant | Sponsor  | Sponsorship  | Organisation | The Stonecutters  |

You can use the API's **metadata services** to retrieve information about the classifcation schemes and
values used by the Registry.


### Available Operations

* [DeleteOrganisationsPartyIDRolesRoleID](#deleteorganisationspartyidrolesroleid) - Delete a role
* [GetOrganisationsPartyIDRoles](#getorganisationspartyidroles) - Retrieve a list of roles
* [GetOrganisationsPartyIDRolesRoleID](#getorganisationspartyidrolesroleid) - Retrieve a role
* [PostOrganisationsPartyIDRoles](#postorganisationspartyidroles) - Create a role
* [PutOrganisationsPartyIDRolesRoleID](#putorganisationspartyidrolesroleid) - Update a role

## DeleteOrganisationsPartyIDRolesRoleID

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
    res, err := s.OrganisationsRoles.DeleteOrganisationsPartyIDRolesRoleID(ctx, operations.DeleteOrganisationsPartyIDRolesRoleIDRequest{
        APIKey: "recusandae",
        PartyID: "omnis",
        RoleID: "facilis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrganisationsPartyIDRoles

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
    res, err := s.OrganisationsRoles.GetOrganisationsPartyIDRoles(ctx, operations.GetOrganisationsPartyIDRolesRequest{
        APIKey: "perspiciatis",
        PartyID: "voluptatem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PartyRoles != nil {
        // handle response
    }
}
```

## GetOrganisationsPartyIDRolesRoleID

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
    res, err := s.OrganisationsRoles.GetOrganisationsPartyIDRolesRoleID(ctx, operations.GetOrganisationsPartyIDRolesRoleIDRequest{
        APIKey: "porro",
        PartyID: "consequuntur",
        RoleID: "blanditiis",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PartyRole != nil {
        // handle response
    }
}
```

## PostOrganisationsPartyIDRoles

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
    res, err := s.OrganisationsRoles.PostOrganisationsPartyIDRoles(ctx, operations.PostOrganisationsPartyIDRolesRequest{
        APIKey: "error",
        PartyRoleInput: shared.PartyRoleInput{
            PartyRoleType: shared.PartyRolePartyRoleTypeEnumDirector.ToPointer(),
            RelatedPartyID: "123e4567-e89b-12d3-a456-426655440000",
            RelatedPartyRoleType: shared.PartyRoleRelatedPartyRoleTypeEnumOrganisation.ToPointer(),
            RelationshipType: shared.PartyRoleRelationshipTypeEnumPartnership,
        },
        PartyID: "adipisci",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PartyRole != nil {
        // handle response
    }
}
```

## PutOrganisationsPartyIDRolesRoleID

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
    res, err := s.OrganisationsRoles.PutOrganisationsPartyIDRolesRoleID(ctx, operations.PutOrganisationsPartyIDRolesRoleIDRequest{
        APIKey: "asperiores",
        PartyRoleInput: shared.PartyRoleInput{
            PartyRoleType: shared.PartyRolePartyRoleTypeEnumTrustee.ToPointer(),
            RelatedPartyID: "123e4567-e89b-12d3-a456-426655440000",
            RelatedPartyRoleType: shared.PartyRoleRelatedPartyRoleTypeEnumCompany.ToPointer(),
            RelationshipType: shared.PartyRoleRelationshipTypeEnumPartnership,
        },
        PartyID: "dolorum",
        RoleID: "deleniti",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PartyRole != nil {
        // handle response
    }
}
```
