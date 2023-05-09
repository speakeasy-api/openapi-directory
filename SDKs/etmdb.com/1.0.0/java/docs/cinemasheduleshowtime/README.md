# cinemaSheduleShowtime

### Available Operations

* [cinemaSheduleShowtimeSearchRead](#cinemasheduleshowtimesearchread) - Return cinema schedule and showtime search result
* [cinemaSheduleShowtimeSearchallRead](#cinemasheduleshowtimesearchallread) - Return cinema schedule and showtime search result

## cinemaSheduleShowtimeSearchRead

Return cinema schedule and showtime search result

### Response Class (Status 200)
* __{movie_title}__: Used as a key word to search movie cast
* You can use both Amharic or English charset/font to search

For more details about cinema schedule showtime, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CinemaSheduleShowtimeSearchReadRequest;
import org.openapis.openapi.models.operations.CinemaSheduleShowtimeSearchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CinemaSheduleShowtimeSearchReadRequest req = new CinemaSheduleShowtimeSearchReadRequest("nulla");            

            CinemaSheduleShowtimeSearchReadResponse res = sdk.cinemaSheduleShowtime.cinemaSheduleShowtimeSearchRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cinemaSheduleShowtimeSearchallRead

Return cinema schedule and showtime search result

### Response Class (Status 200)
__{param}__ argument can be
* movie title
* cinema name
* cinema hall name
* showtime starting date
* showtime ending date or
* cinema technology

For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CinemaSheduleShowtimeSearchallReadRequest;
import org.openapis.openapi.models.operations.CinemaSheduleShowtimeSearchallReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CinemaSheduleShowtimeSearchallReadRequest req = new CinemaSheduleShowtimeSearchallReadRequest("corrupti");            

            CinemaSheduleShowtimeSearchallReadResponse res = sdk.cinemaSheduleShowtime.cinemaSheduleShowtimeSearchallRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
