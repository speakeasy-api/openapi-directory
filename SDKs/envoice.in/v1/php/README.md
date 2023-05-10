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
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ClientApiAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ClientApiAllRequest();
    $request->xAuthKey = 'corrupti';
    $request->xAuthSecret = 'provident';

    $response = $sdk->client->clientApiAll($request);

    if ($response->clientDetailsApiModels !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [client](docs/client/README.md)

* [clientApiAll](docs/client/README.md#clientapiall) - Return all clients for the account
* [clientApiCanDelete](docs/client/README.md#clientapicandelete) - Check if the provided client can be deleted
* [clientApiDeleteForm](docs/client/README.md#clientapideleteform) - Delete an existing client
* [clientApiDeleteJson](docs/client/README.md#clientapideletejson) - Delete an existing client
* [clientApiDeleteRaw](docs/client/README.md#clientapideleteraw) - Delete an existing client
* [clientApiDetails](docs/client/README.md#clientapidetails) - Return client details. Activities and invoices included.
* [clientApiNewForm](docs/client/README.md#clientapinewform) - Create a client
* [clientApiNewJson](docs/client/README.md#clientapinewjson) - Create a client
* [clientApiNewRaw](docs/client/README.md#clientapinewraw) - Create a client
* [clientApiUpdateForm](docs/client/README.md#clientapiupdateform) - Update an existing client
* [clientApiUpdateJson](docs/client/README.md#clientapiupdatejson) - Update an existing client
* [clientApiUpdateRaw](docs/client/README.md#clientapiupdateraw) - Update an existing client

### [estimation](docs/estimation/README.md)

* [estimationApiAll](docs/estimation/README.md#estimationapiall) - Return all estimation for the account
* [estimationApiChangeStatusForm](docs/estimation/README.md#estimationapichangestatusform) - Change estimation status
* [estimationApiChangeStatusJson](docs/estimation/README.md#estimationapichangestatusjson) - Change estimation status
* [estimationApiChangeStatusRaw](docs/estimation/README.md#estimationapichangestatusraw) - Change estimation status
* [estimationApiDeleteForm](docs/estimation/README.md#estimationapideleteform) - Delete an existing estimation
* [estimationApiDeleteJson](docs/estimation/README.md#estimationapideletejson) - Delete an existing estimation
* [estimationApiDeleteRaw](docs/estimation/README.md#estimationapideleteraw) - Delete an existing estimation
* [estimationApiDetails](docs/estimation/README.md#estimationapidetails) - Return estimation data
* [estimationApiNewForm](docs/estimation/README.md#estimationapinewform) - Create an estimation
* [estimationApiNewJson](docs/estimation/README.md#estimationapinewjson) - Create an estimation
* [estimationApiNewRaw](docs/estimation/README.md#estimationapinewraw) - Create an estimation
* [estimationApiSendToClientForm](docs/estimation/README.md#estimationapisendtoclientform) - Send the provided estimation to the client
* [estimationApiSendToClientJson](docs/estimation/README.md#estimationapisendtoclientjson) - Send the provided estimation to the client
* [estimationApiSendToClientRaw](docs/estimation/README.md#estimationapisendtoclientraw) - Send the provided estimation to the client
* [estimationApiStatus](docs/estimation/README.md#estimationapistatus) - Retrieve the status of the estimation
* [estimationApiUpdateForm](docs/estimation/README.md#estimationapiupdateform) - Update an existing estimation
* [estimationApiUpdateJson](docs/estimation/README.md#estimationapiupdatejson) - Update an existing estimation
* [estimationApiUpdateRaw](docs/estimation/README.md#estimationapiupdateraw) - Update an existing estimation
* [estimationApiUri](docs/estimation/README.md#estimationapiuri) - Return the unique url to the client's invoice

### [general](docs/general/README.md)

* [generalApiCountries](docs/general/README.md#generalapicountries) - Return all of the platform supported countries
* [generalApiCurrencies](docs/general/README.md#generalapicurrencies) - Return all of the platform supported currencies
* [generalApiDateFormats](docs/general/README.md#generalapidateformats) - Return all of the platform supported Date Formats
* [generalApiUiLanguages](docs/general/README.md#generalapiuilanguages) - Return all of the platform supported UI languages

### [invoice](docs/invoice/README.md)

* [invoiceApiAll](docs/invoice/README.md#invoiceapiall) - Return all invoices for the account
* [invoiceApiChangeStatusForm](docs/invoice/README.md#invoiceapichangestatusform) - Change invoice status
* [invoiceApiChangeStatusJson](docs/invoice/README.md#invoiceapichangestatusjson) - Change invoice status
* [invoiceApiChangeStatusRaw](docs/invoice/README.md#invoiceapichangestatusraw) - Change invoice status
* [invoiceApiDeleteForm](docs/invoice/README.md#invoiceapideleteform) - Delete an existing invoice
* [invoiceApiDeleteJson](docs/invoice/README.md#invoiceapideletejson) - Delete an existing invoice
* [invoiceApiDeleteRaw](docs/invoice/README.md#invoiceapideleteraw) - Delete an existing invoice
* [invoiceApiDetails](docs/invoice/README.md#invoiceapidetails) - Return invoice data
* [invoiceApiNewForm](docs/invoice/README.md#invoiceapinewform) - Create an invoice
* [invoiceApiNewJson](docs/invoice/README.md#invoiceapinewjson) - Create an invoice
* [invoiceApiNewRaw](docs/invoice/README.md#invoiceapinewraw) - Create an invoice
* [invoiceApiPdf](docs/invoice/README.md#invoiceapipdf) - Return the PDF for the invoice
* [invoiceApiSendToAccountantForm](docs/invoice/README.md#invoiceapisendtoaccountantform) - Send the provided invoice to the accountant
* [invoiceApiSendToAccountantJson](docs/invoice/README.md#invoiceapisendtoaccountantjson) - Send the provided invoice to the accountant
* [invoiceApiSendToAccountantRaw](docs/invoice/README.md#invoiceapisendtoaccountantraw) - Send the provided invoice to the accountant
* [invoiceApiSendToClientForm](docs/invoice/README.md#invoiceapisendtoclientform) - Send the provided invoice to the client
* [invoiceApiSendToClientJson](docs/invoice/README.md#invoiceapisendtoclientjson) - Send the provided invoice to the client
* [invoiceApiSendToClientRaw](docs/invoice/README.md#invoiceapisendtoclientraw) - Send the provided invoice to the client
* [invoiceApiStatus](docs/invoice/README.md#invoiceapistatus) - Retrieve the status of the invoice
* [invoiceApiUpdateForm](docs/invoice/README.md#invoiceapiupdateform) - Update an existing invoice
* [invoiceApiUpdateJson](docs/invoice/README.md#invoiceapiupdatejson) - Update an existing invoice
* [invoiceApiUpdateRaw](docs/invoice/README.md#invoiceapiupdateraw) - Update an existing invoice
* [invoiceApiUri](docs/invoice/README.md#invoiceapiuri) - Return the unique url to the client's invoice
* [getApiInvoiceAllcategories](docs/invoice/README.md#getapiinvoiceallcategories) - Return all invoice categories for the account
* [postApiInvoiceDeletecategoryForm](docs/invoice/README.md#postapiinvoicedeletecategoryform) - Delete an existing invoice category
* [postApiInvoiceDeletecategoryJson](docs/invoice/README.md#postapiinvoicedeletecategoryjson) - Delete an existing invoice category
* [postApiInvoiceDeletecategoryRaw](docs/invoice/README.md#postapiinvoicedeletecategoryraw) - Delete an existing invoice category
* [postApiInvoiceNewcategoryForm](docs/invoice/README.md#postapiinvoicenewcategoryform) - Create an invoice category
* [postApiInvoiceNewcategoryJson](docs/invoice/README.md#postapiinvoicenewcategoryjson) - Create an invoice category
* [postApiInvoiceNewcategoryRaw](docs/invoice/README.md#postapiinvoicenewcategoryraw) - Create an invoice category
* [postApiInvoiceUpdatecategoryForm](docs/invoice/README.md#postapiinvoiceupdatecategoryform) - Update an existing invoice category
* [postApiInvoiceUpdatecategoryJson](docs/invoice/README.md#postapiinvoiceupdatecategoryjson) - Update an existing invoice category
* [postApiInvoiceUpdatecategoryRaw](docs/invoice/README.md#postapiinvoiceupdatecategoryraw) - Update an existing invoice category

### [order](docs/order/README.md)

* [orderApiAll](docs/order/README.md#orderapiall) - Return all orders for the account
* [orderApiChangeShippingDetailsForm](docs/order/README.md#orderapichangeshippingdetailsform) - Change order shipping details
* [orderApiChangeShippingDetailsJson](docs/order/README.md#orderapichangeshippingdetailsjson) - Change order shipping details
* [orderApiChangeShippingDetailsRaw](docs/order/README.md#orderapichangeshippingdetailsraw) - Change order shipping details
* [orderApiChangeStatusForm](docs/order/README.md#orderapichangestatusform) - Change order status
* [orderApiChangeStatusJson](docs/order/README.md#orderapichangestatusjson) - Change order status
* [orderApiChangeStatusRaw](docs/order/README.md#orderapichangestatusraw) - Change order status
* [orderApiDeleteForm](docs/order/README.md#orderapideleteform) - Delete an existing order
* [orderApiDeleteJson](docs/order/README.md#orderapideletejson) - Delete an existing order
* [orderApiDeleteRaw](docs/order/README.md#orderapideleteraw) - Delete an existing order
* [orderApiDetails](docs/order/README.md#orderapidetails) - Return order details
* [orderApiNewForm](docs/order/README.md#orderapinewform) - Create an order
* [orderApiNewJson](docs/order/README.md#orderapinewjson) - Create an order
* [orderApiNewRaw](docs/order/README.md#orderapinewraw) - Create an order

### [payment](docs/payment/README.md)

* [paymentApiSupported](docs/payment/README.md#paymentapisupported) - Return all supported payment gateways (no currencies means all are supported)

### [paymentLink](docs/paymentlink/README.md)

* [paymentLinkApiAll](docs/paymentlink/README.md#paymentlinkapiall) - Create a payment link
* [paymentLinkApiDeleteForm](docs/paymentlink/README.md#paymentlinkapideleteform) - Delete an existing payment link
* [paymentLinkApiDeleteJson](docs/paymentlink/README.md#paymentlinkapideletejson) - Delete an existing payment link
* [paymentLinkApiDeleteRaw](docs/paymentlink/README.md#paymentlinkapideleteraw) - Delete an existing payment link
* [paymentLinkApiNewForm](docs/paymentlink/README.md#paymentlinkapinewform) - Create a payment link
* [paymentLinkApiNewJson](docs/paymentlink/README.md#paymentlinkapinewjson) - Create a payment link
* [paymentLinkApiNewRaw](docs/paymentlink/README.md#paymentlinkapinewraw) - Create a payment link
* [paymentLinkApiUri](docs/paymentlink/README.md#paymentlinkapiuri) - Return the unique url to the client's payment link

### [product](docs/product/README.md)

* [productApiAll](docs/product/README.md#productapiall) - Return all products for the account
* [productApiDeleteForm](docs/product/README.md#productapideleteform) - Delete an existing product
* [productApiDeleteJson](docs/product/README.md#productapideletejson) - Delete an existing product
* [productApiDeleteRaw](docs/product/README.md#productapideleteraw) - Delete an existing product
* [productApiDetails](docs/product/README.md#productapidetails) - Return product details
* [productApiNewForm](docs/product/README.md#productapinewform) - Create a product
* [productApiNewJson](docs/product/README.md#productapinewjson) - Create a product
* [productApiNewRaw](docs/product/README.md#productapinewraw) - Create a product
* [productApiUpdateForm](docs/product/README.md#productapiupdateform) - Update an existing product
* [productApiUpdateJson](docs/product/README.md#productapiupdatejson) - Update an existing product
* [productApiUpdateRaw](docs/product/README.md#productapiupdateraw) - Update an existing product

### [tax](docs/tax/README.md)

* [taxApiAll](docs/tax/README.md#taxapiall) - Return all taxes for the account
* [taxApiDeleteForm](docs/tax/README.md#taxapideleteform) - Delete an existing tax
* [taxApiDeleteJson](docs/tax/README.md#taxapideletejson) - Delete an existing tax
* [taxApiDeleteRaw](docs/tax/README.md#taxapideleteraw) - Delete an existing tax
* [taxApiNewForm](docs/tax/README.md#taxapinewform) - Create a tax
* [taxApiNewJson](docs/tax/README.md#taxapinewjson) - Create a tax
* [taxApiNewRaw](docs/tax/README.md#taxapinewraw) - Create a tax
* [taxApiUpdateForm](docs/tax/README.md#taxapiupdateform) - Update an existing tax
* [taxApiUpdateJson](docs/tax/README.md#taxapiupdatejson) - Update an existing tax
* [taxApiUpdateRaw](docs/tax/README.md#taxapiupdateraw) - Update an existing tax

### [workType](docs/worktype/README.md)

* [workTypeApiAll](docs/worktype/README.md#worktypeapiall) - Return all work types for the account
* [workTypeApiDeleteForm](docs/worktype/README.md#worktypeapideleteform) - Delete an existing work type
* [workTypeApiDeleteJson](docs/worktype/README.md#worktypeapideletejson) - Delete an existing work type
* [workTypeApiDeleteRaw](docs/worktype/README.md#worktypeapideleteraw) - Delete an existing work type
* [workTypeApiDetails](docs/worktype/README.md#worktypeapidetails) - Return work type details
* [workTypeApiNewForm](docs/worktype/README.md#worktypeapinewform) - Create a work type
* [workTypeApiNewJson](docs/worktype/README.md#worktypeapinewjson) - Create a work type
* [workTypeApiNewRaw](docs/worktype/README.md#worktypeapinewraw) - Create a work type
* [workTypeApiSearch](docs/worktype/README.md#worktypeapisearch) - Return all work types for the account that match the query param
* [workTypeApiUpdateForm](docs/worktype/README.md#worktypeapiupdateform) - Update an existing work type
* [workTypeApiUpdateJson](docs/worktype/README.md#worktypeapiupdatejson) - Update an existing work type
* [workTypeApiUpdateRaw](docs/worktype/README.md#worktypeapiupdateraw) - Update an existing work type
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
