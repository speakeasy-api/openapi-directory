# similarity

### Available Operations

* [srcSearchlyApiV1ControllersSimilarityByContent](#srcsearchlyapiv1controllerssimilaritybycontent) - API endpoint to search similarity using content
* [srcSearchlyApiV1ControllersSimilarityBySong](#srcsearchlyapiv1controllerssimilaritybysong) - API endpoint to search similarity using a song identifier

## srcSearchlyApiV1ControllersSimilarityByContent

Endpoint for an end-user client to search similarity by content.

If you want to run the /similarity/by_content operation, you can do so via an HTTP POST command to the following URL:

```
https://searchly.asuarez.dev/api/v1/similarity/by_content
```


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SrcSearchlyApiV1ControllersSimilarityByContentRequestBody;
import org.openapis.openapi.models.operations.SrcSearchlyApiV1ControllersSimilarityByContentResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SrcSearchlyApiV1ControllersSimilarityByContentRequestBody req = new SrcSearchlyApiV1ControllersSimilarityByContentRequestBody() {{
                content = "provident";
            }};            

            SrcSearchlyApiV1ControllersSimilarityByContentResponse res = sdk.similarity.srcSearchlyApiV1ControllersSimilarityByContent(req);

            if (res.apiResponseSimilarity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## srcSearchlyApiV1ControllersSimilarityBySong

Endpoint for an end-user client to search similarity by song identifier.

If you want to run the /similarity/by_song operation, you can do so via an HTTP GET command to the following URL:

```
https://searchly.asuarez.dev/api/v1/similarity/by_song
```


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SrcSearchlyApiV1ControllersSimilarityBySongRequest;
import org.openapis.openapi.models.operations.SrcSearchlyApiV1ControllersSimilarityBySongResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SrcSearchlyApiV1ControllersSimilarityBySongRequest req = new SrcSearchlyApiV1ControllersSimilarityBySongRequest(715190L);            

            SrcSearchlyApiV1ControllersSimilarityBySongResponse res = sdk.similarity.srcSearchlyApiV1ControllersSimilarityBySong(req);

            if (res.apiResponseSimilarity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
