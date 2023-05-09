# song

### Available Operations

* [srcSearchlyApiV1ControllersSongSearch](#srcsearchlyapiv1controllerssongsearch) - API endpoint to search songs from the database given a query

## srcSearchlyApiV1ControllersSongSearch

Endpoint for an end-user client to search songs from the database given a String query.

If you want to run the /song/search operation, you can do so via an HTTP GET command to the following URL:

```
https://searchly.asuarez.dev/api/v1/song/search
```


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SrcSearchlyApiV1ControllersSongSearchRequest;
import org.openapis.openapi.models.operations.SrcSearchlyApiV1ControllersSongSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SrcSearchlyApiV1ControllersSongSearchRequest req = new SrcSearchlyApiV1ControllersSongSearchRequest("quibusdam");            

            SrcSearchlyApiV1ControllersSongSearchResponse res = sdk.song.srcSearchlyApiV1ControllersSongSearch(req);

            if (res.apiResponseSong != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
