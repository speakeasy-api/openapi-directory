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
import org.openapis.openapi.models.operations.ListAccountBalancesRequest;
import org.openapis.openapi.models.operations.ListAccountBalancesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            ListAccountBalancesRequest req = new ListAccountBalancesRequest("8a210b68-6988-11ed-a1eb-0242ac120002", "2e9d2c44-f675-40ba-8049-353bfcb5e171", 1) {{
                orderBy = "-modifiedDate";
                pageSize = 100;
                query = "provident";
            }};            

            ListAccountBalancesResponse res = sdk.accountBalances.listAccountBalances(req);

            if (res.accountBalances != null) {
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


### [accountBalances](docs/accountbalances/README.md)

* [listAccountBalances](docs/accountbalances/README.md#listaccountbalances) - List account balances

### [accounts](docs/accounts/README.md)

* [~~getAccount~~](docs/accounts/README.md#getaccount) - Get account :warning: **Deprecated**
* [listAccounts](docs/accounts/README.md#listaccounts) - List accounts

### [transactionCategories](docs/transactioncategories/README.md)

* [~~getTransactionCategory~~](docs/transactioncategories/README.md#gettransactioncategory) - Get transaction category :warning: **Deprecated**
* [listTransactionCategories](docs/transactioncategories/README.md#listtransactioncategories) - List all transaction categories

### [transactions](docs/transactions/README.md)

* [~~getTransaction~~](docs/transactions/README.md#gettransaction) - Get bank transaction :warning: **Deprecated**
* [listBankTransactions](docs/transactions/README.md#listbanktransactions) - List banking transactions
* [listTransactions](docs/transactions/README.md#listtransactions) - List transactions
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
