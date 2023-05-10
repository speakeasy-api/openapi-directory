# openapi/openapi

<!-- Start SDK Installation -->
## SDK Installation

### Composer

To install the SDK first add the below to your `composer.json` file:

```json
{
    "repositories": [
        {
            "type": "github",
            "url": "<UNSET>.git"
        }
    ],
    "require": {
        "openapi/openapi": "*"
    }
}
```

Then run the following command:

```bash
composer update
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteAddressRequest;
use \OpenAPI\OpenAPI\Models\Shared\DeleteAddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteAddressRequest();
    $request->authorization = 'q9PdaWuD4j6DK6vsUgehhL8pgarSrS9m';
    $request->deleteAddressRequest = new DeleteAddressRequest();
    $request->deleteAddressRequest->ethereumaddress = 'corrupti';
    $request->deleteAddressRequest->password = 'provident';

    $response = $sdk->addressRequests->deleteAddress($request);

    if ($response->deleteAddress !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### [addressRequests](docs/addressrequests/README.md)

* [deleteAddress](docs/addressrequests/README.md#deleteaddress) - deleteAddress
* [exportAddress](docs/addressrequests/README.md#exportaddress) - exportAddress
* [importAddress](docs/addressrequests/README.md#importaddress) - importAddress
* [listAddresses](docs/addressrequests/README.md#listaddresses) - listAddresses
* [newAddress](docs/addressrequests/README.md#newaddress) - newAddress

### [infoRequests](docs/inforequests/README.md)

* [getBlock](docs/inforequests/README.md#getblock) - getBlock
* [getEthereumBalance](docs/inforequests/README.md#getethereumbalance) - getEthereumBalance
* [getExchangeRate](docs/inforequests/README.md#getexchangerate) - getExchangeRate
* [getGasPrice](docs/inforequests/README.md#getgasprice) - getGasPrice
* [getLastBlockNumber](docs/inforequests/README.md#getlastblocknumber) - getLastBlockNumber
* [getToken](docs/inforequests/README.md#gettoken) - getToken
* [getTokenBalance](docs/inforequests/README.md#gettokenbalance) - getTokenBalance
* [getTransactions](docs/inforequests/README.md#gettransactions) - getTransactions

### [subscriptionIPNRequests](docs/subscriptionipnrequests/README.md)

* [listFailedIPNs](docs/subscriptionipnrequests/README.md#listfailedipns) - listFailedIPNs
* [listSubscribedAddresses](docs/subscriptionipnrequests/README.md#listsubscribedaddresses) - listSubscribedAddresses
* [resendFailedIPN](docs/subscriptionipnrequests/README.md#resendfailedipn) - resendFailedIPN
* [subscribeAddress](docs/subscriptionipnrequests/README.md#subscribeaddress) - subscribeAddress
* [unsubscribeAddress](docs/subscriptionipnrequests/README.md#unsubscribeaddress) - unsubscribeAddress

### [transactionRequests](docs/transactionrequests/README.md)

* [clearAddress](docs/transactionrequests/README.md#clearaddress) - clearAddress
* [sendEthereum](docs/transactionrequests/README.md#sendethereum) - sendEthereum
* [sendToken](docs/transactionrequests/README.md#sendtoken) - sendToken
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
