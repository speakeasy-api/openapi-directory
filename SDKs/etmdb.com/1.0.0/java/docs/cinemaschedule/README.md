# cinemaSchedule

### Available Operations

* [cinemaScheduleSearchRead](#cinemaschedulesearchread) - Return cinema schedule search result
* [cinemaScheduleSearchallRead](#cinemaschedulesearchallread) - Return cinema schedule search result

## cinemaScheduleSearchRead

Return cinema schedule search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movie cast
* You can use both Amharic or English charset/font to search

For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CinemaScheduleSearchReadRequest;
import org.openapis.openapi.models.operations.CinemaScheduleSearchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CinemaScheduleSearchReadRequest req = new CinemaScheduleSearchReadRequest("quibusdam");            

            CinemaScheduleSearchReadResponse res = sdk.cinemaSchedule.cinemaScheduleSearchRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cinemaScheduleSearchallRead

Return cinema schedule search result

### Response Class (Status 200)
__{param}__ argument can be
* movie title
* cinema name
* cinema hall name or
* cinema technology

For more details about cinema schedule, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CinemaScheduleSearchallReadRequest;
import org.openapis.openapi.models.operations.CinemaScheduleSearchallReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CinemaScheduleSearchallReadRequest req = new CinemaScheduleSearchallReadRequest("unde");            

            CinemaScheduleSearchallReadResponse res = sdk.cinemaSchedule.cinemaScheduleSearchallRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
