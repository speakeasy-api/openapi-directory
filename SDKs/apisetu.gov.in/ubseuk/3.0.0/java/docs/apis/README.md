# apIs

### Available Operations

* [hscer](#hscer) - Class XII Marksheet
* [hsmgr](#hsmgr) - Class XII Migration Certificate
* [sscer](#sscer) - Class X Marksheet

## hscer

API to verify Class XII Marksheet.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HscerRequestBody;
import org.openapis.openapi.models.operations.HscerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.HscerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.HscerResponse;
import org.openapis.openapi.models.operations.HscerSecurity;
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

            HscerRequestBody req = new HscerRequestBody(HscerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new HscerRequestBodyCertificateParameters("31-12-1980", "Sunil Kumar", "18xxxxxx", "123412341234", "2018");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("placeat");,                 new ConsentArtifactSchemaConsentDataConsumer("voluptatum");,                 new ConsentArtifactSchemaConsentDataProvider("iusto");,                 new ConsentArtifactSchemaConsentPermission("excepturi",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-01-28T03:46:24.500Z"), OffsetDateTime.parse("2022-10-15T05:10:19.629Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3373.96, "veritatis", 6481.72););,                 new ConsentArtifactSchemaConsentPurpose("perferendis");, OffsetDateTime.parse("2022-03-03T02:15:00.468Z"),                 new ConsentArtifactSchemaConsentUser("sapiente", "quo", "odit", "at"););,                 new ConsentArtifactSchemaSignature("at"););;
            }};            

            HscerResponse res = sdk.apIs.hscer(req, new HscerSecurity("maiores", "molestiae") {{
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

## hsmgr

API to verify Class XII Migration Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HsmgrRequestBody;
import org.openapis.openapi.models.operations.HsmgrRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.HsmgrRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.HsmgrResponse;
import org.openapis.openapi.models.operations.HsmgrSecurity;
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

            HsmgrRequestBody req = new HsmgrRequestBody(HsmgrRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new HsmgrRequestBodyCertificateParameters("31-12-1980", "Sunil Kumar", "18xxxxxx", "123412341234", "2018");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quod");,                 new ConsentArtifactSchemaConsentDataConsumer("quod");,                 new ConsentArtifactSchemaConsentDataProvider("esse");,                 new ConsentArtifactSchemaConsentPermission("totam",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2020-12-18T15:02:44.758Z"), OffsetDateTime.parse("2022-04-12T23:15:28.420Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6399.21, "occaecati", 1433.53););,                 new ConsentArtifactSchemaConsentPurpose("deleniti");, OffsetDateTime.parse("2020-09-22T07:34:53.140Z"),                 new ConsentArtifactSchemaConsentUser("totam", "beatae", "commodi", "molestiae"););,                 new ConsentArtifactSchemaSignature("modi"););;
            }};            

            HsmgrResponse res = sdk.apIs.hsmgr(req, new HsmgrSecurity("qui", "impedit") {{
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

## sscer

API to verify Class X Marksheet.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SscerRequestBody;
import org.openapis.openapi.models.operations.SscerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.SscerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.SscerResponse;
import org.openapis.openapi.models.operations.SscerSecurity;
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

            SscerRequestBody req = new SscerRequestBody(SscerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new SscerRequestBodyCertificateParameters("31-12-1980", "Sunil Kumar", "18xxxxxx", "123412341234", "2018");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("cum");,                 new ConsentArtifactSchemaConsentDataConsumer("esse");,                 new ConsentArtifactSchemaConsentDataProvider("ipsum");,                 new ConsentArtifactSchemaConsentPermission("excepturi",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-12-25T03:24:03.949Z"), OffsetDateTime.parse("2022-05-20T13:30:46.463Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(1496.75, "iste", 2223.21););,                 new ConsentArtifactSchemaConsentPurpose("natus");, OffsetDateTime.parse("2022-01-21T12:46:00.641Z"),                 new ConsentArtifactSchemaConsentUser("saepe", "fuga", "in", "corporis"););,                 new ConsentArtifactSchemaSignature("iste"););;
            }};            

            SscerResponse res = sdk.apIs.sscer(req, new SscerSecurity("iure", "saepe") {{
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
