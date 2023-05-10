# nft

## Overview

 

### Available Operations

* [getNFTMetaV2](#getnftmetav2) - Get NFT metadata V2

## getNFTMetaV2

Only works on Ethereum-like blockchains (currently ethereum and bsc)

Get metadata like name or description for a specified contract and token ID.
The resulting data contains a link which can then be used to request the IPFS link for the actual image to display in a block explorer for example.

Note: this route was implemented by us and is therefore not yet supported by existing blockbook clients.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption1;
use \OpenAPI\OpenAPI\Models\Shared\SecurityOption2;
use \OpenAPI\OpenAPI\Models\Operations\GetNFTMetaV2Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetNFTMetaV2Request();
    $request->blockchain = 'ethereum';
    $request->nftContract = '0x05756b07725dA0101813475333f372a844789Dc2';
    $request->nftTokenId = '22';

    $response = $sdk->nft->getNFTMetaV2($request);

    if ($response->getNFTMetaV2200ApplicationJSONObject !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
