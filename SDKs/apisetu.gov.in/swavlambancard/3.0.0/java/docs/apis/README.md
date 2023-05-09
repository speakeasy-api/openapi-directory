# apIs

### Available Operations

* [dpicr](#dpicr) - Disabled Person Identity Card/ Certificate
* [govid](#govid) - ID Card

## dpicr

API to verify Disabled Person Identity Card/ Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DpicrRequestBody;
import org.openapis.openapi.models.operations.DpicrRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.DpicrRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.DpicrResponse;
import org.openapis.openapi.models.operations.DpicrSecurity;
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

            DpicrRequestBody req = new DpicrRequestBody(DpicrRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new DpicrRequestBodyCertificateParameters("MP1710120100074478", "Sunil Kumar");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("placeat");,                 new ConsentArtifactSchemaConsentDataConsumer("voluptatum");,                 new ConsentArtifactSchemaConsentDataProvider("iusto");,                 new ConsentArtifactSchemaConsentPermission("excepturi",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-01-28T03:46:24.500Z"), OffsetDateTime.parse("2022-10-15T05:10:19.629Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3373.96, "veritatis", 6481.72););,                 new ConsentArtifactSchemaConsentPurpose("perferendis");, OffsetDateTime.parse("2022-03-03T02:15:00.468Z"),                 new ConsentArtifactSchemaConsentUser("sapiente", "quo", "odit", "at"););,                 new ConsentArtifactSchemaSignature("at"););;
            }};            

            DpicrResponse res = sdk.apIs.dpicr(req, new DpicrSecurity("maiores", "molestiae") {{
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

## govid

API to verify ID Card.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GovidRequestBody;
import org.openapis.openapi.models.operations.GovidRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.GovidRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.GovidResponse;
import org.openapis.openapi.models.operations.GovidSecurity;
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

            GovidRequestBody req = new GovidRequestBody(GovidRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new GovidRequestBodyCertificateParameters("MP1710120100074478", "Sunil Kumar");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quod");,                 new ConsentArtifactSchemaConsentDataConsumer("esse");,                 new ConsentArtifactSchemaConsentDataProvider("totam");,                 new ConsentArtifactSchemaConsentPermission("porro",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-10-06T15:49:54.663Z"), OffsetDateTime.parse("2021-09-20T20:35:01.256Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5820.2, "fugit", 5373.73););,                 new ConsentArtifactSchemaConsentPurpose("hic");, OffsetDateTime.parse("2021-06-08T13:49:32.889Z"),                 new ConsentArtifactSchemaConsentUser("beatae", "commodi", "molestiae", "modi"););,                 new ConsentArtifactSchemaSignature("qui"););;
            }};            

            GovidResponse res = sdk.apIs.govid(req, new GovidSecurity("impedit", "cum") {{
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
