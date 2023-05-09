# tse

## Overview

Technische Sicherheitseinrichtung - use in context of strom-quittungen to get digitaly signed receipts.

### Available Operations

* [quittungTSE](#quittungtse) - Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).
* [quittungTSEData](#quittungtsedata) - Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).
* [quittungTSEsignature](#quittungtsesignature) - Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).
* [quittungZugferd](#quittungzugferd) - Retrieve Zugferd XML for a given receipt (Strom-Quittung).

## quittungTSE

Allows to retrieve all relevant data assiciated to a TSE service call. E.q. Input parameters, public key and signature.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuittungTSERequest;
import org.openapis.openapi.models.operations.QuittungTSEResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QuittungTSERequest req = new QuittungTSERequest() {{
                account = "esse";
            }};            

            QuittungTSEResponse res = sdk.tse.quittungTSE(req);

            if (res.quittungTSE200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quittungTSEData

Allows to retrieve input string for a signing process.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuittungTSEDataRequest;
import org.openapis.openapi.models.operations.QuittungTSEDataResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QuittungTSEDataRequest req = new QuittungTSEDataRequest() {{
                account = "ipsum";
            }};            

            QuittungTSEDataResponse res = sdk.tse.quittungTSEData(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quittungTSEsignature

Allows to retrieve digital signature for a given receipt.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuittungTSEsignatureRequest;
import org.openapis.openapi.models.operations.QuittungTSEsignatureResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QuittungTSEsignatureRequest req = new QuittungTSEsignatureRequest() {{
                account = "excepturi";
            }};            

            QuittungTSEsignatureResponse res = sdk.tse.quittungTSEsignature(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quittungZugferd

Allows to retrieve XML of the zugferd invoice.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuittungZugferdRequest;
import org.openapis.openapi.models.operations.QuittungZugferdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QuittungZugferdRequest req = new QuittungZugferdRequest() {{
                account = "aspernatur";
            }};            

            QuittungZugferdResponse res = sdk.tse.quittungZugferd(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
