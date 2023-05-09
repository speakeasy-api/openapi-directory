# openMETER

## Overview

Alternative access to OpenMeter Data.

### Available Operations

* [omActivities](#omactivities) - Public shared smart meters installed in Germany and available for subservices and exploration.
* [omMeters](#ommeters) - Public shared smart meters installed in Germany and available for subservices and exploration.
* [omReadings](#omreadings) - Public shared smart meters installed in Germany and available for subservices and exploration.

## omActivities

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OmActivitiesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OmActivitiesResponse res = sdk.openMETER.omActivities();

            if (res.ommeters != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## omMeters

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OmMetersResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OmMetersResponse res = sdk.openMETER.omMeters();

            if (res.ommeters != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## omReadings

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.


### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.OmReadingsResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            OmReadingsResponse res = sdk.openMETER.omReadings();

            if (res.ommeters != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
