# comments

### Available Operations

* [collectionTicketCommentsAdd](#collectionticketcommentsadd) - Create Comment
* [collectionTicketCommentsAll](#collectionticketcommentsall) - List Comments
* [collectionTicketCommentsDelete](#collectionticketcommentsdelete) - Delete Comment
* [collectionTicketCommentsOne](#collectionticketcommentsone) - Get Comment
* [collectionTicketCommentsUpdate](#collectionticketcommentsupdate) - Update Comment

## collectionTicketCommentsAdd

Create Comment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionTicketCommentsAddRequest;
import org.openapis.openapi.models.operations.CollectionTicketCommentsAddResponse;
import org.openapis.openapi.models.operations.CollectionTicketCommentsAddSecurity;
import org.openapis.openapi.models.shared.CollectionTicketCommentInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionTicketCommentsAddRequest req = new CollectionTicketCommentsAddRequest(                new CollectionTicketCommentInput() {{
                                body = "What internet provider do you use?";
                            }};, "apideck-io", "placeat", "voluptatum", "iusto") {{
                raw = false;
                xApideckServiceId = "excepturi";
            }};            

            CollectionTicketCommentsAddResponse res = sdk.comments.collectionTicketCommentsAdd(req, new CollectionTicketCommentsAddSecurity("nisi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createCommentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectionTicketCommentsAll

List Comments

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionTicketCommentsAllRequest;
import org.openapis.openapi.models.operations.CollectionTicketCommentsAllResponse;
import org.openapis.openapi.models.operations.CollectionTicketCommentsAllSecurity;
import org.openapis.openapi.models.shared.CommentsSort;
import org.openapis.openapi.models.shared.CommentsSortByEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortDirectionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionTicketCommentsAllRequest req = new CollectionTicketCommentsAllRequest("apideck-io", "recusandae", "temporibus", "ab") {{
                cursor = "quis";
                fields = "veritatis";
                limit = 648172L;
                raw = false;
                sort = new CommentsSort() {{
                    by = CommentsSortByEnum.CREATED_AT;
                    direction = SortDirectionEnum.ASC;
                }};;
                xApideckServiceId = "ipsam";
            }};            

            CollectionTicketCommentsAllResponse res = sdk.comments.collectionTicketCommentsAll(req, new CollectionTicketCommentsAllSecurity("repellendus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCommentsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectionTicketCommentsDelete

Delete Comment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionTicketCommentsDeleteRequest;
import org.openapis.openapi.models.operations.CollectionTicketCommentsDeleteResponse;
import org.openapis.openapi.models.operations.CollectionTicketCommentsDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionTicketCommentsDeleteRequest req = new CollectionTicketCommentsDeleteRequest("apideck-io", "sapiente", "quo", "odit", "at") {{
                raw = false;
                xApideckServiceId = "at";
            }};            

            CollectionTicketCommentsDeleteResponse res = sdk.comments.collectionTicketCommentsDelete(req, new CollectionTicketCommentsDeleteSecurity("maiores") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteCommentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectionTicketCommentsOne

Get Comment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionTicketCommentsOneRequest;
import org.openapis.openapi.models.operations.CollectionTicketCommentsOneResponse;
import org.openapis.openapi.models.operations.CollectionTicketCommentsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionTicketCommentsOneRequest req = new CollectionTicketCommentsOneRequest("apideck-io", "molestiae", "quod", "quod", "esse") {{
                cursor = "totam";
                fields = "porro";
                limit = 678880L;
                raw = false;
                xApideckServiceId = "dicta";
            }};            

            CollectionTicketCommentsOneResponse res = sdk.comments.collectionTicketCommentsOne(req, new CollectionTicketCommentsOneSecurity("nam") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getCommentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## collectionTicketCommentsUpdate

Update Comment

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CollectionTicketCommentsUpdateRequest;
import org.openapis.openapi.models.operations.CollectionTicketCommentsUpdateResponse;
import org.openapis.openapi.models.operations.CollectionTicketCommentsUpdateSecurity;
import org.openapis.openapi.models.shared.CollectionTicketCommentInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CollectionTicketCommentsUpdateRequest req = new CollectionTicketCommentsUpdateRequest(                new CollectionTicketCommentInput() {{
                                body = "What internet provider do you use?";
                            }};, "apideck-io", "officia", "occaecati", "fugit", "deleniti") {{
                raw = false;
                xApideckServiceId = "hic";
            }};            

            CollectionTicketCommentsUpdateResponse res = sdk.comments.collectionTicketCommentsUpdate(req, new CollectionTicketCommentsUpdateSecurity("optio") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateCommentResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
