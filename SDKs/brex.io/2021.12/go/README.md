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

import (
    "context"
    "log"
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    req := operations.CompanyAlternativeSearchRequest{
        RequestBody: &operations.CompanyAlternativeSearchRequestBody{
            Address: "5786 Little Streets",
            Name: "vel",
            Number: "error",
            Phone: "1-542-909-2347 x8545",
            URL: "nisi",
            Vat: "recusandae",
        },
        Country: "temporibus",
    }

    ctx := context.Background()
    res, err := s.V1Company.CompanyAlternativeSearch(ctx, req, operations.CompanyAlternativeSearchSecurity{
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


### V1Company

* `CompanyAlternativeSearch` - Retrieves a list of companies from the KYC API company index
* `CompanyAnnouncement` - Retrieves announcement data
* `CompanyDeepsearchISIN` - Retrieves a list of stock exchange listings
* `CompanyDeepsearchLEI` - Retrieves a list of companies
* `CompanyDeepsearchName` - Retrieves a list of companies from the official business register
* `CompanyDeepsearchNumber` - Retrieves a list of companies from the official business register
* `CompanyIDAnnouncements` - Retrieves company announcements
* `CompanyIDDataset` - Retrieves company details
* `CompanyIDSuper` - Retrieves structured data extracted from a company document
* `CompanyMonitorChangeTypesList` - Get available ChangeTypes
* `CompanyMonitorID` - Get monitor status for specific company id
* `CompanyMonitorList` - Retrieves a list of registered monitors
* `CompanyMonitorRegister` - Register a Company for monitoring
* `CompanyMonitorUnregister` - Deactivates an active notification
* `CompanyNotificationID` - Retrieves a list of registered notifications
* `CompanyNotificationList` - Retrieves a list of registered notifications
* `CompanyNotificationRegister` - Creates a new notification
* `CompanyNotificationUnregister` - Unregister a company from Monitoring
* `CompanySearchName` - Retrieves a list of companies from the KYC API company index
* `CompanySearchNumber` - Retrieves a list of companies from the KYC API company index

### V1EinVerification

* `EinVerificationBasic` - Verifies an EIN number
* `EinVerificationComprehensive` - Verifies EIN number and retrieves company data
* `EinVerificationLookup` - Retrieves a list of EIN numbers

### V1IbanVerification

* `IbanBasic` - Checks validity of an IBAN number
* `IbanComprehensive` - Checks validity of an IBAN number

### V1NifVerification

* `NifBasic` - Verifies a NIF number
* `NifComprehensive` - Verifies a NIF number and retrieves company data

### V1Pepsanction

* `PepMonitorList` - Retrieves a list of monitor entries
* `PepMonitorUnregister` - Deactive a pep sanction monitor
* `PepMonitorUpdate` - Update details of active Pep Sanction monitor
* `PepOrder` - Orders a new Pep Sanction Check Report
* `PepRetrieve` - Returns a json or pdf report

### V1Product

* `ProductAvailability` - Retrieves a document availability result
* `ProductCatalog` - Returns a catalog of products
* `ProductNotifier` - Returns metadata for a notifier
* `ProductNotifierCreate` - Creates a notifier for an order
* `ProductOrder` - Places a product order
* `ProductOrderConcierge` - Places a concierge order
* `ProductOrderUbo` - Places a UBO order
* `ProductOrderWithOption` - Places a product order
* `ProductRetrieve` - Retrieves the result of an order
* `ProductSearch` - Returns a list of products
* `ProductStatus` - Returns metadata for a order
* `ProductUpdateAction` - Updates metadata of an order

### V1System

* `HealthCheck` - Returns the health information for the official business registers based on usage.
* `SystemCountries` - Returns a list of countries
* `SystemPricelist` - Returns a list of products with prices

### V1TinVerification

* `TinVerificationBasicCheck` - Verifies a TIN number
* `TinVerificationComprehensiveCheck` - EIN Name Lookup with TIN number and retrieves company data
* `TinVerificationNameLookup` - EIN Name Lookup with TIN number

### V1VatVerification

* `VatBasic` - Returns a verification result
* `VatComprehensive` - Returns a verification result and company data
* `VatLevelTwo` - Returns a level two verification result
* `VatLookup` - Returns a list of vat numbers with additional data
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
