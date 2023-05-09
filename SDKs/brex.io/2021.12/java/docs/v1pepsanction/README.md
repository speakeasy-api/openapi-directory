# v1Pepsanction

## Overview

Pep Sanction Check methods

### Available Operations

* [pepMonitorList](#pepmonitorlist) - Retrieves a list of monitor entries
* [pepMonitorUnregister](#pepmonitorunregister) - Deactive a pep sanction monitor
* [pepMonitorUpdate](#pepmonitorupdate) - Update details of active Pep Sanction monitor
* [pepOrder](#peporder) - Orders a new Pep Sanction Check Report
* [pepRetrieve](#pepretrieve) - Returns a json or pdf report

## pepMonitorList

Retrieve a list of all active Pep Sanction Report monitors for this account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PepMonitorListResponse;
import org.openapis.openapi.models.operations.PepMonitorListSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PepMonitorListResponse res = sdk.v1Pepsanction.pepMonitorList(new PepMonitorListSecurity("quasi") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.pepMonitorList200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pepMonitorUnregister

Unregister a previously created Pep Sanction Report Monitor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PepMonitorUnregisterRequest;
import org.openapis.openapi.models.operations.PepMonitorUnregisterResponse;
import org.openapis.openapi.models.operations.PepMonitorUnregisterSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PepMonitorUnregisterRequest req = new PepMonitorUnregisterRequest("error");            

            PepMonitorUnregisterResponse res = sdk.v1Pepsanction.pepMonitorUnregister(req, new PepMonitorUnregisterSecurity("temporibus") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.pepMonitorUnregister200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pepMonitorUpdate

Update the webhook URL of an active Pep Sanction Report Monitor

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PepMonitorUpdateRequest;
import org.openapis.openapi.models.operations.PepMonitorUpdateRequestBody;
import org.openapis.openapi.models.operations.PepMonitorUpdateResponse;
import org.openapis.openapi.models.operations.PepMonitorUpdateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PepMonitorUpdateRequest req = new PepMonitorUpdateRequest("laborum") {{
                requestBody = new PepMonitorUpdateRequestBody() {{
                    webhook = "null";
                }};;
            }};            

            PepMonitorUpdateResponse res = sdk.v1Pepsanction.pepMonitorUpdate(req, new PepMonitorUpdateSecurity("quasi") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.pepMonitorUpdate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pepOrder

Order a new Pep Sanction Check by providing either a business or person name with some additional optional parameters.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PepOrderRequest;
import org.openapis.openapi.models.operations.PepOrderRequestBody;
import org.openapis.openapi.models.operations.PepOrderResponse;
import org.openapis.openapi.models.operations.PepOrderSecurity;
import org.openapis.openapi.models.operations.PepOrderTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PepOrderRequest req = new PepOrderRequest("reiciendis", PepOrderTypeEnum.P) {{
                requestBody = new PepOrderRequestBody() {{
                    aliases = "null";
                    country = "null";
                    dob = "null";
                    familyName = "null";
                    filters = "null";
                    givenName = "null";
                    lei = "null";
                    locale = "null";
                    medialists = "NMEDIA";
                    middleName = "null";
                    monitoring = false;
                    peplists = "GOV,PEPD,SOE";
                    region = "null";
                    smartMatch = false;
                    watchlists = "SANCTIONS,FINANCE,TERRORISM,CRIME,SMAGOV,OFAC,MEDICAL";
                    webhook = "null";
                }};;
            }};            

            PepOrderResponse res = sdk.v1Pepsanction.pepOrder(req, new PepOrderSecurity("vero") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.pepOrder200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## pepRetrieve

Retrieve a completed Pep Sanction check structured or in pdf depending on given accept header

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PepRetrieveAcceptEnum;
import org.openapis.openapi.models.operations.PepRetrieveRequest;
import org.openapis.openapi.models.operations.PepRetrieveResponse;
import org.openapis.openapi.models.operations.PepRetrieveSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PepRetrieveRequest req = new PepRetrieveRequest("nihil") {{
                accept = PepRetrieveAcceptEnum.APPLICATION_PDF;
            }};            

            PepRetrieveResponse res = sdk.v1Pepsanction.pepRetrieve(req, new PepRetrieveSecurity("voluptatibus") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.pepRetrieve200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
