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

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Cinema.CinemaSearchRead(ctx, operations.CinemaSearchReadRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
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


### [Cinema](docs/cinema/README.md)

* [CinemaSearchRead](docs/cinema/README.md#cinemasearchread) - Return cinema search result

### [CinemaDetail](docs/cinemadetail/README.md)

* [CinemaDetailSearchRead](docs/cinemadetail/README.md#cinemadetailsearchread) - Return cinema details search result

### [CinemaSchedule](docs/cinemaschedule/README.md)

* [CinemaScheduleSearchRead](docs/cinemaschedule/README.md#cinemaschedulesearchread) - Return cinema schedule search result
* [CinemaScheduleSearchallRead](docs/cinemaschedule/README.md#cinemaschedulesearchallread) - Return cinema schedule search result

### [CinemaSheduleShowtime](docs/cinemasheduleshowtime/README.md)

* [CinemaSheduleShowtimeSearchRead](docs/cinemasheduleshowtime/README.md#cinemasheduleshowtimesearchread) - Return cinema schedule and showtime search result
* [CinemaSheduleShowtimeSearchallRead](docs/cinemasheduleshowtime/README.md#cinemasheduleshowtimesearchallread) - Return cinema schedule and showtime search result

### [Company](docs/company/README.md)

* [CompanySearchRead](docs/company/README.md#companysearchread) - Return company search result

### [CompanyCredits](docs/companycredits/README.md)

* [CompanyCreditsSearchRead](docs/companycredits/README.md#companycreditssearchread) - Return company credits search result
* [CompanyCreditsSearchallRead](docs/companycredits/README.md#companycreditssearchallread) - Return company credits search result

### [Filmography](docs/filmography/README.md)

* [FilmographySearchRead](docs/filmography/README.md#filmographysearchread) - Return filmography search result
* [FilmographySearchallRead](docs/filmography/README.md#filmographysearchallread) - Return filmography search result

### [FilmographyType](docs/filmographytype/README.md)

* [FilmographyTypeSearchRead](docs/filmographytype/README.md#filmographytypesearchread) - Return filmography type search result

### [Genre](docs/genre/README.md)

* [GenreSearchRead](docs/genre/README.md#genresearchread) - Return movie genre search result
* [GenreSearchallRead](docs/genre/README.md#genresearchallread) - Return movie genre search result

### [GenreType](docs/genretype/README.md)

* [GenreTypeSearchRead](docs/genretype/README.md#genretypesearchread) - Return genre type search result

### [Job](docs/job/README.md)

* [JobSearchRead](docs/job/README.md#jobsearchread) - Return job details search result
* [JobSearchallRead](docs/job/README.md#jobsearchallread) - Return job details search result

### [Media](docs/media/README.md)

* [MediaSearchRead](docs/media/README.md#mediasearchread) - Return movie media search result
* [MediaSearchallRead](docs/media/README.md#mediasearchallread) - Return cast media search result

### [Movie](docs/movie/README.md)

* [MovieSearchRead](docs/movie/README.md#moviesearchread) - Return movie search result

### [MovieCast](docs/moviecast/README.md)

* [MovieCastSearchRead](docs/moviecast/README.md#moviecastsearchread) - Return movie cast search result
* [MovieCastSearchallRead](docs/moviecast/README.md#moviecastsearchallread) - Return movie cast search result

### [News](docs/news/README.md)

* [NewsSearchRead](docs/news/README.md#newssearchread) - Return news or article search result

### [People](docs/people/README.md)

* [PeopleSearchRead](docs/people/README.md#peoplesearchread) - Return cast search result

### [Showtime](docs/showtime/README.md)

* [ShowtimeSearchallRead](docs/showtime/README.md#showtimesearchallread) - Return showtime search result

### [Watchlist](docs/watchlist/README.md)

* [WatchlistSearchRead](docs/watchlist/README.md#watchlistsearchread) - Return watchlist search result
* [WatchlistSearchallRead](docs/watchlist/README.md#watchlistsearchallread) - Return watchlist search result
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
