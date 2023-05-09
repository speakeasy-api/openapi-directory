# publicKeys

## Overview

Operations about public_keys

### Available Operations

* [deletePublicKeysId](#deletepublickeysid) - Delete Public Key
* [getPublicKeys](#getpublickeys) - List Public Keys
* [getPublicKeysId](#getpublickeysid) - Show Public Key
* [patchPublicKeysId](#patchpublickeysid) - Update Public Key
* [postPublicKeys](#postpublickeys) - Create Public Key

## deletePublicKeysId

Delete Public Key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeletePublicKeysIdRequest;
import org.openapis.openapi.models.operations.DeletePublicKeysIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeletePublicKeysIdRequest req = new DeletePublicKeysIdRequest(2703);            

            DeletePublicKeysIdResponse res = sdk.publicKeys.deletePublicKeysId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPublicKeys

List Public Keys

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPublicKeysRequest;
import org.openapis.openapi.models.operations.GetPublicKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPublicKeysRequest req = new GetPublicKeysRequest() {{
                cursor = "amet";
                perPage = 647197;
                userId = 454860;
            }};            

            GetPublicKeysResponse res = sdk.publicKeys.getPublicKeys(req);

            if (res.publicKeyEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPublicKeysId

Show Public Key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPublicKeysIdRequest;
import org.openapis.openapi.models.operations.GetPublicKeysIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPublicKeysIdRequest req = new GetPublicKeysIdRequest(600392);            

            GetPublicKeysIdResponse res = sdk.publicKeys.getPublicKeysId(req);

            if (res.publicKeyEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchPublicKeysId

Update Public Key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchPublicKeysIdRequest;
import org.openapis.openapi.models.operations.PatchPublicKeysIdRequestBody;
import org.openapis.openapi.models.operations.PatchPublicKeysIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchPublicKeysIdRequest req = new PatchPublicKeysIdRequest(                new PatchPublicKeysIdRequestBody("My Main Key");, 972083);            

            PatchPublicKeysIdResponse res = sdk.publicKeys.patchPublicKeysId(req);

            if (res.publicKeyEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPublicKeys

Create Public Key

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPublicKeysRequestBody;
import org.openapis.openapi.models.operations.PostPublicKeysResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostPublicKeysRequestBody req = new PostPublicKeysRequestBody("provident", "My Main Key") {{
                userId = 833819;
            }};            

            PostPublicKeysResponse res = sdk.publicKeys.postPublicKeys(req);

            if (res.publicKeyEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
