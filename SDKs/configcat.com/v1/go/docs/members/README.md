# Members

## Overview

With these endpoints you can manage your Members.

<a href="https://configcat.com/docs/advanced/team-collaboration" target="_blank" rel="noopener noreferrer">Here</a> you can read more about Team Collaboration.

### Available Operations

* [AddMemberToGroup](#addmembertogroup) - Update Member Permissions
* [DeleteOrganizationMember](#deleteorganizationmember) - Delete Member from Organization
* [DeleteProductMember](#deleteproductmember) - Delete Member from Product
* [GetOrganizationMembers](#getorganizationmembers) - List Organization Members
* [GetProductMembers](#getproductmembers) - List Product Members
* [InviteMember](#invitemember) - Invite Member

## AddMemberToGroup

This endpoint adds a Member identified by the `userId` to one or more Permission Groups. 
This endpoint can also be used to move a Member between Permission Groups within a Product.
Only a single Permission Group can be set per Product.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Members.AddMemberToGroup(ctx, operations.AddMemberToGroupRequest{
        AddUserToGroupRequest: shared.AddUserToGroupRequest{
            PermissionGroupIds: []int64{
                872303,
                5152,
                156653,
            },
        },
        OrganizationID: "bae0be2d-7822-459e-bea4-b5197f92443d",
        UserID: "officia",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteOrganizationMember

This endpoint removes a Member identified by the `userId` from the 
given Organization identified by the `organizationId` parameter.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Members.DeleteOrganizationMember(ctx, operations.DeleteOrganizationMemberRequest{
        OrganizationID: "7ce52b89-5c53-47c6-854e-fb0b34896c3c",
        UserID: "fuga",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteProductMember

This endpoint removes a Member identified by the `userId` from the 
given Product identified by the `productId` parameter.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Members.DeleteProductMember(ctx, operations.DeleteProductMemberRequest{
        ProductID: "5acfbe2f-d570-4757-b929-177deac646ec",
        UserID: "quidem",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetOrganizationMembers

This endpoint returns the list of Members that belongs 
to the given Organization, identified by the `organizationId` parameter.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Members.GetOrganizationMembers(ctx, operations.GetOrganizationMembersRequest{
        OrganizationID: "573409e3-eb1e-45a2-b12e-b07f116db995",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UserModels != nil {
        // handle response
    }
}
```

## GetProductMembers

This endpoint returns the list of Members that belongs 
to the given Product, identified by the `productId` parameter.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Members.GetProductMembers(ctx, operations.GetProductMembersRequest{
        ProductID: "45fc95fa-8897-40e1-89db-b30fcb33ea05",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.MemberModels != nil {
        // handle response
    }
}
```

## InviteMember

This endpoint invites a Member into the given Product identified by the `productId` parameter.

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
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            Password: "YOUR_PASSWORD_HERE",
            Username: "YOUR_USERNAME_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Members.InviteMember(ctx, operations.InviteMemberRequest{
        InviteMembersRequest: shared.InviteMembersRequest{
            Emails: []string{
                "libero",
                "architecto",
            },
            PermissionGroupID: 584593,
        },
        ProductID: "7cd44e2f-52d8-42d3-913b-b6f48b656bcd",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
