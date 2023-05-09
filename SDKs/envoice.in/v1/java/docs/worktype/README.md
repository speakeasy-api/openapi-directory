# workType

### Available Operations

* [workTypeApiAll](#worktypeapiall) - Return all work types for the account
* [workTypeApiDeleteForm](#worktypeapideleteform) - Delete an existing work type
* [workTypeApiDeleteJson](#worktypeapideletejson) - Delete an existing work type
* [workTypeApiDeleteRaw](#worktypeapideleteraw) - Delete an existing work type
* [workTypeApiDetails](#worktypeapidetails) - Return work type details
* [workTypeApiNewForm](#worktypeapinewform) - Create a work type
* [workTypeApiNewJson](#worktypeapinewjson) - Create a work type
* [workTypeApiNewRaw](#worktypeapinewraw) - Create a work type
* [workTypeApiSearch](#worktypeapisearch) - Return all work types for the account that match the query param
* [workTypeApiUpdateForm](#worktypeapiupdateform) - Update an existing work type
* [workTypeApiUpdateJson](#worktypeapiupdatejson) - Update an existing work type
* [workTypeApiUpdateRaw](#worktypeapiupdateraw) - Update an existing work type

## workTypeApiAll

Return all work types for the account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkTypeApiAllRequest;
import org.openapis.openapi.models.operations.WorkTypeApiAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkTypeApiAllRequest req = new WorkTypeApiAllRequest("quas", "ipsum");            

            WorkTypeApiAllResponse res = sdk.workType.workTypeApiAll(req);

            if (res.workTypeDetailsApiModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workTypeApiDeleteForm

Delete an existing work type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkTypeApiDeleteFormRequest;
import org.openapis.openapi.models.operations.WorkTypeApiDeleteFormResponse;
import org.openapis.openapi.models.shared.WorkTypeDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkTypeApiDeleteFormRequest req = new WorkTypeApiDeleteFormRequest(                new WorkTypeDeleteApiModel() {{
                                id = 874283;
                            }};, "fuga", "facilis");            

            WorkTypeApiDeleteFormResponse res = sdk.workType.workTypeApiDeleteForm(req);

            if (res.workTypeApiDeleteForm200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workTypeApiDeleteJson

Delete an existing work type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkTypeApiDeleteJsonRequest;
import org.openapis.openapi.models.operations.WorkTypeApiDeleteJsonResponse;
import org.openapis.openapi.models.shared.WorkTypeDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkTypeApiDeleteJsonRequest req = new WorkTypeApiDeleteJsonRequest(                new WorkTypeDeleteApiModel() {{
                                id = 983060;
                            }};, "error", "recusandae");            

            WorkTypeApiDeleteJsonResponse res = sdk.workType.workTypeApiDeleteJson(req);

            if (res.workTypeApiDeleteJSON200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workTypeApiDeleteRaw

Delete an existing work type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkTypeApiDeleteRawRequest;
import org.openapis.openapi.models.operations.WorkTypeApiDeleteRawResponse;
import org.openapis.openapi.models.shared.WorkTypeDeleteApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkTypeApiDeleteRawRequest req = new WorkTypeApiDeleteRawRequest("a".getBytes(), "consectetur", "sapiente");            

            WorkTypeApiDeleteRawResponse res = sdk.workType.workTypeApiDeleteRaw(req);

            if (res.workTypeApiDeleteRaw200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workTypeApiDetails

Return work type details

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkTypeApiDetailsRequest;
import org.openapis.openapi.models.operations.WorkTypeApiDetailsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkTypeApiDetailsRequest req = new WorkTypeApiDetailsRequest(977641, "assumenda", "repellendus");            

            WorkTypeApiDetailsResponse res = sdk.workType.workTypeApiDetails(req);

            if (res.workTypeDetailsApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workTypeApiNewForm

Create a work type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkTypeApiNewFormRequest;
import org.openapis.openapi.models.operations.WorkTypeApiNewFormResponse;
import org.openapis.openapi.models.shared.WorkTypeCreateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkTypeApiNewFormRequest req = new WorkTypeApiNewFormRequest(                new WorkTypeCreateApiModel() {{
                                title = "Miss";
                            }};, "delectus", "odio");            

            WorkTypeApiNewFormResponse res = sdk.workType.workTypeApiNewForm(req);

            if (res.workTypeApiNewForm200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workTypeApiNewJson

Create a work type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkTypeApiNewJsonRequest;
import org.openapis.openapi.models.operations.WorkTypeApiNewJsonResponse;
import org.openapis.openapi.models.shared.WorkTypeCreateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkTypeApiNewJsonRequest req = new WorkTypeApiNewJsonRequest(                new WorkTypeCreateApiModel() {{
                                title = "Dr.";
                            }};, "aut", "quam");            

            WorkTypeApiNewJsonResponse res = sdk.workType.workTypeApiNewJson(req);

            if (res.workTypeApiNewJSON200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workTypeApiNewRaw

Create a work type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkTypeApiNewRawRequest;
import org.openapis.openapi.models.operations.WorkTypeApiNewRawResponse;
import org.openapis.openapi.models.shared.WorkTypeCreateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkTypeApiNewRawRequest req = new WorkTypeApiNewRawRequest("omnis".getBytes(), "similique", "asperiores");            

            WorkTypeApiNewRawResponse res = sdk.workType.workTypeApiNewRaw(req);

            if (res.workTypeApiNewRaw200ApplicationJSONInt32Integer != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workTypeApiSearch

Return all work types for the account that match the query param

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkTypeApiSearchQueryOptionsOrderEnum;
import org.openapis.openapi.models.operations.WorkTypeApiSearchRequest;
import org.openapis.openapi.models.operations.WorkTypeApiSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkTypeApiSearchRequest req = new WorkTypeApiSearchRequest("modi", "facere") {{
                queryOptionsOrder = WorkTypeApiSearchQueryOptionsOrderEnum.NONE;
                queryOptionsOrderBy = "quis";
                queryOptionsPage = 448407;
                queryOptionsPageSize = 152047;
                queryOptionsQuery = "non";
            }};            

            WorkTypeApiSearchResponse res = sdk.workType.workTypeApiSearch(req);

            if (res.workTypeDetailsApiModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workTypeApiUpdateForm

Update an existing work type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkTypeApiUpdateFormRequest;
import org.openapis.openapi.models.operations.WorkTypeApiUpdateFormResponse;
import org.openapis.openapi.models.shared.WorkTypeUpdateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkTypeApiUpdateFormRequest req = new WorkTypeApiUpdateFormRequest(                new WorkTypeUpdateApiModel() {{
                                id = 784059;
                                title = "Dr.";
                            }};, "soluta", "ipsa");            

            WorkTypeApiUpdateFormResponse res = sdk.workType.workTypeApiUpdateForm(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workTypeApiUpdateJson

Update an existing work type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkTypeApiUpdateJsonRequest;
import org.openapis.openapi.models.operations.WorkTypeApiUpdateJsonResponse;
import org.openapis.openapi.models.shared.WorkTypeUpdateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkTypeApiUpdateJsonRequest req = new WorkTypeApiUpdateJsonRequest(                new WorkTypeUpdateApiModel() {{
                                id = 967047;
                                title = "Mrs.";
                            }};, "vero", "eos");            

            WorkTypeApiUpdateJsonResponse res = sdk.workType.workTypeApiUpdateJson(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## workTypeApiUpdateRaw

Update an existing work type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WorkTypeApiUpdateRawRequest;
import org.openapis.openapi.models.operations.WorkTypeApiUpdateRawResponse;
import org.openapis.openapi.models.shared.WorkTypeUpdateApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WorkTypeApiUpdateRawRequest req = new WorkTypeApiUpdateRawRequest("quas".getBytes(), "quasi", "architecto");            

            WorkTypeApiUpdateRawResponse res = sdk.workType.workTypeApiUpdateRaw(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
