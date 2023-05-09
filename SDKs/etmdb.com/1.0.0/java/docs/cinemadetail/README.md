# cinemaDetail

### Available Operations

* [cinemaDetailSearchRead](#cinemadetailsearchread) - Return cinema details search result

## cinemaDetailSearchRead

Return cinema details search result

### Response Class (Status 200)

* __{cinema_name}__: Used as a key word to search cinemas,

For more details on how cinemas are listed [see here][ref].
[ref]: https://etmdb.com/en/cinema-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CinemaDetailSearchReadRequest;
import org.openapis.openapi.models.operations.CinemaDetailSearchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CinemaDetailSearchReadRequest req = new CinemaDetailSearchReadRequest("distinctio");            

            CinemaDetailSearchReadResponse res = sdk.cinemaDetail.cinemaDetailSearchRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
