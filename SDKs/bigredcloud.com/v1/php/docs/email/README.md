# email

### Available Operations

* [emailSendEmailStatement](#emailsendemailstatement) - Sends a Statement email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
* [emailSendQuote](#emailsendquote) - Sends a Quote email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.
* [emailSendSalesInvoice](#emailsendsalesinvoice) - Sends a Sales Invoice email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Sales Invoice Customer's address.

## emailSendEmailStatement

Sends a Statement email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\EmailStatementDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EmailStatementDto();
    $request->bccAddresses = [
        'ipsam',
        'voluptate',
        'autem',
    ];
    $request->customerId = 722056;
    $request->fromPeriod = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-02-18T18:29:26.833Z');
    $request->messageBody = 'nemo';
    $request->minimumBalance = 9755.22;
    $request->toAddress = 'perferendis';
    $request->toPeriod = DateTime::createFromFormat('Y-m-d\TH:i:sP', '2022-04-23T08:05:27.776Z');

    $response = $sdk->email->emailSendEmailStatement($request);

    if ($response->emailSendEmailStatement200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## emailSendQuote

Sends a Quote email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Statement Customer's address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\EmailQuoteDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new EmailQuoteDto();
    $request->bccAddresses = [
        'cumque',
    ];
    $request->messageBody = 'corporis';
    $request->quoteId = 944124;
    $request->toAddress = 'libero';

    $response = $sdk->email->emailSendQuote($request);

    if ($response->emailSendQuote200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## emailSendSalesInvoice

Sends a Sales Invoice email.
If "toAddress" is not empty then email will be sent to this address. Otherwise email will be sent to Sales Invoice Customer's address.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SalesInvoiceEmailInfoDto;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SalesInvoiceEmailInfoDto();
    $request->bccAddresses = [
        'dolores',
        'quis',
        'totam',
    ];
    $request->messageBody = 'dignissimos';
    $request->salesInvoiceId = 54338;
    $request->toAddress = 'quis';

    $response = $sdk->email->emailSendSalesInvoice($request);

    if ($response->emailSendSalesInvoice200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
