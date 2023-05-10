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

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->cloudStorage->cloudStorageApiGetList();

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCloudStorageAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [cloudStorage](docs/cloudstorage/README.md)

* [cloudStorageApiGetList](docs/cloudstorage/README.md#cloudstorageapigetlist) - Gets a list of all connected cloud storage devices

### [customerAddresses](docs/customeraddresses/README.md)

* [customerAddressesCreateForm](docs/customeraddresses/README.md#customeraddressescreateform) - Creates a new customer address
* [customerAddressesCreateJson](docs/customeraddresses/README.md#customeraddressescreatejson) - Creates a new customer address
* [customerAddressesCreateRaw](docs/customeraddresses/README.md#customeraddressescreateraw) - Creates a new customer address
* [customerAddressesGetAll](docs/customeraddresses/README.md#customeraddressesgetall) - Get a list of all customer addresses
* [customerAddressesGetOne](docs/customeraddresses/README.md#customeraddressesgetone) - Queries a single customer address by id
* [customerAddressesUpdateForm](docs/customeraddresses/README.md#customeraddressesupdateform) - Updates a customer address by id
* [customerAddressesUpdateJson](docs/customeraddresses/README.md#customeraddressesupdatejson) - Updates a customer address by id
* [customerAddressesUpdateRaw](docs/customeraddresses/README.md#customeraddressesupdateraw) - Updates a customer address by id

### [customers](docs/customers/README.md)

* [customerAddCustomerAddressForm](docs/customers/README.md#customeraddcustomeraddressform) - Adds a new address to a customer
* [customerAddCustomerAddressJson](docs/customers/README.md#customeraddcustomeraddressjson) - Adds a new address to a customer
* [customerAddCustomerAddressRaw](docs/customers/README.md#customeraddcustomeraddressraw) - Adds a new address to a customer
* [customerCreateForm](docs/customers/README.md#customercreateform) - Creates a new customer
* [customerCreateJson](docs/customers/README.md#customercreatejson) - Creates a new customer
* [customerCreateRaw](docs/customers/README.md#customercreateraw) - Creates a new customer
* [customerGetAll](docs/customers/README.md#customergetall) - Get a list of all customers
* [customerGetCustomerAddress](docs/customers/README.md#customergetcustomeraddress) - Queries a single address from a customer
* [customerGetCustomerAddresses](docs/customers/README.md#customergetcustomeraddresses) - Queries a list of addresses from a customer
* [customerGetCustomerOrders](docs/customers/README.md#customergetcustomerorders) - Queries a list of orders from a customer
* [customerGetOne](docs/customers/README.md#customergetone) - Queries a single customer by id
* [customerPatchAddress](docs/customers/README.md#customerpatchaddress) - Updates one or more fields of an address
* [customerUpdateAddressForm](docs/customers/README.md#customerupdateaddressform) - Updates all fields of an address
* [customerUpdateAddressJson](docs/customers/README.md#customerupdateaddressjson) - Updates all fields of an address
* [customerUpdateAddressRaw](docs/customers/README.md#customerupdateaddressraw) - Updates all fields of an address
* [customerUpdateForm](docs/customers/README.md#customerupdateform) - Updates a customer by id
* [customerUpdateJson](docs/customers/README.md#customerupdatejson) - Updates a customer by id
* [customerUpdateRaw](docs/customers/README.md#customerupdateraw) - Updates a customer by id
* [searchSearchForm](docs/customers/README.md#searchsearchform) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [searchSearchJson](docs/customers/README.md#searchsearchjson) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [searchSearchRaw](docs/customers/README.md#searchsearchraw) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### [deliveryNote](docs/deliverynote/README.md)

* [orderApiCreateDeliveryNote](docs/deliverynote/README.md#orderapicreatedeliverynote) - Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

### [enumApi](docs/enumapi/README.md)

* [enumApiGetOrderStates](docs/enumapi/README.md#enumapigetorderstates) - Returns a list with all defined orderstates
* [enumApiGetPaymentTypes](docs/enumapi/README.md#enumapigetpaymenttypes) - Returns a list with all defined paymenttypes
* [enumApiGetShipmentTypes](docs/enumapi/README.md#enumapigetshipmenttypes) - Returns a list with all defined shipmenttypes
* [enumApiGetShippingCarriers](docs/enumapi/README.md#enumapigetshippingcarriers) - Returns a list with all defined shippingcarriers

### [events](docs/events/README.md)

* [eventApiGetList](docs/events/README.md#eventapigetlist) - Get a list of all events optionally filtered by date. This request is extra throttled to 2 calls per page per hour.

### [invoice](docs/invoice/README.md)

* [orderApiCreateInvoice](docs/invoice/README.md#orderapicreateinvoice) - Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* [orderApiGetInvoiceList](docs/invoice/README.md#orderapigetinvoicelist) - Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate

### [orders](docs/orders/README.md)

* [layoutApiGetList](docs/orders/README.md#layoutapigetlist)
* [orderApiAddShipmentForm](docs/orders/README.md#orderapiaddshipmentform) - Add a shipment to a given order
* [orderApiAddShipmentJson](docs/orders/README.md#orderapiaddshipmentjson) - Add a shipment to a given order
* [orderApiAddShipmentRaw](docs/orders/README.md#orderapiaddshipmentraw) - Add a shipment to a given order
* [orderApiCreateDeliveryNote](docs/orders/README.md#orderapicreatedeliverynote) - Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* [orderApiCreateInvoice](docs/orders/README.md#orderapicreateinvoice) - Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* [~~orderApiFind~~](docs/orders/README.md#orderapifind) - Find a single order by its external id (order number) :warning: **Deprecated**
* [orderApiGet](docs/orders/README.md#orderapiget) - Get a single order by its internal billbee id. This request is throttled to 6 calls per order in one minute
* [orderApiGetByExtRef](docs/orders/README.md#orderapigetbyextref) - Get a single order by its external order number
* [orderApiGetInvoiceList](docs/orders/README.md#orderapigetinvoicelist) - Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate
* [orderApiGetList](docs/orders/README.md#orderapigetlist) - Get a list of all orders optionally filtered by date
* [orderApiGetPatchableFields](docs/orders/README.md#orderapigetpatchablefields) - Returns a list of fields which can be updated with the orders/{id} patch call
* [orderApiParsePlaceholdersForm](docs/orders/README.md#orderapiparseplaceholdersform) - Parses a text and replaces all placeholders
* [orderApiParsePlaceholdersJson](docs/orders/README.md#orderapiparseplaceholdersjson) - Parses a text and replaces all placeholders
* [orderApiParsePlaceholdersRaw](docs/orders/README.md#orderapiparseplaceholdersraw) - Parses a text and replaces all placeholders
* [orderApiPatchOrder](docs/orders/README.md#orderapipatchorder) - Updates one or more fields of an order
* [orderApiPostNewOrderForm](docs/orders/README.md#orderapipostneworderform) - Creates a new order in the Billbee account
* [orderApiPostNewOrderJson](docs/orders/README.md#orderapipostneworderjson) - Creates a new order in the Billbee account
* [orderApiPostNewOrderRaw](docs/orders/README.md#orderapipostneworderraw) - Creates a new order in the Billbee account
* [orderApiSendMessageForm](docs/orders/README.md#orderapisendmessageform) - Sends a message to the buyer
* [orderApiSendMessageJson](docs/orders/README.md#orderapisendmessagejson) - Sends a message to the buyer
* [orderApiSendMessageRaw](docs/orders/README.md#orderapisendmessageraw) - Sends a message to the buyer
* [orderApiTagsCreateForm](docs/orders/README.md#orderapitagscreateform) - Attach one or more tags to an order
* [orderApiTagsCreateJson](docs/orders/README.md#orderapitagscreatejson) - Attach one or more tags to an order
* [orderApiTagsCreateRaw](docs/orders/README.md#orderapitagscreateraw) - Attach one or more tags to an order
* [orderApiTagsUpdateForm](docs/orders/README.md#orderapitagsupdateform) - Sets the tags attached to an order
* [orderApiTagsUpdateJson](docs/orders/README.md#orderapitagsupdatejson) - Sets the tags attached to an order
* [orderApiTagsUpdateRaw](docs/orders/README.md#orderapitagsupdateraw) - Sets the tags attached to an order
* [orderApiTriggerEventForm](docs/orders/README.md#orderapitriggereventform) - Triggers a rule event
* [orderApiTriggerEventJson](docs/orders/README.md#orderapitriggereventjson) - Triggers a rule event
* [orderApiTriggerEventRaw](docs/orders/README.md#orderapitriggereventraw) - Triggers a rule event
* [orderApiUpdateStateForm](docs/orders/README.md#orderapiupdatestateform) - Changes the main state of a single order
* [orderApiUpdateStateJson](docs/orders/README.md#orderapiupdatestatejson) - Changes the main state of a single order
* [orderApiUpdateStateRaw](docs/orders/README.md#orderapiupdatestateraw) - Changes the main state of a single order
* [searchSearchForm](docs/orders/README.md#searchsearchform) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [searchSearchJson](docs/orders/README.md#searchsearchjson) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [searchSearchRaw](docs/orders/README.md#searchsearchraw) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### [products](docs/products/README.md)

* [articleCreateArticle](docs/products/README.md#articlecreatearticle) - Creates a new product
* [articleDeleteArticle](docs/products/README.md#articledeletearticle) - Deletes a product
* [articleDeleteImage](docs/products/README.md#articledeleteimage) - Deletes a single image by id
* [articleDeleteImageFromProduct](docs/products/README.md#articledeleteimagefromproduct) - Deletes a single image from a product
* [articleGetArticle](docs/products/README.md#articlegetarticle) - Queries a single article by id or by sku
* [articleGetCategory](docs/products/README.md#articlegetcategory) - GEts a list of all defined categories
* [articleGetCustomField](docs/products/README.md#articlegetcustomfield) - Queries a single custom field
* [articleGetCustomFields](docs/products/README.md#articlegetcustomfields) - Queries a list of all custom fields
* [articleGetImage](docs/products/README.md#articlegetimage) - Returns a single image by id
* [articleGetImageFromProduct](docs/products/README.md#articlegetimagefromproduct) - Returns a single image by id
* [articleGetImages](docs/products/README.md#articlegetimages) - Returns a list of all images of the product
* [articleGetList](docs/products/README.md#articlegetlist) - Get a list of all products
* [articleGetPatchableFields](docs/products/README.md#articlegetpatchablefields) - Returns a list of fields which can be updated with the patch call
* [articleGetReservedAmount](docs/products/README.md#articlegetreservedamount) - Queries the reserved amount for a single article by id or by sku
* [articleGetStocks](docs/products/README.md#articlegetstocks) - Query all defined stock locations
* [articlePatchArticle](docs/products/README.md#articlepatcharticle) - Updates one or more fields of a product
* [articlePutImageForm](docs/products/README.md#articleputimageform) - Add or update an existing image of a product
* [articlePutImageJson](docs/products/README.md#articleputimagejson) - Add or update an existing image of a product
* [articlePutImageRaw](docs/products/README.md#articleputimageraw) - Add or update an existing image of a product
* [articleUpdateStockCodeForm](docs/products/README.md#articleupdatestockcodeform) - Update the stock code of an article
* [articleUpdateStockCodeJson](docs/products/README.md#articleupdatestockcodejson) - Update the stock code of an article
* [articleUpdateStockCodeRaw](docs/products/README.md#articleupdatestockcoderaw) - Update the stock code of an article
* [articleUpdateStockForm](docs/products/README.md#articleupdatestockform) - Update the stock qty of an article
* [articleUpdateStockJson](docs/products/README.md#articleupdatestockjson) - Update the stock qty of an article
* [articleUpdateStockRaw](docs/products/README.md#articleupdatestockraw) - Update the stock qty of an article
* [searchSearchForm](docs/products/README.md#searchsearchform) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [searchSearchJson](docs/products/README.md#searchsearchjson) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [searchSearchRaw](docs/products/README.md#searchsearchraw) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### [provisioning](docs/provisioning/README.md)

* [automaticProvisioningCreateAccountForm](docs/provisioning/README.md#automaticprovisioningcreateaccountform) - Creates a new Billbee user account with the data passed
* [automaticProvisioningCreateAccountJson](docs/provisioning/README.md#automaticprovisioningcreateaccountjson) - Creates a new Billbee user account with the data passed
* [automaticProvisioningCreateAccountRaw](docs/provisioning/README.md#automaticprovisioningcreateaccountraw) - Creates a new Billbee user account with the data passed
* [automaticProvisioningTermsInfo](docs/provisioning/README.md#automaticprovisioningtermsinfo) - Returns infos about Billbee terms and conditions

### [shipments](docs/shipments/README.md)

* [shipmentGetList](docs/shipments/README.md#shipmentgetlist) - Get a list of all shipments optionally filtered by date. All parameters are optional.
* [shipmentGetPing](docs/shipments/README.md#shipmentgetping)
* [shipmentGetShippingCarrier](docs/shipments/README.md#shipmentgetshippingcarrier) - Queries the currently available shipping carriers.
* [shipmentGetShippingproviders](docs/shipments/README.md#shipmentgetshippingproviders) - Query all defined shipping providers
* [shipmentPostShipmentForm](docs/shipments/README.md#shipmentpostshipmentform) - Creates a new shipment with the selected Shippingprovider
* [shipmentPostShipmentJson](docs/shipments/README.md#shipmentpostshipmentjson) - Creates a new shipment with the selected Shippingprovider
* [shipmentPostShipmentRaw](docs/shipments/README.md#shipmentpostshipmentraw) - Creates a new shipment with the selected Shippingprovider
* [shipmentShipWithLabelForm](docs/shipments/README.md#shipmentshipwithlabelform) - Creates a shipment for an order in billbee
* [shipmentShipWithLabelJson](docs/shipments/README.md#shipmentshipwithlabeljson) - Creates a shipment for an order in billbee
* [shipmentShipWithLabelRaw](docs/shipments/README.md#shipmentshipwithlabelraw) - Creates a shipment for an order in billbee

### [webhooks](docs/webhooks/README.md)

* [webHookManagementDelete](docs/webhooks/README.md#webhookmanagementdelete) - Deletes an existing WebHook registration.
* [webHookManagementDeleteAll](docs/webhooks/README.md#webhookmanagementdeleteall) - Deletes all existing WebHook registrations.
* [webHookManagementGet](docs/webhooks/README.md#webhookmanagementget) - Gets all registered WebHooks for a given user.
* [webHookManagementGetFilters](docs/webhooks/README.md#webhookmanagementgetfilters) - Returns a list of all known filters you can use to register webhooks
* [webHookManagementLookup](docs/webhooks/README.md#webhookmanagementlookup) - Looks up a registered WebHook with the given {id} for a given user.
* [webHookManagementPost](docs/webhooks/README.md#webhookmanagementpost) - Registers a new WebHook for a given user.
* [webHookManagementPut](docs/webhooks/README.md#webhookmanagementput) - Updates an existing WebHook registration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
