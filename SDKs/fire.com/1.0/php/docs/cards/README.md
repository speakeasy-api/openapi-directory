# cards

### Available Operations

* [blockCard](#blockcard) - Block a card
* [createNewCard](#createnewcard) - Create a new debit card.
* [getListofCardTransactions](#getlistofcardtransactions) - List Card Transactions.
* [getListofCards](#getlistofcards) - View List of Cards.
* [unblockCard](#unblockcard) - Unblock a card

## blockCard

Updates status of an existing card to block which prevents any transactions being carried out with that card.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\BlockCardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new BlockCardRequest();
    $request->cardId = 437587;

    $response = $sdk->cards->blockCard($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## createNewCard

You can create multiple debit cards which can be linked to your fire.com accounts.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\CreateNewCardNewCard;
use \OpenAPI\OpenAPI\Models\Operations\CreateNewCardNewCardAddressTypeEnum;

$sdk = SDK::builder()
    ->build();

try {
    $request = new CreateNewCardNewCard();
    $request->acceptFeesAndCharges = true;
    $request->addressType = CreateNewCardNewCardAddressTypeEnum::BUSINESS;
    $request->cardPin = '5345';
    $request->eurIcan = 2150;
    $request->gbpIcan = 2152;
    $request->userId = 3245;

    $response = $sdk->cards->createNewCard($request);

    if ($response->newCardResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListofCardTransactions

Returns a list of cards transactions related to your fire.com card.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\GetListofCardTransactionsRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new GetListofCardTransactionsRequest();
    $request->cardId = 297534;
    $request->limit = 891773;
    $request->offset = 56713;

    $response = $sdk->cards->getListofCardTransactions($request);

    if ($response->cardTransactionsv1s !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## getListofCards

Returns a list of cards related to your fire.com account.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;

$sdk = SDK::builder()
    ->build();

try {
    $response = $sdk->cards->getListofCards();

    if ($response->cards !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## unblockCard

Updates status of an existing card to unblock which means that transactions can be carried out with that card.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\Security;
use \OpenAPI\OpenAPI\Models\Operations\UnblockCardRequest;

$sdk = SDK::builder()
    ->build();

try {
    $request = new UnblockCardRequest();
    $request->cardId = 963663;

    $response = $sdk->cards->unblockCard($request);

    if ($response->statusCode === 200) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
