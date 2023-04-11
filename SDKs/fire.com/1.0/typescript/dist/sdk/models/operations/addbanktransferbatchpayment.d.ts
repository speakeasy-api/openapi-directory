import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Use PAYEE_ID if you are paying existing approved payees (Mode 1).
 */
export declare enum AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum {
    PayeeId = "PAYEE_ID"
}
export declare class AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1 extends SpeakeasyBase {
    /**
     * The value of the transaction
     */
    amount?: number;
    /**
     * The Fire account ID for the fire.com account the funds are taken from.
     */
    icanFrom?: number;
    /**
     * The reference on the transaction for your records - not shown to the beneficiary.
     */
    myRef?: string;
    /**
     * The ID of the existing or automatically created payee
     */
    payeeId?: number;
    /**
     * Use PAYEE_ID if you are paying existing approved payees (Mode 1).
     */
    payeeType?: AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode1PayeeTypeEnum;
    /**
     * The reference on the transaction - displayed on the beneficiary bank statement.
     */
    yourRef?: string;
}
/**
 * Use ACCOUNT_DETAILS if you are providing account numbers/sort codes/IBANs (Mode 2). Specify the account details in the destIban, destAccountHolderName, destNsc or destAccountNumber fields as appropriate.
 */
export declare enum AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum {
    AccountDetails = "ACCOUNT_DETAILS"
}
export declare class AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2 extends SpeakeasyBase {
    /**
     * The value of the transaction
     */
    amount?: number;
    /**
     * The destination account holder name
     */
    destAccountHolderName?: string;
    /**
     * The destination Account Number if a GBP bank transfer
     */
    destAccountNumber?: string;
    /**
     * The destination IBAN if a Euro Bank transfer
     */
    destIban?: string;
    /**
     * The destination Nsc if a GBP bank transfer
     */
    destNsc?: string;
    /**
     * The Fire account ID for the fire.com account the funds are taken from.
     */
    icanFrom?: number;
    /**
     * The reference on the transaction for your records - not shown to the beneficiary.
     */
    myRef?: string;
    /**
     * Use ACCOUNT_DETAILS if you are providing account numbers/sort codes/IBANs (Mode 2). Specify the account details in the destIban, destAccountHolderName, destNsc or destAccountNumber fields as appropriate.
     */
    payeeType?: AddBankTransferBatchPaymentRequestBodyBatchItemBankTransferMode2PayeeTypeEnum;
    /**
     * The reference on the transaction - displayed on the beneficiary bank statement.
     */
    yourRef?: string;
}
export declare class AddBankTransferBatchPaymentRequest extends SpeakeasyBase {
    /**
     * Details of **Mode 1** & **Mode 2**.
     */
    requestBody: any;
    batchUuid: string;
}
/**
 * Batch payment added successfully. **Note*** Please use batchUuid when submitting a batch, not batchItemUuid.
 */
export declare class AddBankTransferBatchPaymentNewBatchItemResponse extends SpeakeasyBase {
    /**
     * A Batch Item UUID for this item. Note* Do not confuse this for BatchUuid when submitting a batch.
     */
    batchItemUuid?: string;
}
export declare class AddBankTransferBatchPaymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Batch payment added successfully. **Note*** Please use batchUuid when submitting a batch, not batchItemUuid.
     */
    newBatchItemResponse?: AddBankTransferBatchPaymentNewBatchItemResponse;
}
