# customerAddresses

### Available Operations

* [customerAddressesCreateForm](#customeraddressescreateform) - Creates a new customer address
* [customerAddressesCreateJson](#customeraddressescreatejson) - Creates a new customer address
* [customerAddressesCreateRaw](#customeraddressescreateraw) - Creates a new customer address
* [customerAddressesGetAll](#customeraddressesgetall) - Get a list of all customer addresses
* [customerAddressesGetOne](#customeraddressesgetone) - Queries a single customer address by id
* [customerAddressesUpdateForm](#customeraddressesupdateform) - Updates a customer address by id
* [customerAddressesUpdateJson](#customeraddressesupdatejson) - Updates a customer address by id
* [customerAddressesUpdateRaw](#customeraddressesupdateraw) - Updates a customer address by id

## customerAddressesCreateForm

Creates a new customer address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel();
    $request->addressAddition = 'corrupti';
    $request->addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum::TWO;
    $request->archivedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-04-24T16:27:50.833Z');
    $request->city = 'Stiedemannstad';
    $request->company = 'Kassulke, Mueller and Oberbrunner';
    $request->countryCode = 'HM';
    $request->customerId = 437587;
    $request->email = 'Sim.Bednar38@gmail.com';
    $request->fax = 'molestiae';
    $request->firstName = 'Paxton';
    $request->housenumber = 'placeat';
    $request->id = 528895;
    $request->lastName = 'Kshlerin';
    $request->name2 = 'excepturi';
    $request->restoredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-28T03:46:24.500Z');
    $request->state = 'temporibus';
    $request->street = '30603 Will Shoals';
    $request->tel1 = 'odit';
    $request->tel2 = 'at';
    $request->zip = 'at';

    $response = $sdk->customerAddresses->customerAddressesCreateForm($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerAddressesCreateJson

Creates a new customer address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel();
    $request->addressAddition = 'maiores';
    $request->addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum::ONE;
    $request->archivedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-08-07T00:03:55.328Z');
    $request->city = 'Jovanfort';
    $request->company = 'Carroll, Reichel and Nikolaus';
    $request->countryCode = 'ML';
    $request->customerId = 143353;
    $request->email = 'Tyrel.Rosenbaum@yahoo.com';
    $request->fax = 'commodi';
    $request->firstName = 'Jaren';
    $request->housenumber = 'modi';
    $request->id = 186332;
    $request->lastName = 'Ryan';
    $request->name2 = 'cum';
    $request->restoredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-13T23:01:07.168Z');
    $request->state = 'excepturi';
    $request->street = '03616 Lexie Hills';
    $request->tel1 = 'hic';
    $request->tel2 = 'saepe';
    $request->zip = 'fuga';

    $response = $sdk->customerAddresses->customerAddressesCreateJson($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerAddressesCreateRaw

Creates a new customer address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'in'

    $response = $sdk->customerAddresses->customerAddressesCreateRaw($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerAddressesGetAll

Get a list of all customer addresses

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerAddressesGetAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerAddressesGetAllRequest();
    $request->page = 359508;
    $request->pageSize = 613064;

    $response = $sdk->customerAddresses->customerAddressesGetAll($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerAddressesGetOne

Queries a single customer address by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerAddressesGetOneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerAddressesGetOneRequest();
    $request->id = 437032;

    $response = $sdk->customerAddresses->customerAddressesGetOne($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerAddressesUpdateForm

Updates a customer address by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerAddressesUpdateFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerAddressesUpdateFormRequest();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel = new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->addressAddition = 'saepe';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum::TWO;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->archivedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-12-10T00:25:28.749Z');
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->city = 'Parma';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->company = 'Osinski - Dach';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->countryCode = 'CW';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->customerId = 358152;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->email = 'Nestor.Halvorson@gmail.com';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->fax = 'minima';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->firstName = 'Keyon';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->housenumber = 'accusantium';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->id = 438601;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->lastName = 'Nicolas';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->name2 = 'doloribus';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->restoredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-09-11T06:15:44.019Z');
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->state = 'mollitia';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->street = '61965 Harvey Landing';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->tel1 = 'molestiae';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->tel2 = 'velit';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->zip = 'error';
    $request->id = 158969;

    $response = $sdk->customerAddresses->customerAddressesUpdateForm($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerAddressesUpdateJson

Updates a customer address by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerAddressesUpdateJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerAddressesUpdateJsonRequest();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel = new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->addressAddition = 'quis';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum::ONE;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->archivedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-09-08T21:06:19.630Z');
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->city = 'East Orlando';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->company = 'Wiegand and Sons';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->countryCode = 'NI';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->customerId = 820994;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->email = 'Avery_Mueller9@gmail.com';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->fax = 'reiciendis';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->firstName = 'Weston';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->housenumber = 'vero';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->id = 468651;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->lastName = 'Langosh';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->name2 = 'voluptatibus';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->restoredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-25T05:33:11.349Z');
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->state = 'voluptate';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->street = '004 Wilfrid Course';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->tel1 = 'corporis';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->tel2 = 'dolore';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->zip = 'iusto';
    $request->id = 118727;

    $response = $sdk->customerAddresses->customerAddressesUpdateJson($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerAddressesUpdateRaw

Updates a customer address by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerAddressesUpdateRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerAddressesUpdateRawRequest();
    $request->requestBody = 'harum';
    $request->id = 317983;

    $response = $sdk->customerAddresses->customerAddressesUpdateRaw($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
