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
import org.openapis.openapi.models.operations.CinemaSearchReadRequest;
import org.openapis.openapi.models.operations.CinemaSearchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CinemaSearchReadRequest req = new CinemaSearchReadRequest("corrupti");            

            CinemaSearchReadResponse res = sdk.cinema.cinemaSearchRead(req);

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


### [cinema](docs/cinema/README.md)

* [cinemaSearchRead](docs/cinema/README.md#cinemasearchread) - Return cinema search result

### [cinemaDetail](docs/cinemadetail/README.md)

* [cinemaDetailSearchRead](docs/cinemadetail/README.md#cinemadetailsearchread) - Return cinema details search result

### [cinemaSchedule](docs/cinemaschedule/README.md)

* [cinemaScheduleSearchRead](docs/cinemaschedule/README.md#cinemaschedulesearchread) - Return cinema schedule search result
* [cinemaScheduleSearchallRead](docs/cinemaschedule/README.md#cinemaschedulesearchallread) - Return cinema schedule search result

### [cinemaSheduleShowtime](docs/cinemasheduleshowtime/README.md)

* [cinemaSheduleShowtimeSearchRead](docs/cinemasheduleshowtime/README.md#cinemasheduleshowtimesearchread) - Return cinema schedule and showtime search result
* [cinemaSheduleShowtimeSearchallRead](docs/cinemasheduleshowtime/README.md#cinemasheduleshowtimesearchallread) - Return cinema schedule and showtime search result

### [company](docs/company/README.md)

* [companySearchRead](docs/company/README.md#companysearchread) - Return company search result

### [companyCredits](docs/companycredits/README.md)

* [companyCreditsSearchRead](docs/companycredits/README.md#companycreditssearchread) - Return company credits search result
* [companyCreditsSearchallRead](docs/companycredits/README.md#companycreditssearchallread) - Return company credits search result

### [filmography](docs/filmography/README.md)

* [filmographySearchRead](docs/filmography/README.md#filmographysearchread) - Return filmography search result
* [filmographySearchallRead](docs/filmography/README.md#filmographysearchallread) - Return filmography search result

### [filmographyType](docs/filmographytype/README.md)

* [filmographyTypeSearchRead](docs/filmographytype/README.md#filmographytypesearchread) - Return filmography type search result

### [genre](docs/genre/README.md)

* [genreSearchRead](docs/genre/README.md#genresearchread) - Return movie genre search result
* [genreSearchallRead](docs/genre/README.md#genresearchallread) - Return movie genre search result

### [genreType](docs/genretype/README.md)

* [genreTypeSearchRead](docs/genretype/README.md#genretypesearchread) - Return genre type search result

### [job](docs/job/README.md)

* [jobSearchRead](docs/job/README.md#jobsearchread) - Return job details search result
* [jobSearchallRead](docs/job/README.md#jobsearchallread) - Return job details search result

### [media](docs/media/README.md)

* [mediaSearchRead](docs/media/README.md#mediasearchread) - Return movie media search result
* [mediaSearchallRead](docs/media/README.md#mediasearchallread) - Return cast media search result

### [movie](docs/movie/README.md)

* [movieSearchRead](docs/movie/README.md#moviesearchread) - Return movie search result

### [movieCast](docs/moviecast/README.md)

* [movieCastSearchRead](docs/moviecast/README.md#moviecastsearchread) - Return movie cast search result
* [movieCastSearchallRead](docs/moviecast/README.md#moviecastsearchallread) - Return movie cast search result

### [news](docs/news/README.md)

* [newsSearchRead](docs/news/README.md#newssearchread) - Return news or article search result

### [people](docs/people/README.md)

* [peopleSearchRead](docs/people/README.md#peoplesearchread) - Return cast search result

### [showtime](docs/showtime/README.md)

* [showtimeSearchallRead](docs/showtime/README.md#showtimesearchallread) - Return showtime search result

### [watchlist](docs/watchlist/README.md)

* [watchlistSearchRead](docs/watchlist/README.md#watchlistsearchread) - Return watchlist search result
* [watchlistSearchallRead](docs/watchlist/README.md#watchlistsearchallread) - Return watchlist search result
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
