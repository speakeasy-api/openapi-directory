# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllGamesExampleParametersRequest;
import org.openapis.openapi.models.operations.AllGamesExampleParametersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AllGamesExampleParametersRequest req = new AllGamesExampleParametersRequest() {{
                seasons = "2018";
                teamIds = "1";
            }};            

            AllGamesExampleParametersResponse res = sdk.games.allGamesExampleParameters(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [games](docs/games/README.md)

* [allGamesExampleParameters](docs/games/README.md#allgamesexampleparameters) - all games (example parameters)
* [specificGame](docs/games/README.md#specificgame) - specific game

### [players](docs/players/README.md)

* [allPlayersSearch](docs/players/README.md#allplayerssearch) - all players (search)
* [specificPlayer](docs/players/README.md#specificplayer) - specific player

### [stats](docs/stats/README.md)

* [allStatsExampleParameters](docs/stats/README.md#allstatsexampleparameters) - all stats (example parameters)

### [teams](docs/teams/README.md)

* [allTeams](docs/teams/README.md#allteams) - all teams
* [specificTeam](docs/teams/README.md#specificteam) - specific team
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
