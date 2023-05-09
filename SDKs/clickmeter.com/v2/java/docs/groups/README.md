# groups

### Available Operations

* [groupsCount](#groupscount) - Count the groups associated to the user.
* [groupsDelete](#groupsdelete) - Delete group specified by id
* [groupsGet](#groupsget) - List of all the groups associated to the user.
* [groupsGetDatapoints](#groupsgetdatapoints) - List of all the datapoints associated to the user in this group.
* [groupsGetDatapointsCount](#groupsgetdatapointscount) - Count the datapoints associated to the user in this group.
* [groupsGetDatapointsSummary](#groupsgetdatapointssummary) - Retrieve statistics about a subset of datapoints for a timeframe with datapoints data
* [groupsGetHits](#groupsgethits) - Retrieve the list of events related to this group.
* [groupsGetStatisticsAggregatedSingle](#groupsgetstatisticsaggregatedsingle) - Retrieve statistics about this customer for a timeframe by groups
* [groupsGetStatisticsAllList](#groupsgetstatisticsalllist) - Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)
* [groupsGetStatisticsList](#groupsgetstatisticslist) - Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)
* [groupsGetStatisticsSingle](#groupsgetstatisticssingle) - Retrieve statistics about this group for a timeframe
* [groupsPatchFavourite](#groupspatchfavourite) - Fast switch the "favourite" field of a group
* [groupsPatchNotesForm](#groupspatchnotesform) - Fast patch the "notes" field of a group
* [groupsPatchNotesJson](#groupspatchnotesjson) - Fast patch the "notes" field of a group
* [groupsPatchNotesRaw](#groupspatchnotesraw) - Fast patch the "notes" field of a group
* [groupsPost](#groupspost) - Update a group
* [groupsPut](#groupsput) - Create a group
* [groupsPutDatapoint](#groupsputdatapoint) - Create a datapoint in this group
* [getGroupsId](#getgroupsid) - Get a group

## groupsCount

Count the groups associated to the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsCountRequest;
import org.openapis.openapi.models.operations.GroupsCountResponse;
import org.openapis.openapi.models.operations.GroupsCountStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("beatae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GroupsCountRequest req = new GroupsCountRequest() {{
                createdAfter = "unde";
                createdBefore = "molestiae";
                status = GroupsCountStatusEnum.ACTIVE;
                tags = "cupiditate";
                textSearch = "fugit";
                write = false;
            }};            

            GroupsCountResponse res = sdk.groups.groupsCount(req);

            if (res.apiCoreResponsesCountResponce != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupsDelete

Delete group specified by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsDeleteRequest;
import org.openapis.openapi.models.operations.GroupsDeleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("numquam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GroupsDeleteRequest req = new GroupsDeleteRequest(256916L);            

            GroupsDeleteResponse res = sdk.groups.groupsDelete(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupsGet

List of all the groups associated to the user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsGetRequest;
import org.openapis.openapi.models.operations.GroupsGetResponse;
import org.openapis.openapi.models.operations.GroupsGetStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nesciunt") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GroupsGetRequest req = new GroupsGetRequest() {{
                createdAfter = "at";
                createdBefore = "officia";
                limit = 491892;
                offset = 760744;
                status = GroupsGetStatusEnum.ACTIVE;
                tags = "corporis";
                textSearch = "qui";
                write = false;
            }};            

            GroupsGetResponse res = sdk.groups.groupsGet(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupsGetDatapoints

List of all the datapoints associated to the user in this group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsGetDatapointsRequest;
import org.openapis.openapi.models.operations.GroupsGetDatapointsResponse;
import org.openapis.openapi.models.operations.GroupsGetDatapointsSortDirectionEnum;
import org.openapis.openapi.models.operations.GroupsGetDatapointsStatusEnum;
import org.openapis.openapi.models.operations.GroupsGetDatapointsTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("expedita") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GroupsGetDatapointsRequest req = new GroupsGetDatapointsRequest(532669L) {{
                createdAfter = "cupiditate";
                createdBefore = "minima";
                limit = 809594;
                offset = 316542;
                onlyFavorites = false;
                sortBy = "neque";
                sortDirection = GroupsGetDatapointsSortDirectionEnum.ASC;
                status = GroupsGetDatapointsStatusEnum.SPAM;
                tags = "eum";
                textSearch = "modi";
                type = GroupsGetDatapointsTypeEnum.TP;
            }};            

            GroupsGetDatapointsResponse res = sdk.groups.groupsGetDatapoints(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupsGetDatapointsCount

Count the datapoints associated to the user in this group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsGetDatapointsCountRequest;
import org.openapis.openapi.models.operations.GroupsGetDatapointsCountResponse;
import org.openapis.openapi.models.operations.GroupsGetDatapointsCountStatusEnum;
import org.openapis.openapi.models.operations.GroupsGetDatapointsCountTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GroupsGetDatapointsCountRequest req = new GroupsGetDatapointsCountRequest(914971L) {{
                createdAfter = "maiores";
                createdBefore = "tempore";
                onlyFavorites = false;
                status = GroupsGetDatapointsCountStatusEnum.DELETED;
                tags = "libero";
                textSearch = "ratione";
                type = GroupsGetDatapointsCountTypeEnum.TP;
            }};            

            GroupsGetDatapointsCountResponse res = sdk.groups.groupsGetDatapointsCount(req);

            if (res.apiCoreResponsesCountResponce != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupsGetDatapointsSummary

Retrieve statistics about a subset of datapoints for a timeframe with datapoints data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsGetDatapointsSummaryRequest;
import org.openapis.openapi.models.operations.GroupsGetDatapointsSummaryResponse;
import org.openapis.openapi.models.operations.GroupsGetDatapointsSummarySortDirectionEnum;
import org.openapis.openapi.models.operations.GroupsGetDatapointsSummaryStatusEnum;
import org.openapis.openapi.models.operations.GroupsGetDatapointsSummaryTimeFrameEnum;
import org.openapis.openapi.models.operations.GroupsGetDatapointsSummaryTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("totam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GroupsGetDatapointsSummaryRequest req = new GroupsGetDatapointsSummaryRequest(577709L, GroupsGetDatapointsSummaryTimeFrameEnum.CURRENTMONTH) {{
                favourite = false;
                fromDay = "quo";
                limit = 242099;
                offset = 795591;
                sortBy = "fuga";
                sortDirection = GroupsGetDatapointsSummarySortDirectionEnum.ASC;
                status = GroupsGetDatapointsSummaryStatusEnum.ACTIVE;
                tag = "impedit";
                textSearch = "delectus";
                toDay = "tempore";
                type = GroupsGetDatapointsSummaryTypeEnum.TL;
            }};            

            GroupsGetDatapointsSummaryResponse res = sdk.groups.groupsGetDatapointsSummary(req);

            if (res.apiCoreDtoAggregatedAggregatedSummaryResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupsGetHits

Retrieve the list of events related to this group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsGetHitsFilterEnum;
import org.openapis.openapi.models.operations.GroupsGetHitsRequest;
import org.openapis.openapi.models.operations.GroupsGetHitsResponse;
import org.openapis.openapi.models.operations.GroupsGetHitsTimeframeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GroupsGetHitsRequest req = new GroupsGetHitsRequest(997437L, GroupsGetHitsTimeframeEnum.LAST180) {{
                filter = GroupsGetHitsFilterEnum.UNIQUES;
                fromDay = "reprehenderit";
                limit = 45234;
                offset = "odio";
                toDay = "minima";
            }};            

            GroupsGetHitsResponse res = sdk.groups.groupsGetHits(req);

            if (res.apiCoreDtoClickStreamHitListPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupsGetStatisticsAggregatedSingle

Retrieve statistics about this customer for a timeframe by groups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsGetStatisticsAggregatedSingleRequest;
import org.openapis.openapi.models.operations.GroupsGetStatisticsAggregatedSingleResponse;
import org.openapis.openapi.models.operations.GroupsGetStatisticsAggregatedSingleStatusEnum;
import org.openapis.openapi.models.operations.GroupsGetStatisticsAggregatedSingleTimeFrameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GroupsGetStatisticsAggregatedSingleRequest req = new GroupsGetStatisticsAggregatedSingleRequest(GroupsGetStatisticsAggregatedSingleTimeFrameEnum.LAST90) {{
                favourite = false;
                fromDay = "excepturi";
                hourly = false;
                status = GroupsGetStatisticsAggregatedSingleStatusEnum.DELETED;
                tag = "error";
                toDay = "veritatis";
            }};            

            GroupsGetStatisticsAggregatedSingleResponse res = sdk.groups.groupsGetStatisticsAggregatedSingle(req);

            if (res.apiCoreDtoAggregatedAggregatedResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupsGetStatisticsAllList

Retrieve statistics about all groups of this customer for a timeframe grouped by some temporal entity (day/week/month)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsGetStatisticsAllListGroupByEnum;
import org.openapis.openapi.models.operations.GroupsGetStatisticsAllListRequest;
import org.openapis.openapi.models.operations.GroupsGetStatisticsAllListResponse;
import org.openapis.openapi.models.operations.GroupsGetStatisticsAllListTimeFrameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GroupsGetStatisticsAllListRequest req = new GroupsGetStatisticsAllListRequest(GroupsGetStatisticsAllListTimeFrameEnum.PREVIOUSMONTH) {{
                favourite = false;
                fromDay = "pariatur";
                groupBy = GroupsGetStatisticsAllListGroupByEnum.ACTIVE;
                status = "similique";
                tag = "optio";
                toDay = "ex";
            }};            

            GroupsGetStatisticsAllListResponse res = sdk.groups.groupsGetStatisticsAllList(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupsGetStatisticsList

Retrieve statistics about this group for a timeframe grouped by some temporal entity (day/week/month)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsGetStatisticsListGroupByEnum;
import org.openapis.openapi.models.operations.GroupsGetStatisticsListRequest;
import org.openapis.openapi.models.operations.GroupsGetStatisticsListResponse;
import org.openapis.openapi.models.operations.GroupsGetStatisticsListTimeFrameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quaerat") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GroupsGetStatisticsListRequest req = new GroupsGetStatisticsListRequest(416692L, GroupsGetStatisticsListTimeFrameEnum.BEGINNING) {{
                fromDay = "placeat";
                groupBy = GroupsGetStatisticsListGroupByEnum.MONTH;
                toDay = "exercitationem";
            }};            

            GroupsGetStatisticsListResponse res = sdk.groups.groupsGetStatisticsList(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupsGetStatisticsSingle

Retrieve statistics about this group for a timeframe

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsGetStatisticsSingleRequest;
import org.openapis.openapi.models.operations.GroupsGetStatisticsSingleResponse;
import org.openapis.openapi.models.operations.GroupsGetStatisticsSingleTimeFrameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quam") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GroupsGetStatisticsSingleRequest req = new GroupsGetStatisticsSingleRequest(211455L, GroupsGetStatisticsSingleTimeFrameEnum.LAST30) {{
                fromDay = "ipsa";
                hourly = false;
                toDay = "sint";
            }};            

            GroupsGetStatisticsSingleResponse res = sdk.groups.groupsGetStatisticsSingle(req);

            if (res.apiCoreDtoAggregatedAggregatedResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupsPatchFavourite

Fast switch the "favourite" field of a group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsPatchFavouriteRequest;
import org.openapis.openapi.models.operations.GroupsPatchFavouriteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vero") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GroupsPatchFavouriteRequest req = new GroupsPatchFavouriteRequest(194901L);            

            GroupsPatchFavouriteResponse res = sdk.groups.groupsPatchFavourite(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupsPatchNotesForm

Fast patch the "notes" field of a group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsPatchNotesFormRequest;
import org.openapis.openapi.models.operations.GroupsPatchNotesFormResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsGenericTextPatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repudiandae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GroupsPatchNotesFormRequest req = new GroupsPatchNotesFormRequest(                new ApiCoreRequestsGenericTextPatch() {{
                                text = "cum";
                            }};, 120120L);            

            GroupsPatchNotesFormResponse res = sdk.groups.groupsPatchNotesForm(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupsPatchNotesJson

Fast patch the "notes" field of a group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsPatchNotesJsonRequest;
import org.openapis.openapi.models.operations.GroupsPatchNotesJsonResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsGenericTextPatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("earum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GroupsPatchNotesJsonRequest req = new GroupsPatchNotesJsonRequest(                new ApiCoreRequestsGenericTextPatch() {{
                                text = "veniam";
                            }};, 659268L);            

            GroupsPatchNotesJsonResponse res = sdk.groups.groupsPatchNotesJson(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupsPatchNotesRaw

Fast patch the "notes" field of a group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsPatchNotesRawRequest;
import org.openapis.openapi.models.operations.GroupsPatchNotesRawResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsGenericTextPatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolores") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GroupsPatchNotesRawRequest req = new GroupsPatchNotesRawRequest("nam".getBytes(), 115898L);            

            GroupsPatchNotesRawResponse res = sdk.groups.groupsPatchNotesRaw(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupsPost

Update a group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsPostRequest;
import org.openapis.openapi.models.operations.GroupsPostResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoGroupsGroup;
import org.openapis.openapi.models.shared.ApiCoreDtoTagsTag;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("consequuntur") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GroupsPostRequest req = new GroupsPostRequest(                new ApiCoreDtoGroupsGroup() {{
                                creationDate = "20120203120530";
                                deleted = false;
                                id = 899867L;
                                isPublic = false;
                                name = "Larry Kuphal Sr.";
                                notes = "laboriosam";
                                preferred = false;
                                redirectOnly = false;
                                tags = new org.openapis.openapi.models.shared.ApiCoreDtoTagsTag[]{{
                                    add(new ApiCoreDtoTagsTag() {{
                                        datapoints = new Long[]{{
                                            add(566506L),
                                            add(578210L),
                                            add(367917L),
                                        }};
                                        groups = new Long[]{{
                                            add(342342L),
                                            add(988749L),
                                        }};
                                        id = 757364L;
                                        name = "Ronnie Welch";
                                    }}),
                                    add(new ApiCoreDtoTagsTag() {{
                                        datapoints = new Long[]{{
                                            add(564667L),
                                            add(484966L),
                                            add(51170L),
                                        }};
                                        groups = new Long[]{{
                                            add(104078L),
                                            add(554645L),
                                            add(614438L),
                                            add(826862L),
                                        }};
                                        id = 731634L;
                                        name = "Lee Batz";
                                    }}),
                                    add(new ApiCoreDtoTagsTag() {{
                                        datapoints = new Long[]{{
                                            add(216870L),
                                            add(238011L),
                                            add(903150L),
                                        }};
                                        groups = new Long[]{{
                                            add(42924L),
                                            add(339756L),
                                            add(333072L),
                                        }};
                                        id = 727481L;
                                        name = "Mae Krajcik";
                                    }}),
                                    add(new ApiCoreDtoTagsTag() {{
                                        datapoints = new Long[]{{
                                            add(298187L),
                                            add(932296L),
                                        }};
                                        groups = new Long[]{{
                                            add(993002L),
                                        }};
                                        id = 330267L;
                                        name = "Chelsea Langworth";
                                    }}),
                                }};
                                writePermited = false;
                            }};, 227362L);            

            GroupsPostResponse res = sdk.groups.groupsPost(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupsPut

Create a group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsPutResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoGroupsGroup;
import org.openapis.openapi.models.shared.ApiCoreDtoTagsTag;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("exercitationem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreDtoGroupsGroup req = new ApiCoreDtoGroupsGroup() {{
                creationDate = "20120203120530";
                deleted = false;
                id = 68852L;
                isPublic = false;
                name = "Flora Renner";
                notes = "quaerat";
                preferred = false;
                redirectOnly = false;
                tags = new org.openapis.openapi.models.shared.ApiCoreDtoTagsTag[]{{
                    add(new ApiCoreDtoTagsTag() {{
                        datapoints = new Long[]{{
                            add(392430L),
                            add(335977L),
                            add(391933L),
                        }};
                        groups = new Long[]{{
                            add(794507L),
                            add(815200L),
                            add(706061L),
                        }};
                        id = 217663L;
                        name = "Shari Wiza";
                    }}),
                    add(new ApiCoreDtoTagsTag() {{
                        datapoints = new Long[]{{
                            add(700928L),
                            add(179795L),
                        }};
                        groups = new Long[]{{
                            add(345506L),
                            add(207296L),
                        }};
                        id = 480061L;
                        name = "Jordan Romaguera";
                    }}),
                    add(new ApiCoreDtoTagsTag() {{
                        datapoints = new Long[]{{
                            add(495617L),
                            add(220104L),
                            add(118041L),
                            add(622894L),
                        }};
                        groups = new Long[]{{
                            add(111496L),
                            add(491591L),
                            add(458970L),
                            add(854115L),
                        }};
                        id = 322333L;
                        name = "Jill Wintheiser";
                    }}),
                }};
                writePermited = false;
            }};            

            GroupsPutResponse res = sdk.groups.groupsPut(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## groupsPutDatapoint

Create a datapoint in this group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GroupsPutDatapointRequest;
import org.openapis.openapi.models.operations.GroupsPutDatapointResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsBrowserBaseDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapoint;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointRetargetingInfo;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointStatusEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointTypeEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecifics;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsTrackingPixelSpecifics;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUniqueDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByLanguageItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByNationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoDatapointsWeightedDestinationItem;
import org.openapis.openapi.models.shared.ApiCoreDtoTagsTag;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GroupsPutDatapointRequest req = new GroupsPutDatapointRequest(                new ApiCoreDtoDatapointsDatapoint() {{
                                creationDate = "20120203120530";
                                encodeIp = false;
                                fifthConversionId = 72350L;
                                fifthConversionName = "ab";
                                firstConversionId = 280114L;
                                firstConversionName = "accusamus";
                                fourthConversionId = 902581L;
                                fourthConversionName = "tempore";
                                groupId = 334018L;
                                groupName = "eos";
                                id = 970079L;
                                isPublic = false;
                                isSecured = false;
                                lightTracking = false;
                                name = "Roland Lakin";
                                notes = "quisquam";
                                preferred = false;
                                redirectOnly = false;
                                secondConversionId = 197259L;
                                secondConversionName = "nihil";
                                status = ApiCoreDtoDatapointsDatapointStatusEnum.ABUSE;
                                tags = new org.openapis.openapi.models.shared.ApiCoreDtoTagsTag[]{{
                                    add(new ApiCoreDtoTagsTag() {{
                                        datapoints = new Long[]{{
                                            add(828841L),
                                            add(304173L),
                                        }};
                                        groups = new Long[]{{
                                            add(591065L),
                                            add(514993L),
                                            add(921719L),
                                            add(9683L),
                                        }};
                                        id = 805264L;
                                        name = "Candice Rath";
                                    }}),
                                }};
                                thirdConversionId = 922299L;
                                thirdConversionName = "rerum";
                                title = "Ms.";
                                trackingCode = "corporis";
                                type = ApiCoreDtoDatapointsDatapointTypeEnum.TRACKING_PIXEL;
                                typeTL = new ApiCoreDtoDatapointsTrackingLinkSpecifics() {{
                                    appendQuery = false;
                                    browserDestinationItem = new ApiCoreDtoDatapointsBrowserBaseDestinationItem() {{
                                        emailDestinationUrl = "similique";
                                        mobileDestinationUrl = "repellendus";
                                        spidersDestinationUrl = "iure";
                                    }};;
                                    destinationMode = ApiCoreDtoDatapointsTrackingLinkSpecificsDestinationModeEnum.DESTINATION_BY_LANGUAGE;
                                    domainId = 413801;
                                    encodeUrl = false;
                                    expirationClicks = 771226L;
                                    expirationDate = "20120203120530";
                                    firstUrl = "commodi";
                                    goDomainId = 12171;
                                    hideUrl = false;
                                    hideUrlTitle = "voluptatem";
                                    isABTest = false;
                                    password = "ad";
                                    pauseAfterClicksExpiration = false;
                                    pauseAfterDateExpiration = false;
                                    randomDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                        add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                            url = "amet";
                                        }}),
                                    }};
                                    redirectType = ApiCoreDtoDatapointsTrackingLinkSpecificsRedirectTypeEnum.TEMPORARY_REDIRECT;
                                    referrerClean = ApiCoreDtoDatapointsTrackingLinkSpecificsReferrerCleanEnum.CLEAN;
                                    scripts = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsDatapointRetargetingInfo[]{{
                                        add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                                            id = 736853L;
                                            name = "Joyce Carroll DVM";
                                        }}),
                                        add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                                            id = 479707L;
                                            name = "Shelly Pagac";
                                        }}),
                                        add(new ApiCoreDtoDatapointsDatapointRetargetingInfo() {{
                                            id = 920272L;
                                            name = "Vivian Kreiger";
                                        }}),
                                    }};
                                    sequentialDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                        add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                            url = "aperiam";
                                        }}),
                                        add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                            url = "sint";
                                        }}),
                                        add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                            url = "accusamus";
                                        }}),
                                    }};
                                    spilloverDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsMultipleDestinationItem[]{{
                                        add(new ApiCoreDtoDatapointsMultipleDestinationItem() {{
                                            url = "totam";
                                        }}),
                                    }};
                                    uniqueDestinationItem = new ApiCoreDtoDatapointsUniqueDestinationItem() {{
                                        firstDestinationUrl = "dicta";
                                    }};;
                                    url = "voluptatem";
                                    urlAfterClicksExpiration = "velit";
                                    urlAfterDateExpiration = "dolor";
                                    urlsByLanguage = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByLanguageItem[]{{
                                        add(new ApiCoreDtoDatapointsUrlByLanguageItem() {{
                                            languageCode = "a";
                                            url = "dolor";
                                        }}),
                                    }};
                                    urlsByNation = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsUrlByNationItem[]{{
                                        add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                            nation = "atque";
                                            url = "beatae";
                                        }}),
                                        add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                            nation = "at";
                                            url = "labore";
                                        }}),
                                        add(new ApiCoreDtoDatapointsUrlByNationItem() {{
                                            nation = "minus";
                                            url = "esse";
                                        }}),
                                    }};
                                    weightedDestinationItems = new org.openapis.openapi.models.shared.ApiCoreDtoDatapointsWeightedDestinationItem[]{{
                                        add(new ApiCoreDtoDatapointsWeightedDestinationItem() {{
                                            url = "perferendis";
                                            weight = 698558;
                                        }}),
                                    }};
                                }};;
                                typeTP = new ApiCoreDtoDatapointsTrackingPixelSpecifics() {{
                                    parameterNote = "ea";
                                }};;
                                writePermited = false;
                            }};, 46791L);            

            GroupsPutDatapointResponse res = sdk.groups.groupsPutDatapoint(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getGroupsId

Get a group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetGroupsIdRequest;
import org.openapis.openapi.models.operations.GetGroupsIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dignissimos") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetGroupsIdRequest req = new GetGroupsIdRequest(998026L);            

            GetGroupsIdResponse res = sdk.groups.getGroupsId(req);

            if (res.apiCoreDtoGroupsGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
