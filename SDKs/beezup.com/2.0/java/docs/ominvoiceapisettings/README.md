# omInvoiceAPISettings

### Available Operations

* [getOrderInvoiceDesignSettings](#getorderinvoicedesignsettings) - Get Order Invoice design settings
* [getOrderInvoiceDesignSettingsPreview](#getorderinvoicedesignsettingspreview) - View a preview an Order Invoice using custom design settings
* [getOrderInvoiceGeneralSettings](#getorderinvoicegeneralsettings) - Get Order Invoice general settings
* [saveOrderInvoiceDesignSettings](#saveorderinvoicedesignsettings) - Save Order Invoice design settings
* [saveOrderInvoiceGeneralSettings](#saveorderinvoicegeneralsettings) - Save Order Invoice general settings

## getOrderInvoiceDesignSettings

Get Order Invoice design settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderInvoiceDesignSettingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderInvoiceDesignSettingsResponse res = sdk.omInvoiceAPISettings.getOrderInvoiceDesignSettings();

            if (res.orderInvoiceDesignSettings != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrderInvoiceDesignSettingsPreview

View a preview an Order Invoice using custom design settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderInvoiceDesignSettingsPreviewRequest;
import org.openapis.openapi.models.operations.GetOrderInvoiceDesignSettingsPreviewResponse;
import org.openapis.openapi.models.shared.OrderInvoiceDesignSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderInvoiceDesignSettingsPreviewRequest req = new GetOrderInvoiceDesignSettingsPreviewRequest("aperiam",                 new OrderInvoiceDesignSettings() {{
                                footerContentHtml = "cupiditate";
                                headerContentHtml = "reiciendis";
                            }};);            

            GetOrderInvoiceDesignSettingsPreviewResponse res = sdk.omInvoiceAPISettings.getOrderInvoiceDesignSettingsPreview(req);

            if (res.getOrderInvoiceDesignPreviewResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getOrderInvoiceGeneralSettings

Get Order Invoice general settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetOrderInvoiceGeneralSettingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetOrderInvoiceGeneralSettingsResponse res = sdk.omInvoiceAPISettings.getOrderInvoiceGeneralSettings();

            if (res.getOrderInvoiceGeneralSettingsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveOrderInvoiceDesignSettings

Save Order Invoice design settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveOrderInvoiceDesignSettingsResponse;
import org.openapis.openapi.models.shared.OrderInvoiceDesignSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.OrderInvoiceDesignSettings req = new OrderInvoiceDesignSettings() {{
                footerContentHtml = "soluta";
                headerContentHtml = "alias";
            }};            

            SaveOrderInvoiceDesignSettingsResponse res = sdk.omInvoiceAPISettings.saveOrderInvoiceDesignSettings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveOrderInvoiceGeneralSettings

Save Order Invoice general settings

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveOrderInvoiceGeneralSettingsResponse;
import org.openapis.openapi.models.shared.OrderInvoiceGeneralSettings;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.OrderInvoiceGeneralSettings req = new OrderInvoiceGeneralSettings("en", "TOTO", 879L, 4.0, 8.0);            

            SaveOrderInvoiceGeneralSettingsResponse res = sdk.omInvoiceAPISettings.saveOrderInvoiceGeneralSettings(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
