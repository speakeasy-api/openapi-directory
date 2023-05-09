# OpenMETER

## Overview

Alternative access to OpenMeter Data.

### Available Operations

* [OmActivities](#omactivities) - Public shared smart meters installed in Germany and available for subservices and exploration.
* [OmMeters](#ommeters) - Public shared smart meters installed in Germany and available for subservices and exploration.
* [OmReadings](#omreadings) - Public shared smart meters installed in Germany and available for subservices and exploration.

## OmActivities

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.OpenMETER.OmActivities(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Ommeters != nil {
        // handle response
    }
}
```

## OmMeters

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.OpenMETER.OmMeters(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Ommeters != nil {
        // handle response
    }
}
```

## OmReadings

Provides a list of available meterrs in the OpenMETER project ( https://www.openmeter.de/ ) which grants access for analytics as data discovery.


### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.OpenMETER.OmReadings(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.Ommeters != nil {
        // handle response
    }
}
```
