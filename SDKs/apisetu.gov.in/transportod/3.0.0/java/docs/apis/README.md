# apIs

### Available Operations

* [drvlc](#drvlc) - Driving License
* [rvcer](#rvcer) - Registration of Vehicles

## drvlc

API to verify Driving License.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DrvlcRequestBody;
import org.openapis.openapi.models.operations.DrvlcRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.DrvlcRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.DrvlcResponse;
import org.openapis.openapi.models.operations.DrvlcSecurity;
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

            DrvlcRequestBody req = new DrvlcRequestBody(DrvlcRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new DrvlcRequestBodyCertificateParameters("31-12-1980", "Sunil Kumar", "123412341234", "TN0119920009646. As per your Driving License.");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("iusto");,                 new ConsentArtifactSchemaConsentDataConsumer("excepturi");,                 new ConsentArtifactSchemaConsentDataProvider("nisi");,                 new ConsentArtifactSchemaConsentPermission("recusandae",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-10-15T05:10:19.629Z"), OffsetDateTime.parse("2022-11-30T04:44:49.578Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6481.72, "perferendis", 3682.41););,                 new ConsentArtifactSchemaConsentPurpose("repellendus");, OffsetDateTime.parse("2020-08-31T22:02:25.322Z"),                 new ConsentArtifactSchemaConsentUser("odit", "at", "at", "maiores"););,                 new ConsentArtifactSchemaSignature("molestiae"););;
            }};            

            DrvlcResponse res = sdk.apIs.drvlc(req, new DrvlcSecurity("quod", "quod") {{
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

## rvcer

API to verify Registration of Vehicles.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RvcerRequestBody;
import org.openapis.openapi.models.operations.RvcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.RvcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.RvcerResponse;
import org.openapis.openapi.models.operations.RvcerSecurity;
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

            RvcerRequestBody req = new RvcerRequestBody(RvcerRequestBodyFormatEnum.XML, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new RvcerRequestBodyCertificateParameters("Sunil Kumar", "123412341234", "MBLKC12EFBGJ08420", "DL01AA0101");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("totam");,                 new ConsentArtifactSchemaConsentDataConsumer("porro");,                 new ConsentArtifactSchemaConsentDataProvider("dolorum");,                 new ConsentArtifactSchemaConsentPermission("dicta",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-09-20T20:35:01.256Z"), OffsetDateTime.parse("2022-09-18T08:27:00.721Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5373.73, "hic", 7586.16););,                 new ConsentArtifactSchemaConsentPurpose("totam");, OffsetDateTime.parse("2022-08-02T15:33:40.440Z"),                 new ConsentArtifactSchemaConsentUser("molestiae", "modi", "qui", "impedit"););,                 new ConsentArtifactSchemaSignature("cum"););;
            }};            

            RvcerResponse res = sdk.apIs.rvcer(req, new RvcerSecurity("esse", "ipsum") {{
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
