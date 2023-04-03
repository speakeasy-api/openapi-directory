<!-- Start SDK Example Usage -->
```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateArticleResponse;
import org.openapis.openapi.models.shared.ArticleArticle;
import org.openapis.openapi.models.shared.Article;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Article req = new Article() {{
                article = new ArticleArticle() {{
                    bodyMarkdown = "corrupti";
                    canonicalUrl = "provident";
                    description = "distinctio";
                    mainImage = "quibusdam";
                    organizationId = 602763;
                    published = false;
                    series = "nulla";
                    tags = "corrupti";
                    title = "Dr.";
                }};
            }}            

            CreateArticleResponse res = sdk.articles.createArticle(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->