<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateArticleResponse;
import org.openapis.openapi.models.shared.Article;
import org.openapis.openapi.models.shared.ArticleArticle;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Article req = new Article() {{
                article = new ArticleArticle() {{
                    bodyMarkdown = "provident";
                    canonicalUrl = "distinctio";
                    description = "quibusdam";
                    mainImage = "unde";
                    organizationId = 857946L;
                    published = false;
                    series = "corrupti";
                    tags = "illum";
                    title = "Ms.";
                }};;
            }};            

            CreateArticleResponse res = sdk.articles.createArticle(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->