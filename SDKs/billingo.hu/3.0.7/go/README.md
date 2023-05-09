# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/billingo.hu/3.0.7/go
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New(
        sdk.WithSecurity(shared.Security{
            APIKey: "YOUR_API_KEY_HERE",
        }),
    )

    ctx := context.Background()
    res, err := s.BankAccount.CreateBankAccount(ctx, shared.BankAccountInput{
        AccountNumber: "corrupti",
        AccountNumberIban: sdk.String("provident"),
        Currency: shared.CurrencyEnumPln,
        Name: "Stuart Stiedemann",
        NeedQr: sdk.Bool(false),
        Swift: sdk.String("vel"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.BankAccount != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [BankAccount](docs/bankaccount/README.md)

* [CreateBankAccount](docs/bankaccount/README.md#createbankaccount) - Create a bank account
* [DeleteBankAccount](docs/bankaccount/README.md#deletebankaccount) - Delete a bank account
* [GetBankAccount](docs/bankaccount/README.md#getbankaccount) - Retrieve a bank account
* [ListBankAccount](docs/bankaccount/README.md#listbankaccount) - List all bank account
* [UpdateBankAccount](docs/bankaccount/README.md#updatebankaccount) - Update a bank account

### [Currency](docs/currency/README.md)

* [GetConversionRate](docs/currency/README.md#getconversionrate) - Get currencies exchange rate.

### [Document](docs/document/README.md)

* [CancelDocument](docs/document/README.md#canceldocument) - Cancel a document
* [CreateDocument](docs/document/README.md#createdocument) - Create a document
* [CreateDocumentFromProforma](docs/document/README.md#createdocumentfromproforma) - Create a document from proforma.
* [DeletePayment](docs/document/README.md#deletepayment) - Delete all payment history on document
* [DownloadDocument](docs/document/README.md#downloaddocument) - Download a document in PDF format.
* [GetDocument](docs/document/README.md#getdocument) - Retrieve a document
* [GetOnlineSzamlaStatus](docs/document/README.md#getonlineszamlastatus) - Retrieve a document Online Számla status
* [GetPayment](docs/document/README.md#getpayment) - Retrieve a payment histroy
* [GetPublicURL](docs/document/README.md#getpublicurl) - Retrieve a document download public url.
* [ListDocument](docs/document/README.md#listdocument) - List all documents
* [SendDocument](docs/document/README.md#senddocument) - Send invoice to given email adresses.
* [UpdatePayment](docs/document/README.md#updatepayment) - Update payment history

### [DocumentBlock](docs/documentblock/README.md)

* [ListDocumentBlock](docs/documentblock/README.md#listdocumentblock) - List all document blocks

### [Organization](docs/organization/README.md)

* [GetOrganizationData](docs/organization/README.md#getorganizationdata) - Retrieve a organization data.

### [Partner](docs/partner/README.md)

* [CreatePartner](docs/partner/README.md#createpartner) - Create a partner
* [DeletePartner](docs/partner/README.md#deletepartner) - Delete a partner
* [GetPartner](docs/partner/README.md#getpartner) - Retrieve a partner
* [ListPartner](docs/partner/README.md#listpartner) - List all partners
* [UpdatePartner](docs/partner/README.md#updatepartner) - Update a partner

### [Product](docs/product/README.md)

* [CreateProduct](docs/product/README.md#createproduct) - Create a product
* [DeleteProduct](docs/product/README.md#deleteproduct) - Delete a product
* [GetProduct](docs/product/README.md#getproduct) - Retrieve a product
* [ListProduct](docs/product/README.md#listproduct) - List all product
* [UpdateProduct](docs/product/README.md#updateproduct) - Update a product

### [Util](docs/util/README.md)

* [GetID](docs/util/README.md#getid) - Convert legacy ID to v3 ID.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
