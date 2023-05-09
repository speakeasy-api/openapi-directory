<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetArticlesRequest;
import org.openapis.openapi.models.operations.GetArticlesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetArticlesRequest req = new GetArticlesRequest() {{
                page = 548814;
                perPage = 592845;
                q = "distinctio";
                top = "quibusdam";
            }};            

            GetArticlesResponse res = sdk.getArticles(req);

            if (res.getArticlesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->