# conversions

### Available Operations

* [conversionsCount](#conversionscount) - Retrieve a count of conversions
* [conversionsDelete](#conversionsdelete) - Delete conversion specified by id
* [conversionsGet](#conversionsget) - Retrieve a list of conversions
* [conversionsGetDatapoints](#conversionsgetdatapoints) - Retrieve a list of datapoints connected to this conversion
* [conversionsGetDatapointsCount](#conversionsgetdatapointscount) - Retrieve a count of datapoints connected to this conversion
* [conversionsGetHits](#conversionsgethits) - Retrieve the list of events related to this conversion.
* [conversionsGetStatisticsAllList](#conversionsgetstatisticsalllist) - Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)
* [conversionsGetStatisticsList](#conversionsgetstatisticslist) - Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)
* [conversionsGetStatisticsSingle](#conversionsgetstatisticssingle) - Retrieve statistics about this conversion for a timeframe
* [conversionsPatchNotesForm](#conversionspatchnotesform) - Fast patch the "notes" field of a conversion
* [conversionsPatchNotesJson](#conversionspatchnotesjson) - Fast patch the "notes" field of a conversion
* [conversionsPatchNotesRaw](#conversionspatchnotesraw) - Fast patch the "notes" field of a conversion
* [conversionsPatchForm](#conversionspatchform) - Modify the association between a conversion and a datapoint
* [conversionsPatchJson](#conversionspatchjson) - Modify the association between a conversion and a datapoint
* [conversionsPatchRaw](#conversionspatchraw) - Modify the association between a conversion and a datapoint
* [conversionsPostForm](#conversionspostform) - Update conversion specified by id
* [conversionsPostJson](#conversionspostjson) - Update conversion specified by id
* [conversionsPostRaw](#conversionspostraw) - Update conversion specified by id
* [conversionsPutForm](#conversionsputform) - Create a conversion
* [conversionsPutJson](#conversionsputjson) - Create a conversion
* [conversionsPutRaw](#conversionsputraw) - Create a conversion
* [getConversionsConversionId](#getconversionsconversionid) - Retrieve conversion specified by id
* [putConversionsConversionIdDatapointsBatchPatch](#putconversionsconversioniddatapointsbatchpatch) - Modify the association between a conversion and multiple datapoints

## conversionsCount

Retrieve a count of conversions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsCountRequest;
import org.openapis.openapi.models.operations.ConversionsCountResponse;
import org.openapis.openapi.models.operations.ConversionsCountStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConversionsCountRequest req = new ConversionsCountRequest() {{
                createdAfter = "sunt";
                createdBefore = "ullam";
                status = ConversionsCountStatusEnum.ACTIVE;
                textSearch = "hic";
            }};            

            ConversionsCountResponse res = sdk.conversions.conversionsCount(req);

            if (res.apiCoreResponsesCountResponce != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsDelete

Delete conversion specified by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsDeleteRequest;
import org.openapis.openapi.models.operations.ConversionsDeleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("voluptatem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConversionsDeleteRequest req = new ConversionsDeleteRequest(765326L);            

            ConversionsDeleteResponse res = sdk.conversions.conversionsDelete(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsGet

Retrieve a list of conversions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsGetRequest;
import org.openapis.openapi.models.operations.ConversionsGetResponse;
import org.openapis.openapi.models.operations.ConversionsGetStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("soluta") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConversionsGetRequest req = new ConversionsGetRequest() {{
                createdAfter = "nobis";
                createdBefore = "et";
                limit = 903720;
                offset = 217450;
                status = ConversionsGetStatusEnum.DELETED;
                textSearch = "nobis";
            }};            

            ConversionsGetResponse res = sdk.conversions.conversionsGet(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsGetDatapoints

Retrieve a list of datapoints connected to this conversion

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsGetDatapointsRequest;
import org.openapis.openapi.models.operations.ConversionsGetDatapointsResponse;
import org.openapis.openapi.models.operations.ConversionsGetDatapointsStatusEnum;
import org.openapis.openapi.models.operations.ConversionsGetDatapointsTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quos") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConversionsGetDatapointsRequest req = new ConversionsGetDatapointsRequest(731694L) {{
                createdAfter = "cupiditate";
                createdBefore = "aperiam";
                limit = 961937;
                offset = 209157;
                status = ConversionsGetDatapointsStatusEnum.ACTIVE;
                tags = "labore";
                textSearch = "adipisci";
                type = ConversionsGetDatapointsTypeEnum.TL;
            }};            

            ConversionsGetDatapointsResponse res = sdk.conversions.conversionsGetDatapoints(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsGetDatapointsCount

Retrieve a count of datapoints connected to this conversion

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsGetDatapointsCountRequest;
import org.openapis.openapi.models.operations.ConversionsGetDatapointsCountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("architecto") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConversionsGetDatapointsCountRequest req = new ConversionsGetDatapointsCountRequest(63038L) {{
                createdAfter = "aut";
                createdBefore = "quas";
                status = "itaque";
                tags = "consequatur";
                textSearch = "est";
                type = "repellendus";
            }};            

            ConversionsGetDatapointsCountResponse res = sdk.conversions.conversionsGetDatapointsCount(req);

            if (res.apiCoreResponsesCountResponce != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsGetHits

Retrieve the list of events related to this conversion.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsGetHitsFilterEnum;
import org.openapis.openapi.models.operations.ConversionsGetHitsRequest;
import org.openapis.openapi.models.operations.ConversionsGetHitsResponse;
import org.openapis.openapi.models.operations.ConversionsGetHitsTimeframeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("porro") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConversionsGetHitsRequest req = new ConversionsGetHitsRequest(984330L, ConversionsGetHitsTimeframeEnum.LAST30) {{
                filter = ConversionsGetHitsFilterEnum.NONUNIQUES;
                fromDay = "cupiditate";
                limit = 181631;
                offset = "quae";
                toDay = "laudantium";
            }};            

            ConversionsGetHitsResponse res = sdk.conversions.conversionsGetHits(req);

            if (res.apiCoreDtoClickStreamHitListPage != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsGetStatisticsAllList

Retrieve statistics about this customer for a timeframe related to a subset of conversions grouped by some temporal entity (day/week/month)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsGetStatisticsAllListGroupByEnum;
import org.openapis.openapi.models.operations.ConversionsGetStatisticsAllListRequest;
import org.openapis.openapi.models.operations.ConversionsGetStatisticsAllListResponse;
import org.openapis.openapi.models.operations.ConversionsGetStatisticsAllListStatusEnum;
import org.openapis.openapi.models.operations.ConversionsGetStatisticsAllListTimeFrameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odio") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConversionsGetStatisticsAllListRequest req = new ConversionsGetStatisticsAllListRequest(ConversionsGetStatisticsAllListTimeFrameEnum.LAST120) {{
                fromDay = "voluptatibus";
                groupBy = ConversionsGetStatisticsAllListGroupByEnum.MONTH;
                status = ConversionsGetStatisticsAllListStatusEnum.ACTIVE;
                toDay = "omnis";
            }};            

            ConversionsGetStatisticsAllListResponse res = sdk.conversions.conversionsGetStatisticsAllList(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsGetStatisticsList

Retrieve statistics about this conversion for a timeframe grouped by some temporal entity (day/week/month)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsGetStatisticsListGroupByEnum;
import org.openapis.openapi.models.operations.ConversionsGetStatisticsListRequest;
import org.openapis.openapi.models.operations.ConversionsGetStatisticsListResponse;
import org.openapis.openapi.models.operations.ConversionsGetStatisticsListTimeFrameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConversionsGetStatisticsListRequest req = new ConversionsGetStatisticsListRequest(218403L, ConversionsGetStatisticsListTimeFrameEnum.CUSTOM) {{
                fromDay = "voluptate";
                groupBy = ConversionsGetStatisticsListGroupByEnum.WEEK;
                toDay = "vero";
            }};            

            ConversionsGetStatisticsListResponse res = sdk.conversions.conversionsGetStatisticsList(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreDtoAggregatedAggregatedResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsGetStatisticsSingle

Retrieve statistics about this conversion for a timeframe

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsGetStatisticsSingleRequest;
import org.openapis.openapi.models.operations.ConversionsGetStatisticsSingleResponse;
import org.openapis.openapi.models.operations.ConversionsGetStatisticsSingleTimeFrameEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConversionsGetStatisticsSingleRequest req = new ConversionsGetStatisticsSingleRequest(492268L, ConversionsGetStatisticsSingleTimeFrameEnum.CUSTOM) {{
                favourite = false;
                fromDay = "distinctio";
                hourly = false;
                tag = "quod";
                toDay = "odio";
            }};            

            ConversionsGetStatisticsSingleResponse res = sdk.conversions.conversionsGetStatisticsSingle(req);

            if (res.apiCoreDtoAggregatedAggregatedResult != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsPatchNotesForm

Fast patch the "notes" field of a conversion

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsPatchNotesFormRequest;
import org.openapis.openapi.models.operations.ConversionsPatchNotesFormResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsGenericTextPatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("similique") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConversionsPatchNotesFormRequest req = new ConversionsPatchNotesFormRequest(                new ApiCoreRequestsGenericTextPatch() {{
                                text = "facilis";
                            }};, 874288L);            

            ConversionsPatchNotesFormResponse res = sdk.conversions.conversionsPatchNotesForm(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsPatchNotesJson

Fast patch the "notes" field of a conversion

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsPatchNotesJsonRequest;
import org.openapis.openapi.models.operations.ConversionsPatchNotesJsonResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsGenericTextPatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ducimus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConversionsPatchNotesJsonRequest req = new ConversionsPatchNotesJsonRequest(                new ApiCoreRequestsGenericTextPatch() {{
                                text = "dolore";
                            }};, 844550L);            

            ConversionsPatchNotesJsonResponse res = sdk.conversions.conversionsPatchNotesJson(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsPatchNotesRaw

Fast patch the "notes" field of a conversion

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsPatchNotesRawRequest;
import org.openapis.openapi.models.operations.ConversionsPatchNotesRawResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsGenericTextPatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConversionsPatchNotesRawRequest req = new ConversionsPatchNotesRawRequest("sequi".getBytes(), 617877L);            

            ConversionsPatchNotesRawResponse res = sdk.conversions.conversionsPatchNotesRaw(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsPatchForm

Modify the association between a conversion and a datapoint

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsPatchFormRequest;
import org.openapis.openapi.models.operations.ConversionsPatchFormResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsConversionPatchBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConversionsPatchFormRequest req = new ConversionsPatchFormRequest(                new ApiCoreRequestsConversionPatchBody() {{
                                action = "aut";
                                id = 974259L;
                                replaceId = 347233L;
                            }};, 862310L);            

            ConversionsPatchFormResponse res = sdk.conversions.conversionsPatchForm(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsPatchJson

Modify the association between a conversion and a datapoint

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsPatchJsonRequest;
import org.openapis.openapi.models.operations.ConversionsPatchJsonResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsConversionPatchBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fugit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConversionsPatchJsonRequest req = new ConversionsPatchJsonRequest(                new ApiCoreRequestsConversionPatchBody() {{
                                action = "porro";
                                id = 981830L;
                                replaceId = 985033L;
                            }};, 478370L);            

            ConversionsPatchJsonResponse res = sdk.conversions.conversionsPatchJson(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsPatchRaw

Modify the association between a conversion and a datapoint

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsPatchRawRequest;
import org.openapis.openapi.models.operations.ConversionsPatchRawResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsConversionPatchBody;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eligendi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConversionsPatchRawRequest req = new ConversionsPatchRawRequest("ducimus".getBytes(), 4048L);            

            ConversionsPatchRawResponse res = sdk.conversions.conversionsPatchRaw(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsPostForm

Update conversion specified by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsPostFormRequest;
import org.openapis.openapi.models.operations.ConversionsPostFormResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoConversionsConversion;
import org.openapis.openapi.models.shared.ApiCoreDtoConversionsConversionProtocolEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConversionsPostFormRequest req = new ConversionsPostFormRequest(                new ApiCoreDtoConversionsConversion() {{
                                code = "tempora";
                                creationDate = "20120203120530";
                                deleted = false;
                                description = "ipsam";
                                id = 410492L;
                                name = "Jessie Schuster";
                                protocol = ApiCoreDtoConversionsConversionProtocolEnum.HTTP;
                                value = 5113.19;
                            }};, 120657L);            

            ConversionsPostFormResponse res = sdk.conversions.conversionsPostForm(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsPostJson

Update conversion specified by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsPostJsonRequest;
import org.openapis.openapi.models.operations.ConversionsPostJsonResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoConversionsConversion;
import org.openapis.openapi.models.shared.ApiCoreDtoConversionsConversionProtocolEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConversionsPostJsonRequest req = new ConversionsPostJsonRequest(                new ApiCoreDtoConversionsConversion() {{
                                code = "maiores";
                                creationDate = "20120203120530";
                                deleted = false;
                                description = "quasi";
                                id = 406120L;
                                name = "Marshall Wiza";
                                protocol = ApiCoreDtoConversionsConversionProtocolEnum.HTTPS;
                                value = 9065.56;
                            }};, 411372L);            

            ConversionsPostJsonResponse res = sdk.conversions.conversionsPostJson(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsPostRaw

Update conversion specified by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsPostRawRequest;
import org.openapis.openapi.models.operations.ConversionsPostRawResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoConversionsConversion;
import org.openapis.openapi.models.shared.ApiCoreDtoConversionsConversionProtocolEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("impedit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConversionsPostRawRequest req = new ConversionsPostRawRequest("corporis".getBytes(), 333145L);            

            ConversionsPostRawResponse res = sdk.conversions.conversionsPostRaw(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsPutForm

Create a conversion

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsPutFormResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoConversionsConversion;
import org.openapis.openapi.models.shared.ApiCoreDtoConversionsConversionProtocolEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreDtoConversionsConversion req = new ApiCoreDtoConversionsConversion() {{
                code = "inventore";
                creationDate = "20120203120530";
                deleted = false;
                description = "magnam";
                id = 407241L;
                name = "Glenn Walter";
                protocol = ApiCoreDtoConversionsConversionProtocolEnum.HTTP;
                value = 9528.71;
            }};            

            ConversionsPutFormResponse res = sdk.conversions.conversionsPutForm(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsPutJson

Create a conversion

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsPutJsonResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoConversionsConversion;
import org.openapis.openapi.models.shared.ApiCoreDtoConversionsConversionProtocolEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("libero") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreDtoConversionsConversion req = new ApiCoreDtoConversionsConversion() {{
                code = "aut";
                creationDate = "20120203120530";
                deleted = false;
                description = "aut";
                id = 533466L;
                name = "Jim Corkery I";
                protocol = ApiCoreDtoConversionsConversionProtocolEnum.HTTP;
                value = 6774.12;
            }};            

            ConversionsPutJsonResponse res = sdk.conversions.conversionsPutJson(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## conversionsPutRaw

Create a conversion

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConversionsPutRawResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoConversionsConversion;
import org.openapis.openapi.models.shared.ApiCoreDtoConversionsConversionProtocolEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laborum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = "placeat".getBytes()            

            ConversionsPutRawResponse res = sdk.conversions.conversionsPutRaw(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConversionsConversionId

Retrieve conversion specified by id

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConversionsConversionIdRequest;
import org.openapis.openapi.models.operations.GetConversionsConversionIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("velit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetConversionsConversionIdRequest req = new GetConversionsConversionIdRequest(432148L);            

            GetConversionsConversionIdResponse res = sdk.conversions.getConversionsConversionId(req);

            if (res.apiCoreDtoConversionsConversion != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putConversionsConversionIdDatapointsBatchPatch

Modify the association between a conversion and multiple datapoints

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutConversionsConversionIdDatapointsBatchPatchRequest;
import org.openapis.openapi.models.operations.PutConversionsConversionIdDatapointsBatchPatchResponse;
import org.openapis.openapi.models.shared.ApiCoreRequestsPatchBody;
import org.openapis.openapi.models.shared.ApiCoreRequestsPatchBodyBatch;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("autem") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            PutConversionsConversionIdDatapointsBatchPatchRequest req = new PutConversionsConversionIdDatapointsBatchPatchRequest(                new ApiCoreRequestsPatchBodyBatch() {{
                                patchRequests = new org.openapis.openapi.models.shared.ApiCoreRequestsPatchBody[]{{
                                    add(new ApiCoreRequestsPatchBody() {{
                                        action = "quas";
                                        id = 829603L;
                                    }}),
                                    add(new ApiCoreRequestsPatchBody() {{
                                        action = "nulla";
                                        id = 379034L;
                                    }}),
                                    add(new ApiCoreRequestsPatchBody() {{
                                        action = "libero";
                                        id = 96549L;
                                    }}),
                                    add(new ApiCoreRequestsPatchBody() {{
                                        action = "tempora";
                                        id = 256139L;
                                    }}),
                                }};
                            }};, 131482L);            

            PutConversionsConversionIdDatapointsBatchPatchResponse res = sdk.conversions.putConversionsConversionIdDatapointsBatchPatch(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
