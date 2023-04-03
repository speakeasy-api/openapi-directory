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

import org.openapis.openapi.models.operations.CompanyAlternativeSearchSecurity;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchRequestBody;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchRequest;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyAlternativeSearchRequest req = new CompanyAlternativeSearchRequest() {{
                requestBody = new CompanyAlternativeSearchRequestBody() {{
                    address = "5786 Little Streets";
                    name = "vel";
                    number = "error";
                    phone = "1-542-909-2347 x8545";
                    url = "nisi";
                    vat = "recusandae";
                }};
                country = "temporibus";
            }}            

            CompanyAlternativeSearchResponse res = sdk.v1Company.companyAlternativeSearch(req, new CompanyAlternativeSearchSecurity() {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companyAlternativeSearch200ApplicationJSONObjects.isPresent()) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### v1Company

* `companyAlternativeSearch` - Retrieves a list of companies from the KYC API company index
* `companyAnnouncement` - Retrieves announcement data
* `companyDeepsearchISIN` - Retrieves a list of stock exchange listings
* `companyDeepsearchLEI` - Retrieves a list of companies
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

### v1EinVerification

* `einVerificationBasic` - Verifies an EIN number
* `einVerificationComprehensive` - Verifies EIN number and retrieves company data
* `einVerificationLookup` - Retrieves a list of EIN numbers

### v1IbanVerification

* `ibanBasic` - Checks validity of an IBAN number
* `ibanComprehensive` - Checks validity of an IBAN number

### v1NifVerification

* `nifBasic` - Verifies a NIF number
* `nifComprehensive` - Verifies a NIF number and retrieves company data

### v1Pepsanction

* `pepMonitorList` - Retrieves a list of monitor entries
* `pepMonitorUnregister` - Deactive a pep sanction monitor
* `pepMonitorUpdate` - Update details of active Pep Sanction monitor
* `pepOrder` - Orders a new Pep Sanction Check Report
* `pepRetrieve` - Returns a json or pdf report

### v1Product

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

### v1System

* `healthCheck` - Returns the health information for the official business registers based on usage.
* `systemCountries` - Returns a list of countries
* `systemPricelist` - Returns a list of products with prices

### v1TinVerification

* `tinVerificationBasicCheck` - Verifies a TIN number
* `tinVerificationComprehensiveCheck` - EIN Name Lookup with TIN number and retrieves company data
* `tinVerificationNameLookup` - EIN Name Lookup with TIN number

### v1VatVerification

* `vatBasic` - Returns a verification result
* `vatComprehensive` - Returns a verification result and company data
* `vatLevelTwo` - Returns a level two verification result
* `vatLookup` - Returns a list of vat numbers with additional data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
