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
import org.openapis.openapi.models.operations.BtcerRequestBody;
import org.openapis.openapi.models.operations.BtcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.BtcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.BtcerResponse;
import org.openapis.openapi.models.operations.BtcerSecurity;
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

            BtcerRequestBody req = new BtcerRequestBody(BtcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new BtcerRequestBodyCertificateParameters("Ex. JHRC/2018/236543", "Ex. 2924637nNv839 or date of issue in dd/mm/yyyy. if tokan number is less than 8 chars");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("corrupti");,                 new ConsentArtifactSchemaConsentDataConsumer("provident");,                 new ConsentArtifactSchemaConsentDataProvider("distinctio");,                 new ConsentArtifactSchemaConsentPermission("quibusdam",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-04-14T16:47:33.722Z"), OffsetDateTime.parse("2021-04-22T12:08:58.275Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(4236.55, "error", 6458.94););,                 new ConsentArtifactSchemaConsentPurpose("suscipit");, OffsetDateTime.parse("2022-09-14T09:35:47.986Z"),                 new ConsentArtifactSchemaConsentUser("debitis", "ipsa", "delectus", "tempora"););,                 new ConsentArtifactSchemaSignature("suscipit"););;
            }};            

            BtcerResponse res = sdk.apIs.btcer(req, new BtcerSecurity("molestiae", "minus") {{
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

* [btcer](docs/apis/README.md#btcer) - Birth Certificate
* [ctcer](docs/apis/README.md#ctcer) - Caste Certificate
* [dtcer](docs/apis/README.md#dtcer) - Death Certificate
* [ewcer](docs/apis/README.md#ewcer) - Economically Weaker Section Certificate
* [incer](docs/apis/README.md#incer) - Income Certificate
* [rmcer](docs/apis/README.md#rmcer) - Marriage Certificate
* [rscer](docs/apis/README.md#rscer) - Residence Certificate
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
