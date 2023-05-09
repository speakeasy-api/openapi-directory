# dataIntegrity

## Overview

Data integrity is important

### Available Operations

* [getDataIntegrityDetails](#getdataintegritydetails) - Lists data integrity details for date type
* [getDataIntegrityStatus](#getdataintegritystatus) - Get data integrity status
* [getDataIntegritySummaries](#getdataintegritysummaries) - Get data integrity summary

## getDataIntegrityDetails

Gets record-by-record match results for a given company and datatype, optionally restricted by a Codat query string.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataIntegrityDetailsRequest;
import org.openapis.openapi.models.operations.GetDataIntegrityDetailsResponse;
import org.openapis.openapi.models.shared.DataIntegrityDataTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("quidem") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDataIntegrityDetailsRequest req = new GetDataIntegrityDetailsRequest("8a210b68-6988-11ed-a1eb-0242ac120002", DataIntegrityDataTypeEnum.BANKING_ACCOUNTS, 1) {{
                orderBy = "-modifiedDate";
                pageSize = 100;
                query = "architecto";
            }};            

            GetDataIntegrityDetailsResponse res = sdk.dataIntegrity.getDataIntegrityDetails(req);

            if (res.details != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDataIntegrityStatus

Gets match status for a given company and datatype.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataIntegrityStatusRequest;
import org.openapis.openapi.models.operations.GetDataIntegrityStatusResponse;
import org.openapis.openapi.models.shared.DataIntegrityDataTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDataIntegrityStatusRequest req = new GetDataIntegrityStatusRequest("8a210b68-6988-11ed-a1eb-0242ac120002", DataIntegrityDataTypeEnum.BANKING_ACCOUNTS);            

            GetDataIntegrityStatusResponse res = sdk.dataIntegrity.getDataIntegrityStatus(req);

            if (res.status != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getDataIntegritySummaries

Gets match summary for a given company and datatype, optionally restricted by a Codat query string.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetDataIntegritySummariesRequest;
import org.openapis.openapi.models.operations.GetDataIntegritySummariesResponse;
import org.openapis.openapi.models.shared.DataIntegrityDataTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis") {{
                    authHeader = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetDataIntegritySummariesRequest req = new GetDataIntegritySummariesRequest("8a210b68-6988-11ed-a1eb-0242ac120002", DataIntegrityDataTypeEnum.BANKING_ACCOUNTS) {{
                query = "est";
            }};            

            GetDataIntegritySummariesResponse res = sdk.dataIntegrity.getDataIntegritySummaries(req);

            if (res.summaries != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
