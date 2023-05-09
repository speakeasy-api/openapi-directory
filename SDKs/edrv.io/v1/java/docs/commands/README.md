# commands

### Available Operations

* [cancelreservation](#cancelreservation) - Use to request a delete an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [getCommands](#getcommands) - Get Commands data
* [getVariables](#getvariables) - Get a charge station's config variables
* [patchChargeStationVariable](#patchchargestationvariable) - Update config variables for a chargestation
* [remotestart](#remotestart) - Use to request a remote start command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [remotestop](#remotestop) - Use to request a remote stop command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [reserve](#reserve) - Use to request a reserve command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [reset](#reset) - Use to request a reset command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.
* [unlockconnector](#unlockconnector) - Use to request an unlock command for a connector. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

## cancelreservation

Use to request a delete an existing reservation. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CancelreservationRequestBody;
import org.openapis.openapi.models.operations.CancelreservationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("repellendus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            CancelreservationRequestBody req = new CancelreservationRequestBody() {{
                reservation = "sapiente";
            }};            

            CancelreservationResponse res = sdk.commands.cancelreservation(req);

            if (res.cancelreservation201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCommands

Get Commands data

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCommandsRequest;
import org.openapis.openapi.models.operations.GetCommandsResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.SortOrder1Enum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quo") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetCommandsRequest req = new GetCommandsRequest() {{
                createdAtDollarGte = OffsetDateTime.parse("2022-02-17T10:41:36.857Z");
                createdAtDollarLte = OffsetDateTime.parse("2020-01-25T09:54:35.794Z");
                includeChargestation = false;
                includeDriver = false;
                includeOrganization = false;
                includeTransaction = false;
                paginateEnabled = false;
                paginateLimit = 473608L;
                paginatePage = "quod";
                sortBy = "quod";
                sortOrder = SortOrder1Enum.DESC;
                updatedAtDollarGte = OffsetDateTime.parse("2021-06-10T05:07:43.614Z");
                updatedAtDollarLte = OffsetDateTime.parse("2022-10-06T15:49:54.663Z");
            }};            

            GetCommandsResponse res = sdk.commands.getCommands(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getVariables

Get a charge station's config variables

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetVariablesRequest;
import org.openapis.openapi.models.operations.GetVariablesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("nam") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            GetVariablesRequest req = new GetVariablesRequest("officia");            

            GetVariablesResponse res = sdk.commands.getVariables(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchChargeStationVariable

Update config variables for a chargestation

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchChargeStationVariableRequest;
import org.openapis.openapi.models.operations.PatchChargeStationVariableRequestBody;
import org.openapis.openapi.models.operations.PatchChargeStationVariableRequestBodyVariableEnum;
import org.openapis.openapi.models.operations.PatchChargeStationVariableResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("occaecati") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            PatchChargeStationVariableRequest req = new PatchChargeStationVariableRequest(                new PatchChargeStationVariableRequestBody() {{
                                value = "fugit";
                                variable = PatchChargeStationVariableRequestBodyVariableEnum.WEB_SOCKET_PING_INTERVAL;
                            }};, "hic");            

            PatchChargeStationVariableResponse res = sdk.commands.patchChargeStationVariable(req);

            if (res.patchChargeStationVariable201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## remotestart

Use to request a remote start command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemotestartRequestBody;
import org.openapis.openapi.models.operations.RemotestartResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("optio") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RemotestartRequestBody req = new RemotestartRequestBody() {{
                chargestation = "totam";
                connector = "beatae";
                driver = "commodi";
                token = "molestiae";
            }};            

            RemotestartResponse res = sdk.commands.remotestart(req);

            if (res.remotestart201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## remotestop

Use to request a remote stop command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RemotestopRequestBody;
import org.openapis.openapi.models.operations.RemotestopResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("modi") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            RemotestopRequestBody req = new RemotestopRequestBody() {{
                chargestation = "qui";
                driver = "impedit";
                transaction = "cum";
            }};            

            RemotestopResponse res = sdk.commands.remotestop(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reserve

Use to request a reserve command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ReserveRequestBody;
import org.openapis.openapi.models.operations.ReserveResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("esse") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ReserveRequestBody req = new ReserveRequestBody() {{
                chargestation = "ipsum";
                connector = "excepturi";
                driver = "aspernatur";
                endDate = "perferendis";
                token = "ad";
            }};            

            ReserveResponse res = sdk.commands.reserve(req);

            if (res.reserve201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## reset

Use to request a reset command. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ResetRequestBody;
import org.openapis.openapi.models.operations.ResetResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("natus") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            ResetRequestBody req = new ResetRequestBody() {{
                chargestation = "sed";
                type = "iste";
            }};            

            ResetResponse res = sdk.commands.reset(req);

            if (res.reset201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unlockconnector

Use to request an unlock command for a connector. The request will wait for the charge station to process the command. It will timeout after 60 seconds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnlockconnectorRequestBody;
import org.openapis.openapi.models.operations.UnlockconnectorResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("dolor") {{
                    oauth2 = "Bearer YOUR_ACCESS_TOKEN_HERE";
                }})
                .build();

            UnlockconnectorRequestBody req = new UnlockconnectorRequestBody() {{
                chargestation = "natus";
                connector = "laboriosam";
            }};            

            UnlockconnectorResponse res = sdk.commands.unlockconnector(req);

            if (res.unlockconnector201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
