import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * The fire.com API allows businesses to automate payments between their accounts or to third parties across the UK and Europe.
 *
 * @remarks
 *
 * For added security, the API can only set up the payments in batches. These batches must be approved by an authorised user via the firework mobile app.
 *
 *
 * The process is as follows:
 *
 * **1.**Create a new batch
 *
 * **2.**Add payments to the batch
 *
 * **3.**Submit the batch for approval
 *
 * Once the batch is submitted, the authorised users will receive notifications to their firework mobile apps. They can review the contents of the batch and then approve or reject it. If approved, the batch is then processed. You can avail of enhanced security by using Dual Authorisation to verify payments if you wish. Dual Authorisation can be enabled by you when setting up your API application in firework online.
 *
 * **Batch Life Cycle Events**
 *
 * A batch webhook can be specified to receive details of all the payments as they are processed. This webhook receives notifications for every event in the batch lifecycle.
 *
 * The following events are triggered during a batch:
 *
 * **batch.opened:** Contains the details of the batch opened. Checks that the callback URL exists - unless a HTTP 200 response is returned, the callback URL will not be configured.
 *
 * **batch.item-added:** Details of the item added to the batch
 *
 * **batch.item-removed:** Details of the item removed from the batch
 *
 * **batch.cancelled:** Notifies that the batch was cancelled.
 *
 * **batch.submitted:** Notifes that the batch was submitted
 *
 * **batch.approved:** Notifies that the batch was approved.
 *
 * **batch.rejected:** Notifies that the batch was rejected.
 *
 * **batch.failed:** Notifies that the batch failed - includes the details of the failure (insufficient funds etc)
 *
 * **batch.completed:** Notifies that the batch completed successfully. Includes a summary.
 *
 * Push notifications are sent to the firework mobile app for many of these events too - these can be configured from within the app.
 *
 */
export declare class PaymentBatches {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a bank transfer payment to the batch.
     *
     * @remarks
     * There are two ways to process bank transfers - by Payee ID (**Mode 1**) or by Payee Account Details (**Mode 2**).
     *
     * **Mode 1:** Use the payee IDs of existing approved payees set up against your account. These batches can be approved in the normal manner.
     *
     * **Mode 2:** Use the account details of the payee. In the event that these details correspond to an existing approved payee, the batch can be approved as normal. If the account details are new, a batch of New Payees will automatically be created. This batch will need to be approved before the Payment batch can be approved. These payees will then exist as approved payees for future batches.
     *
     */
    addBankTransferBatchPayment(req: operations.AddBankTransferBatchPaymentRequest, config?: AxiosRequestConfig): Promise<operations.AddBankTransferBatchPaymentResponse>;
    /**
     * Add an internal transfer payment to the batch
     *
     * @remarks
     * Simply specify the source account, destination account, amount and a reference.
     */
    addInternalTransferBatchPayment(req: operations.AddInternalTransferBatchPaymentRequest, config?: AxiosRequestConfig): Promise<operations.AddInternalTransferBatchPaymentResponse>;
    /**
     * Cancel a batch
     *
     * @remarks
     * Cancels the Batch. You can only cancel a batch before it is submitted for approval (while it is in the OPEN state).
     */
    cancelBatchPayment(req: operations.CancelBatchPaymentRequest, config?: AxiosRequestConfig): Promise<operations.CancelBatchPaymentResponse>;
    /**
     * Create a new batch of payments
     *
     * @remarks
     * The fire.com API allows businesses to automate payments between their accounts or to third parties across the UK and Europe.
     *
     * For added security, the API can only set up the payments in batches. These batches must be approved by an authorised user via the firework mobile app.
     *
     *
     * The process is as follows:
     *
     * **1.**Create a new batch
     *
     * **2.**Add payments to the batch
     *
     * **3.**Submit the batch for approval
     *
     * Once the batch is submitted, the authorised users will receive notifications to their firework mobile apps. They can review the contents of the batch and then approve or reject it. If approved, the batch is then processed. You can avail of enhanced security by using Dual Authorisation to verify payments if you wish. Dual Authorisation can be enabled by you when setting up your API application in firework online.
     *
     * **Batch Life Cycle Events**
     *
     * A batch webhook can be specified to receive details of all the payments as they are processed. This webhook receives notifications for every event in the batch lifecycle.
     *
     * The following events are triggered during a batch:
     *
     * **batch.opened:** Contains the details of the batch opened. Checks that the callback URL exists - unless a HTTP 200 response is returned, the callback URL will not be configured.
     *
     * **batch.item-added:** Details of the item added to the batch
     *
     * **batch.item-removed:** Details of the item removed from the batch
     *
     * **batch.cancelled:** Notifies that the batch was cancelled.
     *
     * **batch.submitted:** Notifes that the batch was submitted
     *
     * **batch.approved:** Notifies that the batch was approved.
     *
     * **batch.rejected:** Notifies that the batch was rejected.
     *
     * **batch.failed:** Notifies that the batch failed - includes the details of the failure (insufficient funds etc)
     *
     * **batch.completed:** Notifies that the batch completed successfully. Includes a summary.
     *
     * Push notifications are sent to the firework mobile app for many of these events too - these can be configured from within the app.
     *
     * This is the first step in creating a batch payment.
     *
     */
    createBatchPayment(req: operations.CreateBatchPaymentNewBatch, config?: AxiosRequestConfig): Promise<operations.CreateBatchPaymentResponse>;
    /**
     * Remove a Payment from the Batch (Bank Transfers)
     *
     * @remarks
     * Removes a Payment from the Batch (Bank Transfers). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).
     */
    deleteBankTransferBatchPayment(req: operations.DeleteBankTransferBatchPaymentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBankTransferBatchPaymentResponse>;
    /**
     * Remove a Payment from the Batch (Internal Transfer)
     *
     * @remarks
     * Removes a Payment from the Batch (Internal Transfer). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).
     */
    deleteInternalTransferBatchPayment(req: operations.DeleteInternalTransferBatchPaymentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInternalTransferBatchPaymentResponse>;
    /**
     * List batches
     *
     * @remarks
     * Returns the list of batch with the specified types and statuses.
     *
     */
    getBatches(req: operations.GetBatchesRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchesResponse>;
    /**
     * Get details of a single Batch
     *
     * @remarks
     * Returns the details of the batch specified in the API endpoint - {batchUuid}.
     */
    getDetailsSingleBatch(req: operations.GetDetailsSingleBatchRequest, config?: AxiosRequestConfig): Promise<operations.GetDetailsSingleBatchResponse>;
    /**
     * List items in a Batch
     *
     * @remarks
     * Returns a paginated list of items in the specified batch.
     */
    getItemsBatchBankTransfer(req: operations.GetItemsBatchBankTransferRequest, config?: AxiosRequestConfig): Promise<operations.GetItemsBatchBankTransferResponse>;
    /**
     * List items in a Batch
     *
     * @remarks
     * Returns a paginated list of items in the specified batch.
     */
    getItemsBatchInternalTrasnfer(req: operations.GetItemsBatchInternalTrasnferRequest, config?: AxiosRequestConfig): Promise<operations.GetItemsBatchInternalTrasnferResponse>;
    /**
     * List Approvers for a Batch
     *
     * @remarks
     * Returns a list of approvers for this batch.
     */
    getListofApproversForBatch(req: operations.GetListofApproversForBatchRequest, config?: AxiosRequestConfig): Promise<operations.GetListofApproversForBatchResponse>;
    /**
     * Submit a batch for approval
     *
     * @remarks
     * Submits the Batch (for approval in the case of a **BANK_TRANSFER**). If this is an **INTERNAL_TRANSFER** batch, the transfers are immediately queued for processing. If this is a **BANK_TRANSFER** batch, this will trigger requests for approval to the firework mobile apps of authorised users. Once those users approve the batch, it is queued for processing.
     *
     * You can only submit a batch while it is in the OPEN state.
     *
     */
    submitBatch(req: operations.SubmitBatchRequest, config?: AxiosRequestConfig): Promise<operations.SubmitBatchResponse>;
}
