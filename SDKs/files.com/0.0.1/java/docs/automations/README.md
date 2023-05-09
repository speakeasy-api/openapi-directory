# automations

## Overview

Operations about automations

### Available Operations

* [deleteAutomationsId](#deleteautomationsid) - Delete Automation
* [getAutomations](#getautomations) - List Automations
* [getAutomationsId](#getautomationsid) - Show Automation
* [patchAutomationsId](#patchautomationsid) - Update Automation
* [postAutomations](#postautomations) - Create Automation

## deleteAutomationsId

Delete Automation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAutomationsIdRequest;
import org.openapis.openapi.models.operations.DeleteAutomationsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAutomationsIdRequest req = new DeleteAutomationsIdRequest(146441);            

            DeleteAutomationsIdResponse res = sdk.automations.deleteAutomationsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAutomations

List Automations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutomationsRequest;
import org.openapis.openapi.models.operations.GetAutomationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAutomationsRequest req = new GetAutomationsRequest() {{
                automation = "dolorum";
                cursor = "excepturi";
                filter = new java.util.HashMap<String, Object>() {{
                    put("facilis", "tempore");
                    put("labore", "delectus");
                }};
                filterGt = new java.util.HashMap<String, Object>() {{
                    put("non", "eligendi");
                    put("sint", "aliquid");
                }};
                filterGteq = new java.util.HashMap<String, Object>() {{
                    put("necessitatibus", "sint");
                    put("officia", "dolor");
                    put("debitis", "a");
                }};
                filterLt = new java.util.HashMap<String, Object>() {{
                    put("in", "in");
                    put("illum", "maiores");
                    put("rerum", "dicta");
                }};
                filterLteq = new java.util.HashMap<String, Object>() {{
                    put("cumque", "facere");
                    put("ea", "aliquid");
                }};
                perPage = 675439;
                sortBy = new java.util.HashMap<String, Object>() {{
                    put("non", "occaecati");
                    put("enim", "accusamus");
                    put("delectus", "quidem");
                    put("provident", "nam");
                }};
                withDeleted = false;
            }};            

            GetAutomationsResponse res = sdk.automations.getAutomations(req);

            if (res.automationEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAutomationsId

Show Automation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAutomationsIdRequest;
import org.openapis.openapi.models.operations.GetAutomationsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAutomationsIdRequest req = new GetAutomationsIdRequest(659669);            

            GetAutomationsIdResponse res = sdk.automations.getAutomationsId(req);

            if (res.automationEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchAutomationsId

Update Automation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchAutomationsIdRequest;
import org.openapis.openapi.models.operations.PatchAutomationsIdRequestBody;
import org.openapis.openapi.models.operations.PatchAutomationsIdRequestBodyAutomationEnum;
import org.openapis.openapi.models.operations.PatchAutomationsIdRequestBodyTriggerEnum;
import org.openapis.openapi.models.operations.PatchAutomationsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchAutomationsIdRequest req = new PatchAutomationsIdRequest(501324) {{
                requestBody = new PatchAutomationsIdRequestBody() {{
                    automation = PatchAutomationsIdRequestBodyAutomationEnum.CREATE_FOLDER;
                    description = "example";
                    destination = "deleniti";
                    destinationReplaceFrom = "sapiente";
                    destinationReplaceTo = "amet";
                    destinations = new String[]{{
                        add("nisi"),
                        add("vel"),
                        add("natus"),
                    }};
                    disabled = true;
                    groupIds = "omnis";
                    interval = "year";
                    name = "example";
                    path = "molestiae";
                    recurringDay = 25;
                    schedule = new java.util.HashMap<String, Object>() {{
                        put("nihil", "magnam");
                    }};
                    source = "source";
                    syncIds = "distinctio";
                    trigger = PatchAutomationsIdRequestBodyTriggerEnum.REALTIME;
                    triggerActions = new String[]{{
                        add("labore"),
                        add("labore"),
                        add("suscipit"),
                    }};
                    userIds = "natus";
                    value = new java.util.HashMap<String, Object>() {{
                        put("eum", "vero");
                        put("aspernatur", "architecto");
                        put("magnam", "et");
                    }};
                }};;
            }};            

            PatchAutomationsIdResponse res = sdk.automations.patchAutomationsId(req);

            if (res.automationEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAutomations

Create Automation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAutomationsRequestBody;
import org.openapis.openapi.models.operations.PostAutomationsRequestBodyAutomationEnum;
import org.openapis.openapi.models.operations.PostAutomationsRequestBodyTriggerEnum;
import org.openapis.openapi.models.operations.PostAutomationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAutomationsRequestBody req = new PostAutomationsRequestBody(PostAutomationsRequestBodyAutomationEnum.CREATE_FOLDER) {{
                description = "example";
                destination = "excepturi";
                destinationReplaceFrom = "ullam";
                destinationReplaceTo = "provident";
                destinations = new String[]{{
                    add("sint"),
                    add("accusantium"),
                    add("mollitia"),
                }};
                disabled = true;
                groupIds = "reiciendis";
                interval = "year";
                name = "example";
                path = "mollitia";
                recurringDay = 25;
                schedule = new java.util.HashMap<String, Object>() {{
                    put("eum", "dolor");
                    put("necessitatibus", "odit");
                }};
                source = "source";
                syncIds = "nemo";
                trigger = PostAutomationsRequestBodyTriggerEnum.REALTIME;
                triggerActions = new String[]{{
                    add("iure"),
                }};
                userIds = "doloribus";
                value = new java.util.HashMap<String, Object>() {{
                    put("eius", "maxime");
                    put("deleniti", "facilis");
                    put("in", "architecto");
                    put("architecto", "repudiandae");
                }};
            }};            

            PostAutomationsResponse res = sdk.automations.postAutomations(req);

            if (res.automationEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
