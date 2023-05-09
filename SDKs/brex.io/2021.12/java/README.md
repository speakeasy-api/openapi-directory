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
import org.openapis.openapi.models.operations.CompanyAlternativeSearchRequest;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchRequestBody;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchResponse;
import org.openapis.openapi.models.operations.CompanyAlternativeSearchSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CompanyAlternativeSearchRequest req = new CompanyAlternativeSearchRequest("corrupti") {{
                requestBody = new CompanyAlternativeSearchRequestBody() {{
                    address = "7868 Stamm Junctions";
                    name = "Doug Hoppe";
                    number = "debitis";
                    phone = "923-578-5453";
                    url = "recusandae";
                    vat = "temporibus";
                }};;
            }};            

            CompanyAlternativeSearchResponse res = sdk.v1Company.companyAlternativeSearch(req, new CompanyAlternativeSearchSecurity("ab") {{
                userKey = "YOUR_API_KEY_HERE";
            }});

            if (res.companyAlternativeSearch200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [v1Company](docs/v1company/README.md)

* [companyAlternativeSearch](docs/v1company/README.md#companyalternativesearch) - Retrieves a list of companies from the KYC API company index
* [companyAnnouncement](docs/v1company/README.md#companyannouncement) - Retrieves announcement data
* [companyDeepsearchISIN](docs/v1company/README.md#companydeepsearchisin) - Retrieves a list of stock exchange listings
* [companyDeepsearchLEI](docs/v1company/README.md#companydeepsearchlei) - Retrieves a list of companies
* [companyDeepsearchName](docs/v1company/README.md#companydeepsearchname) - Retrieves a list of companies from the official business register
* [companyDeepsearchNumber](docs/v1company/README.md#companydeepsearchnumber) - Retrieves a list of companies from the official business register
* [companyIdAnnouncements](docs/v1company/README.md#companyidannouncements) - Retrieves company announcements
* [companyIdDataset](docs/v1company/README.md#companyiddataset) - Retrieves company details
* [companyIdSuper](docs/v1company/README.md#companyidsuper) - Retrieves structured data extracted from a company document
* [companyMonitorChangeTypesList](docs/v1company/README.md#companymonitorchangetypeslist) - Get available ChangeTypes
* [companyMonitorId](docs/v1company/README.md#companymonitorid) - Get monitor status for specific company id
* [companyMonitorList](docs/v1company/README.md#companymonitorlist) - Retrieves a list of registered monitors
* [companyMonitorRegister](docs/v1company/README.md#companymonitorregister) - Register a Company for monitoring
* [companyMonitorUnregister](docs/v1company/README.md#companymonitorunregister) - Deactivates an active notification
* [companyNotificationId](docs/v1company/README.md#companynotificationid) - Retrieves a list of registered notifications
* [companyNotificationList](docs/v1company/README.md#companynotificationlist) - Retrieves a list of registered notifications
* [companyNotificationRegister](docs/v1company/README.md#companynotificationregister) - Creates a new notification
* [companyNotificationUnregister](docs/v1company/README.md#companynotificationunregister) - Unregister a company from Monitoring
* [companySearchName](docs/v1company/README.md#companysearchname) - Retrieves a list of companies from the KYC API company index
* [companySearchNumber](docs/v1company/README.md#companysearchnumber) - Retrieves a list of companies from the KYC API company index

### [v1EinVerification](docs/v1einverification/README.md)

* [einVerificationBasic](docs/v1einverification/README.md#einverificationbasic) - Verifies an EIN number
* [einVerificationComprehensive](docs/v1einverification/README.md#einverificationcomprehensive) - Verifies EIN number and retrieves company data
* [einVerificationLookup](docs/v1einverification/README.md#einverificationlookup) - Retrieves a list of EIN numbers

### [v1IbanVerification](docs/v1ibanverification/README.md)

* [ibanBasic](docs/v1ibanverification/README.md#ibanbasic) - Checks validity of an IBAN number
* [ibanComprehensive](docs/v1ibanverification/README.md#ibancomprehensive) - Checks validity of an IBAN number

### [v1NifVerification](docs/v1nifverification/README.md)

* [nifBasic](docs/v1nifverification/README.md#nifbasic) - Verifies a NIF number
* [nifComprehensive](docs/v1nifverification/README.md#nifcomprehensive) - Verifies a NIF number and retrieves company data

### [v1Pepsanction](docs/v1pepsanction/README.md)

* [pepMonitorList](docs/v1pepsanction/README.md#pepmonitorlist) - Retrieves a list of monitor entries
* [pepMonitorUnregister](docs/v1pepsanction/README.md#pepmonitorunregister) - Deactive a pep sanction monitor
* [pepMonitorUpdate](docs/v1pepsanction/README.md#pepmonitorupdate) - Update details of active Pep Sanction monitor
* [pepOrder](docs/v1pepsanction/README.md#peporder) - Orders a new Pep Sanction Check Report
* [pepRetrieve](docs/v1pepsanction/README.md#pepretrieve) - Returns a json or pdf report

### [v1Product](docs/v1product/README.md)

* [productAvailability](docs/v1product/README.md#productavailability) - Retrieves a document availability result
* [productCatalog](docs/v1product/README.md#productcatalog) - Returns a catalog of products
* [productNotifier](docs/v1product/README.md#productnotifier) - Returns metadata for a notifier
* [productNotifierCreate](docs/v1product/README.md#productnotifiercreate) - Creates a notifier for an order
* [productOrder](docs/v1product/README.md#productorder) - Places a product order
* [productOrderConcierge](docs/v1product/README.md#productorderconcierge) - Places a concierge order
* [productOrderUbo](docs/v1product/README.md#productorderubo) - Places a UBO order
* [productOrderWithOption](docs/v1product/README.md#productorderwithoption) - Places a product order
* [productRetrieve](docs/v1product/README.md#productretrieve) - Retrieves the result of an order
* [productSearch](docs/v1product/README.md#productsearch) - Returns a list of products
* [productStatus](docs/v1product/README.md#productstatus) - Returns metadata for a order
* [productUpdateAction](docs/v1product/README.md#productupdateaction) - Updates metadata of an order

### [v1System](docs/v1system/README.md)

* [healthCheck](docs/v1system/README.md#healthcheck) - Returns the health information for the official business registers based on usage.
* [systemCountries](docs/v1system/README.md#systemcountries) - Returns a list of countries
* [systemPricelist](docs/v1system/README.md#systempricelist) - Returns a list of products with prices

### [v1TinVerification](docs/v1tinverification/README.md)

* [tinVerificationBasicCheck](docs/v1tinverification/README.md#tinverificationbasiccheck) - Verifies a TIN number
* [tinVerificationComprehensiveCheck](docs/v1tinverification/README.md#tinverificationcomprehensivecheck) - EIN Name Lookup with TIN number and retrieves company data
* [tinVerificationNameLookup](docs/v1tinverification/README.md#tinverificationnamelookup) - EIN Name Lookup with TIN number

### [v1VatVerification](docs/v1vatverification/README.md)

* [vatBasic](docs/v1vatverification/README.md#vatbasic) - Returns a verification result
* [vatComprehensive](docs/v1vatverification/README.md#vatcomprehensive) - Returns a verification result and company data
* [vatLevelTwo](docs/v1vatverification/README.md#vatleveltwo) - Returns a level two verification result
* [vatLookup](docs/v1vatverification/README.md#vatlookup) - Returns a list of vat numbers with additional data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
