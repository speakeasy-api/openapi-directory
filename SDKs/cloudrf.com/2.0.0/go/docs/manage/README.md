# Manage

### Available Operations

* [AddClutter](#addclutter) - Upload clutter data as GeoJSON
* [Delete](#delete) - Delete a calculation from the database.
* [DeleteNetwork](#deletenetwork) - Delete an entire network
* [Export](#export) - Export a calculation in a GIS file format
* [List](#list) - List calculations from your archive

## AddClutter

Upload GeoJSON lineString and polygon features to your account. The height property is in metres and the material code / type / attenuation are.. 1	Trees –	0.25,2Trees +	0.5,3	Timber –	1.0,4	Timber +	1.5,5	Brick – 	1.5,6	Brick +	2.0,7	Concrete –	3.0,8	Concrete +	4.0,9	Metal	6.0

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.AddClutter(ctx, operations.AddClutterRequestBody{
        Features: []shared.Feature{
            shared.Feature{
                Geometry: sdk.String("maiores"),
                Properties: sdk.String("dicta"),
                Type: sdk.String("corporis"),
            },
            shared.Feature{
                Geometry: sdk.String("dolore"),
                Properties: sdk.String("iusto"),
                Type: sdk.String("dicta"),
            },
        },
        Name: sdk.String("Bill Thompson"),
        Type: sdk.String("quae"),
    }, operations.AddClutterSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Delete

Warning! you could lose data. This function will delete the entry from the database and the file from the disk. Accidental deletion can be reversed by contacting support with biscuits who maintain an offsite backup.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.Delete(ctx, operations.DeleteRequest{
        Cid: 216822,
    }, operations.DeleteSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## DeleteNetwork

Warning! you could lose data. This function will delete the entry from the database and the file from the disk. Accidental deletion can be reversed by contacting support with biscuits who maintain an offsite backup.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.DeleteNetwork(ctx, operations.DeleteNetworkRequest{
        Nid: "quidem",
    }, operations.DeleteNetworkSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## Export

Download your data in a format suitable for a third party viewer like Google Earth or ESRI Arcmap.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.Export(ctx, operations.ExportRequest{
        File: "molestias",
        Fmt: operations.ExportFmtEnumShp,
    }, operations.ExportSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```

## List

List your area and path calculations, sorted by time and limited to the last few hundred. To fetch all for a given network append a 'net' filter with the network name.

### Example Usage

```go
package main

import(
	"context"
	"log"
	"openapi"
	"openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()

    ctx := context.Background()
    res, err := s.Manage.List(ctx, operations.ListRequest{
        E: sdk.Float32(8651.03),
        N: sdk.Float32(2653.89),
        S: sdk.Float32(5089.69),
        W: sdk.Float32(5232.48),
    }, operations.ListSecurity{
        APIKeyAuth: "YOUR_API_KEY_HERE",
    })
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
}
```
