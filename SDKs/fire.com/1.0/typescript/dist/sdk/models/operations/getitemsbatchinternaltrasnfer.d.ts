import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetItemsBatchInternalTrasnferRequest extends SpeakeasyBase {
    batchUuid: string;
    limit?: number;
    offset?: number;
}
/**
 * The outcome of the attempted transaction.
 */
export declare class GetItemsBatchInternalTrasnferBatchItemsBatchItemResult extends SpeakeasyBase {
    code?: number;
    message?: string;
}
/**
 * status of the batch if internal trasnfer
 */
export declare enum GetItemsBatchInternalTrasnferBatchItemsBatchItemStatusEnum {
    Submitted = "SUBMITTED",
    Removed = "REMOVED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED"
}
export declare class GetItemsBatchInternalTrasnferBatchItemsBatchItem extends SpeakeasyBase {
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
    result?: GetItemsBatchInternalTrasnferBatchItemsBatchItemResult;
    /**
     * status of the batch if internal trasnfer
     */
    status?: GetItemsBatchInternalTrasnferBatchItemsBatchItemStatusEnum;
    /**
     * Any taxes/duty collected by fire.com for this payments (e.g. stamp duty etc). In pence or cent.
     */
    taxAmount?: number;
}
/**
 * A fire.com list object of Batch Items (Internal transfers or Bank transfers).
 */
export declare class GetItemsBatchInternalTrasnferBatchItems extends SpeakeasyBase {
    items?: GetItemsBatchInternalTrasnferBatchItemsBatchItem[];
    /**
     * total number of batches returned
     */
    total?: number;
}
export declare class GetItemsBatchInternalTrasnferResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A fire.com list object of Batch Items (Internal transfers or Bank transfers).
     */
    batchItems?: GetItemsBatchInternalTrasnferBatchItems;
}
