# functions

## Overview

The Functions Service allows you view, create and manage your Cloud Functions.

### Available Operations

* [functionsCreateExecution](#functionscreateexecution) - Create Execution
* [functionsGetExecution](#functionsgetexecution) - Get Execution
* [functionsListExecutions](#functionslistexecutions) - List Executions

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

            FunctionsCreateExecutionRequest req = new FunctionsCreateExecutionRequest("itaque") {{
                requestBody = new FunctionsCreateExecutionRequestBody() {{
                    data = "incidunt";
                }};;
            }};            

            FunctionsCreateExecutionResponse res = sdk.functions.functionsCreateExecution(req, new FunctionsCreateExecutionSecurity("enim", "consequatur") {{
                jwt = "YOUR_API_KEY_HERE";
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

            FunctionsGetExecutionRequest req = new FunctionsGetExecutionRequest("est", "quibusdam");            

            FunctionsGetExecutionResponse res = sdk.functions.functionsGetExecution(req, new FunctionsGetExecutionSecurity("explicabo", "deserunt") {{
                jwt = "YOUR_API_KEY_HERE";
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

            FunctionsListExecutionsRequest req = new FunctionsListExecutionsRequest("distinctio") {{
                limit = 841386;
                offset = 289406;
                orderType = "modi";
                search = "qui";
            }};            

            FunctionsListExecutionsResponse res = sdk.functions.functionsListExecutions(req, new FunctionsListExecutionsSecurity("aliquid", "cupiditate") {{
                jwt = "YOUR_API_KEY_HERE";
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
