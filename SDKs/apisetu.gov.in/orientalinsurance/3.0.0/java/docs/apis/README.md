# apIs

### Available Operations

* [cripc](#cripc) - Insurance Policy - Car
* [cvipc](#cvipc) - Insurance Policy - Commercial Vehicle
* [egipc](#egipc) - Insurance Policy - Engineering
* [hlipc](#hlipc) - Insurance Policy - Health
* [hmipc](#hmipc) - Insurance Policy - Home
* [mripc](#mripc) - Insurance Policy - Marine
* [podoc](#podoc) - Policy Document
* [pripc](#pripc) - Insurance Policy - Property
* [tripc](#tripc) - Insurance Policy - Travel
* [twipc](#twipc) - Insurance Policy - Two Wheeler

## cripc

API to verify Insurance Policy - Car.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CripcRequestBody;
import org.openapis.openapi.models.operations.CripcRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.CripcRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.CripcResponse;
import org.openapis.openapi.models.operations.CripcSecurity;
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

            CripcRequestBody req = new CripcRequestBody(CripcRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new CripcRequestBodyCertificateParameters("99999999", "215700/31/2020/211", "13-APR-2019");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("placeat");,                 new ConsentArtifactSchemaConsentDataConsumer("voluptatum");,                 new ConsentArtifactSchemaConsentDataProvider("iusto");,                 new ConsentArtifactSchemaConsentPermission("excepturi",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-01-28T03:46:24.500Z"), OffsetDateTime.parse("2022-10-15T05:10:19.629Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3373.96, "veritatis", 6481.72););,                 new ConsentArtifactSchemaConsentPurpose("perferendis");, OffsetDateTime.parse("2022-03-03T02:15:00.468Z"),                 new ConsentArtifactSchemaConsentUser("sapiente", "quo", "odit", "at"););,                 new ConsentArtifactSchemaSignature("at"););;
            }};            

            CripcResponse res = sdk.apIs.cripc(req, new CripcSecurity("maiores", "molestiae") {{
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

## cvipc

API to verify Insurance Policy - Commercial Vehicle.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CvipcRequestBody;
import org.openapis.openapi.models.operations.CvipcRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.CvipcRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.CvipcResponse;
import org.openapis.openapi.models.operations.CvipcSecurity;
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

            CvipcRequestBody req = new CvipcRequestBody(CvipcRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new CvipcRequestBodyCertificateParameters("99999999", "215700/31/2020/211", "13-APR-2019");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quod");,                 new ConsentArtifactSchemaConsentDataConsumer("quod");,                 new ConsentArtifactSchemaConsentDataProvider("esse");,                 new ConsentArtifactSchemaConsentPermission("totam",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2020-12-18T15:02:44.758Z"), OffsetDateTime.parse("2022-04-12T23:15:28.420Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(6399.21, "occaecati", 1433.53););,                 new ConsentArtifactSchemaConsentPurpose("deleniti");, OffsetDateTime.parse("2020-09-22T07:34:53.140Z"),                 new ConsentArtifactSchemaConsentUser("totam", "beatae", "commodi", "molestiae"););,                 new ConsentArtifactSchemaSignature("modi"););;
            }};            

            CvipcResponse res = sdk.apIs.cvipc(req, new CvipcSecurity("qui", "impedit") {{
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

## egipc

API to verify Insurance Policy - Engineering.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.EgipcRequestBody;
import org.openapis.openapi.models.operations.EgipcRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.EgipcRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.EgipcResponse;
import org.openapis.openapi.models.operations.EgipcSecurity;
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

            EgipcRequestBody req = new EgipcRequestBody(EgipcRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new EgipcRequestBodyCertificateParameters("99999999", "215700/31/2020/211", "13-APR-2019");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("cum");,                 new ConsentArtifactSchemaConsentDataConsumer("esse");,                 new ConsentArtifactSchemaConsentDataProvider("ipsum");,                 new ConsentArtifactSchemaConsentPermission("excepturi",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-12-25T03:24:03.949Z"), OffsetDateTime.parse("2022-05-20T13:30:46.463Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(1496.75, "iste", 2223.21););,                 new ConsentArtifactSchemaConsentPurpose("natus");, OffsetDateTime.parse("2022-01-21T12:46:00.641Z"),                 new ConsentArtifactSchemaConsentUser("saepe", "fuga", "in", "corporis"););,                 new ConsentArtifactSchemaSignature("iste"););;
            }};            

            EgipcResponse res = sdk.apIs.egipc(req, new EgipcSecurity("iure", "saepe") {{
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

## hlipc

API to verify Insurance Policy - Health.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HlipcRequestBody;
import org.openapis.openapi.models.operations.HlipcRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.HlipcRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.HlipcResponse;
import org.openapis.openapi.models.operations.HlipcSecurity;
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

            HlipcRequestBody req = new HlipcRequestBody(HlipcRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new HlipcRequestBodyCertificateParameters("99999999", "215700/31/2020/211", "13-APR-2019");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("quidem");,                 new ConsentArtifactSchemaConsentDataConsumer("architecto");,                 new ConsentArtifactSchemaConsentDataProvider("ipsa");,                 new ConsentArtifactSchemaConsentPermission("reiciendis",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-09-11T04:59:11.542Z"), OffsetDateTime.parse("2022-08-29T05:39:49.755Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(2103.82, "corporis", 1289.26););,                 new ConsentArtifactSchemaConsentPurpose("nobis");, OffsetDateTime.parse("2022-05-24T03:24:11.703Z"),                 new ConsentArtifactSchemaConsentUser("nemo", "minima", "excepturi", "accusantium"););,                 new ConsentArtifactSchemaSignature("iure"););;
            }};            

            HlipcResponse res = sdk.apIs.hlipc(req, new HlipcSecurity("culpa", "doloribus") {{
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

## hmipc

API to verify Insurance Policy - Home.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HmipcRequestBody;
import org.openapis.openapi.models.operations.HmipcRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.HmipcRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.HmipcResponse;
import org.openapis.openapi.models.operations.HmipcSecurity;
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

            HmipcRequestBody req = new HmipcRequestBody(HmipcRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new HmipcRequestBodyCertificateParameters("99999999", "215700/31/2020/211", "13-APR-2019");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("sapiente");,                 new ConsentArtifactSchemaConsentDataConsumer("architecto");,                 new ConsentArtifactSchemaConsentDataProvider("mollitia");,                 new ConsentArtifactSchemaConsentPermission("dolorem",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-09-05T05:51:25.673Z"), OffsetDateTime.parse("2021-01-15T20:18:47.519Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5818.5, "numquam", 4143.69););,                 new ConsentArtifactSchemaConsentPurpose("quam");, OffsetDateTime.parse("2022-10-03T18:49:53.900Z"),                 new ConsentArtifactSchemaConsentUser("error", "quia", "quis", "vitae"););,                 new ConsentArtifactSchemaSignature("laborum"););;
            }};            

            HmipcResponse res = sdk.apIs.hmipc(req, new HmipcSecurity("animi", "enim") {{
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

## mripc

API to verify Insurance Policy - Marine.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MripcRequestBody;
import org.openapis.openapi.models.operations.MripcRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.MripcRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.MripcResponse;
import org.openapis.openapi.models.operations.MripcSecurity;
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

            MripcRequestBody req = new MripcRequestBody(MripcRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new MripcRequestBodyCertificateParameters("99999999", "215700/31/2020/211", "13-APR-2019");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("odit");,                 new ConsentArtifactSchemaConsentDataConsumer("quo");,                 new ConsentArtifactSchemaConsentDataProvider("sequi");,                 new ConsentArtifactSchemaConsentPermission("tenetur",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-05-04T04:15:52.352Z"), OffsetDateTime.parse("2022-12-17T03:20:13.120Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(971.01, "error", 8379.45););,                 new ConsentArtifactSchemaConsentPurpose("laborum");, OffsetDateTime.parse("2022-01-11T05:45:42.485Z"),                 new ConsentArtifactSchemaConsentUser("voluptatibus", "vero", "nihil", "praesentium"););,                 new ConsentArtifactSchemaSignature("voluptatibus"););;
            }};            

            MripcResponse res = sdk.apIs.mripc(req, new MripcSecurity("ipsa", "omnis") {{
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

## podoc

API to verify Policy Document.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PodocRequestBody;
import org.openapis.openapi.models.operations.PodocRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.PodocRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.PodocResponse;
import org.openapis.openapi.models.operations.PodocSecurity;
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

            PodocRequestBody req = new PodocRequestBody(PodocRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new PodocRequestBodyCertificateParameters("99999999", "215700/31/2020/211", "13-APR-2019");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("voluptate");,                 new ConsentArtifactSchemaConsentDataConsumer("cum");,                 new ConsentArtifactSchemaConsentDataProvider("perferendis");,                 new ConsentArtifactSchemaConsentPermission("doloremque",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-09-19T18:36:39.009Z"), OffsetDateTime.parse("2022-08-22T09:14:02.538Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3594.44, "dolore", 4808.94););,                 new ConsentArtifactSchemaConsentPurpose("dicta");, OffsetDateTime.parse("2022-05-13T20:56:04.612Z"),                 new ConsentArtifactSchemaConsentUser("accusamus", "commodi", "repudiandae", "quae"););,                 new ConsentArtifactSchemaSignature("ipsum"););;
            }};            

            PodocResponse res = sdk.apIs.podoc(req, new PodocSecurity("quidem", "molestias") {{
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

## pripc

API to verify Insurance Policy - Property.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PripcRequestBody;
import org.openapis.openapi.models.operations.PripcRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.PripcRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.PripcResponse;
import org.openapis.openapi.models.operations.PripcSecurity;
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

            PripcRequestBody req = new PripcRequestBody(PripcRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new PripcRequestBodyCertificateParameters("99999999", "215700/31/2020/211", "13-APR-2019");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("excepturi");,                 new ConsentArtifactSchemaConsentDataConsumer("pariatur");,                 new ConsentArtifactSchemaConsentDataProvider("modi");,                 new ConsentArtifactSchemaConsentPermission("praesentium",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-03-02T19:00:49.599Z"), OffsetDateTime.parse("2022-01-29T18:39:33.469Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(5759.47, "veritatis", 9292.97););,                 new ConsentArtifactSchemaConsentPurpose("incidunt");, OffsetDateTime.parse("2022-12-28T14:02:06.064Z"),                 new ConsentArtifactSchemaConsentUser("est", "quibusdam", "explicabo", "deserunt"););,                 new ConsentArtifactSchemaSignature("distinctio"););;
            }};            

            PripcResponse res = sdk.apIs.pripc(req, new PripcSecurity("quibusdam", "labore") {{
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

## tripc

API to verify Insurance Policy - Travel.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TripcRequestBody;
import org.openapis.openapi.models.operations.TripcRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.TripcRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.TripcResponse;
import org.openapis.openapi.models.operations.TripcSecurity;
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

            TripcRequestBody req = new TripcRequestBody(TripcRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new TripcRequestBodyCertificateParameters("99999999", "215700/31/2020/211", "13-APR-2019");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("modi");,                 new ConsentArtifactSchemaConsentDataConsumer("qui");,                 new ConsentArtifactSchemaConsentDataProvider("aliquid");,                 new ConsentArtifactSchemaConsentPermission("cupiditate",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2022-12-17T07:42:55.593Z"), OffsetDateTime.parse("2022-03-04T10:29:07.095Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(3698.08, "alias", 1464.41););,                 new ConsentArtifactSchemaConsentPurpose("dolorum");, OffsetDateTime.parse("2022-06-17T21:27:36.672Z"),                 new ConsentArtifactSchemaConsentUser("facilis", "tempore", "labore", "delectus"););,                 new ConsentArtifactSchemaSignature("eum"););;
            }};            

            TripcResponse res = sdk.apIs.tripc(req, new TripcSecurity("non", "eligendi") {{
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

## twipc

API to verify Insurance Policy - Two Wheeler.

### Example Usage

```java
package hello.world;

import java.time.OffsetDateTime;
import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.TwipcRequestBody;
import org.openapis.openapi.models.operations.TwipcRequestBodyCertificateParameters;
import org.openapis.openapi.models.operations.TwipcRequestBodyFormatEnum;
import org.openapis.openapi.models.operations.TwipcResponse;
import org.openapis.openapi.models.operations.TwipcSecurity;
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

            TwipcRequestBody req = new TwipcRequestBody(TwipcRequestBodyFormatEnum.PDF, "f7f1469c-29b0-4325-9dfc-c567200a70f7") {{
                certificateParameters = new TwipcRequestBodyCertificateParameters("99999999", "215700/31/2020/211", "13-APR-2019");;
                consentArtifact = new ConsentArtifactSchema(                new ConsentArtifactSchemaConsent("ea9c43aa-7f5a-4bf3-a0be-e1caa24737ba",                 new ConsentArtifactSchemaConsentData("sint");,                 new ConsentArtifactSchemaConsentDataConsumer("aliquid");,                 new ConsentArtifactSchemaConsentDataProvider("provident");,                 new ConsentArtifactSchemaConsentPermission("necessitatibus",                 new ConsentArtifactSchemaConsentPermissionDateRange(OffsetDateTime.parse("2021-09-21T14:06:09.271Z"), OffsetDateTime.parse("2022-02-09T13:58:59.361Z"));,                 new ConsentArtifactSchemaConsentPermissionFrequency(9527.49, "dolorum", 4471.25););,                 new ConsentArtifactSchemaConsentPurpose("in");, OffsetDateTime.parse("2020-01-25T11:09:22.009Z"),                 new ConsentArtifactSchemaConsentUser("rerum", "dicta", "magnam", "cumque"););,                 new ConsentArtifactSchemaSignature("facere"););;
            }};            

            TwipcResponse res = sdk.apIs.twipc(req, new TwipcSecurity("ea", "aliquid") {{
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
