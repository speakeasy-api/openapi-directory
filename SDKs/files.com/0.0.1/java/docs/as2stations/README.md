# as2Stations

## Overview

Operations about as2_stations

### Available Operations

* [deleteAs2StationsId](#deleteas2stationsid) - Delete As2 Station
* [getAs2Stations](#getas2stations) - List As2 Stations
* [getAs2StationsId](#getas2stationsid) - Show As2 Station
* [patchAs2StationsId](#patchas2stationsid) - Update As2 Station
* [postAs2Stations](#postas2stations) - Create As2 Station

## deleteAs2StationsId

Delete As2 Station

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAs2StationsIdRequest;
import org.openapis.openapi.models.operations.DeleteAs2StationsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAs2StationsIdRequest req = new DeleteAs2StationsIdRequest(566602);            

            DeleteAs2StationsIdResponse res = sdk.as2Stations.deleteAs2StationsId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAs2Stations

List As2 Stations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAs2StationsRequest;
import org.openapis.openapi.models.operations.GetAs2StationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAs2StationsRequest req = new GetAs2StationsRequest() {{
                cursor = "pariatur";
                perPage = 265389;
            }};            

            GetAs2StationsResponse res = sdk.as2Stations.getAs2Stations(req);

            if (res.as2StationEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAs2StationsId

Show As2 Station

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAs2StationsIdRequest;
import org.openapis.openapi.models.operations.GetAs2StationsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAs2StationsIdRequest req = new GetAs2StationsIdRequest(508969);            

            GetAs2StationsIdResponse res = sdk.as2Stations.getAs2StationsId(req);

            if (res.as2StationEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchAs2StationsId

Update As2 Station

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchAs2StationsIdRequest;
import org.openapis.openapi.models.operations.PatchAs2StationsIdRequestBody;
import org.openapis.openapi.models.operations.PatchAs2StationsIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchAs2StationsIdRequest req = new PatchAs2StationsIdRequest(523248) {{
                requestBody = new PatchAs2StationsIdRequestBody() {{
                    name = "Carl Waelchi DVM";
                    privateKey = "incidunt";
                    privateKeyPassword = "enim";
                    publicCertificate = "consequatur";
                }};;
            }};            

            PatchAs2StationsIdResponse res = sdk.as2Stations.patchAs2StationsId(req);

            if (res.as2StationEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAs2Stations

Create As2 Station

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAs2StationsRequestBody;
import org.openapis.openapi.models.operations.PostAs2StationsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAs2StationsRequestBody req = new PostAs2StationsRequestBody("est", "quibusdam", "explicabo") {{
                privateKeyPassword = "deserunt";
            }};            

            PostAs2StationsResponse res = sdk.as2Stations.postAs2Stations(req);

            if (res.as2StationEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
