# watchlist

### Available Operations

* [watchlistSearchRead](#watchlistsearchread) - Return watchlist search result
* [watchlistSearchallRead](#watchlistsearchallread) - Return watchlist search result

## watchlistSearchRead

Return watchlist search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search movies on watchlist
* You can use both Amharic or English charset/font to search

For more details on how watchlist are listed [see here][ref].
[ref]: https://etmdb.com/en/movies/watchlist/id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistSearchReadRequest;
import org.openapis.openapi.models.operations.WatchlistSearchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WatchlistSearchReadRequest req = new WatchlistSearchReadRequest("recusandae");            

            WatchlistSearchReadResponse res = sdk.watchlist.watchlistSearchRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## watchlistSearchallRead

Return watchlist search result

### Response Class (Status 200)
__{param}__ argument can be
* artist first name
* artist last name
* artist username
* movie title or

For more details on how watchlist are listed [see here][ref].
[ref]: https://etmdb.com/en/movies/watchlist/id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WatchlistSearchallReadRequest;
import org.openapis.openapi.models.operations.WatchlistSearchallReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WatchlistSearchallReadRequest req = new WatchlistSearchallReadRequest("temporibus");            

            WatchlistSearchallReadResponse res = sdk.watchlist.watchlistSearchallRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
