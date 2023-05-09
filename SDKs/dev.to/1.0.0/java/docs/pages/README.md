# pages

### Available Operations

* [deleteApiPagesId](#deleteapipagesid) - remove a page
* [getApiPages](#getapipages) - show details for all pages
* [getApiPagesId](#getapipagesid) - show details for a page
* [postApiPages](#postapipages) - pages
* [putApiPagesId](#putapipagesid) - update details for a page

## deleteApiPagesId

This endpoint allows the client to delete a single Page object, specified by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteApiPagesIdRequest;
import org.openapis.openapi.models.operations.DeleteApiPagesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteApiPagesIdRequest req = new DeleteApiPagesIdRequest(414369);            

            DeleteApiPagesIdResponse res = sdk.pages.deleteApiPagesId(req);

            if (res.page != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiPages

This endpoint allows the client to retrieve details for all Page objects.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiPagesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApiPagesResponse res = sdk.pages.getApiPages();

            if (res.pages != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getApiPagesId

This endpoint allows the client to retrieve details for a single Page object, specified by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetApiPagesIdRequest;
import org.openapis.openapi.models.operations.GetApiPagesIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetApiPagesIdRequest req = new GetApiPagesIdRequest(244425);            

            GetApiPagesIdResponse res = sdk.pages.getApiPagesId(req);

            if (res.page != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiPages

This endpoint allows the client to create a new page.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiPagesRequestBody;
import org.openapis.openapi.models.operations.PostApiPagesRequestBodyTemplateEnum;
import org.openapis.openapi.models.operations.PostApiPagesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("error") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostApiPagesRequestBody req = new PostApiPagesRequestBody() {{
                bodyJson = "quia";
                bodyMarkdown = "quis";
                description = "vitae";
                isTopLevelPath = false;
                slug = "laborum";
                template = PostApiPagesRequestBodyTemplateEnum.NAV_BAR_INCLUDED;
                title = "Mrs.";
            }};            

            PostApiPagesResponse res = sdk.pages.postApiPages(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putApiPagesId

This endpoint allows the client to retrieve details for a single Page object, specified by ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutApiPagesIdRequest;
import org.openapis.openapi.models.operations.PutApiPagesIdResponse;
import org.openapis.openapi.models.shared.Page;
import org.openapis.openapi.models.shared.PageTemplateEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutApiPagesIdRequest req = new PutApiPagesIdRequest(778346) {{
                page = new Page("sequi", "tenetur", PageTemplateEnum.FULL_WITHIN_LAYOUT, "id") {{
                    bodyJson = "possimus";
                    bodyMarkdown = "aut";
                    isTopLevelPath = false;
                    socialImage = new java.util.HashMap<String, Object>() {{
                        put("error", "temporibus");
                    }};
                }};;
            }};            

            PutApiPagesIdResponse res = sdk.pages.putApiPagesId(req);

            if (res.page != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
