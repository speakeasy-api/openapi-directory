# namespaces

### Available Operations

* [getNamespaceDataByTimespan](#getnamespacedatabytimespan) - Get namespace data for timespan
* [getNamespaceTimespanMetadata](#getnamespacetimespanmetadata) - Get namespace metadata for timespan
* [getNamespaceTimespans](#getnamespacetimespans) - Get timespans with data
* [getNamespaceYears](#getnamespaceyears) - Get years with data

## getNamespaceDataByTimespan

Gets a list of URLs that can be used to download the pull data for the given namespace and timespan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamespaceDataByTimespanRequest;
import org.openapis.openapi.models.operations.GetNamespaceDataByTimespanResponse;
import org.openapis.openapi.models.shared.DataviewTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimespanTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corrupti") {{
                    hubAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetNamespaceDataByTimespanRequest req = new GetNamespaceDataByTimespanRequest(DataviewTypeEnum.REPO_SUMMARY, "vel", 623564L, TimespanTypeEnum.WEEKS, 384382L);            

            GetNamespaceDataByTimespanResponse res = sdk.namespaces.getNamespaceDataByTimespan(req);

            if (res.responseData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamespaceTimespanMetadata

Gets info about data for the given namespace and timespan

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamespaceTimespanMetadataRequest;
import org.openapis.openapi.models.operations.GetNamespaceTimespanMetadataResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimespanTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("iure") {{
                    hubAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetNamespaceTimespanMetadataRequest req = new GetNamespaceTimespanMetadataRequest("magnam", 891773L, TimespanTypeEnum.MONTHS, 963663L);            

            GetNamespaceTimespanMetadataResponse res = sdk.namespaces.getNamespaceTimespanMetadata(req);

            if (res.timespanModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamespaceTimespans

Gets a list of timespans of the given type that have data for the given namespace and year

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamespaceTimespansRequest;
import org.openapis.openapi.models.operations.GetNamespaceTimespansResponse;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.TimespanTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("tempora") {{
                    hubAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetNamespaceTimespansRequest req = new GetNamespaceTimespansRequest("suscipit", TimespanTypeEnum.MONTHS, 791725L);            

            GetNamespaceTimespansResponse res = sdk.namespaces.getNamespaceTimespans(req);

            if (res.timespanData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getNamespaceYears

Gets a list of years that have data for the given namespace

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetNamespaceYearsRequest;
import org.openapis.openapi.models.operations.GetNamespaceYearsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("placeat") {{
                    hubAuth = "Bearer YOUR_BEARER_TOKEN_HERE";
                }})
                .build();

            GetNamespaceYearsRequest req = new GetNamespaceYearsRequest("voluptatum");            

            GetNamespaceYearsResponse res = sdk.namespaces.getNamespaceYears(req);

            if (res.yearData != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
