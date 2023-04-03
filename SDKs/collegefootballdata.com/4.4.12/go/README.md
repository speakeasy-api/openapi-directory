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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKeyAuth: "YOUR_API_KEY_HERE",
        }),
    )

    req := operations.GetLinesRequest{
        Away: "corrupti",
        Conference: "provident",
        GameID: 715190,
        Home: "quibusdam",
        SeasonType: "unde",
        Team: "nulla",
        Week: 544883,
        Year: 847252,
    }

    ctx := context.Background()
    res, err := s.Betting.GetLines(ctx, req)
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


### Betting

* `GetLines` - Betting lines

### Coaches

* `GetCoaches` - Coaching records and history

### Conferences

* `GetConferences` - Conferences

### Draft

* `GetDraftPicks` - List of NFL Draft picks
* `GetNFLPositions` - List of NFL positions
* `GetNFLTeams` - List of NFL teams

### Drives

* `GetDrives` - Drive data and results

### Games

* `GetAdvancedBoxScore` - Advanced box scores
* `GetCalendar` - Season calendar
* `GetGameMedia` - Game media information and schedules
* `GetGameWeather` - Game weather information (Patreon only)
* `GetGames` - Games and results
* `GetPlayerGameStats` - Player game stats
* `GetScoreboard` - Live game results (Patreon only)
* `GetTeamGameStats` - Team game stats
* `GetTeamRecords` - Team records

### Metrics

* `GetGamePPA` - Team Predicated Points Added (PPA/EPA) by game
* `GetPlayerGamePPA` - Player Predicated Points Added (PPA/EPA) broken down by game
* `GetPlayerSeasonPPA` - Player Predicated Points Added (PPA/EPA) broken down by season
* `GetPredictedPoints` - Predicted Points (i.e. Expected Points or EP)
* `GetPregameWinProbabilities` - Pregame win probability data
* `GetTeamPPA` - Predicted Points Added (PPA/EPA) data by team
* `GetWinProbabilityData` - Win probability chart data

### Players

* `GetPlayerSeasonStats` - Player stats by season
* `GetPlayerUsage` - Player usage metrics broken down by season
* `GetReturningProduction` - Team returning production metrics
* `GetTransferPortal` - Transfer portal by season
* `PlayerSearch` - Search for player information

### Plays

* `GetLivePlays` - Live metrics and PBP (Patreon only)
* `GetPlayStatTypes` - Types of player play stats
* `GetPlayStats` - Play stats by play
* `GetPlayTypes` - Play types
* `GetPlays` - Play by play data

### Rankings

* `GetRankings` - Historical polls and rankings

### Ratings

* `GetConferenceSPRatings` - Historical SP+ ratings by conference
* `GetEloRatings` - Historical Elo ratings
* `GetSPRatings` - Historical SP+ ratings
* `GetSRSRatings` - Historical SRS ratings

### Recruiting

* `GetRecruitingGroups` - Recruit position group ratings
* `GetRecruitingPlayers` - Player recruiting ratings and rankings
* `GetRecruitingTeams` - Team recruiting rankings and ratings

### Stats

* `GetAdvancedTeamGameStats` - Advanced team metrics by game
* `GetAdvancedTeamSeasonStats` - Advanced team metrics by season
* `GetStatCategories` - Team stat categories
* `GetTeamSeasonStats` - Team statistics by season

### Teams

* `GetFbsTeams` - FBS team list
* `GetRoster` - Team rosters
* `GetTalent` - Team talent composite rankings
* `GetTeamMatchup` - Team matchup history
* `GetTeams` - Team information

### Venues

* `GetVenues` - Arena and venue information
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
