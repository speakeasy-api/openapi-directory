# apIs

### Available Operations

* [pancr](#pancr) - PAN Verification Record

## pancr

API to verify PAN Verification Record.

### Example Usage

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
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("iusto");,                 new ConsentArtifactSchemaConsentDataConsumer("excepturi");,                 new ConsentArtifactSchemaConsentDataProvider("nisi");,                 new ConsentArtifactSchemaConsentPermission("recusandae",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-10-15T05:10:19.629Z"), OffsetDateTime.parse("2022-11-30T04:44:49.578Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6481.72, "perferendis", 3682.41););,                 new ConsentArtifactSchemaConsentPurpose("repellendus");, OffsetDateTime.parse("2020-08-31T22:02:25.322Z"),                 new ConsentArtifactSchemaConsentUser("odit", "at", "at", "maiores"););,                 new ConsentArtifactSchemaSignature("molestiae"););;
            }};            

            PancrResponse res = sdk.apIs.pancr(req, new PancrSecurity("quod", "quod") {{
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
