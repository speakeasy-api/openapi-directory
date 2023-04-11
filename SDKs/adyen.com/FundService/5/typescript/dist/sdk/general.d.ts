import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class General {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get the balances of an account holder
     *
     * @remarks
     * Returns the account balances of an account holder. An account's balances are organized according by currencies. This mean that an account may have multiple balances: one for each currency.
     */
    postAccountHolderBalance(req: shared.AccountHolderBalanceRequest, security: operations.PostAccountHolderBalanceSecurity, config?: AxiosRequestConfig): Promise<operations.PostAccountHolderBalanceResponse>;
    /**
     * Get a list of transactions
     *
     * @remarks
     * Returns a list of transactions for an account holder's accounts. You can specify the accounts and transaction statuses to be included on the list. The call returns a maximum of 50 transactions for each account. To retrieve all transactions, you must make another call with the 'page' value incremented. Transactions are listed in chronological order, with the most recent transaction first.
     */
    postAccountHolderTransactionList(req: shared.AccountHolderTransactionListRequest, security: operations.PostAccountHolderTransactionListSecurity, config?: AxiosRequestConfig): Promise<operations.PostAccountHolderTransactionListResponse>;
    /**
     * Send a direct debit request
     *
     * @remarks
     * Sends a direct debit request to an account holder's bank account. If the direct debit is successful, the funds are settled in the accounts specified in the split instructions. Adyen sends the result of the direct debit in a [`DIRECT_DEBIT_INITIATED`](https://docs.adyen.com/api-explorer/#/NotificationService/latest/post/DIRECT_DEBIT_INITIATED) notification webhook.
     *
     *  To learn more about direct debits, see [Top up accounts](https://docs.adyen.com/marketplaces-and-platforms/classic/top-up-accounts).
     */
    postDebitAccountHolder(req: shared.DebitAccountHolderRequest, security: operations.PostDebitAccountHolderSecurity, config?: AxiosRequestConfig): Promise<operations.PostDebitAccountHolderResponse>;
    /**
     * Pay out from an account to the account holder
     *
     * @remarks
     * Pays out a specified amount from an account to the bank account of account holder.
     */
    postPayoutAccountHolder(req: shared.PayoutAccountHolderRequest, security: operations.PostPayoutAccountHolderSecurity, config?: AxiosRequestConfig): Promise<operations.PostPayoutAccountHolderResponse>;
    /**
     * Refund a funds transfer
     *
     * @remarks
     * Refunds funds transferred from one account to another. Both accounts must be in the same platform, but can have different account holders.
     */
    postRefundFundsTransfer(req: shared.RefundFundsTransferRequest, security: operations.PostRefundFundsTransferSecurity, config?: AxiosRequestConfig): Promise<operations.PostRefundFundsTransferResponse>;
    /**
     * Refund all transactions of an account since the most recent payout
     *
     * @remarks
     * Refunds all the transactions of an account that have taken place since the most recent payout. This request is on a account basis (as opposed to a payment basis), so only the portion of the payment that was made to the specified account is refunded. The commissions, fees, and payments to other accounts remain in the accounts to which they were sent as designated by the original payment's split details.
     */
    postRefundNotPaidOutTransfers(req: shared.RefundNotPaidOutTransfersRequest, security: operations.PostRefundNotPaidOutTransfersSecurity, config?: AxiosRequestConfig): Promise<operations.PostRefundNotPaidOutTransfersResponse>;
    /**
     * Designate a beneficiary account and transfer the benefactor's current balance
     *
     * @remarks
     * Defines a benefactor and a beneficiary relationship between two accounts. At the time of benefactor/beneficiary setup, the funds in the benefactor account are transferred to the beneficiary account, and any further payments to the benefactor account are automatically sent to the beneficiary account. A series of benefactor/beneficiaries may not exceed four beneficiaries and may not have a cycle in it.
     */
    postSetupBeneficiary(req: shared.SetupBeneficiaryRequest, security: operations.PostSetupBeneficiarySecurity, config?: AxiosRequestConfig): Promise<operations.PostSetupBeneficiaryResponse>;
    /**
     * Transfer funds between platform accounts
     *
     * @remarks
     * Transfers funds from one account to another account. Both accounts must be in the same platform, but can have different account holders. The transfer must include a transfer code, which should be determined by the platform, in compliance with local regulations.
     */
    postTransferFunds(req: shared.TransferFundsRequest, security: operations.PostTransferFundsSecurity, config?: AxiosRequestConfig): Promise<operations.PostTransferFundsResponse>;
}
