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

import org.openapis.openapi.models.operations.CloudStorageApiGetListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudStorageApiGetListResponse res = sdk.cloudStorage.cloudStorageApiGetList();

            if (res.rechnungsdruckWebAppControllersAPIAPIResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCloudStorageAPIModel.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### cloudStorage

* `cloudStorageApiGetList` - Gets a list of all connected cloud storage devices

### customerAddresses

* `customerAddressesCreateForm` - Creates a new customer address
* `customerAddressesCreateJson` - Creates a new customer address
* `customerAddressesCreateRaw` - Creates a new customer address
* `customerAddressesGetAll` - Get a list of all customer addresses
* `customerAddressesGetOne` - Queries a single customer address by id
* `customerAddressesUpdateForm` - Updates a customer address by id
* `customerAddressesUpdateJson` - Updates a customer address by id
* `customerAddressesUpdateRaw` - Updates a customer address by id

### customers

* `customerAddCustomerAddressForm` - Adds a new address to a customer
* `customerAddCustomerAddressJson` - Adds a new address to a customer
* `customerAddCustomerAddressRaw` - Adds a new address to a customer
* `customerCreateForm` - Creates a new customer
* `customerCreateJson` - Creates a new customer
* `customerCreateRaw` - Creates a new customer
* `customerGetAll` - Get a list of all customers
* `customerGetCustomerAddress` - Queries a single address from a customer
* `customerGetCustomerAddresses` - Queries a list of addresses from a customer
* `customerGetCustomerOrders` - Queries a list of orders from a customer
* `customerGetOne` - Queries a single customer by id
* `customerPatchAddress` - Updates one or more fields of an address
* `customerUpdateAddressForm` - Updates all fields of an address
* `customerUpdateAddressJson` - Updates all fields of an address
* `customerUpdateAddressRaw` - Updates all fields of an address
* `customerUpdateForm` - Updates a customer by id
* `customerUpdateJson` - Updates a customer by id
* `customerUpdateRaw` - Updates a customer by id
* `searchSearchForm` - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* `searchSearchJson` - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* `searchSearchRaw` - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### deliveryNote

* `orderApiCreateDeliveryNote` - Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

### enumApi

* `enumApiGetOrderStates` - Returns a list with all defined orderstates
* `enumApiGetPaymentTypes` - Returns a list with all defined paymenttypes
* `enumApiGetShipmentTypes` - Returns a list with all defined shipmenttypes
* `enumApiGetShippingCarriers` - Returns a list with all defined shippingcarriers

### events

* `eventApiGetList` - Get a list of all events optionally filtered by date. This request is extra throttled to 2 calls per page per hour.

### invoice

* `orderApiCreateInvoice` - Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* `orderApiGetInvoiceList` - Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate

### orders

* `layoutApiGetList`
* `orderApiAddShipmentForm` - Add a shipment to a given order
* `orderApiAddShipmentJson` - Add a shipment to a given order
* `orderApiAddShipmentRaw` - Add a shipment to a given order
* `orderApiCreateDeliveryNote` - Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* `orderApiCreateInvoice` - Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
* `orderApiFind` - Find a single order by its external id (order number)
* `orderApiGet` - Get a single order by its internal billbee id. This request is throttled to 6 calls per order in one minute
* `orderApiGetByExtRef` - Get a single order by its external order number
* `orderApiGetInvoiceList` - Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate
* `orderApiGetList` - Get a list of all orders optionally filtered by date
* `orderApiGetPatchableFields` - Returns a list of fields which can be updated with the orders/{id} patch call
* `orderApiParsePlaceholdersForm` - Parses a text and replaces all placeholders
* `orderApiParsePlaceholdersJson` - Parses a text and replaces all placeholders
* `orderApiParsePlaceholdersRaw` - Parses a text and replaces all placeholders
* `orderApiPatchOrder` - Updates one or more fields of an order
* `orderApiPostNewOrderForm` - Creates a new order in the Billbee account
* `orderApiPostNewOrderJson` - Creates a new order in the Billbee account
* `orderApiPostNewOrderRaw` - Creates a new order in the Billbee account
* `orderApiSendMessageForm` - Sends a message to the buyer
* `orderApiSendMessageJson` - Sends a message to the buyer
* `orderApiSendMessageRaw` - Sends a message to the buyer
* `orderApiTagsCreateForm` - Attach one or more tags to an order
* `orderApiTagsCreateJson` - Attach one or more tags to an order
* `orderApiTagsCreateRaw` - Attach one or more tags to an order
* `orderApiTagsUpdateForm` - Sets the tags attached to an order
* `orderApiTagsUpdateJson` - Sets the tags attached to an order
* `orderApiTagsUpdateRaw` - Sets the tags attached to an order
* `orderApiTriggerEventForm` - Triggers a rule event
* `orderApiTriggerEventJson` - Triggers a rule event
* `orderApiTriggerEventRaw` - Triggers a rule event
* `orderApiUpdateStateForm` - Changes the main state of a single order
* `orderApiUpdateStateJson` - Changes the main state of a single order
* `orderApiUpdateStateRaw` - Changes the main state of a single order
* `searchSearchForm` - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* `searchSearchJson` - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* `searchSearchRaw` - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### products

* `articleCreateArticle` - Creates a new product
* `articleDeleteArticle` - Deletes a product
* `articleDeleteImage` - Deletes a single image by id
* `articleDeleteImageFromProduct` - Deletes a single image from a product
* `articleGetArticle` - Queries a single article by id or by sku
* `articleGetCategory` - GEts a list of all defined categories
* `articleGetCustomField` - Queries a single custom field
* `articleGetCustomFields` - Queries a list of all custom fields
* `articleGetImage` - Returns a single image by id
* `articleGetImageFromProduct` - Returns a single image by id
* `articleGetImages` - Returns a list of all images of the product
* `articleGetList` - Get a list of all products
* `articleGetPatchableFields` - Returns a list of fields which can be updated with the patch call
* `articleGetReservedAmount` - Queries the reserved amount for a single article by id or by sku
* `articleGetStocks` - Query all defined stock locations
* `articlePatchArticle` - Updates one or more fields of a product
* `articlePutImageForm` - Add or update an existing image of a product
* `articlePutImageJson` - Add or update an existing image of a product
* `articlePutImageRaw` - Add or update an existing image of a product
* `articleUpdateStockCodeForm` - Update the stock code of an article
* `articleUpdateStockCodeJson` - Update the stock code of an article
* `articleUpdateStockCodeRaw` - Update the stock code of an article
* `articleUpdateStockForm` - Update the stock qty of an article
* `articleUpdateStockJson` - Update the stock qty of an article
* `articleUpdateStockRaw` - Update the stock qty of an article
* `searchSearchForm` - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* `searchSearchJson` - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* `searchSearchRaw` - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### provisioning

* `automaticProvisioningCreateAccountForm` - Creates a new Billbee user account with the data passed
* `automaticProvisioningCreateAccountJson` - Creates a new Billbee user account with the data passed
* `automaticProvisioningCreateAccountRaw` - Creates a new Billbee user account with the data passed
* `automaticProvisioningTermsInfo` - Returns infos about Billbee terms and conditions

### shipments

* `shipmentGetList` - Get a list of all shipments optionally filtered by date. All parameters are optional.
* `shipmentGetPing`
* `shipmentGetShippingCarrier` - Queries the currently available shipping carriers.
* `shipmentGetShippingproviders` - Query all defined shipping providers
* `shipmentPostShipmentForm` - Creates a new shipment with the selected Shippingprovider
* `shipmentPostShipmentJson` - Creates a new shipment with the selected Shippingprovider
* `shipmentPostShipmentRaw` - Creates a new shipment with the selected Shippingprovider
* `shipmentShipWithLabelForm` - Creates a shipment for an order in billbee
* `shipmentShipWithLabelJson` - Creates a shipment for an order in billbee
* `shipmentShipWithLabelRaw` - Creates a shipment for an order in billbee

### webhooks

* `webHookManagementDelete` - Deletes an existing WebHook registration.
* `webHookManagementDeleteAll` - Deletes all existing WebHook registrations.
* `webHookManagementGet` - Gets all registered WebHooks for a given user.
* `webHookManagementGetFilters` - Returns a list of all known filters you can use to register webhooks
* `webHookManagementLookup` - Looks up a registered WebHook with the given {id} for a given user.
* `webHookManagementPost` - Registers a new WebHook for a given user.
* `webHookManagementPut` - Updates an existing WebHook registration.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
