# genre

### Available Operations

* [genreSearchRead](#genresearchread) - Return movie genre search result
* [genreSearchallRead](#genresearchallread) - Return movie genre search result

## genreSearchRead

Return movie genre search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movie genres
* You can use both Amharic or English charset/font to search

For more details on how movies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenreSearchReadRequest;
import org.openapis.openapi.models.operations.GenreSearchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenreSearchReadRequest req = new GenreSearchReadRequest("magnam");            

            GenreSearchReadResponse res = sdk.genre.genreSearchRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## genreSearchallRead

Return movie genre search result

### Response Class (Status 200)

* __{movie_genre_type}__: Used as a key word to search movie genres

For more details on how movies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GenreSearchallReadRequest;
import org.openapis.openapi.models.operations.GenreSearchallReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GenreSearchallReadRequest req = new GenreSearchallReadRequest("debitis");            

            GenreSearchallReadResponse res = sdk.genre.genreSearchallRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
