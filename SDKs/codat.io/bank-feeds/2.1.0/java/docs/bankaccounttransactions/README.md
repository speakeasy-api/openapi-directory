# bankAccountTransactions

## Overview

Bank feed bank accounts

### Available Operations

* [createBankTransactions](#createbanktransactions) - Create bank transactions
* [getCreateBankAccountModel](#getcreatebankaccountmodel) - List push options for bank account bank transactions
* [listBankAccountTransactions](#listbankaccounttransactions) - List bank transactions for bank account

## createBankTransactions

Posts bank transactions to the accounting package for a given company.

> **Supported Integrations**
> 
> Check out our [Knowledge UI](https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bankTransactions) for integrations that support POST methods.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateBankTransactionsRequest;
import org.openapis.openapi.models.operations.CreateBankTransactionsResponse;
import org.openapis.openapi.models.shared.BankTransactionLine;
import org.openapis.openapi.models.shared.BankTransactionTypeEnum;
import org.openapis.openapi.models.shared.BankTransactions;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("animi") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBankTransactionsRequest req = new CreateBankTransactionsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171") {{
                bankTransactions = new BankTransactions() {{
                    accountId = "enim";
                    transactions = new org.openapis.openapi.models.shared.BankTransactionLine[]{{
                        add(new BankTransactionLine(641.47, 2168.22, false, BankTransactionTypeEnum.PAYMENT) {{
                            amount = 7783.46;
                            balance = 1965.82;
                            clearedOnDate = "2022-10-23T00:00:00Z";
                            counterparty = "tenetur";
                            description = "ipsam";
                            id = "ad019da1-ffe7-48f0-97b0-074f15471b5e";
                            modifiedDate = "2022-10-23T00:00:00Z";
                            reconciled = false;
                            reference = "commodi";
                            sourceModifiedDate = "2022-10-23T00:00:00Z";
                            transactionType = BankTransactionTypeEnum.REPEAT_PMT;
                        }}),
                    }};
                }};;
                allowSyncOnPushComplete = false;
                timeoutInMinutes = 565189;
            }};            

            CreateBankTransactionsResponse res = sdk.bankAccountTransactions.createBankTransactions(req);

            if (res.createBankTransactionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCreateBankAccountModel

Gets the options of pushing bank account transactions.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCreateBankAccountModelRequest;
import org.openapis.openapi.models.operations.GetCreateBankAccountModelResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCreateBankAccountModelRequest req = new GetCreateBankAccountModelRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171");            

            GetCreateBankAccountModelResponse res = sdk.bankAccountTransactions.getCreateBankAccountModel(req);

            if (res.pushOption != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listBankAccountTransactions

Gets bank transactions for a given bank account ID

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListBankAccountTransactionsRequest;
import org.openapis.openapi.models.operations.ListBankAccountTransactionsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("pariatur") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListBankAccountTransactionsRequest req = new ListBankAccountTransactionsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 1) {{
                orderBy = "-modifiedDate";
                pageSize = 100;
                query = "modi";
            }};            

            ListBankAccountTransactionsResponse res = sdk.bankAccountTransactions.listBankAccountTransactions(req);

            if (res.bankTransactionsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
