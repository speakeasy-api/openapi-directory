# stromQuittung

## Overview

Self-Service to create a full receipt (Quittung) for energy delivery in case of submetering. Please refer to [Strom-Quittung](http://strom-quittung.de) for a sample usage.


### Available Operations

* [quittungComit](#quittungcomit) - Finishs a collection of data and finalizes receipt. Use this method after collecting all data via quittung/prepare
* [quittungCreate](#quittungcreate) - Create a receipt for an energy delivery (only valid in Germany).
* [quittungPrepare](#quittungprepare) - Allows to collect data with several requests (or a single) for a receipt.
* [quittungTSE](#quittungtse) - Retrieve TSE (Technische Sicherheitseinrichtung) Data for a given receipt (Strom-Quittung).
* [quittungTSEData](#quittungtsedata) - Retrieve TSE (Technische Sicherheitseinrichtung) raw data  only for a given receipt (Strom-Quittung).
* [quittungTSEsignature](#quittungtsesignature) - Retrieve TSE (Technische Sicherheitseinrichtung) Signature only for a given receipt (Strom-Quittung).
* [quittungZugferd](#quittungzugferd) - Retrieve Zugferd XML for a given receipt (Strom-Quittung).

## quittungComit

Uses collected fields or provided fields to create a final receipt (Strom-Quittung).


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuittungComitRequestBody;
import org.openapis.openapi.models.operations.QuittungComitResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QuittungComitRequestBody req = new QuittungComitRequestBody() {{
                account = "excepturi";
            }};            

            QuittungComitResponse res = sdk.stromQuittung.quittungComit(req);

            if (res.quittungComit200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quittungCreate

Creates a full featured receipt (Quittung) for an energy delivery as it appears on a charging session or similar events. Allows to embed receipt generation directly into external services.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuittungCreateRequestBody;
import org.openapis.openapi.models.operations.QuittungCreateResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QuittungCreateRequestBody req = new QuittungCreateRequestBody() {{
                email = "Tianna33@yahoo.com";
            }};            

            QuittungCreateResponse res = sdk.stromQuittung.quittungCreate(req);

            if (res.quittungCreate200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## quittungPrepare

During the first call an account parameter will be returned within the result object. Any other parameter will be set inside the preperation. If account is put into body/request in following requests, the existing collection will be extended/updated with the provided body parameters/values.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.QuittungPrepareRequestBody;
import org.openapis.openapi.models.operations.QuittungPrepareResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            QuittungPrepareRequestBody req = new QuittungPrepareRequestBody() {{
                account = "veritatis";
            }};            

            QuittungPrepareResponse res = sdk.stromQuittung.quittungPrepare(req);

            if (res.quittungPrepare200ApplicationJSONString != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

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
                account = "deserunt";
            }};            

            QuittungTSEResponse res = sdk.stromQuittung.quittungTSE(req);

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
                account = "perferendis";
            }};            

            QuittungTSEDataResponse res = sdk.stromQuittung.quittungTSEData(req);

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
                account = "ipsam";
            }};            

            QuittungTSEsignatureResponse res = sdk.stromQuittung.quittungTSEsignature(req);

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
                account = "repellendus";
            }};            

            QuittungZugferdResponse res = sdk.stromQuittung.quittungZugferd(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
