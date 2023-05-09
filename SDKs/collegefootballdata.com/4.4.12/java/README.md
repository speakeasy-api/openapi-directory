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
import org.openapis.openapi.models.operations.GetLinesRequest;
import org.openapis.openapi.models.operations.GetLinesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKeyAuth = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetLinesRequest req = new GetLinesRequest() {{
                away = "provident";
                conference = "distinctio";
                gameId = 844266L;
                home = "unde";
                seasonType = "nulla";
                team = "corrupti";
                week = 847252L;
                year = 423655L;
            }};            

            GetLinesResponse res = sdk.betting.getLines(req);

            if (res.gameLines != null) {
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


### [betting](docs/betting/README.md)

* [getLines](docs/betting/README.md#getlines) - Betting lines

### [coaches](docs/coaches/README.md)

* [getCoaches](docs/coaches/README.md#getcoaches) - Coaching records and history

### [conferences](docs/conferences/README.md)

* [getConferences](docs/conferences/README.md#getconferences) - Conferences

### [draft](docs/draft/README.md)

* [getDraftPicks](docs/draft/README.md#getdraftpicks) - List of NFL Draft picks
* [getNFLPositions](docs/draft/README.md#getnflpositions) - List of NFL positions
* [getNFLTeams](docs/draft/README.md#getnflteams) - List of NFL teams

### [drives](docs/drives/README.md)

* [getDrives](docs/drives/README.md#getdrives) - Drive data and results

### [games](docs/games/README.md)

* [getAdvancedBoxScore](docs/games/README.md#getadvancedboxscore) - Advanced box scores
* [getCalendar](docs/games/README.md#getcalendar) - Season calendar
* [getGameMedia](docs/games/README.md#getgamemedia) - Game media information and schedules
* [getGameWeather](docs/games/README.md#getgameweather) - Game weather information (Patreon only)
* [getGames](docs/games/README.md#getgames) - Games and results
* [getPlayerGameStats](docs/games/README.md#getplayergamestats) - Player game stats
* [getScoreboard](docs/games/README.md#getscoreboard) - Live game results (Patreon only)
* [getTeamGameStats](docs/games/README.md#getteamgamestats) - Team game stats
* [getTeamRecords](docs/games/README.md#getteamrecords) - Team records

### [metrics](docs/metrics/README.md)

* [getGamePPA](docs/metrics/README.md#getgameppa) - Team Predicated Points Added (PPA/EPA) by game
* [getPlayerGamePPA](docs/metrics/README.md#getplayergameppa) - Player Predicated Points Added (PPA/EPA) broken down by game
* [getPlayerSeasonPPA](docs/metrics/README.md#getplayerseasonppa) - Player Predicated Points Added (PPA/EPA) broken down by season
* [getPredictedPoints](docs/metrics/README.md#getpredictedpoints) - Predicted Points (i.e. Expected Points or EP)
* [getPregameWinProbabilities](docs/metrics/README.md#getpregamewinprobabilities) - Pregame win probability data
* [getTeamPPA](docs/metrics/README.md#getteamppa) - Predicted Points Added (PPA/EPA) data by team
* [getWinProbabilityData](docs/metrics/README.md#getwinprobabilitydata) - Win probability chart data

### [players](docs/players/README.md)

* [getPlayerSeasonStats](docs/players/README.md#getplayerseasonstats) - Player stats by season
* [getPlayerUsage](docs/players/README.md#getplayerusage) - Player usage metrics broken down by season
* [getReturningProduction](docs/players/README.md#getreturningproduction) - Team returning production metrics
* [getTransferPortal](docs/players/README.md#gettransferportal) - Transfer portal by season
* [playerSearch](docs/players/README.md#playersearch) - Search for player information

### [plays](docs/plays/README.md)

* [getLivePlays](docs/plays/README.md#getliveplays) - Live metrics and PBP (Patreon only)
* [getPlayStatTypes](docs/plays/README.md#getplaystattypes) - Types of player play stats
* [getPlayStats](docs/plays/README.md#getplaystats) - Play stats by play
* [getPlayTypes](docs/plays/README.md#getplaytypes) - Play types
* [getPlays](docs/plays/README.md#getplays) - Play by play data

### [rankings](docs/rankings/README.md)

* [getRankings](docs/rankings/README.md#getrankings) - Historical polls and rankings

### [ratings](docs/ratings/README.md)

* [getConferenceSPRatings](docs/ratings/README.md#getconferencespratings) - Historical SP+ ratings by conference
* [getEloRatings](docs/ratings/README.md#geteloratings) - Historical Elo ratings
* [getSPRatings](docs/ratings/README.md#getspratings) - Historical SP+ ratings
* [getSRSRatings](docs/ratings/README.md#getsrsratings) - Historical SRS ratings

### [recruiting](docs/recruiting/README.md)

* [getRecruitingGroups](docs/recruiting/README.md#getrecruitinggroups) - Recruit position group ratings
* [getRecruitingPlayers](docs/recruiting/README.md#getrecruitingplayers) - Player recruiting ratings and rankings
* [getRecruitingTeams](docs/recruiting/README.md#getrecruitingteams) - Team recruiting rankings and ratings

### [stats](docs/stats/README.md)

* [getAdvancedTeamGameStats](docs/stats/README.md#getadvancedteamgamestats) - Advanced team metrics by game
* [getAdvancedTeamSeasonStats](docs/stats/README.md#getadvancedteamseasonstats) - Advanced team metrics by season
* [getStatCategories](docs/stats/README.md#getstatcategories) - Team stat categories
* [getTeamSeasonStats](docs/stats/README.md#getteamseasonstats) - Team statistics by season

### [teams](docs/teams/README.md)

* [getFbsTeams](docs/teams/README.md#getfbsteams) - FBS team list
* [getRoster](docs/teams/README.md#getroster) - Team rosters
* [getTalent](docs/teams/README.md#gettalent) - Team talent composite rankings
* [getTeamMatchup](docs/teams/README.md#getteammatchup) - Team matchup history
* [getTeams](docs/teams/README.md#getteams) - Team information

### [venues](docs/venues/README.md)

* [getVenues](docs/venues/README.md#getvenues) - Arena and venue information
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
