# cloudStorage

### Available Operations

* [cloudStorageApiGetList](#cloudstorageapigetlist) - Gets a list of all connected cloud storage devices

## cloudStorageApiGetList

Gets a list of all connected cloud storage devices

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CloudStorageApiGetListResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CloudStorageApiGetListResponse res = sdk.cloudStorage.cloudStorageApiGetList();

            if (res.rechnungsdruckWebAppControllersAPIAPIResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCloudStorageAPIModel != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
