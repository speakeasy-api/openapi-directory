# apIs

### Available Operations

* [brlcs](#brlcs) - Bar License
* [dpcer](#dpcer) - Dependency Certificate
* [fmcer](#fmcer) - Family Membership Certificate
* [incer](#incer) - Income Certificate
* [lccep](#lccep) - Local Candidate/ Status Certificate
* [ndcer](#ndcer) - No Dues/ Objection Certificate
* [obcer](#obcer) - OBC Certificate
* [rmcer](#rmcer) - Marriage Certificate
* [rscer](#rscer) - Residence Certificate
* [rucer](#rucer) - Regional Language(s) Certificate
* [sicrd](#sicrd) - Senior Citizen Identity Card/ Certificate
* [vlcer](#vlcer) - Valuation Certificate

## brlcs

API to verify Bar License.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BrlcsRequestBody;
import org.openapis.openapi.models.operations.BrlcsRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.BrlcsRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.BrlcsResponse;
import org.openapis.openapi.models.operations.BrlcsSecurity;
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

            BrlcsRequestBody req = new BrlcsRequestBody(BrlcsRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new BrlcsRequestBodyCertificateParameters("20190101IN00098");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("placeat");,                 new ConsentArtifactSchemaConsentDataConsumer("voluptatum");,                 new ConsentArtifactSchemaConsentDataProvider("iusto");,                 new ConsentArtifactSchemaConsentPermission("excepturi",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-01-28T03:46:24.500Z"), OffsetDateTime.parse("2022-10-15T05:10:19.629Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3373.96, "veritatis", 6481.72););,                 new ConsentArtifactSchemaConsentPurpose("perferendis");, OffsetDateTime.parse("2022-03-03T02:15:00.468Z"),                 new ConsentArtifactSchemaConsentUser("sapiente", "quo", "odit", "at"););,                 new ConsentArtifactSchemaSignature("at"););;
            }};            

            BrlcsResponse res = sdk.apIs.brlcs(req, new BrlcsSecurity("maiores", "molestiae") {{
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
                certificateParameters = new DpcerRequestBodyCertificateParameters("20190101IN00098");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quod");,                 new ConsentArtifactSchemaConsentDataConsumer("quod");,                 new ConsentArtifactSchemaConsentDataProvider("esse");,                 new ConsentArtifactSchemaConsentPermission("totam",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2020-12-18T15:02:44.758Z"), OffsetDateTime.parse("2022-04-12T23:15:28.420Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6399.21, "occaecati", 1433.53););,                 new ConsentArtifactSchemaConsentPurpose("deleniti");, OffsetDateTime.parse("2020-09-22T07:34:53.140Z"),                 new ConsentArtifactSchemaConsentUser("totam", "beatae", "commodi", "molestiae"););,                 new ConsentArtifactSchemaSignature("modi"););;
            }};            

            DpcerResponse res = sdk.apIs.dpcer(req, new DpcerSecurity("qui", "impedit") {{
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
                certificateParameters = new FmcerRequestBodyCertificateParameters("20190101IN00098");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("cum");,                 new ConsentArtifactSchemaConsentDataConsumer("esse");,                 new ConsentArtifactSchemaConsentDataProvider("ipsum");,                 new ConsentArtifactSchemaConsentPermission("excepturi",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-12-25T03:24:03.949Z"), OffsetDateTime.parse("2022-05-20T13:30:46.463Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(1496.75, "iste", 2223.21););,                 new ConsentArtifactSchemaConsentPurpose("natus");, OffsetDateTime.parse("2022-01-21T12:46:00.641Z"),                 new ConsentArtifactSchemaConsentUser("saepe", "fuga", "in", "corporis"););,                 new ConsentArtifactSchemaSignature("iste"););;
            }};            

            FmcerResponse res = sdk.apIs.fmcer(req, new FmcerSecurity("iure", "saepe") {{
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
                certificateParameters = new IncerRequestBodyCertificateParameters("20190101IN00098");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quidem");,                 new ConsentArtifactSchemaConsentDataConsumer("architecto");,                 new ConsentArtifactSchemaConsentDataProvider("ipsa");,                 new ConsentArtifactSchemaConsentPermission("reiciendis",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-09-11T04:59:11.542Z"), OffsetDateTime.parse("2022-08-29T05:39:49.755Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(2103.82, "corporis", 1289.26););,                 new ConsentArtifactSchemaConsentPurpose("nobis");, OffsetDateTime.parse("2022-05-24T03:24:11.703Z"),                 new ConsentArtifactSchemaConsentUser("nemo", "minima", "excepturi", "accusantium"););,                 new ConsentArtifactSchemaSignature("iure"););;
            }};            

            IncerResponse res = sdk.apIs.incer(req, new IncerSecurity("culpa", "doloribus") {{
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

## lccep

API to verify Local Candidate/ Status Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.LccepRequestBody;
import org.openapis.openapi.models.operations.LccepRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.LccepRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.LccepResponse;
import org.openapis.openapi.models.operations.LccepSecurity;
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

            LccepRequestBody req = new LccepRequestBody(LccepRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new LccepRequestBodyCertificateParameters("20190101IN00098");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("sapiente");,                 new ConsentArtifactSchemaConsentDataConsumer("architecto");,                 new ConsentArtifactSchemaConsentDataProvider("mollitia");,                 new ConsentArtifactSchemaConsentPermission("dolorem",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-09-05T05:51:25.673Z"), OffsetDateTime.parse("2021-01-15T20:18:47.519Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5818.5, "numquam", 4143.69););,                 new ConsentArtifactSchemaConsentPurpose("quam");, OffsetDateTime.parse("2022-10-03T18:49:53.900Z"),                 new ConsentArtifactSchemaConsentUser("error", "quia", "quis", "vitae"););,                 new ConsentArtifactSchemaSignature("laborum"););;
            }};            

            LccepResponse res = sdk.apIs.lccep(req, new LccepSecurity("animi", "enim") {{
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

## ndcer

API to verify No Dues/ Objection Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.NdcerRequestBody;
import org.openapis.openapi.models.operations.NdcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.NdcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.NdcerResponse;
import org.openapis.openapi.models.operations.NdcerSecurity;
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

            NdcerRequestBody req = new NdcerRequestBody(NdcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new NdcerRequestBodyCertificateParameters("20190101IN00098");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("odit");,                 new ConsentArtifactSchemaConsentDataConsumer("quo");,                 new ConsentArtifactSchemaConsentDataProvider("sequi");,                 new ConsentArtifactSchemaConsentPermission("tenetur",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-05-04T04:15:52.352Z"), OffsetDateTime.parse("2022-12-17T03:20:13.120Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(971.01, "error", 8379.45););,                 new ConsentArtifactSchemaConsentPurpose("laborum");, OffsetDateTime.parse("2022-01-11T05:45:42.485Z"),                 new ConsentArtifactSchemaConsentUser("voluptatibus", "vero", "nihil", "praesentium"););,                 new ConsentArtifactSchemaSignature("voluptatibus"););;
            }};            

            NdcerResponse res = sdk.apIs.ndcer(req, new NdcerSecurity("ipsa", "omnis") {{
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
                certificateParameters = new ObcerRequestBodyCertificateParameters("20190101IN00098");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("voluptate");,                 new ConsentArtifactSchemaConsentDataConsumer("cum");,                 new ConsentArtifactSchemaConsentDataProvider("perferendis");,                 new ConsentArtifactSchemaConsentPermission("doloremque",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-09-19T18:36:39.009Z"), OffsetDateTime.parse("2022-08-22T09:14:02.538Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3594.44, "dolore", 4808.94););,                 new ConsentArtifactSchemaConsentPurpose("dicta");, OffsetDateTime.parse("2022-05-13T20:56:04.612Z"),                 new ConsentArtifactSchemaConsentUser("accusamus", "commodi", "repudiandae", "quae"););,                 new ConsentArtifactSchemaSignature("ipsum"););;
            }};            

            ObcerResponse res = sdk.apIs.obcer(req, new ObcerSecurity("quidem", "molestias") {{
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
                certificateParameters = new RmcerRequestBodyCertificateParameters("20190101IN00098");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("excepturi");,                 new ConsentArtifactSchemaConsentDataConsumer("pariatur");,                 new ConsentArtifactSchemaConsentDataProvider("modi");,                 new ConsentArtifactSchemaConsentPermission("praesentium",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-03-02T19:00:49.599Z"), OffsetDateTime.parse("2022-01-29T18:39:33.469Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5759.47, "veritatis", 9292.97););,                 new ConsentArtifactSchemaConsentPurpose("incidunt");, OffsetDateTime.parse("2022-12-28T14:02:06.064Z"),                 new ConsentArtifactSchemaConsentUser("est", "quibusdam", "explicabo", "deserunt"););,                 new ConsentArtifactSchemaSignature("distinctio"););;
            }};            

            RmcerResponse res = sdk.apIs.rmcer(req, new RmcerSecurity("quibusdam", "labore") {{
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
                certificateParameters = new RscerRequestBodyCertificateParameters("20190101IN00098");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("modi");,                 new ConsentArtifactSchemaConsentDataConsumer("qui");,                 new ConsentArtifactSchemaConsentDataProvider("aliquid");,                 new ConsentArtifactSchemaConsentPermission("cupiditate",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-12-17T07:42:55.593Z"), OffsetDateTime.parse("2022-03-04T10:29:07.095Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3698.08, "alias", 1464.41););,                 new ConsentArtifactSchemaConsentPurpose("dolorum");, OffsetDateTime.parse("2022-06-17T21:27:36.672Z"),                 new ConsentArtifactSchemaConsentUser("facilis", "tempore", "labore", "delectus"););,                 new ConsentArtifactSchemaSignature("eum"););;
            }};            

            RscerResponse res = sdk.apIs.rscer(req, new RscerSecurity("non", "eligendi") {{
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

## rucer

API to verify Regional Language(s) Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RucerRequestBody;
import org.openapis.openapi.models.operations.RucerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.RucerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.RucerResponse;
import org.openapis.openapi.models.operations.RucerSecurity;
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

            RucerRequestBody req = new RucerRequestBody(RucerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new RucerRequestBodyCertificateParameters("20190101IN00098");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("sint");,                 new ConsentArtifactSchemaConsentDataConsumer("aliquid");,                 new ConsentArtifactSchemaConsentDataProvider("provident");,                 new ConsentArtifactSchemaConsentPermission("necessitatibus",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-09-21T14:06:09.271Z"), OffsetDateTime.parse("2022-02-09T13:58:59.361Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(9527.49, "dolorum", 4471.25););,                 new ConsentArtifactSchemaConsentPurpose("in");, OffsetDateTime.parse("2020-01-25T11:09:22.009Z"),                 new ConsentArtifactSchemaConsentUser("rerum", "dicta", "magnam", "cumque"););,                 new ConsentArtifactSchemaSignature("facere"););;
            }};            

            RucerResponse res = sdk.apIs.rucer(req, new RucerSecurity("ea", "aliquid") {{
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

## sicrd

API to verify Senior Citizen Identity Card/ Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SicrdRequestBody;
import org.openapis.openapi.models.operations.SicrdRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.SicrdRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.SicrdResponse;
import org.openapis.openapi.models.operations.SicrdSecurity;
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

            SicrdRequestBody req = new SicrdRequestBody(SicrdRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new SicrdRequestBodyCertificateParameters("20190101IN00098");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("laborum");,                 new ConsentArtifactSchemaConsentDataConsumer("accusamus");,                 new ConsentArtifactSchemaConsentDataProvider("non");,                 new ConsentArtifactSchemaConsentPermission("occaecati",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-02-13T03:59:53.583Z"), OffsetDateTime.parse("2020-12-03T16:16:10.882Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5884.65, "nam", 6596.69););,                 new ConsentArtifactSchemaConsentPurpose("blanditiis");, OffsetDateTime.parse("2021-02-02T01:24:52.629Z"),                 new ConsentArtifactSchemaConsentUser("amet", "deserunt", "nisi", "vel"););,                 new ConsentArtifactSchemaSignature("natus"););;
            }};            

            SicrdResponse res = sdk.apIs.sicrd(req, new SicrdSecurity("omnis", "molestiae") {{
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
                certificateParameters = new VlcerRequestBodyCertificateParameters("20190101IN00098");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("perferendis");,                 new ConsentArtifactSchemaConsentDataConsumer("nihil");,                 new ConsentArtifactSchemaConsentDataProvider("magnam");,                 new ConsentArtifactSchemaConsentPermission("distinctio",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-06-04T18:23:50.695Z"), OffsetDateTime.parse("2022-08-14T00:52:14.624Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6180.16, "nobis", 4287.69););,                 new ConsentArtifactSchemaConsentPurpose("vero");, OffsetDateTime.parse("2022-11-24T10:55:00.183Z"),                 new ConsentArtifactSchemaConsentUser("magnam", "et", "excepturi", "ullam"););,                 new ConsentArtifactSchemaSignature("provident"););;
            }};            

            VlcerResponse res = sdk.apIs.vlcer(req, new VlcerSecurity("quos", "sint") {{
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
