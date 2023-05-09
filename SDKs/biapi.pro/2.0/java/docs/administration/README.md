# administration

### Available Operations

* [deleteClientsIdClient](#deleteclientsidclient) - Delete a client
* [deleteClientsIdClientLogo](#deleteclientsidclientlogo) - Delete the client logo
* [deleteWebhooks](#deletewebhooks) - Deletes all webhooks
* [deleteWebhooksAuth](#deletewebhooksauth) - Deletes all webhook authentication types
* [deleteWebhooksAuthIdAuth](#deletewebhooksauthidauth) - Deletes the webhook authentication type
* [deleteWebhooksIdWebhook](#deletewebhooksidwebhook) - Deletes a webhook
* [deleteWebhooksIdWebhookAddToData](#deletewebhooksidwebhookaddtodata) - delete all entries
* [deleteWebhooksIdWebhookAddToDataKey](#deletewebhooksidwebhookaddtodatakey) - delete the requested entry
* [getClients](#getclients) - List clients
* [getClientsIdClient](#getclientsidclient) - Get information about a client
* [getConfig](#getconfig) - Get configuration of the API.
* [getConfigLogs](#getconfiglogs) - Get configuration change history of the API.
* [getMonitoring](#getmonitoring) - get performances stats on this instance
* [getPublickey](#getpublickey) - Get public encryption key of the API.
* [getWebhooks](#getwebhooks) - Get webhooks
* [getWebhooksAuth](#getwebhooksauth) - Get webhooks authentication types
* [getWebhooksIdWebhookAddToData](#getwebhooksidwebhookaddtodata) - retrieve the list of the value to add in webhooks when sending the requested webhook
* [getWebhooksIdWebhookAddToDataKey](#getwebhooksidwebhookaddtodatakey) - retrieve the value to add in the requested webhook for the requested name
* [getWebhooksIdWebhookLogs](#getwebhooksidwebhooklogs) - Get webhooks logs.
* [postClients](#postclients) - Create a client
* [postClientsIdClientLogo](#postclientsidclientlogo) - Update the client logo
* [postConfig](#postconfig) - Insert/update configuration key(s)/value(s) on the API.
* [postTestSync](#posttestsync) - Test synchronization on a random connection.
* [postTestWebhooks](#posttestwebhooks) - Test synchronization on a random connection.
* [postWebhooks](#postwebhooks) - Adds a new webhook
* [postWebhooksAuth](#postwebhooksauth) - Adds a new webhook authentication type
* [postWebhooksAuthIdAuth](#postwebhooksauthidauth) - Updates the webhook authentication type
* [postWebhooksIdWebhook](#postwebhooksidwebhook) - Updates a webhook
* [postWebhooksIdWebhookAddToData](#postwebhooksidwebhookaddtodata) - Setup a field to store in user config when calling the endpoint
* [postWebhooksIdWebhookAddToDataKey](#postwebhooksidwebhookaddtodatakey) - upate the requested field to store in user config when calling the endpoint
* [putClientsIdClient](#putclientsidclient) - Update a client
* [putWebhooksAuthIdAuth](#putwebhooksauthidauth) - Updates the webhook authentication type
* [putWebhooksIdWebhook](#putwebhooksidwebhook) - Updates a webhook

## deleteClientsIdClient

Delete a client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteClientsIdClientRequest;
import org.openapis.openapi.models.operations.DeleteClientsIdClientResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteClientsIdClientRequest req = new DeleteClientsIdClientRequest(715190L) {{
                expand = "quibusdam";
            }};            

            DeleteClientsIdClientResponse res = sdk.administration.deleteClientsIdClient(req);

            if (res.client != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteClientsIdClientLogo

Delete the client logo

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteClientsIdClientLogoRequest;
import org.openapis.openapi.models.operations.DeleteClientsIdClientLogoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteClientsIdClientLogoRequest req = new DeleteClientsIdClientLogoRequest(602763L) {{
                expand = "nulla";
            }};            

            DeleteClientsIdClientLogoResponse res = sdk.administration.deleteClientsIdClientLogo(req);

            if (res.file != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWebhooks

Updates the deleted field with the date of the deletion<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebhooksRequest;
import org.openapis.openapi.models.operations.DeleteWebhooksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWebhooksRequest req = new DeleteWebhooksRequest() {{
                expand = "corrupti";
            }};            

            DeleteWebhooksResponse res = sdk.administration.deleteWebhooks(req);

            if (res.webhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWebhooksAuth

Deletes all webhook authentication types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebhooksAuthRequest;
import org.openapis.openapi.models.operations.DeleteWebhooksAuthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWebhooksAuthRequest req = new DeleteWebhooksAuthRequest() {{
                expand = "illum";
            }};            

            DeleteWebhooksAuthResponse res = sdk.administration.deleteWebhooksAuth(req);

            if (res.authProvider != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWebhooksAuthIdAuth

Updates the deleted field with the date of the deletion<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebhooksAuthIdAuthRequest;
import org.openapis.openapi.models.operations.DeleteWebhooksAuthIdAuthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWebhooksAuthIdAuthRequest req = new DeleteWebhooksAuthIdAuthRequest(423655L) {{
                expand = "error";
            }};            

            DeleteWebhooksAuthIdAuthResponse res = sdk.administration.deleteWebhooksAuthIdAuth(req);

            if (res.authProvider != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWebhooksIdWebhook

Updates the deleted field with the date of the deletion<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebhooksIdWebhookRequest;
import org.openapis.openapi.models.operations.DeleteWebhooksIdWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWebhooksIdWebhookRequest req = new DeleteWebhooksIdWebhookRequest(645894L) {{
                expand = "suscipit";
            }};            

            DeleteWebhooksIdWebhookResponse res = sdk.administration.deleteWebhooksIdWebhook(req);

            if (res.webhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWebhooksIdWebhookAddToData

delete all entries

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebhooksIdWebhookAddToDataRequest;
import org.openapis.openapi.models.operations.DeleteWebhooksIdWebhookAddToDataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWebhooksIdWebhookAddToDataRequest req = new DeleteWebhooksIdWebhookAddToDataRequest(437587L) {{
                expand = "magnam";
            }};            

            DeleteWebhooksIdWebhookAddToDataResponse res = sdk.administration.deleteWebhooksIdWebhookAddToData(req);

            if (res.webhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteWebhooksIdWebhookAddToDataKey

delete the requested entry

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteWebhooksIdWebhookAddToDataKeyRequest;
import org.openapis.openapi.models.operations.DeleteWebhooksIdWebhookAddToDataKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteWebhooksIdWebhookAddToDataKeyRequest req = new DeleteWebhooksIdWebhookAddToDataKeyRequest(891773L, "ipsa") {{
                expand = "delectus";
            }};            

            DeleteWebhooksIdWebhookAddToDataKeyResponse res = sdk.administration.deleteWebhooksIdWebhookAddToDataKey(req);

            if (res.webhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClients

List clients

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClientsRequest;
import org.openapis.openapi.models.operations.GetClientsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClientsRequest req = new GetClientsRequest() {{
                expand = "tempora";
            }};            

            GetClientsResponse res = sdk.administration.getClients(req);

            if (res.getClients200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getClientsIdClient

If you use the manage_token or a configuration token, you will get also the client secret.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClientsIdClientRequest;
import org.openapis.openapi.models.operations.GetClientsIdClientResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClientsIdClientRequest req = new GetClientsIdClientRequest(383441L) {{
                expand = "molestiae";
            }};            

            GetClientsIdClientResponse res = sdk.administration.getClientsIdClient(req);

            if (res.client != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfig

<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfigRequest;
import org.openapis.openapi.models.operations.GetConfigResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConfigRequest req = new GetConfigRequest() {{
                search = "minus";
            }};            

            GetConfigResponse res = sdk.administration.getConfig(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getConfigLogs

<br><br>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetConfigLogsRequest;
import org.openapis.openapi.models.operations.GetConfigLogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetConfigLogsRequest req = new GetConfigLogsRequest() {{
                expand = "placeat";
                maxDate = LocalDate.parse("2022-01-15");
                minDate = LocalDate.parse("2022-03-20");
                search = "recusandae";
                type = "temporibus";
            }};            

            GetConfigLogsResponse res = sdk.administration.getConfigLogs(req);

            if (res.getConfigLogs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMonitoring

get performances stats on this instance

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMonitoringRequest;
import org.openapis.openapi.models.operations.GetMonitoringResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetMonitoringRequest req = new GetMonitoringRequest() {{
                period = 71036L;
            }};            

            GetMonitoringResponse res = sdk.administration.getMonitoring(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPublickey

Get public encryption key of the API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPublickeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPublickeyResponse res = sdk.administration.getPublickey();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebhooks

Get webhooks

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhooksRequest;
import org.openapis.openapi.models.operations.GetWebhooksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWebhooksRequest req = new GetWebhooksRequest() {{
                expand = "quis";
            }};            

            GetWebhooksResponse res = sdk.administration.getWebhooks(req);

            if (res.getWebhooks200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebhooksAuth

Get webhooks authentication types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhooksAuthRequest;
import org.openapis.openapi.models.operations.GetWebhooksAuthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWebhooksAuthRequest req = new GetWebhooksAuthRequest() {{
                expand = "veritatis";
            }};            

            GetWebhooksAuthResponse res = sdk.administration.getWebhooksAuth(req);

            if (res.getWebhooksAuth200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebhooksIdWebhookAddToData

retrieve the list of the value to add in webhooks when sending the requested webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhooksIdWebhookAddToDataRequest;
import org.openapis.openapi.models.operations.GetWebhooksIdWebhookAddToDataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWebhooksIdWebhookAddToDataRequest req = new GetWebhooksIdWebhookAddToDataRequest(648172L) {{
                expand = "perferendis";
            }};            

            GetWebhooksIdWebhookAddToDataResponse res = sdk.administration.getWebhooksIdWebhookAddToData(req);

            if (res.getWebhooksIdWebhookAddToData200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebhooksIdWebhookAddToDataKey

retrieve the value to add in the requested webhook for the requested name

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhooksIdWebhookAddToDataKeyRequest;
import org.openapis.openapi.models.operations.GetWebhooksIdWebhookAddToDataKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWebhooksIdWebhookAddToDataKeyRequest req = new GetWebhooksIdWebhookAddToDataKeyRequest(368241L, "repellendus") {{
                expand = "sapiente";
            }};            

            GetWebhooksIdWebhookAddToDataKeyResponse res = sdk.administration.getWebhooksIdWebhookAddToDataKey(req);

            if (res.webhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getWebhooksIdWebhookLogs

Get logs of the webhooks.<br><br>By default, it selects logs for the last month. You can use "min_date" and "max_date" to change boundary dates.<br><br>

### Example Usage

```java
package hello.world;

import java.time.LocalDate;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetWebhooksIdWebhookLogsRequest;
import org.openapis.openapi.models.operations.GetWebhooksIdWebhookLogsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetWebhooksIdWebhookLogsRequest req = new GetWebhooksIdWebhookLogsRequest(778157L) {{
                expand = "odit";
                idUser = 870013L;
                limit = 870088L;
                maxDate = LocalDate.parse("2021-07-31");
                minDate = LocalDate.parse("2020-08-07");
                offset = 461479L;
            }};            

            GetWebhooksIdWebhookLogsResponse res = sdk.administration.getWebhooksIdWebhookLogs(req);

            if (res.getWebhooksIdWebhookLogs200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postClients

Create a client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostClientsRequest;
import org.openapis.openapi.models.operations.PostClientsRequestBody;
import org.openapis.openapi.models.operations.PostClientsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostClientsRequest req = new PostClientsRequest() {{
                requestBody = new PostClientsRequestBody() {{
                    config = "totam";
                    generateKeys = false;
                    name = "Omar Carroll";
                    redirectUris = "occaecati";
                }};;
                expand = "fugit";
            }};            

            PostClientsResponse res = sdk.administration.postClients(req);

            if (res.client != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postClientsIdClientLogo

Update the client logo

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostClientsIdClientLogoRequest;
import org.openapis.openapi.models.operations.PostClientsIdClientLogoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostClientsIdClientLogoRequest req = new PostClientsIdClientLogoRequest(537373L) {{
                expand = "hic";
            }};            

            PostClientsIdClientLogoResponse res = sdk.administration.postClientsIdClientLogo(req);

            if (res.file != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postConfig

Insert/update configuration key(s)/value(s) on the API.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostConfigResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostConfigResponse res = sdk.administration.postConfig();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTestSync

It can be used to test receiving data on your webhooks.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTestSyncResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostTestSyncResponse res = sdk.administration.postTestSync();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTestWebhooks

It can be used to test receiving data on your webhooks.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTestWebhooksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostTestWebhooksResponse res = sdk.administration.postTestWebhooks();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWebhooks

Adds a new webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWebhooksRequest;
import org.openapis.openapi.models.operations.PostWebhooksRequestBody;
import org.openapis.openapi.models.operations.PostWebhooksResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWebhooksRequest req = new PostWebhooksRequest() {{
                requestBody = new PostWebhooksRequestBody() {{
                    event = "optio";
                    idAuth = "totam";
                    idService = 105907L;
                    idUser = 414662L;
                    params = "molestiae";
                    url = "modi";
                }};;
                expand = "qui";
            }};            

            PostWebhooksResponse res = sdk.administration.postWebhooks(req);

            if (res.webhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWebhooksAuth

Adds a new webhook authentication type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWebhooksAuthRequest;
import org.openapis.openapi.models.operations.PostWebhooksAuthRequestBody;
import org.openapis.openapi.models.operations.PostWebhooksAuthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWebhooksAuthRequest req = new PostWebhooksAuthRequest(                new PostWebhooksAuthRequestBody("impedit", 736918L) {{
                                config = "esse";
                            }};) {{
                expand = "ipsum";
            }};            

            PostWebhooksAuthResponse res = sdk.administration.postWebhooksAuth(req);

            if (res.authProvider != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWebhooksAuthIdAuth

Updates the webhook authentication type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWebhooksAuthIdAuthRequest;
import org.openapis.openapi.models.operations.PostWebhooksAuthIdAuthRequestBody;
import org.openapis.openapi.models.operations.PostWebhooksAuthIdAuthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWebhooksAuthIdAuthRequest req = new PostWebhooksAuthIdAuthRequest(                new PostWebhooksAuthIdAuthRequestBody("excepturi", 135218L) {{
                                config = "perferendis";
                            }};, 324141L) {{
                expand = "natus";
            }};            

            PostWebhooksAuthIdAuthResponse res = sdk.administration.postWebhooksAuthIdAuth(req);

            if (res.authProvider != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWebhooksIdWebhook

Updates a webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWebhooksIdWebhookRequest;
import org.openapis.openapi.models.operations.PostWebhooksIdWebhookRequestBody;
import org.openapis.openapi.models.operations.PostWebhooksIdWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWebhooksIdWebhookRequest req = new PostWebhooksIdWebhookRequest(149675L) {{
                requestBody = new PostWebhooksIdWebhookRequestBody() {{
                    deleted = "iste";
                    event = "dolor";
                    idAuth = 616934L;
                    idService = 386489L;
                    idUser = 943749L;
                    url = "saepe";
                }};;
                expand = "fuga";
            }};            

            PostWebhooksIdWebhookResponse res = sdk.administration.postWebhooksIdWebhook(req);

            if (res.webhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWebhooksIdWebhookAddToData

For each parameter, a value will be added in the webhook data. Use the key to set the name of the field. The values that can be added are to be found in the user configuration.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWebhooksIdWebhookAddToDataRequest;
import org.openapis.openapi.models.operations.PostWebhooksIdWebhookAddToDataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWebhooksIdWebhookAddToDataRequest req = new PostWebhooksIdWebhookAddToDataRequest(449950L) {{
                expand = "corporis";
            }};            

            PostWebhooksIdWebhookAddToDataResponse res = sdk.administration.postWebhooksIdWebhookAddToData(req);

            if (res.webhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postWebhooksIdWebhookAddToDataKey

For each parameter, a value will be added in the webhook data. Use the key to set the name of the field. The values that can be added are to be found in the user configuration.<br><br>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostWebhooksIdWebhookAddToDataKeyRequest;
import org.openapis.openapi.models.operations.PostWebhooksIdWebhookAddToDataKeyResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostWebhooksIdWebhookAddToDataKeyRequest req = new PostWebhooksIdWebhookAddToDataKeyRequest(613064L, "iure") {{
                expand = "saepe";
            }};            

            PostWebhooksIdWebhookAddToDataKeyResponse res = sdk.administration.postWebhooksIdWebhookAddToDataKey(req);

            if (res.webhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putClientsIdClient

Update a client

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutClientsIdClientRequest;
import org.openapis.openapi.models.operations.PutClientsIdClientRequestBody;
import org.openapis.openapi.models.operations.PutClientsIdClientResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutClientsIdClientRequest req = new PutClientsIdClientRequest(697631L) {{
                requestBody = new PutClientsIdClientRequestBody() {{
                    config = "architecto";
                    description = "ipsa";
                    descriptionBanks = "reiciendis";
                    descriptionProviders = "est";
                    generateKeys = false;
                    name = "Cameron Dach";
                    primaryColor = "explicabo";
                    pro = false;
                    redirectUris = "nobis";
                    secondaryColor = "enim";
                    secret = false;
                    updateConfig = false;
                }};;
                expand = "omnis";
            }};            

            PutClientsIdClientResponse res = sdk.administration.putClientsIdClient(req);

            if (res.client != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putWebhooksAuthIdAuth

Updates the webhook authentication type

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutWebhooksAuthIdAuthRequest;
import org.openapis.openapi.models.operations.PutWebhooksAuthIdAuthRequestBody;
import org.openapis.openapi.models.operations.PutWebhooksAuthIdAuthResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutWebhooksAuthIdAuthRequest req = new PutWebhooksAuthIdAuthRequest(                new PutWebhooksAuthIdAuthRequestBody("nemo", 325047L) {{
                                config = "excepturi";
                            }};, 38425L) {{
                expand = "iure";
            }};            

            PutWebhooksAuthIdAuthResponse res = sdk.administration.putWebhooksAuthIdAuth(req);

            if (res.authProvider != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## putWebhooksIdWebhook

Updates a webhook

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PutWebhooksIdWebhookRequest;
import org.openapis.openapi.models.operations.PutWebhooksIdWebhookRequestBody;
import org.openapis.openapi.models.operations.PutWebhooksIdWebhookResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PutWebhooksIdWebhookRequest req = new PutWebhooksIdWebhookRequest(634274L) {{
                requestBody = new PutWebhooksIdWebhookRequestBody() {{
                    deleted = "doloribus";
                    event = "sapiente";
                    idAuth = 102044L;
                    idService = 652790L;
                    idUser = 208876L;
                    url = "culpa";
                }};;
                expand = "consequuntur";
            }};            

            PutWebhooksIdWebhookResponse res = sdk.administration.putWebhooksIdWebhook(req);

            if (res.webhook != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
