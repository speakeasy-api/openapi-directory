# customers

### Available Operations

* [customerAddCustomerAddressForm](#customeraddcustomeraddressform) - Adds a new address to a customer
* [customerAddCustomerAddressJson](#customeraddcustomeraddressjson) - Adds a new address to a customer
* [customerAddCustomerAddressRaw](#customeraddcustomeraddressraw) - Adds a new address to a customer
* [customerCreateForm](#customercreateform) - Creates a new customer
* [customerCreateJson](#customercreatejson) - Creates a new customer
* [customerCreateRaw](#customercreateraw) - Creates a new customer
* [customerGetAll](#customergetall) - Get a list of all customers
* [customerGetCustomerAddress](#customergetcustomeraddress) - Queries a single address from a customer
* [customerGetCustomerAddresses](#customergetcustomeraddresses) - Queries a list of addresses from a customer
* [customerGetCustomerOrders](#customergetcustomerorders) - Queries a list of orders from a customer
* [customerGetOne](#customergetone) - Queries a single customer by id
* [customerPatchAddress](#customerpatchaddress) - Updates one or more fields of an address
* [customerUpdateAddressForm](#customerupdateaddressform) - Updates all fields of an address
* [customerUpdateAddressJson](#customerupdateaddressjson) - Updates all fields of an address
* [customerUpdateAddressRaw](#customerupdateaddressraw) - Updates all fields of an address
* [customerUpdateForm](#customerupdateform) - Updates a customer by id
* [customerUpdateJson](#customerupdatejson) - Updates a customer by id
* [customerUpdateRaw](#customerupdateraw) - Updates a customer by id
* [searchSearchForm](#searchsearchform) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [searchSearchJson](#searchsearchjson) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax
* [searchSearchRaw](#searchsearchraw) - Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

## customerAddCustomerAddressForm

Id and  CustomerId will be ignored in model. If Id is set, the addition will be stopped.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerAddCustomerAddressFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerAddCustomerAddressFormRequest();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel = new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->addressAddition = 'accusamus';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum::ONE;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->archivedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-22T18:12:12.288Z');
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->city = 'Lake Kennedi';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->company = 'Streich - Gleason';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->countryCode = 'LB';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->customerId = 523248;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->email = 'Aurelia.Waelchi@hotmail.com';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->fax = 'itaque';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->firstName = 'Drew';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->housenumber = 'enim';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->id = 9356;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->lastName = 'Orn';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->name2 = 'quibusdam';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->restoredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-09T18:45:16.013Z');
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->state = 'distinctio';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->street = '221 Kyler Mission';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->tel1 = 'perferendis';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->tel2 = 'magni';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->zip = 'assumenda';
    $request->id = 369808;

    $response = $sdk->customers->customerAddCustomerAddressForm($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerAddCustomerAddressJson

Id and  CustomerId will be ignored in model. If Id is set, the addition will be stopped.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerAddCustomerAddressJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerAddCustomerAddressJsonRequest();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel = new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->addressAddition = 'alias';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum::ONE;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->archivedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-11T04:17:07.569Z');
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->city = 'Lake Mustafa';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->company = 'Windler and Sons';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->countryCode = 'DZ';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->customerId = 756107;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->email = 'Grace_Medhurst63@yahoo.com';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->fax = 'dolor';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->firstName = 'Sim';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->housenumber = 'a';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->id = 680056;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->lastName = 'King';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->name2 = 'in';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->restoredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2020-01-25T11:09:22.009Z');
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->state = 'rerum';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->street = '27843 Thompson Fields';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->tel1 = 'occaecati';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->tel2 = 'enim';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->zip = 'accusamus';
    $request->id = 965417;

    $response = $sdk->customers->customerAddCustomerAddressJson($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerAddCustomerAddressRaw

Id and  CustomerId will be ignored in model. If Id is set, the addition will be stopped.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerAddCustomerAddressRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerAddCustomerAddressRawRequest();
    $request->requestBody = 'quidem';
    $request->id = 588465;

    $response = $sdk->customers->customerAddCustomerAddressRaw($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerCreateForm

Creates a new customer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCreateCustomerAPIModelInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillbeeInterfacesBillbeeAPIModelCreateCustomerAPIModelInput();
    $request->address = new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel();
    $request->address->addressAddition = 'nam';
    $request->address->addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum::TWO;
    $request->address->archivedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-07T18:13:34.827Z');
    $request->address->city = 'Dayton';
    $request->address->company = 'Huels - Kassulke';
    $request->address->countryCode = 'MV';
    $request->address->customerId = 606393;
    $request->address->email = 'Aileen71@yahoo.com';
    $request->address->fax = 'id';
    $request->address->firstName = 'Edward';
    $request->address->housenumber = 'labore';
    $request->address->id = 383462;
    $request->address->lastName = 'Mosciski';
    $request->address->name2 = 'nobis';
    $request->address->restoredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-14T08:45:31.579Z');
    $request->address->state = 'aspernatur';
    $request->address->street = '20535 Marvin Burg';
    $request->address->tel1 = 'mollitia';
    $request->address->tel2 = 'reiciendis';
    $request->address->zip = 'mollitia';
    $request->archivedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-27T12:46:27.682Z');
    $request->defaultCommercialMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->defaultCommercialMailAddress->id = 221262;
    $request->defaultCommercialMailAddress->subType = 'necessitatibus';
    $request->defaultCommercialMailAddress->typeId = 141264;
    $request->defaultCommercialMailAddress->value = 'nemo';
    $request->defaultFax = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->defaultFax->id = 97260;
    $request->defaultFax->subType = 'iure';
    $request->defaultFax->typeId = 984043;
    $request->defaultFax->value = 'debitis';
    $request->defaultMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->defaultMailAddress->id = 260341;
    $request->defaultMailAddress->subType = 'maxime';
    $request->defaultMailAddress->typeId = 537023;
    $request->defaultMailAddress->value = 'facilis';
    $request->defaultPhone1 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->defaultPhone1->id = 447926;
    $request->defaultPhone1->subType = 'architecto';
    $request->defaultPhone1->typeId = 99569;
    $request->defaultPhone1->value = 'repudiandae';
    $request->defaultPhone2 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->defaultPhone2->id = 352312;
    $request->defaultPhone2->subType = 'expedita';
    $request->defaultPhone2->typeId = 469249;
    $request->defaultPhone2->value = 'repellat';
    $request->defaultStatusUpdatesMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->defaultStatusUpdatesMailAddress->id = 841140;
    $request->defaultStatusUpdatesMailAddress->subType = 'sed';
    $request->defaultStatusUpdatesMailAddress->typeId = 904648;
    $request->defaultStatusUpdatesMailAddress->value = 'pariatur';
    $request->email = 'Carroll.Lang@gmail.com';
    $request->id = 123820;
    $request->languageId = 779051;
    $request->metaData = [
        new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput(),
        new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput(),
        new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput(),
        new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput(),
    ];
    $request->name = 'Simon Jenkins';
    $request->number = 407183;
    $request->priceGroupId = 33222;
    $request->restoredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-01-07T08:38:36.147Z');
    $request->tel1 = 'quidem';
    $request->tel2 = 'ipsam';
    $request->type = 453543;
    $request->vatId = 'autem';

    $response = $sdk->customers->customerCreateForm($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerCreateJson

Creates a new customer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCreateCustomerAPIModelInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillbeeInterfacesBillbeeAPIModelCreateCustomerAPIModelInput();
    $request->address = new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel();
    $request->address->addressAddition = 'nam';
    $request->address->addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum::ONE;
    $request->address->archivedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-11-26T18:45:44.366Z');
    $request->address->city = 'Altoona';
    $request->address->company = 'Feeney, Anderson and Runolfsdottir';
    $request->address->countryCode = 'GS';
    $request->address->customerId = 944124;
    $request->address->email = 'Nelson_DAmore@hotmail.com';
    $request->address->fax = 'dignissimos';
    $request->address->firstName = 'Amos';
    $request->address->housenumber = 'quis';
    $request->address->id = 199996;
    $request->address->lastName = 'Daugherty';
    $request->address->name2 = 'perferendis';
    $request->address->restoredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-17T07:12:29.048Z');
    $request->address->state = 'quam';
    $request->address->street = '83996 Metz Burg';
    $request->address->tel1 = 'porro';
    $request->address->tel2 = 'consequuntur';
    $request->address->zip = 'blanditiis';
    $request->archivedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-11-25T05:30:58.706Z');
    $request->defaultCommercialMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->defaultCommercialMailAddress->id = 577229;
    $request->defaultCommercialMailAddress->subType = 'rerum';
    $request->defaultCommercialMailAddress->typeId = 237893;
    $request->defaultCommercialMailAddress->value = 'asperiores';
    $request->defaultFax = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->defaultFax->id = 934214;
    $request->defaultFax->subType = 'modi';
    $request->defaultFax->typeId = 613966;
    $request->defaultFax->value = 'dolorum';
    $request->defaultMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->defaultMailAddress->id = 535633;
    $request->defaultMailAddress->subType = 'pariatur';
    $request->defaultMailAddress->typeId = 589910;
    $request->defaultMailAddress->value = 'nobis';
    $request->defaultPhone1 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->defaultPhone1->id = 730122;
    $request->defaultPhone1->subType = 'delectus';
    $request->defaultPhone1->typeId = 311945;
    $request->defaultPhone1->value = 'quos';
    $request->defaultPhone2 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->defaultPhone2->id = 398221;
    $request->defaultPhone2->subType = 'dolorem';
    $request->defaultPhone2->typeId = 209843;
    $request->defaultPhone2->value = 'dolor';
    $request->defaultStatusUpdatesMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->defaultStatusUpdatesMailAddress->id = 186193;
    $request->defaultStatusUpdatesMailAddress->subType = 'ipsum';
    $request->defaultStatusUpdatesMailAddress->typeId = 944373;
    $request->defaultStatusUpdatesMailAddress->value = 'excepturi';
    $request->email = 'Izabella.Kuhn68@hotmail.com';
    $request->id = 254356;
    $request->languageId = 85295;
    $request->metaData = [
        new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput(),
    ];
    $request->name = 'Vera Kuhlman';
    $request->number = 696344;
    $request->priceGroupId = 976405;
    $request->restoredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-05-20T13:18:59.478Z');
    $request->tel1 = 'eos';
    $request->tel2 = 'atque';
    $request->type = 24678;
    $request->vatId = 'fugiat';

    $response = $sdk->customers->customerCreateJson($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerCreateRaw

Creates a new customer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'ab'

    $response = $sdk->customers->customerCreateRaw($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerGetAll

Get a list of all customers

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerGetAllRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerGetAllRequest();
    $request->page = 743835;
    $request->pageSize = 679393;

    $response = $sdk->customers->customerGetAll($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerGetCustomerAddress

Queries a single address from a customer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerGetCustomerAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerGetCustomerAddressRequest();
    $request->id = 478596;

    $response = $sdk->customers->customerGetCustomerAddress($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerGetCustomerAddresses

Queries a list of addresses from a customer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerGetCustomerAddressesRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerGetCustomerAddressesRequest();
    $request->id = 453697;
    $request->page = 677082;
    $request->pageSize = 536579;

    $response = $sdk->customers->customerGetCustomerAddresses($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerGetCustomerOrders

Queries a list of orders from a customer

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerGetCustomerOrdersRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerGetCustomerOrdersRequest();
    $request->id = 607045;
    $request->page = 896672;
    $request->pageSize = 714697;

    $response = $sdk->customers->customerGetCustomerOrders($request);

    if ($response->rechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListRechnungsdruckWebAppControllersApiOrder !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerGetOne

Queries a single customer by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerGetOneRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerGetOneRequest();
    $request->id = 990339;

    $response = $sdk->customers->customerGetOne($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerPatchAddress

Id and CustomerId cannot be changed

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerPatchAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerPatchAddressRequest();
    $request->requestBody = [
        'ipsum' => 'voluptate',
        'id' => 'saepe',
    ];
    $request->id = 263322;

    $response = $sdk->customers->customerPatchAddress($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerUpdateAddressForm

Id and CustomerId cannot be changed. Fields you do not send will become empty.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerUpdateAddressFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerUpdateAddressFormRequest();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel = new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->addressAddition = 'aspernatur';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum::ONE;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->archivedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-03-30T04:36:10.591Z');
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->city = 'Fort Lauderdale';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->company = 'Hoppe, Oberbrunner and McKenzie';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->countryCode = 'GG';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->customerId = 831049;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->email = 'Lois.Abbott27@yahoo.com';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->fax = 'vel';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->firstName = 'Pierre';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->housenumber = 'officiis';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->id = 185636;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->lastName = 'Parisian';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->name2 = 'a';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->restoredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-25T01:36:09.517Z');
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->state = 'iusto';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->street = '79278 Elza Expressway';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->tel1 = 'sapiente';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->tel2 = 'totam';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->zip = 'nihil';
    $request->id = 25662;

    $response = $sdk->customers->customerUpdateAddressForm($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerUpdateAddressJson

Id and CustomerId cannot be changed. Fields you do not send will become empty.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerUpdateAddressJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerUpdateAddressJsonRequest();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel = new BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->addressAddition = 'expedita';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->addressType = BillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModelAddressTypeEnum::ONE;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->archivedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-29T23:45:18.595Z');
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->city = 'Hintzfurt';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->company = 'Emard - Gottlieb';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->countryCode = 'CM';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->customerId = 586784;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->email = 'Salvador67@hotmail.com';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->fax = 'totam';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->firstName = 'Doyle';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->housenumber = 'aspernatur';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->id = 174909;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->lastName = 'Raynor';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->name2 = 'facilis';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->restoredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-07-15T22:48:14.867Z');
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->state = 'molestias';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->street = '121 Jefferey Court';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->tel1 = 'ullam';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->tel2 = 'nam';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel->zip = 'hic';
    $request->id = 30452;

    $response = $sdk->customers->customerUpdateAddressJson($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerUpdateAddressRaw

Id and CustomerId cannot be changed. Fields you do not send will become empty.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerUpdateAddressRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerUpdateAddressRawRequest();
    $request->requestBody = 'cumque';
    $request->id = 746994;

    $response = $sdk->customers->customerUpdateAddressRaw($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAddressAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerUpdateForm

Updates a customer by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerUpdateFormRequest;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerUpdateFormRequest();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput = new BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->archivedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-25T09:42:54.177Z');
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultCommercialMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultCommercialMailAddress->id = 903720;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultCommercialMailAddress->subType = 'ipsum';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultCommercialMailAddress->typeId = 83422;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultCommercialMailAddress->value = 'nobis';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultFax = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultFax->id = 552193;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultFax->subType = 'tempore';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultFax->typeId = 584476;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultFax->value = 'aperiam';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultMailAddress->id = 961937;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultMailAddress->subType = 'dolorem';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultMailAddress->typeId = 292147;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultMailAddress->value = 'labore';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone1 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone1->id = 240829;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone1->subType = 'dolorum';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone1->typeId = 100294;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone1->value = 'quae';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone2 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone2->id = 16429;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone2->subType = 'quas';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone2->typeId = 929530;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone2->value = 'consequatur';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultStatusUpdatesMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultStatusUpdatesMailAddress->id = 669917;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultStatusUpdatesMailAddress->subType = 'repellendus';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultStatusUpdatesMailAddress->typeId = 785153;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultStatusUpdatesMailAddress->value = 'doloribus';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->email = 'Mckayla6@gmail.com';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->id = 512393;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->languageId = 485628;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->metaData = [
        new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput(),
        new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput(),
        new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput(),
    ];
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->name = 'Wilson Terry';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->number = 218403;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->priceGroupId = 961571;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->restoredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-10-08T10:17:36.770Z');
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->tel1 = 'vero';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->tel2 = 'tenetur';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->type = 492268;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->vatId = 'hic';
    $request->id = 715561;

    $response = $sdk->customers->customerUpdateForm($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerUpdateJson

Updates a customer by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerUpdateJsonRequest;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput;
use \OpenAPI\OpenAPI\Models\Shared\BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerUpdateJsonRequest();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput = new BillbeeInterfacesBillbeeAPIModelCustomerAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->archivedAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-07-17T15:43:35.984Z');
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultCommercialMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultCommercialMailAddress->id = 630448;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultCommercialMailAddress->subType = 'facilis';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultCommercialMailAddress->typeId = 874288;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultCommercialMailAddress->value = 'ducimus';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultFax = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultFax->id = 293020;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultFax->subType = 'quibusdam';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultFax->typeId = 848944;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultFax->value = 'sequi';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultMailAddress->id = 617877;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultMailAddress->subType = 'impedit';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultMailAddress->typeId = 13236;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultMailAddress->value = 'voluptatibus';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone1 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone1->id = 347233;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone1->subType = 'nulla';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone1->typeId = 148141;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone1->value = 'porro';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone2 = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone2->id = 981830;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone2->subType = 'doloribus';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone2->typeId = 478370;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultPhone2->value = 'eligendi';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultStatusUpdatesMailAddress = new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput();
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultStatusUpdatesMailAddress->id = 497391;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultStatusUpdatesMailAddress->subType = 'alias';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultStatusUpdatesMailAddress->typeId = 639473;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->defaultStatusUpdatesMailAddress->value = 'tempora';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->email = 'Hallie_Collins@yahoo.com';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->id = 297842;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->languageId = 189848;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->metaData = [
        new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput(),
        new BillbeeInterfacesBillbeeAPIModelsCustomerMetaDataAPIModelInput(),
    ];
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->name = 'Willie Fahey III';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->number = 862192;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->priceGroupId = 569211;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->restoredAt = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2021-12-20T18:02:50.249Z');
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->tel1 = 'sapiente';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->tel2 = 'quisquam';
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->type = 906556;
    $request->billbeeInterfacesBillbeeAPIModelCustomerAPIModelInput->vatId = 'ea';
    $request->id = 774048;

    $response = $sdk->customers->customerUpdateJson($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customerUpdateRaw

Updates a customer by id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomerUpdateRawRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomerUpdateRawRequest();
    $request->requestBody = 'corporis';
    $request->id = 333145;

    $response = $sdk->customers->customerUpdateRaw($request);

    if ($response->rechnungsdruckWebAppControllersAPIAPIResultBillbeeInterfacesBillbeeAPIModelCustomerAPIModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchSearchForm

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiSearchControllerSearchModel;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RechnungsdruckWebAppControllersApiSearchControllerSearchModel();
    $request->searchMode = RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum::ONE;
    $request->term = 'inventore';
    $request->type = [
        'ea',
        'quo',
    ];

    $response = $sdk->customers->searchSearchForm($request);

    if ($response->rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchSearchJson

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiSearchControllerSearchModel;
use \OpenAPI\OpenAPI\Models\Shared\RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RechnungsdruckWebAppControllersApiSearchControllerSearchModel();
    $request->searchMode = RechnungsdruckWebAppControllersApiSearchControllerSearchModelSearchModeEnum::ONE;
    $request->term = 'recusandae';
    $request->type = [
        'minima',
    ];

    $response = $sdk->customers->searchSearchJson($request);

    if ($response->rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## searchSearchRaw

Search for products, customers and orders.
Type can be "order", "product" and / or "customer"
Term can contains lucene query syntax

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'eaque'

    $response = $sdk->customers->searchSearchRaw($request);

    if ($response->rechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
