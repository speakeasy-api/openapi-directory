# transactionRules

### Available Operations

* [deleteTransactionRulesTransactionRuleId](#deletetransactionrulestransactionruleid) - Delete a transaction rule
* [getTransactionRulesTransactionRuleId](#gettransactionrulestransactionruleid) - Get a transaction rule
* [patchTransactionRulesTransactionRuleId](#patchtransactionrulestransactionruleid) - Update a transaction rule
* [postTransactionRules](#posttransactionrules) - Create a transaction rule

## deleteTransactionRulesTransactionRuleId

Deletes a transaction rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteTransactionRulesTransactionRuleIdRequest;
import org.openapis.openapi.models.operations.DeleteTransactionRulesTransactionRuleIdResponse;
import org.openapis.openapi.models.operations.DeleteTransactionRulesTransactionRuleIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteTransactionRulesTransactionRuleIdRequest req = new DeleteTransactionRulesTransactionRuleIdRequest("esse");            

            DeleteTransactionRulesTransactionRuleIdResponse res = sdk.transactionRules.deleteTransactionRulesTransactionRuleId(req, new DeleteTransactionRulesTransactionRuleIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.transactionRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTransactionRulesTransactionRuleId

Returns the details of a transaction rule.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionRulesTransactionRuleIdRequest;
import org.openapis.openapi.models.operations.GetTransactionRulesTransactionRuleIdResponse;
import org.openapis.openapi.models.operations.GetTransactionRulesTransactionRuleIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTransactionRulesTransactionRuleIdRequest req = new GetTransactionRulesTransactionRuleIdRequest("quasi");            

            GetTransactionRulesTransactionRuleIdResponse res = sdk.transactionRules.getTransactionRulesTransactionRuleId(req, new GetTransactionRulesTransactionRuleIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.transactionRuleResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchTransactionRulesTransactionRuleId

Updates a transaction rule. 

* To update only the status of a transaction rule, send only the `status` parameter. All other parameters not provided in the request are left unchanged.

* When updating any other parameter, you need to send all existing resource parameters. If you omit a parameter in the request, that parameter is removed from the resource.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchTransactionRulesTransactionRuleIdRequest;
import org.openapis.openapi.models.operations.PatchTransactionRulesTransactionRuleIdResponse;
import org.openapis.openapi.models.operations.PatchTransactionRulesTransactionRuleIdSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.TransactionRuleInfo;
import org.openapis.openapi.models.shared.TransactionRuleInfoEntryModesEnum;
import org.openapis.openapi.models.shared.TransactionRuleInfoProcessingTypesEnum;
import org.openapis.openapi.models.shared.TransactionRuleInfoStatusEnum;
import org.openapis.openapi.models.shared.TransactionRuleInfoTypeEnum;
import org.openapis.openapi.models.shared.TransactionRuleInterval;
import org.openapis.openapi.models.shared.TransactionRuleIntervalTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchTransactionRulesTransactionRuleIdRequest req = new PatchTransactionRulesTransactionRuleIdRequest("a") {{
                transactionRuleInfo = new TransactionRuleInfo("error",                 new TransactionRuleInterval(TransactionRuleIntervalTypeEnum.MONTHLY);, "pariatur", TransactionRuleInfoTypeEnum.VELOCITY) {{
                    amount = new Amount("quia", 908844L);;
                    balancePlatformId = "asperiores";
                    countries = new String[]{{
                        add("veritatis"),
                        add("consequuntur"),
                        add("quasi"),
                        add("similique"),
                    }};
                    endDate = "culpa";
                    entryModes = new org.openapis.openapi.models.shared.TransactionRuleInfoEntryModesEnum[]{{
                        add(TransactionRuleInfoEntryModesEnum.UNKNOWN),
                        add(TransactionRuleInfoEntryModesEnum.BARCODE),
                    }};
                    maxTransactions = 936747;
                    mccs = new String[]{{
                        add("in"),
                        add("eius"),
                    }};
                    paymentInstrumentGroupId = "libero";
                    paymentInstrumentId = "illum";
                    processingTypes = new org.openapis.openapi.models.shared.TransactionRuleInfoProcessingTypesEnum[]{{
                        add(TransactionRuleInfoProcessingTypesEnum.ATM_WITHDRAW),
                        add(TransactionRuleInfoProcessingTypesEnum.ECOMMERCE),
                        add(TransactionRuleInfoProcessingTypesEnum.UNKNOWN),
                    }};
                    startDate = "dicta";
                    status = TransactionRuleInfoStatusEnum.ACTIVE;
                }};;
            }};            

            PatchTransactionRulesTransactionRuleIdResponse res = sdk.transactionRules.patchTransactionRulesTransactionRuleId(req, new PatchTransactionRulesTransactionRuleIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.transactionRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTransactionRules

Creates a [transaction rule](https://docs.adyen.com/issuing/transaction-rules). When your user makes a transaction with their Adyen-issued card, the transaction is allowed or declined based on the conditions and outcome defined in the transaction rule. You can apply the transaction rule to several cards, such as all the cards in your platform, or to a specific card. For use cases, see [examples](https://docs.adyen.com/issuing/transaction-rules/examples).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTransactionRulesResponse;
import org.openapis.openapi.models.operations.PostTransactionRulesSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.TransactionRuleInfo;
import org.openapis.openapi.models.shared.TransactionRuleInfoEntryModesEnum;
import org.openapis.openapi.models.shared.TransactionRuleInfoProcessingTypesEnum;
import org.openapis.openapi.models.shared.TransactionRuleInfoStatusEnum;
import org.openapis.openapi.models.shared.TransactionRuleInfoTypeEnum;
import org.openapis.openapi.models.shared.TransactionRuleInterval;
import org.openapis.openapi.models.shared.TransactionRuleIntervalTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TransactionRuleInfo req = new TransactionRuleInfo("reprehenderit",                 new TransactionRuleInterval(TransactionRuleIntervalTypeEnum.LIFETIME);, "nisi", TransactionRuleInfoTypeEnum.ALLOW_LIST) {{
                amount = new Amount("voluptatum", 185232L);;
                balancePlatformId = "quibusdam";
                countries = new String[]{{
                    add("deleniti"),
                    add("itaque"),
                }};
                endDate = "dolorum";
                entryModes = new org.openapis.openapi.models.shared.TransactionRuleInfoEntryModesEnum[]{{
                    add(TransactionRuleInfoEntryModesEnum.MANUAL),
                }};
                maxTransactions = 945302;
                mccs = new String[]{{
                    add("at"),
                }};
                paymentInstrumentGroupId = "et";
                paymentInstrumentId = "voluptate";
                processingTypes = new org.openapis.openapi.models.shared.TransactionRuleInfoProcessingTypesEnum[]{{
                    add(TransactionRuleInfoProcessingTypesEnum.ECOMMERCE),
                }};
                startDate = "veritatis";
                status = TransactionRuleInfoStatusEnum.ACTIVE;
            }};            

            PostTransactionRulesResponse res = sdk.transactionRules.postTransactionRules(req, new PostTransactionRulesSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.transactionRule != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
