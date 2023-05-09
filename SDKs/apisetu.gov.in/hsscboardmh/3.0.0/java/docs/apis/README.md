# apIs

### Available Operations

* [hpcer](#hpcer) - Class XII Passing Certificate
* [hscer](#hscer) - Class XII Marksheet
* [spcer](#spcer) - Class X Passing Certificate
* [sscer](#sscer) - Class X Marksheet

## hpcer

API to verify Class XII Passing Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HpcerRequestBody;
import org.openapis.openapi.models.operations.HpcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.HpcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.HpcerResponse;
import org.openapis.openapi.models.operations.HpcerSecurity;
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

            HpcerRequestBody req = new HpcerRequestBody(HpcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new HpcerRequestBodyCertificateParameters("Sunil Kumar", "MAR or OCT", "P183286", "389", "2015");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("iusto");,                 new ConsentArtifactSchemaConsentDataConsumer("excepturi");,                 new ConsentArtifactSchemaConsentDataProvider("nisi");,                 new ConsentArtifactSchemaConsentPermission("recusandae",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-10-15T05:10:19.629Z"), OffsetDateTime.parse("2022-11-30T04:44:49.578Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6481.72, "perferendis", 3682.41););,                 new ConsentArtifactSchemaConsentPurpose("repellendus");, OffsetDateTime.parse("2020-08-31T22:02:25.322Z"),                 new ConsentArtifactSchemaConsentUser("odit", "at", "at", "maiores"););,                 new ConsentArtifactSchemaSignature("molestiae"););;
            }};            

            HpcerResponse res = sdk.apIs.hpcer(req, new HpcerSecurity("quod", "quod") {{
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

            HscerRequestBody req = new HscerRequestBody(HscerRequestBodyFormatEnum.XML, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new HscerRequestBodyCertificateParameters("Sunil Kumar", "MAR or OCT", "P183286", "389", "2015");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("totam");,                 new ConsentArtifactSchemaConsentDataConsumer("porro");,                 new ConsentArtifactSchemaConsentDataProvider("dolorum");,                 new ConsentArtifactSchemaConsentPermission("dicta",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-09-20T20:35:01.256Z"), OffsetDateTime.parse("2022-09-18T08:27:00.721Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5373.73, "hic", 7586.16););,                 new ConsentArtifactSchemaConsentPurpose("totam");, OffsetDateTime.parse("2022-08-02T15:33:40.440Z"),                 new ConsentArtifactSchemaConsentUser("molestiae", "modi", "qui", "impedit"););,                 new ConsentArtifactSchemaSignature("cum"););;
            }};            

            HscerResponse res = sdk.apIs.hscer(req, new HscerSecurity("esse", "ipsum") {{
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

## spcer

API to verify Class X Passing Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SpcerRequestBody;
import org.openapis.openapi.models.operations.SpcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.SpcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.SpcerResponse;
import org.openapis.openapi.models.operations.SpcerSecurity;
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

            SpcerRequestBody req = new SpcerRequestBody(SpcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new SpcerRequestBodyCertificateParameters("Sunil Kumar", "MAR or OCT", "C183286", "517", "2015");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("aspernatur");,                 new ConsentArtifactSchemaConsentDataConsumer("perferendis");,                 new ConsentArtifactSchemaConsentDataProvider("ad");,                 new ConsentArtifactSchemaConsentPermission("natus",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-05-22T14:02:28.908Z"), OffsetDateTime.parse("2022-05-20T19:39:29.035Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3864.89, "hic", 9025.99););,                 new ConsentArtifactSchemaConsentPurpose("fuga");, OffsetDateTime.parse("2022-08-22T18:42:38.160Z"),                 new ConsentArtifactSchemaConsentUser("iste", "iure", "saepe", "quidem"););,                 new ConsentArtifactSchemaSignature("architecto"););;
            }};            

            SpcerResponse res = sdk.apIs.spcer(req, new SpcerSecurity("ipsa", "reiciendis") {{
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
                certificateParameters = new SscerRequestBodyCertificateParameters("Sunil Kumar", "MAR or OCT", "C183286", "517", "2015");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("mollitia");,                 new ConsentArtifactSchemaConsentDataConsumer("laborum");,                 new ConsentArtifactSchemaConsentDataProvider("dolores");,                 new ConsentArtifactSchemaConsentPermission("dolorem",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-11-14T22:36:19.385Z"), OffsetDateTime.parse("2022-01-20T14:32:34.011Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6078.31, "nemo", 3250.47););,                 new ConsentArtifactSchemaConsentPurpose("excepturi");, OffsetDateTime.parse("2022-07-24T21:51:02.112Z"),                 new ConsentArtifactSchemaConsentUser("culpa", "doloribus", "sapiente", "architecto"););,                 new ConsentArtifactSchemaSignature("mollitia"););;
            }};            

            SscerResponse res = sdk.apIs.sscer(req, new SscerSecurity("dolorem", "culpa") {{
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
