<!-- Start SDK Example Usage -->
```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AdcrdRequestBody;
import org.openapis.openapi.models.operations.AdcrdRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.AdcrdRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.AdcrdResponse;
import org.openapis.openapi.models.operations.AdcrdSecurity;
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

            AdcrdRequestBody req = new AdcrdRequestBody(AdcrdRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new AdcrdRequestBodyCertificateParameters("31-12-1980", "MA90120190002", "1234");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("provident");,                 new ConsentArtifactSchemaConsentDataConsumer("distinctio");,                 new ConsentArtifactSchemaConsentDataProvider("quibusdam");,                 new ConsentArtifactSchemaConsentPermission("unde",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-05-14T08:28:11.899Z"), OffsetDateTime.parse("2021-09-24T02:21:06.409Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6235.64, "deserunt", 3843.82););,                 new ConsentArtifactSchemaConsentPurpose("iure");, OffsetDateTime.parse("2022-02-09T12:04:06.508Z"),                 new ConsentArtifactSchemaConsentUser("ipsa", "delectus", "tempora", "suscipit"););,                 new ConsentArtifactSchemaSignature("molestiae"););;
            }};            

            AdcrdResponse res = sdk.apIs.adcrd(req, new AdcrdSecurity("minus", "placeat") {{
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