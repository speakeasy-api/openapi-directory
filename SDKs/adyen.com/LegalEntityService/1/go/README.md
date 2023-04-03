# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/LegalEntityService/1/go
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

    req := operations.DeleteBusinessLinesIDRequest{
        ID: "corrupti",
    }

    ctx := context.Background()
    res, err := s.BusinessLines.DeleteBusinessLinesID(ctx, req, operations.DeleteBusinessLinesIDSecurity{
        APIKeyAuth: sdk.String("YOUR_API_KEY_HERE"),
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### BusinessLines

* `DeleteBusinessLinesID` - Delete a business line
* `GetBusinessLinesID` - Get a business line
* `PostBusinessLines` - Create a business line

### Documents

* `DeleteDocumentsID` - Delete a document
* `GetDocumentsID` - Get a document
* `PatchDocumentsID` - Update a document
* `PostDocuments` - Upload a document for verification checks

### HostedOnboarding

* `GetThemes` - Get a list of hosted onboarding page themes
* `GetThemesID` - Get an onboarding link theme
* `PostLegalEntitiesIDOnboardingLinks` - Get a link to an Adyen-hosted onboarding page

### LegalEntities

* `GetLegalEntitiesID` - Get a legal entity
* `GetLegalEntitiesIDBusinessLines` - Get all business lines under a legal entity
* `PatchLegalEntitiesID` - Update a legal entity
* `PostLegalEntities` - Create a legal entity

### TermsOfService

* `GetLegalEntitiesIDTermsOfServiceAcceptanceInfos` - Get Terms of Service information for a legal entity
* `GetLegalEntitiesIDTermsOfServiceStatus` - Get Terms of Service status
* `PatchLegalEntitiesIDTermsOfServiceTermsofservicedocumentid` - Accept Terms of Service
* `PostLegalEntitiesIDTermsOfService` - Get Terms of Service document

### TransferInstruments

* `DeleteTransferInstrumentsID` - Delete a transfer instrument
* `GetTransferInstrumentsID` - Get a transfer instrument
* `PatchTransferInstrumentsID` - Update a transfer instrument
* `PostTransferInstruments` - Create a transfer instrument
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
