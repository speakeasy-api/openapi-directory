# genreType

### Available Operations

* [genreTypeSearchRead](#genretypesearchread) - Return genre type search result

## genreTypeSearchRead

Return genre type search result

### Response Class (Status 200)

* __{genre_description}__: Used as a key word to search genre types

For more details on how genre types are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenreTypeSearchReadRequest;
import org.openapis.openapi.models.operations.GenreTypeSearchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenreTypeSearchReadRequest req = new GenreTypeSearchReadRequest("ipsa");            

            GenreTypeSearchReadResponse res = sdk.genreType.genreTypeSearchRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
