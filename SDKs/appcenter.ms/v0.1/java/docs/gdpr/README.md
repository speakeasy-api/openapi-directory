# gdpr

### Available Operations

* [dataSubjectRightCancelDeleteRequest](#datasubjectrightcanceldeleterequest)
* [dataSubjectRightCancelExportRequest](#datasubjectrightcancelexportrequest)
* [dataSubjectRightDeleteRequest](#datasubjectrightdeleterequest)
* [dataSubjectRightDeleteStatusRequest](#datasubjectrightdeletestatusrequest)
* [dataSubjectRightExportRequest](#datasubjectrightexportrequest)
* [dataSubjectRightExportStatusRequest](#datasubjectrightexportstatusrequest)

## dataSubjectRightCancelDeleteRequest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataSubjectRightCancelDeleteRequestRequest;
import org.openapis.openapi.models.operations.DataSubjectRightCancelDeleteRequestRequestBody;
import org.openapis.openapi.models.operations.DataSubjectRightCancelDeleteRequestResponse;
import org.openapis.openapi.models.operations.DataSubjectRightCancelDeleteRequestSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataSubjectRightCancelDeleteRequestRequest req = new DataSubjectRightCancelDeleteRequestRequest("dec001ac-802e-42ec-89ff-8f0f816ff347") {{
                requestBody = new DataSubjectRightCancelDeleteRequestRequestBody("in");;
            }};            

            DataSubjectRightCancelDeleteRequestResponse res = sdk.gdpr.dataSubjectRightCancelDeleteRequest(req, new DataSubjectRightCancelDeleteRequestSecurity("eligendi") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.dataSubjectRightCancelDeleteRequest202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataSubjectRightCancelExportRequest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataSubjectRightCancelExportRequestRequest;
import org.openapis.openapi.models.operations.DataSubjectRightCancelExportRequestResponse;
import org.openapis.openapi.models.operations.DataSubjectRightCancelExportRequestSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataSubjectRightCancelExportRequestRequest req = new DataSubjectRightCancelExportRequestRequest("13e902c1-4125-4b09-a0a6-68151a472af9");            

            DataSubjectRightCancelExportRequestResponse res = sdk.gdpr.dataSubjectRightCancelExportRequest(req, new DataSubjectRightCancelExportRequestSecurity("sed") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.dataSubjectRightCancelExportRequest202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataSubjectRightDeleteRequest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataSubjectRightDeleteRequestResponse;
import org.openapis.openapi.models.operations.DataSubjectRightDeleteRequestSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataSubjectRightDeleteRequestResponse res = sdk.gdpr.dataSubjectRightDeleteRequest(new DataSubjectRightDeleteRequestSecurity("nesciunt") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.dataSubjectRightDeleteRequest202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataSubjectRightDeleteStatusRequest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataSubjectRightDeleteStatusRequestRequest;
import org.openapis.openapi.models.operations.DataSubjectRightDeleteStatusRequestResponse;
import org.openapis.openapi.models.operations.DataSubjectRightDeleteStatusRequestSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataSubjectRightDeleteStatusRequestRequest req = new DataSubjectRightDeleteStatusRequestRequest("maxime", "5949f83f-350c-4f87-affb-901c6ecbb4e2");            

            DataSubjectRightDeleteStatusRequestResponse res = sdk.gdpr.dataSubjectRightDeleteStatusRequest(req, new DataSubjectRightDeleteStatusRequestSecurity("eius") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.dataSubjectRightDeleteStatusRequest200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataSubjectRightExportRequest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataSubjectRightExportRequestResponse;
import org.openapis.openapi.models.operations.DataSubjectRightExportRequestSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataSubjectRightExportRequestResponse res = sdk.gdpr.dataSubjectRightExportRequest(new DataSubjectRightExportRequestSecurity("sequi") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.dataSubjectRightExportRequest202ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## dataSubjectRightExportStatusRequest

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DataSubjectRightExportStatusRequestRequest;
import org.openapis.openapi.models.operations.DataSubjectRightExportStatusRequestResponse;
import org.openapis.openapi.models.operations.DataSubjectRightExportStatusRequestSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DataSubjectRightExportStatusRequestRequest req = new DataSubjectRightExportStatusRequestRequest("cf789ffa-feda-453e-9ae6-e0ac184c2b9c");            

            DataSubjectRightExportStatusRequestResponse res = sdk.gdpr.dataSubjectRightExportStatusRequest(req, new DataSubjectRightExportStatusRequestSecurity("quia") {{
                apiToken = "YOUR_API_KEY_HERE";
            }});

            if (res.dataSubjectRightExportStatusRequest200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
