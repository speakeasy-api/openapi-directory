# cinema

### Available Operations

* [cinemaSearchRead](#cinemasearchread) - Return cinema search result

## cinemaSearchRead

Return cinema search result

### Response Class (Status 200)

* __{id}__: Used as a key to search cinemas,

For more details on how cinemas are listed [see here][ref].
[ref]: https://etmdb.com/en/cinema-list/-updated_date

### Example Usage

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

            CinemaSearchReadRequest req = new CinemaSearchReadRequest("provident");            

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
