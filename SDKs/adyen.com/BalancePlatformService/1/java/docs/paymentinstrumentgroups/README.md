# paymentInstrumentGroups

### Available Operations

* [getPaymentInstrumentGroupsId](#getpaymentinstrumentgroupsid) - Get a payment instrument group
* [getPaymentInstrumentGroupsIdTransactionRules](#getpaymentinstrumentgroupsidtransactionrules) - Get all transaction rules for a payment instrument group
* [postPaymentInstrumentGroups](#postpaymentinstrumentgroups) - Create a payment instrument group

## getPaymentInstrumentGroupsId

Returns the details of a payment instrument group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentInstrumentGroupsIdRequest;
import org.openapis.openapi.models.operations.GetPaymentInstrumentGroupsIdResponse;
import org.openapis.openapi.models.operations.GetPaymentInstrumentGroupsIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentInstrumentGroupsIdRequest req = new GetPaymentInstrumentGroupsIdRequest("delectus");            

            GetPaymentInstrumentGroupsIdResponse res = sdk.paymentInstrumentGroups.getPaymentInstrumentGroupsId(req, new GetPaymentInstrumentGroupsIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.paymentInstrumentGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPaymentInstrumentGroupsIdTransactionRules

Returns a list of all the transaction rules associated with a payment instrument group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPaymentInstrumentGroupsIdTransactionRulesRequest;
import org.openapis.openapi.models.operations.GetPaymentInstrumentGroupsIdTransactionRulesResponse;
import org.openapis.openapi.models.operations.GetPaymentInstrumentGroupsIdTransactionRulesSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPaymentInstrumentGroupsIdTransactionRulesRequest req = new GetPaymentInstrumentGroupsIdTransactionRulesRequest("voluptate");            

            GetPaymentInstrumentGroupsIdTransactionRulesResponse res = sdk.paymentInstrumentGroups.getPaymentInstrumentGroupsIdTransactionRules(req, new GetPaymentInstrumentGroupsIdTransactionRulesSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.transactionRulesResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPaymentInstrumentGroups

Creates a payment instrument group to associate and group payment instrument resources together. You can apply a transaction rule to a payment instrument group.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPaymentInstrumentGroupsResponse;
import org.openapis.openapi.models.operations.PostPaymentInstrumentGroupsSecurity;
import org.openapis.openapi.models.shared.PaymentInstrumentGroupInfo;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PaymentInstrumentGroupInfo req = new PaymentInstrumentGroupInfo("consectetur", "vero") {{
                description = "tenetur";
                properties = new java.util.HashMap<String, String>() {{
                    put("hic", "distinctio");
                    put("quod", "odio");
                }};
                reference = "similique";
            }};            

            PostPaymentInstrumentGroupsResponse res = sdk.paymentInstrumentGroups.postPaymentInstrumentGroups(req, new PostPaymentInstrumentGroupsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.paymentInstrumentGroup != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
