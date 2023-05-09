# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get github.com/speakeasy-api/openapi-directory/SDKs/adyen.com/LegalEntityService/2/go
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
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.BusinessLines.DeleteBusinessLinesID(ctx, operations.DeleteBusinessLinesIDRequest{
        ID: "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
    }, operations.DeleteBusinessLinesIDSecurity{
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


### [BusinessLines](docs/businesslines/README.md)

* [DeleteBusinessLinesID](docs/businesslines/README.md#deletebusinesslinesid) - Delete a business line
* [GetBusinessLinesID](docs/businesslines/README.md#getbusinesslinesid) - Get a business line
* [PatchBusinessLinesID](docs/businesslines/README.md#patchbusinesslinesid) - Update a business line
* [PostBusinessLines](docs/businesslines/README.md#postbusinesslines) - Create a business line

### [Documents](docs/documents/README.md)

* [DeleteDocumentsID](docs/documents/README.md#deletedocumentsid) - Delete a document
* [GetDocumentsID](docs/documents/README.md#getdocumentsid) - Get a document
* [PatchDocumentsID](docs/documents/README.md#patchdocumentsid) - Update a document
* [PostDocuments](docs/documents/README.md#postdocuments) - Upload a document for verification checks

### [HostedOnboarding](docs/hostedonboarding/README.md)

* [GetThemes](docs/hostedonboarding/README.md#getthemes) - Get a list of hosted onboarding page themes
* [GetThemesID](docs/hostedonboarding/README.md#getthemesid) - Get an onboarding link theme
* [PostLegalEntitiesIDOnboardingLinks](docs/hostedonboarding/README.md#postlegalentitiesidonboardinglinks) - Get a link to an Adyen-hosted onboarding page

### [LegalEntities](docs/legalentities/README.md)

* [GetLegalEntitiesID](docs/legalentities/README.md#getlegalentitiesid) - Get a legal entity
* [GetLegalEntitiesIDBusinessLines](docs/legalentities/README.md#getlegalentitiesidbusinesslines) - Get all business lines under a legal entity
* [PatchLegalEntitiesID](docs/legalentities/README.md#patchlegalentitiesid) - Update a legal entity
* [PostLegalEntities](docs/legalentities/README.md#postlegalentities) - Create a legal entity

### [PCIQuestionnaires](docs/pciquestionnaires/README.md)

* [GetLegalEntitiesIDPciQuestionnaires](docs/pciquestionnaires/README.md#getlegalentitiesidpciquestionnaires) - Get PCI questionnaire details
* [GetLegalEntitiesIDPciQuestionnairesPciid](docs/pciquestionnaires/README.md#getlegalentitiesidpciquestionnairespciid) - Get PCI questionnaire
* [PostLegalEntitiesIDPciQuestionnairesGeneratePciTemplates](docs/pciquestionnaires/README.md#postlegalentitiesidpciquestionnairesgeneratepcitemplates) - Generate PCI questionnaire
* [PostLegalEntitiesIDPciQuestionnairesSignPciTemplates](docs/pciquestionnaires/README.md#postlegalentitiesidpciquestionnairessignpcitemplates) - Sign PCI questionnaire

### [TermsOfService](docs/termsofservice/README.md)

* [GetLegalEntitiesIDTermsOfServiceAcceptanceInfos](docs/termsofservice/README.md#getlegalentitiesidtermsofserviceacceptanceinfos) - Get Terms of Service information for a legal entity
* [PatchLegalEntitiesIDTermsOfServiceTermsofservicedocumentid](docs/termsofservice/README.md#patchlegalentitiesidtermsofservicetermsofservicedocumentid) - Accept Terms of Service
* [PostLegalEntitiesIDTermsOfService](docs/termsofservice/README.md#postlegalentitiesidtermsofservice) - Get Terms of Service document

### [TransferInstruments](docs/transferinstruments/README.md)

* [DeleteTransferInstrumentsID](docs/transferinstruments/README.md#deletetransferinstrumentsid) - Delete a transfer instrument
* [GetTransferInstrumentsID](docs/transferinstruments/README.md#gettransferinstrumentsid) - Get a transfer instrument
* [PatchTransferInstrumentsID](docs/transferinstruments/README.md#patchtransferinstrumentsid) - Update a transfer instrument
* [PostTransferInstruments](docs/transferinstruments/README.md#posttransferinstruments) - Create a transfer instrument
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta and therefore, we recommend pinning usage to a specific package version.
This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated and maintained programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
