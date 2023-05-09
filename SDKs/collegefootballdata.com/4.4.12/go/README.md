# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/collegefootballdata.com/4.4.12/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.Betting.GetLines(ctx, operations.GetLinesRequest{
        Away: sdk.String("corrupti"),
        Conference: sdk.String("provident"),
        GameID: sdk.Int64(715190),
        Home: sdk.String("quibusdam"),
        SeasonType: sdk.String("unde"),
        Team: sdk.String("nulla"),
        Week: sdk.Int64(544883),
        Year: sdk.Int64(847252),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.GameLines != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Betting](docs/betting/README.md)

* [GetLines](docs/betting/README.md#getlines) - Betting lines

### [Coaches](docs/coaches/README.md)

* [GetCoaches](docs/coaches/README.md#getcoaches) - Coaching records and history

### [Conferences](docs/conferences/README.md)

* [GetConferences](docs/conferences/README.md#getconferences) - Conferences

### [Draft](docs/draft/README.md)

* [GetDraftPicks](docs/draft/README.md#getdraftpicks) - List of NFL Draft picks
* [GetNFLPositions](docs/draft/README.md#getnflpositions) - List of NFL positions
* [GetNFLTeams](docs/draft/README.md#getnflteams) - List of NFL teams

### [Drives](docs/drives/README.md)

* [GetDrives](docs/drives/README.md#getdrives) - Drive data and results

### [Games](docs/games/README.md)

* [GetAdvancedBoxScore](docs/games/README.md#getadvancedboxscore) - Advanced box scores
* [GetCalendar](docs/games/README.md#getcalendar) - Season calendar
* [GetGameMedia](docs/games/README.md#getgamemedia) - Game media information and schedules
* [GetGameWeather](docs/games/README.md#getgameweather) - Game weather information (Patreon only)
* [GetGames](docs/games/README.md#getgames) - Games and results
* [GetPlayerGameStats](docs/games/README.md#getplayergamestats) - Player game stats
* [GetScoreboard](docs/games/README.md#getscoreboard) - Live game results (Patreon only)
* [GetTeamGameStats](docs/games/README.md#getteamgamestats) - Team game stats
* [GetTeamRecords](docs/games/README.md#getteamrecords) - Team records

### [Metrics](docs/metrics/README.md)

* [GetGamePPA](docs/metrics/README.md#getgameppa) - Team Predicated Points Added (PPA/EPA) by game
* [GetPlayerGamePPA](docs/metrics/README.md#getplayergameppa) - Player Predicated Points Added (PPA/EPA) broken down by game
* [GetPlayerSeasonPPA](docs/metrics/README.md#getplayerseasonppa) - Player Predicated Points Added (PPA/EPA) broken down by season
* [GetPredictedPoints](docs/metrics/README.md#getpredictedpoints) - Predicted Points (i.e. Expected Points or EP)
* [GetPregameWinProbabilities](docs/metrics/README.md#getpregamewinprobabilities) - Pregame win probability data
* [GetTeamPPA](docs/metrics/README.md#getteamppa) - Predicted Points Added (PPA/EPA) data by team
* [GetWinProbabilityData](docs/metrics/README.md#getwinprobabilitydata) - Win probability chart data

### [Players](docs/players/README.md)

* [GetPlayerSeasonStats](docs/players/README.md#getplayerseasonstats) - Player stats by season
* [GetPlayerUsage](docs/players/README.md#getplayerusage) - Player usage metrics broken down by season
* [GetReturningProduction](docs/players/README.md#getreturningproduction) - Team returning production metrics
* [GetTransferPortal](docs/players/README.md#gettransferportal) - Transfer portal by season
* [PlayerSearch](docs/players/README.md#playersearch) - Search for player information

### [Plays](docs/plays/README.md)

* [GetLivePlays](docs/plays/README.md#getliveplays) - Live metrics and PBP (Patreon only)
* [GetPlayStatTypes](docs/plays/README.md#getplaystattypes) - Types of player play stats
* [GetPlayStats](docs/plays/README.md#getplaystats) - Play stats by play
* [GetPlayTypes](docs/plays/README.md#getplaytypes) - Play types
* [GetPlays](docs/plays/README.md#getplays) - Play by play data

### [Rankings](docs/rankings/README.md)

* [GetRankings](docs/rankings/README.md#getrankings) - Historical polls and rankings

### [Ratings](docs/ratings/README.md)

* [GetConferenceSPRatings](docs/ratings/README.md#getconferencespratings) - Historical SP+ ratings by conference
* [GetEloRatings](docs/ratings/README.md#geteloratings) - Historical Elo ratings
* [GetSPRatings](docs/ratings/README.md#getspratings) - Historical SP+ ratings
* [GetSRSRatings](docs/ratings/README.md#getsrsratings) - Historical SRS ratings

### [Recruiting](docs/recruiting/README.md)

* [GetRecruitingGroups](docs/recruiting/README.md#getrecruitinggroups) - Recruit position group ratings
* [GetRecruitingPlayers](docs/recruiting/README.md#getrecruitingplayers) - Player recruiting ratings and rankings
* [GetRecruitingTeams](docs/recruiting/README.md#getrecruitingteams) - Team recruiting rankings and ratings

### [Stats](docs/stats/README.md)

* [GetAdvancedTeamGameStats](docs/stats/README.md#getadvancedteamgamestats) - Advanced team metrics by game
* [GetAdvancedTeamSeasonStats](docs/stats/README.md#getadvancedteamseasonstats) - Advanced team metrics by season
* [GetStatCategories](docs/stats/README.md#getstatcategories) - Team stat categories
* [GetTeamSeasonStats](docs/stats/README.md#getteamseasonstats) - Team statistics by season

### [Teams](docs/teams/README.md)

* [GetFbsTeams](docs/teams/README.md#getfbsteams) - FBS team list
* [GetRoster](docs/teams/README.md#getroster) - Team rosters
* [GetTalent](docs/teams/README.md#gettalent) - Team talent composite rankings
* [GetTeamMatchup](docs/teams/README.md#getteammatchup) - Team matchup history
* [GetTeams](docs/teams/README.md#getteams) - Team information

### [Venues](docs/venues/README.md)

* [GetVenues](docs/venues/README.md#getvenues) - Arena and venue information
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
