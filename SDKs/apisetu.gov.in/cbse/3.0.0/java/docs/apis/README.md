# apIs

### Available Operations

* [hpcer](#hpcer) - Class XII Passing Certificate
* [hscer](#hscer) - Class XII Marksheet
* [hsmgr](#hsmgr) - Class XII Migration Certificate
* [nchsc](#nchsc) - NCHMCT Skill Certificate (X)
* [nctsc](#nctsc) - NCHMCT Skill Certificate (XII)
* [nsesc](#nsesc) - NSE Skill Certificate (X)
* [nstsc](#nstsc) - NSE Skill Certificate (XII)
* [ntltr](#ntltr) - NEET Rank Letter
* [ntmks](#ntmks) - NEET Marksheet
* [skhsc](#skhsc) - Skill Certificate (X)
* [sktsc](#sktsc) - Skill Certificate (XII)
* [spcer](#spcer) - Class X Passing Certificate
* [sscer](#sscer) - Class X Marksheet
* [ssmgr](#ssmgr) - Class X Migration Certificate
* [tetcr](#tetcr) - Teachers Eligibility Test Certificate
* [tetms](#tetms) - Teachers Eligibility Test Mark Sheet

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
                certificateParameters = new HpcerRequestBodyCertificateParameters("Sunil Kumar", "1100040", "2016");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("placeat");,                 new ConsentArtifactSchemaConsentDataConsumer("voluptatum");,                 new ConsentArtifactSchemaConsentDataProvider("iusto");,                 new ConsentArtifactSchemaConsentPermission("excepturi",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-01-28T03:46:24.500Z"), OffsetDateTime.parse("2022-10-15T05:10:19.629Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3373.96, "veritatis", 6481.72););,                 new ConsentArtifactSchemaConsentPurpose("perferendis");, OffsetDateTime.parse("2022-03-03T02:15:00.468Z"),                 new ConsentArtifactSchemaConsentUser("sapiente", "quo", "odit", "at"););,                 new ConsentArtifactSchemaSignature("at"););;
            }};            

            HpcerResponse res = sdk.apIs.hpcer(req, new HpcerSecurity("maiores", "molestiae") {{
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
                certificateParameters = new HscerRequestBodyCertificateParameters("Sunil Kumar", "1100040", "2016");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quod");,                 new ConsentArtifactSchemaConsentDataConsumer("esse");,                 new ConsentArtifactSchemaConsentDataProvider("totam");,                 new ConsentArtifactSchemaConsentPermission("porro",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-10-06T15:49:54.663Z"), OffsetDateTime.parse("2021-09-20T20:35:01.256Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5820.2, "fugit", 5373.73););,                 new ConsentArtifactSchemaConsentPurpose("hic");, OffsetDateTime.parse("2021-06-08T13:49:32.889Z"),                 new ConsentArtifactSchemaConsentUser("beatae", "commodi", "molestiae", "modi"););,                 new ConsentArtifactSchemaSignature("qui"););;
            }};            

            HscerResponse res = sdk.apIs.hscer(req, new HscerSecurity("impedit", "cum") {{
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
                certificateParameters = new HsmgrRequestBodyCertificateParameters("Sunil Kumar", "1100040", "2016");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("esse");,                 new ConsentArtifactSchemaConsentDataConsumer("ipsum");,                 new ConsentArtifactSchemaConsentDataProvider("excepturi");,                 new ConsentArtifactSchemaConsentPermission("aspernatur",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-09-04T16:31:28.618Z"), OffsetDateTime.parse("2022-09-13T17:41:46.141Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6120.96, "dolor", 6169.34););,                 new ConsentArtifactSchemaConsentPurpose("laboriosam");, OffsetDateTime.parse("2020-04-17T15:42:43.722Z"),                 new ConsentArtifactSchemaConsentUser("fuga", "in", "corporis", "iste"););,                 new ConsentArtifactSchemaSignature("iure"););;
            }};            

            HsmgrResponse res = sdk.apIs.hsmgr(req, new HsmgrSecurity("saepe", "quidem") {{
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

## nchsc

API to verify NCHMCT Skill Certificate (X).

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NchscRequestBody;
import org.openapis.openapi.models.operations.NchscRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.NchscRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.NchscResponse;
import org.openapis.openapi.models.operations.NchscSecurity;
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

            NchscRequestBody req = new NchscRequestBody(NchscRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new NchscRequestBodyCertificateParameters("Sunil Kumar", "1100040", "2016");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("architecto");,                 new ConsentArtifactSchemaConsentDataConsumer("ipsa");,                 new ConsentArtifactSchemaConsentDataProvider("reiciendis");,                 new ConsentArtifactSchemaConsentPermission("est",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-08-29T10:25:27.700Z"), OffsetDateTime.parse("2022-10-16T05:02:54.746Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3581.52, "explicabo", 7506.86););,                 new ConsentArtifactSchemaConsentPurpose("enim");, OffsetDateTime.parse("2022-04-10T11:47:13.463Z"),                 new ConsentArtifactSchemaConsentUser("minima", "excepturi", "accusantium", "iure"););,                 new ConsentArtifactSchemaSignature("culpa"););;
            }};            

            NchscResponse res = sdk.apIs.nchsc(req, new NchscSecurity("doloribus", "sapiente") {{
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

## nctsc

API to verify NCHMCT Skill Certificate (XII).

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NctscRequestBody;
import org.openapis.openapi.models.operations.NctscRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.NctscRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.NctscResponse;
import org.openapis.openapi.models.operations.NctscSecurity;
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

            NctscRequestBody req = new NctscRequestBody(NctscRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new NctscRequestBodyCertificateParameters("Sunil Kumar", "1100040", "2016");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("architecto");,                 new ConsentArtifactSchemaConsentDataConsumer("mollitia");,                 new ConsentArtifactSchemaConsentDataProvider("dolorem");,                 new ConsentArtifactSchemaConsentPermission("culpa",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-01-02T17:10:32.894Z"), OffsetDateTime.parse("2021-11-02T05:58:55.429Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(2532.91, "commodi", 4663.11););,                 new ConsentArtifactSchemaConsentPurpose("molestiae");, OffsetDateTime.parse("2022-05-18T10:03:04.921Z"),                 new ConsentArtifactSchemaConsentUser("quia", "quis", "vitae", "laborum"););,                 new ConsentArtifactSchemaSignature("animi"););;
            }};            

            NctscResponse res = sdk.apIs.nctsc(req, new NctscSecurity("enim", "odit") {{
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

## nsesc

API to verify NSE Skill Certificate (X).

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NsescRequestBody;
import org.openapis.openapi.models.operations.NsescRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.NsescRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.NsescResponse;
import org.openapis.openapi.models.operations.NsescSecurity;
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

            NsescRequestBody req = new NsescRequestBody(NsescRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new NsescRequestBodyCertificateParameters("Sunil Kumar", "1100040", "2016");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quo");,                 new ConsentArtifactSchemaConsentDataConsumer("sequi");,                 new ConsentArtifactSchemaConsentDataProvider("tenetur");,                 new ConsentArtifactSchemaConsentPermission("ipsam",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-05-11T16:11:54.761Z"), OffsetDateTime.parse("2022-11-26T13:23:33.410Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6228.46, "temporibus", 6736.6););,                 new ConsentArtifactSchemaConsentPurpose("quasi");, OffsetDateTime.parse("2020-01-27T18:38:42.890Z"),                 new ConsentArtifactSchemaConsentUser("vero", "nihil", "praesentium", "voluptatibus"););,                 new ConsentArtifactSchemaSignature("ipsa"););;
            }};            

            NsescResponse res = sdk.apIs.nsesc(req, new NsescSecurity("omnis", "voluptate") {{
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

## nstsc

API to verify NSE Skill Certificate (XII).

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NstscRequestBody;
import org.openapis.openapi.models.operations.NstscRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.NstscRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.NstscResponse;
import org.openapis.openapi.models.operations.NstscSecurity;
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

            NstscRequestBody req = new NstscRequestBody(NstscRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new NstscRequestBodyCertificateParameters("Sunil Kumar", "1100040", "2016");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("cum");,                 new ConsentArtifactSchemaConsentDataConsumer("perferendis");,                 new ConsentArtifactSchemaConsentDataProvider("doloremque");,                 new ConsentArtifactSchemaConsentPermission("reprehenderit",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-01-08T10:49:12.847Z"), OffsetDateTime.parse("2022-08-22T19:15:58.586Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(2961.4, "iusto", 1187.27););,                 new ConsentArtifactSchemaConsentPurpose("harum");, OffsetDateTime.parse("2022-02-13T15:01:52.114Z"),                 new ConsentArtifactSchemaConsentUser("commodi", "repudiandae", "quae", "ipsum"););,                 new ConsentArtifactSchemaSignature("quidem"););;
            }};            

            NstscResponse res = sdk.apIs.nstsc(req, new NstscSecurity("molestias", "excepturi") {{
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

## ntltr

API to verify NEET Rank Letter.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NtltrRequestBody;
import org.openapis.openapi.models.operations.NtltrRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.NtltrRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.NtltrResponse;
import org.openapis.openapi.models.operations.NtltrSecurity;
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

            NtltrRequestBody req = new NtltrRequestBody(NtltrRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new NtltrRequestBodyCertificateParameters("Sunil Kumar", "1100040", "2016");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("pariatur");,                 new ConsentArtifactSchemaConsentDataConsumer("modi");,                 new ConsentArtifactSchemaConsentDataProvider("praesentium");,                 new ConsentArtifactSchemaConsentPermission("rem",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-09-20T03:14:35.704Z"), OffsetDateTime.parse("2021-04-10T08:07:33.561Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(831.12, "itaque", 2777.18););,                 new ConsentArtifactSchemaConsentPurpose("enim");, OffsetDateTime.parse("2022-05-02T09:29:06.042Z"),                 new ConsentArtifactSchemaConsentUser("quibusdam", "explicabo", "deserunt", "distinctio"););,                 new ConsentArtifactSchemaSignature("quibusdam"););;
            }};            

            NtltrResponse res = sdk.apIs.ntltr(req, new NtltrSecurity("labore", "modi") {{
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

## ntmks

API to verify NEET Marksheet.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NtmksRequestBody;
import org.openapis.openapi.models.operations.NtmksRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.NtmksRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.NtmksResponse;
import org.openapis.openapi.models.operations.NtmksSecurity;
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

            NtmksRequestBody req = new NtmksRequestBody(NtmksRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new NtmksRequestBodyCertificateParameters("Sunil Kumar", "1100040", "2016");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("qui");,                 new ConsentArtifactSchemaConsentDataConsumer("aliquid");,                 new ConsentArtifactSchemaConsentDataProvider("cupiditate");,                 new ConsentArtifactSchemaConsentPermission("quos",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-11-01T19:07:16.800Z"), OffsetDateTime.parse("2021-11-22T01:26:35.048Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(46.95, "fugit", 6778.17););,                 new ConsentArtifactSchemaConsentPurpose("excepturi");, OffsetDateTime.parse("2022-04-19T03:15:40.816Z"),                 new ConsentArtifactSchemaConsentUser("tempore", "labore", "delectus", "eum"););,                 new ConsentArtifactSchemaSignature("non"););;
            }};            

            NtmksResponse res = sdk.apIs.ntmks(req, new NtmksSecurity("eligendi", "sint") {{
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

## skhsc

API to verify Skill Certificate (X).

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SkhscRequestBody;
import org.openapis.openapi.models.operations.SkhscRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.SkhscRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.SkhscResponse;
import org.openapis.openapi.models.operations.SkhscSecurity;
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

            SkhscRequestBody req = new SkhscRequestBody(SkhscRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new SkhscRequestBodyCertificateParameters("Sunil Kumar", "1100040", "2016");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("aliquid");,                 new ConsentArtifactSchemaConsentDataConsumer("provident");,                 new ConsentArtifactSchemaConsentDataProvider("necessitatibus");,                 new ConsentArtifactSchemaConsentPermission("sint",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-07-22T03:36:34.615Z"), OffsetDateTime.parse("2020-02-22T17:45:21.686Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6800.56, "in", 4491.98););,                 new ConsentArtifactSchemaConsentPurpose("illum");, OffsetDateTime.parse("2020-11-26T01:41:04.216Z"),                 new ConsentArtifactSchemaConsentUser("dicta", "magnam", "cumque", "facere"););,                 new ConsentArtifactSchemaSignature("ea"););;
            }};            

            SkhscResponse res = sdk.apIs.skhsc(req, new SkhscSecurity("aliquid", "laborum") {{
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

## sktsc

API to verify Skill Certificate (XII).

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SktscRequestBody;
import org.openapis.openapi.models.operations.SktscRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.SktscRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.SktscResponse;
import org.openapis.openapi.models.operations.SktscSecurity;
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

            SktscRequestBody req = new SktscRequestBody(SktscRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new SktscRequestBodyCertificateParameters("Sunil Kumar", "1100040", "2016");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("accusamus");,                 new ConsentArtifactSchemaConsentDataConsumer("non");,                 new ConsentArtifactSchemaConsentDataProvider("occaecati");,                 new ConsentArtifactSchemaConsentPermission("enim",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2020-02-08T20:51:42.354Z"), OffsetDateTime.parse("2021-10-28T10:05:29.849Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(7252.55, "id", 5013.24););,                 new ConsentArtifactSchemaConsentPurpose("deleniti");, OffsetDateTime.parse("2022-04-23T13:35:30.978Z"),                 new ConsentArtifactSchemaConsentUser("deserunt", "nisi", "vel", "natus"););,                 new ConsentArtifactSchemaSignature("omnis"););;
            }};            

            SktscResponse res = sdk.apIs.sktsc(req, new SktscSecurity("molestiae", "perferendis") {{
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
                certificateParameters = new SpcerRequestBodyCertificateParameters("Sunil Kumar", "1100040", "2016");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("nihil");,                 new ConsentArtifactSchemaConsentDataConsumer("magnam");,                 new ConsentArtifactSchemaConsentDataProvider("distinctio");,                 new ConsentArtifactSchemaConsentPermission("id",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-09-17T02:55:11.783Z"), OffsetDateTime.parse("2022-05-20T10:11:05.115Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(7491.7, "eum", 8784.53););,                 new ConsentArtifactSchemaConsentPurpose("aspernatur");, OffsetDateTime.parse("2022-09-14T03:02:47.808Z"),                 new ConsentArtifactSchemaConsentUser("et", "excepturi", "ullam", "provident"););,                 new ConsentArtifactSchemaSignature("quos"););;
            }};            

            SpcerResponse res = sdk.apIs.spcer(req, new SpcerSecurity("sint", "accusantium") {{
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
                certificateParameters = new SscerRequestBodyCertificateParameters("Sunil Kumar", "1100040", "2016");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("reiciendis");,                 new ConsentArtifactSchemaConsentDataConsumer("mollitia");,                 new ConsentArtifactSchemaConsentDataProvider("ad");,                 new ConsentArtifactSchemaConsentPermission("eum",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-02-07T18:15:06.372Z"), OffsetDateTime.parse("2022-08-19T20:09:28.183Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(972.6, "iure", 9840.43););,                 new ConsentArtifactSchemaConsentPurpose("debitis");, OffsetDateTime.parse("2022-03-12T17:44:26.081Z"),                 new ConsentArtifactSchemaConsentUser("deleniti", "facilis", "in", "architecto"););,                 new ConsentArtifactSchemaSignature("architecto"););;
            }};            

            SscerResponse res = sdk.apIs.sscer(req, new SscerSecurity("repudiandae", "ullam") {{
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

## ssmgr

API to verify Class X Migration Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SsmgrRequestBody;
import org.openapis.openapi.models.operations.SsmgrRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.SsmgrRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.SsmgrResponse;
import org.openapis.openapi.models.operations.SsmgrSecurity;
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

            SsmgrRequestBody req = new SsmgrRequestBody(SsmgrRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new SsmgrRequestBodyCertificateParameters("Sunil Kumar", "1100040", "2016");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("expedita");,                 new ConsentArtifactSchemaConsentDataConsumer("nihil");,                 new ConsentArtifactSchemaConsentDataProvider("repellat");,                 new ConsentArtifactSchemaConsentPermission("quibusdam",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-02-04T19:17:08.641Z"), OffsetDateTime.parse("2022-11-20T20:56:20.791Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(1624.93, "praesentium", 6155.6););,                 new ConsentArtifactSchemaConsentPurpose("magni");, OffsetDateTime.parse("2022-03-22T15:30:46.869Z"),                 new ConsentArtifactSchemaConsentUser("illum", "pariatur", "maxime", "ea"););,                 new ConsentArtifactSchemaSignature("excepturi"););;
            }};            

            SsmgrResponse res = sdk.apIs.ssmgr(req, new SsmgrSecurity("odit", "ea") {{
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

## tetcr

API to verify Teachers Eligibility Test Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TetcrRequestBody;
import org.openapis.openapi.models.operations.TetcrRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.TetcrRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.TetcrResponse;
import org.openapis.openapi.models.operations.TetcrSecurity;
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

            TetcrRequestBody req = new TetcrRequestBody(TetcrRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new TetcrRequestBodyCertificateParameters("Sunil Kumar", "X1000XXX", "2018-DEC,2019-JUL,2019-DEC");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("accusantium");,                 new ConsentArtifactSchemaConsentDataConsumer("ab");,                 new ConsentArtifactSchemaConsentDataProvider("maiores");,                 new ConsentArtifactSchemaConsentPermission("quidem",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-07-19T10:57:57.489Z"), OffsetDateTime.parse("2022-04-12T10:47:34.158Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(505.88, "pariatur", 3654.96););,                 new ConsentArtifactSchemaConsentPurpose("voluptatibus");, OffsetDateTime.parse("2022-02-22T15:09:45.631Z"),                 new ConsentArtifactSchemaConsentUser("amet", "aut", "cumque", "corporis"););,                 new ConsentArtifactSchemaSignature("hic"););;
            }};            

            TetcrResponse res = sdk.apIs.tetcr(req, new TetcrSecurity("libero", "nobis") {{
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

## tetms

API to verify Teachers Eligibility Test Mark Sheet.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TetmsRequestBody;
import org.openapis.openapi.models.operations.TetmsRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.TetmsRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.TetmsResponse;
import org.openapis.openapi.models.operations.TetmsSecurity;
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

            TetmsRequestBody req = new TetmsRequestBody(TetmsRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new TetmsRequestBodyCertificateParameters("Sunil Kumar", "X1000XXX", "2018-DEC,2019-JUL,2019-DEC");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("dolores");,                 new ConsentArtifactSchemaConsentDataConsumer("quis");,                 new ConsentArtifactSchemaConsentDataProvider("totam");,                 new ConsentArtifactSchemaConsentPermission("dignissimos",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-08-30T06:29:24.707Z"), OffsetDateTime.parse("2022-10-27T11:39:54.088Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(185.21, "dolores", 7936.98););,                 new ConsentArtifactSchemaConsentPurpose("quam");, OffsetDateTime.parse("2022-02-15T18:44:26.943Z"),                 new ConsentArtifactSchemaConsentUser("nostrum", "hic", "recusandae", "omnis"););,                 new ConsentArtifactSchemaSignature("facilis"););;
            }};            

            TetmsResponse res = sdk.apIs.tetms(req, new TetmsSecurity("perspiciatis", "voluptatem") {{
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
