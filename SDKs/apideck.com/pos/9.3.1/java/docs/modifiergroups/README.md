# modifierGroups

### Available Operations

* [modifierGroupsAdd](#modifiergroupsadd) - Create Modifier Group
* [modifierGroupsAll](#modifiergroupsall) - List Modifier Groups
* [modifierGroupsDelete](#modifiergroupsdelete) - Delete Modifier Group
* [modifierGroupsOne](#modifiergroupsone) - Get Modifier Group
* [modifierGroupsUpdate](#modifiergroupsupdate) - Update Modifier Group

## modifierGroupsAdd

Create Modifier Group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifierGroupsAddRequest;
import org.openapis.openapi.models.operations.ModifierGroupsAddResponse;
import org.openapis.openapi.models.operations.ModifierGroupsAddSecurity;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum;
import org.openapis.openapi.models.shared.ModifierGroupInput;
import org.openapis.openapi.models.shared.ModifierGroupModifiers;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ModifierGroupsAddRequest req = new ModifierGroupsAddRequest(                new ModifierGroupInput() {{
                                alternateName = "Modifier New";
                                deleted = true;
                                maximumAllowed = 5L;
                                minimumRequired = 1L;
                                modifiers = new org.openapis.openapi.models.shared.ModifierGroupModifiers[]{{
                                    add(new ModifierGroupModifiers() {{
                                        alternateName = "Modifier New";
                                        available = true;
                                        currency = CurrencyEnum.USD;
                                        id = "12345";
                                        name = "Modifier";
                                        priceAmount = 10;
                                    }}),
                                    add(new ModifierGroupModifiers() {{
                                        alternateName = "Modifier New";
                                        available = true;
                                        currency = CurrencyEnum.USD;
                                        id = "12345";
                                        name = "Modifier";
                                        priceAmount = 10;
                                    }}),
                                }};
                                name = "Modifier";
                                presentAtAllLocations = false;
                                rowVersion = "1-12345";
                                selectionType = ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum.SINGLE;
                            }};, "praesentium", "rem") {{
                raw = false;
                xApideckServiceId = "voluptates";
            }};            

            ModifierGroupsAddResponse res = sdk.modifierGroups.modifierGroupsAdd(req, new ModifierGroupsAddSecurity("quasi") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createModifierGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifierGroupsAll

List Modifier Groups

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifierGroupsAllRequest;
import org.openapis.openapi.models.operations.ModifierGroupsAllResponse;
import org.openapis.openapi.models.operations.ModifierGroupsAllSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ModifierGroupsAllRequest req = new ModifierGroupsAllRequest("repudiandae", "sint") {{
                cursor = "veritatis";
                fields = "itaque";
                limit = 277718L;
                raw = false;
                xApideckServiceId = "enim";
            }};            

            ModifierGroupsAllResponse res = sdk.modifierGroups.modifierGroupsAll(req, new ModifierGroupsAllSecurity("consequatur") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getModifierGroupsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifierGroupsDelete

Delete Modifier Group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifierGroupsDeleteRequest;
import org.openapis.openapi.models.operations.ModifierGroupsDeleteResponse;
import org.openapis.openapi.models.operations.ModifierGroupsDeleteSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ModifierGroupsDeleteRequest req = new ModifierGroupsDeleteRequest("est", "quibusdam", "explicabo") {{
                raw = false;
                xApideckServiceId = "deserunt";
            }};            

            ModifierGroupsDeleteResponse res = sdk.modifierGroups.modifierGroupsDelete(req, new ModifierGroupsDeleteSecurity("distinctio") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.deleteModifierGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifierGroupsOne

Get Modifier Group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifierGroupsOneRequest;
import org.openapis.openapi.models.operations.ModifierGroupsOneResponse;
import org.openapis.openapi.models.operations.ModifierGroupsOneSecurity;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ModifierGroupsOneRequest req = new ModifierGroupsOneRequest("quibusdam", "labore", "modi") {{
                fields = "qui";
                raw = false;
                xApideckServiceId = "aliquid";
            }};            

            ModifierGroupsOneResponse res = sdk.modifierGroups.modifierGroupsOne(req, new ModifierGroupsOneSecurity("cupiditate") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getModifierGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## modifierGroupsUpdate

Update Modifier Group

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ModifierGroupsUpdateRequest;
import org.openapis.openapi.models.operations.ModifierGroupsUpdateResponse;
import org.openapis.openapi.models.operations.ModifierGroupsUpdateSecurity;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum;
import org.openapis.openapi.models.shared.ModifierGroupInput;
import org.openapis.openapi.models.shared.ModifierGroupModifiers;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ModifierGroupsUpdateRequest req = new ModifierGroupsUpdateRequest(                new ModifierGroupInput() {{
                                alternateName = "Modifier New";
                                deleted = true;
                                maximumAllowed = 5L;
                                minimumRequired = 1L;
                                modifiers = new org.openapis.openapi.models.shared.ModifierGroupModifiers[]{{
                                    add(new ModifierGroupModifiers() {{
                                        alternateName = "Modifier New";
                                        available = true;
                                        currency = CurrencyEnum.USD;
                                        id = "12345";
                                        name = "Modifier";
                                        priceAmount = 10;
                                    }}),
                                    add(new ModifierGroupModifiers() {{
                                        alternateName = "Modifier New";
                                        available = true;
                                        currency = CurrencyEnum.USD;
                                        id = "12345";
                                        name = "Modifier";
                                        priceAmount = 10;
                                    }}),
                                    add(new ModifierGroupModifiers() {{
                                        alternateName = "Modifier New";
                                        available = true;
                                        currency = CurrencyEnum.USD;
                                        id = "12345";
                                        name = "Modifier";
                                        priceAmount = 10;
                                    }}),
                                }};
                                name = "Modifier";
                                presentAtAllLocations = false;
                                rowVersion = "1-12345";
                                selectionType = ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum.SINGLE;
                            }};, "perferendis", "magni", "assumenda") {{
                raw = false;
                xApideckServiceId = "ipsam";
            }};            

            ModifierGroupsUpdateResponse res = sdk.modifierGroups.modifierGroupsUpdate(req, new ModifierGroupsUpdateSecurity("alias") {{
                apiKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updateModifierGroupResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
