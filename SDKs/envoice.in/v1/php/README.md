# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->

<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### client

* `clientApiAll` - Return all clients for the account
* `clientApiCanDelete` - Check if the provided client can be deleted
* `clientApiDeleteForm` - Delete an existing client
* `clientApiDeleteJson` - Delete an existing client
* `clientApiDeleteRaw` - Delete an existing client
* `clientApiDetails` - Return client details. Activities and invoices included.
* `clientApiNewForm` - Create a client
* `clientApiNewJson` - Create a client
* `clientApiNewRaw` - Create a client
* `clientApiUpdateForm` - Update an existing client
* `clientApiUpdateJson` - Update an existing client
* `clientApiUpdateRaw` - Update an existing client

### estimation

* `estimationApiAll` - Return all estimation for the account
* `estimationApiChangeStatusForm` - Change estimation status
* `estimationApiChangeStatusJson` - Change estimation status
* `estimationApiChangeStatusRaw` - Change estimation status
* `estimationApiDeleteForm` - Delete an existing estimation
* `estimationApiDeleteJson` - Delete an existing estimation
* `estimationApiDeleteRaw` - Delete an existing estimation
* `estimationApiDetails` - Return estimation data
* `estimationApiNewForm` - Create an estimation
* `estimationApiNewJson` - Create an estimation
* `estimationApiNewRaw` - Create an estimation
* `estimationApiSendToClientForm` - Send the provided estimation to the client
* `estimationApiSendToClientJson` - Send the provided estimation to the client
* `estimationApiSendToClientRaw` - Send the provided estimation to the client
* `estimationApiStatus` - Retrieve the status of the estimation
* `estimationApiUpdateForm` - Update an existing estimation
* `estimationApiUpdateJson` - Update an existing estimation
* `estimationApiUpdateRaw` - Update an existing estimation
* `estimationApiUri` - Return the unique url to the client's invoice

### general

* `generalApiCountries` - Return all of the platform supported countries
* `generalApiCurrencies` - Return all of the platform supported currencies
* `generalApiDateFormats` - Return all of the platform supported Date Formats
* `generalApiUiLanguages` - Return all of the platform supported UI languages

### invoice

* `invoiceApiAll` - Return all invoices for the account
* `invoiceApiChangeStatusForm` - Change invoice status
* `invoiceApiChangeStatusJson` - Change invoice status
* `invoiceApiChangeStatusRaw` - Change invoice status
* `invoiceApiDeleteForm` - Delete an existing invoice
* `invoiceApiDeleteJson` - Delete an existing invoice
* `invoiceApiDeleteRaw` - Delete an existing invoice
* `invoiceApiDetails` - Return invoice data
* `invoiceApiNewForm` - Create an invoice
* `invoiceApiNewJson` - Create an invoice
* `invoiceApiNewRaw` - Create an invoice
* `invoiceApiPdf` - Return the PDF for the invoice
* `invoiceApiSendToAccountantForm` - Send the provided invoice to the accountant
* `invoiceApiSendToAccountantJson` - Send the provided invoice to the accountant
* `invoiceApiSendToAccountantRaw` - Send the provided invoice to the accountant
* `invoiceApiSendToClientForm` - Send the provided invoice to the client
* `invoiceApiSendToClientJson` - Send the provided invoice to the client
* `invoiceApiSendToClientRaw` - Send the provided invoice to the client
* `invoiceApiStatus` - Retrieve the status of the invoice
* `invoiceApiUpdateForm` - Update an existing invoice
* `invoiceApiUpdateJson` - Update an existing invoice
* `invoiceApiUpdateRaw` - Update an existing invoice
* `invoiceApiUri` - Return the unique url to the client's invoice
* `getApiInvoiceAllcategories` - Return all invoice categories for the account
* `postApiInvoiceDeletecategoryForm` - Delete an existing invoice category
* `postApiInvoiceDeletecategoryJson` - Delete an existing invoice category
* `postApiInvoiceDeletecategoryRaw` - Delete an existing invoice category
* `postApiInvoiceNewcategoryForm` - Create an invoice category
* `postApiInvoiceNewcategoryJson` - Create an invoice category
* `postApiInvoiceNewcategoryRaw` - Create an invoice category
* `postApiInvoiceUpdatecategoryForm` - Update an existing invoice category
* `postApiInvoiceUpdatecategoryJson` - Update an existing invoice category
* `postApiInvoiceUpdatecategoryRaw` - Update an existing invoice category

### order

* `orderApiAll` - Return all orders for the account
* `orderApiChangeShippingDetailsForm` - Change order shipping details
* `orderApiChangeShippingDetailsJson` - Change order shipping details
* `orderApiChangeShippingDetailsRaw` - Change order shipping details
* `orderApiChangeStatusForm` - Change order status
* `orderApiChangeStatusJson` - Change order status
* `orderApiChangeStatusRaw` - Change order status
* `orderApiDeleteForm` - Delete an existing order
* `orderApiDeleteJson` - Delete an existing order
* `orderApiDeleteRaw` - Delete an existing order
* `orderApiDetails` - Return order details
* `orderApiNewForm` - Create an order
* `orderApiNewJson` - Create an order
* `orderApiNewRaw` - Create an order

### payment

* `paymentApiSupported` - Return all supported payment gateways (no currencies means all are supported)

### paymentLink

* `paymentLinkApiAll` - Create a payment link
* `paymentLinkApiDeleteForm` - Delete an existing payment link
* `paymentLinkApiDeleteJson` - Delete an existing payment link
* `paymentLinkApiDeleteRaw` - Delete an existing payment link
* `paymentLinkApiNewForm` - Create a payment link
* `paymentLinkApiNewJson` - Create a payment link
* `paymentLinkApiNewRaw` - Create a payment link
* `paymentLinkApiUri` - Return the unique url to the client's payment link

### product

* `productApiAll` - Return all products for the account
* `productApiDeleteForm` - Delete an existing product
* `productApiDeleteJson` - Delete an existing product
* `productApiDeleteRaw` - Delete an existing product
* `productApiDetails` - Return product details
* `productApiNewForm` - Create a product
* `productApiNewJson` - Create a product
* `productApiNewRaw` - Create a product
* `productApiUpdateForm` - Update an existing product
* `productApiUpdateJson` - Update an existing product
* `productApiUpdateRaw` - Update an existing product

### tax

* `taxApiAll` - Return all taxes for the account
* `taxApiDeleteForm` - Delete an existing tax
* `taxApiDeleteJson` - Delete an existing tax
* `taxApiDeleteRaw` - Delete an existing tax
* `taxApiNewForm` - Create a tax
* `taxApiNewJson` - Create a tax
* `taxApiNewRaw` - Create a tax
* `taxApiUpdateForm` - Update an existing tax
* `taxApiUpdateJson` - Update an existing tax
* `taxApiUpdateRaw` - Update an existing tax

### workType

* `workTypeApiAll` - Return all work types for the account
* `workTypeApiDeleteForm` - Delete an existing work type
* `workTypeApiDeleteJson` - Delete an existing work type
* `workTypeApiDeleteRaw` - Delete an existing work type
* `workTypeApiDetails` - Return work type details
* `workTypeApiNewForm` - Create a work type
* `workTypeApiNewJson` - Create a work type
* `workTypeApiNewRaw` - Create a work type
* `workTypeApiSearch` - Return all work types for the account that match the query param
* `workTypeApiUpdateForm` - Update an existing work type
* `workTypeApiUpdateJson` - Update an existing work type
* `workTypeApiUpdateRaw` - Update an existing work type
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
