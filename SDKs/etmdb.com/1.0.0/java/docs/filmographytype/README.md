# filmographyType

### Available Operations

* [filmographyTypeSearchRead](#filmographytypesearchread) - Return filmography type search result

## filmographyTypeSearchRead

Return filmography type search result

### Response Class (Status 200)

* __{filmography_description}__: Used as a key word to search filmography types

For more details on how filmography types are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FilmographyTypeSearchReadRequest;
import org.openapis.openapi.models.operations.FilmographyTypeSearchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FilmographyTypeSearchReadRequest req = new FilmographyTypeSearchReadRequest("iure");            

            FilmographyTypeSearchReadResponse res = sdk.filmographyType.filmographyTypeSearchRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
