# destination

## Overview

Destination related resources.

### Available Operations

* [checkConnectionToDestination](#checkconnectiontodestination) - Check connection to the destination
* [checkConnectionToDestinationForUpdate](#checkconnectiontodestinationforupdate) - Check connection for a proposed update to a destination
* [cloneDestination](#clonedestination) - Clone destination
* [createDestination](#createdestination) - Create a destination
* [deleteDestination](#deletedestination) - Delete the destination
* [getDestination](#getdestination) - Get configured destination
* [listDestinationsForWorkspace](#listdestinationsforworkspace) - List configured destinations for a workspace
* [searchDestinations](#searchdestinations) - Search destinations
* [updateDestination](#updatedestination) - Update a destination

## checkConnectionToDestination

Check connection to the destination

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckConnectionToDestinationResponse;
import org.openapis.openapi.models.shared.DestinationIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DestinationIdRequestBody req = new DestinationIdRequestBody("d0e9fe6c-632c-4a3a-ad01-17996312fde0");            

            CheckConnectionToDestinationResponse res = sdk.destination.checkConnectionToDestination(req);

            if (res.checkConnectionRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## checkConnectionToDestinationForUpdate

Check connection for a proposed update to a destination

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CheckConnectionToDestinationForUpdateResponse;
import org.openapis.openapi.models.shared.DestinationUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DestinationUpdate req = new DestinationUpdate("tempora", "771778ff-61d0-4174-b636-0a15db6a6606", "voluptas");            

            CheckConnectionToDestinationForUpdateResponse res = sdk.destination.checkConnectionToDestinationForUpdate(req);

            if (res.checkConnectionRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## cloneDestination

Clone destination

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloneDestinationResponse;
import org.openapis.openapi.models.shared.DestinationCloneConfiguration;
import org.openapis.openapi.models.shared.DestinationCloneRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DestinationCloneRequestBody req = new DestinationCloneRequestBody("9a1adeaa-b585-41d6-8645-b08b61891baa") {{
                destinationConfiguration = new DestinationCloneConfiguration() {{
                    connectionConfiguration = "voluptatem";
                    name = "Stewart Brakus";
                }};;
            }};            

            CloneDestinationResponse res = sdk.destination.cloneDestination(req);

            if (res.destinationRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createDestination

Create a destination

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateDestinationResponse;
import org.openapis.openapi.models.shared.DestinationCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DestinationCreate req = new DestinationCreate("debitis", "008e6f8c-5f35-40d8-8db5-a34181430104", "fugit", "1813d520-8ece-47e2-93b6-68451c6c6e20");            

            CreateDestinationResponse res = sdk.destination.createDestination(req);

            if (res.destinationRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteDestination

Delete the destination

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteDestinationResponse;
import org.openapis.openapi.models.shared.DestinationIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DestinationIdRequestBody req = new DestinationIdRequestBody("5e16deab-3fec-4957-8a64-584273a8418d");            

            DeleteDestinationResponse res = sdk.destination.deleteDestination(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDestination

Get configured destination

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDestinationResponse;
import org.openapis.openapi.models.shared.DestinationIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DestinationIdRequestBody req = new DestinationIdRequestBody("162309fb-0929-4921-aefb-9f58c4d86e68");            

            GetDestinationResponse res = sdk.destination.getDestination(req);

            if (res.destinationRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDestinationsForWorkspace

List configured destinations for a workspace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDestinationsForWorkspaceResponse;
import org.openapis.openapi.models.shared.WorkspaceIdRequestBody;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.WorkspaceIdRequestBody req = new WorkspaceIdRequestBody("e4be0560-13f5-49da-b57a-59ecfef66ef1");            

            ListDestinationsForWorkspaceResponse res = sdk.destination.listDestinationsForWorkspace(req);

            if (res.destinationReadList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## searchDestinations

Search destinations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SearchDestinationsResponse;
import org.openapis.openapi.models.shared.DestinationSearch;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DestinationSearch req = new DestinationSearch() {{
                connectionConfiguration = "minus";
                destinationDefinitionId = "aa3383c2-beb4-4773-b3c8-d72f64d1db1f";
                destinationId = "2c431066-1e96-4349-a1cf-9e06e3a43700";
                destinationName = "consequatur";
                name = "Clay Jast";
                workspaceId = "bc9b8f75-9eac-455a-9741-d311352965bb";
            }};            

            SearchDestinationsResponse res = sdk.destination.searchDestinations(req);

            if (res.destinationReadList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateDestination

Update a destination

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateDestinationResponse;
import org.openapis.openapi.models.shared.DestinationUpdate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DestinationUpdate req = new DestinationUpdate("rem", "a7202611-435e-4139-9bc2-259b1abda8c0", "iusto");            

            UpdateDestinationResponse res = sdk.destination.updateDestination(req);

            if (res.destinationRead != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
