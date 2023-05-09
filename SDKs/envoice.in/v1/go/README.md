# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/envoice.in/v1/go
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
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Client.ClientAPIAll(ctx, operations.ClientAPIAllRequest{
        XAuthKey: "corrupti",
        XAuthSecret: "provident",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.ClientDetailsAPIModels != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [Client](docs/client/README.md)

* [ClientAPIAll](docs/client/README.md#clientapiall) - Return all clients for the account
* [ClientAPICanDelete](docs/client/README.md#clientapicandelete) - Check if the provided client can be deleted
* [ClientAPIDeleteForm](docs/client/README.md#clientapideleteform) - Delete an existing client
* [ClientAPIDeleteJSON](docs/client/README.md#clientapideletejson) - Delete an existing client
* [ClientAPIDeleteRaw](docs/client/README.md#clientapideleteraw) - Delete an existing client
* [ClientAPIDetails](docs/client/README.md#clientapidetails) - Return client details. Activities and invoices included.
* [ClientAPINewForm](docs/client/README.md#clientapinewform) - Create a client
* [ClientAPINewJSON](docs/client/README.md#clientapinewjson) - Create a client
* [ClientAPINewRaw](docs/client/README.md#clientapinewraw) - Create a client
* [ClientAPIUpdateForm](docs/client/README.md#clientapiupdateform) - Update an existing client
* [ClientAPIUpdateJSON](docs/client/README.md#clientapiupdatejson) - Update an existing client
* [ClientAPIUpdateRaw](docs/client/README.md#clientapiupdateraw) - Update an existing client

### [Estimation](docs/estimation/README.md)

* [EstimationAPIAll](docs/estimation/README.md#estimationapiall) - Return all estimation for the account
* [EstimationAPIChangeStatusForm](docs/estimation/README.md#estimationapichangestatusform) - Change estimation status
* [EstimationAPIChangeStatusJSON](docs/estimation/README.md#estimationapichangestatusjson) - Change estimation status
* [EstimationAPIChangeStatusRaw](docs/estimation/README.md#estimationapichangestatusraw) - Change estimation status
* [EstimationAPIDeleteForm](docs/estimation/README.md#estimationapideleteform) - Delete an existing estimation
* [EstimationAPIDeleteJSON](docs/estimation/README.md#estimationapideletejson) - Delete an existing estimation
* [EstimationAPIDeleteRaw](docs/estimation/README.md#estimationapideleteraw) - Delete an existing estimation
* [EstimationAPIDetails](docs/estimation/README.md#estimationapidetails) - Return estimation data
* [EstimationAPINewForm](docs/estimation/README.md#estimationapinewform) - Create an estimation
* [EstimationAPINewJSON](docs/estimation/README.md#estimationapinewjson) - Create an estimation
* [EstimationAPINewRaw](docs/estimation/README.md#estimationapinewraw) - Create an estimation
* [EstimationAPISendToClientForm](docs/estimation/README.md#estimationapisendtoclientform) - Send the provided estimation to the client
* [EstimationAPISendToClientJSON](docs/estimation/README.md#estimationapisendtoclientjson) - Send the provided estimation to the client
* [EstimationAPISendToClientRaw](docs/estimation/README.md#estimationapisendtoclientraw) - Send the provided estimation to the client
* [EstimationAPIStatus](docs/estimation/README.md#estimationapistatus) - Retrieve the status of the estimation
* [EstimationAPIUpdateForm](docs/estimation/README.md#estimationapiupdateform) - Update an existing estimation
* [EstimationAPIUpdateJSON](docs/estimation/README.md#estimationapiupdatejson) - Update an existing estimation
* [EstimationAPIUpdateRaw](docs/estimation/README.md#estimationapiupdateraw) - Update an existing estimation
* [EstimationAPIURI](docs/estimation/README.md#estimationapiuri) - Return the unique url to the client's invoice

### [General](docs/general/README.md)

* [GeneralAPICountries](docs/general/README.md#generalapicountries) - Return all of the platform supported countries
* [GeneralAPICurrencies](docs/general/README.md#generalapicurrencies) - Return all of the platform supported currencies
* [GeneralAPIDateFormats](docs/general/README.md#generalapidateformats) - Return all of the platform supported Date Formats
* [GeneralAPIUILanguages](docs/general/README.md#generalapiuilanguages) - Return all of the platform supported UI languages

### [Invoice](docs/invoice/README.md)

* [InvoiceAPIAll](docs/invoice/README.md#invoiceapiall) - Return all invoices for the account
* [InvoiceAPIChangeStatusForm](docs/invoice/README.md#invoiceapichangestatusform) - Change invoice status
* [InvoiceAPIChangeStatusJSON](docs/invoice/README.md#invoiceapichangestatusjson) - Change invoice status
* [InvoiceAPIChangeStatusRaw](docs/invoice/README.md#invoiceapichangestatusraw) - Change invoice status
* [InvoiceAPIDeleteForm](docs/invoice/README.md#invoiceapideleteform) - Delete an existing invoice
* [InvoiceAPIDeleteJSON](docs/invoice/README.md#invoiceapideletejson) - Delete an existing invoice
* [InvoiceAPIDeleteRaw](docs/invoice/README.md#invoiceapideleteraw) - Delete an existing invoice
* [InvoiceAPIDetails](docs/invoice/README.md#invoiceapidetails) - Return invoice data
* [InvoiceAPINewForm](docs/invoice/README.md#invoiceapinewform) - Create an invoice
* [InvoiceAPINewJSON](docs/invoice/README.md#invoiceapinewjson) - Create an invoice
* [InvoiceAPINewRaw](docs/invoice/README.md#invoiceapinewraw) - Create an invoice
* [InvoiceAPIPdf](docs/invoice/README.md#invoiceapipdf) - Return the PDF for the invoice
* [InvoiceAPISendToAccountantForm](docs/invoice/README.md#invoiceapisendtoaccountantform) - Send the provided invoice to the accountant
* [InvoiceAPISendToAccountantJSON](docs/invoice/README.md#invoiceapisendtoaccountantjson) - Send the provided invoice to the accountant
* [InvoiceAPISendToAccountantRaw](docs/invoice/README.md#invoiceapisendtoaccountantraw) - Send the provided invoice to the accountant
* [InvoiceAPISendToClientForm](docs/invoice/README.md#invoiceapisendtoclientform) - Send the provided invoice to the client
* [InvoiceAPISendToClientJSON](docs/invoice/README.md#invoiceapisendtoclientjson) - Send the provided invoice to the client
* [InvoiceAPISendToClientRaw](docs/invoice/README.md#invoiceapisendtoclientraw) - Send the provided invoice to the client
* [InvoiceAPIStatus](docs/invoice/README.md#invoiceapistatus) - Retrieve the status of the invoice
* [InvoiceAPIUpdateForm](docs/invoice/README.md#invoiceapiupdateform) - Update an existing invoice
* [InvoiceAPIUpdateJSON](docs/invoice/README.md#invoiceapiupdatejson) - Update an existing invoice
* [InvoiceAPIUpdateRaw](docs/invoice/README.md#invoiceapiupdateraw) - Update an existing invoice
* [InvoiceAPIURI](docs/invoice/README.md#invoiceapiuri) - Return the unique url to the client's invoice
* [GetAPIInvoiceAllcategories](docs/invoice/README.md#getapiinvoiceallcategories) - Return all invoice categories for the account
* [PostAPIInvoiceDeletecategoryForm](docs/invoice/README.md#postapiinvoicedeletecategoryform) - Delete an existing invoice category
* [PostAPIInvoiceDeletecategoryJSON](docs/invoice/README.md#postapiinvoicedeletecategoryjson) - Delete an existing invoice category
* [PostAPIInvoiceDeletecategoryRaw](docs/invoice/README.md#postapiinvoicedeletecategoryraw) - Delete an existing invoice category
* [PostAPIInvoiceNewcategoryForm](docs/invoice/README.md#postapiinvoicenewcategoryform) - Create an invoice category
* [PostAPIInvoiceNewcategoryJSON](docs/invoice/README.md#postapiinvoicenewcategoryjson) - Create an invoice category
* [PostAPIInvoiceNewcategoryRaw](docs/invoice/README.md#postapiinvoicenewcategoryraw) - Create an invoice category
* [PostAPIInvoiceUpdatecategoryForm](docs/invoice/README.md#postapiinvoiceupdatecategoryform) - Update an existing invoice category
* [PostAPIInvoiceUpdatecategoryJSON](docs/invoice/README.md#postapiinvoiceupdatecategoryjson) - Update an existing invoice category
* [PostAPIInvoiceUpdatecategoryRaw](docs/invoice/README.md#postapiinvoiceupdatecategoryraw) - Update an existing invoice category

### [Order](docs/order/README.md)

* [OrderAPIAll](docs/order/README.md#orderapiall) - Return all orders for the account
* [OrderAPIChangeShippingDetailsForm](docs/order/README.md#orderapichangeshippingdetailsform) - Change order shipping details
* [OrderAPIChangeShippingDetailsJSON](docs/order/README.md#orderapichangeshippingdetailsjson) - Change order shipping details
* [OrderAPIChangeShippingDetailsRaw](docs/order/README.md#orderapichangeshippingdetailsraw) - Change order shipping details
* [OrderAPIChangeStatusForm](docs/order/README.md#orderapichangestatusform) - Change order status
* [OrderAPIChangeStatusJSON](docs/order/README.md#orderapichangestatusjson) - Change order status
* [OrderAPIChangeStatusRaw](docs/order/README.md#orderapichangestatusraw) - Change order status
* [OrderAPIDeleteForm](docs/order/README.md#orderapideleteform) - Delete an existing order
* [OrderAPIDeleteJSON](docs/order/README.md#orderapideletejson) - Delete an existing order
* [OrderAPIDeleteRaw](docs/order/README.md#orderapideleteraw) - Delete an existing order
* [OrderAPIDetails](docs/order/README.md#orderapidetails) - Return order details
* [OrderAPINewForm](docs/order/README.md#orderapinewform) - Create an order
* [OrderAPINewJSON](docs/order/README.md#orderapinewjson) - Create an order
* [OrderAPINewRaw](docs/order/README.md#orderapinewraw) - Create an order

### [Payment](docs/payment/README.md)

* [PaymentAPISupported](docs/payment/README.md#paymentapisupported) - Return all supported payment gateways (no currencies means all are supported)

### [PaymentLink](docs/paymentlink/README.md)

* [PaymentLinkAPIAll](docs/paymentlink/README.md#paymentlinkapiall) - Create a payment link
* [PaymentLinkAPIDeleteForm](docs/paymentlink/README.md#paymentlinkapideleteform) - Delete an existing payment link
* [PaymentLinkAPIDeleteJSON](docs/paymentlink/README.md#paymentlinkapideletejson) - Delete an existing payment link
* [PaymentLinkAPIDeleteRaw](docs/paymentlink/README.md#paymentlinkapideleteraw) - Delete an existing payment link
* [PaymentLinkAPINewForm](docs/paymentlink/README.md#paymentlinkapinewform) - Create a payment link
* [PaymentLinkAPINewJSON](docs/paymentlink/README.md#paymentlinkapinewjson) - Create a payment link
* [PaymentLinkAPINewRaw](docs/paymentlink/README.md#paymentlinkapinewraw) - Create a payment link
* [PaymentLinkAPIURI](docs/paymentlink/README.md#paymentlinkapiuri) - Return the unique url to the client's payment link

### [Product](docs/product/README.md)

* [ProductAPIAll](docs/product/README.md#productapiall) - Return all products for the account
* [ProductAPIDeleteForm](docs/product/README.md#productapideleteform) - Delete an existing product
* [ProductAPIDeleteJSON](docs/product/README.md#productapideletejson) - Delete an existing product
* [ProductAPIDeleteRaw](docs/product/README.md#productapideleteraw) - Delete an existing product
* [ProductAPIDetails](docs/product/README.md#productapidetails) - Return product details
* [ProductAPINewForm](docs/product/README.md#productapinewform) - Create a product
* [ProductAPINewJSON](docs/product/README.md#productapinewjson) - Create a product
* [ProductAPINewRaw](docs/product/README.md#productapinewraw) - Create a product
* [ProductAPIUpdateForm](docs/product/README.md#productapiupdateform) - Update an existing product
* [ProductAPIUpdateJSON](docs/product/README.md#productapiupdatejson) - Update an existing product
* [ProductAPIUpdateRaw](docs/product/README.md#productapiupdateraw) - Update an existing product

### [Tax](docs/tax/README.md)

* [TaxAPIAll](docs/tax/README.md#taxapiall) - Return all taxes for the account
* [TaxAPIDeleteForm](docs/tax/README.md#taxapideleteform) - Delete an existing tax
* [TaxAPIDeleteJSON](docs/tax/README.md#taxapideletejson) - Delete an existing tax
* [TaxAPIDeleteRaw](docs/tax/README.md#taxapideleteraw) - Delete an existing tax
* [TaxAPINewForm](docs/tax/README.md#taxapinewform) - Create a tax
* [TaxAPINewJSON](docs/tax/README.md#taxapinewjson) - Create a tax
* [TaxAPINewRaw](docs/tax/README.md#taxapinewraw) - Create a tax
* [TaxAPIUpdateForm](docs/tax/README.md#taxapiupdateform) - Update an existing tax
* [TaxAPIUpdateJSON](docs/tax/README.md#taxapiupdatejson) - Update an existing tax
* [TaxAPIUpdateRaw](docs/tax/README.md#taxapiupdateraw) - Update an existing tax

### [WorkType](docs/worktype/README.md)

* [WorkTypeAPIAll](docs/worktype/README.md#worktypeapiall) - Return all work types for the account
* [WorkTypeAPIDeleteForm](docs/worktype/README.md#worktypeapideleteform) - Delete an existing work type
* [WorkTypeAPIDeleteJSON](docs/worktype/README.md#worktypeapideletejson) - Delete an existing work type
* [WorkTypeAPIDeleteRaw](docs/worktype/README.md#worktypeapideleteraw) - Delete an existing work type
* [WorkTypeAPIDetails](docs/worktype/README.md#worktypeapidetails) - Return work type details
* [WorkTypeAPINewForm](docs/worktype/README.md#worktypeapinewform) - Create a work type
* [WorkTypeAPINewJSON](docs/worktype/README.md#worktypeapinewjson) - Create a work type
* [WorkTypeAPINewRaw](docs/worktype/README.md#worktypeapinewraw) - Create a work type
* [WorkTypeAPISearch](docs/worktype/README.md#worktypeapisearch) - Return all work types for the account that match the query param
* [WorkTypeAPIUpdateForm](docs/worktype/README.md#worktypeapiupdateform) - Update an existing work type
* [WorkTypeAPIUpdateJSON](docs/worktype/README.md#worktypeapiupdatejson) - Update an existing work type
* [WorkTypeAPIUpdateRaw](docs/worktype/README.md#worktypeapiupdateraw) - Update an existing work type
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
