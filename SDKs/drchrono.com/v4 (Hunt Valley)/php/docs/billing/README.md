# billing

## Overview

Create and manage billing resources

### Available Operations

* [billingProfilesList](#billingprofileslist) - Retrieve or search billing profiles
* [billingProfilesRead](#billingprofilesread) - Retrieve an existing billing profiles
* [commLogsCreate](#commlogscreate) - Create communication (phone call) logs
* [commLogsList](#commlogslist) - Retrieve or search communicatioin (phone call) logs
* [commLogsPartialUpdate](#commlogspartialupdate) - Update an existing communication (phone call) logs
* [commLogsRead](#commlogsread) - Retrieve an existing communication (phone call) logs
* [commLogsUpdate](#commlogsupdate) - Update an existing communication (phone call) logs
* [customInsurancePlanNamesList](#custominsuranceplannameslist) - Retrieve or search custom insurance plan names
* [customInsurancePlanNamesRead](#custominsuranceplannamesread) - Retrieve an existing custom insurance plan name
* [eligibilityChecksList](#eligibilitycheckslist) - Retrieve or search past eligibility checks for patient
* [eligibilityChecksRead](#eligibilitychecksread) - Retrieve an existing past eligibility check
* [lineItemsCreate](#lineitemscreate) - Create billing line item for appointments
* [lineItemsDelete](#lineitemsdelete)
* [lineItemsList](#lineitemslist) - Retrieve or search billing line items
* [lineItemsPartialUpdate](#lineitemspartialupdate)
* [lineItemsRead](#lineitemsread) - Retrieve an existing billing line item
* [lineItemsUpdate](#lineitemsupdate)
* [patientPaymentLogList](#patientpaymentloglist) - Retrieve or search patient payment logs
* [patientPaymentLogRead](#patientpaymentlogread) - Retrieve an existing patient payment log
* [patientPaymentsCreate](#patientpaymentscreate) - Create patient payment
* [patientPaymentsList](#patientpaymentslist) - Retrieve or search patient payments
* [patientPaymentsRead](#patientpaymentsread) - Retrieve an existing patient payment
* [proceduresList](#procedureslist)
* [proceduresRead](#proceduresread)
* [transactionsList](#transactionslist) - Retrieve or search insurance transactions associated with billing line items
* [transactionsRead](#transactionsread) - Retrieve an existing insurance transaction

## billingProfilesList

Retrieve or search billing profiles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BillingProfilesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\BillingProfilesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillingProfilesListRequest();
    $request->cursor = 'dolorem';
    $request->doctor = 635059;
    $request->pageSize = 161309;

    $requestSecurity = new BillingProfilesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->billingProfilesList($request, $requestSecurity);

    if ($response->billingProfilesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## billingProfilesRead

Retrieve an existing billing profiles

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\BillingProfilesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\BillingProfilesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BillingProfilesReadRequest();
    $request->doctor = 995300;
    $request->id = 'a9467739-251a-4a52-83f5-ad019da1ffe7';

    $requestSecurity = new BillingProfilesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->billingProfilesRead($request, $requestSecurity);

    if ($response->billingProfile !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## commLogsCreate

Create communication (phone call) logs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CommLogsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CommLogsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CommLogsCreateRequest();
    $request->doctor = 509624;
    $request->patient = 976762;
    $request->since = 'ipsa';

    $requestSecurity = new CommLogsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->commLogsCreate($request, $requestSecurity);

    if ($response->phoneCallLog !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## commLogsList

Retrieve or search communicatioin (phone call) logs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CommLogsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CommLogsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CommLogsListRequest();
    $request->cursor = 'omnis';
    $request->doctor = 451159;
    $request->pageSize = 739264;
    $request->patient = 19987;
    $request->since = 'doloremque';

    $requestSecurity = new CommLogsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->commLogsList($request, $requestSecurity);

    if ($response->commLogsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## commLogsPartialUpdate

Update an existing communication (phone call) logs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CommLogsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CommLogsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CommLogsPartialUpdateRequest();
    $request->doctor = 441711;
    $request->id = '4f15471b-5e6e-413b-99d4-88e1e91e450a';
    $request->patient = 842342;
    $request->since = 'explicabo';

    $requestSecurity = new CommLogsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->commLogsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## commLogsRead

Retrieve an existing communication (phone call) logs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CommLogsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\CommLogsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CommLogsReadRequest();
    $request->doctor = 647174;
    $request->id = 'bd442698-02d5-402a-94bb-4f63c969e9a3';
    $request->patient = 891555;
    $request->since = 'a';

    $requestSecurity = new CommLogsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->commLogsRead($request, $requestSecurity);

    if ($response->phoneCallLog !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## commLogsUpdate

Update an existing communication (phone call) logs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CommLogsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\CommLogsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CommLogsUpdateRequest();
    $request->doctor = 680056;
    $request->id = '77dfb14c-d66a-4e39-9efb-9ba88f3a6699';
    $request->patient = 474867;
    $request->since = 'perferendis';

    $requestSecurity = new CommLogsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->commLogsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customInsurancePlanNamesList

Retrieve or search custom insurance plan names

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomInsurancePlanNamesListRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomInsurancePlanNamesListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomInsurancePlanNamesListRequest();
    $request->cursor = 'nihil';
    $request->doctor = 301575;
    $request->name = 'Alfonso Green';
    $request->pageSize = 618016;
    $request->since = 'nobis';
    $request->user = 428769;

    $requestSecurity = new CustomInsurancePlanNamesListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->customInsurancePlanNamesList($request, $requestSecurity);

    if ($response->customInsurancePlanNamesList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## customInsurancePlanNamesRead

Retrieve an existing custom insurance plan name

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\CustomInsurancePlanNamesReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\CustomInsurancePlanNamesReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CustomInsurancePlanNamesReadRequest();
    $request->doctor = 878453;
    $request->id = '21419598-90af-4a56-be25-16fe4c8b711e';
    $request->name = 'Lola Koss';
    $request->since = 'sed';
    $request->user = 904648;

    $requestSecurity = new CustomInsurancePlanNamesReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->customInsurancePlanNamesRead($request, $requestSecurity);

    if ($response->customInsurancePlanName !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eligibilityChecksList

Retrieve or search past eligibility checks for patient

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EligibilityChecksListRequest;
use \OpenAPI\OpenAPI\Models\Operations\EligibilityChecksListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EligibilityChecksListRequest();
    $request->appointment = 868126;
    $request->appointmentDate = 'accusantium';
    $request->appointmentDateRange = 'consequuntur';
    $request->cursor = 'praesentium';
    $request->doctor = 615560;
    $request->pageSize = 166847;
    $request->patient = 123820;
    $request->queryDate = 'quo';
    $request->queryDateRange = 'illum';

    $requestSecurity = new EligibilityChecksListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->eligibilityChecksList($request, $requestSecurity);

    if ($response->eligibilityChecksList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## eligibilityChecksRead

Retrieve an existing past eligibility check

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\EligibilityChecksReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\EligibilityChecksReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EligibilityChecksReadRequest();
    $request->appointment = 864934;
    $request->appointmentDate = 'maxime';
    $request->appointmentDateRange = 'ea';
    $request->doctor = 569101;
    $request->id = '2601fb57-6b0d-45f0-930c-5fbb25870532';
    $request->patient = 18521;
    $request->queryDate = 'dolores';
    $request->queryDateRange = 'minus';

    $requestSecurity = new EligibilityChecksReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->eligibilityChecksRead($request, $requestSecurity);

    if ($response->coverage !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineItemsCreate

Create billing line item for appointments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineItemsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\LineItemsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineItemsCreateRequest();
    $request->appointment = 463451;
    $request->doctor = 223924;
    $request->office = 874573;
    $request->patient = 345352;
    $request->postedDate = 'hic';
    $request->serviceDate = 'recusandae';
    $request->since = 'omnis';

    $requestSecurity = new LineItemsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->lineItemsCreate($request, $requestSecurity);

    if ($response->billingLineItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineItemsDelete

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineItemsDeleteRequest;
use \OpenAPI\OpenAPI\Models\Operations\LineItemsDeleteSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineItemsDeleteRequest();
    $request->appointment = 704415;
    $request->doctor = 596656;
    $request->id = '0c28909b-3fe4-49a8-99cb-f48633323f9b';
    $request->office = 452109;
    $request->patient = 490459;
    $request->postedDate = 'reiciendis';
    $request->serviceDate = 'amet';
    $request->since = 'dolorum';

    $requestSecurity = new LineItemsDeleteSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->lineItemsDelete($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineItemsList

Retrieve or search billing line items

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineItemsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\LineItemsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineItemsListRequest();
    $request->appointment = 254356;
    $request->cursor = 'veritatis';
    $request->doctor = 58029;
    $request->office = 56418;
    $request->pageSize = 434417;
    $request->patient = 487838;
    $request->postedDate = 'quaerat';
    $request->serviceDate = 'accusamus';
    $request->since = 'quidem';

    $requestSecurity = new LineItemsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->lineItemsList($request, $requestSecurity);

    if ($response->lineItemsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineItemsPartialUpdate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineItemsPartialUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\LineItemsPartialUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineItemsPartialUpdateRequest();
    $request->appointment = 976405;
    $request->doctor = 377752;
    $request->id = '9280d1ba-77a8-49eb-b737-ae4203ce5e6a';
    $request->office = 588317;
    $request->patient = 324683;
    $request->postedDate = 'repellendus';
    $request->serviceDate = 'totam';
    $request->since = 'similique';

    $requestSecurity = new LineItemsPartialUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->lineItemsPartialUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineItemsRead

Retrieve an existing billing line item

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineItemsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\LineItemsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineItemsReadRequest();
    $request->appointment = 55;
    $request->doctor = 872651;
    $request->id = '446ce2af-7a73-4cf3-be45-3f870b326b5a';
    $request->office = 463575;
    $request->patient = 214880;
    $request->postedDate = 'incidunt';
    $request->serviceDate = 'qui';
    $request->since = 'cupiditate';

    $requestSecurity = new LineItemsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->lineItemsRead($request, $requestSecurity);

    if ($response->billingLineItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## lineItemsUpdate

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\LineItemsUpdateRequest;
use \OpenAPI\OpenAPI\Models\Operations\LineItemsUpdateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new LineItemsUpdateRequest();
    $request->appointment = 807581;
    $request->doctor = 863856;
    $request->id = 'b1a8422b-b679-4d23-a271-5bf0cbb1e31b';
    $request->office = 552193;
    $request->patient = 731694;
    $request->postedDate = 'cupiditate';
    $request->serviceDate = 'aperiam';
    $request->since = 'delectus';

    $requestSecurity = new LineItemsUpdateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->lineItemsUpdate($request, $requestSecurity);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientPaymentLogList

Retrieve or search patient payment logs

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientPaymentLogListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientPaymentLogListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientPaymentLogListRequest();
    $request->cursor = 'dolorem';
    $request->doctor = 292147;
    $request->office = 286915;
    $request->pageSize = 240829;
    $request->since = 'dolorum';

    $requestSecurity = new PatientPaymentLogListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->patientPaymentLogList($request, $requestSecurity);

    if ($response->patientPaymentLogList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientPaymentLogRead

Retrieve an existing patient payment log

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientPaymentLogReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientPaymentLogReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientPaymentLogReadRequest();
    $request->doctor = 100294;
    $request->id = '108e0adc-f4b9-4218-b9fc-e953f73ef7fb';
    $request->office = 799203;
    $request->since = 'odio';

    $requestSecurity = new PatientPaymentLogReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->patientPaymentLogRead($request, $requestSecurity);

    if ($response->cashPaymentLog !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientPaymentsCreate

Create patient payment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientPaymentsCreateRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientPaymentsCreateSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientPaymentsCreateRequest();
    $request->doctor = 630448;
    $request->patient = 708548;
    $request->since = 'vero';

    $requestSecurity = new PatientPaymentsCreateSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->patientPaymentsCreate($request, $requestSecurity);

    if ($response->cashPayment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientPaymentsList

Retrieve or search patient payments

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientPaymentsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientPaymentsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientPaymentsListRequest();
    $request->cursor = 'ducimus';
    $request->doctor = 293020;
    $request->pageSize = 844550;
    $request->patient = 848944;
    $request->since = 'sequi';

    $requestSecurity = new PatientPaymentsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->patientPaymentsList($request, $requestSecurity);

    if ($response->patientPaymentsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## patientPaymentsRead

Retrieve an existing patient payment

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PatientPaymentsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\PatientPaymentsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PatientPaymentsReadRequest();
    $request->doctor = 617877;
    $request->id = 'c0f5d2cf-f7c7-40a4-9626-d436813f16d9';
    $request->patient = 972920;
    $request->since = 'nostrum';

    $requestSecurity = new PatientPaymentsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->patientPaymentsRead($request, $requestSecurity);

    if ($response->cashPayment !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## proceduresList

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProceduresListRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProceduresListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProceduresListRequest();
    $request->appointment = 960835;
    $request->cursor = 'quisquam';
    $request->doctor = 906556;
    $request->muDate = 'ea';
    $request->muDateRange = 'impedit';
    $request->pageSize = 359271;
    $request->patient = 333145;
    $request->serviceDate = 'aliquid';

    $requestSecurity = new ProceduresListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->proceduresList($request, $requestSecurity);

    if ($response->proceduresList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## proceduresRead

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\ProceduresReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\ProceduresReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new ProceduresReadRequest();
    $request->appointment = 81101;
    $request->doctor = 301831;
    $request->id = '6c3e250f-b008-4c42-a141-aac366c8dd6b';
    $request->muDate = 'quasi';
    $request->muDateRange = 'tempora';
    $request->patient = 256139;
    $request->serviceDate = 'explicabo';

    $requestSecurity = new ProceduresReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->proceduresRead($request, $requestSecurity);

    if ($response->billingLineItem !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transactionsList

Retrieve or search insurance transactions associated with billing line items

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TransactionsListRequest;
use \OpenAPI\OpenAPI\Models\Operations\TransactionsListSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransactionsListRequest();
    $request->appointment = 591935;
    $request->cursor = 'ipsa';
    $request->doctor = 476477;
    $request->lineItem = 301598;
    $request->pageSize = 487935;
    $request->postedDate = 'eius';
    $request->since = 'esse';

    $requestSecurity = new TransactionsListSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->transactionsList($request, $requestSecurity);

    if ($response->transactionsList200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## transactionsRead

Retrieve an existing insurance transaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\TransactionsReadRequest;
use \OpenAPI\OpenAPI\Models\Operations\TransactionsReadSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransactionsReadRequest();
    $request->appointment = 456141;
    $request->doctor = 524593;
    $request->id = 'a7bd466d-28c1-40ab-bcdc-a4251904e523';
    $request->lineItem = 779192;
    $request->postedDate = 'esse';
    $request->since = 'recusandae';

    $requestSecurity = new TransactionsReadSecurity();
    $requestSecurity->drchronoOauth2 = 'Bearer YOUR_ACCESS_TOKEN_HERE';

    $response = $sdk->billing->transactionsRead($request, $requestSecurity);

    if ($response->lineItemTransaction !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
