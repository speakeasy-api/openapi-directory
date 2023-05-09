# addressRequests

## Overview

Requests to create, list and delete addresses

### Available Operations

* [deleteAddress](#deleteaddress) - deleteAddress
* [exportAddress](#exportaddress) - exportAddress
* [importAddress](#importaddress) - importAddress
* [listAddresses](#listaddresses) - listAddresses
* [newAddress](#newaddress) - newAddress

## deleteAddress

Deletes an existing ethereum address. Be careful when using this function.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAddressRequest;
import org.openapis.openapi.models.operations.DeleteAddressResponse;
import org.openapis.openapi.models.shared.DeleteAddressRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAddressRequest req = new DeleteAddressRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",                 new DeleteAddressRequest("distinctio", "quibusdam"););            

            DeleteAddressResponse res = sdk.addressRequests.deleteAddress(req);

            if (res.deleteAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## exportAddress

Returns all ethereum addresses created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ExportAddressRequest;
import org.openapis.openapi.models.operations.ExportAddressResponse;
import org.openapis.openapi.models.shared.ExportAddressRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ExportAddressRequest req = new ExportAddressRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",                 new ExportAddressRequest("unde", "nulla"););            

            ExportAddressResponse res = sdk.addressRequests.exportAddress(req);

            if (res.exportAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## importAddress

Returns all ethereum addresses created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImportAddressRequest;
import org.openapis.openapi.models.operations.ImportAddressResponse;
import org.openapis.openapi.models.shared.Cipherparams;
import org.openapis.openapi.models.shared.Content;
import org.openapis.openapi.models.shared.Crypto;
import org.openapis.openapi.models.shared.ImportAddressRequest;
import org.openapis.openapi.models.shared.Kdfparams;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ImportAddressRequest req = new ImportAddressRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",                 new ImportAddressRequest(                new Content("corrupti",                 new Crypto("illum",                 new Cipherparams("vel");, "error", "deserunt",                 new Kdfparams(384382, 437587, 297534, 891773, "ipsa");, "delectus");, "tempora", 383441);, "molestiae", "minus"););            

            ImportAddressResponse res = sdk.addressRequests.importAddress(req);

            if (res.importAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listAddresses

Returns all ethereum addresses created with an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListAddressesRequest;
import org.openapis.openapi.models.operations.ListAddressesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListAddressesRequest req = new ListAddressesRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m", "application/json");            

            ListAddressesResponse res = sdk.addressRequests.listAddresses(req);

            if (res.listAddresses != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## newAddress

Generates a new ethereum addresses you can use to send or receive funds. Do not lose the password! We can't restore access to an address if you lose it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NewAddressRequest;
import org.openapis.openapi.models.operations.NewAddressResponse;
import org.openapis.openapi.models.shared.NewAddressRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            NewAddressRequest req = new NewAddressRequest("q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m",                 new NewAddressRequest("placeat"););            

            NewAddressResponse res = sdk.addressRequests.newAddress(req);

            if (res.newAddress != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
