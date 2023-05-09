# showtime

### Available Operations

* [showtimeSearchallRead](#showtimesearchallread) - Return showtime search result

## showtimeSearchallRead

Return showtime search result

### Response Class (Status 200)
__{param}__ argument can be
* show time or
* day of the week [Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6, Sun=7]

For more details about showtime, check each cinema from the cinema list [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShowtimeSearchallReadRequest;
import org.openapis.openapi.models.operations.ShowtimeSearchallReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ShowtimeSearchallReadRequest req = new ShowtimeSearchallReadRequest("nisi");            

            ShowtimeSearchallReadResponse res = sdk.showtime.showtimeSearchallRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
