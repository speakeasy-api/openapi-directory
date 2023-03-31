# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/etmdb.com/1.0.0/go
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
    s := sdk.New()

    req := operations.CinemaSearchReadRequest{
        ID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.Cinema.CinemaSearchRead(ctx, req)
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


### Cinema

* `CinemaSearchRead` - Return cinema search result

### CinemaDetail

* `CinemaDetailSearchRead` - Return cinema details search result

### CinemaSchedule

* `CinemaScheduleSearchRead` - Return cinema schedule search result
* `CinemaScheduleSearchallRead` - Return cinema schedule search result

### CinemaSheduleShowtime

* `CinemaSheduleShowtimeSearchRead` - Return cinema schedule and showtime search result
* `CinemaSheduleShowtimeSearchallRead` - Return cinema schedule and showtime search result

### Company

* `CompanySearchRead` - Return company search result

### CompanyCredits

* `CompanyCreditsSearchRead` - Return company credits search result
* `CompanyCreditsSearchallRead` - Return company credits search result

### Filmography

* `FilmographySearchRead` - Return filmography search result
* `FilmographySearchallRead` - Return filmography search result

### FilmographyType

* `FilmographyTypeSearchRead` - Return filmography type search result

### Genre

* `GenreSearchRead` - Return movie genre search result
* `GenreSearchallRead` - Return movie genre search result

### GenreType

* `GenreTypeSearchRead` - Return genre type search result

### Job

* `JobSearchRead` - Return job details search result
* `JobSearchallRead` - Return job details search result

### Media

* `MediaSearchRead` - Return movie media search result
* `MediaSearchallRead` - Return cast media search result

### Movie

* `MovieSearchRead` - Return movie search result

### MovieCast

* `MovieCastSearchRead` - Return movie cast search result
* `MovieCastSearchallRead` - Return movie cast search result

### News

* `NewsSearchRead` - Return news or article search result

### People

* `PeopleSearchRead` - Return cast search result

### Showtime

* `ShowtimeSearchallRead` - Return showtime search result

### Watchlist

* `WatchlistSearchRead` - Return watchlist search result
* `WatchlistSearchallRead` - Return watchlist search result
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
