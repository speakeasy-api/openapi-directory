# provisioning

### Available Operations

* [automaticProvisioningCreateAccountForm](#automaticprovisioningcreateaccountform) - Creates a new Billbee user account with the data passed
* [automaticProvisioningCreateAccountJson](#automaticprovisioningcreateaccountjson) - Creates a new Billbee user account with the data passed
* [automaticProvisioningCreateAccountRaw](#automaticprovisioningcreateaccountraw) - Creates a new Billbee user account with the data passed
* [automaticProvisioningTermsInfo](#automaticprovisioningtermsinfo) - Returns infos about Billbee terms and conditions

## automaticProvisioningCreateAccountForm

Creates a new Billbee user account with the data passed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomaticProvisioningCreateAccountFormResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerDefaultVatModeEnum;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer req = new RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer("sed") {{
                acceptTerms = false;
                address = new RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress() {{
                    address1 = "possimus";
                    address2 = "repellat";
                    city = "Bountiful";
                    company = "Stroman LLC";
                    country = "France";
                    name = "Elmer Champlin";
                    vatId = "dolorum";
                    zip = "velit";
                }};;
                affiliateCouponCode = "earum";
                defaultCurrrency = "praesentium";
                defaultVatIndex = 621140;
                defaultVatMode = RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerDefaultVatModeEnum.ONE;
                password = "quasi";
                vat1Rate = 6490.32;
                vat2Rate = 8843.61;
            }};            

            AutomaticProvisioningCreateAccountFormResponse res = sdk.provisioning.automaticProvisioningCreateAccountForm(req);

            if (res.automaticProvisioningCreateAccountForm200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automaticProvisioningCreateAccountJson

Creates a new Billbee user account with the data passed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomaticProvisioningCreateAccountJsonResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerDefaultVatModeEnum;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer req = new RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer("harum") {{
                acceptTerms = false;
                address = new RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress() {{
                    address1 = "cumque";
                    address2 = "doloremque";
                    city = "Loweton";
                    company = "Hyatt - Marks";
                    country = "Central African Republic";
                    name = "Marcella Ernser";
                    vatId = "accusamus";
                    zip = "optio";
                }};;
                affiliateCouponCode = "delectus";
                defaultCurrrency = "minus";
                defaultVatIndex = 774748;
                defaultVatMode = RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerDefaultVatModeEnum.THREE;
                password = "asperiores";
                vat1Rate = 5323.26;
                vat2Rate = 6147.7;
            }};            

            AutomaticProvisioningCreateAccountJsonResponse res = sdk.provisioning.automaticProvisioningCreateAccountJson(req);

            if (res.automaticProvisioningCreateAccountJSON200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automaticProvisioningCreateAccountRaw

Creates a new Billbee user account with the data passed

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomaticProvisioningCreateAccountRawResponse;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainer;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerDefaultVatModeEnum;
import org.openapis.openapi.models.shared.RechnungsdruckWebAppControllersApiAutomaticProvisioningControllerCreateAccountContainerUserAddress;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.. req = "corporis".getBytes()            

            AutomaticProvisioningCreateAccountRawResponse res = sdk.provisioning.automaticProvisioningCreateAccountRaw(req);

            if (res.automaticProvisioningCreateAccountRaw200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## automaticProvisioningTermsInfo

Returns infos about Billbee terms and conditions

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AutomaticProvisioningTermsInfoResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AutomaticProvisioningTermsInfoResponse res = sdk.provisioning.automaticProvisioningTermsInfo();

            if (res.automaticProvisioningTermsInfo200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
