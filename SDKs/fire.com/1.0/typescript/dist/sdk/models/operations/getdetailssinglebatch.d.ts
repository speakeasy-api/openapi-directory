import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetDetailsSingleBatchRequest extends SpeakeasyBase {
    batchUuid: string;
}
/**
 * status of the batch object
 */
export declare enum GetDetailsSingleBatchBatchStatusEnum {
    PendingApproval = "PENDING_APPROVAL",
    Rejected = "REJECTED",
    Complete = "COMPLETE",
    Open = "OPEN",
    Cancelled = "CANCELLED",
    PendingParentBatchApproval = "PENDING_PARENT_BATCH_APPROVAL",
    ReadyForProcessing = "READY_FOR_PROCESSING",
    Processing = "PROCESSING"
}
/**
 * The type of the batch - can be one of the listed 3
 */
export declare enum GetDetailsSingleBatchBatchTypeEnum {
    InternalTransfer = "INTERNAL_TRANSFER",
    BankTransfer = "BANK_TRANSFER",
    NewPayee = "NEW_PAYEE"
}
/**
 * Returns the details of the batch specified in the API endpoint - {batchUuid}.
 */
export declare class GetDetailsSingleBatchBatch extends SpeakeasyBase {
    /**
     * An optional name you give to the batch at creation time
     */
    batchName?: string;
    /**
     * A UUID for this item.
     */
    batchUuid?: string;
    /**
     * An optional POST URL that all events for this batch will be sent to.
     */
    callbackUrl?: string;
    /**
     * All payments in the batch must be the same currency - either EUR or GBP
     */
    currency?: string;
    /**
     * The datestamp the batch was created - ISO format - e.g. 2018-04-04T00:53:21.910Z
     */
    dateCreated?: Date;
    /**
     * An optional job number you can give to the batch to help link it to your own system.
     */
    jobNumber?: string;
    /**
     * The datestamp of the last action on this batch - ISO format - e.g. 2018-04-04T10:48:53.540Z
     */
    lastUpdated?: Date;
    /**
     * Once processed, a count of the number of items that didn’t process successfully.
     */
    numberOfItemsFailed?: number;
    /**
     * A count of the number of items in the batch
     */
    numberOfItemsSubmitted?: number;
    /**
     * Once processed, a count of the number of items that processed successfully.
     */
    numberOfItemsSucceeded?: number;
    /**
     * A string describing where the batch originated - for instance the name of the API token that was used, or showing that the batch was automatically created by fire.com (in the case of a new payee batch).
     */
    sourceName?: string;
    /**
     * status of the batch object
     */
    status?: GetDetailsSingleBatchBatchStatusEnum;
    /**
     * The type of the batch - can be one of the listed 3
     */
    type?: GetDetailsSingleBatchBatchTypeEnum;
    /**
     * Once processed, a sum of the value of items that didn’t process successfully. Specified in pence or cent.
     */
    valueOfItemsFailed?: number;
    /**
     * A sum of the value of items in the batch. Specified in pence or cent.
     */
    valueOfItemsSubmitted?: number;
    /**
     * Once processed, a sum of the value of items that processed successfully. Specified in pence or cent.
     */
    valueOfItemsSucceeded?: number;
}
export declare class GetDetailsSingleBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Returns the details of the batch specified in the API endpoint - {batchUuid}.
     */
    batch?: GetDetailsSingleBatchBatch;
}
