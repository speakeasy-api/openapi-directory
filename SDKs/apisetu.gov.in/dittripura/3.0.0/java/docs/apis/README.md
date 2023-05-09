# apIs

### Available Operations

* [chcer](#chcer) - Character Certificate
* [dncer](#dncer) - Distance Certificate
* [dpcer](#dpcer) - Dependency Certificate
* [fslcs](#fslcs) - Food Stuff License
* [grred](#grred) - Grievance Redressal/ Registration
* [incer](#incer) - Income Certificate
* [isoal](#isoal) - Issue of Arm Licence
* [lvcer](#lvcer) - Land Valuation/ Holding/ Record Certificate
* [malcs](#malcs) - Manufacturer License
* [mpkby](#mpkby) - Small Savings Agent License
* [obcer](#obcer) - OBC Certificate
* [ritin](#ritin) - Right to Information
* [rmcer](#rmcer) - Marriage Certificate
* [rscer](#rscer) - Residence Certificate
* [shcer](#shcer) - SC/ST  Certificate
* [smcer](#smcer) - Surviving Member Certificate
* [sslcs](#sslcs) - Standardized Agency Systems (SAS) Agent License
* [vrwmi](#vrwmi) - License/ Verification of Weights, Measures and Instruments

## chcer

API to verify Character Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChcerRequestBody;
import org.openapis.openapi.models.operations.ChcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.ChcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.ChcerResponse;
import org.openapis.openapi.models.operations.ChcerSecurity;
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

            ChcerRequestBody req = new ChcerRequestBody(ChcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new ChcerRequestBodyCertificateParameters("PRTC/2017/84891", "B2881A75");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("placeat");,                 new ConsentArtifactSchemaConsentDataConsumer("voluptatum");,                 new ConsentArtifactSchemaConsentDataProvider("iusto");,                 new ConsentArtifactSchemaConsentPermission("excepturi",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-01-28T03:46:24.500Z"), OffsetDateTime.parse("2022-10-15T05:10:19.629Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3373.96, "veritatis", 6481.72););,                 new ConsentArtifactSchemaConsentPurpose("perferendis");, OffsetDateTime.parse("2022-03-03T02:15:00.468Z"),                 new ConsentArtifactSchemaConsentUser("sapiente", "quo", "odit", "at"););,                 new ConsentArtifactSchemaSignature("at"););;
            }};            

            ChcerResponse res = sdk.apIs.chcer(req, new ChcerSecurity("maiores", "molestiae") {{
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

## dncer

API to verify Distance Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DncerRequestBody;
import org.openapis.openapi.models.operations.DncerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.DncerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.DncerResponse;
import org.openapis.openapi.models.operations.DncerSecurity;
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

            DncerRequestBody req = new DncerRequestBody(DncerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new DncerRequestBodyCertificateParameters("PRTC/2017/84891", "B2881A75");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quod");,                 new ConsentArtifactSchemaConsentDataConsumer("quod");,                 new ConsentArtifactSchemaConsentDataProvider("esse");,                 new ConsentArtifactSchemaConsentPermission("totam",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2020-12-18T15:02:44.758Z"), OffsetDateTime.parse("2022-04-12T23:15:28.420Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6399.21, "occaecati", 1433.53););,                 new ConsentArtifactSchemaConsentPurpose("deleniti");, OffsetDateTime.parse("2020-09-22T07:34:53.140Z"),                 new ConsentArtifactSchemaConsentUser("totam", "beatae", "commodi", "molestiae"););,                 new ConsentArtifactSchemaSignature("modi"););;
            }};            

            DncerResponse res = sdk.apIs.dncer(req, new DncerSecurity("qui", "impedit") {{
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
                certificateParameters = new DpcerRequestBodyCertificateParameters("PRTC/2017/84891", "B2881A75");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("cum");,                 new ConsentArtifactSchemaConsentDataConsumer("esse");,                 new ConsentArtifactSchemaConsentDataProvider("ipsum");,                 new ConsentArtifactSchemaConsentPermission("excepturi",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-12-25T03:24:03.949Z"), OffsetDateTime.parse("2022-05-20T13:30:46.463Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(1496.75, "iste", 2223.21););,                 new ConsentArtifactSchemaConsentPurpose("natus");, OffsetDateTime.parse("2022-01-21T12:46:00.641Z"),                 new ConsentArtifactSchemaConsentUser("saepe", "fuga", "in", "corporis"););,                 new ConsentArtifactSchemaSignature("iste"););;
            }};            

            DpcerResponse res = sdk.apIs.dpcer(req, new DpcerSecurity("iure", "saepe") {{
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

## fslcs

API to verify Food Stuff License.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FslcsRequestBody;
import org.openapis.openapi.models.operations.FslcsRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.FslcsRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.FslcsResponse;
import org.openapis.openapi.models.operations.FslcsSecurity;
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

            FslcsRequestBody req = new FslcsRequestBody(FslcsRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new FslcsRequestBodyCertificateParameters("PRTC/2017/84891", "B2881A75");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quidem");,                 new ConsentArtifactSchemaConsentDataConsumer("architecto");,                 new ConsentArtifactSchemaConsentDataProvider("ipsa");,                 new ConsentArtifactSchemaConsentPermission("reiciendis",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-09-11T04:59:11.542Z"), OffsetDateTime.parse("2022-08-29T05:39:49.755Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(2103.82, "corporis", 1289.26););,                 new ConsentArtifactSchemaConsentPurpose("nobis");, OffsetDateTime.parse("2022-05-24T03:24:11.703Z"),                 new ConsentArtifactSchemaConsentUser("nemo", "minima", "excepturi", "accusantium"););,                 new ConsentArtifactSchemaSignature("iure"););;
            }};            

            FslcsResponse res = sdk.apIs.fslcs(req, new FslcsSecurity("culpa", "doloribus") {{
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

## grred

API to verify Grievance Redressal/ Registration.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GrredRequestBody;
import org.openapis.openapi.models.operations.GrredRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.GrredRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.GrredResponse;
import org.openapis.openapi.models.operations.GrredSecurity;
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

            GrredRequestBody req = new GrredRequestBody(GrredRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new GrredRequestBodyCertificateParameters("PRTC/2017/84891", "B2881A75");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("sapiente");,                 new ConsentArtifactSchemaConsentDataConsumer("architecto");,                 new ConsentArtifactSchemaConsentDataProvider("mollitia");,                 new ConsentArtifactSchemaConsentPermission("dolorem",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-09-05T05:51:25.673Z"), OffsetDateTime.parse("2021-01-15T20:18:47.519Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5818.5, "numquam", 4143.69););,                 new ConsentArtifactSchemaConsentPurpose("quam");, OffsetDateTime.parse("2022-10-03T18:49:53.900Z"),                 new ConsentArtifactSchemaConsentUser("error", "quia", "quis", "vitae"););,                 new ConsentArtifactSchemaSignature("laborum"););;
            }};            

            GrredResponse res = sdk.apIs.grred(req, new GrredSecurity("animi", "enim") {{
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
                certificateParameters = new IncerRequestBodyCertificateParameters("PRTC/2017/84891", "B2881A75");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("odit");,                 new ConsentArtifactSchemaConsentDataConsumer("quo");,                 new ConsentArtifactSchemaConsentDataProvider("sequi");,                 new ConsentArtifactSchemaConsentPermission("tenetur",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-05-04T04:15:52.352Z"), OffsetDateTime.parse("2022-12-17T03:20:13.120Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(971.01, "error", 8379.45););,                 new ConsentArtifactSchemaConsentPurpose("laborum");, OffsetDateTime.parse("2022-01-11T05:45:42.485Z"),                 new ConsentArtifactSchemaConsentUser("voluptatibus", "vero", "nihil", "praesentium"););,                 new ConsentArtifactSchemaSignature("voluptatibus"););;
            }};            

            IncerResponse res = sdk.apIs.incer(req, new IncerSecurity("ipsa", "omnis") {{
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

## isoal

API to verify Issue of Arm Licence.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IsoalRequestBody;
import org.openapis.openapi.models.operations.IsoalRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.IsoalRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.IsoalResponse;
import org.openapis.openapi.models.operations.IsoalSecurity;
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

            IsoalRequestBody req = new IsoalRequestBody(IsoalRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new IsoalRequestBodyCertificateParameters("PRTC/2017/84891", "B2881A75");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("voluptate");,                 new ConsentArtifactSchemaConsentDataConsumer("cum");,                 new ConsentArtifactSchemaConsentDataProvider("perferendis");,                 new ConsentArtifactSchemaConsentPermission("doloremque",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-09-19T18:36:39.009Z"), OffsetDateTime.parse("2022-08-22T09:14:02.538Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3594.44, "dolore", 4808.94););,                 new ConsentArtifactSchemaConsentPurpose("dicta");, OffsetDateTime.parse("2022-05-13T20:56:04.612Z"),                 new ConsentArtifactSchemaConsentUser("accusamus", "commodi", "repudiandae", "quae"););,                 new ConsentArtifactSchemaSignature("ipsum"););;
            }};            

            IsoalResponse res = sdk.apIs.isoal(req, new IsoalSecurity("quidem", "molestias") {{
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

## lvcer

API to verify Land Valuation/ Holding/ Record Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LvcerRequestBody;
import org.openapis.openapi.models.operations.LvcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.LvcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.LvcerResponse;
import org.openapis.openapi.models.operations.LvcerSecurity;
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

            LvcerRequestBody req = new LvcerRequestBody(LvcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new LvcerRequestBodyCertificateParameters("PRTC/2017/84891", "B2881A75");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("excepturi");,                 new ConsentArtifactSchemaConsentDataConsumer("pariatur");,                 new ConsentArtifactSchemaConsentDataProvider("modi");,                 new ConsentArtifactSchemaConsentPermission("praesentium",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-03-02T19:00:49.599Z"), OffsetDateTime.parse("2022-01-29T18:39:33.469Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5759.47, "veritatis", 9292.97););,                 new ConsentArtifactSchemaConsentPurpose("incidunt");, OffsetDateTime.parse("2022-12-28T14:02:06.064Z"),                 new ConsentArtifactSchemaConsentUser("est", "quibusdam", "explicabo", "deserunt"););,                 new ConsentArtifactSchemaSignature("distinctio"););;
            }};            

            LvcerResponse res = sdk.apIs.lvcer(req, new LvcerSecurity("quibusdam", "labore") {{
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

## malcs

API to verify Manufacturer License.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MalcsRequestBody;
import org.openapis.openapi.models.operations.MalcsRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.MalcsRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.MalcsResponse;
import org.openapis.openapi.models.operations.MalcsSecurity;
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

            MalcsRequestBody req = new MalcsRequestBody(MalcsRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new MalcsRequestBodyCertificateParameters("PRTC/2017/84891", "B2881A75");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("modi");,                 new ConsentArtifactSchemaConsentDataConsumer("qui");,                 new ConsentArtifactSchemaConsentDataProvider("aliquid");,                 new ConsentArtifactSchemaConsentPermission("cupiditate",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-12-17T07:42:55.593Z"), OffsetDateTime.parse("2022-03-04T10:29:07.095Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3698.08, "alias", 1464.41););,                 new ConsentArtifactSchemaConsentPurpose("dolorum");, OffsetDateTime.parse("2022-06-17T21:27:36.672Z"),                 new ConsentArtifactSchemaConsentUser("facilis", "tempore", "labore", "delectus"););,                 new ConsentArtifactSchemaSignature("eum"););;
            }};            

            MalcsResponse res = sdk.apIs.malcs(req, new MalcsSecurity("non", "eligendi") {{
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

## mpkby

API to verify Small Savings Agent License.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MpkbyRequestBody;
import org.openapis.openapi.models.operations.MpkbyRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.MpkbyRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.MpkbyResponse;
import org.openapis.openapi.models.operations.MpkbySecurity;
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

            MpkbyRequestBody req = new MpkbyRequestBody(MpkbyRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new MpkbyRequestBodyCertificateParameters("PRTC/2017/84891", "B2881A75");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("sint");,                 new ConsentArtifactSchemaConsentDataConsumer("aliquid");,                 new ConsentArtifactSchemaConsentDataProvider("provident");,                 new ConsentArtifactSchemaConsentPermission("necessitatibus",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-09-21T14:06:09.271Z"), OffsetDateTime.parse("2022-02-09T13:58:59.361Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(9527.49, "dolorum", 4471.25););,                 new ConsentArtifactSchemaConsentPurpose("in");, OffsetDateTime.parse("2020-01-25T11:09:22.009Z"),                 new ConsentArtifactSchemaConsentUser("rerum", "dicta", "magnam", "cumque"););,                 new ConsentArtifactSchemaSignature("facere"););;
            }};            

            MpkbyResponse res = sdk.apIs.mpkby(req, new MpkbySecurity("ea", "aliquid") {{
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

## obcer

API to verify OBC Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ObcerRequestBody;
import org.openapis.openapi.models.operations.ObcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.ObcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.ObcerResponse;
import org.openapis.openapi.models.operations.ObcerSecurity;
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

            ObcerRequestBody req = new ObcerRequestBody(ObcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new ObcerRequestBodyCertificateParameters("PRTC/2017/84891", "B2881A75");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("laborum");,                 new ConsentArtifactSchemaConsentDataConsumer("accusamus");,                 new ConsentArtifactSchemaConsentDataProvider("non");,                 new ConsentArtifactSchemaConsentPermission("occaecati",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-02-13T03:59:53.583Z"), OffsetDateTime.parse("2020-12-03T16:16:10.882Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5884.65, "nam", 6596.69););,                 new ConsentArtifactSchemaConsentPurpose("blanditiis");, OffsetDateTime.parse("2021-02-02T01:24:52.629Z"),                 new ConsentArtifactSchemaConsentUser("amet", "deserunt", "nisi", "vel"););,                 new ConsentArtifactSchemaSignature("natus"););;
            }};            

            ObcerResponse res = sdk.apIs.obcer(req, new ObcerSecurity("omnis", "molestiae") {{
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

## ritin

API to verify Right to Information.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RitinRequestBody;
import org.openapis.openapi.models.operations.RitinRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.RitinRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.RitinResponse;
import org.openapis.openapi.models.operations.RitinSecurity;
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

            RitinRequestBody req = new RitinRequestBody(RitinRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new RitinRequestBodyCertificateParameters("PRTC/2017/84891", "B2881A75");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("perferendis");,                 new ConsentArtifactSchemaConsentDataConsumer("nihil");,                 new ConsentArtifactSchemaConsentDataProvider("magnam");,                 new ConsentArtifactSchemaConsentPermission("distinctio",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-06-04T18:23:50.695Z"), OffsetDateTime.parse("2022-08-14T00:52:14.624Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6180.16, "nobis", 4287.69););,                 new ConsentArtifactSchemaConsentPurpose("vero");, OffsetDateTime.parse("2022-11-24T10:55:00.183Z"),                 new ConsentArtifactSchemaConsentUser("magnam", "et", "excepturi", "ullam"););,                 new ConsentArtifactSchemaSignature("provident"););;
            }};            

            RitinResponse res = sdk.apIs.ritin(req, new RitinSecurity("quos", "sint") {{
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

## rmcer

API to verify Marriage Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RmcerRequestBody;
import org.openapis.openapi.models.operations.RmcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.RmcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.RmcerResponse;
import org.openapis.openapi.models.operations.RmcerSecurity;
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

            RmcerRequestBody req = new RmcerRequestBody(RmcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new RmcerRequestBodyCertificateParameters("PRTC/2017/84891", "B2881A75");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("accusantium");,                 new ConsentArtifactSchemaConsentDataConsumer("mollitia");,                 new ConsentArtifactSchemaConsentDataProvider("reiciendis");,                 new ConsentArtifactSchemaConsentPermission("mollitia",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-07-27T12:46:27.682Z"), OffsetDateTime.parse("2022-02-07T18:15:06.372Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(1412.64, "nemo", 972.6););,                 new ConsentArtifactSchemaConsentPurpose("iure");, OffsetDateTime.parse("2020-04-29T08:15:14.819Z"),                 new ConsentArtifactSchemaConsentUser("eius", "maxime", "deleniti", "facilis"););,                 new ConsentArtifactSchemaSignature("in"););;
            }};            

            RmcerResponse res = sdk.apIs.rmcer(req, new RmcerSecurity("architecto", "architecto") {{
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
                certificateParameters = new RscerRequestBodyCertificateParameters("PRTC/2017/84891", "B2881A75");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("repudiandae");,                 new ConsentArtifactSchemaConsentDataConsumer("ullam");,                 new ConsentArtifactSchemaConsentDataProvider("expedita");,                 new ConsentArtifactSchemaConsentPermission("nihil",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2020-06-23T22:50:14.437Z"), OffsetDateTime.parse("2022-02-04T19:17:08.641Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(8681.26, "accusantium", 1624.93););,                 new ConsentArtifactSchemaConsentPurpose("praesentium");, OffsetDateTime.parse("2022-09-01T04:49:52.515Z"),                 new ConsentArtifactSchemaConsentUser("sunt", "quo", "illum", "pariatur"););,                 new ConsentArtifactSchemaSignature("maxime"););;
            }};            

            RscerResponse res = sdk.apIs.rscer(req, new RscerSecurity("ea", "excepturi") {{
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

## shcer

API to verify SC/ST  Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ShcerRequestBody;
import org.openapis.openapi.models.operations.ShcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.ShcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.ShcerResponse;
import org.openapis.openapi.models.operations.ShcerSecurity;
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

            ShcerRequestBody req = new ShcerRequestBody(ShcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new ShcerRequestBodyCertificateParameters("PRTC/2017/84891", "B2881A75");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("odit");,                 new ConsentArtifactSchemaConsentDataConsumer("ea");,                 new ConsentArtifactSchemaConsentDataProvider("accusantium");,                 new ConsentArtifactSchemaConsentPermission("ab",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2020-11-28T07:34:18.392Z"), OffsetDateTime.parse("2022-07-19T10:57:57.489Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(4200.75, "nam", 505.88););,                 new ConsentArtifactSchemaConsentPurpose("pariatur");, OffsetDateTime.parse("2022-01-09T22:25:53.570Z"),                 new ConsentArtifactSchemaConsentUser("perferendis", "fugiat", "amet", "aut"););,                 new ConsentArtifactSchemaSignature("cumque"););;
            }};            

            ShcerResponse res = sdk.apIs.shcer(req, new ShcerSecurity("corporis", "hic") {{
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

## smcer

API to verify Surviving Member Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SmcerRequestBody;
import org.openapis.openapi.models.operations.SmcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.SmcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.SmcerResponse;
import org.openapis.openapi.models.operations.SmcerSecurity;
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

            SmcerRequestBody req = new SmcerRequestBody(SmcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new SmcerRequestBodyCertificateParameters("PRTC/2017/84891", "B2881A75");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("libero");,                 new ConsentArtifactSchemaConsentDataConsumer("nobis");,                 new ConsentArtifactSchemaConsentDataProvider("dolores");,                 new ConsentArtifactSchemaConsentPermission("quis",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-01-08T15:06:08.615Z"), OffsetDateTime.parse("2022-08-30T06:29:24.707Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(1999.96, "eos", 185.21););,                 new ConsentArtifactSchemaConsentPurpose("dolores");, OffsetDateTime.parse("2021-08-11T12:30:29.509Z"),                 new ConsentArtifactSchemaConsentUser("dolor", "vero", "nostrum", "hic"););,                 new ConsentArtifactSchemaSignature("recusandae"););;
            }};            

            SmcerResponse res = sdk.apIs.smcer(req, new SmcerSecurity("omnis", "facilis") {{
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

## sslcs

API to verify Standardized Agency Systems (SAS) Agent License.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SslcsRequestBody;
import org.openapis.openapi.models.operations.SslcsRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.SslcsRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.SslcsResponse;
import org.openapis.openapi.models.operations.SslcsSecurity;
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

            SslcsRequestBody req = new SslcsRequestBody(SslcsRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new SslcsRequestBodyCertificateParameters("PRTC/2017/84891", "B2881A75");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("perspiciatis");,                 new ConsentArtifactSchemaConsentDataConsumer("voluptatem");,                 new ConsentArtifactSchemaConsentDataProvider("porro");,                 new ConsentArtifactSchemaConsentPermission("consequuntur",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-10-04T07:41:53.553Z"), OffsetDateTime.parse("2022-06-04T07:28:38.912Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6990.98, "adipisci", 9923.97););,                 new ConsentArtifactSchemaConsentPurpose("earum");, OffsetDateTime.parse("2022-05-21T21:39:29.335Z"),                 new ConsentArtifactSchemaConsentUser("dolorum", "deleniti", "pariatur", "provident"););,                 new ConsentArtifactSchemaSignature("nobis"););;
            }};            

            SslcsResponse res = sdk.apIs.sslcs(req, new SslcsSecurity("libero", "delectus") {{
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

## vrwmi

API to verify License/ Verification of Weights, Measures and Instruments.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.VrwmiRequestBody;
import org.openapis.openapi.models.operations.VrwmiRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.VrwmiRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.VrwmiResponse;
import org.openapis.openapi.models.operations.VrwmiSecurity;
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

            VrwmiRequestBody req = new VrwmiRequestBody(VrwmiRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new VrwmiRequestBodyCertificateParameters("PRTC/2017/84891", "B2881A75");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quaerat");,                 new ConsentArtifactSchemaConsentDataConsumer("quos");,                 new ConsentArtifactSchemaConsentDataProvider("aliquid");,                 new ConsentArtifactSchemaConsentPermission("dolorem",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-10-11T19:23:49.728Z"), OffsetDateTime.parse("2022-10-13T03:45:19.154Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(9443.73, "excepturi", 7395.51););,                 new ConsentArtifactSchemaConsentPurpose("voluptate");, OffsetDateTime.parse("2022-01-11T20:43:35.875Z"),                 new ConsentArtifactSchemaConsentUser("amet", "dolorum", "numquam", "veritatis"););,                 new ConsentArtifactSchemaSignature("ipsa"););;
            }};            

            VrwmiResponse res = sdk.apIs.vrwmi(req, new VrwmiSecurity("ipsa", "iure") {{
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
