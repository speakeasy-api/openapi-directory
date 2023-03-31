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
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.operations.CreateBankAccountRequest;
import org.openapis.openapi.models.operations.CreateBankAccountResponse;
import org.openapis.openapi.models.shared.BankAccountInput;
import org.openapis.openapi.models.shared.CurrencyEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    apiKey = new SchemeAPIKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }})
                .build();

            CreateBankAccountRequest req = new CreateBankAccountRequest() {{
                request = new BankAccountInput() {{
                    accountNumber = "corrupti";
                    accountNumberIban = "provident";
                    currency = "PLN";
                    name = "quibusdam";
                    needQr = false;
                    swift = "unde";
                }};
            }};            

            CreateBankAccountResponse res = sdk.bankAccount.createBankAccount(req);

            if (res.bankAccount.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### bankAccount

* `createBankAccount` - Create a bank account
* `deleteBankAccount` - Delete a bank account
* `getBankAccount` - Retrieve a bank account
* `listBankAccount` - List all bank account
* `updateBankAccount` - Update a bank account

### currency

* `getConversionRate` - Get currencies exchange rate.

### document

* `cancelDocument` - Cancel a document
* `createDocument` - Create a document
* `createDocumentFromProforma` - Create a document from proforma.
* `deletePayment` - Delete all payment history on document
* `downloadDocument` - Download a document in PDF format.
* `getDocument` - Retrieve a document
* `getOnlineSzamlaStatus` - Retrieve a document Online Számla status
* `getPayment` - Retrieve a payment histroy
* `getPublicUrl` - Retrieve a document download public url.
* `listDocument` - List all documents
* `sendDocument` - Send invoice to given email adresses.
* `updatePayment` - Update payment history

### documentBlock

* `listDocumentBlock` - List all document blocks

### organization

* `getOrganizationData` - Retrieve a organization data.

### partner

* `createPartner` - Create a partner
* `deletePartner` - Delete a partner
* `getPartner` - Retrieve a partner
* `listPartner` - List all partners
* `updatePartner` - Update a partner

### product

* `createProduct` - Create a product
* `deleteProduct` - Delete a product
* `getProduct` - Retrieve a product
* `listProduct` - List all product
* `updateProduct` - Update a product

### util

* `getId` - Convert legacy ID to v3 ID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
