# tags

## Overview

With these endpoints you can manage Tags. Tags are stored under a Product. You can  and add a Tag to a Feature Flag or Setting using the [Update Flag](#operation/update-setting) endpoint.

### Available Operations

* [createTag](#createtag) - Create Tag
* [deleteTag](#deletetag) - Delete Tag
* [getSettingsByTag](#getsettingsbytag) - List Settings by Tag
* [getTag](#gettag) - Get Tag
* [getTags](#gettags) - List Tags
* [updateTag](#updatetag) - Update Tag

## createTag

This endpoint creates a new Tag in a specified Product 
identified by the `productId` parameter, which can be obtained from the [List Products](#operation/get-products) endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTagRequest;
import org.openapis.openapi.models.operations.CreateTagResponse;
import org.openapis.openapi.models.shared.CreateTagModel;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi", "labore") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            CreateTagRequest req = new CreateTagRequest(                new CreateTagModel("expedita") {{
                                color = "in";
                            }};, "c15dfbac-e188-4b1c-8ee2-c8c6ce611fee");            

            CreateTagResponse res = sdk.tags.createTag(req);

            if (res.tagModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTag

This endpoint deletes a Tag identified by the `tagId` parameter. To remove a Tag from a Feature Flag or Setting use the [Update Flag](#operation/update-setting) endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTagRequest;
import org.openapis.openapi.models.operations.DeleteTagResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem", "illo") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            DeleteTagRequest req = new DeleteTagRequest(778242L);            

            DeleteTagResponse res = sdk.tags.deleteTag(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSettingsByTag

This endpoint returns the list of the Settings that 
has the specified Tag, identified by the `tagId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetSettingsByTagRequest;
import org.openapis.openapi.models.operations.GetSettingsByTagResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos", "minus") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetSettingsByTagRequest req = new GetSettingsByTagRequest(717560L);            

            GetSettingsByTagResponse res = sdk.tags.getSettingsByTag(req);

            if (res.settingModelHaljsons != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTag

This endpoint returns the metadata of a Tag 
identified by the `tagId`.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagRequest;
import org.openapis.openapi.models.operations.GetTagResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("possimus", "cum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetTagRequest req = new GetTagRequest(382342L);            

            GetTagResponse res = sdk.tags.getTag(req);

            if (res.tagModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTags

This endpoint returns the list of the Tags in a 
specified Product, identified by the `productId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsRequest;
import org.openapis.openapi.models.operations.GetTagsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe", "earum") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            GetTagsRequest req = new GetTagsRequest("c74378ba-2531-4774-bdc9-15ad2caf5dd6");            

            GetTagsResponse res = sdk.tags.getTags(req);

            if (res.tagModelHaljsons != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTag

This endpoint updates a Tag identified by the `tagId` parameter.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTagRequest;
import org.openapis.openapi.models.operations.UpdateTagResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateTagModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse", "explicabo") {{
                    password = "YOUR_PASSWORD_HERE";
                    username = "YOUR_USERNAME_HERE";
                }})
                .build();

            UpdateTagRequest req = new UpdateTagRequest(                new UpdateTagModel() {{
                                color = "consectetur";
                                name = "Benny Beier";
                            }};, 633643L);            

            UpdateTagResponse res = sdk.tags.updateTag(req);

            if (res.tagModelHaljson != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
