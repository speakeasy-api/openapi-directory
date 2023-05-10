# create

### Available Operations

* [area](#area) - Create a point-to-multipoint heatmap
* [path](#path) - Point-to-point path profile analysis (Tx to Rx)
* [points](#points) - Point-to-multipoint path profile analysis (Many Tx, one Rx)

## area

An area coverage assumes the same receiver height at all locations out to fixed radius (maximum 300km). Due to it's exhaustive processing it is the slowest of all the API calls. Speed can be improved significantly by adjusting the resolution 'res' parameter. A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\AreaRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Antenna;
use \OpenAPI\OpenAPI\Models\Shared\AntennaPolEnum;
use \OpenAPI\OpenAPI\Models\Shared\Environment;
use \OpenAPI\OpenAPI\Models\Shared\Model;
use \OpenAPI\OpenAPI\Models\Shared\Output;
use \OpenAPI\OpenAPI\Models\Shared\OutputUnitsEnum;
use \OpenAPI\OpenAPI\Models\Shared\Receiver;
use \OpenAPI\OpenAPI\Models\Shared\Transmitter;
use \OpenAPI\OpenAPI\Models\Operations\AreaSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AreaRequestBody();
    $request->antenna = new Antenna();
    $request->antenna->ant = 392785;
    $request->antenna->azi = 925597;
    $request->antenna->hbw = 836079;
    $request->antenna->pol = AntennaPolEnum::H;
    $request->antenna->tlt = 3373.96;
    $request->antenna->txg = 871.29;
    $request->antenna->txl = 6481.72;
    $request->antenna->vbw = 20218;
    $request->environment = new Environment();
    $request->environment->cll = 368241;
    $request->environment->clm = 832620;
    $request->environment->mat = 9571.56;
    $request->model = new Model();
    $request->model->cli = 778157;
    $request->model->ked = 140350;
    $request->model->pe = 870013;
    $request->model->pm = 870088;
    $request->model->rel = 978619;
    $request->model->ter = 473608;
    $request->network = 'quod';
    $request->output = new Output();
    $request->output->ber = 800911;
    $request->output->col = 'esse';
    $request->output->mod = 520478;
    $request->output->nf = 780529;
    $request->output->out = 678880;
    $request->output->rad = 1182.74;
    $request->output->res = 720633;
    $request->output->units = OutputUnitsEnum::IMPERIAL;
    $request->receiver = new Receiver();
    $request->receiver->alt = 5820.2;
    $request->receiver->lat = 1433.53;
    $request->receiver->lon = 5373.73;
    $request->receiver->rxg = 9446.69;
    $request->receiver->rxs = 7586.16;
    $request->site = 'totam';
    $request->transmitter = new Transmitter();
    $request->transmitter->alt = 1059.07;
    $request->transmitter->bwi = 4146.62;
    $request->transmitter->frq = 4736;
    $request->transmitter->lat = 2645.55;
    $request->transmitter->lon = 1863.32;
    $request->transmitter->txw = 7742.34;

    $requestSecurity = new AreaSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->create->area($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## path

A path profile is a single link from A to B. It is much faster than an area calculation and can be used out to 300km. A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PathRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Antenna;
use \OpenAPI\OpenAPI\Models\Shared\AntennaPolEnum;
use \OpenAPI\OpenAPI\Models\Shared\Environment;
use \OpenAPI\OpenAPI\Models\Shared\Model;
use \OpenAPI\OpenAPI\Models\Shared\Output;
use \OpenAPI\OpenAPI\Models\Shared\OutputUnitsEnum;
use \OpenAPI\OpenAPI\Models\Shared\Receiver;
use \OpenAPI\OpenAPI\Models\Shared\Transmitter;
use \OpenAPI\OpenAPI\Models\Operations\PathSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PathRequestBody();
    $request->antenna = new Antenna();
    $request->antenna->ant = 736918;
    $request->antenna->azi = 456150;
    $request->antenna->hbw = 216550;
    $request->antenna->pol = AntennaPolEnum::V;
    $request->antenna->tlt = 1352.18;
    $request->antenna->txg = 187.89;
    $request->antenna->txl = 3241.41;
    $request->antenna->vbw = 617636;
    $request->environment = new Environment();
    $request->environment->cll = 149675;
    $request->environment->clm = 612096;
    $request->environment->mat = 2223.21;
    $request->model = new Model();
    $request->model->cli = 616934;
    $request->model->ked = 386489;
    $request->model->pe = 943749;
    $request->model->pm = 902599;
    $request->model->rel = 681820;
    $request->model->ter = 449950;
    $request->network = 'corporis';
    $request->output = new Output();
    $request->output->ber = 613064;
    $request->output->col = 'iure';
    $request->output->mod = 902349;
    $request->output->nf = 697631;
    $request->output->out = 99280;
    $request->output->rad = 602.25;
    $request->output->res = 969810;
    $request->output->units = OutputUnitsEnum::IMPERIAL;
    $request->receiver = new Receiver();
    $request->receiver->alt = 6531.4;
    $request->receiver->lat = 6706.38;
    $request->receiver->lon = 1709.09;
    $request->receiver->rxg = 2103.82;
    $request->receiver->rxs = 3581.52;
    $request->site = 'explicabo';
    $request->transmitter = new Transmitter();
    $request->transmitter->alt = 7506.86;
    $request->transmitter->bwi = 3154.28;
    $request->transmitter->frq = 6078.31;
    $request->transmitter->lat = 3637.11;
    $request->transmitter->lon = 3250.47;
    $request->transmitter->txw = 5701.97;

    $requestSecurity = new PathSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->create->path($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## points

The points function tests many transmitters and one receiver and is designed for route analysis. A minimal request needs a transmitters array of (latitude,longitude,altitude) locations, antenna, receiver and output objects defined as a minimum. Model and environment options will enhance accuracy.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\PointsRequestBody;
use \OpenAPI\OpenAPI\Models\Shared\Antenna;
use \OpenAPI\OpenAPI\Models\Shared\AntennaPolEnum;
use \OpenAPI\OpenAPI\Models\Shared\Environment;
use \OpenAPI\OpenAPI\Models\Shared\Model;
use \OpenAPI\OpenAPI\Models\Shared\Output;
use \OpenAPI\OpenAPI\Models\Shared\OutputUnitsEnum;
use \OpenAPI\OpenAPI\Models\Shared\Point;
use \OpenAPI\OpenAPI\Models\Shared\Receiver;
use \OpenAPI\OpenAPI\Models\Shared\Transmitter;
use \OpenAPI\OpenAPI\Models\Operations\PointsSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PointsRequestBody();
    $request->antenna = new Antenna();
    $request->antenna->ant = 38425;
    $request->antenna->azi = 438601;
    $request->antenna->hbw = 634274;
    $request->antenna->pol = AntennaPolEnum::V;
    $request->antenna->tlt = 9589.5;
    $request->antenna->txg = 1020.44;
    $request->antenna->txl = 6527.9;
    $request->antenna->vbw = 208876;
    $request->environment = new Environment();
    $request->environment->cll = 635059;
    $request->environment->clm = 161309;
    $request->environment->mat = 9953;
    $request->model = new Model();
    $request->model->cli = 653108;
    $request->model->ked = 581850;
    $request->model->pe = 253291;
    $request->model->pm = 414369;
    $request->model->rel = 466311;
    $request->model->ter = 474697;
    $request->network = 'velit';
    $request->output = new Output();
    $request->output->ber = 623510;
    $request->output->col = 'quia';
    $request->output->mod = 338007;
    $request->output->nf = 110375;
    $request->output->out = 674752;
    $request->output->rad = 6563.3;
    $request->output->res = 317202;
    $request->output->units = OutputUnitsEnum::METRIC;
    $request->points = [
        new Point(),
        new Point(),
        new Point(),
        new Point(),
    ];
    $request->receiver = new Receiver();
    $request->receiver->alt = 1965.82;
    $request->receiver->lat = 9495.72;
    $request->receiver->lon = 3687.25;
    $request->receiver->rxg = 6625.27;
    $request->receiver->rxs = 8209.94;
    $request->site = 'aut';
    $request->transmitter = new Transmitter();
    $request->transmitter->alt = 971.01;
    $request->transmitter->bwi = 6228.46;
    $request->transmitter->frq = 8379.45;
    $request->transmitter->lat = 6736.6;
    $request->transmitter->lon = 960.98;
    $request->transmitter->txw = 9719.45;

    $requestSecurity = new PointsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->create->points($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
