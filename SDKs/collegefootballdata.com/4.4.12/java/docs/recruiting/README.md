# recruiting

## Overview

Recruiting rankings and data

### Available Operations

* [getRecruitingGroups](#getrecruitinggroups) - Recruit position group ratings
* [getRecruitingPlayers](#getrecruitingplayers) - Player recruiting ratings and rankings
* [getRecruitingTeams](#getrecruitingteams) - Team recruiting rankings and ratings

## getRecruitingGroups

Gets a list of aggregated statistics by team and position grouping

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecruitingGroupsRequest;
import org.openapis.openapi.models.operations.GetRecruitingGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRecruitingGroupsRequest req = new GetRecruitingGroupsRequest() {{
                conference = "facilis";
                endYear = 735194L;
                startYear = 288476L;
                team = "delectus";
            }};            

            GetRecruitingGroupsResponse res = sdk.recruiting.getRecruitingGroups(req);

            if (res.positionGroupRecruitingRatings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRecruitingPlayers

Get player recruiting rankings and data. Requires either a year or team to be specified.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecruitingPlayersRequest;
import org.openapis.openapi.models.operations.GetRecruitingPlayersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eum") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRecruitingPlayersRequest req = new GetRecruitingPlayersRequest() {{
                classification = "non";
                position = "eligendi";
                state = "sint";
                team = "aliquid";
                year = 592042L;
            }};            

            GetRecruitingPlayersResponse res = sdk.recruiting.getRecruitingPlayers(req);

            if (res.recruits != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRecruitingTeams

Team recruiting rankings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRecruitingTeamsRequest;
import org.openapis.openapi.models.operations.GetRecruitingTeamsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("necessitatibus") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRecruitingTeamsRequest req = new GetRecruitingTeamsRequest() {{
                team = "sint";
                year = 638921L;
            }};            

            GetRecruitingTeamsResponse res = sdk.recruiting.getRecruitingTeams(req);

            if (res.teamRecruitingRanks != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
