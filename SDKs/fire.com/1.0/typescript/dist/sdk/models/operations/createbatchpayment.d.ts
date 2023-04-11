import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The type of the batch - can be one of the listed 3
 */
export declare enum CreateBatchPaymentNewBatchTypeEnum {
    BankTransfer = "BANK_TRANSFER",
    InternalTransfer = "INTERNAL_TRANSFER"
}
/**
 * Details of the batch payment
 */
export declare class CreateBatchPaymentNewBatch extends SpeakeasyBase {
    /**
     * An optional name you give to the batch at creation time.
     */
    batchName?: string;
    /**
     * An optional POST URL that all events for this batch will be sent to.
     */
    callbackUrl?: string;
    /**
     * GBP or EUR
     */
    currency?: string;
    /**
     * An optional job number you can give to the batch to help link it to your own system.
     */
    jobNumber?: string;
    /**
     * The type of the batch - can be one of the listed 3
     */
    type?: CreateBatchPaymentNewBatchTypeEnum;
}
/**
 * Batch created successfully
 */
export declare class CreateBatchPaymentNewBatchResponse extends SpeakeasyBase {
    /**
     * A UUID for this item.
     */
    batchUuid?: string;
}
export declare class CreateBatchPaymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Batch created successfully
     */
    newBatchResponse?: CreateBatchPaymentNewBatchResponse;
}
