# webhooksIPNRequests123

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

* [listfailedipns3](#listfailedipns3) - listFailedIPNs
* [listsubscribedaddresses3](#listsubscribedaddresses3) - listSubscribedAddresses
* [resendfailedipn3](#resendfailedipn3) - resendFailedIPN
* [subscribeaddress3](#subscribeaddress3) - subscribeAddress
* [unsubscribeaddress3](#unsubscribeaddress3) - unsubscribeAddress

## listfailedipns3

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
'nobis'

    $response = $sdk->webhooksIPNRequests123->listfailedipns3($request);

    if ($response->listfailedipns3200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## listsubscribedaddresses3

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
'enim'

    $response = $sdk->webhooksIPNRequests123->listsubscribedaddresses3($request);

    if ($response->listsubscribedaddresses3200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## resendfailedipn3

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
    $request = [
        'nemo' => 'minima',
        'excepturi' => 'accusantium',
        'iure' => 'culpa',
    ]

    $response = $sdk->webhooksIPNRequests123->resendfailedipn3($request);

    if ($response->resendfailedipn3200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## subscribeaddress3

Creates a new subscription/IPN for the given address (and contractaddress). You will receive a notification to the given url every time a deposit is received. Unsubscribe the address before sending tokens/ETH from it or you won't get reliable notifications anymore.


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Subscribeaddress3RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Subscribeaddress3RequestBody();
    $request->from = 'TVqA9huwk2NBUxbanUNx4NVPKXjzWZqkJt';
    $request->url = 'https://yoururl.com/ipnreceiver.php';

    $response = $sdk->webhooksIPNRequests123->subscribeaddress3($request);

    if ($response->subscribeaddress3200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unsubscribeaddress3

Deletes an existing subscription/IPN for the given address (and contractaddress).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\Unsubscribeaddress3Request;
use \OpenAPI\OpenAPI\Models\Operations\Unsubscribeaddress3RequestBody;

$sdk = SDK::builder()
    ->build();

try {
    $request = new Unsubscribeaddress3Request();
    $request->requestBody = new Unsubscribeaddress3RequestBody();
    $request->requestBody->id = '624d80774b026365cc22356e';
    $request->webhookid = '624d7db34b026365cc22356b';

    $response = $sdk->webhooksIPNRequests123->unsubscribeaddress3($request);

    if ($response->unsubscribeaddress3200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
