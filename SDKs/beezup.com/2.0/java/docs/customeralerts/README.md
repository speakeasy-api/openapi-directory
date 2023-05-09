# customerAlerts

### Available Operations

* [getStoreAlerts](#getstorealerts) - Get store's alerts
* [saveStoreAlerts](#savestorealerts) - Save store alerts

## getStoreAlerts

Get store's alerts

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetStoreAlertsRequest;
import org.openapis.openapi.models.operations.GetStoreAlertsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetStoreAlertsRequest req = new GetStoreAlertsRequest("nulla") {{
                ifNoneMatch = "quas";
            }};            

            GetStoreAlertsResponse res = sdk.customerAlerts.getStoreAlerts(req);

            if (res.storeAlerts != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## saveStoreAlerts

You just have to send the alert you want to update, does not need all alerts. (PARTIAL UPDATE ACCEPTED)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SaveStoreAlertsRequest;
import org.openapis.openapi.models.operations.SaveStoreAlertsResponse;
import org.openapis.openapi.models.shared.SaveStoreAlertRequest;
import org.openapis.openapi.models.shared.StoreAlertProperty;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            SaveStoreAlertsRequest req = new SaveStoreAlertsRequest(                new java.util.HashMap<String, org.openapis.openapi.models.shared.SaveStoreAlertRequest>() {{
                                put("quasi", new SaveStoreAlertRequest(true) {{
                                    enabled = true;
                                    properties = new org.openapis.openapi.models.shared.StoreAlertProperty[]{{
                                        add(new StoreAlertProperty(2, "2") {{
                                            propertyId = 2;
                                            propertyValue = "2";
                                        }}),
                                        add(new StoreAlertProperty(2, "2") {{
                                            propertyId = 2;
                                            propertyValue = "2";
                                        }}),
                                        add(new StoreAlertProperty(2, "2") {{
                                            propertyId = 2;
                                            propertyValue = "2";
                                        }}),
                                        add(new StoreAlertProperty(2, "2") {{
                                            propertyId = 2;
                                            propertyValue = "2";
                                        }}),
                                    }};
                                }});
                                put("error", new SaveStoreAlertRequest(true) {{
                                    enabled = true;
                                    properties = new org.openapis.openapi.models.shared.StoreAlertProperty[]{{
                                        add(new StoreAlertProperty(2, "2") {{
                                            propertyId = 2;
                                            propertyValue = "2";
                                        }}),
                                        add(new StoreAlertProperty(2, "2") {{
                                            propertyId = 2;
                                            propertyValue = "2";
                                        }}),
                                        add(new StoreAlertProperty(2, "2") {{
                                            propertyId = 2;
                                            propertyValue = "2";
                                        }}),
                                    }};
                                }});
                            }}, "pariatur");            

            SaveStoreAlertsResponse res = sdk.customerAlerts.saveStoreAlerts(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
