# transfers

### Available Operations

* [postTransfers](#posttransfers) - Transfer funds

## postTransfers

Starts a transfer request to move funds within your balance platform, or send funds to a [transfer instrument](https://docs.adyen.com/api-explorer/#/legalentity/v1/post/transferInstruments). Adyen sends the outcome of the transfer request through webhooks.

To use this endpoint, you need an additional role for your API credential and transfers must be enabled for the source balance account. Your Adyen contact will set these up for you.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\TransferInfoOld;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\PartyIdentification;
use \OpenAPI\OpenAPI\Models\Shared\InternalPartyIdentification;
use \OpenAPI\OpenAPI\Models\Operations\PostTransfersSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferInfoOld();
    $request->amount = new Amount();
    $request->amount->currency = 'occaecati';
    $request->amount->value = 143353;
    $request->description = 'deleniti';
    $request->destination = new PartyIdentification();
    $request->destination->balanceAccountId = 'hic';
    $request->destination->paymentInstrumentId = 'optio';
    $request->reference = 'totam';
    $request->source = new InternalPartyIdentification();
    $request->source->balanceAccountId = 'beatae';
    $request->source->paymentInstrumentId = 'commodi';

    $requestSecurity = new PostTransfersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->transfers->postTransfers($request, $requestSecurity);

    if ($response->transferOld !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
