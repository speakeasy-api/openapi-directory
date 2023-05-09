# apIs

### Available Operations

* [btcer](#btcer) - Birth Certificate
* [ctcer](#ctcer) - Caste Certificate
* [dmcer](#dmcer) - Domicile Certificate
* [dpicr](#dpicr) - Disabled Person Identity Card/ Certificate
* [dtcer](#dtcer) - Death Certificate
* [incer](#incer) - Income Certificate

## btcer

API to verify Birth Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BtcerRequestBody;
import org.openapis.openapi.models.operations.BtcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.BtcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.BtcerResponse;
import org.openapis.openapi.models.operations.BtcerSecurity;
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

            BtcerRequestBody req = new BtcerRequestBody(BtcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new BtcerRequestBodyCertificateParameters("1234", "2345");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("iusto");,                 new ConsentArtifactSchemaConsentDataConsumer("excepturi");,                 new ConsentArtifactSchemaConsentDataProvider("nisi");,                 new ConsentArtifactSchemaConsentPermission("recusandae",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-10-15T05:10:19.629Z"), OffsetDateTime.parse("2022-11-30T04:44:49.578Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6481.72, "perferendis", 3682.41););,                 new ConsentArtifactSchemaConsentPurpose("repellendus");, OffsetDateTime.parse("2020-08-31T22:02:25.322Z"),                 new ConsentArtifactSchemaConsentUser("odit", "at", "at", "maiores"););,                 new ConsentArtifactSchemaSignature("molestiae"););;
            }};            

            BtcerResponse res = sdk.apIs.btcer(req, new BtcerSecurity("quod", "quod") {{
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

## ctcer

API to verify Caste Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CtcerRequestBody;
import org.openapis.openapi.models.operations.CtcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.CtcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.CtcerResponse;
import org.openapis.openapi.models.operations.CtcerSecurity;
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

            CtcerRequestBody req = new CtcerRequestBody(CtcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new CtcerRequestBodyCertificateParameters("1234", "6789");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("esse");,                 new ConsentArtifactSchemaConsentDataConsumer("totam");,                 new ConsentArtifactSchemaConsentDataProvider("porro");,                 new ConsentArtifactSchemaConsentPermission("dolorum",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-04-12T23:15:28.420Z"), OffsetDateTime.parse("2021-11-02T03:00:47.309Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(1433.53, "deleniti", 9446.69););,                 new ConsentArtifactSchemaConsentPurpose("optio");, OffsetDateTime.parse("2022-10-15T16:29:54.554Z"),                 new ConsentArtifactSchemaConsentUser("commodi", "molestiae", "modi", "qui"););,                 new ConsentArtifactSchemaSignature("impedit"););;
            }};            

            CtcerResponse res = sdk.apIs.ctcer(req, new CtcerSecurity("cum", "esse") {{
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

## dmcer

API to verify Domicile Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DmcerRequestBody;
import org.openapis.openapi.models.operations.DmcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.DmcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.DmcerResponse;
import org.openapis.openapi.models.operations.DmcerSecurity;
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

            DmcerRequestBody req = new DmcerRequestBody(DmcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new DmcerRequestBodyCertificateParameters("1234", "2345");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("ipsum");,                 new ConsentArtifactSchemaConsentDataConsumer("excepturi");,                 new ConsentArtifactSchemaConsentDataProvider("aspernatur");,                 new ConsentArtifactSchemaConsentPermission("perferendis",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-05-20T13:30:46.463Z"), OffsetDateTime.parse("2022-05-22T14:02:28.908Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(2223.21, "natus", 3864.89););,                 new ConsentArtifactSchemaConsentPurpose("hic");, OffsetDateTime.parse("2020-12-15T09:45:44.943Z"),                 new ConsentArtifactSchemaConsentUser("in", "corporis", "iste", "iure"););,                 new ConsentArtifactSchemaSignature("saepe"););;
            }};            

            DmcerResponse res = sdk.apIs.dmcer(req, new DmcerSecurity("quidem", "architecto") {{
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
                certificateParameters = new DpicrRequestBodyCertificateParameters("1213232332", "213232232");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("ipsa");,                 new ConsentArtifactSchemaConsentDataConsumer("reiciendis");,                 new ConsentArtifactSchemaConsentDataProvider("est");,                 new ConsentArtifactSchemaConsentPermission("mollitia",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-08-29T05:39:49.755Z"), OffsetDateTime.parse("2022-08-23T06:35:12.519Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(1289.26, "nobis", 3154.28););,                 new ConsentArtifactSchemaConsentPurpose("omnis");, OffsetDateTime.parse("2022-09-04T08:35:09.957Z"),                 new ConsentArtifactSchemaConsentUser("excepturi", "accusantium", "iure", "culpa"););,                 new ConsentArtifactSchemaSignature("doloribus"););;
            }};            

            DpicrResponse res = sdk.apIs.dpicr(req, new DpicrSecurity("sapiente", "architecto") {{
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

## dtcer

API to verify Death Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DtcerRequestBody;
import org.openapis.openapi.models.operations.DtcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.DtcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.DtcerResponse;
import org.openapis.openapi.models.operations.DtcerSecurity;
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

            DtcerRequestBody req = new DtcerRequestBody(DtcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new DtcerRequestBodyCertificateParameters("1234", "2345");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("mollitia");,                 new ConsentArtifactSchemaConsentDataConsumer("dolorem");,                 new ConsentArtifactSchemaConsentDataProvider("culpa");,                 new ConsentArtifactSchemaConsentPermission("consequuntur",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-01-15T20:18:47.519Z"), OffsetDateTime.parse("2022-06-30T02:19:51.375Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(4143.69, "quam", 4746.97););,                 new ConsentArtifactSchemaConsentPurpose("velit");, OffsetDateTime.parse("2022-09-06T22:51:09.401Z"),                 new ConsentArtifactSchemaConsentUser("quis", "vitae", "laborum", "animi"););,                 new ConsentArtifactSchemaSignature("enim"););;
            }};            

            DtcerResponse res = sdk.apIs.dtcer(req, new DtcerSecurity("odit", "quo") {{
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

## incer

API to verify Income Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IncerRequestBody;
import org.openapis.openapi.models.operations.IncerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.IncerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.IncerResponse;
import org.openapis.openapi.models.operations.IncerSecurity;
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

            IncerRequestBody req = new IncerRequestBody(IncerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new IncerRequestBodyCertificateParameters("Application No", "CertificateID");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("sequi");,                 new ConsentArtifactSchemaConsentDataConsumer("tenetur");,                 new ConsentArtifactSchemaConsentDataProvider("ipsam");,                 new ConsentArtifactSchemaConsentPermission("id",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-12-17T03:20:13.120Z"), OffsetDateTime.parse("2022-05-18T15:52:05.226Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(8379.45, "laborum", 960.98););,                 new ConsentArtifactSchemaConsentPurpose("reiciendis");, OffsetDateTime.parse("2020-05-14T09:04:32.205Z"),                 new ConsentArtifactSchemaConsentUser("nihil", "praesentium", "voluptatibus", "ipsa"););,                 new ConsentArtifactSchemaSignature("omnis"););;
            }};            

            IncerResponse res = sdk.apIs.incer(req, new IncerSecurity("voluptate", "cum") {{
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
