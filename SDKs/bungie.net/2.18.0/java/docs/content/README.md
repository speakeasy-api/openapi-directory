# content

## Overview

content

### Available Operations

* [contentGetContentById](#contentgetcontentbyid) - Returns a content item referenced by id
* [contentGetContentByTagAndType](#contentgetcontentbytagandtype) - Returns the newest item that matches a given tag and Content Type.
* [contentGetContentType](#contentgetcontenttype) - Gets an object describing a particular variant of content.
* [contentRssNewsArticles](#contentrssnewsarticles) - Returns a JSON string response that is the RSS feed for news articles.
* [contentSearchContentByTagAndType](#contentsearchcontentbytagandtype) - Searches for Content Items that match the given Tag and Content Type.
* [contentSearchContentWithText](#contentsearchcontentwithtext) - Gets content based on querystring information passed in. Provides basic search and text search capabilities.
* [contentSearchHelpArticles](#contentsearchhelparticles) - Search for Help Articles.

## contentGetContentById

Returns a content item referenced by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentGetContentByIdRequest;
import org.openapis.openapi.models.operations.ContentGetContentByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentGetContentByIdRequest req = new ContentGetContentByIdRequest(623564L, "deserunt") {{
                head = false;
            }};            

            ContentGetContentByIdResponse res = sdk.content.contentGetContentById(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentGetContentByTagAndType

Returns the newest item that matches a given tag and Content Type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentGetContentByTagAndTypeRequest;
import org.openapis.openapi.models.operations.ContentGetContentByTagAndTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentGetContentByTagAndTypeRequest req = new ContentGetContentByTagAndTypeRequest("suscipit", "iure", "magnam") {{
                head = false;
            }};            

            ContentGetContentByTagAndTypeResponse res = sdk.content.contentGetContentByTagAndType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentGetContentType

Gets an object describing a particular variant of content.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentGetContentTypeRequest;
import org.openapis.openapi.models.operations.ContentGetContentTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentGetContentTypeRequest req = new ContentGetContentTypeRequest("debitis");            

            ContentGetContentTypeResponse res = sdk.content.contentGetContentType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentRssNewsArticles

Returns a JSON string response that is the RSS feed for news articles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentRssNewsArticlesRequest;
import org.openapis.openapi.models.operations.ContentRssNewsArticlesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentRssNewsArticlesRequest req = new ContentRssNewsArticlesRequest("ipsa") {{
                categoryfilter = "delectus";
                includebody = false;
            }};            

            ContentRssNewsArticlesResponse res = sdk.content.contentRssNewsArticles(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentSearchContentByTagAndType

Searches for Content Items that match the given Tag and Content Type.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentSearchContentByTagAndTypeRequest;
import org.openapis.openapi.models.operations.ContentSearchContentByTagAndTypeResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentSearchContentByTagAndTypeRequest req = new ContentSearchContentByTagAndTypeRequest("tempora", "suscipit", "molestiae") {{
                currentpage = 791725;
                head = false;
                itemsperpage = 812169;
            }};            

            ContentSearchContentByTagAndTypeResponse res = sdk.content.contentSearchContentByTagAndType(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentSearchContentWithText

Gets content based on querystring information passed in. Provides basic search and text search capabilities.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentSearchContentWithTextRequest;
import org.openapis.openapi.models.operations.ContentSearchContentWithTextResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentSearchContentWithTextRequest req = new ContentSearchContentWithTextRequest("voluptatum") {{
                ctype = "iusto";
                currentpage = 568045;
                head = false;
                searchtext = "nisi";
                source = "recusandae";
                tag = "temporibus";
            }};            

            ContentSearchContentWithTextResponse res = sdk.content.contentSearchContentWithText(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## contentSearchHelpArticles

Search for Help Articles.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ContentSearchHelpArticlesRequest;
import org.openapis.openapi.models.operations.ContentSearchHelpArticlesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ContentSearchHelpArticlesRequest req = new ContentSearchHelpArticlesRequest("ab", "quis");            

            ContentSearchHelpArticlesResponse res = sdk.content.contentSearchHelpArticles(req);

            if (res.body != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
