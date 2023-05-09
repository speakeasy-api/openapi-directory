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
import org.openapis.openapi.models.operations.IticrRequestBody;
import org.openapis.openapi.models.operations.IticrRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.IticrRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.IticrResponse;
import org.openapis.openapi.models.operations.IticrSecurity;
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

            IticrRequestBody req = new IticrRequestBody(IticrRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new IticrRequestBodyCertificateParameters("Sunil Kumar", "18XXXXXXX");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("corrupti");,                 new ConsentArtifactSchemaConsentDataConsumer("provident");,                 new ConsentArtifactSchemaConsentDataProvider("distinctio");,                 new ConsentArtifactSchemaConsentPermission("quibusdam",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-04-14T16:47:33.722Z"), OffsetDateTime.parse("2021-04-22T12:08:58.275Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(4236.55, "error", 6458.94););,                 new ConsentArtifactSchemaConsentPurpose("suscipit");, OffsetDateTime.parse("2022-09-14T09:35:47.986Z"),                 new ConsentArtifactSchemaConsentUser("debitis", "ipsa", "delectus", "tempora"););,                 new ConsentArtifactSchemaSignature("suscipit"););;
            }};            

            IticrResponse res = sdk.apIs.iticr(req, new IticrSecurity("molestiae", "minus") {{
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

* [iticr](docs/apis/README.md#iticr) - ITI Certificate
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage 
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally 
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. 
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
