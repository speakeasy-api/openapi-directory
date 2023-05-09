# create

### Available Operations

* [area](#area) - Create a point-to-multipoint heatmap
* [path](#path) - Point-to-point path profile analysis (Tx to Rx)
* [points](#points) - Point-to-multipoint path profile analysis (Many Tx, one Rx)

## area

An area coverage assumes the same receiver height at all locations out to fixed radius (maximum 300km). Due to it's exhaustive processing it is the slowest of all the API calls. Speed can be improved significantly by adjusting the resolution 'res' parameter. A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AreaRequestBody;
import org.openapis.openapi.models.operations.AreaResponse;
import org.openapis.openapi.models.operations.AreaSecurity;
import org.openapis.openapi.models.shared.Antenna;
import org.openapis.openapi.models.shared.AntennaPolEnum;
import org.openapis.openapi.models.shared.Environment;
import org.openapis.openapi.models.shared.Model;
import org.openapis.openapi.models.shared.Output;
import org.openapis.openapi.models.shared.OutputUnitsEnum;
import org.openapis.openapi.models.shared.Receiver;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Transmitter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            AreaRequestBody req = new AreaRequestBody() {{
                antenna = new Antenna() {{
                    ant = 963663;
                    azi = 272656;
                    hbw = 383441;
                    pol = AntennaPolEnum.H;
                    tlt = 7917.25;
                    txg = 8121.69;
                    txl = 5288.95;
                    vbw = 479977;
                }};;
                environment = new Environment() {{
                    cll = 568045;
                    clm = 392785;
                    mat = 9255.97;
                }};;
                model = new Model() {{
                    cli = 836079;
                    ked = 71036L;
                    pe = 337396;
                    pm = 87129;
                    rel = 648172;
                    ter = 20218;
                }};;
                network = "ipsam";
                output = new Output() {{
                    ber = 832620;
                    col = "sapiente";
                    mod = 778157;
                    nf = 140350;
                    out = 870013;
                    rad = 8700.88;
                    res = 978619;
                    units = OutputUnitsEnum.METRIC;
                }};;
                receiver = new Receiver() {{
                    alt = 7991.59;
                    lat = 8009.11;
                    lon = 4614.79;
                    rxg = 5204.78;
                    rxs = 7805.29;
                }};;
                site = "dolorum";
                transmitter = new Transmitter() {{
                    alt = 1182.74;
                    bwi = 7206.33;
                    frq = 6399.21;
                    lat = 5820.2;
                    lon = 1433.53;
                    txw = 5373.73;
                }};;
            }};            

            AreaResponse res = sdk.create.area(req, new AreaSecurity("hic") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## path

A path profile is a single link from A to B. It is much faster than an area calculation and can be used out to 300km. A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PathRequestBody;
import org.openapis.openapi.models.operations.PathResponse;
import org.openapis.openapi.models.operations.PathSecurity;
import org.openapis.openapi.models.shared.Antenna;
import org.openapis.openapi.models.shared.AntennaPolEnum;
import org.openapis.openapi.models.shared.Environment;
import org.openapis.openapi.models.shared.Model;
import org.openapis.openapi.models.shared.Output;
import org.openapis.openapi.models.shared.OutputUnitsEnum;
import org.openapis.openapi.models.shared.Receiver;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Transmitter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PathRequestBody req = new PathRequestBody() {{
                antenna = new Antenna() {{
                    ant = 758616;
                    azi = 521848;
                    hbw = 105907;
                    pol = AntennaPolEnum.H;
                    tlt = 4736;
                    txg = 2645.55;
                    txl = 1863.32;
                    vbw = 774234;
                }};;
                environment = new Environment() {{
                    cll = 736918;
                    clm = 456150;
                    mat = 2165.5;
                }};;
                model = new Model() {{
                    cli = 568434;
                    ked = 135218L;
                    pe = 18789;
                    pm = 324141;
                    rel = 617636;
                    ter = 149675;
                }};;
                network = "iste";
                output = new Output() {{
                    ber = 222321;
                    col = "natus";
                    mod = 386489;
                    nf = 943749;
                    out = 902599;
                    rad = 6818.2;
                    res = 449950;
                    units = OutputUnitsEnum.METRIC;
                }};;
                receiver = new Receiver() {{
                    alt = 6130.64;
                    lat = 4370.32;
                    lon = 9023.49;
                    rxg = 6976.31;
                    rxs = 992.8;
                }};;
                site = "ipsa";
                transmitter = new Transmitter() {{
                    alt = 9698.1;
                    bwi = 6667.67;
                    frq = 6531.4;
                    lat = 6706.38;
                    lon = 1709.09;
                    txw = 2103.82;
                }};;
            }};            

            PathResponse res = sdk.create.path(req, new PathSecurity("corporis") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## points

The points function tests many transmitters and one receiver and is designed for route analysis. A minimal request needs a transmitters array of (latitude,longitude,altitude) locations, antenna, receiver and output objects defined as a minimum. Model and environment options will enhance accuracy.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PointsRequestBody;
import org.openapis.openapi.models.operations.PointsResponse;
import org.openapis.openapi.models.operations.PointsSecurity;
import org.openapis.openapi.models.shared.Antenna;
import org.openapis.openapi.models.shared.AntennaPolEnum;
import org.openapis.openapi.models.shared.Environment;
import org.openapis.openapi.models.shared.Model;
import org.openapis.openapi.models.shared.Output;
import org.openapis.openapi.models.shared.OutputUnitsEnum;
import org.openapis.openapi.models.shared.Point;
import org.openapis.openapi.models.shared.Receiver;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.Transmitter;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            PointsRequestBody req = new PointsRequestBody() {{
                antenna = new Antenna() {{
                    ant = 128926;
                    azi = 750686;
                    hbw = 315428;
                    pol = AntennaPolEnum.V;
                    tlt = 3637.11;
                    txg = 3250.47;
                    txl = 5701.97;
                    vbw = 38425;
                }};;
                environment = new Environment() {{
                    cll = 438601;
                    clm = 634274;
                    mat = 9883.74;
                }};;
                model = new Model() {{
                    cli = 958950;
                    ked = 102044L;
                    pe = 652790;
                    pm = 208876;
                    rel = 635059;
                    ter = 161309;
                }};;
                network = "repellat";
                output = new Output() {{
                    ber = 653108;
                    col = "occaecati";
                    mod = 253291;
                    nf = 414369;
                    out = 466311;
                    rad = 4746.97;
                    res = 244425;
                    units = OutputUnitsEnum.IMPERIAL;
                }};;
                points = new org.openapis.openapi.models.shared.Point[]{{
                    add(new Point() {{
                        alt = 3380.07;
                        lat = 1103.75;
                        lon = 6747.52;
                    }}),
                }};
                receiver = new Receiver() {{
                    alt = 6563.3;
                    lat = 3172.02;
                    lon = 1381.83;
                    rxg = 7783.46;
                    rxs = 1965.82;
                }};;
                site = "tenetur";
                transmitter = new Transmitter() {{
                    alt = 3687.25;
                    bwi = 6625.27;
                    frq = 8209.94;
                    lat = 135.71;
                    lon = 971.01;
                    txw = 6228.46;
                }};;
            }};            

            PointsResponse res = sdk.create.points(req, new PointsSecurity("temporibus") {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
