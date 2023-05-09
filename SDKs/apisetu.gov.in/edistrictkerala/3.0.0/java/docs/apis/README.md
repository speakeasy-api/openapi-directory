# apIs

### Available Operations

* [cmcer](#cmcer) - Community Certificate
* [cncer](#cncer) - Conversion Certificate
* [ctcer](#ctcer) - Caste Certificate
* [dmcer](#dmcer) - Domicile Certificate
* [dpcer](#dpcer) - Dependency Certificate
* [dscer](#dscer) - Destitute Certificate
* [fmcer](#fmcer) - Family Membership Certificate
* [idcer](#idcer) - Identification Certificate
* [imcer](#imcer) - Inter-Caste Marriage Certificate
* [incer](#incer) - Income Certificate
* [lfcer](#lfcer) - Life Certificate
* [lhcer](#lhcer) - Legal Heir Certificate
* [locer](#locer) - Location Certificate
* [mncer](#mncer) - Minority Certificate
* [nrcer](#nrcer) - Non-Remarriage Certificate
* [ntcer](#ntcer) - Nativity Certificate
* [oscer](#oscer) - One and the Same Certificate
* [pncer](#pncer) - Possession and Non-Attachment Certificate
* [pscer](#pscer) - Possession Certificate
* [rlcer](#rlcer) - Relationship Certificate
* [rscer](#rscer) - Residence Certificate
* [slcer](#slcer) - Solvency Certificate
* [vlcer](#vlcer) - Valuation Certificate
* [wwcer](#wwcer) - Widow-Widower Certificate

## cmcer

API to verify Community Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CmcerRequestBody;
import org.openapis.openapi.models.operations.CmcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.CmcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.CmcerResponse;
import org.openapis.openapi.models.operations.CmcerSecurity;
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

            CmcerRequestBody req = new CmcerRequestBody(CmcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new CmcerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("placeat");,                 new ConsentArtifactSchemaConsentDataConsumer("voluptatum");,                 new ConsentArtifactSchemaConsentDataProvider("iusto");,                 new ConsentArtifactSchemaConsentPermission("excepturi",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-01-28T03:46:24.500Z"), OffsetDateTime.parse("2022-10-15T05:10:19.629Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3373.96, "veritatis", 6481.72););,                 new ConsentArtifactSchemaConsentPurpose("perferendis");, OffsetDateTime.parse("2022-03-03T02:15:00.468Z"),                 new ConsentArtifactSchemaConsentUser("sapiente", "quo", "odit", "at"););,                 new ConsentArtifactSchemaSignature("at"););;
            }};            

            CmcerResponse res = sdk.apIs.cmcer(req, new CmcerSecurity("maiores", "molestiae") {{
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
                certificateParameters = new CncerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quod");,                 new ConsentArtifactSchemaConsentDataConsumer("quod");,                 new ConsentArtifactSchemaConsentDataProvider("esse");,                 new ConsentArtifactSchemaConsentPermission("totam",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2020-12-18T15:02:44.758Z"), OffsetDateTime.parse("2022-04-12T23:15:28.420Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6399.21, "occaecati", 1433.53););,                 new ConsentArtifactSchemaConsentPurpose("deleniti");, OffsetDateTime.parse("2020-09-22T07:34:53.140Z"),                 new ConsentArtifactSchemaConsentUser("totam", "beatae", "commodi", "molestiae"););,                 new ConsentArtifactSchemaSignature("modi"););;
            }};            

            CncerResponse res = sdk.apIs.cncer(req, new CncerSecurity("qui", "impedit") {{
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
                certificateParameters = new CtcerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("cum");,                 new ConsentArtifactSchemaConsentDataConsumer("esse");,                 new ConsentArtifactSchemaConsentDataProvider("ipsum");,                 new ConsentArtifactSchemaConsentPermission("excepturi",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-12-25T03:24:03.949Z"), OffsetDateTime.parse("2022-05-20T13:30:46.463Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(1496.75, "iste", 2223.21););,                 new ConsentArtifactSchemaConsentPurpose("natus");, OffsetDateTime.parse("2022-01-21T12:46:00.641Z"),                 new ConsentArtifactSchemaConsentUser("saepe", "fuga", "in", "corporis"););,                 new ConsentArtifactSchemaSignature("iste"););;
            }};            

            CtcerResponse res = sdk.apIs.ctcer(req, new CtcerSecurity("iure", "saepe") {{
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
                certificateParameters = new DmcerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quidem");,                 new ConsentArtifactSchemaConsentDataConsumer("architecto");,                 new ConsentArtifactSchemaConsentDataProvider("ipsa");,                 new ConsentArtifactSchemaConsentPermission("reiciendis",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-09-11T04:59:11.542Z"), OffsetDateTime.parse("2022-08-29T05:39:49.755Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(2103.82, "corporis", 1289.26););,                 new ConsentArtifactSchemaConsentPurpose("nobis");, OffsetDateTime.parse("2022-05-24T03:24:11.703Z"),                 new ConsentArtifactSchemaConsentUser("nemo", "minima", "excepturi", "accusantium"););,                 new ConsentArtifactSchemaSignature("iure"););;
            }};            

            DmcerResponse res = sdk.apIs.dmcer(req, new DmcerSecurity("culpa", "doloribus") {{
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

## dpcer

API to verify Dependency Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DpcerRequestBody;
import org.openapis.openapi.models.operations.DpcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.DpcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.DpcerResponse;
import org.openapis.openapi.models.operations.DpcerSecurity;
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

            DpcerRequestBody req = new DpcerRequestBody(DpcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new DpcerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("sapiente");,                 new ConsentArtifactSchemaConsentDataConsumer("architecto");,                 new ConsentArtifactSchemaConsentDataProvider("mollitia");,                 new ConsentArtifactSchemaConsentPermission("dolorem",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-09-05T05:51:25.673Z"), OffsetDateTime.parse("2021-01-15T20:18:47.519Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5818.5, "numquam", 4143.69););,                 new ConsentArtifactSchemaConsentPurpose("quam");, OffsetDateTime.parse("2022-10-03T18:49:53.900Z"),                 new ConsentArtifactSchemaConsentUser("error", "quia", "quis", "vitae"););,                 new ConsentArtifactSchemaSignature("laborum"););;
            }};            

            DpcerResponse res = sdk.apIs.dpcer(req, new DpcerSecurity("animi", "enim") {{
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

## dscer

API to verify Destitute Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DscerRequestBody;
import org.openapis.openapi.models.operations.DscerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.DscerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.DscerResponse;
import org.openapis.openapi.models.operations.DscerSecurity;
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

            DscerRequestBody req = new DscerRequestBody(DscerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new DscerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("odit");,                 new ConsentArtifactSchemaConsentDataConsumer("quo");,                 new ConsentArtifactSchemaConsentDataProvider("sequi");,                 new ConsentArtifactSchemaConsentPermission("tenetur",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-05-04T04:15:52.352Z"), OffsetDateTime.parse("2022-12-17T03:20:13.120Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(971.01, "error", 8379.45););,                 new ConsentArtifactSchemaConsentPurpose("laborum");, OffsetDateTime.parse("2022-01-11T05:45:42.485Z"),                 new ConsentArtifactSchemaConsentUser("voluptatibus", "vero", "nihil", "praesentium"););,                 new ConsentArtifactSchemaSignature("voluptatibus"););;
            }};            

            DscerResponse res = sdk.apIs.dscer(req, new DscerSecurity("ipsa", "omnis") {{
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

## fmcer

API to verify Family Membership Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FmcerRequestBody;
import org.openapis.openapi.models.operations.FmcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.FmcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.FmcerResponse;
import org.openapis.openapi.models.operations.FmcerSecurity;
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

            FmcerRequestBody req = new FmcerRequestBody(FmcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new FmcerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("voluptate");,                 new ConsentArtifactSchemaConsentDataConsumer("cum");,                 new ConsentArtifactSchemaConsentDataProvider("perferendis");,                 new ConsentArtifactSchemaConsentPermission("doloremque",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-09-19T18:36:39.009Z"), OffsetDateTime.parse("2022-08-22T09:14:02.538Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3594.44, "dolore", 4808.94););,                 new ConsentArtifactSchemaConsentPurpose("dicta");, OffsetDateTime.parse("2022-05-13T20:56:04.612Z"),                 new ConsentArtifactSchemaConsentUser("accusamus", "commodi", "repudiandae", "quae"););,                 new ConsentArtifactSchemaSignature("ipsum"););;
            }};            

            FmcerResponse res = sdk.apIs.fmcer(req, new FmcerSecurity("quidem", "molestias") {{
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

## idcer

API to verify Identification Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IdcerRequestBody;
import org.openapis.openapi.models.operations.IdcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.IdcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.IdcerResponse;
import org.openapis.openapi.models.operations.IdcerSecurity;
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

            IdcerRequestBody req = new IdcerRequestBody(IdcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new IdcerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("excepturi");,                 new ConsentArtifactSchemaConsentDataConsumer("pariatur");,                 new ConsentArtifactSchemaConsentDataProvider("modi");,                 new ConsentArtifactSchemaConsentPermission("praesentium",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-03-02T19:00:49.599Z"), OffsetDateTime.parse("2022-01-29T18:39:33.469Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5759.47, "veritatis", 9292.97););,                 new ConsentArtifactSchemaConsentPurpose("incidunt");, OffsetDateTime.parse("2022-12-28T14:02:06.064Z"),                 new ConsentArtifactSchemaConsentUser("est", "quibusdam", "explicabo", "deserunt"););,                 new ConsentArtifactSchemaSignature("distinctio"););;
            }};            

            IdcerResponse res = sdk.apIs.idcer(req, new IdcerSecurity("quibusdam", "labore") {{
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

## imcer

API to verify Inter-Caste Marriage Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ImcerRequestBody;
import org.openapis.openapi.models.operations.ImcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.ImcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.ImcerResponse;
import org.openapis.openapi.models.operations.ImcerSecurity;
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

            ImcerRequestBody req = new ImcerRequestBody(ImcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new ImcerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("modi");,                 new ConsentArtifactSchemaConsentDataConsumer("qui");,                 new ConsentArtifactSchemaConsentDataProvider("aliquid");,                 new ConsentArtifactSchemaConsentPermission("cupiditate",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-12-17T07:42:55.593Z"), OffsetDateTime.parse("2022-03-04T10:29:07.095Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3698.08, "alias", 1464.41););,                 new ConsentArtifactSchemaConsentPurpose("dolorum");, OffsetDateTime.parse("2022-06-17T21:27:36.672Z"),                 new ConsentArtifactSchemaConsentUser("facilis", "tempore", "labore", "delectus"););,                 new ConsentArtifactSchemaSignature("eum"););;
            }};            

            ImcerResponse res = sdk.apIs.imcer(req, new ImcerSecurity("non", "eligendi") {{
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
                certificateParameters = new IncerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("sint");,                 new ConsentArtifactSchemaConsentDataConsumer("aliquid");,                 new ConsentArtifactSchemaConsentDataProvider("provident");,                 new ConsentArtifactSchemaConsentPermission("necessitatibus",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-09-21T14:06:09.271Z"), OffsetDateTime.parse("2022-02-09T13:58:59.361Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(9527.49, "dolorum", 4471.25););,                 new ConsentArtifactSchemaConsentPurpose("in");, OffsetDateTime.parse("2020-01-25T11:09:22.009Z"),                 new ConsentArtifactSchemaConsentUser("rerum", "dicta", "magnam", "cumque"););,                 new ConsentArtifactSchemaSignature("facere"););;
            }};            

            IncerResponse res = sdk.apIs.incer(req, new IncerSecurity("ea", "aliquid") {{
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

## lfcer

API to verify Life Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LfcerRequestBody;
import org.openapis.openapi.models.operations.LfcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.LfcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.LfcerResponse;
import org.openapis.openapi.models.operations.LfcerSecurity;
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

            LfcerRequestBody req = new LfcerRequestBody(LfcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new LfcerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("laborum");,                 new ConsentArtifactSchemaConsentDataConsumer("accusamus");,                 new ConsentArtifactSchemaConsentDataProvider("non");,                 new ConsentArtifactSchemaConsentPermission("occaecati",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-02-13T03:59:53.583Z"), OffsetDateTime.parse("2020-12-03T16:16:10.882Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5884.65, "nam", 6596.69););,                 new ConsentArtifactSchemaConsentPurpose("blanditiis");, OffsetDateTime.parse("2021-02-02T01:24:52.629Z"),                 new ConsentArtifactSchemaConsentUser("amet", "deserunt", "nisi", "vel"););,                 new ConsentArtifactSchemaSignature("natus"););;
            }};            

            LfcerResponse res = sdk.apIs.lfcer(req, new LfcerSecurity("omnis", "molestiae") {{
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

## lhcer

API to verify Legal Heir Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LhcerRequestBody;
import org.openapis.openapi.models.operations.LhcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.LhcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.LhcerResponse;
import org.openapis.openapi.models.operations.LhcerSecurity;
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

            LhcerRequestBody req = new LhcerRequestBody(LhcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new LhcerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("perferendis");,                 new ConsentArtifactSchemaConsentDataConsumer("nihil");,                 new ConsentArtifactSchemaConsentDataProvider("magnam");,                 new ConsentArtifactSchemaConsentPermission("distinctio",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-06-04T18:23:50.695Z"), OffsetDateTime.parse("2022-08-14T00:52:14.624Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6180.16, "nobis", 4287.69););,                 new ConsentArtifactSchemaConsentPurpose("vero");, OffsetDateTime.parse("2022-11-24T10:55:00.183Z"),                 new ConsentArtifactSchemaConsentUser("magnam", "et", "excepturi", "ullam"););,                 new ConsentArtifactSchemaSignature("provident"););;
            }};            

            LhcerResponse res = sdk.apIs.lhcer(req, new LhcerSecurity("quos", "sint") {{
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

## locer

API to verify Location Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LocerRequestBody;
import org.openapis.openapi.models.operations.LocerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.LocerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.LocerResponse;
import org.openapis.openapi.models.operations.LocerSecurity;
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

            LocerRequestBody req = new LocerRequestBody(LocerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new LocerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("accusantium");,                 new ConsentArtifactSchemaConsentDataConsumer("mollitia");,                 new ConsentArtifactSchemaConsentDataProvider("reiciendis");,                 new ConsentArtifactSchemaConsentPermission("mollitia",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-07-27T12:46:27.682Z"), OffsetDateTime.parse("2022-02-07T18:15:06.372Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(1412.64, "nemo", 972.6););,                 new ConsentArtifactSchemaConsentPurpose("iure");, OffsetDateTime.parse("2020-04-29T08:15:14.819Z"),                 new ConsentArtifactSchemaConsentUser("eius", "maxime", "deleniti", "facilis"););,                 new ConsentArtifactSchemaSignature("in"););;
            }};            

            LocerResponse res = sdk.apIs.locer(req, new LocerSecurity("architecto", "architecto") {{
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

## mncer

API to verify Minority Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MncerRequestBody;
import org.openapis.openapi.models.operations.MncerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.MncerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.MncerResponse;
import org.openapis.openapi.models.operations.MncerSecurity;
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

            MncerRequestBody req = new MncerRequestBody(MncerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new MncerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("repudiandae");,                 new ConsentArtifactSchemaConsentDataConsumer("ullam");,                 new ConsentArtifactSchemaConsentDataProvider("expedita");,                 new ConsentArtifactSchemaConsentPermission("nihil",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2020-06-23T22:50:14.437Z"), OffsetDateTime.parse("2022-02-04T19:17:08.641Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(8681.26, "accusantium", 1624.93););,                 new ConsentArtifactSchemaConsentPurpose("praesentium");, OffsetDateTime.parse("2022-09-01T04:49:52.515Z"),                 new ConsentArtifactSchemaConsentUser("sunt", "quo", "illum", "pariatur"););,                 new ConsentArtifactSchemaSignature("maxime"););;
            }};            

            MncerResponse res = sdk.apIs.mncer(req, new MncerSecurity("ea", "excepturi") {{
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

## nrcer

API to verify Non-Remarriage Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NrcerRequestBody;
import org.openapis.openapi.models.operations.NrcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.NrcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.NrcerResponse;
import org.openapis.openapi.models.operations.NrcerSecurity;
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

            NrcerRequestBody req = new NrcerRequestBody(NrcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new NrcerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("odit");,                 new ConsentArtifactSchemaConsentDataConsumer("ea");,                 new ConsentArtifactSchemaConsentDataProvider("accusantium");,                 new ConsentArtifactSchemaConsentPermission("ab",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2020-11-28T07:34:18.392Z"), OffsetDateTime.parse("2022-07-19T10:57:57.489Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(4200.75, "nam", 505.88););,                 new ConsentArtifactSchemaConsentPurpose("pariatur");, OffsetDateTime.parse("2022-01-09T22:25:53.570Z"),                 new ConsentArtifactSchemaConsentUser("perferendis", "fugiat", "amet", "aut"););,                 new ConsentArtifactSchemaSignature("cumque"););;
            }};            

            NrcerResponse res = sdk.apIs.nrcer(req, new NrcerSecurity("corporis", "hic") {{
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

## ntcer

API to verify Nativity Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NtcerRequestBody;
import org.openapis.openapi.models.operations.NtcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.NtcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.NtcerResponse;
import org.openapis.openapi.models.operations.NtcerSecurity;
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

            NtcerRequestBody req = new NtcerRequestBody(NtcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new NtcerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("libero");,                 new ConsentArtifactSchemaConsentDataConsumer("nobis");,                 new ConsentArtifactSchemaConsentDataProvider("dolores");,                 new ConsentArtifactSchemaConsentPermission("quis",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-01-08T15:06:08.615Z"), OffsetDateTime.parse("2022-08-30T06:29:24.707Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(1999.96, "eos", 185.21););,                 new ConsentArtifactSchemaConsentPurpose("dolores");, OffsetDateTime.parse("2021-08-11T12:30:29.509Z"),                 new ConsentArtifactSchemaConsentUser("dolor", "vero", "nostrum", "hic"););,                 new ConsentArtifactSchemaSignature("recusandae"););;
            }};            

            NtcerResponse res = sdk.apIs.ntcer(req, new NtcerSecurity("omnis", "facilis") {{
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

## oscer

API to verify One and the Same Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OscerRequestBody;
import org.openapis.openapi.models.operations.OscerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.OscerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.OscerResponse;
import org.openapis.openapi.models.operations.OscerSecurity;
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

            OscerRequestBody req = new OscerRequestBody(OscerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new OscerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("perspiciatis");,                 new ConsentArtifactSchemaConsentDataConsumer("voluptatem");,                 new ConsentArtifactSchemaConsentDataProvider("porro");,                 new ConsentArtifactSchemaConsentPermission("consequuntur",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-10-04T07:41:53.553Z"), OffsetDateTime.parse("2022-06-04T07:28:38.912Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6990.98, "adipisci", 9923.97););,                 new ConsentArtifactSchemaConsentPurpose("earum");, OffsetDateTime.parse("2022-05-21T21:39:29.335Z"),                 new ConsentArtifactSchemaConsentUser("dolorum", "deleniti", "pariatur", "provident"););,                 new ConsentArtifactSchemaSignature("nobis"););;
            }};            

            OscerResponse res = sdk.apIs.oscer(req, new OscerSecurity("libero", "delectus") {{
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

## pncer

API to verify Possession and Non-Attachment Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PncerRequestBody;
import org.openapis.openapi.models.operations.PncerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.PncerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.PncerResponse;
import org.openapis.openapi.models.operations.PncerSecurity;
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

            PncerRequestBody req = new PncerRequestBody(PncerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new PncerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quaerat");,                 new ConsentArtifactSchemaConsentDataConsumer("quos");,                 new ConsentArtifactSchemaConsentDataProvider("aliquid");,                 new ConsentArtifactSchemaConsentPermission("dolorem",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-10-11T19:23:49.728Z"), OffsetDateTime.parse("2022-10-13T03:45:19.154Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(9443.73, "excepturi", 7395.51););,                 new ConsentArtifactSchemaConsentPurpose("voluptate");, OffsetDateTime.parse("2022-01-11T20:43:35.875Z"),                 new ConsentArtifactSchemaConsentUser("amet", "dolorum", "numquam", "veritatis"););,                 new ConsentArtifactSchemaSignature("ipsa"););;
            }};            

            PncerResponse res = sdk.apIs.pncer(req, new PncerSecurity("ipsa", "iure") {{
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

## pscer

API to verify Possession Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PscerRequestBody;
import org.openapis.openapi.models.operations.PscerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.PscerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.PscerResponse;
import org.openapis.openapi.models.operations.PscerSecurity;
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

            PscerRequestBody req = new PscerRequestBody(PscerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new PscerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("odio");,                 new ConsentArtifactSchemaConsentDataConsumer("quaerat");,                 new ConsentArtifactSchemaConsentDataProvider("accusamus");,                 new ConsentArtifactSchemaConsentPermission("quidem",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-11-13T08:40:53.559Z"), OffsetDateTime.parse("2022-08-22T21:20:36.034Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5424.99, "sit", 8546.14););,                 new ConsentArtifactSchemaConsentPurpose("ab");, OffsetDateTime.parse("2021-08-23T01:02:18.527Z"),                 new ConsentArtifactSchemaConsentUser("iusto", "voluptate", "dolorum", "deleniti"););,                 new ConsentArtifactSchemaSignature("omnis"););;
            }};            

            PscerResponse res = sdk.apIs.pscer(req, new PscerSecurity("necessitatibus", "distinctio") {{
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

## rlcer

API to verify Relationship Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RlcerRequestBody;
import org.openapis.openapi.models.operations.RlcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.RlcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.RlcerResponse;
import org.openapis.openapi.models.operations.RlcerSecurity;
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

            RlcerRequestBody req = new RlcerRequestBody(RlcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new RlcerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("asperiores");,                 new ConsentArtifactSchemaConsentDataConsumer("nihil");,                 new ConsentArtifactSchemaConsentDataProvider("ipsum");,                 new ConsentArtifactSchemaConsentPermission("voluptate",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-03-10T07:33:18.208Z"), OffsetDateTime.parse("2022-11-11T21:56:55.945Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(206.51, "amet", 7583.79););,                 new ConsentArtifactSchemaConsentPurpose("accusamus");, OffsetDateTime.parse("2022-02-04T21:14:13.821Z"),                 new ConsentArtifactSchemaConsentUser("suscipit", "deserunt", "provident", "minima"););,                 new ConsentArtifactSchemaSignature("repellendus"););;
            }};            

            RlcerResponse res = sdk.apIs.rlcer(req, new RlcerSecurity("totam", "similique") {{
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

## rscer

API to verify Residence Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RscerRequestBody;
import org.openapis.openapi.models.operations.RscerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.RscerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.RscerResponse;
import org.openapis.openapi.models.operations.RscerSecurity;
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

            RscerRequestBody req = new RscerRequestBody(RscerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new RscerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("alias");,                 new ConsentArtifactSchemaConsentDataConsumer("at");,                 new ConsentArtifactSchemaConsentDataProvider("quaerat");,                 new ConsentArtifactSchemaConsentPermission("tempora",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-03-15T17:06:34.956Z"), OffsetDateTime.parse("2022-06-11T17:29:13.872Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6798.8, "a", 4561.3););,                 new ConsentArtifactSchemaConsentPurpose("harum");, OffsetDateTime.parse("2022-10-14T08:09:09.090Z"),                 new ConsentArtifactSchemaConsentUser("quisquam", "tenetur", "amet", "tempore"););,                 new ConsentArtifactSchemaSignature("accusamus"););;
            }};            

            RscerResponse res = sdk.apIs.rscer(req, new RscerSecurity("numquam", "enim") {{
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

## slcer

API to verify Solvency Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SlcerRequestBody;
import org.openapis.openapi.models.operations.SlcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.SlcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.SlcerResponse;
import org.openapis.openapi.models.operations.SlcerSecurity;
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

            SlcerRequestBody req = new SlcerRequestBody(SlcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new SlcerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("dolorem");,                 new ConsentArtifactSchemaConsentDataConsumer("sapiente");,                 new ConsentArtifactSchemaConsentDataProvider("totam");,                 new ConsentArtifactSchemaConsentPermission("nihil",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-04-16T06:31:32.314Z"), OffsetDateTime.parse("2022-11-05T21:38:15.600Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(4246.85, "libero", 3741.7););,                 new ConsentArtifactSchemaConsentPurpose("deserunt");, OffsetDateTime.parse("2022-10-14T13:38:40.307Z"),                 new ConsentArtifactSchemaConsentUser("incidunt", "qui", "cupiditate", "maxime"););,                 new ConsentArtifactSchemaSignature("pariatur"););;
            }};            

            SlcerResponse res = sdk.apIs.slcer(req, new SlcerSecurity("soluta", "dicta") {{
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

## vlcer

API to verify Valuation Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VlcerRequestBody;
import org.openapis.openapi.models.operations.VlcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.VlcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.VlcerResponse;
import org.openapis.openapi.models.operations.VlcerSecurity;
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

            VlcerRequestBody req = new VlcerRequestBody(VlcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new VlcerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("laborum");,                 new ConsentArtifactSchemaConsentDataConsumer("totam");,                 new ConsentArtifactSchemaConsentDataProvider("incidunt");,                 new ConsentArtifactSchemaConsentPermission("aspernatur",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-04-14T08:18:32.851Z"), OffsetDateTime.parse("2022-03-17T21:02:01.759Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(4631.5, "molestias", 8404.29););,                 new ConsentArtifactSchemaConsentPurpose("qui");, OffsetDateTime.parse("2022-11-09T03:08:00.106Z"),                 new ConsentArtifactSchemaConsentUser("magni", "odio", "sunt", "ullam"););,                 new ConsentArtifactSchemaSignature("nam"););;
            }};            

            VlcerResponse res = sdk.apIs.vlcer(req, new VlcerSecurity("hic", "voluptatem") {{
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

## wwcer

API to verify Widow-Widower Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.WwcerRequestBody;
import org.openapis.openapi.models.operations.WwcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.WwcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.WwcerResponse;
import org.openapis.openapi.models.operations.WwcerSecurity;
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

            WwcerRequestBody req = new WwcerRequestBody(WwcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new WwcerRequestBodyCertificateParameters("564323", "342567", "QASE5");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("cumque");,                 new ConsentArtifactSchemaConsentDataConsumer("soluta");,                 new ConsentArtifactSchemaConsentDataProvider("nobis");,                 new ConsentArtifactSchemaConsentPermission("et",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-05-07T21:24:02.842Z"), OffsetDateTime.parse("2022-04-02T12:31:52.465Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5521.93, "tempore", 5844.76););,                 new ConsentArtifactSchemaConsentPurpose("aperiam");, OffsetDateTime.parse("2022-05-16T23:21:11.104Z"),                 new ConsentArtifactSchemaConsentUser("dolore", "labore", "adipisci", "dolorum"););,                 new ConsentArtifactSchemaSignature("architecto"););;
            }};            

            WwcerResponse res = sdk.apIs.wwcer(req, new WwcerSecurity("quae", "aut") {{
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
