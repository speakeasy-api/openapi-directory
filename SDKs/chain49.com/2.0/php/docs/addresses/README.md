# addresses

## Overview

 

### Available Operations

* [getAddressV2](#getaddressv2) - Get address V2
* [getBalanceHistoryV2](#getbalancehistoryv2) - Get Balance History V2
* [getUtxov2](#getutxov2) - Get UTXO V2
* [getXpubV2](#getxpubv2) - Get xpub V2

## getAddressV2

Returns balances and transactions of an address. The returned transactions are sorted by block height, newest blocks first.

The **details** query parameter can specify the level of details returned by the request (default: "txids").
Possible values are:

**basic**: return only xpub balances, without any derived addresses and transactions

**tokens**: basic + tokens (addresses) derived from the xpub, subject to tokens parameter

**tokenBalances**: basic + tokens (addresses) derived from the xpub with balances, subject to tokens parameter

**txids**: tokenBalances + list of txids, subject to from, to filter and paging

**txs**: tokenBalances + list of transaction with details, subject to from, to filter and paging


### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption1;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\GetAddressV2Request;
use \OpenAPI\OpenAPI\Models\Shared\DetailsEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAddressV2Request();
    $request->address = '321x69Cb9HZLWwAWGiUBT1U81r1zPLnEjL';
    $request->blockchain = 'bitcoin';
    $request->contract = '0xdAC17F958D2ee523a2206206994597C13D831ec7';
    $request->details = DetailsEnum::BASIC;
    $request->fromBlock = 10;
    $request->page = 1;
    $request->pageSize = 1000;
    $request->secondary = 'usd';
    $request->toBlock = 100;

    $response = $sdk->addresses->getAddressV2($request);

    if ($response->getAddressV2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBalanceHistoryV2

Returns a balance history for the specified XPUB or address

The value of sentToSelf is the amount sent from the same address to the same address or within addresses of xpub.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption1;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\GetBalanceHistoryV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBalanceHistoryV2Request();
    $request->addressOrXpub = '321x69Cb9HZLWwAWGiUBT1U81r1zPLnEjL';
    $request->blockchain = 'bitcoin';
    $request->fiatcurrency = 'usd';
    $request->fromDate = '1578391200';
    $request->groupBy = 172800;
    $request->toDate = '1599053802';

    $response = $sdk->addresses->getBalanceHistoryV2($request);

    if ($response->getBalanceHistoryV2200ApplicationJSONObjects !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getUtxov2

Returns array of unspent transaction outputs of address or xpub, applicable only for Bitcoin-type coins. By default, the list contains both confirmed and unconfirmed transactions. The query parameter confirmed=true disables return of unconfirmed transactions. The returned utxos are sorted by block height, newest blocks first. For xpubs or output descriptors, the response also contains address and derivation path of the utxo.



Unconfirmed utxos do not have field height, the field confirmations has value 0 and may contain field lockTime, if not zero.

Coinbase utxos have field coinbase set to true, however due to performance reasons only up to minimum coinbase confirmations limit (100). After this limit, utxos are not detected as coinbase.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption1;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\GetUtxov2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetUtxov2Request();
    $request->addressOrXpub = '321x69Cb9HZLWwAWGiUBT1U81r1zPLnEjL';
    $request->blockchain = 'bitcoin';
    $request->confirmed = true;

    $response = $sdk->addresses->getUtxov2($request);

    if ($response->getUtxov2200ApplicationJSONAnies !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getXpubV2

Returns balances and transactions of an xpub or output descriptor, applicable only for Bitcoin-type coins.

Blockbook supports BIP44, BIP49, BIP84 and BIP86 (Taproot) derivation schemes, using either xpubs or output descriptors (see https://github.com/bitcoin/bitcoin/blob/master/doc/descriptors.md)

Note: usedTokens always returns total number of used addresses of xpub.

Detailed documentation found here: https://github.com/trezor/blockbook/blob/master/docs/api.md#get-xpub

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption1;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\GetXpubV2Request;
use \OpenAPI\OpenAPI\Models\Shared\DetailsEnum;
use \OpenAPI\OpenAPI\Models\Shared\TokensEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetXpubV2Request();
    $request->blockchain = 'bitcoin';
    $request->details = DetailsEnum::BASIC;
    $request->fromBlock = 10;
    $request->page = 1;
    $request->pageSize = 1000;
    $request->secondary = 'usd';
    $request->toBlock = 100;
    $request->tokens = TokensEnum::USED;
    $request->xpub = 'tpubDC88gkaZi5HvJGxGDNLADkvtdpni3mLmx6vr2KnXmWMG8zfkBRggsxHVBkUpgcwPe2KKpkyvTJCdXHb1UHEWE64vczyyPQfHr1skBcsRedN';

    $response = $sdk->addresses->getXpubV2($request);

    if ($response->getXpubV2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
