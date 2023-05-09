# companyManagement

## Overview

Create new and manage existing sync for commerce companies.

### Available Operations

* [createCompany](#createcompany) - Create a sync for commerce company
* [createConnection](#createconnection) - Create a data connection
* [listCompanies](#listcompanies) - List companies
* [listConnections](#listconnections) - List data connections
* [updateConnection](#updateconnection) - Update data connection

## createCompany

Creates a Codat company with a commerce partner data connection.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCompanyResponse;
import org.openapis.openapi.models.shared.CreateCompany;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.CreateCompany req = new CreateCompany("quibusdam");            

            CreateCompanyResponse res = sdk.companyManagement.createCompany(req);

            if (res.company != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createConnection

Create a data connection for company.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateConnectionRequest;
import org.openapis.openapi.models.operations.CreateConnectionResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateConnectionRequest req = new CreateConnectionRequest("d8d69a67-4e0f-4467-8c87-96ed151a05df") {{
                requestBody = "quo";
            }};            

            CreateConnectionResponse res = sdk.companyManagement.createConnection(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCompanies

Retrieve a list of all companies the client has created.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCompaniesRequest;
import org.openapis.openapi.models.operations.ListCompaniesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("odit") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListCompaniesRequest req = new ListCompaniesRequest(870013) {{
                orderBy = "at";
                pageSize = 978619;
                query = "molestiae";
            }};            

            ListCompaniesResponse res = sdk.companyManagement.listCompanies(req);

            if (res.companies != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listConnections

Retrieve previously created data connections.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListConnectionsRequest;
import org.openapis.openapi.models.operations.ListConnectionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quod") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListConnectionsRequest req = new ListConnectionsRequest("c78ca1ba-928f-4c81-a742-cb7392059293", 616934) {{
                orderBy = "laboriosam";
                pageSize = 943749;
                query = "saepe";
            }};            

            ListConnectionsResponse res = sdk.companyManagement.listConnections(req);

            if (res.connections != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateConnection

Update a data connection

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateConnectionRequest;
import org.openapis.openapi.models.operations.UpdateConnectionResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UpdateConnection;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("fuga") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateConnectionRequest req = new UpdateConnectionRequest("7596eb10-faaa-4235-ac59-55907aff1a3a", "2fa94677-3925-41aa-92c3-f5ad019da1ff") {{
                updateConnection = new UpdateConnection() {{
                    status = "vero";
                }};;
            }};            

            UpdateConnectionResponse res = sdk.companyManagement.updateConnection(req);

            if (res.connection != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
