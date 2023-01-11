# openapisdk

<!-- Start SDK Installation -->
## SDK Installation

### Gradle

```groovy
implementation 'openapisdk:openapisdk:0.0.1'
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```java
package hello.world;

import openapisdk.SDK;
import openapisdk.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK.Builder builder = SDK.builder();

            SDK sdk = builder.build();

            CompanyAlternativeSearchRequest req = new CompanyAlternativeSearchRequest() {{
                security = new CompanyAlternativeSearchSecurity() {{
                    userKey = new SchemeUserKey() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new CompanyAlternativeSearchPathParams() {{
                    country = "quia";
                }};
                request = new CompanyAlternativeSearchRequestBody() {{
                    address = "velit";
                    name = "sed";
                    number = "occaecati";
                    phone = "quidem";
                    url = "maxime";
                    vat = "eos";
                }};
            }};

            CompanyAlternativeSearchResponse res = sdk.v1Company.companyAlternativeSearch(req);

            if (res.companyAlternativeSearch200ApplicationJSONAnies.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### v1-company

* `companyAlternativeSearch` - Retrieves a list of companies from the KYC API company index
* `companyAnnouncement` - Retrieves announcement data
* `companyDeepsearchIsin` - Retrieves a list of stock exchange listings
* `companyDeepsearchLei` - Retrieves a list of companies
* `companyDeepsearchName` - Retrieves a list of companies from the official business register
* `companyDeepsearchNumber` - Retrieves a list of companies from the official business register
* `companyIdAnnouncements` - Retrieves company announcements
* `companyIdDataset` - Retrieves company details
* `companyIdSuper` - Retrieves structured data extracted from a company document
* `companyMonitorChangeTypesList` - Get available ChangeTypes
* `companyMonitorId` - Get monitor status for specific company id
* `companyMonitorList` - Retrieves a list of registered monitors
* `companyMonitorRegister` - Register a Company for monitoring
* `companyMonitorUnregister` - Deactivates an active notification
* `companyNotificationId` - Retrieves a list of registered notifications
* `companyNotificationList` - Retrieves a list of registered notifications
* `companyNotificationRegister` - Creates a new notification
* `companyNotificationUnregister` - Unregister a company from Monitoring
* `companySearchName` - Retrieves a list of companies from the KYC API company index
* `companySearchNumber` - Retrieves a list of companies from the KYC API company index

### v1-ein-verification

* `einVerificationBasic` - Verifies an EIN number
* `einVerificationComprehensive` - Verifies EIN number and retrieves company data
* `einVerificationLookup` - Retrieves a list of EIN numbers

### v1-iban-verification

* `ibanBasic` - Checks validity of an IBAN number
* `ibanComprehensive` - Checks validity of an IBAN number

### v1-nif-verification

* `nifBasic` - Verifies a NIF number
* `nifComprehensive` - Verifies a NIF number and retrieves company data

### v1-pepsanction

* `pepMonitorList` - Retrieves a list of monitor entries
* `pepMonitorUnregister` - Deactive a pep sanction monitor
* `pepMonitorUpdate` - Update details of active Pep Sanction monitor
* `pepOrder` - Orders a new Pep Sanction Check Report
* `pepRetrieve` - Returns a json or pdf report

### v1-product

* `productAvailability` - Retrieves a document availability result
* `productCatalog` - Returns a catalog of products
* `productNotifier` - Returns metadata for a notifier
* `productNotifierCreate` - Creates a notifier for an order
* `productOrder` - Places a product order
* `productOrderConcierge` - Places a concierge order
* `productOrderUbo` - Places a UBO order
* `productOrderWithOption` - Places a product order
* `productRetrieve` - Retrieves the result of an order
* `productSearch` - Returns a list of products
* `productStatus` - Returns metadata for a order
* `productUpdateAction` - Updates metadata of an order

### v1-system

* `healthCheck` - Returns the health information for the official business registers based on usage.
* `systemCountries` - Returns a list of countries
* `systemPricelist` - Returns a list of products with prices

### v1-tin-verification

* `tinVerificationBasicCheck` - Verifies a TIN number
* `tinVerificationComprehensiveCheck` - EIN Name Lookup with TIN number and retrieves company data
* `tinVerificationNameLookup` - EIN Name Lookup with TIN number

### v1-vat-verification

* `vatBasic` - Returns a verification result
* `vatComprehensive` - Returns a verification result and company data
* `vatLevelTwo` - Returns a level two verification result
* `vatLookup` - Returns a list of vat numbers with additional data

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
