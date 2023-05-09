# teams

## Overview

Team information

### Available Operations

* [getFbsTeams](#getfbsteams) - FBS team list
* [getRoster](#getroster) - Team rosters
* [getTalent](#gettalent) - Team talent composite rankings
* [getTeamMatchup](#getteammatchup) - Team matchup history
* [getTeams](#getteams) - Team information

## getFbsTeams

Information on major division teams

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetFbsTeamsRequest;
import org.openapis.openapi.models.operations.GetFbsTeamsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetFbsTeamsRequest req = new GetFbsTeamsRequest() {{
                year = 313218L;
            }};            

            GetFbsTeamsResponse res = sdk.teams.getFbsTeams(req);

            if (res.teams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRoster

Roster data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRosterRequest;
import org.openapis.openapi.models.operations.GetRosterResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRosterRequest req = new GetRosterRequest() {{
                team = "delectus";
                year = 692532L;
            }};            

            GetRosterResponse res = sdk.teams.getRoster(req);

            if (res.players != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTalent

Team talent composite

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTalentRequest;
import org.openapis.openapi.models.operations.GetTalentResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("provident") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTalentRequest req = new GetTalentRequest() {{
                year = 725255L;
            }};            

            GetTalentResponse res = sdk.teams.getTalent(req);

            if (res.teamTalents != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeamMatchup

Matchup history

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamMatchupRequest;
import org.openapis.openapi.models.operations.GetTeamMatchupResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTeamMatchupRequest req = new GetTeamMatchupRequest("blanditiis", "deleniti") {{
                maxYear = 956084L;
                minYear = 230533L;
            }};            

            GetTeamMatchupResponse res = sdk.teams.getTeamMatchup(req);

            if (res.teamMatchup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTeams

Get team information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTeamsRequest;
import org.openapis.openapi.models.operations.GetTeamsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTeamsRequest req = new GetTeamsRequest() {{
                conference = "nisi";
            }};            

            GetTeamsResponse res = sdk.teams.getTeams(req);

            if (res.teams != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
