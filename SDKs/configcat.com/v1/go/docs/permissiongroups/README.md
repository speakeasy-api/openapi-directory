# PermissionGroups

## Overview

With these endpoints you can manage your Permission Groups.

<a href="https://configcat.com/docs/advanced/team-collaboration#permissions--groups" target="_blank" rel="noopener noreferrer">Here</a> you can read more about Permissions.

### Available Operations

* [CreatePermissionGroup](#createpermissiongroup) - Create Permission Group
* [DeletePermissionGroup](#deletepermissiongroup) - Delete Permission Group
* [GetPermissionGroup](#getpermissiongroup) - Get Permission Group
* [GetPermissionGroups](#getpermissiongroups) - List Permission Groups
* [UpdatePermissionGroup](#updatepermissiongroup) - Update Permission Group

## CreatePermissionGroup

This endpoint creates a new Permission Group in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

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
    res, err := s.PermissionGroups.CreatePermissionGroup(ctx, operations.CreatePermissionGroupRequest{
        CreatePermissionGroupRequest: shared.CreatePermissionGroupRequest{
            AccessType: shared.AccessTypeEnumCustom.ToPointer(),
            CanCreateOrUpdateConfig: sdk.Bool(false),
            CanCreateOrUpdateEnvironment: sdk.Bool(false),
            CanCreateOrUpdateSegments: sdk.Bool(false),
            CanCreateOrUpdateSetting: sdk.Bool(false),
            CanCreateOrUpdateTag: sdk.Bool(false),
            CanDeleteConfig: sdk.Bool(false),
            CanDeleteEnvironment: sdk.Bool(false),
            CanDeleteSegments: sdk.Bool(false),
            CanDeleteSetting: sdk.Bool(false),
            CanDeleteTag: sdk.Bool(false),
            CanManageIntegrations: sdk.Bool(false),
            CanManageMembers: sdk.Bool(false),
            CanManageProductPreferences: sdk.Bool(false),
            CanManageWebhook: sdk.Bool(false),
            CanRotateSDKKey: sdk.Bool(false),
            CanTagSetting: sdk.Bool(false),
            CanUseExportImport: sdk.Bool(false),
            CanViewProductAuditLog: sdk.Bool(false),
            CanViewProductStatistics: sdk.Bool(false),
            CanViewSDKKey: sdk.Bool(false),
            EnvironmentAccesses: []shared.CreateOrUpdateEnvironmentAccessModel{
                shared.CreateOrUpdateEnvironmentAccessModel{
                    Color: sdk.String("ad"),
                    Description: sdk.String("voluptatibus"),
                    EnvironmentAccessType: shared.EnvironmentAccessTypeEnumNone.ToPointer(),
                    EnvironmentID: sdk.String("2e4b2753-7a8c-4d9e-b319-c177d525f77b"),
                    Name: sdk.String("Virginia Goyette"),
                    Order: sdk.Int(734814),
                    ReasonRequired: sdk.Bool(false),
                },
            },
            Name: "Julia Wisozk",
            NewEnvironmentAccessType: shared.EnvironmentAccessTypeEnumReadOnly.ToPointer(),
        },
        ProductID: "5fc37814-d4c9-48e0-82bb-89eb75dad636",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PermissionGroupModelHaljson != nil {
        // handle response
    }
}
```

## DeletePermissionGroup

This endpoint removes a Permission Group identified by the `permissionGroupId` parameter.

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
    res, err := s.PermissionGroups.DeletePermissionGroup(ctx, operations.DeletePermissionGroupRequest{
        PermissionGroupID: 771226,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## GetPermissionGroup

This endpoint returns the metadata of a Permission Group 
identified by the `permissionGroupId`.

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
    res, err := s.PermissionGroups.GetPermissionGroup(ctx, operations.GetPermissionGroupRequest{
        PermissionGroupID: 415033,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PermissionGroupModelHaljson != nil {
        // handle response
    }
}
```

## GetPermissionGroups

This endpoint returns the list of the Permission Groups that belongs to the given Product identified by the
`productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

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
    res, err := s.PermissionGroups.GetPermissionGroups(ctx, operations.GetPermissionGroupsRequest{
        ProductID: "00503d8b-b311-480f-b39a-e9e057eb809e",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PermissionGroupModelHaljsons != nil {
        // handle response
    }
}
```

## UpdatePermissionGroup

This endpoint updates a Permission Group identified by the `permissionGroupId` parameter.

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
    res, err := s.PermissionGroups.UpdatePermissionGroup(ctx, operations.UpdatePermissionGroupRequest{
        UpdatePermissionGroupRequest: shared.UpdatePermissionGroupRequest{
            AccessType: shared.AccessTypeEnumReadOnly.ToPointer(),
            CanCreateOrUpdateConfig: sdk.Bool(false),
            CanCreateOrUpdateEnvironment: sdk.Bool(false),
            CanCreateOrUpdateSegments: sdk.Bool(false),
            CanCreateOrUpdateSetting: sdk.Bool(false),
            CanCreateOrUpdateTag: sdk.Bool(false),
            CanDeleteConfig: sdk.Bool(false),
            CanDeleteEnvironment: sdk.Bool(false),
            CanDeleteSegments: sdk.Bool(false),
            CanDeleteSetting: sdk.Bool(false),
            CanDeleteTag: sdk.Bool(false),
            CanManageIntegrations: sdk.Bool(false),
            CanManageMembers: sdk.Bool(false),
            CanManageProductPreferences: sdk.Bool(false),
            CanManageWebhook: sdk.Bool(false),
            CanRotateSDKKey: sdk.Bool(false),
            CanTagSetting: sdk.Bool(false),
            CanUseExportImport: sdk.Bool(false),
            CanViewProductAuditLog: sdk.Bool(false),
            CanViewProductStatistics: sdk.Bool(false),
            CanViewSDKKey: sdk.Bool(false),
            EnvironmentAccesses: []shared.CreateOrUpdateEnvironmentAccessModel{
                shared.CreateOrUpdateEnvironmentAccessModel{
                    Color: sdk.String("dicta"),
                    Description: sdk.String("voluptatem"),
                    EnvironmentAccessType: shared.EnvironmentAccessTypeEnumFull.ToPointer(),
                    EnvironmentID: sdk.String("31f3981d-4c70-40b6-87f3-c93c73b9da3f"),
                    Name: sdk.String("Angelica Waters"),
                    Order: sdk.Int(490420),
                    ReasonRequired: sdk.Bool(false),
                },
                shared.CreateOrUpdateEnvironmentAccessModel{
                    Color: sdk.String("vero"),
                    Description: sdk.String("qui"),
                    EnvironmentAccessType: shared.EnvironmentAccessTypeEnumFull.ToPointer(),
                    EnvironmentID: sdk.String("f2257411-faf4-4b75-84e4-72e802857a5b"),
                    Name: sdk.String("Karen Gleichner"),
                    Order: sdk.Int(652125),
                    ReasonRequired: sdk.Bool(false),
                },
                shared.CreateOrUpdateEnvironmentAccessModel{
                    Color: sdk.String("dignissimos"),
                    Description: sdk.String("fugiat"),
                    EnvironmentAccessType: shared.EnvironmentAccessTypeEnumReadOnly.ToPointer(),
                    EnvironmentID: sdk.String("75f1400e-764a-4d73-b4ec-1b781b36a080"),
                    Name: sdk.String("Mr. Dwayne Sipes PhD"),
                    Order: sdk.Int(965517),
                    ReasonRequired: sdk.Bool(false),
                },
            },
            Name: sdk.String("Orville Nitzsche Jr."),
            NewEnvironmentAccessType: shared.EnvironmentAccessTypeEnumNone.ToPointer(),
        },
        PermissionGroupID: 941668,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.PermissionGroupModelHaljson != nil {
        // handle response
    }
}
```
