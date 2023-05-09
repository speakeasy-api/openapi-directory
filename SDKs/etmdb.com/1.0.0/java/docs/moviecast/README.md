# movieCast

### Available Operations

* [movieCastSearchRead](#moviecastsearchread) - Return movie cast search result
* [movieCastSearchallRead](#moviecastsearchallread) - Return movie cast search result

## movieCastSearchRead

Return movie cast search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movie cast
* You can use both Amharic or English charset/font to search

For more details on how movie casts are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MovieCastSearchReadRequest;
import org.openapis.openapi.models.operations.MovieCastSearchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MovieCastSearchReadRequest req = new MovieCastSearchReadRequest("placeat");            

            MovieCastSearchReadResponse res = sdk.movieCast.movieCastSearchRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## movieCastSearchallRead

Return movie cast search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username
* movie title or
* character name

For more details on how movie casts are listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MovieCastSearchallReadRequest;
import org.openapis.openapi.models.operations.MovieCastSearchallReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MovieCastSearchallReadRequest req = new MovieCastSearchallReadRequest("voluptatum");            

            MovieCastSearchallReadResponse res = sdk.movieCast.movieCastSearchallRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
