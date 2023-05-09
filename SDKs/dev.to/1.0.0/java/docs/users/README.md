# users

### Available Operations

* [getOrgUsers](#getorgusers) - Organization's users
* [getUser](#getuser) - A User
* [getUserAllArticles](#getuserallarticles) - User's all articles
* [getUserArticles](#getuserarticles) - User's articles
* [getUserMe](#getuserme) - The authenticated user
* [getUserPublishedArticles](#getuserpublishedarticles) - User's published articles
* [getUserUnpublishedArticles](#getuserunpublishedarticles) - User's unpublished articles
* [postAdminUsersCreate](#postadminuserscreate) - Invite a User
* [suspendUser](#suspenduser) - Suspend a User
* [unpublishUser](#unpublishuser) - Unpublish a User's Articles and Comments

## getOrgUsers

This endpoint allows the client to retrieve a list of users belonging to the organization

It supports pagination, each page will contain `30` users by default.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrgUsersRequest;
import org.openapis.openapi.models.operations.GetOrgUsersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetOrgUsersRequest req = new GetOrgUsersRequest("commodi") {{
                page = 918236;
                perPage = 64147;
            }};            

            GetOrgUsersResponse res = sdk.users.getOrgUsers(req);

            if (res.users != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUser

This endpoint allows the client to retrieve a single user, either by id
or by the user's username.

For complete documentation, see the v0 API docs: https://developers.forem.com/api/v0#tag/users/operation/getUser

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserRequest;
import org.openapis.openapi.models.operations.GetUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserRequest req = new GetUserRequest("quidem");            

            GetUserResponse res = sdk.users.getUser(req);

            if (res.getUser200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserAllArticles

This endpoint allows the client to retrieve a list of all articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

It will return both published and unpublished articles with pagination.

Unpublished articles will be at the top of the list in reverse chronological creation order. Published articles will follow in reverse chronological publication order.

By default a page will contain 30 articles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserAllArticlesRequest;
import org.openapis.openapi.models.operations.GetUserAllArticlesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestias") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserAllArticlesRequest req = new GetUserAllArticlesRequest() {{
                page = 566602;
                perPage = 865103;
            }};            

            GetUserAllArticlesResponse res = sdk.users.getUserAllArticles(req);

            if (res.articleIndices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserArticles

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Published articles will be in reverse chronological publication order.

It will return published articles with pagination. By default a page will contain 30 articles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserArticlesRequest;
import org.openapis.openapi.models.operations.GetUserArticlesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserArticlesRequest req = new GetUserArticlesRequest() {{
                page = 508969;
                perPage = 523248;
            }};            

            GetUserArticlesResponse res = sdk.users.getUserArticles(req);

            if (res.articleIndices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserMe

This endpoint allows the client to retrieve information about the authenticated user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserMeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptates") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserMeResponse res = sdk.users.getUserMe();

            if (res.getUserMe200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserPublishedArticles

This endpoint allows the client to retrieve a list of published articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Published articles will be in reverse chronological publication order.

It will return published articles with pagination. By default a page will contain 30 articles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserPublishedArticlesRequest;
import org.openapis.openapi.models.operations.GetUserPublishedArticlesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quasi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserPublishedArticlesRequest req = new GetUserPublishedArticlesRequest() {{
                page = 921158;
                perPage = 575947;
            }};            

            GetUserPublishedArticlesResponse res = sdk.users.getUserPublishedArticles(req);

            if (res.articleIndices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserUnpublishedArticles

This endpoint allows the client to retrieve a list of unpublished articles on behalf of an authenticated user.

"Articles" are all the posts that users create on DEV that typically show up in the feed. They can be a blog post, a discussion question, a help thread etc. but is referred to as article within the code.

Unpublished articles will be in reverse chronological creation order.

It will return unpublished articles with pagination. By default a page will contain 30 articles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserUnpublishedArticlesRequest;
import org.openapis.openapi.models.operations.GetUserUnpublishedArticlesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetUserUnpublishedArticlesRequest req = new GetUserUnpublishedArticlesRequest() {{
                page = 929297;
                perPage = 277718;
            }};            

            GetUserUnpublishedArticlesResponse res = sdk.users.getUserUnpublishedArticles(req);

            if (res.articleIndices != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAdminUsersCreate

This endpoint allows the client to trigger an invitation to the provided email address.

        It requires a token from a user with `super_admin` privileges.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAdminUsersCreateResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserInviteParam;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.UserInviteParam req = new UserInviteParam() {{
                email = "Marc64@gmail.com";
                name = "Marty Green";
            }};            

            PostAdminUsersCreateResponse res = sdk.users.postAdminUsersCreate(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## suspendUser

This endpoint allows the client to suspend a user.

The user associated with the API key must have any 'admin' or 'moderator' role.

This specified user will be assigned the 'suspended' role. Suspending a user will stop the
user from posting new posts and comments. It doesn't delete any of the user's content, just
prevents them from creating new content while suspended. Users are not notified of their suspension
in the UI, so if you want them to know about this, you must notify them.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SuspendUserRequest;
import org.openapis.openapi.models.operations.SuspendUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SuspendUserRequest req = new SuspendUserRequest(586513);            

            SuspendUserResponse res = sdk.users.suspendUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unpublishUser

This endpoint allows the client to unpublish all of the articles and
comments created by a user.

The user associated with the API key must have any 'admin' or 'moderator' role.

This specified user's articles and comments will be unpublished and will no longer be
visible to the public. They will remain in the database and will set back to draft status
on the specified user's  dashboard. Any notifications associated with the specified user's
articles and comments will be deleted.

Note this endpoint unpublishes articles and comments asychronously: it will return a 204 NO CONTENT
status code immediately, but the articles and comments will not be unpublished until the
request is completed on the server.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnpublishUserRequest;
import org.openapis.openapi.models.operations.UnpublishUserResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnpublishUserRequest req = new UnpublishUserRequest(20107);            

            UnpublishUserResponse res = sdk.users.unpublishUser(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
