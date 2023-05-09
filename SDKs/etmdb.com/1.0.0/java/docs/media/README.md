# media

### Available Operations

* [mediaSearchRead](#mediasearchread) - Return movie media search result
* [mediaSearchallRead](#mediasearchallread) - Return cast media search result

## mediaSearchRead

Return movie media search result

### Response Class (Status 200)

* __{movie_title}__: Used as a key word to search media for movies
* You can use both Amharic or English charset/font to search

For more details on how media is listed [see here][ref].
[ref]: https://etmdb.com/en/movie-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MediaSearchReadRequest;
import org.openapis.openapi.models.operations.MediaSearchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MediaSearchReadRequest req = new MediaSearchReadRequest("suscipit");            

            MediaSearchReadResponse res = sdk.media.mediaSearchRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## mediaSearchallRead

Return cast media search result

### Response Class (Status 200)
__{user}__ argument can be
* artist first name
* artist last name
* artist username

For more details on how cast media is listed [see here][ref].
[ref]: https://etmdb.com/en/cast-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MediaSearchallReadRequest;
import org.openapis.openapi.models.operations.MediaSearchallReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            MediaSearchallReadRequest req = new MediaSearchallReadRequest("molestiae");            

            MediaSearchallReadResponse res = sdk.media.mediaSearchallRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
