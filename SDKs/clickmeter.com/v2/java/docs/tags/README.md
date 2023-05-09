# tags

### Available Operations

* [tagsCount](#tagscount) - List of all the groups associated to the user filtered by this tag.
* [tagsDelete](#tagsdelete) - Delete a tag
* [tagsDeleteRelatedDatapoints](#tagsdeleterelateddatapoints) - Delete the association of this tag with all datapoints
* [tagsDeleteRelatedGroups](#tagsdeleterelatedgroups) - Delete the association of this tag with all groups
* [tagsGet](#tagsget) - List of all the groups associated to the user filtered by this tag.
* [tagsGetDatapoints](#tagsgetdatapoints) - List of all the datapoints associated to the user filtered by this tag
* [tagsGetDatapointsCount](#tagsgetdatapointscount) - Count the datapoints associated to the user filtered by this tag
* [tagsGetGroups](#tagsgetgroups) - List of all the groups associated to the user filtered by this tag.
* [tagsGetGroupsCount](#tagsgetgroupscount) - Count the groups associated to the user filtered by this tag
* [tagsPatchDataPointForm](#tagspatchdatapointform) - Associate/Deassociate a tag with a datapoint
* [tagsPatchDataPointJson](#tagspatchdatapointjson) - Associate/Deassociate a tag with a datapoint
* [tagsPatchDataPointRaw](#tagspatchdatapointraw) - Associate/Deassociate a tag with a datapoint
* [tagsPatchGroupForm](#tagspatchgroupform) - Associate/Deassociate a tag with a group
* [tagsPatchGroupJson](#tagspatchgroupjson) - Associate/Deassociate a tag with a group
* [tagsPatchGroupRaw](#tagspatchgroupraw) - Associate/Deassociate a tag with a group
* [tagsPatchTagNameForm](#tagspatchtagnameform) - Fast patch a tag name
* [tagsPatchTagNameJson](#tagspatchtagnamejson) - Fast patch a tag name
* [tagsPatchTagNameRaw](#tagspatchtagnameraw) - Fast patch a tag name
* [tagsPut](#tagsput) - Create a tag
* [getTagsTagId](#gettagstagid) - Retrieve a tag

## tagsCount

List of all the groups associated to the user filtered by this tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsCountRequest;
import org.openapis.openapi.models.operations.TagsCountResponse;
import org.openapis.openapi.models.operations.TagsCountTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptate") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagsCountRequest req = new TagsCountRequest() {{
                datapoints = "consectetur";
                groups = "nesciunt";
                name = "Miss Patti Schiller";
                type = TagsCountTypeEnum.DP;
            }};            

            TagsCountResponse res = sdk.tags.tagsCount(req);

            if (res.systemObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagsDelete

Delete a tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsDeleteRequest;
import org.openapis.openapi.models.operations.TagsDeleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("et") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagsDeleteRequest req = new TagsDeleteRequest(704948L);            

            TagsDeleteResponse res = sdk.tags.tagsDelete(req);

            if (res.systemObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagsDeleteRelatedDatapoints

Delete the association of this tag with all datapoints

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsDeleteRelatedDatapointsRequest;
import org.openapis.openapi.models.operations.TagsDeleteRelatedDatapointsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("amet") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagsDeleteRelatedDatapointsRequest req = new TagsDeleteRelatedDatapointsRequest(418637L);            

            TagsDeleteRelatedDatapointsResponse res = sdk.tags.tagsDeleteRelatedDatapoints(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagsDeleteRelatedGroups

Delete the association of this tag with all groups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsDeleteRelatedGroupsRequest;
import org.openapis.openapi.models.operations.TagsDeleteRelatedGroupsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagsDeleteRelatedGroupsRequest req = new TagsDeleteRelatedGroupsRequest(5310L);            

            TagsDeleteRelatedGroupsResponse res = sdk.tags.tagsDeleteRelatedGroups(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagsGet

List of all the groups associated to the user filtered by this tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsGetRequest;
import org.openapis.openapi.models.operations.TagsGetResponse;
import org.openapis.openapi.models.operations.TagsGetTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagsGetRequest req = new TagsGetRequest() {{
                datapoints = "aut";
                groups = "quos";
                limit = 511222;
                name = "Dr. Patrick Beier";
                offset = 651228;
                type = TagsGetTypeEnum.GR;
            }};            

            TagsGetResponse res = sdk.tags.tagsGet(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagsGetDatapoints

List of all the datapoints associated to the user filtered by this tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsGetDatapointsRequest;
import org.openapis.openapi.models.operations.TagsGetDatapointsResponse;
import org.openapis.openapi.models.operations.TagsGetDatapointsStatusEnum;
import org.openapis.openapi.models.operations.TagsGetDatapointsTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagsGetDatapointsRequest req = new TagsGetDatapointsRequest(152027L) {{
                createdAfter = "voluptatem";
                createdBefore = "alias";
                limit = 910073;
                offset = 941668;
                status = TagsGetDatapointsStatusEnum.DELETED;
                textSearch = "incidunt";
                type = TagsGetDatapointsTypeEnum.TP;
            }};            

            TagsGetDatapointsResponse res = sdk.tags.tagsGetDatapoints(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagsGetDatapointsCount

Count the datapoints associated to the user filtered by this tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsGetDatapointsCountRequest;
import org.openapis.openapi.models.operations.TagsGetDatapointsCountResponse;
import org.openapis.openapi.models.operations.TagsGetDatapointsCountStatusEnum;
import org.openapis.openapi.models.operations.TagsGetDatapointsCountTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagsGetDatapointsCountRequest req = new TagsGetDatapointsCountRequest(895912L) {{
                createdAfter = "harum";
                createdBefore = "explicabo";
                status = TagsGetDatapointsCountStatusEnum.DELETED;
                textSearch = "aliquid";
                type = TagsGetDatapointsCountTypeEnum.TP;
            }};            

            TagsGetDatapointsCountResponse res = sdk.tags.tagsGetDatapointsCount(req);

            if (res.apiCoreResponsesCountResponce != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagsGetGroups

List of all the groups associated to the user filtered by this tag.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsGetGroupsRequest;
import org.openapis.openapi.models.operations.TagsGetGroupsResponse;
import org.openapis.openapi.models.operations.TagsGetGroupsStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagsGetGroupsRequest req = new TagsGetGroupsRequest(975095L) {{
                createdAfter = "molestias";
                createdBefore = "officia";
                limit = 730478;
                offset = 520678;
                status = TagsGetGroupsStatusEnum.DELETED;
                textSearch = "aliquid";
            }};            

            TagsGetGroupsResponse res = sdk.tags.tagsGetGroups(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagsGetGroupsCount

Count the groups associated to the user filtered by this tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsGetGroupsCountRequest;
import org.openapis.openapi.models.operations.TagsGetGroupsCountResponse;
import org.openapis.openapi.models.operations.TagsGetGroupsCountStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ea") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagsGetGroupsCountRequest req = new TagsGetGroupsCountRequest(774501L) {{
                createdAfter = "ducimus";
                createdBefore = "odit";
                status = TagsGetGroupsCountStatusEnum.DELETED;
                textSearch = "reiciendis";
            }};            

            TagsGetGroupsCountResponse res = sdk.tags.tagsGetGroupsCount(req);

            if (res.apiCoreResponsesCountResponce != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagsPatchDataPointForm

Associate/Deassociate a tag with a datapoint

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsPatchDataPointFormRequest;
import org.openapis.openapi.models.operations.TagsPatchDataPointFormResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsPatchBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellat") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagsPatchDataPointFormRequest req = new TagsPatchDataPointFormRequest(                new ApiCoreRequestsPatchBody() {{
                                action = "nulla";
                                id = 671116L;
                            }};, 617657L);            

            TagsPatchDataPointFormResponse res = sdk.tags.tagsPatchDataPointForm(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagsPatchDataPointJson

Associate/Deassociate a tag with a datapoint

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsPatchDataPointJsonRequest;
import org.openapis.openapi.models.operations.TagsPatchDataPointJsonResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsPatchBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagsPatchDataPointJsonRequest req = new TagsPatchDataPointJsonRequest(                new ApiCoreRequestsPatchBody() {{
                                action = "doloremque";
                                id = 392967L;
                            }};, 700856L);            

            TagsPatchDataPointJsonResponse res = sdk.tags.tagsPatchDataPointJson(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagsPatchDataPointRaw

Associate/Deassociate a tag with a datapoint

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsPatchDataPointRawRequest;
import org.openapis.openapi.models.operations.TagsPatchDataPointRawResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsPatchBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("recusandae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagsPatchDataPointRawRequest req = new TagsPatchDataPointRawRequest("voluptates".getBytes(), 251627L);            

            TagsPatchDataPointRawResponse res = sdk.tags.tagsPatchDataPointRaw(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagsPatchGroupForm

Associate/Deassociate a tag with a group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsPatchGroupFormRequest;
import org.openapis.openapi.models.operations.TagsPatchGroupFormResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsPatchBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("rem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagsPatchGroupFormRequest req = new TagsPatchGroupFormRequest(                new ApiCoreRequestsPatchBody() {{
                                action = "quia";
                                id = 354225L;
                            }};, 786860L);            

            TagsPatchGroupFormResponse res = sdk.tags.tagsPatchGroupForm(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagsPatchGroupJson

Associate/Deassociate a tag with a group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsPatchGroupJsonRequest;
import org.openapis.openapi.models.operations.TagsPatchGroupJsonResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsPatchBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dicta") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagsPatchGroupJsonRequest req = new TagsPatchGroupJsonRequest(                new ApiCoreRequestsPatchBody() {{
                                action = "voluptatibus";
                                id = 754901L;
                            }};, 62035L);            

            TagsPatchGroupJsonResponse res = sdk.tags.tagsPatchGroupJson(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagsPatchGroupRaw

Associate/Deassociate a tag with a group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsPatchGroupRawRequest;
import org.openapis.openapi.models.operations.TagsPatchGroupRawResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsPatchBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagsPatchGroupRawRequest req = new TagsPatchGroupRawRequest("architecto".getBytes(), 100251L);            

            TagsPatchGroupRawResponse res = sdk.tags.tagsPatchGroupRaw(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagsPatchTagNameForm

Fast patch a tag name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsPatchTagNameFormRequest;
import org.openapis.openapi.models.operations.TagsPatchTagNameFormResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsGenericTextPatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("enim") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagsPatchTagNameFormRequest req = new TagsPatchTagNameFormRequest(                new ApiCoreRequestsGenericTextPatch() {{
                                text = "optio";
                            }};, 525951L);            

            TagsPatchTagNameFormResponse res = sdk.tags.tagsPatchTagNameForm(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagsPatchTagNameJson

Fast patch a tag name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsPatchTagNameJsonRequest;
import org.openapis.openapi.models.operations.TagsPatchTagNameJsonResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsGenericTextPatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("perferendis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagsPatchTagNameJsonRequest req = new TagsPatchTagNameJsonRequest(                new ApiCoreRequestsGenericTextPatch() {{
                                text = "facilis";
                            }};, 967055L);            

            TagsPatchTagNameJsonResponse res = sdk.tags.tagsPatchTagNameJson(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagsPatchTagNameRaw

Fast patch a tag name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsPatchTagNameRawRequest;
import org.openapis.openapi.models.operations.TagsPatchTagNameRawResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsGenericTextPatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("a") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagsPatchTagNameRawRequest req = new TagsPatchTagNameRawRequest("iste".getBytes(), 117819L);            

            TagsPatchTagNameRawResponse res = sdk.tags.tagsPatchTagNameRaw(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagsPut

Create a tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagsPutResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoTagsTag;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreDtoTagsTag req = new ApiCoreDtoTagsTag() {{
                datapoints = new Long[]{{
                    add(295950L),
                    add(266284L),
                }};
                groups = new Long[]{{
                    add(807419L),
                    add(265905L),
                    add(163558L),
                    add(828147L),
                }};
                id = 876840L;
                name = "Edmund Sawayn";
            }};            

            TagsPutResponse res = sdk.tags.tagsPut(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTagsTagId

Retrieve a tag

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTagsTagIdRequest;
import org.openapis.openapi.models.operations.GetTagsTagIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTagsTagIdRequest req = new GetTagsTagIdRequest(66074L);            

            GetTagsTagIdResponse res = sdk.tags.getTagsTagId(req);

            if (res.apiCoreDtoTagsTag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
