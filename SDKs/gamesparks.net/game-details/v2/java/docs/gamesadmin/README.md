# gamesAdmin

## Overview

Games Admin Restv 2 Controller

### Available Operations

* [getGamesEndpointsUsingGET](#getgamesendpointsusingget) - getGamesEndpoints
* [listDeletedUsingGET](#listdeletedusingget) - listDeleted
* [listUsingGET](#listusingget) - list
* [restoreDeletedGameUsingPOST](#restoredeletedgameusingpost) - restoreDeletedGame

## getGamesEndpointsUsingGET

getGamesEndpoints

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GETGamesEndpointsUsingGETRequest;
import org.openapis.openapi.models.operations.GETGamesEndpointsUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GETGamesEndpointsUsingGETRequest req = new GETGamesEndpointsUsingGETRequest("architecto");            

            GETGamesEndpointsUsingGETResponse res = sdk.gamesAdmin.getGamesEndpointsUsingGET(req);

            if (res.gameEndpointsModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listDeletedUsingGET

listDeleted

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListDeletedUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListDeletedUsingGETResponse res = sdk.gamesAdmin.listDeletedUsingGET();

            if (res.deletedGameModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listUsingGET

list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListUsingGETResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListUsingGETResponse res = sdk.gamesAdmin.listUsingGET();

            if (res.gameModels != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## restoreDeletedGameUsingPOST

restoreDeletedGame

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RestoreDeletedGameUsingPOSTRequest;
import org.openapis.openapi.models.operations.RestoreDeletedGameUsingPOSTResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            RestoreDeletedGameUsingPOSTRequest req = new RestoreDeletedGameUsingPOSTRequest("mollitia");            

            RestoreDeletedGameUsingPOSTResponse res = sdk.gamesAdmin.restoreDeletedGameUsingPOST(req);

            if (res.messageModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
