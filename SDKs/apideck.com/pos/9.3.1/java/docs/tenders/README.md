# tenders

### Available Operations

* [tendersAdd](#tendersadd) - Create Tender
* [tendersAll](#tendersall) - List Tenders
* [tendersDelete](#tendersdelete) - Delete Tender
* [tendersOne](#tendersone) - Get Tender
* [tendersUpdate](#tendersupdate) - Update Tender

## tendersAdd

Create Tender

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TendersAddRequest;
import org.openapis.openapi.models.operations.TendersAddResponse;
import org.openapis.openapi.models.operations.TendersAddSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TenderInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TendersAddRequest req = new TendersAddRequest(                new TenderInput() {{
                                active = true;
                                allowsTipping = false;
                                editable = true;
                                hidden = true;
                                key = "com.clover.tender.cash";
                                label = "Cash";
                                opensCashDrawer = false;
                            }};, "quis", "ipsum") {{
                raw = false;
                xApideckServiceId = "delectus";
            }};            

            TendersAddResponse res = sdk.tenders.tendersAdd(req, new TendersAddSecurity("voluptate") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createTenderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tendersAll

List Tenders

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TendersAllRequest;
import org.openapis.openapi.models.operations.TendersAllResponse;
import org.openapis.openapi.models.operations.TendersAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TendersAllRequest req = new TendersAllRequest("consectetur", "vero") {{
                cursor = "tenetur";
                fields = "dignissimos";
                limit = 941378L;
                raw = false;
                xApideckServiceId = "distinctio";
            }};            

            TendersAllResponse res = sdk.tenders.tendersAll(req, new TendersAllSecurity("quod") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getTendersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tendersDelete

Delete Tender

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TendersDeleteRequest;
import org.openapis.openapi.models.operations.TendersDeleteResponse;
import org.openapis.openapi.models.operations.TendersDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TendersDeleteRequest req = new TendersDeleteRequest("odio", "similique", "facilis") {{
                raw = false;
                xApideckServiceId = "vero";
            }};            

            TendersDeleteResponse res = sdk.tenders.tendersDelete(req, new TendersDeleteSecurity("ducimus") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteTenderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tendersOne

Get Tender

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TendersOneRequest;
import org.openapis.openapi.models.operations.TendersOneResponse;
import org.openapis.openapi.models.operations.TendersOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TendersOneRequest req = new TendersOneRequest("dolore", "quibusdam", "illum") {{
                fields = "sequi";
                raw = false;
                xApideckServiceId = "natus";
            }};            

            TendersOneResponse res = sdk.tenders.tendersOne(req, new TendersOneSecurity("impedit") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getTenderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## tendersUpdate

Update Tender

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TendersUpdateRequest;
import org.openapis.openapi.models.operations.TendersUpdateResponse;
import org.openapis.openapi.models.operations.TendersUpdateSecurity;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TenderInput;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            TendersUpdateRequest req = new TendersUpdateRequest(                new TenderInput() {{
                                active = true;
                                allowsTipping = false;
                                editable = true;
                                hidden = true;
                                key = "com.clover.tender.cash";
                                label = "Cash";
                                opensCashDrawer = false;
                            }};, "aut", "voluptatibus", "exercitationem") {{
                raw = false;
                xApideckServiceId = "nulla";
            }};            

            TendersUpdateResponse res = sdk.tenders.tendersUpdate(req, new TendersUpdateSecurity("fugit") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateTenderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
