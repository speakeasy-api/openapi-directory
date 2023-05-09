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

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTransactionsRequest;
import org.openapis.openapi.models.operations.GetTransactionsResponse;
import org.openapis.openapi.models.operations.GetTransactionsSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetTransactionsRequest req = new GetTransactionsRequest(OffsetDateTime.parse("2021-10-25T05:21:43.948Z"), OffsetDateTime.parse("2021-04-24T16:27:50.833Z")) {{
                accountHolderId = "unde";
                balanceAccountId = "nulla";
                balancePlatform = "corrupti";
                cursor = "illum";
                limit = 423655;
                paymentInstrumentId = "error";
            }};            

            GetTransactionsResponse res = sdk.transactions.getTransactions(req, new GetTransactionsSecurity("deserunt") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.transactionSearchResponse != null) {
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


### [transactions](docs/transactions/README.md)

* [getTransactions](docs/transactions/README.md#gettransactions) - Get all transactions
* [getTransactionsId](docs/transactions/README.md#gettransactionsid) - Get a transaction

### [transfers](docs/transfers/README.md)

* [postTransfers](docs/transfers/README.md#posttransfers) - Transfer funds
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
