# social

## Overview

social

### Available Operations

* [socialAcceptFriendRequest](#socialacceptfriendrequest) - Accepts a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
* [socialDeclineFriendRequest](#socialdeclinefriendrequest) - Declines a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.
* [socialGetFriendList](#socialgetfriendlist) - Returns your Bungie Friend list
* [socialGetFriendRequestList](#socialgetfriendrequestlist) - Returns your friend request queue.
* [socialGetPlatformFriendList](#socialgetplatformfriendlist) - Gets the platform friend of the requested type, with additional information if they have Bungie accounts. Must have a recent login session with said platform.
* [socialIssueFriendRequest](#socialissuefriendrequest) - Requests a friend relationship with the target user. Any of the target user's linked membership ids are valid inputs.
* [socialRemoveFriend](#socialremovefriend) - Remove a friend relationship with the target user. The user must be on your friend list, though no error will occur if they are not.
* [socialRemoveFriendRequest](#socialremovefriendrequest) - Remove a friend relationship with the target user. The user must be on your outgoing request friend list, though no error will occur if they are not.

## socialAcceptFriendRequest

Accepts a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SocialAcceptFriendRequestRequest;
import org.openapis.openapi.models.operations.SocialAcceptFriendRequestResponse;
import org.openapis.openapi.models.operations.SocialAcceptFriendRequestSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SocialAcceptFriendRequestRequest req = new SocialAcceptFriendRequestRequest("ipsam");            

            SocialAcceptFriendRequestResponse res = sdk.social.socialAcceptFriendRequest(req, new SocialAcceptFriendRequestSecurity("voluptate") {{
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

## socialDeclineFriendRequest

Declines a friend relationship with the target user. The user must be on your incoming friend request list, though no error will occur if they are not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SocialDeclineFriendRequestRequest;
import org.openapis.openapi.models.operations.SocialDeclineFriendRequestResponse;
import org.openapis.openapi.models.operations.SocialDeclineFriendRequestSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SocialDeclineFriendRequestRequest req = new SocialDeclineFriendRequestRequest("autem");            

            SocialDeclineFriendRequestResponse res = sdk.social.socialDeclineFriendRequest(req, new SocialDeclineFriendRequestSecurity("nam") {{
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

## socialGetFriendList

Returns your Bungie Friend list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SocialGetFriendListResponse;
import org.openapis.openapi.models.operations.SocialGetFriendListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SocialGetFriendListResponse res = sdk.social.socialGetFriendList(new SocialGetFriendListSecurity("eaque") {{
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

## socialGetFriendRequestList

Returns your friend request queue.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SocialGetFriendRequestListResponse;
import org.openapis.openapi.models.operations.SocialGetFriendRequestListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SocialGetFriendRequestListResponse res = sdk.social.socialGetFriendRequestList(new SocialGetFriendRequestListSecurity("pariatur") {{
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

## socialGetPlatformFriendList

Gets the platform friend of the requested type, with additional information if they have Bungie accounts. Must have a recent login session with said platform.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SocialGetPlatformFriendListRequest;
import org.openapis.openapi.models.operations.SocialGetPlatformFriendListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SocialGetPlatformFriendListRequest req = new SocialGetPlatformFriendListRequest(365496, "voluptatibus");            

            SocialGetPlatformFriendListResponse res = sdk.social.socialGetPlatformFriendList(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## socialIssueFriendRequest

Requests a friend relationship with the target user. Any of the target user's linked membership ids are valid inputs.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SocialIssueFriendRequestRequest;
import org.openapis.openapi.models.operations.SocialIssueFriendRequestResponse;
import org.openapis.openapi.models.operations.SocialIssueFriendRequestSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SocialIssueFriendRequestRequest req = new SocialIssueFriendRequestRequest("perferendis");            

            SocialIssueFriendRequestResponse res = sdk.social.socialIssueFriendRequest(req, new SocialIssueFriendRequestSecurity("fugiat") {{
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

## socialRemoveFriend

Remove a friend relationship with the target user. The user must be on your friend list, though no error will occur if they are not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SocialRemoveFriendRequest;
import org.openapis.openapi.models.operations.SocialRemoveFriendResponse;
import org.openapis.openapi.models.operations.SocialRemoveFriendSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SocialRemoveFriendRequest req = new SocialRemoveFriendRequest("amet");            

            SocialRemoveFriendResponse res = sdk.social.socialRemoveFriend(req, new SocialRemoveFriendSecurity("aut") {{
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

## socialRemoveFriendRequest

Remove a friend relationship with the target user. The user must be on your outgoing request friend list, though no error will occur if they are not.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SocialRemoveFriendRequestRequest;
import org.openapis.openapi.models.operations.SocialRemoveFriendRequestResponse;
import org.openapis.openapi.models.operations.SocialRemoveFriendRequestSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SocialRemoveFriendRequestRequest req = new SocialRemoveFriendRequestRequest("cumque");            

            SocialRemoveFriendRequestResponse res = sdk.social.socialRemoveFriendRequest(req, new SocialRemoveFriendRequestSecurity("corporis") {{
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
