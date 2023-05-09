# general

### Available Operations

* [postChangeStatus](#postchangestatus) - Changes the status of the payment method.
* [postCheckBalance](#postcheckbalance) - Checks the balance.
* [postIssue](#postissue) - Issues a new card.
* [postLoad](#postload) - Loads the payment method.
* [postMergeBalance](#postmergebalance) - Merge the balance of two cards.
* [postVoidTransaction](#postvoidtransaction) - Voids a transaction.

## postChangeStatus

Changes the status of the provided payment method to the specified status.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostChangeStatusResponse;
import org.openapis.openapi.models.operations.PostChangeStatusSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.StoredValueStatusChangeRequest;
import org.openapis.openapi.models.shared.StoredValueStatusChangeRequestShopperInteractionEnum;
import org.openapis.openapi.models.shared.StoredValueStatusChangeRequestStatusEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.StoredValueStatusChangeRequest req = new StoredValueStatusChangeRequest("delectus",                 new java.util.HashMap<String, String>() {{
                                put("suscipit", "molestiae");
                                put("minus", "placeat");
                            }}, "voluptatum", StoredValueStatusChangeRequestStatusEnum.ACTIVE) {{
                amount = new Amount("excepturi", 392785L);;
                recurringDetailReference = "recusandae";
                shopperInteraction = StoredValueStatusChangeRequestShopperInteractionEnum.POS;
                shopperReference = "ab";
                store = "quis";
            }};            

            PostChangeStatusResponse res = sdk.general.postChangeStatus(req, new PostChangeStatusSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.storedValueStatusChangeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postCheckBalance

Checks the balance of the provided payment method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostCheckBalanceResponse;
import org.openapis.openapi.models.operations.PostCheckBalanceSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.StoredValueBalanceCheckRequest;
import org.openapis.openapi.models.shared.StoredValueBalanceCheckRequestShopperInteractionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.StoredValueBalanceCheckRequest req = new StoredValueBalanceCheckRequest("veritatis",                 new java.util.HashMap<String, String>() {{
                                put("perferendis", "ipsam");
                                put("repellendus", "sapiente");
                                put("quo", "odit");
                            }}, "at") {{
                amount = new Amount("at", 978619L);;
                recurringDetailReference = "molestiae";
                shopperInteraction = StoredValueBalanceCheckRequestShopperInteractionEnum.POS;
                shopperReference = "quod";
                store = "esse";
            }};            

            PostCheckBalanceResponse res = sdk.general.postCheckBalance(req, new PostCheckBalanceSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.storedValueBalanceCheckResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postIssue

Issues a new card of the given payment method.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostIssueResponse;
import org.openapis.openapi.models.operations.PostIssueSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.StoredValueIssueRequest;
import org.openapis.openapi.models.shared.StoredValueIssueRequestShopperInteractionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.StoredValueIssueRequest req = new StoredValueIssueRequest("totam",                 new java.util.HashMap<String, String>() {{
                                put("dolorum", "dicta");
                                put("nam", "officia");
                                put("occaecati", "fugit");
                                put("deleniti", "hic");
                            }}, "optio") {{
                amount = new Amount("totam", 105907L);;
                recurringDetailReference = "commodi";
                shopperInteraction = StoredValueIssueRequestShopperInteractionEnum.CONT_AUTH;
                shopperReference = "modi";
                store = "qui";
            }};            

            PostIssueResponse res = sdk.general.postIssue(req, new PostIssueSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.storedValueIssueResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postLoad

Loads the payment method with the specified funds.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostLoadResponse;
import org.openapis.openapi.models.operations.PostLoadSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.StoredValueLoadRequest;
import org.openapis.openapi.models.shared.StoredValueLoadRequestLoadTypeEnum;
import org.openapis.openapi.models.shared.StoredValueLoadRequestShopperInteractionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.StoredValueLoadRequest req = new StoredValueLoadRequest(                new Amount("impedit", 736918L);, "esse",                 new java.util.HashMap<String, String>() {{
                                put("excepturi", "aspernatur");
                            }}, "perferendis") {{
                loadType = StoredValueLoadRequestLoadTypeEnum.MERCHANDISE_RETURN;
                recurringDetailReference = "natus";
                shopperInteraction = StoredValueLoadRequestShopperInteractionEnum.ECOMMERCE;
                shopperReference = "iste";
                store = "dolor";
            }};            

            PostLoadResponse res = sdk.general.postLoad(req, new PostLoadSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.storedValueLoadResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postMergeBalance

Increases the balance of the paymentmethod by the full amount left on the source paymentmethod

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostMergeBalanceResponse;
import org.openapis.openapi.models.operations.PostMergeBalanceSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.StoredValueBalanceMergeRequest;
import org.openapis.openapi.models.shared.StoredValueBalanceMergeRequestShopperInteractionEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.StoredValueBalanceMergeRequest req = new StoredValueBalanceMergeRequest("natus",                 new java.util.HashMap<String, String>() {{
                                put("hic", "saepe");
                                put("fuga", "in");
                            }}, "corporis",                 new java.util.HashMap<String, String>() {{
                                put("iure", "saepe");
                                put("quidem", "architecto");
                                put("ipsa", "reiciendis");
                            }}) {{
                amount = new Amount("est", 653140L);;
                recurringDetailReference = "laborum";
                shopperInteraction = StoredValueBalanceMergeRequestShopperInteractionEnum.ECOMMERCE;
                shopperReference = "dolorem";
                store = "corporis";
            }};            

            PostMergeBalanceResponse res = sdk.general.postMergeBalance(req, new PostMergeBalanceSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.storedValueBalanceMergeResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postVoidTransaction

Voids the referenced stored value transaction.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostVoidTransactionResponse;
import org.openapis.openapi.models.operations.PostVoidTransactionSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.StoredValueVoidRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.StoredValueVoidRequest req = new StoredValueVoidRequest("explicabo", "nobis") {{
                reference = "enim";
                store = "omnis";
                tenderReference = "nemo";
                uniqueTerminalId = "minima";
            }};            

            PostVoidTransactionResponse res = sdk.general.postVoidTransaction(req, new PostVoidTransactionSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.storedValueVoidResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
