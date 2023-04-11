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
     * Changes the status of the payment method.
     *
     * @remarks
     * Changes the status of the provided payment method to the specified status.
     */
    postChangeStatus(req: shared.StoredValueStatusChangeRequest, security: operations.PostChangeStatusSecurity, config?: AxiosRequestConfig): Promise<operations.PostChangeStatusResponse>;
    /**
     * Checks the balance.
     *
     * @remarks
     * Checks the balance of the provided payment method.
     */
    postCheckBalance(req: shared.StoredValueBalanceCheckRequest, security: operations.PostCheckBalanceSecurity, config?: AxiosRequestConfig): Promise<operations.PostCheckBalanceResponse>;
    /**
     * Issues a new card.
     *
     * @remarks
     * Issues a new card of the given payment method.
     */
    postIssue(req: shared.StoredValueIssueRequest, security: operations.PostIssueSecurity, config?: AxiosRequestConfig): Promise<operations.PostIssueResponse>;
    /**
     * Loads the payment method.
     *
     * @remarks
     * Loads the payment method with the specified funds.
     */
    postLoad(req: shared.StoredValueLoadRequest, security: operations.PostLoadSecurity, config?: AxiosRequestConfig): Promise<operations.PostLoadResponse>;
    /**
     * Merge the balance of two cards.
     *
     * @remarks
     * Increases the balance of the paymentmethod by the full amount left on the source paymentmethod
     */
    postMergeBalance(req: shared.StoredValueBalanceMergeRequest, security: operations.PostMergeBalanceSecurity, config?: AxiosRequestConfig): Promise<operations.PostMergeBalanceResponse>;
    /**
     * Voids a transaction.
     *
     * @remarks
     * Voids the referenced stored value transaction.
     */
    postVoidTransaction(req: shared.StoredValueVoidRequest, security: operations.PostVoidTransactionSecurity, config?: AxiosRequestConfig): Promise<operations.PostVoidTransactionResponse>;
}
