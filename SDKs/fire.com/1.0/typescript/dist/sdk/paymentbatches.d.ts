import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PaymentBatches {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addBankTransferBatchPayment - Add payment for an bank transfers
     *
     * There are two ways to process bank transfers - by Payee ID (**Mode 1**) or by Payee Account Details (**Mode 2**).
     *
     * **Mode 1:** Use the payee IDs of existing approved payees set up against your account. These batches can be approved in the normal manner.
     *
     * **Mode 2:** Use the account details of the payee. In the event that these details correspond to an existing approved payee, the batch can be approved as normal. If the account details are new, a batch of New Payees will automatically be created. This batch will need to be approved before the Payment batch can be approved. These payees will then exist as approved payees for future batches.
     *
    **/
    addBankTransferBatchPayment(req: operations.AddBankTransferBatchPaymentRequest, config?: AxiosRequestConfig): Promise<operations.AddBankTransferBatchPaymentResponse>;
    /**
     * addInternalTransferBatchPayment - Add payment for an internal transfers
     *
     * Simply specify the source account, destination account, amount and a reference.
    **/
    addInternalTransferBatchPayment(req: operations.AddInternalTransferBatchPaymentRequest, config?: AxiosRequestConfig): Promise<operations.AddInternalTransferBatchPaymentResponse>;
    /**
     * cancelBatchPayment - Cancel a batch
     *
     * Cancels the Batch. You can only cancel a batch before it is submitted for approval (while it is in the OPEN state).
    **/
    cancelBatchPayment(req: operations.CancelBatchPaymentRequest, config?: AxiosRequestConfig): Promise<operations.CancelBatchPaymentResponse>;
    /**
     * createBatchPayment - Create a new bath of payments
     *
     * This is the first step in creating a batch payment.
    **/
    createBatchPayment(req: operations.CreateBatchPaymentRequest, config?: AxiosRequestConfig): Promise<operations.CreateBatchPaymentResponse>;
    /**
     * deleteBankTransferBatchPayment - Remove a Payment from the Batch (Bank Transfers)
     *
     * Removes a Payment from the Batch (Bank Transfers). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).
    **/
    deleteBankTransferBatchPayment(req: operations.DeleteBankTransferBatchPaymentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBankTransferBatchPaymentResponse>;
    /**
     * deleteInternalTransferBatchPayment - Remove a Payment from the Batch (Internal Transfer)
     *
     * Removes a Payment from the Batch (Internal Transfer). You can only remove payments before the batch is submitted for approval (while it is in the OPEN state).
    **/
    deleteInternalTransferBatchPayment(req: operations.DeleteInternalTransferBatchPaymentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInternalTransferBatchPaymentResponse>;
    /**
     * getBatches - List batches
     *
     * Returns the list of batch with the specified types and statuses.
     *
    **/
    getBatches(req: operations.GetBatchesRequest, config?: AxiosRequestConfig): Promise<operations.GetBatchesResponse>;
    /**
     * getDetailsSingleBatch - Get details of a single Batch
     *
     * Returns the details of the batch specified in the API endpoint - {batchUuid}.
    **/
    getDetailsSingleBatch(req: operations.GetDetailsSingleBatchRequest, config?: AxiosRequestConfig): Promise<operations.GetDetailsSingleBatchResponse>;
    /**
     * getItemsBatchBankTransfer - List items in a Batch
     *
     * Returns a paginated list of items in the specified batch.
    **/
    getItemsBatchBankTransfer(req: operations.GetItemsBatchBankTransferRequest, config?: AxiosRequestConfig): Promise<operations.GetItemsBatchBankTransferResponse>;
    /**
     * getItemsBatchInternalTrasnfer - List items in a Batch
     *
     * Returns a paginated list of items in the specified batch.
    **/
    getItemsBatchInternalTrasnfer(req: operations.GetItemsBatchInternalTrasnferRequest, config?: AxiosRequestConfig): Promise<operations.GetItemsBatchInternalTrasnferResponse>;
    /**
     * getListofApproversForBatch - List Approvers for a Batch
     *
     * Returns a list of approvers for this batch.
    **/
    getListofApproversForBatch(req: operations.GetListofApproversForBatchRequest, config?: AxiosRequestConfig): Promise<operations.GetListofApproversForBatchResponse>;
    /**
     * submitBatch - Submit a batch for approval
     *
     * Submits the Batch (for approval in the case of a **BANK_TRANSFER**). If this is an **INTERNAL_TRANSFER** batch, the transfers are immediately queued for processing. If this is a **BANK_TRANSFER** batch, this will trigger requests for approval to the firework mobile apps of authorised users. Once those users approve the batch, it is queued for processing.
     *
     * You can only submit a batch while it is in the OPEN state.
     *
    **/
    submitBatch(config?: AxiosRequestConfig): Promise<operations.SubmitBatchResponse>;
}
