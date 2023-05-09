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
import org.openapis.openapi.models.operations.PancrRequestBody;
import org.openapis.openapi.models.operations.PancrRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.PancrRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.PancrResponse;
import org.openapis.openapi.models.operations.PancrSecurity;
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

            PancrRequestBody req = new PancrRequestBody(PancrRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new PancrRequestBodyCertificateParameters("31-12-1980", "Sunil Kumar", "M", "RAMESHWAR KUMAR SINGH", "123412341234", "ABCD123EF");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("provident");,                 new ConsentArtifactSchemaConsentDataConsumer("distinctio");,                 new ConsentArtifactSchemaConsentDataProvider("quibusdam");,                 new ConsentArtifactSchemaConsentPermission("unde",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-05-14T08:28:11.899Z"), OffsetDateTime.parse("2021-09-24T02:21:06.409Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6235.64, "deserunt", 3843.82););,                 new ConsentArtifactSchemaConsentPurpose("iure");, OffsetDateTime.parse("2022-02-09T12:04:06.508Z"),                 new ConsentArtifactSchemaConsentUser("ipsa", "delectus", "tempora", "suscipit"););,                 new ConsentArtifactSchemaSignature("molestiae"););;
            }};            

            PancrResponse res = sdk.apIs.pancr(req, new PancrSecurity("minus", "placeat") {{
                apiKey = "YOUR_API_KEY_HERE";
                clientId = "YOUR_API_KEY_HERE";
            }});

            if (res.body != null) {
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

* [pancr](docs/apis/README.md#pancr) - PAN Verification Record
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
