# reactions

### Available Operations

* [postApiReactions](#postapireactions) - create reaction
* [postApiReactionsToggle](#postapireactionstoggle) - toggle reaction

## postApiReactions

This endpoint allows the client to create a reaction to a specified reactable (eg, Article, Comment, or User). For examples:
        * "Like"ing an Article will create a new "like" Reaction from the user for that Articles
        * "Like"ing that Article a second time will return the previous "like"

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiReactionsCategoryEnum;
import org.openapis.openapi.models.operations.PostApiReactionsReactableTypeEnum;
import org.openapis.openapi.models.operations.PostApiReactionsRequest;
import org.openapis.openapi.models.operations.PostApiReactionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("omnis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostApiReactionsRequest req = new PostApiReactionsRequest(PostApiReactionsCategoryEnum.EXPLODING_HEAD, 739264, PostApiReactionsReactableTypeEnum.COMMENT);            

            PostApiReactionsResponse res = sdk.reactions.postApiReactions(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiReactionsToggle

This endpoint allows the client to toggle the user's reaction to a specified reactable (eg, Article, Comment, or User). For examples:
        * "Like"ing an Article will create a new "like" Reaction from the user for that Articles
        * "Like"ing that Article a second time will remove the "like" from the user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiReactionsToggleCategoryEnum;
import org.openapis.openapi.models.operations.PostApiReactionsToggleReactableTypeEnum;
import org.openapis.openapi.models.operations.PostApiReactionsToggleRequest;
import org.openapis.openapi.models.operations.PostApiReactionsToggleResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("doloremque") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostApiReactionsToggleRequest req = new PostApiReactionsToggleRequest(PostApiReactionsToggleCategoryEnum.EXPLODING_HEAD, 282807, PostApiReactionsToggleReactableTypeEnum.USER);            

            PostApiReactionsToggleResponse res = sdk.reactions.postApiReactionsToggle(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
