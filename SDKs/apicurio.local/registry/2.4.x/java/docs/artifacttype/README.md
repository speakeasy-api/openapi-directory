# artifactType

### Available Operations

* [listArtifactTypes](#listartifacttypes) - List artifact types

## listArtifactTypes

Gets a list of all the configured artifact types.

This operation can fail for the following reasons:

* A server error occurred (HTTP error `500`)


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListArtifactTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListArtifactTypesResponse res = sdk.artifactType.listArtifactTypes();

            if (res.artifactTypeInfos != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
