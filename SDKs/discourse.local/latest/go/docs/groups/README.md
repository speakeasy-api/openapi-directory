# Groups

### Available Operations

* [AddGroupMembers](#addgroupmembers) - Add group members
* [CreateGroup](#creategroup) - Create a group
* [DeleteGroup](#deletegroup) - Delete a group
* [GetGroup](#getgroup) - Get a group
* [ListGroupMembers](#listgroupmembers) - List group members
* [ListGroups](#listgroups) - List groups
* [RemoveGroupMembers](#removegroupmembers) - Remove group members
* [UpdateGroup](#updategroup) - Update a group

## AddGroupMembers

Add group members

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
    res, err := s.Groups.AddGroupMembers(ctx, operations.AddGroupMembersRequest{
        RequestBody: &operations.AddGroupMembersRequestBody{
            Usernames: sdk.String("quidem"),
        },
        ID: 99280,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.AddGroupMembers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## CreateGroup

Create a group

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
    res, err := s.Groups.CreateGroup(ctx, operations.CreateGroupRequestBody{
        Group: operations.CreateGroupRequestBodyGroup{
            AutomaticMembershipEmailDomains: sdk.String("ipsa"),
            BioRaw: sdk.String("reiciendis"),
            DefaultNotificationLevel: sdk.Int64(666767),
            FlairBgColor: sdk.String("mollitia"),
            FlairIcon: sdk.String("laborum"),
            FlairUploadID: sdk.Int64(170909),
            FullName: sdk.String("dolorem"),
            MutedCategoryIds: []int64{
                128926,
                750686,
            },
            Name: "Guadalupe Hickle",
            OwnerUsernames: sdk.String("accusantium"),
            PrimaryGroup: sdk.Bool(false),
            PublicAdmission: sdk.Bool(false),
            PublicExit: sdk.Bool(false),
            RegularCategoryIds: []int64{
                634274,
                988374,
            },
            TrackingCategoryIds: []int64{
                102044,
                652790,
                208876,
                635059,
            },
            Usernames: sdk.String("consequuntur"),
            VisibilityLevel: sdk.Int64(995300),
            WatchingCategoryIds: []int64{
                581850,
                253291,
                414369,
            },
            WatchingFirstPostCategoryIds: []int64{
                474697,
                244425,
            },
        },
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CreateGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## DeleteGroup

Delete a group

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
    res, err := s.Groups.DeleteGroup(ctx, operations.DeleteGroupRequest{
        ID: 623510,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.DeleteGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## GetGroup

Get a group

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
    res, err := s.Groups.GetGroup(ctx, operations.GetGroupRequest{
        ID: "251aa52c-3f5a-4d01-9da1-ffe78f097b00",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GetGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListGroupMembers

List group members

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
    res, err := s.Groups.ListGroupMembers(ctx, operations.ListGroupMembersRequest{
        ID: "74f15471-b5e6-4e13-b99d-488e1e91e450",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroupMembers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## ListGroups

List groups

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Groups.ListGroups(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListGroups200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## RemoveGroupMembers

Remove group members

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
    res, err := s.Groups.RemoveGroupMembers(ctx, operations.RemoveGroupMembersRequest{
        RequestBody: &operations.RemoveGroupMembersRequestBody{
            Usernames: sdk.String("est"),
        },
        ID: 842342,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.RemoveGroupMembers200ApplicationJSONObject != nil {
        // handle response
    }
}
```

## UpdateGroup

Update a group

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
    res, err := s.Groups.UpdateGroup(ctx, operations.UpdateGroupRequest{
        RequestBody: &operations.UpdateGroupRequestBody{
            Group: operations.UpdateGroupRequestBodyGroup{
                AutomaticMembershipEmailDomains: sdk.String("explicabo"),
                BioRaw: sdk.String("deserunt"),
                DefaultNotificationLevel: sdk.Int64(716327),
                FlairBgColor: sdk.String("quibusdam"),
                FlairIcon: sdk.String("labore"),
                FlairUploadID: sdk.Int64(264730),
                FullName: sdk.String("qui"),
                MutedCategoryIds: []int64{
                    586513,
                    552822,
                },
                Name: "Louise Simonis Sr.",
                OwnerUsernames: sdk.String("dolorum"),
                PrimaryGroup: sdk.Bool(false),
                PublicAdmission: sdk.Bool(false),
                PublicExit: sdk.Bool(false),
                RegularCategoryIds: []int64{
                    270008,
                    703737,
                    735194,
                },
                TrackingCategoryIds: []int64{
                    962189,
                    433288,
                },
                Usernames: sdk.String("non"),
                VisibilityLevel: sdk.Int64(756107),
                WatchingCategoryIds: []int64{
                    396098,
                    592042,
                    896039,
                },
                WatchingFirstPostCategoryIds: []int64{
                    638921,
                    223081,
                    891555,
                },
            },
        },
        ID: 952749,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.UpdateGroup200ApplicationJSONObject != nil {
        // handle response
    }
}
```
