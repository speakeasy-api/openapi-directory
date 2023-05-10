# SDK

### Available Operations

* [deleteKeyKey](#deletekeykey)
* [getAccountId](#getaccountid) - Get account balance
* [getBlock](#getblock) - Access detailed block information
* [getBlockId](#getblockid) - Get information about particular block
* [getBlockIdTransaction](#getblockidtransaction) - Get transaction count within block
* [getBlockIdTransactionIndex](#getblockidtransactionindex) - Get information about particular transaction within block
* [getBlockchain](#getblockchain) - Get a list of supported blockchains
* [getBlockchainId](#getblockchainid) - Get information about blockchain woth given id
* [getContractId](#getcontractid) - Get contract balance
* [getErc20](#geterc20) - Get token information such as name, total amount in circulation, etc
* [getErc20Address](#geterc20address) - Get information amout token balance in the account
* [getKey](#getkey)
* [getTransactionHash](#gettransactionhash) - Get information about transaction by the transaction hash value
* [getTransactionHashReceipt](#gettransactionhashreceipt) - Get receipt detail information
* [getVersion](#getversion) - Get API version info
* [getWallet](#getwallet) - Get current account balance
* [getWalletAccount](#getwalletaccount)
* [getWalletAccountId](#getwalletaccountid) - Get account balance
* [options](#options)
* [optionsAccount](#optionsaccount)
* [optionsAccountId](#optionsaccountid)
* [optionsBlock](#optionsblock)
* [optionsBlockId](#optionsblockid)
* [optionsBlockIdTransaction](#optionsblockidtransaction)
* [optionsBlockIdTransactionIndex](#optionsblockidtransactionindex)
* [optionsBlockchain](#optionsblockchain)
* [optionsBlockchainId](#optionsblockchainid)
* [optionsContract](#optionscontract)
* [optionsContractId](#optionscontractid)
* [optionsEcho](#optionsecho)
* [optionsErc20](#optionserc20)
* [optionsErc20Address](#optionserc20address)
* [optionsKey](#optionskey)
* [optionsKeyKey](#optionskeykey)
* [optionsTransaction](#optionstransaction)
* [optionsTransactionHash](#optionstransactionhash)
* [optionsTransactionHashReceipt](#optionstransactionhashreceipt)
* [optionsVersion](#optionsversion)
* [optionsWallet](#optionswallet)
* [optionsWalletAccount](#optionswalletaccount)
* [optionsWalletAccountId](#optionswalletaccountid)
* [optionsWalletAccountIdPay](#optionswalletaccountidpay)
* [postAccount](#postaccount) - Create new account
* [postContract](#postcontract) - Create a new smart contract
* [postContractId](#postcontractid) - Call the contract
* [postErc20](#posterc20)
* [postErc20Address](#posterc20address) - Transfer tokens to another account
* [postKey](#postkey)
* [postTransaction](#posttransaction) - Create a new transaction. Transfer Ether between accounts
* [postWallet](#postwallet) - Create personal wallet
* [postWalletAccount](#postwalletaccount)
* [postWalletAccountIdContract](#postwalletaccountidcontract)
* [postWalletAccountIdErc20](#postwalletaccountiderc20)
* [postWalletAccountIdPay](#postwalletaccountidpay) - Send payment from the account held within the wallet

## deleteKeyKey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\DeleteKeyKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DeleteKeyKeyRequest();
    $request->key = 'provident';

    $response = $sdk->sdk->deleteKeyKey($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getAccountId

Get account balance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetAccountIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetAccountIdRequest();
    $request->id = 'bd9d8d69-a674-4e0f-867c-c8796ed151a0';

    $requestSecurity = new GetAccountIdSecurity();
    $requestSecurity->key2 = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getAccountId($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlock

Access detailed block information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetBlockSecurity();
    $requestSecurity->key2 = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getBlock($requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlockId

Get information about particular block

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlockIdRequest();
    $request->id = '5dfc2ddf-7cc7-48ca-9ba9-28fc816742cb';

    $requestSecurity = new GetBlockIdSecurity();
    $requestSecurity->key2 = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getBlockId($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlockIdTransaction

Get transaction count within block

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockIdTransactionRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockIdTransactionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlockIdTransactionRequest();
    $request->id = '73920592-9396-4fea-b596-eb10faaa2352';

    $requestSecurity = new GetBlockIdTransactionSecurity();
    $requestSecurity->key2 = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getBlockIdTransaction($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlockIdTransactionIndex

Get information about particular transaction within block

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockIdTransactionIndexRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockIdTransactionIndexSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlockIdTransactionIndexRequest();
    $request->id = 'c5955907-aff1-4a3a-afa9-467739251aa5';
    $request->index = 'odit';

    $requestSecurity = new GetBlockIdTransactionIndexSecurity();
    $requestSecurity->key2 = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getBlockIdTransactionIndex($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlockchain

Get a list of supported blockchains

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockchainSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new GetBlockchainSecurity();
    $requestSecurity->key2 = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getBlockchain($requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getBlockchainId

Get information about blockchain woth given id

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockchainIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetBlockchainIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetBlockchainIdRequest();
    $request->id = 'c3f5ad01-9da1-4ffe-b8f0-97b0074f1547';

    $requestSecurity = new GetBlockchainIdSecurity();
    $requestSecurity->key2 = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getBlockchainId($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getContractId

Get contract balance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetContractIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetContractIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetContractIdRequest();
    $request->id = '1b5e6e13-b99d-4488-a1e9-1e450ad2abd4';

    $requestSecurity = new GetContractIdSecurity();
    $requestSecurity->key2 = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getContractId($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getErc20

Get token information such as name, total amount in circulation, etc

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getErc20();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getErc20Address

Get information amout token balance in the account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetErc20AddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetErc20AddressRequest();
    $request->address = '13550 Rhoda Heights';

    $response = $sdk->sdk->getErc20Address($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getKey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetKeyRequest();
    $request->token = 'alias';

    $response = $sdk->sdk->getKey($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionHash

Get information about transaction by the transaction hash value

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionHashRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionHashSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionHashRequest();
    $request->hash = 'fugit';

    $requestSecurity = new GetTransactionHashSecurity();
    $requestSecurity->key2 = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getTransactionHash($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getTransactionHashReceipt

Get receipt detail information

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionHashReceiptRequest;
use \OpenAPI\OpenAPI\Models\Operations\GetTransactionHashReceiptSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetTransactionHashReceiptRequest();
    $request->hash = 'dolorum';

    $requestSecurity = new GetTransactionHashReceiptSecurity();
    $requestSecurity->key2 = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->getTransactionHashReceipt($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getVersion

Get API version info

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getVersion();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWallet

Get current account balance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getWallet();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWalletAccount

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->getWalletAccount();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getWalletAccountId

Get account balance

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\GetWalletAccountIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetWalletAccountIdRequest();
    $request->id = '94bb4f63-c969-4e9a-befa-77dfb14cd66a';

    $response = $sdk->sdk->getWalletAccountId($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## options

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->options();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsAccount

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->optionsAccount();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsAccountId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OptionsAccountIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptionsAccountIdRequest();
    $request->id = 'e395efb9-ba88-4f3a-a699-7074ba4469b6';

    $response = $sdk->sdk->optionsAccountId($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsBlock

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->optionsBlock();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsBlockId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OptionsBlockIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptionsBlockIdRequest();
    $request->id = 'e2141959-890a-4fa5-a3e2-516fe4c8b711';

    $response = $sdk->sdk->optionsBlockId($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsBlockIdTransaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OptionsBlockIdTransactionRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptionsBlockIdTransactionRequest();
    $request->id = 'e5b7fd2e-d028-4921-8ddc-692601fb576b';

    $response = $sdk->sdk->optionsBlockIdTransaction($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsBlockIdTransactionIndex

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OptionsBlockIdTransactionIndexRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptionsBlockIdTransactionIndexRequest();
    $request->id = '0d5f0d30-c5fb-4b25-8705-3202c73d5fe9';
    $request->index = 'facilis';

    $response = $sdk->sdk->optionsBlockIdTransactionIndex($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsBlockchain

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->optionsBlockchain();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsBlockchainId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OptionsBlockchainIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptionsBlockchainIdRequest();
    $request->id = '90c28909-b3fe-449a-8d9c-bf48633323f9';

    $response = $sdk->sdk->optionsBlockchainId($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsContract

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->optionsContract();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsContractId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OptionsContractIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptionsContractIdRequest();
    $request->id = 'b77f3a41-0067-44eb-b692-80d1ba77a89e';

    $response = $sdk->sdk->optionsContractId($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsEcho

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->optionsEcho();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsErc20

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->optionsErc20();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsErc20Address

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OptionsErc20AddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptionsErc20AddressRequest();
    $request->address = '942 Makenzie Union';

    $response = $sdk->sdk->optionsErc20Address($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsKey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->optionsKey();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsKeyKey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OptionsKeyKeyRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptionsKeyKeyRequest();
    $request->key = 'eius';

    $response = $sdk->sdk->optionsKeyKey($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsTransaction

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->optionsTransaction();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsTransactionHash

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OptionsTransactionHashRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptionsTransactionHashRequest();
    $request->hash = 'aspernatur';

    $response = $sdk->sdk->optionsTransactionHash($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsTransactionHashReceipt

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OptionsTransactionHashReceiptRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptionsTransactionHashReceiptRequest();
    $request->hash = 'perferendis';

    $response = $sdk->sdk->optionsTransactionHashReceipt($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsVersion

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->optionsVersion();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsWallet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->optionsWallet();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsWalletAccount

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->optionsWalletAccount();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsWalletAccountId

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OptionsWalletAccountIdRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptionsWalletAccountIdRequest();
    $request->id = '3ce5e6a9-5d8a-40d4-86ce-2af7a73cf3be';

    $response = $sdk->sdk->optionsWalletAccountId($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## optionsWalletAccountIdPay

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\OptionsWalletAccountIdPayRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new OptionsWalletAccountIdPayRequest();
    $request->id = '453f870b-326b-45a7-b429-cdb1a8422bb6';

    $response = $sdk->sdk->optionsWalletAccountIdPay($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAccount

Create new account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostAccountSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new PostAccountSecurity();
    $requestSecurity->key2 = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->postAccount($requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContract

Create a new smart contract

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->postContract();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postContractId

Call the contract

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostContractIdRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostContractIdSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostContractIdRequest();
    $request->id = '79d23227-15bf-40cb-b1e3-1b8b90f3443a';

    $requestSecurity = new PostContractIdSecurity();
    $requestSecurity->key2 = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->postContractId($request, $requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postErc20

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->postErc20();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postErc20Address

Transfer tokens to another account

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostErc20AddressRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostErc20AddressRequest();
    $request->address = '00590 Skiles Shores';

    $response = $sdk->sdk->postErc20Address($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postKey

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->postKey();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTransaction

Create a new transaction. Transfer Ether between accounts

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostTransactionSecurity;

$sdk = SDK::builder()
    ->build();

try {
    $requestSecurity = new PostTransactionSecurity();
    $requestSecurity->key2 = 'YOUR_API_KEY_HERE';

    $response = $sdk->sdk->postTransaction($requestSecurity);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWallet

Create personal wallet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->postWallet();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWalletAccount

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->sdk->postWalletAccount();

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWalletAccountIdContract

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWalletAccountIdContractRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWalletAccountIdContractRequest();
    $request->id = 'f4b92187-9fce-4953-b73e-f7fbc7abd74d';

    $response = $sdk->sdk->postWalletAccountIdContract($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWalletAccountIdErc20

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWalletAccountIdErc20Request;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWalletAccountIdErc20Request();
    $request->id = 'd39c0f5d-2cff-47c7-8a45-626d436813f1';

    $response = $sdk->sdk->postWalletAccountIdErc20($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postWalletAccountIdPay

Send payment from the account held within the wallet

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Operations\PostWalletAccountIdPayRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PostWalletAccountIdPayRequest();
    $request->id = '6d9f5fce-6c55-4614-ac3e-250fb008c42e';

    $response = $sdk->sdk->postWalletAccountIdPay($request);

    if ($response->empty !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
