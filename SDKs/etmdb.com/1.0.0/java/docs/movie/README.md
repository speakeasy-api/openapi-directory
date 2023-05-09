# movie

### Available Operations

* [movieSearchRead](#moviesearchread) - Return movie search result

## movieSearchRead

Return movie search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movies
* You can use both Amharic or English charset/font to search

For more details on how movies are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MovieSearchReadRequest;
import org.openapis.openapi.models.operations.MovieSearchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MovieSearchReadRequest req = new MovieSearchReadRequest("minus");            

            MovieSearchReadResponse res = sdk.movie.movieSearchRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
