# groupV2

## Overview

groupV2

### Available Operations

* [groupV2AbdicateFoundership](#groupv2abdicatefoundership) - An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.
* [groupV2AddOptionalConversation](#groupv2addoptionalconversation) - Add a new optional conversation/chat channel. Requires admin permissions to the group.
* [groupV2ApproveAllPending](#groupv2approveallpending) - Approve all of the pending users for the given group.
* [groupV2ApprovePending](#groupv2approvepending) - Approve the given membershipId to join the group/clan as long as they have applied.
* [groupV2ApprovePendingForList](#groupv2approvependingforlist) - Approve all of the pending users for the given group.
* [groupV2BanMember](#groupv2banmember) - Bans the requested member from the requested group for the specified period of time.
* [groupV2DenyAllPending](#groupv2denyallpending) - Deny all of the pending users for the given group.
* [groupV2DenyPendingForList](#groupv2denypendingforlist) - Deny all of the pending users for the given group that match the passed-in .
* [groupV2EditClanBanner](#groupv2editclanbanner) - Edit an existing group's clan banner. You must have suitable permissions in the group to perform this operation. All fields are required.
* [groupV2EditFounderOptions](#groupv2editfounderoptions) - Edit group options only available to a founder. You must have suitable permissions in the group to perform this operation.
* [groupV2EditGroup](#groupv2editgroup) - Edit an existing group. You must have suitable permissions in the group to perform this operation. This latest revision will only edit the fields you pass in - pass null for properties you want to leave unaltered.
* [groupV2EditGroupMembership](#groupv2editgroupmembership) - Edit the membership type of a given member. You must have suitable permissions in the group to perform this operation.
* [groupV2EditOptionalConversation](#groupv2editoptionalconversation) - Edit the settings of an optional conversation/chat channel. Requires admin permissions to the group.
* [groupV2GetAdminsAndFounderOfGroup](#groupv2getadminsandfounderofgroup) - Get the list of members in a given group who are of admin level or higher.
* [groupV2GetAvailableAvatars](#groupv2getavailableavatars) - Returns a list of all available group avatars for the signed-in user.
* [groupV2GetAvailableThemes](#groupv2getavailablethemes) - Returns a list of all available group themes.
* [groupV2GetBannedMembersOfGroup](#groupv2getbannedmembersofgroup) - Get the list of banned members in a given group. Only accessible to group Admins and above. Not applicable to all groups. Check group features.
* [groupV2GetGroup](#groupv2getgroup) - Get information about a specific group of the given ID.
* [groupV2GetGroupByName](#groupv2getgroupbyname) - Get information about a specific group with the given name and type.
* [groupV2GetGroupByNameV2](#groupv2getgroupbynamev2) - Get information about a specific group with the given name and type. The POST version.
* [groupV2GetGroupOptionalConversations](#groupv2getgroupoptionalconversations) - Gets a list of available optional conversation channels and their settings.
* [groupV2GetGroupsForMember](#groupv2getgroupsformember) - Get information about the groups that a given member has joined.
* [groupV2GetInvitedIndividuals](#groupv2getinvitedindividuals) - Get the list of users who have been invited into the group.
* [groupV2GetMembersOfGroup](#groupv2getmembersofgroup) - Get the list of members in a given group.
* [groupV2GetPendingMemberships](#groupv2getpendingmemberships) - Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.
* [groupV2GetPotentialGroupsForMember](#groupv2getpotentialgroupsformember) - Get information about the groups that a given member has applied to or been invited to.
* [groupV2GetRecommendedGroups](#groupv2getrecommendedgroups) - Gets groups recommended for you based on the groups to whom those you follow belong.
* [groupV2GetUserClanInviteSetting](#groupv2getuserclaninvitesetting) - Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.
* [groupV2GroupSearch](#groupv2groupsearch) - Search for Groups.
* [groupV2IndividualGroupInvite](#groupv2individualgroupinvite) - Invite a user to join this group.
* [groupV2IndividualGroupInviteCancel](#groupv2individualgroupinvitecancel) - Cancels a pending invitation to join a group.
* [groupV2KickMember](#groupv2kickmember) - Kick a member from the given group, forcing them to reapply if they wish to re-join the group. You must have suitable permissions in the group to perform this operation.
* [groupV2RecoverGroupForFounder](#groupv2recovergroupforfounder) - Allows a founder to manually recover a group they can see in game but not on bungie.net
* [groupV2UnbanMember](#groupv2unbanmember) - Unbans the requested member, allowing them to re-apply for membership.

## groupV2AbdicateFoundership

An administrative method to allow the founder of a group or clan to give up their position to another admin permanently.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2AbdicateFoundershipRequest;
import org.openapis.openapi.models.operations.GroupV2AbdicateFoundershipResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2AbdicateFoundershipRequest req = new GroupV2AbdicateFoundershipRequest(572252L, 638921L, 223081);            

            GroupV2AbdicateFoundershipResponse res = sdk.groupV2.groupV2AbdicateFoundership(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2AddOptionalConversation

Add a new optional conversation/chat channel. Requires admin permissions to the group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2AddOptionalConversationRequest;
import org.openapis.openapi.models.operations.GroupV2AddOptionalConversationResponse;
import org.openapis.openapi.models.operations.GroupV2AddOptionalConversationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2AddOptionalConversationRequest req = new GroupV2AddOptionalConversationRequest(891555L);            

            GroupV2AddOptionalConversationResponse res = sdk.groupV2.groupV2AddOptionalConversation(req, new GroupV2AddOptionalConversationSecurity("a") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2ApproveAllPending

Approve all of the pending users for the given group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2ApproveAllPendingRequest;
import org.openapis.openapi.models.operations.GroupV2ApproveAllPendingResponse;
import org.openapis.openapi.models.operations.GroupV2ApproveAllPendingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2ApproveAllPendingRequest req = new GroupV2ApproveAllPendingRequest(680056L);            

            GroupV2ApproveAllPendingResponse res = sdk.groupV2.groupV2ApproveAllPending(req, new GroupV2ApproveAllPendingSecurity("in") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2ApprovePending

Approve the given membershipId to join the group/clan as long as they have applied.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2ApprovePendingRequest;
import org.openapis.openapi.models.operations.GroupV2ApprovePendingResponse;
import org.openapis.openapi.models.operations.GroupV2ApprovePendingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2ApprovePendingRequest req = new GroupV2ApprovePendingRequest(449198L, 846409L, 978571);            

            GroupV2ApprovePendingResponse res = sdk.groupV2.groupV2ApprovePending(req, new GroupV2ApprovePendingSecurity("rerum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2ApprovePendingForList

Approve all of the pending users for the given group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2ApprovePendingForListRequest;
import org.openapis.openapi.models.operations.GroupV2ApprovePendingForListResponse;
import org.openapis.openapi.models.operations.GroupV2ApprovePendingForListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2ApprovePendingForListRequest req = new GroupV2ApprovePendingForListRequest(116202L);            

            GroupV2ApprovePendingForListResponse res = sdk.groupV2.groupV2ApprovePendingForList(req, new GroupV2ApprovePendingForListSecurity("magnam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2BanMember

Bans the requested member from the requested group for the specified period of time.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2BanMemberRequest;
import org.openapis.openapi.models.operations.GroupV2BanMemberResponse;
import org.openapis.openapi.models.operations.GroupV2BanMemberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2BanMemberRequest req = new GroupV2BanMemberRequest(767024L, 813798L, 411820);            

            GroupV2BanMemberResponse res = sdk.groupV2.groupV2BanMember(req, new GroupV2BanMemberSecurity("aliquid") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2DenyAllPending

Deny all of the pending users for the given group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2DenyAllPendingRequest;
import org.openapis.openapi.models.operations.GroupV2DenyAllPendingResponse;
import org.openapis.openapi.models.operations.GroupV2DenyAllPendingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2DenyAllPendingRequest req = new GroupV2DenyAllPendingRequest(675439L);            

            GroupV2DenyAllPendingResponse res = sdk.groupV2.groupV2DenyAllPending(req, new GroupV2DenyAllPendingSecurity("accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2DenyPendingForList

Deny all of the pending users for the given group that match the passed-in .

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2DenyPendingForListRequest;
import org.openapis.openapi.models.operations.GroupV2DenyPendingForListResponse;
import org.openapis.openapi.models.operations.GroupV2DenyPendingForListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2DenyPendingForListRequest req = new GroupV2DenyPendingForListRequest(249796L);            

            GroupV2DenyPendingForListResponse res = sdk.groupV2.groupV2DenyPendingForList(req, new GroupV2DenyPendingForListSecurity("occaecati") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2EditClanBanner

Edit an existing group's clan banner. You must have suitable permissions in the group to perform this operation. All fields are required.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2EditClanBannerRequest;
import org.openapis.openapi.models.operations.GroupV2EditClanBannerResponse;
import org.openapis.openapi.models.operations.GroupV2EditClanBannerSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2EditClanBannerRequest req = new GroupV2EditClanBannerRequest(313218L);            

            GroupV2EditClanBannerResponse res = sdk.groupV2.groupV2EditClanBanner(req, new GroupV2EditClanBannerSecurity("accusamus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2EditFounderOptions

Edit group options only available to a founder. You must have suitable permissions in the group to perform this operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2EditFounderOptionsRequest;
import org.openapis.openapi.models.operations.GroupV2EditFounderOptionsResponse;
import org.openapis.openapi.models.operations.GroupV2EditFounderOptionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2EditFounderOptionsRequest req = new GroupV2EditFounderOptionsRequest(965417L);            

            GroupV2EditFounderOptionsResponse res = sdk.groupV2.groupV2EditFounderOptions(req, new GroupV2EditFounderOptionsSecurity("quidem") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2EditGroup

Edit an existing group. You must have suitable permissions in the group to perform this operation. This latest revision will only edit the fields you pass in - pass null for properties you want to leave unaltered.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2EditGroupRequest;
import org.openapis.openapi.models.operations.GroupV2EditGroupResponse;
import org.openapis.openapi.models.operations.GroupV2EditGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2EditGroupRequest req = new GroupV2EditGroupRequest(588465L);            

            GroupV2EditGroupResponse res = sdk.groupV2.groupV2EditGroup(req, new GroupV2EditGroupSecurity("nam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2EditGroupMembership

Edit the membership type of a given member. You must have suitable permissions in the group to perform this operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2EditGroupMembershipRequest;
import org.openapis.openapi.models.operations.GroupV2EditGroupMembershipResponse;
import org.openapis.openapi.models.operations.GroupV2EditGroupMembershipSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2EditGroupMembershipRequest req = new GroupV2EditGroupMembershipRequest(659669L, 501324, 533206L, 956084);            

            GroupV2EditGroupMembershipResponse res = sdk.groupV2.groupV2EditGroupMembership(req, new GroupV2EditGroupMembershipSecurity("amet") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2EditOptionalConversation

Edit the settings of an optional conversation/chat channel. Requires admin permissions to the group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2EditOptionalConversationRequest;
import org.openapis.openapi.models.operations.GroupV2EditOptionalConversationResponse;
import org.openapis.openapi.models.operations.GroupV2EditOptionalConversationSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2EditOptionalConversationRequest req = new GroupV2EditOptionalConversationRequest(643990L, 394869L);            

            GroupV2EditOptionalConversationResponse res = sdk.groupV2.groupV2EditOptionalConversation(req, new GroupV2EditOptionalConversationSecurity("vel") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2GetAdminsAndFounderOfGroup

Get the list of members in a given group who are of admin level or higher.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2GetAdminsAndFounderOfGroupRequest;
import org.openapis.openapi.models.operations.GroupV2GetAdminsAndFounderOfGroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2GetAdminsAndFounderOfGroupRequest req = new GroupV2GetAdminsAndFounderOfGroupRequest(618809, 606393L);            

            GroupV2GetAdminsAndFounderOfGroupResponse res = sdk.groupV2.groupV2GetAdminsAndFounderOfGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2GetAvailableAvatars

Returns a list of all available group avatars for the signed-in user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2GetAvailableAvatarsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2GetAvailableAvatarsResponse res = sdk.groupV2.groupV2GetAvailableAvatars();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2GetAvailableThemes

Returns a list of all available group themes.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2GetAvailableThemesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2GetAvailableThemesResponse res = sdk.groupV2.groupV2GetAvailableThemes();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2GetBannedMembersOfGroup

Get the list of banned members in a given group. Only accessible to group Admins and above. Not applicable to all groups. Check group features.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2GetBannedMembersOfGroupRequest;
import org.openapis.openapi.models.operations.GroupV2GetBannedMembersOfGroupResponse;
import org.openapis.openapi.models.operations.GroupV2GetBannedMembersOfGroupSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2GetBannedMembersOfGroupRequest req = new GroupV2GetBannedMembersOfGroupRequest(474867, 19193L);            

            GroupV2GetBannedMembersOfGroupResponse res = sdk.groupV2.groupV2GetBannedMembersOfGroup(req, new GroupV2GetBannedMembersOfGroupSecurity("nihil") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2GetGroup

Get information about a specific group of the given ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2GetGroupRequest;
import org.openapis.openapi.models.operations.GroupV2GetGroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2GetGroupRequest req = new GroupV2GetGroupRequest(301575L);            

            GroupV2GetGroupResponse res = sdk.groupV2.groupV2GetGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2GetGroupByName

Get information about a specific group with the given name and type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2GetGroupByNameRequest;
import org.openapis.openapi.models.operations.GroupV2GetGroupByNameResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2GetGroupByNameRequest req = new GroupV2GetGroupByNameRequest("distinctio", 660174);            

            GroupV2GetGroupByNameResponse res = sdk.groupV2.groupV2GetGroupByName(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2GetGroupByNameV2

Get information about a specific group with the given name and type. The POST version.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2GetGroupByNameV2Response;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2GetGroupByNameV2Response res = sdk.groupV2.groupV2GetGroupByNameV2();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2GetGroupOptionalConversations

Gets a list of available optional conversation channels and their settings.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2GetGroupOptionalConversationsRequest;
import org.openapis.openapi.models.operations.GroupV2GetGroupOptionalConversationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2GetGroupOptionalConversationsRequest req = new GroupV2GetGroupOptionalConversationsRequest(287991L);            

            GroupV2GetGroupOptionalConversationsResponse res = sdk.groupV2.groupV2GetGroupOptionalConversations(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2GetGroupsForMember

Get information about the groups that a given member has joined.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2GetGroupsForMemberRequest;
import org.openapis.openapi.models.operations.GroupV2GetGroupsForMemberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2GetGroupsForMemberRequest req = new GroupV2GetGroupsForMemberRequest(290077, 383462, 618016L, 749170);            

            GroupV2GetGroupsForMemberResponse res = sdk.groupV2.groupV2GetGroupsForMember(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2GetInvitedIndividuals

Get the list of users who have been invited into the group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2GetInvitedIndividualsRequest;
import org.openapis.openapi.models.operations.GroupV2GetInvitedIndividualsResponse;
import org.openapis.openapi.models.operations.GroupV2GetInvitedIndividualsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2GetInvitedIndividualsRequest req = new GroupV2GetInvitedIndividualsRequest(428769, 878453L);            

            GroupV2GetInvitedIndividualsResponse res = sdk.groupV2.groupV2GetInvitedIndividuals(req, new GroupV2GetInvitedIndividualsSecurity("aspernatur") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2GetMembersOfGroup

Get the list of members in a given group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2GetMembersOfGroupRequest;
import org.openapis.openapi.models.operations.GroupV2GetMembersOfGroupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2GetMembersOfGroupRequest req = new GroupV2GetMembersOfGroupRequest(102863, 298282L) {{
                memberType = 92373;
                nameSearch = "excepturi";
            }};            

            GroupV2GetMembersOfGroupResponse res = sdk.groupV2.groupV2GetMembersOfGroup(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2GetPendingMemberships

Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2GetPendingMembershipsRequest;
import org.openapis.openapi.models.operations.GroupV2GetPendingMembershipsResponse;
import org.openapis.openapi.models.operations.GroupV2GetPendingMembershipsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2GetPendingMembershipsRequest req = new GroupV2GetPendingMembershipsRequest(354047, 590873L);            

            GroupV2GetPendingMembershipsResponse res = sdk.groupV2.groupV2GetPendingMemberships(req, new GroupV2GetPendingMembershipsSecurity("quos") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2GetPotentialGroupsForMember

Get information about the groups that a given member has applied to or been invited to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2GetPotentialGroupsForMemberRequest;
import org.openapis.openapi.models.operations.GroupV2GetPotentialGroupsForMemberResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2GetPotentialGroupsForMemberRequest req = new GroupV2GetPotentialGroupsForMemberRequest(574325, 33625, 653201L, 968962);            

            GroupV2GetPotentialGroupsForMemberResponse res = sdk.groupV2.groupV2GetPotentialGroupsForMember(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2GetRecommendedGroups

Gets groups recommended for you based on the groups to whom those you follow belong.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2GetRecommendedGroupsRequest;
import org.openapis.openapi.models.operations.GroupV2GetRecommendedGroupsResponse;
import org.openapis.openapi.models.operations.GroupV2GetRecommendedGroupsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2GetRecommendedGroupsRequest req = new GroupV2GetRecommendedGroupsRequest(652103, 320997);            

            GroupV2GetRecommendedGroupsResponse res = sdk.groupV2.groupV2GetRecommendedGroups(req, new GroupV2GetRecommendedGroupsSecurity("eum") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2GetUserClanInviteSetting

Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2GetUserClanInviteSettingRequest;
import org.openapis.openapi.models.operations.GroupV2GetUserClanInviteSettingResponse;
import org.openapis.openapi.models.operations.GroupV2GetUserClanInviteSettingSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2GetUserClanInviteSettingRequest req = new GroupV2GetUserClanInviteSettingRequest(221262);            

            GroupV2GetUserClanInviteSettingResponse res = sdk.groupV2.groupV2GetUserClanInviteSetting(req, new GroupV2GetUserClanInviteSettingSecurity("necessitatibus") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2GroupSearch

Search for Groups.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2GroupSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2GroupSearchResponse res = sdk.groupV2.groupV2GroupSearch();

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2IndividualGroupInvite

Invite a user to join this group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2IndividualGroupInviteRequest;
import org.openapis.openapi.models.operations.GroupV2IndividualGroupInviteResponse;
import org.openapis.openapi.models.operations.GroupV2IndividualGroupInviteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2IndividualGroupInviteRequest req = new GroupV2IndividualGroupInviteRequest(141264L, 367562L, 97260);            

            GroupV2IndividualGroupInviteResponse res = sdk.groupV2.groupV2IndividualGroupInvite(req, new GroupV2IndividualGroupInviteSecurity("iure") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2IndividualGroupInviteCancel

Cancels a pending invitation to join a group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2IndividualGroupInviteCancelRequest;
import org.openapis.openapi.models.operations.GroupV2IndividualGroupInviteCancelResponse;
import org.openapis.openapi.models.operations.GroupV2IndividualGroupInviteCancelSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2IndividualGroupInviteCancelRequest req = new GroupV2IndividualGroupInviteCancelRequest(984043L, 891924L, 260341);            

            GroupV2IndividualGroupInviteCancelResponse res = sdk.groupV2.groupV2IndividualGroupInviteCancel(req, new GroupV2IndividualGroupInviteCancelSecurity("maxime") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2KickMember

Kick a member from the given group, forcing them to reapply if they wish to re-join the group. You must have suitable permissions in the group to perform this operation.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2KickMemberRequest;
import org.openapis.openapi.models.operations.GroupV2KickMemberResponse;
import org.openapis.openapi.models.operations.GroupV2KickMemberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2KickMemberRequest req = new GroupV2KickMemberRequest(537023L, 703889L, 447926);            

            GroupV2KickMemberResponse res = sdk.groupV2.groupV2KickMember(req, new GroupV2KickMemberSecurity("architecto") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2RecoverGroupForFounder

Allows a founder to manually recover a group they can see in game but not on bungie.net

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2RecoverGroupForFounderRequest;
import org.openapis.openapi.models.operations.GroupV2RecoverGroupForFounderResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2RecoverGroupForFounderRequest req = new GroupV2RecoverGroupForFounderRequest(99569, 919483L, 352312);            

            GroupV2RecoverGroupForFounderResponse res = sdk.groupV2.groupV2RecoverGroupForFounder(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupV2UnbanMember

Unbans the requested member, allowing them to re-apply for membership.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupV2UnbanMemberRequest;
import org.openapis.openapi.models.operations.GroupV2UnbanMemberResponse;
import org.openapis.openapi.models.operations.GroupV2UnbanMemberSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GroupV2UnbanMemberRequest req = new GroupV2UnbanMemberRequest(714242L, 469249L, 998848);            

            GroupV2UnbanMemberResponse res = sdk.groupV2.groupV2UnbanMember(req, new GroupV2UnbanMemberSecurity("quibusdam") {{
                oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
