# general

### Available Operations

* [postAssignTerminals](#postassignterminals) - Assign terminals
* [postFindTerminal](#postfindterminal) - Get the account or store of a terminal
* [postGetStoresUnderAccount](#postgetstoresunderaccount) - Get the stores of an account
* [postGetTerminalDetails](#postgetterminaldetails) - Get the details of a terminal
* [postGetTerminalsUnderAccount](#postgetterminalsunderaccount) - Get the list of terminals

## postAssignTerminals

Assigns one or more payment terminals to a merchant account or a store. You can also use this endpoint to reassign terminals between merchant accounts or stores, and to unassign a terminal and return it to company inventory.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAssignTerminalsResponse;
import org.openapis.openapi.models.operations.PostAssignTerminalsSecurity;
import org.openapis.openapi.models.shared.AssignTerminalsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AssignTerminalsRequest req = new AssignTerminalsRequest("vel",                 new String[]{{
                                add("deserunt"),
                                add("suscipit"),
                                add("iure"),
                            }}) {{
                merchantAccount = "magnam";
                merchantInventory = false;
                store = "debitis";
            }};            

            PostAssignTerminalsResponse res = sdk.general.postAssignTerminals(req, new PostAssignTerminalsSecurity("ipsa") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.assignTerminalsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postFindTerminal

Returns the company account, merchant account, or store that a payment terminal is assigned to.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostFindTerminalResponse;
import org.openapis.openapi.models.operations.PostFindTerminalSecurity;
import org.openapis.openapi.models.shared.FindTerminalRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.FindTerminalRequest req = new FindTerminalRequest("delectus");            

            PostFindTerminalResponse res = sdk.general.postFindTerminal(req, new PostFindTerminalSecurity("tempora") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.findTerminalResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetStoresUnderAccount

Returns a list of stores associated with a company account or a merchant account, including the status of each store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetStoresUnderAccountResponse;
import org.openapis.openapi.models.operations.PostGetStoresUnderAccountSecurity;
import org.openapis.openapi.models.shared.GetStoresUnderAccountRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.GetStoresUnderAccountRequest req = new GetStoresUnderAccountRequest("suscipit") {{
                merchantAccount = "molestiae";
            }};            

            PostGetStoresUnderAccountResponse res = sdk.general.postGetStoresUnderAccount(req, new PostGetStoresUnderAccountSecurity("minus") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.getStoresUnderAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetTerminalDetails

Returns the details of a payment terminal, including where the terminal is assigned to. The response returns the same details that are provided in the terminal list in your Customer Area and in the Terminal Fleet report.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetTerminalDetailsResponse;
import org.openapis.openapi.models.operations.PostGetTerminalDetailsSecurity;
import org.openapis.openapi.models.shared.GetTerminalDetailsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.GetTerminalDetailsRequest req = new GetTerminalDetailsRequest("placeat");            

            PostGetTerminalDetailsResponse res = sdk.general.postGetTerminalDetails(req, new PostGetTerminalDetailsSecurity("voluptatum") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.getTerminalDetailsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postGetTerminalsUnderAccount

Returns a list of payment terminals associated with a company account, merchant account, or store. The response shows whether the terminals are in the inventory, or in-store (ready for boarding or already boarded).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostGetTerminalsUnderAccountResponse;
import org.openapis.openapi.models.operations.PostGetTerminalsUnderAccountSecurity;
import org.openapis.openapi.models.shared.GetTerminalsUnderAccountRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.GetTerminalsUnderAccountRequest req = new GetTerminalsUnderAccountRequest("iusto") {{
                merchantAccount = "excepturi";
                store = "nisi";
            }};            

            PostGetTerminalsUnderAccountResponse res = sdk.general.postGetTerminalsUnderAccount(req, new PostGetTerminalsUnderAccountSecurity("recusandae") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.getTerminalsUnderAccountResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
