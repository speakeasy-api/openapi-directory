# modifiers

### Available Operations

* [modifiersAdd](#modifiersadd) - Create Modifier
* [modifiersAll](#modifiersall) - List Modifiers
* [modifiersDelete](#modifiersdelete) - Delete Modifier
* [modifiersOne](#modifiersone) - Get Modifier
* [modifiersUpdate](#modifiersupdate) - Update Modifier

## modifiersAdd

Create Modifier

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifiersAddRequest;
import org.openapis.openapi.models.operations.ModifiersAddResponse;
import org.openapis.openapi.models.operations.ModifiersAddSecurity;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.ModifierInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ModifiersAddRequest req = new ModifiersAddRequest(                new ModifierInput("123", "Modifier") {{
                                alternateName = "Modifier New";
                                available = true;
                                currency = CurrencyEnum.USD;
                                idempotencyKey = "random_string";
                                priceAmount = 10;
                            }};, "fugit", "dolorum") {{
                raw = false;
                xApideckServiceId = "excepturi";
            }};            

            ModifiersAddResponse res = sdk.modifiers.modifiersAdd(req, new ModifiersAddSecurity("tempora") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createModifierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifiersAll

List Modifiers

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifiersAllRequest;
import org.openapis.openapi.models.operations.ModifiersAllResponse;
import org.openapis.openapi.models.operations.ModifiersAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ModifiersAllRequest req = new ModifiersAllRequest("facilis", "tempore") {{
                cursor = "labore";
                fields = "delectus";
                limit = 433288L;
                raw = false;
                xApideckServiceId = "non";
            }};            

            ModifiersAllResponse res = sdk.modifiers.modifiersAll(req, new ModifiersAllSecurity("eligendi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getModifiersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifiersDelete

Delete Modifier

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifiersDeleteRequest;
import org.openapis.openapi.models.operations.ModifiersDeleteResponse;
import org.openapis.openapi.models.operations.ModifiersDeleteSecurity;
import org.openapis.openapi.models.shared.ModifierGroupFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ModifiersDeleteRequest req = new ModifiersDeleteRequest("sint", "aliquid", "provident") {{
                filter = new ModifierGroupFilter() {{
                    modifierGroupId = "1234";
                }};;
                raw = false;
                xApideckServiceId = "necessitatibus";
            }};            

            ModifiersDeleteResponse res = sdk.modifiers.modifiersDelete(req, new ModifiersDeleteSecurity("sint") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteModifierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifiersOne

Get Modifier

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifiersOneRequest;
import org.openapis.openapi.models.operations.ModifiersOneResponse;
import org.openapis.openapi.models.operations.ModifiersOneSecurity;
import org.openapis.openapi.models.shared.ModifierGroupFilter;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ModifiersOneRequest req = new ModifiersOneRequest("officia", "dolor", "debitis") {{
                fields = "a";
                filter = new ModifierGroupFilter() {{
                    modifierGroupId = "1234";
                }};;
                raw = false;
                xApideckServiceId = "dolorum";
            }};            

            ModifiersOneResponse res = sdk.modifiers.modifiersOne(req, new ModifiersOneSecurity("in") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getModifierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifiersUpdate

Update Modifier

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifiersUpdateRequest;
import org.openapis.openapi.models.operations.ModifiersUpdateResponse;
import org.openapis.openapi.models.operations.ModifiersUpdateSecurity;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.ModifierInput;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ModifiersUpdateRequest req = new ModifiersUpdateRequest(                new ModifierInput("123", "Modifier") {{
                                alternateName = "Modifier New";
                                available = true;
                                currency = CurrencyEnum.USD;
                                idempotencyKey = "random_string";
                                priceAmount = 10;
                            }};, "in", "illum", "maiores") {{
                raw = false;
                xApideckServiceId = "rerum";
            }};            

            ModifiersUpdateResponse res = sdk.modifiers.modifiersUpdate(req, new ModifiersUpdateSecurity("dicta") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateModifierResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
