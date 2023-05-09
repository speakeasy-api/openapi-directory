# webhooks

### Available Operations

* [webHookManagementDelete](#webhookmanagementdelete) - Deletes an existing WebHook registration.
* [webHookManagementDeleteAll](#webhookmanagementdeleteall) - Deletes all existing WebHook registrations.
* [webHookManagementGet](#webhookmanagementget) - Gets all registered WebHooks for a given user.
* [webHookManagementGetFilters](#webhookmanagementgetfilters) - Returns a list of all known filters you can use to register webhooks
* [webHookManagementLookup](#webhookmanagementlookup) - Looks up a registered WebHook with the given {id} for a given user.
* [webHookManagementPost](#webhookmanagementpost) - Registers a new WebHook for a given user.
* [webHookManagementPut](#webhookmanagementput) - Updates an existing WebHook registration.

## webHookManagementDelete

Deletes an existing WebHook registration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebHookManagementDeleteRequest;
import org.openapis.openapi.models.operations.WebHookManagementDeleteResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebHookManagementDeleteRequest req = new WebHookManagementDeleteRequest("blanditiis");            

            WebHookManagementDeleteResponse res = sdk.webhooks.webHookManagementDelete(req);

            if (res.webHookManagementDelete200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webHookManagementDeleteAll

Deletes all existing WebHook registrations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebHookManagementDeleteAllResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebHookManagementDeleteAllResponse res = sdk.webhooks.webHookManagementDeleteAll();

            if (res.webHookManagementDeleteAll200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webHookManagementGet

Gets all registered WebHooks for a given user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebHookManagementGetResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebHookManagementGetResponse res = sdk.webhooks.webHookManagementGet();

            if (res.rechnungsdruckWebAppControllersApiWebHookApiModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webHookManagementGetFilters

Returns a list of all known filters you can use to register webhooks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebHookManagementGetFiltersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebHookManagementGetFiltersResponse res = sdk.webhooks.webHookManagementGetFilters();

            if (res.webHookManagementGetFilters200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webHookManagementLookup

Looks up a registered WebHook with the given {id} for a given user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebHookManagementLookupRequest;
import org.openapis.openapi.models.operations.WebHookManagementLookupResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebHookManagementLookupRequest req = new WebHookManagementLookupRequest("nihil");            

            WebHookManagementLookupResponse res = sdk.webhooks.webHookManagementLookup(req);

            if (res.rechnungsdruckWebAppControllersApiWebHookApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webHookManagementPost

Registers a new WebHook for a given user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebHookManagementPostResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiWebHookApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiWebHookApiModel req = new RechnungsdruckWebAppControllersApiWebHookApiModel("atque", "rerum") {{
                description = "deserunt";
                filters = new String[]{{
                    add("nostrum"),
                    add("atque"),
                    add("architecto"),
                }};
                headers = new java.util.HashMap<String, String>() {{
                    put("enim", "rem");
                    put("magni", "quae");
                    put("quas", "placeat");
                }};
                id = "54fefa9c-95f2-4eac-9565-d307cfee8120";
                isPaused = false;
                properties = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                    put("necessitatibus", new java.util.HashMap<String, Object>() {{
                        put("deleniti", "sunt");
                    }});
                    put("nesciunt", new java.util.HashMap<String, Object>() {{
                        put("laborum", "aliquam");
                        put("deserunt", "modi");
                        put("sunt", "impedit");
                        put("eius", "voluptatum");
                    }});
                }};
            }};            

            WebHookManagementPostResponse res = sdk.webhooks.webHookManagementPost(req);

            if (res.rechnungsdruckWebAppControllersApiWebHookApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## webHookManagementPut

Updates an existing WebHook registration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WebHookManagementPutRequest;
import org.openapis.openapi.models.operations.WebHookManagementPutResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiWebHookApiModel;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            WebHookManagementPutRequest req = new WebHookManagementPutRequest(                new RechnungsdruckWebAppControllersApiWebHookApiModel("ipsa", "at") {{
                                description = "dolorem";
                                filters = new String[]{{
                                    add("aspernatur"),
                                    add("inventore"),
                                    add("sequi"),
                                    add("fugit"),
                                }};
                                headers = new java.util.HashMap<String, String>() {{
                                    put("hic", "eaque");
                                    put("dolorem", "architecto");
                                    put("aperiam", "aspernatur");
                                }};
                                id = "d514f4cc-6f18-4bf9-a21a-6a4f77a87ee3";
                                isPaused = false;
                                properties = new java.util.HashMap<String, java.util.HashMap<String, Object>>() {{
                                    put("eius", new java.util.HashMap<String, Object>() {{
                                        put("itaque", "dignissimos");
                                        put("ipsam", "explicabo");
                                        put("impedit", "aliquid");
                                    }});
                                    put("quis", new java.util.HashMap<String, Object>() {{
                                        put("ipsum", "ut");
                                        put("quaerat", "architecto");
                                        put("praesentium", "eveniet");
                                    }});
                                    put("dolor", new java.util.HashMap<String, Object>() {{
                                        put("libero", "iste");
                                        put("illo", "minus");
                                        put("quos", "temporibus");
                                    }});
                                    put("sint", new java.util.HashMap<String, Object>() {{
                                        put("enim", "accusamus");
                                        put("aperiam", "voluptates");
                                    }});
                                }};
                            }};, "laudantium");            

            WebHookManagementPutResponse res = sdk.webhooks.webHookManagementPut(req);

            if (res.rechnungsdruckWebAppControllersApiWebHookApiModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
