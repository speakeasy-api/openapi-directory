# automationRuns

## Overview

Operations about automation_runs

### Available Operations

* [getAutomationRuns](#getautomationruns) - List Automation Runs
* [getAutomationRunsId](#getautomationrunsid) - Show Automation Run

## getAutomationRuns

List Automation Runs

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutomationRunsRequest;
import org.openapis.openapi.models.operations.GetAutomationRunsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAutomationRunsRequest req = new GetAutomationRunsRequest(716327) {{
                cursor = "quibusdam";
                filter = new java.util.HashMap<String, Object>() {{
                    put("modi", "qui");
                    put("aliquid", "cupiditate");
                }};
                perPage = 552822;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("magni", "assumenda");
                }};
                userId = 369808;
            }};            

            GetAutomationRunsResponse res = sdk.automationRuns.getAutomationRuns(req);

            if (res.automationRunEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAutomationRunsId

Show Automation Run

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutomationRunsIdRequest;
import org.openapis.openapi.models.operations.GetAutomationRunsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAutomationRunsIdRequest req = new GetAutomationRunsIdRequest(4695);            

            GetAutomationRunsIdResponse res = sdk.automationRuns.getAutomationRunsId(req);

            if (res.automationRunEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
