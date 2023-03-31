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

import org.openapis.openapi.models.operations.CinemaSearchReadPathParams;
import org.openapis.openapi.models.operations.CinemaSearchReadRequest;
import org.openapis.openapi.models.operations.CinemaSearchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CinemaSearchReadRequest req = new CinemaSearchReadRequest() {{
                pathParams = new CinemaSearchReadPathParams() {{
                    id = "corrupti";
                }};
            }};            

            CinemaSearchReadResponse res = sdk.cinema.cinemaSearchRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### cinema

* `cinemaSearchRead` - Return cinema search result

### cinemaDetail

* `cinemaDetailSearchRead` - Return cinema details search result

### cinemaSchedule

* `cinemaScheduleSearchRead` - Return cinema schedule search result
* `cinemaScheduleSearchallRead` - Return cinema schedule search result

### cinemaSheduleShowtime

* `cinemaSheduleShowtimeSearchRead` - Return cinema schedule and showtime search result
* `cinemaSheduleShowtimeSearchallRead` - Return cinema schedule and showtime search result

### company

* `companySearchRead` - Return company search result

### companyCredits

* `companyCreditsSearchRead` - Return company credits search result
* `companyCreditsSearchallRead` - Return company credits search result

### filmography

* `filmographySearchRead` - Return filmography search result
* `filmographySearchallRead` - Return filmography search result

### filmographyType

* `filmographyTypeSearchRead` - Return filmography type search result

### genre

* `genreSearchRead` - Return movie genre search result
* `genreSearchallRead` - Return movie genre search result

### genreType

* `genreTypeSearchRead` - Return genre type search result

### job

* `jobSearchRead` - Return job details search result
* `jobSearchallRead` - Return job details search result

### media

* `mediaSearchRead` - Return movie media search result
* `mediaSearchallRead` - Return cast media search result

### movie

* `movieSearchRead` - Return movie search result

### movieCast

* `movieCastSearchRead` - Return movie cast search result
* `movieCastSearchallRead` - Return movie cast search result

### news

* `newsSearchRead` - Return news or article search result

### people

* `peopleSearchRead` - Return cast search result

### showtime

* `showtimeSearchallRead` - Return showtime search result

### watchlist

* `watchlistSearchRead` - Return watchlist search result
* `watchlistSearchallRead` - Return watchlist search result
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
