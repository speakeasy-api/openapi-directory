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

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2AbdicateFoundershipRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2AbdicateFoundershipRequest();
    $request->founderIdNew = 647174;
    $request->groupId = 716327;
    $request->membershipType = 841386;

    $response = $sdk->groupV2->groupV2AbdicateFoundership($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2AddOptionalConversation

Add a new optional conversation/chat channel. Requires admin permissions to the group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2AddOptionalConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2AddOptionalConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2AddOptionalConversationRequest();
    $request->groupId = 289406;

    $requestSecurity = new GroupV2AddOptionalConversationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2AddOptionalConversation($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2ApproveAllPending

Approve all of the pending users for the given group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2ApproveAllPendingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2ApproveAllPendingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2ApproveAllPendingRequest();
    $request->groupId = 264730;

    $requestSecurity = new GroupV2ApproveAllPendingSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2ApproveAllPending($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2ApprovePending

Approve the given membershipId to join the group/clan as long as they have applied.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2ApprovePendingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2ApprovePendingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2ApprovePendingRequest();
    $request->groupId = 183191;
    $request->membershipId = 397821;
    $request->membershipType = 586513;

    $requestSecurity = new GroupV2ApprovePendingSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2ApprovePending($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2ApprovePendingForList

Approve all of the pending users for the given group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2ApprovePendingForListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2ApprovePendingForListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2ApprovePendingForListRequest();
    $request->groupId = 552822;

    $requestSecurity = new GroupV2ApprovePendingForListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2ApprovePendingForList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2BanMember

Bans the requested member from the requested group for the specified period of time.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2BanMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2BanMemberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2BanMemberRequest();
    $request->groupId = 20107;
    $request->membershipId = 164940;
    $request->membershipType = 828940;

    $requestSecurity = new GroupV2BanMemberSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2BanMember($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2DenyAllPending

Deny all of the pending users for the given group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2DenyAllPendingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2DenyAllPendingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2DenyAllPendingRequest();
    $request->groupId = 369808;

    $requestSecurity = new GroupV2DenyAllPendingSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2DenyAllPending($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2DenyPendingForList

Deny all of the pending users for the given group that match the passed-in .

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2DenyPendingForListRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2DenyPendingForListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2DenyPendingForListRequest();
    $request->groupId = 4695;

    $requestSecurity = new GroupV2DenyPendingForListSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2DenyPendingForList($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2EditClanBanner

Edit an existing group's clan banner. You must have suitable permissions in the group to perform this operation. All fields are required.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2EditClanBannerRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2EditClanBannerSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2EditClanBannerRequest();
    $request->groupId = 146441;

    $requestSecurity = new GroupV2EditClanBannerSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2EditClanBanner($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2EditFounderOptions

Edit group options only available to a founder. You must have suitable permissions in the group to perform this operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2EditFounderOptionsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2EditFounderOptionsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2EditFounderOptionsRequest();
    $request->groupId = 677817;

    $requestSecurity = new GroupV2EditFounderOptionsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2EditFounderOptions($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2EditGroup

Edit an existing group. You must have suitable permissions in the group to perform this operation. This latest revision will only edit the fields you pass in - pass null for properties you want to leave unaltered.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2EditGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2EditGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2EditGroupRequest();
    $request->groupId = 569618;

    $requestSecurity = new GroupV2EditGroupSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2EditGroup($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2EditGroupMembership

Edit the membership type of a given member. You must have suitable permissions in the group to perform this operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2EditGroupMembershipRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2EditGroupMembershipSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2EditGroupMembershipRequest();
    $request->groupId = 270008;
    $request->memberType = 703737;
    $request->membershipId = 735194;
    $request->membershipType = 288476;

    $requestSecurity = new GroupV2EditGroupMembershipSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2EditGroupMembership($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2EditOptionalConversation

Edit the settings of an optional conversation/chat channel. Requires admin permissions to the group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2EditOptionalConversationRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2EditOptionalConversationSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2EditOptionalConversationRequest();
    $request->conversationId = 962189;
    $request->groupId = 433288;

    $requestSecurity = new GroupV2EditOptionalConversationSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2EditOptionalConversation($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2GetAdminsAndFounderOfGroup

Get the list of members in a given group who are of admin level or higher.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2GetAdminsAndFounderOfGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2GetAdminsAndFounderOfGroupRequest();
    $request->currentpage = 248753;
    $request->groupId = 756107;

    $response = $sdk->groupV2->groupV2GetAdminsAndFounderOfGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2GetAvailableAvatars

Returns a list of all available group avatars for the signed-in user.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->groupV2->groupV2GetAvailableAvatars();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2GetAvailableThemes

Returns a list of all available group themes.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->groupV2->groupV2GetAvailableThemes();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2GetBannedMembersOfGroup

Get the list of banned members in a given group. Only accessible to group Admins and above. Not applicable to all groups. Check group features.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2GetBannedMembersOfGroupRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2GetBannedMembersOfGroupSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2GetBannedMembersOfGroupRequest();
    $request->currentpage = 576157;
    $request->groupId = 396098;

    $requestSecurity = new GroupV2GetBannedMembersOfGroupSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2GetBannedMembersOfGroup($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2GetGroup

Get information about a specific group of the given ID.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2GetGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2GetGroupRequest();
    $request->groupId = 592042;

    $response = $sdk->groupV2->groupV2GetGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2GetGroupByName

Get information about a specific group with the given name and type.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2GetGroupByNameRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2GetGroupByNameRequest();
    $request->groupName = 'necessitatibus';
    $request->groupType = 572252;

    $response = $sdk->groupV2->groupV2GetGroupByName($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2GetGroupByNameV2

Get information about a specific group with the given name and type. The POST version.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->groupV2->groupV2GetGroupByNameV2();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2GetGroupOptionalConversations

Gets a list of available optional conversation channels and their settings.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2GetGroupOptionalConversationsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2GetGroupOptionalConversationsRequest();
    $request->groupId = 638921;

    $response = $sdk->groupV2->groupV2GetGroupOptionalConversations($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2GetGroupsForMember

Get information about the groups that a given member has joined.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2GetGroupsForMemberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2GetGroupsForMemberRequest();
    $request->filter = 223081;
    $request->groupType = 891555;
    $request->membershipId = 952749;
    $request->membershipType = 680056;

    $response = $sdk->groupV2->groupV2GetGroupsForMember($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2GetInvitedIndividuals

Get the list of users who have been invited into the group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2GetInvitedIndividualsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2GetInvitedIndividualsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2GetInvitedIndividualsRequest();
    $request->currentpage = 447125;
    $request->groupId = 449198;

    $requestSecurity = new GroupV2GetInvitedIndividualsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2GetInvitedIndividuals($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2GetMembersOfGroup

Get the list of members in a given group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2GetMembersOfGroupRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2GetMembersOfGroupRequest();
    $request->currentpage = 846409;
    $request->groupId = 978571;
    $request->memberType = 699479;
    $request->nameSearch = 'dicta';

    $response = $sdk->groupV2->groupV2GetMembersOfGroup($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2GetPendingMemberships

Get the list of users who are awaiting a decision on their application to join a given group. Modified to include application info.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2GetPendingMembershipsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2GetPendingMembershipsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2GetPendingMembershipsRequest();
    $request->currentpage = 297437;
    $request->groupId = 767024;

    $requestSecurity = new GroupV2GetPendingMembershipsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2GetPendingMemberships($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2GetPotentialGroupsForMember

Get information about the groups that a given member has applied to or been invited to.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2GetPotentialGroupsForMemberRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2GetPotentialGroupsForMemberRequest();
    $request->filter = 813798;
    $request->groupType = 411820;
    $request->membershipId = 396506;
    $request->membershipType = 675439;

    $response = $sdk->groupV2->groupV2GetPotentialGroupsForMember($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2GetRecommendedGroups

Gets groups recommended for you based on the groups to whom those you follow belong.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2GetRecommendedGroupsRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2GetRecommendedGroupsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2GetRecommendedGroupsRequest();
    $request->createDateRange = 881104;
    $request->groupType = 249796;

    $requestSecurity = new GroupV2GetRecommendedGroupsSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2GetRecommendedGroups($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2GetUserClanInviteSetting

Gets the state of the user's clan invite preferences for a particular membership type - true if they wish to be invited to clans, false otherwise.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2GetUserClanInviteSettingRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2GetUserClanInviteSettingSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2GetUserClanInviteSettingRequest();
    $request->mType = 581273;

    $requestSecurity = new GroupV2GetUserClanInviteSettingSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2GetUserClanInviteSetting($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2GroupSearch

Search for Groups.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->groupV2->groupV2GroupSearch();

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2IndividualGroupInvite

Invite a user to join this group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2IndividualGroupInviteRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2IndividualGroupInviteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2IndividualGroupInviteRequest();
    $request->groupId = 313218;
    $request->membershipId = 881736;
    $request->membershipType = 965417;

    $requestSecurity = new GroupV2IndividualGroupInviteSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2IndividualGroupInvite($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2IndividualGroupInviteCancel

Cancels a pending invitation to join a group.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2IndividualGroupInviteCancelRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2IndividualGroupInviteCancelSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2IndividualGroupInviteCancelRequest();
    $request->groupId = 692532;
    $request->membershipId = 588465;
    $request->membershipType = 725255;

    $requestSecurity = new GroupV2IndividualGroupInviteCancelSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2IndividualGroupInviteCancel($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2KickMember

Kick a member from the given group, forcing them to reapply if they wish to re-join the group. You must have suitable permissions in the group to perform this operation.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2KickMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2KickMemberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2KickMemberRequest();
    $request->groupId = 659669;
    $request->membershipId = 501324;
    $request->membershipType = 533206;

    $requestSecurity = new GroupV2KickMemberSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2KickMember($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2RecoverGroupForFounder

Allows a founder to manually recover a group they can see in game but not on bungie.net

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2RecoverGroupForFounderRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2RecoverGroupForFounderRequest();
    $request->groupType = 956084;
    $request->membershipId = 230533;
    $request->membershipType = 643990;

    $response = $sdk->groupV2->groupV2RecoverGroupForFounder($request);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## groupV2UnbanMember

Unbans the requested member, allowing them to re-apply for membership.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2UnbanMemberRequest;
use \OpenAPI\OpenAPI\Models\Operations\GroupV2UnbanMemberSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GroupV2UnbanMemberRequest();
    $request->groupId = 394869;
    $request->membershipId = 423855;
    $request->membershipType = 618809;

    $requestSecurity = new GroupV2UnbanMemberSecurity();
    $requestSecurity->oauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->groupV2->groupV2UnbanMember($request, $requestSecurity);

    if ($response->body !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
