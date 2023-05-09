# connections

## Overview

A connection represents an account of a consumer for a connector. For example a consumer with ID "test-consumer" has a Salesforce connection for the CRM API. Connections securely save credentials and settings for a connector.

### Available Operations

* [connectionSettingsAll](#connectionsettingsall) - Get resource settings
* [connectionSettingsUpdate](#connectionsettingsupdate) - Update settings
* [connectionsAdd](#connectionsadd) - Create connection
* [connectionsAll](#connectionsall) - Get all connections
* [connectionsCallback](#connectionscallback) - Callback
* [connectionsDelete](#connectionsdelete) - Deletes a connection
* [connectionsImport](#connectionsimport) - Import connection
* [connectionsOne](#connectionsone) - Get connection
* [connectionsRevoke](#connectionsrevoke) - Revoke connection
* [connectionsToken](#connectionstoken) - Get Access Token
* [connectionsUpdate](#connectionsupdate) - Update connection

## connectionSettingsAll

This endpoint returns custom settings and their defaults required by connection for a given resource.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectionSettingsAllRequest;
import org.openapis.openapi.models.operations.ConnectionSettingsAllResponse;
import org.openapis.openapi.models.operations.ConnectionSettingsAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectionSettingsAllRequest req = new ConnectionSettingsAllRequest("corrupti", "illum", "vel", "error", "deserunt");            

            ConnectionSettingsAllResponse res = sdk.connections.connectionSettingsAll(req, new ConnectionSettingsAllSecurity("suscipit") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectionSettingsUpdate

Update default values for a connection's resource settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectionSettingsUpdateRequest;
import org.openapis.openapi.models.operations.ConnectionSettingsUpdateResponse;
import org.openapis.openapi.models.operations.ConnectionSettingsUpdateSecurity;
import org.openapis.openapi.models.shared.ConnectionConfigurationDefaultsInput;
import org.openapis.openapi.models.shared.ConnectionConfigurationInput;
import org.openapis.openapi.models.shared.ConnectionInput;
import org.openapis.openapi.models.shared.FormFieldOptionGroup;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SimpleFormFieldOption;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectionSettingsUpdateRequest req = new ConnectionSettingsUpdateRequest(                new ConnectionInput() {{
                                configuration = new org.openapis.openapi.models.shared.ConnectionConfigurationInput[]{{
                                    add(new ConnectionConfigurationInput() {{
                                        defaults = new org.openapis.openapi.models.shared.ConnectionConfigurationDefaultsInput[]{{
                                            add(new ConnectionConfigurationDefaultsInput() {{
                                                id = "ProductInterest";
                                                options = new Object[]{{
                                                    add(new SimpleFormFieldOption() {{
                                                        label = "General Channel";
                                                        value = new Object[]{{
                                                            add(477665L),
                                                            add(8121.69),
                                                        }};
                                                    }}),
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 12.5;
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 123L;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = "general";
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 123L;
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = "general";
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = true;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new SimpleFormFieldOption() {{
                                                        label = "General Channel";
                                                        value = 123L;
                                                    }}),
                                                }};
                                                value = new Object[]{{
                                                    add(10.5),
                                                    add("GC6000 series"),
                                                    add(10.5),
                                                    add(10.5),
                                                }};
                                            }}),
                                            add(new ConnectionConfigurationDefaultsInput() {{
                                                id = "ProductInterest";
                                                options = new Object[]{{
                                                    add(new SimpleFormFieldOption() {{
                                                        label = "General Channel";
                                                        value = true;
                                                    }}),
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 12.5;
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = true;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = true;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = "general";
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 12.5;
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = new Object[]{{
                                                                    add(105907L),
                                                                    add(473600L),
                                                                    add("qui"),
                                                                    add(7369.18),
                                                                }};
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                value = 10.5;
                                            }}),
                                        }};
                                        resource = "leads";
                                    }}),
                                    add(new ConnectionConfigurationInput() {{
                                        defaults = new org.openapis.openapi.models.shared.ConnectionConfigurationDefaultsInput[]{{
                                            add(new ConnectionConfigurationDefaultsInput() {{
                                                id = "ProductInterest";
                                                options = new Object[]{{
                                                    add(new SimpleFormFieldOption() {{
                                                        label = "General Channel";
                                                        value = "general";
                                                    }}),
                                                    add(new SimpleFormFieldOption() {{
                                                        label = "General Channel";
                                                        value = true;
                                                    }}),
                                                    add(new SimpleFormFieldOption() {{
                                                        label = "General Channel";
                                                        value = true;
                                                    }}),
                                                }};
                                                value = 10L;
                                            }}),
                                        }};
                                        resource = "leads";
                                    }}),
                                }};
                                enabled = true;
                                metadata = new java.util.HashMap<String, Object>() {{
                                    put("laboriosam", "hic");
                                    put("saepe", "fuga");
                                    put("in", "corporis");
                                }};
                                settings = new java.util.HashMap<String, Object>() {{
                                    put("iure", "saepe");
                                    put("quidem", "architecto");
                                    put("ipsa", "reiciendis");
                                }};
                            }};, "est", "mollitia", "laborum", "dolores", "dolorem");            

            ConnectionSettingsUpdateResponse res = sdk.connections.connectionSettingsUpdate(req, new ConnectionSettingsUpdateSecurity("corporis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectionsAdd

Create an authorized connection


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectionsAddRequest;
import org.openapis.openapi.models.operations.ConnectionsAddResponse;
import org.openapis.openapi.models.operations.ConnectionsAddSecurity;
import org.openapis.openapi.models.shared.ConnectionConfigurationDefaultsInput;
import org.openapis.openapi.models.shared.ConnectionConfigurationInput;
import org.openapis.openapi.models.shared.ConnectionInput;
import org.openapis.openapi.models.shared.FormFieldOptionGroup;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SimpleFormFieldOption;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectionsAddRequest req = new ConnectionsAddRequest(                new ConnectionInput() {{
                                configuration = new org.openapis.openapi.models.shared.ConnectionConfigurationInput[]{{
                                    add(new ConnectionConfigurationInput() {{
                                        defaults = new org.openapis.openapi.models.shared.ConnectionConfigurationDefaultsInput[]{{
                                            add(new ConnectionConfigurationDefaultsInput() {{
                                                id = "ProductInterest";
                                                options = new Object[]{{
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 123L;
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 12.5;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new SimpleFormFieldOption() {{
                                                        label = "General Channel";
                                                        value = 12.5;
                                                    }}),
                                                }};
                                                value = true;
                                            }}),
                                            add(new ConnectionConfigurationDefaultsInput() {{
                                                id = "ProductInterest";
                                                options = new Object[]{{
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = true;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new SimpleFormFieldOption() {{
                                                        label = "General Channel";
                                                        value = true;
                                                    }}),
                                                    add(new SimpleFormFieldOption() {{
                                                        label = "General Channel";
                                                        value = new Object[]{{
                                                            add(253291L),
                                                            add(466311L),
                                                            add(244425L),
                                                        }};
                                                    }}),
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 123L;
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                value = "GC5000 series";
                                            }}),
                                            add(new ConnectionConfigurationDefaultsInput() {{
                                                id = "ProductInterest";
                                                options = new Object[]{{
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = "general";
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = true;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new SimpleFormFieldOption() {{
                                                        label = "General Channel";
                                                        value = new Object[]{{
                                                            add(820994L),
                                                            add("quasi"),
                                                        }};
                                                    }}),
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = true;
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = "general";
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = new Object[]{{
                                                                    add(4686.51),
                                                                    add(976762L),
                                                                    add("omnis"),
                                                                    add(739264L),
                                                                }};
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = "general";
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                value = "GC5000 series";
                                            }}),
                                            add(new ConnectionConfigurationDefaultsInput() {{
                                                id = "ProductInterest";
                                                options = new Object[]{{
                                                    add(new SimpleFormFieldOption() {{
                                                        label = "General Channel";
                                                        value = new Object[]{{
                                                            add(296140L),
                                                        }};
                                                    }}),
                                                    add(new SimpleFormFieldOption() {{
                                                        label = "General Channel";
                                                        value = "general";
                                                    }}),
                                                }};
                                                value = true;
                                            }}),
                                        }};
                                        resource = "leads";
                                    }}),
                                }};
                                enabled = true;
                                metadata = new java.util.HashMap<String, Object>() {{
                                    put("accusamus", "commodi");
                                    put("repudiandae", "quae");
                                }};
                                settings = new java.util.HashMap<String, Object>() {{
                                    put("quidem", "molestias");
                                }};
                            }};, "excepturi", "pariatur", "modi", "praesentium");            

            ConnectionsAddResponse res = sdk.connections.connectionsAdd(req, new ConnectionsAddSecurity("rem") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectionsAll

This endpoint includes all the configured integrations and contains the required assets
to build an integrations page where your users can install integrations.
OAuth2 supported integrations will contain authorize and revoke links to handle the authentication flows.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectionsAllRequest;
import org.openapis.openapi.models.operations.ConnectionsAllResponse;
import org.openapis.openapi.models.operations.ConnectionsAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectionsAllRequest req = new ConnectionsAllRequest("voluptates", "quasi") {{
                api = "repudiandae";
                configured = false;
            }};            

            ConnectionsAllResponse res = sdk.connections.connectionsAll(req, new ConnectionsAllSecurity("sint") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getConnectionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectionsCallback

This endpoint gets called after the triggering the authorize flow.

Callback links need a state and code parameter to verify the validity of the request.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectionsCallbackRequest;
import org.openapis.openapi.models.operations.ConnectionsCallbackResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("veritatis", "itaque") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    applicationId = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConnectionsCallbackRequest req = new ConnectionsCallbackRequest("incidunt", "enim");            

            ConnectionsCallbackResponse res = sdk.connections.connectionsCallback(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectionsDelete

Deletes a connection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectionsDeleteRequest;
import org.openapis.openapi.models.operations.ConnectionsDeleteResponse;
import org.openapis.openapi.models.operations.ConnectionsDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectionsDeleteRequest req = new ConnectionsDeleteRequest("consequatur", "est", "quibusdam", "explicabo");            

            ConnectionsDeleteResponse res = sdk.connections.connectionsDelete(req, new ConnectionsDeleteSecurity("deserunt") {{
                apiKey = "YOUR_API_KEY_HERE";
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

## connectionsImport

Import an authorized connection.


### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectionsImportRequest;
import org.openapis.openapi.models.operations.ConnectionsImportResponse;
import org.openapis.openapi.models.operations.ConnectionsImportSecurity;
import org.openapis.openapi.models.shared.ConnectionImportData;
import org.openapis.openapi.models.shared.ConnectionImportDataCredentials;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectionsImportRequest req = new ConnectionsImportRequest(                new ConnectionImportData() {{
                                credentials = new ConnectionImportDataCredentials("1234567890abcdefghijklmnopqrstuvwxyz") {{
                                    accessToken = "1234567890abcdefghijklmnopqrstuvwxyz";
                                    expiresIn = 3600L;
                                    issuedAt = OffsetDateTime.parse("2020-01-01T00:00:00Z");
                                }};;
                                metadata = new java.util.HashMap<String, Object>() {{
                                    put("quibusdam", "labore");
                                    put("modi", "qui");
                                    put("aliquid", "cupiditate");
                                }};
                                settings = new java.util.HashMap<String, Object>() {{
                                    put("perferendis", "magni");
                                    put("assumenda", "ipsam");
                                    put("alias", "fugit");
                                }};
                            }};, "dolorum", "excepturi", "tempora", "facilis");            

            ConnectionsImportResponse res = sdk.connections.connectionsImport(req, new ConnectionsImportSecurity("tempore") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectionsOne

Get a connection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectionsOneRequest;
import org.openapis.openapi.models.operations.ConnectionsOneResponse;
import org.openapis.openapi.models.operations.ConnectionsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectionsOneRequest req = new ConnectionsOneRequest("labore", "delectus", "eum", "non");            

            ConnectionsOneResponse res = sdk.connections.connectionsOne(req, new ConnectionsOneSecurity("eligendi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectionsRevoke

__In most cases the authorize link is provided in the ``/connections`` endpoint. Normally you don't need to manually generate these links.__

Use this endpoint to revoke an existing OAuth connector.

Auth links will have a state parameter included to verify the validity of the request. This is the url your users will use to activate OAuth supported integration providers.

Vault handles the complete revoke flow for you and will redirect you to the dynamic redirect uri you have appended to the url in case this is missing the default redirect uri you have configured for your Unify application.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectionsRevokeRequest;
import org.openapis.openapi.models.operations.ConnectionsRevokeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sint", "aliquid") {{
                    apiKey = "YOUR_API_KEY_HERE";
                    applicationId = "YOUR_API_KEY_HERE";
                }})
                .build();

            ConnectionsRevokeRequest req = new ConnectionsRevokeRequest("provident", "necessitatibus", "sint", "officia");            

            ConnectionsRevokeResponse res = sdk.connections.connectionsRevoke(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectionsToken

Get an access token for a connection and store it in Vault. Currently only supported for connections with the client_credentials OAuth grant type.

Note that the access token will not be returned in the response. A 200 response code indicates a valid access token was stored on the connection.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectionsTokenRequest;
import org.openapis.openapi.models.operations.ConnectionsTokenResponse;
import org.openapis.openapi.models.operations.ConnectionsTokenSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectionsTokenRequest req = new ConnectionsTokenRequest("dolor", "debitis", "a", "dolorum") {{
                requestBody = new java.util.HashMap<String, Object>() {{
                    put("in", "illum");
                    put("maiores", "rerum");
                }};
            }};            

            ConnectionsTokenResponse res = sdk.connections.connectionsToken(req, new ConnectionsTokenSecurity("dicta") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## connectionsUpdate

Update a connection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ConnectionsUpdateRequest;
import org.openapis.openapi.models.operations.ConnectionsUpdateResponse;
import org.openapis.openapi.models.operations.ConnectionsUpdateSecurity;
import org.openapis.openapi.models.shared.ConnectionConfigurationDefaultsInput;
import org.openapis.openapi.models.shared.ConnectionConfigurationInput;
import org.openapis.openapi.models.shared.ConnectionInput;
import org.openapis.openapi.models.shared.FormFieldOptionGroup;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SimpleFormFieldOption;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ConnectionsUpdateRequest req = new ConnectionsUpdateRequest(                new ConnectionInput() {{
                                configuration = new org.openapis.openapi.models.shared.ConnectionConfigurationInput[]{{
                                    add(new ConnectionConfigurationInput() {{
                                        defaults = new org.openapis.openapi.models.shared.ConnectionConfigurationDefaultsInput[]{{
                                            add(new ConnectionConfigurationDefaultsInput() {{
                                                id = "ProductInterest";
                                                options = new Object[]{{
                                                    add(new SimpleFormFieldOption() {{
                                                        label = "General Channel";
                                                        value = 123L;
                                                    }}),
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 123L;
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 12.5;
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 123L;
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = new Object[]{{
                                                                    add(5884.65),
                                                                    add(6596.69),
                                                                    add(533206L),
                                                                    add(2305.33),
                                                                }};
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 12.5;
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = true;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = "general";
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 12.5;
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                value = 10L;
                                            }}),
                                            add(new ConnectionConfigurationDefaultsInput() {{
                                                id = "ProductInterest";
                                                options = new Object[]{{
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 123L;
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 123L;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 12.5;
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = new Object[]{{
                                                                    add("magnam"),
                                                                }};
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = "general";
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 12.5;
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 12.5;
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                value = 10.5;
                                            }}),
                                            add(new ConnectionConfigurationDefaultsInput() {{
                                                id = "ProductInterest";
                                                options = new Object[]{{
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = true;
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 123L;
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 12.5;
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 123L;
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                value = new Object[]{{
                                                    add(10L),
                                                }};
                                            }}),
                                            add(new ConnectionConfigurationDefaultsInput() {{
                                                id = "ProductInterest";
                                                options = new Object[]{{
                                                    add(new SimpleFormFieldOption() {{
                                                        label = "General Channel";
                                                        value = new Object[]{{
                                                            add("maxime"),
                                                            add(703889L),
                                                            add(100226L),
                                                            add("repudiandae"),
                                                        }};
                                                    }}),
                                                }};
                                                value = 10L;
                                            }}),
                                        }};
                                        resource = "leads";
                                    }}),
                                    add(new ConnectionConfigurationInput() {{
                                        defaults = new org.openapis.openapi.models.shared.ConnectionConfigurationDefaultsInput[]{{
                                            add(new ConnectionConfigurationDefaultsInput() {{
                                                id = "ProductInterest";
                                                options = new Object[]{{
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = "general";
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = new Object[]{{
                                                                    add("consequuntur"),
                                                                    add(615560L),
                                                                    add("sunt"),
                                                                    add(8480.09),
                                                                }};
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = new Object[]{{
                                                                    add(569101L),
                                                                    add("ea"),
                                                                    add("ab"),
                                                                    add(6974.29),
                                                                }};
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 123L;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new SimpleFormFieldOption() {{
                                                        label = "General Channel";
                                                        value = 12.5;
                                                    }}),
                                                }};
                                                value = true;
                                            }}),
                                            add(new ConnectionConfigurationDefaultsInput() {{
                                                id = "ProductInterest";
                                                options = new Object[]{{
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = new Object[]{{
                                                                    add(2307.42),
                                                                }};
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = "general";
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                value = true;
                                            }}),
                                            add(new ConnectionConfigurationDefaultsInput() {{
                                                id = "ProductInterest";
                                                options = new Object[]{{
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = true;
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = "general";
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 123L;
                                                            }}),
                                                        }};
                                                    }}),
                                                    add(new FormFieldOptionGroup() {{
                                                        id = "1234";
                                                        label = "General Channel";
                                                        options = new org.openapis.openapi.models.shared.SimpleFormFieldOption[]{{
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = "general";
                                                            }}),
                                                            add(new SimpleFormFieldOption() {{
                                                                label = "General Channel";
                                                                value = 123L;
                                                            }}),
                                                        }};
                                                    }}),
                                                }};
                                                value = "GC5000 series";
                                            }}),
                                        }};
                                        resource = "leads";
                                    }}),
                                }};
                                enabled = true;
                                metadata = new java.util.HashMap<String, Object>() {{
                                    put("perferendis", "dolores");
                                }};
                                settings = new java.util.HashMap<String, Object>() {{
                                    put("quam", "dolor");
                                    put("vero", "nostrum");
                                    put("hic", "recusandae");
                                    put("omnis", "facilis");
                                }};
                            }};, "perspiciatis", "voluptatem", "porro", "consequuntur");            

            ConnectionsUpdateResponse res = sdk.connections.connectionsUpdate(req, new ConnectionsUpdateSecurity("blanditiis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateConnectionResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
