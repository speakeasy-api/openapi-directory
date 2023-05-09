# billing

### Available Operations

* [billingAggregatedInformationGetAll](#billingaggregatedinformationgetall) - Aggregated Billing Information for the requesting user and the organizations in which the user is an admin.
* [billingAggregatedInformationGetByApp](#billingaggregatedinformationgetbyapp) - Aggregated Billing Information for owner of a given app.
* [billingAggregatedInformationGetForOrg](#billingaggregatedinformationgetfororg) - Aggregated Billing Information for a given Organization.

## billingAggregatedInformationGetAll

Aggregated Billing Information for the requesting user and the organizations in which the user is an admin.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BillingAggregatedInformationGetAllPeriodEnum;
import org.openapis.openapi.models.operations.BillingAggregatedInformationGetAllRequest;
import org.openapis.openapi.models.operations.BillingAggregatedInformationGetAllResponse;
import org.openapis.openapi.models.operations.BillingAggregatedInformationGetAllSecurity;
import org.openapis.openapi.models.operations.BillingAggregatedInformationGetAllServiceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillingAggregatedInformationGetAllRequest req = new BillingAggregatedInformationGetAllRequest() {{
                period = BillingAggregatedInformationGetAllPeriodEnum.PREVIOUS;
                service = BillingAggregatedInformationGetAllServiceEnum.BUILD;
                showOriginalPlans = false;
            }};            

            BillingAggregatedInformationGetAllResponse res = sdk.billing.billingAggregatedInformationGetAll(req, new BillingAggregatedInformationGetAllSecurity("consectetur") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.billingAggregatedInformationGetAll200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## billingAggregatedInformationGetByApp

Aggregated Billing Information for owner of a given app.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BillingAggregatedInformationGetByAppPeriodEnum;
import org.openapis.openapi.models.operations.BillingAggregatedInformationGetByAppRequest;
import org.openapis.openapi.models.operations.BillingAggregatedInformationGetByAppResponse;
import org.openapis.openapi.models.operations.BillingAggregatedInformationGetByAppSecurity;
import org.openapis.openapi.models.operations.BillingAggregatedInformationGetByAppServiceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillingAggregatedInformationGetByAppRequest req = new BillingAggregatedInformationGetByAppRequest("in", "exercitationem") {{
                period = BillingAggregatedInformationGetByAppPeriodEnum.NEXT;
                service = BillingAggregatedInformationGetByAppServiceEnum.BUILD;
                showOriginalPlans = false;
            }};            

            BillingAggregatedInformationGetByAppResponse res = sdk.billing.billingAggregatedInformationGetByApp(req, new BillingAggregatedInformationGetByAppSecurity("numquam") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.billingAggregatedInformationGetByApp200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## billingAggregatedInformationGetForOrg

Aggregated Billing Information for a given Organization.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BillingAggregatedInformationGetForOrgPeriodEnum;
import org.openapis.openapi.models.operations.BillingAggregatedInformationGetForOrgRequest;
import org.openapis.openapi.models.operations.BillingAggregatedInformationGetForOrgResponse;
import org.openapis.openapi.models.operations.BillingAggregatedInformationGetForOrgSecurity;
import org.openapis.openapi.models.operations.BillingAggregatedInformationGetForOrgServiceEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            BillingAggregatedInformationGetForOrgRequest req = new BillingAggregatedInformationGetForOrgRequest("doloribus") {{
                period = BillingAggregatedInformationGetForOrgPeriodEnum.CURRENT;
                service = BillingAggregatedInformationGetForOrgServiceEnum.BUILD;
                showOriginalPlans = false;
            }};            

            BillingAggregatedInformationGetForOrgResponse res = sdk.billing.billingAggregatedInformationGetForOrg(req, new BillingAggregatedInformationGetForOrgSecurity("quidem") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.billingAggregatedInformationGetForOrg200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
