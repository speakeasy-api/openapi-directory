# segmentQueryFilters

## Overview

Segment Query Filter Restv 2 Controller

### Available Operations

* [getSegmentQueryFiltersConfigUsingGET](#getsegmentqueryfiltersconfigusingget) - getSegmentQueryFiltersConfig
* [getSegmentQueryFiltersUsingGET](#getsegmentqueryfiltersusingget) - getSegmentQueryFilters
* [getSegmentQueryStandardFiltersUsingGET](#getsegmentquerystandardfiltersusingget) - getSegmentQueryStandardFilters
* [updateSegmentQueryFiltersConfigUsingPUT](#updatesegmentqueryfiltersconfigusingput) - updateSegmentQueryFiltersConfig

## getSegmentQueryFiltersConfigUsingGET

getSegmentQueryFiltersConfig

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSegmentQueryFiltersConfigUsingGETRequest;
import org.openapis.openapi.models.operations.GETSegmentQueryFiltersConfigUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETSegmentQueryFiltersConfigUsingGETRequest req = new GETSegmentQueryFiltersConfigUsingGETRequest("maxime");            

            GETSegmentQueryFiltersConfigUsingGETResponse res = sdk.segmentQueryFilters.getSegmentQueryFiltersConfigUsingGET(req);

            if (res.segmentQueryFilterConfigModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSegmentQueryFiltersUsingGET

getSegmentQueryFilters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSegmentQueryFiltersUsingGETRequest;
import org.openapis.openapi.models.operations.GETSegmentQueryFiltersUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETSegmentQueryFiltersUsingGETRequest req = new GETSegmentQueryFiltersUsingGETRequest("deleniti");            

            GETSegmentQueryFiltersUsingGETResponse res = sdk.segmentQueryFilters.getSegmentQueryFiltersUsingGET(req);

            if (res.segmentQueryFilterListModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getSegmentQueryStandardFiltersUsingGET

getSegmentQueryStandardFilters

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETSegmentQueryStandardFiltersUsingGETRequest;
import org.openapis.openapi.models.operations.GETSegmentQueryStandardFiltersUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETSegmentQueryStandardFiltersUsingGETRequest req = new GETSegmentQueryStandardFiltersUsingGETRequest("facilis");            

            GETSegmentQueryStandardFiltersUsingGETResponse res = sdk.segmentQueryFilters.getSegmentQueryStandardFiltersUsingGET(req);

            if (res.segmentQueryFilterListModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateSegmentQueryFiltersConfigUsingPUT

updateSegmentQueryFiltersConfig

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateSegmentQueryFiltersConfigUsingPUTRequest;
import org.openapis.openapi.models.operations.UpdateSegmentQueryFiltersConfigUsingPUTResponse;
import org.openapis.openapi.models.shared.SegmentQueryFilterConfigModel;
import org.openapis.openapi.models.shared.SegmentQueryFilterModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateSegmentQueryFiltersConfigUsingPUTRequest req = new UpdateSegmentQueryFiltersConfigUsingPUTRequest(                new SegmentQueryFilterConfigModel() {{
                                customFilters = new org.openapis.openapi.models.shared.SegmentQueryFilterModel[]{{
                                    add(new SegmentQueryFilterModel() {{
                                        key = "architecto";
                                        name = "Elvira Herman";
                                        options = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("sed", "saepe");
                                                put("pariatur", "accusantium");
                                                put("consequuntur", "praesentium");
                                                put("natus", "magni");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("quo", "illum");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("maxime", "ea");
                                                put("excepturi", "odit");
                                                put("ea", "accusantium");
                                                put("ab", "maiores");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("ipsam", "voluptate");
                                                put("autem", "nam");
                                                put("eaque", "pariatur");
                                            }}),
                                        }};
                                        type = "nemo";
                                    }}),
                                    add(new SegmentQueryFilterModel() {{
                                        key = "voluptatibus";
                                        name = "Miss Ginger Feeney";
                                        options = new java.util.HashMap<String, Object>[]{{
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("nobis", "dolores");
                                                put("quis", "totam");
                                                put("dignissimos", "eaque");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("nesciunt", "eos");
                                                put("perferendis", "dolores");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("quam", "dolor");
                                                put("vero", "nostrum");
                                                put("hic", "recusandae");
                                                put("omnis", "facilis");
                                            }}),
                                            add(new java.util.HashMap<String, Object>() {{
                                                put("voluptatem", "porro");
                                                put("consequuntur", "blanditiis");
                                                put("error", "eaque");
                                            }}),
                                        }};
                                        type = "occaecati";
                                    }}),
                                }};
                                hiddenFilters = new String[]{{
                                    add("adipisci"),
                                    add("asperiores"),
                                    add("earum"),
                                }};
                            }};, "modi");            

            UpdateSegmentQueryFiltersConfigUsingPUTResponse res = sdk.segmentQueryFilters.updateSegmentQueryFiltersConfigUsingPUT(req);

            if (res.segmentQueryFilterConfigModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
