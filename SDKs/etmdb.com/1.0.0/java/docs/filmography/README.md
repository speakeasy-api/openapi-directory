# filmography

### Available Operations

* [filmographySearchRead](#filmographysearchread) - Return filmography search result
* [filmographySearchallRead](#filmographysearchallread) - Return filmography search result

## filmographySearchRead

Return filmography search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movies
* You can use both Amharic or English charset/font to search

For more details on how filmographies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FilmographySearchReadRequest;
import org.openapis.openapi.models.operations.FilmographySearchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FilmographySearchReadRequest req = new FilmographySearchReadRequest("deserunt");            

            FilmographySearchReadResponse res = sdk.filmography.filmographySearchRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## filmographySearchallRead

Return filmography search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username
* movie title or
* filmography description (such as director, actor, producer, etc)

For more details on how filmographies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FilmographySearchallReadRequest;
import org.openapis.openapi.models.operations.FilmographySearchallReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FilmographySearchallReadRequest req = new FilmographySearchallReadRequest("suscipit");            

            FilmographySearchallReadResponse res = sdk.filmography.filmographySearchallRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
