# GroupV2

## Overview

groupV2

### Available Operations

* [GroupV2AbdicateFoundership](#groupv2abdicatefoundership) - An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.
* [GroupV2AddOptionalConversation](#groupv2addoptionalconversation) - Add a new optional conversation/chat channel. Requires admin permissions to the group.
* [GroupV2ApproveAllPending](#groupv2approveallpending) - Approve all of the pending users for the given group.
* [GroupV2ApprovePending](#groupv2approvepending) - Approve the given membershipId to join the group/clan as long as they have applied.
* [GroupV2ApprovePendingForList](#groupv2approvependingforlist) - Approve all of the pending users for the given group.
* [GroupV2BanMember](#groupv2banmember) - Bans the requested member from the requested group for the specified period of time.
* [GroupV2DenyAllPending](#groupv2denyallpending) - Deny all of the pending users for the given group.
* [GroupV2DenyPendingForList](#groupv2denypendingforlist) - Deny all of the pending users for the given group that match the passed-in .
* [GroupV2EditClanBanner](#groupv2editclanbanner) - Edit an existing group's clan banner. You must have suitable permissions in the group to perform this operation. All fields are required.
* [GroupV2EditFounderOptions](#groupv2editfounderoptions) - Edit group options only available to a founder. You must have suitable permissions in the group to perform this operation.
* [GroupV2EditGroup](#groupv2editgroup) - Edit an existing group. You must have suitable permissions in the group to perform this operation. This latest revision will only edit the fields you pass in - pass null for properties you want to leave unaltered.
* [GroupV2EditGroupMembership](#groupv2editgroupmembership) - Edit the membership type of a given member. You must have suitable permissions in the group to perform this operation.
* [GroupV2EditOptionalConversation](#groupv2editoptionalconversation) - Edit the settings of an optional conversation/chat channel. Requires admin permissions to the group.
* [GroupV2GetAdminsAndFounderOfGroup](#groupv2getadminsandfounderofgroup) - Get the list of members in a given group who are of admin level or higher.
* [GroupV2GetAvailableAvatars](#groupv2getavailableavatars) - Returns a list of all available group avatars for the signed-in user.
* [GroupV2GetAvailableThemes](#groupv2getavailablethemes) - Returns a list of all available group themes.
* [GroupV2GetBannedMembersOfGroup](#groupv2getbannedmembersofgroup) - Get the list of banned members in a given group. Only accessible to group Admins and above. Not applicable to all groups. Check group features.
* [GroupV2GetGroup](#groupv2getgroup) - Get information about a specific group of the given ID.
* [GroupV2GetGroupByName](#groupv2getgroupbyname) - Get information about a specific group with the given name and type.
* [GroupV2GetGroupByNameV2](#groupv2getgroupbynamev2) - Get information about a specific group with the given name and type. The POST version.
* [GroupV2GetGroupOptionalConversations](#groupv2getgroupoptionalconversations) - Gets a list of available optional conversation channels and their settings.
* [GroupV2GetGroupsForMember](#groupv2getgroupsformember) - Get information about the groups that a given member has joined.
* [GroupV2GetInvitedIndividuals](#groupv2getinvitedindividuals) - Get the list of users who have been invited into the group.
* [GroupV2GetMembersOfGroup](#groupv2getmembersofgroup) - Get the list of members in a given group.
* [GroupV2GetPendingMemberships](#groupv2getpendingmemberships) - Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.
* [GroupV2GetPotentialGroupsForMember](#groupv2getpotentialgroupsformember) - Get information about the groups that a given member has applied to or been invited to.
* [GroupV2GetRecommendedGroups](#groupv2getrecommendedgroups) - Gets groups recommended for you based on the groups to whom those you follow belong.
* [GroupV2GetUserClanInviteSetting](#groupv2getuserclaninvitesetting) - Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.
* [GroupV2GroupSearch](#groupv2groupsearch) - Search for Groups.
* [GroupV2IndividualGroupInvite](#groupv2individualgroupinvite) - Invite a user to join this group.
* [GroupV2IndividualGroupInviteCancel](#groupv2individualgroupinvitecancel) - Cancels a pending invitation to join a group.
* [GroupV2KickMember](#groupv2kickmember) - Kick a member from the given group, forcing them to reapply if they wish to re-join the group. You must have suitable permissions in the group to perform this operation.
* [GroupV2RecoverGroupForFounder](#groupv2recovergroupforfounder) - Allows a founder to manually recover a group they can see in game but not on bungie.net
* [GroupV2UnbanMember](#groupv2unbanmember) - Unbans the requested member, allowing them to re-apply for membership.

## GroupV2AbdicateFoundership

An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.

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
    res, err := s.GroupV2.GroupV2AbdicateFoundership(ctx, operations.GroupV2AbdicateFoundershipRequest{
        FounderIDNew: 647174,
        GroupID: 716327,
        MembershipType: 841386,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2AddOptionalConversation

Add a new optional conversation/chat channel. Requires admin permissions to the group.

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
    res, err := s.GroupV2.GroupV2AddOptionalConversation(ctx, operations.GroupV2AddOptionalConversationRequest{
        GroupID: 289406,
    }, operations.GroupV2AddOptionalConversationSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2ApproveAllPending

Approve all of the pending users for the given group.

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
    res, err := s.GroupV2.GroupV2ApproveAllPending(ctx, operations.GroupV2ApproveAllPendingRequest{
        GroupID: 264730,
    }, operations.GroupV2ApproveAllPendingSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2ApprovePending

Approve the given membershipId to join the group/clan as long as they have applied.

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
    res, err := s.GroupV2.GroupV2ApprovePending(ctx, operations.GroupV2ApprovePendingRequest{
        GroupID: 183191,
        MembershipID: 397821,
        MembershipType: 586513,
    }, operations.GroupV2ApprovePendingSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2ApprovePendingForList

Approve all of the pending users for the given group.

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
    res, err := s.GroupV2.GroupV2ApprovePendingForList(ctx, operations.GroupV2ApprovePendingForListRequest{
        GroupID: 552822,
    }, operations.GroupV2ApprovePendingForListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2BanMember

Bans the requested member from the requested group for the specified period of time.

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
    res, err := s.GroupV2.GroupV2BanMember(ctx, operations.GroupV2BanMemberRequest{
        GroupID: 20107,
        MembershipID: 164940,
        MembershipType: 828940,
    }, operations.GroupV2BanMemberSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2DenyAllPending

Deny all of the pending users for the given group.

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
    res, err := s.GroupV2.GroupV2DenyAllPending(ctx, operations.GroupV2DenyAllPendingRequest{
        GroupID: 369808,
    }, operations.GroupV2DenyAllPendingSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2DenyPendingForList

Deny all of the pending users for the given group that match the passed-in .

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
    res, err := s.GroupV2.GroupV2DenyPendingForList(ctx, operations.GroupV2DenyPendingForListRequest{
        GroupID: 4695,
    }, operations.GroupV2DenyPendingForListSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2EditClanBanner

Edit an existing group's clan banner. You must have suitable permissions in the group to perform this operation. All fields are required.

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
    res, err := s.GroupV2.GroupV2EditClanBanner(ctx, operations.GroupV2EditClanBannerRequest{
        GroupID: 146441,
    }, operations.GroupV2EditClanBannerSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2EditFounderOptions

Edit group options only available to a founder. You must have suitable permissions in the group to perform this operation.

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
    res, err := s.GroupV2.GroupV2EditFounderOptions(ctx, operations.GroupV2EditFounderOptionsRequest{
        GroupID: 677817,
    }, operations.GroupV2EditFounderOptionsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2EditGroup

Edit an existing group. You must have suitable permissions in the group to perform this operation. This latest revision will only edit the fields you pass in - pass null for properties you want to leave unaltered.

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
    res, err := s.GroupV2.GroupV2EditGroup(ctx, operations.GroupV2EditGroupRequest{
        GroupID: 569618,
    }, operations.GroupV2EditGroupSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2EditGroupMembership

Edit the membership type of a given member. You must have suitable permissions in the group to perform this operation.

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
    res, err := s.GroupV2.GroupV2EditGroupMembership(ctx, operations.GroupV2EditGroupMembershipRequest{
        GroupID: 270008,
        MemberType: 703737,
        MembershipID: 735194,
        MembershipType: 288476,
    }, operations.GroupV2EditGroupMembershipSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2EditOptionalConversation

Edit the settings of an optional conversation/chat channel. Requires admin permissions to the group.

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
    res, err := s.GroupV2.GroupV2EditOptionalConversation(ctx, operations.GroupV2EditOptionalConversationRequest{
        ConversationID: 962189,
        GroupID: 433288,
    }, operations.GroupV2EditOptionalConversationSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2GetAdminsAndFounderOfGroup

Get the list of members in a given group who are of admin level or higher.

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
    res, err := s.GroupV2.GroupV2GetAdminsAndFounderOfGroup(ctx, operations.GroupV2GetAdminsAndFounderOfGroupRequest{
        Currentpage: 248753,
        GroupID: 756107,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2GetAvailableAvatars

Returns a list of all available group avatars for the signed-in user.

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
    res, err := s.GroupV2.GroupV2GetAvailableAvatars(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2GetAvailableThemes

Returns a list of all available group themes.

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
    res, err := s.GroupV2.GroupV2GetAvailableThemes(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2GetBannedMembersOfGroup

Get the list of banned members in a given group. Only accessible to group Admins and above. Not applicable to all groups. Check group features.

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
    res, err := s.GroupV2.GroupV2GetBannedMembersOfGroup(ctx, operations.GroupV2GetBannedMembersOfGroupRequest{
        Currentpage: 576157,
        GroupID: 396098,
    }, operations.GroupV2GetBannedMembersOfGroupSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2GetGroup

Get information about a specific group of the given ID.

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
    res, err := s.GroupV2.GroupV2GetGroup(ctx, operations.GroupV2GetGroupRequest{
        GroupID: 592042,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2GetGroupByName

Get information about a specific group with the given name and type.

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
    res, err := s.GroupV2.GroupV2GetGroupByName(ctx, operations.GroupV2GetGroupByNameRequest{
        GroupName: "necessitatibus",
        GroupType: 572252,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2GetGroupByNameV2

Get information about a specific group with the given name and type. The POST version.

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
    res, err := s.GroupV2.GroupV2GetGroupByNameV2(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2GetGroupOptionalConversations

Gets a list of available optional conversation channels and their settings.

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
    res, err := s.GroupV2.GroupV2GetGroupOptionalConversations(ctx, operations.GroupV2GetGroupOptionalConversationsRequest{
        GroupID: 638921,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2GetGroupsForMember

Get information about the groups that a given member has joined.

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
    res, err := s.GroupV2.GroupV2GetGroupsForMember(ctx, operations.GroupV2GetGroupsForMemberRequest{
        Filter: 223081,
        GroupType: 891555,
        MembershipID: 952749,
        MembershipType: 680056,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2GetInvitedIndividuals

Get the list of users who have been invited into the group.

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
    res, err := s.GroupV2.GroupV2GetInvitedIndividuals(ctx, operations.GroupV2GetInvitedIndividualsRequest{
        Currentpage: 447125,
        GroupID: 449198,
    }, operations.GroupV2GetInvitedIndividualsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2GetMembersOfGroup

Get the list of members in a given group.

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
    res, err := s.GroupV2.GroupV2GetMembersOfGroup(ctx, operations.GroupV2GetMembersOfGroupRequest{
        Currentpage: 846409,
        GroupID: 978571,
        MemberType: sdk.Int(699479),
        NameSearch: sdk.String("dicta"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2GetPendingMemberships

Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.

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
    res, err := s.GroupV2.GroupV2GetPendingMemberships(ctx, operations.GroupV2GetPendingMembershipsRequest{
        Currentpage: 297437,
        GroupID: 767024,
    }, operations.GroupV2GetPendingMembershipsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2GetPotentialGroupsForMember

Get information about the groups that a given member has applied to or been invited to.

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
    res, err := s.GroupV2.GroupV2GetPotentialGroupsForMember(ctx, operations.GroupV2GetPotentialGroupsForMemberRequest{
        Filter: 813798,
        GroupType: 411820,
        MembershipID: 396506,
        MembershipType: 675439,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2GetRecommendedGroups

Gets groups recommended for you based on the groups to whom those you follow belong.

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
    res, err := s.GroupV2.GroupV2GetRecommendedGroups(ctx, operations.GroupV2GetRecommendedGroupsRequest{
        CreateDateRange: 881104,
        GroupType: 249796,
    }, operations.GroupV2GetRecommendedGroupsSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2GetUserClanInviteSetting

Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.

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
    res, err := s.GroupV2.GroupV2GetUserClanInviteSetting(ctx, operations.GroupV2GetUserClanInviteSettingRequest{
        MType: 581273,
    }, operations.GroupV2GetUserClanInviteSettingSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2GroupSearch

Search for Groups.

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
    res, err := s.GroupV2.GroupV2GroupSearch(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2IndividualGroupInvite

Invite a user to join this group.

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
    res, err := s.GroupV2.GroupV2IndividualGroupInvite(ctx, operations.GroupV2IndividualGroupInviteRequest{
        GroupID: 313218,
        MembershipID: 881736,
        MembershipType: 965417,
    }, operations.GroupV2IndividualGroupInviteSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2IndividualGroupInviteCancel

Cancels a pending invitation to join a group.

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
    res, err := s.GroupV2.GroupV2IndividualGroupInviteCancel(ctx, operations.GroupV2IndividualGroupInviteCancelRequest{
        GroupID: 692532,
        MembershipID: 588465,
        MembershipType: 725255,
    }, operations.GroupV2IndividualGroupInviteCancelSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2KickMember

Kick a member from the given group, forcing them to reapply if they wish to re-join the group. You must have suitable permissions in the group to perform this operation.

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
    res, err := s.GroupV2.GroupV2KickMember(ctx, operations.GroupV2KickMemberRequest{
        GroupID: 659669,
        MembershipID: 501324,
        MembershipType: 533206,
    }, operations.GroupV2KickMemberSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2RecoverGroupForFounder

Allows a founder to manually recover a group they can see in game but not on bungie.net

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
    res, err := s.GroupV2.GroupV2RecoverGroupForFounder(ctx, operations.GroupV2RecoverGroupForFounderRequest{
        GroupType: 956084,
        MembershipID: 230533,
        MembershipType: 643990,
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```

## GroupV2UnbanMember

Unbans the requested member, allowing them to re-apply for membership.

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
    res, err := s.GroupV2.GroupV2UnbanMember(ctx, operations.GroupV2UnbanMemberRequest{
        GroupID: 394869,
        MembershipID: 423855,
        MembershipType: 618809,
    }, operations.GroupV2UnbanMemberSecurity{
        Oauth2: "Bearer YOUR_ACCESS_TOKEN_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
}
```
