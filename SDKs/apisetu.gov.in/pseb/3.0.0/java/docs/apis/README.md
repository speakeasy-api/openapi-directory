# apIs

### Available Operations

* [cemst](#cemst) - Class VIII Marksheet
* [cfmst](#cfmst) - Class V Marksheet
* [hscer](#hscer) - Class XII Marksheet
* [micer](#micer) - Migration Certificate
* [sscer](#sscer) - Class X Marksheet

## cemst

API to verify Class VIII Marksheet.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CemstRequestBody;
import org.openapis.openapi.models.operations.CemstRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.CemstRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.CemstResponse;
import org.openapis.openapi.models.operations.CemstSecurity;
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

            CemstRequestBody req = new CemstRequestBody(CemstRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new CemstRequestBodyCertificateParameters("Sunil Kumar", "123412341234", "102012xxxx", "2018,2019,2020");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("placeat");,                 new ConsentArtifactSchemaConsentDataConsumer("voluptatum");,                 new ConsentArtifactSchemaConsentDataProvider("iusto");,                 new ConsentArtifactSchemaConsentPermission("excepturi",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-01-28T03:46:24.500Z"), OffsetDateTime.parse("2022-10-15T05:10:19.629Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3373.96, "veritatis", 6481.72););,                 new ConsentArtifactSchemaConsentPurpose("perferendis");, OffsetDateTime.parse("2022-03-03T02:15:00.468Z"),                 new ConsentArtifactSchemaConsentUser("sapiente", "quo", "odit", "at"););,                 new ConsentArtifactSchemaSignature("at"););;
            }};            

            CemstResponse res = sdk.apIs.cemst(req, new CemstSecurity("maiores", "molestiae") {{
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

## cfmst

API to verify Class V Marksheet.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CfmstRequestBody;
import org.openapis.openapi.models.operations.CfmstRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.CfmstRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.CfmstResponse;
import org.openapis.openapi.models.operations.CfmstSecurity;
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

            CfmstRequestBody req = new CfmstRequestBody(CfmstRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new CfmstRequestBodyCertificateParameters("Sunil Kumar", "123412341234", "102012xxxx", "2018,2019,2020");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quod");,                 new ConsentArtifactSchemaConsentDataConsumer("quod");,                 new ConsentArtifactSchemaConsentDataProvider("esse");,                 new ConsentArtifactSchemaConsentPermission("totam",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2020-12-18T15:02:44.758Z"), OffsetDateTime.parse("2022-04-12T23:15:28.420Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6399.21, "occaecati", 1433.53););,                 new ConsentArtifactSchemaConsentPurpose("deleniti");, OffsetDateTime.parse("2020-09-22T07:34:53.140Z"),                 new ConsentArtifactSchemaConsentUser("totam", "beatae", "commodi", "molestiae"););,                 new ConsentArtifactSchemaSignature("modi"););;
            }};            

            CfmstResponse res = sdk.apIs.cfmst(req, new CfmstSecurity("qui", "impedit") {{
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
                certificateParameters = new HscerRequestBodyCertificateParameters("Sunil Kumar", "123412341234", "102012xxxx", "2018,2019,2020");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("cum");,                 new ConsentArtifactSchemaConsentDataConsumer("esse");,                 new ConsentArtifactSchemaConsentDataProvider("ipsum");,                 new ConsentArtifactSchemaConsentPermission("excepturi",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-12-25T03:24:03.949Z"), OffsetDateTime.parse("2022-05-20T13:30:46.463Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(1496.75, "iste", 2223.21););,                 new ConsentArtifactSchemaConsentPurpose("natus");, OffsetDateTime.parse("2022-01-21T12:46:00.641Z"),                 new ConsentArtifactSchemaConsentUser("saepe", "fuga", "in", "corporis"););,                 new ConsentArtifactSchemaSignature("iste"););;
            }};            

            HscerResponse res = sdk.apIs.hscer(req, new HscerSecurity("iure", "saepe") {{
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

## micer

API to verify Migration Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MicerRequestBody;
import org.openapis.openapi.models.operations.MicerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.MicerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.MicerResponse;
import org.openapis.openapi.models.operations.MicerSecurity;
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

            MicerRequestBody req = new MicerRequestBody(MicerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new MicerRequestBodyCertificateParameters("Sunil Kumar", "123412341234", "102012xxxx", "2018,2019,2020");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quidem");,                 new ConsentArtifactSchemaConsentDataConsumer("architecto");,                 new ConsentArtifactSchemaConsentDataProvider("ipsa");,                 new ConsentArtifactSchemaConsentPermission("reiciendis",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-09-11T04:59:11.542Z"), OffsetDateTime.parse("2022-08-29T05:39:49.755Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(2103.82, "corporis", 1289.26););,                 new ConsentArtifactSchemaConsentPurpose("nobis");, OffsetDateTime.parse("2022-05-24T03:24:11.703Z"),                 new ConsentArtifactSchemaConsentUser("nemo", "minima", "excepturi", "accusantium"););,                 new ConsentArtifactSchemaSignature("iure"););;
            }};            

            MicerResponse res = sdk.apIs.micer(req, new MicerSecurity("culpa", "doloribus") {{
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
                certificateParameters = new SscerRequestBodyCertificateParameters("Sunil Kumar", "123412341234", "102012xxxx", "2018,2019,2020");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("sapiente");,                 new ConsentArtifactSchemaConsentDataConsumer("architecto");,                 new ConsentArtifactSchemaConsentDataProvider("mollitia");,                 new ConsentArtifactSchemaConsentPermission("dolorem",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-09-05T05:51:25.673Z"), OffsetDateTime.parse("2021-01-15T20:18:47.519Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5818.5, "numquam", 4143.69););,                 new ConsentArtifactSchemaConsentPurpose("quam");, OffsetDateTime.parse("2022-10-03T18:49:53.900Z"),                 new ConsentArtifactSchemaConsentUser("error", "quia", "quis", "vitae"););,                 new ConsentArtifactSchemaSignature("laborum"););;
            }};            

            SscerResponse res = sdk.apIs.sscer(req, new SscerSecurity("animi", "enim") {{
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
