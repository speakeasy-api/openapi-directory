# ipAddresses

## Overview

Operations about ip_addresses

### Available Operations

* [getIpAddresses](#getipaddresses) - List IP Addresses associated with the current site
* [getIpAddressesExavaultReserved](#getipaddressesexavaultreserved) - List all possible public ExaVault IP addresses
* [getIpAddressesReserved](#getipaddressesreserved) - List all possible public IP addresses

## getIpAddresses

List IP Addresses associated with the current site

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIpAddressesRequest;
import org.openapis.openapi.models.operations.GetIpAddressesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIpAddressesRequest req = new GetIpAddressesRequest() {{
                cursor = "dolores";
                perPage = 503934;
            }};            

            GetIpAddressesResponse res = sdk.ipAddresses.getIpAddresses(req);

            if (res.ipAddressEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIpAddressesExavaultReserved

List all possible public ExaVault IP addresses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIpAddressesExavaultReservedRequest;
import org.openapis.openapi.models.operations.GetIpAddressesExavaultReservedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIpAddressesExavaultReservedRequest req = new GetIpAddressesExavaultReservedRequest() {{
                cursor = "in";
                perPage = 296242;
            }};            

            GetIpAddressesExavaultReservedResponse res = sdk.ipAddresses.getIpAddressesExavaultReserved(req);

            if (res.publicIpAddressEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getIpAddressesReserved

List all possible public IP addresses

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetIpAddressesReservedRequest;
import org.openapis.openapi.models.operations.GetIpAddressesReservedResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetIpAddressesReservedRequest req = new GetIpAddressesReservedRequest() {{
                cursor = "aliquam";
                perPage = 885963;
            }};            

            GetIpAddressesReservedResponse res = sdk.ipAddresses.getIpAddressesReserved(req);

            if (res.publicIpAddressEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
