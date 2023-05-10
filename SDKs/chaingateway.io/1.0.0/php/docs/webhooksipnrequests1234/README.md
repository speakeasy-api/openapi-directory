# webhooksIPNRequests1234

## Overview

With webhooks, you can get notified about various events in the blockchain. E.g:

Receipt of payment to a specific address  
Outgoing payment from a specific address  
Exchange of sats between two specific addresses  
Execution of a contract  
Change of ownership of a token

For this you have to create a webhook with certain filter criteria. The following values are available as filter criteria:

from: Outgoing address  
to: Incoming address  
contract: Contract that should be monitored  
tokenid: ID of a token that should be monitored.  
type: Token type (\[ETH', 'ERC20', 'ERC721', null)

Parameter "url" defines the url we are calling with a POST Request.. The request body will have your filter criterias and some additional informatiion about your transaction:

``` json
{
  "id": "63a1ae0887ca3625b82b4924",
  "webhook_id": "63a1ad0e87ca3625b82b4923",
  "from": "0x0000000000000000000000000000000000000000",
  "to": "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43",
  "blocknumber": "123",
  "datetime": "22-12-20 13:43:52",
  "tokenid": "0x0000000000000000000000000000000000000000",
  "type": null,
  "txid": "000000000000000000000000000000000000000000000000000",
  "amount": "000000000000000000000000000000000000000000000000000"
}

```

### Available Operations

* [listfailedipns4](#listfailedipns4) - listFailedIPNs
* [listsubscribedaddresses4](#listsubscribedaddresses4) - listSubscribedAddresses
* [resendfailedipn4](#resendfailedipn4) - resendFailedIPN
* [subscribeaddress4](#subscribeaddress4) - subscribeAddress
* [unsubscribeaddress4](#unsubscribeaddress4) - unsubscribeAddress

## listfailedipns4

Returns all subscriptions/IPNs created with an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'doloribus'

    $response = $sdk->webhooksIPNRequests1234->listfailedipns4($request);

    if ($response->listfailedipns4200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listsubscribedaddresses4

Returns all subscriptions/IPNs created with an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
'sapiente'

    $response = $sdk->webhooksIPNRequests1234->listsubscribedaddresses4($request);

    if ($response->listsubscribedaddresses4200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resendfailedipn4

Returns all subscriptions/IPNs created with an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Resendfailedipn4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Resendfailedipn4Request();
    $request->requestBody = [
        'mollitia' => 'dolorem',
    ];
    $request->notificationId = '62640817eb594da78c7bee00';

    $response = $sdk->webhooksIPNRequests1234->resendfailedipn4($request);

    if ($response->resendfailedipn4200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscribeaddress4

Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Subscribeaddress4RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Subscribeaddress4RequestBody();
    $request->from = 'TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt';
    $request->url = 'https://yoururl.com/ipnreceiver.php';

    $response = $sdk->webhooksIPNRequests1234->subscribeaddress4($request);

    if ($response->subscribeaddress4200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unsubscribeaddress4

Deletes an existing subscription/IPN for the given address (and contractaddress).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Unsubscribeaddress4Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Unsubscribeaddress4Request();
    $request->requestBody = 'culpa';
    $request->id = '63ef470294d74b0f290b4b64';

    $response = $sdk->webhooksIPNRequests1234->unsubscribeaddress4($request);

    if ($response->unsubscribeaddress4200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
