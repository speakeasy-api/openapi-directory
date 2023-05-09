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
import org.openapis.openapi.models.operations.CreateBankAccountResponse;
import org.openapis.openapi.models.shared.BankAccountInput;
import org.openapis.openapi.models.shared.CurrencyEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    apiKey = "YOUR_API_KEY_HERE";
                }})
                .build();

            org.openapis.openapi.models.shared.BankAccountInput req = new BankAccountInput("provident", CurrencyEnum.PLN, "quibusdam") {{
                accountNumberIban = "unde";
                needQr = false;
                swift = "nulla";
            }};            

            CreateBankAccountResponse res = sdk.bankAccount.createBankAccount(req);

            if (res.bankAccount != null) {
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


### [bankAccount](docs/bankaccount/README.md)

* [createBankAccount](docs/bankaccount/README.md#createbankaccount) - Create a bank account
* [deleteBankAccount](docs/bankaccount/README.md#deletebankaccount) - Delete a bank account
* [getBankAccount](docs/bankaccount/README.md#getbankaccount) - Retrieve a bank account
* [listBankAccount](docs/bankaccount/README.md#listbankaccount) - List all bank account
* [updateBankAccount](docs/bankaccount/README.md#updatebankaccount) - Update a bank account

### [currency](docs/currency/README.md)

* [getConversionRate](docs/currency/README.md#getconversionrate) - Get currencies exchange rate.

### [document](docs/document/README.md)

* [cancelDocument](docs/document/README.md#canceldocument) - Cancel a document
* [createDocument](docs/document/README.md#createdocument) - Create a document
* [createDocumentFromProforma](docs/document/README.md#createdocumentfromproforma) - Create a document from proforma.
* [deletePayment](docs/document/README.md#deletepayment) - Delete all payment history on document
* [downloadDocument](docs/document/README.md#downloaddocument) - Download a document in PDF format.
* [getDocument](docs/document/README.md#getdocument) - Retrieve a document
* [getOnlineSzamlaStatus](docs/document/README.md#getonlineszamlastatus) - Retrieve a document Online Számla status
* [getPayment](docs/document/README.md#getpayment) - Retrieve a payment histroy
* [getPublicUrl](docs/document/README.md#getpublicurl) - Retrieve a document download public url.
* [listDocument](docs/document/README.md#listdocument) - List all documents
* [sendDocument](docs/document/README.md#senddocument) - Send invoice to given email adresses.
* [updatePayment](docs/document/README.md#updatepayment) - Update payment history

### [documentBlock](docs/documentblock/README.md)

* [listDocumentBlock](docs/documentblock/README.md#listdocumentblock) - List all document blocks

### [organization](docs/organization/README.md)

* [getOrganizationData](docs/organization/README.md#getorganizationdata) - Retrieve a organization data.

### [partner](docs/partner/README.md)

* [createPartner](docs/partner/README.md#createpartner) - Create a partner
* [deletePartner](docs/partner/README.md#deletepartner) - Delete a partner
* [getPartner](docs/partner/README.md#getpartner) - Retrieve a partner
* [listPartner](docs/partner/README.md#listpartner) - List all partners
* [updatePartner](docs/partner/README.md#updatepartner) - Update a partner

### [product](docs/product/README.md)

* [createProduct](docs/product/README.md#createproduct) - Create a product
* [deleteProduct](docs/product/README.md#deleteproduct) - Delete a product
* [getProduct](docs/product/README.md#getproduct) - Retrieve a product
* [listProduct](docs/product/README.md#listproduct) - List all product
* [updateProduct](docs/product/README.md#updateproduct) - Update a product

### [util](docs/util/README.md)

* [getId](docs/util/README.md#getid) - Convert legacy ID to v3 ID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
