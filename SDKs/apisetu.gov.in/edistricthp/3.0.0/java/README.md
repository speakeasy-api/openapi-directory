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

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AecmwRequestBody;
import org.openapis.openapi.models.operations.AecmwRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.AecmwRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.AecmwResponse;
import org.openapis.openapi.models.operations.AecmwSecurity;
import org.openapis.openapi.models.shared.ConsentArtifactSchema;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaConsent;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaConsentData;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaConsentDataConsumer;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaConsentDataProvider;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaConsentPermission;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaConsentPermissionDateRange;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaConsentPermissionFrequency;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaConsentPurpose;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaConsentUser;
import org.openapis.openapi.models.shared.ConsentArtifactSchemaSignature;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AecmwRequestBody req = new AecmwRequestBody(AecmwRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new AecmwRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("corrupti");,                 new ConsentArtifactSchemaConsentDataConsumer("provident");,                 new ConsentArtifactSchemaConsentDataProvider("distinctio");,                 new ConsentArtifactSchemaConsentPermission("quibusdam",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-04-14T16:47:33.722Z"), OffsetDateTime.parse("2021-04-22T12:08:58.275Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(4236.55, "error", 6458.94););,                 new ConsentArtifactSchemaConsentPurpose("suscipit");, OffsetDateTime.parse("2022-09-14T09:35:47.986Z"),                 new ConsentArtifactSchemaConsentUser("debitis", "ipsa", "delectus", "tempora"););,                 new ConsentArtifactSchemaSignature("suscipit"););;
            }};            

            AecmwResponse res = sdk.apIs.aecmw(req, new AecmwSecurity("molestiae", "minus") {{
                apiKey = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
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


### [apIs](docs/apis/README.md)

* [aecmw](docs/apis/README.md#aecmw) - Application for Renewal of Contractor Migrant Workmen license
* [aemtw](docs/apis/README.md#aemtw) - Application for Renewal of Motor Transport Worker Registration
* [agcer](docs/apis/README.md#agcer) - Agriculture/ Agriculturist Certificate
* [alimw](docs/apis/README.md#alimw) - Application for License for Inter State Migrant Workmen
* [arcmw](docs/apis/README.md#arcmw) - Application for Registration of Contractor Migrant Workmen license
* [armtw](docs/apis/README.md#armtw) - Application for Registration of Motor Transport Worker Registration
* [bacer](docs/apis/README.md#bacer) - Backward Area Certificate
* [bhcer](docs/apis/README.md#bhcer) - Bonafide Certificate
* [bpcrd](docs/apis/README.md#bpcrd) - BPL Card
* [btcer](docs/apis/README.md#btcer) - Birth Certificate
* [cecer](docs/apis/README.md#cecer) - Renewal Certificate of Contract Labour License
* [chcer](docs/apis/README.md#chcer) - Character Certificate
* [clcer](docs/apis/README.md#clcer) - Registration Certificate for Contract Labour License
* [coprg](docs/apis/README.md#coprg) - Copy of Pariwar Register
* [dccer](docs/apis/README.md#dccer) - Dogra Class Certificate
* [dmcer](docs/apis/README.md#dmcer) - Domicile Certificate
* [dpicr](docs/apis/README.md#dpicr) - Disabled Person Identity Card/ Certificate
* [dtcer](docs/apis/README.md#dtcer) - Death Certificate
* [ercer](docs/apis/README.md#ercer) - Registration Certificate of Establishment Employing Contract Labour
* [ffcer](docs/apis/README.md#ffcer) - Freedom Fighter Certificate
* [igcer](docs/apis/README.md#igcer) - Indigent (Needy Person) Certificate
* [incer](docs/apis/README.md#incer) - Income Certificate
* [lhcer](docs/apis/README.md#lhcer) - Legal Heir Certificate
* [mncer](docs/apis/README.md#mncer) - Minority Certificate
* [mnrga](docs/apis/README.md#mnrga) - MNREGA Job Card
* [obcer](docs/apis/README.md#obcer) - OBC Certificate
* [racer](docs/apis/README.md#racer) - Rural Area Certificate
* [rmcer](docs/apis/README.md#rmcer) - Marriage Certificate
* [secer](docs/apis/README.md#secer) - Renewal Certificate of Shops And Commercial Establishment
* [shcer](docs/apis/README.md#shcer) - SC/ST  Certificate
* [sicrd](docs/apis/README.md#sicrd) - Senior Citizen Identity Card/ Certificate
* [srcer](docs/apis/README.md#srcer) - Registration Certificate of Shops And Commercial Establishment
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
