import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The status of the batch if internal transfer.
 */
export declare enum GetBatchesBatchStatusEnum {
    Submitted = "SUBMITTED",
    Removed = "REMOVED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
/**
 * The type of the batch. Can be one of the 3 listed enums.
 */
export declare enum GetBatchesBatchTypesEnum {
    InternalTransfer = "INTERNAL_TRANSFER",
    BankTransfer = "BANK_TRANSFER",
    NewPayee = "NEW_PAYEE"
}
/**
 * You can order the batches by ascending or descending order.
 */
export declare enum GetBatchesOrderEnum {
    Desc = "DESC",
    Asc = "ASC"
}
/**
 * You can order the batches by date. No other options at this time
 */
export declare enum GetBatchesOrderByEnum {
    Date = "DATE"
}
export declare class GetBatchesRequest extends SpeakeasyBase {
    /**
     * The status of the batch if internal transfer.
     */
    batchStatus?: GetBatchesBatchStatusEnum;
    /**
     * The type of the batch. Can be one of the 3 listed enums.
     */
    batchTypes?: GetBatchesBatchTypesEnum;
    /**
     * You can order the batches by ascending or descending order.
     */
    order?: GetBatchesOrderEnum;
    /**
     * You can order the batches by date. No other options at this time
     */
    orderBy?: GetBatchesOrderByEnum;
}
/**
 * The outcome of the attempted transaction.
 */
export declare class GetBatchesBatchItemsBatchItemResult extends SpeakeasyBase {
    code?: number;
    message?: string;
}
/**
 * status of the batch if internal trasnfer
 */
export declare enum GetBatchesBatchItemsBatchItemStatusEnum {
    Submitted = "SUBMITTED",
    Removed = "REMOVED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
export declare class GetBatchesBatchItemsBatchItem extends SpeakeasyBase {
    /**
     * The amount of funds to send. In cent or pence
     */
    amount?: number;
    /**
     * The amount of the transfer after fees and taxes. in pence or cent.
     */
    amountAfterCharges?: number;
    /**
     * A UUID for this item.
     */
    batchItemUuid?: string;
    /**
     * The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z
     */
    dateCreated?: Date;
    /**
     * The fee charged by fire.com for the payment. In pence or cent.
     */
    feeAmount?: number;
    /**
     * The Fire account ID of the source account.
     */
    icanFrom?: number;
    /**
     * The Fire account ID for the fire.com account the funds are sent to.
     */
    icanTo?: number;
    /**
     * The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z
     */
    lastUpdated?: Date;
    /**
     * The reference on the transaction.
     */
    ref?: string;
    /**
     * The ID of the resulting payment in your account. Can be used to retrieve the transaction using the https://api.fire.com/business/v1/accounts/{accountId}/transactions/{refId} endpoint.
     */
    refId?: number;
    /**
     * The outcome of the attempted transaction.
     */
    result?: GetBatchesBatchItemsBatchItemResult;
    /**
     * status of the batch if internal trasnfer
     */
    status?: GetBatchesBatchItemsBatchItemStatusEnum;
    /**
     * Any taxes/duty collected by fire.com for this payments (e.g. stamp duty etc). In pence or cent.
     */
    taxAmount?: number;
}
/**
 * List all batches.
 */
export declare class GetBatchesBatchItems extends SpeakeasyBase {
    items?: GetBatchesBatchItemsBatchItem[];
    /**
     * total number of batches returned
     */
    total?: number;
}
export declare class GetBatchesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * List all batches.
     */
    batchItems?: GetBatchesBatchItems;
}
