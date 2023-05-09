# chargeStations

### Available Operations

* [deleteChargeStation](#deletechargestation) - Use to delete a charge station
* [getChargeStation](#getchargestation) - Get a single charge station's data
* [getChargeStationConnectors](#getchargestationconnectors) - List connectors for a chargestation
* [getChargeStations](#getchargestations) - List all Chargestations
* [patchChargeStation](#patchchargestation) - Update a charge station's data
* [postChargeStations](#postchargestations) - Create a new charge station

## deleteChargeStation

Use to delete a charge station

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteChargeStationRequest;
import org.openapis.openapi.models.operations.DeleteChargeStationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("distinctio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            DeleteChargeStationRequest req = new DeleteChargeStationRequest("quibusdam");            

            DeleteChargeStationResponse res = sdk.chargeStations.deleteChargeStation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChargeStation

Get a single charge station's data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChargeStationRequest;
import org.openapis.openapi.models.operations.GetChargeStationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("unde") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetChargeStationRequest req = new GetChargeStationRequest("nulla") {{
                includeEvses = false;
                includeLocation = false;
                includeOrganization = false;
            }};            

            GetChargeStationResponse res = sdk.chargeStations.getChargeStation(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChargeStationConnectors

List connectors for a chargestation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChargeStationConnectorsRequest;
import org.openapis.openapi.models.operations.GetChargeStationConnectorsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetChargeStationConnectorsRequest req = new GetChargeStationConnectorsRequest("illum") {{
                includeEvse = false;
                includeOrganization = false;
            }};            

            GetChargeStationConnectorsResponse res = sdk.chargeStations.getChargeStationConnectors(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChargeStations

List all Chargestations

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChargeStationsRequest;
import org.openapis.openapi.models.operations.GetChargeStationsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrder1Enum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("vel") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetChargeStationsRequest req = new GetChargeStationsRequest() {{
                active = false;
                createdAtDollarGte = OffsetDateTime.parse("2021-09-16T11:56:06.019Z");
                createdAtDollarLte = OffsetDateTime.parse("2022-07-25T06:44:09.184Z");
                includeEvses = false;
                includeLocation = false;
                includeOrganization = false;
                location = "magnam";
                online = false;
                organization = "debitis";
                paginateEnabled = false;
                paginateLimit = 56713L;
                paginatePage = "delectus";
                public_ = false;
                sortBy = "tempora";
                sortOrder = SortOrder1Enum.DESC;
                updatedAtDollarGte = OffsetDateTime.parse("2022-03-18T00:29:19.137Z");
                updatedAtDollarLte = OffsetDateTime.parse("2021-05-31T20:38:28.793Z");
            }};            

            GetChargeStationsResponse res = sdk.chargeStations.getChargeStations(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchChargeStation

Update a charge station's data

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchChargeStationRequest;
import org.openapis.openapi.models.operations.PatchChargeStationResponse;
import org.openapis.openapi.models.shared.Schema1;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iusto") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PatchChargeStationRequest req = new PatchChargeStationRequest("excepturi",                 new Schema1() {{
                                location = "nisi";
                                manufacturer = "recusandae";
                                model = "temporibus";
                                protocol = "ab";
                                public_ = false;
                            }};);            

            PatchChargeStationResponse res = sdk.chargeStations.patchChargeStation(req);

            if (res.patchChargeStation200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postChargeStations

Create a new charge station

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostChargeStationsResponse;
import org.openapis.openapi.models.shared.Schema1;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quis") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.Schema1 req = new Schema1() {{
                location = "veritatis";
                manufacturer = "deserunt";
                model = "perferendis";
                protocol = "ipsam";
                public_ = false;
            }};            

            PostChargeStationsResponse res = sdk.chargeStations.postChargeStations(req);

            if (res.postChargeStations201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
