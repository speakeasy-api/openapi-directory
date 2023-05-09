# as2Partners

## Overview

Operations about as2_partners

### Available Operations

* [deleteAs2PartnersId](#deleteas2partnersid) - Delete As2 Partner
* [getAs2Partners](#getas2partners) - List As2 Partners
* [getAs2PartnersId](#getas2partnersid) - Show As2 Partner
* [patchAs2PartnersId](#patchas2partnersid) - Update As2 Partner
* [postAs2Partners](#postas2partners) - Create As2 Partner

## deleteAs2PartnersId

Delete As2 Partner

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DeleteAs2PartnersIdRequest;
import org.openapis.openapi.models.operations.DeleteAs2PartnersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DeleteAs2PartnersIdRequest req = new DeleteAs2PartnersIdRequest(451159);            

            DeleteAs2PartnersIdResponse res = sdk.as2Partners.deleteAs2PartnersId(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAs2Partners

List As2 Partners

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAs2PartnersRequest;
import org.openapis.openapi.models.operations.GetAs2PartnersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAs2PartnersRequest req = new GetAs2PartnersRequest() {{
                cursor = "cum";
                perPage = 19987;
            }};            

            GetAs2PartnersResponse res = sdk.as2Partners.getAs2Partners(req);

            if (res.as2PartnerEntities != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAs2PartnersId

Show As2 Partner

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAs2PartnersIdRequest;
import org.openapis.openapi.models.operations.GetAs2PartnersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAs2PartnersIdRequest req = new GetAs2PartnersIdRequest(39187);            

            GetAs2PartnersIdResponse res = sdk.as2Partners.getAs2PartnersId(req);

            if (res.as2PartnerEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## patchAs2PartnersId

Update As2 Partner

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PatchAs2PartnersIdRequest;
import org.openapis.openapi.models.operations.PatchAs2PartnersIdRequestBody;
import org.openapis.openapi.models.operations.PatchAs2PartnersIdResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PatchAs2PartnersIdRequest req = new PatchAs2PartnersIdRequest(441711) {{
                requestBody = new PatchAs2PartnersIdRequestBody() {{
                    enableDedicatedIps = false;
                    name = "Shawna Carter";
                    publicCertificate = "iusto";
                    serverCertificate = "dicta";
                    uri = "https://frugal-sympathy.info";
                }};;
            }};            

            PatchAs2PartnersIdResponse res = sdk.as2Partners.patchAs2PartnersId(req);

            if (res.as2PartnerEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAs2Partners

Create As2 Partner

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAs2PartnersRequestBody;
import org.openapis.openapi.models.operations.PostAs2PartnersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PostAs2PartnersRequestBody req = new PostAs2PartnersRequestBody(918236, "quae", "ipsum", "quidem") {{
                enableDedicatedIps = false;
                serverCertificate = "molestias";
            }};            

            PostAs2PartnersResponse res = sdk.as2Partners.postAs2Partners(req);

            if (res.as2PartnerEntity != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
