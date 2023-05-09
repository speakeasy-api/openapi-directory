# ledgerAccounts

### Available Operations

* [ledgerAccountsAdd](#ledgeraccountsadd) - Create Ledger Account
* [ledgerAccountsAll](#ledgeraccountsall) - List Ledger Accounts
* [ledgerAccountsDelete](#ledgeraccountsdelete) - Delete Ledger Account
* [ledgerAccountsOne](#ledgeraccountsone) - Get Ledger Account
* [ledgerAccountsUpdate](#ledgeraccountsupdate) - Update Ledger Account

## ledgerAccountsAdd

Create Ledger Account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LedgerAccountsAddRequest;
import org.openapis.openapi.models.operations.LedgerAccountsAddResponse;
import org.openapis.openapi.models.operations.LedgerAccountsAddSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LedgerAccountsAddRequest req = new LedgerAccountsAddRequest(                new java.util.HashMap<String, Object>() {{
                                put("id", "labore");
                                put("labore", "suscipit");
                                put("natus", "nobis");
                            }}, "eum", "vero") {{
                raw = false;
                xApideckServiceId = "aspernatur";
            }};            

            LedgerAccountsAddResponse res = sdk.ledgerAccounts.ledgerAccountsAdd(req, new LedgerAccountsAddSecurity("architecto") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createLedgerAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ledgerAccountsAll

List Ledger Accounts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LedgerAccountsAllRequest;
import org.openapis.openapi.models.operations.LedgerAccountsAllResponse;
import org.openapis.openapi.models.operations.LedgerAccountsAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LedgerAccountsAllRequest req = new LedgerAccountsAllRequest("magnam", "et") {{
                cursor = "excepturi";
                fields = "ullam";
                limit = 590873L;
                passThrough = new java.util.HashMap<String, Object>() {{
                    put("sint", "accusantium");
                    put("mollitia", "reiciendis");
                    put("mollitia", "ad");
                }};
                raw = false;
                xApideckServiceId = "eum";
            }};            

            LedgerAccountsAllResponse res = sdk.ledgerAccounts.ledgerAccountsAll(req, new LedgerAccountsAllSecurity("dolor") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getLedgerAccountsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ledgerAccountsDelete

Delete Ledger Account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LedgerAccountsDeleteRequest;
import org.openapis.openapi.models.operations.LedgerAccountsDeleteResponse;
import org.openapis.openapi.models.operations.LedgerAccountsDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LedgerAccountsDeleteRequest req = new LedgerAccountsDeleteRequest("necessitatibus", "odit", "nemo") {{
                raw = false;
                xApideckServiceId = "quasi";
            }};            

            LedgerAccountsDeleteResponse res = sdk.ledgerAccounts.ledgerAccountsDelete(req, new LedgerAccountsDeleteSecurity("iure") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteLedgerAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ledgerAccountsOne

Get Ledger Account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LedgerAccountsOneRequest;
import org.openapis.openapi.models.operations.LedgerAccountsOneResponse;
import org.openapis.openapi.models.operations.LedgerAccountsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LedgerAccountsOneRequest req = new LedgerAccountsOneRequest("doloribus", "debitis", "eius") {{
                fields = "maxime";
                raw = false;
                xApideckServiceId = "deleniti";
            }};            

            LedgerAccountsOneResponse res = sdk.ledgerAccounts.ledgerAccountsOne(req, new LedgerAccountsOneSecurity("facilis") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getLedgerAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## ledgerAccountsUpdate

Update Ledger Account

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LedgerAccountsUpdateRequest;
import org.openapis.openapi.models.operations.LedgerAccountsUpdateResponse;
import org.openapis.openapi.models.operations.LedgerAccountsUpdateSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            LedgerAccountsUpdateRequest req = new LedgerAccountsUpdateRequest(                new java.util.HashMap<String, Object>() {{
                                put("architecto", "architecto");
                                put("repudiandae", "ullam");
                            }}, "expedita", "nihil", "repellat") {{
                raw = false;
                xApideckServiceId = "quibusdam";
            }};            

            LedgerAccountsUpdateResponse res = sdk.ledgerAccounts.ledgerAccountsUpdate(req, new LedgerAccountsUpdateSecurity("sed") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateLedgerAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
