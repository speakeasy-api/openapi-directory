# vaults

## Overview

Access 1Password Vaults

### Available Operations

* [getVaultById](#getvaultbyid) - Get Vault details and metadata
* [getVaults](#getvaults) - Get all Vaults

## getVaultById

Get Vault details and metadata

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVaultByIdRequest;
import org.openapis.openapi.models.operations.GetVaultByIdResponse;
import org.openapis.openapi.models.operations.GetVaultByIdSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVaultByIdRequest req = new GetVaultByIdRequest("soluta");            

            GetVaultByIdResponse res = sdk.vaults.getVaultById(req, new GetVaultByIdSecurity("hic") {{
                connectToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.vault != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVaults

Get all Vaults

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVaultsRequest;
import org.openapis.openapi.models.operations.GetVaultsResponse;
import org.openapis.openapi.models.operations.GetVaultsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetVaultsRequest req = new GetVaultsRequest() {{
                filter = "name eq "Some Vault Name"";
            }};            

            GetVaultsResponse res = sdk.vaults.getVaults(req, new GetVaultsSecurity("illum") {{
                connectToken = "Bearer YOUR_BEARER_TOKEN_HERE";
            }});

            if (res.vaults != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
