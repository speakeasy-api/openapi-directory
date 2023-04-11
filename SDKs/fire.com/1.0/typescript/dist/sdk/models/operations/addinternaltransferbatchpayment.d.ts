import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Details of the source account, destination account, amount and a reference.
 */
export declare class AddInternalTransferBatchPaymentBatchItemInternalTransfer extends SpeakeasyBase {
    /**
     * amount of funds to be transfered
     */
    amount?: number;
    /**
     * The account ID for the fire.com account the funds are taken from
     */
    icanFrom?: number;
    /**
     * The account ID for the fire.com account the funds are directed to
     */
    icanTo?: number;
    /**
     * The reference on the transaction
     */
    ref?: string;
}
export declare class AddInternalTransferBatchPaymentRequest extends SpeakeasyBase {
    /**
     * Details of the source account, destination account, amount and a reference.
     */
    requestBody: AddInternalTransferBatchPaymentBatchItemInternalTransfer;
    batchUuid: string;
}
/**
 * Batch payment added successfully. Note* Please use batchUuid when submitting a batch, not batchItemUuid.
 */
export declare class AddInternalTransferBatchPaymentNewBatchItemResponse extends SpeakeasyBase {
    /**
     * A Batch Item UUID for this item. Note* Do not confuse this for BatchUuid when submitting a batch.
     */
    batchItemUuid?: string;
}
export declare class AddInternalTransferBatchPaymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Batch payment added successfully. Note* Please use batchUuid when submitting a batch, not batchItemUuid.
     */
    newBatchItemResponse?: AddInternalTransferBatchPaymentNewBatchItemResponse;
}
