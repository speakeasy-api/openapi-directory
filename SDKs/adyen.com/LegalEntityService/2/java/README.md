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
import org.openapis.openapi.models.operations.DeleteBusinessLinesIdRequest;
import org.openapis.openapi.models.operations.DeleteBusinessLinesIdResponse;
import org.openapis.openapi.models.operations.DeleteBusinessLinesIdSecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBusinessLinesIdRequest req = new DeleteBusinessLinesIdRequest("corrupti");            

            DeleteBusinessLinesIdResponse res = sdk.businessLines.deleteBusinessLinesId(req, new DeleteBusinessLinesIdSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
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


### [businessLines](docs/businesslines/README.md)

* [deleteBusinessLinesId](docs/businesslines/README.md#deletebusinesslinesid) - Delete a business line
* [getBusinessLinesId](docs/businesslines/README.md#getbusinesslinesid) - Get a business line
* [patchBusinessLinesId](docs/businesslines/README.md#patchbusinesslinesid) - Update a business line
* [postBusinessLines](docs/businesslines/README.md#postbusinesslines) - Create a business line

### [documents](docs/documents/README.md)

* [deleteDocumentsId](docs/documents/README.md#deletedocumentsid) - Delete a document
* [getDocumentsId](docs/documents/README.md#getdocumentsid) - Get a document
* [patchDocumentsId](docs/documents/README.md#patchdocumentsid) - Update a document
* [postDocuments](docs/documents/README.md#postdocuments) - Upload a document for verification checks

### [hostedOnboarding](docs/hostedonboarding/README.md)

* [getThemes](docs/hostedonboarding/README.md#getthemes) - Get a list of hosted onboarding page themes
* [getThemesId](docs/hostedonboarding/README.md#getthemesid) - Get an onboarding link theme
* [postLegalEntitiesIdOnboardingLinks](docs/hostedonboarding/README.md#postlegalentitiesidonboardinglinks) - Get a link to an Adyen-hosted onboarding page

### [legalEntities](docs/legalentities/README.md)

* [getLegalEntitiesId](docs/legalentities/README.md#getlegalentitiesid) - Get a legal entity
* [getLegalEntitiesIdBusinessLines](docs/legalentities/README.md#getlegalentitiesidbusinesslines) - Get all business lines under a legal entity
* [patchLegalEntitiesId](docs/legalentities/README.md#patchlegalentitiesid) - Update a legal entity
* [postLegalEntities](docs/legalentities/README.md#postlegalentities) - Create a legal entity

### [pciQuestionnaires](docs/pciquestionnaires/README.md)

* [getLegalEntitiesIdPciQuestionnaires](docs/pciquestionnaires/README.md#getlegalentitiesidpciquestionnaires) - Get PCI questionnaire details
* [getLegalEntitiesIdPciQuestionnairesPciid](docs/pciquestionnaires/README.md#getlegalentitiesidpciquestionnairespciid) - Get PCI questionnaire
* [postLegalEntitiesIdPciQuestionnairesGeneratePciTemplates](docs/pciquestionnaires/README.md#postlegalentitiesidpciquestionnairesgeneratepcitemplates) - Generate PCI questionnaire
* [postLegalEntitiesIdPciQuestionnairesSignPciTemplates](docs/pciquestionnaires/README.md#postlegalentitiesidpciquestionnairessignpcitemplates) - Sign PCI questionnaire

### [termsOfService](docs/termsofservice/README.md)

* [getLegalEntitiesIdTermsOfServiceAcceptanceInfos](docs/termsofservice/README.md#getlegalentitiesidtermsofserviceacceptanceinfos) - Get Terms of Service information for a legal entity
* [patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid](docs/termsofservice/README.md#patchlegalentitiesidtermsofservicetermsofservicedocumentid) - Accept Terms of Service
* [postLegalEntitiesIdTermsOfService](docs/termsofservice/README.md#postlegalentitiesidtermsofservice) - Get Terms of Service document

### [transferInstruments](docs/transferinstruments/README.md)

* [deleteTransferInstrumentsId](docs/transferinstruments/README.md#deletetransferinstrumentsid) - Delete a transfer instrument
* [getTransferInstrumentsId](docs/transferinstruments/README.md#gettransferinstrumentsid) - Get a transfer instrument
* [patchTransferInstrumentsId](docs/transferinstruments/README.md#patchtransferinstrumentsid) - Update a transfer instrument
* [postTransferInstruments](docs/transferinstruments/README.md#posttransferinstruments) - Create a transfer instrument
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
