# user

## Overview

Flat users

### Available Operations

* [gerUserLikes](#geruserlikes) - List liked scores
* [getUser](#getuser) - Get a public user profile
* [getUserScores](#getuserscores) - List user's scores

## gerUserLikes

List liked scores

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GerUserLikesRequest;
import org.openapis.openapi.models.operations.GerUserLikesResponse;
import org.openapis.openapi.models.operations.GerUserLikesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GerUserLikesRequest req = new GerUserLikesRequest("assumenda") {{
                ids = false;
            }};            

            GerUserLikesResponse res = sdk.user.gerUserLikes(req, new GerUserLikesSecurity("nulla") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUser

Get a public profile of a Flat User.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserRequest;
import org.openapis.openapi.models.operations.GetUserResponse;
import org.openapis.openapi.models.operations.GetUserSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserRequest req = new GetUserRequest("voluptas");            

            GetUserResponse res = sdk.user.getUser(req, new GetUserSecurity("libero") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userPublic != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getUserScores

Get the list of public scores owned by a User.

**DEPRECATED**: Please note that the current behavior will be deprecrated on **2019-01-01**.
This method will no longer list private and shared scores, but only public scores of a Flat account.
If you want to access to private scores, please use the [Collections API](#tag/Collection) instead.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetUserScoresRequest;
import org.openapis.openapi.models.operations.GetUserScoresResponse;
import org.openapis.openapi.models.operations.GetUserScoresSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetUserScoresRequest req = new GetUserScoresRequest("quasi") {{
                parent = "tempora";
            }};            

            GetUserScoresResponse res = sdk.user.getUserScores(req, new GetUserScoresSecurity("numquam") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.scoreDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
