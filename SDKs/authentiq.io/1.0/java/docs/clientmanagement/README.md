# clientManagement

### Available Operations

* [client](#client) - List clients
* [clientClientId](#clientclientid) - Delete a client
* [createClient](#createclient) - Register a client
* [getClient](#getclient) - View a client
* [updateClient](#updateclient) - Update a client

## client

Retrieve a list of clients.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClientResponse;
import org.openapis.openapi.models.operations.ClientSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClientResponse res = sdk.clientManagement.client(new ClientSecurity() {{
                clientRegistrationToken = "YOUR_API_KEY_HERE";
            }});

            if (res.clients != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## clientClientId

Delete a previously registered client.


OIDC Client Configuration Endpoint
<http://openid.net/specs/openid-connect-registration-1_0.html#ClientConfigurationEndpoint>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClientClientIdRequest;
import org.openapis.openapi.models.operations.ClientClientIdResponse;
import org.openapis.openapi.models.operations.ClientClientIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ClientClientIdRequest req = new ClientClientIdRequest("ab");            

            ClientClientIdResponse res = sdk.clientManagement.clientClientId(req, new ClientClientIdSecurity() {{
                clientRegistrationToken = "YOUR_API_KEY_HERE";
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

## createClient

Register a new client with this Authentiq Connect provider.

This endpoint is compatible with [OIDC's Client Registration](http://openid.net/specs/openid-connect-registration-1_0.html) extension.


OIDC Client Registration Endpoint
<http://openid.net/specs/openid-connect-registration-1_0.html#ClientRegistration>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateClientResponse;
import org.openapis.openapi.models.operations.CreateClientSecurity;
import org.openapis.openapi.models.shared.Client;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.Client req = new Client("quis", "veritatis") {{
                applicationType = "deserunt";
                clientId = "perferendis";
                contacts = new String[]{{
                    add("repellendus"),
                    add("sapiente"),
                }};
                defaultMaxAge = 778157L;
                defaultScopes = new String[]{{
                    add("at"),
                }};
                grantTypes = new String[]{{
                    add("maiores"),
                    add("molestiae"),
                    add("quod"),
                    add("quod"),
                }};
                logoUri = "esse";
                policyUri = "totam";
                redirectUris = new String[]{{
                    add("dolorum"),
                    add("dicta"),
                    add("nam"),
                    add("officia"),
                }};
                responseTypes = new String[]{{
                    add("fugit"),
                    add("deleniti"),
                    add("hic"),
                }};
                tosUri = "optio";
            }};            

            CreateClientResponse res = sdk.clientManagement.createClient(req, new CreateClientSecurity() {{
                clientRegistrationToken = "YOUR_API_KEY_HERE";
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

## getClient

Retrieve the configuration of a previously registered client.


OIDC Client Configuration Endpoint
<http://openid.net/specs/openid-connect-registration-1_0.html#ClientConfigurationEndpoint>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetClientRequest;
import org.openapis.openapi.models.operations.GetClientResponse;
import org.openapis.openapi.models.operations.GetClientSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetClientRequest req = new GetClientRequest("totam");            

            GetClientResponse res = sdk.clientManagement.getClient(req, new GetClientSecurity() {{
                clientRegistrationToken = "YOUR_API_KEY_HERE";
            }});

            if (res.client != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateClient

Update the configuration of a previously registered client.


OIDC Client Configuration Endpoint
<http://openid.net/specs/openid-connect-registration-1_0.html#ClientConfigurationEndpoint>

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateClientRequest;
import org.openapis.openapi.models.operations.UpdateClientResponse;
import org.openapis.openapi.models.operations.UpdateClientSecurity;
import org.openapis.openapi.models.shared.Client;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateClientRequest req = new UpdateClientRequest(                new Client("beatae", "commodi") {{
                                applicationType = "molestiae";
                                clientId = "modi";
                                contacts = new String[]{{
                                    add("impedit"),
                                }};
                                defaultMaxAge = 736918L;
                                defaultScopes = new String[]{{
                                    add("ipsum"),
                                    add("excepturi"),
                                }};
                                grantTypes = new String[]{{
                                    add("perferendis"),
                                }};
                                logoUri = "ad";
                                policyUri = "natus";
                                redirectUris = new String[]{{
                                    add("iste"),
                                }};
                                responseTypes = new String[]{{
                                    add("natus"),
                                }};
                                tosUri = "laboriosam";
                            }};, "hic");            

            UpdateClientResponse res = sdk.clientManagement.updateClient(req, new UpdateClientSecurity() {{
                clientRegistrationToken = "YOUR_API_KEY_HERE";
            }});

            if (res.client != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
