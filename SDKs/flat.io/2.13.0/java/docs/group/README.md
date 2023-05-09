# group

## Overview

Flat Groups

### Available Operations

* [getGroupDetails](#getgroupdetails) - Get group information
* [getGroupScores](#getgroupscores) - List group's scores
* [listGroupUsers](#listgroupusers) - List group's users

## getGroupDetails

Get group information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupDetailsRequest;
import org.openapis.openapi.models.operations.GetGroupDetailsResponse;
import org.openapis.openapi.models.operations.GetGroupDetailsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGroupDetailsRequest req = new GetGroupDetailsRequest("maiores");            

            GetGroupDetailsResponse res = sdk.group.getGroupDetails(req, new GetGroupDetailsSecurity("rerum") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.groupDetails != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroupScores

Get the list of scores shared with a group.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupScoresRequest;
import org.openapis.openapi.models.operations.GetGroupScoresResponse;
import org.openapis.openapi.models.operations.GetGroupScoresSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGroupScoresRequest req = new GetGroupScoresRequest("dicta") {{
                parent = "magnam";
            }};            

            GetGroupScoresResponse res = sdk.group.getGroupScores(req, new GetGroupScoresSecurity("cumque") {{
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

## listGroupUsers

List group's users

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGroupUsersRequest;
import org.openapis.openapi.models.operations.ListGroupUsersResponse;
import org.openapis.openapi.models.operations.ListGroupUsersSecurity;
import org.openapis.openapi.models.operations.ListGroupUsersSourceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListGroupUsersRequest req = new ListGroupUsersRequest("facere") {{
                source = ListGroupUsersSourceEnum.MICROSOFT_GRAPH;
            }};            

            ListGroupUsersResponse res = sdk.group.listGroupUsers(req, new ListGroupUsersSecurity("aliquid") {{
                oAuth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
            }});

            if (res.userPublics != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
