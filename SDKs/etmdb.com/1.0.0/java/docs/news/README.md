# news

### Available Operations

* [newsSearchRead](#newssearchread) - Return news or article search result

## newsSearchRead

Return news or article search result

### Response Class (Status 200)

* __{title}__: Used as a key word to search news and articles,

For more details on how news & articles are listed [see here][ref].
[ref]: https://etmdb.com/en/news-list/-updated_date

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NewsSearchReadRequest;
import org.openapis.openapi.models.operations.NewsSearchReadResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NewsSearchReadRequest req = new NewsSearchReadRequest("iusto");            

            NewsSearchReadResponse res = sdk.news.newsSearchRead(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
