# apIs

### Available Operations

* [aecmw](#aecmw) - Application for Renewal of Contractor Migrant Workmen license
* [aemtw](#aemtw) - Application for Renewal of Motor Transport Worker Registration
* [agcer](#agcer) - Agriculture/ Agriculturist Certificate
* [alimw](#alimw) - Application for License for Inter State Migrant Workmen
* [arcmw](#arcmw) - Application for Registration of Contractor Migrant Workmen license
* [armtw](#armtw) - Application for Registration of Motor Transport Worker Registration
* [bacer](#bacer) - Backward Area Certificate
* [bhcer](#bhcer) - Bonafide Certificate
* [bpcrd](#bpcrd) - BPL Card
* [btcer](#btcer) - Birth Certificate
* [cecer](#cecer) - Renewal Certificate of Contract Labour License
* [chcer](#chcer) - Character Certificate
* [clcer](#clcer) - Registration Certificate for Contract Labour License
* [coprg](#coprg) - Copy of Pariwar Register
* [dccer](#dccer) - Dogra Class Certificate
* [dmcer](#dmcer) - Domicile Certificate
* [dpicr](#dpicr) - Disabled Person Identity Card/ Certificate
* [dtcer](#dtcer) - Death Certificate
* [ercer](#ercer) - Registration Certificate of Establishment Employing Contract Labour
* [ffcer](#ffcer) - Freedom Fighter Certificate
* [igcer](#igcer) - Indigent (Needy Person) Certificate
* [incer](#incer) - Income Certificate
* [lhcer](#lhcer) - Legal Heir Certificate
* [mncer](#mncer) - Minority Certificate
* [mnrga](#mnrga) - MNREGA Job Card
* [obcer](#obcer) - OBC Certificate
* [racer](#racer) - Rural Area Certificate
* [rmcer](#rmcer) - Marriage Certificate
* [secer](#secer) - Renewal Certificate of Shops And Commercial Establishment
* [shcer](#shcer) - SC/ST  Certificate
* [sicrd](#sicrd) - Senior Citizen Identity Card/ Certificate
* [srcer](#srcer) - Registration Certificate of Shops And Commercial Establishment

## aecmw

API to verify Application for Renewal of Contractor Migrant Workmen license.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AecmwRequestBody;
import org.openapis.openapi.models.operations.AecmwRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.AecmwRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.AecmwResponse;
import org.openapis.openapi.models.operations.AecmwSecurity;
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

            AecmwRequestBody req = new AecmwRequestBody(AecmwRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new AecmwRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("placeat");,                 new ConsentArtifactSchemaConsentDataConsumer("voluptatum");,                 new ConsentArtifactSchemaConsentDataProvider("iusto");,                 new ConsentArtifactSchemaConsentPermission("excepturi",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-01-28T03:46:24.500Z"), OffsetDateTime.parse("2022-10-15T05:10:19.629Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3373.96, "veritatis", 6481.72););,                 new ConsentArtifactSchemaConsentPurpose("perferendis");, OffsetDateTime.parse("2022-03-03T02:15:00.468Z"),                 new ConsentArtifactSchemaConsentUser("sapiente", "quo", "odit", "at"););,                 new ConsentArtifactSchemaSignature("at"););;
            }};            

            AecmwResponse res = sdk.apIs.aecmw(req, new AecmwSecurity("maiores", "molestiae") {{
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

## aemtw

API to verify Application for Renewal of Motor Transport Worker Registration.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AemtwRequestBody;
import org.openapis.openapi.models.operations.AemtwRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.AemtwRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.AemtwResponse;
import org.openapis.openapi.models.operations.AemtwSecurity;
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

            AemtwRequestBody req = new AemtwRequestBody(AemtwRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new AemtwRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quod");,                 new ConsentArtifactSchemaConsentDataConsumer("quod");,                 new ConsentArtifactSchemaConsentDataProvider("esse");,                 new ConsentArtifactSchemaConsentPermission("totam",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2020-12-18T15:02:44.758Z"), OffsetDateTime.parse("2022-04-12T23:15:28.420Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6399.21, "occaecati", 1433.53););,                 new ConsentArtifactSchemaConsentPurpose("deleniti");, OffsetDateTime.parse("2020-09-22T07:34:53.140Z"),                 new ConsentArtifactSchemaConsentUser("totam", "beatae", "commodi", "molestiae"););,                 new ConsentArtifactSchemaSignature("modi"););;
            }};            

            AemtwResponse res = sdk.apIs.aemtw(req, new AemtwSecurity("qui", "impedit") {{
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
                certificateParameters = new AgcerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("cum");,                 new ConsentArtifactSchemaConsentDataConsumer("esse");,                 new ConsentArtifactSchemaConsentDataProvider("ipsum");,                 new ConsentArtifactSchemaConsentPermission("excepturi",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-12-25T03:24:03.949Z"), OffsetDateTime.parse("2022-05-20T13:30:46.463Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(1496.75, "iste", 2223.21););,                 new ConsentArtifactSchemaConsentPurpose("natus");, OffsetDateTime.parse("2022-01-21T12:46:00.641Z"),                 new ConsentArtifactSchemaConsentUser("saepe", "fuga", "in", "corporis"););,                 new ConsentArtifactSchemaSignature("iste"););;
            }};            

            AgcerResponse res = sdk.apIs.agcer(req, new AgcerSecurity("iure", "saepe") {{
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

## alimw

API to verify Application for License for Inter State Migrant Workmen.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AlimwRequestBody;
import org.openapis.openapi.models.operations.AlimwRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.AlimwRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.AlimwResponse;
import org.openapis.openapi.models.operations.AlimwSecurity;
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

            AlimwRequestBody req = new AlimwRequestBody(AlimwRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new AlimwRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quidem");,                 new ConsentArtifactSchemaConsentDataConsumer("architecto");,                 new ConsentArtifactSchemaConsentDataProvider("ipsa");,                 new ConsentArtifactSchemaConsentPermission("reiciendis",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-09-11T04:59:11.542Z"), OffsetDateTime.parse("2022-08-29T05:39:49.755Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(2103.82, "corporis", 1289.26););,                 new ConsentArtifactSchemaConsentPurpose("nobis");, OffsetDateTime.parse("2022-05-24T03:24:11.703Z"),                 new ConsentArtifactSchemaConsentUser("nemo", "minima", "excepturi", "accusantium"););,                 new ConsentArtifactSchemaSignature("iure"););;
            }};            

            AlimwResponse res = sdk.apIs.alimw(req, new AlimwSecurity("culpa", "doloribus") {{
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

## arcmw

API to verify Application for Registration of Contractor Migrant Workmen license.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArcmwRequestBody;
import org.openapis.openapi.models.operations.ArcmwRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.ArcmwRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.ArcmwResponse;
import org.openapis.openapi.models.operations.ArcmwSecurity;
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

            ArcmwRequestBody req = new ArcmwRequestBody(ArcmwRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new ArcmwRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("sapiente");,                 new ConsentArtifactSchemaConsentDataConsumer("architecto");,                 new ConsentArtifactSchemaConsentDataProvider("mollitia");,                 new ConsentArtifactSchemaConsentPermission("dolorem",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-09-05T05:51:25.673Z"), OffsetDateTime.parse("2021-01-15T20:18:47.519Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5818.5, "numquam", 4143.69););,                 new ConsentArtifactSchemaConsentPurpose("quam");, OffsetDateTime.parse("2022-10-03T18:49:53.900Z"),                 new ConsentArtifactSchemaConsentUser("error", "quia", "quis", "vitae"););,                 new ConsentArtifactSchemaSignature("laborum"););;
            }};            

            ArcmwResponse res = sdk.apIs.arcmw(req, new ArcmwSecurity("animi", "enim") {{
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

## armtw

API to verify Application for Registration of Motor Transport Worker Registration.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArmtwRequestBody;
import org.openapis.openapi.models.operations.ArmtwRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.ArmtwRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.ArmtwResponse;
import org.openapis.openapi.models.operations.ArmtwSecurity;
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

            ArmtwRequestBody req = new ArmtwRequestBody(ArmtwRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new ArmtwRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("odit");,                 new ConsentArtifactSchemaConsentDataConsumer("quo");,                 new ConsentArtifactSchemaConsentDataProvider("sequi");,                 new ConsentArtifactSchemaConsentPermission("tenetur",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-05-04T04:15:52.352Z"), OffsetDateTime.parse("2022-12-17T03:20:13.120Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(971.01, "error", 8379.45););,                 new ConsentArtifactSchemaConsentPurpose("laborum");, OffsetDateTime.parse("2022-01-11T05:45:42.485Z"),                 new ConsentArtifactSchemaConsentUser("voluptatibus", "vero", "nihil", "praesentium"););,                 new ConsentArtifactSchemaSignature("voluptatibus"););;
            }};            

            ArmtwResponse res = sdk.apIs.armtw(req, new ArmtwSecurity("ipsa", "omnis") {{
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
                certificateParameters = new BacerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("voluptate");,                 new ConsentArtifactSchemaConsentDataConsumer("cum");,                 new ConsentArtifactSchemaConsentDataProvider("perferendis");,                 new ConsentArtifactSchemaConsentPermission("doloremque",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-09-19T18:36:39.009Z"), OffsetDateTime.parse("2022-08-22T09:14:02.538Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3594.44, "dolore", 4808.94););,                 new ConsentArtifactSchemaConsentPurpose("dicta");, OffsetDateTime.parse("2022-05-13T20:56:04.612Z"),                 new ConsentArtifactSchemaConsentUser("accusamus", "commodi", "repudiandae", "quae"););,                 new ConsentArtifactSchemaSignature("ipsum"););;
            }};            

            BacerResponse res = sdk.apIs.bacer(req, new BacerSecurity("quidem", "molestias") {{
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
                certificateParameters = new BhcerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("excepturi");,                 new ConsentArtifactSchemaConsentDataConsumer("pariatur");,                 new ConsentArtifactSchemaConsentDataProvider("modi");,                 new ConsentArtifactSchemaConsentPermission("praesentium",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-03-02T19:00:49.599Z"), OffsetDateTime.parse("2022-01-29T18:39:33.469Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5759.47, "veritatis", 9292.97););,                 new ConsentArtifactSchemaConsentPurpose("incidunt");, OffsetDateTime.parse("2022-12-28T14:02:06.064Z"),                 new ConsentArtifactSchemaConsentUser("est", "quibusdam", "explicabo", "deserunt"););,                 new ConsentArtifactSchemaSignature("distinctio"););;
            }};            

            BhcerResponse res = sdk.apIs.bhcer(req, new BhcerSecurity("quibusdam", "labore") {{
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

## bpcrd

API to verify BPL Card.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.BpcrdRequestBody;
import org.openapis.openapi.models.operations.BpcrdRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.BpcrdRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.BpcrdResponse;
import org.openapis.openapi.models.operations.BpcrdSecurity;
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

            BpcrdRequestBody req = new BpcrdRequestBody(BpcrdRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new BpcrdRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("modi");,                 new ConsentArtifactSchemaConsentDataConsumer("qui");,                 new ConsentArtifactSchemaConsentDataProvider("aliquid");,                 new ConsentArtifactSchemaConsentPermission("cupiditate",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-12-17T07:42:55.593Z"), OffsetDateTime.parse("2022-03-04T10:29:07.095Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3698.08, "alias", 1464.41););,                 new ConsentArtifactSchemaConsentPurpose("dolorum");, OffsetDateTime.parse("2022-06-17T21:27:36.672Z"),                 new ConsentArtifactSchemaConsentUser("facilis", "tempore", "labore", "delectus"););,                 new ConsentArtifactSchemaSignature("eum"););;
            }};            

            BpcrdResponse res = sdk.apIs.bpcrd(req, new BpcrdSecurity("non", "eligendi") {{
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
                certificateParameters = new BtcerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("sint");,                 new ConsentArtifactSchemaConsentDataConsumer("aliquid");,                 new ConsentArtifactSchemaConsentDataProvider("provident");,                 new ConsentArtifactSchemaConsentPermission("necessitatibus",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-09-21T14:06:09.271Z"), OffsetDateTime.parse("2022-02-09T13:58:59.361Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(9527.49, "dolorum", 4471.25););,                 new ConsentArtifactSchemaConsentPurpose("in");, OffsetDateTime.parse("2020-01-25T11:09:22.009Z"),                 new ConsentArtifactSchemaConsentUser("rerum", "dicta", "magnam", "cumque"););,                 new ConsentArtifactSchemaSignature("facere"););;
            }};            

            BtcerResponse res = sdk.apIs.btcer(req, new BtcerSecurity("ea", "aliquid") {{
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

## cecer

API to verify Renewal Certificate of Contract Labour License.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CecerRequestBody;
import org.openapis.openapi.models.operations.CecerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.CecerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.CecerResponse;
import org.openapis.openapi.models.operations.CecerSecurity;
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

            CecerRequestBody req = new CecerRequestBody(CecerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new CecerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("laborum");,                 new ConsentArtifactSchemaConsentDataConsumer("accusamus");,                 new ConsentArtifactSchemaConsentDataProvider("non");,                 new ConsentArtifactSchemaConsentPermission("occaecati",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-02-13T03:59:53.583Z"), OffsetDateTime.parse("2020-12-03T16:16:10.882Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5884.65, "nam", 6596.69););,                 new ConsentArtifactSchemaConsentPurpose("blanditiis");, OffsetDateTime.parse("2021-02-02T01:24:52.629Z"),                 new ConsentArtifactSchemaConsentUser("amet", "deserunt", "nisi", "vel"););,                 new ConsentArtifactSchemaSignature("natus"););;
            }};            

            CecerResponse res = sdk.apIs.cecer(req, new CecerSecurity("omnis", "molestiae") {{
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
                certificateParameters = new ChcerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("perferendis");,                 new ConsentArtifactSchemaConsentDataConsumer("nihil");,                 new ConsentArtifactSchemaConsentDataProvider("magnam");,                 new ConsentArtifactSchemaConsentPermission("distinctio",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-06-04T18:23:50.695Z"), OffsetDateTime.parse("2022-08-14T00:52:14.624Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6180.16, "nobis", 4287.69););,                 new ConsentArtifactSchemaConsentPurpose("vero");, OffsetDateTime.parse("2022-11-24T10:55:00.183Z"),                 new ConsentArtifactSchemaConsentUser("magnam", "et", "excepturi", "ullam"););,                 new ConsentArtifactSchemaSignature("provident"););;
            }};            

            ChcerResponse res = sdk.apIs.chcer(req, new ChcerSecurity("quos", "sint") {{
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

## clcer

API to verify Registration Certificate for Contract Labour License.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ClcerRequestBody;
import org.openapis.openapi.models.operations.ClcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.ClcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.ClcerResponse;
import org.openapis.openapi.models.operations.ClcerSecurity;
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

            ClcerRequestBody req = new ClcerRequestBody(ClcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new ClcerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("accusantium");,                 new ConsentArtifactSchemaConsentDataConsumer("mollitia");,                 new ConsentArtifactSchemaConsentDataProvider("reiciendis");,                 new ConsentArtifactSchemaConsentPermission("mollitia",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-07-27T12:46:27.682Z"), OffsetDateTime.parse("2022-02-07T18:15:06.372Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(1412.64, "nemo", 972.6););,                 new ConsentArtifactSchemaConsentPurpose("iure");, OffsetDateTime.parse("2020-04-29T08:15:14.819Z"),                 new ConsentArtifactSchemaConsentUser("eius", "maxime", "deleniti", "facilis"););,                 new ConsentArtifactSchemaSignature("in"););;
            }};            

            ClcerResponse res = sdk.apIs.clcer(req, new ClcerSecurity("architecto", "architecto") {{
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

## coprg

API to verify Copy of Pariwar Register.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CoprgRequestBody;
import org.openapis.openapi.models.operations.CoprgRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.CoprgRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.CoprgResponse;
import org.openapis.openapi.models.operations.CoprgSecurity;
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

            CoprgRequestBody req = new CoprgRequestBody(CoprgRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new CoprgRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("repudiandae");,                 new ConsentArtifactSchemaConsentDataConsumer("ullam");,                 new ConsentArtifactSchemaConsentDataProvider("expedita");,                 new ConsentArtifactSchemaConsentPermission("nihil",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2020-06-23T22:50:14.437Z"), OffsetDateTime.parse("2022-02-04T19:17:08.641Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(8681.26, "accusantium", 1624.93););,                 new ConsentArtifactSchemaConsentPurpose("praesentium");, OffsetDateTime.parse("2022-09-01T04:49:52.515Z"),                 new ConsentArtifactSchemaConsentUser("sunt", "quo", "illum", "pariatur"););,                 new ConsentArtifactSchemaSignature("maxime"););;
            }};            

            CoprgResponse res = sdk.apIs.coprg(req, new CoprgSecurity("ea", "excepturi") {{
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
                certificateParameters = new DccerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("odit");,                 new ConsentArtifactSchemaConsentDataConsumer("ea");,                 new ConsentArtifactSchemaConsentDataProvider("accusantium");,                 new ConsentArtifactSchemaConsentPermission("ab",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2020-11-28T07:34:18.392Z"), OffsetDateTime.parse("2022-07-19T10:57:57.489Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(4200.75, "nam", 505.88););,                 new ConsentArtifactSchemaConsentPurpose("pariatur");, OffsetDateTime.parse("2022-01-09T22:25:53.570Z"),                 new ConsentArtifactSchemaConsentUser("perferendis", "fugiat", "amet", "aut"););,                 new ConsentArtifactSchemaSignature("cumque"););;
            }};            

            DccerResponse res = sdk.apIs.dccer(req, new DccerSecurity("corporis", "hic") {{
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
                certificateParameters = new DmcerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("libero");,                 new ConsentArtifactSchemaConsentDataConsumer("nobis");,                 new ConsentArtifactSchemaConsentDataProvider("dolores");,                 new ConsentArtifactSchemaConsentPermission("quis",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-01-08T15:06:08.615Z"), OffsetDateTime.parse("2022-08-30T06:29:24.707Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(1999.96, "eos", 185.21););,                 new ConsentArtifactSchemaConsentPurpose("dolores");, OffsetDateTime.parse("2021-08-11T12:30:29.509Z"),                 new ConsentArtifactSchemaConsentUser("dolor", "vero", "nostrum", "hic"););,                 new ConsentArtifactSchemaSignature("recusandae"););;
            }};            

            DmcerResponse res = sdk.apIs.dmcer(req, new DmcerSecurity("omnis", "facilis") {{
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
                certificateParameters = new DpicrRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("perspiciatis");,                 new ConsentArtifactSchemaConsentDataConsumer("voluptatem");,                 new ConsentArtifactSchemaConsentDataProvider("porro");,                 new ConsentArtifactSchemaConsentPermission("consequuntur",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-10-04T07:41:53.553Z"), OffsetDateTime.parse("2022-06-04T07:28:38.912Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6990.98, "adipisci", 9923.97););,                 new ConsentArtifactSchemaConsentPurpose("earum");, OffsetDateTime.parse("2022-05-21T21:39:29.335Z"),                 new ConsentArtifactSchemaConsentUser("dolorum", "deleniti", "pariatur", "provident"););,                 new ConsentArtifactSchemaSignature("nobis"););;
            }};            

            DpicrResponse res = sdk.apIs.dpicr(req, new DpicrSecurity("libero", "delectus") {{
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
                certificateParameters = new DtcerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quaerat");,                 new ConsentArtifactSchemaConsentDataConsumer("quos");,                 new ConsentArtifactSchemaConsentDataProvider("aliquid");,                 new ConsentArtifactSchemaConsentPermission("dolorem",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-10-11T19:23:49.728Z"), OffsetDateTime.parse("2022-10-13T03:45:19.154Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(9443.73, "excepturi", 7395.51););,                 new ConsentArtifactSchemaConsentPurpose("voluptate");, OffsetDateTime.parse("2022-01-11T20:43:35.875Z"),                 new ConsentArtifactSchemaConsentUser("amet", "dolorum", "numquam", "veritatis"););,                 new ConsentArtifactSchemaSignature("ipsa"););;
            }};            

            DtcerResponse res = sdk.apIs.dtcer(req, new DtcerSecurity("ipsa", "iure") {{
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

## ercer

API to verify Registration Certificate of Establishment Employing Contract Labour.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ErcerRequestBody;
import org.openapis.openapi.models.operations.ErcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.ErcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.ErcerResponse;
import org.openapis.openapi.models.operations.ErcerSecurity;
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

            ErcerRequestBody req = new ErcerRequestBody(ErcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new ErcerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("odio");,                 new ConsentArtifactSchemaConsentDataConsumer("quaerat");,                 new ConsentArtifactSchemaConsentDataProvider("accusamus");,                 new ConsentArtifactSchemaConsentPermission("quidem",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-11-13T08:40:53.559Z"), OffsetDateTime.parse("2022-08-22T21:20:36.034Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5424.99, "sit", 8546.14););,                 new ConsentArtifactSchemaConsentPurpose("ab");, OffsetDateTime.parse("2021-08-23T01:02:18.527Z"),                 new ConsentArtifactSchemaConsentUser("iusto", "voluptate", "dolorum", "deleniti"););,                 new ConsentArtifactSchemaSignature("omnis"););;
            }};            

            ErcerResponse res = sdk.apIs.ercer(req, new ErcerSecurity("necessitatibus", "distinctio") {{
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
                certificateParameters = new FfcerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("asperiores");,                 new ConsentArtifactSchemaConsentDataConsumer("nihil");,                 new ConsentArtifactSchemaConsentDataProvider("ipsum");,                 new ConsentArtifactSchemaConsentPermission("voluptate",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-03-10T07:33:18.208Z"), OffsetDateTime.parse("2022-11-11T21:56:55.945Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(206.51, "amet", 7583.79););,                 new ConsentArtifactSchemaConsentPurpose("accusamus");, OffsetDateTime.parse("2022-02-04T21:14:13.821Z"),                 new ConsentArtifactSchemaConsentUser("suscipit", "deserunt", "provident", "minima"););,                 new ConsentArtifactSchemaSignature("repellendus"););;
            }};            

            FfcerResponse res = sdk.apIs.ffcer(req, new FfcerSecurity("totam", "similique") {{
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

## igcer

API to verify Indigent (Needy Person) Certificate.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.IgcerRequestBody;
import org.openapis.openapi.models.operations.IgcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.IgcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.IgcerResponse;
import org.openapis.openapi.models.operations.IgcerSecurity;
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

            IgcerRequestBody req = new IgcerRequestBody(IgcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new IgcerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("alias");,                 new ConsentArtifactSchemaConsentDataConsumer("at");,                 new ConsentArtifactSchemaConsentDataProvider("quaerat");,                 new ConsentArtifactSchemaConsentPermission("tempora",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-03-15T17:06:34.956Z"), OffsetDateTime.parse("2022-06-11T17:29:13.872Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6798.8, "a", 4561.3););,                 new ConsentArtifactSchemaConsentPurpose("harum");, OffsetDateTime.parse("2022-10-14T08:09:09.090Z"),                 new ConsentArtifactSchemaConsentUser("quisquam", "tenetur", "amet", "tempore"););,                 new ConsentArtifactSchemaSignature("accusamus"););;
            }};            

            IgcerResponse res = sdk.apIs.igcer(req, new IgcerSecurity("numquam", "enim") {{
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
                certificateParameters = new IncerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("dolorem");,                 new ConsentArtifactSchemaConsentDataConsumer("sapiente");,                 new ConsentArtifactSchemaConsentDataProvider("totam");,                 new ConsentArtifactSchemaConsentPermission("nihil",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-04-16T06:31:32.314Z"), OffsetDateTime.parse("2022-11-05T21:38:15.600Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(4246.85, "libero", 3741.7););,                 new ConsentArtifactSchemaConsentPurpose("deserunt");, OffsetDateTime.parse("2022-10-14T13:38:40.307Z"),                 new ConsentArtifactSchemaConsentUser("incidunt", "qui", "cupiditate", "maxime"););,                 new ConsentArtifactSchemaSignature("pariatur"););;
            }};            

            IncerResponse res = sdk.apIs.incer(req, new IncerSecurity("soluta", "dicta") {{
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
                certificateParameters = new LhcerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("laborum");,                 new ConsentArtifactSchemaConsentDataConsumer("totam");,                 new ConsentArtifactSchemaConsentDataProvider("incidunt");,                 new ConsentArtifactSchemaConsentPermission("aspernatur",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-04-14T08:18:32.851Z"), OffsetDateTime.parse("2022-03-17T21:02:01.759Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(4631.5, "molestias", 8404.29););,                 new ConsentArtifactSchemaConsentPurpose("qui");, OffsetDateTime.parse("2022-11-09T03:08:00.106Z"),                 new ConsentArtifactSchemaConsentUser("magni", "odio", "sunt", "ullam"););,                 new ConsentArtifactSchemaSignature("nam"););;
            }};            

            LhcerResponse res = sdk.apIs.lhcer(req, new LhcerSecurity("hic", "voluptatem") {{
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
                certificateParameters = new MncerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("cumque");,                 new ConsentArtifactSchemaConsentDataConsumer("soluta");,                 new ConsentArtifactSchemaConsentDataProvider("nobis");,                 new ConsentArtifactSchemaConsentPermission("et",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-05-07T21:24:02.842Z"), OffsetDateTime.parse("2022-04-02T12:31:52.465Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5521.93, "tempore", 5844.76););,                 new ConsentArtifactSchemaConsentPurpose("aperiam");, OffsetDateTime.parse("2022-05-16T23:21:11.104Z"),                 new ConsentArtifactSchemaConsentUser("dolore", "labore", "adipisci", "dolorum"););,                 new ConsentArtifactSchemaSignature("architecto"););;
            }};            

            MncerResponse res = sdk.apIs.mncer(req, new MncerSecurity("quae", "aut") {{
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

## mnrga

API to verify MNREGA Job Card.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MnrgaRequestBody;
import org.openapis.openapi.models.operations.MnrgaRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.MnrgaRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.MnrgaResponse;
import org.openapis.openapi.models.operations.MnrgaSecurity;
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

            MnrgaRequestBody req = new MnrgaRequestBody(MnrgaRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new MnrgaRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quas");,                 new ConsentArtifactSchemaConsentDataConsumer("itaque");,                 new ConsentArtifactSchemaConsentDataProvider("consequatur");,                 new ConsentArtifactSchemaConsentPermission("est",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2020-08-24T06:10:53.249Z"), OffsetDateTime.parse("2022-02-26T12:07:57.580Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(7034.95, "cupiditate", 1816.31););,                 new ConsentArtifactSchemaConsentPurpose("quae");, OffsetDateTime.parse("2022-01-11T11:48:15.910Z"),                 new ConsentArtifactSchemaConsentUser("occaecati", "voluptatibus", "quisquam", "vero"););,                 new ConsentArtifactSchemaSignature("omnis"););;
            }};            

            MnrgaResponse res = sdk.apIs.mnrga(req, new MnrgaSecurity("quis", "ipsum") {{
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
                certificateParameters = new ObcerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("delectus");,                 new ConsentArtifactSchemaConsentDataConsumer("voluptate");,                 new ConsentArtifactSchemaConsentDataProvider("consectetur");,                 new ConsentArtifactSchemaConsentPermission("vero",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-07-10T23:11:25.857Z"), OffsetDateTime.parse("2020-11-08T11:03:10.206Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(7992.03, "odio", 6304.48););,                 new ConsentArtifactSchemaConsentPurpose("facilis");, OffsetDateTime.parse("2021-07-04T12:52:28.765Z"),                 new ConsentArtifactSchemaConsentUser("dolore", "quibusdam", "illum", "sequi"););,                 new ConsentArtifactSchemaSignature("natus"););;
            }};            

            ObcerResponse res = sdk.apIs.obcer(req, new ObcerSecurity("impedit", "aut") {{
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
                certificateParameters = new RacerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("voluptatibus");,                 new ConsentArtifactSchemaConsentDataConsumer("exercitationem");,                 new ConsentArtifactSchemaConsentDataProvider("nulla");,                 new ConsentArtifactSchemaConsentPermission("fugit",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2020-01-21T21:31:25.345Z"), OffsetDateTime.parse("2021-07-26T04:25:41.517Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(7535.7, "ducimus", 40.48););,                 new ConsentArtifactSchemaConsentPurpose("officia");, OffsetDateTime.parse("2022-08-19T11:11:55.326Z"),                 new ConsentArtifactSchemaConsentUser("ea", "aspernatur", "vel", "possimus"););,                 new ConsentArtifactSchemaSignature("magnam"););;
            }};            

            RacerResponse res = sdk.apIs.racer(req, new RacerSecurity("ratione", "ex") {{
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
                certificateParameters = new RmcerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("laudantium");,                 new ConsentArtifactSchemaConsentDataConsumer("dicta");,                 new ConsentArtifactSchemaConsentDataProvider("dolor");,                 new ConsentArtifactSchemaConsentPermission("maiores",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-08-05T18:23:03.713Z"), OffsetDateTime.parse("2021-04-17T17:08:28.312Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(9729.2, "nostrum", 9608.35););,                 new ConsentArtifactSchemaConsentPurpose("quisquam");, OffsetDateTime.parse("2021-10-07T13:07:57.949Z"),                 new ConsentArtifactSchemaConsentUser("impedit", "corporis", "veniam", "aliquid"););,                 new ConsentArtifactSchemaSignature("inventore"););;
            }};            

            RmcerResponse res = sdk.apIs.rmcer(req, new RmcerSecurity("magnam", "ea") {{
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

## secer

API to verify Renewal Certificate of Shops And Commercial Establishment.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SecerRequestBody;
import org.openapis.openapi.models.operations.SecerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.SecerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.SecerResponse;
import org.openapis.openapi.models.operations.SecerSecurity;
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

            SecerRequestBody req = new SecerRequestBody(SecerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new SecerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quo");,                 new ConsentArtifactSchemaConsentDataConsumer("consectetur");,                 new ConsentArtifactSchemaConsentDataProvider("recusandae");,                 new ConsentArtifactSchemaConsentPermission("aspernatur",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-12-12T11:58:39.585Z"), OffsetDateTime.parse("2020-10-28T11:22:47.751Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(139.48, "aut", 5334.66););,                 new ConsentArtifactSchemaConsentPurpose("impedit");, OffsetDateTime.parse("2022-11-08T08:44:49.857Z"),                 new ConsentArtifactSchemaConsentUser("accusamus", "inventore", "non", "et"););,                 new ConsentArtifactSchemaSignature("dolorum"););;
            }};            

            SecerResponse res = sdk.apIs.secer(req, new SecerSecurity("laborum", "placeat") {{
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
                certificateParameters = new ShcerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("velit");,                 new ConsentArtifactSchemaConsentDataConsumer("eum");,                 new ConsentArtifactSchemaConsentDataProvider("autem");,                 new ConsentArtifactSchemaConsentPermission("nobis",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-05-05T09:22:07.208Z"), OffsetDateTime.parse("2021-11-11T22:59:32.230Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(7270.44, "quasi", 2703.28););,                 new ConsentArtifactSchemaConsentPurpose("numquam");, OffsetDateTime.parse("2022-05-29T22:38:52.265Z"),                 new ConsentArtifactSchemaConsentUser("ipsa", "molestiae", "magnam", "odio"););,                 new ConsentArtifactSchemaSignature("eius"););;
            }};            

            ShcerResponse res = sdk.apIs.shcer(req, new ShcerSecurity("esse", "esse") {{
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
                certificateParameters = new SicrdRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("rem");,                 new ConsentArtifactSchemaConsentDataConsumer("fuga");,                 new ConsentArtifactSchemaConsentDataProvider("reprehenderit");,                 new ConsentArtifactSchemaConsentPermission("quidem",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-02-24T13:07:28.067Z"), OffsetDateTime.parse("2022-08-15T07:50:23.042Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(8268.71, "eos", 5093.42););,                 new ConsentArtifactSchemaConsentPurpose("quisquam");, OffsetDateTime.parse("2022-12-11T06:00:38.230Z"),                 new ConsentArtifactSchemaConsentUser("id", "quidem", "neque", "quo"););,                 new ConsentArtifactSchemaSignature("illum"););;
            }};            

            SicrdResponse res = sdk.apIs.sicrd(req, new SicrdSecurity("quo", "fuga") {{
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

## srcer

API to verify Registration Certificate of Shops And Commercial Establishment.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SrcerRequestBody;
import org.openapis.openapi.models.operations.SrcerRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.SrcerRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.SrcerResponse;
import org.openapis.openapi.models.operations.SrcerSecurity;
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

            SrcerRequestBody req = new SrcerRequestBody(SrcerRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new SrcerRequestBodyCertificateParameters("I991C0L16978");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("eius");,                 new ConsentArtifactSchemaConsentDataConsumer("eos");,                 new ConsentArtifactSchemaConsentDataProvider("voluptas");,                 new ConsentArtifactSchemaConsentPermission("ab",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-12-24T22:15:46.522Z"), OffsetDateTime.parse("2022-02-09T09:38:41.756Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3708.53, "aspernatur", 1970.54););,                 new ConsentArtifactSchemaConsentPurpose("quo");, OffsetDateTime.parse("2022-01-28T07:34:05.998Z"),                 new ConsentArtifactSchemaConsentUser("aperiam", "distinctio", "quod", "dignissimos"););,                 new ConsentArtifactSchemaSignature("inventore"););;
            }};            

            SrcerResponse res = sdk.apIs.srcer(req, new SrcerSecurity("nihil", "totam") {{
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
