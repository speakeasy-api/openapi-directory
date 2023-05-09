# groups

## Overview

Registry artifacts can be collected together using groups. This section includes all of the primary operations related to groups.

### Available Operations

* [createGroup](#creategroup) - Create a new group
* [deleteGroupById](#deletegroupbyid) - Delete a group by the specified ID.
* [getGroupById](#getgroupbyid) - Get a group by the specified ID.
* [listGroups](#listgroups) - List groups

## createGroup

Creates a new group.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)
* The group already exist (HTTP error `409`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateGroupResponse;
import org.openapis.openapi.models.shared.CreateGroupMetaData;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateGroupMetaData req = new CreateGroupMetaData("error") {{
                description = "temporibus";
                properties = new java.util.HashMap<String, String>() {{
                    put("quasi", "reiciendis");
                    put("voluptatibus", "vero");
                    put("nihil", "praesentium");
                }};
            }};            

            CreateGroupResponse res = sdk.groups.createGroup(req);

            if (res.groupMetaData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteGroupById

Deletes a group by identifier.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)
* The group does not exist (HTTP error `404`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteGroupByIdRequest;
import org.openapis.openapi.models.operations.DeleteGroupByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteGroupByIdRequest req = new DeleteGroupByIdRequest(""my-group"");            

            DeleteGroupByIdResponse res = sdk.groups.deleteGroupById(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroupById

Returns a group using the specified id.

This operation can fail for the following reasons:

* No group exists with the specified ID (HTTP error `404`)
* A server error occurred (HTTP error `500`)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupByIdRequest;
import org.openapis.openapi.models.operations.GetGroupByIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetGroupByIdRequest req = new GetGroupByIdRequest(""my-group"");            

            GetGroupByIdResponse res = sdk.groups.getGroupById(req);

            if (res.groupMetaData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listGroups

Returns a list of all groups.  This list is paged.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListGroupsRequest;
import org.openapis.openapi.models.operations.ListGroupsResponse;
import org.openapis.openapi.models.shared.SortByEnum;
import org.openapis.openapi.models.shared.SortOrderEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListGroupsRequest req = new ListGroupsRequest() {{
                limit = 976762L;
                offset = 55714L;
                order = SortOrderEnum.DESC;
                orderby = SortByEnum.NAME;
            }};            

            ListGroupsResponse res = sdk.groups.listGroups(req);

            if (res.groupSearchResults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
