# Create

### Available Operations

* [Area](#area) - Create a point-to-multipoint heatmap
* [Path](#path) - Point-to-point path profile analysis (Tx to Rx)
* [Points](#points) - Point-to-multipoint path profile analysis (Many Tx, one Rx)

## Area

An area coverage assumes the same receiver height at all locations out to fixed radius (maximum 300km). Due to it's exhaustive processing it is the slowest of all the API calls. Speed can be improved significantly by adjusting the resolution 'res' parameter. A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.

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
    res, err := s.Create.Area(ctx, operations.AreaRequestBody{
        Antenna: &shared.Antenna{
            Ant: sdk.Int(392785),
            Azi: sdk.Int(925597),
            Hbw: sdk.Int(836079),
            Pol: shared.AntennaPolEnumH.ToPointer(),
            Tlt: sdk.Float32(3373.96),
            Txg: sdk.Float32(871.29),
            Txl: sdk.Float32(6481.72),
            Vbw: sdk.Int(20218),
        },
        Environment: &shared.Environment{
            Cll: sdk.Int(368241),
            Clm: sdk.Int(832620),
            Mat: sdk.Float32(9571.56),
        },
        Model: &shared.Model{
            Cli: sdk.Int(778157),
            Ked: sdk.Int64(140350),
            Pe: sdk.Int(870013),
            Pm: sdk.Int(870088),
            Rel: sdk.Int(978619),
            Ter: sdk.Int(473608),
        },
        Network: sdk.String("quod"),
        Output: &shared.Output{
            Ber: sdk.Int(800911),
            Col: sdk.String("esse"),
            Mod: sdk.Int(520478),
            Nf: sdk.Int(780529),
            Out: sdk.Int(678880),
            Rad: sdk.Float32(1182.74),
            Res: sdk.Int(720633),
            Units: shared.OutputUnitsEnumImperial.ToPointer(),
        },
        Receiver: &shared.Receiver{
            Alt: sdk.Float32(5820.2),
            Lat: sdk.Float32(1433.53),
            Lon: sdk.Float32(5373.73),
            Rxg: sdk.Float32(9446.69),
            Rxs: sdk.Float32(7586.16),
        },
        Site: sdk.String("totam"),
        Transmitter: &shared.Transmitter{
            Alt: sdk.Float32(1059.07),
            Bwi: sdk.Float32(4146.62),
            Frq: sdk.Float32(4736),
            Lat: sdk.Float32(2645.55),
            Lon: sdk.Float32(1863.32),
            Txw: sdk.Float32(7742.34),
        },
    }, operations.AreaSecurity{
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

## Path

A path profile is a single link from A to B. It is much faster than an area calculation and can be used out to 300km. A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.

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
    res, err := s.Create.Path(ctx, operations.PathRequestBody{
        Antenna: &shared.Antenna{
            Ant: sdk.Int(736918),
            Azi: sdk.Int(456150),
            Hbw: sdk.Int(216550),
            Pol: shared.AntennaPolEnumV.ToPointer(),
            Tlt: sdk.Float32(1352.18),
            Txg: sdk.Float32(187.89),
            Txl: sdk.Float32(3241.41),
            Vbw: sdk.Int(617636),
        },
        Environment: &shared.Environment{
            Cll: sdk.Int(149675),
            Clm: sdk.Int(612096),
            Mat: sdk.Float32(2223.21),
        },
        Model: &shared.Model{
            Cli: sdk.Int(616934),
            Ked: sdk.Int64(386489),
            Pe: sdk.Int(943749),
            Pm: sdk.Int(902599),
            Rel: sdk.Int(681820),
            Ter: sdk.Int(449950),
        },
        Network: sdk.String("corporis"),
        Output: &shared.Output{
            Ber: sdk.Int(613064),
            Col: sdk.String("iure"),
            Mod: sdk.Int(902349),
            Nf: sdk.Int(697631),
            Out: sdk.Int(99280),
            Rad: sdk.Float32(602.25),
            Res: sdk.Int(969810),
            Units: shared.OutputUnitsEnumImperial.ToPointer(),
        },
        Receiver: &shared.Receiver{
            Alt: sdk.Float32(6531.4),
            Lat: sdk.Float32(6706.38),
            Lon: sdk.Float32(1709.09),
            Rxg: sdk.Float32(2103.82),
            Rxs: sdk.Float32(3581.52),
        },
        Site: sdk.String("explicabo"),
        Transmitter: &shared.Transmitter{
            Alt: sdk.Float32(7506.86),
            Bwi: sdk.Float32(3154.28),
            Frq: sdk.Float32(6078.31),
            Lat: sdk.Float32(3637.11),
            Lon: sdk.Float32(3250.47),
            Txw: sdk.Float32(5701.97),
        },
    }, operations.PathSecurity{
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

## Points

The points function tests many transmitters and one receiver and is designed for route analysis. A minimal request needs a transmitters array of (latitude,longitude,altitude) locations, antenna, receiver and output objects defined as a minimum. Model and environment options will enhance accuracy.

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
    res, err := s.Create.Points(ctx, operations.PointsRequestBody{
        Antenna: &shared.Antenna{
            Ant: sdk.Int(38425),
            Azi: sdk.Int(438601),
            Hbw: sdk.Int(634274),
            Pol: shared.AntennaPolEnumV.ToPointer(),
            Tlt: sdk.Float32(9589.5),
            Txg: sdk.Float32(1020.44),
            Txl: sdk.Float32(6527.9),
            Vbw: sdk.Int(208876),
        },
        Environment: &shared.Environment{
            Cll: sdk.Int(635059),
            Clm: sdk.Int(161309),
            Mat: sdk.Float32(9953),
        },
        Model: &shared.Model{
            Cli: sdk.Int(653108),
            Ked: sdk.Int64(581850),
            Pe: sdk.Int(253291),
            Pm: sdk.Int(414369),
            Rel: sdk.Int(466311),
            Ter: sdk.Int(474697),
        },
        Network: sdk.String("velit"),
        Output: &shared.Output{
            Ber: sdk.Int(623510),
            Col: sdk.String("quia"),
            Mod: sdk.Int(338007),
            Nf: sdk.Int(110375),
            Out: sdk.Int(674752),
            Rad: sdk.Float32(6563.3),
            Res: sdk.Int(317202),
            Units: shared.OutputUnitsEnumMetric.ToPointer(),
        },
        Points: []shared.Point{
            shared.Point{
                Alt: sdk.Float32(1965.82),
                Lat: sdk.Float32(9495.72),
                Lon: sdk.Float32(3687.25),
            },
            shared.Point{
                Alt: sdk.Float32(6625.27),
                Lat: sdk.Float32(8209.94),
                Lon: sdk.Float32(135.71),
            },
            shared.Point{
                Alt: sdk.Float32(971.01),
                Lat: sdk.Float32(6228.46),
                Lon: sdk.Float32(8379.45),
            },
            shared.Point{
                Alt: sdk.Float32(6736.6),
                Lat: sdk.Float32(960.98),
                Lon: sdk.Float32(9719.45),
            },
        },
        Receiver: &shared.Receiver{
            Alt: sdk.Float32(9764.6),
            Lat: sdk.Float32(8781.94),
            Lon: sdk.Float32(4686.51),
            Rxg: sdk.Float32(5096.24),
            Rxs: sdk.Float32(9767.62),
        },
        Site: sdk.String("ipsa"),
        Transmitter: &shared.Transmitter{
            Alt: sdk.Float32(6048.46),
            Bwi: sdk.Float32(4511.59),
            Frq: sdk.Float32(7392.64),
            Lat: sdk.Float32(199.87),
            Lon: sdk.Float32(391.87),
            Txw: sdk.Float32(4417.11),
        },
    }, operations.PointsSecurity{
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
