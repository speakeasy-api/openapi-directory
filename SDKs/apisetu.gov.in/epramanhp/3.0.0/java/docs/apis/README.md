# apIs

### Available Operations

* [agcer](#agcer) - Agriculture/ Agriculturist Certificate
* [bacer](#bacer) - Backward Area Certificate
* [bhcer](#bhcer) - Bonafide Certificate
* [chcer](#chcer) - Character Certificate
* [dccer](#dccer) - Dogra Class Certificate
* [ffcer](#ffcer) - Freedom Fighter Certificate
* [incer](#incer) - Income Certificate
* [lhcer](#lhcer) - Legal Heir Certificate
* [mncer](#mncer) - Minority Certificate
* [obcer](#obcer) - OBC Certificate
* [psprt](#psprt) - Passport/ Passport Verification
* [racer](#racer) - Rural Area Certificate
* [rmcer](#rmcer) - Marriage Certificate
* [shcer](#shcer) - SC/ST  Certificate

## agcer

API to verify Agriculture/ Agriculturist Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AgcerRequestBody;
import org.openapis.openapi.models.operations.AgcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.AgcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.AgcerResponse;
import org.openapis.openapi.models.operations.AgcerSecurity;
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

            AgcerRequestBody req = new AgcerRequestBody(AgcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new AgcerRequestBodyCertificateParameters("4 Characters of Name", "XXXX/XX/2017");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("placeat");,                 new ConsentArtifactSchemaConsentDataConsumer("voluptatum");,                 new ConsentArtifactSchemaConsentDataProvider("iusto");,                 new ConsentArtifactSchemaConsentPermission("excepturi",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-01-28T03:46:24.500Z"), OffsetDateTime.parse("2022-10-15T05:10:19.629Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3373.96, "veritatis", 6481.72););,                 new ConsentArtifactSchemaConsentPurpose("perferendis");, OffsetDateTime.parse("2022-03-03T02:15:00.468Z"),                 new ConsentArtifactSchemaConsentUser("sapiente", "quo", "odit", "at"););,                 new ConsentArtifactSchemaSignature("at"););;
            }};            

            AgcerResponse res = sdk.apIs.agcer(req, new AgcerSecurity("maiores", "molestiae") {{
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

## bacer

API to verify Backward Area Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BacerRequestBody;
import org.openapis.openapi.models.operations.BacerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.BacerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.BacerResponse;
import org.openapis.openapi.models.operations.BacerSecurity;
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

            BacerRequestBody req = new BacerRequestBody(BacerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new BacerRequestBodyCertificateParameters("4 Characters of Name", "XXXX/XX/2017");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quod");,                 new ConsentArtifactSchemaConsentDataConsumer("quod");,                 new ConsentArtifactSchemaConsentDataProvider("esse");,                 new ConsentArtifactSchemaConsentPermission("totam",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2020-12-18T15:02:44.758Z"), OffsetDateTime.parse("2022-04-12T23:15:28.420Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6399.21, "occaecati", 1433.53););,                 new ConsentArtifactSchemaConsentPurpose("deleniti");, OffsetDateTime.parse("2020-09-22T07:34:53.140Z"),                 new ConsentArtifactSchemaConsentUser("totam", "beatae", "commodi", "molestiae"););,                 new ConsentArtifactSchemaSignature("modi"););;
            }};            

            BacerResponse res = sdk.apIs.bacer(req, new BacerSecurity("qui", "impedit") {{
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

## bhcer

API to verify Bonafide Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BhcerRequestBody;
import org.openapis.openapi.models.operations.BhcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.BhcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.BhcerResponse;
import org.openapis.openapi.models.operations.BhcerSecurity;
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

            BhcerRequestBody req = new BhcerRequestBody(BhcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new BhcerRequestBodyCertificateParameters("4 Characters of Name", "XXXX/XX/2017");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("cum");,                 new ConsentArtifactSchemaConsentDataConsumer("esse");,                 new ConsentArtifactSchemaConsentDataProvider("ipsum");,                 new ConsentArtifactSchemaConsentPermission("excepturi",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-12-25T03:24:03.949Z"), OffsetDateTime.parse("2022-05-20T13:30:46.463Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(1496.75, "iste", 2223.21););,                 new ConsentArtifactSchemaConsentPurpose("natus");, OffsetDateTime.parse("2022-01-21T12:46:00.641Z"),                 new ConsentArtifactSchemaConsentUser("saepe", "fuga", "in", "corporis"););,                 new ConsentArtifactSchemaSignature("iste"););;
            }};            

            BhcerResponse res = sdk.apIs.bhcer(req, new BhcerSecurity("iure", "saepe") {{
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
                certificateParameters = new ChcerRequestBodyCertificateParameters("4 Characters of Name", "XXXX/XX/2017");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quidem");,                 new ConsentArtifactSchemaConsentDataConsumer("architecto");,                 new ConsentArtifactSchemaConsentDataProvider("ipsa");,                 new ConsentArtifactSchemaConsentPermission("reiciendis",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-09-11T04:59:11.542Z"), OffsetDateTime.parse("2022-08-29T05:39:49.755Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(2103.82, "corporis", 1289.26););,                 new ConsentArtifactSchemaConsentPurpose("nobis");, OffsetDateTime.parse("2022-05-24T03:24:11.703Z"),                 new ConsentArtifactSchemaConsentUser("nemo", "minima", "excepturi", "accusantium"););,                 new ConsentArtifactSchemaSignature("iure"););;
            }};            

            ChcerResponse res = sdk.apIs.chcer(req, new ChcerSecurity("culpa", "doloribus") {{
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

## dccer

API to verify Dogra Class Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DccerRequestBody;
import org.openapis.openapi.models.operations.DccerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.DccerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.DccerResponse;
import org.openapis.openapi.models.operations.DccerSecurity;
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

            DccerRequestBody req = new DccerRequestBody(DccerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new DccerRequestBodyCertificateParameters("4 Characters of Name", "XXXX/XX/2017");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("sapiente");,                 new ConsentArtifactSchemaConsentDataConsumer("architecto");,                 new ConsentArtifactSchemaConsentDataProvider("mollitia");,                 new ConsentArtifactSchemaConsentPermission("dolorem",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-09-05T05:51:25.673Z"), OffsetDateTime.parse("2021-01-15T20:18:47.519Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5818.5, "numquam", 4143.69););,                 new ConsentArtifactSchemaConsentPurpose("quam");, OffsetDateTime.parse("2022-10-03T18:49:53.900Z"),                 new ConsentArtifactSchemaConsentUser("error", "quia", "quis", "vitae"););,                 new ConsentArtifactSchemaSignature("laborum"););;
            }};            

            DccerResponse res = sdk.apIs.dccer(req, new DccerSecurity("animi", "enim") {{
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

## ffcer

API to verify Freedom Fighter Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.FfcerRequestBody;
import org.openapis.openapi.models.operations.FfcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.FfcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.FfcerResponse;
import org.openapis.openapi.models.operations.FfcerSecurity;
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

            FfcerRequestBody req = new FfcerRequestBody(FfcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new FfcerRequestBodyCertificateParameters("4 Characters of Name", "XXXX/XX/2017");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("odit");,                 new ConsentArtifactSchemaConsentDataConsumer("quo");,                 new ConsentArtifactSchemaConsentDataProvider("sequi");,                 new ConsentArtifactSchemaConsentPermission("tenetur",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-05-04T04:15:52.352Z"), OffsetDateTime.parse("2022-12-17T03:20:13.120Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(971.01, "error", 8379.45););,                 new ConsentArtifactSchemaConsentPurpose("laborum");, OffsetDateTime.parse("2022-01-11T05:45:42.485Z"),                 new ConsentArtifactSchemaConsentUser("voluptatibus", "vero", "nihil", "praesentium"););,                 new ConsentArtifactSchemaSignature("voluptatibus"););;
            }};            

            FfcerResponse res = sdk.apIs.ffcer(req, new FfcerSecurity("ipsa", "omnis") {{
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
                certificateParameters = new IncerRequestBodyCertificateParameters("4 Characters of Name", "XXXX/XX/2017");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("voluptate");,                 new ConsentArtifactSchemaConsentDataConsumer("cum");,                 new ConsentArtifactSchemaConsentDataProvider("perferendis");,                 new ConsentArtifactSchemaConsentPermission("doloremque",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-09-19T18:36:39.009Z"), OffsetDateTime.parse("2022-08-22T09:14:02.538Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3594.44, "dolore", 4808.94););,                 new ConsentArtifactSchemaConsentPurpose("dicta");, OffsetDateTime.parse("2022-05-13T20:56:04.612Z"),                 new ConsentArtifactSchemaConsentUser("accusamus", "commodi", "repudiandae", "quae"););,                 new ConsentArtifactSchemaSignature("ipsum"););;
            }};            

            IncerResponse res = sdk.apIs.incer(req, new IncerSecurity("quidem", "molestias") {{
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
                certificateParameters = new LhcerRequestBodyCertificateParameters("4 Characters of Name", "XXXX/XX/2017");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("excepturi");,                 new ConsentArtifactSchemaConsentDataConsumer("pariatur");,                 new ConsentArtifactSchemaConsentDataProvider("modi");,                 new ConsentArtifactSchemaConsentPermission("praesentium",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-03-02T19:00:49.599Z"), OffsetDateTime.parse("2022-01-29T18:39:33.469Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5759.47, "veritatis", 9292.97););,                 new ConsentArtifactSchemaConsentPurpose("incidunt");, OffsetDateTime.parse("2022-12-28T14:02:06.064Z"),                 new ConsentArtifactSchemaConsentUser("est", "quibusdam", "explicabo", "deserunt"););,                 new ConsentArtifactSchemaSignature("distinctio"););;
            }};            

            LhcerResponse res = sdk.apIs.lhcer(req, new LhcerSecurity("quibusdam", "labore") {{
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
                certificateParameters = new MncerRequestBodyCertificateParameters("4 Characters of Name", "XXXX/XX/2017");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("modi");,                 new ConsentArtifactSchemaConsentDataConsumer("qui");,                 new ConsentArtifactSchemaConsentDataProvider("aliquid");,                 new ConsentArtifactSchemaConsentPermission("cupiditate",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-12-17T07:42:55.593Z"), OffsetDateTime.parse("2022-03-04T10:29:07.095Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3698.08, "alias", 1464.41););,                 new ConsentArtifactSchemaConsentPurpose("dolorum");, OffsetDateTime.parse("2022-06-17T21:27:36.672Z"),                 new ConsentArtifactSchemaConsentUser("facilis", "tempore", "labore", "delectus"););,                 new ConsentArtifactSchemaSignature("eum"););;
            }};            

            MncerResponse res = sdk.apIs.mncer(req, new MncerSecurity("non", "eligendi") {{
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
                certificateParameters = new ObcerRequestBodyCertificateParameters("4 Characters of Name", "XXXX/XX/2017");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("sint");,                 new ConsentArtifactSchemaConsentDataConsumer("aliquid");,                 new ConsentArtifactSchemaConsentDataProvider("provident");,                 new ConsentArtifactSchemaConsentPermission("necessitatibus",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-09-21T14:06:09.271Z"), OffsetDateTime.parse("2022-02-09T13:58:59.361Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(9527.49, "dolorum", 4471.25););,                 new ConsentArtifactSchemaConsentPurpose("in");, OffsetDateTime.parse("2020-01-25T11:09:22.009Z"),                 new ConsentArtifactSchemaConsentUser("rerum", "dicta", "magnam", "cumque"););,                 new ConsentArtifactSchemaSignature("facere"););;
            }};            

            ObcerResponse res = sdk.apIs.obcer(req, new ObcerSecurity("ea", "aliquid") {{
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

## psprt

API to verify Passport/ Passport Verification.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PsprtRequestBody;
import org.openapis.openapi.models.operations.PsprtRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.PsprtRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.PsprtResponse;
import org.openapis.openapi.models.operations.PsprtSecurity;
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

            PsprtRequestBody req = new PsprtRequestBody(PsprtRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new PsprtRequestBodyCertificateParameters("4 Characters of Name", "XXXX/XX/2017");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("laborum");,                 new ConsentArtifactSchemaConsentDataConsumer("accusamus");,                 new ConsentArtifactSchemaConsentDataProvider("non");,                 new ConsentArtifactSchemaConsentPermission("occaecati",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-02-13T03:59:53.583Z"), OffsetDateTime.parse("2020-12-03T16:16:10.882Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5884.65, "nam", 6596.69););,                 new ConsentArtifactSchemaConsentPurpose("blanditiis");, OffsetDateTime.parse("2021-02-02T01:24:52.629Z"),                 new ConsentArtifactSchemaConsentUser("amet", "deserunt", "nisi", "vel"););,                 new ConsentArtifactSchemaSignature("natus"););;
            }};            

            PsprtResponse res = sdk.apIs.psprt(req, new PsprtSecurity("omnis", "molestiae") {{
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

## racer

API to verify Rural Area Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.RacerRequestBody;
import org.openapis.openapi.models.operations.RacerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.RacerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.RacerResponse;
import org.openapis.openapi.models.operations.RacerSecurity;
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

            RacerRequestBody req = new RacerRequestBody(RacerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new RacerRequestBodyCertificateParameters("4 Characters of Name", "XXXX/XX/2017");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("perferendis");,                 new ConsentArtifactSchemaConsentDataConsumer("nihil");,                 new ConsentArtifactSchemaConsentDataProvider("magnam");,                 new ConsentArtifactSchemaConsentPermission("distinctio",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-06-04T18:23:50.695Z"), OffsetDateTime.parse("2022-08-14T00:52:14.624Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6180.16, "nobis", 4287.69););,                 new ConsentArtifactSchemaConsentPurpose("vero");, OffsetDateTime.parse("2022-11-24T10:55:00.183Z"),                 new ConsentArtifactSchemaConsentUser("magnam", "et", "excepturi", "ullam"););,                 new ConsentArtifactSchemaSignature("provident"););;
            }};            

            RacerResponse res = sdk.apIs.racer(req, new RacerSecurity("quos", "sint") {{
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
                certificateParameters = new RmcerRequestBodyCertificateParameters("4 Characters of Name", "XXXX/XX/2017");;
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
                certificateParameters = new ShcerRequestBodyCertificateParameters("4 Characters of Name", "XXXX/XX/2017");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("repudiandae");,                 new ConsentArtifactSchemaConsentDataConsumer("ullam");,                 new ConsentArtifactSchemaConsentDataProvider("expedita");,                 new ConsentArtifactSchemaConsentPermission("nihil",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2020-06-23T22:50:14.437Z"), OffsetDateTime.parse("2022-02-04T19:17:08.641Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(8681.26, "accusantium", 1624.93););,                 new ConsentArtifactSchemaConsentPurpose("praesentium");, OffsetDateTime.parse("2022-09-01T04:49:52.515Z"),                 new ConsentArtifactSchemaConsentUser("sunt", "quo", "illum", "pariatur"););,                 new ConsentArtifactSchemaSignature("maxime"););;
            }};            

            ShcerResponse res = sdk.apIs.shcer(req, new ShcerSecurity("ea", "excepturi") {{
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
