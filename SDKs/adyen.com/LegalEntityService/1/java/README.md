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

import org.openapis.openapi.models.operations.DeleteBusinessLinesIdSecurity;
import org.openapis.openapi.models.operations.DeleteBusinessLinesIdPathParams;
import org.openapis.openapi.models.operations.DeleteBusinessLinesIdRequest;
import org.openapis.openapi.models.operations.DeleteBusinessLinesIdResponse;
import org.openapis.openapi.models.shared.SchemeAPIKeyAuth;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteBusinessLinesIdRequest req = new DeleteBusinessLinesIdRequest() {{
                security = new DeleteBusinessLinesIdSecurity() {{
                    apiKeyAuth = new SchemeAPIKeyAuth() {{
                        apiKey = "YOUR_API_KEY_HERE";
                    }};
                }};
                pathParams = new DeleteBusinessLinesIdPathParams() {{
                    id = "corrupti";
                }};
            }};            

            DeleteBusinessLinesIdResponse res = sdk.businessLines.deleteBusinessLinesId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations


### businessLines

* `deleteBusinessLinesId` - Delete a business line
* `getBusinessLinesId` - Get a business line
* `postBusinessLines` - Create a business line

### documents

* `deleteDocumentsId` - Delete a document
* `getDocumentsId` - Get a document
* `patchDocumentsId` - Update a document
* `postDocuments` - Upload a document for verification checks

### hostedOnboarding

* `getThemes` - Get a list of hosted onboarding page themes
* `getThemesId` - Get an onboarding link theme
* `postLegalEntitiesIdOnboardingLinks` - Get a link to an Adyen-hosted onboarding page

### legalEntities

* `getLegalEntitiesId` - Get a legal entity
* `getLegalEntitiesIdBusinessLines` - Get all business lines under a legal entity
* `patchLegalEntitiesId` - Update a legal entity
* `postLegalEntities` - Create a legal entity

### termsOfService

* `getLegalEntitiesIdTermsOfServiceAcceptanceInfos` - Get Terms of Service information for a legal entity
* `getLegalEntitiesIdTermsOfServiceStatus` - Get Terms of Service status
* `patchLegalEntitiesIdTermsOfServiceTermsofservicedocumentid` - Accept Terms of Service
* `postLegalEntitiesIdTermsOfService` - Get Terms of Service document

### transferInstruments

* `deleteTransferInstrumentsId` - Delete a transfer instrument
* `getTransferInstrumentsId` - Get a transfer instrument
* `patchTransferInstrumentsId` - Update a transfer instrument
* `postTransferInstruments` - Create a transfer instrument
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
