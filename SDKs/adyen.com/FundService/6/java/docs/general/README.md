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

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAccountHolderBalanceResponse;
import org.openapis.openapi.models.operations.PostAccountHolderBalanceSecurity;
import org.openapis.openapi.models.shared.AccountHolderBalanceRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AccountHolderBalanceRequest req = new AccountHolderBalanceRequest("provident");            

            PostAccountHolderBalanceResponse res = sdk.general.postAccountHolderBalance(req, new PostAccountHolderBalanceSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.accountHolderBalanceResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postAccountHolderTransactionList

Returns a list of transactions for an account holder's accounts. You can specify the accounts and transaction statuses to be included on the list. The call returns a maximum of 50 transactions for each account. To retrieve all transactions, you must make another call with the 'page' value incremented. Transactions are listed in chronological order, with the most recent transaction first.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostAccountHolderTransactionListResponse;
import org.openapis.openapi.models.operations.PostAccountHolderTransactionListSecurity;
import org.openapis.openapi.models.shared.AccountHolderTransactionListRequest;
import org.openapis.openapi.models.shared.AccountHolderTransactionListRequestTransactionStatusesEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.TransactionListForAccount;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.AccountHolderTransactionListRequest req = new AccountHolderTransactionListRequest("distinctio") {{
                transactionListsPerAccount = new org.openapis.openapi.models.shared.TransactionListForAccount[]{{
                    add(new TransactionListForAccount("corrupti", 847252) {{
                        accountCode = "unde";
                        page = 857946;
                    }}),
                    add(new TransactionListForAccount("deserunt", 384382) {{
                        accountCode = "vel";
                        page = 623564;
                    }}),
                    add(new TransactionListForAccount("debitis", 56713) {{
                        accountCode = "iure";
                        page = 297534;
                    }}),
                    add(new TransactionListForAccount("suscipit", 477665) {{
                        accountCode = "delectus";
                        page = 272656;
                    }}),
                }};
                transactionStatuses = new org.openapis.openapi.models.shared.AccountHolderTransactionListRequestTransactionStatusesEnum[]{{
                    add(AccountHolderTransactionListRequestTransactionStatusesEnum.PENDING_CREDIT),
                    add(AccountHolderTransactionListRequestTransactionStatusesEnum.DEPOSIT_CORRECTION_DEBITED),
                    add(AccountHolderTransactionListRequestTransactionStatusesEnum.DEBITED_REVERSED),
                    add(AccountHolderTransactionListRequestTransactionStatusesEnum.FUND_TRANSFER),
                }};
            }};            

            PostAccountHolderTransactionListResponse res = sdk.general.postAccountHolderTransactionList(req, new PostAccountHolderTransactionListSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.accountHolderTransactionListResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postDebitAccountHolder

Sends a direct debit request to an account holder's bank account. If the direct debit is successful, the funds are settled in the accounts specified in the split instructions. Adyen sends the result of the direct debit in a [`DIRECT_DEBIT_INITIATED`](https://docs.adyen.com/api-explorer/#/NotificationService/latest/post/DIRECT_DEBIT_INITIATED) notification webhook.

 To learn more about direct debits, see [Top up accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/top-up-accounts).

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostDebitAccountHolderResponse;
import org.openapis.openapi.models.operations.PostDebitAccountHolderSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.DebitAccountHolderRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.Split;
import org.openapis.openapi.models.shared.SplitAmount;
import org.openapis.openapi.models.shared.SplitTypeEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.DebitAccountHolderRequest req = new DebitAccountHolderRequest("nisi",                 new Amount("recusandae", 836079L);, "ab", "quis",                 new org.openapis.openapi.models.shared.Split[]{{
                                add(new Split(                new SplitAmount(870013L) {{
                                                    currency = "at";
                                                }};, SplitTypeEnum.VERIFICATION) {{
                                    account = "deserunt";
                                    amount = new SplitAmount(832620L) {{
                                        currency = "perferendis";
                                        value = 368241L;
                                    }};
                                    description = "sapiente";
                                    reference = "quo";
                                    type = SplitTypeEnum.COMMISSION;
                                }}),
                            }}) {{
                description = "molestiae";
            }};            

            PostDebitAccountHolderResponse res = sdk.general.postDebitAccountHolder(req, new PostDebitAccountHolderSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.debitAccountHolderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postPayoutAccountHolder

Pays out a specified amount from an account to the bank account of account holder.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostPayoutAccountHolderResponse;
import org.openapis.openapi.models.operations.PostPayoutAccountHolderSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.PayoutAccountHolderRequest;
import org.openapis.openapi.models.shared.PayoutAccountHolderRequestPayoutSpeedEnum;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.PayoutAccountHolderRequest req = new PayoutAccountHolderRequest("quod", "quod") {{
                amount = new Amount("esse", 520478L);;
                bankAccountUUID = "porro";
                description = "dolorum";
                merchantReference = "dicta";
                payoutMethodCode = "nam";
                payoutSpeed = PayoutAccountHolderRequestPayoutSpeedEnum.SAME_DAY;
            }};            

            PostPayoutAccountHolderResponse res = sdk.general.postPayoutAccountHolder(req, new PostPayoutAccountHolderSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.payoutAccountHolderResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRefundFundsTransfer

Refunds funds transferred from one account to another. Both accounts must be in the same platform, but can have different account holders. 

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRefundFundsTransferResponse;
import org.openapis.openapi.models.operations.PostRefundFundsTransferSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.RefundFundsTransferRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RefundFundsTransferRequest req = new RefundFundsTransferRequest(                new Amount("occaecati", 143353L);, "deleniti") {{
                merchantReference = "hic";
            }};            

            PostRefundFundsTransferResponse res = sdk.general.postRefundFundsTransfer(req, new PostRefundFundsTransferSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.refundFundsTransferResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postRefundNotPaidOutTransfers

Refunds all the transactions of an account that have taken place since the most recent payout. This request is on a account basis (as opposed to a payment basis), so only the portion of the payment that was made to the specified account is refunded. The commissions, fees, and payments to other accounts remain in the accounts to which they were sent as designated by the original payment's split details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostRefundNotPaidOutTransfersResponse;
import org.openapis.openapi.models.operations.PostRefundNotPaidOutTransfersSecurity;
import org.openapis.openapi.models.shared.RefundNotPaidOutTransfersRequest;
import org.openapis.openapi.models.shared.SchemeBasicAuth;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.RefundNotPaidOutTransfersRequest req = new RefundNotPaidOutTransfersRequest("optio", "totam");            

            PostRefundNotPaidOutTransfersResponse res = sdk.general.postRefundNotPaidOutTransfers(req, new PostRefundNotPaidOutTransfersSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.refundNotPaidOutTransfersResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postSetupBeneficiary

Defines a benefactor and a beneficiary relationship between two accounts. At the time of benefactor/beneficiary setup, the funds in the benefactor account are transferred to the beneficiary account, and any further payments to the benefactor account are automatically sent to the beneficiary account. A series of benefactor/beneficiaries may not exceed four beneficiaries and may not have a cycle in it.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostSetupBeneficiaryResponse;
import org.openapis.openapi.models.operations.PostSetupBeneficiarySecurity;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.SetupBeneficiaryRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.SetupBeneficiaryRequest req = new SetupBeneficiaryRequest("beatae", "commodi") {{
                merchantReference = "molestiae";
            }};            

            PostSetupBeneficiaryResponse res = sdk.general.postSetupBeneficiary(req, new PostSetupBeneficiarySecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.setupBeneficiaryResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postTransferFunds

Transfers funds from one account to another account. Both accounts must be in the same platform, but can have different account holders. The transfer must include a transfer code, which should be determined by the platform, in compliance with local regulations.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostTransferFundsResponse;
import org.openapis.openapi.models.operations.PostTransferFundsSecurity;
import org.openapis.openapi.models.shared.Amount;
import org.openapis.openapi.models.shared.SchemeBasicAuth;
import org.openapis.openapi.models.shared.TransferFundsRequest;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.TransferFundsRequest req = new TransferFundsRequest(                new Amount("modi", 186332L);, "impedit", "cum", "esse") {{
                merchantReference = "ipsum";
            }};            

            PostTransferFundsResponse res = sdk.general.postTransferFunds(req, new PostTransferFundsSecurity() {{
                apiKeyAuth = "YOUR_API_KEY_HERE";
            }});

            if (res.transferFundsResponse != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
