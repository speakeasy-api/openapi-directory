# SDK

## Overview

<p>The Amazon AppIntegrations service enables you to configure and reuse connections to external applications.</p> <p>For information about how you can use external applications with Amazon Connect, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/crm.html">Set up pre-built integrations</a> and <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-wisdom.html">Deliver information to agents using Amazon Connect Wisdom</a> in the <i>Amazon Connect Administrator Guide</i>.</p>

Amazon Web Services documentation
<https://docs.aws.amazon.com/app-integrations/>
### Available Operations

* [createDataIntegration](#createdataintegration) - <p>Creates and persists a DataIntegration resource.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <code>CreateDataIntegration</code> API.</p> </note>
* [createEventIntegration](#createeventintegration) - Creates an EventIntegration, given a specified name, description, and a reference to an Amazon EventBridge bus in your account and a partner event source that pushes events to that bus. No objects are created in the your account, only metadata that is persisted on the EventIntegration control plane.
* [deleteDataIntegration](#deletedataintegration) - <p>Deletes the DataIntegration. Only DataIntegrations that don't have any DataIntegrationAssociations can be deleted. Deleting a DataIntegration also deletes the underlying Amazon AppFlow flow and service linked role. </p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* [deleteEventIntegration](#deleteeventintegration) - Deletes the specified existing event integration. If the event integration is associated with clients, the request is rejected.
* [getDataIntegration](#getdataintegration) - <p>Returns information about the DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* [getEventIntegration](#geteventintegration) - Returns information about the event integration.
* [listDataIntegrationAssociations](#listdataintegrationassociations) - <p>Returns a paginated list of DataIntegration associations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* [listDataIntegrations](#listdataintegrations) - <p>Returns a paginated list of DataIntegrations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* [listEventIntegrationAssociations](#listeventintegrationassociations) - Returns a paginated list of event integration associations in the account. 
* [listEventIntegrations](#listeventintegrations) - Returns a paginated list of event integrations in the account.
* [listTagsForResource](#listtagsforresource) - Lists the tags for the specified resource.
* [tagResource](#tagresource) - Adds the specified tags to the specified resource.
* [untagResource](#untagresource) - Removes the specified tags from the specified resource.
* [updateDataIntegration](#updatedataintegration) - <p>Updates the description of a DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>
* [updateEventIntegration](#updateeventintegration) - Updates the description of an event integration.

## createDataIntegration

<p>Creates and persists a DataIntegration resource.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <code>CreateDataIntegration</code> API.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDataIntegrationRequest;
import org.openapis.openapi.models.operations.CreateDataIntegrationRequestBody;
import org.openapis.openapi.models.operations.CreateDataIntegrationRequestBodyFileConfiguration;
import org.openapis.openapi.models.operations.CreateDataIntegrationRequestBodyScheduleConfig;
import org.openapis.openapi.models.operations.CreateDataIntegrationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("saepe") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateDataIntegrationRequest req = new CreateDataIntegrationRequest(                new CreateDataIntegrationRequestBody("fuga", "in",                 new CreateDataIntegrationRequestBodyScheduleConfig() {{
                                                firstExecutionFrom = "corporis";
                                                object = "iste";
                                                scheduleExpression = "iure";
                                            }};, "saepe") {{
                                clientToken = "quidem";
                                description = "architecto";
                                fileConfiguration = new CreateDataIntegrationRequestBodyFileConfiguration() {{
                                    filters = new java.util.HashMap<String, String[]>() {{
                                        put("reiciendis", new String[]{{
                                            add("mollitia"),
                                            add("laborum"),
                                            add("dolores"),
                                        }});
                                    }};
                                    folders = new String[]{{
                                        add("corporis"),
                                    }};
                                }};;
                                objectConfiguration = new java.util.HashMap<String, java.util.HashMap<String, String[]>>() {{
                                    put("nobis", new java.util.HashMap<String, String[]>() {{
                                        put("omnis", new String[]{{
                                            add("minima"),
                                            add("excepturi"),
                                        }});
                                        put("accusantium", new String[]{{
                                            add("culpa"),
                                            add("doloribus"),
                                        }});
                                    }});
                                }};
                                tags = new java.util.HashMap<String, String>() {{
                                    put("architecto", "mollitia");
                                    put("dolorem", "culpa");
                                    put("consequuntur", "repellat");
                                    put("mollitia", "occaecati");
                                }};
                            }};) {{
                xAmzAlgorithm = "numquam";
                xAmzContentSha256 = "commodi";
                xAmzCredential = "quam";
                xAmzDate = "molestiae";
                xAmzSecurityToken = "velit";
                xAmzSignature = "error";
                xAmzSignedHeaders = "quia";
            }};            

            CreateDataIntegrationResponse res = sdk.sdk.createDataIntegration(req);

            if (res.createDataIntegrationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createEventIntegration

Creates an EventIntegration, given a specified name, description, and a reference to an Amazon EventBridge bus in your account and a partner event source that pushes events to that bus. No objects are created in the your account, only metadata that is persisted on the EventIntegration control plane.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateEventIntegrationRequest;
import org.openapis.openapi.models.operations.CreateEventIntegrationRequestBody;
import org.openapis.openapi.models.operations.CreateEventIntegrationRequestBodyEventFilter;
import org.openapis.openapi.models.operations.CreateEventIntegrationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateEventIntegrationRequest req = new CreateEventIntegrationRequest(                new CreateEventIntegrationRequestBody("vitae",                 new CreateEventIntegrationRequestBodyEventFilter() {{
                                                source = "laborum";
                                            }};, "animi") {{
                                clientToken = "enim";
                                description = "odit";
                                tags = new java.util.HashMap<String, String>() {{
                                    put("sequi", "tenetur");
                                    put("ipsam", "id");
                                    put("possimus", "aut");
                                    put("quasi", "error");
                                }};
                            }};) {{
                xAmzAlgorithm = "temporibus";
                xAmzContentSha256 = "laborum";
                xAmzCredential = "quasi";
                xAmzDate = "reiciendis";
                xAmzSecurityToken = "voluptatibus";
                xAmzSignature = "vero";
                xAmzSignedHeaders = "nihil";
            }};            

            CreateEventIntegrationResponse res = sdk.sdk.createEventIntegration(req);

            if (res.createEventIntegrationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDataIntegration

<p>Deletes the DataIntegration. Only DataIntegrations that don't have any DataIntegrationAssociations can be deleted. Deleting a DataIntegration also deletes the underlying Amazon AppFlow flow and service linked role. </p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDataIntegrationRequest;
import org.openapis.openapi.models.operations.DeleteDataIntegrationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("praesentium") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteDataIntegrationRequest req = new DeleteDataIntegrationRequest("voluptatibus") {{
                xAmzAlgorithm = "ipsa";
                xAmzContentSha256 = "omnis";
                xAmzCredential = "voluptate";
                xAmzDate = "cum";
                xAmzSecurityToken = "perferendis";
                xAmzSignature = "doloremque";
                xAmzSignedHeaders = "reprehenderit";
            }};            

            DeleteDataIntegrationResponse res = sdk.sdk.deleteDataIntegration(req);

            if (res.deleteDataIntegrationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteEventIntegration

Deletes the specified existing event integration. If the event integration is associated with clients, the request is rejected.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteEventIntegrationRequest;
import org.openapis.openapi.models.operations.DeleteEventIntegrationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ut") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            DeleteEventIntegrationRequest req = new DeleteEventIntegrationRequest("maiores") {{
                xAmzAlgorithm = "dicta";
                xAmzContentSha256 = "corporis";
                xAmzCredential = "dolore";
                xAmzDate = "iusto";
                xAmzSecurityToken = "dicta";
                xAmzSignature = "harum";
                xAmzSignedHeaders = "enim";
            }};            

            DeleteEventIntegrationResponse res = sdk.sdk.deleteEventIntegration(req);

            if (res.deleteEventIntegrationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDataIntegration

<p>Returns information about the DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataIntegrationRequest;
import org.openapis.openapi.models.operations.GetDataIntegrationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusamus") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDataIntegrationRequest req = new GetDataIntegrationRequest("commodi") {{
                xAmzAlgorithm = "repudiandae";
                xAmzContentSha256 = "quae";
                xAmzCredential = "ipsum";
                xAmzDate = "quidem";
                xAmzSecurityToken = "molestias";
                xAmzSignature = "excepturi";
                xAmzSignedHeaders = "pariatur";
            }};            

            GetDataIntegrationResponse res = sdk.sdk.getDataIntegration(req);

            if (res.getDataIntegrationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventIntegration

Returns information about the event integration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventIntegrationRequest;
import org.openapis.openapi.models.operations.GetEventIntegrationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetEventIntegrationRequest req = new GetEventIntegrationRequest("praesentium") {{
                xAmzAlgorithm = "rem";
                xAmzContentSha256 = "voluptates";
                xAmzCredential = "quasi";
                xAmzDate = "repudiandae";
                xAmzSecurityToken = "sint";
                xAmzSignature = "veritatis";
                xAmzSignedHeaders = "itaque";
            }};            

            GetEventIntegrationResponse res = sdk.sdk.getEventIntegration(req);

            if (res.getEventIntegrationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDataIntegrationAssociations

<p>Returns a paginated list of DataIntegration associations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDataIntegrationAssociationsRequest;
import org.openapis.openapi.models.operations.ListDataIntegrationAssociationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("incidunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDataIntegrationAssociationsRequest req = new ListDataIntegrationAssociationsRequest("enim") {{
                xAmzAlgorithm = "consequatur";
                xAmzContentSha256 = "est";
                xAmzCredential = "quibusdam";
                xAmzDate = "explicabo";
                xAmzSecurityToken = "deserunt";
                xAmzSignature = "distinctio";
                xAmzSignedHeaders = "quibusdam";
                maxResults = 289406L;
                nextToken = "modi";
            }};            

            ListDataIntegrationAssociationsResponse res = sdk.sdk.listDataIntegrationAssociations(req);

            if (res.listDataIntegrationAssociationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDataIntegrations

<p>Returns a paginated list of DataIntegrations in the account.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDataIntegrationsRequest;
import org.openapis.openapi.models.operations.ListDataIntegrationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("qui") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListDataIntegrationsRequest req = new ListDataIntegrationsRequest() {{
                xAmzAlgorithm = "aliquid";
                xAmzContentSha256 = "cupiditate";
                xAmzCredential = "quos";
                xAmzDate = "perferendis";
                xAmzSecurityToken = "magni";
                xAmzSignature = "assumenda";
                xAmzSignedHeaders = "ipsam";
                maxResults = 4695L;
                nextToken = "fugit";
            }};            

            ListDataIntegrationsResponse res = sdk.sdk.listDataIntegrations(req);

            if (res.listDataIntegrationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEventIntegrationAssociations

Returns a paginated list of event integration associations in the account. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEventIntegrationAssociationsRequest;
import org.openapis.openapi.models.operations.ListEventIntegrationAssociationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolorum") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEventIntegrationAssociationsRequest req = new ListEventIntegrationAssociationsRequest("excepturi") {{
                xAmzAlgorithm = "tempora";
                xAmzContentSha256 = "facilis";
                xAmzCredential = "tempore";
                xAmzDate = "labore";
                xAmzSecurityToken = "delectus";
                xAmzSignature = "eum";
                xAmzSignedHeaders = "non";
                maxResults = 756107L;
                nextToken = "sint";
            }};            

            ListEventIntegrationAssociationsResponse res = sdk.sdk.listEventIntegrationAssociations(req);

            if (res.listEventIntegrationAssociationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listEventIntegrations

Returns a paginated list of event integrations in the account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListEventIntegrationsRequest;
import org.openapis.openapi.models.operations.ListEventIntegrationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListEventIntegrationsRequest req = new ListEventIntegrationsRequest() {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "necessitatibus";
                xAmzCredential = "sint";
                xAmzDate = "officia";
                xAmzSecurityToken = "dolor";
                xAmzSignature = "debitis";
                xAmzSignedHeaders = "a";
                maxResults = 680056L;
                nextToken = "in";
            }};            

            ListEventIntegrationsResponse res = sdk.sdk.listEventIntegrations(req);

            if (res.listEventIntegrationsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listTagsForResource

Lists the tags for the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListTagsForResourceRequest;
import org.openapis.openapi.models.operations.ListTagsForResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("in") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListTagsForResourceRequest req = new ListTagsForResourceRequest("illum") {{
                xAmzAlgorithm = "maiores";
                xAmzContentSha256 = "rerum";
                xAmzCredential = "dicta";
                xAmzDate = "magnam";
                xAmzSecurityToken = "cumque";
                xAmzSignature = "facere";
                xAmzSignedHeaders = "ea";
            }};            

            ListTagsForResourceResponse res = sdk.sdk.listTagsForResource(req);

            if (res.listTagsForResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tagResource

Adds the specified tags to the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TagResourceRequest;
import org.openapis.openapi.models.operations.TagResourceRequestBody;
import org.openapis.openapi.models.operations.TagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("aliquid") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            TagResourceRequest req = new TagResourceRequest(                new TagResourceRequestBody(                new java.util.HashMap<String, String>() {{
                                                put("accusamus", "non");
                                                put("occaecati", "enim");
                                                put("accusamus", "delectus");
                                            }});, "quidem") {{
                xAmzAlgorithm = "provident";
                xAmzContentSha256 = "nam";
                xAmzCredential = "id";
                xAmzDate = "blanditiis";
                xAmzSecurityToken = "deleniti";
                xAmzSignature = "sapiente";
                xAmzSignedHeaders = "amet";
            }};            

            TagResourceResponse res = sdk.sdk.tagResource(req);

            if (res.tagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## untagResource

Removes the specified tags from the specified resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UntagResourceRequest;
import org.openapis.openapi.models.operations.UntagResourceResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("deserunt") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UntagResourceRequest req = new UntagResourceRequest("nisi",                 new String[]{{
                                add("natus"),
                                add("omnis"),
                            }}) {{
                xAmzAlgorithm = "molestiae";
                xAmzContentSha256 = "perferendis";
                xAmzCredential = "nihil";
                xAmzDate = "magnam";
                xAmzSecurityToken = "distinctio";
                xAmzSignature = "id";
                xAmzSignedHeaders = "labore";
            }};            

            UntagResourceResponse res = sdk.sdk.untagResource(req);

            if (res.untagResourceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDataIntegration

<p>Updates the description of a DataIntegration.</p> <note> <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated. Use a different DataIntegration, or recreate the DataIntegration using the <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p> </note>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDataIntegrationRequest;
import org.openapis.openapi.models.operations.UpdateDataIntegrationRequestBody;
import org.openapis.openapi.models.operations.UpdateDataIntegrationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("labore") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateDataIntegrationRequest req = new UpdateDataIntegrationRequest("suscipit",                 new UpdateDataIntegrationRequestBody() {{
                                description = "natus";
                                name = "Duane Thiel II";
                            }};) {{
                xAmzAlgorithm = "et";
                xAmzContentSha256 = "excepturi";
                xAmzCredential = "ullam";
                xAmzDate = "provident";
                xAmzSecurityToken = "quos";
                xAmzSignature = "sint";
                xAmzSignedHeaders = "accusantium";
            }};            

            UpdateDataIntegrationResponse res = sdk.sdk.updateDataIntegration(req);

            if (res.updateDataIntegrationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateEventIntegration

Updates the description of an event integration.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateEventIntegrationRequest;
import org.openapis.openapi.models.operations.UpdateEventIntegrationRequestBody;
import org.openapis.openapi.models.operations.UpdateEventIntegrationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia") {{
                    hmac = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateEventIntegrationRequest req = new UpdateEventIntegrationRequest("reiciendis",                 new UpdateEventIntegrationRequestBody() {{
                                description = "mollitia";
                            }};) {{
                xAmzAlgorithm = "ad";
                xAmzContentSha256 = "eum";
                xAmzCredential = "dolor";
                xAmzDate = "necessitatibus";
                xAmzSecurityToken = "odit";
                xAmzSignature = "nemo";
                xAmzSignedHeaders = "quasi";
            }};            

            UpdateEventIntegrationResponse res = sdk.sdk.updateEventIntegration(req);

            if (res.updateEventIntegrationResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
