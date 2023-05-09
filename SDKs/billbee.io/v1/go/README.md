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

import(
	"context"
	"log"
	"openapi"
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


### [CloudStorage](docs/cloudstorage/README.md)

* [CloudStorageAPIGetList](docs/cloudstorage/README.md#cloudstorageapigetlist) - Gets a list of all connected cloud storage devices

### [CustomerAddresses](docs/customeraddresses/README.md)

* [CustomerAddressesCreateForm](docs/customeraddresses/README.md#customeraddressescreateform) - Creates a new customer address
* [CustomerAddressesCreateJSON](docs/customeraddresses/README.md#customeraddressescreatejson) - Creates a new customer address
* [CustomerAddressesCreateRaw](docs/customeraddresses/README.md#customeraddressescreateraw) - Creates a new customer address
* [CustomerAddressesGetAll](docs/customeraddresses/README.md#customeraddressesgetall) - Get a list of all customer addresses
* [CustomerAddressesGetOne](docs/customeraddresses/README.md#customeraddressesgetone) - Queries a single customer address by id
* [CustomerAddressesUpdateForm](docs/customeraddresses/README.md#customeraddressesupdateform) - Updates a customer address by id
* [CustomerAddressesUpdateJSON](docs/customeraddresses/README.md#customeraddressesupdatejson) - Updates a customer address by id
* [CustomerAddressesUpdateRaw](docs/customeraddresses/README.md#customeraddressesupdateraw) - Updates a customer address by id

### [Customers](docs/customers/README.md)

* [CustomerAddCustomerAddressForm](docs/customers/README.md#customeraddcustomeraddressform) - Adds a new address to a customer
* [CustomerAddCustomerAddressJSON](docs/customers/README.md#customeraddcustomeraddressjson) - Adds a new address to a customer
* [CustomerAddCustomerAddressRaw](docs/customers/README.md#customeraddcustomeraddressraw) - Adds a new address to a customer
* [CustomerCreateForm](docs/customers/README.md#customercreateform) - Creates a new customer
* [CustomerCreateJSON](docs/customers/README.md#customercreatejson) - Creates a new customer
* [CustomerCreateRaw](docs/customers/README.md#customercreateraw) - Creates a new customer
* [CustomerGetAll](docs/customers/README.md#customergetall) - Get a list of all customers
* [CustomerGetCustomerAddress](docs/customers/README.md#customergetcustomeraddress) - Queries a single address from a customer
* [CustomerGetCustomerAddresses](docs/customers/README.md#customergetcustomeraddresses) - Queries a list of addresses from a customer
* [CustomerGetCustomerOrders](docs/customers/README.md#customergetcustomerorders) - Queries a list of orders from a customer
* [CustomerGetOne](docs/customers/README.md#customergetone) - Queries a single customer by id
* [CustomerPatchAddress](docs/customers/README.md#customerpatchaddress) - Updates one or more fields of an address
* [CustomerUpdateAddressForm](docs/customers/README.md#customerupdateaddressform) - Updates all fields of an address
* [CustomerUpdateAddressJSON](docs/customers/README.md#customerupdateaddressjson) - Updates all fields of an address
* [CustomerUpdateAddressRaw](docs/customers/README.md#customerupdateaddressraw) - Updates all fields of an address
* [CustomerUpdateForm](docs/customers/README.md#customerupdateform) - Updates a customer by id
* [CustomerUpdateJSON](docs/customers/README.md#customerupdatejson) - Updates a customer by id
* [CustomerUpdateRaw](docs/customers/README.md#customerupdateraw) - Updates a customer by id
* [SearchSearchForm](docs/customers/README.md#searchsearchform) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [SearchSearchJSON](docs/customers/README.md#searchsearchjson) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [SearchSearchRaw](docs/customers/README.md#searchsearchraw) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### [DeliveryNote](docs/deliverynote/README.md)

* [OrderAPICreateDeliveryNote](docs/deliverynote/README.md#orderapicreatedeliverynote) - Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

### [EnumAPI](docs/enumapi/README.md)

* [EnumAPIGetOrderStates](docs/enumapi/README.md#enumapigetorderstates) - Returns a list with all defined orderstates
* [EnumAPIGetPaymentTypes](docs/enumapi/README.md#enumapigetpaymenttypes) - Returns a list with all defined paymenttypes
* [EnumAPIGetShipmentTypes](docs/enumapi/README.md#enumapigetshipmenttypes) - Returns a list with all defined shipmenttypes
* [EnumAPIGetShippingCarriers](docs/enumapi/README.md#enumapigetshippingcarriers) - Returns a list with all defined shippingcarriers

### [Events](docs/events/README.md)

* [EventAPIGetList](docs/events/README.md#eventapigetlist) - Get a list of all events optionally filtered by date. This request is extra throttled to 2 calls per page per hour.

### [Invoice](docs/invoice/README.md)

* [OrderAPICreateInvoice](docs/invoice/README.md#orderapicreateinvoice) - Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* [OrderAPIGetInvoiceList](docs/invoice/README.md#orderapigetinvoicelist) - Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate

### [Orders](docs/orders/README.md)

* [LayoutAPIGetList](docs/orders/README.md#layoutapigetlist)
* [OrderAPIAddShipmentForm](docs/orders/README.md#orderapiaddshipmentform) - Add a shipment to a given order
* [OrderAPIAddShipmentJSON](docs/orders/README.md#orderapiaddshipmentjson) - Add a shipment to a given order
* [OrderAPIAddShipmentRaw](docs/orders/README.md#orderapiaddshipmentraw) - Add a shipment to a given order
* [OrderAPICreateDeliveryNote](docs/orders/README.md#orderapicreatedeliverynote) - Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* [OrderAPICreateInvoice](docs/orders/README.md#orderapicreateinvoice) - Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* [~~OrderAPIFind~~](docs/orders/README.md#orderapifind) - Find a single order by its external id (order number) :warning: **Deprecated**
* [OrderAPIGet](docs/orders/README.md#orderapiget) - Get a single order by its internal billbee id. This request is throttled to 6 calls per order in one minute
* [OrderAPIGetByExtRef](docs/orders/README.md#orderapigetbyextref) - Get a single order by its external order number
* [OrderAPIGetInvoiceList](docs/orders/README.md#orderapigetinvoicelist) - Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate
* [OrderAPIGetList](docs/orders/README.md#orderapigetlist) - Get a list of all orders optionally filtered by date
* [OrderAPIGetPatchableFields](docs/orders/README.md#orderapigetpatchablefields) - Returns a list of fields which can be updated with the orders/{id} patch call
* [OrderAPIParsePlaceholdersForm](docs/orders/README.md#orderapiparseplaceholdersform) - Parses a text and replaces all placeholders
* [OrderAPIParsePlaceholdersJSON](docs/orders/README.md#orderapiparseplaceholdersjson) - Parses a text and replaces all placeholders
* [OrderAPIParsePlaceholdersRaw](docs/orders/README.md#orderapiparseplaceholdersraw) - Parses a text and replaces all placeholders
* [OrderAPIPatchOrder](docs/orders/README.md#orderapipatchorder) - Updates one or more fields of an order
* [OrderAPIPostNewOrderForm](docs/orders/README.md#orderapipostneworderform) - Creates a new order in the Billbee account
* [OrderAPIPostNewOrderJSON](docs/orders/README.md#orderapipostneworderjson) - Creates a new order in the Billbee account
* [OrderAPIPostNewOrderRaw](docs/orders/README.md#orderapipostneworderraw) - Creates a new order in the Billbee account
* [OrderAPISendMessageForm](docs/orders/README.md#orderapisendmessageform) - Sends a message to the buyer
* [OrderAPISendMessageJSON](docs/orders/README.md#orderapisendmessagejson) - Sends a message to the buyer
* [OrderAPISendMessageRaw](docs/orders/README.md#orderapisendmessageraw) - Sends a message to the buyer
* [OrderAPITagsCreateForm](docs/orders/README.md#orderapitagscreateform) - Attach one or more tags to an order
* [OrderAPITagsCreateJSON](docs/orders/README.md#orderapitagscreatejson) - Attach one or more tags to an order
* [OrderAPITagsCreateRaw](docs/orders/README.md#orderapitagscreateraw) - Attach one or more tags to an order
* [OrderAPITagsUpdateForm](docs/orders/README.md#orderapitagsupdateform) - Sets the tags attached to an order
* [OrderAPITagsUpdateJSON](docs/orders/README.md#orderapitagsupdatejson) - Sets the tags attached to an order
* [OrderAPITagsUpdateRaw](docs/orders/README.md#orderapitagsupdateraw) - Sets the tags attached to an order
* [OrderAPITriggerEventForm](docs/orders/README.md#orderapitriggereventform) - Triggers a rule event
* [OrderAPITriggerEventJSON](docs/orders/README.md#orderapitriggereventjson) - Triggers a rule event
* [OrderAPITriggerEventRaw](docs/orders/README.md#orderapitriggereventraw) - Triggers a rule event
* [OrderAPIUpdateStateForm](docs/orders/README.md#orderapiupdatestateform) - Changes the main state of a single order
* [OrderAPIUpdateStateJSON](docs/orders/README.md#orderapiupdatestatejson) - Changes the main state of a single order
* [OrderAPIUpdateStateRaw](docs/orders/README.md#orderapiupdatestateraw) - Changes the main state of a single order
* [SearchSearchForm](docs/orders/README.md#searchsearchform) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [SearchSearchJSON](docs/orders/README.md#searchsearchjson) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [SearchSearchRaw](docs/orders/README.md#searchsearchraw) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### [Products](docs/products/README.md)

* [ArticleCreateArticle](docs/products/README.md#articlecreatearticle) - Creates a new product
* [ArticleDeleteArticle](docs/products/README.md#articledeletearticle) - Deletes a product
* [ArticleDeleteImage](docs/products/README.md#articledeleteimage) - Deletes a single image by id
* [ArticleDeleteImageFromProduct](docs/products/README.md#articledeleteimagefromproduct) - Deletes a single image from a product
* [ArticleGetArticle](docs/products/README.md#articlegetarticle) - Queries a single article by id or by sku
* [ArticleGetCategory](docs/products/README.md#articlegetcategory) - GEts a list of all defined categories
* [ArticleGetCustomField](docs/products/README.md#articlegetcustomfield) - Queries a single custom field
* [ArticleGetCustomFields](docs/products/README.md#articlegetcustomfields) - Queries a list of all custom fields
* [ArticleGetImage](docs/products/README.md#articlegetimage) - Returns a single image by id
* [ArticleGetImageFromProduct](docs/products/README.md#articlegetimagefromproduct) - Returns a single image by id
* [ArticleGetImages](docs/products/README.md#articlegetimages) - Returns a list of all images of the product
* [ArticleGetList](docs/products/README.md#articlegetlist) - Get a list of all products
* [ArticleGetPatchableFields](docs/products/README.md#articlegetpatchablefields) - Returns a list of fields which can be updated with the patch call
* [ArticleGetReservedAmount](docs/products/README.md#articlegetreservedamount) - Queries the reserved amount for a single article by id or by sku
* [ArticleGetStocks](docs/products/README.md#articlegetstocks) - Query all defined stock locations
* [ArticlePatchArticle](docs/products/README.md#articlepatcharticle) - Updates one or more fields of a product
* [ArticlePutImageForm](docs/products/README.md#articleputimageform) - Add or update an existing image of a product
* [ArticlePutImageJSON](docs/products/README.md#articleputimagejson) - Add or update an existing image of a product
* [ArticlePutImageRaw](docs/products/README.md#articleputimageraw) - Add or update an existing image of a product
* [ArticleUpdateStockCodeForm](docs/products/README.md#articleupdatestockcodeform) - Update the stock code of an article
* [ArticleUpdateStockCodeJSON](docs/products/README.md#articleupdatestockcodejson) - Update the stock code of an article
* [ArticleUpdateStockCodeRaw](docs/products/README.md#articleupdatestockcoderaw) - Update the stock code of an article
* [ArticleUpdateStockForm](docs/products/README.md#articleupdatestockform) - Update the stock qty of an article
* [ArticleUpdateStockJSON](docs/products/README.md#articleupdatestockjson) - Update the stock qty of an article
* [ArticleUpdateStockRaw](docs/products/README.md#articleupdatestockraw) - Update the stock qty of an article
* [SearchSearchForm](docs/products/README.md#searchsearchform) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [SearchSearchJSON](docs/products/README.md#searchsearchjson) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [SearchSearchRaw](docs/products/README.md#searchsearchraw) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### [Provisioning](docs/provisioning/README.md)

* [AutomaticProvisioningCreateAccountForm](docs/provisioning/README.md#automaticprovisioningcreateaccountform) - Creates a new Billbee user account with the data passed
* [AutomaticProvisioningCreateAccountJSON](docs/provisioning/README.md#automaticprovisioningcreateaccountjson) - Creates a new Billbee user account with the data passed
* [AutomaticProvisioningCreateAccountRaw](docs/provisioning/README.md#automaticprovisioningcreateaccountraw) - Creates a new Billbee user account with the data passed
* [AutomaticProvisioningTermsInfo](docs/provisioning/README.md#automaticprovisioningtermsinfo) - Returns infos about Billbee terms and conditions

### [Shipments](docs/shipments/README.md)

* [ShipmentGetList](docs/shipments/README.md#shipmentgetlist) - Get a list of all shipments optionally filtered by date. All parameters are optional.
* [ShipmentGetPing](docs/shipments/README.md#shipmentgetping)
* [ShipmentGetShippingCarrier](docs/shipments/README.md#shipmentgetshippingcarrier) - Queries the currently available shipping carriers.
* [ShipmentGetShippingproviders](docs/shipments/README.md#shipmentgetshippingproviders) - Query all defined shipping providers
* [ShipmentPostShipmentForm](docs/shipments/README.md#shipmentpostshipmentform) - Creates a new shipment with the selected Shippingprovider
* [ShipmentPostShipmentJSON](docs/shipments/README.md#shipmentpostshipmentjson) - Creates a new shipment with the selected Shippingprovider
* [ShipmentPostShipmentRaw](docs/shipments/README.md#shipmentpostshipmentraw) - Creates a new shipment with the selected Shippingprovider
* [ShipmentShipWithLabelForm](docs/shipments/README.md#shipmentshipwithlabelform) - Creates a shipment for an order in billbee
* [ShipmentShipWithLabelJSON](docs/shipments/README.md#shipmentshipwithlabeljson) - Creates a shipment for an order in billbee
* [ShipmentShipWithLabelRaw](docs/shipments/README.md#shipmentshipwithlabelraw) - Creates a shipment for an order in billbee

### [Webhooks](docs/webhooks/README.md)

* [WebHookManagementDelete](docs/webhooks/README.md#webhookmanagementdelete) - Deletes an existing WebHook registration.
* [WebHookManagementDeleteAll](docs/webhooks/README.md#webhookmanagementdeleteall) - Deletes all existing WebHook registrations.
* [WebHookManagementGet](docs/webhooks/README.md#webhookmanagementget) - Gets all registered WebHooks for a given user.
* [WebHookManagementGetFilters](docs/webhooks/README.md#webhookmanagementgetfilters) - Returns a list of all known filters you can use to register webhooks
* [WebHookManagementLookup](docs/webhooks/README.md#webhookmanagementlookup) - Looks up a registered WebHook with the given {id} for a given user.
* [WebHookManagementPost](docs/webhooks/README.md#webhookmanagementpost) - Registers a new WebHook for a given user.
* [WebHookManagementPut](docs/webhooks/README.md#webhookmanagementput) - Updates an existing WebHook registration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
