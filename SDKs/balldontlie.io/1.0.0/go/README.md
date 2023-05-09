# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/balldontlie.io/1.0.0/go
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
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Games.AllGamesExampleParameters(ctx, operations.AllGamesExampleParametersRequest{
        Seasons: sdk.String("2018"),
        TeamIds: sdk.String("1"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Games](docs/games/README.md)

* [AllGamesExampleParameters](docs/games/README.md#allgamesexampleparameters) - all games (example parameters)
* [SpecificGame](docs/games/README.md#specificgame) - specific game

### [Players](docs/players/README.md)

* [AllPlayersSearch](docs/players/README.md#allplayerssearch) - all players (search)
* [SpecificPlayer](docs/players/README.md#specificplayer) - specific player

### [Stats](docs/stats/README.md)

* [AllStatsExampleParameters](docs/stats/README.md#allstatsexampleparameters) - all stats (example parameters)

### [Teams](docs/teams/README.md)

* [AllTeams](docs/teams/README.md#allteams) - all teams
* [SpecificTeam](docs/teams/README.md#specificteam) - specific team
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
