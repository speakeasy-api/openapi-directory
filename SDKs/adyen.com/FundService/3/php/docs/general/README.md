# general

### Available Operations

* [postAccountHolderBalance](#postaccountholderbalance) - Get the balances of an account holder
* [postAccountHolderTransactionList](#postaccountholdertransactionlist) - Get a list of transactions
* [postDebitAccountHolder](#postdebitaccountholder) - Send a direct debit request
* [postPayoutAccountHolder](#postpayoutaccountholder) - Pay out from an account to the account holder
* [postRefundFundsTransfer](#postrefundfundstransfer) - Refund a funds transfer
* [postRefundNotPaidOutTransfers](#postrefundnotpaidouttransfers) - Refund all transactions of an account since the most recent payout
* [postSetupBeneficiary](#postsetupbeneficiary) - Designate a beneficiary account and transfer the benefactor's current balance
* [postTransferFunds](#posttransferfunds) - Transfer funds between platform accounts

## postAccountHolderBalance

Returns the account balances of an account holder. An account's balances are organized according by currencies. This mean that an account may have multiple balances: one for each currency.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AccountHolderBalanceRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostAccountHolderBalanceSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountHolderBalanceRequest();
    $request->accountHolderCode = 'provident';

    $requestSecurity = new PostAccountHolderBalanceSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postAccountHolderBalance($request, $requestSecurity);

    if ($response->accountHolderBalanceResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postAccountHolderTransactionList

Returns a list of transactions for an account holder's accounts. You can specify the accounts and transaction statuses to be included on the list. The call returns a maximum of 50 transactions for each account. To retrieve all transactions, you must make another call with the 'page' value incremented. Transactions are listed in chronological order, with the most recent transaction first.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\AccountHolderTransactionListRequest;
use \OpenAPI\OpenAPI\Models\Shared\TransactionListForAccountWrapper;
use \OpenAPI\OpenAPI\Models\Shared\TransactionListForAccount;
use \OpenAPI\OpenAPI\Models\Shared\AccountHolderTransactionListRequestTransactionStatusesEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostAccountHolderTransactionListSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new AccountHolderTransactionListRequest();
    $request->accountHolderCode = 'distinctio';
    $request->transactionListsPerAccount = [
        new TransactionListForAccountWrapper(),
        new TransactionListForAccountWrapper(),
        new TransactionListForAccountWrapper(),
        new TransactionListForAccountWrapper(),
    ];
    $request->transactionStatuses = [
        AccountHolderTransactionListRequestTransactionStatusesEnum::PENDING_FUND_TRANSFER,
        AccountHolderTransactionListRequestTransactionStatusesEnum::FEE,
        AccountHolderTransactionListRequestTransactionStatusesEnum::PENDING_FUND_TRANSFER,
    ];

    $requestSecurity = new PostAccountHolderTransactionListSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postAccountHolderTransactionList($request, $requestSecurity);

    if ($response->accountHolderTransactionListResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postDebitAccountHolder

Sends a direct debit request to an account holder's bank account. If the direct debit is successful, the funds are settled in the accounts specified in the split instructions. Adyen sends the result of the direct debit in a [`DIRECT_DEBIT_INITIATED`](https://docs.adyen.com/api-explorer/#/NotificationService/latest/post/DIRECT_DEBIT_INITIATED) notification webhook.

 To learn more about direct debits, see [Top up accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/top-up-accounts).

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\DebitAccountHolderRequest;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Shared\Split;
use \OpenAPI\OpenAPI\Models\Shared\SplitAmount;
use \OpenAPI\OpenAPI\Models\Shared\SplitTypeEnum;
use \OpenAPI\OpenAPI\Models\Operations\PostDebitAccountHolderSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new DebitAccountHolderRequest();
    $request->accountHolderCode = 'vel';
    $request->amount = new Amount();
    $request->amount->currency = 'error';
    $request->amount->value = 645894;
    $request->bankAccountUUID = 'suscipit';
    $request->description = 'iure';
    $request->merchantAccount = 'magnam';
    $request->splits = [
        new Split(),
        new Split(),
        new Split(),
        new Split(),
    ];

    $requestSecurity = new PostDebitAccountHolderSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postDebitAccountHolder($request, $requestSecurity);

    if ($response->debitAccountHolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postPayoutAccountHolder

Pays out a specified amount from an account to the bank account of account holder.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\PayoutAccountHolderRequest;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Operations\PostPayoutAccountHolderSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new PayoutAccountHolderRequest();
    $request->accountCode = 'ipsa';
    $request->accountHolderCode = 'delectus';
    $request->amount = new Amount();
    $request->amount->currency = 'tempora';
    $request->amount->value = 383441;
    $request->bankAccountUUID = 'molestiae';
    $request->description = 'minus';
    $request->merchantReference = 'placeat';

    $requestSecurity = new PostPayoutAccountHolderSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postPayoutAccountHolder($request, $requestSecurity);

    if ($response->payoutAccountHolderResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRefundFundsTransfer

Refunds funds transferred from one account to another. Both accounts must be in the same platform, but can have different account holders. 

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RefundFundsTransferRequest;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Operations\PostRefundFundsTransferSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RefundFundsTransferRequest();
    $request->amount = new Amount();
    $request->amount->currency = 'voluptatum';
    $request->amount->value = 479977;
    $request->merchantReference = 'excepturi';
    $request->originalReference = 'nisi';

    $requestSecurity = new PostRefundFundsTransferSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postRefundFundsTransfer($request, $requestSecurity);

    if ($response->refundFundsTransferResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postRefundNotPaidOutTransfers

Refunds all the transactions of an account that have taken place since the most recent payout. This request is on a account basis (as opposed to a payment basis), so only the portion of the payment that was made to the specified account is refunded. The commissions, fees, and payments to other accounts remain in the accounts to which they were sent as designated by the original payment's split details.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\RefundNotPaidOutTransfersRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostRefundNotPaidOutTransfersSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new RefundNotPaidOutTransfersRequest();
    $request->accountCode = 'recusandae';
    $request->accountHolderCode = 'temporibus';

    $requestSecurity = new PostRefundNotPaidOutTransfersSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postRefundNotPaidOutTransfers($request, $requestSecurity);

    if ($response->refundNotPaidOutTransfersResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postSetupBeneficiary

Defines a benefactor and a beneficiary relationship between two accounts. At the time of benefactor/beneficiary setup, the funds in the benefactor account are transferred to the beneficiary account, and any further payments to the benefactor account are automatically sent to the beneficiary account. A series of benefactor/beneficiaries may not exceed four beneficiaries and may not have a cycle in it.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\SetupBeneficiaryRequest;
use \OpenAPI\OpenAPI\Models\Operations\PostSetupBeneficiarySecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new SetupBeneficiaryRequest();
    $request->destinationAccountCode = 'ab';
    $request->merchantReference = 'quis';
    $request->sourceAccountCode = 'veritatis';

    $requestSecurity = new PostSetupBeneficiarySecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postSetupBeneficiary($request, $requestSecurity);

    if ($response->setupBeneficiaryResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```

## postTransferFunds

Transfers funds from one account to another account. Both accounts must be in the same platform, but can have different account holders. The transfer must include a transfer code, which should be determined by the platform, in compliance with local regulations.

### Example Usage

```php
<?php

declare(strict_types=1);
require_once 'vendor/autoload.php';

use \OpenAPI\OpenAPI\SDK;
use \OpenAPI\OpenAPI\Models\Shared\TransferFundsRequest;
use \OpenAPI\OpenAPI\Models\Shared\Amount;
use \OpenAPI\OpenAPI\Models\Operations\PostTransferFundsSecurity;
use \OpenAPI\OpenAPI\Models\Shared\SchemeBasicAuth;

$sdk = SDK::builder()
    ->build();

try {
    $request = new TransferFundsRequest();
    $request->amount = new Amount();
    $request->amount->currency = 'deserunt';
    $request->amount->value = 20218;
    $request->destinationAccountCode = 'ipsam';
    $request->merchantReference = 'repellendus';
    $request->sourceAccountCode = 'sapiente';
    $request->transferCode = 'quo';

    $requestSecurity = new PostTransferFundsSecurity();
    $requestSecurity->apiKeyAuth = 'YOUR_API_KEY_HERE';

    $response = $sdk->general->postTransferFunds($request, $requestSecurity);

    if ($response->transferFundsResponse !== null) {
        // handle response
    }
} catch (Exception $e) {
    // handle exception
}
```
