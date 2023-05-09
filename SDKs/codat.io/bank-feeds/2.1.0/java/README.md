# openapi

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'org.openapis.openapi:openapi:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
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
                .setSecurity(new Security("corrupti") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateBankTransactionsRequest req = new CreateBankTransactionsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171") {{
                bankTransactions = new BankTransactions() {{
                    accountId = "provident";
                    transactions = new org.openapis.openapi.models.shared.BankTransactionLine[]{{
                        add(new BankTransactionLine(9786.19, 4736.08, false, BankTransactionTypeEnum.DIRECT_DEP) {{
                            amount = 8442.66;
                            balance = 6027.63;
                            clearedOnDate = "2022-10-23T00:00:00Z";
                            counterparty = "nulla";
                            description = "corrupti";
                            id = "d69a674e-0f46-47cc-8796-ed151a05dfc2";
                            modifiedDate = "2022-10-23T00:00:00Z";
                            reconciled = false;
                            reference = "at";
                            sourceModifiedDate = "2022-10-23T00:00:00Z";
                            transactionType = BankTransactionTypeEnum.DIRECT_DEBIT;
                        }}),
                        add(new BankTransactionLine(3595.08, 6130.64, false, BankTransactionTypeEnum.DEP) {{
                            amount = 8009.11;
                            balance = 4614.79;
                            clearedOnDate = "2022-10-23T00:00:00Z";
                            counterparty = "totam";
                            description = "porro";
                            id = "a1ba928f-c816-4742-8b73-9205929396fe";
                            modifiedDate = "2022-10-23T00:00:00Z";
                            reconciled = false;
                            reference = "fuga";
                            sourceModifiedDate = "2022-10-23T00:00:00Z";
                            transactionType = BankTransactionTypeEnum.ATM;
                        }}),
                        add(new BankTransactionLine(1589.69, 3380.07, false, BankTransactionTypeEnum.CREDIT) {{
                            amount = 9023.49;
                            balance = 6976.31;
                            clearedOnDate = "2022-10-23T00:00:00Z";
                            counterparty = "architecto";
                            description = "ipsa";
                            id = "faaa2352-c595-4590-baff-1a3a2fa94677";
                            modifiedDate = "2022-10-23T00:00:00Z";
                            reconciled = false;
                            reference = "velit";
                            sourceModifiedDate = "2022-10-23T00:00:00Z";
                            transactionType = BankTransactionTypeEnum.CHECK;
                        }}),
                    }};
                }};;
                allowSyncOnPushComplete = false;
                timeoutInMinutes = 674752;
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
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [bankAccountTransactions](docs/bankaccounttransactions/README.md)

* [createBankTransactions](docs/bankaccounttransactions/README.md#createbanktransactions) - Create bank transactions
* [getCreateBankAccountModel](docs/bankaccounttransactions/README.md#getcreatebankaccountmodel) - List push options for bank account bank transactions
* [listBankAccountTransactions](docs/bankaccounttransactions/README.md#listbankaccounttransactions) - List bank transactions for bank account

### [bankFeedAccounts](docs/bankfeedaccounts/README.md)

* [createBankFeed](docs/bankfeedaccounts/README.md#createbankfeed) - Create bank feed bank accounts
* [getBankFeeds](docs/bankfeedaccounts/README.md#getbankfeeds) - List bank feed bank accounts
* [updateBankFeed](docs/bankfeedaccounts/README.md#updatebankfeed) - Update bank feed bank account
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
