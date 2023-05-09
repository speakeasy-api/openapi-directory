# apIs

### Available Operations

* [drvlc](#drvlc) - Driving License
* [fitcer](#fitcer) - Fitness Certificate
* [rvcer](#rvcer) - Registration of Vehicles
* [vhinsc](#vhinsc) - Vehicle Insurance Certificate
* [vhtax](#vhtax) - Vehicle Tax Receipt

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

## fitcer

API to verify Fitness Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FitcerRequestBody;
import org.openapis.openapi.models.operations.FitcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.FitcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.FitcerResponse;
import org.openapis.openapi.models.operations.FitcerSecurity;
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

            FitcerRequestBody req = new FitcerRequestBody(FitcerRequestBodyFormatEnum.XML, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new FitcerRequestBodyCertificateParameters("Sunil Kumar", "123412341234", "MBLKC12EFBGJ08420", "DL01AA0101", "Person Name");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("totam");,                 new ConsentArtifactSchemaConsentDataConsumer("porro");,                 new ConsentArtifactSchemaConsentDataProvider("dolorum");,                 new ConsentArtifactSchemaConsentPermission("dicta",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-09-20T20:35:01.256Z"), OffsetDateTime.parse("2022-09-18T08:27:00.721Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5373.73, "hic", 7586.16););,                 new ConsentArtifactSchemaConsentPurpose("totam");, OffsetDateTime.parse("2022-08-02T15:33:40.440Z"),                 new ConsentArtifactSchemaConsentUser("molestiae", "modi", "qui", "impedit"););,                 new ConsentArtifactSchemaSignature("cum"););;
            }};            

            FitcerResponse res = sdk.apIs.fitcer(req, new FitcerSecurity("esse", "ipsum") {{
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

            RvcerRequestBody req = new RvcerRequestBody(RvcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new RvcerRequestBodyCertificateParameters("Sunil Kumar", "123412341234", "MBLKC12EFBGJ08420. As per your Vehicle Registration Certificate.", "DL01AA0101. As per your Vehicle Registration Certificate.");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("aspernatur");,                 new ConsentArtifactSchemaConsentDataConsumer("perferendis");,                 new ConsentArtifactSchemaConsentDataProvider("ad");,                 new ConsentArtifactSchemaConsentPermission("natus",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-05-22T14:02:28.908Z"), OffsetDateTime.parse("2022-05-20T19:39:29.035Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3864.89, "hic", 9025.99););,                 new ConsentArtifactSchemaConsentPurpose("fuga");, OffsetDateTime.parse("2022-08-22T18:42:38.160Z"),                 new ConsentArtifactSchemaConsentUser("iste", "iure", "saepe", "quidem"););,                 new ConsentArtifactSchemaSignature("architecto"););;
            }};            

            RvcerResponse res = sdk.apIs.rvcer(req, new RvcerSecurity("ipsa", "reiciendis") {{
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

## vhinsc

API to verify Vehicle Insurance Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VhinscRequestBody;
import org.openapis.openapi.models.operations.VhinscRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.VhinscRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.VhinscResponse;
import org.openapis.openapi.models.operations.VhinscSecurity;
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

            VhinscRequestBody req = new VhinscRequestBody(VhinscRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new VhinscRequestBodyCertificateParameters("Sunil Kumar", "123412341234", "MA3EJKD1S00A06535", "DL01AA0101", "Veer Pratap Singh");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("est");,                 new ConsentArtifactSchemaConsentDataConsumer("mollitia");,                 new ConsentArtifactSchemaConsentDataProvider("laborum");,                 new ConsentArtifactSchemaConsentPermission("dolores",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-08-23T06:35:12.519Z"), OffsetDateTime.parse("2022-04-01T23:59:21.675Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3154.28, "omnis", 3637.11););,                 new ConsentArtifactSchemaConsentPurpose("minima");, OffsetDateTime.parse("2022-12-03T22:47:10.600Z"),                 new ConsentArtifactSchemaConsentUser("iure", "culpa", "doloribus", "sapiente"););,                 new ConsentArtifactSchemaSignature("architecto"););;
            }};            

            VhinscResponse res = sdk.apIs.vhinsc(req, new VhinscSecurity("mollitia", "dolorem") {{
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

## vhtax

API to verify Vehicle Tax Receipt.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VhtaxRequestBody;
import org.openapis.openapi.models.operations.VhtaxRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.VhtaxRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.VhtaxResponse;
import org.openapis.openapi.models.operations.VhtaxSecurity;
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

            VhtaxRequestBody req = new VhtaxRequestBody(VhtaxRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new VhtaxRequestBodyCertificateParameters("Sunil Kumar", "123412341234", "MBLKC12EFBGJ08420. As per your Vehicle Registration Certificate.", "DL01AA0101 As per your Vehicle Registration Certificate", "Person Name. As per your Vehicle Registration Certificate");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("culpa");,                 new ConsentArtifactSchemaConsentDataConsumer("consequuntur");,                 new ConsentArtifactSchemaConsentDataProvider("repellat");,                 new ConsentArtifactSchemaConsentPermission("mollitia",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-06-30T02:19:51.375Z"), OffsetDateTime.parse("2022-07-14T19:07:02.935Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(4746.97, "velit", 6235.1););,                 new ConsentArtifactSchemaConsentPurpose("quia");, OffsetDateTime.parse("2022-11-21T17:06:48.722Z"),                 new ConsentArtifactSchemaConsentUser("laborum", "animi", "enim", "odit"););,                 new ConsentArtifactSchemaSignature("quo"););;
            }};            

            VhtaxResponse res = sdk.apIs.vhtax(req, new VhtaxSecurity("sequi", "tenetur") {{
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
