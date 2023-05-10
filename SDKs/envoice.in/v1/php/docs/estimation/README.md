# estimation

### Available Operations

* [estimationApiAll](#estimationapiall) - Return all estimation for the account
* [estimationApiChangeStatusForm](#estimationapichangestatusform) - Change estimation status
* [estimationApiChangeStatusJson](#estimationapichangestatusjson) - Change estimation status
* [estimationApiChangeStatusRaw](#estimationapichangestatusraw) - Change estimation status
* [estimationApiDeleteForm](#estimationapideleteform) - Delete an existing estimation
* [estimationApiDeleteJson](#estimationapideletejson) - Delete an existing estimation
* [estimationApiDeleteRaw](#estimationapideleteraw) - Delete an existing estimation
* [estimationApiDetails](#estimationapidetails) - Return estimation data
* [estimationApiNewForm](#estimationapinewform) - Create an estimation
* [estimationApiNewJson](#estimationapinewjson) - Create an estimation
* [estimationApiNewRaw](#estimationapinewraw) - Create an estimation
* [estimationApiSendToClientForm](#estimationapisendtoclientform) - Send the provided estimation to the client
* [estimationApiSendToClientJson](#estimationapisendtoclientjson) - Send the provided estimation to the client
* [estimationApiSendToClientRaw](#estimationapisendtoclientraw) - Send the provided estimation to the client
* [estimationApiStatus](#estimationapistatus) - Retrieve the status of the estimation
* [estimationApiUpdateForm](#estimationapiupdateform) - Update an existing estimation
* [estimationApiUpdateJson](#estimationapiupdatejson) - Update an existing estimation
* [estimationApiUpdateRaw](#estimationapiupdateraw) - Update an existing estimation
* [estimationApiUri](#estimationapiuri) - Return the unique url to the client's invoice

## estimationApiAll

Return all estimation for the account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EstimationApiAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimationApiAllRequest();
    $request->queryOptionsPage = 509624;
    $request->queryOptionsPageSize = 976762;
    $request->xAuthKey = 'ipsa';
    $request->xAuthSecret = 'omnis';

    $response = $sdk->estimation->estimationApiAll($request);

    if ($response->listResultEstimationDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## estimationApiChangeStatusForm

Change estimation status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EstimationApiChangeStatusFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\EstimationChangeStatusApiModel;
use \OpenAPI\OpenAPI\Models\Shared\EstimationChangeStatusApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimationApiChangeStatusFormRequest();
    $request->estimationChangeStatusApiModel = new EstimationChangeStatusApiModel();
    $request->estimationChangeStatusApiModel->id = 451159;
    $request->estimationChangeStatusApiModel->status = EstimationChangeStatusApiModelStatusEnum::REJECTED;
    $request->xAuthKey = 'perferendis';
    $request->xAuthSecret = 'doloremque';

    $response = $sdk->estimation->estimationApiChangeStatusForm($request);

    if ($response->estimationApiChangeStatusForm200ApplicationJSONBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## estimationApiChangeStatusJson

Change estimation status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EstimationApiChangeStatusJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\EstimationChangeStatusApiModel;
use \OpenAPI\OpenAPI\Models\Shared\EstimationChangeStatusApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimationApiChangeStatusJsonRequest();
    $request->estimationChangeStatusApiModel = new EstimationChangeStatusApiModel();
    $request->estimationChangeStatusApiModel->id = 441711;
    $request->estimationChangeStatusApiModel->status = EstimationChangeStatusApiModelStatusEnum::DRAFT;
    $request->xAuthKey = 'maiores';
    $request->xAuthSecret = 'dicta';

    $response = $sdk->estimation->estimationApiChangeStatusJson($request);

    if ($response->estimationApiChangeStatusJSON200ApplicationJSONBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## estimationApiChangeStatusRaw

Change estimation status

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EstimationApiChangeStatusRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimationApiChangeStatusRawRequest();
    $request->requestBody = 'corporis';
    $request->xAuthKey = 'dolore';
    $request->xAuthSecret = 'iusto';

    $response = $sdk->estimation->estimationApiChangeStatusRaw($request);

    if ($response->estimationApiChangeStatusRaw200ApplicationJSONBoolean !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## estimationApiDeleteForm

Delete an existing estimation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EstimationApiDeleteFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\EstimationDeleteApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimationApiDeleteFormRequest();
    $request->estimationDeleteApiModel = new EstimationDeleteApiModel();
    $request->estimationDeleteApiModel->id = 118727;
    $request->xAuthKey = 'harum';
    $request->xAuthSecret = 'enim';

    $response = $sdk->estimation->estimationApiDeleteForm($request);

    if ($response->estimationApiDeleteForm200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## estimationApiDeleteJson

Delete an existing estimation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EstimationApiDeleteJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\EstimationDeleteApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimationApiDeleteJsonRequest();
    $request->estimationDeleteApiModel = new EstimationDeleteApiModel();
    $request->estimationDeleteApiModel->id = 880476;
    $request->xAuthKey = 'commodi';
    $request->xAuthSecret = 'repudiandae';

    $response = $sdk->estimation->estimationApiDeleteJson($request);

    if ($response->estimationApiDeleteJSON200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## estimationApiDeleteRaw

Delete an existing estimation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EstimationApiDeleteRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimationApiDeleteRawRequest();
    $request->requestBody = 'quae';
    $request->xAuthKey = 'ipsum';
    $request->xAuthSecret = 'quidem';

    $response = $sdk->estimation->estimationApiDeleteRaw($request);

    if ($response->estimationApiDeleteRaw200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## estimationApiDetails

Return estimation data

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EstimationApiDetailsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimationApiDetailsRequest();
    $request->id = 565189;
    $request->xAuthKey = 'excepturi';
    $request->xAuthSecret = 'pariatur';

    $response = $sdk->estimation->estimationApiDetails($request);

    if ($response->estimationFullDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## estimationApiNewForm

Create an estimation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EstimationApiNewFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\EstimationCreateApiModel;
use \OpenAPI\OpenAPI\Models\Shared\EstimationCreateAttachmentApiModel;
use \OpenAPI\OpenAPI\Models\Shared\EstimationCreateAttachmentApiModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EstimationCreateItemApiModel;
use \OpenAPI\OpenAPI\Models\Shared\EstimationGatewayApiModel;
use \OpenAPI\OpenAPI\Models\Shared\EstimationCreateApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimationApiNewFormRequest();
    $request->estimationCreateApiModel = new EstimationCreateApiModel();
    $request->estimationCreateApiModel->attachments = [
        new EstimationCreateAttachmentApiModel(),
        new EstimationCreateAttachmentApiModel(),
    ];
    $request->estimationCreateApiModel->clientId = 508969;
    $request->estimationCreateApiModel->clonedFromId = 523248;
    $request->estimationCreateApiModel->currencyId = 916723;
    $request->estimationCreateApiModel->expiresOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-29T18:39:33.469Z');
    $request->estimationCreateApiModel->issuedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-01T07:52:08.326Z');
    $request->estimationCreateApiModel->items = [
        new EstimationCreateItemApiModel(),
        new EstimationCreateItemApiModel(),
        new EstimationCreateItemApiModel(),
        new EstimationCreateItemApiModel(),
    ];
    $request->estimationCreateApiModel->notes = 'incidunt';
    $request->estimationCreateApiModel->number = 'enim';
    $request->estimationCreateApiModel->paymentGateways = [
        new EstimationGatewayApiModel(),
    ];
    $request->estimationCreateApiModel->poNumber = 'est';
    $request->estimationCreateApiModel->status = EstimationCreateApiModelStatusEnum::REJECTED;
    $request->estimationCreateApiModel->terms = 'explicabo';
    $request->xAuthKey = 'deserunt';
    $request->xAuthSecret = 'distinctio';

    $response = $sdk->estimation->estimationApiNewForm($request);

    if ($response->estimationFullDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## estimationApiNewJson

Create an estimation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EstimationApiNewJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\EstimationCreateApiModel;
use \OpenAPI\OpenAPI\Models\Shared\EstimationCreateAttachmentApiModel;
use \OpenAPI\OpenAPI\Models\Shared\EstimationCreateAttachmentApiModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EstimationCreateItemApiModel;
use \OpenAPI\OpenAPI\Models\Shared\EstimationGatewayApiModel;
use \OpenAPI\OpenAPI\Models\Shared\EstimationCreateApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimationApiNewJsonRequest();
    $request->estimationCreateApiModel = new EstimationCreateApiModel();
    $request->estimationCreateApiModel->attachments = [
        new EstimationCreateAttachmentApiModel(),
        new EstimationCreateAttachmentApiModel(),
        new EstimationCreateAttachmentApiModel(),
        new EstimationCreateAttachmentApiModel(),
    ];
    $request->estimationCreateApiModel->clientId = 289406;
    $request->estimationCreateApiModel->clonedFromId = 264730;
    $request->estimationCreateApiModel->currencyId = 183191;
    $request->estimationCreateApiModel->expiresOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-31T22:08:47.731Z');
    $request->estimationCreateApiModel->issuedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-17T07:42:55.593Z');
    $request->estimationCreateApiModel->items = [
        new EstimationCreateItemApiModel(),
    ];
    $request->estimationCreateApiModel->notes = 'assumenda';
    $request->estimationCreateApiModel->number = 'ipsam';
    $request->estimationCreateApiModel->paymentGateways = [
        new EstimationGatewayApiModel(),
    ];
    $request->estimationCreateApiModel->poNumber = 'fugit';
    $request->estimationCreateApiModel->status = EstimationCreateApiModelStatusEnum::REJECTED;
    $request->estimationCreateApiModel->terms = 'excepturi';
    $request->xAuthKey = 'tempora';
    $request->xAuthSecret = 'facilis';

    $response = $sdk->estimation->estimationApiNewJson($request);

    if ($response->estimationFullDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## estimationApiNewRaw

Create an estimation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EstimationApiNewRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimationApiNewRawRequest();
    $request->requestBody = 'tempore';
    $request->xAuthKey = 'labore';
    $request->xAuthSecret = 'delectus';

    $response = $sdk->estimation->estimationApiNewRaw($request);

    if ($response->estimationFullDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## estimationApiSendToClientForm

Send the provided estimation to the client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EstimationApiSendToClientFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendEstimationToClientApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimationApiSendToClientFormRequest();
    $request->sendEstimationToClientApiModel = new SendEstimationToClientApiModel();
    $request->sendEstimationToClientApiModel->attachPdf = false;
    $request->sendEstimationToClientApiModel->estimationId = 433288;
    $request->sendEstimationToClientApiModel->id = 248753;
    $request->sendEstimationToClientApiModel->message = 'eligendi';
    $request->sendEstimationToClientApiModel->sendToSelf = false;
    $request->sendEstimationToClientApiModel->subject = 'sint';
    $request->xAuthKey = 'aliquid';
    $request->xAuthSecret = 'provident';

    $response = $sdk->estimation->estimationApiSendToClientForm($request);

    if ($response->estimationApiSendToClientForm200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## estimationApiSendToClientJson

Send the provided estimation to the client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EstimationApiSendToClientJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\SendEstimationToClientApiModel;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimationApiSendToClientJsonRequest();
    $request->sendEstimationToClientApiModel = new SendEstimationToClientApiModel();
    $request->sendEstimationToClientApiModel->attachPdf = false;
    $request->sendEstimationToClientApiModel->estimationId = 896039;
    $request->sendEstimationToClientApiModel->id = 572252;
    $request->sendEstimationToClientApiModel->message = 'officia';
    $request->sendEstimationToClientApiModel->sendToSelf = false;
    $request->sendEstimationToClientApiModel->subject = 'dolor';
    $request->xAuthKey = 'debitis';
    $request->xAuthSecret = 'a';

    $response = $sdk->estimation->estimationApiSendToClientJson($request);

    if ($response->estimationApiSendToClientJSON200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## estimationApiSendToClientRaw

Send the provided estimation to the client

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EstimationApiSendToClientRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimationApiSendToClientRawRequest();
    $request->requestBody = 'dolorum';
    $request->xAuthKey = 'in';
    $request->xAuthSecret = 'in';

    $response = $sdk->estimation->estimationApiSendToClientRaw($request);

    if ($response->estimationApiSendToClientRaw200ApplicationJSONInt32Integer !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## estimationApiStatus

Retrieve the status of the estimation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EstimationApiStatusRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimationApiStatusRequest();
    $request->id = 846409;
    $request->xAuthKey = 'maiores';
    $request->xAuthSecret = 'rerum';

    $response = $sdk->estimation->estimationApiStatus($request);

    if ($response->estimationApiStatus200ApplicationJSONStringEnum !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## estimationApiUpdateForm

Update an existing estimation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EstimationApiUpdateFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\EstimationUpdateApiModel;
use \OpenAPI\OpenAPI\Models\Shared\EstimationUpdateAttachmentApiModel;
use \OpenAPI\OpenAPI\Models\Shared\EstimationUpdateAttachmentApiModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EstimationUpdateItemApiModel;
use \OpenAPI\OpenAPI\Models\Shared\EstimationGatewayApiModel;
use \OpenAPI\OpenAPI\Models\Shared\EstimationUpdateApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimationApiUpdateFormRequest();
    $request->estimationUpdateApiModel = new EstimationUpdateApiModel();
    $request->estimationUpdateApiModel->attachments = [
        new EstimationUpdateAttachmentApiModel(),
    ];
    $request->estimationUpdateApiModel->clientId = 297437;
    $request->estimationUpdateApiModel->clonedFromId = 767024;
    $request->estimationUpdateApiModel->currencyId = 813798;
    $request->estimationUpdateApiModel->expiresOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-08-09T06:36:34.417Z');
    $request->estimationUpdateApiModel->id = 675439;
    $request->estimationUpdateApiModel->issuedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-02T11:21:13.260Z');
    $request->estimationUpdateApiModel->items = [
        new EstimationUpdateItemApiModel(),
        new EstimationUpdateItemApiModel(),
        new EstimationUpdateItemApiModel(),
    ];
    $request->estimationUpdateApiModel->notes = 'enim';
    $request->estimationUpdateApiModel->number = 'accusamus';
    $request->estimationUpdateApiModel->paymentGateways = [
        new EstimationGatewayApiModel(),
        new EstimationGatewayApiModel(),
        new EstimationGatewayApiModel(),
        new EstimationGatewayApiModel(),
    ];
    $request->estimationUpdateApiModel->poNumber = 'quidem';
    $request->estimationUpdateApiModel->status = EstimationUpdateApiModelStatusEnum::ACCEPTED;
    $request->estimationUpdateApiModel->terms = 'nam';
    $request->xAuthKey = 'id';
    $request->xAuthSecret = 'blanditiis';

    $response = $sdk->estimation->estimationApiUpdateForm($request);

    if ($response->estimationFullDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## estimationApiUpdateJson

Update an existing estimation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EstimationApiUpdateJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\EstimationUpdateApiModel;
use \OpenAPI\OpenAPI\Models\Shared\EstimationUpdateAttachmentApiModel;
use \OpenAPI\OpenAPI\Models\Shared\EstimationUpdateAttachmentApiModelTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\EstimationUpdateItemApiModel;
use \OpenAPI\OpenAPI\Models\Shared\EstimationGatewayApiModel;
use \OpenAPI\OpenAPI\Models\Shared\EstimationUpdateApiModelStatusEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimationApiUpdateJsonRequest();
    $request->estimationUpdateApiModel = new EstimationUpdateApiModel();
    $request->estimationUpdateApiModel->attachments = [
        new EstimationUpdateAttachmentApiModel(),
        new EstimationUpdateAttachmentApiModel(),
        new EstimationUpdateAttachmentApiModel(),
    ];
    $request->estimationUpdateApiModel->clientId = 956084;
    $request->estimationUpdateApiModel->clonedFromId = 230533;
    $request->estimationUpdateApiModel->currencyId = 643990;
    $request->estimationUpdateApiModel->expiresOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-30T07:01:46.758Z');
    $request->estimationUpdateApiModel->id = 618809;
    $request->estimationUpdateApiModel->issuedOn = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-19T08:19:15.156Z');
    $request->estimationUpdateApiModel->items = [
        new EstimationUpdateItemApiModel(),
    ];
    $request->estimationUpdateApiModel->notes = 'nihil';
    $request->estimationUpdateApiModel->number = 'magnam';
    $request->estimationUpdateApiModel->paymentGateways = [
        new EstimationGatewayApiModel(),
        new EstimationGatewayApiModel(),
        new EstimationGatewayApiModel(),
    ];
    $request->estimationUpdateApiModel->poNumber = 'id';
    $request->estimationUpdateApiModel->status = EstimationUpdateApiModelStatusEnum::DRAFT;
    $request->estimationUpdateApiModel->terms = 'labore';
    $request->xAuthKey = 'suscipit';
    $request->xAuthSecret = 'natus';

    $response = $sdk->estimation->estimationApiUpdateJson($request);

    if ($response->estimationFullDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## estimationApiUpdateRaw

Update an existing estimation

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EstimationApiUpdateRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimationApiUpdateRawRequest();
    $request->requestBody = 'nobis';
    $request->xAuthKey = 'eum';
    $request->xAuthSecret = 'vero';

    $response = $sdk->estimation->estimationApiUpdateRaw($request);

    if ($response->estimationFullDetailsApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## estimationApiUri

Return the unique url to the client's invoice

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EstimationApiUriRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EstimationApiUriRequest();
    $request->id = 135474;
    $request->xAuthKey = 'architecto';
    $request->xAuthSecret = 'magnam';

    $response = $sdk->estimation->estimationApiUri($request);

    if ($response->estimationUriApiModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
