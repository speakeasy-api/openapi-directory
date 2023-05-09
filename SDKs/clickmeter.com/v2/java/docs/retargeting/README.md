# retargeting

### Available Operations

* [retargetingCount](#retargetingcount) - Retrieve count of retargeting scripts
* [retargetingDelete](#retargetingdelete) - Deletes a retargeting script (and remove associations)
* [retargetingGet](#retargetingget) - List of all the retargeting scripts associated to the user
* [retargetingGetDatapoints](#retargetinggetdatapoints) - List of all the datapoints associated to the retargeting script.
* [retargetingGetDatapointsCount](#retargetinggetdatapointscount) - Count the datapoints associated to the retargeting script.
* [retargetingPostForm](#retargetingpostform) - Updates a retargeting script
* [retargetingPostJson](#retargetingpostjson) - Updates a retargeting script
* [retargetingPostRaw](#retargetingpostraw) - Updates a retargeting script
* [retargetingPutForm](#retargetingputform) - Creates a retargeting script
* [retargetingPutJson](#retargetingputjson) - Creates a retargeting script
* [retargetingPutRaw](#retargetingputraw) - Creates a retargeting script
* [getRetargetingId](#getretargetingid) - Get a retargeting script object

## retargetingCount

Retrieve count of retargeting scripts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetargetingCountResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("temporibus") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetargetingCountResponse res = sdk.retargeting.retargetingCount();

            if (res.apiCoreResponsesCountResponce != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retargetingDelete

Deletes a retargeting script (and remove associations)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetargetingDeleteRequest;
import org.openapis.openapi.models.operations.RetargetingDeleteResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officia") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetargetingDeleteRequest req = new RetargetingDeleteRequest(228857L);            

            RetargetingDeleteResponse res = sdk.retargeting.retargetingDelete(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retargetingGet

List of all the retargeting scripts associated to the user

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetargetingGetRequest;
import org.openapis.openapi.models.operations.RetargetingGetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tenetur") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetargetingGetRequest req = new RetargetingGetRequest() {{
                limit = 133949;
                offset = 778276;
            }};            

            RetargetingGetResponse res = sdk.retargeting.retargetingGet(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retargetingGetDatapoints

List of all the datapoints associated to the retargeting script.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetargetingGetDatapointsRequest;
import org.openapis.openapi.models.operations.RetargetingGetDatapointsResponse;
import org.openapis.openapi.models.operations.RetargetingGetDatapointsSortDirectionEnum;
import org.openapis.openapi.models.operations.RetargetingGetDatapointsStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("itaque") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetargetingGetDatapointsRequest req = new RetargetingGetDatapointsRequest(848346L) {{
                createdAfter = "laborum";
                createdBefore = "dignissimos";
                limit = 876285;
                offset = 185348;
                onlyFavorites = false;
                sortBy = "consectetur";
                sortDirection = RetargetingGetDatapointsSortDirectionEnum.DESC;
                status = RetargetingGetDatapointsStatusEnum.DELETED;
                tags = "explicabo";
                textSearch = "exercitationem";
            }};            

            RetargetingGetDatapointsResponse res = sdk.retargeting.retargetingGetDatapoints(req);

            if (res.apiCoreResponsesEntitiesResponseApiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retargetingGetDatapointsCount

Count the datapoints associated to the retargeting script.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetargetingGetDatapointsCountRequest;
import org.openapis.openapi.models.operations.RetargetingGetDatapointsCountResponse;
import org.openapis.openapi.models.operations.RetargetingGetDatapointsCountStatusEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nihil") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetargetingGetDatapointsCountRequest req = new RetargetingGetDatapointsCountRequest(252700L) {{
                createdAfter = "ab";
                createdBefore = "illo";
                onlyFavorites = false;
                status = RetargetingGetDatapointsCountStatusEnum.SPAM;
                tags = "deserunt";
                textSearch = "delectus";
            }};            

            RetargetingGetDatapointsCountResponse res = sdk.retargeting.retargetingGetDatapointsCount(req);

            if (res.apiCoreResponsesCountResponce != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retargetingPostForm

Updates a retargeting script

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetargetingPostFormRequest;
import org.openapis.openapi.models.operations.RetargetingPostFormResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoRetargetingRetargetingScript;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetargetingPostFormRequest req = new RetargetingPostFormRequest(                new ApiCoreDtoRetargetingRetargetingScript() {{
                                id = 719389L;
                                name = "Annette Green";
                                script = "modi";
                            }};, 450209L);            

            RetargetingPostFormResponse res = sdk.retargeting.retargetingPostForm(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retargetingPostJson

Updates a retargeting script

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetargetingPostJsonRequest;
import org.openapis.openapi.models.operations.RetargetingPostJsonResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoRetargetingRetargetingScript;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("explicabo") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetargetingPostJsonRequest req = new RetargetingPostJsonRequest(                new ApiCoreDtoRetargetingRetargetingScript() {{
                                id = 879857L;
                                name = "Kevin Conroy";
                                script = "voluptate";
                            }};, 626707L);            

            RetargetingPostJsonResponse res = sdk.retargeting.retargetingPostJson(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retargetingPostRaw

Updates a retargeting script

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetargetingPostRawRequest;
import org.openapis.openapi.models.operations.RetargetingPostRawResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoRetargetingRetargetingScript;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("minima") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            RetargetingPostRawRequest req = new RetargetingPostRawRequest("libero".getBytes(), 300189L);            

            RetargetingPostRawResponse res = sdk.retargeting.retargetingPostRaw(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retargetingPutForm

Creates a retargeting script

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetargetingPutFormResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoRetargetingRetargetingScript;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sit") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreDtoRetargetingRetargetingScript req = new ApiCoreDtoRetargetingRetargetingScript() {{
                id = 266788L;
                name = "Robin O'Hara";
                script = "nostrum";
            }};            

            RetargetingPutFormResponse res = sdk.retargeting.retargetingPutForm(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retargetingPutJson

Creates a retargeting script

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetargetingPutJsonResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoRetargetingRetargetingScript;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("molestiae") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.ApiCoreDtoRetargetingRetargetingScript req = new ApiCoreDtoRetargetingRetargetingScript() {{
                id = 330600L;
                name = "Mr. Stephen Gleason";
                script = "odio";
            }};            

            RetargetingPutJsonResponse res = sdk.retargeting.retargetingPutJson(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## retargetingPutRaw

Creates a retargeting script

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RetargetingPutRawResponse;
import org.openapis.openapi.models.shared.ApiCoreDtoRetargetingRetargetingScript;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("commodi") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.. req = "numquam".getBytes()            

            RetargetingPutRawResponse res = sdk.retargeting.retargetingPutRaw(req);

            if (res.apiCoreResponsesEntityUriSystemInt64 != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRetargetingId

Get a retargeting script object

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRetargetingIdRequest;
import org.openapis.openapi.models.operations.GetRetargetingIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetRetargetingIdRequest req = new GetRetargetingIdRequest(823718L);            

            GetRetargetingIdResponse res = sdk.retargeting.getRetargetingId(req);

            if (res.apiCoreDtoRetargetingRetargetingScript != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
