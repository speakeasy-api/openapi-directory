# apIs

### Available Operations

* [cncer](#cncer) - Conversion Certificate
* [mutan](#mutan) - Mutation Report/ePattadar Passbook

## cncer

API to verify Conversion Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CncerRequestBody;
import org.openapis.openapi.models.operations.CncerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.CncerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.CncerResponse;
import org.openapis.openapi.models.operations.CncerSecurity;
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

            CncerRequestBody req = new CncerRequestBody(CncerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new CncerRequestBodyCertificateParameters("GSC123456");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("iusto");,                 new ConsentArtifactSchemaConsentDataConsumer("excepturi");,                 new ConsentArtifactSchemaConsentDataProvider("nisi");,                 new ConsentArtifactSchemaConsentPermission("recusandae",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-10-15T05:10:19.629Z"), OffsetDateTime.parse("2022-11-30T04:44:49.578Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6481.72, "perferendis", 3682.41););,                 new ConsentArtifactSchemaConsentPurpose("repellendus");, OffsetDateTime.parse("2020-08-31T22:02:25.322Z"),                 new ConsentArtifactSchemaConsentUser("odit", "at", "at", "maiores"););,                 new ConsentArtifactSchemaSignature("molestiae"););;
            }};            

            CncerResponse res = sdk.apIs.cncer(req, new CncerSecurity("quod", "quod") {{
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

## mutan

API to verify Mutation Report/ePattadar Passbook.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MutanRequestBody;
import org.openapis.openapi.models.operations.MutanRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.MutanRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.MutanResponse;
import org.openapis.openapi.models.operations.MutanSecurity;
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

            MutanRequestBody req = new MutanRequestBody(MutanRequestBodyFormatEnum.XML, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new MutanRequestBodyCertificateParameters("34567");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("totam");,                 new ConsentArtifactSchemaConsentDataConsumer("porro");,                 new ConsentArtifactSchemaConsentDataProvider("dolorum");,                 new ConsentArtifactSchemaConsentPermission("dicta",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-09-20T20:35:01.256Z"), OffsetDateTime.parse("2022-09-18T08:27:00.721Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5373.73, "hic", 7586.16););,                 new ConsentArtifactSchemaConsentPurpose("totam");, OffsetDateTime.parse("2022-08-02T15:33:40.440Z"),                 new ConsentArtifactSchemaConsentUser("molestiae", "modi", "qui", "impedit"););,                 new ConsentArtifactSchemaSignature("cum"););;
            }};            

            MutanResponse res = sdk.apIs.mutan(req, new MutanSecurity("esse", "ipsum") {{
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
