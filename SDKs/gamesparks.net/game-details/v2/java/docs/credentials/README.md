# credentials

## Overview

Game Credentials Rest V 2 Controller

### Available Operations

* [updateCredentialSecretUsingPOST](#updatecredentialsecretusingpost) - Resets the secret of a credential

## updateCredentialSecretUsingPOST

Resets the secret of a credential

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCredentialSecretUsingPOSTRequest;
import org.openapis.openapi.models.operations.UpdateCredentialSecretUsingPOSTResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdateCredentialSecretUsingPOSTRequest req = new UpdateCredentialSecretUsingPOSTRequest("quod", "quod");            

            UpdateCredentialSecretUsingPOSTResponse res = sdk.credentials.updateCredentialSecretUsingPOST(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
