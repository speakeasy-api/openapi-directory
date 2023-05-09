# info

### Available Operations

* [getArtifactFormats](#getartifactformats) - Artifact formats
* [getChangeLog](#getchangelog) - Recent changes
* [getEventTypes](#geteventtypes) - Event types

## getArtifactFormats

List the available artifact formats

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetArtifactFormatsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetArtifactFormatsResponse res = sdk.info.getArtifactFormats();

            if (res.artifactFormats != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getChangeLog

The Contribly change log.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetChangeLogResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetChangeLogResponse res = sdk.info.getChangeLog();

            if (res.changeLogItems != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getEventTypes

List available notification event types

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetEventTypesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetEventTypesResponse res = sdk.info.getEventTypes();

            if (res.eventTypes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
