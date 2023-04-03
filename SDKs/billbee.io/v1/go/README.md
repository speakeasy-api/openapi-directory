# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/billbee.io/v1/go
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

    ctx := context.Background()
    res, err := s.CloudStorage.CloudStorageAPIGetList(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.RechnungsdruckWebAppControllersAPIAPIResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCloudStorageAPIModel != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### CloudStorage

* `CloudStorageAPIGetList` - Gets a list of all connected cloud storage devices

### CustomerAddresses

* `CustomerAddressesCreateForm` - Creates a new customer address
* `CustomerAddressesCreateJSON` - Creates a new customer address
* `CustomerAddressesCreateRaw` - Creates a new customer address
* `CustomerAddressesGetAll` - Get a list of all customer addresses
* `CustomerAddressesGetOne` - Queries a single customer address by id
* `CustomerAddressesUpdateForm` - Updates a customer address by id
* `CustomerAddressesUpdateJSON` - Updates a customer address by id
* `CustomerAddressesUpdateRaw` - Updates a customer address by id

### Customers

* `CustomerAddCustomerAddressForm` - Adds a new address to a customer
* `CustomerAddCustomerAddressJSON` - Adds a new address to a customer
* `CustomerAddCustomerAddressRaw` - Adds a new address to a customer
* `CustomerCreateForm` - Creates a new customer
* `CustomerCreateJSON` - Creates a new customer
* `CustomerCreateRaw` - Creates a new customer
* `CustomerGetAll` - Get a list of all customers
* `CustomerGetCustomerAddress` - Queries a single address from a customer
* `CustomerGetCustomerAddresses` - Queries a list of addresses from a customer
* `CustomerGetCustomerOrders` - Queries a list of orders from a customer
* `CustomerGetOne` - Queries a single customer by id
* `CustomerPatchAddress` - Updates one or more fields of an address
* `CustomerUpdateAddressForm` - Updates all fields of an address
* `CustomerUpdateAddressJSON` - Updates all fields of an address
* `CustomerUpdateAddressRaw` - Updates all fields of an address
* `CustomerUpdateForm` - Updates a customer by id
* `CustomerUpdateJSON` - Updates a customer by id
* `CustomerUpdateRaw` - Updates a customer by id
* `SearchSearchForm` - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* `SearchSearchJSON` - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* `SearchSearchRaw` - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### DeliveryNote

* `OrderAPICreateDeliveryNote` - Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

### EnumAPI

* `EnumAPIGetOrderStates` - Returns a list with all defined orderstates
* `EnumAPIGetPaymentTypes` - Returns a list with all defined paymenttypes
* `EnumAPIGetShipmentTypes` - Returns a list with all defined shipmenttypes
* `EnumAPIGetShippingCarriers` - Returns a list with all defined shippingcarriers

### Events

* `EventAPIGetList` - Get a list of all events optionally filtered by date. This request is extra throttled to 2 calls per page per hour.

### Invoice

* `OrderAPICreateInvoice` - Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* `OrderAPIGetInvoiceList` - Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate

### Orders

* `LayoutAPIGetList`
* `OrderAPIAddShipmentForm` - Add a shipment to a given order
* `OrderAPIAddShipmentJSON` - Add a shipment to a given order
* `OrderAPIAddShipmentRaw` - Add a shipment to a given order
* `OrderAPICreateDeliveryNote` - Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* `OrderAPICreateInvoice` - Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* `OrderAPIFind` - Find a single order by its external id (order number)
* `OrderAPIGet` - Get a single order by its internal billbee id. This request is throttled to 6 calls per order in one minute
* `OrderAPIGetByExtRef` - Get a single order by its external order number
* `OrderAPIGetInvoiceList` - Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate
* `OrderAPIGetList` - Get a list of all orders optionally filtered by date
* `OrderAPIGetPatchableFields` - Returns a list of fields which can be updated with the orders/{id} patch call
* `OrderAPIParsePlaceholdersForm` - Parses a text and replaces all placeholders
* `OrderAPIParsePlaceholdersJSON` - Parses a text and replaces all placeholders
* `OrderAPIParsePlaceholdersRaw` - Parses a text and replaces all placeholders
* `OrderAPIPatchOrder` - Updates one or more fields of an order
* `OrderAPIPostNewOrderForm` - Creates a new order in the Billbee account
* `OrderAPIPostNewOrderJSON` - Creates a new order in the Billbee account
* `OrderAPIPostNewOrderRaw` - Creates a new order in the Billbee account
* `OrderAPISendMessageForm` - Sends a message to the buyer
* `OrderAPISendMessageJSON` - Sends a message to the buyer
* `OrderAPISendMessageRaw` - Sends a message to the buyer
* `OrderAPITagsCreateForm` - Attach one or more tags to an order
* `OrderAPITagsCreateJSON` - Attach one or more tags to an order
* `OrderAPITagsCreateRaw` - Attach one or more tags to an order
* `OrderAPITagsUpdateForm` - Sets the tags attached to an order
* `OrderAPITagsUpdateJSON` - Sets the tags attached to an order
* `OrderAPITagsUpdateRaw` - Sets the tags attached to an order
* `OrderAPITriggerEventForm` - Triggers a rule event
* `OrderAPITriggerEventJSON` - Triggers a rule event
* `OrderAPITriggerEventRaw` - Triggers a rule event
* `OrderAPIUpdateStateForm` - Changes the main state of a single order
* `OrderAPIUpdateStateJSON` - Changes the main state of a single order
* `OrderAPIUpdateStateRaw` - Changes the main state of a single order
* `SearchSearchForm` - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* `SearchSearchJSON` - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* `SearchSearchRaw` - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Products

* `ArticleCreateArticle` - Creates a new product
* `ArticleDeleteArticle` - Deletes a product
* `ArticleDeleteImage` - Deletes a single image by id
* `ArticleDeleteImageFromProduct` - Deletes a single image from a product
* `ArticleGetArticle` - Queries a single article by id or by sku
* `ArticleGetCategory` - GEts a list of all defined categories
* `ArticleGetCustomField` - Queries a single custom field
* `ArticleGetCustomFields` - Queries a list of all custom fields
* `ArticleGetImage` - Returns a single image by id
* `ArticleGetImageFromProduct` - Returns a single image by id
* `ArticleGetImages` - Returns a list of all images of the product
* `ArticleGetList` - Get a list of all products
* `ArticleGetPatchableFields` - Returns a list of fields which can be updated with the patch call
* `ArticleGetReservedAmount` - Queries the reserved amount for a single article by id or by sku
* `ArticleGetStocks` - Query all defined stock locations
* `ArticlePatchArticle` - Updates one or more fields of a product
* `ArticlePutImageForm` - Add or update an existing image of a product
* `ArticlePutImageJSON` - Add or update an existing image of a product
* `ArticlePutImageRaw` - Add or update an existing image of a product
* `ArticleUpdateStockCodeForm` - Update the stock code of an article
* `ArticleUpdateStockCodeJSON` - Update the stock code of an article
* `ArticleUpdateStockCodeRaw` - Update the stock code of an article
* `ArticleUpdateStockForm` - Update the stock qty of an article
* `ArticleUpdateStockJSON` - Update the stock qty of an article
* `ArticleUpdateStockRaw` - Update the stock qty of an article
* `SearchSearchForm` - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* `SearchSearchJSON` - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* `SearchSearchRaw` - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Provisioning

* `AutomaticProvisioningCreateAccountForm` - Creates a new Billbee user account with the data passed
* `AutomaticProvisioningCreateAccountJSON` - Creates a new Billbee user account with the data passed
* `AutomaticProvisioningCreateAccountRaw` - Creates a new Billbee user account with the data passed
* `AutomaticProvisioningTermsInfo` - Returns infos about Billbee terms and conditions

### Shipments

* `ShipmentGetList` - Get a list of all shipments optionally filtered by date. All parameters are optional.
* `ShipmentGetPing`
* `ShipmentGetShippingCarrier` - Queries the currently available shipping carriers.
* `ShipmentGetShippingproviders` - Query all defined shipping providers
* `ShipmentPostShipmentForm` - Creates a new shipment with the selected Shippingprovider
* `ShipmentPostShipmentJSON` - Creates a new shipment with the selected Shippingprovider
* `ShipmentPostShipmentRaw` - Creates a new shipment with the selected Shippingprovider
* `ShipmentShipWithLabelForm` - Creates a shipment for an order in billbee
* `ShipmentShipWithLabelJSON` - Creates a shipment for an order in billbee
* `ShipmentShipWithLabelRaw` - Creates a shipment for an order in billbee

### Webhooks

* `WebHookManagementDelete` - Deletes an existing WebHook registration.
* `WebHookManagementDeleteAll` - Deletes all existing WebHook registrations.
* `WebHookManagementGet` - Gets all registered WebHooks for a given user.
* `WebHookManagementGetFilters` - Returns a list of all known filters you can use to register webhooks
* `WebHookManagementLookup` - Looks up a registered WebHook with the given {id} for a given user.
* `WebHookManagementPost` - Registers a new WebHook for a given user.
* `WebHookManagementPut` - Updates an existing WebHook registration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
