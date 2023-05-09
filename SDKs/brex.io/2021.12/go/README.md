# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/brex.io/2021.12/go
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
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.V1Company.CompanyAlternativeSearch(ctx, operations.CompanyAlternativeSearchRequest{
        RequestBody: &operations.CompanyAlternativeSearchRequestBody{
            Address: sdk.String("5786 Little Streets"),
            Name: sdk.String("Sabrina Oberbrunner"),
            Number: sdk.String("magnam"),
            Phone: sdk.String("1-292-547-8545 x39803"),
            URL: sdk.String("veritatis"),
            Vat: sdk.String("deserunt"),
        },
        Country: "perferendis",
    }, operations.CompanyAlternativeSearchSecurity{
        UserKey: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.CompanyAlternativeSearch200ApplicationJSONObjects != nil {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [V1Company](docs/v1company/README.md)

* [CompanyAlternativeSearch](docs/v1company/README.md#companyalternativesearch) - Retrieves a list of companies from the KYC API company index
* [CompanyAnnouncement](docs/v1company/README.md#companyannouncement) - Retrieves announcement data
* [CompanyDeepsearchISIN](docs/v1company/README.md#companydeepsearchisin) - Retrieves a list of stock exchange listings
* [CompanyDeepsearchLEI](docs/v1company/README.md#companydeepsearchlei) - Retrieves a list of companies
* [CompanyDeepsearchName](docs/v1company/README.md#companydeepsearchname) - Retrieves a list of companies from the official business register
* [CompanyDeepsearchNumber](docs/v1company/README.md#companydeepsearchnumber) - Retrieves a list of companies from the official business register
* [CompanyIDAnnouncements](docs/v1company/README.md#companyidannouncements) - Retrieves company announcements
* [CompanyIDDataset](docs/v1company/README.md#companyiddataset) - Retrieves company details
* [CompanyIDSuper](docs/v1company/README.md#companyidsuper) - Retrieves structured data extracted from a company document
* [CompanyMonitorChangeTypesList](docs/v1company/README.md#companymonitorchangetypeslist) - Get available ChangeTypes
* [CompanyMonitorID](docs/v1company/README.md#companymonitorid) - Get monitor status for specific company id
* [CompanyMonitorList](docs/v1company/README.md#companymonitorlist) - Retrieves a list of registered monitors
* [CompanyMonitorRegister](docs/v1company/README.md#companymonitorregister) - Register a Company for monitoring
* [CompanyMonitorUnregister](docs/v1company/README.md#companymonitorunregister) - Deactivates an active notification
* [CompanyNotificationID](docs/v1company/README.md#companynotificationid) - Retrieves a list of registered notifications
* [CompanyNotificationList](docs/v1company/README.md#companynotificationlist) - Retrieves a list of registered notifications
* [CompanyNotificationRegister](docs/v1company/README.md#companynotificationregister) - Creates a new notification
* [CompanyNotificationUnregister](docs/v1company/README.md#companynotificationunregister) - Unregister a company from Monitoring
* [CompanySearchName](docs/v1company/README.md#companysearchname) - Retrieves a list of companies from the KYC API company index
* [CompanySearchNumber](docs/v1company/README.md#companysearchnumber) - Retrieves a list of companies from the KYC API company index

### [V1EinVerification](docs/v1einverification/README.md)

* [EinVerificationBasic](docs/v1einverification/README.md#einverificationbasic) - Verifies an EIN number
* [EinVerificationComprehensive](docs/v1einverification/README.md#einverificationcomprehensive) - Verifies EIN number and retrieves company data
* [EinVerificationLookup](docs/v1einverification/README.md#einverificationlookup) - Retrieves a list of EIN numbers

### [V1IbanVerification](docs/v1ibanverification/README.md)

* [IbanBasic](docs/v1ibanverification/README.md#ibanbasic) - Checks validity of an IBAN number
* [IbanComprehensive](docs/v1ibanverification/README.md#ibancomprehensive) - Checks validity of an IBAN number

### [V1NifVerification](docs/v1nifverification/README.md)

* [NifBasic](docs/v1nifverification/README.md#nifbasic) - Verifies a NIF number
* [NifComprehensive](docs/v1nifverification/README.md#nifcomprehensive) - Verifies a NIF number and retrieves company data

### [V1Pepsanction](docs/v1pepsanction/README.md)

* [PepMonitorList](docs/v1pepsanction/README.md#pepmonitorlist) - Retrieves a list of monitor entries
* [PepMonitorUnregister](docs/v1pepsanction/README.md#pepmonitorunregister) - Deactive a pep sanction monitor
* [PepMonitorUpdate](docs/v1pepsanction/README.md#pepmonitorupdate) - Update details of active Pep Sanction monitor
* [PepOrder](docs/v1pepsanction/README.md#peporder) - Orders a new Pep Sanction Check Report
* [PepRetrieve](docs/v1pepsanction/README.md#pepretrieve) - Returns a json or pdf report

### [V1Product](docs/v1product/README.md)

* [ProductAvailability](docs/v1product/README.md#productavailability) - Retrieves a document availability result
* [ProductCatalog](docs/v1product/README.md#productcatalog) - Returns a catalog of products
* [ProductNotifier](docs/v1product/README.md#productnotifier) - Returns metadata for a notifier
* [ProductNotifierCreate](docs/v1product/README.md#productnotifiercreate) - Creates a notifier for an order
* [ProductOrder](docs/v1product/README.md#productorder) - Places a product order
* [ProductOrderConcierge](docs/v1product/README.md#productorderconcierge) - Places a concierge order
* [ProductOrderUbo](docs/v1product/README.md#productorderubo) - Places a UBO order
* [ProductOrderWithOption](docs/v1product/README.md#productorderwithoption) - Places a product order
* [ProductRetrieve](docs/v1product/README.md#productretrieve) - Retrieves the result of an order
* [ProductSearch](docs/v1product/README.md#productsearch) - Returns a list of products
* [ProductStatus](docs/v1product/README.md#productstatus) - Returns metadata for a order
* [ProductUpdateAction](docs/v1product/README.md#productupdateaction) - Updates metadata of an order

### [V1System](docs/v1system/README.md)

* [HealthCheck](docs/v1system/README.md#healthcheck) - Returns the health information for the official business registers based on usage.
* [SystemCountries](docs/v1system/README.md#systemcountries) - Returns a list of countries
* [SystemPricelist](docs/v1system/README.md#systempricelist) - Returns a list of products with prices

### [V1TinVerification](docs/v1tinverification/README.md)

* [TinVerificationBasicCheck](docs/v1tinverification/README.md#tinverificationbasiccheck) - Verifies a TIN number
* [TinVerificationComprehensiveCheck](docs/v1tinverification/README.md#tinverificationcomprehensivecheck) - EIN Name Lookup with TIN number and retrieves company data
* [TinVerificationNameLookup](docs/v1tinverification/README.md#tinverificationnamelookup) - EIN Name Lookup with TIN number

### [V1VatVerification](docs/v1vatverification/README.md)

* [VatBasic](docs/v1vatverification/README.md#vatbasic) - Returns a verification result
* [VatComprehensive](docs/v1vatverification/README.md#vatcomprehensive) - Returns a verification result and company data
* [VatLevelTwo](docs/v1vatverification/README.md#vatleveltwo) - Returns a level two verification result
* [VatLookup](docs/v1vatverification/README.md#vatlookup) - Returns a list of vat numbers with additional data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
