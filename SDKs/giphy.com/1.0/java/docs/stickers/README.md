# stickers

### Available Operations

* [randomSticker](#randomsticker) - Random Sticker
* [searchStickers](#searchstickers) - Search Stickers
* [translateSticker](#translatesticker) - Translate phrase to Sticker
* [trendingStickers](#trendingstickers) - Trending Stickers

## randomSticker

Returns a random GIF, limited by tag. Excluding the tag parameter will return a random GIF from the GIPHY catalog.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RandomStickerRequest;
import org.openapis.openapi.models.operations.RandomStickerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RandomStickerRequest req = new RandomStickerRequest() {{
                rating = "voluptatum";
                tag = "iusto";
            }};            

            RandomStickerResponse res = sdk.stickers.randomSticker(req);

            if (res.randomSticker200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchStickers

Replicates the functionality and requirements of the classic GIPHY search, but returns animated stickers rather than GIFs.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchStickersRequest;
import org.openapis.openapi.models.operations.SearchStickersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            SearchStickersRequest req = new SearchStickersRequest("nisi") {{
                lang = "recusandae";
                limit = 836079;
                offset = 71036;
                rating = "quis";
            }};            

            SearchStickersResponse res = sdk.stickers.searchStickers(req);

            if (res.searchStickers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## translateSticker

The translate API draws on search, but uses the GIPHY `special sauce` to handle translating from one vocabulary to another. In this case, words and phrases to GIFs.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TranslateStickerRequest;
import org.openapis.openapi.models.operations.TranslateStickerResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TranslateStickerRequest req = new TranslateStickerRequest("deserunt");            

            TranslateStickerResponse res = sdk.stickers.translateSticker(req);

            if (res.translateSticker200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## trendingStickers

Fetch Stickers currently trending online. Hand curated by the GIPHY editorial team. Returns 25 results by default.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TrendingStickersRequest;
import org.openapis.openapi.models.operations.TrendingStickersResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TrendingStickersRequest req = new TrendingStickersRequest() {{
                limit = 368241;
                offset = 832620;
                rating = "sapiente";
            }};            

            TrendingStickersResponse res = sdk.stickers.trendingStickers(req);

            if (res.trendingStickers200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
