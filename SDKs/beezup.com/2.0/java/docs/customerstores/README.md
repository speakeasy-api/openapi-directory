# customerStores

### Available Operations

* [createStore](#createstore) - Create a new store
* [deleteStore](#deletestore) - Delete a store
* [getStore](#getstore) - Get store's information
* [getStores](#getstores) - Get store list
* [updateStore](#updatestore) - Update some store's information.

## createStore

Create a new store

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateStoreResponse;
import org.openapis.openapi.models.shared.CreateStoreRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CreateStoreRequest req = new CreateStoreRequest("DEU", "My Store",                 new String[]{{
                                add("ANIMALERIE"),
                                add("ANIMALERIE"),
                                add("ANIMALERIE"),
                                add("ANIMALERIE"),
                            }}, "http://www.mystore.com") {{
                id = "64f43358-63a1-47f7-97ec-0301fc39956b";
            }};            

            CreateStoreResponse res = sdk.customerStores.createStore(req);

            if (res.linksGetStoreLink != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## deleteStore

Delete a store

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteStoreRequest;
import org.openapis.openapi.models.operations.DeleteStoreResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteStoreRequest req = new DeleteStoreRequest("vel");            

            DeleteStoreResponse res = sdk.customerStores.deleteStore(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStore

Get store's information

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoreRequest;
import org.openapis.openapi.models.operations.GetStoreResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStoreRequest req = new GetStoreRequest("in") {{
                ifNoneMatch = "eius";
            }};            

            GetStoreResponse res = sdk.customerStores.getStore(req);

            if (res.store != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getStores

Get store list

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoresRequest;
import org.openapis.openapi.models.operations.GetStoresResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStoresRequest req = new GetStoresRequest() {{
                ifNoneMatch = "libero";
            }};            

            GetStoresResponse res = sdk.customerStores.getStores(req);

            if (res.storeList != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateStore

Update some store's information. FYI, you cannot change the country.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateStoreRequest;
import org.openapis.openapi.models.operations.UpdateStoreResponse;
import org.openapis.openapi.models.shared.UpdateStoreRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateStoreRequest req = new UpdateStoreRequest("illum",                 new UpdateStoreRequest("My Store",                 new String[]{{
                                                add("ANIMALERIE"),
                                                add("ANIMALERIE"),
                                                add("ANIMALERIE"),
                                            }}, "http://www.mystore.com"););            

            UpdateStoreResponse res = sdk.customerStores.updateStore(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
