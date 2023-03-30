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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.ClientAPIAllRequest{
        Headers: operations.ClientAPIAllHeaders{
            XAuthKey: "corrupti",
            XAuthSecret: "provident",
        },
    }

    ctx := context.Background()
    res, err := s.Client.ClientAPIAll(ctx, req)
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
## SDK Available Operations


### Client

* `ClientAPIAll` - Return all clients for the account
* `ClientAPICanDelete` - Check if the provided client can be deleted
* `ClientAPIDeleteForm` - Delete an existing client
* `ClientAPIDeleteJSON` - Delete an existing client
* `ClientAPIDeleteRaw` - Delete an existing client
* `ClientAPIDetails` - Return client details. Activities and invoices included.
* `ClientAPINewForm` - Create a client
* `ClientAPINewJSON` - Create a client
* `ClientAPINewRaw` - Create a client
* `ClientAPIUpdateForm` - Update an existing client
* `ClientAPIUpdateJSON` - Update an existing client
* `ClientAPIUpdateRaw` - Update an existing client

### Estimation

* `EstimationAPIAll` - Return all estimation for the account
* `EstimationAPIChangeStatusForm` - Change estimation status
* `EstimationAPIChangeStatusJSON` - Change estimation status
* `EstimationAPIChangeStatusRaw` - Change estimation status
* `EstimationAPIDeleteForm` - Delete an existing estimation
* `EstimationAPIDeleteJSON` - Delete an existing estimation
* `EstimationAPIDeleteRaw` - Delete an existing estimation
* `EstimationAPIDetails` - Return estimation data
* `EstimationAPINewForm` - Create an estimation
* `EstimationAPINewJSON` - Create an estimation
* `EstimationAPINewRaw` - Create an estimation
* `EstimationAPISendToClientForm` - Send the provided estimation to the client
* `EstimationAPISendToClientJSON` - Send the provided estimation to the client
* `EstimationAPISendToClientRaw` - Send the provided estimation to the client
* `EstimationAPIStatus` - Retrieve the status of the estimation
* `EstimationAPIUpdateForm` - Update an existing estimation
* `EstimationAPIUpdateJSON` - Update an existing estimation
* `EstimationAPIUpdateRaw` - Update an existing estimation
* `EstimationAPIURI` - Return the unique url to the client's invoice

### General

* `GeneralAPICountries` - Return all of the platform supported countries
* `GeneralAPICurrencies` - Return all of the platform supported currencies
* `GeneralAPIDateFormats` - Return all of the platform supported Date Formats
* `GeneralAPIUILanguages` - Return all of the platform supported UI languages

### Invoice

* `InvoiceAPIAll` - Return all invoices for the account
* `InvoiceAPIChangeStatusForm` - Change invoice status
* `InvoiceAPIChangeStatusJSON` - Change invoice status
* `InvoiceAPIChangeStatusRaw` - Change invoice status
* `InvoiceAPIDeleteForm` - Delete an existing invoice
* `InvoiceAPIDeleteJSON` - Delete an existing invoice
* `InvoiceAPIDeleteRaw` - Delete an existing invoice
* `InvoiceAPIDetails` - Return invoice data
* `InvoiceAPINewForm` - Create an invoice
* `InvoiceAPINewJSON` - Create an invoice
* `InvoiceAPINewRaw` - Create an invoice
* `InvoiceAPIPdf` - Return the PDF for the invoice
* `InvoiceAPISendToAccountantForm` - Send the provided invoice to the accountant
* `InvoiceAPISendToAccountantJSON` - Send the provided invoice to the accountant
* `InvoiceAPISendToAccountantRaw` - Send the provided invoice to the accountant
* `InvoiceAPISendToClientForm` - Send the provided invoice to the client
* `InvoiceAPISendToClientJSON` - Send the provided invoice to the client
* `InvoiceAPISendToClientRaw` - Send the provided invoice to the client
* `InvoiceAPIStatus` - Retrieve the status of the invoice
* `InvoiceAPIUpdateForm` - Update an existing invoice
* `InvoiceAPIUpdateJSON` - Update an existing invoice
* `InvoiceAPIUpdateRaw` - Update an existing invoice
* `InvoiceAPIURI` - Return the unique url to the client's invoice
* `GetAPIInvoiceAllcategories` - Return all invoice categories for the account
* `PostAPIInvoiceDeletecategoryForm` - Delete an existing invoice category
* `PostAPIInvoiceDeletecategoryJSON` - Delete an existing invoice category
* `PostAPIInvoiceDeletecategoryRaw` - Delete an existing invoice category
* `PostAPIInvoiceNewcategoryForm` - Create an invoice category
* `PostAPIInvoiceNewcategoryJSON` - Create an invoice category
* `PostAPIInvoiceNewcategoryRaw` - Create an invoice category
* `PostAPIInvoiceUpdatecategoryForm` - Update an existing invoice category
* `PostAPIInvoiceUpdatecategoryJSON` - Update an existing invoice category
* `PostAPIInvoiceUpdatecategoryRaw` - Update an existing invoice category

### Order

* `OrderAPIAll` - Return all orders for the account
* `OrderAPIChangeShippingDetailsForm` - Change order shipping details
* `OrderAPIChangeShippingDetailsJSON` - Change order shipping details
* `OrderAPIChangeShippingDetailsRaw` - Change order shipping details
* `OrderAPIChangeStatusForm` - Change order status
* `OrderAPIChangeStatusJSON` - Change order status
* `OrderAPIChangeStatusRaw` - Change order status
* `OrderAPIDeleteForm` - Delete an existing order
* `OrderAPIDeleteJSON` - Delete an existing order
* `OrderAPIDeleteRaw` - Delete an existing order
* `OrderAPIDetails` - Return order details
* `OrderAPINewForm` - Create an order
* `OrderAPINewJSON` - Create an order
* `OrderAPINewRaw` - Create an order

### Payment

* `PaymentAPISupported` - Return all supported payment gateways (no currencies means all are supported)

### PaymentLink

* `PaymentLinkAPIAll` - Create a payment link
* `PaymentLinkAPIDeleteForm` - Delete an existing payment link
* `PaymentLinkAPIDeleteJSON` - Delete an existing payment link
* `PaymentLinkAPIDeleteRaw` - Delete an existing payment link
* `PaymentLinkAPINewForm` - Create a payment link
* `PaymentLinkAPINewJSON` - Create a payment link
* `PaymentLinkAPINewRaw` - Create a payment link
* `PaymentLinkAPIURI` - Return the unique url to the client's payment link

### Product

* `ProductAPIAll` - Return all products for the account
* `ProductAPIDeleteForm` - Delete an existing product
* `ProductAPIDeleteJSON` - Delete an existing product
* `ProductAPIDeleteRaw` - Delete an existing product
* `ProductAPIDetails` - Return product details
* `ProductAPINewForm` - Create a product
* `ProductAPINewJSON` - Create a product
* `ProductAPINewRaw` - Create a product
* `ProductAPIUpdateForm` - Update an existing product
* `ProductAPIUpdateJSON` - Update an existing product
* `ProductAPIUpdateRaw` - Update an existing product

### Tax

* `TaxAPIAll` - Return all taxes for the account
* `TaxAPIDeleteForm` - Delete an existing tax
* `TaxAPIDeleteJSON` - Delete an existing tax
* `TaxAPIDeleteRaw` - Delete an existing tax
* `TaxAPINewForm` - Create a tax
* `TaxAPINewJSON` - Create a tax
* `TaxAPINewRaw` - Create a tax
* `TaxAPIUpdateForm` - Update an existing tax
* `TaxAPIUpdateJSON` - Update an existing tax
* `TaxAPIUpdateRaw` - Update an existing tax

### WorkType

* `WorkTypeAPIAll` - Return all work types for the account
* `WorkTypeAPIDeleteForm` - Delete an existing work type
* `WorkTypeAPIDeleteJSON` - Delete an existing work type
* `WorkTypeAPIDeleteRaw` - Delete an existing work type
* `WorkTypeAPIDetails` - Return work type details
* `WorkTypeAPINewForm` - Create a work type
* `WorkTypeAPINewJSON` - Create a work type
* `WorkTypeAPINewRaw` - Create a work type
* `WorkTypeAPISearch` - Return all work types for the account that match the query param
* `WorkTypeAPIUpdateForm` - Update an existing work type
* `WorkTypeAPIUpdateJSON` - Update an existing work type
* `WorkTypeAPIUpdateRaw` - Update an existing work type
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
