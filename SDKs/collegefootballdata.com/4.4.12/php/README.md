# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### betting

* `getLines` - Betting lines

### coaches

* `getCoaches` - Coaching records and history

### conferences

* `getConferences` - Conferences

### draft

* `getDraftPicks` - List of NFL Draft picks
* `getNFLPositions` - List of NFL positions
* `getNFLTeams` - List of NFL teams

### drives

* `getDrives` - Drive data and results

### games

* `getAdvancedBoxScore` - Advanced box scores
* `getCalendar` - Season calendar
* `getGameMedia` - Game media information and schedules
* `getGameWeather` - Game weather information (Patreon only)
* `getGames` - Games and results
* `getPlayerGameStats` - Player game stats
* `getScoreboard` - Live game results (Patreon only)
* `getTeamGameStats` - Team game stats
* `getTeamRecords` - Team records

### metrics

* `getGamePPA` - Team Predicated Points Added (PPA/EPA) by game
* `getPlayerGamePPA` - Player Predicated Points Added (PPA/EPA) broken down by game
* `getPlayerSeasonPPA` - Player Predicated Points Added (PPA/EPA) broken down by season
* `getPredictedPoints` - Predicted Points (i.e. Expected Points or EP)
* `getPregameWinProbabilities` - Pregame win probability data
* `getTeamPPA` - Predicted Points Added (PPA/EPA) data by team
* `getWinProbabilityData` - Win probability chart data

### players

* `getPlayerSeasonStats` - Player stats by season
* `getPlayerUsage` - Player usage metrics broken down by season
* `getReturningProduction` - Team returning production metrics
* `getTransferPortal` - Transfer portal by season
* `playerSearch` - Search for player information

### plays

* `getLivePlays` - Live metrics and PBP (Patreon only)
* `getPlayStatTypes` - Types of player play stats
* `getPlayStats` - Play stats by play
* `getPlayTypes` - Play types
* `getPlays` - Play by play data

### rankings

* `getRankings` - Historical polls and rankings

### ratings

* `getConferenceSPRatings` - Historical SP+ ratings by conference
* `getEloRatings` - Historical Elo ratings
* `getSPRatings` - Historical SP+ ratings
* `getSRSRatings` - Historical SRS ratings

### recruiting

* `getRecruitingGroups` - Recruit position group ratings
* `getRecruitingPlayers` - Player recruiting ratings and rankings
* `getRecruitingTeams` - Team recruiting rankings and ratings

### stats

* `getAdvancedTeamGameStats` - Advanced team metrics by game
* `getAdvancedTeamSeasonStats` - Advanced team metrics by season
* `getStatCategories` - Team stat categories
* `getTeamSeasonStats` - Team statistics by season

### teams

* `getFbsTeams` - FBS team list
* `getRoster` - Team rosters
* `getTalent` - Team talent composite rankings
* `getTeamMatchup` - Team matchup history
* `getTeams` - Team information

### venues

* `getVenues` - Arena and venue information
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
