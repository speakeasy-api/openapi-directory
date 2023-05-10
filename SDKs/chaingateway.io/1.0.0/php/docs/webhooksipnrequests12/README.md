# webhooksIPNRequests12

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

* [listfailedipns2](#listfailedipns2) - listFailedIPNs
* [listsubscribedaddresses2](#listsubscribedaddresses2) - listSubscribedAddresses
* [resendfailedipn2](#resendfailedipn2) - resendFailedIPN
* [subscribeaddress2](#subscribeaddress2) - subscribeAddress
* [unsubscribeaddress2](#unsubscribeaddress2) - unsubscribeAddress

## listfailedipns2

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
    $response = $sdk->webhooksIPNRequests12->listfailedipns2();

    if ($response->listfailedipns2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listsubscribedaddresses2

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
    $response = $sdk->webhooksIPNRequests12->listsubscribedaddresses2();

    if ($response->listsubscribedaddresses2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resendfailedipn2

Returns all subscriptions/IPNs created with an account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Resendfailedipn2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Resendfailedipn2Request();
    $request->requestBody = [
        'mollitia' => 'laborum',
        'dolores' => 'dolorem',
        'corporis' => 'explicabo',
    ];
    $request->notificationId = '62640817eb594da78c7bee00';

    $response = $sdk->webhooksIPNRequests12->resendfailedipn2($request);

    if ($response->resendfailedipn2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscribeaddress2

Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Subscribeaddress2RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Subscribeaddress2RequestBody();
    $request->contractaddress = '0x514910771af9ca656af840dff83e8264ecf986ca';
    $request->ethereumaddress = '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974';
    $request->url = 'https://yoururl.com/ipnreceiver.php';

    $response = $sdk->webhooksIPNRequests12->subscribeaddress2($request);

    if ($response->subscribeaddress2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unsubscribeaddress2

Deletes an existing subscription/IPN for the given address (and contractaddress).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Unsubscribeaddress2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Unsubscribeaddress2Request();
    $request->webhook = '624d7db34b026365cc22356b';

    $response = $sdk->webhooksIPNRequests12->unsubscribeaddress2($request);

    if ($response->unsubscribeaddress2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
