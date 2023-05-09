# tags

## Overview

A tag is a label that can be attached to any task in Asana. It exists in a single workspace or organization.

Tags have some metadata associated with them, but it is possible that we will simplify them in the future so it is not encouraged to rely too heavily on it. Unlike projects, tags do not provide any ordering on the tasks they are associated with.

### Available Operations

* [createTag](#createtag) - Create a tag
* [createTagForWorkspace](#createtagforworkspace) - Create a tag in a workspace
* [deleteTag](#deletetag) - Delete a tag
* [getTag](#gettag) - Get a tag
* [getTags](#gettags) - Get multiple tags
* [getTagsForTask](#gettagsfortask) - Get a task's tags
* [getTagsForWorkspace](#gettagsforworkspace) - Get tags in a workspace
* [updateTag](#updatetag) - Update a tag

## createTag

Creates a new tag in a workspace or organization.

Every tag is required to be created in a specific workspace or
organization, and this cannot be changed once set. Note that you can use
the workspace parameter regardless of whether or not it is an
organization.

Returns the full record of the newly created tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTagRequest;
import org.openapis.openapi.models.operations.CreateTagRequestBodyInput;
import org.openapis.openapi.models.operations.CreateTagResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagRequestColorEnum;
import org.openapis.openapi.models.shared.TagRequestInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateTagRequest req = new CreateTagRequest(                new CreateTagRequestBodyInput() {{
                                data = new TagRequestInput() {{
                                    color = TagRequestColorEnum.LIGHT_GREEN;
                                    followers = new String[]{{
                                        add("aliquam"),
                                        add("fugit"),
                                        add("accusamus"),
                                        add("inventore"),
                                    }};
                                    name = "Stuff to buy";
                                    notes = "Mittens really likes the stuff from Humboldt.";
                                    workspace = "12345";
                                }};;
                            }};) {{
                optFields = new String[]{{
                    add("et"),
                    add("dolorum"),
                }};
                optPretty = false;
            }};            

            CreateTagResponse res = sdk.tags.createTag(req);

            if (res.createTag201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createTagForWorkspace

Creates a new tag in a workspace or organization.

Every tag is required to be created in a specific workspace or
organization, and this cannot be changed once set. Note that you can use
the workspace parameter regardless of whether or not it is an
organization.

Returns the full record of the newly created tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateTagForWorkspaceRequest;
import org.openapis.openapi.models.operations.CreateTagForWorkspaceRequestBodyInput;
import org.openapis.openapi.models.operations.CreateTagForWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TagResponseColorEnum;
import org.openapis.openapi.models.shared.TagResponseInput;
import org.openapis.openapi.models.shared.WorkspaceCompactInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CreateTagForWorkspaceRequest req = new CreateTagForWorkspaceRequest(                new CreateTagForWorkspaceRequestBodyInput() {{
                                data = new TagResponseInput() {{
                                    color = TagResponseColorEnum.LIGHT_GREEN;
                                    name = "Stuff to buy";
                                    notes = "Mittens really likes the stuff from Humboldt.";
                                    workspace = new WorkspaceCompactInput() {{
                                        name = "My Company Workspace";
                                    }};;
                                }};;
                            }};, "laborum") {{
                optFields = new String[]{{
                    add("velit"),
                    add("eum"),
                    add("autem"),
                    add("nobis"),
                }};
                optPretty = false;
            }};            

            CreateTagForWorkspaceResponse res = sdk.tags.createTagForWorkspace(req);

            if (res.createTagForWorkspace201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteTag

A specific, existing tag can be deleted by making a DELETE request on
the URL for that tag.

Returns an empty data record.

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
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteTagRequest req = new DeleteTagRequest("quas") {{
                limit = 829603L;
                offset = "nulla";
                optFields = new String[]{{
                    add("libero"),
                    add("quasi"),
                }};
                optPretty = false;
            }};            

            DeleteTagResponse res = sdk.tags.deleteTag(req);

            if (res.deleteTag200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTag

Returns the complete tag record for a single tag.

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
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTagRequest req = new GetTagRequest("tempora") {{
                limit = 256139L;
                offset = "explicabo";
                optFields = new String[]{{
                    add("ipsa"),
                    add("molestiae"),
                    add("magnam"),
                }};
                optPretty = false;
            }};            

            GetTagResponse res = sdk.tags.getTag(req);

            if (res.getTag200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTags

Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.

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
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTagsRequest req = new GetTagsRequest() {{
                limit = 487935L;
                offset = "eius";
                optFields = new String[]{{
                    add("esse"),
                    add("rem"),
                }};
                optPretty = false;
                workspace = "fuga";
            }};            

            GetTagsResponse res = sdk.tags.getTags(req);

            if (res.getTags200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsForTask

Get a compact representation of all of the tags the task has.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsForTaskRequest;
import org.openapis.openapi.models.operations.GetTagsForTaskResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTagsForTaskRequest req = new GetTagsForTaskRequest("reprehenderit") {{
                limit = 695626L;
                offset = "fugiat";
                optFields = new String[]{{
                    add("eum"),
                    add("suscipit"),
                }};
                optPretty = false;
            }};            

            GetTagsForTaskResponse res = sdk.tags.getTagsForTask(req);

            if (res.getTagsForTask200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsForWorkspace

Returns the compact tag records for some filtered set of tags. Use one or more of the parameters provided to filter the tags returned.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsForWorkspaceRequest;
import org.openapis.openapi.models.operations.GetTagsForWorkspaceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetTagsForWorkspaceRequest req = new GetTagsForWorkspaceRequest("assumenda") {{
                limit = 181151L;
                offset = "praesentium";
                optFields = new String[]{{
                    add("veritatis"),
                    add("ipsa"),
                    add("id"),
                    add("quidem"),
                }};
                optPretty = false;
            }};            

            GetTagsForWorkspaceResponse res = sdk.tags.getTagsForWorkspace(req);

            if (res.getTagsForWorkspace200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateTag

Updates the properties of a tag. Only the fields provided in the `data`
block will be updated; any unspecified fields will remain unchanged.

When using this method, it is best to specify only those fields you wish
to change, or else you may overwrite changes made by another user since
you last retrieved the tag.

Returns the complete updated tag record.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateTagRequest;
import org.openapis.openapi.models.operations.UpdateTagResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UpdateTagRequest req = new UpdateTagRequest("neque") {{
                limit = 778696L;
                offset = "illum";
                optFields = new String[]{{
                    add("fuga"),
                    add("eius"),
                    add("eos"),
                    add("voluptas"),
                }};
                optPretty = false;
            }};            

            UpdateTagResponse res = sdk.tags.updateTag(req);

            if (res.updateTag200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
