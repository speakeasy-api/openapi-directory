# functions

## Overview

The Functions Service allows you view, create and manage your Cloud Functions.

### Available Operations

* [functionsCreate](#functionscreate) - Create Function
* [functionsCreateExecution](#functionscreateexecution) - Create Execution
* [functionsCreateTag](#functionscreatetag) - Create Tag
* [functionsDelete](#functionsdelete) - Delete Function
* [functionsDeleteTag](#functionsdeletetag) - Delete Tag
* [functionsGet](#functionsget) - Get Function
* [functionsGetExecution](#functionsgetexecution) - Get Execution
* [functionsGetTag](#functionsgettag) - Get Tag
* [functionsList](#functionslist) - List Functions
* [functionsListExecutions](#functionslistexecutions) - List Executions
* [functionsListTags](#functionslisttags) - List Tags
* [functionsUpdate](#functionsupdate) - Update Function
* [functionsUpdateTag](#functionsupdatetag) - Update Function Tag

## functionsCreate

Create a new function. You can pass a list of [permissions](/docs/permissions) to allow different project users or team with access to execute the function using the client API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FunctionsCreateRequestBody;
import org.openapis.openapi.models.operations.FunctionsCreateResponse;
import org.openapis.openapi.models.operations.FunctionsCreateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FunctionsCreateRequestBody req = new FunctionsCreateRequestBody(                new String[]{{
                                add("sint"),
                                add("officia"),
                                add("dolor"),
                                add("debitis"),
                            }}, "a", "dolorum") {{
                events = new String[]{{
                    add("in"),
                    add("illum"),
                }};
                schedule = "maiores";
                timeout = 699479L;
                vars = new java.util.HashMap<String, Object>() {{
                    put("magnam", "cumque");
                }};
            }};            

            FunctionsCreateResponse res = sdk.functions.functionsCreate(req, new FunctionsCreateSecurity("facere", "ea") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.function != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## functionsCreateExecution

Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FunctionsCreateExecutionRequest;
import org.openapis.openapi.models.operations.FunctionsCreateExecutionRequestBody;
import org.openapis.openapi.models.operations.FunctionsCreateExecutionResponse;
import org.openapis.openapi.models.operations.FunctionsCreateExecutionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FunctionsCreateExecutionRequest req = new FunctionsCreateExecutionRequest("aliquid") {{
                requestBody = new FunctionsCreateExecutionRequestBody() {{
                    data = "laborum";
                }};;
            }};            

            FunctionsCreateExecutionResponse res = sdk.functions.functionsCreateExecution(req, new FunctionsCreateExecutionSecurity("accusamus", "non", "occaecati") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.execution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## functionsCreateTag

Create a new function code tag. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you'll need to update the function's tag to use your new tag UID.

This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the [Appwrite Cloud Functions tutorial](/docs/functions).

Use the "command" param to set the entry point used to execute your code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FunctionsCreateTagRequest;
import org.openapis.openapi.models.operations.FunctionsCreateTagRequestBody;
import org.openapis.openapi.models.operations.FunctionsCreateTagResponse;
import org.openapis.openapi.models.operations.FunctionsCreateTagSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FunctionsCreateTagRequest req = new FunctionsCreateTagRequest("enim") {{
                requestBody = new FunctionsCreateTagRequestBody("accusamus", "delectus");;
            }};            

            FunctionsCreateTagResponse res = sdk.functions.functionsCreateTag(req, new FunctionsCreateTagSecurity("quidem", "provident") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## functionsDelete

Delete a function by its unique ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FunctionsDeleteRequest;
import org.openapis.openapi.models.operations.FunctionsDeleteResponse;
import org.openapis.openapi.models.operations.FunctionsDeleteSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FunctionsDeleteRequest req = new FunctionsDeleteRequest("nam");            

            FunctionsDeleteResponse res = sdk.functions.functionsDelete(req, new FunctionsDeleteSecurity("id", "blanditiis") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## functionsDeleteTag

Delete a code tag by its unique ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FunctionsDeleteTagRequest;
import org.openapis.openapi.models.operations.FunctionsDeleteTagResponse;
import org.openapis.openapi.models.operations.FunctionsDeleteTagSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FunctionsDeleteTagRequest req = new FunctionsDeleteTagRequest("deleniti", "sapiente");            

            FunctionsDeleteTagResponse res = sdk.functions.functionsDeleteTag(req, new FunctionsDeleteTagSecurity("amet", "deserunt") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## functionsGet

Get a function by its unique ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FunctionsGetRequest;
import org.openapis.openapi.models.operations.FunctionsGetResponse;
import org.openapis.openapi.models.operations.FunctionsGetSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FunctionsGetRequest req = new FunctionsGetRequest("nisi");            

            FunctionsGetResponse res = sdk.functions.functionsGet(req, new FunctionsGetSecurity("vel", "natus") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.function != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## functionsGetExecution

Get a function execution log by its unique ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FunctionsGetExecutionRequest;
import org.openapis.openapi.models.operations.FunctionsGetExecutionResponse;
import org.openapis.openapi.models.operations.FunctionsGetExecutionSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FunctionsGetExecutionRequest req = new FunctionsGetExecutionRequest("omnis", "molestiae");            

            FunctionsGetExecutionResponse res = sdk.functions.functionsGetExecution(req, new FunctionsGetExecutionSecurity("perferendis", "nihil", "magnam") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.execution != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## functionsGetTag

Get a code tag by its unique ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FunctionsGetTagRequest;
import org.openapis.openapi.models.operations.FunctionsGetTagResponse;
import org.openapis.openapi.models.operations.FunctionsGetTagSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FunctionsGetTagRequest req = new FunctionsGetTagRequest("distinctio", "id");            

            FunctionsGetTagResponse res = sdk.functions.functionsGetTag(req, new FunctionsGetTagSecurity("labore", "labore") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.tag != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## functionsList

Get a list of all the project's functions. You can use the query params to filter your results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FunctionsListRequest;
import org.openapis.openapi.models.operations.FunctionsListResponse;
import org.openapis.openapi.models.operations.FunctionsListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FunctionsListRequest req = new FunctionsListRequest() {{
                limit = 383462;
                offset = 618016;
                orderType = "nobis";
                search = "eum";
            }};            

            FunctionsListResponse res = sdk.functions.functionsList(req, new FunctionsListSecurity("vero", "aspernatur") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.functionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## functionsListExecutions

Get a list of all the current user function execution logs. You can use the query params to filter your results. On admin mode, this endpoint will return a list of all of the project's executions. [Learn more about different API modes](/docs/admin).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FunctionsListExecutionsRequest;
import org.openapis.openapi.models.operations.FunctionsListExecutionsResponse;
import org.openapis.openapi.models.operations.FunctionsListExecutionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FunctionsListExecutionsRequest req = new FunctionsListExecutionsRequest("architecto") {{
                limit = 298282;
                offset = 92373;
                orderType = "excepturi";
                search = "ullam";
            }};            

            FunctionsListExecutionsResponse res = sdk.functions.functionsListExecutions(req, new FunctionsListExecutionsSecurity("provident", "quos", "sint") {{
                jwt = "YOUR_API_KEY_HERE";
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.executionList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## functionsListTags

Get a list of all the project's code tags. You can use the query params to filter your results.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FunctionsListTagsRequest;
import org.openapis.openapi.models.operations.FunctionsListTagsResponse;
import org.openapis.openapi.models.operations.FunctionsListTagsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FunctionsListTagsRequest req = new FunctionsListTagsRequest("accusantium") {{
                limit = 653201;
                offset = 968962;
                orderType = "mollitia";
                search = "ad";
            }};            

            FunctionsListTagsResponse res = sdk.functions.functionsListTags(req, new FunctionsListTagsSecurity("eum", "dolor") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.tagList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## functionsUpdate

Update function by its unique ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FunctionsUpdateRequest;
import org.openapis.openapi.models.operations.FunctionsUpdateRequestBody;
import org.openapis.openapi.models.operations.FunctionsUpdateResponse;
import org.openapis.openapi.models.operations.FunctionsUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FunctionsUpdateRequest req = new FunctionsUpdateRequest("necessitatibus") {{
                requestBody = new FunctionsUpdateRequestBody(                new String[]{{
                                    add("nemo"),
                                }}, "quasi") {{
                    events = new String[]{{
                        add("doloribus"),
                        add("debitis"),
                    }};
                    schedule = "eius";
                    timeout = 806194L;
                    vars = new java.util.HashMap<String, Object>() {{
                        put("facilis", "in");
                        put("architecto", "architecto");
                        put("repudiandae", "ullam");
                    }};
                }};;
            }};            

            FunctionsUpdateResponse res = sdk.functions.functionsUpdate(req, new FunctionsUpdateSecurity("expedita", "nihil") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.function != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## functionsUpdateTag

Update the function code tag ID using the unique function ID. Use this endpoint to switch the code tag that should be executed by the execution endpoint.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FunctionsUpdateTagRequest;
import org.openapis.openapi.models.operations.FunctionsUpdateTagRequestBody;
import org.openapis.openapi.models.operations.FunctionsUpdateTagResponse;
import org.openapis.openapi.models.operations.FunctionsUpdateTagSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            FunctionsUpdateTagRequest req = new FunctionsUpdateTagRequest("repellat") {{
                requestBody = new FunctionsUpdateTagRequestBody("quibusdam");;
            }};            

            FunctionsUpdateTagResponse res = sdk.functions.functionsUpdateTag(req, new FunctionsUpdateTagSecurity("sed", "saepe") {{
                key = "YOUR_API_KEY_HERE";
                project = "YOUR_API_KEY_HERE";
            }});

            if (res.function != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
