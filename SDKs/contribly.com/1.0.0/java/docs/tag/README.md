# tag

## Overview

Create and list tags and tag sets

### Available Operations

* [getTags](#gettags) - List tags
* [getTagsId](#gettagsid) - Retrieve a single tag by id
* [getTagsets](#gettagsets) - List tag sets
* [getTagsetsId](#gettagsetsid) - Retrieve a single tag set by id
* [postTags](#posttags) - Create a new tag
* [postTagsets](#posttagsets) - Create a new tag set

## getTags

Retrieve tags.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsRequest;
import org.openapis.openapi.models.operations.GetTagsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsRequest req = new GetTagsRequest() {{
                ownedBy = "esse";
                tagSet = "labore";
                urlWords = "veritatis";
            }};            

            GetTagsResponse res = sdk.tag.getTags(req);

            if (res.tags != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsId

Retrieve a single tag by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsIdRequest;
import org.openapis.openapi.models.operations.GetTagsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsIdRequest req = new GetTagsIdRequest("vero");            

            GetTagsIdResponse res = sdk.tag.getTagsId(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsets

Retrieve tag sets.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsetsRequest;
import org.openapis.openapi.models.operations.GetTagsetsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsetsRequest req = new GetTagsetsRequest() {{
                ownedBy = "consectetur";
                urlWords = "vitae";
            }};            

            GetTagsetsResponse res = sdk.tag.getTagsets(req);

            if (res.tagSets != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsetsId

Retrieve a single tag set by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsetsIdRequest;
import org.openapis.openapi.models.operations.GetTagsetsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTagsetsIdRequest req = new GetTagsetsIdRequest("inventore");            

            GetTagsetsIdResponse res = sdk.tag.getTagsetsId(req);

            if (res.tagSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTags

Create a new tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTagsResponse;
import org.openapis.openapi.models.shared.TagSet;
import org.openapis.openapi.models.shared.TagSubmission;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TagSubmission req = new TagSubmission("dolorem") {{
                colour = "ad";
                tagSet = new TagSet("qui", "iste");;
                urlWords = "ex";
            }};            

            PostTagsResponse res = sdk.tag.postTags(req);

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTagsets

Create a new tag set

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTagsetsResponse;
import org.openapis.openapi.models.shared.TagSetSubmission;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TagSetSubmission req = new TagSetSubmission("nemo", "soluta");            

            PostTagsetsResponse res = sdk.tag.postTagsets(req);

            if (res.tagSet != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
