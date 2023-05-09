# gifs

### Available Operations

* [getGifById](#getgifbyid) - Get GIF by Id
* [getGifsById](#getgifsbyid) - Get GIFs by ID
* [randomGif](#randomgif) - Random GIF
* [searchGifs](#searchgifs) - Search GIFs
* [translateGif](#translategif) - Translate phrase to GIF
* [trendingGifs](#trendinggifs) - Trending GIFs

## getGifById

Returns a GIF given that GIF's unique ID


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGifByIdRequest;
import org.openapis.openapi.models.operations.GetGifByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGifByIdRequest req = new GetGifByIdRequest(844266);            

            GetGifByIdResponse res = sdk.gifs.getGifById(req);

            if (res.getGifById200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGifsById

A multiget version of the get GIF by ID endpoint.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGifsByIdRequest;
import org.openapis.openapi.models.operations.GetGifsByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGifsByIdRequest req = new GetGifsByIdRequest() {{
                ids = "nulla";
            }};            

            GetGifsByIdResponse res = sdk.gifs.getGifsById(req);

            if (res.getGifsById200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## randomGif

Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RandomGifRequest;
import org.openapis.openapi.models.operations.RandomGifResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RandomGifRequest req = new RandomGifRequest() {{
                rating = "illum";
                tag = "vel";
            }};            

            RandomGifResponse res = sdk.gifs.randomGif(req);

            if (res.randomGif200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchGifs

Search all GIPHY GIFs for a word or phrase. Punctuation will be stripped and ignored.  Use a plus or url encode for phrases. Example paul+rudd, ryan+gosling or american+psycho.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchGifsRequest;
import org.openapis.openapi.models.operations.SearchGifsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchGifsRequest req = new SearchGifsRequest("deserunt") {{
                lang = "suscipit";
                limit = 437587;
                offset = 297534;
                rating = "debitis";
            }};            

            SearchGifsResponse res = sdk.gifs.searchGifs(req);

            if (res.searchGifs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## translateGif

The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIF


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateGifRequest;
import org.openapis.openapi.models.operations.TranslateGifResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TranslateGifRequest req = new TranslateGifRequest("delectus");            

            TranslateGifResponse res = sdk.gifs.translateGif(req);

            if (res.translateGif200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## trendingGifs

Fetch GIFs currently trending online. Hand curated by the GIPHY editorial team.  The data returned mirrors the GIFs showcased on the GIPHY homepage. Returns 25 results by default.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrendingGifsRequest;
import org.openapis.openapi.models.operations.TrendingGifsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TrendingGifsRequest req = new TrendingGifsRequest() {{
                limit = 383441;
                offset = 477665;
                rating = "minus";
            }};            

            TrendingGifsResponse res = sdk.gifs.trendingGifs(req);

            if (res.trendingGifs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
